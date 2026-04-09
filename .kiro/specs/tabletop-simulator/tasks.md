# Implementation Plan: Tabletop Simulator

## Overview

Incremental implementation of a browser-based 2D tabletop simulator in ClojureScript using shadow-cljs, Reagent, and Tailwind CSS. Each task builds on the previous, wiring everything together at the end.

## Tasks

- [x] 1. Project scaffold and core state
  - Initialize shadow-cljs project with Reagent and Tailwind CSS dependencies
  - Create `src/tabletop/state.cljs` with the app-state atom and initial state shape (`:view`, `:table`, `:components`, `:hand`, `:context-menu`, `:error`)
  - Create `src/tabletop/core.cljs` entry point that mounts the app
  - Create `src/tabletop/components/app.cljs` top-level router that switches between `:start` and `:table` views
  - _Requirements: 1.1, 1.2_

- [x] 2. Pure logic — shuffle, dice, and state helpers
  - [x] 2.1 Implement Fisher-Yates shuffle in `src/tabletop/logic/shuffle.cljs`
    - Export `shuffle-vec` that takes a vector and returns a shuffled vector
    - _Requirements: 3.1, 5.7_

  - [ ]* 2.2 Write property test for shuffle (Property 9)
    - **Property 9: Shuffle preserves card set**
    - **Validates: Requirements 5.7**

  - [x] 2.3 Implement deck factory functions in `src/tabletop/logic/shuffle.cljs`
    - `make-standard-deck` — builds 52-card vector (4 suits × 13 ranks) with UUIDs, then shuffles
    - `make-custom-deck` — same but with caller-supplied suits, ranks, and color
    - _Requirements: 3.1, 4.4_

  - [ ]* 2.4 Write property tests for deck factories (Properties 1, 3)
    - **Property 1: Standard deck completeness**
    - **Property 3: Custom deck completeness**
    - **Validates: Requirements 3.1, 3.4, 4.4**

  - [x] 2.5 Implement dice roll logic in `src/tabletop/logic/dice.cljs`
    - `make-die` — returns a die map with `:faces N` and `:result nil`
    - `roll-die` — returns die with `:result` set to a uniform random integer in [1, N]
    - _Requirements: 3.3, 6.1, 6.2, 6.3_

  - [ ]* 2.6 Write property tests for dice (Properties 2, 11)
    - **Property 2: Die initial state invariant**
    - **Property 11: Die roll result is in valid range**
    - **Validates: Requirements 3.3, 6.1, 6.2, 6.3**

- [x] 3. Deck customizer validation
  - [x] 3.1 Implement `validate-deck-config` in `src/tabletop/logic/validation.cljs`
    - Returns nil on valid config; returns error map on invalid (empty/whitespace labels)
    - _Requirements: 4.1, 4.2, 4.5_

  - [ ]* 3.2 Write property test for deck config validation (Property 4)
    - **Property 4: Deck config validation rejects empty labels**
    - **Validates: Requirements 4.5**

- [x] 4. State transition helpers
  - [x] 4.1 Implement component state helpers in `src/tabletop/state.cljs`
    - `add-component` — conj a component onto `:components`
    - `remove-component` — remove by id from `:components`
    - `move-component` — update `:x` and `:y` for a component by id
    - `toggle-card-face` — toggle `:face-up?` for a card by id
    - `move-card-to-hand` — remove card from `:components`, conj onto `:hand`
    - `move-card-to-table` — remove card from `:hand`, conj onto `:components` at given [x y]
    - `draw-top-card` — pop top card from deck's `:cards`, conj onto `:hand`
    - `shuffle-deck` — apply `shuffle-vec` to deck's `:cards`
    - `flip-deck` — toggle `:face-up?` on every card in deck's `:cards`
    - `pan-table` — update `:pan-x` and `:pan-y` by delta
    - `zoom-table` — update `:zoom` clamped to [0.5, 2.0]
    - _Requirements: 5.1–5.9, 6.4, 7.1–7.5_

  - [ ]* 4.2 Write property tests for state transitions (Properties 5, 6, 7, 8, 10, 12, 13, 14)
    - **Property 5: Move updates position without side effects**
    - **Property 6: Card face toggle is an involution**
    - **Property 7: Card table ↔ hand round-trip**
    - **Property 8: Draw top card transfers correctly**
    - **Property 10: Flip deck is an involution**
    - **Property 12: Pan updates viewport offset**
    - **Property 13: Zoom is always within bounds**
    - **Property 14: Remove eliminates component**
    - **Validates: Requirements 5.1–5.9, 6.4, 7.1–7.5**

- [x] 5. Checkpoint — Ensure all logic tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 6. Serialization and save-file validation
  - [x] 6.1 Implement `serialize-state` and `deserialize-state` in `src/tabletop/logic/serialization.cljs`
    - Serialize extracts `:table`, `:components`, `:hand` and adds `"version": 1`
    - Deserialize parses JSON and merges into app state
    - _Requirements: 2.1, 2.2, 8.1–8.4_

  - [x] 6.2 Implement `validate-save-file` in `src/tabletop/logic/validation.cljs`
    - Checks presence of `version`, `table`, `components`, `hand`; validates types and structure
    - Returns nil on valid; returns descriptive error string on invalid
    - _Requirements: 1.4, 1.5_

  - [ ]* 6.3 Write property test for serialization round-trip (Property 15)
    - **Property 15: Serialization round-trip**
    - **Validates: Requirements 8.1, 8.2, 8.3, 8.4, 1.4**

- [x] 7. Start screen UI
  - [x] 7.1 Implement `src/tabletop/components/start_screen.cljs`
    - Render "New Game" and "Load Game" buttons
    - "New Game" resets state to empty table and sets `:view :table`
    - "Load Game" triggers a hidden `<input type="file">` click, reads file, calls `validate-save-file`, then either restores state or sets `:error`
    - Display `:error` inline when present
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 8. Table canvas with pan and zoom
  - [x] 8.1 Implement `src/tabletop/components/table.cljs`
    - Outer viewport div with `overflow: hidden`
    - Inner world div with CSS `transform: translate(panX, panY) scale(zoom)`
    - `pointerdown` on empty area starts pan; `pointermove` calls `pan-table`; `pointerup` ends pan
    - `wheel` event calls `zoom-table` clamped to [0.5, 2.0]
    - Render all `:components` as children of the world div
    - _Requirements: 7.1, 7.2, 7.3_

- [x] 9. Context menu component
  - Implement `src/tabletop/components/context_menu.cljs`
  - Floating div rendered at pointer position with a list of `{:label :action}` items
  - Dismissed on click-outside or Escape key
  - _Requirements: 5.5, 7.4_

- [x] 10. Card and Deck components
  - [x] 10.1 Implement `src/tabletop/components/card.cljs`
    - Render rank + suit when face-up; back pattern when face-down
    - `pointerdown` starts drag; `pointermove` calls `move-component`; `pointerup` ends drag
    - Double-click calls `toggle-card-face`
    - Right-click opens context menu with "Remove"
    - _Requirements: 5.1, 5.2, 7.4, 7.5_

  - [x] 10.2 Implement `src/tabletop/components/deck.cljs`
    - Render as stacked card-shaped divs showing card count
    - Draggable (same pointer event pattern as card)
    - Right-click opens context menu with "Draw Top Card" (disabled when empty), "Shuffle", "Flip Deck"
    - Empty deck renders placeholder
    - _Requirements: 5.5, 5.6, 5.7, 5.8, 5.9_

- [x] 11. Die component
  - Implement `src/tabletop/components/die.cljs`
  - Render die type label and current `:result` (or neutral state when nil)
  - Click calls `roll-die` and updates state
  - Draggable without triggering roll (drag vs click distinguished by pointer movement threshold)
  - Right-click opens context menu with "Remove"
  - _Requirements: 6.1, 6.3, 6.4, 7.4, 7.5_

- [x] 12. Hand area
  - Implement `src/tabletop/components/hand.cljs`
  - Fixed strip at bottom of viewport displaying `:hand` cards face-up
  - Cards dragged from table into hand area call `move-card-to-hand`
  - Cards dragged from hand back to table call `move-card-to-table`
  - _Requirements: 5.3, 5.4_

- [x] 13. Component panel and Deck Customizer
  - [x] 13.1 Implement `src/tabletop/components/component_panel.cljs`
    - Sidebar listing "Add Standard Deck", "Add Custom Deck", and each die type
    - "Add Standard Deck" calls `make-standard-deck` and `add-component`
    - "Add Custom Deck" opens the deck customizer modal
    - Die buttons call `make-die` and `add-component`
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [x] 13.2 Implement `src/tabletop/components/deck_customizer.cljs`
    - Modal form with 4 suit inputs (max 20 chars), 13 rank inputs (max 10 chars), color palette (8+ colors)
    - Inline validation via `validate-deck-config` on confirm
    - Confirm calls `make-custom-deck` and `add-component`; Cancel closes modal
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

- [x] 14. Save game
  - Add "Save Game" button to the table view toolbar
  - On click, call `serialize-state`, convert to JSON string, and trigger a browser download of `tabletop-save.json`
  - State is not mutated by the save action
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 15. Wire everything together
  - [x] 15.1 Update `src/tabletop/components/app.cljs` to render start screen or table view based on `:view`
    - Compose table view from table canvas, component panel, hand area, save button, and context menu
    - _Requirements: 1.1, 1.2_

  - [x] 15.2 Ensure context menu state is wired through all components that need it
    - Right-click on card, deck, and die all open the shared context menu component
    - Click-outside and Escape dismiss it
    - _Requirements: 5.5, 7.4_

  - [x] 15.3 Ensure drag-to-hand and drag-from-hand detection is wired between table and hand components
    - Detect when a dragged card's pointer position overlaps the hand area and call the appropriate state transition
    - _Requirements: 5.3, 5.4_

- [x] 16. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Each task references specific requirements for traceability
- Property tests use `clojure.test.check` with a minimum of 100 iterations per property
- Each property test file includes a comment: `; Feature: tabletop-simulator, Property N: <title>`

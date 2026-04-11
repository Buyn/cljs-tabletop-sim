# Tasks

## Status Key
- [x] Done
- [ ] Not started
- [~] In progress

---

## Completed

- [x] Project scaffold — shadow-cljs, Reagent, Tailwind CSS, core entry point, app router
- [x] Pure logic
  - [x] `shuffle.cljs` — Fisher-Yates `shuffle-vec`, `make-standard-deck`, `make-custom-deck`
  - [x] `dice.cljs` — `make-die` (random initial result), `roll-die`
  - [x] `validation.cljs` — `validate-deck-config`, `validate-save-file`
  - [x] `serialization.cljs` — `serialize-state`, `deserialize-state`
- [x] State (`state.cljs`)
  - [x] App state atom with initial shape
  - [x] Pure helpers: `add-component`, `remove-component`, `move-component`, `move-card-to-hand`, `move-card-to-table`, `pan-table`, `zoom-table`
  - [x] Effectful wrappers: `add-component!`, `remove-component!`, `move-component!`, etc.
  - [x] Selection: `set-selection!`, `clear-selection!`, `add-to-selection!`
  - [x] Clipboard: `copy-objects-to-list!`, `copy-single-to-list!`, `paste-from-list!`, `paste-to-hand!`
  - [x] Dispatch system: `perform-action` multimethod, `dispatch!`, `dispatch-selection!`
  - [x] Action methods: `[:deck :shuffle/draw-to-hand/draw-to-table/flip/remove]`, `[:card :flip/remove]`, `[:die :roll/remove]`
  - [x] `component-actions` multimethod with `common-actions` (Copy, Remove)
- [x] UI components
  - [x] `start_screen.cljs` — new/load game, error display
  - [x] `table.cljs` — viewport, pan (middle-click), zoom, drag-select (left-click), paste (right-click + Ctrl+V)
  - [x] `hand.cljs` — hand strip, collapse animation, hover zoom, drag-to-table, `hand-drop-zone?`
  - [x] `card.cljs` — render, drag, group drag, shift-select, double-click flip, right-click menu
  - [x] `die.cljs` — render (24×24px), drag, click-to-roll, right-click menu
  - [x] `deck.cljs` — render (stack + count badge), drag, group drag, right-click menu
  - [x] `context_menu.cljs` — floating menu, click-outside + Escape dismiss
  - [x] `component_panel.cljs` — sidebar: add decks/dice, save/load game
  - [x] `deck_customizer.cljs` — modal: suit/rank inputs, color palette, validation

---

## Outstanding

- [ ] Property-based tests (`test.check`, 100 iterations each)
  - [ ] P1 — Standard deck completeness (`shuffle_test.cljs`)
  - [ ] P2 — Custom deck completeness (`shuffle_test.cljs`)
  - [ ] P3 — Deck config validation rejects empty labels (`validation_test.cljs`)
  - [ ] P4 — Die initial result in [1, N] (`dice_test.cljs`)
  - [ ] P5 — Die roll range [1, N] (`dice_test.cljs`)
  - [ ] P6 — Move has no side effects (`state_test.cljs`)
  - [ ] P7 — Card face toggle is an involution (`state_test.cljs`)
  - [ ] P8 — Flip deck is an involution (`state_test.cljs`)
  - [ ] P9 — Shuffle preserves card set (`shuffle_test.cljs`)
  - [ ] P10 — Draw top card transfers correctly (`state_test.cljs`)
  - [ ] P11 — Card table ↔ hand round-trip (`state_test.cljs`)
  - [ ] P12 — Pan updates viewport offset (`state_test.cljs`)
  - [ ] P13 — Zoom always within bounds (`state_test.cljs`)
  - [ ] P14 — Remove eliminates component (`state_test.cljs`)
  - [ ] P15 — Serialization round-trip (`serialization_test.cljs`)

- [ ] Requirement gaps to consider
  - [ ] Req 6.3 — Die initial state: spec says random result on creation (implemented); tasks.md previously said `nil` (now corrected)
  - [ ] Req 7.1 — Drag-select clears previous selection on new drag (currently additive — decide intended behavior)
  - [ ] Req 5.4 — Drag card from hand: currently uses `pointerup` position; verify correct table coordinate calculation accounting for pan/zoom

---

## Test File Structure

```
test/tabletop/logic/
  shuffle_test.cljs        — P1, P2, P9
  dice_test.cljs           — P4, P5
  validation_test.cljs     — P3
  serialization_test.cljs  — P15
  state_test.cljs          — P6–P8, P10–P14
```

Each test file includes:
```clojure
;; Feature: tabletop-simulator, Property N: <title>
```

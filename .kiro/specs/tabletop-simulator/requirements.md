# Requirements

## Introduction

A browser-based tabletop simulator built with ClojureScript, shadow-cljs, Reagent, and Tailwind CSS. A solo player can set up and play card and dice games on a 2D virtual table. No backend, no multiplayer, no physics, no custom asset uploads.

## Glossary

- **Table** — the main 2D play area where components are placed and manipulated.
- **Component** — any object on the table: a Deck, a Card, or a Die.
- **Deck** — an ordered collection of Cards. Standard: 52 cards (4 suits × 13 ranks). Custom: user-defined suits, ranks, and face color.
- **Card** — a single playing card. Has a face-up and face-down state.
- **Die** — a single die with a fixed face count (d4, d6, d8, d10, d12, d20, d100).
- **Hand** — a private strip at the bottom of the viewport holding Cards face-up.
- **Selection** — a set of component IDs that are acted on together.
- **Copy List** — a clipboard holding a snapshot of copied components.
- **Game State** — the complete serializable snapshot of the table (components, hand, viewport).
- **Save File** — a JSON file downloaded to the local filesystem containing a serialized Game State.

## Requirements

### 1. Session Start

1. On load the app shows a start screen with "New Game" and "Load Game".
2. "New Game" initializes an empty table and transitions to the table view.
3. "Load Game" prompts for a local JSON file.
4. A valid Save File restores the Game State and transitions to the table view.
5. An invalid file shows an inline error and stays on the start screen.

### 2. Save Game

1. "Save Game" serializes the current Game State to JSON and downloads it as `tabletop-save.json`.
2. The serialization includes all component positions, face states, roll results, deck compositions, and hand contents.
3. Saving does not mutate state or interrupt the session.
4. Serializing then deserializing any valid Game State produces a deeply equal Game State.
5. All component positions, face states, roll results, deck compositions, and hand contents are preserved.
### 3. Add Components

1. "Add Standard Deck" places a new shuffled 52-card deck on the table.
2. "Add Custom Deck" opens the Deck Customizer.
3. Selecting a die type places a new die of that type on the table with a random initial roll result.
4. Multiple decks and dice of the same type may be added in one session.

### 4. Deck Customization

1. The Deck Customizer opens as a modal overlay.
2. It presents 4 suit fields (max 20 chars each) and 13 rank fields (max 10 chars each), pre-filled with standard values (♠ ♥ ♦ ♣ / A 2 … K).
3. The player chooses:
   - a face-up card background color,
   - a face-down card background color,
   - a card text color,
   from a fixed palette of 9 swatches.
4. Confirming validates all fields:
   - any empty or whitespace-only label shows an inline per-field error,
   - all suit labels must be unique,
   - all rank labels must be unique,
   and blocks submission on failure.
5. On valid confirmation, a shuffled 52-card custom deck is placed at a fixed position on the table.
6. The deck stores its suits, ranks, and color so it can be identified as custom.
7. "Cancel" closes the modal without creating a deck.
8. The player specifies the total number of cards in the deck.
9. If rank values are not fully specified, remaining cards are auto-filled with incremental numeric values.
10. Each suit has an associated color selector displayed next to its symbol input.
11. The chosen suit color is used when rendering that suit on cards.

### 5. Card Manipulation

1. Dragging a Card moves it in real time.
2. Double-clicking a Card toggles face-up / face-down.
3. Dragging a Card into the Hand area moves it from the table to the hand; while dragging over the hand the card visually shrinks to hand scale (scale 0.33 from top-left).
4. Dragging a Card from the Hand to the table moves it back onto the table at the drop position.
5. Dropping a Card onto a Deck merges it into that deck.
6. Right-clicking a Deck shows a context menu: "Draw to Table", "Draw to Hand", "Shuffle", "Flip Deck", "Copy", "Remove".
7. "Draw to Table" moves the top card from the deck onto the table face-up, placed to the right of the deck.
8. "Draw to Hand" moves the top card from the deck into the hand.
9. "Shuffle" randomizes the order of all cards in the deck.
10. "Flip Deck" toggles face-up/face-down on every card in the deck.
11. "Draw to Table" and "Draw to Hand" are disabled (hidden) when the deck is empty.
12. Right-clicking a Card shows: "Flip", "Copy", "Remove".
13. Ctrl+C while dragging a card copies it to the copy list.
14. Ctrl+X while dragging a card copies it and removes it from the table.
15. Selecting multiple components and right-clicking shows a "Group" action that merges selected cards into a deck (or into an existing selected deck).

### 6. Card Appearance

1. A face-up card shows its rank and suit centered on a colored background.
2. A face-down card shows a blue hatched pattern on a dark background.
3. A selected card is highlighted with a cyan ring.
4. A Deck renders as a stacked visual (three offset layers) with the deck color and a card-count badge.
5. An empty Deck renders as a dashed outline placeholder labeled "Empty".
8. A face-up card must not be transparent; it must have a solid background color.
9. By default, a face-up card uses a light background with dark text.
10. The face-down card background color must be explicitly defined (not transparent).
11. In a standard deck:
    - Spades (♠) and Clubs (♣) render in black,
    - Hearts (♥) and Diamonds (♦) render in red.

### 7. Dice

1. Clicking a Die rolls it: generates a uniform random integer in [1, N] and displays it immediately.
2. A newly placed die always shows a random initial roll result — never empty.
3. Dragging a Die moves it without triggering a roll.
4. Right-clicking a Die shows: "Roll", "Copy", "Remove".

### 8. Table Interaction

1. Left-click drag on empty table draws a rubber-band selection rectangle; releasing selects all intersecting components.
2. Middle-click drag pans the viewport.
3. Scroll zooms the viewport, clamped to [0.5, 2.0], centered on the cursor.
4. Right-clicking empty table shows a context menu with "Paste".

### 9. Selection and Clipboard

1. Shift-clicking a component adds it to the selection; plain click clears the selection.
2. Selected components are highlighted with a cyan ring.
3. The highlight persists when a context menu is opened via right-click.
4. Context menu actions (Flip, Roll, Remove, Copy) apply to the entire selection when the right-clicked object is part of it.
5. Dragging any selected component moves all selected components together (delta-based).
6. Dragging a selected component into the hand moves all selected components to the hand.
7. Ctrl+C while dragging copies the dragged component to the copy list.
8. Ctrl+X while dragging copies and removes the dragged component.
9. Ctrl+V pastes the copy list: into the hand if the cursor is over the hand, otherwise onto the table at the cursor position.

### 10. Hand Behavior

1. The hand strip is fixed at the bottom of the viewport.
   - When neither the strip nor any card in it is hovered, the hand body slides down by ~90%, leaving only a thin edge visible.
   - Cards remain visible above the hand and are not clipped; approximately half of each card’s height remains visible.
   - When the hand or any card is hovered, the hand returns to its full visible position.
2. Cards in the hand are centered horizontally and arranged as compactly as possible:
   - Cards avoid overlapping if there is sufficient horizontal space.
   - If space is limited, cards overlap uniformly.
   - No unnecessary gaps are left between cards.
   - Layout density only changes when interaction (e.g., hover) requires cards to move.
3. When a card is hovered it scales up 3× in place (transform-origin: bottom center) without moving.
4. The scaled card must not visually cover its neighbors:
   - Neighboring cards shift outward just enough to accommodate the enlarged card.
   - The expanded edge of the hovered card meets but does not overlap adjacent cards.
   - Cards only move as much as necessary; the layout remains as compact as possible.
5. Card visibility is prioritized based on proximity to the hovered card:
   - Cards closest to the hovered card must remain clearly visible with minimal overlap.
   - Cards farther from the hovered card may be increasingly overlapped to preserve space.
   - Overlap is redistributed dynamically so that nearer cards are revealed at the expense of farther ones.
   - No empty gaps are introduced; the layout remains visually continuous and compact.
6. Z-order is determined by proximity to the hovered card: the closest neighbor renders on top of farther ones; the hovered card is always topmost.
7. Cards in the hand can be dragged horizontally to reorder them; releasing within the hand strip inserts the card at the nearest slot.
8. While dragging a card:
   - If the bottom of the dragged card leaves the hand area, the card visually transitions to table scale.
   - If any draggable component is hovered over the hand area during drag, it becomes eligible to enter the hand on drop.
9. Releasing a dragged hand card outside the hand strip moves it onto the table at the drop position with table scale applied.

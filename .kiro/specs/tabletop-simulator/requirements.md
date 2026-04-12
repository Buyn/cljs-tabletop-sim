# Requirements

## Introduction

A browser-based tabletop simulator built with ClojureScript, shadow-cljs, Reagent, and Tailwind CSS. A solo player can set up and play card and dice games on a 2D virtual table. No backend, no multiplayer, no physics, no custom asset uploads.

## Glossary

- **Table** — the main 2D play area where components are placed and manipulated.
- **Component** — any object on the table: a Deck, a Card, or a Die.
- **Deck** — an ordered stack (LIFO) of Cards where the top card is the last inserted and the first drawn.
- **Card** — a single playing card. Has a face-up and face-down state.
- **Die** — a single die with a fixed face count (d4, d6, d8, d10, d12, d20, d100).
- **Hand** — a private strip at the bottom of the viewport holding Cards face-up.
- **Selection** — a set of component IDs that are acted on together.
- **Copy List** — a clipboard holding a snapshot of copied components.
- **Game State** — the complete serializable snapshot of the table (components, hand, viewport).
- **Save File** — a JSON file downloaded to the local filesystem containing a serialized Game State.
- **Tile Image** — an image split into a grid of tiles that can be placed on the table as individual components.
- **Tile Piece** — a single rectangular fragment of a Tile Image.

## Requirements

### 1. Session Start

1. On load the app shows a start screen with "New Game" and "Load Game".
2. "New Game" initializes an empty table and transitions to the table view.
3. "Load Game" prompts for a local JSON file.
4. A valid Save File restores the Game State and transitions to the table view.
5. An invalid file shows an inline error and stays on the start screen.

### 2. Save Game

1. "Save Game" serializes the current Game State to JSON and downloads it as `tabletop-save.json`.
2. The serialization includes:
   - component positions,
   - face states,
   - roll results,
   - deck compositions,
   - hand contents,
   - tile metadata:
     - source,
     - grid size,
     - tile index,
     - global crop,
     - per-tile crop,
     - shape,
     - corner radius.
3. Saving does not mutate state or interrupt the session.

### 3. Add Components

1. "Add Standard Deck" places a new shuffled 52-card deck on the table.
2. "Add Custom Deck" opens the Deck Customizer.
3. Selecting a die type places a new die of that type on the table with a random initial roll result.
4. Multiple decks and dice of the same type may be added in one session.

### 3A. Tile Images

1. The main menu includes a new section: "Add Tile Image".

2. Selecting it opens a non-modal draggable panel:
   - The panel can be dragged by its title bar.
   - It does not block interaction with the table.
   - A close ("×") button in the title bar closes the panel.

---

#### Tile Source

3. The panel allows selecting an image source:
   - A URL to an online image, or
   - A local file.

---

#### Global Image Cropping

4. The player may define outer margins for the source image:
   - Top, Bottom, Left, Right.
   - These areas are excluded before tile slicing.
   - All tile calculations are based on the cropped image.

---

#### Tile Grid

5. The player defines grid size:
   - Number of tiles horizontally.
   - Number of tiles vertically.

6. The image is split into equal rectangular regions after cropping.

---

#### Per-Tile Cropping (Inner Borders)

7. The player may define inner borders applied to every tile:
   - Top, Bottom, Left, Right.
   - These areas are removed from each tile after slicing.
   - Values are shared across all tiles.

---

#### Tile Selection

8. The player may optionally specify a list of tile indices:
   - If empty, all tiles are added.
   - If specified, only selected tiles are added.
   - Format:
     - Comma-separated values (e.g., `1,2,5`)
     - Ranges using `-` (e.g., `1-4`)
     - Mixed (e.g., `1,3-5,7`)
   - Duplicates are allowed and result in multiple copies.

9. Tile indexing:
   - Row-major order (left to right, top to bottom).
   - Starts from 1.

---

#### Tile Shape

10. Tile shape is configurable and defined relative to the tile center:

   - **Rectangle (default)** — full tile bounds.
   - **Ellipse / Circle** — inscribed within the tile rectangle.
   - **Hexagon** — centered and inscribed within the tile bounds.

11. Shape affects:
   - Rendering mask,
   - Hit detection,
   - Visual overlap behavior.

---

#### Corner Rounding

12. Optional corner rounding:
   - Applies only to rectangular tiles.
   - Radius is configurable.
   - Rounding is applied after all cropping.

---

#### Placement

13. On confirmation:
   - Selected tiles are added to the table.
   - They are placed adjacent, preserving spatial relationships.

14. A 1×1 grid is valid:
   - The full image becomes a single tile.

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
5. Dropping a Card onto any overlapping region of a Deck merges it into that deck, placing it on top.
6. Right-clicking a Deck shows a context menu: "Draw to Table", "Draw to Hand", "Shuffle", "Flip Deck", "Copy", "Remove".
7. "Draw to Table" moves the top card from the deck onto the table face-up, placed to the right of the deck.
7.1 The drawn card is always taken from the top of the deck.
8. "Draw to Hand" moves the top card from the deck into the hand.
9. "Shuffle" randomizes the order of all cards in the deck.
10. "Flip Deck" toggles face-up/face-down on every card in the deck.
11. "Draw to Table" and "Draw to Hand" are disabled (hidden) when the deck is empty.
12. Right-clicking a Card shows: "Flip", "Copy", "Remove".
13. Ctrl+C while dragging a card copies it to the copy list.
14. Ctrl+X while dragging a card copies it and removes it from the table.
15. Selecting multiple components and right-clicking shows a "Group" action that merges multiple Cards and/or Decks into a deck (or into an existing selected single deck).

### 5A. Deck Interaction (Advanced Behavior)

1. Dragging a Card over any part of a Deck and releasing it places the card on top of that deck.
2. Any overlap between a Card and a Deck during drop is sufficient to trigger insertion into the deck.
3. Cards added to a deck are always placed on top unless explicitly specified otherwise.
4. The top card of a deck is always the first one drawn.

5. Dragging one Deck over another merges them:
   - The dragged deck is placed on top of the target deck.
   - Any overlap between decks triggers merging.

6. Grouping multiple Cards and/or Decks always produces a single Deck:
   - All cards are merged into one stack.
   - Deck order is preserved based on grouping order (last = top).

7. A Deck with:
   - 1 card automatically converts into a Card.
   - 0 cards is removed from the table.

8. Right-clicking a Deck includes additional actions:
   - "Split Deck (2)" — splits the deck into two equal halves, creating a new deck next to it.
   - "Split Deck (3)" — splits the deck into three equal parts, creating two new decks next to it.
   - "Draw Bottom Card" — removes and returns the bottom card instead of the top one.

9. Splitting rules:
   - Cards are divided as evenly as possible.
   - New decks appear adjacent to the original deck.

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

### 6A. Tile Piece Appearance

1. A Tile Piece renders as a fragment of its source image.

2. Each Tile Piece stores:
   - Source image reference (URL or local),
   - Grid configuration,
   - Tile index,
   - Outer crop (global margins),
   - Inner crop (per-tile borders),
   - Shape type,
   - Corner radius (if applicable).

3. Tile Pieces:
   - Do not have face-up / face-down states.
   - Respect their shape via masking (clip-path or equivalent).

4. Shape rules:
   - Rectangle → full bounds.
   - Ellipse → inscribed oval.
   - Hexagon → centered symmetric hex.

5. Visual continuity:
   - Adjacent tiles from the same source align seamlessly (after cropping).

6. Tile Pieces support:
   - Dragging,
   - Selection,
   - Grouping,
   - Copy / paste,
   - Hand interaction.
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
5. New components (Decks, Dice) are placed at:
   - the last middle-click position, if available,
   - otherwise at the center of the viewport.

### 8A. Deck Drag Behavior

1. Short click-and-drag on a Deck (less than 1 second):
   - Does not move the deck.
   - Instead draws the top card for dragging.

2. Long press (≥ 1 second) on a Deck:
   - Enables dragging of the entire deck.

3. This behavior prevents accidental deck movement and prioritizes card interaction.

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
10. Tile Pieces can be moved into the hand and back to the table:
   - They behave identically to Cards in the hand.
   - Scaling and layout rules apply the same way.

## Design Principles

1. All deck operations follow intuitive physical card behavior.
2. "Top of deck" is always the most recently added card.
3. Any visual overlap implies interaction (merge, drop, combine).
4. Actions prioritize fluid gameplay over strict precision.
5. All component positions, face states, roll results, deck compositions, and hand contents are preserved.
6. Serializing then deserializing any valid Game State produces a deeply equal Game State.
7. Tile Pieces preserve their visual continuity when placed adjacent.
8. Tile Image configuration must be fully reconstructible from saved state.
9. Tile transformations (crop, shape, borders) must be deterministic and reproducible.
10. Tile rendering must match saved state exactly after load.
11. Shape-based tiles must preserve intuitive interaction and selection behavior.

## Code Principles
1. The code must be reliable, modular, without unnecessary repetition and functional.
2. Follow the best functional code standards for clojour and clojour script.

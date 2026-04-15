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
- **Component File** — a JSON file containing one or more components for reuse or import.
- **Tile Image** — an image split into a grid of tiles that can be placed on the table as individual components.
- **Tile Piece** — a single rectangular fragment of a Tile Image.

## Requirements
### 1. Session Start

1. On load the app shows a start screen with "New Game" and "Load Game".
2. "New Game" initializes an empty table and transitions to the table view.
3. "Load Game" prompts for a local JSON file.
4. A valid Save File restores the Game State and transitions to the table view.
5. An invalid file shows an inline error and stays on the start screen.

### 2. JSON serialisation
#### Save Game

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

#### Component Export (Save Component / Group)

1. Any component or selected group of components must support a context menu action:
   - "Save Component"

2. When triggered:
   - The selected component(s) are serialized into a JSON file.
   - The file format must be identical to Save File format, but may contain only:
     - components
     - (optionally) hand if relevant

3. The exported file:
   - Must be downloadable by the browser.
   - Must not modify current session state.

4. If multiple components are selected:
   - They are saved together as a single component set.
   - Relative positions between components must be preserved.

5. The exported file must be compatible with:
   - "Import Component"
   - Full "Load Game" (as partial state)

#### Component Import

1. The main menu must include a action:
   - "Import Component"

2. When triggered:
   - The user selects a JSON file.

3. The file may contain:
   - A full Save File, OR
   - A partial component export

4. On successful load:
   - Components are added to the current session (no reset).
   - Existing state is preserved.

5. Placement rules:
   - Components are placed relative to:
     - The last middle-click position, if available
     - Otherwise center of viewport

6. Relative positioning:
   - Imported components must preserve their internal layout.

7. Invalid or malformed data:
   - Must be ignored safely.
   - Valid components in the file should still be imported.

8. Hand data (if present):
   - Cards are added to the current hand.

9. No UI blocking:
   - Import must not interrupt the session.

10. Importing a full Save File:
   - Treated as a component set
   - Does NOT replace current state

### 3. Add Components

1. "Add Standard Deck" places a new shuffled 52-card deck on the table.
2. "Add Custom Deck" opens the Deck Customizer.
3. Selecting a die type places a new die of that type on the table with a random initial roll result.
4. Multiple decks and dice of the same type may be added in one session.

### 3A. Tile Images

1. The main menu includes a new section: "Add Tile Image".

2. Selecting it opens a panel following the global panel rules (non-modal, draggable, closable).:
   - The panel can be dragged by its title bar.
   - It does not block interaction with the table.
   - A close ("×") button in the title bar closes the panel, cancel creation.


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
1. The Deck Customizer opens as a non-modal draggable panel.
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

### 5. Components Behavior
#### All component Manipulation
1. All component context menus must include:
   - "Lock / Unlock"
   - "Bring to Front"
   - "Send to Back"
   - "Save Component"

#### Card Manipulation
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
13. "C" while dragging a card copies it to the copy list.
14. "X" while dragging a card copies it and removes it from the table.
15. Selecting multiple components and right-clicking shows a "Group" action that merges multiple Cards and/or Decks into a deck (or into an existing selected single deck).

#### Deck Interaction (Advanced Behavior)
1. Dragging a Card over any part of a Deck and releasing it places the card on top of that deck.
1. Dragging a Deck over any part Card of a and releasing it places the card on bottom of that deck.
2. Any overlap between a Card and a Deck during drop is sufficient to trigger insertion into the deck.
3. Cards added to a deck are always placed on top unless explicitly specified otherwise.
4. The top card of a deck is always the first one drawn.

5. Drag and drop one Deck over another merges them:
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

10. Single-click on a Deck places card  onto the table:
   - The card becomes a table component immediately.
   - the card appears to the right of the deck.

#### Grouping Layout Behavior for not Cards and/or not Decks components
1. When grouping not Cards and/or not Decks components:
   - components do not stack
   - All resulting components must be repositioned around a computed group center.
   - The group center is defined as the average position of all grouped components.
2. Layout rules:
   - Components must not overlap.
   - Components must be placed as compactly as possible.
   - Minimal spacing between components must be preserved.
3. Placement strategy:
   - Components are arranged in a grid or radial layout around the group center.
   - Layout must prioritize:
     - No intersections,
     - Visual compactness,
     - Stable and predictable positioning.
4. The resulting grouped structure must feel like a physically stacked or neatly arranged set.

#### Deck Drag Behavior
1. Immediate drag (no hold delay):
   - Instantly draws the top card from the deck.
   - The top card is removed from the deck.
   - That card immediately becomes the dragged object (face-down).

2. Long press (≥ 1 second):
   - Enables dragging of the entire deck.

3. This behavior prioritizes card interaction and eliminates delay when drawing cards.

#### Hand Behavior
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

### 6. Components Appearance
#### 6.1 Card Appearance

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

#### 6.2 Tile Piece Appearance

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
1A. Increment / decrement behavior:
- Increment wraps: max → 1
- Decrement wraps: 1 → max

Example for d6:
- Increment: 4 → 5 → 6 → 1 → 2
- Decrement: 5 → 4 → 3 → 2 → 1 → 6
2. A newly placed die always shows a random initial roll result — never empty.
3. Dragging a Die moves it without triggering a roll.
4. Right-clicking a Die shows: "Roll", "Copy", "Remove".

### 8. Table Interaction
1. Left-click drag on empty table draws a rubber-band selection rectangle; releasing selects all intersecting components.
2. Middle-click drag pans the viewport.
3. Scroll zooms the viewport, clamped to [0.1, 10.0], centered on the cursor.
  3.1 Scroll zoom behavior:
    - Zoom must always be centered on the mouse cursor position.
    - The point under the cursor before zoom must remain under the cursor after zoom.
  3.2 Implementation rule:
    - Zoom must be calculated relative to world coordinates, not absolute screen coordinates.
    - Camera pan must be adjusted during zoom to preserve cursor anchoring.
  3.3 This applies to:
    - Zoom in (scroll up),
    - Zoom out (scroll down).
  3.4 Result:
    - Zooming feels like scaling the world toward or away from the cursor.
4. Right-clicking empty table shows a context menu with "Paste".
5. All New components (Decks, Dice, etc) are placed at:
   - the last middle-click position, if available,
   - otherwise at the center of the viewport.

### 8B. Camera Zoom Consistency
1. Both zoom-in and zoom-out operations must:
   - Preserve cursor-relative positioning,
   - Adjust camera pan dynamically.
2. No zoom operation should:
   - Snap to center,
   - Use fixed viewport origin.
3. The camera must behave as if:
   - The cursor is "anchored" to the world,
   - And the world scales around that anchor point.

### 9. Selection and Clipboard
1. Shift-clicking a component adds it to the selection; plain click clears the selection.
2. Selected components are highlighted with a cyan ring.
3. The highlight persists when a context menu is opened via right-click.
4. Context menu actions (Flip, Roll, Remove, Copy) apply to the entire selection when the right-clicked object is part of it.
5. Dragging any selected component moves all selected components together (delta-based).
6. Dragging a selected component into the hand moves all selected components to the hand.
7. "C" while dragging copies the dragged component to the copy list.
8. "X" while dragging copies and removes the dragged component.
9. "V" pastes the copy list: into the hand if the cursor is over the hand, otherwise onto the table at the cursor position.
10. Exporting:
   - "Save Component" applies to:
     - Selected components,
     - Dragged component,
     - Component under cursor.

## Input & Controls System
### 1 General Principles
1. All UI panels must be:
   - Non-modal,
   - Draggable by their title bar,
   - Closable via a "×" button in the top-right corner.
2. Panels must not block interaction with the table.
3. All actions must work on:
   - Selected components,
   - Dragged component(s),
   - Component under cursor (as if selected).

### 2 Keybinding System
1. All keybindings must be:
   - Defined in a separate configuration file,
   - Not hardcoded in source code.

2. Keybinding configuration must support:
   - Editing,
   - Saving to file,
   - Loading from file.

3. A new main menu section **"Settings"** must exist with:
   - "Configure Keybindings"
   - "Save Settings"
   - "Load Settings"
   - "General Settings"

4. "General Settings" opens a separate:
   - Non-modal,
   - Draggable panel.

### 3 Core Controls
#### Rotation
- `W` — rotate clockwise
- `R` — rotate counter-clockwise

Rules:
1. Applies to all components except Dice.
2. Rotation step is configurable (default 45°).
3. Rotation step is defined in General Settings.

Dice behavior:
- `R` — increment value by 1
- `W` — decrement value by 1

#### Flip
- `A` — flip component (card or deck)

#### Hand ↔ Table
- `1–0` — move component from hand to table at cursor
- `Q` — move component from table to hand

---

#### Actions
- `T` — roll die / shuffle deck
- `H` — lock / unlock component
Lock behavior:
1. Locked component:
   - Cannot be selected,
   - Cannot be dragged or moved,
   - Cannot be part of selection.
2. Still allowed all other actions:
   - Context menu actions,
   - Actions targeting it directly,
   - Interaction Actions,
   - drag events used for not moved action (example: a locked deck with a short “drag” event will give up one card, but will ignore a long “pull” event, since it would cause the need to move the deck),
   - Serialization / saving.
3. Lock applies to ALL component types:
   - Cards,
   - Decks,
   - Dice,
   - Tile Pieces.
4. Lock state must always be respected consistently across:
   - Input system,
   - Drag system,
   - Selection system.

5. Lock state is preserved in Game State.
- `G` — group selected components
- `z` — scale down component
- `Z` — scale up component
- `o` — move component to bottom (back)
- `O` — move component to top (front)
Z-order rules:
1. Affects rendering order only.
2. Applies to:
   - Dragged,
   - Selected,
   - Component under cursor.
3. Does not change logical grouping or deck structure.

#### Clipboard
- `C` — copy
- `X` — cut
- `V` — paste

Rules:
1. Copy (`C`):
   - Adds target component(s) to the Copy List.
   - Does not modify the original.
2. Cut (`X`):
   - First copies the target component(s) into the Copy List.
   - Then removes the component(s) from the table or hand.
   - This is equivalent to performing Copy followed by Remove.
3. Paste (`V`):
   - Inserts components from the Copy List:
     - Into the hand if cursor is over the hand,
     - Otherwise onto the table at cursor position.
4. Works on:
   - Selected components,
   - Dragged component,
   - Component under cursor.
5. Order of operations must always be:
   Copy → then Remove (for Cut).

#### Camera Movement
- `Space` — enable fast camera pan

Rules:
1. Moves camera at 5× speed of mouse drag. In the opposite direction to mouse movement.

2. Works even while:
   - Dragging component(s),
   - Having active selection.

#### Deletion
- `Del` — remove component(s)

Rules:
1. Applies in priority order:
   - Dragged component(s),
   - Selected components,
   - Component under cursor.
2. If multiple components are selected, all are removed.
3. Locked components cannot be removed via selection or cursor.
### 4 Properties Editor
- `M` — open Properties Editor

Input actions for:
1. Selected components
2. Component under cursor

Behavior:
1. Opens a non-modal draggable panel.
2. Displays the current serialized state of the selected component(s).
   - The content must match exactly the structure used in Save Files.
   - If no component is selected, displays an empty structure: [].
3. The editor always reflects the real current state that would be saved.
4. The panel includes:
   - A large editable text area,
   - "Apply" button.
5. On Apply:
   - The edited data is deserialized,
   - The component is replaced as if loaded from save.

### 5 Interaction Priority
Input actions must resolve in the following priority:

1. Dragged component(s)
2. Selected components
3. Component under cursor
4. No target → no-op

## Interaction Model
### Target Resolution Priority
All actions resolve targets in the following order:

1. Dragged component(s)
2. Selected components
3. Component under cursor
4. No target → no-op

This rule applies uniformly across:
- Keyboard actions,
- Context menu actions,
- Mouse interactions.

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
12. All user interaction must be configurable and externally defined where possible (e.g., keybindings).
13. UI panels must follow consistent interaction rules (non-modal, draggable, closable).
14. Input handling must prioritize fluid gameplay and minimal friction.
15. All component transformations (rotation, scaling) must be performed relative to the visual center of the component, not its corner.
16. All spatial transformations (zoom, grouping, placement) must preserve intuitive physical behavior and spatial consistency.

## Code Principles
1. The code must be reliable, modular, without unnecessary repetition and functional.
2. Follow the best functional code standards for clojour and clojour script.
3. Input handling and keybindings must be decoupled from UI logic.
4. Configuration (keybindings, general settings) must be externalizable and serializable.
5. UI panels must be implemented as reusable composable components.

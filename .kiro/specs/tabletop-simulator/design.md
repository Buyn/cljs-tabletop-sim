# Design
## Overview

A browser-based 2D tabletop simulator. All state lives in a single Reagent atom. No backend — persistence is local JSON download/upload.

The architecture is **event-driven**, not UI-driven.

UI components do not mutate state directly. All changes go through a centralized event system.

---

## Key Decisions

- **DOM, not canvas** — components are absolutely-positioned divs styled with Tailwind.
- **Single atom** — all app state in one `reagent/atom`.
- **Event-driven architecture** — all mutations go through `emit!` and `handle-event`.
- **Pure state transitions** — event handlers are pure functions `state → state`.
- **UI is passive** — components emit events, never mutate state directly.

---

## Architecture

```
User Interaction
      │
      ▼
   emit! (event)
      │
      ▼
handle-event (pure)
      │
      ▼
  app-state (single atom)
      │
      ▼
Reagent re-render
```

---

## Module Structure

```
src/tabletop/
  core.cljs                      — entry point, mounts app
  state.cljs                     — atom, pure helpers, emit!, handle-event, component-actions, placement-pos
  components/
    app.cljs                     — top-level router
    start_screen.cljs            — new/load game
    table.cljs                   — viewport, pan/zoom, drag-select, space-pan
    hand.cljs                    — hand strip, hand-drop-zone?
    deck.cljs                    — deck component
    card.cljs                    — card component (text or image-based rendering)
    die.cljs                     — die component
    tile_piece.cljs              — tile piece component
    context_menu.cljs            — floating menu
    component_panel.cljs         — sidebar main menu: cards, tile, dice, save/load, settings
    deck_customizer.cljs         — custom deck panel (suits, ranks, card count, suit colors)
    tile_panel.cljs              — tile image configuration panel
    card_deck_panel.cljs         — card deck from images panel
    keybindings_panel.cljs       — keybindings editor panel
    general_settings_panel.cljs  — general settings panel
    properties_panel.cljs        — component properties editor panel
    save_button.cljs             — save game button
  logic/
    shuffle.cljs                 — Fisher-Yates, make-standard-deck, make-custom-deck
    dice.cljs                    — make-die, roll-die
    tile.cljs                    — tile slicing, crop, shape logic
    serialization.cljs           — serialize-state, deserialize-state, serialize-components, deserialize-components
    validation.cljs              — validate-deck-config, validate-save-file
    keybindings.cljs             — keybinding config, key-for lookup
    input.cljs                   — keyboard input handler, emits events only
```

---

## Event System

### Entry Point

```clojure
(defn emit! [event & args]
  (swap! app-state #(apply handle-event % event args)))
```

### Dispatcher

```clojure
(defmulti handle-event (fn [_ event & _] event))
(defmethod handle-event :default [state & _] state)
```

### Example

```clojure
(emit! :card/flip id)

(defmethod handle-event :card/flip [state _ id]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (update % :face-up? not) %) cs))))
```

---

## Event Design Principles

1. Events are **semantic**: `:card/flip`, `:deck/shuffle`, `:die/roll`
2. Event handlers must be **pure** — return new state, never call `swap!`
3. UI never calls state functions directly — only `emit!`

---

## Registered Events
### Selection
- `:selection/set ids` — replace selection
- `:selection/add id` — add to selection
- `:selection/clear` — clear selection
- `:selection/apply action id & args` — apply event to all selected (or just `id`)
- `:selection/group` — merge selected cards/decks into one deck

### Table
- `:table/pan dx dy`
- `:table/zoom delta`
- `:table/set-last-middle-click tx ty`

### Component (all types)
- `:component/add c`
- `:component/remove id`
- `:component/move id x y`
- `:component/rotate id deg`
- `:component/lock id`
- `:component/scale-up id`
- `:component/scale-down id`
- `:component/bring-to-front id`
- `:component/send-to-back id`

### Card
- `:card/flip id`
- `:card/drop-on-deck card-id deck-id`
- `:card/move-to-hand id`
- `:card/move-to-table id x y`
- `:component/move-to-hand id` — generic alias for non-card components (tile-pieces, dice)

### Deck
- `:deck/shuffle id`
- `:deck/draw-to-hand id`
- `:deck/draw-to-table id x y`
- `:deck/draw-card-silent id`
- `:deck/draw-bottom id`
- `:deck/split id n-parts`
- `:deck/flip id`
- `:deck/merge-onto src-id tgt-id`

### Die
- `:die/roll id`
- `:die/increment id`
- `:die/decrement id`

### Clipboard
- `:clipboard/copy ids`
- `:clipboard/copy-single id`
- `:clipboard/paste cx cy`
- `:clipboard/paste-to-hand`

---

### Import / Export
- `:component/export ids` — serialize selected components to JSON file download (does not mutate state)
- `:component/import data` — add components from parsed save/component file into current session
## Selection-Aware Events

```clojure
;; Apply an event to all selected components, or just id if not in selection:
(emit! :selection/apply :card/flip id)

(defmethod handle-event :selection/apply [state _ action id & args]
  (let [sel (:selection state)
        ids (if (contains? sel id) sel #{id})]
    (reduce (fn [s sid] (apply handle-event s action sid args)) state ids)))
```

---

## Convenience Wrappers

`state.cljs` exposes thin `!` wrappers for common operations so call sites stay readable:

```clojure
(defn emit!             [event & args] (swap! app-state #(apply handle-event % event args)))
(defn add-component!    [c]            (emit! :component/add c))
(defn remove-component! [id]           (emit! :component/remove id))
(defn move-component!   [id x y]       (emit! :component/move id x y))
(defn move-card-to-hand!  [id]         (emit! :card/move-to-hand id))
(defn move-card-to-table! [id x y]     (emit! :card/move-to-table id x y))
(defn pan-table!          [dx dy]      (emit! :table/pan dx dy))
(defn zoom-table!         [delta]      (emit! :table/zoom delta))
(defn set-selection!      [ids]        (emit! :selection/set ids))
(defn clear-selection!    []           (emit! :selection/clear))
(defn add-to-selection!   [id]         (emit! :selection/add id))
(defn group-selection!    []           (emit! :selection/group))
(defn paste-from-list!    [cx cy]      (emit! :clipboard/paste cx cy))
(defn paste-to-hand!      []           (emit! :clipboard/paste-to-hand))
(defn copy-objects-to-list! [ids]      (emit! :clipboard/copy ids))
```

These wrappers call `emit!` — they are not direct `swap!` calls.

---

## State Shape

```clojure
{:view         :start | :table

 :table        {:pan-x  number    ; viewport offset x (px)
                :pan-y  number    ; viewport offset y (px)
                :zoom   number}   ; scale factor, clamped [0.1, 10.0]

 :components   [component ...]   ; all table components, render order = z-order

 :hand         [card ...]        ; cards in the hand strip

 :selection    #{id ...}         ; set of selected component IDs

 :copy-list    [component ...]   ; clipboard snapshot

 :context-menu nil | {:x number :y number :items [{:label string :action fn}]}

 :error        nil | string      ; start screen error

 :menu-open    boolean
 :menu-section nil | keyword}
```

### Component Types

```clojure
;; Deck
{:id uuid-str, :type :deck, :x number, :y number
 :cards [card ...], :locked? boolean
 :custom? boolean, :suits [str×4], :ranks [str×13]}

;; Card (on table or in hand)
{:id uuid-str, :type :card, :x number, :y number
 :suit str, :rank str
 :face-color hex-str, :back-color hex-str, :text-color hex-str, :suit-color hex-str
 :face-up? boolean, :rotation number, :scale number, :locked? boolean
 ;; Optional image-based rendering (replaces text rendering when present):
 :face-src      nil | str   ; URL or data-URL for card face image
 :back-src      nil | str   ; URL or data-URL for card back image
 :corner-radius nil | number}

;; Die
{:id uuid-str, :type :die, :x number, :y number
 :faces #{4|6|8|10|12|20|100}, :result integer
 :rotation number, :scale number, :locked? boolean}

;; Tile Piece
{:id uuid-str, :type :tile-piece, :x number, :y number
 :src str, :grid-cols number, :grid-rows number, :tile-index number
 :outer-crop {:top :bottom :left :right}
 :inner-crop {:top :bottom :left :right}
 :shape :rect | :ellipse | :hexagon, :corner-radius number
 :rotation number, :scale number, :locked? boolean}
```

### Save File Format

```json
{ "version": 1,
  "table":      { "pan-x": 0, "pan-y": 0, "zoom": 1.0 },
  "components": [...],
  "hand":       [...] }
```

`:view`, `:context-menu`, `:error`, `:selection`, `:copy-list`, `:menu-open`, `:menu-section` are not persisted.

---

## Context Menu System

```clojure
(defmulti component-actions :type)
;; Returns [{:label string :action fn}] where action calls emit!
```

Example:
```clojure
{:label "Flip" :action #(emit! :selection/apply :card/flip id)}
{:label "Save Component" :action #(emit! :component/export ids)}
```

All component context menus include: Lock/Unlock, Bring to Front, Send to Back, Save Component. Copy and Remove may also be present. Multi-selection adds a Group action.

---

## Drag Interaction

All drag logic lives in `state.cljs` via the interaction state machine. UI components emit raw pointer events only — no local gesture atoms.

### Cards, Dice, Tile Pieces

1. `pointerdown` → `emit! :interaction/start-component-press id tx ty now`
2. `pointermove` → `emit! :interaction/update-pointer tx ty now` (state resolves pending → drag on `dist > 6px`; group drag if selected)
3. `pointerup` — if `:pending`: shift → add to selection, plain → clear selection (+ roll for die). Then `emit! :interaction/end`.
4. `pointercancel` → `emit! :interaction/end`

Hand drop: on `pointermove`, if `hand-drop-zone?` is true, emit `:card/move-to-hand` (or `:component/move-to-hand` for tile-pieces) for all relevant ids. Interaction ends on `pointerup`.

### Deck

1. `pointerdown` → `emit! :interaction/start-deck-press deck-id tx ty now`
2. `pointermove` → `emit! :interaction/update-pointer tx ty now` (state resolves: `dist > 6px` → draw top card + `:card-drag`; `dt > 1000ms` → `:deck-drag`)
3. `pointerup` — if `:pending`: `emit! :deck/draw-to-table`. Then `emit! :interaction/end`.
4. `pointercancel` → `emit! :interaction/end`

### Coordinate System

```clojure
;; screen → table
table-x = (screen-x - pan-x) / zoom
table-y = (screen-y - pan-y) / zoom
```

---

## Table Viewport

```
[outer div — overflow:hidden, pointer events]
  [inner div — transform: translate(pan-x, pan-y) scale(zoom)]
    [component ...]
```

- **Left-click drag on empty area** → rubber-band selection.
- **Middle-click drag** → pan.
- **Scroll** → zoom, clamped [0.1, 10.0], cursor-anchored.
- **Space held** → fast pan (5×, inverted) via global `mousemove` listener.
- **Right-click on empty area** → context menu with "Paste".

---

## Main Menu
The main menu is a persistent UI element that groups all user actions into sections:
- Cards (Add Standard Deck, Add Custom Deck, Add Deck from Images)
- Tile (Add Tile Image)
- Dice
- Save/Load
- Settings
The menu does not block interaction with the table.
Each menu action triggers either:
- an immediate event (e.g., add die), or
- opening a non-modal panel.
## Deck Customizer Panel

Non-modal, draggable panel. Fields:
- 4 suit inputs (max 20 chars each), each with an inline color swatch selector (palette of 9 colors). The chosen color is stored as `:suit-color` on each generated card and used when rendering that suit.
- "Cards per suit" number input (min 1, max 52). Total cards = 4 × count.
- Rank inputs: shows exactly `count` fields. Fields left blank are auto-filled with incremental numeric values (e.g. "14", "15", …) by `auto-fill-ranks`.
- 3 color pickers: face background, face-down back, text color.
- "Confirm" validates (no empty labels, unique suits, unique ranks) and places a shuffled deck.
- "Cancel" closes without creating a deck.

## Card Deck from Images Panel

Non-modal, draggable panel (`card_deck_panel.cljs`). Fields:
- Face image: URL text input or local file picker.
- Columns / Rows: grid dimensions.
- Card Count: total cards to generate (tiles repeat if count > cols×rows).
- Global Crop (px): top/bottom/left/right outer margins applied before slicing.
- Per-Card Inner Borders (px): top/bottom/left/right removed from each tile after slicing.
- Corner Radius (px): applied to card face/back images.
- Card Back Image: optional URL or local file; if blank, default back rendering is used.

On confirm: loads the face image, slices it via canvas into data-URLs, assembles cards with `:face-src`, `:back-src`, `:corner-radius`, and places a Deck at `placement-pos`.

## Hand Area

Fixed strip at the bottom. Collapses when not hovered. Cards centered; overlap when space is limited. Hovered card scales 3× (transform-origin: bottom center); neighbors shift outward. `hand-drop-zone? [cx cy]` checks if client coords fall within the hand element.

---

## Input & Keybindings

`logic/input.cljs` handles all keyboard events and calls `emit!` only — no direct state mutation.

Default bindings:
- `W` rotate CW / die decrement, `R` rotate CCW / die increment
- `A` flip, `T` roll / shuffle, `H` lock, `G` group
- `z` scale down, `Z` scale up, `o` send to back, `O` bring to front
- `C` copy, `X` cut, `V` paste, `Del` remove
- `M` open properties, `Space` fast pan
- `1–0` move hand card to table, `Q` move component to hand

---

## Serialization

`serialize-state` extracts `[:table :components :hand]`, adds `"version": 1`, returns JSON string.
`deserialize-state` parses JSON, keywordizes keys.
`validate-save-file` returns `nil` on success or a descriptive error string.

---

## Interaction State (Transient Gesture Resolution)

All gesture recognition is handled entirely in state via events. UI components hold no gesture atoms — no `dragging?`, `moved?`, `offset-x/y`, `start-cx/cy`.

```clojure
:interaction nil | {:type       :deck-press | :component-press
                    :id         component-id
                    :start-time ms
                    :start-pos  [tx ty]   ; table-space coords at press
                    :offset     [ox oy]   ; cursor offset from component origin
                    :mode       :pending | :drag | :card-drag | :deck-drag
                    ; deck-only:
                    :deck-id    id
                    :card-id    nil | id}
```

### Events

- `:interaction/start-deck-press deck-id tx ty t` — record deck press, no card mutation
- `:interaction/start-component-press id tx ty t` — record generic component press
- `:interaction/start-card-drag` — draw top card from deck, create component, set mode `:card-drag`
- `:interaction/start-deck-drag` — set mode `:deck-drag`
- `:interaction/update-pointer tx ty now` — resolve gesture and/or move component
- `:interaction/end` — clear interaction

### Resolution Rules (inside `:interaction/update-pointer`)

**Deck press:**

| Condition | Transition |
|---|---|
| `dist > 6px` (move threshold) | → `:card-drag` (draw top card) |
| `dt > 1000ms` | → `:deck-drag` |
| `:card-drag` | move drawn card |
| `:deck-drag` | move deck |

**Component press (card, die, tile-piece):**

| Condition | Transition |
|---|---|
| `dist > 6px` | → `:drag` |
| `:drag` | move component (or group if selected) |

### On `pointerup` while `:pending`

- **Deck**: single click → `:deck/draw-to-table`
- **Card**: shift → add to selection; plain → clear selection
- **Die**: shift → add to selection; plain → clear selection + roll
- **Tile-piece**: shift → add to selection; plain → clear selection

### Rule

> Gesture resolution must be handled in state via events, not via UI timers or component-local atoms. UI components emit raw pointer coordinates only.

---



After any draw that reduces a deck to 1 card, it auto-converts to a `:card`. At 0 cards it is removed. Enforced by `collapse-deck` called inside draw handlers.

---

## Extensibility

Adding a new event requires only a new `defmethod`:

```clojure
(defmethod handle-event :token/rotate [state _ id degrees]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (assoc % :rotation degrees) %) cs))))
```

Future capabilities enabled by the event log:
- **Logging** — wrap `emit!` with `println`
- **Undo/redo** — store event history, replay
- **Time-travel** — replay from initial state

---

## Error Handling

| Situation | Behavior |
|---|---|
| Invalid save file | Set `:error`; stay on start screen |
| Draw from empty deck | No-op (guarded by `(not empty?)`) |
| Deck customizer empty label | Inline error; confirm disabled |
| Zoom at boundary | Silently clamped to [0.1, 10.0] |
| Component dragged off-screen | Stays at position; player pans to retrieve |

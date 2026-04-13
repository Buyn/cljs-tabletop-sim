# Design

## Overview

A browser-based 2D tabletop simulator. All state lives in a single Reagent atom. No backend — persistence is local JSON download/upload. The UI is a single-page app with two views: a start screen and a table view.

### Key Decisions

- **DOM, not canvas** — components are absolutely-positioned divs styled with Tailwind. Keeps rendering simple and drag-and-drop straightforward.
- **Single atom** — all app state in one `reagent/atom`. Serialization is trivial; data flow is unidirectional.
- **Raw pointer events** — `pointerdown/move/up` handle all drag interactions directly, no library.
- **Multimethod dispatch** — all component actions go through `dispatch!` / `perform-action`, keyed on `[type action-keyword]`. Adding a new action requires only a new `defmethod`.
- **Data-driven context menus** — `component-actions` multimethod returns `[{:label :action}]` per type. No per-component menu logic in UI components.

---

## Architecture

```
User Interaction
      │
      ▼
Event Handler  ──►  dispatch! / swap! app-state
      │
      ▼
App State Atom  (single source of truth)
      │
      ▼
Reagent re-renders affected components
```

### Module Structure

```
src/tabletop/
  core.cljs                      — entry point, mounts app
  state.cljs                     — atom, pure helpers, dispatch system, component-actions
  components/
    app.cljs                     — top-level router
    start_screen.cljs            — new/load game
    table.cljs                   — viewport, pan/zoom, drag-select, space-pan
    hand.cljs                    — hand strip, hand-drop-zone?
    deck.cljs                    — deck component
    card.cljs                    — card component
    die.cljs                     — die component
    tile_piece.cljs              — tile piece component
    context_menu.cljs            — floating menu
    component_panel.cljs         — sidebar: add decks/dice/tiles, save/load
    deck_customizer.cljs         — custom deck modal
    tile_panel.cljs              — tile image configuration panel
    keybindings_panel.cljs       — keybindings editor panel
    general_settings_panel.cljs  — general settings panel
    properties_panel.cljs        — component properties editor panel
    save_button.cljs             — save game button
  logic/
    shuffle.cljs                 — Fisher-Yates, make-standard-deck, make-custom-deck
    dice.cljs                    — make-die, roll-die
    tile.cljs                    — tile slicing, crop, shape logic
    serialization.cljs           — serialize-state, deserialize-state
    validation.cljs              — validate-deck-config, validate-save-file
    keybindings.cljs             — keybinding config, key-for lookup
    input.cljs                   — keyboard input handler, decoupled from UI
```

---

## State Shape

```clojure
{:view         :start | :table

 :table        {:pan-x  number    ; viewport offset x (px)
                :pan-y  number    ; viewport offset y (px)
                :zoom   number}   ; scale factor, clamped [0.5, 2.0]

 :components   [component ...]   ; all table components, render order = z-order

 :hand         [card ...]        ; cards in the hand strip

 :selection    #{id ...}         ; set of selected component IDs

 :copy-list    [component ...]   ; clipboard snapshot

 :context-menu nil | {:x number :y number :items [{:label string :action fn}]}

 :error        nil | string      ; start screen error

 :menu-open    boolean           ; sidebar open/closed
 :menu-section nil | keyword}    ; active sidebar section
```

### Component Types

```clojure
;; Deck
{:id uuid-str, :type :deck, :x number, :y number
 :cards [card ...], :color hex-str
 :locked? boolean
 :custom? boolean, :suits [str×4], :ranks [str×13]}

;; Card (on table or in hand)
{:id uuid-str, :type :card, :x number, :y number
 :suit str, :rank str
 :face-color hex-str, :back-color hex-str, :text-color hex-str, :suit-color hex-str
 :face-up? boolean
 :rotation number, :scale number, :locked? boolean}

;; Die
{:id uuid-str, :type :die, :x number, :y number
 :faces #{4|6|8|10|12|20|100}, :result integer
 :rotation number, :scale number, :locked? boolean}

;; Tile Piece
{:id uuid-str, :type :tile-piece, :x number, :y number
 :src str, :grid-cols number, :grid-rows number, :tile-index number
 :outer-crop {:top :bottom :left :right}
 :inner-crop {:top :bottom :left :right}
 :shape :rect | :ellipse | :hexagon
 :corner-radius number
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

## Dispatch System

All state-mutating component actions go through a single entry point:

```clojure
(defmulti perform-action
  (fn [state id action & _]
    [(:type (find-component state id)) action]))

(defn dispatch! [id action & args]
  (swap! app-state #(apply perform-action % id action args)))

(defn dispatch-selection! [id action & args]
  ;; applies to all selected IDs, or just id if not in selection
  ...)
```

Registered methods:
- `[:deck :shuffle]`, `[:deck :draw-to-hand]`, `[:deck :draw-to-table]`, `[:deck :draw-card-silent]`, `[:deck :draw-bottom]`
- `[:deck :flip]`, `[:deck :split]`, `[:deck :merge-onto]`, `[:deck :rotate]`
- `[:card :flip]`, `[:card :rotate]`, `[:card :drop-on-deck]`
- `[:die :roll]`, `[:die :roll-increment]`, `[:die :roll-decrement]`
- `[t :remove]`, `[t :lock]`, `[t :scale-up]`, `[t :scale-down]`, `[t :bring-to-front]`, `[t :send-to-back]` (all types)
- `[:tile-piece :rotate]`

After any draw that reduces a deck to 1 card, the deck auto-converts to a card. At 0 cards it is removed. This is enforced by a `collapse-deck` helper called inside draw methods.

---

## Context Menu System

```clojure
(defmulti component-actions :type)
;; Each method returns [{:label string :action fn}]
```

Right-click handler pattern (same in card, die, deck, tile-piece):
```clojure
:on-context-menu
(fn [e]
  (.preventDefault e) (.stopPropagation e)
  (when-not (contains? (:selection @app-state) id)
    (add-to-selection! id))
  (open-context-menu! cx cy (component-actions component)))
```

---

## Drag Interaction

### Cards, Dice, Tile Pieces

1. `pointerdown` (left button, not locked) — record cursor offset within component in table-space, set pointer capture.
2. `pointermove` — if moved > threshold, set `drag-moved? true`; compute new table-space position; if over hand zone move to hand; else `move-component!`. Group drag: compute delta and apply to all selected.
3. `pointerup` — release capture. If not moved: shift-click → add to selection, plain click → clear selection (+ roll for die).

### Deck

1. `pointerdown` (left button, not locked, not empty) — immediately draw top card via `dispatch! :draw-card-silent`, add it to `:components` at the deck's position as a real `:card` component, capture pointer.
2. `pointermove` — `move-component!` on the drawn card's id.
3. `pointerup` — release capture. Card is already in state at the correct position.
4. `pointercancel` — remove the drawn card from state, return it to the deck.

No ghost rendering. The drawn card is a real component from the moment of `pointerdown`.

### Coordinate System

Table uses `transform: translate(pan-x, pan-y) scale(zoom)` on the inner div. All component `x/y` are in table-space (pre-zoom).

```clojure
;; screen → table
table-x = (screen-x - pan-x) / zoom
table-y = (screen-y - pan-y) / zoom
```

### Group Drag (delta-based)

```clojure
(let [ddx (- new-x old-x)
      ddy (- new-y old-y)]
  (doseq [c components :when (contains? sel (:id c))]
    (move-component! (:id c) (+ (:x c) ddx) (+ (:y c) ddy))))
```

---

## Table Viewport

The table is two nested divs:

```
[outer div — overflow:hidden, pointer events]
  [inner div — transform: translate(pan-x, pan-y) scale(zoom)]
    [component ...]
```

- **Left-click drag on empty area** → rubber-band selection. On pointer-up, selects all components whose bounding box intersects the selection rectangle (in table coordinates).
- **Middle-click drag** → pan.
- **Scroll** → zoom, clamped to [0.5, 2.0], cursor-anchored (pan adjusted to keep world point under cursor fixed).
- **Space held** → fast pan (3× speed) via global `mousemove` listener, registered once via `defonce`.
- **Right-click on empty area** → context menu with "Paste".

---

## Hand Area

A fixed strip at the bottom of the viewport. Collapses (~90% down) when not hovered, leaving a thin edge. Cards remain partially visible above the strip. On hover, returns to full height.

Cards are centered horizontally. When space is limited they overlap uniformly. Hovered card scales 3× (transform-origin: bottom center); neighbors shift outward just enough to accommodate it. Z-order: hovered card topmost, neighbors by proximity.

`hand-drop-zone? [cx cy]` — checks if client coordinates fall within the hand element's bounding rect.

---

## Input & Keybindings

Keybindings are defined in `logic/keybindings.cljs` as a config map, not hardcoded in UI components. `key-for` looks up the key string for a given action keyword.

`logic/input.cljs` handles all keyboard events, decoupled from UI. Actions resolve in priority order: dragged component → selected components → component under cursor.

Default bindings:
- `W` rotate CW / die decrement, `R` rotate CCW / die increment
- `A` flip card or deck
- `T` roll die / shuffle deck
- `H` lock/unlock
- `G` group selected
- `z` scale down, `Z` scale up
- `o` send to back, `O` bring to front
- `C` copy, `X` cut, `V` paste
- `Del` remove
- `M` open properties editor
- `Space` fast camera pan
- `1–0` move hand card to table at cursor, `Q` move component to hand

---

## Serialization

`serialize-state` extracts `[:table :components :hand]`, adds `"version": 1`, returns JSON string.

`deserialize-state` parses JSON, keywordizes keys, returns map for merging into app state.

`validate-save-file` checks presence and types of `version`, `table`, `components`, `hand`. Returns `nil` on success or a descriptive error string.

---

## Correctness Properties

- **P1** `make-standard-deck` → exactly 52 cards, all 4 suits × 13 ranks, no duplicates.
- **P2** `make-custom-deck` with valid config → exactly N cards, suits/ranks from supplied lists.
- **P3** Deck config with empty/whitespace label → error, no deck created.
- **P4** `make-die N` → `:result` in [1, N].
- **P5** After `[:die :roll]` → `:result` integer in [1, N].
- **P6** `move-component!` → only `:x` and `:y` change.
- **P7** `[:card :flip]` twice → original `:face-up?` value.
- **P8** `[:deck :flip]` twice → every card at original `:face-up?` value.
- **P9** `[:deck :shuffle]` → same card set, same count.
- **P10** `[:deck :draw-to-hand]` → deck count −1, hand count +1, drawn card was `(peek cards)`.
- **P11** Card table ↔ hand round-trip → card in `:components`, absent from `:hand`, all fields preserved.
- **P12** `pan-table! dx dy` → `:pan-x` += dx, `:pan-y` += dy.
- **P13** Any zoom → `:zoom` in [0.5, 2.0].
- **P14** `[:T :remove]` → component absent from `:components`.
- **P15** `deserialize-state(serialize-state s)` → deeply equal to `s`.

---

## Error Handling

| Situation | Behavior |
|---|---|
| Invalid save file | Set `:error` with descriptive message; stay on start screen |
| Draw from empty deck | No-op (deck `pointerdown` guarded by `(not empty?)`) |
| Deck customizer empty label | Inline error; confirm button disabled |
| Zoom at boundary | Silently clamped |
| Component dragged off-screen | Stays at dragged position; player can pan to retrieve it |

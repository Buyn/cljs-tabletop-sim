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
  core.cljs                    — entry point, mounts app
  state.cljs                   — atom, pure helpers, dispatch system, component-actions
  components/
    app.cljs                   — top-level router
    start_screen.cljs          — new/load game
    table.cljs                 — viewport, pan/zoom, drag-select, paste
    hand.cljs                  — hand strip, hand-drop-zone?
    deck.cljs                  — deck component
    card.cljs                  — card component
    die.cljs                   — die component
    context_menu.cljs          — floating menu
    component_panel.cljs       — sidebar: add decks/dice, save/load
    deck_customizer.cljs       — custom deck modal
  logic/
    shuffle.cljs               — Fisher-Yates, make-standard-deck, make-custom-deck
    dice.cljs                  — make-die, roll-die
    serialization.cljs         — serialize-state, deserialize-state
    validation.cljs            — validate-deck-config, validate-save-file
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
 :custom? boolean, :suits [str×4], :ranks [str×13]}

;; Card (on table)
{:id uuid-str, :type :card, :x number, :y number
 :suit str, :rank str, :color str, :face-up? boolean}

;; Die
{:id uuid-str, :type :die, :x number, :y number
 :faces #{4|6|8|10|12|20|100}, :result integer}  ; result always set on creation
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

Registered methods: `[:deck :shuffle]`, `[:deck :draw-to-hand]`, `[:deck :draw-to-table]`, `[:deck :flip]`, `[:deck :remove]`, `[:card :flip]`, `[:card :remove]`, `[:die :roll]`, `[:die :remove]`.

Adding a new action:
```clojure
(defmethod perform-action [:token :rotate] [state id _ degrees]
  (update-component state id assoc :rotation degrees))
```

---

## Context Menu System

```clojure
(defmulti component-actions :type)
;; Each method returns [{:label string :action fn}]

(defn- common-actions [id]
  [{:label "Copy"   :action #(...)}
   {:label "Remove" :action #(dispatch-selection! id :remove)}])

(defmethod component-actions :card [{:keys [id]}]
  (into [{:label "Flip" :action #(dispatch-selection! id :flip)}]
        (common-actions id)))
```

Right-click handler pattern (same in card, die, deck):
```clojure
:on-context-menu
(fn [e]
  (.preventDefault e) (.stopPropagation e)
  (when-not (contains? (:selection @app-state) id)
    (add-to-selection! id))          ; preserve highlight
  (open-context-menu! cx cy (component-actions component)))
```

---

## Drag Interaction

All draggable components use the same pointer-event pattern:

1. `pointerdown` (left button only) — record offset, set pointer capture, register Ctrl+C/X keydown listener.
2. `pointermove` — if moved > threshold, set `drag-moved? true`; compute new position accounting for zoom; if over hand zone, move to hand; else move on table. For group drag: compute delta from component's stored position and apply to all selected.
3. `pointerup` — release capture, remove keydown listener. If not moved: shift-click → add to selection, plain click → clear selection (+ roll for die).

### Group Drag (delta-based)

```clojure
;; In pointermove, when dragging a selected component:
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
- **Scroll** → zoom, clamped to [0.5, 2.0].
- **Right-click on empty area** → context menu with "Paste".
- **Ctrl+V** → paste copy list at cursor (into hand if over hand zone, else onto table).

---

## Hand Area

A fixed strip at the bottom of the viewport. Cards overlap with negative left margin; hovered card scales up 3× from bottom center. The strip collapses (slides down 90%) when not hovered.

`hand-drop-zone? [cx cy]` — checks if client coordinates fall within the hand element's bounding rect. Used by all draggable components to detect a drop into the hand.

---

## Serialization

`serialize-state` extracts `[:table :components :hand]` from app state, adds `"version": 1`, and returns a JSON string.

`deserialize-state` parses JSON, keywordizes keys, and returns a map suitable for merging into app state.

`validate-save-file` checks presence and types of `version`, `table`, `components`, `hand`. Returns `nil` on success or a descriptive error string.

---

## Correctness Properties

### P1 — Standard deck completeness
`make-standard-deck` produces exactly 52 cards covering all 4 suits × 13 ranks with no duplicates.

### P2 — Custom deck completeness
`make-custom-deck` with valid config produces exactly 52 cards where every card's suit and rank are from the supplied lists.

### P3 — Deck config validation
Any config with an empty or whitespace-only label returns an error and produces no deck.

### P4 — Die initial result
`make-die N` produces a die with `:faces N` and `:result` in [1, N].

### P5 — Die roll range
After `[:die :roll]`, `:result` is an integer in [1, N].

### P6 — Move has no side effects
After `move-component`, only `:x` and `:y` change; all other fields are unchanged.

### P7 — Card face toggle is an involution
Applying `[:card :flip]` twice returns the card to its original `:face-up?` value.

### P8 — Flip deck is an involution
Applying `[:deck :flip]` twice returns every card to its original `:face-up?` value.

### P9 — Shuffle preserves card set
After `[:deck :shuffle]`, the set of card IDs is identical to before; deck size is unchanged.

### P10 — Draw top card
After `[:deck :draw-to-hand]` on a non-empty deck: deck count decreases by 1, hand count increases by 1, drawn card was the first in `:cards`.

### P11 — Card table ↔ hand round-trip
Moving a card to hand then back to table: card is in `:components`, absent from `:hand`, all fields preserved.

### P12 — Pan
After `pan-table dx dy`: `:pan-x` increases by `dx`, `:pan-y` increases by `dy`.

### P13 — Zoom bounds
After any zoom operation, `:zoom` is in [0.5, 2.0].

### P14 — Remove
After `[:T :remove]`, the component is absent from `:components`.

### P15 — Serialization round-trip
`deserialize-state (serialize-state s)` produces a state deeply equal to `s` for all valid game states.

---

## Error Handling

| Situation | Behavior |
|---|---|
| Invalid save file | Set `:error` with descriptive message; stay on start screen |
| Draw from empty deck | No-op (UI disables the option when deck is empty) |
| Deck customizer empty label | Inline error; confirm button disabled |
| Zoom at boundary | Silently clamped; no error shown |
| Component dragged off-screen | Stays at dragged position; player can pan to retrieve it |

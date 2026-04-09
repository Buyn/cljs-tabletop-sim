(ns tabletop.logic.serialization)

;; ---------------------------------------------------------------------------
;; Helpers
;; ---------------------------------------------------------------------------

(defn- keywordize-type
  "Convert string :type fields back to keywords after JSON round-trip."
  [m]
  (cond-> m
    (string? (:type m)) (update :type keyword)
    (string? (:view m)) (update :view keyword)))

(defn- keywordize-component
  "Keywordize :type (and :view if present) on a component map.
   Also recurse into :cards if present (deck components)."
  [component]
  (cond-> (keywordize-type component)
    (vector? (:cards component))
    (update :cards (fn [cards] (mapv keywordize-type cards)))))

;; ---------------------------------------------------------------------------
;; Public API
;; ---------------------------------------------------------------------------

(defn serialize-state
  "Extracts :table, :components, and :hand from state and returns a JSON string
   with version 1 wrapping those keys.

   Output format:
     {\"version\" 1
      \"table\"      {...}
      \"components\" [...]
      \"hand\"       [...]}"
  [state]
  (let [payload {"version"    1
                 "table"      (:table state)
                 "components" (:components state)
                 "hand"       (:hand state)}]
    (js/JSON.stringify (clj->js payload))))

(defn deserialize-state
  "Parses a JSON string produced by serialize-state and returns a map with
   keys :table, :components, and :hand ready to be merged into app state.

   - All map keys are keywordized.
   - :type fields on components (and cards within decks) are converted back
     to keywords (e.g. \"deck\" -> :deck).
   - :face-up? booleans and :result nil/number values are preserved as-is."
  [json-str]
  (let [parsed     (js->clj (js/JSON.parse json-str) :keywordize-keys true)
        components (mapv keywordize-component (:components parsed))
        hand       (mapv keywordize-type (:hand parsed))]
    {:table      (:table parsed)
     :components components
     :hand       hand}))

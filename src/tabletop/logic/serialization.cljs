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

(defn serialize-state
  "Extracts :table, :components, :hand, :menu-open, and :menu-section from state
   and returns a JSON string with version 1 wrapping those keys."
  [state]
  (let [payload {"version"      1
                 "table"        (:table state)
                 "components"   (:components state)
                 "hand"         (:hand state)
                 "menu-open"    (:menu-open state)
                 "menu-section" (when-let [s (:menu-section state)] (name s))}]
    (js/JSON.stringify (clj->js payload))))

(defn deserialize-state
  "Parses a JSON string produced by serialize-state and returns a map with
   keys :table, :components, :hand, :menu-open, and :menu-section ready to
   be merged into app state."
  [json-str]
  (let [parsed     (js->clj (js/JSON.parse json-str) :keywordize-keys true)
        components (mapv keywordize-component (:components parsed))
        hand       (mapv keywordize-type (:hand parsed))
        section    (when-let [s (:menu-section parsed)] (keyword s))]
    {:table        (:table parsed)
     :components   components
     :hand         hand
     :menu-open    (get parsed :menu-open true)
     :menu-section section}))

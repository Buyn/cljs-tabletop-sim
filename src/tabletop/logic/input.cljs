(ns tabletop.logic.input
  "Global keyboard input handler. Reads keybindings from tabletop.logic.keybindings.
   Installed once at app startup."
  (:require [tabletop.state :refer [app-state general-settings
                                    dispatch! dispatch-selection!
                                    copy-objects-to-list! paste-from-list! paste-to-hand!
                                    move-card-to-hand! group-selection! component-at]]
            [tabletop.logic.keybindings :as kb]
            [tabletop.components.hand :as hand]))

(defonce last-mouse-pos (atom [0 0]))

(defn- input-focused? [e]
  (#{"INPUT" "TEXTAREA"} (.-tagName (.-target e))))

(defn- table-pos []
  (let [[cx cy] @last-mouse-pos
        {:keys [pan-x pan-y zoom]} (:table @app-state)]
    [(/ (- cx pan-x) zoom) (/ (- cy pan-y) zoom)]))

(defn- target-ids []
  (let [sel (:selection @app-state)]
    (if (seq sel)
      (vec sel)
      (let [[tx ty] (table-pos)]
        (when-let [c (component-at tx ty)] [(:id c)])))))

(defn- unlocked-targets []
  (when-let [ids (target-ids)]
    (let [comps (:components @app-state)]
      (seq (filter (fn [id]
                     (not (:locked? (some #(when (= (:id %) id) %) comps))))
                   ids)))))

(defn- component-type [id]
  (:type (some #(when (= (:id %) id) %) (:components @app-state))))

(defn- handle-key [e]
  (when-not (input-focused? e)
    (let [k   (.-key e)
          act (kb/action-for k)]
      (cond
        (= act :copy)
        (do (.preventDefault e)
            (when-let [ids (target-ids)] (copy-objects-to-list! ids)))

        (= act :cut)
        (do (.preventDefault e)
            (when-let [ids (unlocked-targets)]
              (copy-objects-to-list! ids)
              (doseq [id ids] (dispatch! id :remove))))

        (= act :paste)
        (do (.preventDefault e)
            (let [[cx cy] @last-mouse-pos]
              (if (hand/hand-drop-zone? [cx cy])
                (paste-to-hand!)
                (let [[tx ty] (table-pos)]
                  (paste-from-list! tx ty)))))

        (= act :rotate-cw)
        (do (.preventDefault e)
            (let [step (:rotation-step @general-settings 45)]
              (doseq [id (or (unlocked-targets) [])]
                (if (= :die (component-type id))
                  (dispatch! id :roll-decrement)
                  (dispatch! id :rotate step)))))

        (= act :rotate-ccw)
        (do (.preventDefault e)
            (let [step (:rotation-step @general-settings 45)]
              (doseq [id (or (unlocked-targets) [])]
                (if (= :die (component-type id))
                  (dispatch! id :roll-increment)
                  (dispatch! id :rotate (- step))))))

        (= act :flip)
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])] (dispatch! id :flip)))

        (= act :to-hand)
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])] (move-card-to-hand! id)))

        (= act :roll-shuffle)
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])]
              (case (component-type id)
                :die  (dispatch! id :roll)
                :deck (dispatch! id :shuffle)
                nil)))

        (= act :lock)
        (do (.preventDefault e)
            (doseq [id (or (target-ids) [])] (dispatch! id :lock)))

        (= act :group)
        (do (.preventDefault e) (group-selection!))

        (= act :scale-up)
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])] (dispatch! id :scale-up)))

        (= act :scale-down)
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])] (dispatch! id :scale-down)))

        (= act :bring-to-front)
        (do (.preventDefault e)
            (doseq [id (or (target-ids) [])] (dispatch! id :bring-to-front)))

        (= act :send-to-back)
        (do (.preventDefault e)
            (doseq [id (or (target-ids) [])] (dispatch! id :send-to-back)))

        (= act :delete)
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])] (dispatch! id :remove)))

        (= act :properties)
        (do (.preventDefault e)
            (swap! app-state assoc :show-properties? true :properties-text nil))

        ;; 1–0: move hand card N to table at cursor
        (re-matches #"[0-9]" k)
        (let [n (if (= k "0") 10 (js/parseInt k 10))]
          (when (get-in @app-state [:hand (dec n)])
            (.preventDefault e)
            (let [[tx ty] (table-pos)]
              (swap! app-state
                     (fn [s]
                       (let [card (get-in s [:hand (dec n)])]
                         (-> s
                             (update :hand #(vec (concat (take (dec n) %) (drop n %))))
                             (update :components conj (assoc card :x tx :y ty)))))))))))))

(defonce ^:private _installed
  (do
    (.addEventListener js/document "mousemove"
                       (fn [e] (reset! last-mouse-pos [(.-clientX e) (.-clientY e)])))
    (.addEventListener js/document "keydown" handle-key)
    true))

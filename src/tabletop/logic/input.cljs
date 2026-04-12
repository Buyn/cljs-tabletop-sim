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

(defn- target-ids
  "Returns ids to act on in priority order: selection → component under cursor."
  []
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

(defn- hand-index->id [n]
  (get-in @app-state [:hand (dec n) :id]))

(defn- component-type [id]
  (:type (some #(when (= (:id %) id) %) (:components @app-state))))

(defn- handle-key [e]
  (when-not (input-focused? e)
    ;; Use raw key (case-sensitive) for Z/z/O/o distinction
    (let [k   (.-key e)
          act (kb/action-for k)]
      (case act
        :copy
        (do (.preventDefault e)
            (when-let [ids (target-ids)] (copy-objects-to-list! ids)))

        :cut
        (do (.preventDefault e)
            (when-let [ids (unlocked-targets)]
              (copy-objects-to-list! ids)
              (doseq [id ids] (dispatch! id :remove))))

        :paste
        (do (.preventDefault e)
            (let [[cx cy] @last-mouse-pos]
              (if (hand/hand-drop-zone? [cx cy])
                (paste-to-hand!)
                (let [[tx ty] (table-pos)]
                  (paste-from-list! tx ty)))))

        :rotate-cw
        (do (.preventDefault e)
            (let [step (:rotation-step @general-settings 45)]
              (doseq [id (or (unlocked-targets) [])]
                (if (= :die (component-type id))
                  (dispatch! id :roll-increment)
                  (dispatch! id :rotate step)))))

        :rotate-ccw
        (do (.preventDefault e)
            (let [step (:rotation-step @general-settings 45)]
              (doseq [id (or (unlocked-targets) [])]
                (if (= :die (component-type id))
                  (dispatch! id :roll-decrement)
                  (dispatch! id :rotate (- step))))))

        :flip
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])] (dispatch! id :flip)))

        :to-hand
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])] (move-card-to-hand! id)))

        :roll-shuffle
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])]
              (case (component-type id)
                :die  (dispatch! id :roll)
                :deck (dispatch! id :shuffle)
                nil)))

        :lock
        (do (.preventDefault e)
            ;; Lock/unlock applies even to locked components (to unlock them)
            (doseq [id (or (target-ids) [])] (dispatch! id :lock)))

        :group
        (do (.preventDefault e) (group-selection!))

        :scale-up
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])] (dispatch! id :scale-up)))

        :scale-down
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])] (dispatch! id :scale-down)))

        :bring-to-front
        (do (.preventDefault e)
            (doseq [id (or (target-ids) [])] (dispatch! id :bring-to-front)))

        :send-to-back
        (do (.preventDefault e)
            (doseq [id (or (target-ids) [])] (dispatch! id :send-to-back)))

        :delete
        (do (.preventDefault e)
            (doseq [id (or (unlocked-targets) [])] (dispatch! id :remove)))

        :properties
        (do (.preventDefault e)
            (swap! app-state assoc :show-properties? true :properties-text nil))

        ;; 1–0: move hand card N to table at cursor
        nil
        (when (re-matches #"[0-9]" k)
          (let [n (if (= k "0") 10 (js/parseInt k 10))]
            (when (get-in @app-state [:hand (dec n)])
              (.preventDefault e)
              (let [[tx ty] (table-pos)]
                (swap! app-state
                       (fn [s]
                         (let [card (get-in s [:hand (dec n)])]
                           (-> s
                               (update :hand #(vec (concat (take (dec n) %) (drop n %))))
                               (update :components conj (assoc card :x tx :y ty))))))))))
        nil))))

(defonce ^:private _installed
  (do
    (.addEventListener js/document "mousemove"
                       (fn [e] (reset! last-mouse-pos [(.-clientX e) (.-clientY e)])))
    (.addEventListener js/document "keydown" handle-key)
    true))

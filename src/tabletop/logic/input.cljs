(ns tabletop.logic.input
  "Global keyboard input handler. Reads keybindings from tabletop.logic.keybindings.
   Installed once at app startup."
  (:require [tabletop.state :refer [app-state general-settings
                                    dispatch! dispatch-selection!
                                    copy-objects-to-list! paste-from-list! paste-to-hand!
                                    move-card-to-hand! group-selection! component-at]]
            [tabletop.logic.keybindings :as kb]
            [tabletop.components.hand :as hand]))

(defonce ^:private last-mouse-pos (atom [0 0]))

(defn- input-focused? [e]
  (#{"INPUT" "TEXTAREA"} (.-tagName (.-target e))))

(defn- target-ids
  "Returns ids to act on: selection if non-empty, else component under cursor."
  []
  (let [sel (:selection @app-state)]
    (if (seq sel)
      (vec sel)
      (when-let [c (let [[cx cy] @last-mouse-pos
                         {:keys [pan-x pan-y zoom]} (:table @app-state)]
                     (component-at (/ (- cx pan-x) zoom) (/ (- cy pan-y) zoom)))]
        [(:id c)]))))

(defn- hand-index->id [n]
  (get-in @app-state [:hand (dec n) :id]))

(defn- handle-key [e]
  (when-not (input-focused? e)
    (let [k   (.-key e)
          lk  (.toLowerCase k)
          act (kb/action-for lk)]
      (case act
        :copy
        (do (.preventDefault e)
            (when-let [ids (target-ids)]
              (copy-objects-to-list! ids)))

        :cut
        (do (.preventDefault e)
            (when-let [ids (target-ids)]
              (copy-objects-to-list! ids)
              (doseq [id ids] (dispatch! id :remove))))

        :paste
        (do (.preventDefault e)
            (let [[cx cy] @last-mouse-pos]
              (if (hand/hand-drop-zone? [cx cy])
                (paste-to-hand!)
                (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
                      tx (/ (- cx pan-x) zoom)
                      ty (/ (- cy pan-y) zoom)]
                  (paste-from-list! tx ty)))))

        :rotate-cw
        (do (.preventDefault e)
            (let [step (:rotation-step @general-settings 45)]
              (doseq [id (or (target-ids) [])]
                (let [c (some #(when (= (:id %) id) %) (:components @app-state))]
                  (if (= :die (:type c))
                    (dispatch! id :roll-increment)
                    (dispatch! id :rotate step))))))

        :rotate-ccw
        (do (.preventDefault e)
            (let [step (:rotation-step @general-settings 45)]
              (doseq [id (or (target-ids) [])]
                (let [c (some #(when (= (:id %) id) %) (:components @app-state))]
                  (if (= :die (:type c))
                    (dispatch! id :roll-decrement)
                    (dispatch! id :rotate (- step)))))))

        :flip
        (do (.preventDefault e)
            (doseq [id (or (target-ids) [])] (dispatch! id :flip)))

        :to-hand
        (do (.preventDefault e)
            (doseq [id (or (target-ids) [])] (move-card-to-hand! id)))

        :roll-shuffle
        (do (.preventDefault e)
            (doseq [id (or (target-ids) [])]
              (let [c (some #(when (= (:id %) id) %) (:components @app-state))]
                (case (:type c)
                  :die  (dispatch! id :roll)
                  :deck (dispatch! id :shuffle)
                  nil))))

        :lock
        (do (.preventDefault e)
            (doseq [id (or (target-ids) [])] (dispatch! id :lock)))

        :group
        (do (.preventDefault e)
            (group-selection!))

        :scale
        (do (.preventDefault e)
            (let [factor (:scale-step @general-settings 1.25)]
              (doseq [id (or (target-ids) [])]
                (dispatch! id :scale factor))))

        :properties
        (do (.preventDefault e)
            (swap! app-state assoc :show-properties? true))

        ;; 1–0 keys: move hand card N to table
        nil
        (when (re-matches #"[0-9]" lk)
          (let [n (if (= lk "0") 10 (js/parseInt lk 10))]
            (when-let [card-id (hand-index->id n)]
              (.preventDefault e)
              (let [[cx cy] @last-mouse-pos
                    {:keys [pan-x pan-y zoom]} (:table @app-state)
                    tx (/ (- cx pan-x) zoom)
                    ty (/ (- cy pan-y) zoom)]
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

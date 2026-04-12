(ns tabletop.components.deck
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-component! move-card-to-hand!
                                    add-to-selection! clear-selection!
                                    dispatch! dispatch-selection! component-actions]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

(defn- find-deck-at
  "Return first deck whose bbox contains table point [tx ty], excluding exclude-id."
  [tx ty exclude-id]
  (some (fn [c]
          (when (and (= :deck (:type c))
                     (not= (:id c) exclude-id)
                     (< (:x c 0) tx (+ (:x c 0) 70))
                     (< (:y c 0) ty (+ (:y c 0) 100)))
            c))
        (:components @app-state)))

(defn deck
  [{:keys [deck]}]
  (let [dragging?   (r/atom false)
        drag-moved? (r/atom false)
        long-press? (r/atom false)
        press-timer (r/atom nil)
        start-cx    (r/atom 0)
        start-cy    (r/atom 0)
        offset-x    (r/atom 0)
        offset-y    (r/atom 0)]
    (fn [{:keys [deck]}]
      (let [{:keys [id x y cards locked?]} deck
            card-count (count cards)
            empty?     (zero? card-count)
            bg         (or (:face-color (first cards)) "#1e40af")
            selected?  (contains? (:selection @app-state) id)]
        [:div
         {:class (str "absolute select-none" (when selected? " ring-2 ring-cyan-400 rounded-lg"))
          :style {:left (str x "px") :top (str y "px")}

          :on-pointer-down
          (fn [e]
            (when (and (= (.-button e) 0) (not locked?))
              (.stopPropagation e)
              (reset! drag-moved? false)
              (reset! long-press? false)
              (reset! start-cx (.-clientX e))
              (reset! start-cy (.-clientY e))
              (let [rect (.getBoundingClientRect (.-currentTarget e))
                    z    (get-in @app-state [:table :zoom] 1.0)]
                (reset! offset-x (/ (- (.-clientX e) (.-left rect)) z))
                (reset! offset-y (/ (- (.-clientY e) (.-top rect)) z)))
              (.setPointerCapture (.-currentTarget e) (.-pointerId e))
              (reset! press-timer (js/setTimeout #(reset! long-press? true) 1000))
              (reset! dragging? true)))

          :on-pointer-move
          (fn [e]
            (when @dragging?
              (let [dx (- (.-clientX e) @start-cx)
                    dy (- (.-clientY e) @start-cy)]
                (when (> (js/Math.sqrt (+ (* dx dx) (* dy dy))) 4)
                  (reset! drag-moved? true)))
              (when @long-press?
                (let [z           (get-in @app-state [:table :zoom] 1.0)
                      parent-rect (.getBoundingClientRect (.-offsetParent (.-currentTarget e)))
                      new-x (- (/ (- (.-clientX e) (.-left parent-rect)) z) @offset-x)
                      new-y (- (/ (- (.-clientY e) (.-top parent-rect)) z) @offset-y)
                      sel   (:selection @app-state)
                      old-x (:x deck x)
                      old-y (:y deck y)
                      ddx   (- new-x old-x)
                      ddy   (- new-y old-y)]
                  (if (tabletop.components.hand/hand-drop-zone? [(.-clientX e) (.-clientY e)])
                    (if (contains? sel id)
                      (doseq [sid sel] (move-card-to-hand! sid))
                      (move-card-to-hand! id))
                    (if (contains? sel id)
                      (doseq [c (:components @app-state)
                              :when (contains? sel (:id c))]
                        (move-component! (:id c) (+ (:x c 0) ddx) (+ (:y c 0) ddy)))
                      (move-component! id new-x new-y)))))))

          :on-pointer-up
          (fn [e]
            (when @press-timer
              (js/clearTimeout @press-timer)
              (reset! press-timer nil))
            (when @dragging?
              (reset! dragging? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (cond
                ;; Short click (no drag) on non-empty deck → draw top card to table
                (and (not @drag-moved?) (not @long-press?) (not empty?))
                (dispatch! id :draw-to-table (+ x 80) y)

                ;; Long-press drag released → check deck-on-deck merge
                (and @long-press? @drag-moved?)
                (let [z           (get-in @app-state [:table :zoom] 1.0)
                      parent-rect (.getBoundingClientRect (.-offsetParent (.-currentTarget e)))
                      final-x     (- (/ (- (.-clientX e) (.-left parent-rect)) z) @offset-x)
                      final-y     (- (/ (- (.-clientY e) (.-top parent-rect)) z) @offset-y)
                      target      (find-deck-at (+ final-x 35) (+ final-y 50) id)]
                  (when target
                    (dispatch! id :merge-onto (:id target))))

                ;; No drag → selection toggle
                (not @drag-moved?)
                (if (.-shiftKey e)
                  (add-to-selection! id)
                  (clear-selection!)))
              (reset! long-press? false)
              (reset! drag-moved? false)))

          :on-pointer-cancel
          (fn [e]
            (when @press-timer (js/clearTimeout @press-timer) (reset! press-timer nil))
            (reset! dragging? false)
            (reset! long-press? false)
            (reset! drag-moved? false)
            (.releasePointerCapture (.-currentTarget e) (.-pointerId e)))

          :on-context-menu
          (fn [e]
            (.preventDefault e)
            (.stopPropagation e)
            (when @press-timer (js/clearTimeout @press-timer) (reset! press-timer nil))
            (when-not (contains? (:selection @app-state) id)
              (add-to-selection! id))
            (open-context-menu! (.-clientX e) (.-clientY e) (component-actions deck)))}

         (if empty?
           [:div {:class "w-[70px] h-[100px] rounded-lg border-2 border-dashed border-gray-400
                          flex items-center justify-center text-gray-400 text-xs font-medium cursor-pointer"}
            "Empty"]

           [:div {:class "relative w-[70px] h-[100px] cursor-grab"}
            [:div {:class "absolute rounded-lg border border-gray-600 shadow w-[70px] h-[100px]"
                   :style {:top "4px" :left "4px" :background-color bg}}]
            [:div {:class "absolute rounded-lg border border-gray-600 shadow w-[70px] h-[100px]"
                   :style {:top "2px" :left "2px" :background-color bg}}]
            [:div {:class "absolute rounded-lg border border-gray-600 shadow-md w-[70px] h-[100px]
                           flex items-center justify-center"
                   :style {:top "0px" :left "0px" :background-color bg}}
             [:div {:class "w-[54px] h-[84px] rounded border-2 border-blue-300 opacity-40"
                    :style {:background "repeating-linear-gradient(45deg,#2563eb,#2563eb 2px,transparent 2px,transparent 8px)"}}]]
            [:div {:class "absolute -top-2 -right-2 bg-gray-800 text-white text-xs
                           font-bold rounded-full w-5 h-5 flex items-center justify-center shadow z-10"}
             card-count]])]))))

(ns tabletop.components.deck
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-component! remove-component! move-card-to-hand!
                                    add-to-selection! clear-selection!
                                    copy-single-to-list! dispatch! dispatch-selection! component-actions]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

(defn deck
  [{:keys [deck]}]
  (let [dragging?   (r/atom false)
        drag-moved? (r/atom false)
        start-cx    (r/atom 0)
        start-cy    (r/atom 0)
        offset-x    (r/atom 0)
        offset-y    (r/atom 0)
        key-handler (r/atom nil)]
    (fn [{:keys [deck]}]
      (let [{:keys [id x y cards]} deck
            card-count (count cards)
            empty?     (zero? card-count)
            bg         (or (:face-color (first cards)) "#1e40af")
            selected?  (contains? (:selection @app-state) id)]
        [:div
         {:class (str "absolute select-none" (when selected? " ring-2 ring-cyan-400 rounded-lg"))
          :style {:left (str x "px") :top (str y "px")}

          :on-pointer-down
          (fn [e]
            (when (= (.-button e) 0)
              (.stopPropagation e)
              (reset! drag-moved? false)
              (reset! start-cx (.-clientX e))
              (reset! start-cy (.-clientY e))
              (let [rect (.getBoundingClientRect (.-currentTarget e))
                    z    (get-in @app-state [:table :zoom] 1.0)]
                (reset! offset-x (/ (- (.-clientX e) (.-left rect)) z))
                (reset! offset-y (/ (- (.-clientY e) (.-top rect)) z))
                (reset! dragging? true)
                (.setPointerCapture (.-currentTarget e) (.-pointerId e)))
              (let [handler (fn [ke]
                              (when @dragging?
                                (cond
                                  (and (.-ctrlKey ke) (= (.-key ke) "c"))
                                  (do (.preventDefault ke) (copy-single-to-list! id))
                                  (and (.-ctrlKey ke) (= (.-key ke) "x"))
                                  (do (.preventDefault ke)
                                      (copy-single-to-list! id)
                                      (dispatch-selection! id :remove)
                                      (reset! dragging? false)))))]
                (reset! key-handler handler)
                (.addEventListener js/document "keydown" handler))))

          :on-pointer-move
          (fn [e]
            (when @dragging?
              (let [dx (- (.-clientX e) @start-cx)
                    dy (- (.-clientY e) @start-cy)]
                (when (> (js/Math.sqrt (+ (* dx dx) (* dy dy))) 4)
                  (reset! drag-moved? true)))
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
                    (move-component! id new-x new-y))))))

          :on-pointer-up
          (fn [e]
            (when @key-handler
              (.removeEventListener js/document "keydown" @key-handler)
              (reset! key-handler nil))
            (when @dragging?
              (reset! dragging? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (when-not @drag-moved?
                (if (.-shiftKey e)
                  (add-to-selection! id)
                  (clear-selection!)))))

          :on-context-menu
          (fn [e]
            (.preventDefault e)
            (.stopPropagation e)
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
             [:div {:class "w-[54px] h-[84px] rounded border-2 border-blue-300 opacity-40
                            bg-[repeating-linear-gradient(45deg,#2563eb,#2563eb_2px,transparent_2px,transparent_8px)]"}]]
            [:div {:class "absolute -top-2 -right-2 bg-gray-800 text-white text-xs
                           font-bold rounded-full w-5 h-5 flex items-center justify-center shadow z-10"}
             card-count]])]))))

(ns tabletop.components.card
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-component! remove-component! move-card-to-hand!
                                    add-to-selection! clear-selection!
                                    copy-objects-to-list! copy-single-to-list!
                                    dispatch! component-actions]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

(defn card
  [{:keys [card on-drag-end]}]
  (let [dragging?    (r/atom false)
        over-hand?   (r/atom false)
        offset-x     (r/atom 0)
        offset-y     (r/atom 0)
        ;; track drag-start position to detect shift-click vs drag
        drag-moved?  (r/atom false)
        start-cx     (r/atom 0)
        start-cy     (r/atom 0)
        ;; Ctrl+C / Ctrl+X handler while dragging
        key-handler  (r/atom nil)]
    (fn [{:keys [card on-drag-end]}]
      (let [{:keys [id suit rank color face-up? x y]} card
            face-up?  (boolean face-up?)
            zoom      (get-in @app-state [:table :zoom] 1.0)
            selected? (contains? (:selection @app-state) id)]
        [:div
         {:class         (str "absolute select-none rounded-lg border shadow-md cursor-grab "
                              "w-[70px] h-[100px] flex items-center justify-center "
                              "text-sm font-bold overflow-hidden "
                              (if face-up?
                                (str "border-gray-300 " color)
                                "border-gray-600 bg-[#1e3a5f]")
                              (when selected? " ring-2 ring-cyan-400"))
          :style         {:left      (str x "px")
                          :top       (str y "px")
                          :transform (when @over-hand? "scale(0.33)")
                          :transform-origin "top left"}
          :on-pointer-down
          (fn [e]
            (.stopPropagation e)
            (reset! drag-moved? false)
            (reset! start-cx (.-clientX e))
            (reset! start-cy (.-clientY e))
            (let [rect (.getBoundingClientRect (.-currentTarget e))]
              (reset! offset-x (/ (- (.-clientX e) (.-left rect)) zoom))
              (reset! offset-y (/ (- (.-clientY e) (.-top rect)) zoom))
              (reset! dragging? true)
              (.setPointerCapture (.-currentTarget e) (.-pointerId e)))
            ;; Register Ctrl+C / Ctrl+X while dragging
            (let [handler (fn [ke]
                            (when @dragging?
                              (cond
                                (and (.-ctrlKey ke) (= (.-key ke) "c"))
                                (do (.preventDefault ke)
                                    (copy-single-to-list! id))
                                (and (.-ctrlKey ke) (= (.-key ke) "x"))
                                (do (.preventDefault ke)
                                    (copy-single-to-list! id)
                                    (remove-component! id)
                                    (reset! dragging? false)))))]
              (reset! key-handler handler)
              (.addEventListener js/document "keydown" handler)))

          :on-pointer-move
          (fn [e]
            (when @dragging?
              (let [dx (- (.-clientX e) @start-cx)
                    dy (- (.-clientY e) @start-cy)]
                (when (> (js/Math.sqrt (+ (* dx dx) (* dy dy))) 4)
                  (reset! drag-moved? true)))
              (let [z           (get-in @app-state [:table :zoom] 1.0)
                    parent-rect (.getBoundingClientRect (.-offsetParent (.-currentTarget e)))
                    new-x       (- (/ (- (.-clientX e) (.-left parent-rect)) z) @offset-x)
                    new-y       (- (/ (- (.-clientY e) (.-top parent-rect)) z) @offset-y)
                    card-bottom (+ (.-clientY e) (* (- 100 (* @offset-y z)) z))
                    in-hand?    (tabletop.components.hand/hand-drop-zone?
                                  [(.-clientX e) card-bottom])]
                (reset! over-hand? in-hand?)
                (if in-hand?
                  ;; Move all selected (or just this card) to hand
                  (let [sel (:selection @app-state)]
                    (if (contains? sel id)
                      (doseq [sid sel] (move-card-to-hand! sid))
                      (move-card-to-hand! id)))
                  ;; Move on table
                  (let [sel   (:selection @app-state)
                        old-x (:x card x)
                        old-y (:y card y)
                        ddx   (- new-x old-x)
                        ddy   (- new-y old-y)]
                    (if (contains? sel id)
                      ;; Move all selected components together
                      (doseq [c (:components @app-state)
                              :when (contains? sel (:id c))]
                        (move-component! (:id c) (+ (:x c 0) ddx) (+ (:y c 0) ddy)))
                      (move-component! id new-x new-y)))))))

          :on-pointer-up
          (fn [e]
            (when @key-handler
              (.removeEventListener js/document "keydown" @key-handler)
              (reset! key-handler nil))
            (when @dragging?
              (reset! dragging? false)
              (reset! over-hand? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (when-not @drag-moved?
                ;; It was a click
                (if (.-shiftKey e)
                  (add-to-selection! id)
                  (clear-selection!)))
              (let [z           (get-in @app-state [:table :zoom] 1.0)
                    parent-rect (.getBoundingClientRect (.-offsetParent (.-currentTarget e)))
                    final-x     (- (/ (- (.-clientX e) (.-left parent-rect)) z) @offset-x)
                    final-y     (- (/ (- (.-clientY e) (.-top parent-rect)) z) @offset-y)]
                (when on-drag-end
                  (on-drag-end [final-x final-y])))))

          :on-double-click
          (fn [e]
            (.stopPropagation e)
            (dispatch! id :flip))

          :on-context-menu
          (fn [e]
            (.preventDefault e)
            (.stopPropagation e)
            (let [sel (:selection @app-state)
                  ids (if (contains? sel id) (vec sel) [id])
                  items (into (component-actions card)
                              [{:label "Copy objects" :action #(copy-objects-to-list! ids)}
                               {:label "Remove"       :action #(remove-component! id)}])]
              (open-context-menu! (.-clientX e) (.-clientY e) items)))}

         (if face-up?
           [:div {:class "flex flex-col items-center justify-center w-full h-full"}
            [:span {:class "text-lg leading-none"} rank]
            [:span {:class "text-xl leading-none"} suit]]
           [:div {:class "w-full h-full flex items-center justify-center"}
            [:div {:class "w-[54px] h-[84px] rounded border-2 border-blue-300 opacity-40
                           bg-[repeating-linear-gradient(45deg,#2563eb,#2563eb_2px,transparent_2px,transparent_8px)]"}]])]))))

(ns tabletop.components.tile-piece
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-component!
                                    add-to-selection! clear-selection!
                                    copy-single-to-list! dispatch! dispatch-selection! component-actions]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

(defn tile-piece [{:keys [piece]}]
  (let [dragging?   (r/atom false)
        drag-moved? (r/atom false)
        offset-x    (r/atom 0)
        offset-y    (r/atom 0)
        start-cx    (r/atom 0)
        start-cy    (r/atom 0)]
    (fn [{:keys [piece]}]
      (let [{:keys [id x y src cols rows tile-idx tile-w tile-h]} piece
            ;; tile-idx is 1-based; convert to 0-based col/row
            idx0  (dec tile-idx)
            col   (mod idx0 cols)
            row   (quot idx0 rows)
            w     (or tile-w 100)
            h     (or tile-h 100)
            selected? (contains? (:selection @app-state) id)]
        [:div
         {:style    {:position         "absolute"
                     :left             (str x "px")
                     :top              (str y "px")
                     :width            (str w "px")
                     :height           (str h "px")
                     :background-image (str "url('" src "')")
                     :background-size  (str (* cols w) "px " (* rows h) "px")
                     :background-position (str "-" (* col w) "px -" (* row h) "px")
                     :background-repeat "no-repeat"
                     :outline          (when selected? "2px solid cyan")
                     :cursor           "grab"
                     :user-select      "none"}

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
                (reset! offset-y (/ (- (.-clientY e) (.-top rect)) z)))
              (.setPointerCapture (.-currentTarget e) (.-pointerId e))
              (reset! dragging? true)))

          :on-pointer-move
          (fn [e]
            (when @dragging?
              (let [dx (- (.-clientX e) @start-cx)
                    dy (- (.-clientY e) @start-cy)]
                (when (> (js/Math.sqrt (+ (* dx dx) (* dy dy))) 4)
                  (reset! drag-moved? true)))
              (when @drag-moved?
                (let [z           (get-in @app-state [:table :zoom] 1.0)
                      parent-rect (.getBoundingClientRect (.-offsetParent (.-currentTarget e)))
                      new-x (- (/ (- (.-clientX e) (.-left parent-rect)) z) @offset-x)
                      new-y (- (/ (- (.-clientY e) (.-top parent-rect)) z) @offset-y)
                      sel   (:selection @app-state)
                      ddx   (- new-x x)
                      ddy   (- new-y y)]
                  (if (contains? sel id)
                    (doseq [c (:components @app-state)
                            :when (contains? sel (:id c))]
                      (move-component! (:id c) (+ (:x c 0) ddx) (+ (:y c 0) ddy)))
                    (move-component! id new-x new-y))))))

          :on-pointer-up
          (fn [e]
            (when @dragging?
              (reset! dragging? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (when-not @drag-moved?
                (if (.-shiftKey e)
                  (add-to-selection! id)
                  (clear-selection!)))
              (reset! drag-moved? false)))

          :on-pointer-cancel
          (fn [e]
            (reset! dragging? false)
            (reset! drag-moved? false)
            (.releasePointerCapture (.-currentTarget e) (.-pointerId e)))

          :on-context-menu
          (fn [e]
            (.preventDefault e)
            (.stopPropagation e)
            (when-not (contains? (:selection @app-state) id)
              (add-to-selection! id))
            (open-context-menu! (.-clientX e) (.-clientY e) (component-actions piece)))}]))))

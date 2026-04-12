(ns tabletop.components.tile-piece
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-component!
                                    add-to-selection! clear-selection!
                                    component-actions move-card-to-hand!]]
            [tabletop.components.context-menu :refer [open-context-menu!]]
            [tabletop.components.hand :refer [hand-drop-zone?]]))

;; ---------------------------------------------------------------------------
;; Shape clip-path helpers
;; ---------------------------------------------------------------------------

(defn- ellipse-clip [w h]
  (str "ellipse(" (/ w 2) "px " (/ h 2) "px at " (/ w 2) "px " (/ h 2) "px)"))

(defn- hexagon-clip [w h]
  ;; Flat-top hexagon inscribed in w×h rectangle
  (let [cx (/ w 2) cy (/ h 2)
        rx (/ w 2) ry (/ h 2)
        pts (for [i (range 6)]
              (let [angle (+ (* (/ js/Math.PI 3) i) (/ js/Math.PI 6))
                    px    (+ cx (* rx (js/Math.cos angle)))
                    py    (+ cy (* ry (js/Math.sin angle)))]
                (str px "px " py "px")))]
    (str "polygon(" (clojure.string/join ", " pts) ")")))

(defn- shape-clip [shape w h corner-radius]
  (case shape
    :ellipse  (ellipse-clip w h)
    :hexagon  (hexagon-clip w h)
    ;; rectangle — use border-radius instead of clip-path
    nil))

;; ---------------------------------------------------------------------------
;; Background style for a tile piece
;; ---------------------------------------------------------------------------

(defn- tile-bg-style
  "Computes background-image CSS properties to show the correct tile fragment.
   Accounts for outer-crop (global margins) and inner-crop (per-tile borders)."
  [{:keys [src cols rows tile-idx tile-w tile-h outer-crop inner-crop]
    :or   {outer-crop {:top 0 :bottom 0 :left 0 :right 0}
           inner-crop {:top 0 :bottom 0 :left 0 :right 0}}}]
  (let [idx0  (dec tile-idx)
        col   (mod idx0 cols)
        row   (quot idx0 cols)
        ;; Outer crop offsets
        oc-l  (:left outer-crop 0)
        oc-t  (:top outer-crop 0)
        ;; Inner crop offsets
        ic-l  (:left inner-crop 0)
        ic-t  (:top inner-crop 0)
        ic-r  (:right inner-crop 0)
        ic-b  (:bottom inner-crop 0)
        ;; Visible tile dimensions after inner crop
        vis-w (- tile-w ic-l ic-r)
        vis-h (- tile-h ic-t ic-b)
        ;; Background-size: the full source image scaled so that one tile = vis-w × vis-h
        ;; The cropped image width = cols * tile-w, so full image scale factor:
        bg-w  (* cols tile-w)
        bg-h  (* rows tile-h)
        ;; Background-position: offset to show the correct tile, accounting for all crops
        bp-x  (- (+ oc-l (* col tile-w) ic-l))
        bp-y  (- (+ oc-t (* row tile-h) ic-t))]
    {:background-image    (str "url('" src "')")
     :background-size     (str bg-w "px " bg-h "px")
     :background-position (str bp-x "px " bp-y "px")
     :background-repeat   "no-repeat"
     :width               (str vis-w "px")
     :height              (str vis-h "px")}))

;; ---------------------------------------------------------------------------
;; Component
;; ---------------------------------------------------------------------------

(defn tile-piece [{:keys [piece]}]
  (let [dragging?   (r/atom false)
        drag-moved? (r/atom false)
        offset-x    (r/atom 0)
        offset-y    (r/atom 0)
        start-cx    (r/atom 0)
        start-cy    (r/atom 0)]
    (fn [{:keys [piece]}]
      (let [{:keys [id x y shape corner-radius
                    tile-w tile-h inner-crop outer-crop]
             :or   {shape :rectangle corner-radius 0
                    inner-crop {:top 0 :bottom 0 :left 0 :right 0}
                    outer-crop {:top 0 :bottom 0 :left 0 :right 0}}} piece
            ic-l  (:left inner-crop 0)
            ic-t  (:top inner-crop 0)
            ic-r  (:right inner-crop 0)
            ic-b  (:bottom inner-crop 0)
            vis-w (- (or tile-w 100) ic-l ic-r)
            vis-h (- (or tile-h 100) ic-t ic-b)
            clip  (shape-clip shape vis-w vis-h corner-radius)
            selected? (contains? (:selection @app-state) id)
            bg    (tile-bg-style piece)]
        [:div
         {:style    (merge bg
                           {:position         "absolute"
                            :left             (str x "px")
                            :top              (str y "px")
                            :clip-path        clip
                            :border-radius    (when (and (= shape :rectangle) (pos? corner-radius))
                                                (str corner-radius "px"))
                            :outline          (when selected? "2px solid cyan")
                            :cursor           "grab"
                            :user-select      "none"})

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
              (when @drag-moved?
                ;; Check if dropped into hand
                (when (hand-drop-zone? [(.-clientX e) (.-clientY e)])
                  (move-card-to-hand! id)))
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

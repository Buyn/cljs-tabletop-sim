(ns tabletop.components.tile-piece
  (:require [tabletop.state :refer [app-state add-to-selection! clear-selection!
                                    emit! component-actions]]
            [tabletop.components.context-menu :refer [open-context-menu!]]
            [tabletop.components.hand :refer [hand-drop-zone?]]))

(defn- ->table [sx sy]
  (let [{:keys [pan-x pan-y zoom]} (:table @app-state)]
    [(/ (- sx pan-x) zoom) (/ (- sy pan-y) zoom)]))

(defn- ellipse-clip [w h]
  (str "ellipse(" (/ w 2) "px " (/ h 2) "px at " (/ w 2) "px " (/ h 2) "px)"))

(defn- hexagon-clip [w h]
  (let [cx (/ w 2) cy (/ h 2)
        rx (/ w 2) ry (/ h 2)
        pts (for [i (range 6)]
              (let [angle (+ (* (/ js/Math.PI 3) i) (/ js/Math.PI 6))
                    px    (+ cx (* rx (js/Math.cos angle)))
                    py    (+ cy (* ry (js/Math.sin angle)))]
                (str px "px " py "px")))]
    (str "polygon(" (clojure.string/join ", " pts) ")")))

(defn- shape-clip [shape w h _corner-radius]
  (case shape
    :ellipse (ellipse-clip w h)
    :hexagon (hexagon-clip w h)
    nil))

(defn- tile-bg-style
  [{:keys [src cols rows tile-idx tile-w tile-h outer-crop inner-crop]
    :or   {outer-crop {:top 0 :bottom 0 :left 0 :right 0}
           inner-crop {:top 0 :bottom 0 :left 0 :right 0}}}]
  (let [idx0  (dec tile-idx)
        col   (mod idx0 cols)
        row   (quot idx0 cols)
        oc-l  (:left outer-crop 0)
        oc-t  (:top outer-crop 0)
        ic-l  (:left inner-crop 0)
        ic-t  (:top inner-crop 0)
        ic-r  (:right inner-crop 0)
        ic-b  (:bottom inner-crop 0)
        vis-w (- tile-w ic-l ic-r)
        vis-h (- tile-h ic-t ic-b)
        bg-w  (* cols tile-w)
        bg-h  (* rows tile-h)
        bp-x  (- (+ oc-l (* col tile-w) ic-l))
        bp-y  (- (+ oc-t (* row tile-h) ic-t))]
    {:background-image    (str "url('" src "')")
     :background-size     (str bg-w "px " bg-h "px")
     :background-position (str bp-x "px " bp-y "px")
     :background-repeat   "no-repeat"
     :width               (str vis-w "px")
     :height              (str vis-h "px")}))

(defn tile-piece [{:keys [piece]}]
  (fn [{:keys [piece]}]
    (let [{:keys [id x y shape corner-radius tile-w tile-h inner-crop outer-crop]
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
       {:style (merge bg
                      {:position      "absolute"
                       :left          (str x "px")
                       :top           (str y "px")
                       :clip-path     clip
                       :border-radius (when (and (= shape :rectangle) (pos? corner-radius))
                                        (str corner-radius "px"))
                       :outline       (when selected? "2px solid cyan")
                       :cursor        "grab"
                       :user-select   "none"})

        :on-pointer-down
        (fn [e]
          (when (= (.-button e) 0)
            (.stopPropagation e)
            (.setPointerCapture (.-currentTarget e) (.-pointerId e))
            (let [[tx ty] (->table (.-clientX e) (.-clientY e))]
              (emit! :interaction/start-component-press id tx ty (.now js/Date)))))

        :on-pointer-move
        (fn [e]
          (let [iact (:interaction @app-state)]
            (when (and iact (= (:id iact) id))
              (let [[tx ty] (->table (.-clientX e) (.-clientY e))]
                (emit! :interaction/update-pointer tx ty (.now js/Date))))))

        :on-pointer-up
        (fn [e]
          (let [iact (:interaction @app-state)]
            (when (and iact (= (:id iact) id))
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (let [mode (:mode iact)]
                (if (= mode :pending)
                  (if (.-shiftKey e)
                    (add-to-selection! id)
                    (clear-selection!))
                  (when (hand-drop-zone? [(.-clientX e) (.-clientY e)])
                    (emit! :component/move-to-hand id))))
              (emit! :interaction/end))))

        :on-pointer-cancel
        (fn [e]
          (let [iact (:interaction @app-state)]
            (when (and iact (= (:id iact) id))
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (emit! :interaction/end))))

        :on-context-menu
        (fn [e]
          (.preventDefault e)
          (.stopPropagation e)
          (when-not (contains? (:selection @app-state) id)
            (add-to-selection! id))
          (open-context-menu! (.-clientX e) (.-clientY e) (component-actions piece)))}])))

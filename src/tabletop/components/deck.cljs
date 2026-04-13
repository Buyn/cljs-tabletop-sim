(ns tabletop.components.deck
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-component! move-card-to-hand!
                                    add-to-selection! clear-selection!
                                    dispatch! component-actions]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

;; Rendered by table.cljs inside the transform div (absolute table-space coords)
(defonce drag-ghost (r/atom nil))

(defn- find-deck-at [tx ty exclude-id]
  (some #(when (and (= :deck (:type %)) (not= (:id %) exclude-id)
                    (< (:x % 0) tx (+ (:x % 0) 70))
                    (< (:y % 0) ty (+ (:y % 0) 100))) %)
        (:components @app-state)))

(defn- ->table [sx sy]
  (let [{:keys [pan-x pan-y zoom]} (:table @app-state)]
    [(/ (- sx pan-x) zoom) (/ (- sy pan-y) zoom)]))

(defn deck [{:keys [deck]}]
  (let [mode        (r/atom :idle)   ; :idle | :card-drag | :deck-drag
        press-timer (r/atom nil)
        start-cx    (r/atom 0)
        start-cy    (r/atom 0)
        off-x       (r/atom 0)       ; cursor offset within deck/card
        off-y       (r/atom 0)
        card-data   (r/atom nil)
        drag-moved? (r/atom false)]
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
              (reset! drag-ghost nil)
              (reset! drag-moved? false)
              (reset! mode :idle)
              (reset! card-data nil)
              (reset! start-cx (.-clientX e))
              (reset! start-cy (.-clientY e))
              (let [[tx ty] (->table (.-clientX e) (.-clientY e))]
                (reset! off-x (- tx x))
                (reset! off-y (- ty y)))
              (.setPointerCapture (.-currentTarget e) (.-pointerId e))
              (reset! press-timer
                      (js/setTimeout
                       #(when (= @mode :idle)
                          (reset! mode :deck-drag))
                       800))))

          :on-pointer-move
          (fn [e]
            (let [dx (- (.-clientX e) @start-cx)
                  dy (- (.-clientY e) @start-cy)]
              (when (> (js/Math.sqrt (+ (* dx dx) (* dy dy))) 4)
                (reset! drag-moved? true)))
            (let [[tx ty] (->table (.-clientX e) (.-clientY e))]
              (case @mode
                :card-drag
                (reset! drag-ghost (assoc @drag-ghost :x (- tx @off-x) :y (- ty @off-y)))

                :deck-drag
                (let [new-x (- tx @off-x)
                      new-y (- ty @off-y)
                      sel   (:selection @app-state)
                      ddx   (- new-x x)
                      ddy   (- new-y y)]
                  (if (tabletop.components.hand/hand-drop-zone? [(.-clientX e) (.-clientY e)])
                    (if (contains? sel id)
                      (doseq [sid sel] (move-card-to-hand! sid))
                      (move-card-to-hand! id))
                    (if (contains? sel id)
                      (doseq [c (:components @app-state) :when (contains? sel (:id c))]
                        (move-component! (:id c) (+ (:x c 0) ddx) (+ (:y c 0) ddy)))
                      (move-component! id new-x new-y))))

                ;; :idle — first movement before long-press: draw card
                (when (and @drag-moved? (not empty?))
                  (when @press-timer
                    (js/clearTimeout @press-timer)
                    (reset! press-timer nil))
                  (let [top-card (peek cards)]
                    (dispatch! id :draw-card-silent)
                    (let [card (assoc top-card :type :card :face-up? false)]
                      (reset! card-data card)
                      (reset! drag-ghost {:x (- tx @off-x) :y (- ty @off-y)
                                          :back-color (:back-color top-card)})
                      (reset! mode :card-drag)))))))

          :on-pointer-up
          (fn [e]
            (when @press-timer (js/clearTimeout @press-timer) (reset! press-timer nil))
            (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
            (let [[tx ty] (->table (.-clientX e) (.-clientY e))]
              (case @mode
                :card-drag
                (let [final-x (- tx @off-x)
                      final-y (- ty @off-y)
                      c       @card-data]
                  (reset! drag-ghost nil)
                  (if (tabletop.components.hand/hand-drop-zone? [(.-clientX e) (.-clientY e)])
                    (swap! app-state update :hand conj c)
                    (swap! app-state update :components conj
                           (assoc c :id (str (random-uuid)) :x final-x :y final-y))))

                :deck-drag
                (let [final-x (- tx @off-x)
                      final-y (- ty @off-y)
                      target  (find-deck-at (+ final-x 35) (+ final-y 50) id)]
                  (when target (dispatch! id :merge-onto (:id target))))

                ;; :idle click
                (if @drag-moved?
                  nil
                  (if (not empty?)
                    (dispatch! id :draw-to-table (+ x 80) y)
                    (if (.-shiftKey e)
                      (add-to-selection! id)
                      (clear-selection!))))))
            (reset! mode :idle)
            (reset! drag-moved? false)
            (reset! card-data nil))

          :on-pointer-cancel
          (fn [e]
            (when @press-timer (js/clearTimeout @press-timer) (reset! press-timer nil))
            (when (and (= @mode :card-drag) @card-data)
              ;; Return drawn card to deck
              (swap! app-state update :components
                     (fn [cs] (mapv #(if (= (:id %) id) (update % :cards conj @card-data) %) cs))))
            (reset! drag-ghost nil)
            (reset! mode :idle)
            (reset! drag-moved? false)
            (reset! card-data nil)
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

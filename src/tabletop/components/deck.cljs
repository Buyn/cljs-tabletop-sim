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
  (let [;; Deck drag state
        dragging?    (r/atom false)
        drag-moved?  (r/atom false)
        long-press?  (r/atom false)
        press-timer  (r/atom nil)
        start-cx     (r/atom 0)
        start-cy     (r/atom 0)
        offset-x     (r/atom 0)
        offset-y     (r/atom 0)
        ;; Card-draw drag state: card drawn from deck, dragged inline
        card-drag?   (r/atom false)   ; true = dragging a drawn card
        card-x       (r/atom 0)
        card-y       (r/atom 0)
        card-data    (r/atom nil)]    ; the card being dragged
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
              (reset! card-drag? false)
              (reset! card-data nil)
              (reset! start-cx (.-clientX e))
              (reset! start-cy (.-clientY e))
              (let [rect (.getBoundingClientRect (.-currentTarget e))
                    {:keys [pan-x pan-y zoom]} (:table @app-state)]
                (reset! offset-x (- (/ (- (.-clientX e) pan-x) zoom) x))
                (reset! offset-y (- (/ (- (.-clientY e) pan-y) zoom) y)))
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

              (cond
                ;; Already in card-drag mode: move the ghost card
                @card-drag?
                (let [{:keys [pan-x pan-y zoom]} (:table @app-state)]
                  (reset! card-x (- (/ (- (.-clientX e) pan-x) zoom) @offset-x))
                  (reset! card-y (- (/ (- (.-clientY e) pan-y) zoom) @offset-y)))

                ;; Long-press: drag the whole deck
                @long-press?
                (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
                      new-x (- (/ (- (.-clientX e) pan-x) zoom) @offset-x)
                      new-y (- (/ (- (.-clientY e) pan-y) zoom) @offset-y)
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
                      (move-component! id new-x new-y))))

                ;; Short drag (no long-press yet): draw top card and start card-drag
                (and @drag-moved? (not empty?))
                (do
                  (when @press-timer
                    (js/clearTimeout @press-timer)
                    (reset! press-timer nil))
                  (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
                        cx       (- (/ (- (.-clientX e) pan-x) zoom) @offset-x)
                        cy       (- (/ (- (.-clientY e) pan-y) zoom) @offset-y)
                        top-card (peek cards)]
                    ;; Remove top card from deck in state
                    (dispatch! id :draw-card-silent)
                    (reset! card-data (assoc top-card :face-up? false))
                    (reset! card-x cx)
                    (reset! card-y cy)
                    (reset! card-drag? true))))))

          :on-pointer-up
          (fn [e]
            (when @press-timer
              (js/clearTimeout @press-timer)
              (reset! press-timer nil))
            (when @dragging?
              (reset! dragging? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (cond
                ;; Card-drag: place drawn card on table at final position
                @card-drag?
                (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
                      final-x (- (/ (- (.-clientX e) pan-x) zoom) @offset-x)
                      final-y (- (/ (- (.-clientY e) pan-y) zoom) @offset-y)
                      c       @card-data]
                  (if (tabletop.components.hand/hand-drop-zone? [(.-clientX e) (.-clientY e)])
                    (swap! app-state update :hand conj c)
                    (swap! app-state update :components conj
                           (assoc c :id (str (random-uuid)) :x final-x :y final-y)))
                  (reset! card-drag? false)
                  (reset! card-data nil))

                ;; Long-press drag: check deck-on-deck merge
                (and @long-press? @drag-moved?)
                (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
                      final-x (- (/ (- (.-clientX e) pan-x) zoom) @offset-x)
                      final-y (- (/ (- (.-clientY e) pan-y) zoom) @offset-y)
                      target  (find-deck-at (+ final-x 35) (+ final-y 50) id)]
                  (when target
                    (dispatch! id :merge-onto (:id target))))

                ;; Short click (no drag): draw top card to table
                (and (not @drag-moved?) (not @long-press?) (not empty?))
                (dispatch! id :draw-to-table (+ x 80) y)

                ;; No drag: selection toggle
                (not @drag-moved?)
                (if (.-shiftKey e)
                  (add-to-selection! id)
                  (clear-selection!)))
              (reset! long-press? false)
              (reset! drag-moved? false)))

          :on-pointer-cancel
          (fn [e]
            (when @press-timer (js/clearTimeout @press-timer) (reset! press-timer nil))
            ;; If card was drawn but drag cancelled, put it back
            (when (and @card-drag? @card-data)
              (swap! app-state update :components
                     (fn [cs] (mapv #(if (= (:id %) id)
                                       (update % :cards conj @card-data)
                                       %) cs))))
            (reset! dragging? false)
            (reset! long-press? false)
            (reset! drag-moved? false)
            (reset! card-drag? false)
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

         ;; Ghost card rendered during short-drag
         (when @card-drag?
           [:div {:class "absolute rounded-lg border shadow-md w-[70px] h-[100px]"
                  :style {:left             (str (- @card-x x) "px")
                          :top              (str (- @card-y y) "px")
                          :background-color (or (:back-color @card-data) "#1e3a5f")
                          :border-color     "#4b5563"
                          :pointer-events   "none"
                          :z-index          100}}
            [:div {:class "w-full h-full rounded-lg"
                   :style {:background "repeating-linear-gradient(45deg,#1e40af,#1e40af 2px,transparent 2px,transparent 8px)"
                           :opacity "0.6"}}]])

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

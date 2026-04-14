(ns tabletop.components.deck
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-component! add-to-selection!
                                    emit! component-actions]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

(defonce drag-ghost (r/atom nil)) ; kept for table.cljs compatibility — always nil now

(defn- ->table [sx sy]
  (let [{:keys [pan-x pan-y zoom]} (:table @app-state)]
    [(/ (- sx pan-x) zoom) (/ (- sy pan-y) zoom)]))

(defn deck [{:keys [deck]}]
  (let [captured?    (r/atom false)
        off-x        (r/atom 0)
        off-y        (r/atom 0)
        drawn-id     (r/atom nil)   ; non-nil = dragging drawn card
        deck-drag?   (r/atom false) ; true = dragging whole deck
        press-timer  (r/atom nil)]
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
              (let [[tx ty] (->table (.-clientX e) (.-clientY e))]
                (reset! off-x (- tx x))
                (reset! off-y (- ty y))
                (if empty?
                  ;; Empty deck — only deck drag makes sense
                  (let [t (js/setTimeout
                           (fn []
                             (.setPointerCapture (.-currentTarget e) (.-pointerId e))
                             (reset! deck-drag? true)
                             (reset! captured? true))
                           1000)]
                    (reset! press-timer t))
                  ;; Non-empty: immediate card draw; long-press overrides to deck drag
                  (let [top-card (peek cards)
                        new-id   (str (random-uuid))
                        card     (assoc top-card :type :card :face-up? false
                                                 :id new-id :x x :y y)
                        t (js/setTimeout
                           (fn []
                             ;; Cancel card draw, switch to deck drag
                             (swap! app-state update :components
                                    #(filterv (fn [c] (not= (:id c) @drawn-id)) %))
                             (emit! :component/add (assoc top-card :type :card :face-up? false
                                                                    :id (str (random-uuid))
                                                                    :x x :y y))
                             ;; Restore card to deck
                             (swap! app-state update :components
                                    #(mapv (fn [c] (if (= (:id c) id)
                                                     (update c :cards conj top-card) c)) %))
                             (reset! drawn-id nil)
                             (reset! deck-drag? true))
                           1000)]
                    (emit! :deck/draw-card-silent id)
                    (swap! app-state update :components conj card)
                    (reset! drawn-id new-id)
                    (reset! press-timer t)
                    (.setPointerCapture (.-currentTarget e) (.-pointerId e))
                    (reset! captured? true))))))

          :on-pointer-move
          (fn [e]
            (when @captured?
              (let [[tx ty] (->table (.-clientX e) (.-clientY e))
                    new-x   (- tx @off-x)
                    new-y   (- ty @off-y)]
                (if @deck-drag?
                  (move-component! id new-x new-y)
                  (move-component! @drawn-id new-x new-y)))))

          :on-pointer-up
          (fn [e]
            (when @press-timer
              (js/clearTimeout @press-timer)
              (reset! press-timer nil))
            (when @captured?
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (reset! captured? false)
              (reset! drawn-id nil)
              (reset! deck-drag? false)))

          :on-pointer-cancel
          (fn [e]
            (when @press-timer
              (js/clearTimeout @press-timer)
              (reset! press-timer nil))
            (when @captured?
              (when-let [did @drawn-id]
                ;; Remove placed card and return it to deck
                (let [top-card (peek cards)]
                  (swap! app-state (fn [s]
                                     (-> s
                                         (update :components #(filterv (fn [c] (not= (:id c) did)) %))
                                         (update :components #(mapv (fn [c] (if (= (:id c) id)
                                                                               (update c :cards conj top-card)
                                                                               c)) %)))))))
              (reset! captured? false)
              (reset! drawn-id nil)
              (reset! deck-drag? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))))

          :on-context-menu
          (fn [e]
            (.preventDefault e)
            (.stopPropagation e)
            (when-not (contains? (:selection @app-state) id)
              (add-to-selection! id))
            (open-context-menu! (.-clientX e) (.-clientY e) (component-actions deck)))}

         (if empty?
           [:div {:class "w-[70px] h-[100px] rounded-lg border-2 border-dashed border-gray-400
                          flex items-center justify-center text-gray-400 text-xs font-medium"}
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

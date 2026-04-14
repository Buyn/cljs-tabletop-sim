(ns tabletop.components.deck
  (:require [tabletop.state :refer [app-state add-to-selection! emit! component-actions]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

(defn- ->table [sx sy]
  (let [{:keys [pan-x pan-y zoom]} (:table @app-state)]
    [(/ (- sx pan-x) zoom) (/ (- sy pan-y) zoom)]))

(defn deck [{:keys [deck]}]
  (fn [{:keys [deck]}]
    (let [{:keys [id x y cards locked?]} deck
          bg        (or (:face-color (first cards)) "#1e40af")
          selected? (contains? (:selection @app-state) id)]
      [:div
       {:class (str "absolute select-none" (when selected? " ring-2 ring-cyan-400 rounded-lg"))
        :style {:left (str x "px") :top (str y "px")}

        :on-pointer-down
        (fn [e]
          (when (and (= (.-button e) 0) (not locked?))
            (.stopPropagation e)
            (.setPointerCapture (.-currentTarget e) (.-pointerId e))
            (let [[tx ty] (->table (.-clientX e) (.-clientY e))]
              (emit! :interaction/start-deck-press id tx ty (.now js/Date)))))

        :on-pointer-move
        (fn [e]
          (let [iact (:interaction @app-state)]
            (when (and iact (= (:deck-id iact) id))
              (let [[tx ty] (->table (.-clientX e) (.-clientY e))]
                (emit! :interaction/update-pointer tx ty (.now js/Date))))))

        :on-pointer-up
        (fn [e]
          (let [iact (:interaction @app-state)]
            (when (and iact (= (:deck-id iact) id))
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (when (= :pending (:mode iact))
                (emit! :deck/draw-to-table id (+ x 80) y))
              (emit! :interaction/end))))

        :on-pointer-cancel
        (fn [e]
          (let [iact (:interaction @app-state)]
            (when (and iact (= (:deck-id iact) id))
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (emit! :interaction/end))))

        :on-context-menu
        (fn [e]
          (.preventDefault e)
          (.stopPropagation e)
          (when-not (contains? (:selection @app-state) id)
            (add-to-selection! id))
          (open-context-menu! (.-clientX e) (.-clientY e) (component-actions deck)))}

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
         (count cards)]]])))

(ns tabletop.components.deck
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-component! draw-top-card! draw-card-to-table! shuffle-deck! flip-deck! move-card-to-hand!]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

(defn deck
  "Renders a draggable deck component.

   Props:
   - deck : map with keys :id :type :x :y :cards :custom? :suits :ranks :color"
  [{:keys [deck]}]
  (let [dragging? (r/atom false)
        offset-x  (r/atom 0)
        offset-y  (r/atom 0)]
    (fn [{:keys [deck]}]
      (let [{:keys [id x y cards color]} deck
            card-count (count cards)
            empty?     (zero? card-count)
            bg         (or color "#1e40af")]
        [:div
         {:class "absolute select-none"
          :style {:left (str x "px") :top (str y "px")}

          :on-pointer-down
          (fn [e]
            (.stopPropagation e)
            (let [rect (.getBoundingClientRect (.-currentTarget e))
                  z    (get-in @app-state [:table :zoom] 1.0)]
              (reset! offset-x (/ (- (.-clientX e) (.-left rect)) z))
              (reset! offset-y (/ (- (.-clientY e) (.-top rect)) z))
              (reset! dragging? true)
              (.setPointerCapture (.-currentTarget e) (.-pointerId e))))

          :on-pointer-move
          (fn [e]
            (when @dragging?
              (let [z           (get-in @app-state [:table :zoom] 1.0)
                    parent-rect (.getBoundingClientRect (.-offsetParent (.-currentTarget e)))
                    new-x (- (/ (- (.-clientX e) (.-left parent-rect)) z) @offset-x)
                    new-y (- (/ (- (.-clientY e) (.-top parent-rect)) z) @offset-y)]
                (if (tabletop.components.hand/hand-drop-zone? [(.-clientX e) (.-clientY e)])
                  (move-card-to-hand! id)
                  (move-component! id new-x new-y)))))

          :on-pointer-up
          (fn [e]
            (when @dragging?
              (reset! dragging? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))))

          :on-context-menu
          (fn [e]
            (.preventDefault e)
            (.stopPropagation e)
            (let [items (cond-> []
                          (not empty?) (conj {:label "Draw to Table"
                                              :action #(draw-card-to-table! id (+ x 80) y)})
                          (not empty?) (conj {:label "Draw to Hand"
                                              :action #(draw-top-card! id)})
                          true         (conj {:label "Shuffle"
                                              :action #(shuffle-deck! id)})
                          true         (conj {:label "Flip Deck"
                                              :action #(flip-deck! id)}))]
              (open-context-menu! (.-clientX e) (.-clientY e) items)))}

         (if empty?
           [:div {:class "w-[70px] h-[100px] rounded-lg border-2 border-dashed border-gray-400
                          flex items-center justify-center text-gray-400 text-xs font-medium cursor-pointer"}
            "Empty"]

           [:div {:class "relative w-[70px] h-[100px] cursor-grab"}
            ;; Shadow layers
            [:div {:class "absolute rounded-lg border border-gray-600 shadow w-[70px] h-[100px]"
                   :style {:top "4px" :left "4px" :background-color bg}}]
            [:div {:class "absolute rounded-lg border border-gray-600 shadow w-[70px] h-[100px]"
                   :style {:top "2px" :left "2px" :background-color bg}}]
            ;; Top card
            [:div {:class "absolute rounded-lg border border-gray-600 shadow-md w-[70px] h-[100px]
                           flex items-center justify-center"
                   :style {:top "0px" :left "0px" :background-color bg}}
             [:div {:class "w-[54px] h-[84px] rounded border-2 border-blue-300 opacity-40
                            bg-[repeating-linear-gradient(45deg,#2563eb,#2563eb_2px,transparent_2px,transparent_8px)]"}]]
            ;; Card count badge
            [:div {:class "absolute -top-2 -right-2 bg-gray-800 text-white text-xs
                           font-bold rounded-full w-5 h-5 flex items-center justify-center shadow z-10"}
             card-count]])]))))

(ns tabletop.components.hand
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-card-to-table!]]))

;; DOM ref for the hand area element
(defonce hand-ref (atom nil))

(defn hand-area-rect
  "Returns the bounding DOMRect of the hand area element, or nil if not mounted."
  []
  (when-let [el @hand-ref]
    (.getBoundingClientRect el)))

(defn hand-drop-zone?
  "Returns true if the client [x y] point is within the hand area bounds."
  [[x y]]
  (when-let [rect (hand-area-rect)]
    (and (>= x (.-left rect))
         (<= x (.-right rect))
         (>= y (.-top rect))
         (<= y (.-bottom rect)))))

(defn hand-card
  "Renders a single card in the hand area — always face-up, draggable back to the table."
  [{:keys [id suit rank color]}]
  (let [dragging? (r/atom false)]
    (fn [{:keys [id suit rank color]}]
      [:div {:class         (str "relative select-none rounded-lg border border-gray-300 shadow-md "
                                 "w-[70px] h-[100px] flex-shrink-0 flex items-center justify-center "
                                 "text-sm font-bold overflow-hidden cursor-grab "
                                 color)
             :on-pointer-down
             (fn [e]
               (.stopPropagation e)
               (reset! dragging? true)
               (.setPointerCapture (.-currentTarget e) (.-pointerId e)))

             :on-pointer-up
             (fn [e]
               (when @dragging?
                 (reset! dragging? false)
                 (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
                 (let [cx (.-clientX e)
                       cy (.-clientY e)]
                   (when-not (hand-drop-zone? [cx cy])
                     ;; Place card on table, adjusting for the hand sidebar offset
                     (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
                           table-x (/ (- cx 200 pan-x) zoom)
                           table-y (/ (- cy 60 pan-y) zoom)]
                       (move-card-to-table! id table-x table-y))))))

             :on-pointer-cancel
             (fn [e]
               (reset! dragging? false)
               (.releasePointerCapture (.-currentTarget e) (.-pointerId e)))}
       [:div {:class "flex flex-col items-center justify-center w-full h-full"}
        [:span {:class "text-lg leading-none"} rank]
        [:span {:class "text-xl leading-none"} suit]]])))


(defn hand-area
  "Fixed strip at the bottom of the viewport displaying the player's hand cards face-up."
  []
  (let [hand (:hand @app-state)]
    [:div {:ref   #(reset! hand-ref %)
           :class "fixed bottom-0 left-0 right-0 h-[120px] bg-gray-800 border-t border-gray-600
                   flex items-center px-4 gap-[-10px] z-10 overflow-x-auto"}
     (if (empty? hand)
       [:span {:class "text-gray-500 text-sm italic"} "Hand is empty"]
       (for [card hand]
         ^{:key (:id card)}
         [:div {:class "flex-shrink-0 -ml-2 first:ml-0"}
          [hand-card card]]))]))

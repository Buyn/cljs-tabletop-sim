(ns tabletop.components.table
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state pan-table! zoom-table! move-card-to-hand!]]
            [tabletop.components.card :as card]
            [tabletop.components.deck :as deck]
            [tabletop.components.die :as die]
            [tabletop.components.hand :as hand]))

(defn table []
  (let [dragging? (r/atom false)
        last-x    (r/atom 0)
        last-y    (r/atom 0)]
    (fn []
      (let [{:keys [pan-x pan-y zoom]} (:table @app-state)
            components                 (:components @app-state)]
        [:div
         {:class           "w-full h-full bg-green-900 overflow-hidden relative"
          :on-pointer-down (fn [e]
                             (when (= (.-target e) (.-currentTarget e))
                               (reset! dragging? true)
                               (.setPointerCapture (.-currentTarget e) (.-pointerId e))
                               (reset! last-x (.-clientX e))
                               (reset! last-y (.-clientY e))))
          :on-pointer-move (fn [e]
                             (when @dragging?
                               (let [dx (- (.-clientX e) @last-x)
                                     dy (- (.-clientY e) @last-y)]
                                 (pan-table! dx dy)
                                 (reset! last-x (.-clientX e))
                                 (reset! last-y (.-clientY e)))))
          :on-pointer-up   (fn [e]
                             (reset! dragging? false)
                             (.releasePointerCapture (.-currentTarget e) (.-pointerId e)))
          :on-pointer-cancel (fn [e]
                               (reset! dragging? false)
                               (.releasePointerCapture (.-currentTarget e) (.-pointerId e)))
          :on-wheel        (fn [e]
                             (.preventDefault e)
                             (zoom-table! (* -0.001 (.-deltaY e))))}
         [:div
          {:style {:position         "absolute"
                   :transform        (str "translate(" pan-x "px, " pan-y "px) scale(" zoom ")")
                   :transform-origin "0 0"}}
          (for [component components]
            (case (:type component)
              :deck ^{:key (:id component)} [deck/deck {:deck component}]
              :card ^{:key (:id component)} [card/card {:card component
                               :on-drag-end (fn [[cx cy]]
                                              (when (hand/hand-drop-zone? [cx cy])
                                                (move-card-to-hand! (:id component))))}]
              :die  ^{:key (:id component)} [die/die  {:die  component}]
              ^{:key (:id component)} [:div {:class "absolute bg-red-500 text-white text-xs p-1 rounded"
                     :style {:left (str (:x component 0) "px")
                             :top  (str (:y component 0) "px")}}
               (str "Unknown type: " (:type component))]))]]))))

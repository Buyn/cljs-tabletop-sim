(ns tabletop.components.general-settings-panel
  (:require [reagent.core :as r]
            [tabletop.state :refer [general-settings]]))

(defn general-settings-panel [{:keys [on-close]}]
  (let [panel-x (r/atom 350) panel-y (r/atom 80)
        dragging (r/atom false) drag-ox (r/atom 0) drag-oy (r/atom 0)]
    (fn [{:keys [on-close]}]
      [:div
       {:style {:position "fixed" :left (str @panel-x "px") :top (str @panel-y "px")
                :z-index 60 :width "240px" :background "#1f2937" :color "white"
                :border-radius "8px" :box-shadow "0 4px 24px rgba(0,0,0,0.5)"}
        :on-pointer-move (fn [e] (when @dragging
                                   (reset! panel-x (- (.-clientX e) @drag-ox))
                                   (reset! panel-y (- (.-clientY e) @drag-oy))))
        :on-pointer-up   #(reset! dragging false)
        :on-pointer-leave #(reset! dragging false)}

       [:div {:style {:padding "8px 12px" :cursor "grab" :background "#374151"
                      :border-radius "8px 8px 0 0" :display "flex"
                      :justify-content "space-between" :align-items "center"
                      :user-select "none"}
              :on-pointer-down (fn [e]
                                 (.setPointerCapture (.-currentTarget e) (.-pointerId e))
                                 (reset! dragging true)
                                 (reset! drag-ox (- (.-clientX e) @panel-x))
                                 (reset! drag-oy (- (.-clientY e) @panel-y)))}
        [:span {:style {:font-weight "600" :font-size "14px"}} "General Settings"]
        [:button {:on-click on-close :on-pointer-down #(.stopPropagation %)
                  :style {:background "none" :border "none" :color "white"
                          :cursor "pointer" :font-size "16px"}} "×"]]

       [:div {:style {:padding "12px" :display "flex" :flex-direction "column" :gap "10px"}}
        [:div
         [:label {:style {:font-size "12px" :color "#9ca3af"}} "Rotation Step (°)"]
         [:input {:type "number" :min 1 :max 360 :step 1
                  :value (:rotation-step @general-settings 45)
                  :style {:width "100%" :padding "4px 8px" :border-radius "4px"
                          :background "#374151" :color "white" :border "1px solid #4b5563"
                          :box-sizing "border-box" :margin-top "4px"}
                  :on-change #(swap! general-settings assoc :rotation-step
                                     (js/parseInt (.. % -target -value) 10))}]]
        [:div
         [:label {:style {:font-size "12px" :color "#9ca3af"}} "Scale Step (multiplier)"]
         [:input {:type "number" :min 0.1 :max 5 :step 0.05
                  :value (:scale-step @general-settings 1.25)
                  :style {:width "100%" :padding "4px 8px" :border-radius "4px"
                          :background "#374151" :color "white" :border "1px solid #4b5563"
                          :box-sizing "border-box" :margin-top "4px"}
                  :on-change #(swap! general-settings assoc :scale-step
                                     (js/parseFloat (.. % -target -value)))}]]]])))

(ns tabletop.components.properties-panel
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state]]
            [tabletop.logic.serialization :refer [deserialize-state]]))

(defn properties-panel [{:keys [on-close]}]
  (let [panel-x  (r/atom 400) panel-y (r/atom 100)
        dragging (r/atom false) drag-ox (r/atom 0) drag-oy (r/atom 0)
        text     (r/atom nil)
        error    (r/atom nil)]
    (fn [{:keys [on-close]}]
      (let [sel   (:selection @app-state)
            items (if (seq sel)
                    (filter #(contains? sel (:id %)) (:components @app-state))
                    [])]
        ;; Sync text when selection changes (only on first render or when nil)
        (when (nil? @text)
          (reset! text (js/JSON.stringify (clj->js items) nil 2)))
        [:div
         {:style {:position "fixed" :left (str @panel-x "px") :top (str @panel-y "px")
                  :z-index 60 :width "400px" :background "#1f2937" :color "white"
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
          [:span {:style {:font-weight "600" :font-size "14px"}} "Properties"]
          [:button {:on-click on-close :on-pointer-down #(.stopPropagation %)
                    :style {:background "none" :border "none" :color "white"
                            :cursor "pointer" :font-size "16px"}} "×"]]

         [:div {:style {:padding "10px" :display "flex" :flex-direction "column" :gap "8px"}}
          [:textarea
           {:value     (or @text "")
            :on-change #(do (reset! text (.. % -target -value)) (reset! error nil))
            :style     {:width "100%" :height "300px" :padding "6px" :border-radius "4px"
                        :background "#111827" :color "#d1fae5" :border "1px solid #374151"
                        :font-family "monospace" :font-size "12px" :resize "vertical"
                        :box-sizing "border-box"}}]
          (when @error
            [:p {:style {:color "#f87171" :font-size "12px" :margin 0}} @error])
          [:button
           {:on-click
            (fn []
              (try
                (let [parsed (js->clj (js/JSON.parse @text) :keywordize-keys true)
                      items  (if (map? parsed) [parsed] parsed)]
                  (swap! app-state
                         (fn [s]
                           (reduce (fn [st item]
                                     (let [item (cond-> item
                                                  (string? (:type item)) (update :type keyword))]
                                       (update st :components
                                               (fn [cs]
                                                 (mapv #(if (= (:id %) (:id item)) item %) cs)))))
                                   s items)))
                  (reset! error nil))
                (catch :default ex
                  (reset! error (str "Invalid JSON: " (.-message ex))))))
            :style {:padding "6px 12px" :background "#2563eb" :color "white"
                    :border "none" :border-radius "4px" :cursor "pointer"
                    :font-size "13px" :align-self "flex-end"}}
           "Apply"]]]))))

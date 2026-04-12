(ns tabletop.components.tile-panel
  (:require [reagent.core :as r]
            [tabletop.logic.tile :refer [make-tile-pieces]]
            [tabletop.state :refer [add-component! placement-pos]]))

(defn tile-panel [{:keys [on-close]}]
  (let [form     (r/atom {:src "" :cols 1 :rows 1 :indices ""})
        error    (r/atom nil)
        panel-x  (r/atom 200)
        panel-y  (r/atom 100)
        dragging (r/atom false)
        drag-ox  (r/atom 0)
        drag-oy  (r/atom 0)
        file-ref (r/atom nil)]
    (fn [{:keys [on-close]}]
      (let [{:keys [src cols rows indices]} @form]
        [:div
         {:style    {:position "fixed"
                     :left     (str @panel-x "px")
                     :top      (str @panel-y "px")
                     :z-index  50
                     :width    "320px"
                     :background "#1f2937"
                     :color    "white"
                     :border-radius "8px"
                     :box-shadow "0 4px 24px rgba(0,0,0,0.5)"}
          :on-pointer-move
          (fn [e]
            (when @dragging
              (reset! panel-x (- (.-clientX e) @drag-ox))
              (reset! panel-y (- (.-clientY e) @drag-oy))))
          :on-pointer-up   #(reset! dragging false)
          :on-pointer-leave #(reset! dragging false)}

         ;; Title bar
         [:div
          {:style    {:padding "8px 12px" :cursor "grab" :background "#374151"
                      :border-radius "8px 8px 0 0"
                      :display "flex" :justify-content "space-between" :align-items "center"
                      :user-select "none"}
           :on-pointer-down
           (fn [e]
             (.setPointerCapture (.-currentTarget e) (.-pointerId e))
             (reset! dragging true)
             (reset! drag-ox (- (.-clientX e) @panel-x))
             (reset! drag-oy (- (.-clientY e) @panel-y)))}
          [:span {:style {:font-weight "600" :font-size "14px"}} "Add Tile Image"]
          [:button {:on-click on-close :style {:background "none" :border "none" :color "white" :cursor "pointer" :font-size "16px"}} "✕"]]

         ;; Body
         [:div {:style {:padding "12px" :display "flex" :flex-direction "column" :gap "8px"}}

          ;; URL input
          [:label {:style {:font-size "12px" :color "#9ca3af"}} "Image URL"]
          [:input {:type        "text"
                   :value       src
                   :placeholder "https://..."
                   :style       {:width "100%" :padding "4px 8px" :border-radius "4px"
                                 :background "#374151" :color "white" :border "1px solid #4b5563"
                                 :box-sizing "border-box"}
                   :on-change   #(swap! form assoc :src (.. % -target -value))}]

          ;; Local file
          [:label {:style {:font-size "12px" :color "#9ca3af"}} "Or local file"]
          [:input {:type      "file"
                   :accept    "image/*"
                   :ref       #(reset! file-ref %)
                   :style     {:font-size "12px" :color "#d1d5db"}
                   :on-change (fn [e]
                                (when-let [file (-> e .-target .-files (aget 0))]
                                  (let [url (js/URL.createObjectURL file)]
                                    (swap! form assoc :src url))))}]

          ;; Grid size
          [:div {:style {:display "flex" :gap "8px" :align-items "center"}}
           [:div {:style {:flex 1}}
            [:label {:style {:font-size "12px" :color "#9ca3af"}} "Columns"]
            [:input {:type      "number" :min 1 :value cols
                     :style     {:width "100%" :padding "4px 8px" :border-radius "4px"
                                 :background "#374151" :color "white" :border "1px solid #4b5563"
                                 :box-sizing "border-box"}
                     :on-change #(swap! form assoc :cols (max 1 (js/parseInt (.. % -target -value) 10)))}]]
           [:div {:style {:flex 1}}
            [:label {:style {:font-size "12px" :color "#9ca3af"}} "Rows"]
            [:input {:type      "number" :min 1 :value rows
                     :style     {:width "100%" :padding "4px 8px" :border-radius "4px"
                                 :background "#374151" :color "white" :border "1px solid #4b5563"
                                 :box-sizing "border-box"}
                     :on-change #(swap! form assoc :rows (max 1 (js/parseInt (.. % -target -value) 10)))}]]]

          ;; Tile indices
          [:label {:style {:font-size "12px" :color "#9ca3af"}} (str "Tile indices (1–" (* cols rows) ", blank = all)")]
          [:input {:type        "text"
                   :value       indices
                   :placeholder "e.g. 1,3-5,7"
                   :style       {:width "100%" :padding "4px 8px" :border-radius "4px"
                                 :background "#374151" :color "white" :border "1px solid #4b5563"
                                 :box-sizing "border-box"}
                   :on-change   #(swap! form assoc :indices (.. % -target -value))}]

          (when @error
            [:p {:style {:color "#f87171" :font-size "12px" :margin 0}} @error])

          ;; Confirm
          [:button
           {:style    {:padding "6px 12px" :background "#2563eb" :color "white"
                       :border "none" :border-radius "4px" :cursor "pointer"
                       :font-size "13px" :align-self "flex-end"}
            :on-click
            (fn []
              (reset! error nil)
              (if (clojure.string/blank? src)
                (reset! error "Image source is required.")
                (let [img (js/Image.)]
                  (set! (.-onload img)
                        (fn []
                          (let [iw      (.-naturalWidth img)
                                ih      (.-naturalHeight img)
                                tile-w  (/ iw cols)
                                tile-h  (/ ih rows)
                                [px py] (placement-pos)
                                pieces  (make-tile-pieces
                                         {:src         src
                                          :cols        cols
                                          :rows        rows
                                          :indices-str indices
                                          :tile-w      tile-w
                                          :tile-h      tile-h
                                          :x           px
                                          :y           py})]
                            (doseq [p pieces] (add-component! p))
                            (on-close))))
                  (set! (.-onerror img)
                        #(reset! error "Failed to load image. Check the URL."))
                  (set! (.-src img) src))))}
           "Add Tiles"]]]))))

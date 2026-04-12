(ns tabletop.components.tile-panel
  (:require [reagent.core :as r]
            [tabletop.logic.tile :refer [make-tile-pieces]]
            [tabletop.state :refer [add-component! placement-pos]]))

(defn- num-input [label value on-change & [{:keys [min max step] :or {min 0 max 9999 step 1}}]]
  [:div {:style {:display "flex" :flex-direction "column" :gap "2px"}}
   [:label {:style {:font-size "11px" :color "#9ca3af"}} label]
   [:input {:type      "number" :min min :max max :step step :value value
            :style     {:width "60px" :padding "3px 6px" :border-radius "4px"
                        :background "#374151" :color "white" :border "1px solid #4b5563"
                        :box-sizing "border-box"}
            :on-change #(on-change (js/parseFloat (.. % -target -value)))}]])

(defn- crop-row [label crop on-change]
  [:div {:style {:display "flex" :gap "6px" :align-items "flex-end"}}
   [:span {:style {:font-size "12px" :color "#d1d5db" :width "80px" :padding-bottom "4px"}} label]
   [num-input "Top"    (:top crop 0)    #(on-change (assoc crop :top %))]
   [num-input "Bottom" (:bottom crop 0) #(on-change (assoc crop :bottom %))]
   [num-input "Left"   (:left crop 0)   #(on-change (assoc crop :left %))]
   [num-input "Right"  (:right crop 0)  #(on-change (assoc crop :right %))]])

(defn tile-panel [{:keys [on-close]}]
  (let [form     (r/atom {:src          ""
                          :cols         1
                          :rows         1
                          :indices      ""
                          :outer-crop   {:top 0 :bottom 0 :left 0 :right 0}
                          :inner-crop   {:top 0 :bottom 0 :left 0 :right 0}
                          :shape        :rectangle
                          :corner-radius 0})
        error    (r/atom nil)
        panel-x  (r/atom 200)
        panel-y  (r/atom 100)
        dragging (r/atom false)
        drag-ox  (r/atom 0)
        drag-oy  (r/atom 0)]
    (fn [{:keys [on-close]}]
      (let [{:keys [src cols rows indices outer-crop inner-crop shape corner-radius]} @form]
        [:div
         {:style    {:position "fixed"
                     :left     (str @panel-x "px")
                     :top      (str @panel-y "px")
                     :z-index  50
                     :width    "360px"
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
          [:button {:on-click on-close
                    :style {:background "none" :border "none" :color "white"
                            :cursor "pointer" :font-size "16px"}} "×"]]

         ;; Body
         [:div {:style {:padding "12px" :display "flex" :flex-direction "column" :gap "10px"
                        :max-height "80vh" :overflow-y "auto"}}

          ;; Image source
          [:div {:style {:display "flex" :flex-direction "column" :gap "4px"}}
           [:label {:style {:font-size "12px" :color "#9ca3af"}} "Image URL"]
           [:input {:type        "text"
                    :value       src
                    :placeholder "https://..."
                    :style       {:width "100%" :padding "4px 8px" :border-radius "4px"
                                  :background "#374151" :color "white" :border "1px solid #4b5563"
                                  :box-sizing "border-box"}
                    :on-change   #(swap! form assoc :src (.. % -target -value))}]
           [:label {:style {:font-size "12px" :color "#9ca3af"}} "Or local file"]
           [:input {:type      "file"
                    :accept    "image/*"
                    :style     {:font-size "12px" :color "#d1d5db"}
                    :on-change (fn [e]
                                 (when-let [file (-> e .-target .-files (aget 0))]
                                   (swap! form assoc :src (js/URL.createObjectURL file))))}]]

          ;; Grid size
          [:div {:style {:display "flex" :gap "8px"}}
           [num-input "Columns" cols #(swap! form assoc :cols (max 1 (int %))) {:min 1}]
           [num-input "Rows"    rows #(swap! form assoc :rows (max 1 (int %))) {:min 1}]]

          ;; Global crop
          [:div {:style {:display "flex" :flex-direction "column" :gap "4px"}}
           [:span {:style {:font-size "12px" :color "#9ca3af" :font-weight "600"}} "Global Image Crop (px)"]
           [crop-row "Margins" outer-crop #(swap! form assoc :outer-crop %)]]

          ;; Per-tile crop
          [:div {:style {:display "flex" :flex-direction "column" :gap "4px"}}
           [:span {:style {:font-size "12px" :color "#9ca3af" :font-weight "600"}} "Per-Tile Inner Borders (px)"]
           [crop-row "Borders" inner-crop #(swap! form assoc :inner-crop %)]]

          ;; Shape
          [:div {:style {:display "flex" :flex-direction "column" :gap "4px"}}
           [:label {:style {:font-size "12px" :color "#9ca3af"}} "Tile Shape"]
           [:div {:style {:display "flex" :gap "6px"}}
            (for [s [:rectangle :ellipse :hexagon]]
              [:button
               {:key      s
                :style    {:padding "4px 10px" :border-radius "4px" :font-size "12px"
                           :cursor "pointer" :border "1px solid #4b5563"
                           :background (if (= shape s) "#2563eb" "#374151")
                           :color "white"}
                :on-click #(swap! form assoc :shape s)}
               (name s)])]]

          ;; Corner radius (only for rectangle)
          (when (= shape :rectangle)
            [:div {:style {:display "flex" :gap "8px" :align-items "flex-end"}}
             [num-input "Corner Radius (px)" corner-radius
              #(swap! form assoc :corner-radius (max 0 %)) {:min 0}]])

          ;; Tile indices
          [:div {:style {:display "flex" :flex-direction "column" :gap "4px"}}
           [:label {:style {:font-size "12px" :color "#9ca3af"}}
            (str "Tile indices (1–" (* cols rows) ", blank = all)")]
           [:input {:type        "text"
                    :value       indices
                    :placeholder "e.g. 1,3-5,7"
                    :style       {:width "100%" :padding "4px 8px" :border-radius "4px"
                                  :background "#374151" :color "white" :border "1px solid #4b5563"
                                  :box-sizing "border-box"}
                    :on-change   #(swap! form assoc :indices (.. % -target -value))}]]

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
                                oc      outer-crop
                                ;; Cropped image dimensions
                                cw      (- iw (:left oc 0) (:right oc 0))
                                ch      (- ih (:top oc 0) (:bottom oc 0))
                                tile-w  (/ cw cols)
                                tile-h  (/ ch rows)
                                [px py] (placement-pos)
                                pieces  (make-tile-pieces
                                         {:src           src
                                          :cols          cols
                                          :rows          rows
                                          :indices-str   indices
                                          :tile-w        tile-w
                                          :tile-h        tile-h
                                          :outer-crop    outer-crop
                                          :inner-crop    inner-crop
                                          :shape         shape
                                          :corner-radius corner-radius
                                          :x             px
                                          :y             py})]
                            (doseq [p pieces] (add-component! p))
                            (on-close))))
                  (set! (.-onerror img)
                        #(reset! error "Failed to load image. Check the URL."))
                  (set! (.-src img) src))))}
           "Add Tiles"]]]))))

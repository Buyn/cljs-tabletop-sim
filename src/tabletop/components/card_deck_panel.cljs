(ns tabletop.components.card-deck-panel
  (:require [reagent.core :as r]
            [tabletop.state :refer [add-component! placement-pos]]))

(defn- num-input [label value on-change & [{:keys [min max] :or {min 0 max 9999}}]]
  [:div {:style {:display "flex" :flex-direction "column" :gap "2px"}}
   [:label {:style {:font-size "11px" :color "#9ca3af"}} label]
   [:input {:type "number" :min min :max max :default-value value
            :style {:width "60px" :padding "3px 6px" :border-radius "4px"
                    :background "#374151" :color "white" :border "1px solid #4b5563"
                    :box-sizing "border-box"}
            :on-change (fn [e]
                         (let [v (js/parseInt (.. e -target -value) 10)]
                           (when-not (js/isNaN v)
                             (on-change (cljs.core/max min (cljs.core/min max v))))))}]])

(defn- crop-row [label crop on-change]
  [:div {:style {:display "flex" :gap "6px" :align-items "flex-end"}}
   [:span {:style {:font-size "12px" :color "#d1d5db" :width "80px" :padding-bottom "4px"}} label]
   (for [[k lbl] [[:top "Top"] [:bottom "Bottom"] [:left "Left"] [:right "Right"]]]
     [:div {:key k :style {:display "flex" :flex-direction "column" :gap "2px"}}
      [:label {:style {:font-size "11px" :color "#9ca3af"}} lbl]
      [:input {:type "number" :min 0 :default-value (get crop k 0)
               :style {:width "52px" :padding "3px 6px" :border-radius "4px"
                       :background "#374151" :color "white" :border "1px solid #4b5563"
                       :box-sizing "border-box"}
               :on-change #(let [v (js/parseFloat (.. % -target -value))]
                             (when-not (js/isNaN v)
                               (on-change (assoc crop k v))))}]])])

(defn- src-input [label value on-change]
  [:div {:style {:display "flex" :flex-direction "column" :gap "4px"}}
   [:label {:style {:font-size "12px" :color "#9ca3af"}} label]
   [:input {:type "text" :value value :placeholder "https://..."
            :style {:width "100%" :padding "4px 8px" :border-radius "4px"
                    :background "#374151" :color "white" :border "1px solid #4b5563"
                    :box-sizing "border-box"}
            :on-change #(on-change (.. % -target -value))}]
   [:input {:type "file" :accept "image/*"
            :style {:font-size "12px" :color "#d1d5db"}
            :on-change (fn [e]
                         (when-let [f (-> e .-target .-files (aget 0))]
                           (on-change (js/URL.createObjectURL f))))}]])

(defn- make-image-cards
  "Generate card maps using CSS background-position to avoid canvas/CORS issues."
  [{:keys [src cols rows outer-crop inner-crop corner-radius back-src]}]
  (let [oc   outer-crop
        ic   inner-crop
        ;; tile size as percentage of the cropped area
        tw%  (/ 100.0 cols)
        th%  (/ 100.0 rows)]
    (vec (for [row (range rows)
               col (range cols)]
           {:id            (str (random-uuid))
            :suit          ""
            :rank          ""
            :face-color    "#ffffff"
            :back-color    "#1e3a5f"
            :text-color    "#111111"
            :face-up?      false
            ;; Store rendering params; card.cljs uses these when face-src is nil
            ;; but :face-bg-src is set — rendered via CSS background
            :face-bg-src   src
            :face-bg-cols  cols
            :face-bg-rows  rows
            :face-bg-col   col
            :face-bg-row   row
            :outer-crop    oc
            :inner-crop    ic
            :back-src      back-src
            :corner-radius corner-radius}))))

(defn card-deck-panel [{:keys [on-close]}]
  (let [form    (r/atom {:src           ""
                         :cols          1
                         :rows          1
                         :outer-crop    {:top 0 :bottom 0 :left 0 :right 0}
                         :inner-crop    {:top 0 :bottom 0 :left 0 :right 0}
                         :corner-radius 0
                         :back-src      ""})
        error   (r/atom nil)
        panel-x (r/atom 220)
        panel-y (r/atom 120)
        dragging (r/atom false)
        drag-ox  (r/atom 0)
        drag-oy  (r/atom 0)]
    (fn [{:keys [on-close]}]
      (let [{:keys [src cols rows outer-crop inner-crop corner-radius back-src]} @form]
        [:div
         {:style    {:position "fixed" :left (str @panel-x "px") :top (str @panel-y "px")
                     :z-index 50 :width "380px" :background "#1f2937" :color "white"
                     :border-radius "8px" :box-shadow "0 4px 24px rgba(0,0,0,0.5)"}
          :on-pointer-move  (fn [e] (when @dragging
                                      (reset! panel-x (- (.-clientX e) @drag-ox))
                                      (reset! panel-y (- (.-clientY e) @drag-oy))))
          :on-pointer-up    #(reset! dragging false)
          :on-pointer-leave #(reset! dragging false)}

         [:div {:style {:padding "8px 12px" :cursor "grab" :background "#374151"
                        :border-radius "8px 8px 0 0"
                        :display "flex" :justify-content "space-between" :align-items "center"
                        :user-select "none"}
                :on-pointer-down (fn [e]
                                   (.setPointerCapture (.-currentTarget e) (.-pointerId e))
                                   (reset! dragging true)
                                   (reset! drag-ox (- (.-clientX e) @panel-x))
                                   (reset! drag-oy (- (.-clientY e) @panel-y)))}
          [:span {:style {:font-weight "600" :font-size "14px"}} "Add Card Deck from Images"]
          [:button {:on-click on-close :on-pointer-down #(.stopPropagation %)
                    :style {:background "none" :border "none" :color "white"
                            :cursor "pointer" :font-size "16px"}} "×"]]

         [:div {:style {:padding "12px" :display "flex" :flex-direction "column" :gap "10px"
                        :max-height "80vh" :overflow-y "auto"}}

          [src-input "Face Image URL or local file" src #(swap! form assoc :src %)]

          [:div {:style {:display "flex" :gap "8px"}}
           [num-input "Columns" cols #(swap! form assoc :cols %) {:min 1}]
           [num-input "Rows"    rows #(swap! form assoc :rows %) {:min 1}]]

          [:div {:style {:display "flex" :flex-direction "column" :gap "4px"}}
           [:span {:style {:font-size "12px" :color "#9ca3af" :font-weight "600"}} "Global Crop (px)"]
           [crop-row "Margins" outer-crop #(swap! form assoc :outer-crop %)]]

          [:div {:style {:display "flex" :flex-direction "column" :gap "4px"}}
           [:span {:style {:font-size "12px" :color "#9ca3af" :font-weight "600"}} "Per-Card Inner Borders (px)"]
           [crop-row "Borders" inner-crop #(swap! form assoc :inner-crop %)]]

          [num-input "Corner Radius (px)" corner-radius #(swap! form assoc :corner-radius (max 0 %)) {:min 0}]

          [src-input "Card Back Image (optional)" back-src #(swap! form assoc :back-src %)]

          (when @error
            [:p {:style {:color "#f87171" :font-size "12px" :margin 0}} @error])

          [:button
           {:style    {:padding "6px 12px" :background "#2563eb" :color "white"
                       :border "none" :border-radius "4px" :cursor "pointer"
                       :font-size "13px" :align-self "flex-end"}
            :on-click
            (fn []
              (reset! error nil)
              (if (clojure.string/blank? src)
                (reset! error "Face image source is required.")
                (let [cards    (make-image-cards
                                {:src           src
                                 :cols          cols
                                 :rows          rows
                                 :outer-crop    outer-crop
                                 :inner-crop    inner-crop
                                 :corner-radius corner-radius
                                 :back-src      (when-not (clojure.string/blank? back-src) back-src)})
                      [px py] (placement-pos)]
                  (add-component! {:id      (str (random-uuid))
                                   :type    :deck
                                   :x       px
                                   :y       py
                                   :cards   cards
                                   :custom? false})
                  (on-close))))}
           "Create Deck"]]]))))

(ns tabletop.components.deck-customizer
  (:require [reagent.core :as r]
            [tabletop.logic.validation :refer [validate-deck-config]]
            [tabletop.logic.shuffle :refer [make-custom-deck auto-fill-ranks]]
            [tabletop.state :refer [add-component! placement-pos]]))

(def ^:private default-suits
  [{:label "♠" :color "#000000"}
   {:label "♥" :color "#dc2626"}
   {:label "♦" :color "#dc2626"}
   {:label "♣" :color "#000000"}])

(def ^:private default-ranks ["A" "2" "3" "4" "5" "6" "7" "8" "9" "10" "J" "Q" "K"])

(def ^:private palette
  ["#ffffff" "#fef08a" "#bbf7d0" "#bfdbfe" "#fecaca" "#e9d5ff" "#fed7aa" "#f5f5f4" "#1e293b"])

(defn- color-picker [selected on-pick]
  [:div.flex.flex-wrap.gap-1
   (for [c palette]
     [:button.w-6.h-6.rounded-full.border-2.transition-all
      {:key      c
       :style    {:background-color c
                  :border-color     (if (= c selected) "#3b82f6" "#d1d5db")}
       :on-click #(on-pick c)}])])

(defn deck-customizer [{:keys [on-close]}]
  (let [form (r/atom {:suits       (vec default-suits)
                      :ranks       (vec default-ranks)
                      :total-count 13
                      :face-color  "#ffffff"
                      :back-color  "#1e3a5f"
                      :text-color  "#111111"})
        errors (r/atom nil)]
    (fn [{:keys [on-close]}]
      (let [{:keys [suits ranks total-count face-color back-color text-color]} @form
            {:keys [suit-errors rank-errors]} (or @errors {})]
        [:div.fixed.inset-0.flex.items-center.justify-center.z-50
         {:style {:background "rgba(0,0,0,0.5)"}}
         [:div.bg-white.rounded-lg.shadow-xl.w-full.max-w-lg.flex.flex-col
          {:style {:max-height "90vh"}}

          [:div.px-6.py-4.border-b
           [:h2.text-lg.font-semibold "Customize Deck"]]

          [:div.overflow-y-auto.px-6.py-4.flex-1

           ;; Suits
           [:section.mb-6
            [:h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2 "Suits (4)"]
            (map-indexed
             (fn [i {:keys [label color]}]
               [:div.flex.items-center.gap-2.mb-2 {:key i}
                [:label.text-sm.w-16.text-gray-600 (str "Suit " (inc i))]
                [:input.border.rounded.px-2.py-1.text-sm.w-24.text-gray-600
                 {:type       "text"
                  :max-length 20
                  :value      label
                  :on-change  #(swap! form assoc-in [:suits i :label] (.. % -target -value))}]
                ;; per-suit color
                (for [c palette]
                  [:button.w-5.h-5.rounded-full.border-2.transition-all
                   {:key      c
                    :style    {:background-color c
                               :border-color     (if (= c color) "#3b82f6" "#d1d5db")}
                    :on-click #(swap! form assoc-in [:suits i :color] c)}])
                (when (get suit-errors i)
                  [:span.text-red-500.text-xs (get suit-errors i)])])
             suits)]

           ;; Total card count
           [:section.mb-4
            [:h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2 "Cards per suit"]
            [:input.border.rounded.px-2.py-1.text-sm.w-20
             {:type      "number"
              :min       1
              :max       52
              :value     total-count
              :on-change #(swap! form assoc :total-count
                                 (max 1 (min 52 (js/parseInt (.. % -target -value) 10))))}]
            [:span.text-xs.text-gray-400.ml-2
             (str "Total: " (* 4 total-count) " cards")]]

           ;; Ranks (only show up to total-count; rest auto-filled)
           [:section.mb-6
            [:h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2
             (str "Ranks (" total-count ") — leave blank to auto-fill")]
            (map-indexed
             (fn [i rank]
               [:div.flex.items-center.gap-2.mb-2 {:key i}
                [:label.text-sm.w-16.text-gray-600 (str "Rank " (inc i))]
                [:input.border.rounded.px-2.py-1.text-sm.flex-1.text-gray-600
                 {:type       "text"
                  :max-length 10
                  :value      rank
                  :on-change  #(swap! form assoc-in [:ranks i] (.. % -target -value))}]
                (when (get rank-errors i)
                  [:span.text-red-500.text-xs (get rank-errors i)])])
             ;; Show exactly total-count rank fields, padding with "" if needed
             (let [padded (vec (take total-count (concat ranks (repeat ""))))]
               padded))]

           ;; Card colors
           [:section.mb-4
            [:h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2 "Card Colors"]
            [:div.flex.flex-col.gap-3
             [:div.flex.items-center.gap-3
              [:span.text-sm.w-28.text-gray-600 "Face background"]
              [color-picker face-color #(swap! form assoc :face-color %)]]
             [:div.flex.items-center.gap-3
              [:span.text-sm.w-28.text-gray-600 "Face-down back"]
              [color-picker back-color #(swap! form assoc :back-color %)]]
             [:div.flex.items-center.gap-3
              [:span.text-sm.w-28.text-gray-600 "Text color"]
              [color-picker text-color #(swap! form assoc :text-color %)]]]]]

          [:div.px-6.py-4.border-t.flex.justify-end.gap-3
           [:button.px-4.py-2.rounded.bg-gray-200.hover:bg-gray-300.text-sm
            {:on-click on-close} "Cancel"]
           [:button.px-4.py-2.rounded.bg-blue-600.hover:bg-blue-700.text-white.text-sm
            {:on-click
             (fn []
               (let [cfg  @form
                     ;; Pad ranks to total-count before validation
                     cfg' (update cfg :ranks #(auto-fill-ranks % (:total-count cfg)))
                     errs (validate-deck-config cfg')]
                 (if errs
                   (reset! errors errs)
                   (do
                     (reset! errors nil)
                     (let [[px py] (placement-pos)]
                       (add-component! {:id      (str (random-uuid))
                                        :type    :deck
                                        :x       px
                                        :y       py
                                        :cards   (make-custom-deck cfg')
                                        :custom? true}))
                     (on-close)))))}
            "Confirm"]]]]))))

(ns tabletop.components.deck-customizer
  (:require [reagent.core :as r]
            [tabletop.logic.validation :refer [validate-deck-config]]
            [tabletop.logic.shuffle :refer [make-custom-deck]]
            [tabletop.state :refer [add-component!]]))

(def ^:private default-suits ["♠" "♥" "♦" "♣"])
(def ^:private default-ranks ["A" "2" "3" "4" "5" "6" "7" "8" "9" "10" "J" "Q" "K"])
(def ^:private color-palette ["#ffffff" "#fef08a" "#bbf7d0" "#bfdbfe" "#fecaca" "#e9d5ff" "#fed7aa" "#f5f5f4" "#1e293b"])

(defn deck-customizer [{:keys [on-close]}]
  (let [form-state (r/atom {:suits (vec default-suits)
                            :ranks (vec default-ranks)
                            :color "#ffffff"})
        errors     (r/atom nil)]
    (fn [{:keys [on-close]}]
      (let [{:keys [suits ranks color]} @form-state
            {:keys [suit-errors rank-errors]} (or @errors {})]
        ;; Modal overlay
        [:div.fixed.inset-0.flex.items-center.justify-center.z-50
         {:style {:background "rgba(0,0,0,0.5)"}}

         ;; Modal card
         [:div.bg-white.rounded-lg.shadow-xl.w-full.max-w-lg.flex.flex-col
          {:style {:max-height "90vh"}}

          ;; Header
          [:div.px-6.py-4.border-b
           [:h2.text-lg.font-semibold "Customize Deck"]]

          ;; Scrollable body
          [:div.overflow-y-auto.px-6.py-4.flex-1

           ;; Suits section
           [:section.mb-6
            [:h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2 "Suits (4)"]
            (map-indexed
             (fn [i suit]
               [:div.flex.items-center.gap-2.mb-2 {:key i}
                [:label.text-sm.w-16.text-gray-600 (str "Suit " (inc i))]
                [:input.border.rounded.px-2.py-1.text-sm.flex-1
                 {:type      "text"
                  :max-length 20
                  :value     suit
                  :on-change #(swap! form-state assoc-in [:suits i] (.. % -target -value))}]
                (when (get suit-errors i)
                  [:span.text-red-500.text-xs (get suit-errors i)])])
             suits)]

           ;; Ranks section
           [:section.mb-6
            [:h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2 "Ranks (13)"]
            (map-indexed
             (fn [i rank]
               [:div.flex.items-center.gap-2.mb-2 {:key i}
                [:label.text-sm.w-16.text-gray-600 (str "Rank " (inc i))]
                [:input.border.rounded.px-2.py-1.text-sm.flex-1
                 {:type      "text"
                  :max-length 10
                  :value     rank
                  :on-change #(swap! form-state assoc-in [:ranks i] (.. % -target -value))}]
                (when (get rank-errors i)
                  [:span.text-red-500.text-xs (get rank-errors i)])])
             ranks)]

           ;; Color palette section
           [:section.mb-4
            [:h3.text-sm.font-bold.uppercase.tracking-wider.text-gray-500.mb-2 "Card Color"]
            [:div.flex.flex-wrap.gap-2
             (for [c color-palette]
               [:button.w-8.h-8.rounded-full.border-2.transition-all
                {:key      c
                 :style    {:background-color c
                            :border-color     (if (= c color) "#3b82f6" "#d1d5db")}
                 :title    c
                 :on-click #(swap! form-state assoc :color c)}])]]]

          ;; Footer buttons
          [:div.px-6.py-4.border-t.flex.justify-end.gap-3
           [:button.px-4.py-2.rounded.bg-gray-200.hover:bg-gray-300.text-sm
            {:on-click on-close}
            "Cancel"]
           [:button.px-4.py-2.rounded.bg-blue-600.hover:bg-blue-700.text-white.text-sm
            {:on-click
             (fn []
               (let [config @form-state
                     errs   (validate-deck-config config)]
                 (if errs
                   (reset! errors errs)
                   (do
                     (reset! errors nil)
                     (let [{:keys [suits ranks color]} config]
                       (add-component! {:id      (str (random-uuid))
                                        :type    :deck
                                        :x       200
                                        :y       200
                                        :cards   (make-custom-deck suits ranks color)
                                        :custom? true
                                        :suits   suits
                                        :ranks   ranks
                                        :color   color}))
                     (on-close)))))}
            "Confirm"]]]]))))

(ns tabletop.components.component-panel
  (:require [tabletop.logic.shuffle :refer [make-standard-deck]]
            [tabletop.logic.dice :refer [make-die]]
            [tabletop.state :refer [add-component!]]))

(defn add-standard-deck! []
  (add-component! {:id      (str (random-uuid))
                   :type    :deck
                   :x       200
                   :y       200
                   :cards   (make-standard-deck)
                   :custom? false
                   :suits   ["♠" "♥" "♦" "♣"]
                   :ranks   ["A" "2" "3" "4" "5" "6" "7" "8" "9" "10" "J" "Q" "K"]
                   :color   "#ffffff"}))

(def die-types [4 6 8 10 12 20 100])

(defn component-panel [{:keys [on-open-customizer]}]
  [:div.fixed.left-0.top-0.h-full.w-48.bg-gray-800.text-white.flex.flex-col.overflow-y-auto.z-10
   {:style {:padding "1rem"}}

   [:h2.text-sm.font-bold.uppercase.tracking-wider.text-gray-400.mb-2
    "Decks"]

   [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-2.text-sm
    {:on-click add-standard-deck!}
    "Add Standard Deck"]

   [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-4.text-sm
    {:on-click on-open-customizer}
    "Add Custom Deck"]

   [:h2.text-sm.font-bold.uppercase.tracking-wider.text-gray-400.mb-2
    "Dice"]

   (for [faces die-types]
     [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
      {:key     faces
       :on-click #(add-component! (make-die faces))}
      (str "d" faces)])])

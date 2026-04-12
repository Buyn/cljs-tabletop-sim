(ns tabletop.components.app
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state]]
            [tabletop.components.start-screen :refer [start-screen]]
            [tabletop.components.table :refer [table]]
            [tabletop.components.hand :refer [hand-area]]
            [tabletop.components.component-panel :refer [component-panel]]
            [tabletop.components.context-menu :refer [context-menu]]
            [tabletop.components.deck-customizer :refer [deck-customizer]]
            [tabletop.components.tile-panel :refer [tile-panel]]))

(defn app []
  (let [show-customizer? (r/atom false)
        show-tile-panel? (r/atom false)]
    (fn []
      (let [view (:view @app-state)]
        (case view
          :start [start-screen]
          :table [:div.w-full.h-screen
                  [:div {:class    "h-full flex flex-col"
                         :on-click (fn [e]
                                     (when (and (:menu-open @app-state)
                                                (not (.closest (.-target e) ".menu-panel")))
                                       (swap! app-state assoc :menu-open false)))}
                   [table]
                   [hand-area]]
                  [component-panel {:on-open-customizer  #(reset! show-customizer? true)
                                    :on-open-tile-panel  #(reset! show-tile-panel? true)}]
                  [context-menu]
                  (when @show-customizer?
                    [deck-customizer {:on-close #(reset! show-customizer? false)}])
                  (when @show-tile-panel?
                    [tile-panel {:on-close #(reset! show-tile-panel? false)}])]
          [:div [:p.text-red-500 (str "Unknown view: " view)]])))))

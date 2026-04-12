(ns tabletop.components.app
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state]]
            [tabletop.components.start-screen :refer [start-screen]]
            [tabletop.components.table :refer [table]]
            [tabletop.components.hand :refer [hand-area]]
            [tabletop.components.component-panel :refer [component-panel]]
            [tabletop.components.context-menu :refer [context-menu]]
            [tabletop.components.deck-customizer :refer [deck-customizer]]
            [tabletop.components.tile-panel :refer [tile-panel]]
            [tabletop.components.keybindings-panel :refer [keybindings-panel]]
            [tabletop.components.general-settings-panel :refer [general-settings-panel]]
            [tabletop.components.properties-panel :refer [properties-panel]]
            ;; Install global input handler as a side effect
            [tabletop.logic.input]))

(defn app []
  (let [show-customizer?       (r/atom false)
        show-tile-panel?       (r/atom false)
        show-keybindings?      (r/atom false)
        show-general-settings? (r/atom false)]
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
                  [component-panel
                   {:on-open-customizer       #(reset! show-customizer? true)
                    :on-open-tile-panel       #(reset! show-tile-panel? true)
                    :on-open-keybindings      #(reset! show-keybindings? true)
                    :on-open-general-settings #(reset! show-general-settings? true)}]
                  [context-menu]
                  (when @show-customizer?
                    [deck-customizer {:on-close #(reset! show-customizer? false)}])
                  (when @show-tile-panel?
                    [tile-panel {:on-close #(reset! show-tile-panel? false)}])
                  (when @show-keybindings?
                    [keybindings-panel {:on-close #(reset! show-keybindings? false)}])
                  (when @show-general-settings?
                    [general-settings-panel {:on-close #(reset! show-general-settings? false)}])
                  (when (:show-properties? @app-state)
                    [properties-panel {:on-close #(swap! app-state assoc :show-properties? false)}])]
          [:div [:p.text-red-500 (str "Unknown view: " view)]])))))

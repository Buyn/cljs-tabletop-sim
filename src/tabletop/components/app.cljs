(ns tabletop.components.app
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state]]
            [tabletop.components.start-screen :refer [start-screen]]
            [tabletop.components.table :refer [table]]
            [tabletop.components.hand :refer [hand-area]]
            [tabletop.components.component-panel :refer [component-panel]]
            [tabletop.components.save-button :refer [save-button]]
            [tabletop.components.context-menu :refer [context-menu]]
            [tabletop.components.deck-customizer :refer [deck-customizer]]))

(defn app []
  (let [show-customizer? (r/atom false)]
    (fn []
      (let [view (:view @app-state)]
        (case view
          :start [start-screen]
          :table [:div.w-full.h-screen
                  ;; Fixed left sidebar
                  [component-panel {:on-open-customizer #(reset! show-customizer? true)}]
                  ;; Main content area with left margin to account for sidebar (~192px/w-48)
                  [:div {:class "ml-48 h-full flex flex-col"}
                   [table]
                   [hand-area]]
                  ;; Top toolbar (fixed top-right)
                  [:div {:class "fixed top-2 right-2 z-20"}
                   [save-button]]
                  ;; Context menu — always rendered, shows/hides based on state
                  [context-menu]
                  ;; Deck customizer modal — shown when show-customizer? is true
                  (when @show-customizer?
                    [deck-customizer {:on-close #(reset! show-customizer? false)}])]
          [:div [:p.text-red-500 (str "Unknown view: " view)]])))))

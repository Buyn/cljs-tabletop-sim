(ns tabletop.components.context-menu
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state]]))

;; ---------------------------------------------------------------------------
;; Helpers
;; ---------------------------------------------------------------------------

(defn open-context-menu! [x y items]
  (swap! app-state assoc :context-menu {:x x :y y :items items}))

(defn close-context-menu! []
  (swap! app-state assoc :context-menu nil))

;; ---------------------------------------------------------------------------
;; Component
;; ---------------------------------------------------------------------------

(defn context-menu []
  (let [handle-keydown (fn [e]
                         (when (= (.-key e) "Escape")
                           (close-context-menu!)))]
    (r/create-class
     {:component-did-mount
      (fn [_]
        (.addEventListener js/document "keydown" handle-keydown))

      :component-will-unmount
      (fn [_]
        (.removeEventListener js/document "keydown" handle-keydown))

      :reagent-render
      (fn []
        (let [menu (:context-menu @app-state)]
          (when menu
            (let [{:keys [x y items]} menu]
              [:div
               ;; Transparent overlay to dismiss on outside click
               [:div
                {:class    "fixed inset-0 z-40"
                 :on-click close-context-menu!}]
               ;; Floating menu
               [:div
                {:class "fixed z-50 bg-white rounded shadow-lg py-1 min-w-[8rem]"
                 :style {:left x :top y}}
                (for [item items]
                  [:button
                   {:key      (:label item)
                    :class    "block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    :on-click (fn [e]
                                (.stopPropagation e)
                                ((:action item))
                                (close-context-menu!))}
                   (:label item)])]]))))})))

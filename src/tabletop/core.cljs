(ns tabletop.core
  (:require [reagent.dom :as rdom]
            [tabletop.components.app :refer [app]]))

(defn mount []
  (rdom/render [app] (.getElementById js/document "app")))

(defn ^:dev/after-load reload []
  (mount))

(defn init []
  (mount))

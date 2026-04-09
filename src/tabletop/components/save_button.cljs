(ns tabletop.components.save-button
  (:require [tabletop.state :refer [app-state]]
            [tabletop.logic.serialization :refer [serialize-state]]))

(defn save-button []
  (let [handle-save
        (fn []
          (let [json-str (serialize-state @app-state)
                blob     (js/Blob. #js [json-str] #js {:type "application/json"})
                url      (js/URL.createObjectURL blob)
                anchor   (.createElement js/document "a")]
            (set! (.-href anchor) url)
            (set! (.-download anchor) "tabletop-save.json")
            (.appendChild (.-body js/document) anchor)
            (.click anchor)
            (.removeChild (.-body js/document) anchor)
            (js/URL.revokeObjectURL url)))]
    [:button
     {:class    "bg-gray-700 hover:bg-gray-600 text-white text-sm px-3 py-2 rounded"
      :on-click handle-save}
     "Save Game"]))

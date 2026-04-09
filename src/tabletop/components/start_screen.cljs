(ns tabletop.components.start-screen
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state initial-state]]
            [tabletop.logic.validation :refer [validate-save-file]]
            [tabletop.logic.serialization :refer [deserialize-state]]))

(defn start-screen []
  (let [file-input-ref (r/atom nil)]
    (fn []
      (let [error (:error @app-state)]
        [:div.flex.items-center.justify-center.h-screen.bg-gray-900
         [:div.bg-gray-800.rounded-2xl.shadow-2xl.p-12.flex.flex-col.items-center.gap-6.w-80
          [:h1.text-3xl.font-bold.text-white.mb-2 "Tabletop Simulator"]

          [:button.w-full.py-3.px-6.bg-green-600.hover:bg-green-500.text-white.font-semibold.rounded-lg.transition-colors
           {:on-click #(reset! app-state (assoc initial-state :view :table))}
           "New Game"]

          [:button.w-full.py-3.px-6.bg-blue-600.hover:bg-blue-500.text-white.font-semibold.rounded-lg.transition-colors
           {:on-click #(when @file-input-ref (.click @file-input-ref))}
           "Load Game"]

          [:input
           {:type      "file"
            :accept    ".json"
            :class     "hidden"
            :ref       #(reset! file-input-ref %)
            :on-change (fn [e]
                         (let [file (-> e .-target .-files (aget 0))]
                           (when file
                             (let [reader (js/FileReader.)]
                               (set! (.-onload reader)
                                     (fn [load-event]
                                       (let [text (-> load-event .-target .-result)]
                                         (try
                                           (let [parsed   (js->clj (js/JSON.parse text) :keywordize-keys true)
                                                 err-msg  (validate-save-file parsed)]
                                             (if err-msg
                                               (swap! app-state assoc :error err-msg)
                                               (let [deserialized (deserialize-state text)]
                                                 (swap! app-state #(-> %
                                                                       (merge deserialized)
                                                                       (assoc :view :table
                                                                              :error nil))))))
                                           (catch :default ex
                                             (swap! app-state assoc :error (str "Failed to parse file: " (.-message ex))))))))
                               (.readAsText reader file)))))}]

          (when error
            [:p.text-red-400.text-sm.text-center error])]]))))

(ns tabletop.components.component-panel
  (:require [tabletop.logic.shuffle :refer [make-standard-deck]]
            [tabletop.logic.dice :refer [make-die]]
            [tabletop.logic.serialization :refer [serialize-state deserialize-state]]
            [tabletop.logic.keybindings :as kb]
            [tabletop.state :refer [app-state general-settings add-component! placement-pos emit!]]))

(defn add-standard-deck! []
  (let [[x y] (placement-pos)]
    (add-component! {:id      (str (random-uuid))
                     :type    :deck
                     :x       x
                     :y       y
                     :cards   (make-standard-deck)
                     :custom? false})))

(def die-types [4 6 8 10 12 20 100])

(defn- toggle-section! [section]
  (swap! app-state
         (fn [s]
           (assoc s :menu-section
                  (when (not= (:menu-section s) section) section)))))

(defn- section-header [label section-key]
  (let [open? (= (:menu-section @app-state) section-key)]
    [:button
     {:class    "w-full flex justify-between items-center px-3 py-2 rounded bg-gray-700 hover:bg-gray-600 text-sm font-semibold mb-1"
      :on-click #(toggle-section! section-key)}
     [:span label]
     [:span (if open? "▲" "▼")]]))

(defn- save-settings! []
  (let [payload (js/JSON.stringify
                 (clj->js {:keybindings (kb/serialize)
                            :general     @general-settings}))
        blob (js/Blob. #js [payload] #js {:type "application/json"})
        url  (js/URL.createObjectURL blob)
        a    (.createElement js/document "a")]
    (set! (.-href a) url)
    (set! (.-download a) "tabletop-settings.json")
    (.appendChild (.-body js/document) a)
    (.click a)
    (.removeChild (.-body js/document) a)
    (js/URL.revokeObjectURL url)))

(defn- load-settings! [file]
  (when file
    (let [reader (js/FileReader.)]
      (set! (.-onload reader)
            (fn [ev]
              (let [parsed (js->clj (js/JSON.parse (-> ev .-target .-result)) :keywordize-keys true)]
                (when-let [kb (:keybindings parsed)] (kb/deserialize (clj->js kb)))
                (when-let [gs (:general parsed)] (reset! general-settings gs)))))
      (.readAsText reader file))))

(defn- save-game! []
  (let [json-str (serialize-state @app-state)
        blob     (js/Blob. #js [json-str] #js {:type "application/json"})
        url      (js/URL.createObjectURL blob)
        anchor   (.createElement js/document "a")]
    (set! (.-href anchor) url)
    (set! (.-download anchor) "tabletop-save.json")
    (.appendChild (.-body js/document) anchor)
    (.click anchor)
    (.removeChild (.-body js/document) anchor)
    (js/URL.revokeObjectURL url)))

(defn- import-component! [file]
  (when file
    (let [reader (js/FileReader.)]
      (set! (.-onload reader)
            (fn [ev]
              (try
                (let [data (js->clj (js/JSON.parse (-> ev .-target .-result)) :keywordize-keys true)]
                  (emit! :component/import data))
                (catch :default _))))
      (.readAsText reader file))))

(defn- load-game! [file]
  (when file
    (let [reader (js/FileReader.)]
      (set! (.-onload reader)
            (fn [ev]
              (let [text (-> ev .-target .-result)]
                (try
                  (let [deserialized (deserialize-state text)]
                    (swap! app-state #(-> % (merge deserialized) (assoc :view :table :error nil))))
                  (catch :default ex
                    (swap! app-state assoc :error (str "Failed to load: " (.-message ex))))))))
      (.readAsText reader file))))

(defn component-panel [{:keys [on-open-customizer on-open-tile-panel on-open-card-deck-panel on-open-keybindings on-open-general-settings]}]
  (let [file-input      (atom nil)
        import-input    (atom nil)
        settings-file   (atom nil)]
    (fn [{:keys [on-open-customizer on-open-tile-panel on-open-card-deck-panel on-open-keybindings on-open-general-settings]}]
      (let [{:keys [menu-open menu-section]} @app-state]
        [:div
         {:class "fixed left-0 top-0 z-20 menu-panel"
          :on-mouse-enter #(swap! app-state assoc :menu-open true)}

         ;; Hamburger button
         [:button
          {:class    "m-2 p-2 bg-gray-800 hover:bg-gray-700 text-white rounded text-lg leading-none"
           :on-click #(swap! app-state update :menu-open not)}
          "☰"]

         ;; Slide-out panel
         (when menu-open
           [:div
            {:class    "absolute top-0 left-0 w-48 bg-gray-800 text-white flex flex-col overflow-y-auto shadow-xl"
             :style    {:padding "0.5rem" :padding-top "2.5rem" :min-height "100vh"}}

            ;; Decks section
            [section-header "Decks" :decks]
            (when (= menu-section :decks)
              [:div {:class "mb-2"}
               [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
                {:on-click add-standard-deck!}
                "Add Standard Deck"]
               [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
                {:on-click on-open-customizer}
                "Add Custom Deck"]])

            ;; Tile Images section
            [section-header "Tile Images" :tiles]
            (when (= menu-section :tiles)
              [:div {:class "mb-2"}
               [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
                {:on-click on-open-tile-panel}
                "Add Tile Image"]
               [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
                {:on-click on-open-card-deck-panel}
                "Add Card Deck from Images"]])

            ;; Dice section
            [section-header "Dice" :dice]
            (when (= menu-section :dice)
              [:div {:class "mb-2"}
               (for [faces die-types]
                 [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
                  {:key      faces
                   :on-click #(let [[x y] (placement-pos)]
                                (add-component! (make-die faces x y)))}
                  (str "d" faces)])])

            ;; Save / Load section
            [section-header "Save / Load" :save]
            (when (= menu-section :save)
              [:div {:class "mb-2"}
               [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
                {:on-click save-game!}
                "Save Game"]
               [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
                {:on-click #(when @file-input (.click @file-input))}
                "Load Game"]
               [:input {:type      "file"
                        :accept    ".json"
                        :class     "hidden"
                        :ref       #(reset! file-input %)
                        :on-change (fn [e]
                                     (load-game! (-> e .-target .-files (aget 0))))}]
               [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
                {:on-click #(when @import-input (.click @import-input))}
                "Import Component"]
               [:input {:type      "file"
                        :accept    ".json"
                        :class     "hidden"
                        :ref       #(reset! import-input %)
                        :on-change (fn [e]
                                     (import-component! (-> e .-target .-files (aget 0))))}]])

            ;; Settings section
            [section-header "Settings" :settings]
            (when (= menu-section :settings)
              [:div {:class "mb-2"}
               [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
                {:on-click on-open-keybindings}
                "Configure Keybindings"]
               [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
                {:on-click on-open-general-settings}
                "General Settings"]
               [:button.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm
                {:on-click save-settings!}
                "Save Settings"]
               [:label.w-full.text-left.px-3.py-2.rounded.bg-gray-700.hover:bg-gray-600.mb-1.text-sm.cursor-pointer.block
                "Load Settings"
                [:input {:type "file" :accept ".json" :class "hidden"
                         :ref  #(reset! settings-file %)
                         :on-change #(load-settings! (-> % .-target .-files (aget 0)))}]]])])]))))

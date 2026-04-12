(ns tabletop.components.keybindings-panel
  (:require [reagent.core :as r]
            [tabletop.logic.keybindings :as kb]))

(def action-labels
  {:copy "Copy" :cut "Cut" :paste "Paste"
   :rotate-cw "Rotate CW" :rotate-ccw "Rotate CCW"
   :flip "Flip" :to-hand "To Hand" :roll-shuffle "Roll / Shuffle"
   :lock "Lock" :group "Group" :scale "Scale"
   :properties "Properties" :camera-pan "Camera Pan"})

(defn- save-bindings! []
  (let [json (js/JSON.stringify (kb/serialize))
        blob (js/Blob. #js [json] #js {:type "application/json"})
        url  (js/URL.createObjectURL blob)
        a    (.createElement js/document "a")]
    (set! (.-href a) url)
    (set! (.-download a) "keybindings.json")
    (.appendChild (.-body js/document) a)
    (.click a)
    (.removeChild (.-body js/document) a)
    (js/URL.revokeObjectURL url)))

(defn- load-bindings! [file]
  (when file
    (let [reader (js/FileReader.)]
      (set! (.-onload reader)
            (fn [ev]
              (kb/deserialize (js/JSON.parse (-> ev .-target .-result)))))
      (.readAsText reader file))))

(defn keybindings-panel [{:keys [on-close]}]
  (let [panel-x (r/atom 300) panel-y (r/atom 80)
        dragging (r/atom false) drag-ox (r/atom 0) drag-oy (r/atom 0)
        editing  (r/atom nil)]
    (fn [{:keys [on-close]}]
      [:div
       {:style {:position "fixed" :left (str @panel-x "px") :top (str @panel-y "px")
                :z-index 60 :width "280px" :background "#1f2937" :color "white"
                :border-radius "8px" :box-shadow "0 4px 24px rgba(0,0,0,0.5)"}
        :on-pointer-move (fn [e] (when @dragging
                                   (reset! panel-x (- (.-clientX e) @drag-ox))
                                   (reset! panel-y (- (.-clientY e) @drag-oy))))
        :on-pointer-up   #(reset! dragging false)
        :on-pointer-leave #(reset! dragging false)}

       [:div {:style {:padding "8px 12px" :cursor "grab" :background "#374151"
                      :border-radius "8px 8px 0 0" :display "flex"
                      :justify-content "space-between" :align-items "center"
                      :user-select "none"}
              :on-pointer-down (fn [e]
                                 (.setPointerCapture (.-currentTarget e) (.-pointerId e))
                                 (reset! dragging true)
                                 (reset! drag-ox (- (.-clientX e) @panel-x))
                                 (reset! drag-oy (- (.-clientY e) @panel-y)))}
        [:span {:style {:font-weight "600" :font-size "14px"}} "Keybindings"]
        [:button {:on-click on-close :on-pointer-down #(.stopPropagation %)
                  :style {:background "none" :border "none" :color "white"
                          :cursor "pointer" :font-size "16px"}} "×"]]

       [:div {:style {:padding "10px" :display "flex" :flex-direction "column" :gap "4px"
                      :max-height "70vh" :overflow-y "auto"}}
        (for [[action label] action-labels]
          [:div {:key action :style {:display "flex" :justify-content "space-between"
                                     :align-items "center" :padding "3px 0"}}
           [:span {:style {:font-size "12px"}} label]
           (if (= @editing action)
             [:input {:auto-focus true
                      :style {:width "60px" :padding "2px 6px" :border-radius "4px"
                              :background "#374151" :color "white" :border "1px solid #60a5fa"
                              :font-size "12px" :text-align "center"}
                      :placeholder "key"
                      :on-key-down (fn [e]
                                     (.preventDefault e)
                                     (let [k (.-key e)]
                                       (when (not= k "Escape")
                                         (swap! kb/bindings assoc action (.toLowerCase k)))
                                       (reset! editing nil)))}]
             [:button {:on-click #(reset! editing action)
                       :style {:padding "2px 10px" :border-radius "4px" :font-size "12px"
                               :background "#374151" :color "white" :border "1px solid #4b5563"
                               :cursor "pointer" :min-width "40px"}}
              (or (kb/key-for action) "—")])])

        [:div {:style {:display "flex" :gap "6px" :margin-top "8px"}}
         [:button {:on-click save-bindings!
                   :style {:flex 1 :padding "5px" :background "#2563eb" :color "white"
                           :border "none" :border-radius "4px" :cursor "pointer" :font-size "12px"}}
          "Save"]
         [:label {:style {:flex 1 :padding "5px" :background "#374151" :color "white"
                          :border "1px solid #4b5563" :border-radius "4px" :cursor "pointer"
                          :font-size "12px" :text-align "center"}}
          "Load"
          [:input {:type "file" :accept ".json" :style {:display "none"}
                   :on-change #(load-bindings! (-> % .-target .-files (aget 0)))}]]]]])))

(ns tabletop.components.card
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-component! toggle-card-face! remove-component!]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

(defn card
  "Renders a draggable playing card component.

   Props:
   - card        : map with keys :id :suit :rank :color :face-up? :x :y
   - on-drag-end : optional callback called with [x y] when drag ends"
  [{:keys [card on-drag-end]}]
  (let [dragging? (r/atom false)
        offset-x  (r/atom 0)
        offset-y  (r/atom 0)]
    (fn [{:keys [card on-drag-end]}]
      (let [{:keys [id suit rank color face-up? x y]} card
            face-up? (boolean face-up?)
            zoom     (get-in @app-state [:table :zoom] 1.0)]
        [:div
         {:class         (str "absolute select-none rounded-lg border shadow-md cursor-grab "
                              "w-[70px] h-[100px] flex items-center justify-center "
                              "text-sm font-bold overflow-hidden "
                              (if face-up?
                                (str "border-gray-300 " color)
                                "border-gray-600 bg-[#1e3a5f]"))
          :style         {:left (str x "px") :top (str y "px")}
          :on-pointer-down
          (fn [e]
            (.stopPropagation e)
            (let [rect (.getBoundingClientRect (.-currentTarget e))]
              (reset! offset-x (/ (- (.-clientX e) (.-left rect)) zoom))
              (reset! offset-y (/ (- (.-clientY e) (.-top rect)) zoom))
              (reset! dragging? true)
              (.setPointerCapture (.-currentTarget e) (.-pointerId e))))

          :on-pointer-move
          (fn [e]
            (when @dragging?
              (let [z        (get-in @app-state [:table :zoom] 1.0)
                    parent-rect (.getBoundingClientRect
                                 (.-offsetParent (.-currentTarget e)))
                    new-x (- (/ (- (.-clientX e) (.-left parent-rect)) z) @offset-x)
                    new-y (- (/ (- (.-clientY e) (.-top parent-rect)) z) @offset-y)]
                (move-component! id new-x new-y))))

          :on-pointer-up
          (fn [e]
            (when @dragging?
              (reset! dragging? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (let [z        (get-in @app-state [:table :zoom] 1.0)
                    parent-rect (.getBoundingClientRect
                                 (.-offsetParent (.-currentTarget e)))
                    final-x (- (/ (- (.-clientX e) (.-left parent-rect)) z) @offset-x)
                    final-y (- (/ (- (.-clientY e) (.-top parent-rect)) z) @offset-y)]
                (when on-drag-end
                  (on-drag-end [final-x final-y])))))

          :on-double-click
          (fn [e]
            (.stopPropagation e)
            (toggle-card-face! id))

          :on-context-menu
          (fn [e]
            (.preventDefault e)
            (.stopPropagation e)
            (open-context-menu!
             (.-clientX e)
             (.-clientY e)
             [{:label "Remove"
               :action #(remove-component! id)}]))}

         (if face-up?
           ;; Face-up: show rank and suit
           [:div {:class "flex flex-col items-center justify-center w-full h-full"}
            [:span {:class "text-lg leading-none"} rank]
            [:span {:class "text-xl leading-none"} suit]]
           ;; Face-down: back pattern
           [:div {:class "w-full h-full flex items-center justify-center"}
            [:div {:class "w-[54px] h-[84px] rounded border-2 border-blue-300 opacity-40
                           bg-[repeating-linear-gradient(45deg,#2563eb,#2563eb_2px,transparent_2px,transparent_8px)]"}]])]))))

(ns tabletop.components.die
  (:require [reagent.core :as r]
            [tabletop.state :refer [app-state move-component! remove-component! move-card-to-hand!]]
            [tabletop.logic.dice :refer [roll-die]]
            [tabletop.components.context-menu :refer [open-context-menu!]]))

;; ---------------------------------------------------------------------------
;; Helpers
;; ---------------------------------------------------------------------------

(def die-colors
  {4   "bg-red-500 text-white"
   6   "bg-blue-500 text-white"
   8   "bg-green-500 text-white"
   10  "bg-purple-500 text-white"
   12  "bg-orange-500 text-white"
   20  "bg-yellow-400 text-gray-900"
   100 "bg-pink-500 text-white"})

(defn die-color [faces]
  (get die-colors faces "bg-gray-500 text-white"))

;; ---------------------------------------------------------------------------
;; Component
;; ---------------------------------------------------------------------------

(defn die
  "Renders a draggable, rollable die component.

   Props:
   - die : map with keys :id :type :x :y :faces :result"
  [{:keys [die]}]
  (let [dragging? (r/atom false)
        moved?    (r/atom false)
        start-x   (r/atom 0)
        start-y   (r/atom 0)
        offset-x  (r/atom 0)
        offset-y  (r/atom 0)]
    (fn [{:keys [die]}]
      (let [{:keys [id faces result x y]} die
            label (str "d" faces)]
        [:div
         {:class
          (str "absolute select-none rounded-lg shadow-md cursor-pointer "
               "w-[70px] h-[70px] flex flex-col items-center justify-center "
               "font-bold "
               (die-color faces))
          :style {:left (str x "px") :top (str y "px")}

          :on-pointer-down
          (fn [e]
            (.stopPropagation e)
            (reset! moved? false)
            (reset! dragging? true)
            (reset! start-x (.-clientX e))
            (reset! start-y (.-clientY e))
            (let [rect (.getBoundingClientRect (.-currentTarget e))
                  z    (get-in @app-state [:table :zoom] 1.0)]
              (reset! offset-x (/ (- (.-clientX e) (.-left rect)) z))
              (reset! offset-y (/ (- (.-clientY e) (.-top rect)) z)))
            (.setPointerCapture (.-currentTarget e) (.-pointerId e)))

          :on-pointer-move
          (fn [e]
            (when @dragging?
              (let [dx (- (.-clientX e) @start-x)
                    dy (- (.-clientY e) @start-y)]
                (when (> (js/Math.sqrt (+ (* dx dx) (* dy dy))) 5)
                  (reset! moved? true)
                  (let [z           (get-in @app-state [:table :zoom] 1.0)
                        parent-rect (.getBoundingClientRect
                                     (.-offsetParent (.-currentTarget e)))
                        new-x (- (/ (- (.-clientX e) (.-left parent-rect)) z) @offset-x)
                        new-y (- (/ (- (.-clientY e) (.-top parent-rect)) z) @offset-y)]
                    (if (tabletop.components.hand/hand-drop-zone? [(.-clientX e) (.-clientY e)])
                      (move-card-to-hand! id)
                      (move-component! id new-x new-y)))))))

          :on-pointer-up
          (fn [e]
            (when @dragging?
              (reset! dragging? false)
              (.releasePointerCapture (.-currentTarget e) (.-pointerId e))
              (when-not @moved?
                ;; Click: roll the die
                (swap! app-state update :components
                       (fn [cs]
                         (mapv (fn [c]
                                 (if (= (:id c) id)
                                   (roll-die c)
                                   c))
                               cs))))))

          :on-context-menu
          (fn [e]
            (.preventDefault e)
            (.stopPropagation e)
            (open-context-menu!
             (.-clientX e)
             (.-clientY e)
             [{:label "Remove"
               :action #(remove-component! id)}]))}

         [:span {:class "text-xs leading-none opacity-80"} label]
         [:span {:class "text-xl leading-none mt-1"}
          (if result (str result) "—")]]))))

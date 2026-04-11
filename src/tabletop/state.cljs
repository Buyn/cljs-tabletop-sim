(ns tabletop.state
  (:require [reagent.core :as r]
            [tabletop.logic.shuffle :refer [shuffle-vec]]))

(def initial-state
  {:view         :start
   :table        {:pan-x 0 :pan-y 0 :zoom 1.0}
   :components   []
   :hand         []
   :context-menu nil
   :error        nil
   :menu-open    true
   :menu-section nil
   :selection    #{}
   :copy-list    []})

(defonce app-state (r/atom initial-state))

;; ---------------------------------------------------------------------------
;; Pure state helpers (used by action methods below)
;; ---------------------------------------------------------------------------

(defn add-component [state component]
  (update state :components conj component))

(defn remove-component [state id]
  (update state :components (fn [cs] (vec (remove #(= (:id %) id) cs)))))

(defn move-component [state id x y]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (assoc % :x x :y y) %) cs))))

(defn move-card-to-hand [state id]
  (let [card (some #(when (= (:id %) id) %) (:components state))]
    (if card
      (-> state
          (update :components (fn [cs] (vec (remove #(= (:id %) id) cs))))
          (update :hand conj card))
      state)))

(defn move-card-to-table [state id x y]
  (let [card (some #(when (= (:id %) id) %) (:hand state))]
    (if card
      (-> state
          (update :hand (fn [h] (vec (remove #(= (:id %) id) h))))
          (update :components conj (assoc card :x x :y y)))
      state)))

(defn pan-table [state dx dy]
  (-> state
      (update-in [:table :pan-x] + dx)
      (update-in [:table :pan-y] + dy)))

(defn zoom-table [state delta]
  (update-in state [:table :zoom] (fn [z] (max 0.5 (min 2.0 (+ z delta))))))

;; ---------------------------------------------------------------------------
;; Effectful wrappers
;; ---------------------------------------------------------------------------

(defn add-component!     [c]        (swap! app-state add-component c))
(defn remove-component!  [id]       (swap! app-state remove-component id))
(defn move-component!    [id x y]   (swap! app-state move-component id x y))
(defn move-card-to-hand! [id]       (swap! app-state move-card-to-hand id))
(defn move-card-to-table![id x y]   (swap! app-state move-card-to-table id x y))
(defn pan-table!         [dx dy]    (swap! app-state pan-table dx dy))
(defn zoom-table!        [delta]    (swap! app-state zoom-table delta))

;; ---------------------------------------------------------------------------
;; Selection
;; ---------------------------------------------------------------------------

(defn set-selection!    [ids] (swap! app-state assoc :selection (set ids)))
(defn clear-selection!  []    (swap! app-state assoc :selection #{}))
(defn add-to-selection! [id]  (swap! app-state update :selection conj id))

;; ---------------------------------------------------------------------------
;; Copy list
;; ---------------------------------------------------------------------------

(defn copy-objects-to-list! [ids]
  (let [id-set (set ids)]
    (swap! app-state assoc :copy-list
           (vec (filter #(id-set (:id %)) (:components @app-state))))))

(defn copy-single-to-list! [id]
  (when-let [c (some #(when (= (:id %) id) %) (:components @app-state))]
    (swap! app-state assoc :copy-list [c])))

(defn paste-from-list! [cx cy]
  (let [items (:copy-list @app-state)]
    (when (seq items)
      (let [base-x (:x (first items) 0)
            base-y (:y (first items) 0)]
        (doseq [item items]
          (add-component! (assoc item
                                 :id (str (random-uuid))
                                 :x (+ cx (- (:x item 0) base-x))
                                 :y (+ cy (- (:y item 0) base-y)))))))))

(defn paste-to-hand! []
  (doseq [item (:copy-list @app-state)]
    (swap! app-state update :hand conj (assoc item :id (str (random-uuid))))))

;; ---------------------------------------------------------------------------
;; Dispatch system
;; ---------------------------------------------------------------------------

(defmulti perform-action
  (fn [state id action & _]
    [(:type (some #(when (= (:id %) id) %) (:components state))) action]))

(defmethod perform-action :default [state _ _ & _] state)

(defn dispatch! [id action & args]
  (swap! app-state #(apply perform-action % id action args)))

(defn dispatch-selection! [id action & args]
  (let [sel (:selection @app-state)
        ids (if (contains? sel id) sel #{id})]
    (doseq [sid ids]
      (apply dispatch! sid action args))))

;; ---------------------------------------------------------------------------
;; Action methods
;; ---------------------------------------------------------------------------

(defn- find-and-rest [id cs]
  (reduce (fn [[found others] c]
            (if (= (:id c) id) [c others] [found (conj others c)]))
          [nil []] cs))

(defmethod perform-action [:deck :shuffle] [state id _]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (update % :cards shuffle-vec) %) cs))))

(defmethod perform-action [:deck :draw-to-hand] [state id _]
  (let [[deck others] (find-and-rest id (:components state))
        card (first (:cards deck))]
    (if card
      (-> state
          (assoc :components (conj (vec others) (update deck :cards (comp vec rest))))
          (update :hand conj (assoc card :type :card)))
      state)))

(defmethod perform-action [:deck :draw-to-table] [state id _ x y]
  (let [[deck others] (find-and-rest id (:components state))
        card (first (:cards deck))]
    (if card
      (assoc state :components
             (conj (vec others)
                   (update deck :cards (comp vec rest))
                   (assoc card :type :card :x x :y y :face-up? true)))
      state)))

(defmethod perform-action [:deck :flip] [state id _]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id)
                            (update % :cards (fn [cards] (mapv (fn [c] (update c :face-up? not)) cards)))
                            %) cs))))

(defmethod perform-action [:card :flip] [state id _]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id) (update % :face-up? not) %) cs))))

(defmethod perform-action [:die :roll] [state id _]
  (update state :components
          (fn [cs] (mapv #(if (= (:id %) id)
                            (assoc % :result (inc (rand-int (:faces % 6))))
                            %) cs))))

(doseq [t [:card :die :deck]]
  (defmethod perform-action [t :remove] [state id _]
    (remove-component state id)))

;; ---------------------------------------------------------------------------
;; Component capabilities (data-driven context menus)
;; ---------------------------------------------------------------------------

(defmulti component-actions :type)

(defn- common-actions [id]
  [{:label "Copy"   :action #(copy-objects-to-list!
                               (let [sel (:selection @app-state)]
                                 (if (contains? sel id) (vec sel) [id])))}
   {:label "Remove" :action #(dispatch-selection! id :remove)}])

(defmethod component-actions :deck [{:keys [id x y cards]}]
  (let [empty? (empty? cards)]
    (into (cond-> []
            (not empty?) (conj {:label "Draw to Table" :action #(dispatch! id :draw-to-table (+ x 80) y)})
            (not empty?) (conj {:label "Draw to Hand"  :action #(dispatch! id :draw-to-hand)})
            true         (conj {:label "Shuffle"        :action #(dispatch! id :shuffle)})
            true         (conj {:label "Flip Deck"      :action #(dispatch-selection! id :flip)}))
          (common-actions id))))

(defmethod component-actions :card [{:keys [id]}]
  (into [{:label "Flip" :action #(dispatch-selection! id :flip)}]
        (common-actions id)))

(defmethod component-actions :die [{:keys [id]}]
  (into [{:label "Roll" :action #(dispatch-selection! id :roll)}]
        (common-actions id)))

(defmethod component-actions :default [c] (common-actions (:id c)))

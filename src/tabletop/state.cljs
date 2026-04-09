(ns tabletop.state
  (:require [reagent.core :as r]
            [tabletop.logic.shuffle :refer [shuffle-vec]]))

(def initial-state
  {:view         :start
   :table        {:pan-x 0 :pan-y 0 :zoom 1.0}
   :components   []
   :hand         []
   :context-menu nil
   :error        nil})

(defonce app-state (r/atom initial-state))

;; ---------------------------------------------------------------------------
;; Pure state transition helpers (take state map, return new state map)
;; ---------------------------------------------------------------------------

(defn add-component
  "Conj component onto :components."
  [state component]
  (update state :components conj component))

(defn remove-component
  "Remove the component with matching :id from :components."
  [state id]
  (update state :components (fn [cs] (vec (remove #(= (:id %) id) cs)))))

(defn move-component
  "Update :x and :y for the component with matching :id in :components."
  [state id x y]
  (update state :components
          (fn [cs]
            (mapv (fn [c]
                    (if (= (:id c) id)
                      (assoc c :x x :y y)
                      c))
                  cs))))

(defn toggle-card-face
  "Toggle :face-up? for the card with matching :id in :components."
  [state id]
  (update state :components
          (fn [cs]
            (mapv (fn [c]
                    (if (= (:id c) id)
                      (update c :face-up? not)
                      c))
                  cs))))

(defn move-card-to-hand
  "Remove card with matching :id from :components and conj onto :hand."
  [state id]
  (let [card (first (filter #(= (:id %) id) (:components state)))]
    (if card
      (-> state
          (update :components (fn [cs] (vec (remove #(= (:id %) id) cs))))
          (update :hand conj card))
      state)))

(defn move-card-to-table
  "Remove card with matching :id from :hand and conj onto :components with :x x :y y."
  [state id x y]
  (let [card (first (filter #(= (:id %) id) (:hand state)))]
    (if card
      (-> state
          (update :hand (fn [h] (vec (remove #(= (:id %) id) h))))
          (update :components conj (assoc card :x x :y y)))
      state)))

(defn draw-top-card
  "Pop the first card from the deck's :cards vector and conj onto :hand.
   No-op if the deck is empty."
  [state deck-id]
  (let [deck (first (filter #(= (:id %) deck-id) (:components state)))]
    (if (and deck (seq (:cards deck)))
      (let [top-card (assoc (first (:cards deck)) :type :card)]
        (-> state
            (update :components
                    (fn [cs]
                      (mapv (fn [c]
                              (if (= (:id c) deck-id)
                                (update c :cards (comp vec rest))
                                c))
                            cs)))
            (update :hand conj top-card)))
      state)))

(defn draw-card-to-table
  "Pop the first card from the deck's :cards vector and place it on the table
   at position [x y] (offset from the deck)."
  [state deck-id x y]
  (let [deck (first (filter #(= (:id %) deck-id) (:components state)))]
    (if (and deck (seq (:cards deck)))
      (let [top-card (assoc (first (:cards deck)) :type :card :x x :y y :face-up? true)]
        (-> state
            (update :components
                    (fn [cs]
                      (mapv (fn [c]
                              (if (= (:id c) deck-id)
                                (update c :cards (comp vec rest))
                                c))
                            cs)))
            (update :components conj top-card)))
      state)))

(defn shuffle-deck
  "Apply shuffle-vec to the deck's :cards vector."
  [state deck-id]
  (update state :components
          (fn [cs]
            (mapv (fn [c]
                    (if (= (:id c) deck-id)
                      (update c :cards shuffle-vec)
                      c))
                  cs))))

(defn flip-deck
  "Toggle :face-up? on every card in the deck's :cards vector."
  [state deck-id]
  (update state :components
          (fn [cs]
            (mapv (fn [c]
                    (if (= (:id c) deck-id)
                      (update c :cards (fn [cards] (mapv #(update % :face-up? not) cards)))
                      c))
                  cs))))

(defn pan-table
  "Update :pan-x by dx and :pan-y by dy in :table."
  [state dx dy]
  (-> state
      (update-in [:table :pan-x] + dx)
      (update-in [:table :pan-y] + dy)))

(defn zoom-table
  "Update :zoom in :table, clamped to [0.5, 2.0]."
  [state delta]
  (update-in state [:table :zoom]
             (fn [z] (max 0.5 (min 2.0 (+ z delta))))))

;; ---------------------------------------------------------------------------
;; swap! wrappers that operate on app-state
;; ---------------------------------------------------------------------------

(defn add-component! [component]
  (swap! app-state add-component component))

(defn remove-component! [id]
  (swap! app-state remove-component id))

(defn move-component! [id x y]
  (swap! app-state move-component id x y))

(defn toggle-card-face! [id]
  (swap! app-state toggle-card-face id))

(defn move-card-to-hand! [id]
  (swap! app-state move-card-to-hand id))

(defn move-card-to-table! [id x y]
  (swap! app-state move-card-to-table id x y))

(defn draw-top-card! [deck-id]
  (swap! app-state draw-top-card deck-id))

(defn draw-card-to-table! [deck-id x y]
  (swap! app-state draw-card-to-table deck-id x y))

(defn shuffle-deck! [deck-id]
  (swap! app-state shuffle-deck deck-id))

(defn flip-deck! [deck-id]
  (swap! app-state flip-deck deck-id))

(defn pan-table! [dx dy]
  (swap! app-state pan-table dx dy))

(defn zoom-table! [delta]
  (swap! app-state zoom-table delta))

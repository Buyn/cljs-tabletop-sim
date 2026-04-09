(ns tabletop.logic.shuffle)

(defn shuffle-vec
  "Returns a new vector with the elements of v shuffled using the Fisher-Yates algorithm."
  [v]
  (let [arr (to-array v)
        n   (count arr)]
    (loop [i (dec n)]
      (when (pos? i)
        (let [j (js/Math.floor (* (js/Math.random) (inc i)))
              tmp (aget arr i)]
          (aset arr i (aget arr j))
          (aset arr j tmp))
        (recur (dec i))))
    (vec arr)))

(def ^:private standard-suits ["♠" "♥" "♦" "♣"])
(def ^:private standard-ranks ["A" "2" "3" "4" "5" "6" "7" "8" "9" "10" "J" "Q" "K"])

(defn make-standard-deck
  "Builds a shuffled 52-card vector using standard suits and ranks.
   Each card is {:id uuid-string :suit string :rank string :color \"#ffffff\" :face-up? false}."
  []
  (shuffle-vec
   (vec (for [suit standard-suits
              rank standard-ranks]
          {:id      (str (random-uuid))
           :suit    suit
           :rank    rank
           :color   "#ffffff"
           :face-up? false}))))

(defn make-custom-deck
  "Builds a shuffled 52-card vector using caller-supplied suits (4), ranks (13), and color.
   Each card is {:id uuid-string :suit string :rank string :color color :face-up? false}."
  [suits ranks color]
  (shuffle-vec
   (vec (for [suit suits
              rank ranks]
          {:id      (str (random-uuid))
           :suit    suit
           :rank    rank
           :color   color
           :face-up? false}))))

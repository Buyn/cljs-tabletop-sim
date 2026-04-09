(ns tabletop.logic.dice)

(defn make-die
  "Returns a new die map with the given number of faces and no roll result.
   faces must be one of #{4 6 8 10 12 20 100}."
  [faces]
  {:id     (str (random-uuid))
   :type   :die
   :x      100
   :y      100
   :faces  faces
   :result nil})

(defn roll-die
  "Returns the die map with :result set to a uniform random integer in [1, faces]."
  [die]
  (assoc die :result (inc (js/Math.floor (* (js/Math.random) (:faces die))))))

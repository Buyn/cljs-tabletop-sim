(ns tabletop.logic.dice)

(defn make-die
  [faces]
  {:id     (str (random-uuid))
   :type   :die
   :x      100
   :y      100
   :faces  faces
   :result (inc (js/Math.floor (* (js/Math.random) faces)))})

(defn roll-die
  "Returns the die map with :result set to a uniform random integer in [1, faces]."
  [die]
  (assoc die :result (inc (js/Math.floor (* (js/Math.random) (:faces die))))))

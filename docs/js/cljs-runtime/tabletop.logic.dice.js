goog.provide('tabletop.logic.dice');
tabletop.logic.dice.make_die = (function tabletop$logic$dice$make_die(var_args){
var G__26689 = arguments.length;
switch (G__26689) {
case 1:
return tabletop.logic.dice.make_die.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return tabletop.logic.dice.make_die.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tabletop.logic.dice.make_die.cljs$core$IFn$_invoke$arity$1 = (function (faces){
return tabletop.logic.dice.make_die.cljs$core$IFn$_invoke$arity$3(faces,(100),(100));
}));

(tabletop.logic.dice.make_die.cljs$core$IFn$_invoke$arity$3 = (function (faces,x,y){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"die","die",-547192252),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"faces","faces",-73909544),faces,new cljs.core.Keyword(null,"result","result",1415092211),(Math.floor((Math.random() * faces)) + (1))], null);
}));

(tabletop.logic.dice.make_die.cljs$lang$maxFixedArity = 3);

/**
 * Returns the die map with :result set to a uniform random integer in [1, faces].
 */
tabletop.logic.dice.roll_die = (function tabletop$logic$dice$roll_die(die){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(die,new cljs.core.Keyword(null,"result","result",1415092211),(Math.floor((Math.random() * new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$1(die))) + (1)));
});

//# sourceMappingURL=tabletop.logic.dice.js.map

goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__14325__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14325 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14337__i = 0, G__14337__a = new Array(arguments.length -  0);
while (G__14337__i < G__14337__a.length) {G__14337__a[G__14337__i] = arguments[G__14337__i + 0]; ++G__14337__i;}
  args = new cljs.core.IndexedSeq(G__14337__a,0,null);
} 
return G__14325__delegate.call(this,args);};
G__14325.cljs$lang$maxFixedArity = 0;
G__14325.cljs$lang$applyTo = (function (arglist__14338){
var args = cljs.core.seq(arglist__14338);
return G__14325__delegate(args);
});
G__14325.cljs$core$IFn$_invoke$arity$variadic = G__14325__delegate;
return G__14325;
})()
);

(o.error = (function() { 
var G__14343__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14343 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14346__i = 0, G__14346__a = new Array(arguments.length -  0);
while (G__14346__i < G__14346__a.length) {G__14346__a[G__14346__i] = arguments[G__14346__i + 0]; ++G__14346__i;}
  args = new cljs.core.IndexedSeq(G__14346__a,0,null);
} 
return G__14343__delegate.call(this,args);};
G__14343.cljs$lang$maxFixedArity = 0;
G__14343.cljs$lang$applyTo = (function (arglist__14349){
var args = cljs.core.seq(arglist__14349);
return G__14343__delegate(args);
});
G__14343.cljs$core$IFn$_invoke$arity$variadic = G__14343__delegate;
return G__14343;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map

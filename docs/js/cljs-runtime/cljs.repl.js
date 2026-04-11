goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18792){
var map__18793 = p__18792;
var map__18793__$1 = cljs.core.__destructure_map(map__18793);
var m = map__18793__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18793__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18793__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18839_19426 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18841_19427 = null;
var count__18842_19428 = (0);
var i__18843_19429 = (0);
while(true){
if((i__18843_19429 < count__18842_19428)){
var f_19434 = chunk__18841_19427.cljs$core$IIndexed$_nth$arity$2(null,i__18843_19429);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19434], 0));


var G__19436 = seq__18839_19426;
var G__19437 = chunk__18841_19427;
var G__19438 = count__18842_19428;
var G__19439 = (i__18843_19429 + (1));
seq__18839_19426 = G__19436;
chunk__18841_19427 = G__19437;
count__18842_19428 = G__19438;
i__18843_19429 = G__19439;
continue;
} else {
var temp__5804__auto___19443 = cljs.core.seq(seq__18839_19426);
if(temp__5804__auto___19443){
var seq__18839_19444__$1 = temp__5804__auto___19443;
if(cljs.core.chunked_seq_QMARK_(seq__18839_19444__$1)){
var c__5525__auto___19445 = cljs.core.chunk_first(seq__18839_19444__$1);
var G__19447 = cljs.core.chunk_rest(seq__18839_19444__$1);
var G__19448 = c__5525__auto___19445;
var G__19449 = cljs.core.count(c__5525__auto___19445);
var G__19450 = (0);
seq__18839_19426 = G__19447;
chunk__18841_19427 = G__19448;
count__18842_19428 = G__19449;
i__18843_19429 = G__19450;
continue;
} else {
var f_19455 = cljs.core.first(seq__18839_19444__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19455], 0));


var G__19458 = cljs.core.next(seq__18839_19444__$1);
var G__19459 = null;
var G__19460 = (0);
var G__19461 = (0);
seq__18839_19426 = G__19458;
chunk__18841_19427 = G__19459;
count__18842_19428 = G__19460;
i__18843_19429 = G__19461;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19462 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19462], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19462)))?cljs.core.second(arglists_19462):arglists_19462)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18902_19472 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18903_19473 = null;
var count__18904_19474 = (0);
var i__18905_19475 = (0);
while(true){
if((i__18905_19475 < count__18904_19474)){
var vec__18950_19477 = chunk__18903_19473.cljs$core$IIndexed$_nth$arity$2(null,i__18905_19475);
var name_19478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18950_19477,(0),null);
var map__18953_19479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18950_19477,(1),null);
var map__18953_19480__$1 = cljs.core.__destructure_map(map__18953_19479);
var doc_19481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18953_19480__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18953_19480__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19478], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19482], 0));

if(cljs.core.truth_(doc_19481)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19481], 0));
} else {
}


var G__19488 = seq__18902_19472;
var G__19489 = chunk__18903_19473;
var G__19490 = count__18904_19474;
var G__19491 = (i__18905_19475 + (1));
seq__18902_19472 = G__19488;
chunk__18903_19473 = G__19489;
count__18904_19474 = G__19490;
i__18905_19475 = G__19491;
continue;
} else {
var temp__5804__auto___19494 = cljs.core.seq(seq__18902_19472);
if(temp__5804__auto___19494){
var seq__18902_19495__$1 = temp__5804__auto___19494;
if(cljs.core.chunked_seq_QMARK_(seq__18902_19495__$1)){
var c__5525__auto___19496 = cljs.core.chunk_first(seq__18902_19495__$1);
var G__19498 = cljs.core.chunk_rest(seq__18902_19495__$1);
var G__19499 = c__5525__auto___19496;
var G__19500 = cljs.core.count(c__5525__auto___19496);
var G__19501 = (0);
seq__18902_19472 = G__19498;
chunk__18903_19473 = G__19499;
count__18904_19474 = G__19500;
i__18905_19475 = G__19501;
continue;
} else {
var vec__18969_19503 = cljs.core.first(seq__18902_19495__$1);
var name_19504 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18969_19503,(0),null);
var map__18972_19505 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18969_19503,(1),null);
var map__18972_19506__$1 = cljs.core.__destructure_map(map__18972_19505);
var doc_19507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18972_19506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18972_19506__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19504], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19508], 0));

if(cljs.core.truth_(doc_19507)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19507], 0));
} else {
}


var G__19512 = cljs.core.next(seq__18902_19495__$1);
var G__19513 = null;
var G__19514 = (0);
var G__19515 = (0);
seq__18902_19472 = G__19512;
chunk__18903_19473 = G__19513;
count__18904_19474 = G__19514;
i__18905_19475 = G__19515;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18986 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18987 = null;
var count__18988 = (0);
var i__18989 = (0);
while(true){
if((i__18989 < count__18988)){
var role = chunk__18987.cljs$core$IIndexed$_nth$arity$2(null,i__18989);
var temp__5804__auto___19520__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19520__$1)){
var spec_19521 = temp__5804__auto___19520__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19521)], 0));
} else {
}


var G__19522 = seq__18986;
var G__19523 = chunk__18987;
var G__19525 = count__18988;
var G__19526 = (i__18989 + (1));
seq__18986 = G__19522;
chunk__18987 = G__19523;
count__18988 = G__19525;
i__18989 = G__19526;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18986);
if(temp__5804__auto____$1){
var seq__18986__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18986__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18986__$1);
var G__19528 = cljs.core.chunk_rest(seq__18986__$1);
var G__19529 = c__5525__auto__;
var G__19530 = cljs.core.count(c__5525__auto__);
var G__19531 = (0);
seq__18986 = G__19528;
chunk__18987 = G__19529;
count__18988 = G__19530;
i__18989 = G__19531;
continue;
} else {
var role = cljs.core.first(seq__18986__$1);
var temp__5804__auto___19533__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19533__$2)){
var spec_19534 = temp__5804__auto___19533__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19534)], 0));
} else {
}


var G__19540 = cljs.core.next(seq__18986__$1);
var G__19541 = null;
var G__19542 = (0);
var G__19543 = (0);
seq__18986 = G__19540;
chunk__18987 = G__19541;
count__18988 = G__19542;
i__18989 = G__19543;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19148 = datafied_throwable;
var map__19148__$1 = cljs.core.__destructure_map(map__19148);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19148__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19148__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19148__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19152 = cljs.core.last(via);
var map__19152__$1 = cljs.core.__destructure_map(map__19152);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19152__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19152__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19152__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19154 = data;
var map__19154__$1 = cljs.core.__destructure_map(map__19154);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19154__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19154__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19154__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19160 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19160__$1 = cljs.core.__destructure_map(map__19160);
var top_data = map__19160__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19160__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19203 = phase;
var G__19203__$1 = (((G__19203 instanceof cljs.core.Keyword))?G__19203.fqn:null);
switch (G__19203__$1) {
case "read-source":
var map__19209 = data;
var map__19209__$1 = cljs.core.__destructure_map(map__19209);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19213 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19213__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19213,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19213);
var G__19213__$2 = (cljs.core.truth_((function (){var fexpr__19225 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19225.cljs$core$IFn$_invoke$arity$1 ? fexpr__19225.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19225.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19213__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19213__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19213__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19213__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19237 = top_data;
var G__19237__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19237,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19237);
var G__19237__$2 = (cljs.core.truth_((function (){var fexpr__19240 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19240.cljs$core$IFn$_invoke$arity$1 ? fexpr__19240.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19240.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19237__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19237__$1);
var G__19237__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19237__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19237__$2);
var G__19237__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19237__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19237__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19237__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19237__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19246 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19246,(3),null);
var G__19251 = top_data;
var G__19251__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19251,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19251);
var G__19251__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19251__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19251__$1);
var G__19251__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19251__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19251__$2);
var G__19251__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19251__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19251__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19251__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19251__$4;
}

break;
case "execution":
var vec__19268 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19268,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19268,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19268,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19268,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19125_SHARP_){
var or__5002__auto__ = (p1__19125_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19272 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19272.cljs$core$IFn$_invoke$arity$1 ? fexpr__19272.cljs$core$IFn$_invoke$arity$1(p1__19125_SHARP_) : fexpr__19272.call(null,p1__19125_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19273 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19273__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19273,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19273);
var G__19273__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19273__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19273__$1);
var G__19273__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19273__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19273__$2);
var G__19273__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19273__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19273__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19273__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19273__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19203__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19297){
var map__19298 = p__19297;
var map__19298__$1 = cljs.core.__destructure_map(map__19298);
var triage_data = map__19298__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19298__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19324 = phase;
var G__19324__$1 = (((G__19324 instanceof cljs.core.Keyword))?G__19324.fqn:null);
switch (G__19324__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19325 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19326 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19327 = loc;
var G__19328 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19334_19603 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19335_19604 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19336_19605 = true;
var _STAR_print_fn_STAR__temp_val__19337_19606 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19336_19605);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19337_19606);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19293_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19293_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19335_19604);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19334_19603);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19325,G__19326,G__19327,G__19328) : format.call(null,G__19325,G__19326,G__19327,G__19328));

break;
case "macroexpansion":
var G__19342 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19343 = cause_type;
var G__19344 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19345 = loc;
var G__19346 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19342,G__19343,G__19344,G__19345,G__19346) : format.call(null,G__19342,G__19343,G__19344,G__19345,G__19346));

break;
case "compile-syntax-check":
var G__19354 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19355 = cause_type;
var G__19356 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19357 = loc;
var G__19358 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19354,G__19355,G__19356,G__19357,G__19358) : format.call(null,G__19354,G__19355,G__19356,G__19357,G__19358));

break;
case "compilation":
var G__19360 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19361 = cause_type;
var G__19362 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19363 = loc;
var G__19364 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19360,G__19361,G__19362,G__19363,G__19364) : format.call(null,G__19360,G__19361,G__19362,G__19363,G__19364));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19368 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19369 = symbol;
var G__19370 = loc;
var G__19371 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19375_19622 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19376_19623 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19377_19624 = true;
var _STAR_print_fn_STAR__temp_val__19378_19625 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19377_19624);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19378_19625);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19294_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19294_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19376_19623);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19375_19622);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19368,G__19369,G__19370,G__19371) : format.call(null,G__19368,G__19369,G__19370,G__19371));
} else {
var G__19385 = "Execution error%s at %s(%s).\n%s\n";
var G__19386 = cause_type;
var G__19387 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19388 = loc;
var G__19389 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19385,G__19386,G__19387,G__19388,G__19389) : format.call(null,G__19385,G__19386,G__19387,G__19388,G__19389));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19324__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

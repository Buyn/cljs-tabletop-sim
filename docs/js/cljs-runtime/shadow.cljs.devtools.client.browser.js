goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21963 = arguments.length;
var i__5727__auto___21964 = (0);
while(true){
if((i__5727__auto___21964 < len__5726__auto___21963)){
args__5732__auto__.push((arguments[i__5727__auto___21964]));

var G__21965 = (i__5727__auto___21964 + (1));
i__5727__auto___21964 = G__21965;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21672){
var G__21673 = cljs.core.first(seq21672);
var seq21672__$1 = cljs.core.next(seq21672);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21673,seq21672__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21677 = cljs.core.seq(sources);
var chunk__21678 = null;
var count__21679 = (0);
var i__21680 = (0);
while(true){
if((i__21680 < count__21679)){
var map__21687 = chunk__21678.cljs$core$IIndexed$_nth$arity$2(null,i__21680);
var map__21687__$1 = cljs.core.__destructure_map(map__21687);
var src = map__21687__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21687__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21687__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21687__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21687__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21688){var e_21966 = e21688;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21966);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21966.message)].join('')));
}

var G__21967 = seq__21677;
var G__21968 = chunk__21678;
var G__21969 = count__21679;
var G__21970 = (i__21680 + (1));
seq__21677 = G__21967;
chunk__21678 = G__21968;
count__21679 = G__21969;
i__21680 = G__21970;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21677);
if(temp__5804__auto__){
var seq__21677__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21677__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21677__$1);
var G__21971 = cljs.core.chunk_rest(seq__21677__$1);
var G__21972 = c__5525__auto__;
var G__21973 = cljs.core.count(c__5525__auto__);
var G__21974 = (0);
seq__21677 = G__21971;
chunk__21678 = G__21972;
count__21679 = G__21973;
i__21680 = G__21974;
continue;
} else {
var map__21689 = cljs.core.first(seq__21677__$1);
var map__21689__$1 = cljs.core.__destructure_map(map__21689);
var src = map__21689__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21689__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21689__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21689__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21689__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21690){var e_21975 = e21690;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21975);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21975.message)].join('')));
}

var G__21976 = cljs.core.next(seq__21677__$1);
var G__21977 = null;
var G__21978 = (0);
var G__21979 = (0);
seq__21677 = G__21976;
chunk__21678 = G__21977;
count__21679 = G__21978;
i__21680 = G__21979;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21693 = cljs.core.seq(js_requires);
var chunk__21694 = null;
var count__21695 = (0);
var i__21696 = (0);
while(true){
if((i__21696 < count__21695)){
var js_ns = chunk__21694.cljs$core$IIndexed$_nth$arity$2(null,i__21696);
var require_str_21980 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21980);


var G__21981 = seq__21693;
var G__21982 = chunk__21694;
var G__21983 = count__21695;
var G__21984 = (i__21696 + (1));
seq__21693 = G__21981;
chunk__21694 = G__21982;
count__21695 = G__21983;
i__21696 = G__21984;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21693);
if(temp__5804__auto__){
var seq__21693__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21693__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21693__$1);
var G__21985 = cljs.core.chunk_rest(seq__21693__$1);
var G__21986 = c__5525__auto__;
var G__21987 = cljs.core.count(c__5525__auto__);
var G__21988 = (0);
seq__21693 = G__21985;
chunk__21694 = G__21986;
count__21695 = G__21987;
i__21696 = G__21988;
continue;
} else {
var js_ns = cljs.core.first(seq__21693__$1);
var require_str_21989 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21989);


var G__21990 = cljs.core.next(seq__21693__$1);
var G__21991 = null;
var G__21992 = (0);
var G__21993 = (0);
seq__21693 = G__21990;
chunk__21694 = G__21991;
count__21695 = G__21992;
i__21696 = G__21993;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21698){
var map__21699 = p__21698;
var map__21699__$1 = cljs.core.__destructure_map(map__21699);
var msg = map__21699__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21699__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21700(s__21701){
return (new cljs.core.LazySeq(null,(function (){
var s__21701__$1 = s__21701;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21701__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21706 = cljs.core.first(xs__6360__auto__);
var map__21706__$1 = cljs.core.__destructure_map(map__21706);
var src = map__21706__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21706__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21701__$1,map__21706,map__21706__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21699,map__21699__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21700_$_iter__21702(s__21703){
return (new cljs.core.LazySeq(null,((function (s__21701__$1,map__21706,map__21706__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21699,map__21699__$1,msg,info,reload_info){
return (function (){
var s__21703__$1 = s__21703;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21703__$1);
if(temp__5804__auto____$1){
var s__21703__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21703__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21703__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21705 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21704 = (0);
while(true){
if((i__21704 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21704);
cljs.core.chunk_append(b__21705,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21994 = (i__21704 + (1));
i__21704 = G__21994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21705),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21700_$_iter__21702(cljs.core.chunk_rest(s__21703__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21705),null);
}
} else {
var warning = cljs.core.first(s__21703__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21700_$_iter__21702(cljs.core.rest(s__21703__$2)));
}
} else {
return null;
}
break;
}
});})(s__21701__$1,map__21706,map__21706__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21699,map__21699__$1,msg,info,reload_info))
,null,null));
});})(s__21701__$1,map__21706,map__21706__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21699,map__21699__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21700(cljs.core.rest(s__21701__$1)));
} else {
var G__21995 = cljs.core.rest(s__21701__$1);
s__21701__$1 = G__21995;
continue;
}
} else {
var G__21996 = cljs.core.rest(s__21701__$1);
s__21701__$1 = G__21996;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21707_21997 = cljs.core.seq(warnings);
var chunk__21708_21998 = null;
var count__21709_21999 = (0);
var i__21710_22000 = (0);
while(true){
if((i__21710_22000 < count__21709_21999)){
var map__21713_22001 = chunk__21708_21998.cljs$core$IIndexed$_nth$arity$2(null,i__21710_22000);
var map__21713_22002__$1 = cljs.core.__destructure_map(map__21713_22001);
var w_22003 = map__21713_22002__$1;
var msg_22004__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21713_22002__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22005 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21713_22002__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22006 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21713_22002__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22007 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21713_22002__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22007)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22005),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22006),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22004__$1)].join(''));


var G__22008 = seq__21707_21997;
var G__22009 = chunk__21708_21998;
var G__22010 = count__21709_21999;
var G__22011 = (i__21710_22000 + (1));
seq__21707_21997 = G__22008;
chunk__21708_21998 = G__22009;
count__21709_21999 = G__22010;
i__21710_22000 = G__22011;
continue;
} else {
var temp__5804__auto___22012 = cljs.core.seq(seq__21707_21997);
if(temp__5804__auto___22012){
var seq__21707_22013__$1 = temp__5804__auto___22012;
if(cljs.core.chunked_seq_QMARK_(seq__21707_22013__$1)){
var c__5525__auto___22014 = cljs.core.chunk_first(seq__21707_22013__$1);
var G__22015 = cljs.core.chunk_rest(seq__21707_22013__$1);
var G__22016 = c__5525__auto___22014;
var G__22017 = cljs.core.count(c__5525__auto___22014);
var G__22018 = (0);
seq__21707_21997 = G__22015;
chunk__21708_21998 = G__22016;
count__21709_21999 = G__22017;
i__21710_22000 = G__22018;
continue;
} else {
var map__21714_22019 = cljs.core.first(seq__21707_22013__$1);
var map__21714_22020__$1 = cljs.core.__destructure_map(map__21714_22019);
var w_22021 = map__21714_22020__$1;
var msg_22022__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21714_22020__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_22023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21714_22020__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_22024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21714_22020__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_22025 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21714_22020__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_22025)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_22023),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_22024),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_22022__$1)].join(''));


var G__22026 = cljs.core.next(seq__21707_22013__$1);
var G__22027 = null;
var G__22028 = (0);
var G__22029 = (0);
seq__21707_21997 = G__22026;
chunk__21708_21998 = G__22027;
count__21709_21999 = G__22028;
i__21710_22000 = G__22029;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21697_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21697_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21716 = node_uri;
G__21716.setQuery(null);

G__21716.setPath(new$);

return G__21716;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21717){
var map__21718 = p__21717;
var map__21718__$1 = cljs.core.__destructure_map(map__21718);
var msg = map__21718__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21718__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21718__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21719 = cljs.core.seq(updates);
var chunk__21721 = null;
var count__21722 = (0);
var i__21723 = (0);
while(true){
if((i__21723 < count__21722)){
var path = chunk__21721.cljs$core$IIndexed$_nth$arity$2(null,i__21723);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21833_22030 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21837_22031 = null;
var count__21838_22032 = (0);
var i__21839_22033 = (0);
while(true){
if((i__21839_22033 < count__21838_22032)){
var node_22034 = chunk__21837_22031.cljs$core$IIndexed$_nth$arity$2(null,i__21839_22033);
if(cljs.core.not(node_22034.shadow$old)){
var path_match_22035 = shadow.cljs.devtools.client.browser.match_paths(node_22034.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22035)){
var new_link_22036 = (function (){var G__21865 = node_22034.cloneNode(true);
G__21865.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22035),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21865;
})();
(node_22034.shadow$old = true);

(new_link_22036.onload = ((function (seq__21833_22030,chunk__21837_22031,count__21838_22032,i__21839_22033,seq__21719,chunk__21721,count__21722,i__21723,new_link_22036,path_match_22035,node_22034,path,map__21718,map__21718__$1,msg,updates,reload_info){
return (function (e){
var seq__21866_22037 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21868_22038 = null;
var count__21869_22039 = (0);
var i__21870_22040 = (0);
while(true){
if((i__21870_22040 < count__21869_22039)){
var map__21874_22041 = chunk__21868_22038.cljs$core$IIndexed$_nth$arity$2(null,i__21870_22040);
var map__21874_22042__$1 = cljs.core.__destructure_map(map__21874_22041);
var task_22043 = map__21874_22042__$1;
var fn_str_22044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874_22042__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21874_22042__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22046 = goog.getObjectByName(fn_str_22044,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22045)].join(''));

(fn_obj_22046.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22046.cljs$core$IFn$_invoke$arity$2(path,new_link_22036) : fn_obj_22046.call(null,path,new_link_22036));


var G__22047 = seq__21866_22037;
var G__22048 = chunk__21868_22038;
var G__22049 = count__21869_22039;
var G__22050 = (i__21870_22040 + (1));
seq__21866_22037 = G__22047;
chunk__21868_22038 = G__22048;
count__21869_22039 = G__22049;
i__21870_22040 = G__22050;
continue;
} else {
var temp__5804__auto___22051 = cljs.core.seq(seq__21866_22037);
if(temp__5804__auto___22051){
var seq__21866_22052__$1 = temp__5804__auto___22051;
if(cljs.core.chunked_seq_QMARK_(seq__21866_22052__$1)){
var c__5525__auto___22053 = cljs.core.chunk_first(seq__21866_22052__$1);
var G__22054 = cljs.core.chunk_rest(seq__21866_22052__$1);
var G__22055 = c__5525__auto___22053;
var G__22056 = cljs.core.count(c__5525__auto___22053);
var G__22057 = (0);
seq__21866_22037 = G__22054;
chunk__21868_22038 = G__22055;
count__21869_22039 = G__22056;
i__21870_22040 = G__22057;
continue;
} else {
var map__21875_22058 = cljs.core.first(seq__21866_22052__$1);
var map__21875_22059__$1 = cljs.core.__destructure_map(map__21875_22058);
var task_22060 = map__21875_22059__$1;
var fn_str_22061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21875_22059__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21875_22059__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22063 = goog.getObjectByName(fn_str_22061,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22062)].join(''));

(fn_obj_22063.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22063.cljs$core$IFn$_invoke$arity$2(path,new_link_22036) : fn_obj_22063.call(null,path,new_link_22036));


var G__22064 = cljs.core.next(seq__21866_22052__$1);
var G__22065 = null;
var G__22066 = (0);
var G__22067 = (0);
seq__21866_22037 = G__22064;
chunk__21868_22038 = G__22065;
count__21869_22039 = G__22066;
i__21870_22040 = G__22067;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22034);
});})(seq__21833_22030,chunk__21837_22031,count__21838_22032,i__21839_22033,seq__21719,chunk__21721,count__21722,i__21723,new_link_22036,path_match_22035,node_22034,path,map__21718,map__21718__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22035], 0));

goog.dom.insertSiblingAfter(new_link_22036,node_22034);


var G__22068 = seq__21833_22030;
var G__22069 = chunk__21837_22031;
var G__22070 = count__21838_22032;
var G__22071 = (i__21839_22033 + (1));
seq__21833_22030 = G__22068;
chunk__21837_22031 = G__22069;
count__21838_22032 = G__22070;
i__21839_22033 = G__22071;
continue;
} else {
var G__22072 = seq__21833_22030;
var G__22073 = chunk__21837_22031;
var G__22074 = count__21838_22032;
var G__22075 = (i__21839_22033 + (1));
seq__21833_22030 = G__22072;
chunk__21837_22031 = G__22073;
count__21838_22032 = G__22074;
i__21839_22033 = G__22075;
continue;
}
} else {
var G__22076 = seq__21833_22030;
var G__22077 = chunk__21837_22031;
var G__22078 = count__21838_22032;
var G__22079 = (i__21839_22033 + (1));
seq__21833_22030 = G__22076;
chunk__21837_22031 = G__22077;
count__21838_22032 = G__22078;
i__21839_22033 = G__22079;
continue;
}
} else {
var temp__5804__auto___22080 = cljs.core.seq(seq__21833_22030);
if(temp__5804__auto___22080){
var seq__21833_22081__$1 = temp__5804__auto___22080;
if(cljs.core.chunked_seq_QMARK_(seq__21833_22081__$1)){
var c__5525__auto___22082 = cljs.core.chunk_first(seq__21833_22081__$1);
var G__22083 = cljs.core.chunk_rest(seq__21833_22081__$1);
var G__22084 = c__5525__auto___22082;
var G__22085 = cljs.core.count(c__5525__auto___22082);
var G__22086 = (0);
seq__21833_22030 = G__22083;
chunk__21837_22031 = G__22084;
count__21838_22032 = G__22085;
i__21839_22033 = G__22086;
continue;
} else {
var node_22087 = cljs.core.first(seq__21833_22081__$1);
if(cljs.core.not(node_22087.shadow$old)){
var path_match_22088 = shadow.cljs.devtools.client.browser.match_paths(node_22087.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22088)){
var new_link_22089 = (function (){var G__21876 = node_22087.cloneNode(true);
G__21876.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22088),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21876;
})();
(node_22087.shadow$old = true);

(new_link_22089.onload = ((function (seq__21833_22030,chunk__21837_22031,count__21838_22032,i__21839_22033,seq__21719,chunk__21721,count__21722,i__21723,new_link_22089,path_match_22088,node_22087,seq__21833_22081__$1,temp__5804__auto___22080,path,map__21718,map__21718__$1,msg,updates,reload_info){
return (function (e){
var seq__21877_22090 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21879_22091 = null;
var count__21880_22092 = (0);
var i__21881_22093 = (0);
while(true){
if((i__21881_22093 < count__21880_22092)){
var map__21885_22094 = chunk__21879_22091.cljs$core$IIndexed$_nth$arity$2(null,i__21881_22093);
var map__21885_22095__$1 = cljs.core.__destructure_map(map__21885_22094);
var task_22096 = map__21885_22095__$1;
var fn_str_22097 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21885_22095__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21885_22095__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22099 = goog.getObjectByName(fn_str_22097,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22098)].join(''));

(fn_obj_22099.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22099.cljs$core$IFn$_invoke$arity$2(path,new_link_22089) : fn_obj_22099.call(null,path,new_link_22089));


var G__22100 = seq__21877_22090;
var G__22101 = chunk__21879_22091;
var G__22102 = count__21880_22092;
var G__22103 = (i__21881_22093 + (1));
seq__21877_22090 = G__22100;
chunk__21879_22091 = G__22101;
count__21880_22092 = G__22102;
i__21881_22093 = G__22103;
continue;
} else {
var temp__5804__auto___22104__$1 = cljs.core.seq(seq__21877_22090);
if(temp__5804__auto___22104__$1){
var seq__21877_22105__$1 = temp__5804__auto___22104__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21877_22105__$1)){
var c__5525__auto___22106 = cljs.core.chunk_first(seq__21877_22105__$1);
var G__22107 = cljs.core.chunk_rest(seq__21877_22105__$1);
var G__22108 = c__5525__auto___22106;
var G__22109 = cljs.core.count(c__5525__auto___22106);
var G__22110 = (0);
seq__21877_22090 = G__22107;
chunk__21879_22091 = G__22108;
count__21880_22092 = G__22109;
i__21881_22093 = G__22110;
continue;
} else {
var map__21886_22111 = cljs.core.first(seq__21877_22105__$1);
var map__21886_22112__$1 = cljs.core.__destructure_map(map__21886_22111);
var task_22113 = map__21886_22112__$1;
var fn_str_22114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21886_22112__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22115 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21886_22112__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22116 = goog.getObjectByName(fn_str_22114,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22115)].join(''));

(fn_obj_22116.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22116.cljs$core$IFn$_invoke$arity$2(path,new_link_22089) : fn_obj_22116.call(null,path,new_link_22089));


var G__22117 = cljs.core.next(seq__21877_22105__$1);
var G__22118 = null;
var G__22119 = (0);
var G__22120 = (0);
seq__21877_22090 = G__22117;
chunk__21879_22091 = G__22118;
count__21880_22092 = G__22119;
i__21881_22093 = G__22120;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22087);
});})(seq__21833_22030,chunk__21837_22031,count__21838_22032,i__21839_22033,seq__21719,chunk__21721,count__21722,i__21723,new_link_22089,path_match_22088,node_22087,seq__21833_22081__$1,temp__5804__auto___22080,path,map__21718,map__21718__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22088], 0));

goog.dom.insertSiblingAfter(new_link_22089,node_22087);


var G__22121 = cljs.core.next(seq__21833_22081__$1);
var G__22122 = null;
var G__22123 = (0);
var G__22124 = (0);
seq__21833_22030 = G__22121;
chunk__21837_22031 = G__22122;
count__21838_22032 = G__22123;
i__21839_22033 = G__22124;
continue;
} else {
var G__22125 = cljs.core.next(seq__21833_22081__$1);
var G__22126 = null;
var G__22127 = (0);
var G__22128 = (0);
seq__21833_22030 = G__22125;
chunk__21837_22031 = G__22126;
count__21838_22032 = G__22127;
i__21839_22033 = G__22128;
continue;
}
} else {
var G__22129 = cljs.core.next(seq__21833_22081__$1);
var G__22130 = null;
var G__22131 = (0);
var G__22132 = (0);
seq__21833_22030 = G__22129;
chunk__21837_22031 = G__22130;
count__21838_22032 = G__22131;
i__21839_22033 = G__22132;
continue;
}
}
} else {
}
}
break;
}


var G__22133 = seq__21719;
var G__22134 = chunk__21721;
var G__22135 = count__21722;
var G__22136 = (i__21723 + (1));
seq__21719 = G__22133;
chunk__21721 = G__22134;
count__21722 = G__22135;
i__21723 = G__22136;
continue;
} else {
var G__22137 = seq__21719;
var G__22138 = chunk__21721;
var G__22139 = count__21722;
var G__22140 = (i__21723 + (1));
seq__21719 = G__22137;
chunk__21721 = G__22138;
count__21722 = G__22139;
i__21723 = G__22140;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21719);
if(temp__5804__auto__){
var seq__21719__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21719__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21719__$1);
var G__22141 = cljs.core.chunk_rest(seq__21719__$1);
var G__22142 = c__5525__auto__;
var G__22143 = cljs.core.count(c__5525__auto__);
var G__22144 = (0);
seq__21719 = G__22141;
chunk__21721 = G__22142;
count__21722 = G__22143;
i__21723 = G__22144;
continue;
} else {
var path = cljs.core.first(seq__21719__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21887_22145 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21891_22146 = null;
var count__21892_22147 = (0);
var i__21893_22148 = (0);
while(true){
if((i__21893_22148 < count__21892_22147)){
var node_22149 = chunk__21891_22146.cljs$core$IIndexed$_nth$arity$2(null,i__21893_22148);
if(cljs.core.not(node_22149.shadow$old)){
var path_match_22150 = shadow.cljs.devtools.client.browser.match_paths(node_22149.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22150)){
var new_link_22151 = (function (){var G__21919 = node_22149.cloneNode(true);
G__21919.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22150),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21919;
})();
(node_22149.shadow$old = true);

(new_link_22151.onload = ((function (seq__21887_22145,chunk__21891_22146,count__21892_22147,i__21893_22148,seq__21719,chunk__21721,count__21722,i__21723,new_link_22151,path_match_22150,node_22149,path,seq__21719__$1,temp__5804__auto__,map__21718,map__21718__$1,msg,updates,reload_info){
return (function (e){
var seq__21920_22152 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21922_22153 = null;
var count__21923_22154 = (0);
var i__21924_22155 = (0);
while(true){
if((i__21924_22155 < count__21923_22154)){
var map__21928_22156 = chunk__21922_22153.cljs$core$IIndexed$_nth$arity$2(null,i__21924_22155);
var map__21928_22157__$1 = cljs.core.__destructure_map(map__21928_22156);
var task_22158 = map__21928_22157__$1;
var fn_str_22159 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21928_22157__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22160 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21928_22157__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22161 = goog.getObjectByName(fn_str_22159,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22160)].join(''));

(fn_obj_22161.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22161.cljs$core$IFn$_invoke$arity$2(path,new_link_22151) : fn_obj_22161.call(null,path,new_link_22151));


var G__22162 = seq__21920_22152;
var G__22163 = chunk__21922_22153;
var G__22164 = count__21923_22154;
var G__22165 = (i__21924_22155 + (1));
seq__21920_22152 = G__22162;
chunk__21922_22153 = G__22163;
count__21923_22154 = G__22164;
i__21924_22155 = G__22165;
continue;
} else {
var temp__5804__auto___22166__$1 = cljs.core.seq(seq__21920_22152);
if(temp__5804__auto___22166__$1){
var seq__21920_22167__$1 = temp__5804__auto___22166__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21920_22167__$1)){
var c__5525__auto___22168 = cljs.core.chunk_first(seq__21920_22167__$1);
var G__22169 = cljs.core.chunk_rest(seq__21920_22167__$1);
var G__22170 = c__5525__auto___22168;
var G__22171 = cljs.core.count(c__5525__auto___22168);
var G__22172 = (0);
seq__21920_22152 = G__22169;
chunk__21922_22153 = G__22170;
count__21923_22154 = G__22171;
i__21924_22155 = G__22172;
continue;
} else {
var map__21929_22173 = cljs.core.first(seq__21920_22167__$1);
var map__21929_22174__$1 = cljs.core.__destructure_map(map__21929_22173);
var task_22175 = map__21929_22174__$1;
var fn_str_22176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21929_22174__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21929_22174__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22178 = goog.getObjectByName(fn_str_22176,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22177)].join(''));

(fn_obj_22178.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22178.cljs$core$IFn$_invoke$arity$2(path,new_link_22151) : fn_obj_22178.call(null,path,new_link_22151));


var G__22179 = cljs.core.next(seq__21920_22167__$1);
var G__22180 = null;
var G__22181 = (0);
var G__22182 = (0);
seq__21920_22152 = G__22179;
chunk__21922_22153 = G__22180;
count__21923_22154 = G__22181;
i__21924_22155 = G__22182;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22149);
});})(seq__21887_22145,chunk__21891_22146,count__21892_22147,i__21893_22148,seq__21719,chunk__21721,count__21722,i__21723,new_link_22151,path_match_22150,node_22149,path,seq__21719__$1,temp__5804__auto__,map__21718,map__21718__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22150], 0));

goog.dom.insertSiblingAfter(new_link_22151,node_22149);


var G__22183 = seq__21887_22145;
var G__22184 = chunk__21891_22146;
var G__22185 = count__21892_22147;
var G__22186 = (i__21893_22148 + (1));
seq__21887_22145 = G__22183;
chunk__21891_22146 = G__22184;
count__21892_22147 = G__22185;
i__21893_22148 = G__22186;
continue;
} else {
var G__22187 = seq__21887_22145;
var G__22188 = chunk__21891_22146;
var G__22189 = count__21892_22147;
var G__22190 = (i__21893_22148 + (1));
seq__21887_22145 = G__22187;
chunk__21891_22146 = G__22188;
count__21892_22147 = G__22189;
i__21893_22148 = G__22190;
continue;
}
} else {
var G__22191 = seq__21887_22145;
var G__22192 = chunk__21891_22146;
var G__22193 = count__21892_22147;
var G__22194 = (i__21893_22148 + (1));
seq__21887_22145 = G__22191;
chunk__21891_22146 = G__22192;
count__21892_22147 = G__22193;
i__21893_22148 = G__22194;
continue;
}
} else {
var temp__5804__auto___22195__$1 = cljs.core.seq(seq__21887_22145);
if(temp__5804__auto___22195__$1){
var seq__21887_22196__$1 = temp__5804__auto___22195__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21887_22196__$1)){
var c__5525__auto___22197 = cljs.core.chunk_first(seq__21887_22196__$1);
var G__22198 = cljs.core.chunk_rest(seq__21887_22196__$1);
var G__22199 = c__5525__auto___22197;
var G__22200 = cljs.core.count(c__5525__auto___22197);
var G__22201 = (0);
seq__21887_22145 = G__22198;
chunk__21891_22146 = G__22199;
count__21892_22147 = G__22200;
i__21893_22148 = G__22201;
continue;
} else {
var node_22202 = cljs.core.first(seq__21887_22196__$1);
if(cljs.core.not(node_22202.shadow$old)){
var path_match_22203 = shadow.cljs.devtools.client.browser.match_paths(node_22202.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22203)){
var new_link_22204 = (function (){var G__21930 = node_22202.cloneNode(true);
G__21930.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22203),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21930;
})();
(node_22202.shadow$old = true);

(new_link_22204.onload = ((function (seq__21887_22145,chunk__21891_22146,count__21892_22147,i__21893_22148,seq__21719,chunk__21721,count__21722,i__21723,new_link_22204,path_match_22203,node_22202,seq__21887_22196__$1,temp__5804__auto___22195__$1,path,seq__21719__$1,temp__5804__auto__,map__21718,map__21718__$1,msg,updates,reload_info){
return (function (e){
var seq__21931_22205 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21933_22206 = null;
var count__21934_22207 = (0);
var i__21935_22208 = (0);
while(true){
if((i__21935_22208 < count__21934_22207)){
var map__21939_22209 = chunk__21933_22206.cljs$core$IIndexed$_nth$arity$2(null,i__21935_22208);
var map__21939_22210__$1 = cljs.core.__destructure_map(map__21939_22209);
var task_22211 = map__21939_22210__$1;
var fn_str_22212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21939_22210__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21939_22210__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22214 = goog.getObjectByName(fn_str_22212,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22213)].join(''));

(fn_obj_22214.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22214.cljs$core$IFn$_invoke$arity$2(path,new_link_22204) : fn_obj_22214.call(null,path,new_link_22204));


var G__22215 = seq__21931_22205;
var G__22216 = chunk__21933_22206;
var G__22217 = count__21934_22207;
var G__22218 = (i__21935_22208 + (1));
seq__21931_22205 = G__22215;
chunk__21933_22206 = G__22216;
count__21934_22207 = G__22217;
i__21935_22208 = G__22218;
continue;
} else {
var temp__5804__auto___22219__$2 = cljs.core.seq(seq__21931_22205);
if(temp__5804__auto___22219__$2){
var seq__21931_22220__$1 = temp__5804__auto___22219__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21931_22220__$1)){
var c__5525__auto___22221 = cljs.core.chunk_first(seq__21931_22220__$1);
var G__22222 = cljs.core.chunk_rest(seq__21931_22220__$1);
var G__22223 = c__5525__auto___22221;
var G__22224 = cljs.core.count(c__5525__auto___22221);
var G__22225 = (0);
seq__21931_22205 = G__22222;
chunk__21933_22206 = G__22223;
count__21934_22207 = G__22224;
i__21935_22208 = G__22225;
continue;
} else {
var map__21940_22226 = cljs.core.first(seq__21931_22220__$1);
var map__21940_22227__$1 = cljs.core.__destructure_map(map__21940_22226);
var task_22228 = map__21940_22227__$1;
var fn_str_22229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21940_22227__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22230 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21940_22227__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22231 = goog.getObjectByName(fn_str_22229,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22230)].join(''));

(fn_obj_22231.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22231.cljs$core$IFn$_invoke$arity$2(path,new_link_22204) : fn_obj_22231.call(null,path,new_link_22204));


var G__22232 = cljs.core.next(seq__21931_22220__$1);
var G__22233 = null;
var G__22234 = (0);
var G__22235 = (0);
seq__21931_22205 = G__22232;
chunk__21933_22206 = G__22233;
count__21934_22207 = G__22234;
i__21935_22208 = G__22235;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22202);
});})(seq__21887_22145,chunk__21891_22146,count__21892_22147,i__21893_22148,seq__21719,chunk__21721,count__21722,i__21723,new_link_22204,path_match_22203,node_22202,seq__21887_22196__$1,temp__5804__auto___22195__$1,path,seq__21719__$1,temp__5804__auto__,map__21718,map__21718__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22203], 0));

goog.dom.insertSiblingAfter(new_link_22204,node_22202);


var G__22236 = cljs.core.next(seq__21887_22196__$1);
var G__22237 = null;
var G__22238 = (0);
var G__22239 = (0);
seq__21887_22145 = G__22236;
chunk__21891_22146 = G__22237;
count__21892_22147 = G__22238;
i__21893_22148 = G__22239;
continue;
} else {
var G__22240 = cljs.core.next(seq__21887_22196__$1);
var G__22241 = null;
var G__22242 = (0);
var G__22243 = (0);
seq__21887_22145 = G__22240;
chunk__21891_22146 = G__22241;
count__21892_22147 = G__22242;
i__21893_22148 = G__22243;
continue;
}
} else {
var G__22244 = cljs.core.next(seq__21887_22196__$1);
var G__22245 = null;
var G__22246 = (0);
var G__22247 = (0);
seq__21887_22145 = G__22244;
chunk__21891_22146 = G__22245;
count__21892_22147 = G__22246;
i__21893_22148 = G__22247;
continue;
}
}
} else {
}
}
break;
}


var G__22248 = cljs.core.next(seq__21719__$1);
var G__22249 = null;
var G__22250 = (0);
var G__22251 = (0);
seq__21719 = G__22248;
chunk__21721 = G__22249;
count__21722 = G__22250;
i__21723 = G__22251;
continue;
} else {
var G__22252 = cljs.core.next(seq__21719__$1);
var G__22253 = null;
var G__22254 = (0);
var G__22255 = (0);
seq__21719 = G__22252;
chunk__21721 = G__22253;
count__21722 = G__22254;
i__21723 = G__22255;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21942 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21942) : success.call(null,G__21942));
}catch (e21941){var e = e21941;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21943,success,fail){
var map__21944 = p__21943;
var map__21944__$1 = cljs.core.__destructure_map(map__21944);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21944__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21946 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21946) : success.call(null,G__21946));
}catch (e21945){var e = e21945;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21947,done,error){
var map__21948 = p__21947;
var map__21948__$1 = cljs.core.__destructure_map(map__21948);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21948__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21949,done,error){
var map__21950 = p__21949;
var map__21950__$1 = cljs.core.__destructure_map(map__21950);
var msg = map__21950__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21950__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21950__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21950__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21951){
var map__21952 = p__21951;
var map__21952__$1 = cljs.core.__destructure_map(map__21952);
var src = map__21952__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21952__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21953 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21953) : done.call(null,G__21953));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21954){
var map__21955 = p__21954;
var map__21955__$1 = cljs.core.__destructure_map(map__21955);
var msg__$1 = map__21955__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21955__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21956){var ex = e21956;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21957){
var map__21958 = p__21957;
var map__21958__$1 = cljs.core.__destructure_map(map__21958);
var env = map__21958__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21958__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21959){
var map__21960 = p__21959;
var map__21960__$1 = cljs.core.__destructure_map(map__21960);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21960__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21960__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21961){
var map__21962 = p__21961;
var map__21962__$1 = cljs.core.__destructure_map(map__21962);
var svc = map__21962__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21962__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

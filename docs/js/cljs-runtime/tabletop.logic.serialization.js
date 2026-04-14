goog.provide('tabletop.logic.serialization');
/**
 * Convert string :type fields back to keywords after JSON round-trip.
 */
tabletop.logic.serialization.keywordize_type = (function tabletop$logic$serialization$keywordize_type(m){
var G__40935 = m;
var G__40935__$1 = ((typeof new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m) === 'string')?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__40935,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword):G__40935);
if(typeof new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(m) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__40935__$1,new cljs.core.Keyword(null,"view","view",1247994814),cljs.core.keyword);
} else {
return G__40935__$1;
}
});
/**
 * Keywordize :type (and :view if present) on a component map.
 * Also recurse into :cards if present (deck components).
 */
tabletop.logic.serialization.keywordize_component = (function tabletop$logic$serialization$keywordize_component(component){
var G__40936 = tabletop.logic.serialization.keywordize_type(component);
if(cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(component))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__40936,new cljs.core.Keyword(null,"cards","cards",169174038),(function (cards){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(tabletop.logic.serialization.keywordize_type,cards);
}));
} else {
return G__40936;
}
});
/**
 * Extracts :table, :components, :hand, :menu-open, and :menu-section from state
 * and returns a JSON string with version 1 wrapping those keys.
 */
tabletop.logic.serialization.serialize_state = (function tabletop$logic$serialization$serialize_state(state){
var payload = new cljs.core.PersistentArrayMap(null, 6, ["version",(1),"table",new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(state),"components",new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state),"hand",new cljs.core.Keyword(null,"hand","hand",791601933).cljs$core$IFn$_invoke$arity$1(state),"menu-open",new cljs.core.Keyword(null,"menu-open","menu-open",1430293295).cljs$core$IFn$_invoke$arity$1(state),"menu-section",(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"menu-section","menu-section",1290407139).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return cljs.core.name(s);
} else {
return null;
}
})()], null);
return JSON.stringify(cljs.core.clj__GT_js(payload));
});
/**
 * Parses a JSON string produced by serialize-state and returns a map with
 * keys :table, :components, :hand, :menu-open, and :menu-section ready to
 * be merged into app state.
 */
tabletop.logic.serialization.deserialize_state = (function tabletop$logic$serialization$deserialize_state(json_str){
var parsed = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(json_str),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var components = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(tabletop.logic.serialization.keywordize_component,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(parsed));
var hand = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(tabletop.logic.serialization.keywordize_type,new cljs.core.Keyword(null,"hand","hand",791601933).cljs$core$IFn$_invoke$arity$1(parsed));
var section = (function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"menu-section","menu-section",1290407139).cljs$core$IFn$_invoke$arity$1(parsed);
if(cljs.core.truth_(temp__5804__auto__)){
var s = temp__5804__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(s);
} else {
return null;
}
})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(parsed),new cljs.core.Keyword(null,"components","components",-1073188942),components,new cljs.core.Keyword(null,"hand","hand",791601933),hand,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),cljs.core.get.cljs$core$IFn$_invoke$arity$3(parsed,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),true),new cljs.core.Keyword(null,"menu-section","menu-section",1290407139),section], null);
});

//# sourceMappingURL=tabletop.logic.serialization.js.map

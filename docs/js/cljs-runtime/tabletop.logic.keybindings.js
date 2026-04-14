goog.provide('tabletop.logic.keybindings');
tabletop.logic.keybindings.default_bindings = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"properties","properties",685819552),new cljs.core.Keyword(null,"roll-shuffle","roll-shuffle",-609911199),new cljs.core.Keyword(null,"copy","copy",-1077617309),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"flip","flip",2033871302),new cljs.core.Keyword(null,"send-to-back","send-to-back",-1507083770),new cljs.core.Keyword(null,"rotate-ccw","rotate-ccw",885172263),new cljs.core.Keyword(null,"scale-down","scale-down",-900427832),new cljs.core.Keyword(null,"rotate-cw","rotate-cw",83272937),new cljs.core.Keyword(null,"to-hand","to-hand",-2118444439),new cljs.core.Keyword(null,"paste","paste",1975741548),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"bring-to-front","bring-to-front",663160304),new cljs.core.Keyword(null,"camera-pan","camera-pan",1077013555),new cljs.core.Keyword(null,"scale-up","scale-up",827332505),new cljs.core.Keyword(null,"lock","lock",-488188066),new cljs.core.Keyword(null,"cut","cut",-1042666209)],["m","t","c","g","a","o","r","z","w","q","v","Delete","O"," ","Z","h","x"]);
if((typeof tabletop !== 'undefined') && (typeof tabletop.logic !== 'undefined') && (typeof tabletop.logic.keybindings !== 'undefined') && (typeof tabletop.logic.keybindings.bindings !== 'undefined')){
} else {
tabletop.logic.keybindings.bindings = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tabletop.logic.keybindings.default_bindings);
}
tabletop.logic.keybindings.key_for = (function tabletop$logic$keybindings$key_for(action){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(tabletop.logic.keybindings.bindings),action);
});
tabletop.logic.keybindings.action_for = (function tabletop$logic$keybindings$action_for(key){
return cljs.core.some((function (p__40189){
var vec__40190 = p__40189;
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40190,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40190,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,key)){
return action;
} else {
return null;
}
}),cljs.core.deref(tabletop.logic.keybindings.bindings));
});
tabletop.logic.keybindings.serialize = (function tabletop$logic$keybindings$serialize(){
return cljs.core.clj__GT_js(cljs.core.deref(tabletop.logic.keybindings.bindings));
});
tabletop.logic.keybindings.deserialize = (function tabletop$logic$keybindings$deserialize(js_obj){
return cljs.core.reset_BANG_(tabletop.logic.keybindings.bindings,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(js_obj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
});

//# sourceMappingURL=tabletop.logic.keybindings.js.map

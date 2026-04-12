goog.provide('tabletop.components.app');
tabletop.components.app.app = (function tabletop$components$app$app(){
var show_customizer_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var show_tile_panel_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (){
var view = new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var G__31546 = view;
var G__31546__$1 = (((G__31546 instanceof cljs.core.Keyword))?G__31546.fqn:null);
switch (G__31546__$1) {
case "start":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.start_screen.start_screen], null);

break;
case "table":
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-full.h-screen","div.w-full.h-screen",-1938574009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-full flex flex-col",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
if(cljs.core.truth_((function (){var and__5000__auto__ = new cljs.core.Keyword(null,"menu-open","menu-open",1430293295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(e.target.closest(".menu-panel"));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.table.table], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.hand.hand_area], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.component_panel.component_panel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-open-customizer","on-open-customizer",1557307706),(function (){
return cljs.core.reset_BANG_(show_customizer_QMARK_,true);
}),new cljs.core.Keyword(null,"on-open-tile-panel","on-open-tile-panel",-568960476),(function (){
return cljs.core.reset_BANG_(show_tile_panel_QMARK_,true);
})], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.context_menu.context_menu], null),(cljs.core.truth_(cljs.core.deref(show_customizer_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.deck_customizer.deck_customizer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return cljs.core.reset_BANG_(show_customizer_QMARK_,false);
})], null)], null):null),(cljs.core.truth_(cljs.core.deref(show_tile_panel_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_panel.tile_panel,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return cljs.core.reset_BANG_(show_tile_panel_QMARK_,false);
})], null)], null):null)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-500","p.text-red-500",1193745313),["Unknown view: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(view)].join('')], null)], null);

}
});
});

//# sourceMappingURL=tabletop.components.app.js.map

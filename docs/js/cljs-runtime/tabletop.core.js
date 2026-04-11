goog.provide('tabletop.core');
tabletop.core.mount = (function tabletop$core$mount(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.app.app], null),document.getElementById("app"));
});
tabletop.core.reload = (function tabletop$core$reload(){
return tabletop.core.mount();
});
tabletop.core.init = (function tabletop$core$init(){
return tabletop.core.mount();
});

//# sourceMappingURL=tabletop.core.js.map

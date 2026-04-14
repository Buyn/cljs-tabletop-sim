goog.provide('tabletop.components.properties_panel');
tabletop.components.properties_panel.current_items = (function tabletop$components$properties_panel$current_items(){
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var comps = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.seq(sel)){
return cljs.core.filterv((function (p1__57278_SHARP_){
return cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57278_SHARP_));
}),comps);
} else {
var map__57279 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__57279__$1 = cljs.core.__destructure_map(map__57279);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57279__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57279__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57279__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vec__57280 = cljs.core.deref(tabletop.logic.input.last_mouse_pos);
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57280,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57280,(1),null);
var tx = ((cx - pan_x) / zoom);
var ty = ((cy - pan_y) / zoom);
var temp__5802__auto__ = tabletop.state.component_at(tx,ty);
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}
});
tabletop.components.properties_panel.properties_panel = (function tabletop$components$properties_panel$properties_panel(p__57299){
var map__57300 = p__57299;
var map__57300__$1 = cljs.core.__destructure_map(map__57300);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57300__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var panel_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((400));
var panel_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100));
var dragging = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_ox = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var drag_oy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__57309){
var map__57310 = p__57309;
var map__57310__$1 = cljs.core.__destructure_map(map__57310);
var on_close__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57310__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if((cljs.core.deref(text) == null)){
cljs.core.reset_BANG_(text,JSON.stringify(cljs.core.clj__GT_js(tabletop.components.properties_panel.current_items()),null,(2)));
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"left","left",-399115937)],["0 4px 24px rgba(0,0,0,0.5)","white",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(panel_y)),"px"].join(''),"420px","#1f2937",(60),"fixed","8px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(panel_x)),"px"].join('')]),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging))){
cljs.core.reset_BANG_(panel_x,(e.clientX - cljs.core.deref(drag_ox)));

return cljs.core.reset_BANG_(panel_y,(e.clientY - cljs.core.deref(drag_oy)));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (){
return cljs.core.reset_BANG_(dragging,false);
}),new cljs.core.Keyword(null,"on-pointer-leave","on-pointer-leave",253985380),(function (){
return cljs.core.reset_BANG_(dragging,false);
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"8px 12px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"grab",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"8px 8px 0 0",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"user-select","user-select",-346451650),"none"], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
e.currentTarget.setPointerCapture(e.pointerId);

cljs.core.reset_BANG_(dragging,true);

cljs.core.reset_BANG_(drag_ox,(e.clientX - cljs.core.deref(panel_x)));

return cljs.core.reset_BANG_(drag_oy,(e.clientY - cljs.core.deref(panel_y)));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"Properties"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"8px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(text,JSON.stringify(cljs.core.clj__GT_js(tabletop.components.properties_panel.current_items()),null,(2)));
}),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (p1__57295_SHARP_){
return p1__57295_SHARP_.stopPropagation();
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"padding","padding",1660304693),"2px 6px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px"], null)], null),"Refresh"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (p1__57296_SHARP_){
return p1__57296_SHARP_.stopPropagation();
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),"\u00D7"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"8px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__5002__auto__ = cljs.core.deref(text);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__57297_SHARP_){
cljs.core.reset_BANG_(text,p1__57297_SHARP_.target.value);

return cljs.core.reset_BANG_(error,null);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],["border-box","#d1fae5","12px","100%","#111827","vertical","6px","1px solid #374151","4px","monospace","320px"])], null)], null),(cljs.core.truth_(cljs.core.deref(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#f87171",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),cljs.core.deref(error)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
try{var parsed = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(cljs.core.deref(text)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var items = ((cljs.core.map_QMARK_(parsed))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parsed], null):cljs.core.vec(parsed));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tabletop.state.app_state,(function (s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (st,item){
var item__$1 = (function (){var G__57376 = item;
if(typeof new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item) === 'string'){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__57376,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword);
} else {
return G__57376;
}
})();
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__57298_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__57298_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item__$1))){
return item__$1;
} else {
return p1__57298_SHARP_;
}
}),cs);
}));
}),s,items);
}));

return cljs.core.reset_BANG_(error,null);
}catch (e57355){var ex = e57355;
return cljs.core.reset_BANG_(error,["Invalid JSON: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex.message)].join(''));
}}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 12px",new cljs.core.Keyword(null,"background","background",-863952629),"#2563eb",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end"], null)], null),"Apply"], null)], null)], null);
});
});

//# sourceMappingURL=tabletop.components.properties_panel.js.map

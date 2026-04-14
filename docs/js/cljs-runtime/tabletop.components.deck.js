goog.provide('tabletop.components.deck');
tabletop.components.deck.__GT_table = (function tabletop$components$deck$__GT_table(sx,sy){
var map__56884 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__56884__$1 = cljs.core.__destructure_map(map__56884);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56884__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56884__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56884__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((sx - pan_x) / zoom),((sy - pan_y) / zoom)], null);
});
tabletop.components.deck.deck = (function tabletop$components$deck$deck(p__56914){
var map__56915 = p__56914;
var map__56915__$1 = cljs.core.__destructure_map(map__56915);
var deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56915__$1,new cljs.core.Keyword(null,"deck","deck",1145325705));
return (function (p__56922){
var map__56924 = p__56922;
var map__56924__$1 = cljs.core.__destructure_map(map__56924);
var deck__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56924__$1,new cljs.core.Keyword(null,"deck","deck",1145325705));
var map__56930 = deck__$1;
var map__56930__$1 = cljs.core.__destructure_map(map__56930);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var locked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"locked?","locked?",995448757));
var bg = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"face-color","face-color",-919913463).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cards));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#1e40af";
}
})();
var selected_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute select-none",((selected_QMARK_)?" ring-2 ring-cyan-400 rounded-lg":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))) && (cljs.core.not(locked_QMARK_)))){
e.stopPropagation();

e.currentTarget.setPointerCapture(e.pointerId);

var vec__56945 = tabletop.components.deck.__GT_table(e.clientX,e.clientY);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56945,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56945,(1),null);
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("interaction","start-deck-press","interaction/start-deck-press",1443489726),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,tx,ty,Date.now()], 0));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
var iact = new cljs.core.Keyword(null,"interaction","interaction",-2143888916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.truth_((function (){var and__5000__auto__ = iact;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deck-id","deck-id",1811943113).cljs$core$IFn$_invoke$arity$1(iact),id);
} else {
return and__5000__auto__;
}
})())){
var vec__56959 = tabletop.components.deck.__GT_table(e.clientX,e.clientY);
var tx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56959,(0),null);
var ty = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56959,(1),null);
var vec__56962 = new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(iact);
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56962,(1),null);
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(iact);
var dt = (Date.now() - new cljs.core.Keyword(null,"start-time","start-time",814801386).cljs$core$IFn$_invoke$arity$1(iact));
var dist = Math.hypot((tx - sx),(ty - sy));
var G__56970 = mode;
var G__56970__$1 = (((G__56970 instanceof cljs.core.Keyword))?G__56970.fqn:null);
switch (G__56970__$1) {
case "pending":
if((dist > tabletop.state.move_threshold)){
return tabletop.state.emit_BANG_(new cljs.core.Keyword("interaction","start-card-drag","interaction/start-card-drag",810711258));
} else {
if((dt > (1000))){
return tabletop.state.emit_BANG_(new cljs.core.Keyword("interaction","start-deck-drag","interaction/start-deck-drag",816542862));
} else {
return null;

}
}

break;
case "card-drag":
case "deck-drag":
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("interaction","update-pointer","interaction/update-pointer",411688967),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx,ty], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56970__$1)].join('')));

}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (e){
var iact = new cljs.core.Keyword(null,"interaction","interaction",-2143888916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.truth_((function (){var and__5000__auto__ = iact;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deck-id","deck-id",1811943113).cljs$core$IFn$_invoke$arity$1(iact),id);
} else {
return and__5000__auto__;
}
})())){
e.currentTarget.releasePointerCapture(e.pointerId);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(iact))){
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("deck","draw-to-table","deck/draw-to-table",-772164111),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,(x + (80)),y], 0));
} else {
}

return tabletop.state.emit_BANG_(new cljs.core.Keyword("interaction","end","interaction/end",1646207152));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-cancel","on-pointer-cancel",-1642281306),(function (e){
var iact = new cljs.core.Keyword(null,"interaction","interaction",-2143888916).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.truth_((function (){var and__5000__auto__ = iact;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deck-id","deck-id",1811943113).cljs$core$IFn$_invoke$arity$1(iact),id);
} else {
return and__5000__auto__;
}
})())){
e.currentTarget.releasePointerCapture(e.pointerId);

return tabletop.state.emit_BANG_(new cljs.core.Keyword("interaction","end","interaction/end",1646207152));
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
e.preventDefault();

e.stopPropagation();

if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id)){
} else {
tabletop.state.add_to_selection_BANG_(id);
}

return tabletop.components.context_menu.open_context_menu_BANG_(e.clientX,e.clientY,tabletop.state.component_actions.cljs$core$IFn$_invoke$arity$1(deck__$1));
})], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative w-[70px] h-[100px] cursor-grab"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute rounded-lg border border-gray-600 shadow w-[70px] h-[100px]",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"4px",new cljs.core.Keyword(null,"left","left",-399115937),"4px",new cljs.core.Keyword(null,"background-color","background-color",570434026),bg], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute rounded-lg border border-gray-600 shadow w-[70px] h-[100px]",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"2px",new cljs.core.Keyword(null,"left","left",-399115937),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),bg], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute rounded-lg border border-gray-600 shadow-md w-[70px] h-[100px]\n                       flex items-center justify-center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"background-color","background-color",570434026),bg], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[54px] h-[84px] rounded border-2 border-blue-300 opacity-40",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"repeating-linear-gradient(45deg,#2563eb,#2563eb 2px,transparent 2px,transparent 8px)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute -top-2 -right-2 bg-gray-800 text-white text-xs\n                       font-bold rounded-full w-5 h-5 flex items-center justify-center shadow z-10"], null),cljs.core.count(cards)], null)], null)], null);
});
});

//# sourceMappingURL=tabletop.components.deck.js.map

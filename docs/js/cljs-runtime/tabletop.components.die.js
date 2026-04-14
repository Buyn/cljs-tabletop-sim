goog.provide('tabletop.components.die');
tabletop.components.die.die_colors = new cljs.core.PersistentArrayMap(null, 7, [(4),"bg-red-500 text-white",(6),"bg-blue-500 text-white",(8),"bg-green-500 text-white",(10),"bg-purple-500 text-white",(12),"bg-orange-500 text-white",(20),"bg-yellow-400 text-gray-900",(100),"bg-pink-500 text-white"], null);
tabletop.components.die.die = (function tabletop$components$die$die(p__56875){
var map__56877 = p__56875;
var map__56877__$1 = cljs.core.__destructure_map(map__56877);
var die = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56877__$1,new cljs.core.Keyword(null,"die","die",-547192252));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var moved_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var start_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (p__56882){
var map__56883 = p__56882;
var map__56883__$1 = cljs.core.__destructure_map(map__56883);
var die__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56883__$1,new cljs.core.Keyword(null,"die","die",-547192252));
var map__56886 = die__$1;
var map__56886__$1 = cljs.core.__destructure_map(map__56886);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56886__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var faces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56886__$1,new cljs.core.Keyword(null,"faces","faces",-73909544));
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56886__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56886__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56886__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var locked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56886__$1,new cljs.core.Keyword(null,"locked?","locked?",995448757));
var selected_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute select-none rounded shadow-md ","w-[37px] h-[37px] flex flex-col items-center justify-center ","font-bold text-[13px] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(tabletop.components.die.die_colors,faces,"bg-gray-500 text-white")),(cljs.core.truth_(locked_QMARK_)?" cursor-not-allowed opacity-80":" cursor-pointer"),((selected_QMARK_)?" ring-2 ring-cyan-400":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))) && (cljs.core.not(locked_QMARK_)))){
e.stopPropagation();

cljs.core.reset_BANG_(moved_QMARK_,false);

cljs.core.reset_BANG_(dragging_QMARK_,true);

cljs.core.reset_BANG_(start_x,e.clientX);

cljs.core.reset_BANG_(start_y,e.clientY);

var map__56901_56987 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__56901_56988__$1 = cljs.core.__destructure_map(map__56901_56987);
var pan_x_56989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56901_56988__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y_56990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56901_56988__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom_56991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56901_56988__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
cljs.core.reset_BANG_(offset_x,(((e.clientX - pan_x_56989) / zoom_56991) - x));

cljs.core.reset_BANG_(offset_y,(((e.clientY - pan_y_56990) / zoom_56991) - y));

return e.currentTarget.setPointerCapture(e.pointerId);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
var dx = (e.clientX - cljs.core.deref(start_x));
var dy = (e.clientY - cljs.core.deref(start_y));
if((Math.sqrt(((dx * dx) + (dy * dy))) > (5))){
cljs.core.reset_BANG_(moved_QMARK_,true);

var map__56910 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__56910__$1 = cljs.core.__destructure_map(map__56910);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56910__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56910__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56910__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var new_x = (((e.clientX - pan_x) / zoom) - cljs.core.deref(offset_x));
var new_y = (((e.clientY - pan_y) / zoom) - cljs.core.deref(offset_y));
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var ddx = (new_x - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(die__$1,x));
var ddy = (new_y - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(die__$1,y));
if(cljs.core.truth_(tabletop.components.hand.hand_drop_zone_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)))){
if(cljs.core.contains_QMARK_(sel,id)){
var seq__56916 = cljs.core.seq(sel);
var chunk__56917 = null;
var count__56918 = (0);
var i__56919 = (0);
while(true){
if((i__56919 < count__56918)){
var sid = chunk__56917.cljs$core$IIndexed$_nth$arity$2(null,i__56919);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__56994 = seq__56916;
var G__56995 = chunk__56917;
var G__56996 = count__56918;
var G__56997 = (i__56919 + (1));
seq__56916 = G__56994;
chunk__56917 = G__56995;
count__56918 = G__56996;
i__56919 = G__56997;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56916);
if(temp__5804__auto__){
var seq__56916__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56916__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__56916__$1);
var G__56998 = cljs.core.chunk_rest(seq__56916__$1);
var G__56999 = c__5525__auto__;
var G__57000 = cljs.core.count(c__5525__auto__);
var G__57001 = (0);
seq__56916 = G__56998;
chunk__56917 = G__56999;
count__56918 = G__57000;
i__56919 = G__57001;
continue;
} else {
var sid = cljs.core.first(seq__56916__$1);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__57002 = cljs.core.next(seq__56916__$1);
var G__57003 = null;
var G__57004 = (0);
var G__57005 = (0);
seq__56916 = G__57002;
chunk__56917 = G__57003;
count__56918 = G__57004;
i__56919 = G__57005;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return tabletop.state.move_card_to_hand_BANG_(id);
}
} else {
if(cljs.core.contains_QMARK_(sel,id)){
var seq__56937 = cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__56939 = null;
var count__56940 = (0);
var i__56941 = (0);
while(true){
if((i__56941 < count__56940)){
var c = chunk__56939.cljs$core$IIndexed$_nth$arity$2(null,i__56941);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__57010 = seq__56937;
var G__57011 = chunk__56939;
var G__57012 = count__56940;
var G__57013 = (i__56941 + (1));
seq__56937 = G__57010;
chunk__56939 = G__57011;
count__56940 = G__57012;
i__56941 = G__57013;
continue;
} else {
var G__57014 = seq__56937;
var G__57015 = chunk__56939;
var G__57016 = count__56940;
var G__57017 = (i__56941 + (1));
seq__56937 = G__57014;
chunk__56939 = G__57015;
count__56940 = G__57016;
i__56941 = G__57017;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56937);
if(temp__5804__auto__){
var seq__56937__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56937__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__56937__$1);
var G__57018 = cljs.core.chunk_rest(seq__56937__$1);
var G__57019 = c__5525__auto__;
var G__57020 = cljs.core.count(c__5525__auto__);
var G__57021 = (0);
seq__56937 = G__57018;
chunk__56939 = G__57019;
count__56940 = G__57020;
i__56941 = G__57021;
continue;
} else {
var c = cljs.core.first(seq__56937__$1);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__57022 = cljs.core.next(seq__56937__$1);
var G__57023 = null;
var G__57024 = (0);
var G__57025 = (0);
seq__56937 = G__57022;
chunk__56939 = G__57023;
count__56940 = G__57024;
i__56941 = G__57025;
continue;
} else {
var G__57026 = cljs.core.next(seq__56937__$1);
var G__57027 = null;
var G__57028 = (0);
var G__57029 = (0);
seq__56937 = G__57026;
chunk__56939 = G__57027;
count__56940 = G__57028;
i__56941 = G__57029;
continue;
}
}
} else {
return null;
}
}
break;
}
} else {
return tabletop.state.move_component_BANG_(id,new_x,new_y);
}
}
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-up","on-pointer-up",385194000),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
cljs.core.reset_BANG_(dragging_QMARK_,false);

e.currentTarget.releasePointerCapture(e.pointerId);

if(cljs.core.truth_(cljs.core.deref(moved_QMARK_))){
return null;
} else {
if(cljs.core.truth_(e.shiftKey)){
return tabletop.state.add_to_selection_BANG_(id);
} else {
tabletop.state.clear_selection_BANG_();

return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("die","roll","die/roll",11366199),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}
}
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

return tabletop.components.context_menu.open_context_menu_BANG_(e.clientX,e.clientY,tabletop.state.component_actions.cljs$core$IFn$_invoke$arity$1(die__$1));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-none opacity-70"], null),["d",cljs.core.str.cljs$core$IFn$_invoke$arity$1(faces)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leading-none font-black"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(result)], null)], null);
});
});

//# sourceMappingURL=tabletop.components.die.js.map

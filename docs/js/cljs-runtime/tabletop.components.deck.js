goog.provide('tabletop.components.deck');
/**
 * Return first deck whose bbox contains table point [tx ty], excluding exclude-id.
 */
tabletop.components.deck.find_deck_at = (function tabletop$components$deck$find_deck_at(tx,ty,exclude_id){
return cljs.core.some((function (c){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(c))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),exclude_id)) && ((((((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) < tx)) && ((tx < (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + (70)))))) && ((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) < ty)) && ((ty < (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + (100)))))))))))){
return c;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
});
tabletop.components.deck.deck = (function tabletop$components$deck$deck(p__26795){
var map__26796 = p__26795;
var map__26796__$1 = cljs.core.__destructure_map(map__26796);
var deck = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26796__$1,new cljs.core.Keyword(null,"deck","deck",1145325705));
var dragging_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_moved_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var long_press_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var press_timer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var start_cx = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var start_cy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var offset_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var key_handler = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__26803){
var map__26805 = p__26803;
var map__26805__$1 = cljs.core.__destructure_map(map__26805);
var deck__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26805__$1,new cljs.core.Keyword(null,"deck","deck",1145325705));
var map__26807 = deck__$1;
var map__26807__$1 = cljs.core.__destructure_map(map__26807);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26807__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26807__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26807__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26807__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var card_count = cljs.core.count(cards);
var empty_QMARK_ = (card_count === (0));
var bg = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"face-color","face-color",-919913463).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cards));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "#1e40af";
}
})();
var selected_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute select-none",((selected_QMARK_)?" ring-2 ring-cyan-400 rounded-lg":null)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"px"].join('')], null),new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.button,(0))){
e.stopPropagation();

cljs.core.reset_BANG_(drag_moved_QMARK_,false);

cljs.core.reset_BANG_(long_press_QMARK_,false);

cljs.core.reset_BANG_(start_cx,e.clientX);

cljs.core.reset_BANG_(start_cy,e.clientY);

var rect_26902 = e.currentTarget.getBoundingClientRect();
var z_26903 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
cljs.core.reset_BANG_(offset_x,((e.clientX - rect_26902.left) / z_26903));

cljs.core.reset_BANG_(offset_y,((e.clientY - rect_26902.top) / z_26903));

e.currentTarget.setPointerCapture(e.pointerId);

cljs.core.reset_BANG_(press_timer,setTimeout((function (){
return cljs.core.reset_BANG_(long_press_QMARK_,true);
}),(1000)));

var handler_26904 = (function (ke){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
if(cljs.core.truth_((function (){var and__5000__auto__ = ke.ctrlKey;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ke.key,"c");
} else {
return and__5000__auto__;
}
})())){
ke.preventDefault();

return tabletop.state.copy_single_to_list_BANG_(id);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = ke.ctrlKey;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ke.key,"x");
} else {
return and__5000__auto__;
}
})())){
ke.preventDefault();

tabletop.state.copy_single_to_list_BANG_(id);

tabletop.state.dispatch_selection_BANG_(id,new cljs.core.Keyword(null,"remove","remove",-131428414));

return cljs.core.reset_BANG_(dragging_QMARK_,false);
} else {
return null;
}
}
} else {
return null;
}
});
cljs.core.reset_BANG_(key_handler,handler_26904);

document.addEventListener("keydown",handler_26904);

return cljs.core.reset_BANG_(dragging_QMARK_,true);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
var dx_26905 = (e.clientX - cljs.core.deref(start_cx));
var dy_26906 = (e.clientY - cljs.core.deref(start_cy));
if((Math.sqrt(((dx_26905 * dx_26905) + (dy_26906 * dy_26906))) > (4))){
cljs.core.reset_BANG_(drag_moved_QMARK_,true);
} else {
}

if(cljs.core.truth_(cljs.core.deref(long_press_QMARK_))){
var z = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
var parent_rect = e.currentTarget.offsetParent.getBoundingClientRect();
var new_x = (((e.clientX - parent_rect.left) / z) - cljs.core.deref(offset_x));
var new_y = (((e.clientY - parent_rect.top) / z) - cljs.core.deref(offset_y));
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var old_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(deck__$1,x);
var old_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(deck__$1,y);
var ddx = (new_x - old_x);
var ddy = (new_y - old_y);
if(cljs.core.truth_(tabletop.components.hand.hand_drop_zone_QMARK_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null)))){
if(cljs.core.contains_QMARK_(sel,id)){
var seq__26832 = cljs.core.seq(sel);
var chunk__26833 = null;
var count__26834 = (0);
var i__26835 = (0);
while(true){
if((i__26835 < count__26834)){
var sid = chunk__26833.cljs$core$IIndexed$_nth$arity$2(null,i__26835);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__26907 = seq__26832;
var G__26908 = chunk__26833;
var G__26909 = count__26834;
var G__26910 = (i__26835 + (1));
seq__26832 = G__26907;
chunk__26833 = G__26908;
count__26834 = G__26909;
i__26835 = G__26910;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26832);
if(temp__5804__auto__){
var seq__26832__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26832__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26832__$1);
var G__26911 = cljs.core.chunk_rest(seq__26832__$1);
var G__26912 = c__5525__auto__;
var G__26913 = cljs.core.count(c__5525__auto__);
var G__26914 = (0);
seq__26832 = G__26911;
chunk__26833 = G__26912;
count__26834 = G__26913;
i__26835 = G__26914;
continue;
} else {
var sid = cljs.core.first(seq__26832__$1);
tabletop.state.move_card_to_hand_BANG_(sid);


var G__26915 = cljs.core.next(seq__26832__$1);
var G__26916 = null;
var G__26917 = (0);
var G__26918 = (0);
seq__26832 = G__26915;
chunk__26833 = G__26916;
count__26834 = G__26917;
i__26835 = G__26918;
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
var seq__26848 = cljs.core.seq(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__26850 = null;
var count__26851 = (0);
var i__26852 = (0);
while(true){
if((i__26852 < count__26851)){
var c = chunk__26850.cljs$core$IIndexed$_nth$arity$2(null,i__26852);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__26923 = seq__26848;
var G__26924 = chunk__26850;
var G__26925 = count__26851;
var G__26926 = (i__26852 + (1));
seq__26848 = G__26923;
chunk__26850 = G__26924;
count__26851 = G__26925;
i__26852 = G__26926;
continue;
} else {
var G__26927 = seq__26848;
var G__26928 = chunk__26850;
var G__26929 = count__26851;
var G__26930 = (i__26852 + (1));
seq__26848 = G__26927;
chunk__26850 = G__26928;
count__26851 = G__26929;
i__26852 = G__26930;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26848);
if(temp__5804__auto__){
var seq__26848__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26848__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26848__$1);
var G__26932 = cljs.core.chunk_rest(seq__26848__$1);
var G__26933 = c__5525__auto__;
var G__26934 = cljs.core.count(c__5525__auto__);
var G__26935 = (0);
seq__26848 = G__26932;
chunk__26850 = G__26933;
count__26851 = G__26934;
i__26852 = G__26935;
continue;
} else {
var c = cljs.core.first(seq__26848__$1);
if(cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))){
tabletop.state.move_component_BANG_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddx),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ddy));


var G__26936 = cljs.core.next(seq__26848__$1);
var G__26937 = null;
var G__26938 = (0);
var G__26939 = (0);
seq__26848 = G__26936;
chunk__26850 = G__26937;
count__26851 = G__26938;
i__26852 = G__26939;
continue;
} else {
var G__26940 = cljs.core.next(seq__26848__$1);
var G__26941 = null;
var G__26942 = (0);
var G__26943 = (0);
seq__26848 = G__26940;
chunk__26850 = G__26941;
count__26851 = G__26942;
i__26852 = G__26943;
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
if(cljs.core.truth_(cljs.core.deref(press_timer))){
clearTimeout(cljs.core.deref(press_timer));

cljs.core.reset_BANG_(press_timer,null);
} else {
}

if(cljs.core.truth_(cljs.core.deref(key_handler))){
document.removeEventListener("keydown",cljs.core.deref(key_handler));

cljs.core.reset_BANG_(key_handler,null);
} else {
}

if(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))){
cljs.core.reset_BANG_(dragging_QMARK_,false);

e.currentTarget.releasePointerCapture(e.pointerId);

if(((cljs.core.not(cljs.core.deref(drag_moved_QMARK_))) && (((cljs.core.not(cljs.core.deref(long_press_QMARK_))) && ((!(empty_QMARK_))))))){
tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.Keyword(null,"draw-to-table","draw-to-table",-773541110),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x + (80)),y], 0));
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.deref(long_press_QMARK_);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref(drag_moved_QMARK_);
} else {
return and__5000__auto__;
}
})())){
var z_26945 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(tabletop.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),1.0);
var parent_rect_26946 = e.currentTarget.offsetParent.getBoundingClientRect();
var final_x_26947 = (((e.clientX - parent_rect_26946.left) / z_26945) - cljs.core.deref(offset_x));
var final_y_26948 = (((e.clientY - parent_rect_26946.top) / z_26945) - cljs.core.deref(offset_y));
var target_26949 = tabletop.components.deck.find_deck_at((final_x_26947 + (35)),(final_y_26948 + (50)),id);
if(cljs.core.truth_(target_26949)){
tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.Keyword(null,"merge-onto","merge-onto",-2091375778),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_26949)], 0));
} else {
}
} else {
if(cljs.core.not(cljs.core.deref(drag_moved_QMARK_))){
if(cljs.core.truth_(e.shiftKey)){
tabletop.state.add_to_selection_BANG_(id);
} else {
tabletop.state.clear_selection_BANG_();
}
} else {
}
}
}

cljs.core.reset_BANG_(long_press_QMARK_,false);

return cljs.core.reset_BANG_(drag_moved_QMARK_,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-pointer-cancel","on-pointer-cancel",-1642281306),(function (e){
if(cljs.core.truth_(cljs.core.deref(press_timer))){
clearTimeout(cljs.core.deref(press_timer));

cljs.core.reset_BANG_(press_timer,null);
} else {
}

cljs.core.reset_BANG_(dragging_QMARK_,false);

cljs.core.reset_BANG_(long_press_QMARK_,false);

cljs.core.reset_BANG_(drag_moved_QMARK_,false);

return e.currentTarget.releasePointerCapture(e.pointerId);
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
e.preventDefault();

e.stopPropagation();

if(cljs.core.truth_(cljs.core.deref(press_timer))){
clearTimeout(cljs.core.deref(press_timer));

cljs.core.reset_BANG_(press_timer,null);
} else {
}

if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)),id)){
} else {
tabletop.state.add_to_selection_BANG_(id);
}

return tabletop.components.context_menu.open_context_menu_BANG_(e.clientX,e.clientY,tabletop.state.component_actions.cljs$core$IFn$_invoke$arity$1(deck__$1));
})], null),((empty_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[70px] h-[100px] rounded-lg border-2 border-dashed border-gray-400\n                          flex items-center justify-center text-gray-400 text-xs font-medium cursor-pointer"], null),"Empty"], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"relative w-[70px] h-[100px] cursor-grab"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute rounded-lg border border-gray-600 shadow w-[70px] h-[100px]",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"4px",new cljs.core.Keyword(null,"left","left",-399115937),"4px",new cljs.core.Keyword(null,"background-color","background-color",570434026),bg], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute rounded-lg border border-gray-600 shadow w-[70px] h-[100px]",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"2px",new cljs.core.Keyword(null,"left","left",-399115937),"2px",new cljs.core.Keyword(null,"background-color","background-color",570434026),bg], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute rounded-lg border border-gray-600 shadow-md w-[70px] h-[100px]\n                           flex items-center justify-center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"background-color","background-color",570434026),bg], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-[54px] h-[84px] rounded border-2 border-blue-300 opacity-40",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),"repeating-linear-gradient(45deg,#2563eb,#2563eb 2px,transparent 2px,transparent 8px)"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute -top-2 -right-2 bg-gray-800 text-white text-xs\n                           font-bold rounded-full w-5 h-5 flex items-center justify-center shadow z-10"], null),card_count], null)], null))], null);
});
});

//# sourceMappingURL=tabletop.components.deck.js.map

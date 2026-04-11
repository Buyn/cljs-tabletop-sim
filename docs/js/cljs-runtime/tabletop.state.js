goog.provide('tabletop.state');
tabletop.state.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"menu-section","menu-section",1290407139),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"copy-list","copy-list",1889938311),new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"last-middle-click","last-middle-click",749547513),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"view","view",1247994814)],[null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747),(0),new cljs.core.Keyword(null,"pan-y","pan-y",915543213),(0),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),1.0], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,true,cljs.core.PersistentVector.EMPTY,null,null,null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981)]);
if((typeof tabletop !== 'undefined') && (typeof tabletop.state !== 'undefined') && (typeof tabletop.state.app_state !== 'undefined')){
} else {
tabletop.state.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tabletop.state.initial_state);
}
tabletop.state.add_component = (function tabletop$state$add_component(state,component){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj,component);
});
tabletop.state.remove_component = (function tabletop$state$remove_component(state,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26690_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26690_SHARP_),id);
}),cs));
}));
});
tabletop.state.move_component = (function tabletop$state$move_component(state,id,x,y){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26691_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26691_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__26691_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0));
} else {
return p1__26691_SHARP_;
}
}),cs);
}));
});
tabletop.state.move_card_to_hand = (function tabletop$state$move_card_to_hand(state,id){
var card = cljs.core.some((function (p1__26693_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26693_SHARP_),id)){
return p1__26693_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(card)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26694_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26694_SHARP_),id);
}),cs));
})),new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,card);
} else {
return state;
}
});
tabletop.state.move_card_to_table = (function tabletop$state$move_card_to_table(state,id,x,y){
var card = cljs.core.some((function (p1__26695_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26695_SHARP_),id)){
return p1__26695_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"hand","hand",791601933).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(card)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hand","hand",791601933),(function (h){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__26696_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26696_SHARP_),id);
}),h));
})),new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(card,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0)));
} else {
return state;
}
});
tabletop.state.pan_table = (function tabletop$state$pan_table(state,dx,dy){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747)], null),cljs.core._PLUS_,dx),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"pan-y","pan-y",915543213)], null),cljs.core._PLUS_,dy);
});
tabletop.state.zoom_table = (function tabletop$state$zoom_table(state,delta){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(function (z){
var x__5087__auto__ = 0.5;
var y__5088__auto__ = (function (){var x__5090__auto__ = 2.0;
var y__5091__auto__ = (z + delta);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})();
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
}));
});
tabletop.state.add_component_BANG_ = (function tabletop$state$add_component_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tabletop.state.app_state,tabletop.state.add_component,c);
});
tabletop.state.remove_component_BANG_ = (function tabletop$state$remove_component_BANG_(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tabletop.state.app_state,tabletop.state.remove_component,id);
});
tabletop.state.move_component_BANG_ = (function tabletop$state$move_component_BANG_(id,x,y){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tabletop.state.app_state,tabletop.state.move_component,id,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0));
});
tabletop.state.move_card_to_hand_BANG_ = (function tabletop$state$move_card_to_hand_BANG_(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tabletop.state.app_state,tabletop.state.move_card_to_hand,id);
});
tabletop.state.move_card_to_table_BANG_ = (function tabletop$state$move_card_to_table_BANG_(id,x,y){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tabletop.state.app_state,tabletop.state.move_card_to_table,id,x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0));
});
tabletop.state.pan_table_BANG_ = (function tabletop$state$pan_table_BANG_(dx,dy){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,tabletop.state.pan_table,dx,dy);
});
tabletop.state.zoom_table_BANG_ = (function tabletop$state$zoom_table_BANG_(delta){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(tabletop.state.app_state,tabletop.state.zoom_table,delta);
});
tabletop.state.set_selection_BANG_ = (function tabletop$state$set_selection_BANG_(ids){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.set(ids));
});
tabletop.state.clear_selection_BANG_ = (function tabletop$state$clear_selection_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.PersistentHashSet.EMPTY);
});
tabletop.state.add_to_selection_BANG_ = (function tabletop$state$add_to_selection_BANG_(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tabletop.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
});
tabletop.state.set_last_middle_click_BANG_ = (function tabletop$state$set_last_middle_click_BANG_(tx,ty){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"last-middle-click","last-middle-click",749547513),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null));
});
tabletop.state.copy_objects_to_list_BANG_ = (function tabletop$state$copy_objects_to_list_BANG_(ids){
var id_set = cljs.core.set(ids);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"copy-list","copy-list",1889938311),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26697_SHARP_){
var G__26698 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26697_SHARP_);
return (id_set.cljs$core$IFn$_invoke$arity$1 ? id_set.cljs$core$IFn$_invoke$arity$1(G__26698) : id_set.call(null,G__26698));
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)))));
});
tabletop.state.copy_single_to_list_BANG_ = (function tabletop$state$copy_single_to_list_BANG_(id){
var temp__5804__auto__ = cljs.core.some((function (p1__26699_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26699_SHARP_),id)){
return p1__26699_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
if(cljs.core.truth_(temp__5804__auto__)){
var c = temp__5804__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"copy-list","copy-list",1889938311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
return null;
}
});
tabletop.state.paste_from_list_BANG_ = (function tabletop$state$paste_from_list_BANG_(cx,cy){
var items = new cljs.core.Keyword(null,"copy-list","copy-list",1889938311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.seq(items)){
var base_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),(0));
var base_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),(0));
var seq__26700 = cljs.core.seq(items);
var chunk__26701 = null;
var count__26702 = (0);
var i__26703 = (0);
while(true){
if((i__26703 < count__26702)){
var item = chunk__26701.cljs$core$IIndexed$_nth$arity$2(null,i__26703);
tabletop.state.add_component_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),(cx + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(item,(0)) - base_x)),new cljs.core.Keyword(null,"y","y",-1757859776),(cy + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(item,(0)) - base_y))], 0)));


var G__26771 = seq__26700;
var G__26772 = chunk__26701;
var G__26773 = count__26702;
var G__26774 = (i__26703 + (1));
seq__26700 = G__26771;
chunk__26701 = G__26772;
count__26702 = G__26773;
i__26703 = G__26774;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26700);
if(temp__5804__auto__){
var seq__26700__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26700__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26700__$1);
var G__26775 = cljs.core.chunk_rest(seq__26700__$1);
var G__26776 = c__5525__auto__;
var G__26777 = cljs.core.count(c__5525__auto__);
var G__26778 = (0);
seq__26700 = G__26775;
chunk__26701 = G__26776;
count__26702 = G__26777;
i__26703 = G__26778;
continue;
} else {
var item = cljs.core.first(seq__26700__$1);
tabletop.state.add_component_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),(cx + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(item,(0)) - base_x)),new cljs.core.Keyword(null,"y","y",-1757859776),(cy + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(item,(0)) - base_y))], 0)));


var G__26779 = cljs.core.next(seq__26700__$1);
var G__26780 = null;
var G__26781 = (0);
var G__26782 = (0);
seq__26700 = G__26779;
chunk__26701 = G__26780;
count__26702 = G__26781;
i__26703 = G__26782;
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
});
tabletop.state.paste_to_hand_BANG_ = (function tabletop$state$paste_to_hand_BANG_(){
var seq__26704 = cljs.core.seq(new cljs.core.Keyword(null,"copy-list","copy-list",1889938311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__26705 = null;
var count__26706 = (0);
var i__26707 = (0);
while(true){
if((i__26707 < count__26706)){
var item = chunk__26705.cljs$core$IIndexed$_nth$arity$2(null,i__26707);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tabletop.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()))], 0));


var G__26783 = seq__26704;
var G__26784 = chunk__26705;
var G__26785 = count__26706;
var G__26786 = (i__26707 + (1));
seq__26704 = G__26783;
chunk__26705 = G__26784;
count__26706 = G__26785;
i__26707 = G__26786;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26704);
if(temp__5804__auto__){
var seq__26704__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26704__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26704__$1);
var G__26787 = cljs.core.chunk_rest(seq__26704__$1);
var G__26788 = c__5525__auto__;
var G__26789 = cljs.core.count(c__5525__auto__);
var G__26790 = (0);
seq__26704 = G__26787;
chunk__26705 = G__26788;
count__26706 = G__26789;
i__26707 = G__26790;
continue;
} else {
var item = cljs.core.first(seq__26704__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tabletop.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()))], 0));


var G__26797 = cljs.core.next(seq__26704__$1);
var G__26798 = null;
var G__26799 = (0);
var G__26800 = (0);
seq__26704 = G__26797;
chunk__26705 = G__26798;
count__26706 = G__26799;
i__26707 = G__26800;
continue;
}
} else {
return null;
}
}
break;
}
});
if((typeof tabletop !== 'undefined') && (typeof tabletop.state !== 'undefined') && (typeof tabletop.state.perform_action !== 'undefined')){
} else {
tabletop.state.perform_action = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26709 = cljs.core.get_global_hierarchy;
return (fexpr__26709.cljs$core$IFn$_invoke$arity$0 ? fexpr__26709.cljs$core$IFn$_invoke$arity$0() : fexpr__26709.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tabletop.state","perform-action"),(function() { 
var G__26801__delegate = function (state,id,action,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__26708_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26708_SHARP_),id)){
return p1__26708_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state))),action], null);
};
var G__26801 = function (state,id,action,var_args){
var _ = null;
if (arguments.length > 3) {
var G__26802__i = 0, G__26802__a = new Array(arguments.length -  3);
while (G__26802__i < G__26802__a.length) {G__26802__a[G__26802__i] = arguments[G__26802__i + 3]; ++G__26802__i;}
  _ = new cljs.core.IndexedSeq(G__26802__a,0,null);
} 
return G__26801__delegate.call(this,state,id,action,_);};
G__26801.cljs$lang$maxFixedArity = 3;
G__26801.cljs$lang$applyTo = (function (arglist__26804){
var state = cljs.core.first(arglist__26804);
arglist__26804 = cljs.core.next(arglist__26804);
var id = cljs.core.first(arglist__26804);
arglist__26804 = cljs.core.next(arglist__26804);
var action = cljs.core.first(arglist__26804);
var _ = cljs.core.rest(arglist__26804);
return G__26801__delegate(state,id,action,_);
});
G__26801.cljs$core$IFn$_invoke$arity$variadic = G__26801__delegate;
return G__26801;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__26806__delegate = function (state,_,___$1,___$2){
return state;
};
var G__26806 = function (state,_,___$1,var_args){
var ___$2 = null;
if (arguments.length > 3) {
var G__26808__i = 0, G__26808__a = new Array(arguments.length -  3);
while (G__26808__i < G__26808__a.length) {G__26808__a[G__26808__i] = arguments[G__26808__i + 3]; ++G__26808__i;}
  ___$2 = new cljs.core.IndexedSeq(G__26808__a,0,null);
} 
return G__26806__delegate.call(this,state,_,___$1,___$2);};
G__26806.cljs$lang$maxFixedArity = 3;
G__26806.cljs$lang$applyTo = (function (arglist__26809){
var state = cljs.core.first(arglist__26809);
arglist__26809 = cljs.core.next(arglist__26809);
var _ = cljs.core.first(arglist__26809);
arglist__26809 = cljs.core.next(arglist__26809);
var ___$1 = cljs.core.first(arglist__26809);
var ___$2 = cljs.core.rest(arglist__26809);
return G__26806__delegate(state,_,___$1,___$2);
});
G__26806.cljs$core$IFn$_invoke$arity$variadic = G__26806__delegate;
return G__26806;
})()
);
tabletop.state.dispatch_BANG_ = (function tabletop$state$dispatch_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26810 = arguments.length;
var i__5727__auto___26811 = (0);
while(true){
if((i__5727__auto___26811 < len__5726__auto___26810)){
args__5732__auto__.push((arguments[i__5727__auto___26811]));

var G__26812 = (i__5727__auto___26811 + (1));
i__5727__auto___26811 = G__26812;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (id,action,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tabletop.state.app_state,(function (p1__26710_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(tabletop.state.perform_action,p1__26710_SHARP_,id,action,args);
}));
}));

(tabletop.state.dispatch_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tabletop.state.dispatch_BANG_.cljs$lang$applyTo = (function (seq26711){
var G__26712 = cljs.core.first(seq26711);
var seq26711__$1 = cljs.core.next(seq26711);
var G__26713 = cljs.core.first(seq26711__$1);
var seq26711__$2 = cljs.core.next(seq26711__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26712,G__26713,seq26711__$2);
}));

tabletop.state.dispatch_selection_BANG_ = (function tabletop$state$dispatch_selection_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___26813 = arguments.length;
var i__5727__auto___26814 = (0);
while(true){
if((i__5727__auto___26814 < len__5726__auto___26813)){
args__5732__auto__.push((arguments[i__5727__auto___26814]));

var G__26815 = (i__5727__auto___26814 + (1));
i__5727__auto___26814 = G__26815;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return tabletop.state.dispatch_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(tabletop.state.dispatch_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (id,action,args){
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var ids = ((cljs.core.contains_QMARK_(sel,id))?sel:cljs.core.PersistentHashSet.createAsIfByAssoc([id]));
var seq__26717 = cljs.core.seq(ids);
var chunk__26718 = null;
var count__26719 = (0);
var i__26720 = (0);
while(true){
if((i__26720 < count__26719)){
var sid = chunk__26718.cljs$core$IIndexed$_nth$arity$2(null,i__26720);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(tabletop.state.dispatch_BANG_,sid,action,args);


var G__26816 = seq__26717;
var G__26817 = chunk__26718;
var G__26818 = count__26719;
var G__26819 = (i__26720 + (1));
seq__26717 = G__26816;
chunk__26718 = G__26817;
count__26719 = G__26818;
i__26720 = G__26819;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__26717);
if(temp__5804__auto__){
var seq__26717__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__26717__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__26717__$1);
var G__26820 = cljs.core.chunk_rest(seq__26717__$1);
var G__26821 = c__5525__auto__;
var G__26822 = cljs.core.count(c__5525__auto__);
var G__26823 = (0);
seq__26717 = G__26820;
chunk__26718 = G__26821;
count__26719 = G__26822;
i__26720 = G__26823;
continue;
} else {
var sid = cljs.core.first(seq__26717__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(tabletop.state.dispatch_BANG_,sid,action,args);


var G__26824 = cljs.core.next(seq__26717__$1);
var G__26825 = null;
var G__26826 = (0);
var G__26827 = (0);
seq__26717 = G__26824;
chunk__26718 = G__26825;
count__26719 = G__26826;
i__26720 = G__26827;
continue;
}
} else {
return null;
}
}
break;
}
}));

(tabletop.state.dispatch_selection_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tabletop.state.dispatch_selection_BANG_.cljs$lang$applyTo = (function (seq26714){
var G__26715 = cljs.core.first(seq26714);
var seq26714__$1 = cljs.core.next(seq26714);
var G__26716 = cljs.core.first(seq26714__$1);
var seq26714__$2 = cljs.core.next(seq26714__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26715,G__26716,seq26714__$2);
}));

/**
 * Returns [tx ty] for placing a new component:
 * last middle-click position if available, otherwise viewport center.
 */
tabletop.state.placement_pos = (function tabletop$state$placement_pos(){
var or__5002__auto__ = new cljs.core.Keyword(null,"last-middle-click","last-middle-click",749547513).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var map__26721 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__26721__$1 = cljs.core.__destructure_map(map__26721);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26721__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26721__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26721__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vw = window.innerWidth;
var vh = window.innerHeight;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((vw / (2)) - pan_x) / zoom),(((vh / (2)) - pan_y) / zoom)], null);
}
});
/**
 * After a draw: deck with 1 card → card; 0 cards → removed.
 */
tabletop.state.collapse_deck = (function tabletop$state$collapse_deck(state,id){
var deck = cljs.core.some((function (p1__26722_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26722_SHARP_),id)){
return p1__26722_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.not(deck)){
return state;
} else {
var n = cljs.core.count(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
if((n === (0))){
return tabletop.state.remove_component(state,id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
var card = cljs.core.first(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
var new_card = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(card,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(deck,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(deck,(0))], 0));
return tabletop.state.add_component(tabletop.state.remove_component(state,id),new_card);
} else {
return state;

}
}
}
});
tabletop.state.find_and_rest = (function tabletop$state$find_and_rest(id,cs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__26723,c){
var vec__26724 = p__26723;
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26724,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26724,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,others], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [found,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(others,c)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentVector.EMPTY], null),cs);
});
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"shuffle","shuffle",1261412160)], null),(function (state,id,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26727_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26727_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__26727_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),tabletop.logic.shuffle.shuffle_vec);
} else {
return p1__26727_SHARP_;
}
}),cs);
}));
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"draw-to-hand","draw-to-hand",-1334390517)], null),(function (state,id,_){
var vec__26728 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26728,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26728,(1),null);
var card = cljs.core.last(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
if(cljs.core.truth_(card)){
return tabletop.state.collapse_deck(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(others),cljs.core.update.cljs$core$IFn$_invoke$arity$3(deck,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.butlast)))),new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152))),id);
} else {
return state;
}
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"draw-to-table","draw-to-table",-773541110)], null),(function (state,id,_,x,y){
var vec__26731 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26731,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26731,(1),null);
var card = cljs.core.last(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
if(cljs.core.truth_(card)){
return tabletop.state.collapse_deck(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(others),cljs.core.update.cljs$core$IFn$_invoke$arity$3(deck,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.butlast)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(card,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),true], 0))], 0))),id);
} else {
return state;
}
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"draw-bottom","draw-bottom",816681161)], null),(function (state,id,_){
var vec__26734 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26734,(1),null);
var card = cljs.core.first(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
if(cljs.core.truth_(card)){
return tabletop.state.collapse_deck(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(others),cljs.core.update.cljs$core$IFn$_invoke$arity$3(deck,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest)))),new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152))),id);
} else {
return state;
}
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"split","split",-599435118)], null),(function (state,id,_,n_parts){
var vec__26738 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26738,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26738,(1),null);
var cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck);
var total = cljs.core.count(cards);
var size = cljs.core.quot(total,n_parts);
var rem = cljs.core.mod(total,n_parts);
var sizes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26737_SHARP_){
return (size + (((p1__26737_SHARP_ < rem))?(1):(0)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_parts));
var parts = (function (){var remaining = cards;
var result = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n_parts)){
return result;
} else {
var G__26843 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sizes,i),remaining);
var G__26844 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sizes,i),remaining)));
var G__26845 = (i + (1));
remaining = G__26843;
result = G__26844;
i = G__26845;
continue;
}
break;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(others),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,part_cards){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(deck,new cljs.core.Keyword(null,"id","id",-1388402092),(((i === (0)))?id:cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cards","cards",169174038),part_cards,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(deck,(0)) + (i * (80)))], 0));
}),parts)));
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"flip","flip",2033871302)], null),(function (state,id,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26741_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26741_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__26741_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),(function (cards){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),cljs.core.not);
}),cards);
}));
} else {
return p1__26741_SHARP_;
}
}),cs);
}));
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"flip","flip",2033871302)], null),(function (state,id,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26742_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26742_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__26742_SHARP_,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),cljs.core.not);
} else {
return p1__26742_SHARP_;
}
}),cs);
}));
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"die","die",-547192252),new cljs.core.Keyword(null,"roll","roll",11266999)], null),(function (state,id,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26743_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26743_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__26743_SHARP_,new cljs.core.Keyword(null,"result","result",1415092211),(cljs.core.rand_int(new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$2(p1__26743_SHARP_,(6))) + (1)));
} else {
return p1__26743_SHARP_;
}
}),cs);
}));
}));
var seq__26744_26856 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"die","die",-547192252),new cljs.core.Keyword(null,"deck","deck",1145325705)], null));
var chunk__26745_26857 = null;
var count__26746_26858 = (0);
var i__26747_26859 = (0);
while(true){
if((i__26747_26859 < count__26746_26858)){
var t_26861 = chunk__26745_26857.cljs$core$IIndexed$_nth$arity$2(null,i__26747_26859);
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_26861,new cljs.core.Keyword(null,"remove","remove",-131428414)], null),((function (seq__26744_26856,chunk__26745_26857,count__26746_26858,i__26747_26859,t_26861){
return (function (state,id,_){
return tabletop.state.remove_component(state,id);
});})(seq__26744_26856,chunk__26745_26857,count__26746_26858,i__26747_26859,t_26861))
);


var G__26862 = seq__26744_26856;
var G__26863 = chunk__26745_26857;
var G__26864 = count__26746_26858;
var G__26865 = (i__26747_26859 + (1));
seq__26744_26856 = G__26862;
chunk__26745_26857 = G__26863;
count__26746_26858 = G__26864;
i__26747_26859 = G__26865;
continue;
} else {
var temp__5804__auto___26866 = cljs.core.seq(seq__26744_26856);
if(temp__5804__auto___26866){
var seq__26744_26867__$1 = temp__5804__auto___26866;
if(cljs.core.chunked_seq_QMARK_(seq__26744_26867__$1)){
var c__5525__auto___26868 = cljs.core.chunk_first(seq__26744_26867__$1);
var G__26869 = cljs.core.chunk_rest(seq__26744_26867__$1);
var G__26870 = c__5525__auto___26868;
var G__26871 = cljs.core.count(c__5525__auto___26868);
var G__26872 = (0);
seq__26744_26856 = G__26869;
chunk__26745_26857 = G__26870;
count__26746_26858 = G__26871;
i__26747_26859 = G__26872;
continue;
} else {
var t_26874 = cljs.core.first(seq__26744_26867__$1);
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_26874,new cljs.core.Keyword(null,"remove","remove",-131428414)], null),((function (seq__26744_26856,chunk__26745_26857,count__26746_26858,i__26747_26859,t_26874,seq__26744_26867__$1,temp__5804__auto___26866){
return (function (state,id,_){
return tabletop.state.remove_component(state,id);
});})(seq__26744_26856,chunk__26745_26857,count__26746_26858,i__26747_26859,t_26874,seq__26744_26867__$1,temp__5804__auto___26866))
);


var G__26877 = cljs.core.next(seq__26744_26867__$1);
var G__26878 = null;
var G__26879 = (0);
var G__26880 = (0);
seq__26744_26856 = G__26877;
chunk__26745_26857 = G__26878;
count__26746_26858 = G__26879;
i__26747_26859 = G__26880;
continue;
}
} else {
}
}
break;
}
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"drop-on-deck","drop-on-deck",195247249)], null),(function (state,card_id,_,deck_id){
var card = cljs.core.some((function (p1__26748_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26748_SHARP_),card_id)){
return p1__26748_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(card)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tabletop.state.remove_component(state,card_id),new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26749_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26749_SHARP_),deck_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__26749_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(card,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], 0)));
} else {
return p1__26749_SHARP_;
}
}),cs);
}));
} else {
return state;
}
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"merge-onto","merge-onto",-2091375778)], null),(function (state,src_id,_,tgt_id){
var src = cljs.core.some((function (p1__26750_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26750_SHARP_),src_id)){
return p1__26750_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var tgt = cljs.core.some((function (p1__26751_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26751_SHARP_),tgt_id)){
return p1__26751_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_((function (){var and__5000__auto__ = src;
if(cljs.core.truth_(and__5000__auto__)){
return tgt;
} else {
return and__5000__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tabletop.state.remove_component(state,src_id),new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__26752_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26752_SHARP_),tgt_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__26752_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.into,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(src));
} else {
return p1__26752_SHARP_;
}
}),cs);
}));
} else {
return state;
}
}));
/**
 * Merge all selected cards and decks into a single deck (last selected = top).
 */
tabletop.state.group_selection_BANG_ = (function tabletop$state$group_selection_BANG_(){
var state = cljs.core.deref(tabletop.state.app_state);
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(state);
var selected = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26753_SHARP_){
return cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__26753_SHARP_));
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var cards = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26754_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__26754_SHARP_));
}),selected);
var decks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__26755_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__26755_SHARP_));
}),selected);
if((cljs.core.count(selected) > (1))){
var anchor = cljs.core.first(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(decks,cards));
var all_cards = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([decks], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__26756_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__26756_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
}),cards)));
var new_deck = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(anchor,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(anchor,(0)),new cljs.core.Keyword(null,"cards","cards",169174038),all_cards], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tabletop.state.app_state,(function (s){
return tabletop.state.add_component(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__26757_SHARP_,p2__26758_SHARP_){
return tabletop.state.remove_component(p1__26757_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__26758_SHARP_));
}),s,selected),new_deck);
}));
} else {
return null;
}
});
if((typeof tabletop !== 'undefined') && (typeof tabletop.state !== 'undefined') && (typeof tabletop.state.component_actions !== 'undefined')){
} else {
tabletop.state.component_actions = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__26759 = cljs.core.get_global_hierarchy;
return (fexpr__26759.cljs$core$IFn$_invoke$arity$0 ? fexpr__26759.cljs$core$IFn$_invoke$arity$0() : fexpr__26759.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tabletop.state","component-actions"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tabletop.state.common_actions = (function tabletop$state$common_actions(id){
var G__26760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Copy",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.copy_objects_to_list_BANG_((function (){var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.contains_QMARK_(sel,id)){
return cljs.core.vec(sel);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null);
}
})());
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Remove",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_selection_BANG_(id,new cljs.core.Keyword(null,"remove","remove",-131428414));
})], null)], null);
if((cljs.core.count(new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state))) > (1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26760,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Group",new cljs.core.Keyword(null,"action","action",-811238024),tabletop.state.group_selection_BANG_], null));
} else {
return G__26760;
}
});
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deck","deck",1145325705),(function (p__26761){
var map__26762 = p__26761;
var map__26762__$1 = cljs.core.__destructure_map(map__26762);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26762__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26762__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26762__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26762__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var empty_QMARK_ = cljs.core.empty_QMARK_(cards);
var n = cljs.core.count(cards);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__26763 = cljs.core.PersistentVector.EMPTY;
var G__26763__$1 = (((!(empty_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26763,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Draw to Table",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.Keyword(null,"draw-to-table","draw-to-table",-773541110),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x + (80)),y], 0));
})], null)):G__26763);
var G__26763__$2 = (((!(empty_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26763__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Draw to Hand",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_(id,new cljs.core.Keyword(null,"draw-to-hand","draw-to-hand",-1334390517));
})], null)):G__26763__$1);
var G__26763__$3 = (((!(empty_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26763__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Draw Bottom Card",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_(id,new cljs.core.Keyword(null,"draw-bottom","draw-bottom",816681161));
})], null)):G__26763__$2);
var G__26763__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26763__$3,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Shuffle",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_(id,new cljs.core.Keyword(null,"shuffle","shuffle",1261412160));
})], null))
;
var G__26763__$5 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26763__$4,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Flip Deck",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_selection_BANG_(id,new cljs.core.Keyword(null,"flip","flip",2033871302));
})], null))
;
var G__26763__$6 = (((n >= (2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26763__$5,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Split Deck (2)",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.Keyword(null,"split","split",-599435118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
})], null)):G__26763__$5);
if((n >= (3))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26763__$6,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Split Deck (3)",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.Keyword(null,"split","split",-599435118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(3)], 0));
})], null));
} else {
return G__26763__$6;
}
})(),tabletop.state.common_actions(id));
}));
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"card","card",-1430355152),(function (p__26764){
var map__26765 = p__26764;
var map__26765__$1 = cljs.core.__destructure_map(map__26765);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26765__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Flip",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_selection_BANG_(id,new cljs.core.Keyword(null,"flip","flip",2033871302));
})], null)], null),tabletop.state.common_actions(id));
}));
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"die","die",-547192252),(function (p__26766){
var map__26767 = p__26766;
var map__26767__$1 = cljs.core.__destructure_map(map__26767);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26767__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Roll",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_selection_BANG_(id,new cljs.core.Keyword(null,"roll","roll",11266999));
})], null)], null),tabletop.state.common_actions(id));
}));
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
return tabletop.state.common_actions(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c));
}));

//# sourceMappingURL=tabletop.state.js.map

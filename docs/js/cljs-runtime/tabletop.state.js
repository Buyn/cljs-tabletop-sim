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
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30962_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30962_SHARP_),id);
}),cs));
}));
});
tabletop.state.move_component = (function tabletop$state$move_component(state,id,x,y){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30963_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30963_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__30963_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0));
} else {
return p1__30963_SHARP_;
}
}),cs);
}));
});
tabletop.state.move_card_to_hand = (function tabletop$state$move_card_to_hand(state,id){
var card = cljs.core.some((function (p1__30964_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30964_SHARP_),id)){
return p1__30964_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(card)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30965_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30965_SHARP_),id);
}),cs));
})),new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,card);
} else {
return state;
}
});
tabletop.state.move_card_to_table = (function tabletop$state$move_card_to_table(state,id,x,y){
var card = cljs.core.some((function (p1__30966_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30966_SHARP_),id)){
return p1__30966_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"hand","hand",791601933).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(card)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hand","hand",791601933),(function (h){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__30967_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30967_SHARP_),id);
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"copy-list","copy-list",1889938311),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30968_SHARP_){
var G__30969 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30968_SHARP_);
return (id_set.cljs$core$IFn$_invoke$arity$1 ? id_set.cljs$core$IFn$_invoke$arity$1(G__30969) : id_set.call(null,G__30969));
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)))));
});
tabletop.state.copy_single_to_list_BANG_ = (function tabletop$state$copy_single_to_list_BANG_(id){
var temp__5804__auto__ = cljs.core.some((function (p1__30970_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30970_SHARP_),id)){
return p1__30970_SHARP_;
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
var seq__30971 = cljs.core.seq(items);
var chunk__30972 = null;
var count__30973 = (0);
var i__30974 = (0);
while(true){
if((i__30974 < count__30973)){
var item = chunk__30972.cljs$core$IIndexed$_nth$arity$2(null,i__30974);
tabletop.state.add_component_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),(cx + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(item,(0)) - base_x)),new cljs.core.Keyword(null,"y","y",-1757859776),(cy + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(item,(0)) - base_y))], 0)));


var G__31055 = seq__30971;
var G__31056 = chunk__30972;
var G__31057 = count__30973;
var G__31058 = (i__30974 + (1));
seq__30971 = G__31055;
chunk__30972 = G__31056;
count__30973 = G__31057;
i__30974 = G__31058;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30971);
if(temp__5804__auto__){
var seq__30971__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30971__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30971__$1);
var G__31059 = cljs.core.chunk_rest(seq__30971__$1);
var G__31060 = c__5525__auto__;
var G__31061 = cljs.core.count(c__5525__auto__);
var G__31062 = (0);
seq__30971 = G__31059;
chunk__30972 = G__31060;
count__30973 = G__31061;
i__30974 = G__31062;
continue;
} else {
var item = cljs.core.first(seq__30971__$1);
tabletop.state.add_component_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),(cx + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(item,(0)) - base_x)),new cljs.core.Keyword(null,"y","y",-1757859776),(cy + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(item,(0)) - base_y))], 0)));


var G__31064 = cljs.core.next(seq__30971__$1);
var G__31065 = null;
var G__31066 = (0);
var G__31067 = (0);
seq__30971 = G__31064;
chunk__30972 = G__31065;
count__30973 = G__31066;
i__30974 = G__31067;
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
var seq__30975 = cljs.core.seq(new cljs.core.Keyword(null,"copy-list","copy-list",1889938311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state)));
var chunk__30976 = null;
var count__30977 = (0);
var i__30978 = (0);
while(true){
if((i__30978 < count__30977)){
var item = chunk__30976.cljs$core$IIndexed$_nth$arity$2(null,i__30978);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tabletop.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()))], 0));


var G__31073 = seq__30975;
var G__31074 = chunk__30976;
var G__31075 = count__30977;
var G__31076 = (i__30978 + (1));
seq__30975 = G__31073;
chunk__30976 = G__31074;
count__30977 = G__31075;
i__30978 = G__31076;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30975);
if(temp__5804__auto__){
var seq__30975__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30975__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30975__$1);
var G__31077 = cljs.core.chunk_rest(seq__30975__$1);
var G__31078 = c__5525__auto__;
var G__31079 = cljs.core.count(c__5525__auto__);
var G__31080 = (0);
seq__30975 = G__31077;
chunk__30976 = G__31078;
count__30977 = G__31079;
i__30978 = G__31080;
continue;
} else {
var item = cljs.core.first(seq__30975__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(tabletop.state.app_state,cljs.core.update,new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()))], 0));


var G__31081 = cljs.core.next(seq__30975__$1);
var G__31082 = null;
var G__31083 = (0);
var G__31084 = (0);
seq__30975 = G__31081;
chunk__30976 = G__31082;
count__30977 = G__31083;
i__30978 = G__31084;
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
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__30980 = cljs.core.get_global_hierarchy;
return (fexpr__30980.cljs$core$IFn$_invoke$arity$0 ? fexpr__30980.cljs$core$IFn$_invoke$arity$0() : fexpr__30980.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tabletop.state","perform-action"),(function() { 
var G__31086__delegate = function (state,id,action,_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__30979_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30979_SHARP_),id)){
return p1__30979_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state))),action], null);
};
var G__31086 = function (state,id,action,var_args){
var _ = null;
if (arguments.length > 3) {
var G__31087__i = 0, G__31087__a = new Array(arguments.length -  3);
while (G__31087__i < G__31087__a.length) {G__31087__a[G__31087__i] = arguments[G__31087__i + 3]; ++G__31087__i;}
  _ = new cljs.core.IndexedSeq(G__31087__a,0,null);
} 
return G__31086__delegate.call(this,state,id,action,_);};
G__31086.cljs$lang$maxFixedArity = 3;
G__31086.cljs$lang$applyTo = (function (arglist__31088){
var state = cljs.core.first(arglist__31088);
arglist__31088 = cljs.core.next(arglist__31088);
var id = cljs.core.first(arglist__31088);
arglist__31088 = cljs.core.next(arglist__31088);
var action = cljs.core.first(arglist__31088);
var _ = cljs.core.rest(arglist__31088);
return G__31086__delegate(state,id,action,_);
});
G__31086.cljs$core$IFn$_invoke$arity$variadic = G__31086__delegate;
return G__31086;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__31089__delegate = function (state,_,___$1,___$2){
return state;
};
var G__31089 = function (state,_,___$1,var_args){
var ___$2 = null;
if (arguments.length > 3) {
var G__31090__i = 0, G__31090__a = new Array(arguments.length -  3);
while (G__31090__i < G__31090__a.length) {G__31090__a[G__31090__i] = arguments[G__31090__i + 3]; ++G__31090__i;}
  ___$2 = new cljs.core.IndexedSeq(G__31090__a,0,null);
} 
return G__31089__delegate.call(this,state,_,___$1,___$2);};
G__31089.cljs$lang$maxFixedArity = 3;
G__31089.cljs$lang$applyTo = (function (arglist__31092){
var state = cljs.core.first(arglist__31092);
arglist__31092 = cljs.core.next(arglist__31092);
var _ = cljs.core.first(arglist__31092);
arglist__31092 = cljs.core.next(arglist__31092);
var ___$1 = cljs.core.first(arglist__31092);
var ___$2 = cljs.core.rest(arglist__31092);
return G__31089__delegate(state,_,___$1,___$2);
});
G__31089.cljs$core$IFn$_invoke$arity$variadic = G__31089__delegate;
return G__31089;
})()
);
tabletop.state.dispatch_BANG_ = (function tabletop$state$dispatch_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31094 = arguments.length;
var i__5727__auto___31096 = (0);
while(true){
if((i__5727__auto___31096 < len__5726__auto___31094)){
args__5732__auto__.push((arguments[i__5727__auto___31096]));

var G__31097 = (i__5727__auto___31096 + (1));
i__5727__auto___31096 = G__31097;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (id,action,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tabletop.state.app_state,(function (p1__30981_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(tabletop.state.perform_action,p1__30981_SHARP_,id,action,args);
}));
}));

(tabletop.state.dispatch_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(tabletop.state.dispatch_BANG_.cljs$lang$applyTo = (function (seq30982){
var G__30983 = cljs.core.first(seq30982);
var seq30982__$1 = cljs.core.next(seq30982);
var G__30984 = cljs.core.first(seq30982__$1);
var seq30982__$2 = cljs.core.next(seq30982__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30983,G__30984,seq30982__$2);
}));

tabletop.state.dispatch_selection_BANG_ = (function tabletop$state$dispatch_selection_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___31107 = arguments.length;
var i__5727__auto___31108 = (0);
while(true){
if((i__5727__auto___31108 < len__5726__auto___31107)){
args__5732__auto__.push((arguments[i__5727__auto___31108]));

var G__31110 = (i__5727__auto___31108 + (1));
i__5727__auto___31108 = G__31110;
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
var seq__30988 = cljs.core.seq(ids);
var chunk__30989 = null;
var count__30990 = (0);
var i__30991 = (0);
while(true){
if((i__30991 < count__30990)){
var sid = chunk__30989.cljs$core$IIndexed$_nth$arity$2(null,i__30991);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(tabletop.state.dispatch_BANG_,sid,action,args);


var G__31113 = seq__30988;
var G__31114 = chunk__30989;
var G__31115 = count__30990;
var G__31116 = (i__30991 + (1));
seq__30988 = G__31113;
chunk__30989 = G__31114;
count__30990 = G__31115;
i__30991 = G__31116;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__30988);
if(temp__5804__auto__){
var seq__30988__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30988__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__30988__$1);
var G__31119 = cljs.core.chunk_rest(seq__30988__$1);
var G__31120 = c__5525__auto__;
var G__31121 = cljs.core.count(c__5525__auto__);
var G__31122 = (0);
seq__30988 = G__31119;
chunk__30989 = G__31120;
count__30990 = G__31121;
i__30991 = G__31122;
continue;
} else {
var sid = cljs.core.first(seq__30988__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(tabletop.state.dispatch_BANG_,sid,action,args);


var G__31127 = cljs.core.next(seq__30988__$1);
var G__31128 = null;
var G__31129 = (0);
var G__31130 = (0);
seq__30988 = G__31127;
chunk__30989 = G__31128;
count__30990 = G__31129;
i__30991 = G__31130;
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
(tabletop.state.dispatch_selection_BANG_.cljs$lang$applyTo = (function (seq30985){
var G__30986 = cljs.core.first(seq30985);
var seq30985__$1 = cljs.core.next(seq30985);
var G__30987 = cljs.core.first(seq30985__$1);
var seq30985__$2 = cljs.core.next(seq30985__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30986,G__30987,seq30985__$2);
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
var map__30992 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__30992__$1 = cljs.core.__destructure_map(map__30992);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30992__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30992__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30992__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vw = window.innerWidth;
var vh = window.innerHeight;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((vw / (2)) - pan_x) / zoom),(((vh / (2)) - pan_y) / zoom)], null);
}
});
/**
 * After a draw: deck with 1 card → card; 0 cards → removed.
 */
tabletop.state.collapse_deck = (function tabletop$state$collapse_deck(state,id){
var deck = cljs.core.some((function (p1__30993_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30993_SHARP_),id)){
return p1__30993_SHARP_;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__30994,c){
var vec__30995 = p__30994;
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30995,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30995,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,others], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [found,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(others,c)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentVector.EMPTY], null),cs);
});
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"shuffle","shuffle",1261412160)], null),(function (state,id,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__30998_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__30998_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__30998_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),tabletop.logic.shuffle.shuffle_vec);
} else {
return p1__30998_SHARP_;
}
}),cs);
}));
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"draw-to-hand","draw-to-hand",-1334390517)], null),(function (state,id,_){
var vec__30999 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30999,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30999,(1),null);
var card = cljs.core.last(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
if(cljs.core.truth_(card)){
return tabletop.state.collapse_deck(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(others),cljs.core.update.cljs$core$IFn$_invoke$arity$3(deck,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.butlast)))),new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152))),id);
} else {
return state;
}
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"draw-to-table","draw-to-table",-773541110)], null),(function (state,id,_,x,y){
var vec__31002 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31002,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31002,(1),null);
var card = cljs.core.last(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
if(cljs.core.truth_(card)){
return tabletop.state.collapse_deck(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(others),cljs.core.update.cljs$core$IFn$_invoke$arity$3(deck,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.butlast)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(card,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),true], 0))], 0))),id);
} else {
return state;
}
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"draw-bottom","draw-bottom",816681161)], null),(function (state,id,_){
var vec__31005 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31005,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31005,(1),null);
var card = cljs.core.first(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
if(cljs.core.truth_(card)){
return tabletop.state.collapse_deck(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(others),cljs.core.update.cljs$core$IFn$_invoke$arity$3(deck,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest)))),new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152))),id);
} else {
return state;
}
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"split","split",-599435118)], null),(function (state,id,_,n_parts){
var vec__31009 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31009,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31009,(1),null);
var cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck);
var total = cljs.core.count(cards);
var size = cljs.core.quot(total,n_parts);
var rem = cljs.core.mod(total,n_parts);
var sizes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31008_SHARP_){
return (size + (((p1__31008_SHARP_ < rem))?(1):(0)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_parts));
var parts = (function (){var remaining = cards;
var result = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n_parts)){
return result;
} else {
var G__31158 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sizes,i),remaining);
var G__31159 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sizes,i),remaining)));
var G__31160 = (i + (1));
remaining = G__31158;
result = G__31159;
i = G__31160;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31012_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31012_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__31012_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),(function (cards){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),cljs.core.not);
}),cards);
}));
} else {
return p1__31012_SHARP_;
}
}),cs);
}));
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"flip","flip",2033871302)], null),(function (state,id,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31013_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31013_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__31013_SHARP_,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),cljs.core.not);
} else {
return p1__31013_SHARP_;
}
}),cs);
}));
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"die","die",-547192252),new cljs.core.Keyword(null,"roll","roll",11266999)], null),(function (state,id,_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31014_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31014_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__31014_SHARP_,new cljs.core.Keyword(null,"result","result",1415092211),(cljs.core.rand_int(new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$2(p1__31014_SHARP_,(6))) + (1)));
} else {
return p1__31014_SHARP_;
}
}),cs);
}));
}));
var seq__31015_31163 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"die","die",-547192252),new cljs.core.Keyword(null,"deck","deck",1145325705)], null));
var chunk__31016_31164 = null;
var count__31017_31165 = (0);
var i__31018_31166 = (0);
while(true){
if((i__31018_31166 < count__31017_31165)){
var t_31169 = chunk__31016_31164.cljs$core$IIndexed$_nth$arity$2(null,i__31018_31166);
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_31169,new cljs.core.Keyword(null,"remove","remove",-131428414)], null),((function (seq__31015_31163,chunk__31016_31164,count__31017_31165,i__31018_31166,t_31169){
return (function (state,id,_){
return tabletop.state.remove_component(state,id);
});})(seq__31015_31163,chunk__31016_31164,count__31017_31165,i__31018_31166,t_31169))
);


var G__31170 = seq__31015_31163;
var G__31171 = chunk__31016_31164;
var G__31172 = count__31017_31165;
var G__31173 = (i__31018_31166 + (1));
seq__31015_31163 = G__31170;
chunk__31016_31164 = G__31171;
count__31017_31165 = G__31172;
i__31018_31166 = G__31173;
continue;
} else {
var temp__5804__auto___31174 = cljs.core.seq(seq__31015_31163);
if(temp__5804__auto___31174){
var seq__31015_31175__$1 = temp__5804__auto___31174;
if(cljs.core.chunked_seq_QMARK_(seq__31015_31175__$1)){
var c__5525__auto___31176 = cljs.core.chunk_first(seq__31015_31175__$1);
var G__31177 = cljs.core.chunk_rest(seq__31015_31175__$1);
var G__31178 = c__5525__auto___31176;
var G__31179 = cljs.core.count(c__5525__auto___31176);
var G__31180 = (0);
seq__31015_31163 = G__31177;
chunk__31016_31164 = G__31178;
count__31017_31165 = G__31179;
i__31018_31166 = G__31180;
continue;
} else {
var t_31181 = cljs.core.first(seq__31015_31175__$1);
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t_31181,new cljs.core.Keyword(null,"remove","remove",-131428414)], null),((function (seq__31015_31163,chunk__31016_31164,count__31017_31165,i__31018_31166,t_31181,seq__31015_31175__$1,temp__5804__auto___31174){
return (function (state,id,_){
return tabletop.state.remove_component(state,id);
});})(seq__31015_31163,chunk__31016_31164,count__31017_31165,i__31018_31166,t_31181,seq__31015_31175__$1,temp__5804__auto___31174))
);


var G__31188 = cljs.core.next(seq__31015_31175__$1);
var G__31189 = null;
var G__31190 = (0);
var G__31191 = (0);
seq__31015_31163 = G__31188;
chunk__31016_31164 = G__31189;
count__31017_31165 = G__31190;
i__31018_31166 = G__31191;
continue;
}
} else {
}
}
break;
}
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"drop-on-deck","drop-on-deck",195247249)], null),(function (state,card_id,_,deck_id){
var card = cljs.core.some((function (p1__31019_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31019_SHARP_),card_id)){
return p1__31019_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(card)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tabletop.state.remove_component(state,card_id),new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31020_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31020_SHARP_),deck_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__31020_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(card,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], 0)));
} else {
return p1__31020_SHARP_;
}
}),cs);
}));
} else {
return state;
}
}));
tabletop.state.perform_action.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"merge-onto","merge-onto",-2091375778)], null),(function (state,src_id,_,tgt_id){
var src = cljs.core.some((function (p1__31021_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31021_SHARP_),src_id)){
return p1__31021_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var tgt = cljs.core.some((function (p1__31022_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31022_SHARP_),tgt_id)){
return p1__31022_SHARP_;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__31023_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31023_SHARP_),tgt_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__31023_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.into,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(src));
} else {
return p1__31023_SHARP_;
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
var selected = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31024_SHARP_){
return cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__31024_SHARP_));
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var cards = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31025_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__31025_SHARP_));
}),selected);
var decks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31026_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__31026_SHARP_));
}),selected);
if((cljs.core.count(selected) > (1))){
var anchor = cljs.core.first(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(decks,cards));
var all_cards = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([decks], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31027_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__31027_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
}),cards)));
var new_deck = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(anchor,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(anchor,(0)),new cljs.core.Keyword(null,"cards","cards",169174038),all_cards], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tabletop.state.app_state,(function (s){
return tabletop.state.add_component(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__31028_SHARP_,p2__31029_SHARP_){
return tabletop.state.remove_component(p1__31028_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__31029_SHARP_));
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
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__31030 = cljs.core.get_global_hierarchy;
return (fexpr__31030.cljs$core$IFn$_invoke$arity$0 ? fexpr__31030.cljs$core$IFn$_invoke$arity$0() : fexpr__31030.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tabletop.state","component-actions"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tabletop.state.common_actions = (function tabletop$state$common_actions(id){
var G__31031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Copy",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
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
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__31031,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Group",new cljs.core.Keyword(null,"action","action",-811238024),tabletop.state.group_selection_BANG_], null));
} else {
return G__31031;
}
});
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deck","deck",1145325705),(function (p__31032){
var map__31033 = p__31032;
var map__31033__$1 = cljs.core.__destructure_map(map__31033);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31033__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31033__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31033__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31033__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var empty_QMARK_ = cljs.core.empty_QMARK_(cards);
var n = cljs.core.count(cards);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__31034 = cljs.core.PersistentVector.EMPTY;
var G__31034__$1 = (((!(empty_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__31034,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Draw to Table",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.Keyword(null,"draw-to-table","draw-to-table",-773541110),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(x + (80)),y], 0));
})], null)):G__31034);
var G__31034__$2 = (((!(empty_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__31034__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Draw to Hand",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_(id,new cljs.core.Keyword(null,"draw-to-hand","draw-to-hand",-1334390517));
})], null)):G__31034__$1);
var G__31034__$3 = (((!(empty_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__31034__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Draw Bottom Card",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_(id,new cljs.core.Keyword(null,"draw-bottom","draw-bottom",816681161));
})], null)):G__31034__$2);
var G__31034__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__31034__$3,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Shuffle",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_(id,new cljs.core.Keyword(null,"shuffle","shuffle",1261412160));
})], null))
;
var G__31034__$5 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__31034__$4,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Flip Deck",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_selection_BANG_(id,new cljs.core.Keyword(null,"flip","flip",2033871302));
})], null))
;
var G__31034__$6 = (((n >= (2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__31034__$5,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Split Deck (2)",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.Keyword(null,"split","split",-599435118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(2)], 0));
})], null)):G__31034__$5);
if((n >= (3))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__31034__$6,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Split Deck (3)",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_BANG_.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.Keyword(null,"split","split",-599435118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(3)], 0));
})], null));
} else {
return G__31034__$6;
}
})(),tabletop.state.common_actions(id));
}));
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"card","card",-1430355152),(function (p__31035){
var map__31036 = p__31035;
var map__31036__$1 = cljs.core.__destructure_map(map__31036);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31036__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Flip",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_selection_BANG_(id,new cljs.core.Keyword(null,"flip","flip",2033871302));
})], null)], null),tabletop.state.common_actions(id));
}));
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"die","die",-547192252),(function (p__31037){
var map__31038 = p__31037;
var map__31038__$1 = cljs.core.__destructure_map(map__31038);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31038__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Roll",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.dispatch_selection_BANG_(id,new cljs.core.Keyword(null,"roll","roll",11266999));
})], null)], null),tabletop.state.common_actions(id));
}));
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tile-piece","tile-piece",1225101561),(function (p__31039){
var map__31040 = p__31039;
var map__31040__$1 = cljs.core.__destructure_map(map__31040);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31040__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return tabletop.state.common_actions(id);
}));
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
return tabletop.state.common_actions(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c));
}));

//# sourceMappingURL=tabletop.state.js.map

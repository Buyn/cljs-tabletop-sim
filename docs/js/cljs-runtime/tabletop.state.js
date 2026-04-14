goog.provide('tabletop.state');
tabletop.state.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"menu-section","menu-section",1290407139),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"copy-list","copy-list",1889938311),new cljs.core.Keyword(null,"interaction","interaction",-2143888916),new cljs.core.Keyword(null,"hand","hand",791601933),new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"last-middle-click","last-middle-click",749547513),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"view","view",1247994814)],[null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747),(0),new cljs.core.Keyword(null,"pan-y","pan-y",915543213),(0),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),1.0], null),cljs.core.PersistentVector.EMPTY,null,cljs.core.PersistentVector.EMPTY,true,cljs.core.PersistentVector.EMPTY,null,null,null,cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"start","start",-355208981)]);
if((typeof tabletop !== 'undefined') && (typeof tabletop.state !== 'undefined') && (typeof tabletop.state.general_settings !== 'undefined')){
} else {
tabletop.state.general_settings = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rotation-step","rotation-step",-282249642),(45),new cljs.core.Keyword(null,"scale-step","scale-step",-1359270974),1.25], null));
}
if((typeof tabletop !== 'undefined') && (typeof tabletop.state !== 'undefined') && (typeof tabletop.state.app_state !== 'undefined')){
} else {
tabletop.state.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tabletop.state.initial_state);
}
tabletop.state.add_component = (function tabletop$state$add_component(state,component){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj,component);
});
tabletop.state.remove_component = (function tabletop$state$remove_component(state,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56690_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56690_SHARP_),id);
}),cs));
}));
});
tabletop.state.move_component = (function tabletop$state$move_component(state,id,x,y){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56691_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56691_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__56691_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185),x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),y], 0));
} else {
return p1__56691_SHARP_;
}
}),cs);
}));
});
tabletop.state.move_card_to_hand = (function tabletop$state$move_card_to_hand(state,id){
var card = cljs.core.some((function (p1__56692_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56692_SHARP_),id)){
return p1__56692_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(card)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56693_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56693_SHARP_),id);
}),cs));
})),new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,card);
} else {
return state;
}
});
tabletop.state.move_card_to_table = (function tabletop$state$move_card_to_table(state,id,x,y){
var card = cljs.core.some((function (p1__56694_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56694_SHARP_),id)){
return p1__56694_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"hand","hand",791601933).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(card)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"hand","hand",791601933),(function (h){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56695_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56695_SHARP_),id);
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
if((typeof tabletop !== 'undefined') && (typeof tabletop.state !== 'undefined') && (typeof tabletop.state.handle_event !== 'undefined')){
} else {
tabletop.state.handle_event = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56696 = cljs.core.get_global_hierarchy;
return (fexpr__56696.cljs$core$IFn$_invoke$arity$0 ? fexpr__56696.cljs$core$IFn$_invoke$arity$0() : fexpr__56696.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tabletop.state","handle-event"),(function() { 
var G__56793__delegate = function (_,event,___$1){
return event;
};
var G__56793 = function (_,event,var_args){
var ___$1 = null;
if (arguments.length > 2) {
var G__56794__i = 0, G__56794__a = new Array(arguments.length -  2);
while (G__56794__i < G__56794__a.length) {G__56794__a[G__56794__i] = arguments[G__56794__i + 2]; ++G__56794__i;}
  ___$1 = new cljs.core.IndexedSeq(G__56794__a,0,null);
} 
return G__56793__delegate.call(this,_,event,___$1);};
G__56793.cljs$lang$maxFixedArity = 2;
G__56793.cljs$lang$applyTo = (function (arglist__56795){
var _ = cljs.core.first(arglist__56795);
arglist__56795 = cljs.core.next(arglist__56795);
var event = cljs.core.first(arglist__56795);
var ___$1 = cljs.core.rest(arglist__56795);
return G__56793__delegate(_,event,___$1);
});
G__56793.cljs$core$IFn$_invoke$arity$variadic = G__56793__delegate;
return G__56793;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__56799__delegate = function (state,_){
return state;
};
var G__56799 = function (state,var_args){
var _ = null;
if (arguments.length > 1) {
var G__56800__i = 0, G__56800__a = new Array(arguments.length -  1);
while (G__56800__i < G__56800__a.length) {G__56800__a[G__56800__i] = arguments[G__56800__i + 1]; ++G__56800__i;}
  _ = new cljs.core.IndexedSeq(G__56800__a,0,null);
} 
return G__56799__delegate.call(this,state,_);};
G__56799.cljs$lang$maxFixedArity = 1;
G__56799.cljs$lang$applyTo = (function (arglist__56801){
var state = cljs.core.first(arglist__56801);
var _ = cljs.core.rest(arglist__56801);
return G__56799__delegate(state,_);
});
G__56799.cljs$core$IFn$_invoke$arity$variadic = G__56799__delegate;
return G__56799;
})()
);
tabletop.state.emit_BANG_ = (function tabletop$state$emit_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___56802 = arguments.length;
var i__5727__auto___56803 = (0);
while(true){
if((i__5727__auto___56803 < len__5726__auto___56802)){
args__5732__auto__.push((arguments[i__5727__auto___56803]));

var G__56804 = (i__5727__auto___56803 + (1));
i__5727__auto___56803 = G__56804;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (event,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tabletop.state.app_state,(function (p1__56697_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(tabletop.state.handle_event,p1__56697_SHARP_,event,args);
}));
}));

(tabletop.state.emit_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tabletop.state.emit_BANG_.cljs$lang$applyTo = (function (seq56698){
var G__56699 = cljs.core.first(seq56698);
var seq56698__$1 = cljs.core.next(seq56698);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56699,seq56698__$1);
}));

tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("selection","set","selection/set",-1955623082),(function (state,_,ids){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.set(ids));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("selection","add","selection/add",666797143),(function (state,_,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.conj,id);
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("selection","clear","selection/clear",373933995),(function (state,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"selection","selection",975998651),cljs.core.PersistentHashSet.EMPTY);
}));
tabletop.state.set_selection_BANG_ = (function tabletop$state$set_selection_BANG_(ids){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("selection","set","selection/set",-1955623082),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ids], 0));
});
tabletop.state.clear_selection_BANG_ = (function tabletop$state$clear_selection_BANG_(){
return tabletop.state.emit_BANG_(new cljs.core.Keyword("selection","clear","selection/clear",373933995));
});
tabletop.state.add_to_selection_BANG_ = (function tabletop$state$add_to_selection_BANG_(id){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("selection","add","selection/add",666797143),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
});
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("selection","apply","selection/apply",-924111031),(function() { 
var G__56819__delegate = function (state,_,action,id,args){
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(state);
var ids = ((cljs.core.contains_QMARK_(sel,id))?sel:cljs.core.PersistentHashSet.createAsIfByAssoc([id]));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,sid){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(tabletop.state.handle_event,s,action,sid,args);
}),state,ids);
};
var G__56819 = function (state,_,action,id,var_args){
var args = null;
if (arguments.length > 4) {
var G__56826__i = 0, G__56826__a = new Array(arguments.length -  4);
while (G__56826__i < G__56826__a.length) {G__56826__a[G__56826__i] = arguments[G__56826__i + 4]; ++G__56826__i;}
  args = new cljs.core.IndexedSeq(G__56826__a,0,null);
} 
return G__56819__delegate.call(this,state,_,action,id,args);};
G__56819.cljs$lang$maxFixedArity = 4;
G__56819.cljs$lang$applyTo = (function (arglist__56828){
var state = cljs.core.first(arglist__56828);
arglist__56828 = cljs.core.next(arglist__56828);
var _ = cljs.core.first(arglist__56828);
arglist__56828 = cljs.core.next(arglist__56828);
var action = cljs.core.first(arglist__56828);
arglist__56828 = cljs.core.next(arglist__56828);
var id = cljs.core.first(arglist__56828);
var args = cljs.core.rest(arglist__56828);
return G__56819__delegate(state,_,action,id,args);
});
G__56819.cljs$core$IFn$_invoke$arity$variadic = G__56819__delegate;
return G__56819;
})()
);
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("table","pan","table/pan",-535236330),(function (state,_,dx,dy){
return tabletop.state.pan_table(state,dx,dy);
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("table","zoom","table/zoom",-1954345064),(function (state,_,delta){
return tabletop.state.zoom_table(state,delta);
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("table","set-last-middle-click","table/set-last-middle-click",-2004180549),(function (state,_,tx,ty){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"last-middle-click","last-middle-click",749547513),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null));
}));
tabletop.state.pan_table_BANG_ = (function tabletop$state$pan_table_BANG_(dx,dy){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("table","pan","table/pan",-535236330),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dx,dy], 0));
});
tabletop.state.zoom_table_BANG_ = (function tabletop$state$zoom_table_BANG_(delta){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("table","zoom","table/zoom",-1954345064),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delta], 0));
});
tabletop.state.set_last_middle_click_BANG_ = (function tabletop$state$set_last_middle_click_BANG_(tx,ty){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("table","set-last-middle-click","table/set-last-middle-click",-2004180549),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tx,ty], 0));
});
tabletop.state.move_threshold = (6);
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","move","component/move",1413307174),(function (state,_,id,x,y){
return tabletop.state.move_component(state,id,x,y);
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","add","component/add",1526013882),(function (state,_,c){
return tabletop.state.add_component(state,c);
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","remove","component/remove",-2003192635),(function (state,_,id){
return tabletop.state.remove_component(state,id);
}));
tabletop.state.add_component_BANG_ = (function tabletop$state$add_component_BANG_(c){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","add","component/add",1526013882),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([c], 0));
});
tabletop.state.remove_component_BANG_ = (function tabletop$state$remove_component_BANG_(id){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","remove","component/remove",-2003192635),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
});
tabletop.state.move_component_BANG_ = (function tabletop$state$move_component_BANG_(id,x,y){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","move","component/move",1413307174),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,x,y], 0));
});
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("card","move-to-hand","card/move-to-hand",-906331612),(function (state,_,id){
return tabletop.state.move_card_to_hand(state,id);
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("card","move-to-table","card/move-to-table",-1593576156),(function (state,_,id,x,y){
return tabletop.state.move_card_to_table(state,id,x,y);
}));
tabletop.state.move_card_to_hand_BANG_ = (function tabletop$state$move_card_to_hand_BANG_(id){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("card","move-to-hand","card/move-to-hand",-906331612),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
});
tabletop.state.move_card_to_table_BANG_ = (function tabletop$state$move_card_to_table_BANG_(id,x,y){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("card","move-to-table","card/move-to-table",-1593576156),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,x,y], 0));
});
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("clipboard","copy","clipboard/copy",1599651561),(function (state,_,ids){
var id_set = cljs.core.set(ids);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"copy-list","copy-list",1889938311),cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56700_SHARP_){
var G__56701 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56700_SHARP_);
return (id_set.cljs$core$IFn$_invoke$arity$1 ? id_set.cljs$core$IFn$_invoke$arity$1(G__56701) : id_set.call(null,G__56701));
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state))));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("clipboard","copy-single","clipboard/copy-single",-432694744),(function (state,_,id){
var temp__5802__auto__ = cljs.core.some((function (p1__56702_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56702_SHARP_),id)){
return p1__56702_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5802__auto__)){
var c = temp__5802__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"copy-list","copy-list",1889938311),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
return state;
}
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("clipboard","paste","clipboard/paste",357010914),(function (state,_,cx,cy){
var items = new cljs.core.Keyword(null,"copy-list","copy-list",1889938311).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.seq(items)){
var base_x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),(0));
var base_y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(cljs.core.first(items),(0));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,item){
return tabletop.state.add_component(s,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),(cx + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(item,(0)) - base_x)),new cljs.core.Keyword(null,"y","y",-1757859776),(cy + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(item,(0)) - base_y))], 0)));
}),state,items);
} else {
return state;
}
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("clipboard","paste-to-hand","clipboard/paste-to-hand",-291795243),(function (state,_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,item){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())));
}),state,new cljs.core.Keyword(null,"copy-list","copy-list",1889938311).cljs$core$IFn$_invoke$arity$1(state));
}));
tabletop.state.copy_objects_to_list_BANG_ = (function tabletop$state$copy_objects_to_list_BANG_(ids){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("clipboard","copy","clipboard/copy",1599651561),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ids], 0));
});
tabletop.state.copy_single_to_list_BANG_ = (function tabletop$state$copy_single_to_list_BANG_(id){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("clipboard","copy-single","clipboard/copy-single",-432694744),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
});
tabletop.state.paste_from_list_BANG_ = (function tabletop$state$paste_from_list_BANG_(cx,cy){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("clipboard","paste","clipboard/paste",357010914),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cx,cy], 0));
});
tabletop.state.paste_to_hand_BANG_ = (function tabletop$state$paste_to_hand_BANG_(){
return tabletop.state.emit_BANG_(new cljs.core.Keyword("clipboard","paste-to-hand","clipboard/paste-to-hand",-291795243));
});
tabletop.state.placement_pos = (function tabletop$state$placement_pos(){
var or__5002__auto__ = new cljs.core.Keyword(null,"last-middle-click","last-middle-click",749547513).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var map__56703 = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var map__56703__$1 = cljs.core.__destructure_map(map__56703);
var pan_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"pan-x","pan-x",-1761589747));
var pan_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"pan-y","pan-y",915543213));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56703__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var vw = window.innerWidth;
var vh = window.innerHeight;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((vw / (2)) - pan_x) / zoom),(((vh / (2)) - pan_y) / zoom)], null);
}
});
tabletop.state.collapse_deck = (function tabletop$state$collapse_deck(state,id){
var deck = cljs.core.some((function (p1__56704_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56704_SHARP_),id)){
return p1__56704_SHARP_;
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__56705,c){
var vec__56706 = p__56705;
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56706,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56706,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),id)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,others], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [found,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(others,c)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentVector.EMPTY], null),cs);
});
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("interaction","start-deck-press","interaction/start-deck-press",1443489726),(function (state,_,deck_id,tx,ty,t){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"interaction","interaction",-2143888916),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"deck-id","deck-id",1811943113),deck_id,new cljs.core.Keyword(null,"start-time","start-time",814801386),t,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tx,ty], null),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"card-id","card-id",-1770060179),null], null));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("interaction","start-card-drag","interaction/start-card-drag",810711258),(function (state,_){
var map__56711 = new cljs.core.Keyword(null,"interaction","interaction",-2143888916).cljs$core$IFn$_invoke$arity$1(state);
var map__56711__$1 = cljs.core.__destructure_map(map__56711);
var deck_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56711__$1,new cljs.core.Keyword(null,"deck-id","deck-id",1811943113));
var start_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56711__$1,new cljs.core.Keyword(null,"start-pos","start-pos",668789086));
var deck = cljs.core.some((function (p1__56709_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56709_SHARP_),deck_id)){
return p1__56709_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var top_card = cljs.core.peek(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
var vec__56712 = start_pos;
var sx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56712,(0),null);
var sy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56712,(1),null);
var new_id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid());
var card = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(top_card,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),false,new cljs.core.Keyword(null,"id","id",-1388402092),new_id,new cljs.core.Keyword(null,"x","x",2099068185),sx,new cljs.core.Keyword(null,"y","y",-1757859776),sy], 0));
return cljs.core.assoc_in(cljs.core.assoc_in(tabletop.state.collapse_deck(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (p1__56710_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),deck_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.butlast));
} else {
return c;
}
}),p1__56710_SHARP_);
})),new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj,card),deck_id),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interaction","interaction",-2143888916),new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"card-drag","card-drag",-2106590047)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interaction","interaction",-2143888916),new cljs.core.Keyword(null,"card-id","card-id",-1770060179)], null),new_id);
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("interaction","start-deck-drag","interaction/start-deck-drag",816542862),(function (state,_){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"interaction","interaction",-2143888916),new cljs.core.Keyword(null,"mode","mode",654403691)], null),new cljs.core.Keyword(null,"deck-drag","deck-drag",-1139027534));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("interaction","update-pointer","interaction/update-pointer",411688967),(function (state,_,tx,ty){
var map__56715 = new cljs.core.Keyword(null,"interaction","interaction",-2143888916).cljs$core$IFn$_invoke$arity$1(state);
var map__56715__$1 = cljs.core.__destructure_map(map__56715);
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56715__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var card_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56715__$1,new cljs.core.Keyword(null,"card-id","card-id",-1770060179));
var deck_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56715__$1,new cljs.core.Keyword(null,"deck-id","deck-id",1811943113));
var G__56716 = mode;
var G__56716__$1 = (((G__56716 instanceof cljs.core.Keyword))?G__56716.fqn:null);
switch (G__56716__$1) {
case "card-drag":
return tabletop.state.move_component(state,card_id,tx,ty);

break;
case "deck-drag":
return tabletop.state.move_component(state,deck_id,tx,ty);

break;
default:
return state;

}
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("interaction","end","interaction/end",1646207152),(function (state,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"interaction","interaction",-2143888916),null);
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("deck","shuffle","deck/shuffle",1255056549),(function (state,_,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56717_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56717_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__56717_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),tabletop.logic.shuffle.shuffle_vec);
} else {
return p1__56717_SHARP_;
}
}),cs);
}));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("deck","draw-to-hand","deck/draw-to-hand",-1331312188),(function (state,_,id){
var vec__56718 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56718,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56718,(1),null);
var card = cljs.core.last(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
if(cljs.core.truth_(card)){
return tabletop.state.collapse_deck(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(others),cljs.core.update.cljs$core$IFn$_invoke$arity$3(deck,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.butlast)))),new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152))),id);
} else {
return state;
}
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("deck","draw-to-table","deck/draw-to-table",-772164111),(function (state,_,id,x,y){
var vec__56721 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56721,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56721,(1),null);
var card = cljs.core.last(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
if(cljs.core.truth_(card)){
return tabletop.state.collapse_deck(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vec(others),cljs.core.update.cljs$core$IFn$_invoke$arity$3(deck,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.butlast)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(card,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),true], 0))], 0))),id);
} else {
return state;
}
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("deck","draw-card-silent","deck/draw-card-silent",-2100186410),(function (state,_,id){
var vec__56724 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56724,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56724,(1),null);
if(cljs.core.seq(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck))){
return tabletop.state.collapse_deck(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(others),cljs.core.update.cljs$core$IFn$_invoke$arity$3(deck,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.butlast)))),id);
} else {
return state;
}
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("deck","draw-bottom","deck/draw-bottom",811504818),(function (state,_,id){
var vec__56727 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56727,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56727,(1),null);
var card = cljs.core.first(new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck));
if(cljs.core.truth_(card)){
return tabletop.state.collapse_deck(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(others),cljs.core.update.cljs$core$IFn$_invoke$arity$3(deck,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.rest)))),new cljs.core.Keyword(null,"hand","hand",791601933),cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(card,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"card","card",-1430355152))),id);
} else {
return state;
}
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("deck","split","deck/split",-596356113),(function (state,_,id,n_parts){
var vec__56731 = tabletop.state.find_and_rest(id,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var deck = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56731,(0),null);
var others = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56731,(1),null);
var cards = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(deck);
var total = cljs.core.count(cards);
var size = cljs.core.quot(total,n_parts);
var rem = cljs.core.mod(total,n_parts);
var sizes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56730_SHARP_){
return (size + (((p1__56730_SHARP_ < rem))?(1):(0)));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(n_parts));
var parts = (function (){var remaining = cards;
var result = cljs.core.PersistentVector.EMPTY;
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n_parts)){
return result;
} else {
var G__56951 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sizes,i),remaining);
var G__56952 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sizes,i),remaining)));
var G__56953 = (i + (1));
remaining = G__56951;
result = G__56952;
i = G__56953;
continue;
}
break;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(others),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,part_cards){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(deck,new cljs.core.Keyword(null,"id","id",-1388402092),(((i === (0)))?id:cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cards","cards",169174038),part_cards,new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(deck,(0)) + (i * (80)))], 0));
}),parts)));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("deck","flip","deck/flip",2037085971),(function (state,_,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56734_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56734_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__56734_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),(function (cards){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(c,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),cljs.core.not);
}),cards);
}));
} else {
return p1__56734_SHARP_;
}
}),cs);
}));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("deck","merge-onto","deck/merge-onto",-2094325817),(function (state,_,src_id,tgt_id){
var src = cljs.core.some((function (p1__56735_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56735_SHARP_),src_id)){
return p1__56735_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
var tgt = cljs.core.some((function (p1__56736_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56736_SHARP_),tgt_id)){
return p1__56736_SHARP_;
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
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56737_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56737_SHARP_),tgt_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__56737_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.into,new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(src));
} else {
return p1__56737_SHARP_;
}
}),cs);
}));
} else {
return state;
}
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("card","flip","card/flip",2037053110),(function (state,_,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56738_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56738_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__56738_SHARP_,new cljs.core.Keyword(null,"face-up?","face-up?",-1866751117),cljs.core.not);
} else {
return p1__56738_SHARP_;
}
}),cs);
}));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("card","drop-on-deck","card/drop-on-deck",192135585),(function (state,_,card_id,deck_id){
var card = cljs.core.some((function (p1__56739_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56739_SHARP_),card_id)){
return p1__56739_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(card)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(tabletop.state.remove_component(state,card_id),new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56740_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56740_SHARP_),deck_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__56740_SHARP_,new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.conj,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(card,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], 0)));
} else {
return p1__56740_SHARP_;
}
}),cs);
}));
} else {
return state;
}
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("die","roll","die/roll",11366199),(function (state,_,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56741_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56741_SHARP_),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56741_SHARP_,new cljs.core.Keyword(null,"result","result",1415092211),(cljs.core.rand_int(new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$2(p1__56741_SHARP_,(6))) + (1)));
} else {
return p1__56741_SHARP_;
}
}),cs);
}));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("die","increment","die/increment",-1558995708),(function (state,_,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56742_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56742_SHARP_),id)){
var faces = new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$2(p1__56742_SHARP_,(6));
var r = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(p1__56742_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56742_SHARP_,new cljs.core.Keyword(null,"result","result",1415092211),(((r >= faces))?(1):(r + (1))));
} else {
return p1__56742_SHARP_;
}
}),cs);
}));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("die","decrement","die/decrement",-725512551),(function (state,_,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56743_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56743_SHARP_),id)){
var faces = new cljs.core.Keyword(null,"faces","faces",-73909544).cljs$core$IFn$_invoke$arity$2(p1__56743_SHARP_,(6));
var r = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(p1__56743_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56743_SHARP_,new cljs.core.Keyword(null,"result","result",1415092211),(((r <= (1)))?faces:(r - (1))));
} else {
return p1__56743_SHARP_;
}
}),cs);
}));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","rotate","component/rotate",-683067716),(function (state,_,id,deg){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56744_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56744_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__56744_SHARP_,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(0)),deg);
} else {
return p1__56744_SHARP_;
}
}),cs);
}));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","lock","component/lock",930559067),(function (state,_,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56745_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56745_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__56745_SHARP_,new cljs.core.Keyword(null,"locked?","locked?",995448757),cljs.core.not);
} else {
return p1__56745_SHARP_;
}
}),cs);
}));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","scale-up","component/scale-up",-459199842),(function (state,_,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56746_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56746_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__56746_SHARP_,new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,1.0),1.25);
} else {
return p1__56746_SHARP_;
}
}),cs);
}));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","scale-down","component/scale-down",-557551941),(function (state,_,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__56747_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56747_SHARP_),id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__56747_SHARP_,new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,1.0),(1.0 / 1.25));
} else {
return p1__56747_SHARP_;
}
}),cs);
}));
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","bring-to-front","component/bring-to-front",2081432307),(function (state,_,id){
var c = cljs.core.some((function (p1__56748_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56748_SHARP_),id)){
return p1__56748_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(c)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56749_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56749_SHARP_),id);
}),cs)),c);
}));
} else {
return state;
}
}));
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("component","send-to-back","component/send-to-back",-155279613),(function (state,_,id){
var c = cljs.core.some((function (p1__56750_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56750_SHARP_),id)){
return p1__56750_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(c)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"components","components",-1073188942),(function (cs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56751_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56751_SHARP_),id);
}),cs));
}));
} else {
return state;
}
}));
/**
 * Arrange `items` (each with :x :y) in a compact grid around their centroid.
 * Returns items with updated :x :y.
 */
tabletop.state.grid_layout = (function tabletop$state$grid_layout(items,w,h,gap){
var n = cljs.core.count(items);
var cols = (function (){var x__5087__auto__ = (1);
var y__5088__auto__ = (Math.ceil(Math.sqrt(n)) | (0));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})();
var rows = (Math.ceil((n / cols)) | (0));
var cx = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),items)) / n);
var cy = (cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),items)) / n);
var ox = (cx - (0.5 * ((cols * (w + gap)) - gap)));
var oy = (cy - (0.5 * ((rows * (h + gap)) - gap)));
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,item){
var col = cljs.core.mod(i,cols);
var row = cljs.core.quot(i,cols);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"x","x",2099068185),(ox + (col * (w + gap))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776),(oy + (row * (h + gap)))], 0));
}),items);
});
tabletop.state.handle_event.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("selection","group","selection/group",-1929312080),(function (state,_){
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(state);
var selected = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56752_SHARP_){
return cljs.core.contains_QMARK_(sel,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56752_SHARP_));
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(state));
if((cljs.core.count(selected) <= (1))){
return state;
} else {
var cards = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56753_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56753_SHARP_));
}),selected);
var decks = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56754_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56754_SHARP_));
}),selected);
var others = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56755_SHARP_){
return cljs.core.not((function (){var G__56760 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56755_SHARP_);
var fexpr__56759 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deck","deck",1145325705),null,new cljs.core.Keyword(null,"card","card",-1430355152),null], null), null);
return (fexpr__56759.cljs$core$IFn$_invoke$arity$1 ? fexpr__56759.cljs$core$IFn$_invoke$arity$1(G__56760) : fexpr__56759.call(null,G__56760));
})());
}),selected);
var card_deck_state = ((cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cards,decks)))?(function (){var anchor = cljs.core.first(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(decks,cards));
var all_cards = cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([decks], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56756_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__56756_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
}),cards)));
var new_deck = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"deck","deck",1145325705),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(anchor,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(anchor,(0)),new cljs.core.Keyword(null,"cards","cards",169174038),all_cards], null);
return tabletop.state.add_component(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__56757_SHARP_,p2__56758_SHARP_){
return tabletop.state.remove_component(p1__56757_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p2__56758_SHARP_));
}),state,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cards,decks)),new_deck);
})():state);
var final_state = ((cljs.core.seq(others))?(function (){var laid_out = tabletop.state.grid_layout(others,(70),(100),(8));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__56761){
var map__56762 = p__56761;
var map__56762__$1 = cljs.core.__destructure_map(map__56762);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56762__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56762__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56762__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return tabletop.state.move_component(s,id,x,y);
}),card_deck_state,laid_out);
})():card_deck_state);
return final_state;
}
}));
tabletop.state.group_selection_BANG_ = (function tabletop$state$group_selection_BANG_(){
return tabletop.state.emit_BANG_(new cljs.core.Keyword("selection","group","selection/group",-1929312080));
});
tabletop.state.component_at = (function tabletop$state$component_at(tx,ty){
return cljs.core.last(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (c){
var cw = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"die","die",-547192252)))?(37):(70));
var ch = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"die","die",-547192252)))?(37):(100));
return (((tx >= new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)))) && ((((tx <= (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$2(c,(0)) + cw))) && ((((ty >= new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)))) && ((ty <= (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$2(c,(0)) + ch))))))));
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state))));
});
if((typeof tabletop !== 'undefined') && (typeof tabletop.state !== 'undefined') && (typeof tabletop.state.component_actions !== 'undefined')){
} else {
tabletop.state.component_actions = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56763 = cljs.core.get_global_hierarchy;
return (fexpr__56763.cljs$core$IFn$_invoke$arity$0 ? fexpr__56763.cljs$core$IFn$_invoke$arity$0() : fexpr__56763.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("tabletop.state","component-actions"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
tabletop.state.common_actions = (function tabletop$state$common_actions(id){
var sel = new cljs.core.Keyword(null,"selection","selection",975998651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
var ids = ((cljs.core.contains_QMARK_(sel,id))?cljs.core.vec(sel):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
var locked_QMARK_ = new cljs.core.Keyword(null,"locked?","locked?",995448757).cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__56764_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__56764_SHARP_),id)){
return p1__56764_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state))));
var G__56765 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(locked_QMARK_)?"Unlock":"Lock"),new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var seq__56766 = cljs.core.seq(ids);
var chunk__56767 = null;
var count__56768 = (0);
var i__56769 = (0);
while(true){
if((i__56769 < count__56768)){
var i = chunk__56767.cljs$core$IIndexed$_nth$arity$2(null,i__56769);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","lock","component/lock",930559067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));


var G__57040 = seq__56766;
var G__57041 = chunk__56767;
var G__57042 = count__56768;
var G__57043 = (i__56769 + (1));
seq__56766 = G__57040;
chunk__56767 = G__57041;
count__56768 = G__57042;
i__56769 = G__57043;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56766);
if(temp__5804__auto__){
var seq__56766__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56766__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__56766__$1);
var G__57044 = cljs.core.chunk_rest(seq__56766__$1);
var G__57045 = c__5525__auto__;
var G__57046 = cljs.core.count(c__5525__auto__);
var G__57047 = (0);
seq__56766 = G__57044;
chunk__56767 = G__57045;
count__56768 = G__57046;
i__56769 = G__57047;
continue;
} else {
var i = cljs.core.first(seq__56766__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","lock","component/lock",930559067),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));


var G__57052 = cljs.core.next(seq__56766__$1);
var G__57053 = null;
var G__57054 = (0);
var G__57055 = (0);
seq__56766 = G__57052;
chunk__56767 = G__57053;
count__56768 = G__57054;
i__56769 = G__57055;
continue;
}
} else {
return null;
}
}
break;
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Bring to Front",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var seq__56770 = cljs.core.seq(ids);
var chunk__56771 = null;
var count__56772 = (0);
var i__56773 = (0);
while(true){
if((i__56773 < count__56772)){
var i = chunk__56771.cljs$core$IIndexed$_nth$arity$2(null,i__56773);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","bring-to-front","component/bring-to-front",2081432307),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));


var G__57056 = seq__56770;
var G__57057 = chunk__56771;
var G__57058 = count__56772;
var G__57059 = (i__56773 + (1));
seq__56770 = G__57056;
chunk__56771 = G__57057;
count__56772 = G__57058;
i__56773 = G__57059;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56770);
if(temp__5804__auto__){
var seq__56770__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56770__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__56770__$1);
var G__57061 = cljs.core.chunk_rest(seq__56770__$1);
var G__57062 = c__5525__auto__;
var G__57063 = cljs.core.count(c__5525__auto__);
var G__57064 = (0);
seq__56770 = G__57061;
chunk__56771 = G__57062;
count__56772 = G__57063;
i__56773 = G__57064;
continue;
} else {
var i = cljs.core.first(seq__56770__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","bring-to-front","component/bring-to-front",2081432307),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));


var G__57066 = cljs.core.next(seq__56770__$1);
var G__57067 = null;
var G__57068 = (0);
var G__57069 = (0);
seq__56770 = G__57066;
chunk__56771 = G__57067;
count__56772 = G__57068;
i__56773 = G__57069;
continue;
}
} else {
return null;
}
}
break;
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Send to Back",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var seq__56774 = cljs.core.seq(ids);
var chunk__56775 = null;
var count__56776 = (0);
var i__56777 = (0);
while(true){
if((i__56777 < count__56776)){
var i = chunk__56775.cljs$core$IIndexed$_nth$arity$2(null,i__56777);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","send-to-back","component/send-to-back",-155279613),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));


var G__57070 = seq__56774;
var G__57071 = chunk__56775;
var G__57072 = count__56776;
var G__57073 = (i__56777 + (1));
seq__56774 = G__57070;
chunk__56775 = G__57071;
count__56776 = G__57072;
i__56777 = G__57073;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56774);
if(temp__5804__auto__){
var seq__56774__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56774__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__56774__$1);
var G__57074 = cljs.core.chunk_rest(seq__56774__$1);
var G__57075 = c__5525__auto__;
var G__57076 = cljs.core.count(c__5525__auto__);
var G__57077 = (0);
seq__56774 = G__57074;
chunk__56775 = G__57075;
count__56776 = G__57076;
i__56777 = G__57077;
continue;
} else {
var i = cljs.core.first(seq__56774__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","send-to-back","component/send-to-back",-155279613),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));


var G__57078 = cljs.core.next(seq__56774__$1);
var G__57079 = null;
var G__57080 = (0);
var G__57081 = (0);
seq__56774 = G__57078;
chunk__56775 = G__57079;
count__56776 = G__57080;
i__56777 = G__57081;
continue;
}
} else {
return null;
}
}
break;
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Copy",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("clipboard","copy","clipboard/copy",1599651561),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ids], 0));
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Remove",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var seq__56778 = cljs.core.seq(ids);
var chunk__56779 = null;
var count__56780 = (0);
var i__56781 = (0);
while(true){
if((i__56781 < count__56780)){
var i = chunk__56779.cljs$core$IIndexed$_nth$arity$2(null,i__56781);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","remove","component/remove",-2003192635),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));


var G__57082 = seq__56778;
var G__57083 = chunk__56779;
var G__57084 = count__56780;
var G__57085 = (i__56781 + (1));
seq__56778 = G__57082;
chunk__56779 = G__57083;
count__56780 = G__57084;
i__56781 = G__57085;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__56778);
if(temp__5804__auto__){
var seq__56778__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56778__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__56778__$1);
var G__57086 = cljs.core.chunk_rest(seq__56778__$1);
var G__57087 = c__5525__auto__;
var G__57088 = cljs.core.count(c__5525__auto__);
var G__57089 = (0);
seq__56778 = G__57086;
chunk__56779 = G__57087;
count__56780 = G__57088;
i__56781 = G__57089;
continue;
} else {
var i = cljs.core.first(seq__56778__$1);
tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("component","remove","component/remove",-2003192635),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i], 0));


var G__57090 = cljs.core.next(seq__56778__$1);
var G__57091 = null;
var G__57092 = (0);
var G__57093 = (0);
seq__56778 = G__57090;
chunk__56779 = G__57091;
count__56780 = G__57092;
i__56781 = G__57093;
continue;
}
} else {
return null;
}
}
break;
}
})], null)], null);
if((cljs.core.count(sel) > (1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56765,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Group",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.emit_BANG_(new cljs.core.Keyword("selection","group","selection/group",-1929312080));
})], null));
} else {
return G__56765;
}
});
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deck","deck",1145325705),(function (p__56782){
var map__56783 = p__56782;
var map__56783__$1 = cljs.core.__destructure_map(map__56783);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56783__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56783__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56783__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var cards = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56783__$1,new cljs.core.Keyword(null,"cards","cards",169174038));
var empty_QMARK_ = cljs.core.empty_QMARK_(cards);
var n = cljs.core.count(cards);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var G__56784 = cljs.core.PersistentVector.EMPTY;
var G__56784__$1 = (((!(empty_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56784,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Draw to Table",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("deck","draw-to-table","deck/draw-to-table",-772164111),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,(x + (80)),y], 0));
})], null)):G__56784);
var G__56784__$2 = (((!(empty_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56784__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Draw to Hand",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("deck","draw-to-hand","deck/draw-to-hand",-1331312188),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
})], null)):G__56784__$1);
var G__56784__$3 = (((!(empty_QMARK_)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56784__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Draw Bottom Card",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("deck","draw-bottom","deck/draw-bottom",811504818),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
})], null)):G__56784__$2);
var G__56784__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56784__$3,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Shuffle",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("deck","shuffle","deck/shuffle",1255056549),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
})], null))
;
var G__56784__$5 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56784__$4,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Flip Deck",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("selection","apply","selection/apply",-924111031),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("deck","flip","deck/flip",2037085971),id], 0));
})], null))
;
var G__56784__$6 = (((n >= (2)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56784__$5,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Split Deck (2)",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("deck","split","deck/split",-596356113),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,(2)], 0));
})], null)):G__56784__$5);
if((n >= (3))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__56784__$6,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Split Deck (3)",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("deck","split","deck/split",-596356113),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,(3)], 0));
})], null));
} else {
return G__56784__$6;
}
})(),tabletop.state.common_actions(id));
}));
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"card","card",-1430355152),(function (p__56785){
var map__56786 = p__56785;
var map__56786__$1 = cljs.core.__destructure_map(map__56786);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56786__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Flip",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("selection","apply","selection/apply",-924111031),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("card","flip","card/flip",2037053110),id], 0));
})], null)], null),tabletop.state.common_actions(id));
}));
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"die","die",-547192252),(function (p__56787){
var map__56788 = p__56787;
var map__56788__$1 = cljs.core.__destructure_map(map__56788);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56788__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Roll",new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return tabletop.state.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("selection","apply","selection/apply",-924111031),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("die","roll","die/roll",11366199),id], 0));
})], null)], null),tabletop.state.common_actions(id));
}));
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tile-piece","tile-piece",1225101561),(function (p__56789){
var map__56790 = p__56789;
var map__56790__$1 = cljs.core.__destructure_map(map__56790);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56790__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return tabletop.state.common_actions(id);
}));
tabletop.state.component_actions.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (c){
return tabletop.state.common_actions(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c));
}));

//# sourceMappingURL=tabletop.state.js.map

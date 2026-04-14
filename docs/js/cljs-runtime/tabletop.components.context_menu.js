goog.provide('tabletop.components.context_menu');
tabletop.components.context_menu.open_context_menu_BANG_ = (function tabletop$components$context_menu$open_context_menu_BANG_(x,y,items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"items","items",1031954938),items], null));
});
tabletop.components.context_menu.close_context_menu_BANG_ = (function tabletop$components$context_menu$close_context_menu_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451),null);
});
tabletop.components.context_menu.context_menu = (function tabletop$components$context_menu$context_menu(){
var handle_keydown = (function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e.key,"Escape")){
return tabletop.components.context_menu.close_context_menu_BANG_();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
return document.addEventListener("keydown",handle_keydown);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (_){
return document.removeEventListener("keydown",handle_keydown);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var menu = new cljs.core.Keyword(null,"context-menu","context-menu",-1002713451).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
if(cljs.core.truth_(menu)){
var map__56818 = menu;
var map__56818__$1 = cljs.core.__destructure_map(map__56818);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56818__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56818__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56818__$1,new cljs.core.Keyword(null,"items","items",1031954938));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed inset-0 z-40",new cljs.core.Keyword(null,"on-click","on-click",1632826543),tabletop.components.context_menu.close_context_menu_BANG_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"fixed z-50 bg-white rounded shadow-lg py-1 min-w-[8rem]",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y], null)], null),(function (){var iter__5480__auto__ = (function tabletop$components$context_menu$context_menu_$_iter__56822(s__56823){
return (new cljs.core.LazySeq(null,(function (){
var s__56823__$1 = s__56823;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56823__$1);
if(temp__5804__auto__){
var s__56823__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56823__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__56823__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__56825 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__56824 = (0);
while(true){
if((i__56824 < size__5479__auto__)){
var item = cljs.core._nth(c__5478__auto__,i__56824);
cljs.core.chunk_append(b__56825,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"class","class",-2030961996),"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56824,item,c__5478__auto__,size__5479__auto__,b__56825,s__56823__$2,temp__5804__auto__,map__56818,map__56818__$1,x,y,items,menu,handle_keydown){
return (function (e){
e.stopPropagation();

var fexpr__56840_56881 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(item);
(fexpr__56840_56881.cljs$core$IFn$_invoke$arity$0 ? fexpr__56840_56881.cljs$core$IFn$_invoke$arity$0() : fexpr__56840_56881.call(null));

return tabletop.components.context_menu.close_context_menu_BANG_();
});})(i__56824,item,c__5478__auto__,size__5479__auto__,b__56825,s__56823__$2,temp__5804__auto__,map__56818,map__56818__$1,x,y,items,menu,handle_keydown))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null));

var G__56885 = (i__56824 + (1));
i__56824 = G__56885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56825),tabletop$components$context_menu$context_menu_$_iter__56822(cljs.core.chunk_rest(s__56823__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56825),null);
}
} else {
var item = cljs.core.first(s__56823__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"class","class",-2030961996),"block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__56823__$2,temp__5804__auto__,map__56818,map__56818__$1,x,y,items,menu,handle_keydown){
return (function (e){
e.stopPropagation();

var fexpr__56847_56895 = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(item);
(fexpr__56847_56895.cljs$core$IFn$_invoke$arity$0 ? fexpr__56847_56895.cljs$core$IFn$_invoke$arity$0() : fexpr__56847_56895.call(null));

return tabletop.components.context_menu.close_context_menu_BANG_();
});})(item,s__56823__$2,temp__5804__auto__,map__56818,map__56818__$1,x,y,items,menu,handle_keydown))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null),tabletop$components$context_menu$context_menu_$_iter__56822(cljs.core.rest(s__56823__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(items);
})()], null)], null);
} else {
return null;
}
})], null));
});

//# sourceMappingURL=tabletop.components.context_menu.js.map

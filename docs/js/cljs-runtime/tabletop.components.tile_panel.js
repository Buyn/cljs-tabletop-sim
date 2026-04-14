goog.provide('tabletop.components.tile_panel');
tabletop.components.tile_panel.num_input = (function tabletop$components$tile_panel$num_input(var_args){
var args__5732__auto__ = [];
var len__5726__auto___57101 = arguments.length;
var i__5727__auto___57102 = (0);
while(true){
if((i__5727__auto___57102 < len__5726__auto___57101)){
args__5732__auto__.push((arguments[i__5727__auto___57102]));

var G__57108 = (i__5727__auto___57102 + (1));
i__5727__auto___57102 = G__57108;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return tabletop.components.tile_panel.num_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(tabletop.components.tile_panel.num_input.cljs$core$IFn$_invoke$arity$variadic = (function (label,value,on_change,p__56834){
var vec__56835 = p__56834;
var map__56838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56835,(0),null);
var map__56838__$1 = cljs.core.__destructure_map(map__56838);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56838__$1,new cljs.core.Keyword(null,"min","min",444991522),(0));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56838__$1,new cljs.core.Keyword(null,"max","max",61366548),(9999));
var step = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56838__$1,new cljs.core.Keyword(null,"step","step",1288888124),(1));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"2px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af"], null)], null),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"step","step",1288888124),step,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"60px",new cljs.core.Keyword(null,"padding","padding",1660304693),"3px 6px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56810_SHARP_){
var G__56839 = parseFloat(p1__56810_SHARP_.target.value);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__56839) : on_change.call(null,G__56839));
})], null)], null)], null);
}));

(tabletop.components.tile_panel.num_input.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(tabletop.components.tile_panel.num_input.cljs$lang$applyTo = (function (seq56814){
var G__56815 = cljs.core.first(seq56814);
var seq56814__$1 = cljs.core.next(seq56814);
var G__56816 = cljs.core.first(seq56814__$1);
var seq56814__$2 = cljs.core.next(seq56814__$1);
var G__56817 = cljs.core.first(seq56814__$2);
var seq56814__$3 = cljs.core.next(seq56814__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56815,G__56816,G__56817,seq56814__$3);
}));

tabletop.components.tile_panel.crop_row = (function tabletop$components$tile_panel$crop_row(label,crop,on_change){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"6px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-end"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#d1d5db",new cljs.core.Keyword(null,"width","width",-384071477),"80px",new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),"4px"], null)], null),label], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_panel.num_input,"Top",new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$2(crop,(0)),(function (p1__56850_SHARP_){
var G__56857 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(crop,new cljs.core.Keyword(null,"top","top",-1856271961),p1__56850_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__56857) : on_change.call(null,G__56857));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_panel.num_input,"Bottom",new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$2(crop,(0)),(function (p1__56851_SHARP_){
var G__56865 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(crop,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),p1__56851_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__56865) : on_change.call(null,G__56865));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_panel.num_input,"Left",new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$2(crop,(0)),(function (p1__56852_SHARP_){
var G__56868 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(crop,new cljs.core.Keyword(null,"left","left",-399115937),p1__56852_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__56868) : on_change.call(null,G__56868));
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_panel.num_input,"Right",new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$2(crop,(0)),(function (p1__56853_SHARP_){
var G__56878 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(crop,new cljs.core.Keyword(null,"right","right",-452581833),p1__56853_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__56878) : on_change.call(null,G__56878));
})], null)], null);
});
tabletop.components.tile_panel.tile_panel = (function tabletop$components$tile_panel$tile_panel(p__56923){
var map__56929 = p__56923;
var map__56929__$1 = cljs.core.__destructure_map(map__56929);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56929__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"src","src",-1651076051),"",new cljs.core.Keyword(null,"cols","cols",-1914801295),(1),new cljs.core.Keyword(null,"rows","rows",850049680),(1),new cljs.core.Keyword(null,"indices","indices",-1218138343),"",new cljs.core.Keyword(null,"outer-crop","outer-crop",1407432483),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null),new cljs.core.Keyword(null,"inner-crop","inner-crop",1917857473),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0)], null),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"corner-radius","corner-radius",903902527),(0)], null));
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var panel_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((200));
var panel_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100));
var dragging = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_ox = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var drag_oy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return (function (p__56934){
var map__56935 = p__56934;
var map__56935__$1 = cljs.core.__destructure_map(map__56935);
var on_close__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56935__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var map__56936 = cljs.core.deref(form);
var map__56936__$1 = cljs.core.__destructure_map(map__56936);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var indices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
var outer_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword(null,"outer-crop","outer-crop",1407432483));
var inner_crop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword(null,"inner-crop","inner-crop",1917857473));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var corner_radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56936__$1,new cljs.core.Keyword(null,"corner-radius","corner-radius",903902527));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"left","left",-399115937)],["0 4px 24px rgba(0,0,0,0.5)","white",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(panel_y)),"px"].join(''),"360px","#1f2937",(50),"fixed","8px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(panel_x)),"px"].join('')]),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"Add Tile Image"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138),(function (p1__56896_SHARP_){
return p1__56896_SHARP_.stopPropagation();
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),"\u00D7"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"10px",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"80vh",new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto"], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af"], null)], null),"Image URL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),src,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"https://...",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56900_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"src","src",-1651076051),p1__56900_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af"], null)], null),"Or local file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),"image/*",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#d1d5db"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var temp__5804__auto__ = (e.target.files[(0)]);
if(cljs.core.truth_(temp__5804__auto__)){
var file = temp__5804__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"src","src",-1651076051),URL.createObjectURL(file));
} else {
return null;
}
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"8px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_panel.num_input,"Columns",cols,(function (p1__56902_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"cols","cols",-1914801295),(function (){var x__5087__auto__ = (1);
var y__5088__auto__ = (p1__56902_SHARP_ | (0));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_panel.num_input,"Rows",rows,(function (p1__56903_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var x__5087__auto__ = (1);
var y__5088__auto__ = (p1__56903_SHARP_ | (0));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null)], null),"Global Image Crop (px)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_panel.crop_row,"Margins",outer_crop,(function (p1__56907_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"outer-crop","outer-crop",1407432483),p1__56907_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600"], null)], null),"Per-Tile Inner Borders (px)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_panel.crop_row,"Borders",inner_crop,(function (p1__56908_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"inner-crop","inner-crop",1917857473),p1__56908_SHARP_);
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af"], null)], null),"Tile Shape"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"6px"], null)], null),(function (){var iter__5480__auto__ = (function tabletop$components$tile_panel$tile_panel_$_iter__56983(s__56984){
return (new cljs.core.LazySeq(null,(function (){
var s__56984__$1 = s__56984;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__56984__$1);
if(temp__5804__auto__){
var s__56984__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56984__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__56984__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__56986 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__56985 = (0);
while(true){
if((i__56985 < size__5479__auto__)){
var s = cljs.core._nth(c__5478__auto__,i__56985);
cljs.core.chunk_append(b__56986,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 10px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape,s))?"#2563eb":"#374151"),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56985,s,c__5478__auto__,size__5479__auto__,b__56986,s__56984__$2,temp__5804__auto__,map__56936,map__56936__$1,src,cols,rows,indices,outer_crop,inner_crop,shape,corner_radius,map__56935,map__56935__$1,on_close__$1,form,error,panel_x,panel_y,dragging,drag_ox,drag_oy,map__56929,map__56929__$1,on_close){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"shape","shape",1190694006),s);
});})(i__56985,s,c__5478__auto__,size__5479__auto__,b__56986,s__56984__$2,temp__5804__auto__,map__56936,map__56936__$1,src,cols,rows,indices,outer_crop,inner_crop,shape,corner_radius,map__56935,map__56935__$1,on_close__$1,form,error,panel_x,panel_y,dragging,drag_ox,drag_oy,map__56929,map__56929__$1,on_close))
], null),cljs.core.name(s)], null));

var G__57152 = (i__56985 + (1));
i__56985 = G__57152;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56986),tabletop$components$tile_panel$tile_panel_$_iter__56983(cljs.core.chunk_rest(s__56984__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56986),null);
}
} else {
var s = cljs.core.first(s__56984__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),s,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 10px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape,s))?"#2563eb":"#374151"),new cljs.core.Keyword(null,"color","color",1011675173),"white"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (s,s__56984__$2,temp__5804__auto__,map__56936,map__56936__$1,src,cols,rows,indices,outer_crop,inner_crop,shape,corner_radius,map__56935,map__56935__$1,on_close__$1,form,error,panel_x,panel_y,dragging,drag_ox,drag_oy,map__56929,map__56929__$1,on_close){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"shape","shape",1190694006),s);
});})(s,s__56984__$2,temp__5804__auto__,map__56936,map__56936__$1,src,cols,rows,indices,outer_crop,inner_crop,shape,corner_radius,map__56935,map__56935__$1,on_close__$1,form,error,panel_x,panel_y,dragging,drag_ox,drag_oy,map__56929,map__56929__$1,on_close))
], null),cljs.core.name(s)], null),tabletop$components$tile_panel$tile_panel_$_iter__56983(cljs.core.rest(s__56984__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rectangle","rectangle",293163262),new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),new cljs.core.Keyword(null,"hexagon","hexagon",1293746835)], null));
})()], null)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"rectangle","rectangle",293163262)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"8px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"flex-end"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabletop.components.tile_panel.num_input,"Corner Radius (px)",corner_radius,(function (p1__56909_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"corner-radius","corner-radius",903902527),(function (){var x__5087__auto__ = (0);
var y__5088__auto__ = p1__56909_SHARP_;
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"4px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af"], null)], null),["Tile indices (1\u2013",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cols * rows)),", blank = all)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),indices,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g. 1,3-5,7",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__56911_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"indices","indices",-1218138343),p1__56911_SHARP_.target.value);
})], null)], null)], null),(cljs.core.truth_(cljs.core.deref(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#f87171",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),cljs.core.deref(error)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 12px",new cljs.core.Keyword(null,"background","background",-863952629),"#2563eb",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(error,null);

if(clojure.string.blank_QMARK_(src)){
return cljs.core.reset_BANG_(error,"Image source is required.");
} else {
var img = (new Image());
(img.onload = (function (){
var iw = img.naturalWidth;
var ih = img.naturalHeight;
var oc = outer_crop;
var cw = ((iw - new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$2(oc,(0))) - new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$2(oc,(0)));
var ch = ((ih - new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$2(oc,(0))) - new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$2(oc,(0)));
var tile_w = (cw / cols);
var tile_h = (ch / rows);
var vec__57037 = tabletop.state.placement_pos();
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57037,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57037,(1),null);
var pieces = tabletop.logic.tile.make_tile_pieces(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"inner-crop","inner-crop",1917857473),new cljs.core.Keyword(null,"outer-crop","outer-crop",1407432483),new cljs.core.Keyword(null,"indices-str","indices-str",-2055270712),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"tile-w","tile-w",2051289999),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"tile-h","tile-h",356807408),new cljs.core.Keyword(null,"cols","cols",-1914801295),new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"corner-radius","corner-radius",903902527)],[py,inner_crop,outer_crop,indices,src,tile_w,rows,tile_h,cols,shape,px,corner_radius]));
var seq__57048_57153 = cljs.core.seq(pieces);
var chunk__57049_57154 = null;
var count__57050_57155 = (0);
var i__57051_57156 = (0);
while(true){
if((i__57051_57156 < count__57050_57155)){
var p_57157 = chunk__57049_57154.cljs$core$IIndexed$_nth$arity$2(null,i__57051_57156);
tabletop.state.add_component_BANG_(p_57157);


var G__57158 = seq__57048_57153;
var G__57159 = chunk__57049_57154;
var G__57160 = count__57050_57155;
var G__57161 = (i__57051_57156 + (1));
seq__57048_57153 = G__57158;
chunk__57049_57154 = G__57159;
count__57050_57155 = G__57160;
i__57051_57156 = G__57161;
continue;
} else {
var temp__5804__auto___57162 = cljs.core.seq(seq__57048_57153);
if(temp__5804__auto___57162){
var seq__57048_57163__$1 = temp__5804__auto___57162;
if(cljs.core.chunked_seq_QMARK_(seq__57048_57163__$1)){
var c__5525__auto___57164 = cljs.core.chunk_first(seq__57048_57163__$1);
var G__57165 = cljs.core.chunk_rest(seq__57048_57163__$1);
var G__57166 = c__5525__auto___57164;
var G__57167 = cljs.core.count(c__5525__auto___57164);
var G__57168 = (0);
seq__57048_57153 = G__57165;
chunk__57049_57154 = G__57166;
count__57050_57155 = G__57167;
i__57051_57156 = G__57168;
continue;
} else {
var p_57169 = cljs.core.first(seq__57048_57163__$1);
tabletop.state.add_component_BANG_(p_57169);


var G__57170 = cljs.core.next(seq__57048_57163__$1);
var G__57171 = null;
var G__57172 = (0);
var G__57173 = (0);
seq__57048_57153 = G__57170;
chunk__57049_57154 = G__57171;
count__57050_57155 = G__57172;
i__57051_57156 = G__57173;
continue;
}
} else {
}
}
break;
}

return (on_close__$1.cljs$core$IFn$_invoke$arity$0 ? on_close__$1.cljs$core$IFn$_invoke$arity$0() : on_close__$1.call(null));
}));

(img.onerror = (function (){
return cljs.core.reset_BANG_(error,"Failed to load image. Check the URL.");
}));

return (img.src = src);
}
})], null),"Add Tiles"], null)], null)], null);
});
});

//# sourceMappingURL=tabletop.components.tile_panel.js.map

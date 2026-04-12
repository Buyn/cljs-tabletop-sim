goog.provide('tabletop.components.tile_panel');
tabletop.components.tile_panel.tile_panel = (function tabletop$components$tile_panel$tile_panel(p__31466){
var map__31467 = p__31466;
var map__31467__$1 = cljs.core.__destructure_map(map__31467);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31467__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var form = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),"",new cljs.core.Keyword(null,"cols","cols",-1914801295),(1),new cljs.core.Keyword(null,"rows","rows",850049680),(1),new cljs.core.Keyword(null,"indices","indices",-1218138343),""], null));
var error = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var panel_x = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((200));
var panel_y = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((100));
var dragging = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var drag_ox = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var drag_oy = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var file_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__31468){
var map__31469 = p__31468;
var map__31469__$1 = cljs.core.__destructure_map(map__31469);
var on_close__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31469__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var map__31470 = cljs.core.deref(form);
var map__31470__$1 = cljs.core.__destructure_map(map__31470);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31470__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var cols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31470__$1,new cljs.core.Keyword(null,"cols","cols",-1914801295));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31470__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var indices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31470__$1,new cljs.core.Keyword(null,"indices","indices",-1218138343));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"left","left",-399115937)],["0 4px 24px rgba(0,0,0,0.5)","white",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(panel_y)),"px"].join(''),"320px","#1f2937",(50),"fixed","8px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(panel_x)),"px"].join('')]),new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695),(function (e){
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
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null),"Add Tile Image"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"16px"], null)], null),"\u2715"], null)], null),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),"column",new cljs.core.Keyword(null,"gap","gap",80255254),"8px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af"], null)], null),"Image URL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),src,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"https://...",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31461_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"src","src",-1651076051),p1__31461_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af"], null)], null),"Or local file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),"image/*",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__31462_SHARP_){
return cljs.core.reset_BANG_(file_ref,p1__31462_SHARP_);
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#d1d5db"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var temp__5804__auto__ = (e.target.files[(0)]);
if(cljs.core.truth_(temp__5804__auto__)){
var file = temp__5804__auto__;
var url = URL.createObjectURL(file);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"src","src",-1651076051),url);
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"gap","gap",80255254),"8px",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af"], null)], null),"Columns"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"value","value",305978217),cols,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31463_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"cols","cols",-1914801295),(function (){var x__5087__auto__ = (1);
var y__5088__auto__ = parseInt(p1__31463_SHARP_.target.value,(10));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af"], null)], null),"Rows"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"value","value",305978217),rows,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31464_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"rows","rows",850049680),(function (){var x__5087__auto__ = (1);
var y__5088__auto__ = parseInt(p1__31464_SHARP_.target.value,(10));
return ((x__5087__auto__ > y__5088__auto__) ? x__5087__auto__ : y__5088__auto__);
})());
})], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"color","color",1011675173),"#9ca3af"], null)], null),["Tile indices (1\u2013",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cols * rows)),", blank = all)"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),indices,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"e.g. 1,3-5,7",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"padding","padding",1660304693),"4px 8px",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"background","background",-863952629),"#374151",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #4b5563",new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),"border-box"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__31465_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc,new cljs.core.Keyword(null,"indices","indices",-1218138343),p1__31465_SHARP_.target.value);
})], null)], null),(cljs.core.truth_(cljs.core.deref(error))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"#f87171",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)], null),cljs.core.deref(error)], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"padding","padding",1660304693),"6px 12px",new cljs.core.Keyword(null,"background","background",-863952629),"#2563eb",new cljs.core.Keyword(null,"color","color",1011675173),"white",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.reset_BANG_(error,null);

if(clojure.string.blank_QMARK_(src)){
return cljs.core.reset_BANG_(error,"Image source is required.");
} else {
var img = (new Image());
(img.onload = (function (){
var iw = img.naturalWidth;
var ih = img.naturalHeight;
var tile_w = (iw / cols);
var tile_h = (ih / rows);
var vec__31471 = tabletop.state.placement_pos();
var px = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31471,(0),null);
var py = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31471,(1),null);
var pieces = tabletop.logic.tile.make_tile_pieces(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"cols","cols",-1914801295),cols,new cljs.core.Keyword(null,"rows","rows",850049680),rows,new cljs.core.Keyword(null,"indices-str","indices-str",-2055270712),indices,new cljs.core.Keyword(null,"tile-w","tile-w",2051289999),tile_w,new cljs.core.Keyword(null,"tile-h","tile-h",356807408),tile_h,new cljs.core.Keyword(null,"x","x",2099068185),px,new cljs.core.Keyword(null,"y","y",-1757859776),py], null));
var seq__31474_31480 = cljs.core.seq(pieces);
var chunk__31475_31481 = null;
var count__31476_31482 = (0);
var i__31477_31483 = (0);
while(true){
if((i__31477_31483 < count__31476_31482)){
var p_31484 = chunk__31475_31481.cljs$core$IIndexed$_nth$arity$2(null,i__31477_31483);
tabletop.state.add_component_BANG_(p_31484);


var G__31485 = seq__31474_31480;
var G__31486 = chunk__31475_31481;
var G__31487 = count__31476_31482;
var G__31488 = (i__31477_31483 + (1));
seq__31474_31480 = G__31485;
chunk__31475_31481 = G__31486;
count__31476_31482 = G__31487;
i__31477_31483 = G__31488;
continue;
} else {
var temp__5804__auto___31489 = cljs.core.seq(seq__31474_31480);
if(temp__5804__auto___31489){
var seq__31474_31490__$1 = temp__5804__auto___31489;
if(cljs.core.chunked_seq_QMARK_(seq__31474_31490__$1)){
var c__5525__auto___31491 = cljs.core.chunk_first(seq__31474_31490__$1);
var G__31492 = cljs.core.chunk_rest(seq__31474_31490__$1);
var G__31493 = c__5525__auto___31491;
var G__31494 = cljs.core.count(c__5525__auto___31491);
var G__31495 = (0);
seq__31474_31480 = G__31492;
chunk__31475_31481 = G__31493;
count__31476_31482 = G__31494;
i__31477_31483 = G__31495;
continue;
} else {
var p_31496 = cljs.core.first(seq__31474_31490__$1);
tabletop.state.add_component_BANG_(p_31496);


var G__31497 = cljs.core.next(seq__31474_31490__$1);
var G__31498 = null;
var G__31499 = (0);
var G__31500 = (0);
seq__31474_31480 = G__31497;
chunk__31475_31481 = G__31498;
count__31476_31482 = G__31499;
i__31477_31483 = G__31500;
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

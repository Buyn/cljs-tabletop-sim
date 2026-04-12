goog.provide('tabletop.components.start_screen');
tabletop.components.start_screen.start_screen = (function tabletop$components$start_screen$start_screen(){
var file_input_ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var error = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tabletop.state.app_state));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.justify-center.h-screen.bg-gray-900","div.flex.items-center.justify-center.h-screen.bg-gray-900",1969221070),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray-800.rounded-2xl.shadow-2xl.p-12.flex.flex-col.items-center.gap-6.w-80","div.bg-gray-800.rounded-2xl.shadow-2xl.p-12.flex.flex-col.items-center.gap-6.w-80",-1843252191),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.text-3xl.font-bold.text-white.mb-2","h1.text-3xl.font-bold.text-white.mb-2",2121464895),"Tabletop Simulator"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.py-3.px-6.bg-green-600.hover:bg-green-500.text-white.font-semibold.rounded-lg.transition-colors","button.w-full.py-3.px-6.bg-green-600.hover:bg-green-500.text-white.font-semibold.rounded-lg.transition-colors",-191118145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(tabletop.state.app_state,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tabletop.state.initial_state,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"table","table",-564943036)));
})], null),"New Game"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-full.py-3.px-6.bg-blue-600.hover:bg-blue-500.text-white.font-semibold.rounded-lg.transition-colors","button.w-full.py-3.px-6.bg-blue-600.hover:bg-blue-500.text-white.font-semibold.rounded-lg.transition-colors",976536149),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(file_input_ref))){
return cljs.core.deref(file_input_ref).click();
} else {
return null;
}
})], null),"Load Game"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".json",new cljs.core.Keyword(null,"class","class",-2030961996),"hidden",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__31041_SHARP_){
return cljs.core.reset_BANG_(file_input_ref,p1__31041_SHARP_);
}),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var file = (e.target.files[(0)]);
if(cljs.core.truth_(file)){
var reader = (new FileReader());
(reader.onload = (function (load_event){
var text = load_event.target.result;
try{var parsed = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(text),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var err_msg = tabletop.logic.validation.validate_save_file(parsed);
if(cljs.core.truth_(err_msg)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),err_msg);
} else {
var deserialized = tabletop.logic.serialization.deserialize_state(text);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(tabletop.state.app_state,(function (p1__31042_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__31042_SHARP_,deserialized], 0)),new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"table","table",-564943036),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
}));
}
}catch (e31054){var ex = e31054;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tabletop.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"error","error",-978969032),["Failed to parse file: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex.message)].join(''));
}}));

return reader.readAsText(file);
} else {
return null;
}
})], null)], null),(cljs.core.truth_(error)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-400.text-sm.text-center","p.text-red-400.text-sm.text-center",1497731893),error], null):null)], null)], null);
});
});

//# sourceMappingURL=tabletop.components.start_screen.js.map

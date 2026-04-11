goog.provide('tabletop.components.save_button');
tabletop.components.save_button.save_button = (function tabletop$components$save_button$save_button(){
var handle_save = (function (){
var json_str = tabletop.logic.serialization.serialize_state(cljs.core.deref(tabletop.state.app_state));
var blob = (new Blob([json_str],({"type": "application/json"})));
var url = URL.createObjectURL(blob);
var anchor = document.createElement("a");
(anchor.href = url);

(anchor.download = "tabletop-save.json");

document.body.appendChild(anchor);

anchor.click();

document.body.removeChild(anchor);

return URL.revokeObjectURL(url);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-gray-700 hover:bg-gray-600 text-white text-sm px-3 py-2 rounded",new cljs.core.Keyword(null,"on-click","on-click",1632826543),handle_save], null),"Save Game"], null);
});

//# sourceMappingURL=tabletop.components.save_button.js.map

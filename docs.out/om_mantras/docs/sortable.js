// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('om_mantras.docs.sortable');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('devcards.core');
goog.require('garden.core');
goog.require('om.dom');
goog.require('om_mantras.sortable');
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["# Sortable\n\n  Sortable is a reusable Om Next component for rendering an ordered\n  collection of items as a vertical or horizontal list and reordering\n  its items using drag and drop. Sortable can be used in flexible ways,\n  preserves all freedom of styling and allows custom elements to be\n  defined for the items. It also supports a callback to to notify the\n  outside world whenever the order of items has changed."], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["## Interface\n\n  Sortable is created as follows:\n\n  ```\n  (sortable {:items ...\n             :direction ...\n             :key-fn ...\n             :element-fn ...\n             :change-fn ...})\n  ```\n\n  ### Parameters\n\n  * `items` (mandatory) - an ordered collection of items; these can be anything:\n    numbers, strings, maps, vectors, it doesn't matter\n  * `direction` (optional) - the direction along which the items are rendered;\n    either `:vertical` (default) or `:horizontal`; this has no effect on\n    rendering, it only affects how the drag position is calculated\n  * `key-fn` (optional but recommended) - a function that takes one argument,\n    an item, and must return a unique key for the item in the collection; can\n    be omitted if the items themselves are distinct strings or numbers\n  * `element-fn` (optional but recommended) - a function that takes one\n    argument, an item, and must return a React element for the item; inside\n    Sortable, the returned elements are each wrapped in a\n    `<div class=\"sortable-item\">`; can be optional if the items are strings,\n    numbers or anything else that converts to a string that browsers can\n    display\n  * `change-fn` (optional) - a function that takes one argument, a reordered\n    collection of the input items; this function is called whenever the items\n    are reordered using drag and drop; it can be used to sync the change to\n    your application state"], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["## Usage examples"], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"Sortable list of numbers\n\n  ```\n  (sortable {:items (:numbers @state)\n             :key-fn identity\n             :change-fn (fn [items]\n                          (js/alert items)\n                          (swap! state assoc :numbers items))})\n  ```",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__23861 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$items,cljs.core.cst$kw$numbers.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$change_DASH_fn,(function (items){
alert(items);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$numbers,items);
})], null);
return (om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1(G__23861) : om_mantras.sortable.sortable.call(null,G__23861));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$numbers,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"Sortable list of maps\n\n  ```\n  (sortable {:items (:maps @state)\n             :key-fn :id\n             :element-fn #(dom/span nil (str (:id %) \" - \" (:text %)))\n             :change-fn (fn [items]\n                          (swap! state assoc :maps items))})\n  ```",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__23865 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$items,cljs.core.cst$kw$maps.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$key_DASH_fn,cljs.core.cst$kw$id,cljs.core.cst$kw$element_DASH_fn,(function (p1__23862_SHARP_){
var G__23866 = null;
var G__23867 = [cljs.core.str(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__23862_SHARP_)),cljs.core.str(" - "),cljs.core.str(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(p1__23862_SHARP_))].join('');
return React.DOM.span(G__23866,G__23867);
}),cljs.core.cst$kw$change_DASH_fn,(function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$maps,items);
})], null);
return (om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1(G__23865) : om_mantras.sortable.sortable.call(null,G__23865));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$maps,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$text,"Foo"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$text,"Bar"], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(3),cljs.core.cst$kw$text,"Baz"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"Sortable list of vectors\n\n  ```\n  (sortable {:items (:vectors @state)\n             :key-fn first\n             :element-fn #(dom/span nil (str (first %) \" - \" (second %)))\n             :change-fn (fn [items]\n                          (swap! state assoc :vectors items))})\n  ```",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__23871 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$items,cljs.core.cst$kw$vectors.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$key_DASH_fn,cljs.core.first,cljs.core.cst$kw$element_DASH_fn,(function (p1__23868_SHARP_){
var G__23872 = null;
var G__23873 = [cljs.core.str(cljs.core.first(p1__23868_SHARP_)),cljs.core.str(" - "),cljs.core.str(cljs.core.second(p1__23868_SHARP_))].join('');
return React.DOM.span(G__23872,G__23873);
}),cljs.core.cst$kw$change_DASH_fn,(function (items){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$vectors,items);
})], null);
return (om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1(G__23871) : om_mantras.sortable.sortable.call(null,G__23871));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vectors,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"Foo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"Bar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"Baz"], null)], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["## Styling\n\n  Sortable can be styled freely. It defines three CSS classes that you\n  can customize to whatever degree you like. They are:\n\n  * `.sortable` - set on the sortable container (a `div`)\n  * `.sortable-item` - set on the items (`div`) that wrap the elements\n    created for each item in the collection\n  * `.sortable-item-dragged` - set on the item that is currently being\n    dragged\n\n  In addition, the selector `.sortable-item-dragged *` is often useful\n  to hide the content of the item currently being dragged or apply other\n  transformations (opacity, scaling etc.) to it.\n\n  ### Vertical vs. horizontal\n\n  Styling is entirely up to your app. The `:direction` parameter that can\n  be passed to Sortable does not affect rendering in any way. The HTML element\n  structure of Sortable looks like this:\n\n  ```\n  <div class=\"sortable\">\n    <div class=\"sortable-item\">\n      Some item\n    </div>\n    <div class=\"sortable-item\">\n      Another item\n    </div>\n    <div class=\"sortable-item sortable-item-dragged\">\n      Dragged item\n    </div>\n  </div>\n  ```\n\n  Since `div`s are, by default, rendered as block elements, the default\n  rendering is vertical. To change Sortable to be horizontal, your app\n  can employ style hints like\n\n  ```\n  .sortable-item { display: inline-block; }\n  ```\n\n  or even\n\n  ```\n  .sortable      { display: table; }\n  .sortable-item { display: table-cell; }\n  ```"], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,null,cljs.core.cst$kw$main_DASH_obj,devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["### Styling examples"], 0)),cljs.core.cst$kw$initial_DASH_data,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$hide_DASH_border,true], null))], 0))], null));
})], null));
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"No styling at all",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
var G__23875 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$items,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$change_DASH_fn,(function (p1__23874_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$items,p1__23874_SHARP_);
})], null);
return (om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1(G__23875) : om_mantras.sortable.sortable.call(null,G__23875));
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["First","Second","Third","Fourth","Fifth"], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
om_mantras.docs.sortable.style_container1 = (function om_mantras$docs$sortable$style_container1(child){
var G__23881 = {"className": "style-container1"};
var G__23882 = (function (){var G__23884 = null;
var G__23885 = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$style_DASH_container1,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"thin solid #eee"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable_DASH_item,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$margin,"10px",cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$border,"thin solid #ddd",cljs.core.cst$kw$background,"#f8f8f8",cljs.core.cst$kw$cursor,"move"], null)], null)], null)], null)], 0));
return React.DOM.style(G__23884,G__23885);
})();
var G__23883 = child;
return React.DOM.div(G__23881,G__23882,G__23883);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"Basic styling, excluding the dragged item\n\n  ```\n  .sortable {\n    border: thin solid #eee;\n  }\n  .sortable-item {\n    margin: 10px;\n    padding: 10px;\n    border: thin solid #ddd;\n    background: #f8f8f8;\n    cursor: move;\n  }\n  ```",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
return om_mantras.docs.sortable.style_container1((function (){var G__23887 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$items,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$change_DASH_fn,(function (p1__23886_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$items,p1__23886_SHARP_);
})], null);
return (om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1(G__23887) : om_mantras.sortable.sortable.call(null,G__23887));
})());
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["First","Second","Third","Fourth","Fifth"], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
om_mantras.docs.sortable.style_container2 = (function om_mantras$docs$sortable$style_container2(child){
var G__23893 = {"className": "style-container2"};
var G__23894 = (function (){var G__23896 = null;
var G__23897 = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$style_DASH_container2,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"thin solid #eee"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable_DASH_item,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$margin,"10px",cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$border,"thin solid #ddd",cljs.core.cst$kw$background,"#f8f8f8",cljs.core.cst$kw$cursor,"move"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable_DASH_item_DASH_dragged,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,"0"], null)], null)], null)], null)], 0));
return React.DOM.style(G__23896,G__23897);
})();
var G__23895 = child;
return React.DOM.div(G__23893,G__23894,G__23895);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"Hiding the dragged item to make it look like other items are\n  pushed out of the way.\n\n  ```\n  .sortable {\n    border: thin solid #eee;\n  }\n  .sortable-item {\n    margin: 10px;\n    padding: 10px;\n    border: thin solid #ddd;\n    background: #f8f8f8;\n    cursor: move;\n  }\n  .sortable-item-dragged {\n    opacity: 0;\n  }\n  ```",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
return om_mantras.docs.sortable.style_container2((function (){var G__23899 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$items,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$change_DASH_fn,(function (p1__23898_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$items,p1__23898_SHARP_);
})], null);
return (om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1(G__23899) : om_mantras.sortable.sortable.call(null,G__23899));
})());
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["First","Second","Third","Fourth","Fifth"], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
om_mantras.docs.sortable.style_container3 = (function om_mantras$docs$sortable$style_container3(child){
var G__23905 = {"className": "style-container3"};
var G__23906 = (function (){var G__23908 = null;
var G__23909 = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$style_DASH_container3,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"thin solid #eee"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable_DASH_item,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$margin,"10px",cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$border,"thin solid #ddd",cljs.core.cst$kw$background,"#f8f8f8",cljs.core.cst$kw$cursor,"move"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable_DASH_item_DASH_dragged,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$border,"thin solid transparent"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_STAR_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,"0"], null)], null)], null)], null)], null)], 0));
return React.DOM.style(G__23908,G__23909);
})();
var G__23907 = child;
return React.DOM.div(G__23905,G__23906,G__23907);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"Hiding the contents of the dragged item to make it look like a drop area.\n\n  ```\n  .sortable {\n    border: thin solid #eee;\n  }\n  .sortable-item {\n    margin: 10px;\n    padding: 10px;\n    border: thin solid #ddd;\n    background: #f8f8f8;\n    cursor: move;\n  }\n  .sortable-item-dragged {\n    border: thin solid transparent;\n    * {\n      opacity: 0;\n    }\n  }\n  ```",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
return om_mantras.docs.sortable.style_container3((function (){var G__23912 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$items,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$element_DASH_fn,(function (p1__23910_SHARP_){
return React.DOM.span(null,p1__23910_SHARP_);
}),cljs.core.cst$kw$change_DASH_fn,(function (p1__23911_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$items,p1__23911_SHARP_);
})], null);
return (om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1(G__23912) : om_mantras.sortable.sortable.call(null,G__23912));
})());
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["First","Second","Third","Fourth","Fifth"], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
om_mantras.docs.sortable.style_container4 = (function om_mantras$docs$sortable$style_container4(child){
var G__23918 = {"className": "style-container4"};
var G__23919 = (function (){var G__23921 = null;
var G__23922 = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$style_DASH_container4,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable_DASH_item,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$margin,"10px",cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$background,"#00b8d4",cljs.core.cst$kw$color,"#fff",cljs.core.cst$kw$cursor,"move",cljs.core.cst$kw$transition,"transform 0.1s ease-in"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable_DASH_item_DASH_dragged,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$opacity,"0.5",cljs.core.cst$kw$transform,"scale(0.8, 0.8)"], null)], null)], null)], null)], 0));
return React.DOM.style(G__23921,G__23922);
})();
var G__23920 = child;
return React.DOM.div(G__23918,G__23919,G__23920);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"Applying a scale transition to the dragged item\n\n  ```\n  .sortable {\n    padding: 10px;\n  }\n  .sortable-item {\n    margin: 10px;\n    padding: 10px;\n    background: #00b8d4;\n    color: #fff;\n    cursor: move;\n    transition: transform 0.1s ease-in;\n  }\n  .sortable-item-dragged {\n    opacity: 0.5;\n    transform: scale(0.8, 0.8);\n  }\n  ```",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
return om_mantras.docs.sortable.style_container4((function (){var G__23925 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$items,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$element_DASH_fn,(function (p1__23923_SHARP_){
return React.DOM.span(null,p1__23923_SHARP_);
}),cljs.core.cst$kw$change_DASH_fn,(function (p1__23924_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$items,p1__23924_SHARP_);
})], null);
return (om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1(G__23925) : om_mantras.sortable.sortable.call(null,G__23925));
})());
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["First","Second","Third","Fourth","Fifth"], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
om_mantras.docs.sortable.style_container5 = (function om_mantras$docs$sortable$style_container5(child){
var G__23931 = {"className": "style-container5"};
var G__23932 = (function (){var G__23934 = null;
var G__23935 = garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$style_DASH_container5,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$padding,"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable_DASH_item,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$margin,"10px",cljs.core.cst$kw$background,"#eee",cljs.core.cst$kw$cursor,"move"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_STAR_,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$display,"inline-block",cljs.core.cst$kw$padding,"10px",cljs.core.cst$kw$background,"#00b8d4",cljs.core.cst$kw$color,"#fff"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$$sortable_DASH_item_DASH_dragged,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_STAR_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$opacity,"0"], null)], null)], null)], null)], null)], 0));
return React.DOM.style(G__23934,G__23935);
})();
var G__23933 = child;
return React.DOM.div(G__23931,G__23932,G__23933);
});
devcards.core.register_card(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om_mantras$docs$sortable,cljs.core.cst$kw$card], null),cljs.core.cst$kw$func,(function (){
return devcards.core.card_base(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$name,"card",cljs.core.cst$kw$documentation,"Horizontal sortable with drop area look\n\n  ```\n  .sortable {\n    padding: 10px;\n  }\n  .sortable-item {\n    display: inline-block;\n    margin: 10px;\n    background: #eee;\n    cursor: move;\n    * {\n      display: inline-block;\n      padding: 10px;\n      background: #00b8d4;\n      color: #fff;\n    }\n  }\n  .sortable-item-dragged {\n    * { opacity: 0; }\n  }\n  ```",cljs.core.cst$kw$main_DASH_obj,(function (state,_){
return om_mantras.docs.sortable.style_container5((function (){var G__23938 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$items,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))),cljs.core.cst$kw$direction,cljs.core.cst$kw$horizontal,cljs.core.cst$kw$element_DASH_fn,(function (p1__23936_SHARP_){
return React.DOM.span(null,p1__23936_SHARP_);
}),cljs.core.cst$kw$change_DASH_fn,(function (p1__23937_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,cljs.core.cst$kw$items,p1__23937_SHARP_);
})], null);
return (om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable.cljs$core$IFn$_invoke$arity$1(G__23938) : om_mantras.sortable.sortable.call(null,G__23938));
})());
}),cljs.core.cst$kw$initial_DASH_data,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$items,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["First","Second","Third","Fourth","Fifth"], null)], null),cljs.core.cst$kw$options,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$heading,false], null),devcards.core.assert_options_map(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inspect_DASH_data,true,cljs.core.cst$kw$history,true], null))], 0))], null));
})], null));
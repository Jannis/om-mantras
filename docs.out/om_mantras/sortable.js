// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('om_mantras.sortable');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_mantras.util');
om_mantras.sortable.sortable_key = (function om_mantras$sortable$sortable_key(x){
var props = (function (){var G__25797 = x;
var G__25797__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__25797):G__25797);
return G__25797__$1;
})();
var key_fn = cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(key_fn)){
var G__25798 = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__25798) : key_fn.call(null,G__25798));
} else {
return cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
}
});
/**
 * @constructor
 */
om_mantras.sortable.SortableItem = (function om_mantras$sortable$SortableItem(){
var this__15853__auto__ = this;
React.Component.apply(this__15853__auto__,arguments);

if(!((this__15853__auto__.getInitialState == null))){
this__15853__auto__.state = this__15853__auto__.getInitialState();
} else {
this__15853__auto__.state = {};
}

return this__15853__auto__;
});

om_mantras.sortable.SortableItem.prototype = goog.object.clone(React.Component.prototype);

var x25808_25835 = om_mantras.sortable.SortableItem.prototype;
x25808_25835.componentWillUpdate = ((function (x25808_25835){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
om.next.merge_pending_props_BANG_(this__15793__auto__);

return om.next.merge_pending_state_BANG_(this__15793__auto__);
});})(x25808_25835))
;

x25808_25835.shouldComponentUpdate = ((function (x25808_25835){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__15793__auto__),goog.object.get(next_props__15794__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__15793__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__25811 = this__15793__auto__.state;
var G__25812 = "omcljs$state";
return goog.object.get(G__25811,G__25812);
})(),goog.object.get(next_state__15795__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x25808_25835))
;

x25808_25835.componentWillUnmount = ((function (x25808_25835){
return (function (){
var this__15793__auto__ = this;
var r__15799__auto__ = om.next.get_reconciler(this__15793__auto__);
var cfg__15800__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__15799__auto__);
var st__15801__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__15800__auto__);
var indexer__15798__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__15800__auto__);
if((st__15801__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__15801__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__15793__auto__], 0));
}

if((indexer__15798__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__15798__auto__,this__15793__auto__);
}
});})(x25808_25835))
;

x25808_25835.componentDidUpdate = ((function (x25808_25835){
return (function (prev_props__15796__auto__,prev_state__15797__auto__){
var this__15793__auto__ = this;
return om.next.clear_prev_props_BANG_(this__15793__auto__);
});})(x25808_25835))
;

x25808_25835.isMounted = ((function (x25808_25835){
return (function (){
var this__15793__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__15793__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25808_25835))
;

x25808_25835.componentWillMount = ((function (x25808_25835){
return (function (){
var this__15793__auto__ = this;
var indexer__15798__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__15793__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__15798__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__15798__auto__,this__15793__auto__);
}
});})(x25808_25835))
;

x25808_25835.render = ((function (x25808_25835){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_25813 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25814 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25815 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25816 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25817 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__25818 = om.next.props(this$);
var map__25818__$1 = ((((!((map__25818 == null)))?((((map__25818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25818):map__25818);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25818__$1,cljs.core.cst$kw$item);
var dragged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25818__$1,cljs.core.cst$kw$dragged);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25818__$1,cljs.core.cst$kw$element_DASH_fn);
var drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25818__$1,cljs.core.cst$kw$drag_DASH_fns);
var G__25825 = {"className": [cljs.core.str("sortable-item"),cljs.core.str((cljs.core.truth_(dragged)?" sortable-item-dragged":null))].join(''), "draggable": true, "onDragStart": ((function (map__25818,map__25818__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_25813,_STAR_depth_STAR_25814,_STAR_shared_STAR_25815,_STAR_instrument_STAR_25816,_STAR_parent_STAR_25817,this$,x25808_25835){
return (function (p1__25799_SHARP_){
var G__25827 = drag_fns;
var G__25827__$1 = (((G__25827 == null))?null:cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__25827));
var G__25827__$2 = (((G__25827__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__25827__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25799_SHARP_,this$], null)));
return G__25827__$2;
});})(map__25818,map__25818__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_25813,_STAR_depth_STAR_25814,_STAR_shared_STAR_25815,_STAR_instrument_STAR_25816,_STAR_parent_STAR_25817,this$,x25808_25835))
, "onDrag": ((function (map__25818,map__25818__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_25813,_STAR_depth_STAR_25814,_STAR_shared_STAR_25815,_STAR_instrument_STAR_25816,_STAR_parent_STAR_25817,this$,x25808_25835){
return (function (p1__25800_SHARP_){
var G__25828 = drag_fns;
var G__25828__$1 = (((G__25828 == null))?null:cljs.core.cst$kw$drag.cljs$core$IFn$_invoke$arity$1(G__25828));
var G__25828__$2 = (((G__25828__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__25828__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25800_SHARP_,this$], null)));
return G__25828__$2;
});})(map__25818,map__25818__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_25813,_STAR_depth_STAR_25814,_STAR_shared_STAR_25815,_STAR_instrument_STAR_25816,_STAR_parent_STAR_25817,this$,x25808_25835))
, "onDragEnd": ((function (map__25818,map__25818__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_25813,_STAR_depth_STAR_25814,_STAR_shared_STAR_25815,_STAR_instrument_STAR_25816,_STAR_parent_STAR_25817,this$,x25808_25835){
return (function (p1__25801_SHARP_){
var G__25829 = drag_fns;
var G__25829__$1 = (((G__25829 == null))?null:cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__25829));
var G__25829__$2 = (((G__25829__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__25829__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25801_SHARP_,this$], null)));
return G__25829__$2;
});})(map__25818,map__25818__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_25813,_STAR_depth_STAR_25814,_STAR_shared_STAR_25815,_STAR_instrument_STAR_25816,_STAR_parent_STAR_25817,this$,x25808_25835))
, "onDragOver": ((function (map__25818,map__25818__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_25813,_STAR_depth_STAR_25814,_STAR_shared_STAR_25815,_STAR_instrument_STAR_25816,_STAR_parent_STAR_25817,this$,x25808_25835){
return (function (p1__25802_SHARP_){
var G__25830 = drag_fns;
var G__25830__$1 = (((G__25830 == null))?null:cljs.core.cst$kw$over.cljs$core$IFn$_invoke$arity$1(G__25830));
var G__25830__$2 = (((G__25830__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__25830__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25802_SHARP_,this$], null)));
return G__25830__$2;
});})(map__25818,map__25818__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_25813,_STAR_depth_STAR_25814,_STAR_shared_STAR_25815,_STAR_instrument_STAR_25816,_STAR_parent_STAR_25817,this$,x25808_25835))
, "onDrop": ((function (map__25818,map__25818__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_25813,_STAR_depth_STAR_25814,_STAR_shared_STAR_25815,_STAR_instrument_STAR_25816,_STAR_parent_STAR_25817,this$,x25808_25835){
return (function (p1__25803_SHARP_){
var G__25831 = drag_fns;
var G__25831__$1 = (((G__25831 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__25831));
var G__25831__$2 = (((G__25831__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__25831__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25803_SHARP_,this$], null)));
return G__25831__$2;
});})(map__25818,map__25818__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_25813,_STAR_depth_STAR_25814,_STAR_shared_STAR_25815,_STAR_instrument_STAR_25816,_STAR_parent_STAR_25817,this$,x25808_25835))
};
var G__25826 = (function (){var G__25832 = item;
var G__25832__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__25832) : element_fn.call(null,G__25832)):G__25832);
return G__25832__$1;
})();
return React.DOM.div(G__25825,G__25826);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25817;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25816;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25815;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25814;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25813;
}});})(x25808_25835))
;


om_mantras.sortable.SortableItem.prototype.constructor = om_mantras.sortable.SortableItem;

om_mantras.sortable.SortableItem.prototype.om$isComponent = true;

var x25833_25836 = om_mantras.sortable.SortableItem;


var x25834_25837 = om_mantras.sortable.SortableItem.prototype;


om_mantras.sortable.SortableItem.cljs$lang$type = true;

om_mantras.sortable.SortableItem.cljs$lang$ctorStr = "om-mantras.sortable/SortableItem";

om_mantras.sortable.SortableItem.cljs$lang$ctorPrWriter = (function (this__15855__auto__,writer__15856__auto__,opt__15857__auto__){
return cljs.core._write(writer__15856__auto__,"om-mantras.sortable/SortableItem");
});
om_mantras.sortable.sortable_item = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_mantras.sortable.SortableItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,om_mantras.sortable.sortable_key], null));
/**
 * @constructor
 */
om_mantras.sortable.Sortable = (function om_mantras$sortable$Sortable(){
var this__15853__auto__ = this;
React.Component.apply(this__15853__auto__,arguments);

if(!((this__15853__auto__.getInitialState == null))){
this__15853__auto__.state = this__15853__auto__.getInitialState();
} else {
this__15853__auto__.state = {};
}

return this__15853__auto__;
});

om_mantras.sortable.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x25854_25886 = om_mantras.sortable.Sortable.prototype;
x25854_25886.componentWillUpdate = ((function (x25854_25886){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
om.next.merge_pending_props_BANG_(this__15793__auto__);

return om.next.merge_pending_state_BANG_(this__15793__auto__);
});})(x25854_25886))
;

x25854_25886.shouldComponentUpdate = ((function (x25854_25886){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__15793__auto__),goog.object.get(next_props__15794__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__15793__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__25857 = this__15793__auto__.state;
var G__25858 = "omcljs$state";
return goog.object.get(G__25857,G__25858);
})(),goog.object.get(next_state__15795__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x25854_25886))
;

x25854_25886.componentWillUnmount = ((function (x25854_25886){
return (function (){
var this__15793__auto__ = this;
var r__15799__auto__ = om.next.get_reconciler(this__15793__auto__);
var cfg__15800__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__15799__auto__);
var st__15801__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__15800__auto__);
var indexer__15798__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__15800__auto__);
if((st__15801__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__15801__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__15793__auto__], 0));
}

if((indexer__15798__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__15798__auto__,this__15793__auto__);
}
});})(x25854_25886))
;

x25854_25886.componentDidUpdate = ((function (x25854_25886){
return (function (prev_props__15796__auto__,prev_state__15797__auto__){
var this__15793__auto__ = this;
return om.next.clear_prev_props_BANG_(this__15793__auto__);
});})(x25854_25886))
;

x25854_25886.isMounted = ((function (x25854_25886){
return (function (){
var this__15793__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__15793__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25854_25886))
;

x25854_25886.componentWillMount = ((function (x25854_25886){
return (function (){
var this__15793__auto__ = this;
var indexer__15798__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__15793__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__15798__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__15798__auto__,this__15793__auto__);
}
});})(x25854_25886))
;

x25854_25886.drag_start = ((function (x25854_25886){
return (function (e,child){
var this$ = this;
e.dataTransfer.setData("text/plain",om_mantras.sortable.sortable_key(child));

var item = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(child));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_item,item);
});})(x25854_25886))
;

x25854_25886.drag = ((function (x25854_25886){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dragging,true);
});})(x25854_25886))
;

x25854_25886.drag_over = ((function (x25854_25886){
return (function (e){
var this$ = this;
e.dataTransfer.dropEffect = "move";

return e.preventDefault();
});})(x25854_25886))
;

x25854_25886.reorder_items = ((function (x25854_25886){
return (function (drag_item,target_item,after_QMARK_,items){
var this$ = this;
return ((function (this$,x25854_25886){
return (function (p__25859){
var vec__25860 = p__25859;
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25860,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25860,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_item], null),cljs.core.array_seq([after], 0));
});})(this$,x25854_25886))
.call(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$,x25854_25886){
return (function (p1__25838_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([drag_item], true),p1__25838_SHARP_);
});})(this$,x25854_25886))
,cljs.core.split_at((function (){var G__25861 = om_mantras.util.index_of(target_item,items);
var G__25861__$1 = (cljs.core.truth_(after_QMARK_)?(G__25861 + (1)):G__25861);
return G__25861__$1;
})(),items)));
});})(x25854_25886))
;

x25854_25886.drag_over_child = ((function (x25854_25886){
return (function (e,child){
var this$ = this;
e.dataTransfer.dropEffect = "move";

e.preventDefault();

var drag_item = cljs.core.cst$kw$drag_DASH_item.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
var target_item = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(child));
if(cljs.core.truth_((function (){var and__5082__auto__ = drag_item;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(drag_item,target_item);
} else {
return and__5082__auto__;
}
})())){
var x = e.clientX;
var y = e.clientY;
var rect = om.dom.node.cljs$core$IFn$_invoke$arity$1(child).getBoundingClientRect();
var center_x = ((rect.left + rect.right) / (2));
var center_y = ((rect.top + rect.bottom) / (2));
var after_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)),cljs.core.cst$kw$horizontal))?(x >= center_x):(y >= center_y));
var items = (function (){var or__5094__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})();
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$items,this$.reorder_items(drag_item,target_item,after_QMARK_,items));
} else {
return null;
}
});})(x25854_25886))
;

x25854_25886.drag_end = ((function (x25854_25886){
return (function (e,child){
var this$ = this;
e.preventDefault();

var items_25887 = (function (){var or__5094__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})();
var G__25862_25888 = this$;
var G__25862_25889__$1 = (((G__25862_25888 == null))?null:om.next.props(G__25862_25888));
var G__25862_25890__$2 = (((G__25862_25889__$1 == null))?null:cljs.core.cst$kw$change_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__25862_25889__$1));
var G__25862_25891__$3 = (((G__25862_25890__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__25862_25890__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_25887], null)));

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x25854_25886){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$drag_DASH_item),cljs.core.cst$kw$dragging);
});})(this$,x25854_25886))
);
});})(x25854_25886))
;

x25854_25886.drop = ((function (x25854_25886){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x25854_25886))
;

x25854_25886.componentWillReceiveProps = ((function (x25854_25886){
return (function (new_props){
var this$ = this;
var new_props__$1 = om.next._next_props(new_props,this$);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (new_props__$1,this$,x25854_25886){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$items),cljs.core.cst$kw$drag_DASH_item),cljs.core.cst$kw$dragging);
});})(new_props__$1,this$,x25854_25886))
);
});})(x25854_25886))
;

x25854_25886.render = ((function (x25854_25886){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_25863 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25864 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25865 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25866 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25867 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__25868 = om.next.props(this$);
var map__25868__$1 = ((((!((map__25868 == null)))?((((map__25868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25868):map__25868);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25868__$1,cljs.core.cst$kw$key_DASH_fn);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25868__$1,cljs.core.cst$kw$element_DASH_fn);
var map__25869 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__25869__$1 = ((((!((map__25869 == null)))?((((map__25869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25869):map__25869);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25869__$1,cljs.core.cst$kw$dragging);
var drag_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25869__$1,cljs.core.cst$kw$drag_DASH_item);
var G__25872 = {"className": "sortable", "dragOver": ((function (map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25839_SHARP_){
return this$.drag_over(p1__25839_SHARP_);
});})(map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
, "drop": ((function (map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25840_SHARP_){
return this$.drop(p1__25840_SHARP_);
});})(map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
};
var G__25873 = (function (){var iter__5866__auto__ = ((function (G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function om_mantras$sortable$iter__25874(s__25875){
return (new cljs.core.LazySeq(null,((function (G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (){
var s__25875__$1 = s__25875;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25875__$1);
if(temp__4425__auto__){
var s__25875__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25875__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__25875__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__25877 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__25876 = (0);
while(true){
if((i__25876 < size__5865__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__25876);
cljs.core.chunk_append(b__25877,(function (){var G__25882 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item,item,cljs.core.cst$kw$dragged,(function (){var and__5082__auto__ = dragging;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = drag_item;
if(cljs.core.truth_(and__5082__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,drag_item);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (i__25876,item,c__5864__auto__,size__5865__auto__,b__25877,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25841_SHARP_,p2__25842_SHARP_){
return this$.drag_start(p1__25841_SHARP_,p2__25842_SHARP_);
});})(i__25876,item,c__5864__auto__,size__5865__auto__,b__25877,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
,cljs.core.cst$kw$drag,((function (i__25876,item,c__5864__auto__,size__5865__auto__,b__25877,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25843_SHARP_,p2__25844_SHARP_){
return this$.drag(p1__25843_SHARP_,p2__25844_SHARP_);
});})(i__25876,item,c__5864__auto__,size__5865__auto__,b__25877,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
,cljs.core.cst$kw$end,((function (i__25876,item,c__5864__auto__,size__5865__auto__,b__25877,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25845_SHARP_,p2__25846_SHARP_){
return this$.drag_end(p1__25845_SHARP_,p2__25846_SHARP_);
});})(i__25876,item,c__5864__auto__,size__5865__auto__,b__25877,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
,cljs.core.cst$kw$over,((function (i__25876,item,c__5864__auto__,size__5865__auto__,b__25877,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25847_SHARP_,p2__25848_SHARP_){
return this$.drag_over_child(p1__25847_SHARP_,p2__25848_SHARP_);
});})(i__25876,item,c__5864__auto__,size__5865__auto__,b__25877,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
,cljs.core.cst$kw$drop,((function (i__25876,item,c__5864__auto__,size__5865__auto__,b__25877,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25849_SHARP_){
return this$.drop(p1__25849_SHARP_);
});})(i__25876,item,c__5864__auto__,size__5865__auto__,b__25877,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
], null)], null);
return (om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1(G__25882) : om_mantras.sortable.sortable_item.call(null,G__25882));
})());

var G__25892 = (i__25876 + (1));
i__25876 = G__25892;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25877),om_mantras$sortable$iter__25874(cljs.core.chunk_rest(s__25875__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25877),null);
}
} else {
var item = cljs.core.first(s__25875__$2);
return cljs.core.cons((function (){var G__25883 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item,item,cljs.core.cst$kw$dragged,(function (){var and__5082__auto__ = dragging;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = drag_item;
if(cljs.core.truth_(and__5082__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,drag_item);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (item,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25841_SHARP_,p2__25842_SHARP_){
return this$.drag_start(p1__25841_SHARP_,p2__25842_SHARP_);
});})(item,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
,cljs.core.cst$kw$drag,((function (item,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25843_SHARP_,p2__25844_SHARP_){
return this$.drag(p1__25843_SHARP_,p2__25844_SHARP_);
});})(item,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
,cljs.core.cst$kw$end,((function (item,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25845_SHARP_,p2__25846_SHARP_){
return this$.drag_end(p1__25845_SHARP_,p2__25846_SHARP_);
});})(item,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
,cljs.core.cst$kw$over,((function (item,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25847_SHARP_,p2__25848_SHARP_){
return this$.drag_over_child(p1__25847_SHARP_,p2__25848_SHARP_);
});})(item,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
,cljs.core.cst$kw$drop,((function (item,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886){
return (function (p1__25849_SHARP_){
return this$.drop(p1__25849_SHARP_);
});})(item,s__25875__$2,temp__4425__auto__,G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
], null)], null);
return (om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1(G__25883) : om_mantras.sortable.sortable_item.call(null,G__25883));
})(),om_mantras$sortable$iter__25874(cljs.core.rest(s__25875__$2)));
}
} else {
return null;
}
break;
}
});})(G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
,null,null));
});})(G__25872,map__25868,map__25868__$1,key_fn,element_fn,map__25869,map__25869__$1,dragging,drag_item,_STAR_reconciler_STAR_25863,_STAR_depth_STAR_25864,_STAR_shared_STAR_25865,_STAR_instrument_STAR_25866,_STAR_parent_STAR_25867,this$,x25854_25886))
;
return iter__5866__auto__((function (){var or__5094__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})());
})();
return React.DOM.div(G__25872,G__25873);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25867;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25866;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25865;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25864;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25863;
}});})(x25854_25886))
;


om_mantras.sortable.Sortable.prototype.constructor = om_mantras.sortable.Sortable;

om_mantras.sortable.Sortable.prototype.om$isComponent = true;

var x25884_25893 = om_mantras.sortable.Sortable;


var x25885_25894 = om_mantras.sortable.Sortable.prototype;


om_mantras.sortable.Sortable.cljs$lang$type = true;

om_mantras.sortable.Sortable.cljs$lang$ctorStr = "om-mantras.sortable/Sortable";

om_mantras.sortable.Sortable.cljs$lang$ctorPrWriter = (function (this__15855__auto__,writer__15856__auto__,opt__15857__auto__){
return cljs.core._write(writer__15856__auto__,"om-mantras.sortable/Sortable");
});
om_mantras.sortable.sortable = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_mantras.sortable.Sortable);

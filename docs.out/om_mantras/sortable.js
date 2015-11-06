// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('om_mantras.sortable');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_mantras.util');
om_mantras.sortable.sortable_key = (function om_mantras$sortable$sortable_key(x){
var props = (function (){var G__27745 = x;
var G__27745__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__27745):G__27745);
return G__27745__$1;
})();
var key_fn = cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(key_fn)){
var G__27746 = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__27746) : key_fn.call(null,G__27746));
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

var x27756_27783 = om_mantras.sortable.SortableItem.prototype;
x27756_27783.componentWillUpdate = ((function (x27756_27783){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
om.next.merge_pending_props_BANG_(this__15793__auto__);

return om.next.merge_pending_state_BANG_(this__15793__auto__);
});})(x27756_27783))
;

x27756_27783.shouldComponentUpdate = ((function (x27756_27783){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__15793__auto__),goog.object.get(next_props__15794__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__15793__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__27759 = this__15793__auto__.state;
var G__27760 = "omcljs$state";
return goog.object.get(G__27759,G__27760);
})(),goog.object.get(next_state__15795__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x27756_27783))
;

x27756_27783.componentWillUnmount = ((function (x27756_27783){
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
});})(x27756_27783))
;

x27756_27783.componentDidUpdate = ((function (x27756_27783){
return (function (prev_props__15796__auto__,prev_state__15797__auto__){
var this__15793__auto__ = this;
return om.next.clear_prev_props_BANG_(this__15793__auto__);
});})(x27756_27783))
;

x27756_27783.isMounted = ((function (x27756_27783){
return (function (){
var this__15793__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__15793__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27756_27783))
;

x27756_27783.componentWillMount = ((function (x27756_27783){
return (function (){
var this__15793__auto__ = this;
var indexer__15798__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__15793__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__15798__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__15798__auto__,this__15793__auto__);
}
});})(x27756_27783))
;

x27756_27783.render = ((function (x27756_27783){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_27761 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27762 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27763 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27764 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27765 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__27766 = om.next.props(this$);
var map__27766__$1 = ((((!((map__27766 == null)))?((((map__27766.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27766.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27766):map__27766);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766__$1,cljs.core.cst$kw$item);
var dragged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766__$1,cljs.core.cst$kw$dragged);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766__$1,cljs.core.cst$kw$element_DASH_fn);
var drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27766__$1,cljs.core.cst$kw$drag_DASH_fns);
var G__27773 = {"className": [cljs.core.str("sortable-item"),cljs.core.str((cljs.core.truth_(dragged)?" sortable-item-dragged":null))].join(''), "draggable": true, "onDragStart": ((function (map__27766,map__27766__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_27761,_STAR_depth_STAR_27762,_STAR_shared_STAR_27763,_STAR_instrument_STAR_27764,_STAR_parent_STAR_27765,this$,x27756_27783){
return (function (p1__27747_SHARP_){
var G__27775 = drag_fns;
var G__27775__$1 = (((G__27775 == null))?null:cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__27775));
var G__27775__$2 = (((G__27775__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__27775__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27747_SHARP_,this$], null)));
return G__27775__$2;
});})(map__27766,map__27766__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_27761,_STAR_depth_STAR_27762,_STAR_shared_STAR_27763,_STAR_instrument_STAR_27764,_STAR_parent_STAR_27765,this$,x27756_27783))
, "onDrag": ((function (map__27766,map__27766__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_27761,_STAR_depth_STAR_27762,_STAR_shared_STAR_27763,_STAR_instrument_STAR_27764,_STAR_parent_STAR_27765,this$,x27756_27783){
return (function (p1__27748_SHARP_){
var G__27776 = drag_fns;
var G__27776__$1 = (((G__27776 == null))?null:cljs.core.cst$kw$drag.cljs$core$IFn$_invoke$arity$1(G__27776));
var G__27776__$2 = (((G__27776__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__27776__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27748_SHARP_,this$], null)));
return G__27776__$2;
});})(map__27766,map__27766__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_27761,_STAR_depth_STAR_27762,_STAR_shared_STAR_27763,_STAR_instrument_STAR_27764,_STAR_parent_STAR_27765,this$,x27756_27783))
, "onDragEnd": ((function (map__27766,map__27766__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_27761,_STAR_depth_STAR_27762,_STAR_shared_STAR_27763,_STAR_instrument_STAR_27764,_STAR_parent_STAR_27765,this$,x27756_27783){
return (function (p1__27749_SHARP_){
var G__27777 = drag_fns;
var G__27777__$1 = (((G__27777 == null))?null:cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__27777));
var G__27777__$2 = (((G__27777__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__27777__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27749_SHARP_,this$], null)));
return G__27777__$2;
});})(map__27766,map__27766__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_27761,_STAR_depth_STAR_27762,_STAR_shared_STAR_27763,_STAR_instrument_STAR_27764,_STAR_parent_STAR_27765,this$,x27756_27783))
, "onDragOver": ((function (map__27766,map__27766__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_27761,_STAR_depth_STAR_27762,_STAR_shared_STAR_27763,_STAR_instrument_STAR_27764,_STAR_parent_STAR_27765,this$,x27756_27783){
return (function (p1__27750_SHARP_){
var G__27778 = drag_fns;
var G__27778__$1 = (((G__27778 == null))?null:cljs.core.cst$kw$over.cljs$core$IFn$_invoke$arity$1(G__27778));
var G__27778__$2 = (((G__27778__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__27778__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27750_SHARP_,this$], null)));
return G__27778__$2;
});})(map__27766,map__27766__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_27761,_STAR_depth_STAR_27762,_STAR_shared_STAR_27763,_STAR_instrument_STAR_27764,_STAR_parent_STAR_27765,this$,x27756_27783))
, "onDrop": ((function (map__27766,map__27766__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_27761,_STAR_depth_STAR_27762,_STAR_shared_STAR_27763,_STAR_instrument_STAR_27764,_STAR_parent_STAR_27765,this$,x27756_27783){
return (function (p1__27751_SHARP_){
var G__27779 = drag_fns;
var G__27779__$1 = (((G__27779 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__27779));
var G__27779__$2 = (((G__27779__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__27779__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27751_SHARP_,this$], null)));
return G__27779__$2;
});})(map__27766,map__27766__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_27761,_STAR_depth_STAR_27762,_STAR_shared_STAR_27763,_STAR_instrument_STAR_27764,_STAR_parent_STAR_27765,this$,x27756_27783))
};
var G__27774 = (function (){var G__27780 = item;
var G__27780__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__27780) : element_fn.call(null,G__27780)):G__27780);
return G__27780__$1;
})();
return React.DOM.div(G__27773,G__27774);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27765;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27764;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27763;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27762;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27761;
}});})(x27756_27783))
;


om_mantras.sortable.SortableItem.prototype.constructor = om_mantras.sortable.SortableItem;

om_mantras.sortable.SortableItem.prototype.om$isComponent = true;

var x27781_27784 = om_mantras.sortable.SortableItem;


var x27782_27785 = om_mantras.sortable.SortableItem.prototype;


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

var x27802_27834 = om_mantras.sortable.Sortable.prototype;
x27802_27834.componentWillUpdate = ((function (x27802_27834){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
om.next.merge_pending_props_BANG_(this__15793__auto__);

return om.next.merge_pending_state_BANG_(this__15793__auto__);
});})(x27802_27834))
;

x27802_27834.shouldComponentUpdate = ((function (x27802_27834){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__15793__auto__),goog.object.get(next_props__15794__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__15793__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__27805 = this__15793__auto__.state;
var G__27806 = "omcljs$state";
return goog.object.get(G__27805,G__27806);
})(),goog.object.get(next_state__15795__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x27802_27834))
;

x27802_27834.componentWillUnmount = ((function (x27802_27834){
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
});})(x27802_27834))
;

x27802_27834.componentDidUpdate = ((function (x27802_27834){
return (function (prev_props__15796__auto__,prev_state__15797__auto__){
var this__15793__auto__ = this;
return om.next.clear_prev_props_BANG_(this__15793__auto__);
});})(x27802_27834))
;

x27802_27834.isMounted = ((function (x27802_27834){
return (function (){
var this__15793__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__15793__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27802_27834))
;

x27802_27834.componentWillMount = ((function (x27802_27834){
return (function (){
var this__15793__auto__ = this;
var indexer__15798__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__15793__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__15798__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__15798__auto__,this__15793__auto__);
}
});})(x27802_27834))
;

x27802_27834.drag_start = ((function (x27802_27834){
return (function (e,child){
var this$ = this;
e.dataTransfer.setData("text/plain",om_mantras.sortable.sortable_key(child));

var item = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(child));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_item,item);
});})(x27802_27834))
;

x27802_27834.drag = ((function (x27802_27834){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dragging,true);
});})(x27802_27834))
;

x27802_27834.drag_over = ((function (x27802_27834){
return (function (e){
var this$ = this;
e.dataTransfer.dropEffect = "move";

return e.preventDefault();
});})(x27802_27834))
;

x27802_27834.reorder_items = ((function (x27802_27834){
return (function (drag_item,target_item,after_QMARK_,items){
var this$ = this;
return ((function (this$,x27802_27834){
return (function (p__27807){
var vec__27808 = p__27807;
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27808,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27808,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_item], null),cljs.core.array_seq([after], 0));
});})(this$,x27802_27834))
.call(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$,x27802_27834){
return (function (p1__27786_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([drag_item], true),p1__27786_SHARP_);
});})(this$,x27802_27834))
,cljs.core.split_at((function (){var G__27809 = om_mantras.util.index_of(target_item,items);
var G__27809__$1 = (cljs.core.truth_(after_QMARK_)?(G__27809 + (1)):G__27809);
return G__27809__$1;
})(),items)));
});})(x27802_27834))
;

x27802_27834.drag_over_child = ((function (x27802_27834){
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
});})(x27802_27834))
;

x27802_27834.drag_end = ((function (x27802_27834){
return (function (e,child){
var this$ = this;
e.preventDefault();

var items_27835 = (function (){var or__5094__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})();
var G__27810_27836 = this$;
var G__27810_27837__$1 = (((G__27810_27836 == null))?null:om.next.props(G__27810_27836));
var G__27810_27838__$2 = (((G__27810_27837__$1 == null))?null:cljs.core.cst$kw$change_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__27810_27837__$1));
var G__27810_27839__$3 = (((G__27810_27838__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__27810_27838__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_27835], null)));

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x27802_27834){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$drag_DASH_item),cljs.core.cst$kw$dragging);
});})(this$,x27802_27834))
);
});})(x27802_27834))
;

x27802_27834.drop = ((function (x27802_27834){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x27802_27834))
;

x27802_27834.componentWillReceiveProps = ((function (x27802_27834){
return (function (new_props){
var this$ = this;
var new_props__$1 = om.next._next_props(new_props,this$);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (new_props__$1,this$,x27802_27834){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$items),cljs.core.cst$kw$drag_DASH_item),cljs.core.cst$kw$dragging);
});})(new_props__$1,this$,x27802_27834))
);
});})(x27802_27834))
;

x27802_27834.render = ((function (x27802_27834){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_27811 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27812 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27813 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27814 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27815 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__27816 = om.next.props(this$);
var map__27816__$1 = ((((!((map__27816 == null)))?((((map__27816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27816):map__27816);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27816__$1,cljs.core.cst$kw$key_DASH_fn);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27816__$1,cljs.core.cst$kw$element_DASH_fn);
var map__27817 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__27817__$1 = ((((!((map__27817 == null)))?((((map__27817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27817):map__27817);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27817__$1,cljs.core.cst$kw$dragging);
var drag_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27817__$1,cljs.core.cst$kw$drag_DASH_item);
var G__27820 = {"className": "sortable", "dragOver": ((function (map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27787_SHARP_){
return this$.drag_over(p1__27787_SHARP_);
});})(map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
, "drop": ((function (map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27788_SHARP_){
return this$.drop(p1__27788_SHARP_);
});})(map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
};
var G__27821 = (function (){var iter__5866__auto__ = ((function (G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function om_mantras$sortable$iter__27822(s__27823){
return (new cljs.core.LazySeq(null,((function (G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (){
var s__27823__$1 = s__27823;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__27823__$1);
if(temp__4425__auto__){
var s__27823__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27823__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__27823__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__27825 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__27824 = (0);
while(true){
if((i__27824 < size__5865__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__27824);
cljs.core.chunk_append(b__27825,(function (){var G__27830 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item,item,cljs.core.cst$kw$dragged,(function (){var and__5082__auto__ = dragging;
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
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (i__27824,item,c__5864__auto__,size__5865__auto__,b__27825,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27789_SHARP_,p2__27790_SHARP_){
return this$.drag_start(p1__27789_SHARP_,p2__27790_SHARP_);
});})(i__27824,item,c__5864__auto__,size__5865__auto__,b__27825,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
,cljs.core.cst$kw$drag,((function (i__27824,item,c__5864__auto__,size__5865__auto__,b__27825,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27791_SHARP_,p2__27792_SHARP_){
return this$.drag(p1__27791_SHARP_,p2__27792_SHARP_);
});})(i__27824,item,c__5864__auto__,size__5865__auto__,b__27825,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
,cljs.core.cst$kw$end,((function (i__27824,item,c__5864__auto__,size__5865__auto__,b__27825,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27793_SHARP_,p2__27794_SHARP_){
return this$.drag_end(p1__27793_SHARP_,p2__27794_SHARP_);
});})(i__27824,item,c__5864__auto__,size__5865__auto__,b__27825,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
,cljs.core.cst$kw$over,((function (i__27824,item,c__5864__auto__,size__5865__auto__,b__27825,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27795_SHARP_,p2__27796_SHARP_){
return this$.drag_over_child(p1__27795_SHARP_,p2__27796_SHARP_);
});})(i__27824,item,c__5864__auto__,size__5865__auto__,b__27825,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
,cljs.core.cst$kw$drop,((function (i__27824,item,c__5864__auto__,size__5865__auto__,b__27825,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27797_SHARP_){
return this$.drop(p1__27797_SHARP_);
});})(i__27824,item,c__5864__auto__,size__5865__auto__,b__27825,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
], null)], null);
return (om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1(G__27830) : om_mantras.sortable.sortable_item.call(null,G__27830));
})());

var G__27840 = (i__27824 + (1));
i__27824 = G__27840;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27825),om_mantras$sortable$iter__27822(cljs.core.chunk_rest(s__27823__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27825),null);
}
} else {
var item = cljs.core.first(s__27823__$2);
return cljs.core.cons((function (){var G__27831 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item,item,cljs.core.cst$kw$dragged,(function (){var and__5082__auto__ = dragging;
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
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (item,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27789_SHARP_,p2__27790_SHARP_){
return this$.drag_start(p1__27789_SHARP_,p2__27790_SHARP_);
});})(item,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
,cljs.core.cst$kw$drag,((function (item,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27791_SHARP_,p2__27792_SHARP_){
return this$.drag(p1__27791_SHARP_,p2__27792_SHARP_);
});})(item,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
,cljs.core.cst$kw$end,((function (item,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27793_SHARP_,p2__27794_SHARP_){
return this$.drag_end(p1__27793_SHARP_,p2__27794_SHARP_);
});})(item,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
,cljs.core.cst$kw$over,((function (item,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27795_SHARP_,p2__27796_SHARP_){
return this$.drag_over_child(p1__27795_SHARP_,p2__27796_SHARP_);
});})(item,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
,cljs.core.cst$kw$drop,((function (item,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834){
return (function (p1__27797_SHARP_){
return this$.drop(p1__27797_SHARP_);
});})(item,s__27823__$2,temp__4425__auto__,G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
], null)], null);
return (om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1(G__27831) : om_mantras.sortable.sortable_item.call(null,G__27831));
})(),om_mantras$sortable$iter__27822(cljs.core.rest(s__27823__$2)));
}
} else {
return null;
}
break;
}
});})(G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
,null,null));
});})(G__27820,map__27816,map__27816__$1,key_fn,element_fn,map__27817,map__27817__$1,dragging,drag_item,_STAR_reconciler_STAR_27811,_STAR_depth_STAR_27812,_STAR_shared_STAR_27813,_STAR_instrument_STAR_27814,_STAR_parent_STAR_27815,this$,x27802_27834))
;
return iter__5866__auto__((function (){var or__5094__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})());
})();
return React.DOM.div(G__27820,G__27821);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27815;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27814;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27813;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27812;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27811;
}});})(x27802_27834))
;


om_mantras.sortable.Sortable.prototype.constructor = om_mantras.sortable.Sortable;

om_mantras.sortable.Sortable.prototype.om$isComponent = true;

var x27832_27841 = om_mantras.sortable.Sortable;


var x27833_27842 = om_mantras.sortable.Sortable.prototype;


om_mantras.sortable.Sortable.cljs$lang$type = true;

om_mantras.sortable.Sortable.cljs$lang$ctorStr = "om-mantras.sortable/Sortable";

om_mantras.sortable.Sortable.cljs$lang$ctorPrWriter = (function (this__15855__auto__,writer__15856__auto__,opt__15857__auto__){
return cljs.core._write(writer__15856__auto__,"om-mantras.sortable/Sortable");
});
om_mantras.sortable.sortable = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_mantras.sortable.Sortable);

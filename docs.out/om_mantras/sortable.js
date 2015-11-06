// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('om_mantras.sortable');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_mantras.util');
om_mantras.sortable.sortable_key = (function om_mantras$sortable$sortable_key(x){
var props = (function (){var G__22993 = x;
var G__22993__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__22993):G__22993);
return G__22993__$1;
})();
var key_fn = cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(key_fn)){
var G__22994 = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__22994) : key_fn.call(null,G__22994));
} else {
return cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
}
});
/**
 * @constructor
 */
om_mantras.sortable.SortableItem = (function om_mantras$sortable$SortableItem(){
var this__22363__auto__ = this;
React.Component.apply(this__22363__auto__,arguments);

if(!((this__22363__auto__.getInitialState == null))){
this__22363__auto__.state = this__22363__auto__.getInitialState();
} else {
this__22363__auto__.state = {};
}

return this__22363__auto__;
});

om_mantras.sortable.SortableItem.prototype = goog.object.clone(React.Component.prototype);

var x23004_23031 = om_mantras.sortable.SortableItem.prototype;
x23004_23031.componentWillUpdate = ((function (x23004_23031){
return (function (next_props__22304__auto__,next_state__22305__auto__){
var this__22303__auto__ = this;
om.next.merge_pending_props_BANG_(this__22303__auto__);

return om.next.merge_pending_state_BANG_(this__22303__auto__);
});})(x23004_23031))
;

x23004_23031.shouldComponentUpdate = ((function (x23004_23031){
return (function (next_props__22304__auto__,next_state__22305__auto__){
var this__22303__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__22303__auto__),goog.object.get(next_props__22304__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__22303__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__23007 = this__22303__auto__.state;
var G__23008 = "omcljs$state";
return goog.object.get(G__23007,G__23008);
})(),goog.object.get(next_state__22305__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x23004_23031))
;

x23004_23031.componentWillUnmount = ((function (x23004_23031){
return (function (){
var this__22303__auto__ = this;
var r__22309__auto__ = om.next.get_reconciler(this__22303__auto__);
var cfg__22310__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__22309__auto__);
var st__22311__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__22310__auto__);
var indexer__22308__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__22310__auto__);
if((st__22311__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__22311__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__22303__auto__], 0));
}

if((indexer__22308__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__22308__auto__,this__22303__auto__);
}
});})(x23004_23031))
;

x23004_23031.componentDidUpdate = ((function (x23004_23031){
return (function (prev_props__22306__auto__,prev_state__22307__auto__){
var this__22303__auto__ = this;
return om.next.clear_prev_props_BANG_(this__22303__auto__);
});})(x23004_23031))
;

x23004_23031.isMounted = ((function (x23004_23031){
return (function (){
var this__22303__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__22303__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23004_23031))
;

x23004_23031.componentWillMount = ((function (x23004_23031){
return (function (){
var this__22303__auto__ = this;
var indexer__22308__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__22303__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__22308__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__22308__auto__,this__22303__auto__);
}
});})(x23004_23031))
;

x23004_23031.render = ((function (x23004_23031){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_23009 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23010 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23011 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23012 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23013 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__23014 = om.next.props(this$);
var map__23014__$1 = ((((!((map__23014 == null)))?((((map__23014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23014):map__23014);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,cljs.core.cst$kw$item);
var dragged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,cljs.core.cst$kw$dragged);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,cljs.core.cst$kw$element_DASH_fn);
var drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,cljs.core.cst$kw$drag_DASH_fns);
var G__23021 = {"className": [cljs.core.str("sortable-item"),cljs.core.str((cljs.core.truth_(dragged)?" sortable-item-dragged":null))].join(''), "draggable": true, "onDragStart": ((function (map__23014,map__23014__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23009,_STAR_depth_STAR_23010,_STAR_shared_STAR_23011,_STAR_instrument_STAR_23012,_STAR_parent_STAR_23013,this$,x23004_23031){
return (function (p1__22995_SHARP_){
var G__23023 = drag_fns;
var G__23023__$1 = (((G__23023 == null))?null:cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__23023));
var G__23023__$2 = (((G__23023__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23023__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22995_SHARP_,this$], null)));
return G__23023__$2;
});})(map__23014,map__23014__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23009,_STAR_depth_STAR_23010,_STAR_shared_STAR_23011,_STAR_instrument_STAR_23012,_STAR_parent_STAR_23013,this$,x23004_23031))
, "onDrag": ((function (map__23014,map__23014__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23009,_STAR_depth_STAR_23010,_STAR_shared_STAR_23011,_STAR_instrument_STAR_23012,_STAR_parent_STAR_23013,this$,x23004_23031){
return (function (p1__22996_SHARP_){
var G__23024 = drag_fns;
var G__23024__$1 = (((G__23024 == null))?null:cljs.core.cst$kw$drag.cljs$core$IFn$_invoke$arity$1(G__23024));
var G__23024__$2 = (((G__23024__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23024__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22996_SHARP_,this$], null)));
return G__23024__$2;
});})(map__23014,map__23014__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23009,_STAR_depth_STAR_23010,_STAR_shared_STAR_23011,_STAR_instrument_STAR_23012,_STAR_parent_STAR_23013,this$,x23004_23031))
, "onDragEnd": ((function (map__23014,map__23014__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23009,_STAR_depth_STAR_23010,_STAR_shared_STAR_23011,_STAR_instrument_STAR_23012,_STAR_parent_STAR_23013,this$,x23004_23031){
return (function (p1__22997_SHARP_){
var G__23025 = drag_fns;
var G__23025__$1 = (((G__23025 == null))?null:cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__23025));
var G__23025__$2 = (((G__23025__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23025__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22997_SHARP_,this$], null)));
return G__23025__$2;
});})(map__23014,map__23014__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23009,_STAR_depth_STAR_23010,_STAR_shared_STAR_23011,_STAR_instrument_STAR_23012,_STAR_parent_STAR_23013,this$,x23004_23031))
, "onDragOver": ((function (map__23014,map__23014__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23009,_STAR_depth_STAR_23010,_STAR_shared_STAR_23011,_STAR_instrument_STAR_23012,_STAR_parent_STAR_23013,this$,x23004_23031){
return (function (p1__22998_SHARP_){
var G__23026 = drag_fns;
var G__23026__$1 = (((G__23026 == null))?null:cljs.core.cst$kw$over.cljs$core$IFn$_invoke$arity$1(G__23026));
var G__23026__$2 = (((G__23026__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23026__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22998_SHARP_,this$], null)));
return G__23026__$2;
});})(map__23014,map__23014__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23009,_STAR_depth_STAR_23010,_STAR_shared_STAR_23011,_STAR_instrument_STAR_23012,_STAR_parent_STAR_23013,this$,x23004_23031))
, "onDrop": ((function (map__23014,map__23014__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23009,_STAR_depth_STAR_23010,_STAR_shared_STAR_23011,_STAR_instrument_STAR_23012,_STAR_parent_STAR_23013,this$,x23004_23031){
return (function (p1__22999_SHARP_){
var G__23027 = drag_fns;
var G__23027__$1 = (((G__23027 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__23027));
var G__23027__$2 = (((G__23027__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23027__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22999_SHARP_,this$], null)));
return G__23027__$2;
});})(map__23014,map__23014__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23009,_STAR_depth_STAR_23010,_STAR_shared_STAR_23011,_STAR_instrument_STAR_23012,_STAR_parent_STAR_23013,this$,x23004_23031))
};
var G__23022 = (function (){var G__23028 = item;
var G__23028__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__23028) : element_fn.call(null,G__23028)):G__23028);
return G__23028__$1;
})();
return React.DOM.div(G__23021,G__23022);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23013;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23012;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23011;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23010;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23009;
}});})(x23004_23031))
;


om_mantras.sortable.SortableItem.prototype.constructor = om_mantras.sortable.SortableItem;

om_mantras.sortable.SortableItem.prototype.om$isComponent = true;

var x23029_23032 = om_mantras.sortable.SortableItem;


var x23030_23033 = om_mantras.sortable.SortableItem.prototype;


om_mantras.sortable.SortableItem.cljs$lang$type = true;

om_mantras.sortable.SortableItem.cljs$lang$ctorStr = "om-mantras.sortable/SortableItem";

om_mantras.sortable.SortableItem.cljs$lang$ctorPrWriter = (function (this__22365__auto__,writer__22366__auto__,opt__22367__auto__){
return cljs.core._write(writer__22366__auto__,"om-mantras.sortable/SortableItem");
});
om_mantras.sortable.sortable_item = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_mantras.sortable.SortableItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,om_mantras.sortable.sortable_key], null));
/**
 * @constructor
 */
om_mantras.sortable.Sortable = (function om_mantras$sortable$Sortable(){
var this__22363__auto__ = this;
React.Component.apply(this__22363__auto__,arguments);

if(!((this__22363__auto__.getInitialState == null))){
this__22363__auto__.state = this__22363__auto__.getInitialState();
} else {
this__22363__auto__.state = {};
}

return this__22363__auto__;
});

om_mantras.sortable.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x23050_23082 = om_mantras.sortable.Sortable.prototype;
x23050_23082.componentWillUpdate = ((function (x23050_23082){
return (function (next_props__22304__auto__,next_state__22305__auto__){
var this__22303__auto__ = this;
om.next.merge_pending_props_BANG_(this__22303__auto__);

return om.next.merge_pending_state_BANG_(this__22303__auto__);
});})(x23050_23082))
;

x23050_23082.shouldComponentUpdate = ((function (x23050_23082){
return (function (next_props__22304__auto__,next_state__22305__auto__){
var this__22303__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__22303__auto__),goog.object.get(next_props__22304__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__22303__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__23053 = this__22303__auto__.state;
var G__23054 = "omcljs$state";
return goog.object.get(G__23053,G__23054);
})(),goog.object.get(next_state__22305__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x23050_23082))
;

x23050_23082.componentWillUnmount = ((function (x23050_23082){
return (function (){
var this__22303__auto__ = this;
var r__22309__auto__ = om.next.get_reconciler(this__22303__auto__);
var cfg__22310__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__22309__auto__);
var st__22311__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__22310__auto__);
var indexer__22308__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__22310__auto__);
if((st__22311__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__22311__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__22303__auto__], 0));
}

if((indexer__22308__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__22308__auto__,this__22303__auto__);
}
});})(x23050_23082))
;

x23050_23082.componentDidUpdate = ((function (x23050_23082){
return (function (prev_props__22306__auto__,prev_state__22307__auto__){
var this__22303__auto__ = this;
return om.next.clear_prev_props_BANG_(this__22303__auto__);
});})(x23050_23082))
;

x23050_23082.isMounted = ((function (x23050_23082){
return (function (){
var this__22303__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__22303__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23050_23082))
;

x23050_23082.componentWillMount = ((function (x23050_23082){
return (function (){
var this__22303__auto__ = this;
var indexer__22308__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__22303__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__22308__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__22308__auto__,this__22303__auto__);
}
});})(x23050_23082))
;

x23050_23082.drag_start = ((function (x23050_23082){
return (function (e,child){
var this$ = this;
e.dataTransfer.setData("text/plain",om_mantras.sortable.sortable_key(child));

var item = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(child));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_item,item);
});})(x23050_23082))
;

x23050_23082.drag = ((function (x23050_23082){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dragging,true);
});})(x23050_23082))
;

x23050_23082.drag_over = ((function (x23050_23082){
return (function (e){
var this$ = this;
e.dataTransfer.dropEffect = "move";

return e.preventDefault();
});})(x23050_23082))
;

x23050_23082.reorder_items = ((function (x23050_23082){
return (function (drag_item,target_item,after_QMARK_,items){
var this$ = this;
return ((function (this$,x23050_23082){
return (function (p__23055){
var vec__23056 = p__23055;
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23056,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23056,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_item], null),cljs.core.array_seq([after], 0));
});})(this$,x23050_23082))
.call(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$,x23050_23082){
return (function (p1__23034_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([drag_item], true),p1__23034_SHARP_);
});})(this$,x23050_23082))
,cljs.core.split_at((function (){var G__23057 = om_mantras.util.index_of(target_item,items);
var G__23057__$1 = (cljs.core.truth_(after_QMARK_)?(G__23057 + (1)):G__23057);
return G__23057__$1;
})(),items)));
});})(x23050_23082))
;

x23050_23082.drag_over_child = ((function (x23050_23082){
return (function (e,child){
var this$ = this;
e.dataTransfer.dropEffect = "move";

e.preventDefault();

var drag_item = cljs.core.cst$kw$drag_DASH_item.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
var target_item = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(child));
if(cljs.core.truth_((function (){var and__5156__auto__ = drag_item;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(drag_item,target_item);
} else {
return and__5156__auto__;
}
})())){
var x = e.clientX;
var y = e.clientY;
var rect = om.dom.node.cljs$core$IFn$_invoke$arity$1(child).getBoundingClientRect();
var center_x = ((rect.left + rect.right) / (2));
var center_y = ((rect.top + rect.bottom) / (2));
var after_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$direction.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)),cljs.core.cst$kw$horizontal))?(x >= center_x):(y >= center_y));
var items = (function (){var or__5168__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})();
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$items,this$.reorder_items(drag_item,target_item,after_QMARK_,items));
} else {
return null;
}
});})(x23050_23082))
;

x23050_23082.drag_end = ((function (x23050_23082){
return (function (e,child){
var this$ = this;
e.preventDefault();

var items_23083 = (function (){var or__5168__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})();
var G__23058_23084 = this$;
var G__23058_23085__$1 = (((G__23058_23084 == null))?null:om.next.props(G__23058_23084));
var G__23058_23086__$2 = (((G__23058_23085__$1 == null))?null:cljs.core.cst$kw$change_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__23058_23085__$1));
var G__23058_23087__$3 = (((G__23058_23086__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23058_23086__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_23083], null)));

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x23050_23082){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$drag_DASH_item),cljs.core.cst$kw$dragging);
});})(this$,x23050_23082))
);
});})(x23050_23082))
;

x23050_23082.drop = ((function (x23050_23082){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x23050_23082))
;

x23050_23082.componentWillReceiveProps = ((function (x23050_23082){
return (function (new_props){
var this$ = this;
var new_props__$1 = om.next._next_props(new_props,this$);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (new_props__$1,this$,x23050_23082){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$items),cljs.core.cst$kw$drag_DASH_item),cljs.core.cst$kw$dragging);
});})(new_props__$1,this$,x23050_23082))
);
});})(x23050_23082))
;

x23050_23082.render = ((function (x23050_23082){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_23059 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23060 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23061 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23062 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23063 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__23064 = om.next.props(this$);
var map__23064__$1 = ((((!((map__23064 == null)))?((((map__23064.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23064.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23064):map__23064);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23064__$1,cljs.core.cst$kw$key_DASH_fn);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23064__$1,cljs.core.cst$kw$element_DASH_fn);
var map__23065 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__23065__$1 = ((((!((map__23065 == null)))?((((map__23065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23065):map__23065);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23065__$1,cljs.core.cst$kw$dragging);
var drag_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23065__$1,cljs.core.cst$kw$drag_DASH_item);
var G__23068 = {"className": "sortable", "dragOver": ((function (map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23035_SHARP_){
return this$.drag_over(p1__23035_SHARP_);
});})(map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
, "drop": ((function (map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23036_SHARP_){
return this$.drop(p1__23036_SHARP_);
});})(map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
};
var G__23069 = (function (){var iter__5940__auto__ = ((function (G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function om_mantras$sortable$iter__23070(s__23071){
return (new cljs.core.LazySeq(null,((function (G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (){
var s__23071__$1 = s__23071;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23071__$1);
if(temp__4425__auto__){
var s__23071__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23071__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__23071__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__23073 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__23072 = (0);
while(true){
if((i__23072 < size__5939__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__23072);
cljs.core.chunk_append(b__23073,(function (){var G__23078 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item,item,cljs.core.cst$kw$dragged,(function (){var and__5156__auto__ = dragging;
if(cljs.core.truth_(and__5156__auto__)){
var and__5156__auto____$1 = drag_item;
if(cljs.core.truth_(and__5156__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,drag_item);
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (i__23072,item,c__5938__auto__,size__5939__auto__,b__23073,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23037_SHARP_,p2__23038_SHARP_){
return this$.drag_start(p1__23037_SHARP_,p2__23038_SHARP_);
});})(i__23072,item,c__5938__auto__,size__5939__auto__,b__23073,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
,cljs.core.cst$kw$drag,((function (i__23072,item,c__5938__auto__,size__5939__auto__,b__23073,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23039_SHARP_,p2__23040_SHARP_){
return this$.drag(p1__23039_SHARP_,p2__23040_SHARP_);
});})(i__23072,item,c__5938__auto__,size__5939__auto__,b__23073,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
,cljs.core.cst$kw$end,((function (i__23072,item,c__5938__auto__,size__5939__auto__,b__23073,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23041_SHARP_,p2__23042_SHARP_){
return this$.drag_end(p1__23041_SHARP_,p2__23042_SHARP_);
});})(i__23072,item,c__5938__auto__,size__5939__auto__,b__23073,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
,cljs.core.cst$kw$over,((function (i__23072,item,c__5938__auto__,size__5939__auto__,b__23073,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23043_SHARP_,p2__23044_SHARP_){
return this$.drag_over_child(p1__23043_SHARP_,p2__23044_SHARP_);
});})(i__23072,item,c__5938__auto__,size__5939__auto__,b__23073,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
,cljs.core.cst$kw$drop,((function (i__23072,item,c__5938__auto__,size__5939__auto__,b__23073,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23045_SHARP_){
return this$.drop(p1__23045_SHARP_);
});})(i__23072,item,c__5938__auto__,size__5939__auto__,b__23073,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
], null)], null);
return (om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1(G__23078) : om_mantras.sortable.sortable_item.call(null,G__23078));
})());

var G__23088 = (i__23072 + (1));
i__23072 = G__23088;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23073),om_mantras$sortable$iter__23070(cljs.core.chunk_rest(s__23071__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23073),null);
}
} else {
var item = cljs.core.first(s__23071__$2);
return cljs.core.cons((function (){var G__23079 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item,item,cljs.core.cst$kw$dragged,(function (){var and__5156__auto__ = dragging;
if(cljs.core.truth_(and__5156__auto__)){
var and__5156__auto____$1 = drag_item;
if(cljs.core.truth_(and__5156__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(item,drag_item);
} else {
return and__5156__auto____$1;
}
} else {
return and__5156__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (item,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23037_SHARP_,p2__23038_SHARP_){
return this$.drag_start(p1__23037_SHARP_,p2__23038_SHARP_);
});})(item,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
,cljs.core.cst$kw$drag,((function (item,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23039_SHARP_,p2__23040_SHARP_){
return this$.drag(p1__23039_SHARP_,p2__23040_SHARP_);
});})(item,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
,cljs.core.cst$kw$end,((function (item,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23041_SHARP_,p2__23042_SHARP_){
return this$.drag_end(p1__23041_SHARP_,p2__23042_SHARP_);
});})(item,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
,cljs.core.cst$kw$over,((function (item,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23043_SHARP_,p2__23044_SHARP_){
return this$.drag_over_child(p1__23043_SHARP_,p2__23044_SHARP_);
});})(item,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
,cljs.core.cst$kw$drop,((function (item,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082){
return (function (p1__23045_SHARP_){
return this$.drop(p1__23045_SHARP_);
});})(item,s__23071__$2,temp__4425__auto__,G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
], null)], null);
return (om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1(G__23079) : om_mantras.sortable.sortable_item.call(null,G__23079));
})(),om_mantras$sortable$iter__23070(cljs.core.rest(s__23071__$2)));
}
} else {
return null;
}
break;
}
});})(G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
,null,null));
});})(G__23068,map__23064,map__23064__$1,key_fn,element_fn,map__23065,map__23065__$1,dragging,drag_item,_STAR_reconciler_STAR_23059,_STAR_depth_STAR_23060,_STAR_shared_STAR_23061,_STAR_instrument_STAR_23062,_STAR_parent_STAR_23063,this$,x23050_23082))
;
return iter__5940__auto__((function (){var or__5168__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})());
})();
return React.DOM.div(G__23068,G__23069);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23063;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23062;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23061;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23060;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23059;
}});})(x23050_23082))
;


om_mantras.sortable.Sortable.prototype.constructor = om_mantras.sortable.Sortable;

om_mantras.sortable.Sortable.prototype.om$isComponent = true;

var x23080_23089 = om_mantras.sortable.Sortable;


var x23081_23090 = om_mantras.sortable.Sortable.prototype;


om_mantras.sortable.Sortable.cljs$lang$type = true;

om_mantras.sortable.Sortable.cljs$lang$ctorStr = "om-mantras.sortable/Sortable";

om_mantras.sortable.Sortable.cljs$lang$ctorPrWriter = (function (this__22365__auto__,writer__22366__auto__,opt__22367__auto__){
return cljs.core._write(writer__22366__auto__,"om-mantras.sortable/Sortable");
});
om_mantras.sortable.sortable = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_mantras.sortable.Sortable);

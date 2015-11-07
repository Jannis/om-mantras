// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('om_mantras.sortable');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_mantras.util');
om_mantras.sortable.sortable_key = (function om_mantras$sortable$sortable_key(x){
var props = (function (){var G__23027 = x;
var G__23027__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__23027):G__23027);
return G__23027__$1;
})();
var key_fn = cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(key_fn)){
var G__23028 = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__23028) : key_fn.call(null,G__23028));
} else {
return cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
}
});
/**
 * @constructor
 */
om_mantras.sortable.SortableItem = (function om_mantras$sortable$SortableItem(){
var this__22373__auto__ = this;
React.Component.apply(this__22373__auto__,arguments);

if(!((this__22373__auto__.initLocalState == null))){
this__22373__auto__.state = this__22373__auto__.initLocalState();
} else {
this__22373__auto__.state = {};
}

return this__22373__auto__;
});

om_mantras.sortable.SortableItem.prototype = goog.object.clone(React.Component.prototype);

var x23038_23065 = om_mantras.sortable.SortableItem.prototype;
x23038_23065.componentWillUpdate = ((function (x23038_23065){
return (function (next_props__22314__auto__,next_state__22315__auto__){
var this__22313__auto__ = this;
om.next.merge_pending_props_BANG_(this__22313__auto__);

return om.next.merge_pending_state_BANG_(this__22313__auto__);
});})(x23038_23065))
;

x23038_23065.shouldComponentUpdate = ((function (x23038_23065){
return (function (next_props__22314__auto__,next_state__22315__auto__){
var this__22313__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__22313__auto__),goog.object.get(next_props__22314__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__22313__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__23041 = this__22313__auto__.state;
var G__23042 = "omcljs$state";
return goog.object.get(G__23041,G__23042);
})(),goog.object.get(next_state__22315__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x23038_23065))
;

x23038_23065.componentWillUnmount = ((function (x23038_23065){
return (function (){
var this__22313__auto__ = this;
var r__22319__auto__ = om.next.get_reconciler(this__22313__auto__);
var cfg__22320__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__22319__auto__);
var st__22321__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__22320__auto__);
var indexer__22318__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__22320__auto__);
if((st__22321__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__22321__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__22313__auto__], 0));
}

if((indexer__22318__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__22318__auto__,this__22313__auto__);
}
});})(x23038_23065))
;

x23038_23065.componentDidUpdate = ((function (x23038_23065){
return (function (prev_props__22316__auto__,prev_state__22317__auto__){
var this__22313__auto__ = this;
return om.next.clear_prev_props_BANG_(this__22313__auto__);
});})(x23038_23065))
;

x23038_23065.isMounted = ((function (x23038_23065){
return (function (){
var this__22313__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__22313__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23038_23065))
;

x23038_23065.componentWillMount = ((function (x23038_23065){
return (function (){
var this__22313__auto__ = this;
var indexer__22318__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__22313__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__22318__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__22318__auto__,this__22313__auto__);
}
});})(x23038_23065))
;

x23038_23065.render = ((function (x23038_23065){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_23043 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23044 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23045 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23046 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23047 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__23048 = om.next.props(this$);
var map__23048__$1 = ((((!((map__23048 == null)))?((((map__23048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23048):map__23048);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23048__$1,cljs.core.cst$kw$item);
var dragged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23048__$1,cljs.core.cst$kw$dragged);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23048__$1,cljs.core.cst$kw$element_DASH_fn);
var drag_fns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23048__$1,cljs.core.cst$kw$drag_DASH_fns);
var G__23055 = {"className": [cljs.core.str("sortable-item"),cljs.core.str((cljs.core.truth_(dragged)?" sortable-item-dragged":null))].join(''), "draggable": true, "onDragStart": ((function (map__23048,map__23048__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23043,_STAR_depth_STAR_23044,_STAR_shared_STAR_23045,_STAR_instrument_STAR_23046,_STAR_parent_STAR_23047,this$,x23038_23065){
return (function (p1__23029_SHARP_){
var G__23057 = drag_fns;
var G__23057__$1 = (((G__23057 == null))?null:cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__23057));
var G__23057__$2 = (((G__23057__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23057__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23029_SHARP_,this$], null)));
return G__23057__$2;
});})(map__23048,map__23048__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23043,_STAR_depth_STAR_23044,_STAR_shared_STAR_23045,_STAR_instrument_STAR_23046,_STAR_parent_STAR_23047,this$,x23038_23065))
, "onDrag": ((function (map__23048,map__23048__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23043,_STAR_depth_STAR_23044,_STAR_shared_STAR_23045,_STAR_instrument_STAR_23046,_STAR_parent_STAR_23047,this$,x23038_23065){
return (function (p1__23030_SHARP_){
var G__23058 = drag_fns;
var G__23058__$1 = (((G__23058 == null))?null:cljs.core.cst$kw$drag.cljs$core$IFn$_invoke$arity$1(G__23058));
var G__23058__$2 = (((G__23058__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23058__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23030_SHARP_,this$], null)));
return G__23058__$2;
});})(map__23048,map__23048__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23043,_STAR_depth_STAR_23044,_STAR_shared_STAR_23045,_STAR_instrument_STAR_23046,_STAR_parent_STAR_23047,this$,x23038_23065))
, "onDragEnd": ((function (map__23048,map__23048__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23043,_STAR_depth_STAR_23044,_STAR_shared_STAR_23045,_STAR_instrument_STAR_23046,_STAR_parent_STAR_23047,this$,x23038_23065){
return (function (p1__23031_SHARP_){
var G__23059 = drag_fns;
var G__23059__$1 = (((G__23059 == null))?null:cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__23059));
var G__23059__$2 = (((G__23059__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23059__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23031_SHARP_,this$], null)));
return G__23059__$2;
});})(map__23048,map__23048__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23043,_STAR_depth_STAR_23044,_STAR_shared_STAR_23045,_STAR_instrument_STAR_23046,_STAR_parent_STAR_23047,this$,x23038_23065))
, "onDragOver": ((function (map__23048,map__23048__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23043,_STAR_depth_STAR_23044,_STAR_shared_STAR_23045,_STAR_instrument_STAR_23046,_STAR_parent_STAR_23047,this$,x23038_23065){
return (function (p1__23032_SHARP_){
var G__23060 = drag_fns;
var G__23060__$1 = (((G__23060 == null))?null:cljs.core.cst$kw$over.cljs$core$IFn$_invoke$arity$1(G__23060));
var G__23060__$2 = (((G__23060__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23060__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23032_SHARP_,this$], null)));
return G__23060__$2;
});})(map__23048,map__23048__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23043,_STAR_depth_STAR_23044,_STAR_shared_STAR_23045,_STAR_instrument_STAR_23046,_STAR_parent_STAR_23047,this$,x23038_23065))
, "onDrop": ((function (map__23048,map__23048__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23043,_STAR_depth_STAR_23044,_STAR_shared_STAR_23045,_STAR_instrument_STAR_23046,_STAR_parent_STAR_23047,this$,x23038_23065){
return (function (p1__23033_SHARP_){
var G__23061 = drag_fns;
var G__23061__$1 = (((G__23061 == null))?null:cljs.core.cst$kw$drop.cljs$core$IFn$_invoke$arity$1(G__23061));
var G__23061__$2 = (((G__23061__$1 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23061__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23033_SHARP_,this$], null)));
return G__23061__$2;
});})(map__23048,map__23048__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_23043,_STAR_depth_STAR_23044,_STAR_shared_STAR_23045,_STAR_instrument_STAR_23046,_STAR_parent_STAR_23047,this$,x23038_23065))
};
var G__23056 = (function (){var G__23062 = item;
var G__23062__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__23062) : element_fn.call(null,G__23062)):G__23062);
return G__23062__$1;
})();
return React.DOM.div(G__23055,G__23056);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23047;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23046;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23045;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23044;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23043;
}});})(x23038_23065))
;


om_mantras.sortable.SortableItem.prototype.constructor = om_mantras.sortable.SortableItem;

om_mantras.sortable.SortableItem.prototype.om$isComponent = true;

var x23063_23066 = om_mantras.sortable.SortableItem;


var x23064_23067 = om_mantras.sortable.SortableItem.prototype;


om_mantras.sortable.SortableItem.cljs$lang$type = true;

om_mantras.sortable.SortableItem.cljs$lang$ctorStr = "om-mantras.sortable/SortableItem";

om_mantras.sortable.SortableItem.cljs$lang$ctorPrWriter = (function (this__22375__auto__,writer__22376__auto__,opt__22377__auto__){
return cljs.core._write(writer__22376__auto__,"om-mantras.sortable/SortableItem");
});
om_mantras.sortable.sortable_item = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_mantras.sortable.SortableItem,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,om_mantras.sortable.sortable_key], null));
/**
 * @constructor
 */
om_mantras.sortable.Sortable = (function om_mantras$sortable$Sortable(){
var this__22373__auto__ = this;
React.Component.apply(this__22373__auto__,arguments);

if(!((this__22373__auto__.initLocalState == null))){
this__22373__auto__.state = this__22373__auto__.initLocalState();
} else {
this__22373__auto__.state = {};
}

return this__22373__auto__;
});

om_mantras.sortable.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x23084_23116 = om_mantras.sortable.Sortable.prototype;
x23084_23116.componentWillUpdate = ((function (x23084_23116){
return (function (next_props__22314__auto__,next_state__22315__auto__){
var this__22313__auto__ = this;
om.next.merge_pending_props_BANG_(this__22313__auto__);

return om.next.merge_pending_state_BANG_(this__22313__auto__);
});})(x23084_23116))
;

x23084_23116.shouldComponentUpdate = ((function (x23084_23116){
return (function (next_props__22314__auto__,next_state__22315__auto__){
var this__22313__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__22313__auto__),goog.object.get(next_props__22314__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__22313__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__23087 = this__22313__auto__.state;
var G__23088 = "omcljs$state";
return goog.object.get(G__23087,G__23088);
})(),goog.object.get(next_state__22315__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x23084_23116))
;

x23084_23116.componentWillUnmount = ((function (x23084_23116){
return (function (){
var this__22313__auto__ = this;
var r__22319__auto__ = om.next.get_reconciler(this__22313__auto__);
var cfg__22320__auto__ = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r__22319__auto__);
var st__22321__auto__ = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg__22320__auto__);
var indexer__22318__auto__ = cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cfg__22320__auto__);
if((st__22321__auto__ == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st__22321__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries], null),cljs.core.dissoc,cljs.core.array_seq([this__22313__auto__], 0));
}

if((indexer__22318__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_(indexer__22318__auto__,this__22313__auto__);
}
});})(x23084_23116))
;

x23084_23116.componentDidUpdate = ((function (x23084_23116){
return (function (prev_props__22316__auto__,prev_state__22317__auto__){
var this__22313__auto__ = this;
return om.next.clear_prev_props_BANG_(this__22313__auto__);
});})(x23084_23116))
;

x23084_23116.isMounted = ((function (x23084_23116){
return (function (){
var this__22313__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__22313__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23084_23116))
;

x23084_23116.componentWillMount = ((function (x23084_23116){
return (function (){
var this__22313__auto__ = this;
var indexer__22318__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__22313__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__22318__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__22318__auto__,this__22313__auto__);
}
});})(x23084_23116))
;

x23084_23116.drag_start = ((function (x23084_23116){
return (function (e,child){
var this$ = this;
e.dataTransfer.setData("text/plain",om_mantras.sortable.sortable_key(child));

var item = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(child));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$drag_DASH_item,item);
});})(x23084_23116))
;

x23084_23116.drag = ((function (x23084_23116){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$dragging,true);
});})(x23084_23116))
;

x23084_23116.drag_over = ((function (x23084_23116){
return (function (e){
var this$ = this;
e.dataTransfer.dropEffect = "move";

return e.preventDefault();
});})(x23084_23116))
;

x23084_23116.reorder_items = ((function (x23084_23116){
return (function (drag_item,target_item,after_QMARK_,items){
var this$ = this;
return ((function (this$,x23084_23116){
return (function (p__23089){
var vec__23090 = p__23089;
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23090,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23090,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_item], null),cljs.core.array_seq([after], 0));
});})(this$,x23084_23116))
.call(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$,x23084_23116){
return (function (p1__23068_SHARP_){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([drag_item], true),p1__23068_SHARP_);
});})(this$,x23084_23116))
,cljs.core.split_at((function (){var G__23091 = om_mantras.util.index_of(target_item,items);
var G__23091__$1 = (cljs.core.truth_(after_QMARK_)?(G__23091 + (1)):G__23091);
return G__23091__$1;
})(),items)));
});})(x23084_23116))
;

x23084_23116.drag_over_child = ((function (x23084_23116){
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
});})(x23084_23116))
;

x23084_23116.drag_end = ((function (x23084_23116){
return (function (e,child){
var this$ = this;
e.preventDefault();

var items_23117 = (function (){var or__5168__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})();
var G__23092_23118 = this$;
var G__23092_23119__$1 = (((G__23092_23118 == null))?null:om.next.props(G__23092_23118));
var G__23092_23120__$2 = (((G__23092_23119__$1 == null))?null:cljs.core.cst$kw$change_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__23092_23119__$1));
var G__23092_23121__$3 = (((G__23092_23120__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23092_23120__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_23117], null)));

return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (this$,x23084_23116){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$drag_DASH_item),cljs.core.cst$kw$dragging);
});})(this$,x23084_23116))
);
});})(x23084_23116))
;

x23084_23116.drop = ((function (x23084_23116){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x23084_23116))
;

x23084_23116.componentWillReceiveProps = ((function (x23084_23116){
return (function (new_props){
var this$ = this;
var new_props__$1 = om.next._next_props(new_props,this$);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(this$,((function (new_props__$1,this$,x23084_23116){
return (function (state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,cljs.core.cst$kw$items),cljs.core.cst$kw$drag_DASH_item),cljs.core.cst$kw$dragging);
});})(new_props__$1,this$,x23084_23116))
);
});})(x23084_23116))
;

x23084_23116.render = ((function (x23084_23116){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_23093 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23094 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23095 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23096 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23097 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__23098 = om.next.props(this$);
var map__23098__$1 = ((((!((map__23098 == null)))?((((map__23098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23098):map__23098);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23098__$1,cljs.core.cst$kw$key_DASH_fn);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23098__$1,cljs.core.cst$kw$element_DASH_fn);
var map__23099 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__23099__$1 = ((((!((map__23099 == null)))?((((map__23099.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23099.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23099):map__23099);
var dragging = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23099__$1,cljs.core.cst$kw$dragging);
var drag_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23099__$1,cljs.core.cst$kw$drag_DASH_item);
var G__23102 = {"className": "sortable", "dragOver": ((function (map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23069_SHARP_){
return this$.drag_over(p1__23069_SHARP_);
});})(map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
, "drop": ((function (map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23070_SHARP_){
return this$.drop(p1__23070_SHARP_);
});})(map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
};
var G__23103 = (function (){var iter__5940__auto__ = ((function (G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function om_mantras$sortable$iter__23104(s__23105){
return (new cljs.core.LazySeq(null,((function (G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (){
var s__23105__$1 = s__23105;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__23105__$1);
if(temp__4425__auto__){
var s__23105__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23105__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__23105__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__23107 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__23106 = (0);
while(true){
if((i__23106 < size__5939__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__23106);
cljs.core.chunk_append(b__23107,(function (){var G__23112 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item,item,cljs.core.cst$kw$dragged,(function (){var and__5156__auto__ = dragging;
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
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (i__23106,item,c__5938__auto__,size__5939__auto__,b__23107,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23071_SHARP_,p2__23072_SHARP_){
return this$.drag_start(p1__23071_SHARP_,p2__23072_SHARP_);
});})(i__23106,item,c__5938__auto__,size__5939__auto__,b__23107,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
,cljs.core.cst$kw$drag,((function (i__23106,item,c__5938__auto__,size__5939__auto__,b__23107,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23073_SHARP_,p2__23074_SHARP_){
return this$.drag(p1__23073_SHARP_,p2__23074_SHARP_);
});})(i__23106,item,c__5938__auto__,size__5939__auto__,b__23107,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
,cljs.core.cst$kw$end,((function (i__23106,item,c__5938__auto__,size__5939__auto__,b__23107,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23075_SHARP_,p2__23076_SHARP_){
return this$.drag_end(p1__23075_SHARP_,p2__23076_SHARP_);
});})(i__23106,item,c__5938__auto__,size__5939__auto__,b__23107,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
,cljs.core.cst$kw$over,((function (i__23106,item,c__5938__auto__,size__5939__auto__,b__23107,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23077_SHARP_,p2__23078_SHARP_){
return this$.drag_over_child(p1__23077_SHARP_,p2__23078_SHARP_);
});})(i__23106,item,c__5938__auto__,size__5939__auto__,b__23107,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
,cljs.core.cst$kw$drop,((function (i__23106,item,c__5938__auto__,size__5939__auto__,b__23107,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23079_SHARP_){
return this$.drop(p1__23079_SHARP_);
});})(i__23106,item,c__5938__auto__,size__5939__auto__,b__23107,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
], null)], null);
return (om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1(G__23112) : om_mantras.sortable.sortable_item.call(null,G__23112));
})());

var G__23122 = (i__23106 + (1));
i__23106 = G__23122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23107),om_mantras$sortable$iter__23104(cljs.core.chunk_rest(s__23105__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23107),null);
}
} else {
var item = cljs.core.first(s__23105__$2);
return cljs.core.cons((function (){var G__23113 = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$item,item,cljs.core.cst$kw$dragged,(function (){var and__5156__auto__ = dragging;
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
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$element_DASH_fn,element_fn,cljs.core.cst$kw$drag_DASH_fns,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$start,((function (item,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23071_SHARP_,p2__23072_SHARP_){
return this$.drag_start(p1__23071_SHARP_,p2__23072_SHARP_);
});})(item,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
,cljs.core.cst$kw$drag,((function (item,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23073_SHARP_,p2__23074_SHARP_){
return this$.drag(p1__23073_SHARP_,p2__23074_SHARP_);
});})(item,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
,cljs.core.cst$kw$end,((function (item,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23075_SHARP_,p2__23076_SHARP_){
return this$.drag_end(p1__23075_SHARP_,p2__23076_SHARP_);
});})(item,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
,cljs.core.cst$kw$over,((function (item,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23077_SHARP_,p2__23078_SHARP_){
return this$.drag_over_child(p1__23077_SHARP_,p2__23078_SHARP_);
});})(item,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
,cljs.core.cst$kw$drop,((function (item,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116){
return (function (p1__23079_SHARP_){
return this$.drop(p1__23079_SHARP_);
});})(item,s__23105__$2,temp__4425__auto__,G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
], null)], null);
return (om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1 ? om_mantras.sortable.sortable_item.cljs$core$IFn$_invoke$arity$1(G__23113) : om_mantras.sortable.sortable_item.call(null,G__23113));
})(),om_mantras$sortable$iter__23104(cljs.core.rest(s__23105__$2)));
}
} else {
return null;
}
break;
}
});})(G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
,null,null));
});})(G__23102,map__23098,map__23098__$1,key_fn,element_fn,map__23099,map__23099__$1,dragging,drag_item,_STAR_reconciler_STAR_23093,_STAR_depth_STAR_23094,_STAR_shared_STAR_23095,_STAR_instrument_STAR_23096,_STAR_parent_STAR_23097,this$,x23084_23116))
;
return iter__5940__auto__((function (){var or__5168__auto__ = cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
}
})());
})();
return React.DOM.div(G__23102,G__23103);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23097;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23096;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23095;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23094;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23093;
}});})(x23084_23116))
;


om_mantras.sortable.Sortable.prototype.constructor = om_mantras.sortable.Sortable;

om_mantras.sortable.Sortable.prototype.om$isComponent = true;

var x23114_23123 = om_mantras.sortable.Sortable;


var x23115_23124 = om_mantras.sortable.Sortable.prototype;


om_mantras.sortable.Sortable.cljs$lang$type = true;

om_mantras.sortable.Sortable.cljs$lang$ctorStr = "om-mantras.sortable/Sortable";

om_mantras.sortable.Sortable.cljs$lang$ctorPrWriter = (function (this__22375__auto__,writer__22376__auto__,opt__22377__auto__){
return cljs.core._write(writer__22376__auto__,"om-mantras.sortable/Sortable");
});
om_mantras.sortable.sortable = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_mantras.sortable.Sortable);

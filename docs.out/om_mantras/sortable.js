// Compiled by ClojureScript 1.7.145 {}
goog.provide('om_mantras.sortable');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_mantras.util');
om_mantras.sortable.sortable_key = (function om_mantras$sortable$sortable_key(x){
var props = (function (){var G__24082 = x;
var G__24082__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__24082):G__24082);
return G__24082__$1;
})();
var key_fn = new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(key_fn)){
return key_fn.call(null,new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(props));
} else {
return new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(props);
}
});
/**
 * @constructor
 */
om_mantras.sortable.SortableItem = (function om_mantras$sortable$SortableItem(){
var this__13596__auto__ = this;
React.Component.apply(this__13596__auto__,arguments);

if(!((this__13596__auto__.getInitialState == null))){
this__13596__auto__.state = this__13596__auto__.getInitialState();
} else {
this__13596__auto__.state = {};
}

return this__13596__auto__;
});

om_mantras.sortable.SortableItem.prototype = goog.object.clone(React.Component.prototype);

var x24092_24108 = om_mantras.sortable.SortableItem.prototype;
x24092_24108.componentWillUpdate = ((function (x24092_24108){
return (function (next_props__13537__auto__,next_state__13538__auto__){
var this__13536__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__13536__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__13536__auto__);
});})(x24092_24108))
;

x24092_24108.shouldComponentUpdate = ((function (x24092_24108){
return (function (next_props__13537__auto__,next_state__13538__auto__){
var this__13536__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__13536__auto__),goog.object.get(next_props__13537__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__13536__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__13536__auto__.state,"omcljs$state"),goog.object.get(next_state__13538__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x24092_24108))
;

x24092_24108.componentWillUnmount = ((function (x24092_24108){
return (function (){
var this__13536__auto__ = this;
var r__13542__auto__ = om.next.get_reconciler.call(null,this__13536__auto__);
var cfg__13543__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__13542__auto__);
var st__13544__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__13543__auto__);
var indexer__13541__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__13543__auto__);
if((st__13544__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__13544__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__13536__auto__);
}

if((indexer__13541__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__13541__auto__,this__13536__auto__);
}
});})(x24092_24108))
;

x24092_24108.componentDidUpdate = ((function (x24092_24108){
return (function (prev_props__13539__auto__,prev_state__13540__auto__){
var this__13536__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__13536__auto__);
});})(x24092_24108))
;

x24092_24108.isMounted = ((function (x24092_24108){
return (function (){
var this__13536__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__13536__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24092_24108))
;

x24092_24108.componentWillMount = ((function (x24092_24108){
return (function (){
var this__13536__auto__ = this;
var indexer__13541__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__13536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__13541__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__13541__auto__,this__13536__auto__);
}
});})(x24092_24108))
;

x24092_24108.render = ((function (x24092_24108){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24093 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24094 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24095 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24096 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24097 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24098 = om.next.props.call(null,this$);
var map__24098__$1 = ((((!((map__24098 == null)))?((((map__24098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24098):map__24098);
var item = cljs.core.get.call(null,map__24098__$1,new cljs.core.Keyword(null,"item","item",249373802));
var dragged = cljs.core.get.call(null,map__24098__$1,new cljs.core.Keyword(null,"dragged","dragged",208354265));
var element_fn = cljs.core.get.call(null,map__24098__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var drag_fns = cljs.core.get.call(null,map__24098__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
return React.DOM.div({"className": [cljs.core.str("sortable-item"),cljs.core.str((cljs.core.truth_(dragged)?" sortable-item-dragged":null))].join(''), "draggable": true, "onDragStart": ((function (map__24098,map__24098__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_24093,_STAR_depth_STAR_24094,_STAR_shared_STAR_24095,_STAR_instrument_STAR_24096,_STAR_parent_STAR_24097,this$,x24092_24108){
return (function (p1__24083_SHARP_){
var G__24100 = drag_fns;
var G__24100__$1 = (((G__24100 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__24100));
var G__24100__$2 = (((G__24100__$1 == null))?null:cljs.core.apply.call(null,G__24100__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24083_SHARP_,this$], null)));
return G__24100__$2;
});})(map__24098,map__24098__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_24093,_STAR_depth_STAR_24094,_STAR_shared_STAR_24095,_STAR_instrument_STAR_24096,_STAR_parent_STAR_24097,this$,x24092_24108))
, "onDrag": ((function (map__24098,map__24098__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_24093,_STAR_depth_STAR_24094,_STAR_shared_STAR_24095,_STAR_instrument_STAR_24096,_STAR_parent_STAR_24097,this$,x24092_24108){
return (function (p1__24084_SHARP_){
var G__24101 = drag_fns;
var G__24101__$1 = (((G__24101 == null))?null:new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(G__24101));
var G__24101__$2 = (((G__24101__$1 == null))?null:cljs.core.apply.call(null,G__24101__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24084_SHARP_,this$], null)));
return G__24101__$2;
});})(map__24098,map__24098__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_24093,_STAR_depth_STAR_24094,_STAR_shared_STAR_24095,_STAR_instrument_STAR_24096,_STAR_parent_STAR_24097,this$,x24092_24108))
, "onDragEnd": ((function (map__24098,map__24098__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_24093,_STAR_depth_STAR_24094,_STAR_shared_STAR_24095,_STAR_instrument_STAR_24096,_STAR_parent_STAR_24097,this$,x24092_24108){
return (function (p1__24085_SHARP_){
var G__24102 = drag_fns;
var G__24102__$1 = (((G__24102 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__24102));
var G__24102__$2 = (((G__24102__$1 == null))?null:cljs.core.apply.call(null,G__24102__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24085_SHARP_,this$], null)));
return G__24102__$2;
});})(map__24098,map__24098__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_24093,_STAR_depth_STAR_24094,_STAR_shared_STAR_24095,_STAR_instrument_STAR_24096,_STAR_parent_STAR_24097,this$,x24092_24108))
, "onDragOver": ((function (map__24098,map__24098__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_24093,_STAR_depth_STAR_24094,_STAR_shared_STAR_24095,_STAR_instrument_STAR_24096,_STAR_parent_STAR_24097,this$,x24092_24108){
return (function (p1__24086_SHARP_){
var G__24103 = drag_fns;
var G__24103__$1 = (((G__24103 == null))?null:new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(G__24103));
var G__24103__$2 = (((G__24103__$1 == null))?null:cljs.core.apply.call(null,G__24103__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24086_SHARP_,this$], null)));
return G__24103__$2;
});})(map__24098,map__24098__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_24093,_STAR_depth_STAR_24094,_STAR_shared_STAR_24095,_STAR_instrument_STAR_24096,_STAR_parent_STAR_24097,this$,x24092_24108))
, "onDrop": ((function (map__24098,map__24098__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_24093,_STAR_depth_STAR_24094,_STAR_shared_STAR_24095,_STAR_instrument_STAR_24096,_STAR_parent_STAR_24097,this$,x24092_24108){
return (function (p1__24087_SHARP_){
var G__24104 = drag_fns;
var G__24104__$1 = (((G__24104 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__24104));
var G__24104__$2 = (((G__24104__$1 == null))?null:cljs.core.apply.call(null,G__24104__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24087_SHARP_,this$], null)));
return G__24104__$2;
});})(map__24098,map__24098__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_24093,_STAR_depth_STAR_24094,_STAR_shared_STAR_24095,_STAR_instrument_STAR_24096,_STAR_parent_STAR_24097,this$,x24092_24108))
},(function (){var G__24105 = item;
var G__24105__$1 = (cljs.core.truth_(element_fn)?element_fn.call(null,G__24105):G__24105);
return G__24105__$1;
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24097;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24096;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24095;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24094;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24093;
}});})(x24092_24108))
;


om_mantras.sortable.SortableItem.prototype.constructor = om_mantras.sortable.SortableItem;

om_mantras.sortable.SortableItem.prototype.om$isComponent = true;

var x24106_24109 = om_mantras.sortable.SortableItem;


var x24107_24110 = om_mantras.sortable.SortableItem.prototype;


om_mantras.sortable.SortableItem.cljs$lang$type = true;

om_mantras.sortable.SortableItem.cljs$lang$ctorStr = "om-mantras.sortable/SortableItem";

om_mantras.sortable.SortableItem.cljs$lang$ctorPrWriter = (function (this__13598__auto__,writer__13599__auto__,opt__13600__auto__){
return cljs.core._write.call(null,writer__13599__auto__,"om-mantras.sortable/SortableItem");
});
om_mantras.sortable.sortable_item = om.next.factory.call(null,om_mantras.sortable.SortableItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),om_mantras.sortable.sortable_key], null));
/**
 * @constructor
 */
om_mantras.sortable.Sortable = (function om_mantras$sortable$Sortable(){
var this__13596__auto__ = this;
React.Component.apply(this__13596__auto__,arguments);

if(!((this__13596__auto__.getInitialState == null))){
this__13596__auto__.state = this__13596__auto__.getInitialState();
} else {
this__13596__auto__.state = {};
}

return this__13596__auto__;
});

om_mantras.sortable.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x24127_24147 = om_mantras.sortable.Sortable.prototype;
x24127_24147.componentWillUpdate = ((function (x24127_24147){
return (function (next_props__13537__auto__,next_state__13538__auto__){
var this__13536__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__13536__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__13536__auto__);
});})(x24127_24147))
;

x24127_24147.shouldComponentUpdate = ((function (x24127_24147){
return (function (next_props__13537__auto__,next_state__13538__auto__){
var this__13536__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__13536__auto__),goog.object.get(next_props__13537__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__13536__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__13536__auto__.state,"omcljs$state"),goog.object.get(next_state__13538__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x24127_24147))
;

x24127_24147.componentWillUnmount = ((function (x24127_24147){
return (function (){
var this__13536__auto__ = this;
var r__13542__auto__ = om.next.get_reconciler.call(null,this__13536__auto__);
var cfg__13543__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__13542__auto__);
var st__13544__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__13543__auto__);
var indexer__13541__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__13543__auto__);
if((st__13544__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__13544__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__13536__auto__);
}

if((indexer__13541__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__13541__auto__,this__13536__auto__);
}
});})(x24127_24147))
;

x24127_24147.componentDidUpdate = ((function (x24127_24147){
return (function (prev_props__13539__auto__,prev_state__13540__auto__){
var this__13536__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__13536__auto__);
});})(x24127_24147))
;

x24127_24147.isMounted = ((function (x24127_24147){
return (function (){
var this__13536__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__13536__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24127_24147))
;

x24127_24147.componentWillMount = ((function (x24127_24147){
return (function (){
var this__13536__auto__ = this;
var indexer__13541__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__13536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__13541__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__13541__auto__,this__13536__auto__);
}
});})(x24127_24147))
;

x24127_24147.drag_start = ((function (x24127_24147){
return (function (e,child){
var this$ = this;
e.dataTransfer.setData("text/plain",om_mantras.sortable.sortable_key.call(null,child));

var item = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,child));
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047),item);
});})(x24127_24147))
;

x24127_24147.drag = ((function (x24127_24147){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
});})(x24127_24147))
;

x24127_24147.drag_over = ((function (x24127_24147){
return (function (e){
var this$ = this;
e.dataTransfer.dropEffect = "move";

return e.preventDefault();
});})(x24127_24147))
;

x24127_24147.reorder_items = ((function (x24127_24147){
return (function (drag_item,target_item,after_QMARK_,items){
var this$ = this;
return ((function (this$,x24127_24147){
return (function (p__24128){
var vec__24129 = p__24128;
var before = cljs.core.nth.call(null,vec__24129,(0),null);
var after = cljs.core.nth.call(null,vec__24129,(1),null);
return cljs.core.concat.call(null,before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_item], null),after);
});})(this$,x24127_24147))
.call(null,cljs.core.map.call(null,((function (this$,x24127_24147){
return (function (p1__24111_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([drag_item], true),p1__24111_SHARP_);
});})(this$,x24127_24147))
,cljs.core.split_at.call(null,(function (){var G__24130 = om_mantras.util.index_of.call(null,target_item,items);
var G__24130__$1 = (cljs.core.truth_(after_QMARK_)?(G__24130 + (1)):G__24130);
return G__24130__$1;
})(),items)));
});})(x24127_24147))
;

x24127_24147.drag_over_child = ((function (x24127_24147){
return (function (e,child){
var this$ = this;
e.dataTransfer.dropEffect = "move";

e.preventDefault();

var drag_item = new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
var target_item = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,child));
if(cljs.core.truth_((function (){var and__5082__auto__ = drag_item;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,drag_item,target_item);
} else {
return and__5082__auto__;
}
})())){
var x = e.clientX;
var y = e.clientY;
var rect = om.dom.node.call(null,child).getBoundingClientRect();
var center_x = ((rect.left + rect.right) / (2));
var center_y = ((rect.top + rect.bottom) / (2));
var after_QMARK_ = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)),new cljs.core.Keyword(null,"horizontal","horizontal",2062109475)))?(x >= center_x):(y >= center_y));
var items = (function (){var or__5094__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
}
})();
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),this$.reorder_items(drag_item,target_item,after_QMARK_,items));
} else {
return null;
}
});})(x24127_24147))
;

x24127_24147.drag_end = ((function (x24127_24147){
return (function (e,child){
var this$ = this;
e.preventDefault();

var items_24148 = (function (){var or__5094__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
}
})();
var G__24131_24149 = this$;
var G__24131_24150__$1 = (((G__24131_24149 == null))?null:om.next.props.call(null,G__24131_24149));
var G__24131_24151__$2 = (((G__24131_24150__$1 == null))?null:new cljs.core.Keyword(null,"change-fn","change-fn",1566440825).cljs$core$IFn$_invoke$arity$1(G__24131_24150__$1));
var G__24131_24152__$3 = (((G__24131_24151__$2 == null))?null:cljs.core.apply.call(null,G__24131_24151__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_24148], null)));

return om.next.update_state_BANG_.call(null,this$,((function (this$,x24127_24147){
return (function (state){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047)),new cljs.core.Keyword(null,"dragging","dragging",1185097613));
});})(this$,x24127_24147))
);
});})(x24127_24147))
;

x24127_24147.drop = ((function (x24127_24147){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x24127_24147))
;

x24127_24147.componentWillReceiveProps = ((function (x24127_24147){
return (function (new_props){
var this$ = this;
var new_props__$1 = om.next._next_props.call(null,new_props,this$);
return om.next.update_state_BANG_.call(null,this$,((function (new_props__$1,this$,x24127_24147){
return (function (state){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"items","items",1031954938)),new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047)),new cljs.core.Keyword(null,"dragging","dragging",1185097613));
});})(new_props__$1,this$,x24127_24147))
);
});})(x24127_24147))
;

x24127_24147.render = ((function (x24127_24147){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24132 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24133 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24134 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24135 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24136 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24137 = om.next.props.call(null,this$);
var map__24137__$1 = ((((!((map__24137 == null)))?((((map__24137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24137):map__24137);
var key_fn = cljs.core.get.call(null,map__24137__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__24137__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var map__24138 = om.next.get_state.call(null,this$);
var map__24138__$1 = ((((!((map__24138 == null)))?((((map__24138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24138):map__24138);
var dragging = cljs.core.get.call(null,map__24138__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_item = cljs.core.get.call(null,map__24138__$1,new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047));
return React.DOM.div({"className": "sortable", "dragOver": ((function (map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24112_SHARP_){
return this$.drag_over(p1__24112_SHARP_);
});})(map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
, "drop": ((function (map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24113_SHARP_){
return this$.drop(p1__24113_SHARP_);
});})(map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
},(function (){var iter__5866__auto__ = ((function (map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function om_mantras$sortable$iter__24141(s__24142){
return (new cljs.core.LazySeq(null,((function (map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (){
var s__24142__$1 = s__24142;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24142__$1);
if(temp__4425__auto__){
var s__24142__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24142__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__24142__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__24144 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__24143 = (0);
while(true){
if((i__24143 < size__5865__auto__)){
var item = cljs.core._nth.call(null,c__5864__auto__,i__24143);
cljs.core.chunk_append.call(null,b__24144,om_mantras.sortable.sortable_item.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"dragged","dragged",208354265),(function (){var and__5082__auto__ = dragging;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = drag_item;
if(cljs.core.truth_(and__5082__auto____$1)){
return cljs.core._EQ_.call(null,item,drag_item);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__24143,item,c__5864__auto__,size__5865__auto__,b__24144,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24114_SHARP_,p2__24115_SHARP_){
return this$.drag_start(p1__24114_SHARP_,p2__24115_SHARP_);
});})(i__24143,item,c__5864__auto__,size__5865__auto__,b__24144,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (i__24143,item,c__5864__auto__,size__5865__auto__,b__24144,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24116_SHARP_,p2__24117_SHARP_){
return this$.drag(p1__24116_SHARP_,p2__24117_SHARP_);
});})(i__24143,item,c__5864__auto__,size__5865__auto__,b__24144,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__24143,item,c__5864__auto__,size__5865__auto__,b__24144,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24118_SHARP_,p2__24119_SHARP_){
return this$.drag_end(p1__24118_SHARP_,p2__24119_SHARP_);
});})(i__24143,item,c__5864__auto__,size__5865__auto__,b__24144,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
,new cljs.core.Keyword(null,"over","over",192553051),((function (i__24143,item,c__5864__auto__,size__5865__auto__,b__24144,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24120_SHARP_,p2__24121_SHARP_){
return this$.drag_over_child(p1__24120_SHARP_,p2__24121_SHARP_);
});})(i__24143,item,c__5864__auto__,size__5865__auto__,b__24144,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__24143,item,c__5864__auto__,size__5865__auto__,b__24144,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24122_SHARP_){
return this$.drop(p1__24122_SHARP_);
});})(i__24143,item,c__5864__auto__,size__5865__auto__,b__24144,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
], null)], null)));

var G__24153 = (i__24143 + (1));
i__24143 = G__24153;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24144),om_mantras$sortable$iter__24141.call(null,cljs.core.chunk_rest.call(null,s__24142__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24144),null);
}
} else {
var item = cljs.core.first.call(null,s__24142__$2);
return cljs.core.cons.call(null,om_mantras.sortable.sortable_item.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"dragged","dragged",208354265),(function (){var and__5082__auto__ = dragging;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = drag_item;
if(cljs.core.truth_(and__5082__auto____$1)){
return cljs.core._EQ_.call(null,item,drag_item);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (item,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24114_SHARP_,p2__24115_SHARP_){
return this$.drag_start(p1__24114_SHARP_,p2__24115_SHARP_);
});})(item,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (item,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24116_SHARP_,p2__24117_SHARP_){
return this$.drag(p1__24116_SHARP_,p2__24117_SHARP_);
});})(item,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (item,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24118_SHARP_,p2__24119_SHARP_){
return this$.drag_end(p1__24118_SHARP_,p2__24119_SHARP_);
});})(item,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
,new cljs.core.Keyword(null,"over","over",192553051),((function (item,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24120_SHARP_,p2__24121_SHARP_){
return this$.drag_over_child(p1__24120_SHARP_,p2__24121_SHARP_);
});})(item,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (item,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147){
return (function (p1__24122_SHARP_){
return this$.drop(p1__24122_SHARP_);
});})(item,s__24142__$2,temp__4425__auto__,map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
], null)], null)),om_mantras$sortable$iter__24141.call(null,cljs.core.rest.call(null,s__24142__$2)));
}
} else {
return null;
}
break;
}
});})(map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
,null,null));
});})(map__24137,map__24137__$1,key_fn,element_fn,map__24138,map__24138__$1,dragging,drag_item,_STAR_reconciler_STAR_24132,_STAR_depth_STAR_24133,_STAR_shared_STAR_24134,_STAR_instrument_STAR_24135,_STAR_parent_STAR_24136,this$,x24127_24147))
;
return iter__5866__auto__.call(null,(function (){var or__5094__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
}
})());
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24136;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24135;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24134;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24133;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24132;
}});})(x24127_24147))
;


om_mantras.sortable.Sortable.prototype.constructor = om_mantras.sortable.Sortable;

om_mantras.sortable.Sortable.prototype.om$isComponent = true;

var x24145_24154 = om_mantras.sortable.Sortable;


var x24146_24155 = om_mantras.sortable.Sortable.prototype;


om_mantras.sortable.Sortable.cljs$lang$type = true;

om_mantras.sortable.Sortable.cljs$lang$ctorStr = "om-mantras.sortable/Sortable";

om_mantras.sortable.Sortable.cljs$lang$ctorPrWriter = (function (this__13598__auto__,writer__13599__auto__,opt__13600__auto__){
return cljs.core._write.call(null,writer__13599__auto__,"om-mantras.sortable/Sortable");
});
om_mantras.sortable.sortable = om.next.factory.call(null,om_mantras.sortable.Sortable);

//# sourceMappingURL=sortable.js.map
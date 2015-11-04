// Compiled by ClojureScript 1.7.145 {}
goog.provide('om_mantras.sortable');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_mantras.util');
om_mantras.sortable.sortable_key = (function om_mantras$sortable$sortable_key(x){
var props = (function (){var G__28814 = x;
var G__28814__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__28814):G__28814);
return G__28814__$1;
})();
var key_fn = new cljs.core.Keyword(null,"key-fn","key-fn",-636154479).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(key_fn)){
return key_fn.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(props)], null));
} else {
return new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(props);
}
});
/**
 * @constructor
 */
om_mantras.sortable.SortableItem = (function om_mantras$sortable$SortableItem(){
var this__13594__auto__ = this;
React.Component.apply(this__13594__auto__,arguments);

if(!((this__13594__auto__.getInitialState == null))){
this__13594__auto__.state = this__13594__auto__.getInitialState();
} else {
this__13594__auto__.state = {};
}

return this__13594__auto__;
});

om_mantras.sortable.SortableItem.prototype = goog.object.clone(React.Component.prototype);

var x28824_28840 = om_mantras.sortable.SortableItem.prototype;
x28824_28840.componentWillUpdate = ((function (x28824_28840){
return (function (next_props__13535__auto__,next_state__13536__auto__){
var this__13534__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__13534__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__13534__auto__);
});})(x28824_28840))
;

x28824_28840.shouldComponentUpdate = ((function (x28824_28840){
return (function (next_props__13535__auto__,next_state__13536__auto__){
var this__13534__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__13534__auto__),goog.object.get(next_props__13535__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__13534__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__13534__auto__.state,"omcljs$state"),goog.object.get(next_state__13536__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x28824_28840))
;

x28824_28840.componentWillUnmount = ((function (x28824_28840){
return (function (){
var this__13534__auto__ = this;
var r__13540__auto__ = om.next.get_reconciler.call(null,this__13534__auto__);
var cfg__13541__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__13540__auto__);
var st__13542__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__13541__auto__);
var indexer__13539__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__13541__auto__);
if((st__13542__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__13542__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__13534__auto__);
}

if((indexer__13539__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__13539__auto__,this__13534__auto__);
}
});})(x28824_28840))
;

x28824_28840.componentDidUpdate = ((function (x28824_28840){
return (function (prev_props__13537__auto__,prev_state__13538__auto__){
var this__13534__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__13534__auto__);
});})(x28824_28840))
;

x28824_28840.isMounted = ((function (x28824_28840){
return (function (){
var this__13534__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__13534__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28824_28840))
;

x28824_28840.componentWillMount = ((function (x28824_28840){
return (function (){
var this__13534__auto__ = this;
var indexer__13539__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__13534__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__13539__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__13539__auto__,this__13534__auto__);
}
});})(x28824_28840))
;

x28824_28840.render = ((function (x28824_28840){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_28825 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28826 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28827 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28828 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28829 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__28830 = om.next.props.call(null,this$);
var map__28830__$1 = ((((!((map__28830 == null)))?((((map__28830.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28830.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28830):map__28830);
var item = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"item","item",249373802));
var dragged = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"dragged","dragged",208354265));
var element_fn = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var drag_fns = cljs.core.get.call(null,map__28830__$1,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761));
return React.DOM.div({"className": [cljs.core.str("sortable-item"),cljs.core.str((cljs.core.truth_(dragged)?" sortable-item-dragged":null))].join(''), "draggable": true, "onDragStart": ((function (map__28830,map__28830__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_28825,_STAR_depth_STAR_28826,_STAR_shared_STAR_28827,_STAR_instrument_STAR_28828,_STAR_parent_STAR_28829,this$,x28824_28840){
return (function (p1__28815_SHARP_){
var G__28832 = drag_fns;
var G__28832__$1 = (((G__28832 == null))?null:new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(G__28832));
var G__28832__$2 = (((G__28832__$1 == null))?null:cljs.core.apply.call(null,G__28832__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28815_SHARP_,this$], null)));
return G__28832__$2;
});})(map__28830,map__28830__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_28825,_STAR_depth_STAR_28826,_STAR_shared_STAR_28827,_STAR_instrument_STAR_28828,_STAR_parent_STAR_28829,this$,x28824_28840))
, "onDrag": ((function (map__28830,map__28830__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_28825,_STAR_depth_STAR_28826,_STAR_shared_STAR_28827,_STAR_instrument_STAR_28828,_STAR_parent_STAR_28829,this$,x28824_28840){
return (function (p1__28816_SHARP_){
var G__28833 = drag_fns;
var G__28833__$1 = (((G__28833 == null))?null:new cljs.core.Keyword(null,"drag","drag",449951290).cljs$core$IFn$_invoke$arity$1(G__28833));
var G__28833__$2 = (((G__28833__$1 == null))?null:cljs.core.apply.call(null,G__28833__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28816_SHARP_,this$], null)));
return G__28833__$2;
});})(map__28830,map__28830__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_28825,_STAR_depth_STAR_28826,_STAR_shared_STAR_28827,_STAR_instrument_STAR_28828,_STAR_parent_STAR_28829,this$,x28824_28840))
, "onDragEnd": ((function (map__28830,map__28830__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_28825,_STAR_depth_STAR_28826,_STAR_shared_STAR_28827,_STAR_instrument_STAR_28828,_STAR_parent_STAR_28829,this$,x28824_28840){
return (function (p1__28817_SHARP_){
var G__28834 = drag_fns;
var G__28834__$1 = (((G__28834 == null))?null:new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(G__28834));
var G__28834__$2 = (((G__28834__$1 == null))?null:cljs.core.apply.call(null,G__28834__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28817_SHARP_,this$], null)));
return G__28834__$2;
});})(map__28830,map__28830__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_28825,_STAR_depth_STAR_28826,_STAR_shared_STAR_28827,_STAR_instrument_STAR_28828,_STAR_parent_STAR_28829,this$,x28824_28840))
, "onDragOver": ((function (map__28830,map__28830__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_28825,_STAR_depth_STAR_28826,_STAR_shared_STAR_28827,_STAR_instrument_STAR_28828,_STAR_parent_STAR_28829,this$,x28824_28840){
return (function (p1__28818_SHARP_){
var G__28835 = drag_fns;
var G__28835__$1 = (((G__28835 == null))?null:new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(G__28835));
var G__28835__$2 = (((G__28835__$1 == null))?null:cljs.core.apply.call(null,G__28835__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28818_SHARP_,this$], null)));
return G__28835__$2;
});})(map__28830,map__28830__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_28825,_STAR_depth_STAR_28826,_STAR_shared_STAR_28827,_STAR_instrument_STAR_28828,_STAR_parent_STAR_28829,this$,x28824_28840))
, "onDrop": ((function (map__28830,map__28830__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_28825,_STAR_depth_STAR_28826,_STAR_shared_STAR_28827,_STAR_instrument_STAR_28828,_STAR_parent_STAR_28829,this$,x28824_28840){
return (function (p1__28819_SHARP_){
var G__28836 = drag_fns;
var G__28836__$1 = (((G__28836 == null))?null:new cljs.core.Keyword(null,"drop","drop",364481611).cljs$core$IFn$_invoke$arity$1(G__28836));
var G__28836__$2 = (((G__28836__$1 == null))?null:cljs.core.apply.call(null,G__28836__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28819_SHARP_,this$], null)));
return G__28836__$2;
});})(map__28830,map__28830__$1,item,dragged,element_fn,drag_fns,_STAR_reconciler_STAR_28825,_STAR_depth_STAR_28826,_STAR_shared_STAR_28827,_STAR_instrument_STAR_28828,_STAR_parent_STAR_28829,this$,x28824_28840))
},(function (){var G__28837 = item;
var G__28837__$1 = (cljs.core.truth_(element_fn)?element_fn.call(null,G__28837):G__28837);
return G__28837__$1;
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28829;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28828;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28827;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28826;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28825;
}});})(x28824_28840))
;


om_mantras.sortable.SortableItem.prototype.constructor = om_mantras.sortable.SortableItem;

om_mantras.sortable.SortableItem.prototype.om$isComponent = true;

var x28838_28841 = om_mantras.sortable.SortableItem;


var x28839_28842 = om_mantras.sortable.SortableItem.prototype;


om_mantras.sortable.SortableItem.cljs$lang$type = true;

om_mantras.sortable.SortableItem.cljs$lang$ctorStr = "om-mantras.sortable/SortableItem";

om_mantras.sortable.SortableItem.cljs$lang$ctorPrWriter = (function (this__13596__auto__,writer__13597__auto__,opt__13598__auto__){
return cljs.core._write.call(null,writer__13597__auto__,"om-mantras.sortable/SortableItem");
});
om_mantras.sortable.sortable_item = om.next.factory.call(null,om_mantras.sortable.SortableItem,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),om_mantras.sortable.sortable_key], null));
/**
 * @constructor
 */
om_mantras.sortable.Sortable = (function om_mantras$sortable$Sortable(){
var this__13594__auto__ = this;
React.Component.apply(this__13594__auto__,arguments);

if(!((this__13594__auto__.getInitialState == null))){
this__13594__auto__.state = this__13594__auto__.getInitialState();
} else {
this__13594__auto__.state = {};
}

return this__13594__auto__;
});

om_mantras.sortable.Sortable.prototype = goog.object.clone(React.Component.prototype);

var x28859_28879 = om_mantras.sortable.Sortable.prototype;
x28859_28879.componentWillUpdate = ((function (x28859_28879){
return (function (next_props__13535__auto__,next_state__13536__auto__){
var this__13534__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__13534__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__13534__auto__);
});})(x28859_28879))
;

x28859_28879.shouldComponentUpdate = ((function (x28859_28879){
return (function (next_props__13535__auto__,next_state__13536__auto__){
var this__13534__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__13534__auto__),goog.object.get(next_props__13535__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__13534__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__13534__auto__.state,"omcljs$state"),goog.object.get(next_state__13536__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x28859_28879))
;

x28859_28879.componentWillUnmount = ((function (x28859_28879){
return (function (){
var this__13534__auto__ = this;
var r__13540__auto__ = om.next.get_reconciler.call(null,this__13534__auto__);
var cfg__13541__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__13540__auto__);
var st__13542__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__13541__auto__);
var indexer__13539__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__13541__auto__);
if((st__13542__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__13542__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__13534__auto__);
}

if((indexer__13539__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__13539__auto__,this__13534__auto__);
}
});})(x28859_28879))
;

x28859_28879.componentDidUpdate = ((function (x28859_28879){
return (function (prev_props__13537__auto__,prev_state__13538__auto__){
var this__13534__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__13534__auto__);
});})(x28859_28879))
;

x28859_28879.isMounted = ((function (x28859_28879){
return (function (){
var this__13534__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__13534__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28859_28879))
;

x28859_28879.componentWillMount = ((function (x28859_28879){
return (function (){
var this__13534__auto__ = this;
var indexer__13539__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__13534__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__13539__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__13539__auto__,this__13534__auto__);
}
});})(x28859_28879))
;

x28859_28879.drag_start = ((function (x28859_28879){
return (function (e,child){
var this$ = this;
e.dataTransfer.setData("text/plain",om_mantras.sortable.sortable_key.call(null,child));

var item = new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,child));
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047),item);
});})(x28859_28879))
;

x28859_28879.drag = ((function (x28859_28879){
return (function (e,child){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"dragging","dragging",1185097613),true);
});})(x28859_28879))
;

x28859_28879.drag_over = ((function (x28859_28879){
return (function (e){
var this$ = this;
e.dataTransfer.dropEffect = "move";

return e.preventDefault();
});})(x28859_28879))
;

x28859_28879.reorder_items = ((function (x28859_28879){
return (function (drag_item,target_item,after_QMARK_,items){
var this$ = this;
return ((function (this$,x28859_28879){
return (function (p__28860){
var vec__28861 = p__28860;
var before = cljs.core.nth.call(null,vec__28861,(0),null);
var after = cljs.core.nth.call(null,vec__28861,(1),null);
return cljs.core.concat.call(null,before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [drag_item], null),after);
});})(this$,x28859_28879))
.call(null,cljs.core.map.call(null,((function (this$,x28859_28879){
return (function (p1__28843_SHARP_){
return cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([drag_item], true),p1__28843_SHARP_);
});})(this$,x28859_28879))
,cljs.core.split_at.call(null,(function (){var G__28862 = om_mantras.util.index_of.call(null,target_item,items);
var G__28862__$1 = (cljs.core.truth_(after_QMARK_)?(G__28862 + (1)):G__28862);
return G__28862__$1;
})(),items)));
});})(x28859_28879))
;

x28859_28879.drag_over_child = ((function (x28859_28879){
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
});})(x28859_28879))
;

x28859_28879.drag_end = ((function (x28859_28879){
return (function (e,child){
var this$ = this;
e.preventDefault();

var items_28880 = (function (){var or__5094__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
}
})();
var G__28863_28881 = this$;
var G__28863_28882__$1 = (((G__28863_28881 == null))?null:om.next.props.call(null,G__28863_28881));
var G__28863_28883__$2 = (((G__28863_28882__$1 == null))?null:new cljs.core.Keyword(null,"change-fn","change-fn",1566440825).cljs$core$IFn$_invoke$arity$1(G__28863_28882__$1));
var G__28863_28884__$3 = (((G__28863_28883__$2 == null))?null:cljs.core.apply.call(null,G__28863_28883__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items_28880], null)));

return om.next.update_state_BANG_.call(null,this$,((function (this$,x28859_28879){
return (function (state){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047)),new cljs.core.Keyword(null,"dragging","dragging",1185097613));
});})(this$,x28859_28879))
);
});})(x28859_28879))
;

x28859_28879.drop = ((function (x28859_28879){
return (function (e){
var this$ = this;
return e.preventDefault();
});})(x28859_28879))
;

x28859_28879.componentWillReceiveProps = ((function (x28859_28879){
return (function (new_props){
var this$ = this;
var new_props__$1 = om.next._next_props.call(null,new_props,this$);
return om.next.update_state_BANG_.call(null,this$,((function (new_props__$1,this$,x28859_28879){
return (function (state){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"items","items",1031954938)),new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047)),new cljs.core.Keyword(null,"dragging","dragging",1185097613));
});})(new_props__$1,this$,x28859_28879))
);
});})(x28859_28879))
;

x28859_28879.render = ((function (x28859_28879){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_28864 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28865 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28866 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28867 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28868 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__28869 = om.next.props.call(null,this$);
var map__28869__$1 = ((((!((map__28869 == null)))?((((map__28869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28869):map__28869);
var key_fn = cljs.core.get.call(null,map__28869__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__28869__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var map__28870 = om.next.get_state.call(null,this$);
var map__28870__$1 = ((((!((map__28870 == null)))?((((map__28870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28870):map__28870);
var dragging = cljs.core.get.call(null,map__28870__$1,new cljs.core.Keyword(null,"dragging","dragging",1185097613));
var drag_item = cljs.core.get.call(null,map__28870__$1,new cljs.core.Keyword(null,"drag-item","drag-item",-1283948047));
return React.DOM.div({"className": "sortable", "dragOver": ((function (map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28844_SHARP_){
return this$.drag_over(p1__28844_SHARP_);
});})(map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
, "drop": ((function (map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28845_SHARP_){
return this$.drop(p1__28845_SHARP_);
});})(map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
},(function (){var iter__5866__auto__ = ((function (map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function om_mantras$sortable$iter__28873(s__28874){
return (new cljs.core.LazySeq(null,((function (map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (){
var s__28874__$1 = s__28874;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28874__$1);
if(temp__4425__auto__){
var s__28874__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28874__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__28874__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__28876 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__28875 = (0);
while(true){
if((i__28875 < size__5865__auto__)){
var item = cljs.core._nth.call(null,c__5864__auto__,i__28875);
cljs.core.chunk_append.call(null,b__28876,om_mantras.sortable.sortable_item.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"item","item",249373802),item,new cljs.core.Keyword(null,"dragged","dragged",208354265),(function (){var and__5082__auto__ = dragging;
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
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (i__28875,item,c__5864__auto__,size__5865__auto__,b__28876,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28846_SHARP_,p2__28847_SHARP_){
return this$.drag_start(p1__28846_SHARP_,p2__28847_SHARP_);
});})(i__28875,item,c__5864__auto__,size__5865__auto__,b__28876,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (i__28875,item,c__5864__auto__,size__5865__auto__,b__28876,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28848_SHARP_,p2__28849_SHARP_){
return this$.drag(p1__28848_SHARP_,p2__28849_SHARP_);
});})(i__28875,item,c__5864__auto__,size__5865__auto__,b__28876,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (i__28875,item,c__5864__auto__,size__5865__auto__,b__28876,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28850_SHARP_,p2__28851_SHARP_){
return this$.drag_end(p1__28850_SHARP_,p2__28851_SHARP_);
});})(i__28875,item,c__5864__auto__,size__5865__auto__,b__28876,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
,new cljs.core.Keyword(null,"over","over",192553051),((function (i__28875,item,c__5864__auto__,size__5865__auto__,b__28876,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28852_SHARP_,p2__28853_SHARP_){
return this$.drag_over_child(p1__28852_SHARP_,p2__28853_SHARP_);
});})(i__28875,item,c__5864__auto__,size__5865__auto__,b__28876,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (i__28875,item,c__5864__auto__,size__5865__auto__,b__28876,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28854_SHARP_){
return this$.drop(p1__28854_SHARP_);
});})(i__28875,item,c__5864__auto__,size__5865__auto__,b__28876,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
], null)], null)));

var G__28885 = (i__28875 + (1));
i__28875 = G__28885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28876),om_mantras$sortable$iter__28873.call(null,cljs.core.chunk_rest.call(null,s__28874__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28876),null);
}
} else {
var item = cljs.core.first.call(null,s__28874__$2);
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
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"element-fn","element-fn",554034748),element_fn,new cljs.core.Keyword(null,"drag-fns","drag-fns",133281761),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"start","start",-355208981),((function (item,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28846_SHARP_,p2__28847_SHARP_){
return this$.drag_start(p1__28846_SHARP_,p2__28847_SHARP_);
});})(item,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
,new cljs.core.Keyword(null,"drag","drag",449951290),((function (item,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28848_SHARP_,p2__28849_SHARP_){
return this$.drag(p1__28848_SHARP_,p2__28849_SHARP_);
});})(item,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
,new cljs.core.Keyword(null,"end","end",-268185958),((function (item,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28850_SHARP_,p2__28851_SHARP_){
return this$.drag_end(p1__28850_SHARP_,p2__28851_SHARP_);
});})(item,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
,new cljs.core.Keyword(null,"over","over",192553051),((function (item,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28852_SHARP_,p2__28853_SHARP_){
return this$.drag_over_child(p1__28852_SHARP_,p2__28853_SHARP_);
});})(item,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
,new cljs.core.Keyword(null,"drop","drop",364481611),((function (item,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879){
return (function (p1__28854_SHARP_){
return this$.drop(p1__28854_SHARP_);
});})(item,s__28874__$2,temp__4425__auto__,map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
], null)], null)),om_mantras$sortable$iter__28873.call(null,cljs.core.rest.call(null,s__28874__$2)));
}
} else {
return null;
}
break;
}
});})(map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
,null,null));
});})(map__28869,map__28869__$1,key_fn,element_fn,map__28870,map__28870__$1,dragging,drag_item,_STAR_reconciler_STAR_28864,_STAR_depth_STAR_28865,_STAR_shared_STAR_28866,_STAR_instrument_STAR_28867,_STAR_parent_STAR_28868,this$,x28859_28879))
;
return iter__5866__auto__.call(null,(function (){var or__5094__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
}
})());
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28868;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28867;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28866;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28865;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28864;
}});})(x28859_28879))
;


om_mantras.sortable.Sortable.prototype.constructor = om_mantras.sortable.Sortable;

om_mantras.sortable.Sortable.prototype.om$isComponent = true;

var x28877_28886 = om_mantras.sortable.Sortable;


var x28878_28887 = om_mantras.sortable.Sortable.prototype;


om_mantras.sortable.Sortable.cljs$lang$type = true;

om_mantras.sortable.Sortable.cljs$lang$ctorStr = "om-mantras.sortable/Sortable";

om_mantras.sortable.Sortable.cljs$lang$ctorPrWriter = (function (this__13596__auto__,writer__13597__auto__,opt__13598__auto__){
return cljs.core._write.call(null,writer__13597__auto__,"om-mantras.sortable/Sortable");
});
om_mantras.sortable.sortable = om.next.factory.call(null,om_mantras.sortable.Sortable);

//# sourceMappingURL=sortable.js.map
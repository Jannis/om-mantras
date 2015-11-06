// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('om_mantras.selectable');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_mantras.util');
om_mantras.selectable.selectable_key = (function om_mantras$selectable$selectable_key(x){
var props = (function (){var G__23943 = x;
var G__23943__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__23943):G__23943);
return G__23943__$1;
})();
var key_fn = cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(key_fn)){
var G__23944 = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__23944) : key_fn.call(null,G__23944));
} else {
return cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
}
});
/**
 * @constructor
 */
om_mantras.selectable.SelectableMatch = (function om_mantras$selectable$SelectableMatch(){
var this__22363__auto__ = this;
React.Component.apply(this__22363__auto__,arguments);

if(!((this__22363__auto__.getInitialState == null))){
this__22363__auto__.state = this__22363__auto__.getInitialState();
} else {
this__22363__auto__.state = {};
}

return this__22363__auto__;
});

om_mantras.selectable.SelectableMatch.prototype = goog.object.clone(React.Component.prototype);

var x23949_23972 = om_mantras.selectable.SelectableMatch.prototype;
x23949_23972.componentWillUpdate = ((function (x23949_23972){
return (function (next_props__22304__auto__,next_state__22305__auto__){
var this__22303__auto__ = this;
om.next.merge_pending_props_BANG_(this__22303__auto__);

return om.next.merge_pending_state_BANG_(this__22303__auto__);
});})(x23949_23972))
;

x23949_23972.shouldComponentUpdate = ((function (x23949_23972){
return (function (next_props__22304__auto__,next_state__22305__auto__){
var this__22303__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__22303__auto__),goog.object.get(next_props__22304__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__22303__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__23952 = this__22303__auto__.state;
var G__23953 = "omcljs$state";
return goog.object.get(G__23952,G__23953);
})(),goog.object.get(next_state__22305__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x23949_23972))
;

x23949_23972.componentWillUnmount = ((function (x23949_23972){
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
});})(x23949_23972))
;

x23949_23972.componentDidUpdate = ((function (x23949_23972){
return (function (prev_props__22306__auto__,prev_state__22307__auto__){
var this__22303__auto__ = this;
return om.next.clear_prev_props_BANG_(this__22303__auto__);
});})(x23949_23972))
;

x23949_23972.isMounted = ((function (x23949_23972){
return (function (){
var this__22303__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__22303__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23949_23972))
;

x23949_23972.componentWillMount = ((function (x23949_23972){
return (function (){
var this__22303__auto__ = this;
var indexer__22308__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__22303__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__22308__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__22308__auto__,this__22303__auto__);
}
});})(x23949_23972))
;

x23949_23972.render = ((function (x23949_23972){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_23954 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23955 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23956 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23957 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23958 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__23959 = om.next.props(this$);
var map__23959__$1 = ((((!((map__23959 == null)))?((((map__23959.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23959.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23959):map__23959);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23959__$1,cljs.core.cst$kw$item);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23959__$1,cljs.core.cst$kw$key_DASH_fn);
var match_element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23959__$1,cljs.core.cst$kw$match_DASH_element_DASH_fn);
var hover_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23959__$1,cljs.core.cst$kw$hover_DASH_fn);
var select_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23959__$1,cljs.core.cst$kw$select_DASH_fn);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23959__$1,cljs.core.cst$kw$active_QMARK_);
var G__23964 = {"className": [cljs.core.str("selectable-match"),cljs.core.str((cljs.core.truth_(active_QMARK_)?" selectable-match-active":null))].join(''), "style": {"cursor": "pointer"}, "key": (function (){var G__23966 = item;
var G__23966__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__23966) : key_fn.call(null,G__23966)):G__23966);
return G__23966__$1;
})(), "onMouseOver": ((function (map__23959,map__23959__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_23954,_STAR_depth_STAR_23955,_STAR_shared_STAR_23956,_STAR_instrument_STAR_23957,_STAR_parent_STAR_23958,this$,x23949_23972){
return (function (){
var G__23967 = hover_fn;
var G__23967__$1 = (((G__23967 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23967,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null)));
return G__23967__$1;
});})(map__23959,map__23959__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_23954,_STAR_depth_STAR_23955,_STAR_shared_STAR_23956,_STAR_instrument_STAR_23957,_STAR_parent_STAR_23958,this$,x23949_23972))
, "onClick": ((function (map__23959,map__23959__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_23954,_STAR_depth_STAR_23955,_STAR_shared_STAR_23956,_STAR_instrument_STAR_23957,_STAR_parent_STAR_23958,this$,x23949_23972){
return (function (){
var G__23968 = select_fn;
var G__23968__$1 = (((G__23968 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__23968,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null)));
return G__23968__$1;
});})(map__23959,map__23959__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_23954,_STAR_depth_STAR_23955,_STAR_shared_STAR_23956,_STAR_instrument_STAR_23957,_STAR_parent_STAR_23958,this$,x23949_23972))
};
var G__23965 = (function (){var G__23969 = item;
var G__23969__$1 = (cljs.core.truth_(match_element_fn)?(match_element_fn.cljs$core$IFn$_invoke$arity$1 ? match_element_fn.cljs$core$IFn$_invoke$arity$1(G__23969) : match_element_fn.call(null,G__23969)):G__23969);
return G__23969__$1;
})();
return React.DOM.div(G__23964,G__23965);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23958;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23957;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23956;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23955;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23954;
}});})(x23949_23972))
;


om_mantras.selectable.SelectableMatch.prototype.constructor = om_mantras.selectable.SelectableMatch;

om_mantras.selectable.SelectableMatch.prototype.om$isComponent = true;

var x23970_23973 = om_mantras.selectable.SelectableMatch;


var x23971_23974 = om_mantras.selectable.SelectableMatch.prototype;


om_mantras.selectable.SelectableMatch.cljs$lang$type = true;

om_mantras.selectable.SelectableMatch.cljs$lang$ctorStr = "om-mantras.selectable/SelectableMatch";

om_mantras.selectable.SelectableMatch.cljs$lang$ctorPrWriter = (function (this__22365__auto__,writer__22366__auto__,opt__22367__auto__){
return cljs.core._write(writer__22366__auto__,"om-mantras.selectable/SelectableMatch");
});
om_mantras.selectable.selectable_match = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_mantras.selectable.SelectableMatch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,om_mantras.selectable.selectable_key], null));
/**
 * @constructor
 */
om_mantras.selectable.SelectableInput = (function om_mantras$selectable$SelectableInput(){
var this__22363__auto__ = this;
React.Component.apply(this__22363__auto__,arguments);

if(!((this__22363__auto__.getInitialState == null))){
this__22363__auto__.state = this__22363__auto__.getInitialState();
} else {
this__22363__auto__.state = {};
}

return this__22363__auto__;
});

om_mantras.selectable.SelectableInput.prototype = goog.object.clone(React.Component.prototype);

var x23980_24006 = om_mantras.selectable.SelectableInput.prototype;
x23980_24006.componentWillUpdate = ((function (x23980_24006){
return (function (next_props__22304__auto__,next_state__22305__auto__){
var this__22303__auto__ = this;
om.next.merge_pending_props_BANG_(this__22303__auto__);

return om.next.merge_pending_state_BANG_(this__22303__auto__);
});})(x23980_24006))
;

x23980_24006.shouldComponentUpdate = ((function (x23980_24006){
return (function (next_props__22304__auto__,next_state__22305__auto__){
var this__22303__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__22303__auto__),goog.object.get(next_props__22304__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__22303__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__23983 = this__22303__auto__.state;
var G__23984 = "omcljs$state";
return goog.object.get(G__23983,G__23984);
})(),goog.object.get(next_state__22305__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x23980_24006))
;

x23980_24006.componentWillUnmount = ((function (x23980_24006){
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
});})(x23980_24006))
;

x23980_24006.isMounted = ((function (x23980_24006){
return (function (){
var this__22303__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__22303__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23980_24006))
;

x23980_24006.componentWillMount = ((function (x23980_24006){
return (function (){
var this__22303__auto__ = this;
var indexer__22308__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__22303__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__22308__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__22308__auto__,this__22303__auto__);
}
});})(x23980_24006))
;

x23980_24006.set_width = ((function (x23980_24006){
return (function (n){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$width,n);
});})(x23980_24006))
;

x23980_24006.componentDidMount = ((function (x23980_24006){
return (function (){
var this$ = this;
var width = om.next.react_ref(this$,cljs.core.cst$kw$input_SLASH_hidden).offsetWidth;
return this$.set_width(width);
});})(x23980_24006))
;

x23980_24006.componentDidUpdate = ((function (x23980_24006){
return (function (old_props,old_state){
var this$ = this;
var old_props__$1 = om.next._prev_props(old_props,this$);
var old_state__$1 = goog.object.get(old_state,"omcjls$previousState");
var width_24007 = om.next.react_ref(this$,cljs.core.cst$kw$input_SLASH_hidden).offsetWidth;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width_24007,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
} else {
this$.set_width(width_24007);
}

return om.next.clear_prev_props_BANG_(this$);
});})(x23980_24006))
;

x23980_24006.render = ((function (x23980_24006){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_23985 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23986 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23987 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23988 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23989 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__23990 = om.next.props(this$);
var map__23990__$1 = ((((!((map__23990 == null)))?((((map__23990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23990):map__23990);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23990__$1,cljs.core.cst$kw$ref);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23990__$1,cljs.core.cst$kw$text);
var key_down_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23990__$1,cljs.core.cst$kw$key_DASH_down_DASH_fn);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23990__$1,cljs.core.cst$kw$change_DASH_fn);
var map__23991 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__23991__$1 = ((((!((map__23991 == null)))?((((map__23991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23991):map__23991);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23991__$1,cljs.core.cst$kw$width);
var G__23994 = {"ref": ref, "className": "selectable-input-box"};
var G__23995 = (function (){var G__23997 = {"ref": cljs.core.cst$kw$input_SLASH_hidden, "style": {"position": "absolute", "left": (-9999), "visibility": "hidden"}};
var G__23998 = text;
return React.DOM.span(G__23997,G__23998);
})();
var G__23996 = (function (){var G__24001 = {"ref": cljs.core.cst$kw$input_SLASH_input, "className": "selectable-input", "style": {"font": "inherit", "border": "none", "outline": "none", "MozOutline": "none", "WebkitOutline": "none", "width": (function (){var x__5499__auto__ = (5);
var y__5500__auto__ = width;
return ((x__5499__auto__ > y__5500__auto__) ? x__5499__auto__ : y__5500__auto__);
})()}, "value": text, "onKeyDown": ((function (G__23994,G__23995,map__23990,map__23990__$1,ref,text,key_down_fn,change_fn,map__23991,map__23991__$1,width,_STAR_reconciler_STAR_23985,_STAR_depth_STAR_23986,_STAR_shared_STAR_23987,_STAR_instrument_STAR_23988,_STAR_parent_STAR_23989,this$,x23980_24006){
return (function (p1__23975_SHARP_){
var G__24002 = key_down_fn;
var G__24002__$1 = (((G__24002 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__24002,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,p1__23975_SHARP_], null)));
return G__24002__$1;
});})(G__23994,G__23995,map__23990,map__23990__$1,ref,text,key_down_fn,change_fn,map__23991,map__23991__$1,width,_STAR_reconciler_STAR_23985,_STAR_depth_STAR_23986,_STAR_shared_STAR_23987,_STAR_instrument_STAR_23988,_STAR_parent_STAR_23989,this$,x23980_24006))
, "onChange": ((function (G__23994,G__23995,map__23990,map__23990__$1,ref,text,key_down_fn,change_fn,map__23991,map__23991__$1,width,_STAR_reconciler_STAR_23985,_STAR_depth_STAR_23986,_STAR_shared_STAR_23987,_STAR_instrument_STAR_23988,_STAR_parent_STAR_23989,this$,x23980_24006){
return (function (e){
var G__24003_24008 = change_fn;
var G__24003_24009__$1 = (((G__24003_24008 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__24003_24008,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,e.target.value], null)));

return e.preventDefault();
});})(G__23994,G__23995,map__23990,map__23990__$1,ref,text,key_down_fn,change_fn,map__23991,map__23991__$1,width,_STAR_reconciler_STAR_23985,_STAR_depth_STAR_23986,_STAR_shared_STAR_23987,_STAR_instrument_STAR_23988,_STAR_parent_STAR_23989,this$,x23980_24006))
};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__24001) : om.dom.input.call(null,G__24001));
})();
return React.DOM.div(G__23994,G__23995,G__23996);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23989;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23988;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23987;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23986;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23985;
}});})(x23980_24006))
;


om_mantras.selectable.SelectableInput.prototype.constructor = om_mantras.selectable.SelectableInput;

om_mantras.selectable.SelectableInput.prototype.om$isComponent = true;

var x24004_24010 = om_mantras.selectable.SelectableInput;


var x24005_24011 = om_mantras.selectable.SelectableInput.prototype;


om_mantras.selectable.SelectableInput.cljs$lang$type = true;

om_mantras.selectable.SelectableInput.cljs$lang$ctorStr = "om-mantras.selectable/SelectableInput";

om_mantras.selectable.SelectableInput.cljs$lang$ctorPrWriter = (function (this__22365__auto__,writer__22366__auto__,opt__22367__auto__){
return cljs.core._write(writer__22366__auto__,"om-mantras.selectable/SelectableInput");
});
om_mantras.selectable.selectable_input = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_mantras.selectable.SelectableInput);
/**
 * @constructor
 */
om_mantras.selectable.Selectable = (function om_mantras$selectable$Selectable(){
var this__22363__auto__ = this;
React.Component.apply(this__22363__auto__,arguments);

if(!((this__22363__auto__.getInitialState == null))){
this__22363__auto__.state = this__22363__auto__.getInitialState();
} else {
this__22363__auto__.state = {};
}

return this__22363__auto__;
});

om_mantras.selectable.Selectable.prototype = goog.object.clone(React.Component.prototype);

var x24026_24125 = om_mantras.selectable.Selectable.prototype;
x24026_24125.componentWillUpdate = ((function (x24026_24125){
return (function (next_props__22304__auto__,next_state__22305__auto__){
var this__22303__auto__ = this;
om.next.merge_pending_props_BANG_(this__22303__auto__);

return om.next.merge_pending_state_BANG_(this__22303__auto__);
});})(x24026_24125))
;

x24026_24125.shouldComponentUpdate = ((function (x24026_24125){
return (function (next_props__22304__auto__,next_state__22305__auto__){
var this__22303__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__22303__auto__),goog.object.get(next_props__22304__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__22303__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24029 = this__22303__auto__.state;
var G__24030 = "omcljs$state";
return goog.object.get(G__24029,G__24030);
})(),goog.object.get(next_state__22305__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x24026_24125))
;

x24026_24125.componentWillUnmount = ((function (x24026_24125){
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
});})(x24026_24125))
;

x24026_24125.componentDidUpdate = ((function (x24026_24125){
return (function (prev_props__22306__auto__,prev_state__22307__auto__){
var this__22303__auto__ = this;
return om.next.clear_prev_props_BANG_(this__22303__auto__);
});})(x24026_24125))
;

x24026_24125.isMounted = ((function (x24026_24125){
return (function (){
var this__22303__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__22303__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24026_24125))
;

x24026_24125.matches_for_text = ((function (x24026_24125){
return (function (text){
var this$ = this;
if(cljs.core.empty_QMARK_(text)){
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
} else {
var match_fn = cljs.core.cst$kw$match_DASH_fn.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (match_fn,this$,x24026_24125){
return (function (p1__24012_SHARP_){
var G__24031 = p1__24012_SHARP_;
var G__24031__$1 = (cljs.core.truth_(match_fn)?(match_fn.cljs$core$IFn$_invoke$arity$2 ? match_fn.cljs$core$IFn$_invoke$arity$2(G__24031,text) : match_fn.call(null,G__24031,text)):G__24031);
return G__24031__$1;
});})(match_fn,this$,x24026_24125))
,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));
}
});})(x24026_24125))
;

x24026_24125.update_matches = ((function (x24026_24125){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$matches,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (this$,x24026_24125){
return (function (p1__24013_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([p1__24013_SHARP_], true),cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)));
});})(this$,x24026_24125))
,this$.matches_for_text(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$))))));
});})(x24026_24125))
;

x24026_24125.recalculate_active_match = ((function (x24026_24125){
return (function (){
var this$ = this;
var matches = cljs.core.cst$kw$matches.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.update,cljs.core.cst$kw$active_DASH_match,((function (matches,this$,x24026_24125){
return (function (p1__24014_SHARP_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([p1__24014_SHARP_], true),matches))){
return p1__24014_SHARP_;
} else {
return cljs.core.first(matches);
}
});})(matches,this$,x24026_24125))
);
});})(x24026_24125))
;

x24026_24125.update_text = ((function (x24026_24125){
return (function (text){
var this$ = this;
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$text,text);

this$.update_matches();

this$.recalculate_active_match();

return this$.show_matches(true);
});})(x24026_24125))
;

x24026_24125.update_selected = ((function (x24026_24125){
return (function (f){
var this$ = this;
var selected = (function (){var G__24032 = cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24032) : f.call(null,G__24032));
})();
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$selected,selected);

var G__24033 = this$;
var G__24033__$1 = (((G__24033 == null))?null:om.next.props(G__24033));
var G__24033__$2 = (((G__24033__$1 == null))?null:cljs.core.cst$kw$change_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__24033__$1));
var G__24033__$3 = (((G__24033__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__24033__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null)));
return G__24033__$3;
});})(x24026_24125))
;

x24026_24125.select_match = ((function (x24026_24125){
return (function (match){
var this$ = this;
var match_24126__$1 = (function (){var G__24034 = match;
var G__24034__$1 = ((om.next.component_QMARK_(match))?cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(G__24034)):G__24034);
return G__24034__$1;
})();
var caret_24127 = cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
this$.update_selected(((function (match_24126__$1,caret_24127,this$,x24026_24125){
return (function (selected){
var vec__24035 = cljs.core.split_at(caret_24127,selected);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24035,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24035,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [match_24126__$1], null),cljs.core.array_seq([after], 0)));
});})(match_24126__$1,caret_24127,this$,x24026_24125))
);

this$.update_caret(cljs.core.inc);

return this$.update_text("");
});})(x24026_24125))
;

x24026_24125.show_matches = ((function (x24026_24125){
return (function (show_QMARK_){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$show_DASH_matches,show_QMARK_);
});})(x24026_24125))
;

x24026_24125.focus = ((function (x24026_24125){
return (function (e){
var this$ = this;
om.dom.node.cljs$core$IFn$_invoke$arity$1(om.next.react_ref(om.next.react_ref(this$,cljs.core.cst$kw$input_SLASH_box),cljs.core.cst$kw$input_SLASH_input)).focus();

return this$.show_matches(true);
});})(x24026_24125))
;

x24026_24125.set_active_match = ((function (x24026_24125){
return (function (child){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_match,cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(child)));
});})(x24026_24125))
;

x24026_24125.update_caret = ((function (x24026_24125){
return (function (f){
var this$ = this;
var selected = cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.update,cljs.core.cst$kw$caret,((function (selected,this$,x24026_24125){
return (function (caret){
var x__5506__auto__ = (function (){var x__5499__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(caret) : f.call(null,caret));
var y__5500__auto__ = (0);
return ((x__5499__auto__ > y__5500__auto__) ? x__5499__auto__ : y__5500__auto__);
})();
var y__5507__auto__ = cljs.core.count(selected);
return ((x__5506__auto__ < y__5507__auto__) ? x__5506__auto__ : y__5507__auto__);
});})(selected,this$,x24026_24125))
);
});})(x24026_24125))
;

x24026_24125.key_backspace = ((function (x24026_24125){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
var caret_24128 = cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
this$.update_selected(((function (caret_24128,this$,x24026_24125){
return (function (selected){
var vec__24036 = cljs.core.split_at(caret_24128,selected);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24036,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24036,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(before),after));
});})(caret_24128,this$,x24026_24125))
);

return this$.update_caret(cljs.core.dec);
} else {
return null;
}
});})(x24026_24125))
;

x24026_24125.key_delete = ((function (x24026_24125){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
var caret_24129 = cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
this$.update_selected(((function (caret_24129,this$,x24026_24125){
return (function (selected){
var vec__24037 = cljs.core.split_at(caret_24129,selected);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24037,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24037,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(before,cljs.core.rest(after)));
});})(caret_24129,this$,x24026_24125))
);

return this$.update_caret(cljs.core.identity);
} else {
return null;
}
});})(x24026_24125))
;

x24026_24125.key_escape = ((function (x24026_24125){
return (function (e){
var this$ = this;
return this$.show_matches(false);
});})(x24026_24125))
;

x24026_24125.key_return = ((function (x24026_24125){
return (function (e){
var this$ = this;
var G__24038 = this$;
var G__24038__$1 = (((G__24038 == null))?null:om.next.get_state.cljs$core$IFn$_invoke$arity$1(G__24038));
var G__24038__$2 = (((G__24038__$1 == null))?null:cljs.core.cst$kw$active_DASH_match.cljs$core$IFn$_invoke$arity$1(G__24038__$1));
var G__24038__$3 = (((G__24038__$2 == null))?null:this$.select_match(G__24038__$2));
return G__24038__$3;
});})(x24026_24125))
;

x24026_24125.key_up = ((function (x24026_24125){
return (function (e){
var this$ = this;
var map__24039_24130 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__24039_24131__$1 = ((((!((map__24039_24130 == null)))?((((map__24039_24130.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24039_24130.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24039_24130):map__24039_24130);
var matches_24132 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24039_24131__$1,cljs.core.cst$kw$matches);
var active_match_24133 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24039_24131__$1,cljs.core.cst$kw$active_DASH_match);
var index_24134 = om_mantras.util.index_of(active_match_24133,matches_24132);
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_match,cljs.core.get.cljs$core$IFn$_invoke$arity$2(matches_24132,(function (){var x__5499__auto__ = (index_24134 - (1));
var y__5500__auto__ = (0);
return ((x__5499__auto__ > y__5500__auto__) ? x__5499__auto__ : y__5500__auto__);
})()));

return e.preventDefault();
});})(x24026_24125))
;

x24026_24125.key_down = ((function (x24026_24125){
return (function (e){
var this$ = this;
var map__24041_24135 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__24041_24136__$1 = ((((!((map__24041_24135 == null)))?((((map__24041_24135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24041_24135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24041_24135):map__24041_24135);
var matches_24137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24041_24136__$1,cljs.core.cst$kw$matches);
var active_match_24138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24041_24136__$1,cljs.core.cst$kw$active_DASH_match);
var index_24139 = om_mantras.util.index_of(active_match_24138,matches_24137);
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_match,cljs.core.get.cljs$core$IFn$_invoke$arity$2(matches_24137,(function (){var x__5506__auto__ = (index_24139 + (1));
var y__5507__auto__ = (cljs.core.count(matches_24137) - (1));
return ((x__5506__auto__ < y__5507__auto__) ? x__5506__auto__ : y__5507__auto__);
})()));

return e.preventDefault();
});})(x24026_24125))
;

x24026_24125.key_left = ((function (x24026_24125){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
return this$.update_caret(cljs.core.dec);
} else {
return null;
}
});})(x24026_24125))
;

x24026_24125.key_right = ((function (x24026_24125){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
return this$.update_caret(cljs.core.inc);
} else {
return null;
}
});})(x24026_24125))
;

x24026_24125.key_home = ((function (x24026_24125){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
return this$.update_caret(cljs.core.constantly((0)));
} else {
return null;
}
});})(x24026_24125))
;

x24026_24125.key_end = ((function (x24026_24125){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
return this$.update_caret(((function (this$,x24026_24125){
return (function (){
return cljs.core.count(cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)));
});})(this$,x24026_24125))
);
} else {
return null;
}
});})(x24026_24125))
;

x24026_24125.key_press = ((function (x24026_24125){
return (function (e){
var this$ = this;
var G__24043 = e.keyCode;
switch (G__24043) {
case (8):
return this$.key_backspace(e);

break;
case (46):
return this$.key_delete(e);

break;
case (27):
return this$.key_escape(e);

break;
case (13):
return this$.key_return(e);

break;
case (38):
return this$.key_up(e);

break;
case (40):
return this$.key_down(e);

break;
case (37):
return this$.key_left(e);

break;
case (39):
return this$.key_right(e);

break;
case (36):
return this$.key_home(e);

break;
case (35):
return this$.key_end(e);

break;
default:
return true;

}
});})(x24026_24125))
;

x24026_24125.componentWillMount = ((function (x24026_24125){
return (function (){
var this$ = this;
var indexer__22298__auto___24141 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__22298__auto___24141 == null)){
} else {
om.next.protocols.index_component_BANG_(indexer__22298__auto___24141,this$);
}

this$.update_text("");

this$.update_selected(cljs.core.constantly(cljs.core.PersistentVector.EMPTY));

this$.update_caret(cljs.core.constantly((0)));

return this$.show_matches(false);
});})(x24026_24125))
;

x24026_24125.componentWillReceiveProps = ((function (x24026_24125){
return (function (props){
var this$ = this;
var props__$1 = om.next._next_props(props,this$);
return this$.update_matches();
});})(x24026_24125))
;

x24026_24125.render = ((function (x24026_24125){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24044 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24045 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24046 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24047 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24048 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24049 = om.next.props(this$);
var map__24049__$1 = ((((!((map__24049 == null)))?((((map__24049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24049):map__24049);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24049__$1,cljs.core.cst$kw$key_DASH_fn);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24049__$1,cljs.core.cst$kw$element_DASH_fn);
var match_element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24049__$1,cljs.core.cst$kw$match_DASH_element_DASH_fn);
var map__24050 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__24050__$1 = ((((!((map__24050 == null)))?((((map__24050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24050):map__24050);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24050__$1,cljs.core.cst$kw$text);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24050__$1,cljs.core.cst$kw$selected);
var show_matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24050__$1,cljs.core.cst$kw$show_DASH_matches);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24050__$1,cljs.core.cst$kw$matches);
var active_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24050__$1,cljs.core.cst$kw$active_DASH_match);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24050__$1,cljs.core.cst$kw$caret);
var G__24053 = {"className": "selectable", "style": {"cursor": "text"}, "onClick": ((function (map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function (){
return this$.focus();
});})(map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
};
var G__24054 = (function (){var iter__5940__auto__ = ((function (G__24053,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function om_mantras$selectable$iter__24058(s__24059){
return (new cljs.core.LazySeq(null,((function (G__24053,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function (){
var s__24059__$1 = s__24059;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__24059__$1);
if(temp__4425__auto__){
var s__24059__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24059__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__24059__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__24061 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__24060 = (0);
while(true){
if((i__24060 < size__5939__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__24060);
cljs.core.chunk_append(b__24061,(function (){var G__24075 = {"className": "selectable-selected-item", "key": (function (){var G__24077 = item;
var G__24077__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__24077) : key_fn.call(null,G__24077)):G__24077);
return G__24077__$1;
})()};
var G__24076 = (function (){var G__24078 = item;
var G__24078__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__24078) : element_fn.call(null,G__24078)):G__24078);
return G__24078__$1;
})();
return React.DOM.div(G__24075,G__24076);
})());

var G__24142 = (i__24060 + (1));
i__24060 = G__24142;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24061),om_mantras$selectable$iter__24058(cljs.core.chunk_rest(s__24059__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24061),null);
}
} else {
var item = cljs.core.first(s__24059__$2);
return cljs.core.cons((function (){var G__24080 = {"className": "selectable-selected-item", "key": (function (){var G__24082 = item;
var G__24082__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__24082) : key_fn.call(null,G__24082)):G__24082);
return G__24082__$1;
})()};
var G__24081 = (function (){var G__24083 = item;
var G__24083__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__24083) : element_fn.call(null,G__24083)):G__24083);
return G__24083__$1;
})();
return React.DOM.div(G__24080,G__24081);
})(),om_mantras$selectable$iter__24058(cljs.core.rest(s__24059__$2)));
}
} else {
return null;
}
break;
}
});})(G__24053,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
,null,null));
});})(G__24053,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
;
return iter__5940__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(caret,selected));
})();
var G__24055 = (function (){var G__24084 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$text,text,cljs.core.cst$kw$ref,cljs.core.cst$kw$input_SLASH_box,cljs.core.cst$kw$key_DASH_down_DASH_fn,((function (G__24053,G__24054,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function (p1__24016_SHARP_,p2__24015_SHARP_){
return this$.key_press(p2__24015_SHARP_);
});})(G__24053,G__24054,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
,cljs.core.cst$kw$change_DASH_fn,((function (G__24053,G__24054,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function (p1__24018_SHARP_,p2__24017_SHARP_){
return this$.update_text(p2__24017_SHARP_);
});})(G__24053,G__24054,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
], null);
return (om_mantras.selectable.selectable_input.cljs$core$IFn$_invoke$arity$1 ? om_mantras.selectable.selectable_input.cljs$core$IFn$_invoke$arity$1(G__24084) : om_mantras.selectable.selectable_input.call(null,G__24084));
})();
var G__24056 = (function (){var iter__5940__auto__ = ((function (G__24053,G__24054,G__24055,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function om_mantras$selectable$iter__24085(s__24086){
return (new cljs.core.LazySeq(null,((function (G__24053,G__24054,G__24055,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function (){
var s__24086__$1 = s__24086;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__24086__$1);
if(temp__4425__auto__){
var s__24086__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24086__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__24086__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__24088 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__24087 = (0);
while(true){
if((i__24087 < size__5939__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__24087);
cljs.core.chunk_append(b__24088,(function (){var G__24102 = {"className": "selectable-selected-item", "key": (function (){var G__24104 = item;
var G__24104__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__24104) : key_fn.call(null,G__24104)):G__24104);
return G__24104__$1;
})()};
var G__24103 = (function (){var G__24105 = item;
var G__24105__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__24105) : element_fn.call(null,G__24105)):G__24105);
return G__24105__$1;
})();
return React.DOM.div(G__24102,G__24103);
})());

var G__24143 = (i__24087 + (1));
i__24087 = G__24143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24088),om_mantras$selectable$iter__24085(cljs.core.chunk_rest(s__24086__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24088),null);
}
} else {
var item = cljs.core.first(s__24086__$2);
return cljs.core.cons((function (){var G__24107 = {"className": "selectable-selected-item", "key": (function (){var G__24109 = item;
var G__24109__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__24109) : key_fn.call(null,G__24109)):G__24109);
return G__24109__$1;
})()};
var G__24108 = (function (){var G__24110 = item;
var G__24110__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__24110) : element_fn.call(null,G__24110)):G__24110);
return G__24110__$1;
})();
return React.DOM.div(G__24107,G__24108);
})(),om_mantras$selectable$iter__24085(cljs.core.rest(s__24086__$2)));
}
} else {
return null;
}
break;
}
});})(G__24053,G__24054,G__24055,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
,null,null));
});})(G__24053,G__24054,G__24055,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
;
return iter__5940__auto__(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(caret,selected));
})();
var G__24057 = (cljs.core.truth_((function (){var and__5156__auto__ = show_matches;
if(cljs.core.truth_(and__5156__auto__)){
return matches;
} else {
return and__5156__auto__;
}
})())?(function (){var G__24111 = {"className": "selectable-matches"};
var G__24112 = (function (){var iter__5940__auto__ = ((function (G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function om_mantras$selectable$iter__24113(s__24114){
return (new cljs.core.LazySeq(null,((function (G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function (){
var s__24114__$1 = s__24114;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__24114__$1);
if(temp__4425__auto__){
var s__24114__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24114__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__24114__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__24116 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__24115 = (0);
while(true){
if((i__24115 < size__5939__auto__)){
var match = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__24115);
cljs.core.chunk_append(b__24116,(function (){var G__24121 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$item,match,cljs.core.cst$kw$active_QMARK_,(function (){var and__5156__auto__ = active_match;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_match,match);
} else {
return and__5156__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$match_DASH_element_DASH_fn,match_element_fn,cljs.core.cst$kw$hover_DASH_fn,((function (i__24115,match,c__5938__auto__,size__5939__auto__,b__24116,s__24114__$2,temp__4425__auto__,G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function (p1__24020_SHARP_){
return this$.set_active_match(p1__24020_SHARP_);
});})(i__24115,match,c__5938__auto__,size__5939__auto__,b__24116,s__24114__$2,temp__4425__auto__,G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
,cljs.core.cst$kw$select_DASH_fn,((function (i__24115,match,c__5938__auto__,size__5939__auto__,b__24116,s__24114__$2,temp__4425__auto__,G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function (p1__24021_SHARP_){
return this$.select_match(p1__24021_SHARP_);
});})(i__24115,match,c__5938__auto__,size__5939__auto__,b__24116,s__24114__$2,temp__4425__auto__,G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
], null);
return (om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1 ? om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1(G__24121) : om_mantras.selectable.selectable_match.call(null,G__24121));
})());

var G__24144 = (i__24115 + (1));
i__24115 = G__24144;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24116),om_mantras$selectable$iter__24113(cljs.core.chunk_rest(s__24114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24116),null);
}
} else {
var match = cljs.core.first(s__24114__$2);
return cljs.core.cons((function (){var G__24122 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$item,match,cljs.core.cst$kw$active_QMARK_,(function (){var and__5156__auto__ = active_match;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_match,match);
} else {
return and__5156__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$match_DASH_element_DASH_fn,match_element_fn,cljs.core.cst$kw$hover_DASH_fn,((function (match,s__24114__$2,temp__4425__auto__,G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function (p1__24020_SHARP_){
return this$.set_active_match(p1__24020_SHARP_);
});})(match,s__24114__$2,temp__4425__auto__,G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
,cljs.core.cst$kw$select_DASH_fn,((function (match,s__24114__$2,temp__4425__auto__,G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function (p1__24021_SHARP_){
return this$.select_match(p1__24021_SHARP_);
});})(match,s__24114__$2,temp__4425__auto__,G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
], null);
return (om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1 ? om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1(G__24122) : om_mantras.selectable.selectable_match.call(null,G__24122));
})(),om_mantras$selectable$iter__24113(cljs.core.rest(s__24114__$2)));
}
} else {
return null;
}
break;
}
});})(G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
,null,null));
});})(G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
;
return iter__5940__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (iter__5940__auto__,G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125){
return (function (p1__24019_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([p1__24019_SHARP_], true),(function (){var or__5168__auto__ = selected;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});})(iter__5940__auto__,G__24111,G__24053,G__24054,G__24055,G__24056,map__24049,map__24049__$1,key_fn,element_fn,match_element_fn,map__24050,map__24050__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24044,_STAR_depth_STAR_24045,_STAR_shared_STAR_24046,_STAR_instrument_STAR_24047,_STAR_parent_STAR_24048,this$,x24026_24125))
,matches));
})();
return React.DOM.div(G__24111,G__24112);
})():null);
return React.DOM.div(G__24053,G__24054,G__24055,G__24056,G__24057);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24048;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24047;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24046;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24045;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24044;
}});})(x24026_24125))
;


om_mantras.selectable.Selectable.prototype.constructor = om_mantras.selectable.Selectable;

om_mantras.selectable.Selectable.prototype.om$isComponent = true;

var x24123_24145 = om_mantras.selectable.Selectable;


var x24124_24146 = om_mantras.selectable.Selectable.prototype;


om_mantras.selectable.Selectable.cljs$lang$type = true;

om_mantras.selectable.Selectable.cljs$lang$ctorStr = "om-mantras.selectable/Selectable";

om_mantras.selectable.Selectable.cljs$lang$ctorPrWriter = (function (this__22365__auto__,writer__22366__auto__,opt__22367__auto__){
return cljs.core._write(writer__22366__auto__,"om-mantras.selectable/Selectable");
});
om_mantras.selectable.selectable = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_mantras.selectable.Selectable);

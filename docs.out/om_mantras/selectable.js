// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('om_mantras.selectable');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_mantras.util');
om_mantras.selectable.selectable_key = (function om_mantras$selectable$selectable_key(x){
var props = (function (){var G__23977 = x;
var G__23977__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__23977):G__23977);
return G__23977__$1;
})();
var key_fn = cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(key_fn)){
var G__23978 = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__23978) : key_fn.call(null,G__23978));
} else {
return cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
}
});
/**
 * @constructor
 */
om_mantras.selectable.SelectableMatch = (function om_mantras$selectable$SelectableMatch(){
var this__22373__auto__ = this;
React.Component.apply(this__22373__auto__,arguments);

if(!((this__22373__auto__.initLocalState == null))){
this__22373__auto__.state = this__22373__auto__.initLocalState();
} else {
this__22373__auto__.state = {};
}

return this__22373__auto__;
});

om_mantras.selectable.SelectableMatch.prototype = goog.object.clone(React.Component.prototype);

var x23983_24006 = om_mantras.selectable.SelectableMatch.prototype;
x23983_24006.componentWillUpdate = ((function (x23983_24006){
return (function (next_props__22314__auto__,next_state__22315__auto__){
var this__22313__auto__ = this;
om.next.merge_pending_props_BANG_(this__22313__auto__);

return om.next.merge_pending_state_BANG_(this__22313__auto__);
});})(x23983_24006))
;

x23983_24006.shouldComponentUpdate = ((function (x23983_24006){
return (function (next_props__22314__auto__,next_state__22315__auto__){
var this__22313__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__22313__auto__),goog.object.get(next_props__22314__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__22313__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__23986 = this__22313__auto__.state;
var G__23987 = "omcljs$state";
return goog.object.get(G__23986,G__23987);
})(),goog.object.get(next_state__22315__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x23983_24006))
;

x23983_24006.componentWillUnmount = ((function (x23983_24006){
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
});})(x23983_24006))
;

x23983_24006.componentDidUpdate = ((function (x23983_24006){
return (function (prev_props__22316__auto__,prev_state__22317__auto__){
var this__22313__auto__ = this;
return om.next.clear_prev_props_BANG_(this__22313__auto__);
});})(x23983_24006))
;

x23983_24006.isMounted = ((function (x23983_24006){
return (function (){
var this__22313__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__22313__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x23983_24006))
;

x23983_24006.componentWillMount = ((function (x23983_24006){
return (function (){
var this__22313__auto__ = this;
var indexer__22318__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__22313__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__22318__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__22318__auto__,this__22313__auto__);
}
});})(x23983_24006))
;

x23983_24006.render = ((function (x23983_24006){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_23988 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_23989 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_23990 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_23991 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_23992 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__23993 = om.next.props(this$);
var map__23993__$1 = ((((!((map__23993 == null)))?((((map__23993.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23993.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23993):map__23993);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23993__$1,cljs.core.cst$kw$item);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23993__$1,cljs.core.cst$kw$key_DASH_fn);
var match_element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23993__$1,cljs.core.cst$kw$match_DASH_element_DASH_fn);
var hover_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23993__$1,cljs.core.cst$kw$hover_DASH_fn);
var select_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23993__$1,cljs.core.cst$kw$select_DASH_fn);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23993__$1,cljs.core.cst$kw$active_QMARK_);
var G__23998 = {"className": [cljs.core.str("selectable-match"),cljs.core.str((cljs.core.truth_(active_QMARK_)?" selectable-match-active":null))].join(''), "style": {"cursor": "pointer"}, "key": (function (){var G__24000 = item;
var G__24000__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__24000) : key_fn.call(null,G__24000)):G__24000);
return G__24000__$1;
})(), "onMouseOver": ((function (map__23993,map__23993__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_23988,_STAR_depth_STAR_23989,_STAR_shared_STAR_23990,_STAR_instrument_STAR_23991,_STAR_parent_STAR_23992,this$,x23983_24006){
return (function (){
var G__24001 = hover_fn;
var G__24001__$1 = (((G__24001 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__24001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null)));
return G__24001__$1;
});})(map__23993,map__23993__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_23988,_STAR_depth_STAR_23989,_STAR_shared_STAR_23990,_STAR_instrument_STAR_23991,_STAR_parent_STAR_23992,this$,x23983_24006))
, "onClick": ((function (map__23993,map__23993__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_23988,_STAR_depth_STAR_23989,_STAR_shared_STAR_23990,_STAR_instrument_STAR_23991,_STAR_parent_STAR_23992,this$,x23983_24006){
return (function (){
var G__24002 = select_fn;
var G__24002__$1 = (((G__24002 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__24002,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null)));
return G__24002__$1;
});})(map__23993,map__23993__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_23988,_STAR_depth_STAR_23989,_STAR_shared_STAR_23990,_STAR_instrument_STAR_23991,_STAR_parent_STAR_23992,this$,x23983_24006))
};
var G__23999 = (function (){var G__24003 = item;
var G__24003__$1 = (cljs.core.truth_(match_element_fn)?(match_element_fn.cljs$core$IFn$_invoke$arity$1 ? match_element_fn.cljs$core$IFn$_invoke$arity$1(G__24003) : match_element_fn.call(null,G__24003)):G__24003);
return G__24003__$1;
})();
return React.DOM.div(G__23998,G__23999);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_23992;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_23991;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_23990;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_23989;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_23988;
}});})(x23983_24006))
;


om_mantras.selectable.SelectableMatch.prototype.constructor = om_mantras.selectable.SelectableMatch;

om_mantras.selectable.SelectableMatch.prototype.om$isComponent = true;

var x24004_24007 = om_mantras.selectable.SelectableMatch;


var x24005_24008 = om_mantras.selectable.SelectableMatch.prototype;


om_mantras.selectable.SelectableMatch.cljs$lang$type = true;

om_mantras.selectable.SelectableMatch.cljs$lang$ctorStr = "om-mantras.selectable/SelectableMatch";

om_mantras.selectable.SelectableMatch.cljs$lang$ctorPrWriter = (function (this__22375__auto__,writer__22376__auto__,opt__22377__auto__){
return cljs.core._write(writer__22376__auto__,"om-mantras.selectable/SelectableMatch");
});
om_mantras.selectable.selectable_match = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_mantras.selectable.SelectableMatch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,om_mantras.selectable.selectable_key], null));
/**
 * @constructor
 */
om_mantras.selectable.SelectableInput = (function om_mantras$selectable$SelectableInput(){
var this__22373__auto__ = this;
React.Component.apply(this__22373__auto__,arguments);

if(!((this__22373__auto__.initLocalState == null))){
this__22373__auto__.state = this__22373__auto__.initLocalState();
} else {
this__22373__auto__.state = {};
}

return this__22373__auto__;
});

om_mantras.selectable.SelectableInput.prototype = goog.object.clone(React.Component.prototype);

var x24014_24040 = om_mantras.selectable.SelectableInput.prototype;
x24014_24040.componentWillUpdate = ((function (x24014_24040){
return (function (next_props__22314__auto__,next_state__22315__auto__){
var this__22313__auto__ = this;
om.next.merge_pending_props_BANG_(this__22313__auto__);

return om.next.merge_pending_state_BANG_(this__22313__auto__);
});})(x24014_24040))
;

x24014_24040.shouldComponentUpdate = ((function (x24014_24040){
return (function (next_props__22314__auto__,next_state__22315__auto__){
var this__22313__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__22313__auto__),goog.object.get(next_props__22314__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__22313__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24017 = this__22313__auto__.state;
var G__24018 = "omcljs$state";
return goog.object.get(G__24017,G__24018);
})(),goog.object.get(next_state__22315__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x24014_24040))
;

x24014_24040.componentWillUnmount = ((function (x24014_24040){
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
});})(x24014_24040))
;

x24014_24040.isMounted = ((function (x24014_24040){
return (function (){
var this__22313__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__22313__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24014_24040))
;

x24014_24040.componentWillMount = ((function (x24014_24040){
return (function (){
var this__22313__auto__ = this;
var indexer__22318__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__22313__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__22318__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__22318__auto__,this__22313__auto__);
}
});})(x24014_24040))
;

x24014_24040.set_width = ((function (x24014_24040){
return (function (n){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$width,n);
});})(x24014_24040))
;

x24014_24040.componentDidMount = ((function (x24014_24040){
return (function (){
var this$ = this;
var width = om.next.react_ref(this$,cljs.core.cst$kw$input_SLASH_hidden).offsetWidth;
return this$.set_width(width);
});})(x24014_24040))
;

x24014_24040.componentDidUpdate = ((function (x24014_24040){
return (function (old_props,old_state){
var this$ = this;
var old_props__$1 = om.next._prev_props(old_props,this$);
var old_state__$1 = goog.object.get(old_state,"omcjls$previousState");
var width_24041 = om.next.react_ref(this$,cljs.core.cst$kw$input_SLASH_hidden).offsetWidth;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width_24041,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
} else {
this$.set_width(width_24041);
}

return om.next.clear_prev_props_BANG_(this$);
});})(x24014_24040))
;

x24014_24040.render = ((function (x24014_24040){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24019 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24020 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24021 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24022 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24023 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24024 = om.next.props(this$);
var map__24024__$1 = ((((!((map__24024 == null)))?((((map__24024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24024):map__24024);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24024__$1,cljs.core.cst$kw$ref);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24024__$1,cljs.core.cst$kw$text);
var key_down_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24024__$1,cljs.core.cst$kw$key_DASH_down_DASH_fn);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24024__$1,cljs.core.cst$kw$change_DASH_fn);
var map__24025 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__24025__$1 = ((((!((map__24025 == null)))?((((map__24025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24025):map__24025);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24025__$1,cljs.core.cst$kw$width);
var G__24028 = {"ref": ref, "className": "selectable-input-box"};
var G__24029 = (function (){var G__24031 = {"ref": cljs.core.cst$kw$input_SLASH_hidden, "style": {"position": "absolute", "left": (-9999), "visibility": "hidden"}};
var G__24032 = text;
return React.DOM.span(G__24031,G__24032);
})();
var G__24030 = (function (){var G__24035 = {"ref": cljs.core.cst$kw$input_SLASH_input, "className": "selectable-input", "style": {"font": "inherit", "border": "none", "outline": "none", "MozOutline": "none", "WebkitOutline": "none", "width": (function (){var x__5499__auto__ = (5);
var y__5500__auto__ = width;
return ((x__5499__auto__ > y__5500__auto__) ? x__5499__auto__ : y__5500__auto__);
})()}, "value": text, "onKeyDown": ((function (G__24028,G__24029,map__24024,map__24024__$1,ref,text,key_down_fn,change_fn,map__24025,map__24025__$1,width,_STAR_reconciler_STAR_24019,_STAR_depth_STAR_24020,_STAR_shared_STAR_24021,_STAR_instrument_STAR_24022,_STAR_parent_STAR_24023,this$,x24014_24040){
return (function (p1__24009_SHARP_){
var G__24036 = key_down_fn;
var G__24036__$1 = (((G__24036 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__24036,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,p1__24009_SHARP_], null)));
return G__24036__$1;
});})(G__24028,G__24029,map__24024,map__24024__$1,ref,text,key_down_fn,change_fn,map__24025,map__24025__$1,width,_STAR_reconciler_STAR_24019,_STAR_depth_STAR_24020,_STAR_shared_STAR_24021,_STAR_instrument_STAR_24022,_STAR_parent_STAR_24023,this$,x24014_24040))
, "onChange": ((function (G__24028,G__24029,map__24024,map__24024__$1,ref,text,key_down_fn,change_fn,map__24025,map__24025__$1,width,_STAR_reconciler_STAR_24019,_STAR_depth_STAR_24020,_STAR_shared_STAR_24021,_STAR_instrument_STAR_24022,_STAR_parent_STAR_24023,this$,x24014_24040){
return (function (e){
var G__24037_24042 = change_fn;
var G__24037_24043__$1 = (((G__24037_24042 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__24037_24042,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,e.target.value], null)));

return e.preventDefault();
});})(G__24028,G__24029,map__24024,map__24024__$1,ref,text,key_down_fn,change_fn,map__24025,map__24025__$1,width,_STAR_reconciler_STAR_24019,_STAR_depth_STAR_24020,_STAR_shared_STAR_24021,_STAR_instrument_STAR_24022,_STAR_parent_STAR_24023,this$,x24014_24040))
};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__24035) : om.dom.input.call(null,G__24035));
})();
return React.DOM.div(G__24028,G__24029,G__24030);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24023;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24022;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24021;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24020;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24019;
}});})(x24014_24040))
;


om_mantras.selectable.SelectableInput.prototype.constructor = om_mantras.selectable.SelectableInput;

om_mantras.selectable.SelectableInput.prototype.om$isComponent = true;

var x24038_24044 = om_mantras.selectable.SelectableInput;


var x24039_24045 = om_mantras.selectable.SelectableInput.prototype;


om_mantras.selectable.SelectableInput.cljs$lang$type = true;

om_mantras.selectable.SelectableInput.cljs$lang$ctorStr = "om-mantras.selectable/SelectableInput";

om_mantras.selectable.SelectableInput.cljs$lang$ctorPrWriter = (function (this__22375__auto__,writer__22376__auto__,opt__22377__auto__){
return cljs.core._write(writer__22376__auto__,"om-mantras.selectable/SelectableInput");
});
om_mantras.selectable.selectable_input = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_mantras.selectable.SelectableInput);
/**
 * @constructor
 */
om_mantras.selectable.Selectable = (function om_mantras$selectable$Selectable(){
var this__22373__auto__ = this;
React.Component.apply(this__22373__auto__,arguments);

if(!((this__22373__auto__.initLocalState == null))){
this__22373__auto__.state = this__22373__auto__.initLocalState();
} else {
this__22373__auto__.state = {};
}

return this__22373__auto__;
});

om_mantras.selectable.Selectable.prototype = goog.object.clone(React.Component.prototype);

var x24060_24159 = om_mantras.selectable.Selectable.prototype;
x24060_24159.componentWillUpdate = ((function (x24060_24159){
return (function (next_props__22314__auto__,next_state__22315__auto__){
var this__22313__auto__ = this;
om.next.merge_pending_props_BANG_(this__22313__auto__);

return om.next.merge_pending_state_BANG_(this__22313__auto__);
});})(x24060_24159))
;

x24060_24159.shouldComponentUpdate = ((function (x24060_24159){
return (function (next_props__22314__auto__,next_state__22315__auto__){
var this__22313__auto__ = this;
var or__5168__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__22313__auto__),goog.object.get(next_props__22314__auto__,"omcljs$value"));
if(or__5168__auto__){
return or__5168__auto__;
} else {
var and__5156__auto__ = this__22313__auto__.state;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__24063 = this__22313__auto__.state;
var G__24064 = "omcljs$state";
return goog.object.get(G__24063,G__24064);
})(),goog.object.get(next_state__22315__auto__,"omcljs$state"));
} else {
return and__5156__auto__;
}
}
});})(x24060_24159))
;

x24060_24159.componentWillUnmount = ((function (x24060_24159){
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
});})(x24060_24159))
;

x24060_24159.componentDidUpdate = ((function (x24060_24159){
return (function (prev_props__22316__auto__,prev_state__22317__auto__){
var this__22313__auto__ = this;
return om.next.clear_prev_props_BANG_(this__22313__auto__);
});})(x24060_24159))
;

x24060_24159.isMounted = ((function (x24060_24159){
return (function (){
var this__22313__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__22313__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24060_24159))
;

x24060_24159.matches_for_text = ((function (x24060_24159){
return (function (text){
var this$ = this;
if(cljs.core.empty_QMARK_(text)){
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
} else {
var match_fn = cljs.core.cst$kw$match_DASH_fn.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (match_fn,this$,x24060_24159){
return (function (p1__24046_SHARP_){
var G__24065 = p1__24046_SHARP_;
var G__24065__$1 = (cljs.core.truth_(match_fn)?(match_fn.cljs$core$IFn$_invoke$arity$2 ? match_fn.cljs$core$IFn$_invoke$arity$2(G__24065,text) : match_fn.call(null,G__24065,text)):G__24065);
return G__24065__$1;
});})(match_fn,this$,x24060_24159))
,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));
}
});})(x24060_24159))
;

x24060_24159.update_matches = ((function (x24060_24159){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$matches,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (this$,x24060_24159){
return (function (p1__24047_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([p1__24047_SHARP_], true),cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)));
});})(this$,x24060_24159))
,this$.matches_for_text(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$))))));
});})(x24060_24159))
;

x24060_24159.recalculate_active_match = ((function (x24060_24159){
return (function (){
var this$ = this;
var matches = cljs.core.cst$kw$matches.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.update,cljs.core.cst$kw$active_DASH_match,((function (matches,this$,x24060_24159){
return (function (p1__24048_SHARP_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([p1__24048_SHARP_], true),matches))){
return p1__24048_SHARP_;
} else {
return cljs.core.first(matches);
}
});})(matches,this$,x24060_24159))
);
});})(x24060_24159))
;

x24060_24159.update_text = ((function (x24060_24159){
return (function (text){
var this$ = this;
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$text,text);

this$.update_matches();

this$.recalculate_active_match();

return this$.show_matches(true);
});})(x24060_24159))
;

x24060_24159.update_selected = ((function (x24060_24159){
return (function (f){
var this$ = this;
var selected = (function (){var G__24066 = cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24066) : f.call(null,G__24066));
})();
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$selected,selected);

var G__24067 = this$;
var G__24067__$1 = (((G__24067 == null))?null:om.next.props(G__24067));
var G__24067__$2 = (((G__24067__$1 == null))?null:cljs.core.cst$kw$change_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__24067__$1));
var G__24067__$3 = (((G__24067__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__24067__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null)));
return G__24067__$3;
});})(x24060_24159))
;

x24060_24159.select_match = ((function (x24060_24159){
return (function (match){
var this$ = this;
var match_24160__$1 = (function (){var G__24068 = match;
var G__24068__$1 = ((om.next.component_QMARK_(match))?cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(G__24068)):G__24068);
return G__24068__$1;
})();
var caret_24161 = cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
this$.update_selected(((function (match_24160__$1,caret_24161,this$,x24060_24159){
return (function (selected){
var vec__24069 = cljs.core.split_at(caret_24161,selected);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24069,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24069,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [match_24160__$1], null),cljs.core.array_seq([after], 0)));
});})(match_24160__$1,caret_24161,this$,x24060_24159))
);

this$.update_caret(cljs.core.inc);

return this$.update_text("");
});})(x24060_24159))
;

x24060_24159.show_matches = ((function (x24060_24159){
return (function (show_QMARK_){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$show_DASH_matches,show_QMARK_);
});})(x24060_24159))
;

x24060_24159.focus = ((function (x24060_24159){
return (function (e){
var this$ = this;
om.dom.node.cljs$core$IFn$_invoke$arity$1(om.next.react_ref(om.next.react_ref(this$,cljs.core.cst$kw$input_SLASH_box),cljs.core.cst$kw$input_SLASH_input)).focus();

return this$.show_matches(true);
});})(x24060_24159))
;

x24060_24159.set_active_match = ((function (x24060_24159){
return (function (child){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_match,cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(child)));
});})(x24060_24159))
;

x24060_24159.update_caret = ((function (x24060_24159){
return (function (f){
var this$ = this;
var selected = cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.update,cljs.core.cst$kw$caret,((function (selected,this$,x24060_24159){
return (function (caret){
var x__5506__auto__ = (function (){var x__5499__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(caret) : f.call(null,caret));
var y__5500__auto__ = (0);
return ((x__5499__auto__ > y__5500__auto__) ? x__5499__auto__ : y__5500__auto__);
})();
var y__5507__auto__ = cljs.core.count(selected);
return ((x__5506__auto__ < y__5507__auto__) ? x__5506__auto__ : y__5507__auto__);
});})(selected,this$,x24060_24159))
);
});})(x24060_24159))
;

x24060_24159.key_backspace = ((function (x24060_24159){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
var caret_24162 = cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
this$.update_selected(((function (caret_24162,this$,x24060_24159){
return (function (selected){
var vec__24070 = cljs.core.split_at(caret_24162,selected);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24070,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24070,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(before),after));
});})(caret_24162,this$,x24060_24159))
);

return this$.update_caret(cljs.core.dec);
} else {
return null;
}
});})(x24060_24159))
;

x24060_24159.key_delete = ((function (x24060_24159){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
var caret_24163 = cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
this$.update_selected(((function (caret_24163,this$,x24060_24159){
return (function (selected){
var vec__24071 = cljs.core.split_at(caret_24163,selected);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24071,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24071,(1),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(before,cljs.core.rest(after)));
});})(caret_24163,this$,x24060_24159))
);

return this$.update_caret(cljs.core.identity);
} else {
return null;
}
});})(x24060_24159))
;

x24060_24159.key_escape = ((function (x24060_24159){
return (function (e){
var this$ = this;
return this$.show_matches(false);
});})(x24060_24159))
;

x24060_24159.key_return = ((function (x24060_24159){
return (function (e){
var this$ = this;
var G__24072 = this$;
var G__24072__$1 = (((G__24072 == null))?null:om.next.get_state.cljs$core$IFn$_invoke$arity$1(G__24072));
var G__24072__$2 = (((G__24072__$1 == null))?null:cljs.core.cst$kw$active_DASH_match.cljs$core$IFn$_invoke$arity$1(G__24072__$1));
var G__24072__$3 = (((G__24072__$2 == null))?null:this$.select_match(G__24072__$2));
return G__24072__$3;
});})(x24060_24159))
;

x24060_24159.key_up = ((function (x24060_24159){
return (function (e){
var this$ = this;
var map__24073_24164 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__24073_24165__$1 = ((((!((map__24073_24164 == null)))?((((map__24073_24164.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24073_24164.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24073_24164):map__24073_24164);
var matches_24166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24073_24165__$1,cljs.core.cst$kw$matches);
var active_match_24167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24073_24165__$1,cljs.core.cst$kw$active_DASH_match);
var index_24168 = om_mantras.util.index_of(active_match_24167,matches_24166);
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_match,cljs.core.get.cljs$core$IFn$_invoke$arity$2(matches_24166,(function (){var x__5499__auto__ = (index_24168 - (1));
var y__5500__auto__ = (0);
return ((x__5499__auto__ > y__5500__auto__) ? x__5499__auto__ : y__5500__auto__);
})()));

return e.preventDefault();
});})(x24060_24159))
;

x24060_24159.key_down = ((function (x24060_24159){
return (function (e){
var this$ = this;
var map__24075_24169 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__24075_24170__$1 = ((((!((map__24075_24169 == null)))?((((map__24075_24169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24075_24169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24075_24169):map__24075_24169);
var matches_24171 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24075_24170__$1,cljs.core.cst$kw$matches);
var active_match_24172 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24075_24170__$1,cljs.core.cst$kw$active_DASH_match);
var index_24173 = om_mantras.util.index_of(active_match_24172,matches_24171);
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_match,cljs.core.get.cljs$core$IFn$_invoke$arity$2(matches_24171,(function (){var x__5506__auto__ = (index_24173 + (1));
var y__5507__auto__ = (cljs.core.count(matches_24171) - (1));
return ((x__5506__auto__ < y__5507__auto__) ? x__5506__auto__ : y__5507__auto__);
})()));

return e.preventDefault();
});})(x24060_24159))
;

x24060_24159.key_left = ((function (x24060_24159){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
return this$.update_caret(cljs.core.dec);
} else {
return null;
}
});})(x24060_24159))
;

x24060_24159.key_right = ((function (x24060_24159){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
return this$.update_caret(cljs.core.inc);
} else {
return null;
}
});})(x24060_24159))
;

x24060_24159.key_home = ((function (x24060_24159){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
return this$.update_caret(cljs.core.constantly((0)));
} else {
return null;
}
});})(x24060_24159))
;

x24060_24159.key_end = ((function (x24060_24159){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
return this$.update_caret(((function (this$,x24060_24159){
return (function (){
return cljs.core.count(cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)));
});})(this$,x24060_24159))
);
} else {
return null;
}
});})(x24060_24159))
;

x24060_24159.key_press = ((function (x24060_24159){
return (function (e){
var this$ = this;
var G__24077 = e.keyCode;
switch (G__24077) {
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
});})(x24060_24159))
;

x24060_24159.componentWillMount = ((function (x24060_24159){
return (function (){
var this$ = this;
var indexer__22308__auto___24175 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__22308__auto___24175 == null)){
} else {
om.next.protocols.index_component_BANG_(indexer__22308__auto___24175,this$);
}

this$.update_text("");

this$.update_selected(cljs.core.constantly(cljs.core.PersistentVector.EMPTY));

this$.update_caret(cljs.core.constantly((0)));

return this$.show_matches(false);
});})(x24060_24159))
;

x24060_24159.componentWillReceiveProps = ((function (x24060_24159){
return (function (props){
var this$ = this;
var props__$1 = om.next._next_props(props,this$);
return this$.update_matches();
});})(x24060_24159))
;

x24060_24159.render = ((function (x24060_24159){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_24078 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24079 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24080 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24081 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24082 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.cljs$core$IFn$_invoke$arity$1(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__24083 = om.next.props(this$);
var map__24083__$1 = ((((!((map__24083 == null)))?((((map__24083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24083):map__24083);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,cljs.core.cst$kw$key_DASH_fn);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,cljs.core.cst$kw$element_DASH_fn);
var match_element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24083__$1,cljs.core.cst$kw$match_DASH_element_DASH_fn);
var map__24084 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__24084__$1 = ((((!((map__24084 == null)))?((((map__24084.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24084.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24084):map__24084);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,cljs.core.cst$kw$text);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,cljs.core.cst$kw$selected);
var show_matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,cljs.core.cst$kw$show_DASH_matches);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,cljs.core.cst$kw$matches);
var active_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,cljs.core.cst$kw$active_DASH_match);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24084__$1,cljs.core.cst$kw$caret);
var G__24087 = {"className": "selectable", "style": {"cursor": "text"}, "onClick": ((function (map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function (){
return this$.focus();
});})(map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
};
var G__24088 = (function (){var iter__5940__auto__ = ((function (G__24087,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function om_mantras$selectable$iter__24092(s__24093){
return (new cljs.core.LazySeq(null,((function (G__24087,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function (){
var s__24093__$1 = s__24093;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__24093__$1);
if(temp__4425__auto__){
var s__24093__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24093__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__24093__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__24095 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__24094 = (0);
while(true){
if((i__24094 < size__5939__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__24094);
cljs.core.chunk_append(b__24095,(function (){var G__24109 = {"className": "selectable-selected-item", "key": (function (){var G__24111 = item;
var G__24111__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__24111) : key_fn.call(null,G__24111)):G__24111);
return G__24111__$1;
})()};
var G__24110 = (function (){var G__24112 = item;
var G__24112__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__24112) : element_fn.call(null,G__24112)):G__24112);
return G__24112__$1;
})();
return React.DOM.div(G__24109,G__24110);
})());

var G__24176 = (i__24094 + (1));
i__24094 = G__24176;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24095),om_mantras$selectable$iter__24092(cljs.core.chunk_rest(s__24093__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24095),null);
}
} else {
var item = cljs.core.first(s__24093__$2);
return cljs.core.cons((function (){var G__24114 = {"className": "selectable-selected-item", "key": (function (){var G__24116 = item;
var G__24116__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__24116) : key_fn.call(null,G__24116)):G__24116);
return G__24116__$1;
})()};
var G__24115 = (function (){var G__24117 = item;
var G__24117__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__24117) : element_fn.call(null,G__24117)):G__24117);
return G__24117__$1;
})();
return React.DOM.div(G__24114,G__24115);
})(),om_mantras$selectable$iter__24092(cljs.core.rest(s__24093__$2)));
}
} else {
return null;
}
break;
}
});})(G__24087,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
,null,null));
});})(G__24087,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
;
return iter__5940__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(caret,selected));
})();
var G__24089 = (function (){var G__24118 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$text,text,cljs.core.cst$kw$ref,cljs.core.cst$kw$input_SLASH_box,cljs.core.cst$kw$key_DASH_down_DASH_fn,((function (G__24087,G__24088,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function (p1__24050_SHARP_,p2__24049_SHARP_){
return this$.key_press(p2__24049_SHARP_);
});})(G__24087,G__24088,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
,cljs.core.cst$kw$change_DASH_fn,((function (G__24087,G__24088,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function (p1__24052_SHARP_,p2__24051_SHARP_){
return this$.update_text(p2__24051_SHARP_);
});})(G__24087,G__24088,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
], null);
return (om_mantras.selectable.selectable_input.cljs$core$IFn$_invoke$arity$1 ? om_mantras.selectable.selectable_input.cljs$core$IFn$_invoke$arity$1(G__24118) : om_mantras.selectable.selectable_input.call(null,G__24118));
})();
var G__24090 = (function (){var iter__5940__auto__ = ((function (G__24087,G__24088,G__24089,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function om_mantras$selectable$iter__24119(s__24120){
return (new cljs.core.LazySeq(null,((function (G__24087,G__24088,G__24089,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function (){
var s__24120__$1 = s__24120;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__24120__$1);
if(temp__4425__auto__){
var s__24120__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24120__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__24120__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__24122 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__24121 = (0);
while(true){
if((i__24121 < size__5939__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__24121);
cljs.core.chunk_append(b__24122,(function (){var G__24136 = {"className": "selectable-selected-item", "key": (function (){var G__24138 = item;
var G__24138__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__24138) : key_fn.call(null,G__24138)):G__24138);
return G__24138__$1;
})()};
var G__24137 = (function (){var G__24139 = item;
var G__24139__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__24139) : element_fn.call(null,G__24139)):G__24139);
return G__24139__$1;
})();
return React.DOM.div(G__24136,G__24137);
})());

var G__24177 = (i__24121 + (1));
i__24121 = G__24177;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24122),om_mantras$selectable$iter__24119(cljs.core.chunk_rest(s__24120__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24122),null);
}
} else {
var item = cljs.core.first(s__24120__$2);
return cljs.core.cons((function (){var G__24141 = {"className": "selectable-selected-item", "key": (function (){var G__24143 = item;
var G__24143__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__24143) : key_fn.call(null,G__24143)):G__24143);
return G__24143__$1;
})()};
var G__24142 = (function (){var G__24144 = item;
var G__24144__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__24144) : element_fn.call(null,G__24144)):G__24144);
return G__24144__$1;
})();
return React.DOM.div(G__24141,G__24142);
})(),om_mantras$selectable$iter__24119(cljs.core.rest(s__24120__$2)));
}
} else {
return null;
}
break;
}
});})(G__24087,G__24088,G__24089,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
,null,null));
});})(G__24087,G__24088,G__24089,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
;
return iter__5940__auto__(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(caret,selected));
})();
var G__24091 = (cljs.core.truth_((function (){var and__5156__auto__ = show_matches;
if(cljs.core.truth_(and__5156__auto__)){
return matches;
} else {
return and__5156__auto__;
}
})())?(function (){var G__24145 = {"className": "selectable-matches"};
var G__24146 = (function (){var iter__5940__auto__ = ((function (G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function om_mantras$selectable$iter__24147(s__24148){
return (new cljs.core.LazySeq(null,((function (G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function (){
var s__24148__$1 = s__24148;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__24148__$1);
if(temp__4425__auto__){
var s__24148__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24148__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__24148__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__24150 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__24149 = (0);
while(true){
if((i__24149 < size__5939__auto__)){
var match = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__24149);
cljs.core.chunk_append(b__24150,(function (){var G__24155 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$item,match,cljs.core.cst$kw$active_QMARK_,(function (){var and__5156__auto__ = active_match;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_match,match);
} else {
return and__5156__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$match_DASH_element_DASH_fn,match_element_fn,cljs.core.cst$kw$hover_DASH_fn,((function (i__24149,match,c__5938__auto__,size__5939__auto__,b__24150,s__24148__$2,temp__4425__auto__,G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function (p1__24054_SHARP_){
return this$.set_active_match(p1__24054_SHARP_);
});})(i__24149,match,c__5938__auto__,size__5939__auto__,b__24150,s__24148__$2,temp__4425__auto__,G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
,cljs.core.cst$kw$select_DASH_fn,((function (i__24149,match,c__5938__auto__,size__5939__auto__,b__24150,s__24148__$2,temp__4425__auto__,G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function (p1__24055_SHARP_){
return this$.select_match(p1__24055_SHARP_);
});})(i__24149,match,c__5938__auto__,size__5939__auto__,b__24150,s__24148__$2,temp__4425__auto__,G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
], null);
return (om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1 ? om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1(G__24155) : om_mantras.selectable.selectable_match.call(null,G__24155));
})());

var G__24178 = (i__24149 + (1));
i__24149 = G__24178;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24150),om_mantras$selectable$iter__24147(cljs.core.chunk_rest(s__24148__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24150),null);
}
} else {
var match = cljs.core.first(s__24148__$2);
return cljs.core.cons((function (){var G__24156 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$item,match,cljs.core.cst$kw$active_QMARK_,(function (){var and__5156__auto__ = active_match;
if(cljs.core.truth_(and__5156__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_match,match);
} else {
return and__5156__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$match_DASH_element_DASH_fn,match_element_fn,cljs.core.cst$kw$hover_DASH_fn,((function (match,s__24148__$2,temp__4425__auto__,G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function (p1__24054_SHARP_){
return this$.set_active_match(p1__24054_SHARP_);
});})(match,s__24148__$2,temp__4425__auto__,G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
,cljs.core.cst$kw$select_DASH_fn,((function (match,s__24148__$2,temp__4425__auto__,G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function (p1__24055_SHARP_){
return this$.select_match(p1__24055_SHARP_);
});})(match,s__24148__$2,temp__4425__auto__,G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
], null);
return (om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1 ? om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1(G__24156) : om_mantras.selectable.selectable_match.call(null,G__24156));
})(),om_mantras$selectable$iter__24147(cljs.core.rest(s__24148__$2)));
}
} else {
return null;
}
break;
}
});})(G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
,null,null));
});})(G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
;
return iter__5940__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (iter__5940__auto__,G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159){
return (function (p1__24053_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([p1__24053_SHARP_], true),(function (){var or__5168__auto__ = selected;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});})(iter__5940__auto__,G__24145,G__24087,G__24088,G__24089,G__24090,map__24083,map__24083__$1,key_fn,element_fn,match_element_fn,map__24084,map__24084__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_24078,_STAR_depth_STAR_24079,_STAR_shared_STAR_24080,_STAR_instrument_STAR_24081,_STAR_parent_STAR_24082,this$,x24060_24159))
,matches));
})();
return React.DOM.div(G__24145,G__24146);
})():null);
return React.DOM.div(G__24087,G__24088,G__24089,G__24090,G__24091);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24082;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24081;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24080;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24079;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24078;
}});})(x24060_24159))
;


om_mantras.selectable.Selectable.prototype.constructor = om_mantras.selectable.Selectable;

om_mantras.selectable.Selectable.prototype.om$isComponent = true;

var x24157_24179 = om_mantras.selectable.Selectable;


var x24158_24180 = om_mantras.selectable.Selectable.prototype;


om_mantras.selectable.Selectable.cljs$lang$type = true;

om_mantras.selectable.Selectable.cljs$lang$ctorStr = "om-mantras.selectable/Selectable";

om_mantras.selectable.Selectable.cljs$lang$ctorPrWriter = (function (this__22375__auto__,writer__22376__auto__,opt__22377__auto__){
return cljs.core._write(writer__22376__auto__,"om-mantras.selectable/Selectable");
});
om_mantras.selectable.selectable = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_mantras.selectable.Selectable);

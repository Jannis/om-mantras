// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('om_mantras.selectable');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_mantras.util');
om_mantras.selectable.selectable_key = (function om_mantras$selectable$selectable_key(x){
var props = (function (){var G__19709 = x;
var G__19709__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__19709):G__19709);
return G__19709__$1;
})();
var key_fn = cljs.core.cst$kw$key_DASH_fn.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(key_fn)){
var G__19710 = cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__19710) : key_fn.call(null,G__19710));
} else {
return cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(props);
}
});
/**
 * @constructor
 */
om_mantras.selectable.SelectableMatch = (function om_mantras$selectable$SelectableMatch(){
var this__15853__auto__ = this;
React.Component.apply(this__15853__auto__,arguments);

if(!((this__15853__auto__.getInitialState == null))){
this__15853__auto__.state = this__15853__auto__.getInitialState();
} else {
this__15853__auto__.state = {};
}

return this__15853__auto__;
});

om_mantras.selectable.SelectableMatch.prototype = goog.object.clone(React.Component.prototype);

var x19715_19738 = om_mantras.selectable.SelectableMatch.prototype;
x19715_19738.componentWillUpdate = ((function (x19715_19738){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
om.next.merge_pending_props_BANG_(this__15793__auto__);

return om.next.merge_pending_state_BANG_(this__15793__auto__);
});})(x19715_19738))
;

x19715_19738.shouldComponentUpdate = ((function (x19715_19738){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__15793__auto__),goog.object.get(next_props__15794__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__15793__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__19718 = this__15793__auto__.state;
var G__19719 = "omcljs$state";
return goog.object.get(G__19718,G__19719);
})(),goog.object.get(next_state__15795__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x19715_19738))
;

x19715_19738.componentWillUnmount = ((function (x19715_19738){
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
});})(x19715_19738))
;

x19715_19738.componentDidUpdate = ((function (x19715_19738){
return (function (prev_props__15796__auto__,prev_state__15797__auto__){
var this__15793__auto__ = this;
return om.next.clear_prev_props_BANG_(this__15793__auto__);
});})(x19715_19738))
;

x19715_19738.isMounted = ((function (x19715_19738){
return (function (){
var this__15793__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__15793__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19715_19738))
;

x19715_19738.componentWillMount = ((function (x19715_19738){
return (function (){
var this__15793__auto__ = this;
var indexer__15798__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__15793__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__15798__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__15798__auto__,this__15793__auto__);
}
});})(x19715_19738))
;

x19715_19738.render = ((function (x19715_19738){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_19720 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19721 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19722 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19723 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19724 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__19725 = om.next.props(this$);
var map__19725__$1 = ((((!((map__19725 == null)))?((((map__19725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19725):map__19725);
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.cst$kw$item);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.cst$kw$key_DASH_fn);
var match_element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.cst$kw$match_DASH_element_DASH_fn);
var hover_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.cst$kw$hover_DASH_fn);
var select_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.cst$kw$select_DASH_fn);
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19725__$1,cljs.core.cst$kw$active_QMARK_);
var G__19730 = {"className": [cljs.core.str("selectable-match"),cljs.core.str((cljs.core.truth_(active_QMARK_)?" selectable-match-active":null))].join(''), "style": {"cursor": "pointer"}, "key": (function (){var G__19732 = item;
var G__19732__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__19732) : key_fn.call(null,G__19732)):G__19732);
return G__19732__$1;
})(), "onMouseOver": ((function (map__19725,map__19725__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_19720,_STAR_depth_STAR_19721,_STAR_shared_STAR_19722,_STAR_instrument_STAR_19723,_STAR_parent_STAR_19724,this$,x19715_19738){
return (function (){
var G__19733 = hover_fn;
var G__19733__$1 = (((G__19733 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__19733,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null)));
return G__19733__$1;
});})(map__19725,map__19725__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_19720,_STAR_depth_STAR_19721,_STAR_shared_STAR_19722,_STAR_instrument_STAR_19723,_STAR_parent_STAR_19724,this$,x19715_19738))
, "onClick": ((function (map__19725,map__19725__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_19720,_STAR_depth_STAR_19721,_STAR_shared_STAR_19722,_STAR_instrument_STAR_19723,_STAR_parent_STAR_19724,this$,x19715_19738){
return (function (){
var G__19734 = select_fn;
var G__19734__$1 = (((G__19734 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__19734,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null)));
return G__19734__$1;
});})(map__19725,map__19725__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_19720,_STAR_depth_STAR_19721,_STAR_shared_STAR_19722,_STAR_instrument_STAR_19723,_STAR_parent_STAR_19724,this$,x19715_19738))
};
var G__19731 = (function (){var G__19735 = item;
var G__19735__$1 = (cljs.core.truth_(match_element_fn)?(match_element_fn.cljs$core$IFn$_invoke$arity$1 ? match_element_fn.cljs$core$IFn$_invoke$arity$1(G__19735) : match_element_fn.call(null,G__19735)):G__19735);
return G__19735__$1;
})();
return React.DOM.div(G__19730,G__19731);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19724;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19723;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19722;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19721;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19720;
}});})(x19715_19738))
;


om_mantras.selectable.SelectableMatch.prototype.constructor = om_mantras.selectable.SelectableMatch;

om_mantras.selectable.SelectableMatch.prototype.om$isComponent = true;

var x19736_19739 = om_mantras.selectable.SelectableMatch;


var x19737_19740 = om_mantras.selectable.SelectableMatch.prototype;


om_mantras.selectable.SelectableMatch.cljs$lang$type = true;

om_mantras.selectable.SelectableMatch.cljs$lang$ctorStr = "om-mantras.selectable/SelectableMatch";

om_mantras.selectable.SelectableMatch.cljs$lang$ctorPrWriter = (function (this__15855__auto__,writer__15856__auto__,opt__15857__auto__){
return cljs.core._write(writer__15856__auto__,"om-mantras.selectable/SelectableMatch");
});
om_mantras.selectable.selectable_match = om.next.factory.cljs$core$IFn$_invoke$arity$2(om_mantras.selectable.SelectableMatch,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keyfn,om_mantras.selectable.selectable_key], null));
/**
 * @constructor
 */
om_mantras.selectable.SelectableInput = (function om_mantras$selectable$SelectableInput(){
var this__15853__auto__ = this;
React.Component.apply(this__15853__auto__,arguments);

if(!((this__15853__auto__.getInitialState == null))){
this__15853__auto__.state = this__15853__auto__.getInitialState();
} else {
this__15853__auto__.state = {};
}

return this__15853__auto__;
});

om_mantras.selectable.SelectableInput.prototype = goog.object.clone(React.Component.prototype);

var x19746_19772 = om_mantras.selectable.SelectableInput.prototype;
x19746_19772.componentWillUpdate = ((function (x19746_19772){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
om.next.merge_pending_props_BANG_(this__15793__auto__);

return om.next.merge_pending_state_BANG_(this__15793__auto__);
});})(x19746_19772))
;

x19746_19772.shouldComponentUpdate = ((function (x19746_19772){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__15793__auto__),goog.object.get(next_props__15794__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__15793__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__19749 = this__15793__auto__.state;
var G__19750 = "omcljs$state";
return goog.object.get(G__19749,G__19750);
})(),goog.object.get(next_state__15795__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x19746_19772))
;

x19746_19772.componentWillUnmount = ((function (x19746_19772){
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
});})(x19746_19772))
;

x19746_19772.isMounted = ((function (x19746_19772){
return (function (){
var this__15793__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__15793__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19746_19772))
;

x19746_19772.componentWillMount = ((function (x19746_19772){
return (function (){
var this__15793__auto__ = this;
var indexer__15798__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this__15793__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__15798__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_(indexer__15798__auto__,this__15793__auto__);
}
});})(x19746_19772))
;

x19746_19772.set_width = ((function (x19746_19772){
return (function (n){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$width,n);
});})(x19746_19772))
;

x19746_19772.componentDidMount = ((function (x19746_19772){
return (function (){
var this$ = this;
var width = om.next.react_ref(this$,cljs.core.cst$kw$input_SLASH_hidden).offsetWidth;
return this$.set_width(width);
});})(x19746_19772))
;

x19746_19772.componentDidUpdate = ((function (x19746_19772){
return (function (old_props,old_state){
var this$ = this;
var old_props__$1 = om.next._prev_props(old_props,this$);
var old_state__$1 = goog.object.get(old_state,"omcjls$previousState");
var width_19773 = om.next.react_ref(this$,cljs.core.cst$kw$input_SLASH_hidden).offsetWidth;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(width_19773,cljs.core.cst$kw$width.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
} else {
this$.set_width(width_19773);
}

return om.next.clear_prev_props_BANG_(this$);
});})(x19746_19772))
;

x19746_19772.render = ((function (x19746_19772){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_19751 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19752 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19753 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19754 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19755 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__19756 = om.next.props(this$);
var map__19756__$1 = ((((!((map__19756 == null)))?((((map__19756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19756):map__19756);
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19756__$1,cljs.core.cst$kw$ref);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19756__$1,cljs.core.cst$kw$text);
var key_down_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19756__$1,cljs.core.cst$kw$key_DASH_down_DASH_fn);
var change_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19756__$1,cljs.core.cst$kw$change_DASH_fn);
var map__19757 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__19757__$1 = ((((!((map__19757 == null)))?((((map__19757.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19757.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19757):map__19757);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19757__$1,cljs.core.cst$kw$width);
var G__19760 = {"ref": ref, "className": "selectable-input-box"};
var G__19761 = (function (){var G__19763 = {"ref": cljs.core.cst$kw$input_SLASH_hidden, "style": {"position": "absolute", "left": (-9999), "visibility": "hidden"}};
var G__19764 = text;
return React.DOM.span(G__19763,G__19764);
})();
var G__19762 = (function (){var G__19767 = {"ref": cljs.core.cst$kw$input_SLASH_input, "className": "selectable-input", "style": {"font": "inherit", "border": "none", "outline": "none", "MozOutline": "none", "WebkitOutline": "none", "width": (function (){var x__5425__auto__ = (5);
var y__5426__auto__ = width;
return ((x__5425__auto__ > y__5426__auto__) ? x__5425__auto__ : y__5426__auto__);
})()}, "value": text, "onKeyDown": ((function (G__19760,G__19761,map__19756,map__19756__$1,ref,text,key_down_fn,change_fn,map__19757,map__19757__$1,width,_STAR_reconciler_STAR_19751,_STAR_depth_STAR_19752,_STAR_shared_STAR_19753,_STAR_instrument_STAR_19754,_STAR_parent_STAR_19755,this$,x19746_19772){
return (function (p1__19741_SHARP_){
var G__19768 = key_down_fn;
var G__19768__$1 = (((G__19768 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__19768,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,p1__19741_SHARP_], null)));
return G__19768__$1;
});})(G__19760,G__19761,map__19756,map__19756__$1,ref,text,key_down_fn,change_fn,map__19757,map__19757__$1,width,_STAR_reconciler_STAR_19751,_STAR_depth_STAR_19752,_STAR_shared_STAR_19753,_STAR_instrument_STAR_19754,_STAR_parent_STAR_19755,this$,x19746_19772))
, "onChange": ((function (G__19760,G__19761,map__19756,map__19756__$1,ref,text,key_down_fn,change_fn,map__19757,map__19757__$1,width,_STAR_reconciler_STAR_19751,_STAR_depth_STAR_19752,_STAR_shared_STAR_19753,_STAR_instrument_STAR_19754,_STAR_parent_STAR_19755,this$,x19746_19772){
return (function (e){
var G__19769_19774 = change_fn;
var G__19769_19775__$1 = (((G__19769_19774 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__19769_19774,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,e.target.value], null)));

return e.preventDefault();
});})(G__19760,G__19761,map__19756,map__19756__$1,ref,text,key_down_fn,change_fn,map__19757,map__19757__$1,width,_STAR_reconciler_STAR_19751,_STAR_depth_STAR_19752,_STAR_shared_STAR_19753,_STAR_instrument_STAR_19754,_STAR_parent_STAR_19755,this$,x19746_19772))
};
return (om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1(G__19767) : om.dom.input.call(null,G__19767));
})();
return React.DOM.div(G__19760,G__19761,G__19762);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19755;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19754;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19753;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19752;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19751;
}});})(x19746_19772))
;


om_mantras.selectable.SelectableInput.prototype.constructor = om_mantras.selectable.SelectableInput;

om_mantras.selectable.SelectableInput.prototype.om$isComponent = true;

var x19770_19776 = om_mantras.selectable.SelectableInput;


var x19771_19777 = om_mantras.selectable.SelectableInput.prototype;


om_mantras.selectable.SelectableInput.cljs$lang$type = true;

om_mantras.selectable.SelectableInput.cljs$lang$ctorStr = "om-mantras.selectable/SelectableInput";

om_mantras.selectable.SelectableInput.cljs$lang$ctorPrWriter = (function (this__15855__auto__,writer__15856__auto__,opt__15857__auto__){
return cljs.core._write(writer__15856__auto__,"om-mantras.selectable/SelectableInput");
});
om_mantras.selectable.selectable_input = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_mantras.selectable.SelectableInput);
/**
 * @constructor
 */
om_mantras.selectable.Selectable = (function om_mantras$selectable$Selectable(){
var this__15853__auto__ = this;
React.Component.apply(this__15853__auto__,arguments);

if(!((this__15853__auto__.getInitialState == null))){
this__15853__auto__.state = this__15853__auto__.getInitialState();
} else {
this__15853__auto__.state = {};
}

return this__15853__auto__;
});

om_mantras.selectable.Selectable.prototype = goog.object.clone(React.Component.prototype);

var x19792_19888 = om_mantras.selectable.Selectable.prototype;
x19792_19888.componentWillUpdate = ((function (x19792_19888){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
om.next.merge_pending_props_BANG_(this__15793__auto__);

return om.next.merge_pending_state_BANG_(this__15793__auto__);
});})(x19792_19888))
;

x19792_19888.shouldComponentUpdate = ((function (x19792_19888){
return (function (next_props__15794__auto__,next_state__15795__auto__){
var this__15793__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.next.props(this__15793__auto__),goog.object.get(next_props__15794__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__15793__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__19795 = this__15793__auto__.state;
var G__19796 = "omcljs$state";
return goog.object.get(G__19795,G__19796);
})(),goog.object.get(next_state__15795__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x19792_19888))
;

x19792_19888.componentWillUnmount = ((function (x19792_19888){
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
});})(x19792_19888))
;

x19792_19888.componentDidUpdate = ((function (x19792_19888){
return (function (prev_props__15796__auto__,prev_state__15797__auto__){
var this__15793__auto__ = this;
return om.next.clear_prev_props_BANG_(this__15793__auto__);
});})(x19792_19888))
;

x19792_19888.isMounted = ((function (x19792_19888){
return (function (){
var this__15793__auto__ = this;
return cljs.core.boolean$(goog.object.getValueByKeys(this__15793__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19792_19888))
;

x19792_19888.matches_for_text = ((function (x19792_19888){
return (function (text){
var this$ = this;
if(cljs.core.empty_QMARK_(text)){
return cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
} else {
var match_fn = cljs.core.cst$kw$match_DASH_fn.cljs$core$IFn$_invoke$arity$1(om.next.props(this$));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (match_fn,this$,x19792_19888){
return (function (p1__19778_SHARP_){
var G__19797 = p1__19778_SHARP_;
var G__19797__$1 = (cljs.core.truth_(match_fn)?(match_fn.cljs$core$IFn$_invoke$arity$2 ? match_fn.cljs$core$IFn$_invoke$arity$2(G__19797,text) : match_fn.call(null,G__19797,text)):G__19797);
return G__19797__$1;
});})(match_fn,this$,x19792_19888))
,cljs.core.cst$kw$items.cljs$core$IFn$_invoke$arity$1(om.next.props(this$)));
}
});})(x19792_19888))
;

x19792_19888.update_matches = ((function (x19792_19888){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$matches,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (this$,x19792_19888){
return (function (p1__19779_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([p1__19779_SHARP_], true),cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)));
});})(this$,x19792_19888))
,this$.matches_for_text(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$))))));
});})(x19792_19888))
;

x19792_19888.recalculate_active_match = ((function (x19792_19888){
return (function (){
var this$ = this;
var matches = cljs.core.cst$kw$matches.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.update,cljs.core.cst$kw$active_DASH_match,((function (matches,this$,x19792_19888){
return (function (p1__19780_SHARP_){
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([p1__19780_SHARP_], true),matches))){
return p1__19780_SHARP_;
} else {
return cljs.core.first(matches);
}
});})(matches,this$,x19792_19888))
);
});})(x19792_19888))
;

x19792_19888.update_text = ((function (x19792_19888){
return (function (text){
var this$ = this;
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$text,text);

this$.update_matches();

this$.recalculate_active_match();

return this$.show_matches(true);
});})(x19792_19888))
;

x19792_19888.update_selected = ((function (x19792_19888){
return (function (items){
var this$ = this;
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$selected,items);

this$.update_caret(cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)));

var G__19798 = this$;
var G__19798__$1 = (((G__19798 == null))?null:om.next.props(G__19798));
var G__19798__$2 = (((G__19798__$1 == null))?null:cljs.core.cst$kw$change_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__19798__$1));
var G__19798__$3 = (((G__19798__$2 == null))?null:cljs.core.apply.cljs$core$IFn$_invoke$arity$2(G__19798__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [items], null)));
return G__19798__$3;
});})(x19792_19888))
;

x19792_19888.select_match = ((function (x19792_19888){
return (function (match){
var this$ = this;
var match__$1 = (function (){var G__19799 = match;
var G__19799__$1 = ((om.next.component_QMARK_(match))?cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(G__19799)):G__19799);
return G__19799__$1;
})();
var selected = cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
var caret = cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
var vec__19800_19889 = cljs.core.split_at(caret,selected);
var before_19890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19800_19889,(0),null);
var after_19891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19800_19889,(1),null);
this$.update_selected(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(before_19890,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [match__$1], null),cljs.core.array_seq([after_19891], 0))));

this$.update_caret((cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)) + (1)));

return this$.update_text("");
});})(x19792_19888))
;

x19792_19888.show_matches = ((function (x19792_19888){
return (function (show_QMARK_){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$show_DASH_matches,show_QMARK_);
});})(x19792_19888))
;

x19792_19888.focus = ((function (x19792_19888){
return (function (e){
var this$ = this;
om.dom.node.cljs$core$IFn$_invoke$arity$1(om.next.react_ref(om.next.react_ref(this$,cljs.core.cst$kw$input_SLASH_box),cljs.core.cst$kw$input_SLASH_input)).focus();

return this$.show_matches(true);
});})(x19792_19888))
;

x19792_19888.set_active_match = ((function (x19792_19888){
return (function (child){
var this$ = this;
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_match,cljs.core.cst$kw$item.cljs$core$IFn$_invoke$arity$1(om.next.props(child)));
});})(x19792_19888))
;

x19792_19888.update_caret = ((function (x19792_19888){
return (function (position){
var this$ = this;
var selected = cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$caret,(function (){var x__5425__auto__ = (0);
var y__5426__auto__ = (function (){var x__5432__auto__ = cljs.core.count(selected);
var y__5433__auto__ = position;
return ((x__5432__auto__ < y__5433__auto__) ? x__5432__auto__ : y__5433__auto__);
})();
return ((x__5425__auto__ > y__5426__auto__) ? x__5425__auto__ : y__5426__auto__);
})());
});})(x19792_19888))
;

x19792_19888.key_backspace = ((function (x19792_19888){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
var selected_19892 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(cljs.core.cst$kw$selected.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$))));
this$.update_selected(selected_19892);

return this$.update_text("");
} else {
return null;
}
});})(x19792_19888))
;

x19792_19888.key_left = ((function (x19792_19888){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
return this$.update_caret((cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)) - (1)));
} else {
return null;
}
});})(x19792_19888))
;

x19792_19888.key_right = ((function (x19792_19888){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$text.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)))){
return this$.update_caret((cljs.core.cst$kw$caret.cljs$core$IFn$_invoke$arity$1(om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$)) + (1)));
} else {
return null;
}
});})(x19792_19888))
;

x19792_19888.key_escape = ((function (x19792_19888){
return (function (e){
var this$ = this;
return this$.show_matches(false);
});})(x19792_19888))
;

x19792_19888.key_up = ((function (x19792_19888){
return (function (e){
var this$ = this;
var map__19801_19893 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__19801_19894__$1 = ((((!((map__19801_19893 == null)))?((((map__19801_19893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19801_19893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19801_19893):map__19801_19893);
var matches_19895 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19801_19894__$1,cljs.core.cst$kw$matches);
var active_match_19896 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19801_19894__$1,cljs.core.cst$kw$active_DASH_match);
var index_19897 = om_mantras.util.index_of(active_match_19896,matches_19895);
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_match,cljs.core.get.cljs$core$IFn$_invoke$arity$2(matches_19895,(function (){var x__5425__auto__ = (index_19897 - (1));
var y__5426__auto__ = (0);
return ((x__5425__auto__ > y__5426__auto__) ? x__5425__auto__ : y__5426__auto__);
})()));

return e.preventDefault();
});})(x19792_19888))
;

x19792_19888.key_down = ((function (x19792_19888){
return (function (e){
var this$ = this;
var map__19803_19898 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__19803_19899__$1 = ((((!((map__19803_19898 == null)))?((((map__19803_19898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19803_19898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19803_19898):map__19803_19898);
var matches_19900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19803_19899__$1,cljs.core.cst$kw$matches);
var active_match_19901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19803_19899__$1,cljs.core.cst$kw$active_DASH_match);
var index_19902 = om_mantras.util.index_of(active_match_19901,matches_19900);
om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,cljs.core.cst$kw$active_DASH_match,cljs.core.get.cljs$core$IFn$_invoke$arity$2(matches_19900,(function (){var x__5432__auto__ = (index_19902 + (1));
var y__5433__auto__ = (cljs.core.count(matches_19900) - (1));
return ((x__5432__auto__ < y__5433__auto__) ? x__5432__auto__ : y__5433__auto__);
})()));

return e.preventDefault();
});})(x19792_19888))
;

x19792_19888.key_return = ((function (x19792_19888){
return (function (e){
var this$ = this;
var G__19805 = this$;
var G__19805__$1 = (((G__19805 == null))?null:om.next.get_state.cljs$core$IFn$_invoke$arity$1(G__19805));
var G__19805__$2 = (((G__19805__$1 == null))?null:cljs.core.cst$kw$active_DASH_match.cljs$core$IFn$_invoke$arity$1(G__19805__$1));
var G__19805__$3 = (((G__19805__$2 == null))?null:this$.select_match(G__19805__$2));
return G__19805__$3;
});})(x19792_19888))
;

x19792_19888.key_press = ((function (x19792_19888){
return (function (e){
var this$ = this;
var G__19806 = e.keyCode;
switch (G__19806) {
case (8):
return this$.key_backspace(e);

break;
case (27):
return this$.key_escape(e);

break;
case (38):
return this$.key_up(e);

break;
case (40):
return this$.key_down(e);

break;
case (13):
return this$.key_return(e);

break;
case (37):
return this$.key_left(e);

break;
case (39):
return this$.key_right(e);

break;
default:
return true;

}
});})(x19792_19888))
;

x19792_19888.componentWillMount = ((function (x19792_19888){
return (function (){
var this$ = this;
var indexer__15788__auto___19904 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.next.get_reconciler(this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$indexer], null));
if((indexer__15788__auto___19904 == null)){
} else {
om.next.protocols.index_component_BANG_(indexer__15788__auto___19904,this$);
}

this$.update_text("");

this$.update_selected(cljs.core.PersistentVector.EMPTY);

this$.update_caret((0));

return this$.show_matches(false);
});})(x19792_19888))
;

x19792_19888.componentWillReceiveProps = ((function (x19792_19888){
return (function (props){
var this$ = this;
var props__$1 = om.next._next_props(props,this$);
return this$.update_matches();
});})(x19792_19888))
;

x19792_19888.render = ((function (x19792_19888){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_19807 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19808 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19809 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19810 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19811 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler(this$);

om.next._STAR_depth_STAR_ = (om.next.depth(this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared(this$);

om.next._STAR_instrument_STAR_ = om.next.instrument(this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__19812 = om.next.props(this$);
var map__19812__$1 = ((((!((map__19812 == null)))?((((map__19812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19812):map__19812);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19812__$1,cljs.core.cst$kw$key_DASH_fn);
var element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19812__$1,cljs.core.cst$kw$element_DASH_fn);
var match_element_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19812__$1,cljs.core.cst$kw$match_DASH_element_DASH_fn);
var map__19813 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(this$);
var map__19813__$1 = ((((!((map__19813 == null)))?((((map__19813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19813):map__19813);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19813__$1,cljs.core.cst$kw$text);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19813__$1,cljs.core.cst$kw$selected);
var show_matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19813__$1,cljs.core.cst$kw$show_DASH_matches);
var matches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19813__$1,cljs.core.cst$kw$matches);
var active_match = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19813__$1,cljs.core.cst$kw$active_DASH_match);
var caret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19813__$1,cljs.core.cst$kw$caret);
var G__19816 = {"className": "selectable", "style": {"cursor": "text"}, "onClick": ((function (map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function (){
return this$.focus();
});})(map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
};
var G__19817 = (function (){var iter__5866__auto__ = ((function (G__19816,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function om_mantras$selectable$iter__19821(s__19822){
return (new cljs.core.LazySeq(null,((function (G__19816,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function (){
var s__19822__$1 = s__19822;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19822__$1);
if(temp__4425__auto__){
var s__19822__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19822__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__19822__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__19824 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__19823 = (0);
while(true){
if((i__19823 < size__5865__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__19823);
cljs.core.chunk_append(b__19824,(function (){var G__19838 = {"className": "selectable-selected-item", "key": (function (){var G__19840 = item;
var G__19840__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__19840) : key_fn.call(null,G__19840)):G__19840);
return G__19840__$1;
})()};
var G__19839 = (function (){var G__19841 = item;
var G__19841__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__19841) : element_fn.call(null,G__19841)):G__19841);
return G__19841__$1;
})();
return React.DOM.div(G__19838,G__19839);
})());

var G__19905 = (i__19823 + (1));
i__19823 = G__19905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19824),om_mantras$selectable$iter__19821(cljs.core.chunk_rest(s__19822__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19824),null);
}
} else {
var item = cljs.core.first(s__19822__$2);
return cljs.core.cons((function (){var G__19843 = {"className": "selectable-selected-item", "key": (function (){var G__19845 = item;
var G__19845__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__19845) : key_fn.call(null,G__19845)):G__19845);
return G__19845__$1;
})()};
var G__19844 = (function (){var G__19846 = item;
var G__19846__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__19846) : element_fn.call(null,G__19846)):G__19846);
return G__19846__$1;
})();
return React.DOM.div(G__19843,G__19844);
})(),om_mantras$selectable$iter__19821(cljs.core.rest(s__19822__$2)));
}
} else {
return null;
}
break;
}
});})(G__19816,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
,null,null));
});})(G__19816,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
;
return iter__5866__auto__(cljs.core.take.cljs$core$IFn$_invoke$arity$2(caret,selected));
})();
var G__19818 = (function (){var G__19847 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$text,text,cljs.core.cst$kw$ref,cljs.core.cst$kw$input_SLASH_box,cljs.core.cst$kw$key_DASH_down_DASH_fn,((function (G__19816,G__19817,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function (p1__19782_SHARP_,p2__19781_SHARP_){
return this$.key_press(p2__19781_SHARP_);
});})(G__19816,G__19817,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
,cljs.core.cst$kw$change_DASH_fn,((function (G__19816,G__19817,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function (p1__19784_SHARP_,p2__19783_SHARP_){
return this$.update_text(p2__19783_SHARP_);
});})(G__19816,G__19817,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
], null);
return (om_mantras.selectable.selectable_input.cljs$core$IFn$_invoke$arity$1 ? om_mantras.selectable.selectable_input.cljs$core$IFn$_invoke$arity$1(G__19847) : om_mantras.selectable.selectable_input.call(null,G__19847));
})();
var G__19819 = (function (){var iter__5866__auto__ = ((function (G__19816,G__19817,G__19818,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function om_mantras$selectable$iter__19848(s__19849){
return (new cljs.core.LazySeq(null,((function (G__19816,G__19817,G__19818,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function (){
var s__19849__$1 = s__19849;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19849__$1);
if(temp__4425__auto__){
var s__19849__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19849__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__19849__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__19851 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__19850 = (0);
while(true){
if((i__19850 < size__5865__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__19850);
cljs.core.chunk_append(b__19851,(function (){var G__19865 = {"className": "selectable-selected-item", "key": (function (){var G__19867 = item;
var G__19867__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__19867) : key_fn.call(null,G__19867)):G__19867);
return G__19867__$1;
})()};
var G__19866 = (function (){var G__19868 = item;
var G__19868__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__19868) : element_fn.call(null,G__19868)):G__19868);
return G__19868__$1;
})();
return React.DOM.div(G__19865,G__19866);
})());

var G__19906 = (i__19850 + (1));
i__19850 = G__19906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19851),om_mantras$selectable$iter__19848(cljs.core.chunk_rest(s__19849__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19851),null);
}
} else {
var item = cljs.core.first(s__19849__$2);
return cljs.core.cons((function (){var G__19870 = {"className": "selectable-selected-item", "key": (function (){var G__19872 = item;
var G__19872__$1 = (cljs.core.truth_(key_fn)?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__19872) : key_fn.call(null,G__19872)):G__19872);
return G__19872__$1;
})()};
var G__19871 = (function (){var G__19873 = item;
var G__19873__$1 = (cljs.core.truth_(element_fn)?(element_fn.cljs$core$IFn$_invoke$arity$1 ? element_fn.cljs$core$IFn$_invoke$arity$1(G__19873) : element_fn.call(null,G__19873)):G__19873);
return G__19873__$1;
})();
return React.DOM.div(G__19870,G__19871);
})(),om_mantras$selectable$iter__19848(cljs.core.rest(s__19849__$2)));
}
} else {
return null;
}
break;
}
});})(G__19816,G__19817,G__19818,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
,null,null));
});})(G__19816,G__19817,G__19818,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
;
return iter__5866__auto__(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(caret,selected));
})();
var G__19820 = (cljs.core.truth_((function (){var and__5082__auto__ = show_matches;
if(cljs.core.truth_(and__5082__auto__)){
return matches;
} else {
return and__5082__auto__;
}
})())?(function (){var G__19874 = {"className": "selectable-matches"};
var G__19875 = (function (){var iter__5866__auto__ = ((function (G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function om_mantras$selectable$iter__19876(s__19877){
return (new cljs.core.LazySeq(null,((function (G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function (){
var s__19877__$1 = s__19877;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19877__$1);
if(temp__4425__auto__){
var s__19877__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19877__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__19877__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__19879 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__19878 = (0);
while(true){
if((i__19878 < size__5865__auto__)){
var match = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__19878);
cljs.core.chunk_append(b__19879,(function (){var G__19884 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$item,match,cljs.core.cst$kw$active_QMARK_,(function (){var and__5082__auto__ = active_match;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_match,match);
} else {
return and__5082__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$match_DASH_element_DASH_fn,match_element_fn,cljs.core.cst$kw$hover_DASH_fn,((function (i__19878,match,c__5864__auto__,size__5865__auto__,b__19879,s__19877__$2,temp__4425__auto__,G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function (p1__19786_SHARP_){
return this$.set_active_match(p1__19786_SHARP_);
});})(i__19878,match,c__5864__auto__,size__5865__auto__,b__19879,s__19877__$2,temp__4425__auto__,G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
,cljs.core.cst$kw$select_DASH_fn,((function (i__19878,match,c__5864__auto__,size__5865__auto__,b__19879,s__19877__$2,temp__4425__auto__,G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function (p1__19787_SHARP_){
return this$.select_match(p1__19787_SHARP_);
});})(i__19878,match,c__5864__auto__,size__5865__auto__,b__19879,s__19877__$2,temp__4425__auto__,G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
], null);
return (om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1 ? om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1(G__19884) : om_mantras.selectable.selectable_match.call(null,G__19884));
})());

var G__19907 = (i__19878 + (1));
i__19878 = G__19907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19879),om_mantras$selectable$iter__19876(cljs.core.chunk_rest(s__19877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19879),null);
}
} else {
var match = cljs.core.first(s__19877__$2);
return cljs.core.cons((function (){var G__19885 = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$item,match,cljs.core.cst$kw$active_QMARK_,(function (){var and__5082__auto__ = active_match;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_match,match);
} else {
return and__5082__auto__;
}
})(),cljs.core.cst$kw$key_DASH_fn,key_fn,cljs.core.cst$kw$match_DASH_element_DASH_fn,match_element_fn,cljs.core.cst$kw$hover_DASH_fn,((function (match,s__19877__$2,temp__4425__auto__,G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function (p1__19786_SHARP_){
return this$.set_active_match(p1__19786_SHARP_);
});})(match,s__19877__$2,temp__4425__auto__,G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
,cljs.core.cst$kw$select_DASH_fn,((function (match,s__19877__$2,temp__4425__auto__,G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function (p1__19787_SHARP_){
return this$.select_match(p1__19787_SHARP_);
});})(match,s__19877__$2,temp__4425__auto__,G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
], null);
return (om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1 ? om_mantras.selectable.selectable_match.cljs$core$IFn$_invoke$arity$1(G__19885) : om_mantras.selectable.selectable_match.call(null,G__19885));
})(),om_mantras$selectable$iter__19876(cljs.core.rest(s__19877__$2)));
}
} else {
return null;
}
break;
}
});})(G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
,null,null));
});})(G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
;
return iter__5866__auto__(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (iter__5866__auto__,G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888){
return (function (p1__19785_SHARP_){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([p1__19785_SHARP_], true),(function (){var or__5094__auto__ = selected;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});})(iter__5866__auto__,G__19874,G__19816,G__19817,G__19818,G__19819,map__19812,map__19812__$1,key_fn,element_fn,match_element_fn,map__19813,map__19813__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_19807,_STAR_depth_STAR_19808,_STAR_shared_STAR_19809,_STAR_instrument_STAR_19810,_STAR_parent_STAR_19811,this$,x19792_19888))
,matches));
})();
return React.DOM.div(G__19874,G__19875);
})():null);
return React.DOM.div(G__19816,G__19817,G__19818,G__19819,G__19820);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19811;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19810;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19809;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19808;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19807;
}});})(x19792_19888))
;


om_mantras.selectable.Selectable.prototype.constructor = om_mantras.selectable.Selectable;

om_mantras.selectable.Selectable.prototype.om$isComponent = true;

var x19886_19908 = om_mantras.selectable.Selectable;


var x19887_19909 = om_mantras.selectable.Selectable.prototype;


om_mantras.selectable.Selectable.cljs$lang$type = true;

om_mantras.selectable.Selectable.cljs$lang$ctorStr = "om-mantras.selectable/Selectable";

om_mantras.selectable.Selectable.cljs$lang$ctorPrWriter = (function (this__15855__auto__,writer__15856__auto__,opt__15857__auto__){
return cljs.core._write(writer__15856__auto__,"om-mantras.selectable/Selectable");
});
om_mantras.selectable.selectable = om.next.factory.cljs$core$IFn$_invoke$arity$1(om_mantras.selectable.Selectable);

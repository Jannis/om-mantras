// Compiled by ClojureScript 1.7.145 {}
goog.provide('om_mantras.selectable');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_mantras.util');
om_mantras.selectable.selectable_key = (function om_mantras$selectable$selectable_key(x){
var props = (function (){var G__28247 = x;
var G__28247__$1 = ((om.next.component_QMARK_.call(null,x))?om.next.props.call(null,G__28247):G__28247);
return G__28247__$1;
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
om_mantras.selectable.SelectableMatch = (function om_mantras$selectable$SelectableMatch(){
var this__13596__auto__ = this;
React.Component.apply(this__13596__auto__,arguments);

if(!((this__13596__auto__.getInitialState == null))){
this__13596__auto__.state = this__13596__auto__.getInitialState();
} else {
this__13596__auto__.state = {};
}

return this__13596__auto__;
});

om_mantras.selectable.SelectableMatch.prototype = goog.object.clone(React.Component.prototype);

var x28252_28266 = om_mantras.selectable.SelectableMatch.prototype;
x28252_28266.componentWillUpdate = ((function (x28252_28266){
return (function (next_props__13537__auto__,next_state__13538__auto__){
var this__13536__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__13536__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__13536__auto__);
});})(x28252_28266))
;

x28252_28266.shouldComponentUpdate = ((function (x28252_28266){
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
});})(x28252_28266))
;

x28252_28266.componentWillUnmount = ((function (x28252_28266){
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
});})(x28252_28266))
;

x28252_28266.componentDidUpdate = ((function (x28252_28266){
return (function (prev_props__13539__auto__,prev_state__13540__auto__){
var this__13536__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__13536__auto__);
});})(x28252_28266))
;

x28252_28266.isMounted = ((function (x28252_28266){
return (function (){
var this__13536__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__13536__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28252_28266))
;

x28252_28266.componentWillMount = ((function (x28252_28266){
return (function (){
var this__13536__auto__ = this;
var indexer__13541__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__13536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__13541__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__13541__auto__,this__13536__auto__);
}
});})(x28252_28266))
;

x28252_28266.render = ((function (x28252_28266){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_28253 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28254 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28255 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28256 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28257 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__28258 = om.next.props.call(null,this$);
var map__28258__$1 = ((((!((map__28258 == null)))?((((map__28258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28258):map__28258);
var item = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"item","item",249373802));
var key_fn = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var match_element_fn = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"match-element-fn","match-element-fn",-1302022909));
var hover_fn = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"hover-fn","hover-fn",205397148));
var select_fn = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"select-fn","select-fn",-100312510));
var active_QMARK_ = cljs.core.get.call(null,map__28258__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
return React.DOM.div({"className": [cljs.core.str("selectable-match"),cljs.core.str((cljs.core.truth_(active_QMARK_)?" selectable-match-active":null))].join(''), "style": {"cursor": "pointer"}, "key": (function (){var G__28260 = item;
var G__28260__$1 = (cljs.core.truth_(key_fn)?key_fn.call(null,G__28260):G__28260);
return G__28260__$1;
})(), "onMouseOver": ((function (map__28258,map__28258__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_28253,_STAR_depth_STAR_28254,_STAR_shared_STAR_28255,_STAR_instrument_STAR_28256,_STAR_parent_STAR_28257,this$,x28252_28266){
return (function (){
var G__28261 = hover_fn;
var G__28261__$1 = (((G__28261 == null))?null:cljs.core.apply.call(null,G__28261,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null)));
return G__28261__$1;
});})(map__28258,map__28258__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_28253,_STAR_depth_STAR_28254,_STAR_shared_STAR_28255,_STAR_instrument_STAR_28256,_STAR_parent_STAR_28257,this$,x28252_28266))
, "onClick": ((function (map__28258,map__28258__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_28253,_STAR_depth_STAR_28254,_STAR_shared_STAR_28255,_STAR_instrument_STAR_28256,_STAR_parent_STAR_28257,this$,x28252_28266){
return (function (){
var G__28262 = select_fn;
var G__28262__$1 = (((G__28262 == null))?null:cljs.core.apply.call(null,G__28262,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null)));
return G__28262__$1;
});})(map__28258,map__28258__$1,item,key_fn,match_element_fn,hover_fn,select_fn,active_QMARK_,_STAR_reconciler_STAR_28253,_STAR_depth_STAR_28254,_STAR_shared_STAR_28255,_STAR_instrument_STAR_28256,_STAR_parent_STAR_28257,this$,x28252_28266))
},(function (){var G__28263 = item;
var G__28263__$1 = (cljs.core.truth_(match_element_fn)?match_element_fn.call(null,G__28263):G__28263);
return G__28263__$1;
})());
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28257;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28256;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28255;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28254;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28253;
}});})(x28252_28266))
;


om_mantras.selectable.SelectableMatch.prototype.constructor = om_mantras.selectable.SelectableMatch;

om_mantras.selectable.SelectableMatch.prototype.om$isComponent = true;

var x28264_28267 = om_mantras.selectable.SelectableMatch;


var x28265_28268 = om_mantras.selectable.SelectableMatch.prototype;


om_mantras.selectable.SelectableMatch.cljs$lang$type = true;

om_mantras.selectable.SelectableMatch.cljs$lang$ctorStr = "om-mantras.selectable/SelectableMatch";

om_mantras.selectable.SelectableMatch.cljs$lang$ctorPrWriter = (function (this__13598__auto__,writer__13599__auto__,opt__13600__auto__){
return cljs.core._write.call(null,writer__13599__auto__,"om-mantras.selectable/SelectableMatch");
});
om_mantras.selectable.selectable_match = om.next.factory.call(null,om_mantras.selectable.SelectableMatch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),om_mantras.selectable.selectable_key], null));
/**
 * @constructor
 */
om_mantras.selectable.SelectableInput = (function om_mantras$selectable$SelectableInput(){
var this__13596__auto__ = this;
React.Component.apply(this__13596__auto__,arguments);

if(!((this__13596__auto__.getInitialState == null))){
this__13596__auto__.state = this__13596__auto__.getInitialState();
} else {
this__13596__auto__.state = {};
}

return this__13596__auto__;
});

om_mantras.selectable.SelectableInput.prototype = goog.object.clone(React.Component.prototype);

var x28274_28288 = om_mantras.selectable.SelectableInput.prototype;
x28274_28288.componentWillUpdate = ((function (x28274_28288){
return (function (next_props__13537__auto__,next_state__13538__auto__){
var this__13536__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__13536__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__13536__auto__);
});})(x28274_28288))
;

x28274_28288.shouldComponentUpdate = ((function (x28274_28288){
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
});})(x28274_28288))
;

x28274_28288.componentWillUnmount = ((function (x28274_28288){
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
});})(x28274_28288))
;

x28274_28288.isMounted = ((function (x28274_28288){
return (function (){
var this__13536__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__13536__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28274_28288))
;

x28274_28288.componentWillMount = ((function (x28274_28288){
return (function (){
var this__13536__auto__ = this;
var indexer__13541__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__13536__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__13541__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__13541__auto__,this__13536__auto__);
}
});})(x28274_28288))
;

x28274_28288.set_width = ((function (x28274_28288){
return (function (n){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),n);
});})(x28274_28288))
;

x28274_28288.componentDidMount = ((function (x28274_28288){
return (function (){
var this$ = this;
var width = om.next.react_ref.call(null,this$,new cljs.core.Keyword("input","hidden","input/hidden",-384901050)).offsetWidth;
return this$.set_width(width);
});})(x28274_28288))
;

x28274_28288.componentDidUpdate = ((function (x28274_28288){
return (function (old_props,old_state){
var this$ = this;
var old_props__$1 = om.next._prev_props.call(null,old_props,this$);
var old_state__$1 = goog.object.get(old_state,"omcjls$previousState");
var width_28289 = om.next.react_ref.call(null,this$,new cljs.core.Keyword("input","hidden","input/hidden",-384901050)).offsetWidth;
if(cljs.core._EQ_.call(null,width_28289,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
} else {
this$.set_width(width_28289);
}

return om.next.clear_prev_props_BANG_.call(null,this$);
});})(x28274_28288))
;

x28274_28288.render = ((function (x28274_28288){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_28275 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28276 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28277 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28278 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28279 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__28280 = om.next.props.call(null,this$);
var map__28280__$1 = ((((!((map__28280 == null)))?((((map__28280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28280):map__28280);
var ref = cljs.core.get.call(null,map__28280__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var text = cljs.core.get.call(null,map__28280__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var key_down_fn = cljs.core.get.call(null,map__28280__$1,new cljs.core.Keyword(null,"key-down-fn","key-down-fn",-1172927552));
var change_fn = cljs.core.get.call(null,map__28280__$1,new cljs.core.Keyword(null,"change-fn","change-fn",1566440825));
var map__28281 = om.next.get_state.call(null,this$);
var map__28281__$1 = ((((!((map__28281 == null)))?((((map__28281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28281):map__28281);
var width = cljs.core.get.call(null,map__28281__$1,new cljs.core.Keyword(null,"width","width",-384071477));
return React.DOM.div({"ref": ref, "className": "selectable-input-box"},React.DOM.span({"ref": new cljs.core.Keyword("input","hidden","input/hidden",-384901050), "style": {"position": "absolute", "left": (-9999), "visibility": "hidden"}},text),om.dom.input.call(null,{"ref": new cljs.core.Keyword("input","input","input/input",724927299), "className": "selectable-input", "style": {"font": "inherit", "border": "none", "outline": "none", "MozOutline": "none", "WebkitOutline": "none", "width": (function (){var x__5425__auto__ = (5);
var y__5426__auto__ = width;
return ((x__5425__auto__ > y__5426__auto__) ? x__5425__auto__ : y__5426__auto__);
})()}, "value": text, "onKeyDown": ((function (map__28280,map__28280__$1,ref,text,key_down_fn,change_fn,map__28281,map__28281__$1,width,_STAR_reconciler_STAR_28275,_STAR_depth_STAR_28276,_STAR_shared_STAR_28277,_STAR_instrument_STAR_28278,_STAR_parent_STAR_28279,this$,x28274_28288){
return (function (p1__28269_SHARP_){
var G__28284 = key_down_fn;
var G__28284__$1 = (((G__28284 == null))?null:cljs.core.apply.call(null,G__28284,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,p1__28269_SHARP_], null)));
return G__28284__$1;
});})(map__28280,map__28280__$1,ref,text,key_down_fn,change_fn,map__28281,map__28281__$1,width,_STAR_reconciler_STAR_28275,_STAR_depth_STAR_28276,_STAR_shared_STAR_28277,_STAR_instrument_STAR_28278,_STAR_parent_STAR_28279,this$,x28274_28288))
, "onChange": ((function (map__28280,map__28280__$1,ref,text,key_down_fn,change_fn,map__28281,map__28281__$1,width,_STAR_reconciler_STAR_28275,_STAR_depth_STAR_28276,_STAR_shared_STAR_28277,_STAR_instrument_STAR_28278,_STAR_parent_STAR_28279,this$,x28274_28288){
return (function (e){
var G__28285_28290 = change_fn;
var G__28285_28291__$1 = (((G__28285_28290 == null))?null:cljs.core.apply.call(null,G__28285_28290,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,e.target.value], null)));

return e.preventDefault();
});})(map__28280,map__28280__$1,ref,text,key_down_fn,change_fn,map__28281,map__28281__$1,width,_STAR_reconciler_STAR_28275,_STAR_depth_STAR_28276,_STAR_shared_STAR_28277,_STAR_instrument_STAR_28278,_STAR_parent_STAR_28279,this$,x28274_28288))
}));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28279;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28278;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28277;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28276;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28275;
}});})(x28274_28288))
;


om_mantras.selectable.SelectableInput.prototype.constructor = om_mantras.selectable.SelectableInput;

om_mantras.selectable.SelectableInput.prototype.om$isComponent = true;

var x28286_28292 = om_mantras.selectable.SelectableInput;


var x28287_28293 = om_mantras.selectable.SelectableInput.prototype;


om_mantras.selectable.SelectableInput.cljs$lang$type = true;

om_mantras.selectable.SelectableInput.cljs$lang$ctorStr = "om-mantras.selectable/SelectableInput";

om_mantras.selectable.SelectableInput.cljs$lang$ctorPrWriter = (function (this__13598__auto__,writer__13599__auto__,opt__13600__auto__){
return cljs.core._write.call(null,writer__13599__auto__,"om-mantras.selectable/SelectableInput");
});
om_mantras.selectable.selectable_input = om.next.factory.call(null,om_mantras.selectable.SelectableInput);
/**
 * @constructor
 */
om_mantras.selectable.Selectable = (function om_mantras$selectable$Selectable(){
var this__13596__auto__ = this;
React.Component.apply(this__13596__auto__,arguments);

if(!((this__13596__auto__.getInitialState == null))){
this__13596__auto__.state = this__13596__auto__.getInitialState();
} else {
this__13596__auto__.state = {};
}

return this__13596__auto__;
});

om_mantras.selectable.Selectable.prototype = goog.object.clone(React.Component.prototype);

var x28308_28360 = om_mantras.selectable.Selectable.prototype;
x28308_28360.componentWillUpdate = ((function (x28308_28360){
return (function (next_props__13537__auto__,next_state__13538__auto__){
var this__13536__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__13536__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__13536__auto__);
});})(x28308_28360))
;

x28308_28360.shouldComponentUpdate = ((function (x28308_28360){
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
});})(x28308_28360))
;

x28308_28360.componentWillUnmount = ((function (x28308_28360){
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
});})(x28308_28360))
;

x28308_28360.componentDidUpdate = ((function (x28308_28360){
return (function (prev_props__13539__auto__,prev_state__13540__auto__){
var this__13536__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__13536__auto__);
});})(x28308_28360))
;

x28308_28360.isMounted = ((function (x28308_28360){
return (function (){
var this__13536__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__13536__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x28308_28360))
;

x28308_28360.matches_for_text = ((function (x28308_28360){
return (function (text){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,text)){
return new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
} else {
var match_fn = new cljs.core.Keyword(null,"match-fn","match-fn",1859208916).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
return cljs.core.filter.call(null,((function (match_fn,this$,x28308_28360){
return (function (p1__28294_SHARP_){
var G__28309 = p1__28294_SHARP_;
var G__28309__$1 = (cljs.core.truth_(match_fn)?match_fn.call(null,G__28309,text):G__28309);
return G__28309__$1;
});})(match_fn,this$,x28308_28360))
,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
}
});})(x28308_28360))
;

x28308_28360.update_matches = ((function (x28308_28360){
return (function (){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"matches","matches",635497998),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,((function (this$,x28308_28360){
return (function (p1__28295_SHARP_){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__28295_SHARP_], true),new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)));
});})(this$,x28308_28360))
,this$.matches_for_text(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$))))));
});})(x28308_28360))
;

x28308_28360.recalculate_active_match = ((function (x28308_28360){
return (function (){
var this$ = this;
var matches = new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
return om.next.update_state_BANG_.call(null,this$,cljs.core.update,new cljs.core.Keyword(null,"active-match","active-match",-1949102183),((function (matches,this$,x28308_28360){
return (function (p1__28296_SHARP_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__28296_SHARP_], true),matches))){
return p1__28296_SHARP_;
} else {
return cljs.core.first.call(null,matches);
}
});})(matches,this$,x28308_28360))
);
});})(x28308_28360))
;

x28308_28360.update_text = ((function (x28308_28360){
return (function (text){
var this$ = this;
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"text","text",-1790561697),text);

this$.update_matches();

this$.recalculate_active_match();

return this$.show_matches(true);
});})(x28308_28360))
;

x28308_28360.update_selected = ((function (x28308_28360){
return (function (f){
var this$ = this;
var selected = f.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)));
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),selected);

var G__28310 = this$;
var G__28310__$1 = (((G__28310 == null))?null:om.next.props.call(null,G__28310));
var G__28310__$2 = (((G__28310__$1 == null))?null:new cljs.core.Keyword(null,"change-fn","change-fn",1566440825).cljs$core$IFn$_invoke$arity$1(G__28310__$1));
var G__28310__$3 = (((G__28310__$2 == null))?null:cljs.core.apply.call(null,G__28310__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected], null)));
return G__28310__$3;
});})(x28308_28360))
;

x28308_28360.select_match = ((function (x28308_28360){
return (function (match){
var this$ = this;
var match_28361__$1 = (function (){var G__28311 = match;
var G__28311__$1 = ((om.next.component_QMARK_.call(null,match))?new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,G__28311)):G__28311);
return G__28311__$1;
})();
var caret_28362 = new cljs.core.Keyword(null,"caret","caret",-1275001854).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
this$.update_selected(((function (match_28361__$1,caret_28362,this$,x28308_28360){
return (function (selected){
var vec__28312 = cljs.core.split_at.call(null,caret_28362,selected);
var before = cljs.core.nth.call(null,vec__28312,(0),null);
var after = cljs.core.nth.call(null,vec__28312,(1),null);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,before,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [match_28361__$1], null),after));
});})(match_28361__$1,caret_28362,this$,x28308_28360))
);

this$.update_caret(cljs.core.inc);

return this$.update_text("");
});})(x28308_28360))
;

x28308_28360.show_matches = ((function (x28308_28360){
return (function (show_QMARK_){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"show-matches","show-matches",410578763),show_QMARK_);
});})(x28308_28360))
;

x28308_28360.focus = ((function (x28308_28360){
return (function (e){
var this$ = this;
om.dom.node.call(null,om.next.react_ref.call(null,om.next.react_ref.call(null,this$,new cljs.core.Keyword("input","box","input/box",558560932)),new cljs.core.Keyword("input","input","input/input",724927299))).focus();

return this$.show_matches(true);
});})(x28308_28360))
;

x28308_28360.set_active_match = ((function (x28308_28360){
return (function (child){
var this$ = this;
return om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"active-match","active-match",-1949102183),new cljs.core.Keyword(null,"item","item",249373802).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,child)));
});})(x28308_28360))
;

x28308_28360.update_caret = ((function (x28308_28360){
return (function (f){
var this$ = this;
var selected = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
return om.next.update_state_BANG_.call(null,this$,cljs.core.update,new cljs.core.Keyword(null,"caret","caret",-1275001854),((function (selected,this$,x28308_28360){
return (function (caret){
var x__5432__auto__ = (function (){var x__5425__auto__ = f.call(null,caret);
var y__5426__auto__ = (0);
return ((x__5425__auto__ > y__5426__auto__) ? x__5425__auto__ : y__5426__auto__);
})();
var y__5433__auto__ = cljs.core.count.call(null,selected);
return ((x__5432__auto__ < y__5433__auto__) ? x__5432__auto__ : y__5433__auto__);
});})(selected,this$,x28308_28360))
);
});})(x28308_28360))
;

x28308_28360.key_backspace = ((function (x28308_28360){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
var caret_28363 = new cljs.core.Keyword(null,"caret","caret",-1275001854).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
this$.update_selected(((function (caret_28363,this$,x28308_28360){
return (function (selected){
var vec__28313 = cljs.core.split_at.call(null,caret_28363,selected);
var before = cljs.core.nth.call(null,vec__28313,(0),null);
var after = cljs.core.nth.call(null,vec__28313,(1),null);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,cljs.core.butlast.call(null,before),after));
});})(caret_28363,this$,x28308_28360))
);

return this$.update_caret(cljs.core.dec);
} else {
return null;
}
});})(x28308_28360))
;

x28308_28360.key_delete = ((function (x28308_28360){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
var caret_28364 = new cljs.core.Keyword(null,"caret","caret",-1275001854).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$));
this$.update_selected(((function (caret_28364,this$,x28308_28360){
return (function (selected){
var vec__28314 = cljs.core.split_at.call(null,caret_28364,selected);
var before = cljs.core.nth.call(null,vec__28314,(0),null);
var after = cljs.core.nth.call(null,vec__28314,(1),null);
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,before,cljs.core.rest.call(null,after)));
});})(caret_28364,this$,x28308_28360))
);

return this$.update_caret(cljs.core.identity);
} else {
return null;
}
});})(x28308_28360))
;

x28308_28360.key_escape = ((function (x28308_28360){
return (function (e){
var this$ = this;
return this$.show_matches(false);
});})(x28308_28360))
;

x28308_28360.key_return = ((function (x28308_28360){
return (function (e){
var this$ = this;
var G__28315 = this$;
var G__28315__$1 = (((G__28315 == null))?null:om.next.get_state.call(null,G__28315));
var G__28315__$2 = (((G__28315__$1 == null))?null:new cljs.core.Keyword(null,"active-match","active-match",-1949102183).cljs$core$IFn$_invoke$arity$1(G__28315__$1));
var G__28315__$3 = (((G__28315__$2 == null))?null:this$.select_match(G__28315__$2));
return G__28315__$3;
});})(x28308_28360))
;

x28308_28360.key_up = ((function (x28308_28360){
return (function (e){
var this$ = this;
var map__28316_28365 = om.next.get_state.call(null,this$);
var map__28316_28366__$1 = ((((!((map__28316_28365 == null)))?((((map__28316_28365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28316_28365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28316_28365):map__28316_28365);
var matches_28367 = cljs.core.get.call(null,map__28316_28366__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var active_match_28368 = cljs.core.get.call(null,map__28316_28366__$1,new cljs.core.Keyword(null,"active-match","active-match",-1949102183));
var index_28369 = om_mantras.util.index_of.call(null,active_match_28368,matches_28367);
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"active-match","active-match",-1949102183),cljs.core.get.call(null,matches_28367,(function (){var x__5425__auto__ = (index_28369 - (1));
var y__5426__auto__ = (0);
return ((x__5425__auto__ > y__5426__auto__) ? x__5425__auto__ : y__5426__auto__);
})()));

return e.preventDefault();
});})(x28308_28360))
;

x28308_28360.key_down = ((function (x28308_28360){
return (function (e){
var this$ = this;
var map__28318_28370 = om.next.get_state.call(null,this$);
var map__28318_28371__$1 = ((((!((map__28318_28370 == null)))?((((map__28318_28370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28318_28370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28318_28370):map__28318_28370);
var matches_28372 = cljs.core.get.call(null,map__28318_28371__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var active_match_28373 = cljs.core.get.call(null,map__28318_28371__$1,new cljs.core.Keyword(null,"active-match","active-match",-1949102183));
var index_28374 = om_mantras.util.index_of.call(null,active_match_28373,matches_28372);
om.next.update_state_BANG_.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"active-match","active-match",-1949102183),cljs.core.get.call(null,matches_28372,(function (){var x__5432__auto__ = (index_28374 + (1));
var y__5433__auto__ = (cljs.core.count.call(null,matches_28372) - (1));
return ((x__5432__auto__ < y__5433__auto__) ? x__5432__auto__ : y__5433__auto__);
})()));

return e.preventDefault();
});})(x28308_28360))
;

x28308_28360.key_left = ((function (x28308_28360){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
return this$.update_caret(cljs.core.dec);
} else {
return null;
}
});})(x28308_28360))
;

x28308_28360.key_right = ((function (x28308_28360){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
return this$.update_caret(cljs.core.inc);
} else {
return null;
}
});})(x28308_28360))
;

x28308_28360.key_home = ((function (x28308_28360){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
return this$.update_caret(cljs.core.constantly.call(null,(0)));
} else {
return null;
}
});})(x28308_28360))
;

x28308_28360.key_end = ((function (x28308_28360){
return (function (e){
var this$ = this;
if(cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)))){
return this$.update_caret(((function (this$,x28308_28360){
return (function (){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(om.next.get_state.call(null,this$)));
});})(this$,x28308_28360))
);
} else {
return null;
}
});})(x28308_28360))
;

x28308_28360.key_press = ((function (x28308_28360){
return (function (e){
var this$ = this;
var G__28320 = e.keyCode;
switch (G__28320) {
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
});})(x28308_28360))
;

x28308_28360.componentWillMount = ((function (x28308_28360){
return (function (){
var this$ = this;
var indexer__13531__auto___28376 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__13531__auto___28376 == null)){
} else {
om.next.protocols.index_component_BANG_.call(null,indexer__13531__auto___28376,this$);
}

this$.update_text("");

this$.update_selected(cljs.core.constantly.call(null,cljs.core.PersistentVector.EMPTY));

this$.update_caret(cljs.core.constantly.call(null,(0)));

return this$.show_matches(false);
});})(x28308_28360))
;

x28308_28360.componentWillReceiveProps = ((function (x28308_28360){
return (function (props){
var this$ = this;
var props__$1 = om.next._next_props.call(null,props,this$);
return this$.update_matches();
});})(x28308_28360))
;

x28308_28360.render = ((function (x28308_28360){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_28321 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_28322 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_28323 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_28324 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_28325 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__28326 = om.next.props.call(null,this$);
var map__28326__$1 = ((((!((map__28326 == null)))?((((map__28326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28326):map__28326);
var key_fn = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"key-fn","key-fn",-636154479));
var element_fn = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"element-fn","element-fn",554034748));
var match_element_fn = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"match-element-fn","match-element-fn",-1302022909));
var map__28327 = om.next.get_state.call(null,this$);
var map__28327__$1 = ((((!((map__28327 == null)))?((((map__28327.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28327.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28327):map__28327);
var text = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var selected = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var show_matches = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"show-matches","show-matches",410578763));
var matches = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"matches","matches",635497998));
var active_match = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"active-match","active-match",-1949102183));
var caret = cljs.core.get.call(null,map__28327__$1,new cljs.core.Keyword(null,"caret","caret",-1275001854));
return React.DOM.div({"className": "selectable", "style": {"cursor": "text"}, "onClick": ((function (map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function (){
return this$.focus();
});})(map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
},(function (){var iter__5866__auto__ = ((function (map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function om_mantras$selectable$iter__28330(s__28331){
return (new cljs.core.LazySeq(null,((function (map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function (){
var s__28331__$1 = s__28331;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28331__$1);
if(temp__4425__auto__){
var s__28331__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28331__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__28331__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__28333 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__28332 = (0);
while(true){
if((i__28332 < size__5865__auto__)){
var item = cljs.core._nth.call(null,c__5864__auto__,i__28332);
cljs.core.chunk_append.call(null,b__28333,React.DOM.div({"className": "selectable-selected-item", "key": (function (){var G__28338 = item;
var G__28338__$1 = (cljs.core.truth_(key_fn)?key_fn.call(null,G__28338):G__28338);
return G__28338__$1;
})()},(function (){var G__28339 = item;
var G__28339__$1 = (cljs.core.truth_(element_fn)?element_fn.call(null,G__28339):G__28339);
return G__28339__$1;
})()));

var G__28377 = (i__28332 + (1));
i__28332 = G__28377;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28333),om_mantras$selectable$iter__28330.call(null,cljs.core.chunk_rest.call(null,s__28331__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28333),null);
}
} else {
var item = cljs.core.first.call(null,s__28331__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "selectable-selected-item", "key": (function (){var G__28340 = item;
var G__28340__$1 = (cljs.core.truth_(key_fn)?key_fn.call(null,G__28340):G__28340);
return G__28340__$1;
})()},(function (){var G__28341 = item;
var G__28341__$1 = (cljs.core.truth_(element_fn)?element_fn.call(null,G__28341):G__28341);
return G__28341__$1;
})()),om_mantras$selectable$iter__28330.call(null,cljs.core.rest.call(null,s__28331__$2)));
}
} else {
return null;
}
break;
}
});})(map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
,null,null));
});})(map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
;
return iter__5866__auto__.call(null,cljs.core.take.call(null,caret,selected));
})(),om_mantras.selectable.selectable_input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword("input","box","input/box",558560932),new cljs.core.Keyword(null,"key-down-fn","key-down-fn",-1172927552),((function (map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function (p1__28298_SHARP_,p2__28297_SHARP_){
return this$.key_press(p2__28297_SHARP_);
});})(map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
,new cljs.core.Keyword(null,"change-fn","change-fn",1566440825),((function (map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function (p1__28300_SHARP_,p2__28299_SHARP_){
return this$.update_text(p2__28299_SHARP_);
});})(map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
], null)),(function (){var iter__5866__auto__ = ((function (map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function om_mantras$selectable$iter__28342(s__28343){
return (new cljs.core.LazySeq(null,((function (map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function (){
var s__28343__$1 = s__28343;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28343__$1);
if(temp__4425__auto__){
var s__28343__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28343__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__28343__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__28345 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__28344 = (0);
while(true){
if((i__28344 < size__5865__auto__)){
var item = cljs.core._nth.call(null,c__5864__auto__,i__28344);
cljs.core.chunk_append.call(null,b__28345,React.DOM.div({"className": "selectable-selected-item", "key": (function (){var G__28350 = item;
var G__28350__$1 = (cljs.core.truth_(key_fn)?key_fn.call(null,G__28350):G__28350);
return G__28350__$1;
})()},(function (){var G__28351 = item;
var G__28351__$1 = (cljs.core.truth_(element_fn)?element_fn.call(null,G__28351):G__28351);
return G__28351__$1;
})()));

var G__28378 = (i__28344 + (1));
i__28344 = G__28378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28345),om_mantras$selectable$iter__28342.call(null,cljs.core.chunk_rest.call(null,s__28343__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28345),null);
}
} else {
var item = cljs.core.first.call(null,s__28343__$2);
return cljs.core.cons.call(null,React.DOM.div({"className": "selectable-selected-item", "key": (function (){var G__28352 = item;
var G__28352__$1 = (cljs.core.truth_(key_fn)?key_fn.call(null,G__28352):G__28352);
return G__28352__$1;
})()},(function (){var G__28353 = item;
var G__28353__$1 = (cljs.core.truth_(element_fn)?element_fn.call(null,G__28353):G__28353);
return G__28353__$1;
})()),om_mantras$selectable$iter__28342.call(null,cljs.core.rest.call(null,s__28343__$2)));
}
} else {
return null;
}
break;
}
});})(map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
,null,null));
});})(map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
;
return iter__5866__auto__.call(null,cljs.core.drop.call(null,caret,selected));
})(),(cljs.core.truth_((function (){var and__5082__auto__ = show_matches;
if(cljs.core.truth_(and__5082__auto__)){
return matches;
} else {
return and__5082__auto__;
}
})())?React.DOM.div({"className": "selectable-matches"},(function (){var iter__5866__auto__ = ((function (map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function om_mantras$selectable$iter__28354(s__28355){
return (new cljs.core.LazySeq(null,((function (map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function (){
var s__28355__$1 = s__28355;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28355__$1);
if(temp__4425__auto__){
var s__28355__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28355__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__28355__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__28357 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__28356 = (0);
while(true){
if((i__28356 < size__5865__auto__)){
var match = cljs.core._nth.call(null,c__5864__auto__,i__28356);
cljs.core.chunk_append.call(null,b__28357,om_mantras.selectable.selectable_match.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"item","item",249373802),match,new cljs.core.Keyword(null,"active?","active?",459499776),(function (){var and__5082__auto__ = active_match;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.call(null,active_match,match);
} else {
return and__5082__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"match-element-fn","match-element-fn",-1302022909),match_element_fn,new cljs.core.Keyword(null,"hover-fn","hover-fn",205397148),((function (i__28356,match,c__5864__auto__,size__5865__auto__,b__28357,s__28355__$2,temp__4425__auto__,map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function (p1__28302_SHARP_){
return this$.set_active_match(p1__28302_SHARP_);
});})(i__28356,match,c__5864__auto__,size__5865__auto__,b__28357,s__28355__$2,temp__4425__auto__,map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
,new cljs.core.Keyword(null,"select-fn","select-fn",-100312510),((function (i__28356,match,c__5864__auto__,size__5865__auto__,b__28357,s__28355__$2,temp__4425__auto__,map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function (p1__28303_SHARP_){
return this$.select_match(p1__28303_SHARP_);
});})(i__28356,match,c__5864__auto__,size__5865__auto__,b__28357,s__28355__$2,temp__4425__auto__,map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
], null)));

var G__28379 = (i__28356 + (1));
i__28356 = G__28379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28357),om_mantras$selectable$iter__28354.call(null,cljs.core.chunk_rest.call(null,s__28355__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28357),null);
}
} else {
var match = cljs.core.first.call(null,s__28355__$2);
return cljs.core.cons.call(null,om_mantras.selectable.selectable_match.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"item","item",249373802),match,new cljs.core.Keyword(null,"active?","active?",459499776),(function (){var and__5082__auto__ = active_match;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.call(null,active_match,match);
} else {
return and__5082__auto__;
}
})(),new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),key_fn,new cljs.core.Keyword(null,"match-element-fn","match-element-fn",-1302022909),match_element_fn,new cljs.core.Keyword(null,"hover-fn","hover-fn",205397148),((function (match,s__28355__$2,temp__4425__auto__,map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function (p1__28302_SHARP_){
return this$.set_active_match(p1__28302_SHARP_);
});})(match,s__28355__$2,temp__4425__auto__,map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
,new cljs.core.Keyword(null,"select-fn","select-fn",-100312510),((function (match,s__28355__$2,temp__4425__auto__,map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function (p1__28303_SHARP_){
return this$.select_match(p1__28303_SHARP_);
});})(match,s__28355__$2,temp__4425__auto__,map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
], null)),om_mantras$selectable$iter__28354.call(null,cljs.core.rest.call(null,s__28355__$2)));
}
} else {
return null;
}
break;
}
});})(map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
,null,null));
});})(map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
;
return iter__5866__auto__.call(null,cljs.core.remove.call(null,((function (iter__5866__auto__,map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360){
return (function (p1__28301_SHARP_){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__28301_SHARP_], true),(function (){var or__5094__auto__ = selected;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
});})(iter__5866__auto__,map__28326,map__28326__$1,key_fn,element_fn,match_element_fn,map__28327,map__28327__$1,text,selected,show_matches,matches,active_match,caret,_STAR_reconciler_STAR_28321,_STAR_depth_STAR_28322,_STAR_shared_STAR_28323,_STAR_instrument_STAR_28324,_STAR_parent_STAR_28325,this$,x28308_28360))
,matches));
})()):null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_28325;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_28324;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_28323;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_28322;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_28321;
}});})(x28308_28360))
;


om_mantras.selectable.Selectable.prototype.constructor = om_mantras.selectable.Selectable;

om_mantras.selectable.Selectable.prototype.om$isComponent = true;

var x28358_28380 = om_mantras.selectable.Selectable;


var x28359_28381 = om_mantras.selectable.Selectable.prototype;


om_mantras.selectable.Selectable.cljs$lang$type = true;

om_mantras.selectable.Selectable.cljs$lang$ctorStr = "om-mantras.selectable/Selectable";

om_mantras.selectable.Selectable.cljs$lang$ctorPrWriter = (function (this__13598__auto__,writer__13599__auto__,opt__13600__auto__){
return cljs.core._write.call(null,writer__13599__auto__,"om-mantras.selectable/Selectable");
});
om_mantras.selectable.selectable = om.next.factory.call(null,om_mantras.selectable.Selectable);

//# sourceMappingURL=selectable.js.map
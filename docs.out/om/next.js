// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = (function (){var G__19912 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__19912) : cljs.core.atom.call(null,G__19912));
})();
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
om.next.node__GT_key = (function om$next$node__GT_key(node){
if(cljs.core.map_QMARK_(node)){
return cljs.core.ffirst(node);
} else {
if(cljs.core.seq_QMARK_(node)){
var node_SINGLEQUOTE_ = cljs.core.first(node);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
return cljs.core.ffirst(node_SINGLEQUOTE_);
} else {
return null;
}
} else {
return null;

}
}
});
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper((function (p1__19913_SHARP_){
return (cljs.core.vector_QMARK_(p1__19913_SHARP_)) || (cljs.core.map_QMARK_(p1__19913_SHARP_)) || (cljs.core.seq_QMARK_(p1__19913_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_(node))?cljs.core.vec(children):((cljs.core.map_QMARK_(node))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_(node))?children:null)));
return cljs.core.with_meta(ret,cljs.core.meta(node));
}),root);
});
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down(loc);
while(true){
var node = clojure.zip.node(loc__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(node))){
return clojure.zip.right(clojure.zip.down(loc__$1));
} else {
var G__19914 = clojure.zip.right(loc__$1);
loc__$1 = G__19914;
continue;
}
break;
}
});
om.next.union_QMARK_ = (function om$next$union_QMARK_(node){
return (cljs.core.map_QMARK_(node)) && (((1) < cljs.core.count(node)));
});
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_(path__$1)){
return loc;
} else {
var node = clojure.zip.node(loc);
if(cljs.core.vector_QMARK_(node)){
var G__19923 = clojure.zip.down(loc);
var G__19924 = path__$1;
loc = G__19923;
path__$1 = G__19924;
continue;
} else {
var vec__19922 = path__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19922,(0),null);
var ks = cljs.core.nthnext(vec__19922,(1));
if(om.next.union_QMARK_(node)){
var node__$1 = clojure.zip.node(om.next.move_to_key(loc,k));
var G__19925 = clojure.zip.replace(loc,node__$1);
var G__19926 = ks;
loc = G__19925;
path__$1 = G__19926;
continue;
} else {
var k_SINGLEQUOTE_ = om.next.node__GT_key(node);
if(cljs.core.keyword_identical_QMARK_(k,k_SINGLEQUOTE_)){
if(cljs.core.map_QMARK_(node)){
var G__19927 = om.next.move_to_key(loc,k);
var G__19928 = ks;
loc = G__19927;
path__$1 = G__19928;
continue;
} else {
var G__19929 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__19930 = ks;
loc = G__19929;
path__$1 = G__19930;
continue;
}
} else {
var G__19931 = clojure.zip.right(loc);
var G__19932 = path__$1;
loc = G__19931;
path__$1 = G__19932;
continue;
}
}
}
}
break;
}
});
return query_template_STAR_(om.next.query_zip(query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root(clojure.zip.replace(template,new_query));
});
om.next.focus_query;
om.next.join_key = (function om$next$join_key(node){
if(cljs.core.map_QMARK_(node)){
return cljs.core.ffirst(node);
} else {
if(cljs.core.seq_QMARK_(node)){
return om$next$join_key(cljs.core.first(node));
} else {
return node;

}
}
});
om.next.focused_join = (function om$next$focused_join(node,ks){
if(cljs.core.map_QMARK_(node)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst(node),(function (){var G__19938 = cljs.core.second(cljs.core.first(node));
var G__19939 = ks;
return (om.next.focus_query.cljs$core$IFn$_invoke$arity$2 ? om.next.focus_query.cljs$core$IFn$_invoke$arity$2(G__19938,G__19939) : om.next.focus_query.call(null,G__19938,G__19939));
})()], true, false);
} else {
if(cljs.core.seq_QMARK_(node)){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.second(node)),om$next$focused_join(cljs.core.first(node),ks));
} else {
return node;

}
}
});
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__19943 = path;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19943,(0),null);
var ks = cljs.core.nthnext(vec__19943,(1));
var match = ((function (vec__19943,k,ks){
return (function om$next$focus_query_$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,om.next.join_key(x));
});})(vec__19943,k,ks))
;
var value = ((function (vec__19943,k,ks){
return (function om$next$focus_query_$_value(x){
return om.next.focused_join(x,ks);
});})(vec__19943,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k),ks),cljs.core.cst$kw$om$next_SLASH_union,true], true, false);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match),cljs.core.map.cljs$core$IFn$_invoke$arity$1(value),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),query);
}
}
});
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args19944 = [];
var len__6152__auto___19948 = arguments.length;
var i__6153__auto___19949 = (0);
while(true){
if((i__6153__auto___19949 < len__6152__auto___19948)){
args19944.push((arguments[i__6153__auto___19949]));

var G__19950 = (i__6153__auto___19949 + (1));
i__6153__auto___19949 = G__19950;
continue;
} else {
}
break;
}

var G__19946 = args19944.length;
switch (G__19946) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19944.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,cljs.core.cst$sym$_STAR_,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__5082__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bound,cljs.core.cst$sym$_STAR_)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,bound));
if(and__5082__auto__){
var and__5082__auto____$1 = cljs.core.some(cljs.core.map_QMARK_,focus);
if(cljs.core.truth_(and__5082__auto____$1)){
return ((1) === cljs.core.count(focus));
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})())){
var vec__19947 = cljs.core.ffirst(focus);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19947,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19947,(1),null);
var G__19952 = focus_SINGLEQUOTE_;
var G__19953 = bound;
var G__19954 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k);
focus = G__19952;
bound = G__19953;
path = G__19954;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ref for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (om.next.ident[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__5750__auto__.call(null,this$,props));
} else {
var m__5750__auto____$1 = (om.next.ident["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,props) : m__5750__auto____$1.call(null,this$,props));
} else {
throw cljs.core.missing_protocol("Ident.ident",this$);
}
}
}
});

(om.next.Ident["_"] = true);

(om.next.ident["_"] = (function (this$,props){
return this$;
}));

/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (om.next.params[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto__.call(null,this$));
} else {
var m__5750__auto____$1 = (om.next.params["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (om.next.query[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto__.call(null,this$));
} else {
var m__5750__auto____$1 = (om.next.query["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__5750__auto__.call(null,this$,new_state));
} else {
var m__5750__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__5750__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (om.next._get_state[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto__.call(null,this$));
} else {
var m__5750__auto____$1 = (om.next._get_state["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (om.next._get_rendered_state[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto__.call(null,this$));
} else {
var m__5750__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto__.call(null,this$));
} else {
var m__5750__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5750__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__5082__auto__ = (x instanceof cljs.core.Symbol);
if(and__5082__auto__){
var G__19961 = cljs.core.name(x);
var G__19962 = "?";
return goog.string.startsWith(G__19961,G__19962);
} else {
return and__5082__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(x).substring((1)));
});
om.next.bind_query = (function om$next$bind_query(query,params){
var replace_var = (function om$next$bind_query_$_replace_var(node){
if(cljs.core.truth_(om.next.var_QMARK_(node))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,om.next.var__GT_keyword(node),node);
} else {
return node;
}
});
return clojure.walk.prewalk(replace_var,query);
});
om.next.component_QMARK_;

om.next.get_reconciler;

om.next.props;
om.next.get_local_query_data = (function om$next$get_local_query_data(component){
var G__19964 = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(component) : om.next.get_reconciler.call(null,component));
var G__19964__$1 = (((G__19964 == null))?null:cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__19964));
var G__19964__$2 = (((G__19964__$1 == null))?null:cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__19964__$1));
var G__19964__$3 = (((G__19964__$2 == null))?null:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__19964__$2) : cljs.core.deref.call(null,G__19964__$2)));
var G__19964__$4 = (((G__19964__$3 == null))?null:cljs.core.cst$kw$om$next_SLASH_queries.cljs$core$IFn$_invoke$arity$1(G__19964__$3));
var G__19964__$5 = (((G__19964__$4 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__19964__$4,component));
return G__19964__$5;
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data(component),om.next.query(component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data(component),om.next.params(component));
});
om.next.get_component_query = (function om$next$get_component_query(c){
var qps = om.next.get_local_query_data(c);
var q = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(qps,om.next.query(c));
var c_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(c),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c_SINGLEQUOTE_)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(qps,om.next.params(c))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,cljs.core.type(c)], null));
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,x))){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
return om.next.get_component_query(x);
} else {
var q = om.next.query(x);
var c = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(x)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,x], null));
}
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var x__$1 = (function (){var G__19969 = x.prototype;
return Object.create(G__19969);
})();
if(((!((x__$1 == null)))?(((false) || (x__$1.om$next$IQuery$))?true:(((!x__$1.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,x__$1):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,x__$1))){
var q = om.next.query(x__$1);
var c = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x__$1),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(x__$1)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,x__$1], null));
} else {
return null;
}
} else {
return null;
}
}
});
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$next$IQuery$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.next.IQuery,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.next.IQuery,x);
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$component,class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$basis_DASH_t], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write(writer__5693__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props(null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4423__auto__ = cljs.core.cst$kw$react_DASH_key.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto__)){
var rk = temp__4423__auto__;
return rk;
} else {
var temp__4423__auto____$1 = cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4423__auto____$1)){
var idx = temp__4423__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args19973 = [];
var len__6152__auto___19983 = arguments.length;
var i__6153__auto___19984 = (0);
while(true){
if((i__6153__auto___19984 < len__6152__auto___19983)){
args19973.push((arguments[i__6153__auto___19984]));

var G__19985 = (i__6153__auto___19984 + (1));
i__6153__auto___19984 = G__19985;
continue;
} else {
}
break;
}

var G__19975 = args19973.length;
switch (G__19975) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19973.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__19976){
var map__19977 = p__19976;
var map__19977__$1 = ((((!((map__19977 == null)))?((((map__19977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19977):map__19977);
var opts = map__19977__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19977__$1,cljs.core.cst$kw$validator);
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19977__$1,cljs.core.cst$kw$keyfn);
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$class)], 0)))].join('')));
}

return ((function (map__19977,map__19977__$1,opts,validator,keyfn){
return (function() { 
var G__19987__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$validator,cljs.core.cst$sym$props)], 0)))].join('')));
}
}

if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.next._STAR_instrument_STAR_,props,children);
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):om.next.compute_react_key(class$,props));
var ref = cljs.core.cst$kw$ref.cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__19979 = ref;
var G__19979__$1 = (((ref instanceof cljs.core.Keyword))?[cljs.core.str(G__19979)].join(''):G__19979);
return G__19979__$1;
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t(om.next._STAR_reconciler_STAR_):(0));
var G__19980 = class$;
var G__19981 = {"omcljs$value": om.next.om_props(props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_};
var G__19982 = children;
return React.createElement(G__19980,G__19981,G__19982);
}
};
var G__19987 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__19988__i = 0, G__19988__a = new Array(arguments.length -  1);
while (G__19988__i < G__19988__a.length) {G__19988__a[G__19988__i] = arguments[G__19988__i + 1]; ++G__19988__i;}
  children = new cljs.core.IndexedSeq(G__19988__a,0);
} 
return G__19987__delegate.call(this,props,children);};
G__19987.cljs$lang$maxFixedArity = 1;
G__19987.cljs$lang$applyTo = (function (arglist__19989){
var props = cljs.core.first(arglist__19989);
var children = cljs.core.rest(arglist__19989);
return G__19987__delegate(props,children);
});
G__19987.cljs$core$IFn$_invoke$arity$variadic = G__19987__delegate;
return G__19987;
})()
;
;})(map__19977,map__19977__$1,opts,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
return x.om$isComponent;
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
var G__19992 = c.props;
var G__19993 = k;
return goog.object.get(G__19992,G__19993);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_(x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_(x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_(x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
var G__19997 = c.props;
var G__19998 = k;
var G__19999 = v;
return goog.object.set(G__19997,G__19998,G__19999);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return om.next.get_prop(c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args20000 = [];
var len__6152__auto___20003 = arguments.length;
var i__6153__auto___20004 = (0);
while(true){
if((i__6153__auto___20004 < len__6152__auto___20003)){
args20000.push((arguments[i__6153__auto___20004]));

var G__20005 = (i__6153__auto___20004 + (1));
i__6153__auto___20004 = G__20005;
continue;
} else {
}
break;
}

var G__20002 = args20000.length;
switch (G__20002) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20000.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args20007 = [];
var len__6152__auto___20010 = arguments.length;
var i__6153__auto___20011 = (0);
while(true){
if((i__6153__auto___20011 < len__6152__auto___20010)){
args20007.push((arguments[i__6153__auto___20011]));

var G__20012 = (i__6153__auto___20011 + (1));
i__6153__auto___20011 = G__20012;
continue;
} else {
}
break;
}

var G__20009 = args20007.length;
switch (G__20009) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20007.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap(om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(prev_props),om.next.get_prev_props(cst)),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3(om.next.get_props(next_props),om.next.get_props(component.props),om.next.get_next_props(component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
var G__20016 = c.state;
var G__20017 = "omcljs$prev$value";
return goog.object.remove(G__20016,G__20017);
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(c.props),om.next.get_props(c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop(component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
return om.next.get_prop(component,"omcljs$depth");
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return component.props.key;
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__5094__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop(c,"omcljs$path");
});
om.next.shared = (function om$next$shared(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.get_prop(component,"omcljs$shared");
});
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.get_prop(component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

var G__20022 = c.state;
var G__20023_20026 = G__20022;
var G__20024_20027 = "omcljs$next$value";
var G__20025_20028 = om.next.om_props(next_props,om.next.protocols.basis_t(om.next.get_reconciler(c)));
goog.object.set(G__20023_20026,G__20024_20027,G__20025_20028);

return G__20022;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(component.props),om.next.get_props(component.state)));
});
/**
 * Add computed properties to props.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if(cljs.core.vector_QMARK_(props)){
var G__20031 = props;
var G__20031__$1 = ((!(cljs.core.empty_QMARK_(computed_map)))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__20031,cljs.core.assoc,cljs.core.cst$kw$om$next_SLASH_computed,computed_map):G__20031);
return G__20031__$1;
} else {
var G__20032 = props;
var G__20032__$1 = ((!(cljs.core.empty_QMARK_(computed_map)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20032,cljs.core.cst$kw$om$next_SLASH_computed,computed_map):G__20032);
return G__20032__$1;
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args20033 = [];
var len__6152__auto___20038 = arguments.length;
var i__6153__auto___20039 = (0);
while(true){
if((i__6153__auto___20039 < len__6152__auto___20038)){
args20033.push((arguments[i__6153__auto___20039]));

var G__20040 = (i__6153__auto___20039 + (1));
i__6153__auto___20039 = G__20040;
continue;
} else {
}
break;
}

var G__20035 = args20033.length;
switch (G__20035) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20033.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
var props = (function (){var G__20036 = x;
var G__20036__$1 = ((om.next.component_QMARK_(x))?om.next.props(G__20036):G__20036);
return G__20036__$1;
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_computed], null),(function (){var G__20037 = k_or_ks;
var G__20037__$1 = ((!(cljs.core.sequential_QMARK_(k_or_ks)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__20037],null)):G__20037);
return G__20037__$1;
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;
/**
 * Given a component return its ident
 */
om.next.get_ident = (function om$next$get_ident(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.ident(component,om.next.props(component));
});
om.next.schedule_render_BANG_;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component))){
om.next._set_state_BANG_(component,new_state);
} else {
var G__20047_20050 = component.state;
var G__20048_20051 = "omcljs$pendingState";
var G__20049_20052 = new_state;
goog.object.set(G__20047_20050,G__20048_20051,G__20049_20052);
}

var temp__4423__auto__ = om.next.get_reconciler(component);
if(cljs.core.truth_(temp__4423__auto__)){
var r = temp__4423__auto__;
om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return (om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_render_BANG_.call(null,r));
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args20053 = [];
var len__6152__auto___20057 = arguments.length;
var i__6153__auto___20058 = (0);
while(true){
if((i__6153__auto___20058 < len__6152__auto___20057)){
args20053.push((arguments[i__6153__auto___20058]));

var G__20059 = (i__6153__auto___20058 + (1));
i__6153__auto___20058 = G__20059;
continue;
} else {
}
break;
}

var G__20055 = args20053.length;
switch (G__20055) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20053.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component)))?om.next._get_state(component):(function (){var temp__4425__auto__ = component.state;
if(cljs.core.truth_(temp__4425__auto__)){
var state = temp__4425__auto__;
var or__5094__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s update-in.
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args20061 = [];
var len__6152__auto___20086 = arguments.length;
var i__6153__auto___20087 = (0);
while(true){
if((i__6153__auto___20087 < len__6152__auto___20086)){
args20061.push((arguments[i__6153__auto___20087]));

var G__20088 = (i__6153__auto___20087 + (1));
i__6153__auto___20087 = G__20088;
continue;
} else {
}
break;
}

var G__20070 = args20061.length;
switch (G__20070) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__6171__auto__ = (new cljs.core.IndexedSeq(args20061.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__6171__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_(component,(function (){var G__20071 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20071) : f.call(null,G__20071));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_(component,(function (){var G__20072 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20073 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__20072,G__20073) : f.call(null,G__20072,G__20073));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_(component,(function (){var G__20074 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20075 = arg0;
var G__20076 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__20074,G__20075,G__20076) : f.call(null,G__20074,G__20075,G__20076));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_(component,(function (){var G__20077 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20078 = arg0;
var G__20079 = arg1;
var G__20080 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__20077,G__20078,G__20079,G__20080) : f.call(null,G__20077,G__20078,G__20079,G__20080));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_(component,(function (){var G__20081 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__20082 = arg0;
var G__20083 = arg1;
var G__20084 = arg2;
var G__20085 = arg3;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__20081,G__20082,G__20083,G__20084,G__20085) : f.call(null,G__20081,G__20082,G__20083,G__20084,G__20085));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,om.next.get_state.cljs$core$IFn$_invoke$arity$1(component),arg0,arg1,arg2,cljs.core.array_seq([arg3,arg_rest], 0)));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq20062){
var G__20063 = cljs.core.first(seq20062);
var seq20062__$1 = cljs.core.next(seq20062);
var G__20064 = cljs.core.first(seq20062__$1);
var seq20062__$2 = cljs.core.next(seq20062__$1);
var G__20065 = cljs.core.first(seq20062__$2);
var seq20062__$3 = cljs.core.next(seq20062__$2);
var G__20066 = cljs.core.first(seq20062__$3);
var seq20062__$4 = cljs.core.next(seq20062__$3);
var G__20067 = cljs.core.first(seq20062__$4);
var seq20062__$5 = cljs.core.next(seq20062__$4);
var G__20068 = cljs.core.first(seq20062__$5);
var seq20062__$6 = cljs.core.next(seq20062__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20063,G__20064,G__20065,G__20066,G__20067,G__20068,seq20062__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component):false)):cljs.core.native_satisfies_QMARK_(om.next.ILocalState,component))){
return om.next._get_rendered_state(component);
} else {
var G__20093 = component;
var G__20093__$1 = (((G__20093 == null))?null:G__20093.state);
var G__20093__$2 = (((G__20093__$1 == null))?null:goog.object.get(G__20093__$1,"omcljs$state"));
return G__20093__$2;
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.ILocalState,c):false)):cljs.core.native_satisfies_QMARK_(om.next.ILocalState,c))){
return om.next._merge_pending_state_BANG_(c);
} else {
var temp__4425__auto__ = (function (){var G__20097 = c;
var G__20097__$1 = (((G__20097 == null))?null:G__20097.state);
var G__20097__$2 = (((G__20097__$1 == null))?null:goog.object.get(G__20097__$1,"omcljs$pendingState"));
return G__20097__$2;
})();
if(cljs.core.truth_(temp__4425__auto__)){
var pending = temp__4425__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args20098 = [];
var len__6152__auto___20101 = arguments.length;
var i__6153__auto___20102 = (0);
while(true){
if((i__6153__auto___20102 < len__6152__auto___20101)){
args20098.push((arguments[i__6153__auto___20102]));

var G__20103 = (i__6153__auto___20102 + (1));
i__6153__auto___20102 = G__20103;
continue;
} else {
}
break;
}

var G__20100 = args20098.length;
switch (G__20100) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20098.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return component.setState({"omcljs$state": new_state},null);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Change the query of a component. Will schedule a re-render.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(component,new_query){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

var r = om.next.get_reconciler(component);
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var st = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st) : cljs.core.deref.call(null,st)));
if((om.next._STAR_logger_STAR_ == null)){
} else {
var G__20107_20109 = om.next._STAR_logger_STAR_;
var G__20108_20110 = [cljs.core.str((function (){var temp__4425__auto__ = om.next.ident(component,om.next.props(component));
if(cljs.core.truth_(temp__4425__auto__)){
var ref = temp__4425__auto__;
return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref], 0))),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str("changed query '"),cljs.core.str(new_query),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
goog.log.info(G__20107_20109,G__20108_20110);
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,component], null),cljs.core.merge,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query,new_query], null)], 0));

om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

om.next.protocols.reindex_BANG_(r);

return null;
});
/**
 * Change the query parameters of a component. Will schedule a re-render.
 */
om.next.set_params_BANG_ = (function om$next$set_params_BANG_(component,new_params){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

var r = om.next.get_reconciler(component);
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var st = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st) : cljs.core.deref.call(null,st)));
if((om.next._STAR_logger_STAR_ == null)){
} else {
var G__20113_20115 = om.next._STAR_logger_STAR_;
var G__20114_20116 = [cljs.core.str((function (){var temp__4425__auto__ = om.next.ident(component,om.next.props(component));
if(cljs.core.truth_(temp__4425__auto__)){
var ref = temp__4425__auto__;
return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref], 0))),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str("changed query params "),cljs.core.str(new_params),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
goog.log.info(G__20113_20115,G__20114_20116);
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,component], null),cljs.core.merge,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,new_params], null)], 0));

om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

om.next.protocols.reindex_BANG_(r);

return null;
});
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_(x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__20118 = component.refs;
var G__20118__$1 = (((G__20118 == null))?null:goog.object.get(G__20118,name));
return G__20118__$1;
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

om.next.update_props_BANG_(c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args20119 = [];
var len__6152__auto___20122 = arguments.length;
var i__6153__auto___20123 = (0);
while(true){
if((i__6153__auto___20123 < len__6152__auto___20122)){
args20119.push((arguments[i__6153__auto___20123]));

var G__20124 = (i__6153__auto___20123 + (1));
i__6153__auto___20123 = G__20124;
continue;
} else {
}
break;
}

var G__20121 = args20119.length;
switch (G__20121) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20119.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

var c__$1 = c;
var ret = cljs.core._conj(cljs.core.List.EMPTY,cljs.core.type(c__$1));
while(true){
var temp__4423__auto__ = om.next.parent(c__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var p = temp__4423__auto__;
if(cljs.core.truth_(om.next.iquery_QMARK_(p))){
var G__20128 = p;
var G__20129 = cljs.core.cons(cljs.core.type(p),ret);
c__$1 = G__20128;
ret = G__20129;
continue;
} else {
var G__20130 = p;
var G__20131 = ret;
c__$1 = G__20130;
ret = G__20131;
continue;
}
} else {
var seen = (function (){var G__20127 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20127) : cljs.core.atom.call(null,G__20127));
})();
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (c__$1,ret,seen,temp__4423__auto__){
return (function (x){
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seen) : cljs.core.deref.call(null,seen)),x)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,x);

return x;
}
});})(c__$1,ret,seen,temp__4423__auto__))
,ret);
}
break;
}
});
om.next.join_value = (function om$next$join_value(node){
if(cljs.core.seq_QMARK_(node)){
return cljs.core.ffirst(node);
} else {
return cljs.core.first(node);
}
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$subquery_DASH_ref),cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$subquery_DASH_ref))], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(subquery_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$subquery_DASH_class)], 0)))].join('')));
}

var ref = (function (){var G__20133 = subquery_ref;
var G__20133__$1 = (((subquery_ref instanceof cljs.core.Keyword))?[cljs.core.str(G__20133)].join(''):G__20133);
return G__20133__$1;
})();
if((om.next.component_QMARK_(x)) && (om.next.mounted_QMARK_(x))){
return om.next.get_query(om.next.react_ref(x,ref));
} else {
return om.next.get_query(subquery_class);
}
});
om.next.reconciler_QMARK_;
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t(reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_(reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_(reconciler);
});
if(cljs.core.fn_QMARK_(om.next._STAR_raf_STAR_)){
return (om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1(f) : om.next._STAR_raf_STAR_.call(null,f));
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_(reconciler))){
var G__20136 = (function (){
return om.next.protocols.send_BANG_(reconciler);
});
var G__20137 = (300);
return setTimeout(G__20136,G__20137);
} else {
return null;
}
});
om.next.remove_root_BANG_;
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args20138 = [];
var len__6152__auto___20141 = arguments.length;
var i__6153__auto___20142 = (0);
while(true){
if((i__6153__auto___20142 < len__6152__auto___20141)){
args20138.push((arguments[i__6153__auto___20142]));

var G__20143 = (i__6153__auto___20142 + (1));
i__6153__auto___20142 = G__20143;
continue;
} else {
}
break;
}

var G__20140 = args20138.length;
switch (G__20140) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20138.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$root_DASH_class)], 0)))].join('')));
}

var temp__4425__auto___20145 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.next.roots) : cljs.core.deref.call(null,om.next.roots)),target);
if(cljs.core.truth_(temp__4425__auto___20145)){
var old_reconciler_20146 = temp__4425__auto___20145;
(om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_20146,target) : om.next.remove_root_BANG_.call(null,old_reconciler_20146,target));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_(reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_(reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__5749__auto__ = (((c == null))?null:c);
var m__5750__auto__ = (om.next.tx_intercept[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return (m__5750__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto__.cljs$core$IFn$_invoke$arity$2(c,tx) : m__5750__auto__.call(null,c,tx));
} else {
var m__5750__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__5750__auto____$1 == null))){
return (m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5750__auto____$1.cljs$core$IFn$_invoke$arity$2(c,tx) : m__5750__auto____$1.call(null,c,tx));
} else {
throw cljs.core.missing_protocol("ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,cljs.core.cst$kw$shared,cljs.core.cst$kw$parser], null));
});
om.next.gather_sends = (function om$next$gather_sends(p__20148,tx,remotes){
var map__20153 = p__20148;
var map__20153__$1 = ((((!((map__20153 == null)))?((((map__20153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20153):map__20153);
var env = map__20153__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20153__$1,cljs.core.cst$kw$parser);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__20153,map__20153__$1,env,parser){
return (function (p1__20147_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__20147_SHARP_,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,tx,p1__20147_SHARP_) : parser.call(null,env,tx,p1__20147_SHARP_))],null));
});})(map__20153,map__20153__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__20153,map__20153__$1,env,parser){
return (function (p__20155){
var vec__20156 = p__20155;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156,(1),null);
return (cljs.core.count(v) > (0));
});})(map__20153,map__20153__$1,env,parser))
)),remotes);
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__5082__auto__ = c;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not(ref);
} else {
return and__5082__auto__;
}
})())?om.next.ident(c,om.next.props(c)):ref);
var env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om.next.to_env(cfg),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reconciler,r,cljs.core.cst$kw$component,c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref__$1], null):null)], 0));
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(function (){var G__20160 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20160) : cljs.core.deref.call(null,G__20160));
})());
var ___$1 = (((om.next._STAR_logger_STAR_ == null))?null:(function (){var G__20161 = om.next._STAR_logger_STAR_;
var G__20162 = [cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref__$1], 0))),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
return goog.log.info(G__20161,G__20162);
})());
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends(env,tx,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
om.next.protocols.queue_BANG_(r,cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(ref__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref__$1], null):cljs.core.PersistentVector.EMPTY),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.keys(v))));

if(cljs.core.empty_QMARK_(snds)){
return null;
} else {
om.next.protocols.queue_sends_BANG_(r,snds);

return om.next.schedule_sends_BANG_(r);
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering. If given a reconciler can be
 * optionally passed a ref as the second argument.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args20163 = [];
var len__6152__auto___20168 = arguments.length;
var i__6153__auto___20169 = (0);
while(true){
if((i__6153__auto___20169 < len__6152__auto___20168)){
args20163.push((arguments[i__6153__auto___20169]));

var G__20170 = (i__6153__auto___20169 + (1));
i__6153__auto___20169 = G__20170;
continue;
} else {
}
break;
}

var G__20165 = args20163.length;
switch (G__20165) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20163.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.vector_QMARK_(tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$tx)], 0)))].join('')));
}

if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))){
return om.next.transact_STAR_(x,null,null,tx);
} else {
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,x):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("transact! invoked by component "),cljs.core.str(x),cljs.core.str(" that does not implement IQuery")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IQuery,cljs.core.cst$sym$x)], 0)))].join('')));
}

var p = om.next.parent(x);
var tx__$1 = tx;
while(true){
if((p == null)){
return om.next.transact_STAR_(om.next.get_reconciler(x),x,null,tx__$1);
} else {
var tx__$2 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.ITxIntercept,p):false)):cljs.core.native_satisfies_QMARK_(om.next.ITxIntercept,p)))?om.next.tx_intercept(p,tx__$1):tx__$1);
var G__20172 = om.next.parent(p);
var G__20173 = tx__$2;
p = G__20172;
tx__$1 = G__20173;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_(r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__20174){
var map__20177 = p__20174;
var map__20177__$1 = ((((!((map__20177 == null)))?((((map__20177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20177):map__20177);
var opts = map__20177__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20177__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20177__$1,cljs.core.cst$kw$mutate);
if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$opts)], 0)))].join('')));
}

return om.next.impl.parser.parser(opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
om.next.join_QMARK_ = (function om$next$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_(x))?cljs.core.first(x):x);
return cljs.core.map_QMARK_(x__$1);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,__meta,__extmap,__hash){
this.indexes = indexes;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = (function (){var G__20185 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20185) : cljs.core.atom.call(null,G__20185));
})();
var class_path__GT_query = (function (){var G__20186 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20186) : cljs.core.atom.call(null,G__20186));
})();
var rootq = om.next.get_query(x);
var class$ = (function (){var G__20187 = x;
var G__20187__$1 = ((om.next.component_QMARK_(x))?cljs.core.type(G__20187):G__20187);
return G__20187__$1;
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,selector,path,classpath){
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([om.next.query_template(om.next.focus_query(rootq,path),path)], 0));
} else {
}

if(cljs.core.vector_QMARK_(selector)){
var map__20274 = cljs.core.group_by(om.next.join_QMARK_,selector);
var map__20274__$1 = ((((!((map__20274 == null)))?((((map__20274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20274):map__20274);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20274__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20274__$1,true);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (map__20274,map__20274__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__20179_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__20179_SHARP_,cljs.core.zipmap(props,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([class$__$1], true)))], 0));
});})(map__20274,map__20274__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var seq__20276 = cljs.core.seq(joins);
var chunk__20277 = null;
var count__20278 = (0);
var i__20279 = (0);
while(true){
if((i__20279 < count__20278)){
var join = chunk__20277.cljs$core$IIndexed$_nth$arity$2(null,i__20279);
var vec__20280_20298 = om.next.join_value(join);
var prop_20299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20280_20298,(0),null);
var selector_SINGLEQUOTE__20300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20280_20298,(1),null);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__20276,chunk__20277,count__20278,i__20279,vec__20280_20298,prop_20299,selector_SINGLEQUOTE__20300,join,map__20274,map__20274__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__20180_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__20180_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_20299,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false)], 0));
});})(seq__20276,chunk__20277,count__20278,i__20279,vec__20280_20298,prop_20299,selector_SINGLEQUOTE__20300,join,map__20274,map__20274__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__20301 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(selector_SINGLEQUOTE__20300));
om$next$build_index_STAR_(class_SINGLEQUOTE__20301,selector_SINGLEQUOTE__20300,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_20299),(function (){var G__20281 = classpath;
var G__20281__$1 = (cljs.core.truth_(class_SINGLEQUOTE__20301)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20281,class_SINGLEQUOTE__20301):G__20281);
return G__20281__$1;
})());

var G__20302 = seq__20276;
var G__20303 = chunk__20277;
var G__20304 = count__20278;
var G__20305 = (i__20279 + (1));
seq__20276 = G__20302;
chunk__20277 = G__20303;
count__20278 = G__20304;
i__20279 = G__20305;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__20276);
if(temp__4425__auto__){
var seq__20276__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20276__$1)){
var c__5897__auto__ = cljs.core.chunk_first(seq__20276__$1);
var G__20306 = cljs.core.chunk_rest(seq__20276__$1);
var G__20307 = c__5897__auto__;
var G__20308 = cljs.core.count(c__5897__auto__);
var G__20309 = (0);
seq__20276 = G__20306;
chunk__20277 = G__20307;
count__20278 = G__20308;
i__20279 = G__20309;
continue;
} else {
var join = cljs.core.first(seq__20276__$1);
var vec__20282_20310 = om.next.join_value(join);
var prop_20311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20282_20310,(0),null);
var selector_SINGLEQUOTE__20312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20282_20310,(1),null);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__20276,chunk__20277,count__20278,i__20279,vec__20282_20310,prop_20311,selector_SINGLEQUOTE__20312,join,seq__20276__$1,temp__4425__auto__,map__20274,map__20274__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__20180_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__20180_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_20311,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false)], 0));
});})(seq__20276,chunk__20277,count__20278,i__20279,vec__20282_20310,prop_20311,selector_SINGLEQUOTE__20312,join,seq__20276__$1,temp__4425__auto__,map__20274,map__20274__$1,props,joins,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__20313 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(selector_SINGLEQUOTE__20312));
om$next$build_index_STAR_(class_SINGLEQUOTE__20313,selector_SINGLEQUOTE__20312,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_20311),(function (){var G__20283 = classpath;
var G__20283__$1 = (cljs.core.truth_(class_SINGLEQUOTE__20313)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20283,class_SINGLEQUOTE__20313):G__20283);
return G__20283__$1;
})());

var G__20314 = cljs.core.next(seq__20276__$1);
var G__20315 = null;
var G__20316 = (0);
var G__20317 = (0);
seq__20276 = G__20314;
chunk__20277 = G__20315;
count__20278 = G__20316;
i__20279 = G__20317;
continue;
}
} else {
return null;
}
}
break;
}
} else {
var seq__20284 = cljs.core.seq(selector);
var chunk__20285 = null;
var count__20286 = (0);
var i__20287 = (0);
while(true){
if((i__20287 < count__20286)){
var vec__20288 = chunk__20285.cljs$core$IIndexed$_nth$arity$2(null,i__20287);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20288,(0),null);
var selector_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20288,(1),null);
var class_SINGLEQUOTE__20318 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(selector_SINGLEQUOTE_));
om$next$build_index_STAR_(class_SINGLEQUOTE__20318,selector_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),(function (){var G__20289 = classpath;
var G__20289__$1 = (cljs.core.truth_(class_SINGLEQUOTE__20318)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20289,class_SINGLEQUOTE__20318):G__20289);
return G__20289__$1;
})());

var G__20319 = seq__20284;
var G__20320 = chunk__20285;
var G__20321 = count__20286;
var G__20322 = (i__20287 + (1));
seq__20284 = G__20319;
chunk__20285 = G__20320;
count__20286 = G__20321;
i__20287 = G__20322;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__20284);
if(temp__4425__auto__){
var seq__20284__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20284__$1)){
var c__5897__auto__ = cljs.core.chunk_first(seq__20284__$1);
var G__20323 = cljs.core.chunk_rest(seq__20284__$1);
var G__20324 = c__5897__auto__;
var G__20325 = cljs.core.count(c__5897__auto__);
var G__20326 = (0);
seq__20284 = G__20323;
chunk__20285 = G__20324;
count__20286 = G__20325;
i__20287 = G__20326;
continue;
} else {
var vec__20290 = cljs.core.first(seq__20284__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20290,(0),null);
var selector_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20290,(1),null);
var class_SINGLEQUOTE__20327 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(selector_SINGLEQUOTE_));
om$next$build_index_STAR_(class_SINGLEQUOTE__20327,selector_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),(function (){var G__20291 = classpath;
var G__20291__$1 = (cljs.core.truth_(class_SINGLEQUOTE__20327)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__20291,class_SINGLEQUOTE__20327):G__20291);
return G__20291__$1;
})());

var G__20328 = cljs.core.next(seq__20284__$1);
var G__20329 = null;
var G__20330 = (0);
var G__20331 = (0);
seq__20284 = G__20328;
chunk__20285 = G__20329;
count__20286 = G__20330;
i__20287 = G__20331;
continue;
}
} else {
return null;
}
}
break;
}
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_(class$,rootq,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [class$], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prop_DASH__GT_classes,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prop__GT_classes) : cljs.core.deref.call(null,prop__GT_classes)),cljs.core.cst$kw$class_DASH_path_DASH__GT_query,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query))], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.type(c)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ref = om.next.ident(c,om.next.props(c));
if(!(om.next.component_QMARK_(ref))){
var G__20292 = indexes__$2;
var G__20292__$1 = (cljs.core.truth_(ref)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__20292,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ref], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c):G__20292);
return G__20292__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.type(c)], null),cljs.core.disj,c);
var ref = om.next.ident(c,om.next.props(c));
if(!(om.next.component_QMARK_(ref))){
var G__20293 = indexes__$2;
var G__20293__$1 = (cljs.core.truth_(ref)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__20293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ref], null),cljs.core.disj,c):G__20293);
return G__20293__$1;
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
if(om.next.component_QMARK_(k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var cs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,k], null),cljs.core.cst$kw$om$next_SLASH_not_DASH_found);
if(!(cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$om$next_SLASH_not_DASH_found,cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prop_DASH__GT_classes,k], null));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (cs__$1,cs,indexes__$1,___$1){
return (function (p1__20181_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,p1__20181_SHARP_], null));
});})(cs__$1,cs,indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
throw (new Error([cljs.core.str("Invalid key "),cljs.core.str(k),cljs.core.str(", key must be ref or keyword")].join('')));
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5708__auto__,k__5709__auto__){
var self__ = this;
var this__5708__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5708__auto____$1,k__5709__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k20183,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__20294 = (((k20183 instanceof cljs.core.Keyword))?k20183.fqn:null);
switch (G__20294) {
case "indexes":
return self__.indexes;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20183,else__5711__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5722__auto__,writer__5723__auto__,opts__5724__auto__){
var self__ = this;
var this__5722__auto____$1 = this;
var pr_pair__5725__auto__ = ((function (this__5722__auto____$1){
return (function (keyval__5726__auto__){
return cljs.core.pr_sequential_writer(writer__5723__auto__,cljs.core.pr_writer,""," ","",opts__5724__auto__,keyval__5726__auto__);
});})(this__5722__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5723__auto__,pr_pair__5725__auto__,"#om.next.Indexer{",", ","}",opts__5724__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20182){
var self__ = this;
var G__20182__$1 = this;
return (new cljs.core.RecordIter((0),G__20182__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indexes], null),cljs.core._iterator(self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5706__auto__){
var self__ = this;
var this__5706__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5702__auto__){
var self__ = this;
var this__5702__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5712__auto__){
var self__ = this;
var this__5712__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5703__auto__){
var self__ = this;
var this__5703__auto____$1 = this;
var h__5529__auto__ = self__.__hash;
if(!((h__5529__auto__ == null))){
return h__5529__auto__;
} else {
var h__5529__auto____$1 = cljs.core.hash_imap(this__5703__auto____$1);
self__.__hash = h__5529__auto____$1;

return h__5529__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5704__auto__,other__5705__auto__){
var self__ = this;
var this__5704__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5082__auto__ = other__5705__auto__;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = (this__5704__auto____$1.constructor === other__5705__auto__.constructor);
if(and__5082__auto____$1){
return cljs.core.equiv_map(this__5704__auto____$1,other__5705__auto__);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5717__auto__,k__5718__auto__){
var self__ = this;
var this__5717__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$indexes,null], null), null),k__5718__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5717__auto____$1),self__.__meta),k__5718__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5718__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__20182){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__20295 = cljs.core.keyword_identical_QMARK_;
var expr__20296 = k__5716__auto__;
if(cljs.core.truth_((pred__20295.cljs$core$IFn$_invoke$arity$2 ? pred__20295.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes,expr__20296) : pred__20295.call(null,cljs.core.cst$kw$indexes,expr__20296)))){
return (new om.next.Indexer(G__20182,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5716__auto__,G__20182),null));
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5720__auto__){
var self__ = this;
var this__5720__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__20182){
var self__ = this;
var this__5707__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,G__20182,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5713__auto__,entry__5714__auto__){
var self__ = this;
var this__5713__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5714__auto__)){
return cljs.core._assoc(this__5713__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5713__auto____$1,entry__5714__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$indexes], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__5742__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__5742__auto__,writer__5743__auto__){
return cljs.core._write(writer__5743__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes){
return (new om.next.Indexer(indexes,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__20184){
return (new om.next.Indexer(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(G__20184),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20184,cljs.core.cst$kw$indexes),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(){
return (new om.next.Indexer((function (){var G__20334 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20334) : cljs.core.atom.call(null,G__20334));
})(),null,null,null));
});
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return om.next.protocols.key__GT_components(indexer,ref);
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(om.next.protocols.key__GT_components(indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,class$], null)));
});
om.next.class_path__GT_query = (function om$next$class_path__GT_query(x,y){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
var cp = ((om.next.component_QMARK_(y))?om.next.class_path(y):y);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.zip.root),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args20336 = [];
var len__6152__auto___20343 = arguments.length;
var i__6153__auto___20344 = (0);
while(true){
if((i__6153__auto___20344 < len__6152__auto___20343)){
args20336.push((arguments[i__6153__auto___20344]));

var G__20345 = (i__6153__auto___20344 + (1));
i__6153__auto___20344 = G__20345;
continue;
} else {
}
break;
}

var G__20338 = args20336.length;
switch (G__20338) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20336.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,component))){
return om.next.replace(cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20340 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20340) : cljs.core.deref.call(null,G__20340));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,om.next.class_path(component)], null))),om.next.get_query(component));
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,path){
if(((!((component == null)))?(((false) || (component.om$next$IQuery$))?true:(((!component.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,component):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,component))){
var path_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),path);
var cp = om.next.class_path(component);
var qs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__20342 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20342) : cljs.core.deref.call(null,G__20342));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null));
if(!(cljs.core.empty_QMARK_(qs))){
var q = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (path_SINGLEQUOTE_,cp,qs){
return (function (p1__20335_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path_SINGLEQUOTE_,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__20335_SHARP_),path_SINGLEQUOTE_));
});})(path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace(q,om.next.get_query(component));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;
om.next.to_class = (function om$next$to_class(class$){
if(!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:(((!class$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.Ident,class$):false)):cljs.core.native_satisfies_QMARK_(om.next.Ident,class$)))){
var G__20350 = class$.prototype;
return Object.create(G__20350);
} else {
return class$;
}
});
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(selector,data,refs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),selector)){
return data;
} else {
if(cljs.core.map_QMARK_(selector)){
var class$ = om.next.to_class(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(selector)));
var ref = om.next.ident(class$,data);
return om$next$normalize_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(selector,cljs.core.first(ref)),data,refs);
} else {
var q = cljs.core.seq(selector);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((q == null))){
var node = cljs.core.first(q);
if(cljs.core.truth_(om.next.join_QMARK_(node))){
var vec__20359 = om.next.join_value(node);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20359,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20359,(1),null);
var class$ = om.next.to_class(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel)));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if(cljs.core.map_QMARK_(v)){
var x = om$next$normalize_STAR_(sel,v,refs);
var i = om.next.ident(class$,v);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.array_seq([x], 0));

var G__20362 = cljs.core.next(q);
var G__20363 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__20362;
ret = G__20363;
continue;
} else {
if(cljs.core.vector_QMARK_(v)){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__20359,k,sel,class$,v,node){
return (function (p1__20351_SHARP_){
return om$next$normalize_STAR_(sel,p1__20351_SHARP_,refs);
});})(q,ret,vec__20359,k,sel,class$,v,node))
),v);
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__20359,k,sel,class$,v,node){
return (function (p1__20352_SHARP_){
return om.next.ident(class$,p1__20352_SHARP_);
});})(q,ret,xs,vec__20359,k,sel,class$,v,node))
),xs);
if(cljs.core.vector_QMARK_(sel)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst(is)], null),((function (q,ret,xs,is,vec__20359,k,sel,class$,v,node){
return (function (ys){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([ys,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,is),xs)], 0));
});})(q,ret,xs,is,vec__20359,k,sel,class$,v,node))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,xs,is,vec__20359,k,sel,class$,v,node){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,xs,is,vec__20359,k,sel,class$,v,node){
return (function (ret__$1,p__20360){
var vec__20361 = p__20360;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20361,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20361,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,xs,is,vec__20359,k,sel,class$,v,node))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,xs,is,vec__20359,k,sel,class$,v,node))
);
}

var G__20364 = cljs.core.next(q);
var G__20365 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__20364;
ret = G__20365;
continue;
} else {
if((v == null)){
var G__20366 = cljs.core.next(q);
var G__20367 = ret;
q = G__20366;
ret = G__20367;
continue;
} else {
var G__20368 = cljs.core.next(q);
var G__20369 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__20368;
ret = G__20369;
continue;

}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(node))?cljs.core.first(node):node);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((v == null)){
var G__20370 = cljs.core.next(q);
var G__20371 = ret;
q = G__20370;
ret = G__20371;
continue;
} else {
var G__20372 = cljs.core.next(q);
var G__20373 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__20372;
ret = G__20373;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
});
/**
 * Given a Om component class or instance and some data, use the component's
 * query to transform the data into normal form. If merge-ref option is true,
 * will return refs in the result instead of as metadata.
 */
om.next.normalize = (function om$next$normalize(var_args){
var args20374 = [];
var len__6152__auto___20378 = arguments.length;
var i__6153__auto___20379 = (0);
while(true){
if((i__6153__auto___20379 < len__6152__auto___20378)){
args20374.push((arguments[i__6153__auto___20379]));

var G__20380 = (i__6153__auto___20379 + (1));
i__6153__auto___20379 = G__20380;
continue;
} else {
}
break;
}

var G__20376 = args20374.length;
switch (G__20376) {
case 2:
return om.next.normalize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.normalize.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20374.length)].join('')));

}
});

om.next.normalize.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.normalize.cljs$core$IFn$_invoke$arity$3(x,data,false);
});

om.next.normalize.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_refs){
var refs = (function (){var G__20377 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20377) : cljs.core.atom.call(null,G__20377));
})();
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:om.next.get_query(x));
var ret = om.next.normalize_STAR_(x__$1,data,refs);
if(merge_refs){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ret,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs))], 0));
} else {
return cljs.core.with_meta(ret,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs)));
}
});

om.next.normalize.cljs$lang$maxFixedArity = 3;
om.next.sift_refs = (function om$next$sift_refs(res){
var map__20385 = cljs.core.group_by((function (p1__20382_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__20382_SHARP_));
}),res);
var map__20385__$1 = ((((!((map__20385 == null)))?((((map__20385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20385):map__20385);
var refs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20385__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20385__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,refs),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
om.next.ref_QMARK_ = (function om$next$ref_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (((2) === cljs.core.count(x))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)) instanceof cljs.core.Keyword));
});
/**
 * Given a selector, normalized data, and the normalized application state
 * return the denormalized data.
 */
om.next.denormalize = (function om$next$denormalize(selector,data,refs){
if(cljs.core.vector_QMARK_(data)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__20387_SHARP_){
return om$next$denormalize(selector,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,p1__20387_SHARP_),refs);
})),data);
} else {
var map__20397 = cljs.core.group_by(om.next.join_QMARK_,selector);
var map__20397__$1 = ((((!((map__20397 == null)))?((((map__20397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20397):map__20397);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,true);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var vec__20399 = om.next.join_value(join);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20399,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20399,(1),null);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,key);
if(!(om.next.ref_QMARK_(v))){
var G__20400 = cljs.core.next(joins__$1);
var G__20401 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,om$next$denormalize(sel,v,refs));
joins__$1 = G__20400;
ret = G__20401;
continue;
} else {
var G__20402 = cljs.core.next(joins__$1);
var G__20403 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key,om$next$denormalize(sel,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,v),refs));
joins__$1 = G__20402;
ret = G__20403;
continue;
}
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(data,props),ret], 0));
}
break;
}
}
});
om.next.queue_calls_BANG_ = (function om$next$queue_calls_BANG_(reconciler,res){
return om.next.protocols.queue_BANG_(reconciler,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res)));
});
om.next.merge_refs = (function om$next$merge_refs(tree,config,refs){
var map__20412 = config;
var map__20412__$1 = ((((!((map__20412 == null)))?((((map__20412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20412):map__20412);
var merge_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20412__$1,cljs.core.cst$kw$merge_DASH_ref);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20412__$1,cljs.core.cst$kw$indexer);
var step = ((function (map__20412,map__20412__$1,merge_ref,indexer){
return (function om$next$merge_refs_$_step(tree_SINGLEQUOTE_,p__20417){
var vec__20419 = p__20417;
var ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20419,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20419,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))){
var c = om.next.ref__GT_any(indexer,ref);
var props_SINGLEQUOTE_ = om.next.normalize.cljs$core$IFn$_invoke$arity$2(c,props);
var refs__$1 = cljs.core.meta(props_SINGLEQUOTE_);
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,(merge_ref.cljs$core$IFn$_invoke$arity$4 ? merge_ref.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ref,props_SINGLEQUOTE_) : merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props_SINGLEQUOTE_)),refs__$1);
} else {
return (merge_ref.cljs$core$IFn$_invoke$arity$4 ? merge_ref.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ref,props) : merge_ref.call(null,config,tree_SINGLEQUOTE_,ref,props));
}
});})(map__20412,map__20412__$1,merge_ref,indexer))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,res){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__20424 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20424) : cljs.core.deref.call(null,G__20424));
})());
var vec__20423 = om.next.sift_refs(res);
var refs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20423,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20423,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))?om.next.normalize.cljs$core$IFn$_invoke$arity$3(root,res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(config),((function (config,root,vec__20423,refs,res_SINGLEQUOTE_,res_SINGLEQUOTE___$1){
return (function (p1__20420_SHARP_){
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_refs(p1__20420_SHARP_,config,refs),res_SINGLEQUOTE___$1);
});})(config,root,vec__20423,refs,res_SINGLEQUOTE_,res_SINGLEQUOTE___$1))
);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(reconciler,delta){
om.next.queue_calls_BANG_(reconciler,delta);

return om.next.merge_novelty_BANG_(reconciler,delta);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5708__auto__,k__5709__auto__){
var self__ = this;
var this__5708__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5708__auto____$1,k__5709__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5710__auto__,k20432,else__5711__auto__){
var self__ = this;
var this__5710__auto____$1 = this;
var G__20434 = (((k20432 instanceof cljs.core.Keyword))?k20432.fqn:null);
switch (G__20434) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20432,else__5711__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queue], null),cljs.core.into,cljs.core.array_seq([ks], 0));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued_DASH_sends], null),cljs.core.cst$kw$merge_DASH_sends.cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.array_seq([sends], 0));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = cljs.core.cst$kw$queued_DASH_sends.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.empty_QMARK_(sends)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$queued_DASH_sends,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$sends_DASH_queued,false);
});})(sends,this$__$1))
);

return cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (p1__20430_SHARP_){
om.next.queue_calls_BANG_(this$__$1,p1__20430_SHARP_);

return om.next.merge_novelty_BANG_(this$__$1,p1__20430_SHARP_);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state));
var q = cljs.core.cst$kw$queue.cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core.empty_QMARK_(q)){
cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_skip], null),q)){
} else {
var cs_20456 = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (st,q,___$1){
return (function (p1__20427_SHARP_){
return om.next.protocols.key__GT_components(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),p1__20427_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__20428_SHARP_,p2__20429_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__20428_SHARP_,p2__20429_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__20435_20457 = self__.config;
var map__20435_20458__$1 = ((((!((map__20435_20457 == null)))?((((map__20435_20457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20435_20457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20435_20457):map__20435_20457);
var ui__GT_props_20459 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20435_20458__$1,cljs.core.cst$kw$ui_DASH__GT_props);
var env_20460 = om.next.to_env(self__.config);
var seq__20437_20461 = cljs.core.seq(cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs_20456));
var chunk__20438_20462 = null;
var count__20439_20463 = (0);
var i__20440_20464 = (0);
while(true){
if((i__20440_20464 < count__20439_20463)){
var c_20465 = chunk__20438_20462.cljs$core$IIndexed$_nth$arity$2(null,i__20440_20464);
if(om.next.mounted_QMARK_(c_20465)){
var computed_20466 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c_20465));
var next_props_20467 = om.next.computed((ui__GT_props_20459.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props_20459.cljs$core$IFn$_invoke$arity$2(env_20460,c_20465) : ui__GT_props_20459.call(null,env_20460,c_20465)),computed_20466);
if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c_20465,next_props_20467,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c_20465)))){
if(!((next_props_20467 == null))){
om.next.update_component_BANG_(c_20465,next_props_20467);
} else {
c_20465.forceUpdate();
}
} else {
}
} else {
}

var G__20468 = seq__20437_20461;
var G__20469 = chunk__20438_20462;
var G__20470 = count__20439_20463;
var G__20471 = (i__20440_20464 + (1));
seq__20437_20461 = G__20468;
chunk__20438_20462 = G__20469;
count__20439_20463 = G__20470;
i__20440_20464 = G__20471;
continue;
} else {
var temp__4425__auto___20472 = cljs.core.seq(seq__20437_20461);
if(temp__4425__auto___20472){
var seq__20437_20473__$1 = temp__4425__auto___20472;
if(cljs.core.chunked_seq_QMARK_(seq__20437_20473__$1)){
var c__5897__auto___20474 = cljs.core.chunk_first(seq__20437_20473__$1);
var G__20475 = cljs.core.chunk_rest(seq__20437_20473__$1);
var G__20476 = c__5897__auto___20474;
var G__20477 = cljs.core.count(c__5897__auto___20474);
var G__20478 = (0);
seq__20437_20461 = G__20475;
chunk__20438_20462 = G__20476;
count__20439_20463 = G__20477;
i__20440_20464 = G__20478;
continue;
} else {
var c_20479 = cljs.core.first(seq__20437_20473__$1);
if(om.next.mounted_QMARK_(c_20479)){
var computed_20480 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c_20479));
var next_props_20481 = om.next.computed((ui__GT_props_20459.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props_20459.cljs$core$IFn$_invoke$arity$2(env_20460,c_20479) : ui__GT_props_20459.call(null,env_20460,c_20479)),computed_20480);
if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c_20479,next_props_20481,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c_20479)))){
if(!((next_props_20481 == null))){
om.next.update_component_BANG_(c_20479,next_props_20481);
} else {
c_20479.forceUpdate();
}
} else {
}
} else {
}

var G__20482 = cljs.core.next(seq__20437_20473__$1);
var G__20483 = null;
var G__20484 = (0);
var G__20485 = (0);
seq__20437_20461 = G__20482;
chunk__20438_20462 = G__20483;
count__20439_20463 = G__20484;
i__20440_20464 = G__20485;
continue;
}
} else {
}
}
break;
}

}
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queue,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$sends_DASH_queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sends_DASH_queued], null),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rctor = om.next.factory.cljs$core$IFn$_invoke$arity$1(root_class);
if(((!((root_class == null)))?(((false) || (root_class.om$next$IQuery$))?true:(((!root_class.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,root_class):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,root_class))){
om.next.protocols.index_root(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__5082__auto__ = cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not(cljs.core.cst$kw$normalized.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))));
} else {
return and__5082__auto__;
}
})())){
var new_state_20486 = om.next.normalize.cljs$core$IFn$_invoke$arity$2(root_class,(function (){var G__20442 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20442) : cljs.core.deref.call(null,G__20442));
})());
var refs_20487 = cljs.core.meta(new_state_20486);
var G__20443_20488 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
var G__20444_20489 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_state_20486,refs_20487], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20443_20488,G__20444_20489) : cljs.core.reset_BANG_.call(null,G__20443_20488,G__20444_20489));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$normalized,true);

om.next.protocols.queue_BANG_(this$__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_skip], null));
} else {
}

var renderf = ((function (ret,rctor,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_20445 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_20446 = om.next._STAR_shared_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = cljs.core.cst$kw$root_DASH_render.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)),target);
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$root,c);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c) : cljs.core.reset_BANG_.call(null,ret,c));
} else {
return null;
}
}finally {om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20446;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20445;
}});})(ret,rctor,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,this$__$1){
return (function (){
var sel = om.next.get_query((function (){var or__5094__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return root_class;
}
})());
if(!((sel == null))){
var env = om.next.to_env(self__.config);
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
var snds = om.next.gather_sends(env,sel,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_(v)){
} else {
renderf(v);
}

if(cljs.core.empty_QMARK_(snds)){
return null;
} else {
var temp__4425__auto__ = cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4425__auto__)){
var send = temp__4425__auto__;
var G__20447 = snds;
var G__20448 = ((function (G__20447,send,temp__4425__auto__,env,v,snds,sel,renderf,ret,rctor,this$__$1){
return (function (p1__20425_SHARP_){
om.next.merge_novelty_BANG_(this$__$1,p1__20425_SHARP_);

return renderf(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel));
});})(G__20447,send,temp__4425__auto__,env,v,snds,sel,renderf,ret,rctor,this$__$1))
;
return (send.cljs$core$IFn$_invoke$arity$2 ? send.cljs$core$IFn$_invoke$arity$2(G__20447,G__20448) : send.call(null,G__20447,G__20448));
} else {
return null;
}
}
} else {
return renderf((function (){var G__20449 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20449) : cljs.core.deref.call(null,G__20449));
})());
}
});})(renderf,ret,rctor,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$render,parsef,cljs.core.cst$kw$root,root_class,cljs.core.cst$kw$remove,((function (renderf,parsef,ret,rctor,this$__$1){
return (function (){
cljs.core.remove_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),target);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (renderf,parsef,ret,rctor,this$__$1){
return (function (p1__20426_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20426_SHARP_,cljs.core.cst$kw$target),cljs.core.cst$kw$render),cljs.core.cst$kw$root),cljs.core.cst$kw$remove);
});})(renderf,parsef,ret,rctor,this$__$1))
);

return cljs.core.cst$kw$root_DASH_unmount.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
});})(renderf,parsef,ret,rctor,this$__$1))
], null));

cljs.core.add_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),target,((function (renderf,parsef,ret,rctor,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$t], null),cljs.core.inc);

return om.next.schedule_render_BANG_(this$__$1);
});})(renderf,parsef,ret,rctor,this$__$1))
);

parsef();

return ret;
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),cljs.core.cst$kw$root);
if(((!((root == null)))?(((false) || (root.om$next$IQuery$))?true:(((!root.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.next.IQuery,root):false)):cljs.core.native_satisfies_QMARK_(om.next.IQuery,root))){
return om.next.protocols.index_root(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),root);
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = cljs.core.cst$kw$remove.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.truth_(temp__4425__auto__)){
var remove = temp__4425__auto__;
return (remove.cljs$core$IFn$_invoke$arity$0 ? remove.cljs$core$IFn$_invoke$arity$0() : remove.call(null));
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5722__auto__,writer__5723__auto__,opts__5724__auto__){
var self__ = this;
var this__5722__auto____$1 = this;
var pr_pair__5725__auto__ = ((function (this__5722__auto____$1){
return (function (keyval__5726__auto__){
return cljs.core.pr_sequential_writer(writer__5723__auto__,cljs.core.pr_writer,""," ","",opts__5724__auto__,keyval__5726__auto__);
});})(this__5722__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5723__auto__,pr_pair__5725__auto__,"#om.next.Reconciler{",", ","}",opts__5724__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20431){
var self__ = this;
var G__20431__$1 = this;
return (new cljs.core.RecordIter((0),G__20431__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$state], null),cljs.core._iterator(self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5706__auto__){
var self__ = this;
var this__5706__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5702__auto__){
var self__ = this;
var this__5702__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5712__auto__){
var self__ = this;
var this__5712__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5703__auto__){
var self__ = this;
var this__5703__auto____$1 = this;
var h__5529__auto__ = self__.__hash;
if(!((h__5529__auto__ == null))){
return h__5529__auto__;
} else {
var h__5529__auto____$1 = cljs.core.hash_imap(this__5703__auto____$1);
self__.__hash = h__5529__auto____$1;

return h__5529__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5704__auto__,other__5705__auto__){
var self__ = this;
var this__5704__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5082__auto__ = other__5705__auto__;
if(cljs.core.truth_(and__5082__auto__)){
var and__5082__auto____$1 = (this__5704__auto____$1.constructor === other__5705__auto__.constructor);
if(and__5082__auto____$1){
return cljs.core.equiv_map(this__5704__auto____$1,other__5705__auto__);
} else {
return and__5082__auto____$1;
}
} else {
return and__5082__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5717__auto__,k__5718__auto__){
var self__ = this;
var this__5717__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$config,null,cljs.core.cst$kw$state,null], null), null),k__5718__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5717__auto____$1),self__.__meta),k__5718__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5718__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5715__auto__,k__5716__auto__,G__20431){
var self__ = this;
var this__5715__auto____$1 = this;
var pred__20451 = cljs.core.keyword_identical_QMARK_;
var expr__20452 = k__5716__auto__;
if(cljs.core.truth_((pred__20451.cljs$core$IFn$_invoke$arity$2 ? pred__20451.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$config,expr__20452) : pred__20451.call(null,cljs.core.cst$kw$config,expr__20452)))){
return (new om.next.Reconciler(G__20431,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20451.cljs$core$IFn$_invoke$arity$2 ? pred__20451.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state,expr__20452) : pred__20451.call(null,cljs.core.cst$kw$state,expr__20452)))){
return (new om.next.Reconciler(self__.config,G__20431,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5716__auto__,G__20431),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5720__auto__){
var self__ = this;
var this__5720__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5707__auto__,G__20431){
var self__ = this;
var this__5707__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__20431,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5713__auto__,entry__5714__auto__){
var self__ = this;
var this__5713__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5714__auto__)){
return cljs.core._assoc(this__5713__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5714__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5713__auto____$1,entry__5714__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__20454 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20454) : cljs.core.deref.call(null,G__20454));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$state], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__5742__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__5742__auto__,writer__5743__auto__){
return cljs.core._write(writer__5743__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__20433){
return (new om.next.Reconciler(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__20433),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__20433),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20433,cljs.core.cst$kw$config,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__20490,c){
var map__20495 = p__20490;
var map__20495__$1 = ((((!((map__20495 == null)))?((((map__20495.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20495.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20495):map__20495);
var env = map__20495__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20495__$1,cljs.core.cst$kw$parser);
var path = om.next.path(c);
var fq = om.next.full_query.cljs$core$IFn$_invoke$arity$2(c,path);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time();
var ui = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,fq) : parser.call(null,env,fq));
var e = cljs.core.system_time();
if((om.next._STAR_logger_STAR_ == null)){
} else {
var dt_20499 = (e - s);
if(((16) < dt_20499)){
var G__20497_20500 = om.next._STAR_logger_STAR_;
var G__20498_20501 = [cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_20499),cljs.core.str(" msecs")].join('');
goog.log.warning(G__20497_20500,G__20498_20501);
} else {
}
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui,path);
}
});
om.next.default_merge_ref = (function om$next$default_merge_ref(_,tree,ref,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,ref,cljs.core.merge,props);
});
/**
 * Construct a reconciler from a configuration map, the following options
 * are required:
 * 
 * :state   - the application state, must be IAtom.
 * :parser  - the parser to be used
 * :send    - required only if the parser will return a non-empty value when
 *            run against the supplied :remotes. send is a function of two
 *            arguments, the map of remote expressions keyed by remote target
 *            and a callback which should be invoked with the result from each
 *            remote target. Note this means the callback can be invoked
 *            multiple times to support parallel fetching and incremental
 *            loading if desired.
 * :remotes - a vector of keywords representing remote services which can
 *            evaluate query expressions. Defaults to [:remote]
 */
om.next.reconciler = (function om$next$reconciler(p__20509){
var map__20514 = p__20509;
var map__20514__$1 = ((((!((map__20514 == null)))?((((map__20514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20514):map__20514);
var config = map__20514__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20514__$1,cljs.core.cst$kw$root_DASH_render,((function (map__20514,map__20514__$1,config){
return (function (p1__20506_SHARP_,p2__20507_SHARP_){
return ReactDOM.render(p1__20506_SHARP_,p2__20507_SHARP_);
});})(map__20514,map__20514__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$normalize);
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20514__$1,cljs.core.cst$kw$merge_DASH_sends,((function (map__20514,map__20514__$1,config,root_render,normalize){
return (function (p1__20502_SHARP_,p2__20503_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__20502_SHARP_,p2__20503_SHARP_], 0));
});})(map__20514,map__20514__$1,config,root_render,normalize))
);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20514__$1,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote], null));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20514__$1,cljs.core.cst$kw$history,(100));
var merge_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20514__$1,cljs.core.cst$kw$merge_DASH_ref,om.next.default_merge_ref);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$state);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20514__$1,cljs.core.cst$kw$ui_DASH__GT_props,om.next.default_ui__GT_props);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$parser);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20514__$1,cljs.core.cst$kw$indexer,om.next.indexer);
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20514__$1,cljs.core.cst$kw$root_DASH_unmount,((function (map__20514,map__20514__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer){
return (function (p1__20508_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__20508_SHARP_);
});})(map__20514,map__20514__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$send);
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20514__$1,cljs.core.cst$kw$merge_DASH_tree,((function (map__20514,map__20514__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send){
return (function (p1__20504_SHARP_,p2__20505_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([p1__20504_SHARP_,p2__20505_SHARP_], 0));
});})(map__20514,map__20514__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send))
);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20514__$1,cljs.core.cst$kw$shared);
var optimize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20514__$1,cljs.core.cst$kw$optimize,((function (map__20514,map__20514__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(om.next.depth,cs);
});})(map__20514,map__20514__$1,config,root_render,normalize,merge_sends,remotes,history,merge_ref,state,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$config)], 0)))].join('')));
}

var idxr = (indexer.cljs$core$IFn$_invoke$arity$0 ? indexer.cljs$core$IFn$_invoke$arity$0() : indexer.call(null));
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.atom.call(null,state)));
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$merge_DASH_sends,cljs.core.cst$kw$remotes,cljs.core.cst$kw$history,cljs.core.cst$kw$merge_DASH_ref,cljs.core.cst$kw$state,cljs.core.cst$kw$parser,cljs.core.cst$kw$ui_DASH__GT_props,cljs.core.cst$kw$indexer,cljs.core.cst$kw$root_DASH_unmount,cljs.core.cst$kw$send,cljs.core.cst$kw$shared,cljs.core.cst$kw$merge_DASH_tree,cljs.core.cst$kw$optimize,cljs.core.cst$kw$root_DASH_render,cljs.core.cst$kw$normalize],[merge_sends,remotes,om.next.cache.cache(history),merge_ref,state_SINGLEQUOTE_,parser,ui__GT_props,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__5094__auto__ = !(norm_QMARK_);
if(or__5094__auto__){
return or__5094__auto__;
} else {
return normalize;
}
})()]),(function (){var G__20517 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$normalized,cljs.core.cst$kw$remove,cljs.core.cst$kw$queue,cljs.core.cst$kw$sends_DASH_queued,cljs.core.cst$kw$queued_DASH_sends,cljs.core.cst$kw$queued,cljs.core.cst$kw$render,cljs.core.cst$kw$root,cljs.core.cst$kw$t,cljs.core.cst$kw$target],[false,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20517) : cljs.core.atom.call(null,G__20517));
})(),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
return cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});

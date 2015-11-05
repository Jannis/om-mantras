// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
om.next.impl.parser.expr__GT_ast;
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dkey,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dkey,k,cljs.core.cst$kw$key,k], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__26525){
var vec__26528 = p__26525;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26528,(0),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26528,(1),null);
var call = vec__26528;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$quote,f)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(args) : om.next.impl.parser.expr__GT_ast.call(null,args)),cljs.core.cst$kw$target,(function (){var or__5094__auto__ = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(call));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.cst$kw$remote;
}
})());
} else {
var ast = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(f) : om.next.impl.parser.expr__GT_ast.call(null,f)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.merge,(function (){var or__5094__auto__ = args;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__26529 = ast;
var G__26529__$1 = (((cljs.core.cst$kw$dkey.cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26529,cljs.core.cst$kw$type,cljs.core.cst$kw$call):G__26529);
return G__26529__$1;
}
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var vec__26531 = cljs.core.first(join);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26531,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26531,(1),null);
var ast = (om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1 ? om.next.impl.parser.expr__GT_ast.cljs$core$IFn$_invoke$arity$1(k) : om.next.impl.parser.expr__GT_ast.call(null,k));
var ref_QMARK_ = cljs.core.vector_QMARK_(cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ast,cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.array_seq([cljs.core.cst$kw$sel,v], 0));
});
om.next.impl.parser.ref__GT_ast = (function om$next$impl$parser$ref__GT_ast(p__26532){
var vec__26534 = p__26532;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26534,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26534,(1),null);
var ref = vec__26534;
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,cljs.core.cst$kw$prop,cljs.core.cst$kw$dkey,k,cljs.core.cst$kw$key,ref,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$om$next_SLASH_refid,id], null)], null);
});
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast(x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast(x);
} else {
if(cljs.core.map_QMARK_(x)){
return om.next.impl.parser.join__GT_ast(x);
} else {
if(cljs.core.vector_QMARK_(x)){
return om.next.impl.parser.ref__GT_ast(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return om.next.impl.parser.call__GT_ast(x);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
}
});
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(p__26535){
var map__26542 = p__26535;
var map__26542__$1 = ((((!((map__26542 == null)))?((((map__26542.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26542.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26542):map__26542);
var ast = map__26542__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26542__$1,cljs.core.cst$kw$key);
var sel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26542__$1,cljs.core.cst$kw$sel);
var ref_QMARK_ = cljs.core.vector_QMARK_(key);
var ast_SINGLEQUOTE_ = (function (){var G__26544 = ast;
var G__26544__$1 = ((ref_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__26544,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$params], null),cljs.core.dissoc,cljs.core.cst$kw$om$next_SLASH_refid):G__26544);
return G__26544__$1;
})();
var params = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_);
var empty_QMARK_ = (cljs.core.count(params) === (0));
var ast_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__26545 = ast_SINGLEQUOTE_;
var G__26545__$1 = (((ref_QMARK_) && (empty_QMARK_))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__26545,cljs.core.cst$kw$params):G__26545);
return G__26545__$1;
})();
var params_SINGLEQUOTE_ = cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE__SINGLEQUOTE_);
if(!((params_SINGLEQUOTE_ == null))){
if((cljs.core.count(params_SINGLEQUOTE_) === (0))){
return cljs.core._conj(cljs.core.List.EMPTY,om$next$impl$parser$ast__GT_expr(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast_SINGLEQUOTE__SINGLEQUOTE_,cljs.core.cst$kw$params)));
} else {
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,params_SINGLEQUOTE_),om$next$impl$parser$ast__GT_expr(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(ast_SINGLEQUOTE__SINGLEQUOTE_,cljs.core.cst$kw$params)));
}
} else {
if(!((sel == null))){
return cljs.core.PersistentArrayMap.fromArray([key,sel], true, false);
} else {
return key;
}
}
});
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(x,path){
var x_SINGLEQUOTE_ = (function (){var G__26557 = x;
var G__26557__$1 = ((cljs.core.map_QMARK_(x))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (G__26557){
return (function (p__26558){
var vec__26559 = p__26558;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26559,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__26559,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om$next$impl$parser$path_meta(v,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k))], null);
});})(G__26557))
),G__26557):G__26557);
var G__26557__$2 = ((cljs.core.vector_QMARK_(x))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(((function (G__26557,G__26557__$1){
return (function (p1__26547_SHARP_,p2__26546_SHARP_){
return om$next$impl$parser$path_meta(p2__26546_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,p1__26547_SHARP_));
});})(G__26557,G__26557__$1))
),G__26557__$1):G__26557__$1);
return G__26557__$2;
})();
var G__26560 = x_SINGLEQUOTE_;
var G__26560__$1 = ((((!((x_SINGLEQUOTE_ == null)))?((((x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$ & (262144))) || (x_SINGLEQUOTE_.cljs$core$IWithMeta$))?true:(((!x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x_SINGLEQUOTE_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IWithMeta,x_SINGLEQUOTE_)))?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__26560,cljs.core.assoc,cljs.core.cst$kw$om_DASH_path,path):G__26560);
return G__26560__$1;
});
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__26562){
var map__26629 = p__26562;
var map__26629__$1 = ((((!((map__26629 == null)))?((((map__26629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26629):map__26629);
var config = map__26629__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26629__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26629__$1,cljs.core.cst$kw$mutate);
return ((function (map__26629,map__26629__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,sel){
return om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3(env,sel,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,sel,target){
var elide_paths_QMARK_ = cljs.core.boolean$(cljs.core.cst$kw$elide_DASH_paths.cljs$core$IFn$_invoke$arity$1(config));
var map__26663 = (function (){var G__26664 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,cljs.core.cst$kw$parser,om$next$impl$parser$parser_$_self,cljs.core.array_seq([cljs.core.cst$kw$target,target], 0));
var G__26664__$1 = ((!(cljs.core.contains_QMARK_(env,cljs.core.cst$kw$path)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26664,cljs.core.cst$kw$path,cljs.core.PersistentVector.EMPTY):G__26664);
return G__26664__$1;
})();
var map__26663__$1 = ((((!((map__26663 == null)))?((((map__26663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26663):map__26663);
var env__$1 = map__26663__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26663__$1,cljs.core.cst$kw$path);
var step = ((function (elide_paths_QMARK_,map__26663,map__26663__$1,env__$1,path,map__26629,map__26629__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__26687 = om.next.impl.parser.expr__GT_ast(expr);
var map__26687__$1 = ((((!((map__26687 == null)))?((((map__26687.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26687.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__26687):map__26687);
var ast = map__26687__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26687__$1,cljs.core.cst$kw$key);
var dkey = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26687__$1,cljs.core.cst$kw$dkey);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26687__$1,cljs.core.cst$kw$params);
var sel__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__26687__$1,cljs.core.cst$kw$sel);
var env__$2 = (function (){var G__26689 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,cljs.core.cst$kw$ast,ast);
var G__26689__$1 = ((!((sel__$1 == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26689,cljs.core.cst$kw$selector,sel__$1):G__26689);
return G__26689__$1;
})();
var type = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$call,type);
var res = (((cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast) == null))?(function (){var G__26690 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26690) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$mutate], 0)))].join('')));
}

return (mutate.cljs$core$IFn$_invoke$arity$3 ? mutate.cljs$core$IFn$_invoke$arity$3(env__$2,dkey,params) : mutate.call(null,env__$2,dkey,params));

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$read], 0)))].join('')));
}

return (read.cljs$core$IFn$_invoke$arity$3 ? read.cljs$core$IFn$_invoke$arity$3(env__$2,dkey,params) : read.call(null,env__$2,dkey,params));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})():null);
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res,target);
var G__26691 = ret;
var G__26691__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26691,expr):G__26691);
var G__26691__$2 = ((cljs.core.map_QMARK_(ast_SINGLEQUOTE_))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26691__$1,om.next.impl.parser.ast__GT_expr(ast_SINGLEQUOTE_)):G__26691__$1);
var G__26691__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target,cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__26691__$2,om.next.impl.parser.ast__GT_expr(ast)):G__26691__$2);
return G__26691__$3;
} else {
if(!((call_QMARK_) || ((cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_(res,cljs.core.cst$kw$value)))){
return ret;
} else {
var error = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
if((call_QMARK_) && (!((cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{cljs.core.cst$kw$action.cljs$core$IFn$_invoke$arity$1(res).call(null);
}catch (e26692){var e_26696 = e26692;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(error,e_26696) : cljs.core.reset_BANG_.call(null,error,e_26696));
}} else {
}

var value = cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1(res);
var G__26693 = ret;
var G__26693__$1 = ((!((value == null)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26693,key,value):G__26693);
var G__26693__$2 = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__26693__$1,key,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(error) : cljs.core.deref.call(null,error))):G__26693__$1);
return G__26693__$2;
}
}
});})(elide_paths_QMARK_,map__26663,map__26663__$1,env__$1,path,map__26629,map__26629__$1,config,read,mutate))
;
var G__26694 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),sel);
var G__26694__$1 = ((!((!((target == null))) || (elide_paths_QMARK_)))?om.next.impl.parser.path_meta(G__26694,path):G__26694);
return G__26694__$1;
});
om$next$impl$parser$parser_$_self = function(env,sel,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,sel);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,sel,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__26629,map__26629__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});

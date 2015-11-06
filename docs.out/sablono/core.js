// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__22379__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__22378 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22378,(0),null);
var body = cljs.core.nthnext(vec__22378,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__22379 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22380__i = 0, G__22380__a = new Array(arguments.length -  0);
while (G__22380__i < G__22380__a.length) {G__22380__a[G__22380__i] = arguments[G__22380__i + 0]; ++G__22380__i;}
  args = new cljs.core.IndexedSeq(G__22380__a,0);
} 
return G__22379__delegate.call(this,args);};
G__22379.cljs$lang$maxFixedArity = 0;
G__22379.cljs$lang$applyTo = (function (arglist__22381){
var args = cljs.core.seq(arglist__22381);
return G__22379__delegate(args);
});
G__22379.cljs$core$IFn$_invoke$arity$variadic = G__22379__delegate;
return G__22379;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__22388(s__22389){
return (new cljs.core.LazySeq(null,(function (){
var s__22389__$1 = s__22389;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22389__$1);
if(temp__4425__auto__){
var s__22389__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22389__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__22389__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__22391 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__22390 = (0);
while(true){
if((i__22390 < size__5865__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__22390);
cljs.core.chunk_append(b__22391,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__22394 = (i__22390 + (1));
i__22390 = G__22394;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22391),sablono$core$update_arglists_$_iter__22388(cljs.core.chunk_rest(s__22389__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22391),null);
}
} else {
var args = cljs.core.first(s__22389__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__22388(cljs.core.rest(s__22389__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__(arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__6159__auto__ = [];
var len__6152__auto___22402 = arguments.length;
var i__6153__auto___22403 = (0);
while(true){
if((i__6153__auto___22403 < len__6152__auto___22402)){
args__6159__auto__.push((arguments[i__6153__auto___22403]));

var G__22404 = (i__6153__auto___22403 + (1));
i__6153__auto___22403 = G__22404;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__22396(s__22397){
return (new cljs.core.LazySeq(null,(function (){
var s__22397__$1 = s__22397;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22397__$1);
if(temp__4425__auto__){
var s__22397__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22397__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__22397__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__22399 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__22398 = (0);
while(true){
if((i__22398 < size__5865__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__22398);
cljs.core.chunk_append(b__22399,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__22405 = (i__22398 + (1));
i__22398 = G__22405;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22399),sablono$core$iter__22396(cljs.core.chunk_rest(s__22397__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22399),null);
}
} else {
var style = cljs.core.first(s__22397__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__22396(cljs.core.rest(s__22397__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq22395){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22395));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__22410 = goog.dom.getDocument().body;
var G__22411 = (function (){var G__22412 = "script";
var G__22413 = {"src": src};
return goog.dom.createDom(G__22412,G__22413);
})();
return goog.dom.appendChild(G__22410,G__22411);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to22414 = (function sablono$core$link_to22414(var_args){
var args__6159__auto__ = [];
var len__6152__auto___22417 = arguments.length;
var i__6153__auto___22418 = (0);
while(true){
if((i__6153__auto___22418 < len__6152__auto___22417)){
args__6159__auto__.push((arguments[i__6153__auto___22418]));

var G__22419 = (i__6153__auto___22418 + (1));
i__6153__auto___22418 = G__22419;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to22414.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to22414.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to22414.cljs$lang$maxFixedArity = (1);

sablono.core.link_to22414.cljs$lang$applyTo = (function (seq22415){
var G__22416 = cljs.core.first(seq22415);
var seq22415__$1 = cljs.core.next(seq22415);
return sablono.core.link_to22414.cljs$core$IFn$_invoke$arity$variadic(G__22416,seq22415__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to22414);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to22420 = (function sablono$core$mail_to22420(var_args){
var args__6159__auto__ = [];
var len__6152__auto___22425 = arguments.length;
var i__6153__auto___22426 = (0);
while(true){
if((i__6153__auto___22426 < len__6152__auto___22425)){
args__6159__auto__.push((arguments[i__6153__auto___22426]));

var G__22427 = (i__6153__auto___22426 + (1));
i__6153__auto___22426 = G__22427;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to22420.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to22420.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__22423){
var vec__22424 = p__22423;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22424,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to22420.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to22420.cljs$lang$applyTo = (function (seq22421){
var G__22422 = cljs.core.first(seq22421);
var seq22421__$1 = cljs.core.next(seq22421);
return sablono.core.mail_to22420.cljs$core$IFn$_invoke$arity$variadic(G__22422,seq22421__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to22420);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list22428 = (function sablono$core$unordered_list22428(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5866__auto__ = (function sablono$core$unordered_list22428_$_iter__22435(s__22436){
return (new cljs.core.LazySeq(null,(function (){
var s__22436__$1 = s__22436;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22436__$1);
if(temp__4425__auto__){
var s__22436__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22436__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__22436__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__22438 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__22437 = (0);
while(true){
if((i__22437 < size__5865__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__22437);
cljs.core.chunk_append(b__22438,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__22441 = (i__22437 + (1));
i__22437 = G__22441;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22438),sablono$core$unordered_list22428_$_iter__22435(cljs.core.chunk_rest(s__22436__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22438),null);
}
} else {
var x = cljs.core.first(s__22436__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list22428_$_iter__22435(cljs.core.rest(s__22436__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list22428);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list22442 = (function sablono$core$ordered_list22442(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5866__auto__ = (function sablono$core$ordered_list22442_$_iter__22449(s__22450){
return (new cljs.core.LazySeq(null,(function (){
var s__22450__$1 = s__22450;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22450__$1);
if(temp__4425__auto__){
var s__22450__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22450__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__22450__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__22452 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__22451 = (0);
while(true){
if((i__22451 < size__5865__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__22451);
cljs.core.chunk_append(b__22452,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__22455 = (i__22451 + (1));
i__22451 = G__22455;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22452),sablono$core$ordered_list22442_$_iter__22449(cljs.core.chunk_rest(s__22450__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22452),null);
}
} else {
var x = cljs.core.first(s__22450__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list22442_$_iter__22449(cljs.core.rest(s__22450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list22442);
/**
 * Create an image element.
 */
sablono.core.image22456 = (function sablono$core$image22456(var_args){
var args22457 = [];
var len__6152__auto___22460 = arguments.length;
var i__6153__auto___22461 = (0);
while(true){
if((i__6153__auto___22461 < len__6152__auto___22460)){
args22457.push((arguments[i__6153__auto___22461]));

var G__22462 = (i__6153__auto___22461 + (1));
i__6153__auto___22461 = G__22462;
continue;
} else {
}
break;
}

var G__22459 = args22457.length;
switch (G__22459) {
case 1:
return sablono.core.image22456.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image22456.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22457.length)].join('')));

}
});

sablono.core.image22456.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image22456.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image22456.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image22456);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__22464_SHARP_,p2__22465_SHARP_){
return [cljs.core.str(p1__22464_SHARP_),cljs.core.str("["),cljs.core.str(p2__22465_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__22466_SHARP_,p2__22467_SHARP_){
return [cljs.core.str(p1__22466_SHARP_),cljs.core.str("-"),cljs.core.str(p2__22467_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field22468 = (function sablono$core$color_field22468(var_args){
var args22469 = [];
var len__6152__auto___22536 = arguments.length;
var i__6153__auto___22537 = (0);
while(true){
if((i__6153__auto___22537 < len__6152__auto___22536)){
args22469.push((arguments[i__6153__auto___22537]));

var G__22538 = (i__6153__auto___22537 + (1));
i__6153__auto___22537 = G__22538;
continue;
} else {
}
break;
}

var G__22471 = args22469.length;
switch (G__22471) {
case 1:
return sablono.core.color_field22468.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field22468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22469.length)].join('')));

}
});

sablono.core.color_field22468.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.color_field22468.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.color_field22468.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.color_field22468.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field22468);

/**
 * Creates a date input field.
 */
sablono.core.date_field22472 = (function sablono$core$date_field22472(var_args){
var args22473 = [];
var len__6152__auto___22540 = arguments.length;
var i__6153__auto___22541 = (0);
while(true){
if((i__6153__auto___22541 < len__6152__auto___22540)){
args22473.push((arguments[i__6153__auto___22541]));

var G__22542 = (i__6153__auto___22541 + (1));
i__6153__auto___22541 = G__22542;
continue;
} else {
}
break;
}

var G__22475 = args22473.length;
switch (G__22475) {
case 1:
return sablono.core.date_field22472.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field22472.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22473.length)].join('')));

}
});

sablono.core.date_field22472.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.date_field22472.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.date_field22472.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.date_field22472.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field22472);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field22476 = (function sablono$core$datetime_field22476(var_args){
var args22477 = [];
var len__6152__auto___22544 = arguments.length;
var i__6153__auto___22545 = (0);
while(true){
if((i__6153__auto___22545 < len__6152__auto___22544)){
args22477.push((arguments[i__6153__auto___22545]));

var G__22546 = (i__6153__auto___22545 + (1));
i__6153__auto___22545 = G__22546;
continue;
} else {
}
break;
}

var G__22479 = args22477.length;
switch (G__22479) {
case 1:
return sablono.core.datetime_field22476.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field22476.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22477.length)].join('')));

}
});

sablono.core.datetime_field22476.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.datetime_field22476.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.datetime_field22476.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.datetime_field22476.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field22476);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field22480 = (function sablono$core$datetime_local_field22480(var_args){
var args22481 = [];
var len__6152__auto___22548 = arguments.length;
var i__6153__auto___22549 = (0);
while(true){
if((i__6153__auto___22549 < len__6152__auto___22548)){
args22481.push((arguments[i__6153__auto___22549]));

var G__22550 = (i__6153__auto___22549 + (1));
i__6153__auto___22549 = G__22550;
continue;
} else {
}
break;
}

var G__22483 = args22481.length;
switch (G__22483) {
case 1:
return sablono.core.datetime_local_field22480.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field22480.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22481.length)].join('')));

}
});

sablono.core.datetime_local_field22480.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.datetime_local_field22480.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.datetime_local_field22480.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.datetime_local_field22480.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field22480);

/**
 * Creates a email input field.
 */
sablono.core.email_field22484 = (function sablono$core$email_field22484(var_args){
var args22485 = [];
var len__6152__auto___22552 = arguments.length;
var i__6153__auto___22553 = (0);
while(true){
if((i__6153__auto___22553 < len__6152__auto___22552)){
args22485.push((arguments[i__6153__auto___22553]));

var G__22554 = (i__6153__auto___22553 + (1));
i__6153__auto___22553 = G__22554;
continue;
} else {
}
break;
}

var G__22487 = args22485.length;
switch (G__22487) {
case 1:
return sablono.core.email_field22484.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field22484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22485.length)].join('')));

}
});

sablono.core.email_field22484.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.email_field22484.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.email_field22484.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.email_field22484.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field22484);

/**
 * Creates a file input field.
 */
sablono.core.file_field22488 = (function sablono$core$file_field22488(var_args){
var args22489 = [];
var len__6152__auto___22556 = arguments.length;
var i__6153__auto___22557 = (0);
while(true){
if((i__6153__auto___22557 < len__6152__auto___22556)){
args22489.push((arguments[i__6153__auto___22557]));

var G__22558 = (i__6153__auto___22557 + (1));
i__6153__auto___22557 = G__22558;
continue;
} else {
}
break;
}

var G__22491 = args22489.length;
switch (G__22491) {
case 1:
return sablono.core.file_field22488.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field22488.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22489.length)].join('')));

}
});

sablono.core.file_field22488.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.file_field22488.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.file_field22488.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.file_field22488.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field22488);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field22492 = (function sablono$core$hidden_field22492(var_args){
var args22493 = [];
var len__6152__auto___22560 = arguments.length;
var i__6153__auto___22561 = (0);
while(true){
if((i__6153__auto___22561 < len__6152__auto___22560)){
args22493.push((arguments[i__6153__auto___22561]));

var G__22562 = (i__6153__auto___22561 + (1));
i__6153__auto___22561 = G__22562;
continue;
} else {
}
break;
}

var G__22495 = args22493.length;
switch (G__22495) {
case 1:
return sablono.core.hidden_field22492.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field22492.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22493.length)].join('')));

}
});

sablono.core.hidden_field22492.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.hidden_field22492.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.hidden_field22492.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.hidden_field22492.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field22492);

/**
 * Creates a month input field.
 */
sablono.core.month_field22496 = (function sablono$core$month_field22496(var_args){
var args22497 = [];
var len__6152__auto___22564 = arguments.length;
var i__6153__auto___22565 = (0);
while(true){
if((i__6153__auto___22565 < len__6152__auto___22564)){
args22497.push((arguments[i__6153__auto___22565]));

var G__22566 = (i__6153__auto___22565 + (1));
i__6153__auto___22565 = G__22566;
continue;
} else {
}
break;
}

var G__22499 = args22497.length;
switch (G__22499) {
case 1:
return sablono.core.month_field22496.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field22496.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22497.length)].join('')));

}
});

sablono.core.month_field22496.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.month_field22496.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.month_field22496.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.month_field22496.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field22496);

/**
 * Creates a number input field.
 */
sablono.core.number_field22500 = (function sablono$core$number_field22500(var_args){
var args22501 = [];
var len__6152__auto___22568 = arguments.length;
var i__6153__auto___22569 = (0);
while(true){
if((i__6153__auto___22569 < len__6152__auto___22568)){
args22501.push((arguments[i__6153__auto___22569]));

var G__22570 = (i__6153__auto___22569 + (1));
i__6153__auto___22569 = G__22570;
continue;
} else {
}
break;
}

var G__22503 = args22501.length;
switch (G__22503) {
case 1:
return sablono.core.number_field22500.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field22500.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22501.length)].join('')));

}
});

sablono.core.number_field22500.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.number_field22500.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.number_field22500.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.number_field22500.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field22500);

/**
 * Creates a password input field.
 */
sablono.core.password_field22504 = (function sablono$core$password_field22504(var_args){
var args22505 = [];
var len__6152__auto___22572 = arguments.length;
var i__6153__auto___22573 = (0);
while(true){
if((i__6153__auto___22573 < len__6152__auto___22572)){
args22505.push((arguments[i__6153__auto___22573]));

var G__22574 = (i__6153__auto___22573 + (1));
i__6153__auto___22573 = G__22574;
continue;
} else {
}
break;
}

var G__22507 = args22505.length;
switch (G__22507) {
case 1:
return sablono.core.password_field22504.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field22504.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22505.length)].join('')));

}
});

sablono.core.password_field22504.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.password_field22504.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.password_field22504.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.password_field22504.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field22504);

/**
 * Creates a range input field.
 */
sablono.core.range_field22508 = (function sablono$core$range_field22508(var_args){
var args22509 = [];
var len__6152__auto___22576 = arguments.length;
var i__6153__auto___22577 = (0);
while(true){
if((i__6153__auto___22577 < len__6152__auto___22576)){
args22509.push((arguments[i__6153__auto___22577]));

var G__22578 = (i__6153__auto___22577 + (1));
i__6153__auto___22577 = G__22578;
continue;
} else {
}
break;
}

var G__22511 = args22509.length;
switch (G__22511) {
case 1:
return sablono.core.range_field22508.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field22508.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22509.length)].join('')));

}
});

sablono.core.range_field22508.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.range_field22508.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.range_field22508.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.range_field22508.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field22508);

/**
 * Creates a search input field.
 */
sablono.core.search_field22512 = (function sablono$core$search_field22512(var_args){
var args22513 = [];
var len__6152__auto___22580 = arguments.length;
var i__6153__auto___22581 = (0);
while(true){
if((i__6153__auto___22581 < len__6152__auto___22580)){
args22513.push((arguments[i__6153__auto___22581]));

var G__22582 = (i__6153__auto___22581 + (1));
i__6153__auto___22581 = G__22582;
continue;
} else {
}
break;
}

var G__22515 = args22513.length;
switch (G__22515) {
case 1:
return sablono.core.search_field22512.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field22512.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22513.length)].join('')));

}
});

sablono.core.search_field22512.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.search_field22512.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.search_field22512.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.search_field22512.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field22512);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field22516 = (function sablono$core$tel_field22516(var_args){
var args22517 = [];
var len__6152__auto___22584 = arguments.length;
var i__6153__auto___22585 = (0);
while(true){
if((i__6153__auto___22585 < len__6152__auto___22584)){
args22517.push((arguments[i__6153__auto___22585]));

var G__22586 = (i__6153__auto___22585 + (1));
i__6153__auto___22585 = G__22586;
continue;
} else {
}
break;
}

var G__22519 = args22517.length;
switch (G__22519) {
case 1:
return sablono.core.tel_field22516.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field22516.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22517.length)].join('')));

}
});

sablono.core.tel_field22516.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.tel_field22516.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.tel_field22516.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.tel_field22516.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field22516);

/**
 * Creates a text input field.
 */
sablono.core.text_field22520 = (function sablono$core$text_field22520(var_args){
var args22521 = [];
var len__6152__auto___22588 = arguments.length;
var i__6153__auto___22589 = (0);
while(true){
if((i__6153__auto___22589 < len__6152__auto___22588)){
args22521.push((arguments[i__6153__auto___22589]));

var G__22590 = (i__6153__auto___22589 + (1));
i__6153__auto___22589 = G__22590;
continue;
} else {
}
break;
}

var G__22523 = args22521.length;
switch (G__22523) {
case 1:
return sablono.core.text_field22520.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field22520.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22521.length)].join('')));

}
});

sablono.core.text_field22520.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.text_field22520.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.text_field22520.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.text_field22520.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field22520);

/**
 * Creates a time input field.
 */
sablono.core.time_field22524 = (function sablono$core$time_field22524(var_args){
var args22525 = [];
var len__6152__auto___22592 = arguments.length;
var i__6153__auto___22593 = (0);
while(true){
if((i__6153__auto___22593 < len__6152__auto___22592)){
args22525.push((arguments[i__6153__auto___22593]));

var G__22594 = (i__6153__auto___22593 + (1));
i__6153__auto___22593 = G__22594;
continue;
} else {
}
break;
}

var G__22527 = args22525.length;
switch (G__22527) {
case 1:
return sablono.core.time_field22524.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field22524.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22525.length)].join('')));

}
});

sablono.core.time_field22524.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.time_field22524.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.time_field22524.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.time_field22524.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field22524);

/**
 * Creates a url input field.
 */
sablono.core.url_field22528 = (function sablono$core$url_field22528(var_args){
var args22529 = [];
var len__6152__auto___22596 = arguments.length;
var i__6153__auto___22597 = (0);
while(true){
if((i__6153__auto___22597 < len__6152__auto___22596)){
args22529.push((arguments[i__6153__auto___22597]));

var G__22598 = (i__6153__auto___22597 + (1));
i__6153__auto___22597 = G__22598;
continue;
} else {
}
break;
}

var G__22531 = args22529.length;
switch (G__22531) {
case 1:
return sablono.core.url_field22528.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field22528.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22529.length)].join('')));

}
});

sablono.core.url_field22528.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.url_field22528.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.url_field22528.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.url_field22528.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field22528);

/**
 * Creates a week input field.
 */
sablono.core.week_field22532 = (function sablono$core$week_field22532(var_args){
var args22533 = [];
var len__6152__auto___22600 = arguments.length;
var i__6153__auto___22601 = (0);
while(true){
if((i__6153__auto___22601 < len__6152__auto___22600)){
args22533.push((arguments[i__6153__auto___22601]));

var G__22602 = (i__6153__auto___22601 + (1));
i__6153__auto___22601 = G__22602;
continue;
} else {
}
break;
}

var G__22535 = args22533.length;
switch (G__22535) {
case 1:
return sablono.core.week_field22532.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field22532.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22533.length)].join('')));

}
});

sablono.core.week_field22532.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.week_field22532.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.week_field22532.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.week_field22532.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field22532);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box22604 = (function sablono$core$check_box22604(var_args){
var args22605 = [];
var len__6152__auto___22608 = arguments.length;
var i__6153__auto___22609 = (0);
while(true){
if((i__6153__auto___22609 < len__6152__auto___22608)){
args22605.push((arguments[i__6153__auto___22609]));

var G__22610 = (i__6153__auto___22609 + (1));
i__6153__auto___22609 = G__22610;
continue;
} else {
}
break;
}

var G__22607 = args22605.length;
switch (G__22607) {
case 1:
return sablono.core.check_box22604.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box22604.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box22604.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22605.length)].join('')));

}
});

sablono.core.check_box22604.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box22604.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box22604.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box22604.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box22604.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box22604.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box22604);
/**
 * Creates a radio button.
 */
sablono.core.radio_button22612 = (function sablono$core$radio_button22612(var_args){
var args22613 = [];
var len__6152__auto___22616 = arguments.length;
var i__6153__auto___22617 = (0);
while(true){
if((i__6153__auto___22617 < len__6152__auto___22616)){
args22613.push((arguments[i__6153__auto___22617]));

var G__22618 = (i__6153__auto___22617 + (1));
i__6153__auto___22617 = G__22618;
continue;
} else {
}
break;
}

var G__22615 = args22613.length;
switch (G__22615) {
case 1:
return sablono.core.radio_button22612.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button22612.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button22612.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22613.length)].join('')));

}
});

sablono.core.radio_button22612.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button22612.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button22612.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button22612.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button22612.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button22612.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button22612);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__22621 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__22621);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options22622 = (function sablono$core$select_options22622(coll){
var iter__5866__auto__ = (function sablono$core$select_options22622_$_iter__22633(s__22634){
return (new cljs.core.LazySeq(null,(function (){
var s__22634__$1 = s__22634;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__22634__$1);
if(temp__4425__auto__){
var s__22634__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22634__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__22634__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__22636 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__22635 = (0);
while(true){
if((i__22635 < size__5865__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__22635);
cljs.core.chunk_append(b__22636,((cljs.core.sequential_QMARK_(x))?(function (){var vec__22641 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22641,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22641,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22641,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options22622(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__22643 = (i__22635 + (1));
i__22635 = G__22643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22636),sablono$core$select_options22622_$_iter__22633(cljs.core.chunk_rest(s__22634__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22636),null);
}
} else {
var x = cljs.core.first(s__22634__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__22642 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22642,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22642,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22642,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options22622(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options22622_$_iter__22633(cljs.core.rest(s__22634__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options22622);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down22644 = (function sablono$core$drop_down22644(var_args){
var args22645 = [];
var len__6152__auto___22648 = arguments.length;
var i__6153__auto___22649 = (0);
while(true){
if((i__6153__auto___22649 < len__6152__auto___22648)){
args22645.push((arguments[i__6153__auto___22649]));

var G__22650 = (i__6153__auto___22649 + (1));
i__6153__auto___22649 = G__22650;
continue;
} else {
}
break;
}

var G__22647 = args22645.length;
switch (G__22647) {
case 2:
return sablono.core.drop_down22644.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down22644.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22645.length)].join('')));

}
});

sablono.core.drop_down22644.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down22644.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down22644.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down22644.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down22644);
/**
 * Creates a text area element.
 */
sablono.core.text_area22652 = (function sablono$core$text_area22652(var_args){
var args22653 = [];
var len__6152__auto___22656 = arguments.length;
var i__6153__auto___22657 = (0);
while(true){
if((i__6153__auto___22657 < len__6152__auto___22656)){
args22653.push((arguments[i__6153__auto___22657]));

var G__22658 = (i__6153__auto___22657 + (1));
i__6153__auto___22657 = G__22658;
continue;
} else {
}
break;
}

var G__22655 = args22653.length;
switch (G__22655) {
case 1:
return sablono.core.text_area22652.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area22652.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22653.length)].join('')));

}
});

sablono.core.text_area22652.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area22652.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area22652.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area22652.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area22652);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label22660 = (function sablono$core$label22660(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label22660);
/**
 * Creates a submit button.
 */
sablono.core.submit_button22661 = (function sablono$core$submit_button22661(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button22661);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button22662 = (function sablono$core$reset_button22662(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button22662);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to22663 = (function sablono$core$form_to22663(var_args){
var args__6159__auto__ = [];
var len__6152__auto___22671 = arguments.length;
var i__6153__auto___22672 = (0);
while(true){
if((i__6153__auto___22672 < len__6152__auto___22671)){
args__6159__auto__.push((arguments[i__6153__auto___22672]));

var G__22673 = (i__6153__auto___22672 + (1));
i__6153__auto___22672 = G__22673;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to22663.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to22663.cljs$core$IFn$_invoke$arity$variadic = (function (p__22666,body){
var vec__22667 = p__22666;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22667,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22667,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__22668 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__22669 = "_method";
var G__22670 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__22668,G__22669,G__22670) : sablono.core.hidden_field.call(null,G__22668,G__22669,G__22670));
})()], null)),body));
});

sablono.core.form_to22663.cljs$lang$maxFixedArity = (1);

sablono.core.form_to22663.cljs$lang$applyTo = (function (seq22664){
var G__22665 = cljs.core.first(seq22664);
var seq22664__$1 = cljs.core.next(seq22664);
return sablono.core.form_to22663.cljs$core$IFn$_invoke$arity$variadic(G__22665,seq22664__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to22663);

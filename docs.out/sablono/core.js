// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
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
var G__18626__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__18625 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18625,(0),null);
var body = cljs.core.nthnext(vec__18625,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__18626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18627__i = 0, G__18627__a = new Array(arguments.length -  0);
while (G__18627__i < G__18627__a.length) {G__18627__a[G__18627__i] = arguments[G__18627__i + 0]; ++G__18627__i;}
  args = new cljs.core.IndexedSeq(G__18627__a,0);
} 
return G__18626__delegate.call(this,args);};
G__18626.cljs$lang$maxFixedArity = 0;
G__18626.cljs$lang$applyTo = (function (arglist__18628){
var args = cljs.core.seq(arglist__18628);
return G__18626__delegate(args);
});
G__18626.cljs$core$IFn$_invoke$arity$variadic = G__18626__delegate;
return G__18626;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5940__auto__ = (function sablono$core$update_arglists_$_iter__18635(s__18636){
return (new cljs.core.LazySeq(null,(function (){
var s__18636__$1 = s__18636;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18636__$1);
if(temp__4425__auto__){
var s__18636__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18636__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__18636__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__18638 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__18637 = (0);
while(true){
if((i__18637 < size__5939__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__18637);
cljs.core.chunk_append(b__18638,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__18641 = (i__18637 + (1));
i__18637 = G__18641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18638),sablono$core$update_arglists_$_iter__18635(cljs.core.chunk_rest(s__18636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18638),null);
}
} else {
var args = cljs.core.first(s__18636__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__18635(cljs.core.rest(s__18636__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(arglists);
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
var args__6233__auto__ = [];
var len__6226__auto___18649 = arguments.length;
var i__6227__auto___18650 = (0);
while(true){
if((i__6227__auto___18650 < len__6226__auto___18649)){
args__6233__auto__.push((arguments[i__6227__auto___18650]));

var G__18651 = (i__6227__auto___18650 + (1));
i__6227__auto___18650 = G__18651;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((0) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6234__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5940__auto__ = (function sablono$core$iter__18643(s__18644){
return (new cljs.core.LazySeq(null,(function (){
var s__18644__$1 = s__18644;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18644__$1);
if(temp__4425__auto__){
var s__18644__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18644__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__18644__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__18646 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__18645 = (0);
while(true){
if((i__18645 < size__5939__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__18645);
cljs.core.chunk_append(b__18646,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__18652 = (i__18645 + (1));
i__18645 = G__18652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18646),sablono$core$iter__18643(cljs.core.chunk_rest(s__18644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18646),null);
}
} else {
var style = cljs.core.first(s__18644__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__18643(cljs.core.rest(s__18644__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq18642){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18642));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__18657 = goog.dom.getDocument().body;
var G__18658 = (function (){var G__18659 = "script";
var G__18660 = {"src": src};
return goog.dom.createDom(G__18659,G__18660);
})();
return goog.dom.appendChild(G__18657,G__18658);
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
sablono.core.link_to18661 = (function sablono$core$link_to18661(var_args){
var args__6233__auto__ = [];
var len__6226__auto___18664 = arguments.length;
var i__6227__auto___18665 = (0);
while(true){
if((i__6227__auto___18665 < len__6226__auto___18664)){
args__6233__auto__.push((arguments[i__6227__auto___18665]));

var G__18666 = (i__6227__auto___18665 + (1));
i__6227__auto___18665 = G__18666;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.link_to18661.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.link_to18661.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to18661.cljs$lang$maxFixedArity = (1);

sablono.core.link_to18661.cljs$lang$applyTo = (function (seq18662){
var G__18663 = cljs.core.first(seq18662);
var seq18662__$1 = cljs.core.next(seq18662);
return sablono.core.link_to18661.cljs$core$IFn$_invoke$arity$variadic(G__18663,seq18662__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to18661);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to18667 = (function sablono$core$mail_to18667(var_args){
var args__6233__auto__ = [];
var len__6226__auto___18672 = arguments.length;
var i__6227__auto___18673 = (0);
while(true){
if((i__6227__auto___18673 < len__6226__auto___18672)){
args__6233__auto__.push((arguments[i__6227__auto___18673]));

var G__18674 = (i__6227__auto___18673 + (1));
i__6227__auto___18673 = G__18674;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.mail_to18667.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.mail_to18667.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__18670){
var vec__18671 = p__18670;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18671,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5168__auto__ = content;
if(cljs.core.truth_(or__5168__auto__)){
return or__5168__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to18667.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to18667.cljs$lang$applyTo = (function (seq18668){
var G__18669 = cljs.core.first(seq18668);
var seq18668__$1 = cljs.core.next(seq18668);
return sablono.core.mail_to18667.cljs$core$IFn$_invoke$arity$variadic(G__18669,seq18668__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to18667);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list18675 = (function sablono$core$unordered_list18675(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5940__auto__ = (function sablono$core$unordered_list18675_$_iter__18682(s__18683){
return (new cljs.core.LazySeq(null,(function (){
var s__18683__$1 = s__18683;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18683__$1);
if(temp__4425__auto__){
var s__18683__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18683__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__18683__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__18685 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__18684 = (0);
while(true){
if((i__18684 < size__5939__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__18684);
cljs.core.chunk_append(b__18685,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__18688 = (i__18684 + (1));
i__18684 = G__18688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18685),sablono$core$unordered_list18675_$_iter__18682(cljs.core.chunk_rest(s__18683__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18685),null);
}
} else {
var x = cljs.core.first(s__18683__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list18675_$_iter__18682(cljs.core.rest(s__18683__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list18675);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list18689 = (function sablono$core$ordered_list18689(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5940__auto__ = (function sablono$core$ordered_list18689_$_iter__18696(s__18697){
return (new cljs.core.LazySeq(null,(function (){
var s__18697__$1 = s__18697;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18697__$1);
if(temp__4425__auto__){
var s__18697__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18697__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__18697__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__18699 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__18698 = (0);
while(true){
if((i__18698 < size__5939__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__18698);
cljs.core.chunk_append(b__18699,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__18702 = (i__18698 + (1));
i__18698 = G__18702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18699),sablono$core$ordered_list18689_$_iter__18696(cljs.core.chunk_rest(s__18697__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18699),null);
}
} else {
var x = cljs.core.first(s__18697__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list18689_$_iter__18696(cljs.core.rest(s__18697__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list18689);
/**
 * Create an image element.
 */
sablono.core.image18703 = (function sablono$core$image18703(var_args){
var args18704 = [];
var len__6226__auto___18707 = arguments.length;
var i__6227__auto___18708 = (0);
while(true){
if((i__6227__auto___18708 < len__6226__auto___18707)){
args18704.push((arguments[i__6227__auto___18708]));

var G__18709 = (i__6227__auto___18708 + (1));
i__6227__auto___18708 = G__18709;
continue;
} else {
}
break;
}

var G__18706 = args18704.length;
switch (G__18706) {
case 1:
return sablono.core.image18703.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image18703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18704.length)].join('')));

}
});

sablono.core.image18703.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image18703.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image18703.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image18703);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__18711_SHARP_,p2__18712_SHARP_){
return [cljs.core.str(p1__18711_SHARP_),cljs.core.str("["),cljs.core.str(p2__18712_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__18713_SHARP_,p2__18714_SHARP_){
return [cljs.core.str(p1__18713_SHARP_),cljs.core.str("-"),cljs.core.str(p2__18714_SHARP_)].join('');
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
sablono.core.color_field18715 = (function sablono$core$color_field18715(var_args){
var args18716 = [];
var len__6226__auto___18783 = arguments.length;
var i__6227__auto___18784 = (0);
while(true){
if((i__6227__auto___18784 < len__6226__auto___18783)){
args18716.push((arguments[i__6227__auto___18784]));

var G__18785 = (i__6227__auto___18784 + (1));
i__6227__auto___18784 = G__18785;
continue;
} else {
}
break;
}

var G__18718 = args18716.length;
switch (G__18718) {
case 1:
return sablono.core.color_field18715.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field18715.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18716.length)].join('')));

}
});

sablono.core.color_field18715.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.color_field18715.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.color_field18715.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.color_field18715.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field18715);

/**
 * Creates a date input field.
 */
sablono.core.date_field18719 = (function sablono$core$date_field18719(var_args){
var args18720 = [];
var len__6226__auto___18787 = arguments.length;
var i__6227__auto___18788 = (0);
while(true){
if((i__6227__auto___18788 < len__6226__auto___18787)){
args18720.push((arguments[i__6227__auto___18788]));

var G__18789 = (i__6227__auto___18788 + (1));
i__6227__auto___18788 = G__18789;
continue;
} else {
}
break;
}

var G__18722 = args18720.length;
switch (G__18722) {
case 1:
return sablono.core.date_field18719.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field18719.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18720.length)].join('')));

}
});

sablono.core.date_field18719.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.date_field18719.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.date_field18719.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.date_field18719.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field18719);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field18723 = (function sablono$core$datetime_field18723(var_args){
var args18724 = [];
var len__6226__auto___18791 = arguments.length;
var i__6227__auto___18792 = (0);
while(true){
if((i__6227__auto___18792 < len__6226__auto___18791)){
args18724.push((arguments[i__6227__auto___18792]));

var G__18793 = (i__6227__auto___18792 + (1));
i__6227__auto___18792 = G__18793;
continue;
} else {
}
break;
}

var G__18726 = args18724.length;
switch (G__18726) {
case 1:
return sablono.core.datetime_field18723.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field18723.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18724.length)].join('')));

}
});

sablono.core.datetime_field18723.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.datetime_field18723.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.datetime_field18723.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.datetime_field18723.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field18723);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field18727 = (function sablono$core$datetime_local_field18727(var_args){
var args18728 = [];
var len__6226__auto___18795 = arguments.length;
var i__6227__auto___18796 = (0);
while(true){
if((i__6227__auto___18796 < len__6226__auto___18795)){
args18728.push((arguments[i__6227__auto___18796]));

var G__18797 = (i__6227__auto___18796 + (1));
i__6227__auto___18796 = G__18797;
continue;
} else {
}
break;
}

var G__18730 = args18728.length;
switch (G__18730) {
case 1:
return sablono.core.datetime_local_field18727.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field18727.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18728.length)].join('')));

}
});

sablono.core.datetime_local_field18727.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.datetime_local_field18727.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.datetime_local_field18727.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.datetime_local_field18727.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field18727);

/**
 * Creates a email input field.
 */
sablono.core.email_field18731 = (function sablono$core$email_field18731(var_args){
var args18732 = [];
var len__6226__auto___18799 = arguments.length;
var i__6227__auto___18800 = (0);
while(true){
if((i__6227__auto___18800 < len__6226__auto___18799)){
args18732.push((arguments[i__6227__auto___18800]));

var G__18801 = (i__6227__auto___18800 + (1));
i__6227__auto___18800 = G__18801;
continue;
} else {
}
break;
}

var G__18734 = args18732.length;
switch (G__18734) {
case 1:
return sablono.core.email_field18731.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field18731.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18732.length)].join('')));

}
});

sablono.core.email_field18731.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.email_field18731.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.email_field18731.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.email_field18731.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field18731);

/**
 * Creates a file input field.
 */
sablono.core.file_field18735 = (function sablono$core$file_field18735(var_args){
var args18736 = [];
var len__6226__auto___18803 = arguments.length;
var i__6227__auto___18804 = (0);
while(true){
if((i__6227__auto___18804 < len__6226__auto___18803)){
args18736.push((arguments[i__6227__auto___18804]));

var G__18805 = (i__6227__auto___18804 + (1));
i__6227__auto___18804 = G__18805;
continue;
} else {
}
break;
}

var G__18738 = args18736.length;
switch (G__18738) {
case 1:
return sablono.core.file_field18735.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field18735.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18736.length)].join('')));

}
});

sablono.core.file_field18735.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.file_field18735.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.file_field18735.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.file_field18735.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field18735);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field18739 = (function sablono$core$hidden_field18739(var_args){
var args18740 = [];
var len__6226__auto___18807 = arguments.length;
var i__6227__auto___18808 = (0);
while(true){
if((i__6227__auto___18808 < len__6226__auto___18807)){
args18740.push((arguments[i__6227__auto___18808]));

var G__18809 = (i__6227__auto___18808 + (1));
i__6227__auto___18808 = G__18809;
continue;
} else {
}
break;
}

var G__18742 = args18740.length;
switch (G__18742) {
case 1:
return sablono.core.hidden_field18739.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field18739.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18740.length)].join('')));

}
});

sablono.core.hidden_field18739.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.hidden_field18739.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.hidden_field18739.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.hidden_field18739.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field18739);

/**
 * Creates a month input field.
 */
sablono.core.month_field18743 = (function sablono$core$month_field18743(var_args){
var args18744 = [];
var len__6226__auto___18811 = arguments.length;
var i__6227__auto___18812 = (0);
while(true){
if((i__6227__auto___18812 < len__6226__auto___18811)){
args18744.push((arguments[i__6227__auto___18812]));

var G__18813 = (i__6227__auto___18812 + (1));
i__6227__auto___18812 = G__18813;
continue;
} else {
}
break;
}

var G__18746 = args18744.length;
switch (G__18746) {
case 1:
return sablono.core.month_field18743.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field18743.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18744.length)].join('')));

}
});

sablono.core.month_field18743.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.month_field18743.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.month_field18743.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.month_field18743.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field18743);

/**
 * Creates a number input field.
 */
sablono.core.number_field18747 = (function sablono$core$number_field18747(var_args){
var args18748 = [];
var len__6226__auto___18815 = arguments.length;
var i__6227__auto___18816 = (0);
while(true){
if((i__6227__auto___18816 < len__6226__auto___18815)){
args18748.push((arguments[i__6227__auto___18816]));

var G__18817 = (i__6227__auto___18816 + (1));
i__6227__auto___18816 = G__18817;
continue;
} else {
}
break;
}

var G__18750 = args18748.length;
switch (G__18750) {
case 1:
return sablono.core.number_field18747.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field18747.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18748.length)].join('')));

}
});

sablono.core.number_field18747.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.number_field18747.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.number_field18747.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.number_field18747.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field18747);

/**
 * Creates a password input field.
 */
sablono.core.password_field18751 = (function sablono$core$password_field18751(var_args){
var args18752 = [];
var len__6226__auto___18819 = arguments.length;
var i__6227__auto___18820 = (0);
while(true){
if((i__6227__auto___18820 < len__6226__auto___18819)){
args18752.push((arguments[i__6227__auto___18820]));

var G__18821 = (i__6227__auto___18820 + (1));
i__6227__auto___18820 = G__18821;
continue;
} else {
}
break;
}

var G__18754 = args18752.length;
switch (G__18754) {
case 1:
return sablono.core.password_field18751.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field18751.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18752.length)].join('')));

}
});

sablono.core.password_field18751.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.password_field18751.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.password_field18751.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.password_field18751.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field18751);

/**
 * Creates a range input field.
 */
sablono.core.range_field18755 = (function sablono$core$range_field18755(var_args){
var args18756 = [];
var len__6226__auto___18823 = arguments.length;
var i__6227__auto___18824 = (0);
while(true){
if((i__6227__auto___18824 < len__6226__auto___18823)){
args18756.push((arguments[i__6227__auto___18824]));

var G__18825 = (i__6227__auto___18824 + (1));
i__6227__auto___18824 = G__18825;
continue;
} else {
}
break;
}

var G__18758 = args18756.length;
switch (G__18758) {
case 1:
return sablono.core.range_field18755.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field18755.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18756.length)].join('')));

}
});

sablono.core.range_field18755.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.range_field18755.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.range_field18755.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.range_field18755.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field18755);

/**
 * Creates a search input field.
 */
sablono.core.search_field18759 = (function sablono$core$search_field18759(var_args){
var args18760 = [];
var len__6226__auto___18827 = arguments.length;
var i__6227__auto___18828 = (0);
while(true){
if((i__6227__auto___18828 < len__6226__auto___18827)){
args18760.push((arguments[i__6227__auto___18828]));

var G__18829 = (i__6227__auto___18828 + (1));
i__6227__auto___18828 = G__18829;
continue;
} else {
}
break;
}

var G__18762 = args18760.length;
switch (G__18762) {
case 1:
return sablono.core.search_field18759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field18759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18760.length)].join('')));

}
});

sablono.core.search_field18759.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.search_field18759.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.search_field18759.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.search_field18759.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field18759);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field18763 = (function sablono$core$tel_field18763(var_args){
var args18764 = [];
var len__6226__auto___18831 = arguments.length;
var i__6227__auto___18832 = (0);
while(true){
if((i__6227__auto___18832 < len__6226__auto___18831)){
args18764.push((arguments[i__6227__auto___18832]));

var G__18833 = (i__6227__auto___18832 + (1));
i__6227__auto___18832 = G__18833;
continue;
} else {
}
break;
}

var G__18766 = args18764.length;
switch (G__18766) {
case 1:
return sablono.core.tel_field18763.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field18763.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18764.length)].join('')));

}
});

sablono.core.tel_field18763.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.tel_field18763.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.tel_field18763.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.tel_field18763.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field18763);

/**
 * Creates a text input field.
 */
sablono.core.text_field18767 = (function sablono$core$text_field18767(var_args){
var args18768 = [];
var len__6226__auto___18835 = arguments.length;
var i__6227__auto___18836 = (0);
while(true){
if((i__6227__auto___18836 < len__6226__auto___18835)){
args18768.push((arguments[i__6227__auto___18836]));

var G__18837 = (i__6227__auto___18836 + (1));
i__6227__auto___18836 = G__18837;
continue;
} else {
}
break;
}

var G__18770 = args18768.length;
switch (G__18770) {
case 1:
return sablono.core.text_field18767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field18767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18768.length)].join('')));

}
});

sablono.core.text_field18767.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.text_field18767.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.text_field18767.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.text_field18767.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field18767);

/**
 * Creates a time input field.
 */
sablono.core.time_field18771 = (function sablono$core$time_field18771(var_args){
var args18772 = [];
var len__6226__auto___18839 = arguments.length;
var i__6227__auto___18840 = (0);
while(true){
if((i__6227__auto___18840 < len__6226__auto___18839)){
args18772.push((arguments[i__6227__auto___18840]));

var G__18841 = (i__6227__auto___18840 + (1));
i__6227__auto___18840 = G__18841;
continue;
} else {
}
break;
}

var G__18774 = args18772.length;
switch (G__18774) {
case 1:
return sablono.core.time_field18771.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field18771.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18772.length)].join('')));

}
});

sablono.core.time_field18771.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.time_field18771.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.time_field18771.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.time_field18771.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field18771);

/**
 * Creates a url input field.
 */
sablono.core.url_field18775 = (function sablono$core$url_field18775(var_args){
var args18776 = [];
var len__6226__auto___18843 = arguments.length;
var i__6227__auto___18844 = (0);
while(true){
if((i__6227__auto___18844 < len__6226__auto___18843)){
args18776.push((arguments[i__6227__auto___18844]));

var G__18845 = (i__6227__auto___18844 + (1));
i__6227__auto___18844 = G__18845;
continue;
} else {
}
break;
}

var G__18778 = args18776.length;
switch (G__18778) {
case 1:
return sablono.core.url_field18775.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field18775.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18776.length)].join('')));

}
});

sablono.core.url_field18775.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.url_field18775.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.url_field18775.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.url_field18775.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field18775);

/**
 * Creates a week input field.
 */
sablono.core.week_field18779 = (function sablono$core$week_field18779(var_args){
var args18780 = [];
var len__6226__auto___18847 = arguments.length;
var i__6227__auto___18848 = (0);
while(true){
if((i__6227__auto___18848 < len__6226__auto___18847)){
args18780.push((arguments[i__6227__auto___18848]));

var G__18849 = (i__6227__auto___18848 + (1));
i__6227__auto___18848 = G__18849;
continue;
} else {
}
break;
}

var G__18782 = args18780.length;
switch (G__18782) {
case 1:
return sablono.core.week_field18779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field18779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18780.length)].join('')));

}
});

sablono.core.week_field18779.cljs$core$IFn$_invoke$arity$1 = (function (name__18614__auto__){
return sablono.core.week_field18779.cljs$core$IFn$_invoke$arity$2(name__18614__auto__,null);
});

sablono.core.week_field18779.cljs$core$IFn$_invoke$arity$2 = (function (name__18614__auto__,value__18615__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__18614__auto__,value__18615__auto__);
});

sablono.core.week_field18779.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field18779);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box18851 = (function sablono$core$check_box18851(var_args){
var args18852 = [];
var len__6226__auto___18855 = arguments.length;
var i__6227__auto___18856 = (0);
while(true){
if((i__6227__auto___18856 < len__6226__auto___18855)){
args18852.push((arguments[i__6227__auto___18856]));

var G__18857 = (i__6227__auto___18856 + (1));
i__6227__auto___18856 = G__18857;
continue;
} else {
}
break;
}

var G__18854 = args18852.length;
switch (G__18854) {
case 1:
return sablono.core.check_box18851.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box18851.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box18851.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18852.length)].join('')));

}
});

sablono.core.check_box18851.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box18851.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box18851.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box18851.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box18851.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box18851.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box18851);
/**
 * Creates a radio button.
 */
sablono.core.radio_button18859 = (function sablono$core$radio_button18859(var_args){
var args18860 = [];
var len__6226__auto___18863 = arguments.length;
var i__6227__auto___18864 = (0);
while(true){
if((i__6227__auto___18864 < len__6226__auto___18863)){
args18860.push((arguments[i__6227__auto___18864]));

var G__18865 = (i__6227__auto___18864 + (1));
i__6227__auto___18864 = G__18865;
continue;
} else {
}
break;
}

var G__18862 = args18860.length;
switch (G__18862) {
case 1:
return sablono.core.radio_button18859.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button18859.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button18859.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18860.length)].join('')));

}
});

sablono.core.radio_button18859.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button18859.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button18859.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button18859.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button18859.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button18859.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button18859);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__18868 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__18868);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options18869 = (function sablono$core$select_options18869(coll){
var iter__5940__auto__ = (function sablono$core$select_options18869_$_iter__18880(s__18881){
return (new cljs.core.LazySeq(null,(function (){
var s__18881__$1 = s__18881;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__18881__$1);
if(temp__4425__auto__){
var s__18881__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18881__$2)){
var c__5938__auto__ = cljs.core.chunk_first(s__18881__$2);
var size__5939__auto__ = cljs.core.count(c__5938__auto__);
var b__18883 = cljs.core.chunk_buffer(size__5939__auto__);
if((function (){var i__18882 = (0);
while(true){
if((i__18882 < size__5939__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5938__auto__,i__18882);
cljs.core.chunk_append(b__18883,((cljs.core.sequential_QMARK_(x))?(function (){var vec__18888 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18888,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18888,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18888,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options18869(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__18890 = (i__18882 + (1));
i__18882 = G__18890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18883),sablono$core$select_options18869_$_iter__18880(cljs.core.chunk_rest(s__18881__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18883),null);
}
} else {
var x = cljs.core.first(s__18881__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__18889 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18889,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18889,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18889,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options18869(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options18869_$_iter__18880(cljs.core.rest(s__18881__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5940__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options18869);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down18891 = (function sablono$core$drop_down18891(var_args){
var args18892 = [];
var len__6226__auto___18895 = arguments.length;
var i__6227__auto___18896 = (0);
while(true){
if((i__6227__auto___18896 < len__6226__auto___18895)){
args18892.push((arguments[i__6227__auto___18896]));

var G__18897 = (i__6227__auto___18896 + (1));
i__6227__auto___18896 = G__18897;
continue;
} else {
}
break;
}

var G__18894 = args18892.length;
switch (G__18894) {
case 2:
return sablono.core.drop_down18891.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down18891.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18892.length)].join('')));

}
});

sablono.core.drop_down18891.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down18891.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down18891.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down18891.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down18891);
/**
 * Creates a text area element.
 */
sablono.core.text_area18899 = (function sablono$core$text_area18899(var_args){
var args18900 = [];
var len__6226__auto___18903 = arguments.length;
var i__6227__auto___18904 = (0);
while(true){
if((i__6227__auto___18904 < len__6226__auto___18903)){
args18900.push((arguments[i__6227__auto___18904]));

var G__18905 = (i__6227__auto___18904 + (1));
i__6227__auto___18904 = G__18905;
continue;
} else {
}
break;
}

var G__18902 = args18900.length;
switch (G__18902) {
case 1:
return sablono.core.text_area18899.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area18899.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18900.length)].join('')));

}
});

sablono.core.text_area18899.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area18899.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area18899.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area18899.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area18899);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label18907 = (function sablono$core$label18907(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label18907);
/**
 * Creates a submit button.
 */
sablono.core.submit_button18908 = (function sablono$core$submit_button18908(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button18908);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button18909 = (function sablono$core$reset_button18909(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button18909);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to18910 = (function sablono$core$form_to18910(var_args){
var args__6233__auto__ = [];
var len__6226__auto___18918 = arguments.length;
var i__6227__auto___18919 = (0);
while(true){
if((i__6227__auto___18919 < len__6226__auto___18918)){
args__6233__auto__.push((arguments[i__6227__auto___18919]));

var G__18920 = (i__6227__auto___18919 + (1));
i__6227__auto___18919 = G__18920;
continue;
} else {
}
break;
}

var argseq__6234__auto__ = ((((1) < args__6233__auto__.length))?(new cljs.core.IndexedSeq(args__6233__auto__.slice((1)),(0))):null);
return sablono.core.form_to18910.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6234__auto__);
});

sablono.core.form_to18910.cljs$core$IFn$_invoke$arity$variadic = (function (p__18913,body){
var vec__18914 = p__18913;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18914,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18914,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__18915 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__18916 = "_method";
var G__18917 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__18915,G__18916,G__18917) : sablono.core.hidden_field.call(null,G__18915,G__18916,G__18917));
})()], null)),body));
});

sablono.core.form_to18910.cljs$lang$maxFixedArity = (1);

sablono.core.form_to18910.cljs$lang$applyTo = (function (seq18911){
var G__18912 = cljs.core.first(seq18911);
var seq18911__$1 = cljs.core.next(seq18911);
return sablono.core.form_to18910.cljs$core$IFn$_invoke$arity$variadic(G__18912,seq18911__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to18910);

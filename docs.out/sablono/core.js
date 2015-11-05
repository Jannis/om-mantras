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
var G__19675__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__19674 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19674,(0),null);
var body = cljs.core.nthnext(vec__19674,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__19675 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19676__i = 0, G__19676__a = new Array(arguments.length -  0);
while (G__19676__i < G__19676__a.length) {G__19676__a[G__19676__i] = arguments[G__19676__i + 0]; ++G__19676__i;}
  args = new cljs.core.IndexedSeq(G__19676__a,0);
} 
return G__19675__delegate.call(this,args);};
G__19675.cljs$lang$maxFixedArity = 0;
G__19675.cljs$lang$applyTo = (function (arglist__19677){
var args = cljs.core.seq(arglist__19677);
return G__19675__delegate(args);
});
G__19675.cljs$core$IFn$_invoke$arity$variadic = G__19675__delegate;
return G__19675;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__19684(s__19685){
return (new cljs.core.LazySeq(null,(function (){
var s__19685__$1 = s__19685;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19685__$1);
if(temp__4425__auto__){
var s__19685__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19685__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__19685__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__19687 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__19686 = (0);
while(true){
if((i__19686 < size__5865__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__19686);
cljs.core.chunk_append(b__19687,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__19690 = (i__19686 + (1));
i__19686 = G__19690;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19687),sablono$core$update_arglists_$_iter__19684(cljs.core.chunk_rest(s__19685__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19687),null);
}
} else {
var args = cljs.core.first(s__19685__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__19684(cljs.core.rest(s__19685__$2)));
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
var len__6152__auto___19698 = arguments.length;
var i__6153__auto___19699 = (0);
while(true){
if((i__6153__auto___19699 < len__6152__auto___19698)){
args__6159__auto__.push((arguments[i__6153__auto___19699]));

var G__19700 = (i__6153__auto___19699 + (1));
i__6153__auto___19699 = G__19700;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__19692(s__19693){
return (new cljs.core.LazySeq(null,(function (){
var s__19693__$1 = s__19693;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19693__$1);
if(temp__4425__auto__){
var s__19693__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19693__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__19693__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__19695 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__19694 = (0);
while(true){
if((i__19694 < size__5865__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__19694);
cljs.core.chunk_append(b__19695,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__19701 = (i__19694 + (1));
i__19694 = G__19701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19695),sablono$core$iter__19692(cljs.core.chunk_rest(s__19693__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19695),null);
}
} else {
var style = cljs.core.first(s__19693__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__19692(cljs.core.rest(s__19693__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq19691){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19691));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__19706 = goog.dom.getDocument().body;
var G__19707 = (function (){var G__19708 = "script";
var G__19709 = {"src": src};
return goog.dom.createDom(G__19708,G__19709);
})();
return goog.dom.appendChild(G__19706,G__19707);
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
sablono.core.link_to19710 = (function sablono$core$link_to19710(var_args){
var args__6159__auto__ = [];
var len__6152__auto___19713 = arguments.length;
var i__6153__auto___19714 = (0);
while(true){
if((i__6153__auto___19714 < len__6152__auto___19713)){
args__6159__auto__.push((arguments[i__6153__auto___19714]));

var G__19715 = (i__6153__auto___19714 + (1));
i__6153__auto___19714 = G__19715;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to19710.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to19710.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to19710.cljs$lang$maxFixedArity = (1);

sablono.core.link_to19710.cljs$lang$applyTo = (function (seq19711){
var G__19712 = cljs.core.first(seq19711);
var seq19711__$1 = cljs.core.next(seq19711);
return sablono.core.link_to19710.cljs$core$IFn$_invoke$arity$variadic(G__19712,seq19711__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to19710);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to19716 = (function sablono$core$mail_to19716(var_args){
var args__6159__auto__ = [];
var len__6152__auto___19721 = arguments.length;
var i__6153__auto___19722 = (0);
while(true){
if((i__6153__auto___19722 < len__6152__auto___19721)){
args__6159__auto__.push((arguments[i__6153__auto___19722]));

var G__19723 = (i__6153__auto___19722 + (1));
i__6153__auto___19722 = G__19723;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to19716.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to19716.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__19719){
var vec__19720 = p__19719;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19720,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to19716.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to19716.cljs$lang$applyTo = (function (seq19717){
var G__19718 = cljs.core.first(seq19717);
var seq19717__$1 = cljs.core.next(seq19717);
return sablono.core.mail_to19716.cljs$core$IFn$_invoke$arity$variadic(G__19718,seq19717__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to19716);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list19724 = (function sablono$core$unordered_list19724(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5866__auto__ = (function sablono$core$unordered_list19724_$_iter__19731(s__19732){
return (new cljs.core.LazySeq(null,(function (){
var s__19732__$1 = s__19732;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19732__$1);
if(temp__4425__auto__){
var s__19732__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19732__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__19732__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__19734 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__19733 = (0);
while(true){
if((i__19733 < size__5865__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__19733);
cljs.core.chunk_append(b__19734,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19737 = (i__19733 + (1));
i__19733 = G__19737;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19734),sablono$core$unordered_list19724_$_iter__19731(cljs.core.chunk_rest(s__19732__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19734),null);
}
} else {
var x = cljs.core.first(s__19732__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list19724_$_iter__19731(cljs.core.rest(s__19732__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list19724);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list19738 = (function sablono$core$ordered_list19738(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5866__auto__ = (function sablono$core$ordered_list19738_$_iter__19745(s__19746){
return (new cljs.core.LazySeq(null,(function (){
var s__19746__$1 = s__19746;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19746__$1);
if(temp__4425__auto__){
var s__19746__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19746__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__19746__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__19748 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__19747 = (0);
while(true){
if((i__19747 < size__5865__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__19747);
cljs.core.chunk_append(b__19748,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__19751 = (i__19747 + (1));
i__19747 = G__19751;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19748),sablono$core$ordered_list19738_$_iter__19745(cljs.core.chunk_rest(s__19746__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19748),null);
}
} else {
var x = cljs.core.first(s__19746__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list19738_$_iter__19745(cljs.core.rest(s__19746__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list19738);
/**
 * Create an image element.
 */
sablono.core.image19752 = (function sablono$core$image19752(var_args){
var args19753 = [];
var len__6152__auto___19756 = arguments.length;
var i__6153__auto___19757 = (0);
while(true){
if((i__6153__auto___19757 < len__6152__auto___19756)){
args19753.push((arguments[i__6153__auto___19757]));

var G__19758 = (i__6153__auto___19757 + (1));
i__6153__auto___19757 = G__19758;
continue;
} else {
}
break;
}

var G__19755 = args19753.length;
switch (G__19755) {
case 1:
return sablono.core.image19752.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image19752.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19753.length)].join('')));

}
});

sablono.core.image19752.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image19752.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image19752.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image19752);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19760_SHARP_,p2__19761_SHARP_){
return [cljs.core.str(p1__19760_SHARP_),cljs.core.str("["),cljs.core.str(p2__19761_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__19762_SHARP_,p2__19763_SHARP_){
return [cljs.core.str(p1__19762_SHARP_),cljs.core.str("-"),cljs.core.str(p2__19763_SHARP_)].join('');
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
sablono.core.color_field19764 = (function sablono$core$color_field19764(var_args){
var args19765 = [];
var len__6152__auto___19832 = arguments.length;
var i__6153__auto___19833 = (0);
while(true){
if((i__6153__auto___19833 < len__6152__auto___19832)){
args19765.push((arguments[i__6153__auto___19833]));

var G__19834 = (i__6153__auto___19833 + (1));
i__6153__auto___19833 = G__19834;
continue;
} else {
}
break;
}

var G__19767 = args19765.length;
switch (G__19767) {
case 1:
return sablono.core.color_field19764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field19764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19765.length)].join('')));

}
});

sablono.core.color_field19764.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.color_field19764.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.color_field19764.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.color_field19764.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field19764);

/**
 * Creates a date input field.
 */
sablono.core.date_field19768 = (function sablono$core$date_field19768(var_args){
var args19769 = [];
var len__6152__auto___19836 = arguments.length;
var i__6153__auto___19837 = (0);
while(true){
if((i__6153__auto___19837 < len__6152__auto___19836)){
args19769.push((arguments[i__6153__auto___19837]));

var G__19838 = (i__6153__auto___19837 + (1));
i__6153__auto___19837 = G__19838;
continue;
} else {
}
break;
}

var G__19771 = args19769.length;
switch (G__19771) {
case 1:
return sablono.core.date_field19768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field19768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19769.length)].join('')));

}
});

sablono.core.date_field19768.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.date_field19768.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.date_field19768.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.date_field19768.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field19768);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field19772 = (function sablono$core$datetime_field19772(var_args){
var args19773 = [];
var len__6152__auto___19840 = arguments.length;
var i__6153__auto___19841 = (0);
while(true){
if((i__6153__auto___19841 < len__6152__auto___19840)){
args19773.push((arguments[i__6153__auto___19841]));

var G__19842 = (i__6153__auto___19841 + (1));
i__6153__auto___19841 = G__19842;
continue;
} else {
}
break;
}

var G__19775 = args19773.length;
switch (G__19775) {
case 1:
return sablono.core.datetime_field19772.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field19772.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19773.length)].join('')));

}
});

sablono.core.datetime_field19772.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.datetime_field19772.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.datetime_field19772.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.datetime_field19772.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field19772);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field19776 = (function sablono$core$datetime_local_field19776(var_args){
var args19777 = [];
var len__6152__auto___19844 = arguments.length;
var i__6153__auto___19845 = (0);
while(true){
if((i__6153__auto___19845 < len__6152__auto___19844)){
args19777.push((arguments[i__6153__auto___19845]));

var G__19846 = (i__6153__auto___19845 + (1));
i__6153__auto___19845 = G__19846;
continue;
} else {
}
break;
}

var G__19779 = args19777.length;
switch (G__19779) {
case 1:
return sablono.core.datetime_local_field19776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field19776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19777.length)].join('')));

}
});

sablono.core.datetime_local_field19776.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.datetime_local_field19776.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.datetime_local_field19776.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.datetime_local_field19776.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field19776);

/**
 * Creates a email input field.
 */
sablono.core.email_field19780 = (function sablono$core$email_field19780(var_args){
var args19781 = [];
var len__6152__auto___19848 = arguments.length;
var i__6153__auto___19849 = (0);
while(true){
if((i__6153__auto___19849 < len__6152__auto___19848)){
args19781.push((arguments[i__6153__auto___19849]));

var G__19850 = (i__6153__auto___19849 + (1));
i__6153__auto___19849 = G__19850;
continue;
} else {
}
break;
}

var G__19783 = args19781.length;
switch (G__19783) {
case 1:
return sablono.core.email_field19780.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field19780.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19781.length)].join('')));

}
});

sablono.core.email_field19780.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.email_field19780.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.email_field19780.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.email_field19780.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field19780);

/**
 * Creates a file input field.
 */
sablono.core.file_field19784 = (function sablono$core$file_field19784(var_args){
var args19785 = [];
var len__6152__auto___19852 = arguments.length;
var i__6153__auto___19853 = (0);
while(true){
if((i__6153__auto___19853 < len__6152__auto___19852)){
args19785.push((arguments[i__6153__auto___19853]));

var G__19854 = (i__6153__auto___19853 + (1));
i__6153__auto___19853 = G__19854;
continue;
} else {
}
break;
}

var G__19787 = args19785.length;
switch (G__19787) {
case 1:
return sablono.core.file_field19784.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field19784.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19785.length)].join('')));

}
});

sablono.core.file_field19784.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.file_field19784.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.file_field19784.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.file_field19784.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field19784);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field19788 = (function sablono$core$hidden_field19788(var_args){
var args19789 = [];
var len__6152__auto___19856 = arguments.length;
var i__6153__auto___19857 = (0);
while(true){
if((i__6153__auto___19857 < len__6152__auto___19856)){
args19789.push((arguments[i__6153__auto___19857]));

var G__19858 = (i__6153__auto___19857 + (1));
i__6153__auto___19857 = G__19858;
continue;
} else {
}
break;
}

var G__19791 = args19789.length;
switch (G__19791) {
case 1:
return sablono.core.hidden_field19788.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field19788.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19789.length)].join('')));

}
});

sablono.core.hidden_field19788.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.hidden_field19788.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.hidden_field19788.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.hidden_field19788.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field19788);

/**
 * Creates a month input field.
 */
sablono.core.month_field19792 = (function sablono$core$month_field19792(var_args){
var args19793 = [];
var len__6152__auto___19860 = arguments.length;
var i__6153__auto___19861 = (0);
while(true){
if((i__6153__auto___19861 < len__6152__auto___19860)){
args19793.push((arguments[i__6153__auto___19861]));

var G__19862 = (i__6153__auto___19861 + (1));
i__6153__auto___19861 = G__19862;
continue;
} else {
}
break;
}

var G__19795 = args19793.length;
switch (G__19795) {
case 1:
return sablono.core.month_field19792.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field19792.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19793.length)].join('')));

}
});

sablono.core.month_field19792.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.month_field19792.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.month_field19792.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.month_field19792.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field19792);

/**
 * Creates a number input field.
 */
sablono.core.number_field19796 = (function sablono$core$number_field19796(var_args){
var args19797 = [];
var len__6152__auto___19864 = arguments.length;
var i__6153__auto___19865 = (0);
while(true){
if((i__6153__auto___19865 < len__6152__auto___19864)){
args19797.push((arguments[i__6153__auto___19865]));

var G__19866 = (i__6153__auto___19865 + (1));
i__6153__auto___19865 = G__19866;
continue;
} else {
}
break;
}

var G__19799 = args19797.length;
switch (G__19799) {
case 1:
return sablono.core.number_field19796.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field19796.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19797.length)].join('')));

}
});

sablono.core.number_field19796.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.number_field19796.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.number_field19796.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.number_field19796.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field19796);

/**
 * Creates a password input field.
 */
sablono.core.password_field19800 = (function sablono$core$password_field19800(var_args){
var args19801 = [];
var len__6152__auto___19868 = arguments.length;
var i__6153__auto___19869 = (0);
while(true){
if((i__6153__auto___19869 < len__6152__auto___19868)){
args19801.push((arguments[i__6153__auto___19869]));

var G__19870 = (i__6153__auto___19869 + (1));
i__6153__auto___19869 = G__19870;
continue;
} else {
}
break;
}

var G__19803 = args19801.length;
switch (G__19803) {
case 1:
return sablono.core.password_field19800.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field19800.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19801.length)].join('')));

}
});

sablono.core.password_field19800.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.password_field19800.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.password_field19800.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.password_field19800.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field19800);

/**
 * Creates a range input field.
 */
sablono.core.range_field19804 = (function sablono$core$range_field19804(var_args){
var args19805 = [];
var len__6152__auto___19872 = arguments.length;
var i__6153__auto___19873 = (0);
while(true){
if((i__6153__auto___19873 < len__6152__auto___19872)){
args19805.push((arguments[i__6153__auto___19873]));

var G__19874 = (i__6153__auto___19873 + (1));
i__6153__auto___19873 = G__19874;
continue;
} else {
}
break;
}

var G__19807 = args19805.length;
switch (G__19807) {
case 1:
return sablono.core.range_field19804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field19804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19805.length)].join('')));

}
});

sablono.core.range_field19804.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.range_field19804.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.range_field19804.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.range_field19804.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field19804);

/**
 * Creates a search input field.
 */
sablono.core.search_field19808 = (function sablono$core$search_field19808(var_args){
var args19809 = [];
var len__6152__auto___19876 = arguments.length;
var i__6153__auto___19877 = (0);
while(true){
if((i__6153__auto___19877 < len__6152__auto___19876)){
args19809.push((arguments[i__6153__auto___19877]));

var G__19878 = (i__6153__auto___19877 + (1));
i__6153__auto___19877 = G__19878;
continue;
} else {
}
break;
}

var G__19811 = args19809.length;
switch (G__19811) {
case 1:
return sablono.core.search_field19808.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field19808.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19809.length)].join('')));

}
});

sablono.core.search_field19808.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.search_field19808.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.search_field19808.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.search_field19808.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field19808);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field19812 = (function sablono$core$tel_field19812(var_args){
var args19813 = [];
var len__6152__auto___19880 = arguments.length;
var i__6153__auto___19881 = (0);
while(true){
if((i__6153__auto___19881 < len__6152__auto___19880)){
args19813.push((arguments[i__6153__auto___19881]));

var G__19882 = (i__6153__auto___19881 + (1));
i__6153__auto___19881 = G__19882;
continue;
} else {
}
break;
}

var G__19815 = args19813.length;
switch (G__19815) {
case 1:
return sablono.core.tel_field19812.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field19812.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19813.length)].join('')));

}
});

sablono.core.tel_field19812.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.tel_field19812.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.tel_field19812.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.tel_field19812.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field19812);

/**
 * Creates a text input field.
 */
sablono.core.text_field19816 = (function sablono$core$text_field19816(var_args){
var args19817 = [];
var len__6152__auto___19884 = arguments.length;
var i__6153__auto___19885 = (0);
while(true){
if((i__6153__auto___19885 < len__6152__auto___19884)){
args19817.push((arguments[i__6153__auto___19885]));

var G__19886 = (i__6153__auto___19885 + (1));
i__6153__auto___19885 = G__19886;
continue;
} else {
}
break;
}

var G__19819 = args19817.length;
switch (G__19819) {
case 1:
return sablono.core.text_field19816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field19816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19817.length)].join('')));

}
});

sablono.core.text_field19816.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.text_field19816.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.text_field19816.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.text_field19816.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field19816);

/**
 * Creates a time input field.
 */
sablono.core.time_field19820 = (function sablono$core$time_field19820(var_args){
var args19821 = [];
var len__6152__auto___19888 = arguments.length;
var i__6153__auto___19889 = (0);
while(true){
if((i__6153__auto___19889 < len__6152__auto___19888)){
args19821.push((arguments[i__6153__auto___19889]));

var G__19890 = (i__6153__auto___19889 + (1));
i__6153__auto___19889 = G__19890;
continue;
} else {
}
break;
}

var G__19823 = args19821.length;
switch (G__19823) {
case 1:
return sablono.core.time_field19820.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field19820.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19821.length)].join('')));

}
});

sablono.core.time_field19820.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.time_field19820.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.time_field19820.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.time_field19820.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field19820);

/**
 * Creates a url input field.
 */
sablono.core.url_field19824 = (function sablono$core$url_field19824(var_args){
var args19825 = [];
var len__6152__auto___19892 = arguments.length;
var i__6153__auto___19893 = (0);
while(true){
if((i__6153__auto___19893 < len__6152__auto___19892)){
args19825.push((arguments[i__6153__auto___19893]));

var G__19894 = (i__6153__auto___19893 + (1));
i__6153__auto___19893 = G__19894;
continue;
} else {
}
break;
}

var G__19827 = args19825.length;
switch (G__19827) {
case 1:
return sablono.core.url_field19824.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field19824.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19825.length)].join('')));

}
});

sablono.core.url_field19824.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.url_field19824.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.url_field19824.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.url_field19824.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field19824);

/**
 * Creates a week input field.
 */
sablono.core.week_field19828 = (function sablono$core$week_field19828(var_args){
var args19829 = [];
var len__6152__auto___19896 = arguments.length;
var i__6153__auto___19897 = (0);
while(true){
if((i__6153__auto___19897 < len__6152__auto___19896)){
args19829.push((arguments[i__6153__auto___19897]));

var G__19898 = (i__6153__auto___19897 + (1));
i__6153__auto___19897 = G__19898;
continue;
} else {
}
break;
}

var G__19831 = args19829.length;
switch (G__19831) {
case 1:
return sablono.core.week_field19828.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field19828.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19829.length)].join('')));

}
});

sablono.core.week_field19828.cljs$core$IFn$_invoke$arity$1 = (function (name__12865__auto__){
return sablono.core.week_field19828.cljs$core$IFn$_invoke$arity$2(name__12865__auto__,null);
});

sablono.core.week_field19828.cljs$core$IFn$_invoke$arity$2 = (function (name__12865__auto__,value__12866__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__12865__auto__,value__12866__auto__);
});

sablono.core.week_field19828.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field19828);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box19900 = (function sablono$core$check_box19900(var_args){
var args19901 = [];
var len__6152__auto___19904 = arguments.length;
var i__6153__auto___19905 = (0);
while(true){
if((i__6153__auto___19905 < len__6152__auto___19904)){
args19901.push((arguments[i__6153__auto___19905]));

var G__19906 = (i__6153__auto___19905 + (1));
i__6153__auto___19905 = G__19906;
continue;
} else {
}
break;
}

var G__19903 = args19901.length;
switch (G__19903) {
case 1:
return sablono.core.check_box19900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box19900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box19900.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19901.length)].join('')));

}
});

sablono.core.check_box19900.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box19900.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box19900.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box19900.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box19900.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box19900.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box19900);
/**
 * Creates a radio button.
 */
sablono.core.radio_button19908 = (function sablono$core$radio_button19908(var_args){
var args19909 = [];
var len__6152__auto___19912 = arguments.length;
var i__6153__auto___19913 = (0);
while(true){
if((i__6153__auto___19913 < len__6152__auto___19912)){
args19909.push((arguments[i__6153__auto___19913]));

var G__19914 = (i__6153__auto___19913 + (1));
i__6153__auto___19913 = G__19914;
continue;
} else {
}
break;
}

var G__19911 = args19909.length;
switch (G__19911) {
case 1:
return sablono.core.radio_button19908.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button19908.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button19908.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19909.length)].join('')));

}
});

sablono.core.radio_button19908.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button19908.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button19908.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button19908.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button19908.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button19908.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button19908);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__19917 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__19917);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options19918 = (function sablono$core$select_options19918(coll){
var iter__5866__auto__ = (function sablono$core$select_options19918_$_iter__19929(s__19930){
return (new cljs.core.LazySeq(null,(function (){
var s__19930__$1 = s__19930;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19930__$1);
if(temp__4425__auto__){
var s__19930__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19930__$2)){
var c__5864__auto__ = cljs.core.chunk_first(s__19930__$2);
var size__5865__auto__ = cljs.core.count(c__5864__auto__);
var b__19932 = cljs.core.chunk_buffer(size__5865__auto__);
if((function (){var i__19931 = (0);
while(true){
if((i__19931 < size__5865__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5864__auto__,i__19931);
cljs.core.chunk_append(b__19932,((cljs.core.sequential_QMARK_(x))?(function (){var vec__19937 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19937,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19937,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19937,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19918(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__19939 = (i__19931 + (1));
i__19931 = G__19939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19932),sablono$core$select_options19918_$_iter__19929(cljs.core.chunk_rest(s__19930__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19932),null);
}
} else {
var x = cljs.core.first(s__19930__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__19938 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19938,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19938,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19938,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options19918(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options19918_$_iter__19929(cljs.core.rest(s__19930__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options19918);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down19940 = (function sablono$core$drop_down19940(var_args){
var args19941 = [];
var len__6152__auto___19944 = arguments.length;
var i__6153__auto___19945 = (0);
while(true){
if((i__6153__auto___19945 < len__6152__auto___19944)){
args19941.push((arguments[i__6153__auto___19945]));

var G__19946 = (i__6153__auto___19945 + (1));
i__6153__auto___19945 = G__19946;
continue;
} else {
}
break;
}

var G__19943 = args19941.length;
switch (G__19943) {
case 2:
return sablono.core.drop_down19940.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down19940.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19941.length)].join('')));

}
});

sablono.core.drop_down19940.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down19940.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down19940.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down19940.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down19940);
/**
 * Creates a text area element.
 */
sablono.core.text_area19948 = (function sablono$core$text_area19948(var_args){
var args19949 = [];
var len__6152__auto___19952 = arguments.length;
var i__6153__auto___19953 = (0);
while(true){
if((i__6153__auto___19953 < len__6152__auto___19952)){
args19949.push((arguments[i__6153__auto___19953]));

var G__19954 = (i__6153__auto___19953 + (1));
i__6153__auto___19953 = G__19954;
continue;
} else {
}
break;
}

var G__19951 = args19949.length;
switch (G__19951) {
case 1:
return sablono.core.text_area19948.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area19948.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19949.length)].join('')));

}
});

sablono.core.text_area19948.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area19948.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area19948.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area19948.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area19948);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label19956 = (function sablono$core$label19956(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label19956);
/**
 * Creates a submit button.
 */
sablono.core.submit_button19957 = (function sablono$core$submit_button19957(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button19957);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button19958 = (function sablono$core$reset_button19958(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button19958);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to19959 = (function sablono$core$form_to19959(var_args){
var args__6159__auto__ = [];
var len__6152__auto___19967 = arguments.length;
var i__6153__auto___19968 = (0);
while(true){
if((i__6153__auto___19968 < len__6152__auto___19967)){
args__6159__auto__.push((arguments[i__6153__auto___19968]));

var G__19969 = (i__6153__auto___19968 + (1));
i__6153__auto___19968 = G__19969;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to19959.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to19959.cljs$core$IFn$_invoke$arity$variadic = (function (p__19962,body){
var vec__19963 = p__19962;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19963,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19963,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__19964 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__19965 = "_method";
var G__19966 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__19964,G__19965,G__19966) : sablono.core.hidden_field.call(null,G__19964,G__19965,G__19966));
})()], null)),body));
});

sablono.core.form_to19959.cljs$lang$maxFixedArity = (1);

sablono.core.form_to19959.cljs$lang$applyTo = (function (seq19960){
var G__19961 = cljs.core.first(seq19960);
var seq19960__$1 = cljs.core.next(seq19960);
return sablono.core.form_to19959.cljs$core$IFn$_invoke$arity$variadic(G__19961,seq19960__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to19959);

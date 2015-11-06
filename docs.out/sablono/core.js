// Compiled by ClojureScript 1.7.145 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__17976__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17975 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17975,(0),null);
var body = cljs.core.nthnext.call(null,vec__17975,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17976 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17977__i = 0, G__17977__a = new Array(arguments.length -  0);
while (G__17977__i < G__17977__a.length) {G__17977__a[G__17977__i] = arguments[G__17977__i + 0]; ++G__17977__i;}
  args = new cljs.core.IndexedSeq(G__17977__a,0);
} 
return G__17976__delegate.call(this,args);};
G__17976.cljs$lang$maxFixedArity = 0;
G__17976.cljs$lang$applyTo = (function (arglist__17978){
var args = cljs.core.seq(arglist__17978);
return G__17976__delegate(args);
});
G__17976.cljs$core$IFn$_invoke$arity$variadic = G__17976__delegate;
return G__17976;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5866__auto__ = (function sablono$core$update_arglists_$_iter__17983(s__17984){
return (new cljs.core.LazySeq(null,(function (){
var s__17984__$1 = s__17984;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17984__$1);
if(temp__4425__auto__){
var s__17984__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17984__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17984__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17986 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17985 = (0);
while(true){
if((i__17985 < size__5865__auto__)){
var args = cljs.core._nth.call(null,c__5864__auto__,i__17985);
cljs.core.chunk_append.call(null,b__17986,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17987 = (i__17985 + (1));
i__17985 = G__17987;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17986),sablono$core$update_arglists_$_iter__17983.call(null,cljs.core.chunk_rest.call(null,s__17984__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17986),null);
}
} else {
var args = cljs.core.first.call(null,s__17984__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17983.call(null,cljs.core.rest.call(null,s__17984__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,arglists);
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
var len__6152__auto___17993 = arguments.length;
var i__6153__auto___17994 = (0);
while(true){
if((i__6153__auto___17994 < len__6152__auto___17993)){
args__6159__auto__.push((arguments[i__6153__auto___17994]));

var G__17995 = (i__6153__auto___17994 + (1));
i__6153__auto___17994 = G__17995;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((0) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6160__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5866__auto__ = (function sablono$core$iter__17989(s__17990){
return (new cljs.core.LazySeq(null,(function (){
var s__17990__$1 = s__17990;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17990__$1);
if(temp__4425__auto__){
var s__17990__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17990__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__17990__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__17992 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__17991 = (0);
while(true){
if((i__17991 < size__5865__auto__)){
var style = cljs.core._nth.call(null,c__5864__auto__,i__17991);
cljs.core.chunk_append.call(null,b__17992,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17996 = (i__17991 + (1));
i__17991 = G__17996;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17992),sablono$core$iter__17989.call(null,cljs.core.chunk_rest.call(null,s__17990__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17992),null);
}
} else {
var style = cljs.core.first.call(null,s__17990__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17989.call(null,cljs.core.rest.call(null,s__17990__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq17988){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17988));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to17997 = (function sablono$core$link_to17997(var_args){
var args__6159__auto__ = [];
var len__6152__auto___18000 = arguments.length;
var i__6153__auto___18001 = (0);
while(true){
if((i__6153__auto___18001 < len__6152__auto___18000)){
args__6159__auto__.push((arguments[i__6153__auto___18001]));

var G__18002 = (i__6153__auto___18001 + (1));
i__6153__auto___18001 = G__18002;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.link_to17997.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.link_to17997.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17997.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17997.cljs$lang$applyTo = (function (seq17998){
var G__17999 = cljs.core.first.call(null,seq17998);
var seq17998__$1 = cljs.core.next.call(null,seq17998);
return sablono.core.link_to17997.cljs$core$IFn$_invoke$arity$variadic(G__17999,seq17998__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17997);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to18003 = (function sablono$core$mail_to18003(var_args){
var args__6159__auto__ = [];
var len__6152__auto___18008 = arguments.length;
var i__6153__auto___18009 = (0);
while(true){
if((i__6153__auto___18009 < len__6152__auto___18008)){
args__6159__auto__.push((arguments[i__6153__auto___18009]));

var G__18010 = (i__6153__auto___18009 + (1));
i__6153__auto___18009 = G__18010;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.mail_to18003.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.mail_to18003.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__18006){
var vec__18007 = p__18006;
var content = cljs.core.nth.call(null,vec__18007,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5094__auto__ = content;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to18003.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to18003.cljs$lang$applyTo = (function (seq18004){
var G__18005 = cljs.core.first.call(null,seq18004);
var seq18004__$1 = cljs.core.next.call(null,seq18004);
return sablono.core.mail_to18003.cljs$core$IFn$_invoke$arity$variadic(G__18005,seq18004__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to18003);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list18011 = (function sablono$core$unordered_list18011(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5866__auto__ = (function sablono$core$unordered_list18011_$_iter__18016(s__18017){
return (new cljs.core.LazySeq(null,(function (){
var s__18017__$1 = s__18017;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18017__$1);
if(temp__4425__auto__){
var s__18017__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18017__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__18017__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__18019 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__18018 = (0);
while(true){
if((i__18018 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__18018);
cljs.core.chunk_append.call(null,b__18019,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__18020 = (i__18018 + (1));
i__18018 = G__18020;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18019),sablono$core$unordered_list18011_$_iter__18016.call(null,cljs.core.chunk_rest.call(null,s__18017__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18019),null);
}
} else {
var x = cljs.core.first.call(null,s__18017__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list18011_$_iter__18016.call(null,cljs.core.rest.call(null,s__18017__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list18011);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list18021 = (function sablono$core$ordered_list18021(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5866__auto__ = (function sablono$core$ordered_list18021_$_iter__18026(s__18027){
return (new cljs.core.LazySeq(null,(function (){
var s__18027__$1 = s__18027;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18027__$1);
if(temp__4425__auto__){
var s__18027__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18027__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__18027__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__18029 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__18028 = (0);
while(true){
if((i__18028 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__18028);
cljs.core.chunk_append.call(null,b__18029,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__18030 = (i__18028 + (1));
i__18028 = G__18030;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18029),sablono$core$ordered_list18021_$_iter__18026.call(null,cljs.core.chunk_rest.call(null,s__18027__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18029),null);
}
} else {
var x = cljs.core.first.call(null,s__18027__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list18021_$_iter__18026.call(null,cljs.core.rest.call(null,s__18027__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list18021);
/**
 * Create an image element.
 */
sablono.core.image18031 = (function sablono$core$image18031(var_args){
var args18032 = [];
var len__6152__auto___18035 = arguments.length;
var i__6153__auto___18036 = (0);
while(true){
if((i__6153__auto___18036 < len__6152__auto___18035)){
args18032.push((arguments[i__6153__auto___18036]));

var G__18037 = (i__6153__auto___18036 + (1));
i__6153__auto___18036 = G__18037;
continue;
} else {
}
break;
}

var G__18034 = args18032.length;
switch (G__18034) {
case 1:
return sablono.core.image18031.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image18031.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18032.length)].join('')));

}
});

sablono.core.image18031.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image18031.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image18031.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image18031);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__18039_SHARP_,p2__18040_SHARP_){
return [cljs.core.str(p1__18039_SHARP_),cljs.core.str("["),cljs.core.str(p2__18040_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__18041_SHARP_,p2__18042_SHARP_){
return [cljs.core.str(p1__18041_SHARP_),cljs.core.str("-"),cljs.core.str(p2__18042_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field18043 = (function sablono$core$color_field18043(var_args){
var args18044 = [];
var len__6152__auto___18111 = arguments.length;
var i__6153__auto___18112 = (0);
while(true){
if((i__6153__auto___18112 < len__6152__auto___18111)){
args18044.push((arguments[i__6153__auto___18112]));

var G__18113 = (i__6153__auto___18112 + (1));
i__6153__auto___18112 = G__18113;
continue;
} else {
}
break;
}

var G__18046 = args18044.length;
switch (G__18046) {
case 1:
return sablono.core.color_field18043.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field18043.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18044.length)].join('')));

}
});

sablono.core.color_field18043.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.color_field18043.call(null,name__11128__auto__,null);
});

sablono.core.color_field18043.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.color_field18043.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field18043);

/**
 * Creates a date input field.
 */
sablono.core.date_field18047 = (function sablono$core$date_field18047(var_args){
var args18048 = [];
var len__6152__auto___18115 = arguments.length;
var i__6153__auto___18116 = (0);
while(true){
if((i__6153__auto___18116 < len__6152__auto___18115)){
args18048.push((arguments[i__6153__auto___18116]));

var G__18117 = (i__6153__auto___18116 + (1));
i__6153__auto___18116 = G__18117;
continue;
} else {
}
break;
}

var G__18050 = args18048.length;
switch (G__18050) {
case 1:
return sablono.core.date_field18047.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field18047.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18048.length)].join('')));

}
});

sablono.core.date_field18047.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.date_field18047.call(null,name__11128__auto__,null);
});

sablono.core.date_field18047.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.date_field18047.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field18047);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field18051 = (function sablono$core$datetime_field18051(var_args){
var args18052 = [];
var len__6152__auto___18119 = arguments.length;
var i__6153__auto___18120 = (0);
while(true){
if((i__6153__auto___18120 < len__6152__auto___18119)){
args18052.push((arguments[i__6153__auto___18120]));

var G__18121 = (i__6153__auto___18120 + (1));
i__6153__auto___18120 = G__18121;
continue;
} else {
}
break;
}

var G__18054 = args18052.length;
switch (G__18054) {
case 1:
return sablono.core.datetime_field18051.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field18051.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18052.length)].join('')));

}
});

sablono.core.datetime_field18051.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.datetime_field18051.call(null,name__11128__auto__,null);
});

sablono.core.datetime_field18051.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.datetime_field18051.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field18051);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field18055 = (function sablono$core$datetime_local_field18055(var_args){
var args18056 = [];
var len__6152__auto___18123 = arguments.length;
var i__6153__auto___18124 = (0);
while(true){
if((i__6153__auto___18124 < len__6152__auto___18123)){
args18056.push((arguments[i__6153__auto___18124]));

var G__18125 = (i__6153__auto___18124 + (1));
i__6153__auto___18124 = G__18125;
continue;
} else {
}
break;
}

var G__18058 = args18056.length;
switch (G__18058) {
case 1:
return sablono.core.datetime_local_field18055.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field18055.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18056.length)].join('')));

}
});

sablono.core.datetime_local_field18055.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.datetime_local_field18055.call(null,name__11128__auto__,null);
});

sablono.core.datetime_local_field18055.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.datetime_local_field18055.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field18055);

/**
 * Creates a email input field.
 */
sablono.core.email_field18059 = (function sablono$core$email_field18059(var_args){
var args18060 = [];
var len__6152__auto___18127 = arguments.length;
var i__6153__auto___18128 = (0);
while(true){
if((i__6153__auto___18128 < len__6152__auto___18127)){
args18060.push((arguments[i__6153__auto___18128]));

var G__18129 = (i__6153__auto___18128 + (1));
i__6153__auto___18128 = G__18129;
continue;
} else {
}
break;
}

var G__18062 = args18060.length;
switch (G__18062) {
case 1:
return sablono.core.email_field18059.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field18059.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18060.length)].join('')));

}
});

sablono.core.email_field18059.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.email_field18059.call(null,name__11128__auto__,null);
});

sablono.core.email_field18059.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.email_field18059.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field18059);

/**
 * Creates a file input field.
 */
sablono.core.file_field18063 = (function sablono$core$file_field18063(var_args){
var args18064 = [];
var len__6152__auto___18131 = arguments.length;
var i__6153__auto___18132 = (0);
while(true){
if((i__6153__auto___18132 < len__6152__auto___18131)){
args18064.push((arguments[i__6153__auto___18132]));

var G__18133 = (i__6153__auto___18132 + (1));
i__6153__auto___18132 = G__18133;
continue;
} else {
}
break;
}

var G__18066 = args18064.length;
switch (G__18066) {
case 1:
return sablono.core.file_field18063.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field18063.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18064.length)].join('')));

}
});

sablono.core.file_field18063.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.file_field18063.call(null,name__11128__auto__,null);
});

sablono.core.file_field18063.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.file_field18063.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field18063);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field18067 = (function sablono$core$hidden_field18067(var_args){
var args18068 = [];
var len__6152__auto___18135 = arguments.length;
var i__6153__auto___18136 = (0);
while(true){
if((i__6153__auto___18136 < len__6152__auto___18135)){
args18068.push((arguments[i__6153__auto___18136]));

var G__18137 = (i__6153__auto___18136 + (1));
i__6153__auto___18136 = G__18137;
continue;
} else {
}
break;
}

var G__18070 = args18068.length;
switch (G__18070) {
case 1:
return sablono.core.hidden_field18067.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field18067.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18068.length)].join('')));

}
});

sablono.core.hidden_field18067.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.hidden_field18067.call(null,name__11128__auto__,null);
});

sablono.core.hidden_field18067.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.hidden_field18067.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field18067);

/**
 * Creates a month input field.
 */
sablono.core.month_field18071 = (function sablono$core$month_field18071(var_args){
var args18072 = [];
var len__6152__auto___18139 = arguments.length;
var i__6153__auto___18140 = (0);
while(true){
if((i__6153__auto___18140 < len__6152__auto___18139)){
args18072.push((arguments[i__6153__auto___18140]));

var G__18141 = (i__6153__auto___18140 + (1));
i__6153__auto___18140 = G__18141;
continue;
} else {
}
break;
}

var G__18074 = args18072.length;
switch (G__18074) {
case 1:
return sablono.core.month_field18071.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field18071.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18072.length)].join('')));

}
});

sablono.core.month_field18071.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.month_field18071.call(null,name__11128__auto__,null);
});

sablono.core.month_field18071.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.month_field18071.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field18071);

/**
 * Creates a number input field.
 */
sablono.core.number_field18075 = (function sablono$core$number_field18075(var_args){
var args18076 = [];
var len__6152__auto___18143 = arguments.length;
var i__6153__auto___18144 = (0);
while(true){
if((i__6153__auto___18144 < len__6152__auto___18143)){
args18076.push((arguments[i__6153__auto___18144]));

var G__18145 = (i__6153__auto___18144 + (1));
i__6153__auto___18144 = G__18145;
continue;
} else {
}
break;
}

var G__18078 = args18076.length;
switch (G__18078) {
case 1:
return sablono.core.number_field18075.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field18075.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18076.length)].join('')));

}
});

sablono.core.number_field18075.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.number_field18075.call(null,name__11128__auto__,null);
});

sablono.core.number_field18075.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.number_field18075.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field18075);

/**
 * Creates a password input field.
 */
sablono.core.password_field18079 = (function sablono$core$password_field18079(var_args){
var args18080 = [];
var len__6152__auto___18147 = arguments.length;
var i__6153__auto___18148 = (0);
while(true){
if((i__6153__auto___18148 < len__6152__auto___18147)){
args18080.push((arguments[i__6153__auto___18148]));

var G__18149 = (i__6153__auto___18148 + (1));
i__6153__auto___18148 = G__18149;
continue;
} else {
}
break;
}

var G__18082 = args18080.length;
switch (G__18082) {
case 1:
return sablono.core.password_field18079.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field18079.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18080.length)].join('')));

}
});

sablono.core.password_field18079.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.password_field18079.call(null,name__11128__auto__,null);
});

sablono.core.password_field18079.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.password_field18079.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field18079);

/**
 * Creates a range input field.
 */
sablono.core.range_field18083 = (function sablono$core$range_field18083(var_args){
var args18084 = [];
var len__6152__auto___18151 = arguments.length;
var i__6153__auto___18152 = (0);
while(true){
if((i__6153__auto___18152 < len__6152__auto___18151)){
args18084.push((arguments[i__6153__auto___18152]));

var G__18153 = (i__6153__auto___18152 + (1));
i__6153__auto___18152 = G__18153;
continue;
} else {
}
break;
}

var G__18086 = args18084.length;
switch (G__18086) {
case 1:
return sablono.core.range_field18083.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field18083.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18084.length)].join('')));

}
});

sablono.core.range_field18083.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.range_field18083.call(null,name__11128__auto__,null);
});

sablono.core.range_field18083.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.range_field18083.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field18083);

/**
 * Creates a search input field.
 */
sablono.core.search_field18087 = (function sablono$core$search_field18087(var_args){
var args18088 = [];
var len__6152__auto___18155 = arguments.length;
var i__6153__auto___18156 = (0);
while(true){
if((i__6153__auto___18156 < len__6152__auto___18155)){
args18088.push((arguments[i__6153__auto___18156]));

var G__18157 = (i__6153__auto___18156 + (1));
i__6153__auto___18156 = G__18157;
continue;
} else {
}
break;
}

var G__18090 = args18088.length;
switch (G__18090) {
case 1:
return sablono.core.search_field18087.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field18087.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18088.length)].join('')));

}
});

sablono.core.search_field18087.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.search_field18087.call(null,name__11128__auto__,null);
});

sablono.core.search_field18087.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.search_field18087.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field18087);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field18091 = (function sablono$core$tel_field18091(var_args){
var args18092 = [];
var len__6152__auto___18159 = arguments.length;
var i__6153__auto___18160 = (0);
while(true){
if((i__6153__auto___18160 < len__6152__auto___18159)){
args18092.push((arguments[i__6153__auto___18160]));

var G__18161 = (i__6153__auto___18160 + (1));
i__6153__auto___18160 = G__18161;
continue;
} else {
}
break;
}

var G__18094 = args18092.length;
switch (G__18094) {
case 1:
return sablono.core.tel_field18091.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field18091.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18092.length)].join('')));

}
});

sablono.core.tel_field18091.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.tel_field18091.call(null,name__11128__auto__,null);
});

sablono.core.tel_field18091.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.tel_field18091.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field18091);

/**
 * Creates a text input field.
 */
sablono.core.text_field18095 = (function sablono$core$text_field18095(var_args){
var args18096 = [];
var len__6152__auto___18163 = arguments.length;
var i__6153__auto___18164 = (0);
while(true){
if((i__6153__auto___18164 < len__6152__auto___18163)){
args18096.push((arguments[i__6153__auto___18164]));

var G__18165 = (i__6153__auto___18164 + (1));
i__6153__auto___18164 = G__18165;
continue;
} else {
}
break;
}

var G__18098 = args18096.length;
switch (G__18098) {
case 1:
return sablono.core.text_field18095.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field18095.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18096.length)].join('')));

}
});

sablono.core.text_field18095.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.text_field18095.call(null,name__11128__auto__,null);
});

sablono.core.text_field18095.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.text_field18095.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field18095);

/**
 * Creates a time input field.
 */
sablono.core.time_field18099 = (function sablono$core$time_field18099(var_args){
var args18100 = [];
var len__6152__auto___18167 = arguments.length;
var i__6153__auto___18168 = (0);
while(true){
if((i__6153__auto___18168 < len__6152__auto___18167)){
args18100.push((arguments[i__6153__auto___18168]));

var G__18169 = (i__6153__auto___18168 + (1));
i__6153__auto___18168 = G__18169;
continue;
} else {
}
break;
}

var G__18102 = args18100.length;
switch (G__18102) {
case 1:
return sablono.core.time_field18099.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field18099.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18100.length)].join('')));

}
});

sablono.core.time_field18099.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.time_field18099.call(null,name__11128__auto__,null);
});

sablono.core.time_field18099.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.time_field18099.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field18099);

/**
 * Creates a url input field.
 */
sablono.core.url_field18103 = (function sablono$core$url_field18103(var_args){
var args18104 = [];
var len__6152__auto___18171 = arguments.length;
var i__6153__auto___18172 = (0);
while(true){
if((i__6153__auto___18172 < len__6152__auto___18171)){
args18104.push((arguments[i__6153__auto___18172]));

var G__18173 = (i__6153__auto___18172 + (1));
i__6153__auto___18172 = G__18173;
continue;
} else {
}
break;
}

var G__18106 = args18104.length;
switch (G__18106) {
case 1:
return sablono.core.url_field18103.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field18103.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18104.length)].join('')));

}
});

sablono.core.url_field18103.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.url_field18103.call(null,name__11128__auto__,null);
});

sablono.core.url_field18103.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.url_field18103.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field18103);

/**
 * Creates a week input field.
 */
sablono.core.week_field18107 = (function sablono$core$week_field18107(var_args){
var args18108 = [];
var len__6152__auto___18175 = arguments.length;
var i__6153__auto___18176 = (0);
while(true){
if((i__6153__auto___18176 < len__6152__auto___18175)){
args18108.push((arguments[i__6153__auto___18176]));

var G__18177 = (i__6153__auto___18176 + (1));
i__6153__auto___18176 = G__18177;
continue;
} else {
}
break;
}

var G__18110 = args18108.length;
switch (G__18110) {
case 1:
return sablono.core.week_field18107.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field18107.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18108.length)].join('')));

}
});

sablono.core.week_field18107.cljs$core$IFn$_invoke$arity$1 = (function (name__11128__auto__){
return sablono.core.week_field18107.call(null,name__11128__auto__,null);
});

sablono.core.week_field18107.cljs$core$IFn$_invoke$arity$2 = (function (name__11128__auto__,value__11129__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__11128__auto__,value__11129__auto__);
});

sablono.core.week_field18107.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field18107);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box18179 = (function sablono$core$check_box18179(var_args){
var args18180 = [];
var len__6152__auto___18183 = arguments.length;
var i__6153__auto___18184 = (0);
while(true){
if((i__6153__auto___18184 < len__6152__auto___18183)){
args18180.push((arguments[i__6153__auto___18184]));

var G__18185 = (i__6153__auto___18184 + (1));
i__6153__auto___18184 = G__18185;
continue;
} else {
}
break;
}

var G__18182 = args18180.length;
switch (G__18182) {
case 1:
return sablono.core.check_box18179.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box18179.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box18179.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18180.length)].join('')));

}
});

sablono.core.check_box18179.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box18179.call(null,name,null);
});

sablono.core.check_box18179.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box18179.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box18179.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box18179.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box18179);
/**
 * Creates a radio button.
 */
sablono.core.radio_button18187 = (function sablono$core$radio_button18187(var_args){
var args18188 = [];
var len__6152__auto___18191 = arguments.length;
var i__6153__auto___18192 = (0);
while(true){
if((i__6153__auto___18192 < len__6152__auto___18191)){
args18188.push((arguments[i__6153__auto___18192]));

var G__18193 = (i__6153__auto___18192 + (1));
i__6153__auto___18192 = G__18193;
continue;
} else {
}
break;
}

var G__18190 = args18188.length;
switch (G__18190) {
case 1:
return sablono.core.radio_button18187.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button18187.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button18187.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18188.length)].join('')));

}
});

sablono.core.radio_button18187.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button18187.call(null,group,null);
});

sablono.core.radio_button18187.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button18187.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button18187.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button18187.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button18187);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options18195 = (function sablono$core$select_options18195(coll){
var iter__5866__auto__ = (function sablono$core$select_options18195_$_iter__18204(s__18205){
return (new cljs.core.LazySeq(null,(function (){
var s__18205__$1 = s__18205;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18205__$1);
if(temp__4425__auto__){
var s__18205__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18205__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__18205__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__18207 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__18206 = (0);
while(true){
if((i__18206 < size__5865__auto__)){
var x = cljs.core._nth.call(null,c__5864__auto__,i__18206);
cljs.core.chunk_append.call(null,b__18207,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18210 = x;
var text = cljs.core.nth.call(null,vec__18210,(0),null);
var val = cljs.core.nth.call(null,vec__18210,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__18210,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options18195.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__18212 = (i__18206 + (1));
i__18206 = G__18212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18207),sablono$core$select_options18195_$_iter__18204.call(null,cljs.core.chunk_rest.call(null,s__18205__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18207),null);
}
} else {
var x = cljs.core.first.call(null,s__18205__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__18211 = x;
var text = cljs.core.nth.call(null,vec__18211,(0),null);
var val = cljs.core.nth.call(null,vec__18211,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__18211,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options18195.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options18195_$_iter__18204.call(null,cljs.core.rest.call(null,s__18205__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5866__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options18195);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down18213 = (function sablono$core$drop_down18213(var_args){
var args18214 = [];
var len__6152__auto___18217 = arguments.length;
var i__6153__auto___18218 = (0);
while(true){
if((i__6153__auto___18218 < len__6152__auto___18217)){
args18214.push((arguments[i__6153__auto___18218]));

var G__18219 = (i__6153__auto___18218 + (1));
i__6153__auto___18218 = G__18219;
continue;
} else {
}
break;
}

var G__18216 = args18214.length;
switch (G__18216) {
case 2:
return sablono.core.drop_down18213.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down18213.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18214.length)].join('')));

}
});

sablono.core.drop_down18213.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down18213.call(null,name,options,null);
});

sablono.core.drop_down18213.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down18213.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down18213);
/**
 * Creates a text area element.
 */
sablono.core.text_area18221 = (function sablono$core$text_area18221(var_args){
var args18222 = [];
var len__6152__auto___18225 = arguments.length;
var i__6153__auto___18226 = (0);
while(true){
if((i__6153__auto___18226 < len__6152__auto___18225)){
args18222.push((arguments[i__6153__auto___18226]));

var G__18227 = (i__6153__auto___18226 + (1));
i__6153__auto___18226 = G__18227;
continue;
} else {
}
break;
}

var G__18224 = args18222.length;
switch (G__18224) {
case 1:
return sablono.core.text_area18221.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area18221.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18222.length)].join('')));

}
});

sablono.core.text_area18221.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area18221.call(null,name,null);
});

sablono.core.text_area18221.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area18221.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area18221);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label18229 = (function sablono$core$label18229(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label18229);
/**
 * Creates a submit button.
 */
sablono.core.submit_button18230 = (function sablono$core$submit_button18230(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button18230);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button18231 = (function sablono$core$reset_button18231(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button18231);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to18232 = (function sablono$core$form_to18232(var_args){
var args__6159__auto__ = [];
var len__6152__auto___18237 = arguments.length;
var i__6153__auto___18238 = (0);
while(true){
if((i__6153__auto___18238 < len__6152__auto___18237)){
args__6159__auto__.push((arguments[i__6153__auto___18238]));

var G__18239 = (i__6153__auto___18238 + (1));
i__6153__auto___18238 = G__18239;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return sablono.core.form_to18232.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

sablono.core.form_to18232.cljs$core$IFn$_invoke$arity$variadic = (function (p__18235,body){
var vec__18236 = p__18235;
var method = cljs.core.nth.call(null,vec__18236,(0),null);
var action = cljs.core.nth.call(null,vec__18236,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to18232.cljs$lang$maxFixedArity = (1);

sablono.core.form_to18232.cljs$lang$applyTo = (function (seq18233){
var G__18234 = cljs.core.first.call(null,seq18233);
var seq18233__$1 = cljs.core.next.call(null,seq18233);
return sablono.core.form_to18232.cljs$core$IFn$_invoke$arity$variadic(G__18234,seq18233__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to18232);

//# sourceMappingURL=core.js.map
// Compiled by ClojureScript 1.7.145 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__16371_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__16371_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__16376 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__16377 = null;
var count__16378 = (0);
var i__16379 = (0);
while(true){
if((i__16379 < count__16378)){
var s = cljs.core._nth.call(null,chunk__16377,i__16379);
var temp__4425__auto___16380 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___16380)){
var sheet_16381 = temp__4425__auto___16380;
var temp__4425__auto___16382__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_16381.href,changed);
if(cljs.core.truth_(temp__4425__auto___16382__$1)){
var href_uri_16383 = temp__4425__auto___16382__$1;
sheet_16381.ownerNode.href = href_uri_16383.makeUnique().toString();
} else {
}
} else {
}

var G__16384 = seq__16376;
var G__16385 = chunk__16377;
var G__16386 = count__16378;
var G__16387 = (i__16379 + (1));
seq__16376 = G__16384;
chunk__16377 = G__16385;
count__16378 = G__16386;
i__16379 = G__16387;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16376);
if(temp__4425__auto__){
var seq__16376__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16376__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__16376__$1);
var G__16388 = cljs.core.chunk_rest.call(null,seq__16376__$1);
var G__16389 = c__5897__auto__;
var G__16390 = cljs.core.count.call(null,c__5897__auto__);
var G__16391 = (0);
seq__16376 = G__16388;
chunk__16377 = G__16389;
count__16378 = G__16390;
i__16379 = G__16391;
continue;
} else {
var s = cljs.core.first.call(null,seq__16376__$1);
var temp__4425__auto___16392__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___16392__$1)){
var sheet_16393 = temp__4425__auto___16392__$1;
var temp__4425__auto___16394__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_16393.href,changed);
if(cljs.core.truth_(temp__4425__auto___16394__$2)){
var href_uri_16395 = temp__4425__auto___16394__$2;
sheet_16393.ownerNode.href = href_uri_16395.makeUnique().toString();
} else {
}
} else {
}

var G__16396 = cljs.core.next.call(null,seq__16376__$1);
var G__16397 = null;
var G__16398 = (0);
var G__16399 = (0);
seq__16376 = G__16396;
chunk__16377 = G__16397;
count__16378 = G__16398;
i__16379 = G__16399;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__16404 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__16405 = null;
var count__16406 = (0);
var i__16407 = (0);
while(true){
if((i__16407 < count__16406)){
var s = cljs.core._nth.call(null,chunk__16405,i__16407);
var temp__4425__auto___16408 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___16408)){
var image_16409 = temp__4425__auto___16408;
var temp__4425__auto___16410__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_16409.src,changed);
if(cljs.core.truth_(temp__4425__auto___16410__$1)){
var href_uri_16411 = temp__4425__auto___16410__$1;
image_16409.src = href_uri_16411.makeUnique().toString();
} else {
}
} else {
}

var G__16412 = seq__16404;
var G__16413 = chunk__16405;
var G__16414 = count__16406;
var G__16415 = (i__16407 + (1));
seq__16404 = G__16412;
chunk__16405 = G__16413;
count__16406 = G__16414;
i__16407 = G__16415;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16404);
if(temp__4425__auto__){
var seq__16404__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16404__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__16404__$1);
var G__16416 = cljs.core.chunk_rest.call(null,seq__16404__$1);
var G__16417 = c__5897__auto__;
var G__16418 = cljs.core.count.call(null,c__5897__auto__);
var G__16419 = (0);
seq__16404 = G__16416;
chunk__16405 = G__16417;
count__16406 = G__16418;
i__16407 = G__16419;
continue;
} else {
var s = cljs.core.first.call(null,seq__16404__$1);
var temp__4425__auto___16420__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___16420__$1)){
var image_16421 = temp__4425__auto___16420__$1;
var temp__4425__auto___16422__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_16421.src,changed);
if(cljs.core.truth_(temp__4425__auto___16422__$2)){
var href_uri_16423 = temp__4425__auto___16422__$2;
image_16421.src = href_uri_16423.makeUnique().toString();
} else {
}
} else {
}

var G__16424 = cljs.core.next.call(null,seq__16404__$1);
var G__16425 = null;
var G__16426 = (0);
var G__16427 = (0);
seq__16404 = G__16424;
chunk__16405 = G__16425;
count__16406 = G__16426;
i__16407 = G__16427;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__16430){
var map__16433 = p__16430;
var map__16433__$1 = ((((!((map__16433 == null)))?((((map__16433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16433):map__16433);
var on_jsload = cljs.core.get.call(null,map__16433__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__16433,map__16433__$1,on_jsload){
return (function (p1__16428_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__16428_SHARP_,".js");
});})(map__16433,map__16433__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__16433,map__16433__$1,on_jsload){
return (function (p1__16429_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__16429_SHARP_).makeUnique());
});})(js_files,map__16433,map__16433__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__16433,map__16433__$1,on_jsload){
return (function() { 
var G__16435__delegate = function (_){
return on_jsload.call(null);
};
var G__16435 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__16436__i = 0, G__16436__a = new Array(arguments.length -  0);
while (G__16436__i < G__16436__a.length) {G__16436__a[G__16436__i] = arguments[G__16436__i + 0]; ++G__16436__i;}
  _ = new cljs.core.IndexedSeq(G__16436__a,0);
} 
return G__16435__delegate.call(this,_);};
G__16435.cljs$lang$maxFixedArity = 0;
G__16435.cljs$lang$applyTo = (function (arglist__16437){
var _ = cljs.core.seq(arglist__16437);
return G__16435__delegate(_);
});
G__16435.cljs$core$IFn$_invoke$arity$variadic = G__16435__delegate;
return G__16435;
})()
;})(js_files,map__16433,map__16433__$1,on_jsload))
,((function (js_files,map__16433,map__16433__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__16433,map__16433__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__16442_16446 = cljs.core.seq.call(null,things_to_log);
var chunk__16443_16447 = null;
var count__16444_16448 = (0);
var i__16445_16449 = (0);
while(true){
if((i__16445_16449 < count__16444_16448)){
var t_16450 = cljs.core._nth.call(null,chunk__16443_16447,i__16445_16449);
console.log(t_16450);

var G__16451 = seq__16442_16446;
var G__16452 = chunk__16443_16447;
var G__16453 = count__16444_16448;
var G__16454 = (i__16445_16449 + (1));
seq__16442_16446 = G__16451;
chunk__16443_16447 = G__16452;
count__16444_16448 = G__16453;
i__16445_16449 = G__16454;
continue;
} else {
var temp__4425__auto___16455 = cljs.core.seq.call(null,seq__16442_16446);
if(temp__4425__auto___16455){
var seq__16442_16456__$1 = temp__4425__auto___16455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16442_16456__$1)){
var c__5897__auto___16457 = cljs.core.chunk_first.call(null,seq__16442_16456__$1);
var G__16458 = cljs.core.chunk_rest.call(null,seq__16442_16456__$1);
var G__16459 = c__5897__auto___16457;
var G__16460 = cljs.core.count.call(null,c__5897__auto___16457);
var G__16461 = (0);
seq__16442_16446 = G__16458;
chunk__16443_16447 = G__16459;
count__16444_16448 = G__16460;
i__16445_16449 = G__16461;
continue;
} else {
var t_16462 = cljs.core.first.call(null,seq__16442_16456__$1);
console.log(t_16462);

var G__16463 = cljs.core.next.call(null,seq__16442_16456__$1);
var G__16464 = null;
var G__16465 = (0);
var G__16466 = (0);
seq__16442_16446 = G__16463;
chunk__16443_16447 = G__16464;
count__16444_16448 = G__16465;
i__16445_16449 = G__16466;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__16468 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__16468,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__16468);

adzerk.boot_reload.reload.reload_css.call(null,G__16468);

adzerk.boot_reload.reload.reload_img.call(null,G__16468);

return G__16468;
});

//# sourceMappingURL=reload.js.map
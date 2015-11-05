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
return (function (p1__16414_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__16414_SHARP_),path);
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
var seq__16419 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__16420 = null;
var count__16421 = (0);
var i__16422 = (0);
while(true){
if((i__16422 < count__16421)){
var s = cljs.core._nth.call(null,chunk__16420,i__16422);
var temp__4425__auto___16423 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___16423)){
var sheet_16424 = temp__4425__auto___16423;
var temp__4425__auto___16425__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_16424.href,changed);
if(cljs.core.truth_(temp__4425__auto___16425__$1)){
var href_uri_16426 = temp__4425__auto___16425__$1;
sheet_16424.ownerNode.href = href_uri_16426.makeUnique().toString();
} else {
}
} else {
}

var G__16427 = seq__16419;
var G__16428 = chunk__16420;
var G__16429 = count__16421;
var G__16430 = (i__16422 + (1));
seq__16419 = G__16427;
chunk__16420 = G__16428;
count__16421 = G__16429;
i__16422 = G__16430;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16419);
if(temp__4425__auto__){
var seq__16419__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16419__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__16419__$1);
var G__16431 = cljs.core.chunk_rest.call(null,seq__16419__$1);
var G__16432 = c__5897__auto__;
var G__16433 = cljs.core.count.call(null,c__5897__auto__);
var G__16434 = (0);
seq__16419 = G__16431;
chunk__16420 = G__16432;
count__16421 = G__16433;
i__16422 = G__16434;
continue;
} else {
var s = cljs.core.first.call(null,seq__16419__$1);
var temp__4425__auto___16435__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___16435__$1)){
var sheet_16436 = temp__4425__auto___16435__$1;
var temp__4425__auto___16437__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_16436.href,changed);
if(cljs.core.truth_(temp__4425__auto___16437__$2)){
var href_uri_16438 = temp__4425__auto___16437__$2;
sheet_16436.ownerNode.href = href_uri_16438.makeUnique().toString();
} else {
}
} else {
}

var G__16439 = cljs.core.next.call(null,seq__16419__$1);
var G__16440 = null;
var G__16441 = (0);
var G__16442 = (0);
seq__16419 = G__16439;
chunk__16420 = G__16440;
count__16421 = G__16441;
i__16422 = G__16442;
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
var seq__16447 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__16448 = null;
var count__16449 = (0);
var i__16450 = (0);
while(true){
if((i__16450 < count__16449)){
var s = cljs.core._nth.call(null,chunk__16448,i__16450);
var temp__4425__auto___16451 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___16451)){
var image_16452 = temp__4425__auto___16451;
var temp__4425__auto___16453__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_16452.src,changed);
if(cljs.core.truth_(temp__4425__auto___16453__$1)){
var href_uri_16454 = temp__4425__auto___16453__$1;
image_16452.src = href_uri_16454.makeUnique().toString();
} else {
}
} else {
}

var G__16455 = seq__16447;
var G__16456 = chunk__16448;
var G__16457 = count__16449;
var G__16458 = (i__16450 + (1));
seq__16447 = G__16455;
chunk__16448 = G__16456;
count__16449 = G__16457;
i__16450 = G__16458;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16447);
if(temp__4425__auto__){
var seq__16447__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16447__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__16447__$1);
var G__16459 = cljs.core.chunk_rest.call(null,seq__16447__$1);
var G__16460 = c__5897__auto__;
var G__16461 = cljs.core.count.call(null,c__5897__auto__);
var G__16462 = (0);
seq__16447 = G__16459;
chunk__16448 = G__16460;
count__16449 = G__16461;
i__16450 = G__16462;
continue;
} else {
var s = cljs.core.first.call(null,seq__16447__$1);
var temp__4425__auto___16463__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___16463__$1)){
var image_16464 = temp__4425__auto___16463__$1;
var temp__4425__auto___16465__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_16464.src,changed);
if(cljs.core.truth_(temp__4425__auto___16465__$2)){
var href_uri_16466 = temp__4425__auto___16465__$2;
image_16464.src = href_uri_16466.makeUnique().toString();
} else {
}
} else {
}

var G__16467 = cljs.core.next.call(null,seq__16447__$1);
var G__16468 = null;
var G__16469 = (0);
var G__16470 = (0);
seq__16447 = G__16467;
chunk__16448 = G__16468;
count__16449 = G__16469;
i__16450 = G__16470;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__16473){
var map__16476 = p__16473;
var map__16476__$1 = ((((!((map__16476 == null)))?((((map__16476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16476):map__16476);
var on_jsload = cljs.core.get.call(null,map__16476__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__16476,map__16476__$1,on_jsload){
return (function (p1__16471_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__16471_SHARP_,".js");
});})(map__16476,map__16476__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__16476,map__16476__$1,on_jsload){
return (function (p1__16472_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__16472_SHARP_).makeUnique());
});})(js_files,map__16476,map__16476__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__16476,map__16476__$1,on_jsload){
return (function() { 
var G__16478__delegate = function (_){
return on_jsload.call(null);
};
var G__16478 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__16479__i = 0, G__16479__a = new Array(arguments.length -  0);
while (G__16479__i < G__16479__a.length) {G__16479__a[G__16479__i] = arguments[G__16479__i + 0]; ++G__16479__i;}
  _ = new cljs.core.IndexedSeq(G__16479__a,0);
} 
return G__16478__delegate.call(this,_);};
G__16478.cljs$lang$maxFixedArity = 0;
G__16478.cljs$lang$applyTo = (function (arglist__16480){
var _ = cljs.core.seq(arglist__16480);
return G__16478__delegate(_);
});
G__16478.cljs$core$IFn$_invoke$arity$variadic = G__16478__delegate;
return G__16478;
})()
;})(js_files,map__16476,map__16476__$1,on_jsload))
,((function (js_files,map__16476,map__16476__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__16476,map__16476__$1,on_jsload))
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

var seq__16485_16489 = cljs.core.seq.call(null,things_to_log);
var chunk__16486_16490 = null;
var count__16487_16491 = (0);
var i__16488_16492 = (0);
while(true){
if((i__16488_16492 < count__16487_16491)){
var t_16493 = cljs.core._nth.call(null,chunk__16486_16490,i__16488_16492);
console.log(t_16493);

var G__16494 = seq__16485_16489;
var G__16495 = chunk__16486_16490;
var G__16496 = count__16487_16491;
var G__16497 = (i__16488_16492 + (1));
seq__16485_16489 = G__16494;
chunk__16486_16490 = G__16495;
count__16487_16491 = G__16496;
i__16488_16492 = G__16497;
continue;
} else {
var temp__4425__auto___16498 = cljs.core.seq.call(null,seq__16485_16489);
if(temp__4425__auto___16498){
var seq__16485_16499__$1 = temp__4425__auto___16498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16485_16499__$1)){
var c__5897__auto___16500 = cljs.core.chunk_first.call(null,seq__16485_16499__$1);
var G__16501 = cljs.core.chunk_rest.call(null,seq__16485_16499__$1);
var G__16502 = c__5897__auto___16500;
var G__16503 = cljs.core.count.call(null,c__5897__auto___16500);
var G__16504 = (0);
seq__16485_16489 = G__16501;
chunk__16486_16490 = G__16502;
count__16487_16491 = G__16503;
i__16488_16492 = G__16504;
continue;
} else {
var t_16505 = cljs.core.first.call(null,seq__16485_16499__$1);
console.log(t_16505);

var G__16506 = cljs.core.next.call(null,seq__16485_16499__$1);
var G__16507 = null;
var G__16508 = (0);
var G__16509 = (0);
seq__16485_16489 = G__16506;
chunk__16486_16490 = G__16507;
count__16487_16491 = G__16508;
i__16488_16492 = G__16509;
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

var G__16511 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__16511,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__16511);

adzerk.boot_reload.reload.reload_css.call(null,G__16511);

adzerk.boot_reload.reload.reload_img.call(null,G__16511);

return G__16511;
});

//# sourceMappingURL=reload.js.map
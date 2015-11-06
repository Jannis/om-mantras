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
return (function (p1__16675_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__16675_SHARP_),path);
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
var seq__16680 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__16681 = null;
var count__16682 = (0);
var i__16683 = (0);
while(true){
if((i__16683 < count__16682)){
var s = cljs.core._nth.call(null,chunk__16681,i__16683);
var temp__4425__auto___16684 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___16684)){
var sheet_16685 = temp__4425__auto___16684;
var temp__4425__auto___16686__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_16685.href,changed);
if(cljs.core.truth_(temp__4425__auto___16686__$1)){
var href_uri_16687 = temp__4425__auto___16686__$1;
sheet_16685.ownerNode.href = href_uri_16687.makeUnique().toString();
} else {
}
} else {
}

var G__16688 = seq__16680;
var G__16689 = chunk__16681;
var G__16690 = count__16682;
var G__16691 = (i__16683 + (1));
seq__16680 = G__16688;
chunk__16681 = G__16689;
count__16682 = G__16690;
i__16683 = G__16691;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16680);
if(temp__4425__auto__){
var seq__16680__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16680__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__16680__$1);
var G__16692 = cljs.core.chunk_rest.call(null,seq__16680__$1);
var G__16693 = c__5897__auto__;
var G__16694 = cljs.core.count.call(null,c__5897__auto__);
var G__16695 = (0);
seq__16680 = G__16692;
chunk__16681 = G__16693;
count__16682 = G__16694;
i__16683 = G__16695;
continue;
} else {
var s = cljs.core.first.call(null,seq__16680__$1);
var temp__4425__auto___16696__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___16696__$1)){
var sheet_16697 = temp__4425__auto___16696__$1;
var temp__4425__auto___16698__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_16697.href,changed);
if(cljs.core.truth_(temp__4425__auto___16698__$2)){
var href_uri_16699 = temp__4425__auto___16698__$2;
sheet_16697.ownerNode.href = href_uri_16699.makeUnique().toString();
} else {
}
} else {
}

var G__16700 = cljs.core.next.call(null,seq__16680__$1);
var G__16701 = null;
var G__16702 = (0);
var G__16703 = (0);
seq__16680 = G__16700;
chunk__16681 = G__16701;
count__16682 = G__16702;
i__16683 = G__16703;
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
var seq__16708 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__16709 = null;
var count__16710 = (0);
var i__16711 = (0);
while(true){
if((i__16711 < count__16710)){
var s = cljs.core._nth.call(null,chunk__16709,i__16711);
var temp__4425__auto___16712 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___16712)){
var image_16713 = temp__4425__auto___16712;
var temp__4425__auto___16714__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_16713.src,changed);
if(cljs.core.truth_(temp__4425__auto___16714__$1)){
var href_uri_16715 = temp__4425__auto___16714__$1;
image_16713.src = href_uri_16715.makeUnique().toString();
} else {
}
} else {
}

var G__16716 = seq__16708;
var G__16717 = chunk__16709;
var G__16718 = count__16710;
var G__16719 = (i__16711 + (1));
seq__16708 = G__16716;
chunk__16709 = G__16717;
count__16710 = G__16718;
i__16711 = G__16719;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__16708);
if(temp__4425__auto__){
var seq__16708__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16708__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__16708__$1);
var G__16720 = cljs.core.chunk_rest.call(null,seq__16708__$1);
var G__16721 = c__5897__auto__;
var G__16722 = cljs.core.count.call(null,c__5897__auto__);
var G__16723 = (0);
seq__16708 = G__16720;
chunk__16709 = G__16721;
count__16710 = G__16722;
i__16711 = G__16723;
continue;
} else {
var s = cljs.core.first.call(null,seq__16708__$1);
var temp__4425__auto___16724__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___16724__$1)){
var image_16725 = temp__4425__auto___16724__$1;
var temp__4425__auto___16726__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_16725.src,changed);
if(cljs.core.truth_(temp__4425__auto___16726__$2)){
var href_uri_16727 = temp__4425__auto___16726__$2;
image_16725.src = href_uri_16727.makeUnique().toString();
} else {
}
} else {
}

var G__16728 = cljs.core.next.call(null,seq__16708__$1);
var G__16729 = null;
var G__16730 = (0);
var G__16731 = (0);
seq__16708 = G__16728;
chunk__16709 = G__16729;
count__16710 = G__16730;
i__16711 = G__16731;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__16734){
var map__16737 = p__16734;
var map__16737__$1 = ((((!((map__16737 == null)))?((((map__16737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16737):map__16737);
var on_jsload = cljs.core.get.call(null,map__16737__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__16737,map__16737__$1,on_jsload){
return (function (p1__16732_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__16732_SHARP_,".js");
});})(map__16737,map__16737__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__16737,map__16737__$1,on_jsload){
return (function (p1__16733_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__16733_SHARP_).makeUnique());
});})(js_files,map__16737,map__16737__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__16737,map__16737__$1,on_jsload){
return (function() { 
var G__16739__delegate = function (_){
return on_jsload.call(null);
};
var G__16739 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__16740__i = 0, G__16740__a = new Array(arguments.length -  0);
while (G__16740__i < G__16740__a.length) {G__16740__a[G__16740__i] = arguments[G__16740__i + 0]; ++G__16740__i;}
  _ = new cljs.core.IndexedSeq(G__16740__a,0);
} 
return G__16739__delegate.call(this,_);};
G__16739.cljs$lang$maxFixedArity = 0;
G__16739.cljs$lang$applyTo = (function (arglist__16741){
var _ = cljs.core.seq(arglist__16741);
return G__16739__delegate(_);
});
G__16739.cljs$core$IFn$_invoke$arity$variadic = G__16739__delegate;
return G__16739;
})()
;})(js_files,map__16737,map__16737__$1,on_jsload))
,((function (js_files,map__16737,map__16737__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__16737,map__16737__$1,on_jsload))
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

var seq__16746_16750 = cljs.core.seq.call(null,things_to_log);
var chunk__16747_16751 = null;
var count__16748_16752 = (0);
var i__16749_16753 = (0);
while(true){
if((i__16749_16753 < count__16748_16752)){
var t_16754 = cljs.core._nth.call(null,chunk__16747_16751,i__16749_16753);
console.log(t_16754);

var G__16755 = seq__16746_16750;
var G__16756 = chunk__16747_16751;
var G__16757 = count__16748_16752;
var G__16758 = (i__16749_16753 + (1));
seq__16746_16750 = G__16755;
chunk__16747_16751 = G__16756;
count__16748_16752 = G__16757;
i__16749_16753 = G__16758;
continue;
} else {
var temp__4425__auto___16759 = cljs.core.seq.call(null,seq__16746_16750);
if(temp__4425__auto___16759){
var seq__16746_16760__$1 = temp__4425__auto___16759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16746_16760__$1)){
var c__5897__auto___16761 = cljs.core.chunk_first.call(null,seq__16746_16760__$1);
var G__16762 = cljs.core.chunk_rest.call(null,seq__16746_16760__$1);
var G__16763 = c__5897__auto___16761;
var G__16764 = cljs.core.count.call(null,c__5897__auto___16761);
var G__16765 = (0);
seq__16746_16750 = G__16762;
chunk__16747_16751 = G__16763;
count__16748_16752 = G__16764;
i__16749_16753 = G__16765;
continue;
} else {
var t_16766 = cljs.core.first.call(null,seq__16746_16760__$1);
console.log(t_16766);

var G__16767 = cljs.core.next.call(null,seq__16746_16760__$1);
var G__16768 = null;
var G__16769 = (0);
var G__16770 = (0);
seq__16746_16750 = G__16767;
chunk__16747_16751 = G__16768;
count__16748_16752 = G__16769;
i__16749_16753 = G__16770;
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

var G__16772 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__16772,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__16772);

adzerk.boot_reload.reload.reload_css.call(null,G__16772);

adzerk.boot_reload.reload.reload_img.call(null,G__16772);

return G__16772;
});

//# sourceMappingURL=reload.js.map
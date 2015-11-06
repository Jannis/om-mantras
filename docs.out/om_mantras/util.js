// Compiled by ClojureScript 1.7.145 {}
goog.provide('om_mantras.util');
goog.require('cljs.core');
om_mantras.util.indexes_of = (function om_mantras$util$indexes_of(x,coll){
return cljs.core.keep_indexed.call(null,(function (p1__24078_SHARP_,p2__24077_SHARP_){
if(cljs.core._EQ_.call(null,x,p2__24077_SHARP_)){
return p1__24078_SHARP_;
} else {
return null;
}
}),coll);
});
om_mantras.util.index_of = (function om_mantras$util$index_of(x,coll){
return cljs.core.first.call(null,om_mantras.util.indexes_of.call(null,x,coll));
});

//# sourceMappingURL=util.js.map
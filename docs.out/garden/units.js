// Compiled by ClojureScript 1.7.145 {:static-fns true, :optimize-constants true}
goog.provide('garden.units');
goog.require('cljs.core');
goog.require('garden.types');
goog.require('garden.util');
goog.require('cljs.reader');
garden.units.length_units = cljs.core.PersistentHashSet.fromArray([cljs.core.cst$kw$mm,cljs.core.cst$kw$pt,cljs.core.cst$kw$px,cljs.core.cst$kw$pc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.cst$kw$cm,cljs.core.cst$kw$in], true);
garden.units.angular_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$deg,null,cljs.core.cst$kw$turn,null,cljs.core.cst$kw$rad,null,cljs.core.cst$kw$grad,null], null), null);
garden.units.time_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$s,null,cljs.core.cst$kw$ms,null], null), null);
garden.units.frequency_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$kHz,null,cljs.core.cst$kw$Hz,null], null), null);
garden.units.resolution_units = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$dppx,null,cljs.core.cst$kw$dpcm,null,cljs.core.cst$kw$dpi,null], null), null);
/**
 * True if x is of type CSSUnit.
 */
garden.units.unit_QMARK_ = (function garden$units$unit_QMARK_(x){
return (x instanceof garden.types.CSSUnit);
});
garden.units.length_QMARK_ = (function garden$units$length_QMARK_(x){
var and__5082__auto__ = garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.contains_QMARK_(garden.units.length_units,cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__5082__auto__;
}
});
garden.units.angle_QMARK_ = (function garden$units$angle_QMARK_(x){
var and__5082__auto__ = garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.contains_QMARK_(garden.units.angular_units,cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__5082__auto__;
}
});
garden.units.time_QMARK_ = (function garden$units$time_QMARK_(x){
var and__5082__auto__ = garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.contains_QMARK_(garden.units.time_units,cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__5082__auto__;
}
});
garden.units.frequency_QMARK_ = (function garden$units$frequency_QMARK_(x){
var and__5082__auto__ = garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.contains_QMARK_(garden.units.frequency_units,cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__5082__auto__;
}
});
garden.units.resolution_QMARK_ = (function garden$units$resolution_QMARK_(x){
var and__5082__auto__ = garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.contains_QMARK_(garden.units.resolution_units,cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x));
} else {
return and__5082__auto__;
}
});
/**
 * Map associating CSS unit types to their conversion values.
 */
garden.units.conversions = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$mm,cljs.core.cst$kw$kHz,cljs.core.cst$kw$pt,cljs.core.cst$kw$px,cljs.core.cst$kw$rem,cljs.core.cst$kw$em,cljs.core.cst$kw$Hz,cljs.core.cst$kw$pc,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.cst$kw$s,cljs.core.cst$kw$deg,cljs.core.cst$kw$cm,cljs.core.cst$kw$turn,cljs.core.cst$kw$ms,cljs.core.cst$kw$rad,cljs.core.cst$kw$grad,cljs.core.cst$kw$in],[new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$mm,(1),cljs.core.cst$kw$pt,2.83464567,cljs.core.cst$kw$px,3.7795275591], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$kHz,(1)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$pt,(1),cljs.core.cst$kw$px,1.3333333333], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$px,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$rem,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$em,(1)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$Hz,(1),cljs.core.cst$kw$kHz,0.001], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$pc,(1),cljs.core.cst$kw$mm,4.23333333,cljs.core.cst$kw$pt,(12),cljs.core.cst$kw$px,(16)], null),cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.cljs$core$IFn$_invoke$arity$1("%"),(1)], true, false),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$s,(1),cljs.core.cst$kw$ms,(1000)], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$deg,(1),cljs.core.cst$kw$grad,1.111111111,cljs.core.cst$kw$rad,0.0174532925,cljs.core.cst$kw$turn,0.002777778], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cm,(1),cljs.core.cst$kw$pc,2.36220473,cljs.core.cst$kw$mm,(10),cljs.core.cst$kw$pt,28.3464567,cljs.core.cst$kw$px,37.795275591], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$turn,(1)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ms,(1)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$rad,(1),cljs.core.cst$kw$turn,0.159154943], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grad,(1),cljs.core.cst$kw$rad,63.661977237,cljs.core.cst$kw$turn,0.0025], null),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$in,(1),cljs.core.cst$kw$cm,2.54,cljs.core.cst$kw$pc,(6),cljs.core.cst$kw$mm,25.4,cljs.core.cst$kw$pt,(72),cljs.core.cst$kw$px,(96)], null)]);
/**
 * True if unit is a key of convertable-units, false otherwise.
 */
garden.units.convertable_QMARK_ = (function garden$units$convertable_QMARK_(unit){
return cljs.core.contains_QMARK_(garden.units.conversions,unit);
});
/**
 * Convert a Unit with :unit left to a Unit with :unit right if possible.
 */
garden.units.convert = (function garden$units$convert(p__25547,right){
var map__25550 = p__25547;
var map__25550__$1 = ((((!((map__25550 == null)))?((((map__25550.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25550.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25550):map__25550);
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25550__$1,cljs.core.cst$kw$magnitude);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25550__$1,cljs.core.cst$kw$unit);
if(cljs.core.every_QMARK_(garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null))){
var v1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null));
var v2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(garden.units.conversions,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [right,left], null));
if(cljs.core.truth_(v1)){
return (new garden.types.CSSUnit(right,(v1 * m),null,null,null));
} else {
if(cljs.core.truth_(v2)){
return (new garden.types.CSSUnit(right,(m / v2),null,null,null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Can't convert %s to %s",cljs.core.array_seq([cljs.core.name(left),cljs.core.name(right)], 0)),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
var x = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(garden.units.convertable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [left,right], null)));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Inconvertible unit "),cljs.core.str(cljs.core.name(x))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Regular expression for matching a CSS unit. The magnitude
 *           and unit are captured.
 */
garden.units.unit_re = /([+-]?\d+(?:\.?\d+)?)(p[xtc]|in|[cm]m|%|r?em|ex|ch|v(?:[wh]|m(?:in|ax))|deg|g?rad|turn|m?s|k?Hz|dp(?:i|cm|px))/;
/**
 * Read a `CSSUnit` object from the string `s`.
 */
garden.units.read_unit = (function garden$units$read_unit(s){
var temp__4425__auto__ = cljs.core.re_matches(garden.units.unit_re,s);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__25553 = temp__4425__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25553,(0),null);
var magnitude = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25553,(1),null);
var unit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25553,(2),null);
var unit__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(unit);
var magnitude__$1 = (cljs.core.truth_(magnitude)?cljs.reader.read_string(magnitude):(0));
return (new garden.types.CSSUnit(unit__$1,magnitude__$1,null,null,null));
} else {
return null;
}
});
/**
 * Creates a function for verifying the given unit type.
 */
garden.units.make_unit_predicate = (function garden$units$make_unit_predicate(unit){
return (function (x){
var and__5082__auto__ = garden.units.unit_QMARK_(x);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unit.cljs$core$IFn$_invoke$arity$1(x),unit);
} else {
return and__5082__auto__;
}
});
});
/**
 * Creates a function for creating and converting `CSSUnit`s for the
 *   given unit. If a number n is passed the function it will produce a
 *   new `CSSUnit` record with a the magnitude set to n. If a `CSSUnit`
 *   is passed the function will attempt to convert it.
 */
garden.units.make_unit_fn = (function garden$units$make_unit_fn(unit){
return (function (x){
if(typeof x === 'number'){
return (new garden.types.CSSUnit(unit,x,null,null,null));
} else {
if(cljs.core.truth_(garden.units.unit_QMARK_(x))){
var or__5094__auto__ = (function (){var and__5082__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((unit.cljs$core$IFn$_invoke$arity$1 ? unit.cljs$core$IFn$_invoke$arity$1(x) : unit.call(null,x)),unit);
if(and__5082__auto__){
return x;
} else {
return and__5082__auto__;
}
})();
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return garden.units.convert(x,unit);
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(garden.util.format.cljs$core$IFn$_invoke$arity$variadic("Don't know how to convert type %s to %s",cljs.core.array_seq([cljs.core.type(x).getName(),cljs.core.name(unit)], 0)),cljs.core.PersistentArrayMap.EMPTY);

}
}
});
});
/**
 * Create a addition function for adding Units.
 */
garden.units.make_unit_adder = (function garden$units$make_unit_adder(unit){
var u = garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var garden$units$make_unit_adder_$_u_PLUS_ = null;
var garden$units$make_unit_adder_$_u_PLUS___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((0)) : u.call(null,(0)));
});
var garden$units$make_unit_adder_$_u_PLUS___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var garden$units$make_unit_adder_$_u_PLUS___2 = (function (x,y){
var map__25569 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__25569__$1 = ((((!((map__25569 == null)))?((((map__25569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25569):map__25569);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25569__$1,cljs.core.cst$kw$magnitude);
var map__25570 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__25570__$1 = ((((!((map__25570 == null)))?((((map__25570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25570):map__25570);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25570__$1,cljs.core.cst$kw$magnitude);
var G__25573 = (m1 + m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25573) : u.call(null,G__25573));
});
var garden$units$make_unit_adder_$_u_PLUS___3 = (function() { 
var G__25574__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_adder_$_u_PLUS_,garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__25574 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__25575__i = 0, G__25575__a = new Array(arguments.length -  2);
while (G__25575__i < G__25575__a.length) {G__25575__a[G__25575__i] = arguments[G__25575__i + 2]; ++G__25575__i;}
  more = new cljs.core.IndexedSeq(G__25575__a,0);
} 
return G__25574__delegate.call(this,x,y,more);};
G__25574.cljs$lang$maxFixedArity = 2;
G__25574.cljs$lang$applyTo = (function (arglist__25576){
var x = cljs.core.first(arglist__25576);
arglist__25576 = cljs.core.next(arglist__25576);
var y = cljs.core.first(arglist__25576);
var more = cljs.core.rest(arglist__25576);
return G__25574__delegate(x,y,more);
});
G__25574.cljs$core$IFn$_invoke$arity$variadic = G__25574__delegate;
return G__25574;
})()
;
garden$units$make_unit_adder_$_u_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_adder_$_u_PLUS___0.call(this);
case 1:
return garden$units$make_unit_adder_$_u_PLUS___1.call(this,x);
case 2:
return garden$units$make_unit_adder_$_u_PLUS___2.call(this,x,y);
default:
var G__25577 = null;
if (arguments.length > 2) {
var G__25578__i = 0, G__25578__a = new Array(arguments.length -  2);
while (G__25578__i < G__25578__a.length) {G__25578__a[G__25578__i] = arguments[G__25578__i + 2]; ++G__25578__i;}
G__25577 = new cljs.core.IndexedSeq(G__25578__a,0);
}
return garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__25577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$lang$applyTo = garden$units$make_unit_adder_$_u_PLUS___3.cljs$lang$applyTo;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_adder_$_u_PLUS___0;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_adder_$_u_PLUS___1;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_adder_$_u_PLUS___2;
garden$units$make_unit_adder_$_u_PLUS_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_adder_$_u_PLUS___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_adder_$_u_PLUS_;
})()
;})(u))
});
/**
 * Create a subtraction function for subtracting Units.
 */
garden.units.make_unit_subtractor = (function garden$units$make_unit_subtractor(unit){
var u = garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var garden$units$make_unit_subtractor_$_u_ = null;
var garden$units$make_unit_subtractor_$_u___1 = (function (x){
var G__25597 = (- x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25597) : u.call(null,G__25597));
});
var garden$units$make_unit_subtractor_$_u___2 = (function (x,y){
var map__25598 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__25598__$1 = ((((!((map__25598 == null)))?((((map__25598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25598):map__25598);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25598__$1,cljs.core.cst$kw$magnitude);
var map__25599 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__25599__$1 = ((((!((map__25599 == null)))?((((map__25599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25599):map__25599);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25599__$1,cljs.core.cst$kw$magnitude);
var G__25602 = (m1 - m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25602) : u.call(null,G__25602));
});
var garden$units$make_unit_subtractor_$_u___3 = (function() { 
var G__25603__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_subtractor_$_u_,garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__25603 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__25604__i = 0, G__25604__a = new Array(arguments.length -  2);
while (G__25604__i < G__25604__a.length) {G__25604__a[G__25604__i] = arguments[G__25604__i + 2]; ++G__25604__i;}
  more = new cljs.core.IndexedSeq(G__25604__a,0);
} 
return G__25603__delegate.call(this,x,y,more);};
G__25603.cljs$lang$maxFixedArity = 2;
G__25603.cljs$lang$applyTo = (function (arglist__25605){
var x = cljs.core.first(arglist__25605);
arglist__25605 = cljs.core.next(arglist__25605);
var y = cljs.core.first(arglist__25605);
var more = cljs.core.rest(arglist__25605);
return G__25603__delegate(x,y,more);
});
G__25603.cljs$core$IFn$_invoke$arity$variadic = G__25603__delegate;
return G__25603;
})()
;
garden$units$make_unit_subtractor_$_u_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_subtractor_$_u___1.call(this,x);
case 2:
return garden$units$make_unit_subtractor_$_u___2.call(this,x,y);
default:
var G__25606 = null;
if (arguments.length > 2) {
var G__25607__i = 0, G__25607__a = new Array(arguments.length -  2);
while (G__25607__i < G__25607__a.length) {G__25607__a[G__25607__i] = arguments[G__25607__i + 2]; ++G__25607__i;}
G__25606 = new cljs.core.IndexedSeq(G__25607__a,0);
}
return garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__25606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_subtractor_$_u_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_subtractor_$_u_.cljs$lang$applyTo = garden$units$make_unit_subtractor_$_u___3.cljs$lang$applyTo;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_subtractor_$_u___1;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_subtractor_$_u___2;
garden$units$make_unit_subtractor_$_u_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_subtractor_$_u___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_subtractor_$_u_;
})()
;})(u))
});
/**
 * Create a multiplication function for multiplying Units.
 */
garden.units.make_unit_multiplier = (function garden$units$make_unit_multiplier(unit){
var u = garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var garden$units$make_unit_multiplier_$_u_STAR_ = null;
var garden$units$make_unit_multiplier_$_u_STAR___0 = (function (){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1((1)) : u.call(null,(1)));
});
var garden$units$make_unit_multiplier_$_u_STAR___1 = (function (x){
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
});
var garden$units$make_unit_multiplier_$_u_STAR___2 = (function (x,y){
var map__25623 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__25623__$1 = ((((!((map__25623 == null)))?((((map__25623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25623):map__25623);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25623__$1,cljs.core.cst$kw$magnitude);
var map__25624 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__25624__$1 = ((((!((map__25624 == null)))?((((map__25624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25624):map__25624);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25624__$1,cljs.core.cst$kw$magnitude);
var G__25627 = (m1 * m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25627) : u.call(null,G__25627));
});
var garden$units$make_unit_multiplier_$_u_STAR___3 = (function() { 
var G__25628__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_multiplier_$_u_STAR_,garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__25628 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__25629__i = 0, G__25629__a = new Array(arguments.length -  2);
while (G__25629__i < G__25629__a.length) {G__25629__a[G__25629__i] = arguments[G__25629__i + 2]; ++G__25629__i;}
  more = new cljs.core.IndexedSeq(G__25629__a,0);
} 
return G__25628__delegate.call(this,x,y,more);};
G__25628.cljs$lang$maxFixedArity = 2;
G__25628.cljs$lang$applyTo = (function (arglist__25630){
var x = cljs.core.first(arglist__25630);
arglist__25630 = cljs.core.next(arglist__25630);
var y = cljs.core.first(arglist__25630);
var more = cljs.core.rest(arglist__25630);
return G__25628__delegate(x,y,more);
});
G__25628.cljs$core$IFn$_invoke$arity$variadic = G__25628__delegate;
return G__25628;
})()
;
garden$units$make_unit_multiplier_$_u_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 0:
return garden$units$make_unit_multiplier_$_u_STAR___0.call(this);
case 1:
return garden$units$make_unit_multiplier_$_u_STAR___1.call(this,x);
case 2:
return garden$units$make_unit_multiplier_$_u_STAR___2.call(this,x,y);
default:
var G__25631 = null;
if (arguments.length > 2) {
var G__25632__i = 0, G__25632__a = new Array(arguments.length -  2);
while (G__25632__i < G__25632__a.length) {G__25632__a[G__25632__i] = arguments[G__25632__i + 2]; ++G__25632__i;}
G__25631 = new cljs.core.IndexedSeq(G__25632__a,0);
}
return garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__25631);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$lang$applyTo = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$lang$applyTo;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$0 = garden$units$make_unit_multiplier_$_u_STAR___0;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_multiplier_$_u_STAR___1;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_multiplier_$_u_STAR___2;
garden$units$make_unit_multiplier_$_u_STAR_.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_multiplier_$_u_STAR___3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_multiplier_$_u_STAR_;
})()
;})(u))
});
/**
 * Create a division function for dividing Units.
 */
garden.units.make_unit_divider = (function garden$units$make_unit_divider(unit){
var u = garden.units.make_unit_fn(unit);
return ((function (u){
return (function() {
var garden$units$make_unit_divider_$_ud = null;
var garden$units$make_unit_divider_$_ud__1 = (function (x){
var G__25651 = ((1) / x);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25651) : u.call(null,G__25651));
});
var garden$units$make_unit_divider_$_ud__2 = (function (x,y){
var map__25652 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(x) : u.call(null,x));
var map__25652__$1 = ((((!((map__25652 == null)))?((((map__25652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25652):map__25652);
var m1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25652__$1,cljs.core.cst$kw$magnitude);
var map__25653 = (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(y) : u.call(null,y));
var map__25653__$1 = ((((!((map__25653 == null)))?((((map__25653.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25653.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__25653):map__25653);
var m2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25653__$1,cljs.core.cst$kw$magnitude);
var G__25656 = (m1 / m2);
return (u.cljs$core$IFn$_invoke$arity$1 ? u.cljs$core$IFn$_invoke$arity$1(G__25656) : u.call(null,G__25656));
});
var garden$units$make_unit_divider_$_ud__3 = (function() { 
var G__25657__delegate = function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(garden$units$make_unit_divider_$_ud,garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2(x,y),more);
};
var G__25657 = function (x,y,var_args){
var more = null;
if (arguments.length > 2) {
var G__25658__i = 0, G__25658__a = new Array(arguments.length -  2);
while (G__25658__i < G__25658__a.length) {G__25658__a[G__25658__i] = arguments[G__25658__i + 2]; ++G__25658__i;}
  more = new cljs.core.IndexedSeq(G__25658__a,0);
} 
return G__25657__delegate.call(this,x,y,more);};
G__25657.cljs$lang$maxFixedArity = 2;
G__25657.cljs$lang$applyTo = (function (arglist__25659){
var x = cljs.core.first(arglist__25659);
arglist__25659 = cljs.core.next(arglist__25659);
var y = cljs.core.first(arglist__25659);
var more = cljs.core.rest(arglist__25659);
return G__25657__delegate(x,y,more);
});
G__25657.cljs$core$IFn$_invoke$arity$variadic = G__25657__delegate;
return G__25657;
})()
;
garden$units$make_unit_divider_$_ud = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return garden$units$make_unit_divider_$_ud__1.call(this,x);
case 2:
return garden$units$make_unit_divider_$_ud__2.call(this,x,y);
default:
var G__25660 = null;
if (arguments.length > 2) {
var G__25661__i = 0, G__25661__a = new Array(arguments.length -  2);
while (G__25661__i < G__25661__a.length) {G__25661__a[G__25661__i] = arguments[G__25661__i + 2]; ++G__25661__i;}
G__25660 = new cljs.core.IndexedSeq(G__25661__a,0);
}
return garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic(x,y, G__25660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
garden$units$make_unit_divider_$_ud.cljs$lang$maxFixedArity = 2;
garden$units$make_unit_divider_$_ud.cljs$lang$applyTo = garden$units$make_unit_divider_$_ud__3.cljs$lang$applyTo;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$1 = garden$units$make_unit_divider_$_ud__1;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$2 = garden$units$make_unit_divider_$_ud__2;
garden$units$make_unit_divider_$_ud.cljs$core$IFn$_invoke$arity$variadic = garden$units$make_unit_divider_$_ud__3.cljs$core$IFn$_invoke$arity$variadic;
return garden$units$make_unit_divider_$_ud;
})()
;})(u))
});
garden.units.cm = garden.units.make_unit_fn(cljs.core.cst$kw$cm);

garden.units.cm_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$cm);

garden.units.cm_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$cm);

garden.units.cm_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$cm);

garden.units.cm_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$cm);

garden.units.cm_div = garden.units.make_unit_divider(cljs.core.cst$kw$cm);
garden.units.mm = garden.units.make_unit_fn(cljs.core.cst$kw$mm);

garden.units.mm_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$mm);

garden.units.mm_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$mm);

garden.units.mm_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$mm);

garden.units.mm_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$mm);

garden.units.mm_div = garden.units.make_unit_divider(cljs.core.cst$kw$mm);
garden.units.in$ = garden.units.make_unit_fn(cljs.core.cst$kw$in);

garden.units.in_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$in);

garden.units.in_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$in);

garden.units.in_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$in);

garden.units.in_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$in);

garden.units.in_div = garden.units.make_unit_divider(cljs.core.cst$kw$in);
garden.units.px = garden.units.make_unit_fn(cljs.core.cst$kw$px);

garden.units.px_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$px);

garden.units.px_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$px);

garden.units.px_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$px);

garden.units.px_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$px);

garden.units.px_div = garden.units.make_unit_divider(cljs.core.cst$kw$px);
garden.units.pt = garden.units.make_unit_fn(cljs.core.cst$kw$pt);

garden.units.pt_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$pt);

garden.units.pt_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$pt);

garden.units.pt_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$pt);

garden.units.pt_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$pt);

garden.units.pt_div = garden.units.make_unit_divider(cljs.core.cst$kw$pt);
garden.units.pc = garden.units.make_unit_fn(cljs.core.cst$kw$pc);

garden.units.pc_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$pc);

garden.units.pc_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$pc);

garden.units.pc_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$pc);

garden.units.pc_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$pc);

garden.units.pc_div = garden.units.make_unit_divider(cljs.core.cst$kw$pc);
garden.units.percent = garden.units.make_unit_fn(cljs.core.cst$kw$_PERCENT_);

garden.units.percent_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$_PERCENT_);

garden.units.percent_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$_PERCENT_);

garden.units.percent_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$_PERCENT_);

garden.units.percent_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$_PERCENT_);

garden.units.percent_div = garden.units.make_unit_divider(cljs.core.cst$kw$_PERCENT_);
garden.units.em = garden.units.make_unit_fn(cljs.core.cst$kw$em);

garden.units.em_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$em);

garden.units.em_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$em);

garden.units.em_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$em);

garden.units.em_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$em);

garden.units.em_div = garden.units.make_unit_divider(cljs.core.cst$kw$em);
garden.units.ex = garden.units.make_unit_fn(cljs.core.cst$kw$ex);

garden.units.ex_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$ex);

garden.units.ex_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$ex);

garden.units.ex_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$ex);

garden.units.ex_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$ex);

garden.units.ex_div = garden.units.make_unit_divider(cljs.core.cst$kw$ex);
garden.units.ch = garden.units.make_unit_fn(cljs.core.cst$kw$ch);

garden.units.ch_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$ch);

garden.units.ch_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$ch);

garden.units.ch_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$ch);

garden.units.ch_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$ch);

garden.units.ch_div = garden.units.make_unit_divider(cljs.core.cst$kw$ch);
garden.units.rem = garden.units.make_unit_fn(cljs.core.cst$kw$rem);

garden.units.rem_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$rem);

garden.units.rem_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$rem);

garden.units.rem_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$rem);

garden.units.rem_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$rem);

garden.units.rem_div = garden.units.make_unit_divider(cljs.core.cst$kw$rem);
garden.units.vw = garden.units.make_unit_fn(cljs.core.cst$kw$vw);

garden.units.vw_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$vw);

garden.units.vw_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$vw);

garden.units.vw_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$vw);

garden.units.vw_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$vw);

garden.units.vw_div = garden.units.make_unit_divider(cljs.core.cst$kw$vw);
garden.units.vh = garden.units.make_unit_fn(cljs.core.cst$kw$vh);

garden.units.vh_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$vh);

garden.units.vh_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$vh);

garden.units.vh_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$vh);

garden.units.vh_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$vh);

garden.units.vh_div = garden.units.make_unit_divider(cljs.core.cst$kw$vh);
garden.units.vmin = garden.units.make_unit_fn(cljs.core.cst$kw$vmin);

garden.units.vmin_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$vmin);

garden.units.vmin_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$vmin);

garden.units.vmin_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$vmin);

garden.units.vmin_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$vmin);

garden.units.vmin_div = garden.units.make_unit_divider(cljs.core.cst$kw$vmin);
garden.units.vmax = garden.units.make_unit_fn(cljs.core.cst$kw$vmax);

garden.units.vmax_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$vmax);

garden.units.vmax_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$vmax);

garden.units.vmax_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$vmax);

garden.units.vmax_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$vmax);

garden.units.vmax_div = garden.units.make_unit_divider(cljs.core.cst$kw$vmax);
garden.units.deg = garden.units.make_unit_fn(cljs.core.cst$kw$deg);

garden.units.deg_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$deg);

garden.units.deg_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$deg);

garden.units.deg_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$deg);

garden.units.deg_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$deg);

garden.units.deg_div = garden.units.make_unit_divider(cljs.core.cst$kw$deg);
garden.units.grad = garden.units.make_unit_fn(cljs.core.cst$kw$grad);

garden.units.grad_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$grad);

garden.units.grad_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$grad);

garden.units.grad_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$grad);

garden.units.grad_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$grad);

garden.units.grad_div = garden.units.make_unit_divider(cljs.core.cst$kw$grad);
garden.units.rad = garden.units.make_unit_fn(cljs.core.cst$kw$rad);

garden.units.rad_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$rad);

garden.units.rad_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$rad);

garden.units.rad_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$rad);

garden.units.rad_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$rad);

garden.units.rad_div = garden.units.make_unit_divider(cljs.core.cst$kw$rad);
garden.units.turn = garden.units.make_unit_fn(cljs.core.cst$kw$turn);

garden.units.turn_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$turn);

garden.units.turn_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$turn);

garden.units.turn_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$turn);

garden.units.turn_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$turn);

garden.units.turn_div = garden.units.make_unit_divider(cljs.core.cst$kw$turn);
garden.units.s = garden.units.make_unit_fn(cljs.core.cst$kw$s);

garden.units.s_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$s);

garden.units.s_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$s);

garden.units.s_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$s);

garden.units.s_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$s);

garden.units.s_div = garden.units.make_unit_divider(cljs.core.cst$kw$s);
garden.units.ms = garden.units.make_unit_fn(cljs.core.cst$kw$ms);

garden.units.ms_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$ms);

garden.units.ms_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$ms);

garden.units.ms_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$ms);

garden.units.ms_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$ms);

garden.units.ms_div = garden.units.make_unit_divider(cljs.core.cst$kw$ms);
garden.units.Hz = garden.units.make_unit_fn(cljs.core.cst$kw$Hz);

garden.units.Hz_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$Hz);

garden.units.Hz_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$Hz);

garden.units.Hz_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$Hz);

garden.units.Hz_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$Hz);

garden.units.Hz_div = garden.units.make_unit_divider(cljs.core.cst$kw$Hz);
garden.units.kHz = garden.units.make_unit_fn(cljs.core.cst$kw$kHz);

garden.units.kHz_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$kHz);

garden.units.kHz_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$kHz);

garden.units.kHz_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$kHz);

garden.units.kHz_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$kHz);

garden.units.kHz_div = garden.units.make_unit_divider(cljs.core.cst$kw$kHz);
garden.units.dpi = garden.units.make_unit_fn(cljs.core.cst$kw$dpi);

garden.units.dpi_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$dpi);

garden.units.dpi_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$dpi);

garden.units.dpi_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$dpi);

garden.units.dpi_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$dpi);

garden.units.dpi_div = garden.units.make_unit_divider(cljs.core.cst$kw$dpi);
garden.units.dpcm = garden.units.make_unit_fn(cljs.core.cst$kw$dpcm);

garden.units.dpcm_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$dpcm);

garden.units.dpcm_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$dpcm);

garden.units.dpcm_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$dpcm);

garden.units.dpcm_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$dpcm);

garden.units.dpcm_div = garden.units.make_unit_divider(cljs.core.cst$kw$dpcm);
garden.units.dppx = garden.units.make_unit_fn(cljs.core.cst$kw$dppx);

garden.units.dppx_QMARK_ = garden.units.make_unit_predicate(cljs.core.cst$kw$dppx);

garden.units.dppx_PLUS_ = garden.units.make_unit_adder(cljs.core.cst$kw$dppx);

garden.units.dppx_ = garden.units.make_unit_subtractor(cljs.core.cst$kw$dppx);

garden.units.dppx_STAR_ = garden.units.make_unit_multiplier(cljs.core.cst$kw$dppx);

garden.units.dppx_div = garden.units.make_unit_divider(cljs.core.cst$kw$dppx);

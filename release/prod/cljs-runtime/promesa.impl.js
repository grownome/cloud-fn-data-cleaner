goog.provide('promesa.impl');
goog.require('cljs.core');
goog.require('promesa.protocols');
goog.require('org.bluebird');
promesa.impl.Promise = Promise.noConflict();
promesa.impl.Promise.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__32424_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__32424_SHARP_) : cb.call(null,p1__32424_SHARP_));
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.then(((function (it__$1){
return (function (p1__32425_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__32425_SHARP_) : cb.call(null,p1__32425_SHARP_));
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IPromise$_catch$arity$2 = (function (it,cb){
var it__$1 = this;
return it__$1.caught(((function (it__$1){
return (function (p1__32426_SHARP_){
return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(p1__32426_SHARP_) : cb.call(null,p1__32426_SHARP_));
});})(it__$1))
);
});

promesa.impl.Promise.prototype.promesa$protocols$IState$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IState$_extract$arity$1 = (function (it){
var it__$1 = this;
if(cljs.core.truth_(it__$1.isRejected())){
return it__$1.reason();
} else {
return it__$1.value();
}
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_resolved_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isFulfilled();
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_rejected_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isRejected();
});

promesa.impl.Promise.prototype.promesa$protocols$IState$_pending_QMARK_$arity$1 = (function (it){
var it__$1 = this;
return it__$1.isPending();
});
goog.object.set(promesa.protocols.IPromise,"_",true);

var G__32427_32436 = promesa.protocols._map;
var G__32428_32437 = "_";
var G__32429_32438 = ((function (G__32427_32436,G__32428_32437){
return (function (it,cb){
return promesa.protocols._map((promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.resolved.call(null,it)),cb);
});})(G__32427_32436,G__32428_32437))
;
goog.object.set(G__32427_32436,G__32428_32437,G__32429_32438);

var G__32430_32439 = promesa.protocols._bind;
var G__32431_32440 = "_";
var G__32432_32441 = ((function (G__32430_32439,G__32431_32440){
return (function (it,cb){
return promesa.protocols._bind((promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.resolved.call(null,it)),cb);
});})(G__32430_32439,G__32431_32440))
;
goog.object.set(G__32430_32439,G__32431_32440,G__32432_32441);

var G__32433_32442 = promesa.protocols._catch;
var G__32434_32443 = "_";
var G__32435_32444 = ((function (G__32433_32442,G__32434_32443){
return (function (it,cb){
return promesa.protocols._catch((promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1 ? promesa.impl.resolved.cljs$core$IFn$_invoke$arity$1(it) : promesa.impl.resolved.call(null,it)),cb);
});})(G__32433_32442,G__32434_32443))
;
goog.object.set(G__32433_32442,G__32434_32443,G__32435_32444);
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl.Promise.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl.Promise.reject(v);
});
goog.object.set(promesa.protocols.IPromiseFactory,"function",true);

var G__32463_32485 = promesa.protocols._promise;
var G__32464_32486 = "function";
var G__32465_32487 = ((function (G__32463_32485,G__32464_32486){
return (function (func){
return (new promesa.impl.Promise(func));
});})(G__32463_32485,G__32464_32486))
;
goog.object.set(G__32463_32485,G__32464_32486,G__32465_32487);

promesa.impl.Promise.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
});

Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL;

Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
});

goog.object.set(promesa.protocols.IPromiseFactory,"object",true);

var G__32466_32492 = promesa.protocols._promise;
var G__32467_32493 = "object";
var G__32468_32494 = ((function (G__32466_32492,G__32467_32493){
return (function (v){
return promesa.impl.resolved(v);
});})(G__32466_32492,G__32467_32493))
;
goog.object.set(G__32466_32492,G__32467_32493,G__32468_32494);

goog.object.set(promesa.protocols.IPromiseFactory,"number",true);

var G__32472_32495 = promesa.protocols._promise;
var G__32473_32496 = "number";
var G__32474_32497 = ((function (G__32472_32495,G__32473_32496){
return (function (v){
return promesa.impl.resolved(v);
});})(G__32472_32495,G__32473_32496))
;
goog.object.set(G__32472_32495,G__32473_32496,G__32474_32497);

goog.object.set(promesa.protocols.IPromiseFactory,"boolean",true);

var G__32475_32498 = promesa.protocols._promise;
var G__32476_32499 = "boolean";
var G__32477_32500 = ((function (G__32475_32498,G__32476_32499){
return (function (v){
return promesa.impl.resolved(v);
});})(G__32475_32498,G__32476_32499))
;
goog.object.set(G__32475_32498,G__32476_32499,G__32477_32500);

goog.object.set(promesa.protocols.IPromiseFactory,"string",true);

var G__32479_32501 = promesa.protocols._promise;
var G__32480_32502 = "string";
var G__32481_32503 = ((function (G__32479_32501,G__32480_32502){
return (function (v){
return promesa.impl.resolved(v);
});})(G__32479_32501,G__32480_32502))
;
goog.object.set(G__32479_32501,G__32480_32502,G__32481_32503);

goog.object.set(promesa.protocols.IPromiseFactory,"null",true);

var G__32482_32504 = promesa.protocols._promise;
var G__32483_32505 = "null";
var G__32484_32506 = ((function (G__32482_32504,G__32483_32505){
return (function (v){
return promesa.impl.resolved(v);
});})(G__32482_32504,G__32483_32505))
;
goog.object.set(G__32482_32504,G__32483_32505,G__32484_32506);
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return ["#<Promise[",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(promesa.protocols._pending_QMARK_(p))?"~":(cljs.core.truth_(promesa.protocols._rejected_QMARK_(p))?["error=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.protocols._extract(p))].join(''):["value=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(promesa.protocols._extract(p))].join('')
))),"]>"].join('');
});
promesa.impl.Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
});

//# sourceMappingURL=promesa.impl.js.map

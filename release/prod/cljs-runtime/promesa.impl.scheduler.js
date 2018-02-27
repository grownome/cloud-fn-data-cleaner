goog.provide('promesa.impl.scheduler');
goog.require('cljs.core');
goog.require('promesa.protocols');
promesa.impl.scheduler.scheduled_task = (function promesa$impl$scheduler$scheduled_task(cur,done_QMARK_){
var cancelled = cljs.core.volatile_BANG_(false);
if(typeof promesa.impl.scheduler.t_promesa$impl$scheduler32445 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IPending}
 * @implements {cljs.core.IMeta}
 * @implements {promesa.protocols.ICancellable}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler32445 = (function (cur,done_QMARK_,cancelled,meta32446){
this.cur = cur;
this.done_QMARK_ = done_QMARK_;
this.cancelled = cancelled;
this.meta32446 = meta32446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 1;
});
promesa.impl.scheduler.t_promesa$impl$scheduler32445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cancelled){
return (function (_32447,meta32446__$1){
var self__ = this;
var _32447__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler32445(self__.cur,self__.done_QMARK_,self__.cancelled,meta32446__$1));
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler32445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cancelled){
return (function (_32447){
var self__ = this;
var _32447__$1 = this;
return self__.meta32446;
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler32445.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.done_QMARK_);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler32445.prototype.promesa$protocols$ICancellable$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler32445.prototype.promesa$protocols$ICancellable$_cancelled_QMARK_$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cancelled);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler32445.prototype.promesa$protocols$ICancellable$_cancel$arity$1 = ((function (cancelled){
return (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.core.deref(self__.cancelled))){
return null;
} else {
cljs.core.vreset_BANG_(self__.cancelled,true);

return clearTimeout(self__.cur);
}
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler32445.getBasis = ((function (cancelled){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cur","cur",-1501245170,null),new cljs.core.Symbol(null,"done?","done?",-206470191,null),new cljs.core.Symbol(null,"cancelled","cancelled",2129257751,null),new cljs.core.Symbol(null,"meta32446","meta32446",1820326286,null)], null);
});})(cancelled))
;

promesa.impl.scheduler.t_promesa$impl$scheduler32445.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler32445.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler32445";

promesa.impl.scheduler.t_promesa$impl$scheduler32445.cljs$lang$ctorPrWriter = ((function (cancelled){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler32445");
});})(cancelled))
;

promesa.impl.scheduler.__GT_t_promesa$impl$scheduler32445 = ((function (cancelled){
return (function promesa$impl$scheduler$scheduled_task_$___GT_t_promesa$impl$scheduler32445(cur__$1,done_QMARK___$1,cancelled__$1,meta32446){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler32445(cur__$1,done_QMARK___$1,cancelled__$1,meta32446));
});})(cancelled))
;

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler32445(cur,done_QMARK_,cancelled,cljs.core.PersistentArrayMap.EMPTY));
});
promesa.impl.scheduler.scheduler = (function promesa$impl$scheduler$scheduler(){
if(typeof promesa.impl.scheduler.t_promesa$impl$scheduler32448 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {promesa.protocols.IScheduler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.impl.scheduler.t_promesa$impl$scheduler32448 = (function (meta32449){
this.meta32449 = meta32449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
promesa.impl.scheduler.t_promesa$impl$scheduler32448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32450,meta32449__$1){
var self__ = this;
var _32450__$1 = this;
return (new promesa.impl.scheduler.t_promesa$impl$scheduler32448(meta32449__$1));
});

promesa.impl.scheduler.t_promesa$impl$scheduler32448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32450){
var self__ = this;
var _32450__$1 = this;
return self__.meta32449;
});

promesa.impl.scheduler.t_promesa$impl$scheduler32448.prototype.promesa$protocols$IScheduler$ = cljs.core.PROTOCOL_SENTINEL;

promesa.impl.scheduler.t_promesa$impl$scheduler32448.prototype.promesa$protocols$IScheduler$_schedule$arity$3 = (function (_,ms,func){
var self__ = this;
var ___$1 = this;
var done_QMARK_ = cljs.core.volatile_BANG_(false);
var task = ((function (done_QMARK_,___$1){
return (function (){
try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {cljs.core.vreset_BANG_(done_QMARK_,true);
}});})(done_QMARK_,___$1))
;
var cur = setTimeout(task,ms);
return promesa.impl.scheduler.scheduled_task(cur,done_QMARK_);
});

promesa.impl.scheduler.t_promesa$impl$scheduler32448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta32449","meta32449",27676320,null)], null);
});

promesa.impl.scheduler.t_promesa$impl$scheduler32448.cljs$lang$type = true;

promesa.impl.scheduler.t_promesa$impl$scheduler32448.cljs$lang$ctorStr = "promesa.impl.scheduler/t_promesa$impl$scheduler32448";

promesa.impl.scheduler.t_promesa$impl$scheduler32448.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"promesa.impl.scheduler/t_promesa$impl$scheduler32448");
});

promesa.impl.scheduler.__GT_t_promesa$impl$scheduler32448 = (function promesa$impl$scheduler$scheduler_$___GT_t_promesa$impl$scheduler32448(meta32449){
return (new promesa.impl.scheduler.t_promesa$impl$scheduler32448(meta32449));
});

}

return (new promesa.impl.scheduler.t_promesa$impl$scheduler32448(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A default lazy scheduler instance.
 */
promesa.impl.scheduler._PLUS_scheduler_PLUS_ = (new cljs.core.Delay((function (){
return promesa.impl.scheduler.scheduler();
}),null));
promesa.impl.scheduler.schedule = (function promesa$impl$scheduler$schedule(ms,func){
return promesa.protocols._schedule(cljs.core.deref(promesa.impl.scheduler._PLUS_scheduler_PLUS_),ms,func);
});

//# sourceMappingURL=promesa.impl.scheduler.js.map

goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32573 = arguments.length;
switch (G__32573) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32575 = (function (f,blockable,meta32576){
this.f = f;
this.blockable = blockable;
this.meta32576 = meta32576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32577,meta32576__$1){
var self__ = this;
var _32577__$1 = this;
return (new cljs.core.async.t_cljs$core$async32575(self__.f,self__.blockable,meta32576__$1));
});

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32577){
var self__ = this;
var _32577__$1 = this;
return self__.meta32576;
});

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32576","meta32576",1581254247,null)], null);
});

cljs.core.async.t_cljs$core$async32575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32575";

cljs.core.async.t_cljs$core$async32575.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async32575");
});

cljs.core.async.__GT_t_cljs$core$async32575 = (function cljs$core$async$__GT_t_cljs$core$async32575(f__$1,blockable__$1,meta32576){
return (new cljs.core.async.t_cljs$core$async32575(f__$1,blockable__$1,meta32576));
});

}

return (new cljs.core.async.t_cljs$core$async32575(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32598 = arguments.length;
switch (G__32598) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32616 = arguments.length;
switch (G__32616) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32624 = arguments.length;
switch (G__32624) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32627 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32627) : fn1.call(null,val_32627));
} else {
cljs.core.async.impl.dispatch.run(((function (val_32627,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32627) : fn1.call(null,val_32627));
});})(val_32627,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32649 = arguments.length;
switch (G__32649) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5455__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__6171__auto___32659 = n;
var x_32660 = (0);
while(true){
if((x_32660 < n__6171__auto___32659)){
(a[x_32660] = (0));

var G__32662 = (x_32660 + (1));
x_32660 = G__32662;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__32663 = (i + (1));
i = G__32663;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if(typeof cljs.core.async.t_cljs$core$async32664 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32664 = (function (flag,meta32665){
this.flag = flag;
this.meta32665 = meta32665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32666,meta32665__$1){
var self__ = this;
var _32666__$1 = this;
return (new cljs.core.async.t_cljs$core$async32664(self__.flag,meta32665__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32666){
var self__ = this;
var _32666__$1 = this;
return self__.meta32665;
});})(flag))
;

cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32664.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32665","meta32665",-1590416829,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32664.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32664";

cljs.core.async.t_cljs$core$async32664.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async32664");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32664 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32664(flag__$1,meta32665){
return (new cljs.core.async.t_cljs$core$async32664(flag__$1,meta32665));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32664(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32668 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32668 = (function (flag,cb,meta32669){
this.flag = flag;
this.cb = cb;
this.meta32669 = meta32669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32670,meta32669__$1){
var self__ = this;
var _32670__$1 = this;
return (new cljs.core.async.t_cljs$core$async32668(self__.flag,self__.cb,meta32669__$1));
});

cljs.core.async.t_cljs$core$async32668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32670){
var self__ = this;
var _32670__$1 = this;
return self__.meta32669;
});

cljs.core.async.t_cljs$core$async32668.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async32668.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32669","meta32669",-1093481104,null)], null);
});

cljs.core.async.t_cljs$core$async32668.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32668";

cljs.core.async.t_cljs$core$async32668.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async32668");
});

cljs.core.async.__GT_t_cljs$core$async32668 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32668(flag__$1,cb__$1,meta32669){
return (new cljs.core.async.t_cljs$core$async32668(flag__$1,cb__$1,meta32669));
});

}

return (new cljs.core.async.t_cljs$core$async32668(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32673_SHARP_){
var G__32675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32673_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32675) : fret.call(null,G__32675));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32674_SHARP_){
var G__32676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32674_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32676) : fret.call(null,G__32676));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5126__auto__ = wport;
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32677 = (i + (1));
i = G__32677;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5126__auto__ = ret;
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__5114__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__5114__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__5114__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6412__auto__ = [];
var len__6405__auto___32683 = arguments.length;
var i__6406__auto___32684 = (0);
while(true){
if((i__6406__auto___32684 < len__6405__auto___32683)){
args__6412__auto__.push((arguments[i__6406__auto___32684]));

var G__32685 = (i__6406__auto___32684 + (1));
i__6406__auto___32684 = G__32685;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((1) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6413__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32680){
var map__32681 = p__32680;
var map__32681__$1 = ((((!((map__32681 == null)))?((((map__32681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32681):map__32681);
var opts = map__32681__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32678){
var G__32679 = cljs.core.first(seq32678);
var seq32678__$1 = cljs.core.next(seq32678);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32679,seq32678__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32688 = arguments.length;
switch (G__32688) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32469__auto___32765 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___32765){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___32765){
return (function (state_32726){
var state_val_32731 = (state_32726[(1)]);
if((state_val_32731 === (7))){
var inst_32714 = (state_32726[(2)]);
var state_32726__$1 = state_32726;
var statearr_32736_32766 = state_32726__$1;
(statearr_32736_32766[(2)] = inst_32714);

(statearr_32736_32766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (1))){
var state_32726__$1 = state_32726;
var statearr_32737_32767 = state_32726__$1;
(statearr_32737_32767[(2)] = null);

(statearr_32737_32767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (4))){
var inst_32694 = (state_32726[(7)]);
var inst_32694__$1 = (state_32726[(2)]);
var inst_32696 = (inst_32694__$1 == null);
var state_32726__$1 = (function (){var statearr_32739 = state_32726;
(statearr_32739[(7)] = inst_32694__$1);

return statearr_32739;
})();
if(cljs.core.truth_(inst_32696)){
var statearr_32740_32768 = state_32726__$1;
(statearr_32740_32768[(1)] = (5));

} else {
var statearr_32741_32769 = state_32726__$1;
(statearr_32741_32769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (13))){
var state_32726__$1 = state_32726;
var statearr_32742_32770 = state_32726__$1;
(statearr_32742_32770[(2)] = null);

(statearr_32742_32770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (6))){
var inst_32694 = (state_32726[(7)]);
var state_32726__$1 = state_32726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32726__$1,(11),to,inst_32694);
} else {
if((state_val_32731 === (3))){
var inst_32717 = (state_32726[(2)]);
var state_32726__$1 = state_32726;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32726__$1,inst_32717);
} else {
if((state_val_32731 === (12))){
var state_32726__$1 = state_32726;
var statearr_32748_32771 = state_32726__$1;
(statearr_32748_32771[(2)] = null);

(statearr_32748_32771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (2))){
var state_32726__$1 = state_32726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32726__$1,(4),from);
} else {
if((state_val_32731 === (11))){
var inst_32706 = (state_32726[(2)]);
var state_32726__$1 = state_32726;
if(cljs.core.truth_(inst_32706)){
var statearr_32749_32772 = state_32726__$1;
(statearr_32749_32772[(1)] = (12));

} else {
var statearr_32750_32773 = state_32726__$1;
(statearr_32750_32773[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (9))){
var state_32726__$1 = state_32726;
var statearr_32751_32774 = state_32726__$1;
(statearr_32751_32774[(2)] = null);

(statearr_32751_32774[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (5))){
var state_32726__$1 = state_32726;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32752_32775 = state_32726__$1;
(statearr_32752_32775[(1)] = (8));

} else {
var statearr_32753_32776 = state_32726__$1;
(statearr_32753_32776[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (14))){
var inst_32712 = (state_32726[(2)]);
var state_32726__$1 = state_32726;
var statearr_32754_32777 = state_32726__$1;
(statearr_32754_32777[(2)] = inst_32712);

(statearr_32754_32777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (10))){
var inst_32703 = (state_32726[(2)]);
var state_32726__$1 = state_32726;
var statearr_32755_32778 = state_32726__$1;
(statearr_32755_32778[(2)] = inst_32703);

(statearr_32755_32778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32731 === (8))){
var inst_32700 = cljs.core.async.close_BANG_(to);
var state_32726__$1 = state_32726;
var statearr_32756_32779 = state_32726__$1;
(statearr_32756_32779[(2)] = inst_32700);

(statearr_32756_32779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___32765))
;
return ((function (switch__32260__auto__,c__32469__auto___32765){
return (function() {
var cljs$core$async$state_machine__32261__auto__ = null;
var cljs$core$async$state_machine__32261__auto____0 = (function (){
var statearr_32757 = [null,null,null,null,null,null,null,null];
(statearr_32757[(0)] = cljs$core$async$state_machine__32261__auto__);

(statearr_32757[(1)] = (1));

return statearr_32757;
});
var cljs$core$async$state_machine__32261__auto____1 = (function (state_32726){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_32726);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e32758){if((e32758 instanceof Object)){
var ex__32264__auto__ = e32758;
var statearr_32759_32780 = state_32726;
(statearr_32759_32780[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32758;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32781 = state_32726;
state_32726 = G__32781;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$state_machine__32261__auto__ = function(state_32726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32261__auto____1.call(this,state_32726);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32261__auto____0;
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32261__auto____1;
return cljs$core$async$state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___32765))
})();
var state__32471__auto__ = (function (){var statearr_32763 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_32763[(6)] = c__32469__auto___32765);

return statearr_32763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___32765))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__32782){
var vec__32783 = p__32782;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32783,(1),null);
var job = vec__32783;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32469__auto___32955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___32955,res,vec__32783,v,p,job,jobs,results){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___32955,res,vec__32783,v,p,job,jobs,results){
return (function (state_32790){
var state_val_32791 = (state_32790[(1)]);
if((state_val_32791 === (1))){
var state_32790__$1 = state_32790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32790__$1,(2),res,v);
} else {
if((state_val_32791 === (2))){
var inst_32787 = (state_32790[(2)]);
var inst_32788 = cljs.core.async.close_BANG_(res);
var state_32790__$1 = (function (){var statearr_32792 = state_32790;
(statearr_32792[(7)] = inst_32787);

return statearr_32792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32790__$1,inst_32788);
} else {
return null;
}
}
});})(c__32469__auto___32955,res,vec__32783,v,p,job,jobs,results))
;
return ((function (switch__32260__auto__,c__32469__auto___32955,res,vec__32783,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0 = (function (){
var statearr_32793 = [null,null,null,null,null,null,null,null];
(statearr_32793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__);

(statearr_32793[(1)] = (1));

return statearr_32793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1 = (function (state_32790){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_32790);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e32794){if((e32794 instanceof Object)){
var ex__32264__auto__ = e32794;
var statearr_32795_32957 = state_32790;
(statearr_32795_32957[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32958 = state_32790;
state_32790 = G__32958;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__ = function(state_32790){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1.call(this,state_32790);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___32955,res,vec__32783,v,p,job,jobs,results))
})();
var state__32471__auto__ = (function (){var statearr_32796 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_32796[(6)] = c__32469__auto___32955);

return statearr_32796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___32955,res,vec__32783,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32797){
var vec__32798 = p__32797;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32798,(1),null);
var job = vec__32798;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__6171__auto___32959 = n;
var __32960 = (0);
while(true){
if((__32960 < n__6171__auto___32959)){
var G__32801_32961 = type;
var G__32801_32962__$1 = (((G__32801_32961 instanceof cljs.core.Keyword))?G__32801_32961.fqn:null);
switch (G__32801_32962__$1) {
case "compute":
var c__32469__auto___32965 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32960,c__32469__auto___32965,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (__32960,c__32469__auto___32965,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async){
return (function (state_32814){
var state_val_32815 = (state_32814[(1)]);
if((state_val_32815 === (1))){
var state_32814__$1 = state_32814;
var statearr_32816_32966 = state_32814__$1;
(statearr_32816_32966[(2)] = null);

(statearr_32816_32966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32815 === (2))){
var state_32814__$1 = state_32814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32814__$1,(4),jobs);
} else {
if((state_val_32815 === (3))){
var inst_32812 = (state_32814[(2)]);
var state_32814__$1 = state_32814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32814__$1,inst_32812);
} else {
if((state_val_32815 === (4))){
var inst_32804 = (state_32814[(2)]);
var inst_32805 = process(inst_32804);
var state_32814__$1 = state_32814;
if(cljs.core.truth_(inst_32805)){
var statearr_32817_32967 = state_32814__$1;
(statearr_32817_32967[(1)] = (5));

} else {
var statearr_32818_32968 = state_32814__$1;
(statearr_32818_32968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32815 === (5))){
var state_32814__$1 = state_32814;
var statearr_32819_32969 = state_32814__$1;
(statearr_32819_32969[(2)] = null);

(statearr_32819_32969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32815 === (6))){
var state_32814__$1 = state_32814;
var statearr_32820_32970 = state_32814__$1;
(statearr_32820_32970[(2)] = null);

(statearr_32820_32970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32815 === (7))){
var inst_32810 = (state_32814[(2)]);
var state_32814__$1 = state_32814;
var statearr_32821_32971 = state_32814__$1;
(statearr_32821_32971[(2)] = inst_32810);

(statearr_32821_32971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32960,c__32469__auto___32965,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async))
;
return ((function (__32960,switch__32260__auto__,c__32469__auto___32965,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0 = (function (){
var statearr_32822 = [null,null,null,null,null,null,null];
(statearr_32822[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__);

(statearr_32822[(1)] = (1));

return statearr_32822;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1 = (function (state_32814){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_32814);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e32823){if((e32823 instanceof Object)){
var ex__32264__auto__ = e32823;
var statearr_32824_32972 = state_32814;
(statearr_32824_32972[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32823;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32973 = state_32814;
state_32814 = G__32973;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__ = function(state_32814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1.call(this,state_32814);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__;
})()
;})(__32960,switch__32260__auto__,c__32469__auto___32965,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async))
})();
var state__32471__auto__ = (function (){var statearr_32825 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_32825[(6)] = c__32469__auto___32965);

return statearr_32825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(__32960,c__32469__auto___32965,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async))
);


break;
case "async":
var c__32469__auto___32974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32960,c__32469__auto___32974,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (__32960,c__32469__auto___32974,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async){
return (function (state_32838){
var state_val_32839 = (state_32838[(1)]);
if((state_val_32839 === (1))){
var state_32838__$1 = state_32838;
var statearr_32840_32975 = state_32838__$1;
(statearr_32840_32975[(2)] = null);

(statearr_32840_32975[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (2))){
var state_32838__$1 = state_32838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32838__$1,(4),jobs);
} else {
if((state_val_32839 === (3))){
var inst_32836 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32838__$1,inst_32836);
} else {
if((state_val_32839 === (4))){
var inst_32828 = (state_32838[(2)]);
var inst_32829 = async(inst_32828);
var state_32838__$1 = state_32838;
if(cljs.core.truth_(inst_32829)){
var statearr_32841_32976 = state_32838__$1;
(statearr_32841_32976[(1)] = (5));

} else {
var statearr_32842_32977 = state_32838__$1;
(statearr_32842_32977[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (5))){
var state_32838__$1 = state_32838;
var statearr_32843_32978 = state_32838__$1;
(statearr_32843_32978[(2)] = null);

(statearr_32843_32978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (6))){
var state_32838__$1 = state_32838;
var statearr_32844_32979 = state_32838__$1;
(statearr_32844_32979[(2)] = null);

(statearr_32844_32979[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32839 === (7))){
var inst_32834 = (state_32838[(2)]);
var state_32838__$1 = state_32838;
var statearr_32845_32980 = state_32838__$1;
(statearr_32845_32980[(2)] = inst_32834);

(statearr_32845_32980[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__32960,c__32469__auto___32974,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async))
;
return ((function (__32960,switch__32260__auto__,c__32469__auto___32974,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0 = (function (){
var statearr_32846 = [null,null,null,null,null,null,null];
(statearr_32846[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__);

(statearr_32846[(1)] = (1));

return statearr_32846;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1 = (function (state_32838){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_32838);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e32847){if((e32847 instanceof Object)){
var ex__32264__auto__ = e32847;
var statearr_32848_32981 = state_32838;
(statearr_32848_32981[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32847;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32982 = state_32838;
state_32838 = G__32982;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__ = function(state_32838){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1.call(this,state_32838);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__;
})()
;})(__32960,switch__32260__auto__,c__32469__auto___32974,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async))
})();
var state__32471__auto__ = (function (){var statearr_32849 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_32849[(6)] = c__32469__auto___32974);

return statearr_32849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(__32960,c__32469__auto___32974,G__32801_32961,G__32801_32962__$1,n__6171__auto___32959,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32801_32962__$1)].join('')));

}

var G__32983 = (__32960 + (1));
__32960 = G__32983;
continue;
} else {
}
break;
}

var c__32469__auto___32984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___32984,jobs,results,process,async){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___32984,jobs,results,process,async){
return (function (state_32871){
var state_val_32872 = (state_32871[(1)]);
if((state_val_32872 === (1))){
var state_32871__$1 = state_32871;
var statearr_32873_32985 = state_32871__$1;
(statearr_32873_32985[(2)] = null);

(statearr_32873_32985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (2))){
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32871__$1,(4),from);
} else {
if((state_val_32872 === (3))){
var inst_32869 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32871__$1,inst_32869);
} else {
if((state_val_32872 === (4))){
var inst_32852 = (state_32871[(7)]);
var inst_32852__$1 = (state_32871[(2)]);
var inst_32853 = (inst_32852__$1 == null);
var state_32871__$1 = (function (){var statearr_32874 = state_32871;
(statearr_32874[(7)] = inst_32852__$1);

return statearr_32874;
})();
if(cljs.core.truth_(inst_32853)){
var statearr_32875_32986 = state_32871__$1;
(statearr_32875_32986[(1)] = (5));

} else {
var statearr_32876_32987 = state_32871__$1;
(statearr_32876_32987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (5))){
var inst_32855 = cljs.core.async.close_BANG_(jobs);
var state_32871__$1 = state_32871;
var statearr_32877_32988 = state_32871__$1;
(statearr_32877_32988[(2)] = inst_32855);

(statearr_32877_32988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (6))){
var inst_32857 = (state_32871[(8)]);
var inst_32852 = (state_32871[(7)]);
var inst_32857__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32858 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32859 = [inst_32852,inst_32857__$1];
var inst_32860 = (new cljs.core.PersistentVector(null,2,(5),inst_32858,inst_32859,null));
var state_32871__$1 = (function (){var statearr_32878 = state_32871;
(statearr_32878[(8)] = inst_32857__$1);

return statearr_32878;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32871__$1,(8),jobs,inst_32860);
} else {
if((state_val_32872 === (7))){
var inst_32867 = (state_32871[(2)]);
var state_32871__$1 = state_32871;
var statearr_32879_32989 = state_32871__$1;
(statearr_32879_32989[(2)] = inst_32867);

(statearr_32879_32989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32872 === (8))){
var inst_32857 = (state_32871[(8)]);
var inst_32862 = (state_32871[(2)]);
var state_32871__$1 = (function (){var statearr_32880 = state_32871;
(statearr_32880[(9)] = inst_32862);

return statearr_32880;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32871__$1,(9),results,inst_32857);
} else {
if((state_val_32872 === (9))){
var inst_32864 = (state_32871[(2)]);
var state_32871__$1 = (function (){var statearr_32881 = state_32871;
(statearr_32881[(10)] = inst_32864);

return statearr_32881;
})();
var statearr_32882_32990 = state_32871__$1;
(statearr_32882_32990[(2)] = null);

(statearr_32882_32990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___32984,jobs,results,process,async))
;
return ((function (switch__32260__auto__,c__32469__auto___32984,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0 = (function (){
var statearr_32883 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32883[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__);

(statearr_32883[(1)] = (1));

return statearr_32883;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1 = (function (state_32871){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_32871);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e32884){if((e32884 instanceof Object)){
var ex__32264__auto__ = e32884;
var statearr_32885_32991 = state_32871;
(statearr_32885_32991[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32884;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32992 = state_32871;
state_32871 = G__32992;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__ = function(state_32871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1.call(this,state_32871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___32984,jobs,results,process,async))
})();
var state__32471__auto__ = (function (){var statearr_32886 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_32886[(6)] = c__32469__auto___32984);

return statearr_32886;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___32984,jobs,results,process,async))
);


var c__32469__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto__,jobs,results,process,async){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto__,jobs,results,process,async){
return (function (state_32924){
var state_val_32925 = (state_32924[(1)]);
if((state_val_32925 === (7))){
var inst_32920 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32926_32993 = state_32924__$1;
(statearr_32926_32993[(2)] = inst_32920);

(statearr_32926_32993[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (20))){
var state_32924__$1 = state_32924;
var statearr_32927_32994 = state_32924__$1;
(statearr_32927_32994[(2)] = null);

(statearr_32927_32994[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (1))){
var state_32924__$1 = state_32924;
var statearr_32928_32995 = state_32924__$1;
(statearr_32928_32995[(2)] = null);

(statearr_32928_32995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (4))){
var inst_32889 = (state_32924[(7)]);
var inst_32889__$1 = (state_32924[(2)]);
var inst_32890 = (inst_32889__$1 == null);
var state_32924__$1 = (function (){var statearr_32929 = state_32924;
(statearr_32929[(7)] = inst_32889__$1);

return statearr_32929;
})();
if(cljs.core.truth_(inst_32890)){
var statearr_32930_32996 = state_32924__$1;
(statearr_32930_32996[(1)] = (5));

} else {
var statearr_32931_32997 = state_32924__$1;
(statearr_32931_32997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (15))){
var inst_32902 = (state_32924[(8)]);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32924__$1,(18),to,inst_32902);
} else {
if((state_val_32925 === (21))){
var inst_32915 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32932_32998 = state_32924__$1;
(statearr_32932_32998[(2)] = inst_32915);

(statearr_32932_32998[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (13))){
var inst_32917 = (state_32924[(2)]);
var state_32924__$1 = (function (){var statearr_32933 = state_32924;
(statearr_32933[(9)] = inst_32917);

return statearr_32933;
})();
var statearr_32934_32999 = state_32924__$1;
(statearr_32934_32999[(2)] = null);

(statearr_32934_32999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (6))){
var inst_32889 = (state_32924[(7)]);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32924__$1,(11),inst_32889);
} else {
if((state_val_32925 === (17))){
var inst_32910 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
if(cljs.core.truth_(inst_32910)){
var statearr_32935_33000 = state_32924__$1;
(statearr_32935_33000[(1)] = (19));

} else {
var statearr_32936_33001 = state_32924__$1;
(statearr_32936_33001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (3))){
var inst_32922 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32924__$1,inst_32922);
} else {
if((state_val_32925 === (12))){
var inst_32899 = (state_32924[(10)]);
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32924__$1,(14),inst_32899);
} else {
if((state_val_32925 === (2))){
var state_32924__$1 = state_32924;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32924__$1,(4),results);
} else {
if((state_val_32925 === (19))){
var state_32924__$1 = state_32924;
var statearr_32937_33002 = state_32924__$1;
(statearr_32937_33002[(2)] = null);

(statearr_32937_33002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (11))){
var inst_32899 = (state_32924[(2)]);
var state_32924__$1 = (function (){var statearr_32938 = state_32924;
(statearr_32938[(10)] = inst_32899);

return statearr_32938;
})();
var statearr_32939_33003 = state_32924__$1;
(statearr_32939_33003[(2)] = null);

(statearr_32939_33003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (9))){
var state_32924__$1 = state_32924;
var statearr_32940_33004 = state_32924__$1;
(statearr_32940_33004[(2)] = null);

(statearr_32940_33004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (5))){
var state_32924__$1 = state_32924;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32941_33005 = state_32924__$1;
(statearr_32941_33005[(1)] = (8));

} else {
var statearr_32942_33006 = state_32924__$1;
(statearr_32942_33006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (14))){
var inst_32902 = (state_32924[(8)]);
var inst_32904 = (state_32924[(11)]);
var inst_32902__$1 = (state_32924[(2)]);
var inst_32903 = (inst_32902__$1 == null);
var inst_32904__$1 = cljs.core.not(inst_32903);
var state_32924__$1 = (function (){var statearr_32943 = state_32924;
(statearr_32943[(8)] = inst_32902__$1);

(statearr_32943[(11)] = inst_32904__$1);

return statearr_32943;
})();
if(inst_32904__$1){
var statearr_32944_33007 = state_32924__$1;
(statearr_32944_33007[(1)] = (15));

} else {
var statearr_32945_33008 = state_32924__$1;
(statearr_32945_33008[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (16))){
var inst_32904 = (state_32924[(11)]);
var state_32924__$1 = state_32924;
var statearr_32946_33009 = state_32924__$1;
(statearr_32946_33009[(2)] = inst_32904);

(statearr_32946_33009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (10))){
var inst_32896 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32947_33010 = state_32924__$1;
(statearr_32947_33010[(2)] = inst_32896);

(statearr_32947_33010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (18))){
var inst_32907 = (state_32924[(2)]);
var state_32924__$1 = state_32924;
var statearr_32948_33011 = state_32924__$1;
(statearr_32948_33011[(2)] = inst_32907);

(statearr_32948_33011[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32925 === (8))){
var inst_32893 = cljs.core.async.close_BANG_(to);
var state_32924__$1 = state_32924;
var statearr_32949_33012 = state_32924__$1;
(statearr_32949_33012[(2)] = inst_32893);

(statearr_32949_33012[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto__,jobs,results,process,async))
;
return ((function (switch__32260__auto__,c__32469__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0 = (function (){
var statearr_32950 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__);

(statearr_32950[(1)] = (1));

return statearr_32950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1 = (function (state_32924){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_32924);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e32951){if((e32951 instanceof Object)){
var ex__32264__auto__ = e32951;
var statearr_32952_33013 = state_32924;
(statearr_32952_33013[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32951;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33014 = state_32924;
state_32924 = G__33014;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__ = function(state_32924){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1.call(this,state_32924);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32261__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto__,jobs,results,process,async))
})();
var state__32471__auto__ = (function (){var statearr_32953 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_32953[(6)] = c__32469__auto__);

return statearr_32953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto__,jobs,results,process,async))
);

return c__32469__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33016 = arguments.length;
switch (G__33016) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33019 = arguments.length;
switch (G__33019) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33022 = arguments.length;
switch (G__33022) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32469__auto___33074 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___33074,tc,fc){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___33074,tc,fc){
return (function (state_33048){
var state_val_33049 = (state_33048[(1)]);
if((state_val_33049 === (7))){
var inst_33044 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
var statearr_33050_33076 = state_33048__$1;
(statearr_33050_33076[(2)] = inst_33044);

(statearr_33050_33076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (1))){
var state_33048__$1 = state_33048;
var statearr_33051_33077 = state_33048__$1;
(statearr_33051_33077[(2)] = null);

(statearr_33051_33077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (4))){
var inst_33025 = (state_33048[(7)]);
var inst_33025__$1 = (state_33048[(2)]);
var inst_33026 = (inst_33025__$1 == null);
var state_33048__$1 = (function (){var statearr_33052 = state_33048;
(statearr_33052[(7)] = inst_33025__$1);

return statearr_33052;
})();
if(cljs.core.truth_(inst_33026)){
var statearr_33053_33078 = state_33048__$1;
(statearr_33053_33078[(1)] = (5));

} else {
var statearr_33054_33079 = state_33048__$1;
(statearr_33054_33079[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (13))){
var state_33048__$1 = state_33048;
var statearr_33055_33080 = state_33048__$1;
(statearr_33055_33080[(2)] = null);

(statearr_33055_33080[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (6))){
var inst_33025 = (state_33048[(7)]);
var inst_33031 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33025) : p.call(null,inst_33025));
var state_33048__$1 = state_33048;
if(cljs.core.truth_(inst_33031)){
var statearr_33056_33081 = state_33048__$1;
(statearr_33056_33081[(1)] = (9));

} else {
var statearr_33057_33082 = state_33048__$1;
(statearr_33057_33082[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (3))){
var inst_33046 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33048__$1,inst_33046);
} else {
if((state_val_33049 === (12))){
var state_33048__$1 = state_33048;
var statearr_33058_33083 = state_33048__$1;
(statearr_33058_33083[(2)] = null);

(statearr_33058_33083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (2))){
var state_33048__$1 = state_33048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33048__$1,(4),ch);
} else {
if((state_val_33049 === (11))){
var inst_33025 = (state_33048[(7)]);
var inst_33035 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33048__$1,(8),inst_33035,inst_33025);
} else {
if((state_val_33049 === (9))){
var state_33048__$1 = state_33048;
var statearr_33059_33086 = state_33048__$1;
(statearr_33059_33086[(2)] = tc);

(statearr_33059_33086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (5))){
var inst_33028 = cljs.core.async.close_BANG_(tc);
var inst_33029 = cljs.core.async.close_BANG_(fc);
var state_33048__$1 = (function (){var statearr_33060 = state_33048;
(statearr_33060[(8)] = inst_33028);

return statearr_33060;
})();
var statearr_33061_33087 = state_33048__$1;
(statearr_33061_33087[(2)] = inst_33029);

(statearr_33061_33087[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (14))){
var inst_33042 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
var statearr_33062_33088 = state_33048__$1;
(statearr_33062_33088[(2)] = inst_33042);

(statearr_33062_33088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (10))){
var state_33048__$1 = state_33048;
var statearr_33063_33089 = state_33048__$1;
(statearr_33063_33089[(2)] = fc);

(statearr_33063_33089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33049 === (8))){
var inst_33037 = (state_33048[(2)]);
var state_33048__$1 = state_33048;
if(cljs.core.truth_(inst_33037)){
var statearr_33065_33090 = state_33048__$1;
(statearr_33065_33090[(1)] = (12));

} else {
var statearr_33066_33091 = state_33048__$1;
(statearr_33066_33091[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___33074,tc,fc))
;
return ((function (switch__32260__auto__,c__32469__auto___33074,tc,fc){
return (function() {
var cljs$core$async$state_machine__32261__auto__ = null;
var cljs$core$async$state_machine__32261__auto____0 = (function (){
var statearr_33067 = [null,null,null,null,null,null,null,null,null];
(statearr_33067[(0)] = cljs$core$async$state_machine__32261__auto__);

(statearr_33067[(1)] = (1));

return statearr_33067;
});
var cljs$core$async$state_machine__32261__auto____1 = (function (state_33048){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_33048);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e33068){if((e33068 instanceof Object)){
var ex__32264__auto__ = e33068;
var statearr_33069_33093 = state_33048;
(statearr_33069_33093[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33068;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33094 = state_33048;
state_33048 = G__33094;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$state_machine__32261__auto__ = function(state_33048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32261__auto____1.call(this,state_33048);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32261__auto____0;
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32261__auto____1;
return cljs$core$async$state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___33074,tc,fc))
})();
var state__32471__auto__ = (function (){var statearr_33071 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_33071[(6)] = c__32469__auto___33074);

return statearr_33071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___33074,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32469__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto__){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto__){
return (function (state_33117){
var state_val_33118 = (state_33117[(1)]);
if((state_val_33118 === (7))){
var inst_33113 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
var statearr_33120_33141 = state_33117__$1;
(statearr_33120_33141[(2)] = inst_33113);

(statearr_33120_33141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (1))){
var inst_33097 = init;
var state_33117__$1 = (function (){var statearr_33121 = state_33117;
(statearr_33121[(7)] = inst_33097);

return statearr_33121;
})();
var statearr_33122_33142 = state_33117__$1;
(statearr_33122_33142[(2)] = null);

(statearr_33122_33142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (4))){
var inst_33100 = (state_33117[(8)]);
var inst_33100__$1 = (state_33117[(2)]);
var inst_33101 = (inst_33100__$1 == null);
var state_33117__$1 = (function (){var statearr_33123 = state_33117;
(statearr_33123[(8)] = inst_33100__$1);

return statearr_33123;
})();
if(cljs.core.truth_(inst_33101)){
var statearr_33124_33143 = state_33117__$1;
(statearr_33124_33143[(1)] = (5));

} else {
var statearr_33125_33144 = state_33117__$1;
(statearr_33125_33144[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (6))){
var inst_33104 = (state_33117[(9)]);
var inst_33100 = (state_33117[(8)]);
var inst_33097 = (state_33117[(7)]);
var inst_33104__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33097,inst_33100) : f.call(null,inst_33097,inst_33100));
var inst_33105 = cljs.core.reduced_QMARK_(inst_33104__$1);
var state_33117__$1 = (function (){var statearr_33126 = state_33117;
(statearr_33126[(9)] = inst_33104__$1);

return statearr_33126;
})();
if(inst_33105){
var statearr_33127_33145 = state_33117__$1;
(statearr_33127_33145[(1)] = (8));

} else {
var statearr_33128_33146 = state_33117__$1;
(statearr_33128_33146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (3))){
var inst_33115 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33117__$1,inst_33115);
} else {
if((state_val_33118 === (2))){
var state_33117__$1 = state_33117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33117__$1,(4),ch);
} else {
if((state_val_33118 === (9))){
var inst_33104 = (state_33117[(9)]);
var inst_33097 = inst_33104;
var state_33117__$1 = (function (){var statearr_33132 = state_33117;
(statearr_33132[(7)] = inst_33097);

return statearr_33132;
})();
var statearr_33133_33147 = state_33117__$1;
(statearr_33133_33147[(2)] = null);

(statearr_33133_33147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (5))){
var inst_33097 = (state_33117[(7)]);
var state_33117__$1 = state_33117;
var statearr_33134_33148 = state_33117__$1;
(statearr_33134_33148[(2)] = inst_33097);

(statearr_33134_33148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (10))){
var inst_33111 = (state_33117[(2)]);
var state_33117__$1 = state_33117;
var statearr_33135_33149 = state_33117__$1;
(statearr_33135_33149[(2)] = inst_33111);

(statearr_33135_33149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33118 === (8))){
var inst_33104 = (state_33117[(9)]);
var inst_33107 = cljs.core.deref(inst_33104);
var state_33117__$1 = state_33117;
var statearr_33136_33150 = state_33117__$1;
(statearr_33136_33150[(2)] = inst_33107);

(statearr_33136_33150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto__))
;
return ((function (switch__32260__auto__,c__32469__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32261__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32261__auto____0 = (function (){
var statearr_33137 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33137[(0)] = cljs$core$async$reduce_$_state_machine__32261__auto__);

(statearr_33137[(1)] = (1));

return statearr_33137;
});
var cljs$core$async$reduce_$_state_machine__32261__auto____1 = (function (state_33117){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_33117);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e33138){if((e33138 instanceof Object)){
var ex__32264__auto__ = e33138;
var statearr_33139_33151 = state_33117;
(statearr_33139_33151[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33138;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33152 = state_33117;
state_33117 = G__33152;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32261__auto__ = function(state_33117){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32261__auto____1.call(this,state_33117);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32261__auto____0;
cljs$core$async$reduce_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32261__auto____1;
return cljs$core$async$reduce_$_state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto__))
})();
var state__32471__auto__ = (function (){var statearr_33140 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_33140[(6)] = c__32469__auto__);

return statearr_33140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto__))
);

return c__32469__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32469__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto__,f__$1){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto__,f__$1){
return (function (state_33158){
var state_val_33159 = (state_33158[(1)]);
if((state_val_33159 === (1))){
var inst_33153 = cljs.core.async.reduce(f__$1,init,ch);
var state_33158__$1 = state_33158;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33158__$1,(2),inst_33153);
} else {
if((state_val_33159 === (2))){
var inst_33155 = (state_33158[(2)]);
var inst_33156 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33155) : f__$1.call(null,inst_33155));
var state_33158__$1 = state_33158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33158__$1,inst_33156);
} else {
return null;
}
}
});})(c__32469__auto__,f__$1))
;
return ((function (switch__32260__auto__,c__32469__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32261__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32261__auto____0 = (function (){
var statearr_33160 = [null,null,null,null,null,null,null];
(statearr_33160[(0)] = cljs$core$async$transduce_$_state_machine__32261__auto__);

(statearr_33160[(1)] = (1));

return statearr_33160;
});
var cljs$core$async$transduce_$_state_machine__32261__auto____1 = (function (state_33158){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_33158);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e33161){if((e33161 instanceof Object)){
var ex__32264__auto__ = e33161;
var statearr_33162_33164 = state_33158;
(statearr_33162_33164[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33161;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33165 = state_33158;
state_33158 = G__33165;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32261__auto__ = function(state_33158){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32261__auto____1.call(this,state_33158);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32261__auto____0;
cljs$core$async$transduce_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32261__auto____1;
return cljs$core$async$transduce_$_state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto__,f__$1))
})();
var state__32471__auto__ = (function (){var statearr_33163 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_33163[(6)] = c__32469__auto__);

return statearr_33163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto__,f__$1))
);

return c__32469__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33167 = arguments.length;
switch (G__33167) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32469__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto__){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto__){
return (function (state_33192){
var state_val_33195 = (state_33192[(1)]);
if((state_val_33195 === (7))){
var inst_33174 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33197_33226 = state_33192__$1;
(statearr_33197_33226[(2)] = inst_33174);

(statearr_33197_33226[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (1))){
var inst_33168 = cljs.core.seq(coll);
var inst_33169 = inst_33168;
var state_33192__$1 = (function (){var statearr_33198 = state_33192;
(statearr_33198[(7)] = inst_33169);

return statearr_33198;
})();
var statearr_33199_33227 = state_33192__$1;
(statearr_33199_33227[(2)] = null);

(statearr_33199_33227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (4))){
var inst_33169 = (state_33192[(7)]);
var inst_33172 = cljs.core.first(inst_33169);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33192__$1,(7),ch,inst_33172);
} else {
if((state_val_33195 === (13))){
var inst_33186 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33200_33228 = state_33192__$1;
(statearr_33200_33228[(2)] = inst_33186);

(statearr_33200_33228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (6))){
var inst_33177 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33177)){
var statearr_33201_33231 = state_33192__$1;
(statearr_33201_33231[(1)] = (8));

} else {
var statearr_33202_33232 = state_33192__$1;
(statearr_33202_33232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (3))){
var inst_33190 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33192__$1,inst_33190);
} else {
if((state_val_33195 === (12))){
var state_33192__$1 = state_33192;
var statearr_33203_33233 = state_33192__$1;
(statearr_33203_33233[(2)] = null);

(statearr_33203_33233[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (2))){
var inst_33169 = (state_33192[(7)]);
var state_33192__$1 = state_33192;
if(cljs.core.truth_(inst_33169)){
var statearr_33204_33234 = state_33192__$1;
(statearr_33204_33234[(1)] = (4));

} else {
var statearr_33205_33235 = state_33192__$1;
(statearr_33205_33235[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (11))){
var inst_33183 = cljs.core.async.close_BANG_(ch);
var state_33192__$1 = state_33192;
var statearr_33206_33236 = state_33192__$1;
(statearr_33206_33236[(2)] = inst_33183);

(statearr_33206_33236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (9))){
var state_33192__$1 = state_33192;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33207_33237 = state_33192__$1;
(statearr_33207_33237[(1)] = (11));

} else {
var statearr_33209_33238 = state_33192__$1;
(statearr_33209_33238[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (5))){
var inst_33169 = (state_33192[(7)]);
var state_33192__$1 = state_33192;
var statearr_33212_33239 = state_33192__$1;
(statearr_33212_33239[(2)] = inst_33169);

(statearr_33212_33239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (10))){
var inst_33188 = (state_33192[(2)]);
var state_33192__$1 = state_33192;
var statearr_33213_33240 = state_33192__$1;
(statearr_33213_33240[(2)] = inst_33188);

(statearr_33213_33240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33195 === (8))){
var inst_33169 = (state_33192[(7)]);
var inst_33179 = cljs.core.next(inst_33169);
var inst_33169__$1 = inst_33179;
var state_33192__$1 = (function (){var statearr_33214 = state_33192;
(statearr_33214[(7)] = inst_33169__$1);

return statearr_33214;
})();
var statearr_33215_33241 = state_33192__$1;
(statearr_33215_33241[(2)] = null);

(statearr_33215_33241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto__))
;
return ((function (switch__32260__auto__,c__32469__auto__){
return (function() {
var cljs$core$async$state_machine__32261__auto__ = null;
var cljs$core$async$state_machine__32261__auto____0 = (function (){
var statearr_33216 = [null,null,null,null,null,null,null,null];
(statearr_33216[(0)] = cljs$core$async$state_machine__32261__auto__);

(statearr_33216[(1)] = (1));

return statearr_33216;
});
var cljs$core$async$state_machine__32261__auto____1 = (function (state_33192){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_33192);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e33217){if((e33217 instanceof Object)){
var ex__32264__auto__ = e33217;
var statearr_33220_33245 = state_33192;
(statearr_33220_33245[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33217;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33248 = state_33192;
state_33192 = G__33248;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$state_machine__32261__auto__ = function(state_33192){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32261__auto____1.call(this,state_33192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32261__auto____0;
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32261__auto____1;
return cljs$core$async$state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto__))
})();
var state__32471__auto__ = (function (){var statearr_33221 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_33221[(6)] = c__32469__auto__);

return statearr_33221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto__))
);

return c__32469__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5859__auto__ = (((_ == null))?null:_);
var m__5860__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5860__auto__.call(null,_));
} else {
var m__5860__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(_) : m__5860__auto____$1.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5860__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5860__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5860__auto____$1.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto__.call(null,m,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto__.call(null,m));
} else {
var m__5860__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33255 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33255 = (function (ch,cs,meta33256){
this.ch = ch;
this.cs = cs;
this.meta33256 = meta33256;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33257,meta33256__$1){
var self__ = this;
var _33257__$1 = this;
return (new cljs.core.async.t_cljs$core$async33255(self__.ch,self__.cs,meta33256__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33257){
var self__ = this;
var _33257__$1 = this;
return self__.meta33256;
});})(cs))
;

cljs.core.async.t_cljs$core$async33255.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33255.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33255.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33255.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33255.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33255.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33255.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33256","meta33256",-1597556445,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33255.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33255.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33255";

cljs.core.async.t_cljs$core$async33255.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async33255");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33255 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33255(ch__$1,cs__$1,meta33256){
return (new cljs.core.async.t_cljs$core$async33255(ch__$1,cs__$1,meta33256));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33255(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32469__auto___33508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___33508,cs,m,dchan,dctr,done){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___33508,cs,m,dchan,dctr,done){
return (function (state_33400){
var state_val_33401 = (state_33400[(1)]);
if((state_val_33401 === (7))){
var inst_33396 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33402_33509 = state_33400__$1;
(statearr_33402_33509[(2)] = inst_33396);

(statearr_33402_33509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (20))){
var inst_33299 = (state_33400[(7)]);
var inst_33311 = cljs.core.first(inst_33299);
var inst_33312 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33311,(0),null);
var inst_33313 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33311,(1),null);
var state_33400__$1 = (function (){var statearr_33403 = state_33400;
(statearr_33403[(8)] = inst_33312);

return statearr_33403;
})();
if(cljs.core.truth_(inst_33313)){
var statearr_33404_33510 = state_33400__$1;
(statearr_33404_33510[(1)] = (22));

} else {
var statearr_33405_33511 = state_33400__$1;
(statearr_33405_33511[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (27))){
var inst_33341 = (state_33400[(9)]);
var inst_33264 = (state_33400[(10)]);
var inst_33348 = (state_33400[(11)]);
var inst_33343 = (state_33400[(12)]);
var inst_33348__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33341,inst_33343);
var inst_33349 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33348__$1,inst_33264,done);
var state_33400__$1 = (function (){var statearr_33406 = state_33400;
(statearr_33406[(11)] = inst_33348__$1);

return statearr_33406;
})();
if(cljs.core.truth_(inst_33349)){
var statearr_33407_33513 = state_33400__$1;
(statearr_33407_33513[(1)] = (30));

} else {
var statearr_33408_33514 = state_33400__$1;
(statearr_33408_33514[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (1))){
var state_33400__$1 = state_33400;
var statearr_33409_33515 = state_33400__$1;
(statearr_33409_33515[(2)] = null);

(statearr_33409_33515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (24))){
var inst_33299 = (state_33400[(7)]);
var inst_33318 = (state_33400[(2)]);
var inst_33319 = cljs.core.next(inst_33299);
var inst_33273 = inst_33319;
var inst_33274 = null;
var inst_33275 = (0);
var inst_33276 = (0);
var state_33400__$1 = (function (){var statearr_33410 = state_33400;
(statearr_33410[(13)] = inst_33274);

(statearr_33410[(14)] = inst_33276);

(statearr_33410[(15)] = inst_33273);

(statearr_33410[(16)] = inst_33318);

(statearr_33410[(17)] = inst_33275);

return statearr_33410;
})();
var statearr_33411_33516 = state_33400__$1;
(statearr_33411_33516[(2)] = null);

(statearr_33411_33516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (39))){
var state_33400__$1 = state_33400;
var statearr_33415_33517 = state_33400__$1;
(statearr_33415_33517[(2)] = null);

(statearr_33415_33517[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (4))){
var inst_33264 = (state_33400[(10)]);
var inst_33264__$1 = (state_33400[(2)]);
var inst_33265 = (inst_33264__$1 == null);
var state_33400__$1 = (function (){var statearr_33416 = state_33400;
(statearr_33416[(10)] = inst_33264__$1);

return statearr_33416;
})();
if(cljs.core.truth_(inst_33265)){
var statearr_33417_33518 = state_33400__$1;
(statearr_33417_33518[(1)] = (5));

} else {
var statearr_33418_33519 = state_33400__$1;
(statearr_33418_33519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (15))){
var inst_33274 = (state_33400[(13)]);
var inst_33276 = (state_33400[(14)]);
var inst_33273 = (state_33400[(15)]);
var inst_33275 = (state_33400[(17)]);
var inst_33295 = (state_33400[(2)]);
var inst_33296 = (inst_33276 + (1));
var tmp33412 = inst_33274;
var tmp33413 = inst_33273;
var tmp33414 = inst_33275;
var inst_33273__$1 = tmp33413;
var inst_33274__$1 = tmp33412;
var inst_33275__$1 = tmp33414;
var inst_33276__$1 = inst_33296;
var state_33400__$1 = (function (){var statearr_33419 = state_33400;
(statearr_33419[(18)] = inst_33295);

(statearr_33419[(13)] = inst_33274__$1);

(statearr_33419[(14)] = inst_33276__$1);

(statearr_33419[(15)] = inst_33273__$1);

(statearr_33419[(17)] = inst_33275__$1);

return statearr_33419;
})();
var statearr_33420_33520 = state_33400__$1;
(statearr_33420_33520[(2)] = null);

(statearr_33420_33520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (21))){
var inst_33322 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33424_33522 = state_33400__$1;
(statearr_33424_33522[(2)] = inst_33322);

(statearr_33424_33522[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (31))){
var inst_33348 = (state_33400[(11)]);
var inst_33352 = done(null);
var inst_33353 = cljs.core.async.untap_STAR_(m,inst_33348);
var state_33400__$1 = (function (){var statearr_33425 = state_33400;
(statearr_33425[(19)] = inst_33352);

return statearr_33425;
})();
var statearr_33426_33525 = state_33400__$1;
(statearr_33426_33525[(2)] = inst_33353);

(statearr_33426_33525[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (32))){
var inst_33342 = (state_33400[(20)]);
var inst_33341 = (state_33400[(9)]);
var inst_33340 = (state_33400[(21)]);
var inst_33343 = (state_33400[(12)]);
var inst_33355 = (state_33400[(2)]);
var inst_33356 = (inst_33343 + (1));
var tmp33421 = inst_33342;
var tmp33422 = inst_33341;
var tmp33423 = inst_33340;
var inst_33340__$1 = tmp33423;
var inst_33341__$1 = tmp33422;
var inst_33342__$1 = tmp33421;
var inst_33343__$1 = inst_33356;
var state_33400__$1 = (function (){var statearr_33427 = state_33400;
(statearr_33427[(20)] = inst_33342__$1);

(statearr_33427[(9)] = inst_33341__$1);

(statearr_33427[(22)] = inst_33355);

(statearr_33427[(21)] = inst_33340__$1);

(statearr_33427[(12)] = inst_33343__$1);

return statearr_33427;
})();
var statearr_33428_33526 = state_33400__$1;
(statearr_33428_33526[(2)] = null);

(statearr_33428_33526[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (40))){
var inst_33368 = (state_33400[(23)]);
var inst_33372 = done(null);
var inst_33373 = cljs.core.async.untap_STAR_(m,inst_33368);
var state_33400__$1 = (function (){var statearr_33429 = state_33400;
(statearr_33429[(24)] = inst_33372);

return statearr_33429;
})();
var statearr_33430_33527 = state_33400__$1;
(statearr_33430_33527[(2)] = inst_33373);

(statearr_33430_33527[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (33))){
var inst_33359 = (state_33400[(25)]);
var inst_33361 = cljs.core.chunked_seq_QMARK_(inst_33359);
var state_33400__$1 = state_33400;
if(inst_33361){
var statearr_33431_33528 = state_33400__$1;
(statearr_33431_33528[(1)] = (36));

} else {
var statearr_33432_33529 = state_33400__$1;
(statearr_33432_33529[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (13))){
var inst_33289 = (state_33400[(26)]);
var inst_33292 = cljs.core.async.close_BANG_(inst_33289);
var state_33400__$1 = state_33400;
var statearr_33433_33530 = state_33400__$1;
(statearr_33433_33530[(2)] = inst_33292);

(statearr_33433_33530[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (22))){
var inst_33312 = (state_33400[(8)]);
var inst_33315 = cljs.core.async.close_BANG_(inst_33312);
var state_33400__$1 = state_33400;
var statearr_33434_33531 = state_33400__$1;
(statearr_33434_33531[(2)] = inst_33315);

(statearr_33434_33531[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (36))){
var inst_33359 = (state_33400[(25)]);
var inst_33363 = cljs.core.chunk_first(inst_33359);
var inst_33364 = cljs.core.chunk_rest(inst_33359);
var inst_33365 = cljs.core.count(inst_33363);
var inst_33340 = inst_33364;
var inst_33341 = inst_33363;
var inst_33342 = inst_33365;
var inst_33343 = (0);
var state_33400__$1 = (function (){var statearr_33435 = state_33400;
(statearr_33435[(20)] = inst_33342);

(statearr_33435[(9)] = inst_33341);

(statearr_33435[(21)] = inst_33340);

(statearr_33435[(12)] = inst_33343);

return statearr_33435;
})();
var statearr_33436_33532 = state_33400__$1;
(statearr_33436_33532[(2)] = null);

(statearr_33436_33532[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (41))){
var inst_33359 = (state_33400[(25)]);
var inst_33375 = (state_33400[(2)]);
var inst_33376 = cljs.core.next(inst_33359);
var inst_33340 = inst_33376;
var inst_33341 = null;
var inst_33342 = (0);
var inst_33343 = (0);
var state_33400__$1 = (function (){var statearr_33441 = state_33400;
(statearr_33441[(20)] = inst_33342);

(statearr_33441[(27)] = inst_33375);

(statearr_33441[(9)] = inst_33341);

(statearr_33441[(21)] = inst_33340);

(statearr_33441[(12)] = inst_33343);

return statearr_33441;
})();
var statearr_33442_33533 = state_33400__$1;
(statearr_33442_33533[(2)] = null);

(statearr_33442_33533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (43))){
var state_33400__$1 = state_33400;
var statearr_33443_33534 = state_33400__$1;
(statearr_33443_33534[(2)] = null);

(statearr_33443_33534[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (29))){
var inst_33384 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33444_33536 = state_33400__$1;
(statearr_33444_33536[(2)] = inst_33384);

(statearr_33444_33536[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (44))){
var inst_33393 = (state_33400[(2)]);
var state_33400__$1 = (function (){var statearr_33448 = state_33400;
(statearr_33448[(28)] = inst_33393);

return statearr_33448;
})();
var statearr_33449_33537 = state_33400__$1;
(statearr_33449_33537[(2)] = null);

(statearr_33449_33537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (6))){
var inst_33332 = (state_33400[(29)]);
var inst_33331 = cljs.core.deref(cs);
var inst_33332__$1 = cljs.core.keys(inst_33331);
var inst_33333 = cljs.core.count(inst_33332__$1);
var inst_33334 = cljs.core.reset_BANG_(dctr,inst_33333);
var inst_33339 = cljs.core.seq(inst_33332__$1);
var inst_33340 = inst_33339;
var inst_33341 = null;
var inst_33342 = (0);
var inst_33343 = (0);
var state_33400__$1 = (function (){var statearr_33453 = state_33400;
(statearr_33453[(20)] = inst_33342);

(statearr_33453[(30)] = inst_33334);

(statearr_33453[(29)] = inst_33332__$1);

(statearr_33453[(9)] = inst_33341);

(statearr_33453[(21)] = inst_33340);

(statearr_33453[(12)] = inst_33343);

return statearr_33453;
})();
var statearr_33454_33541 = state_33400__$1;
(statearr_33454_33541[(2)] = null);

(statearr_33454_33541[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (28))){
var inst_33359 = (state_33400[(25)]);
var inst_33340 = (state_33400[(21)]);
var inst_33359__$1 = cljs.core.seq(inst_33340);
var state_33400__$1 = (function (){var statearr_33459 = state_33400;
(statearr_33459[(25)] = inst_33359__$1);

return statearr_33459;
})();
if(inst_33359__$1){
var statearr_33460_33542 = state_33400__$1;
(statearr_33460_33542[(1)] = (33));

} else {
var statearr_33461_33543 = state_33400__$1;
(statearr_33461_33543[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (25))){
var inst_33342 = (state_33400[(20)]);
var inst_33343 = (state_33400[(12)]);
var inst_33345 = (inst_33343 < inst_33342);
var inst_33346 = inst_33345;
var state_33400__$1 = state_33400;
if(cljs.core.truth_(inst_33346)){
var statearr_33465_33544 = state_33400__$1;
(statearr_33465_33544[(1)] = (27));

} else {
var statearr_33466_33545 = state_33400__$1;
(statearr_33466_33545[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (34))){
var state_33400__$1 = state_33400;
var statearr_33470_33546 = state_33400__$1;
(statearr_33470_33546[(2)] = null);

(statearr_33470_33546[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (17))){
var state_33400__$1 = state_33400;
var statearr_33471_33547 = state_33400__$1;
(statearr_33471_33547[(2)] = null);

(statearr_33471_33547[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (3))){
var inst_33398 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33400__$1,inst_33398);
} else {
if((state_val_33401 === (12))){
var inst_33327 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33474_33548 = state_33400__$1;
(statearr_33474_33548[(2)] = inst_33327);

(statearr_33474_33548[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (2))){
var state_33400__$1 = state_33400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33400__$1,(4),ch);
} else {
if((state_val_33401 === (23))){
var state_33400__$1 = state_33400;
var statearr_33476_33549 = state_33400__$1;
(statearr_33476_33549[(2)] = null);

(statearr_33476_33549[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (35))){
var inst_33382 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33477_33550 = state_33400__$1;
(statearr_33477_33550[(2)] = inst_33382);

(statearr_33477_33550[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (19))){
var inst_33299 = (state_33400[(7)]);
var inst_33303 = cljs.core.chunk_first(inst_33299);
var inst_33304 = cljs.core.chunk_rest(inst_33299);
var inst_33305 = cljs.core.count(inst_33303);
var inst_33273 = inst_33304;
var inst_33274 = inst_33303;
var inst_33275 = inst_33305;
var inst_33276 = (0);
var state_33400__$1 = (function (){var statearr_33478 = state_33400;
(statearr_33478[(13)] = inst_33274);

(statearr_33478[(14)] = inst_33276);

(statearr_33478[(15)] = inst_33273);

(statearr_33478[(17)] = inst_33275);

return statearr_33478;
})();
var statearr_33479_33551 = state_33400__$1;
(statearr_33479_33551[(2)] = null);

(statearr_33479_33551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (11))){
var inst_33273 = (state_33400[(15)]);
var inst_33299 = (state_33400[(7)]);
var inst_33299__$1 = cljs.core.seq(inst_33273);
var state_33400__$1 = (function (){var statearr_33480 = state_33400;
(statearr_33480[(7)] = inst_33299__$1);

return statearr_33480;
})();
if(inst_33299__$1){
var statearr_33481_33552 = state_33400__$1;
(statearr_33481_33552[(1)] = (16));

} else {
var statearr_33482_33553 = state_33400__$1;
(statearr_33482_33553[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (9))){
var inst_33329 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33483_33554 = state_33400__$1;
(statearr_33483_33554[(2)] = inst_33329);

(statearr_33483_33554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (5))){
var inst_33271 = cljs.core.deref(cs);
var inst_33272 = cljs.core.seq(inst_33271);
var inst_33273 = inst_33272;
var inst_33274 = null;
var inst_33275 = (0);
var inst_33276 = (0);
var state_33400__$1 = (function (){var statearr_33484 = state_33400;
(statearr_33484[(13)] = inst_33274);

(statearr_33484[(14)] = inst_33276);

(statearr_33484[(15)] = inst_33273);

(statearr_33484[(17)] = inst_33275);

return statearr_33484;
})();
var statearr_33485_33555 = state_33400__$1;
(statearr_33485_33555[(2)] = null);

(statearr_33485_33555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (14))){
var state_33400__$1 = state_33400;
var statearr_33486_33556 = state_33400__$1;
(statearr_33486_33556[(2)] = null);

(statearr_33486_33556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (45))){
var inst_33390 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33487_33557 = state_33400__$1;
(statearr_33487_33557[(2)] = inst_33390);

(statearr_33487_33557[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (26))){
var inst_33332 = (state_33400[(29)]);
var inst_33386 = (state_33400[(2)]);
var inst_33387 = cljs.core.seq(inst_33332);
var state_33400__$1 = (function (){var statearr_33488 = state_33400;
(statearr_33488[(31)] = inst_33386);

return statearr_33488;
})();
if(inst_33387){
var statearr_33489_33558 = state_33400__$1;
(statearr_33489_33558[(1)] = (42));

} else {
var statearr_33490_33559 = state_33400__$1;
(statearr_33490_33559[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (16))){
var inst_33299 = (state_33400[(7)]);
var inst_33301 = cljs.core.chunked_seq_QMARK_(inst_33299);
var state_33400__$1 = state_33400;
if(inst_33301){
var statearr_33491_33560 = state_33400__$1;
(statearr_33491_33560[(1)] = (19));

} else {
var statearr_33492_33561 = state_33400__$1;
(statearr_33492_33561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (38))){
var inst_33379 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33493_33564 = state_33400__$1;
(statearr_33493_33564[(2)] = inst_33379);

(statearr_33493_33564[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (30))){
var state_33400__$1 = state_33400;
var statearr_33494_33565 = state_33400__$1;
(statearr_33494_33565[(2)] = null);

(statearr_33494_33565[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (10))){
var inst_33274 = (state_33400[(13)]);
var inst_33276 = (state_33400[(14)]);
var inst_33288 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33274,inst_33276);
var inst_33289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33288,(0),null);
var inst_33290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33288,(1),null);
var state_33400__$1 = (function (){var statearr_33495 = state_33400;
(statearr_33495[(26)] = inst_33289);

return statearr_33495;
})();
if(cljs.core.truth_(inst_33290)){
var statearr_33496_33566 = state_33400__$1;
(statearr_33496_33566[(1)] = (13));

} else {
var statearr_33497_33567 = state_33400__$1;
(statearr_33497_33567[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (18))){
var inst_33325 = (state_33400[(2)]);
var state_33400__$1 = state_33400;
var statearr_33498_33568 = state_33400__$1;
(statearr_33498_33568[(2)] = inst_33325);

(statearr_33498_33568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (42))){
var state_33400__$1 = state_33400;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33400__$1,(45),dchan);
} else {
if((state_val_33401 === (37))){
var inst_33368 = (state_33400[(23)]);
var inst_33359 = (state_33400[(25)]);
var inst_33264 = (state_33400[(10)]);
var inst_33368__$1 = cljs.core.first(inst_33359);
var inst_33369 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33368__$1,inst_33264,done);
var state_33400__$1 = (function (){var statearr_33499 = state_33400;
(statearr_33499[(23)] = inst_33368__$1);

return statearr_33499;
})();
if(cljs.core.truth_(inst_33369)){
var statearr_33500_33572 = state_33400__$1;
(statearr_33500_33572[(1)] = (39));

} else {
var statearr_33501_33573 = state_33400__$1;
(statearr_33501_33573[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33401 === (8))){
var inst_33276 = (state_33400[(14)]);
var inst_33275 = (state_33400[(17)]);
var inst_33278 = (inst_33276 < inst_33275);
var inst_33279 = inst_33278;
var state_33400__$1 = state_33400;
if(cljs.core.truth_(inst_33279)){
var statearr_33502_33574 = state_33400__$1;
(statearr_33502_33574[(1)] = (10));

} else {
var statearr_33503_33575 = state_33400__$1;
(statearr_33503_33575[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___33508,cs,m,dchan,dctr,done))
;
return ((function (switch__32260__auto__,c__32469__auto___33508,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32261__auto__ = null;
var cljs$core$async$mult_$_state_machine__32261__auto____0 = (function (){
var statearr_33504 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33504[(0)] = cljs$core$async$mult_$_state_machine__32261__auto__);

(statearr_33504[(1)] = (1));

return statearr_33504;
});
var cljs$core$async$mult_$_state_machine__32261__auto____1 = (function (state_33400){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_33400);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e33505){if((e33505 instanceof Object)){
var ex__32264__auto__ = e33505;
var statearr_33506_33579 = state_33400;
(statearr_33506_33579[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33505;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33580 = state_33400;
state_33400 = G__33580;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32261__auto__ = function(state_33400){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32261__auto____1.call(this,state_33400);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32261__auto____0;
cljs$core$async$mult_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32261__auto____1;
return cljs$core$async$mult_$_state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___33508,cs,m,dchan,dctr,done))
})();
var state__32471__auto__ = (function (){var statearr_33507 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_33507[(6)] = c__32469__auto___33508);

return statearr_33507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___33508,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33582 = arguments.length;
switch (G__33582) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto__.call(null,m,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto__.call(null,m,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5860__auto____$1.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto__.call(null,m));
} else {
var m__5860__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(m) : m__5860__auto____$1.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5860__auto__.call(null,m,state_map));
} else {
var m__5860__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5860__auto____$1.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5859__auto__ = (((m == null))?null:m);
var m__5860__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5860__auto__.call(null,m,mode));
} else {
var m__5860__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5860__auto____$1.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6412__auto__ = [];
var len__6405__auto___33611 = arguments.length;
var i__6406__auto___33612 = (0);
while(true){
if((i__6406__auto___33612 < len__6405__auto___33611)){
args__6412__auto__.push((arguments[i__6406__auto___33612]));

var G__33613 = (i__6406__auto___33612 + (1));
i__6406__auto___33612 = G__33613;
continue;
} else {
}
break;
}

var argseq__6413__auto__ = ((((3) < args__6412__auto__.length))?(new cljs.core.IndexedSeq(args__6412__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6413__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33603){
var map__33604 = p__33603;
var map__33604__$1 = ((((!((map__33604 == null)))?((((map__33604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33604.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33604):map__33604);
var opts = map__33604__$1;
var statearr_33607_33614 = state;
(statearr_33607_33614[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts(((function (map__33604,map__33604__$1,opts){
return (function (val){
var statearr_33608_33615 = state;
(statearr_33608_33615[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__33604,map__33604__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_33609_33617 = state;
(statearr_33609_33617[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33599){
var G__33600 = cljs.core.first(seq33599);
var seq33599__$1 = cljs.core.next(seq33599);
var G__33601 = cljs.core.first(seq33599__$1);
var seq33599__$2 = cljs.core.next(seq33599__$1);
var G__33602 = cljs.core.first(seq33599__$2);
var seq33599__$3 = cljs.core.next(seq33599__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33600,G__33601,G__33602,seq33599__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async33623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33623 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta33624){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta33624 = meta33624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33625,meta33624__$1){
var self__ = this;
var _33625__$1 = this;
return (new cljs.core.async.t_cljs$core$async33623(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta33624__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33625){
var self__ = this;
var _33625__$1 = this;
return self__.meta33624;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33623.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33623.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33623.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33623.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33623.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33623.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33623.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33623.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33623.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta33624","meta33624",508244352,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33623";

cljs.core.async.t_cljs$core$async33623.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async33623");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33623 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33623(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33624){
return (new cljs.core.async.t_cljs$core$async33623(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta33624));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33623(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32469__auto___33819 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___33819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___33819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33736){
var state_val_33737 = (state_33736[(1)]);
if((state_val_33737 === (7))){
var inst_33646 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33738_33820 = state_33736__$1;
(statearr_33738_33820[(2)] = inst_33646);

(statearr_33738_33820[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (20))){
var inst_33658 = (state_33736[(7)]);
var state_33736__$1 = state_33736;
var statearr_33739_33821 = state_33736__$1;
(statearr_33739_33821[(2)] = inst_33658);

(statearr_33739_33821[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (27))){
var state_33736__$1 = state_33736;
var statearr_33740_33822 = state_33736__$1;
(statearr_33740_33822[(2)] = null);

(statearr_33740_33822[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (1))){
var inst_33633 = (state_33736[(8)]);
var inst_33633__$1 = calc_state();
var inst_33635 = (inst_33633__$1 == null);
var inst_33636 = cljs.core.not(inst_33635);
var state_33736__$1 = (function (){var statearr_33741 = state_33736;
(statearr_33741[(8)] = inst_33633__$1);

return statearr_33741;
})();
if(inst_33636){
var statearr_33742_33823 = state_33736__$1;
(statearr_33742_33823[(1)] = (2));

} else {
var statearr_33743_33824 = state_33736__$1;
(statearr_33743_33824[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (24))){
var inst_33708 = (state_33736[(9)]);
var inst_33682 = (state_33736[(10)]);
var inst_33691 = (state_33736[(11)]);
var inst_33708__$1 = (inst_33682.cljs$core$IFn$_invoke$arity$1 ? inst_33682.cljs$core$IFn$_invoke$arity$1(inst_33691) : inst_33682.call(null,inst_33691));
var state_33736__$1 = (function (){var statearr_33744 = state_33736;
(statearr_33744[(9)] = inst_33708__$1);

return statearr_33744;
})();
if(cljs.core.truth_(inst_33708__$1)){
var statearr_33745_33825 = state_33736__$1;
(statearr_33745_33825[(1)] = (29));

} else {
var statearr_33746_33826 = state_33736__$1;
(statearr_33746_33826[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (4))){
var inst_33649 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33649)){
var statearr_33747_33827 = state_33736__$1;
(statearr_33747_33827[(1)] = (8));

} else {
var statearr_33748_33828 = state_33736__$1;
(statearr_33748_33828[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (15))){
var inst_33676 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33676)){
var statearr_33749_33830 = state_33736__$1;
(statearr_33749_33830[(1)] = (19));

} else {
var statearr_33750_33831 = state_33736__$1;
(statearr_33750_33831[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (21))){
var inst_33681 = (state_33736[(12)]);
var inst_33681__$1 = (state_33736[(2)]);
var inst_33682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33681__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33681__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33681__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33736__$1 = (function (){var statearr_33751 = state_33736;
(statearr_33751[(12)] = inst_33681__$1);

(statearr_33751[(10)] = inst_33682);

(statearr_33751[(13)] = inst_33683);

return statearr_33751;
})();
return cljs.core.async.ioc_alts_BANG_(state_33736__$1,(22),inst_33684);
} else {
if((state_val_33737 === (31))){
var inst_33718 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33718)){
var statearr_33752_33833 = state_33736__$1;
(statearr_33752_33833[(1)] = (32));

} else {
var statearr_33753_33834 = state_33736__$1;
(statearr_33753_33834[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (32))){
var inst_33690 = (state_33736[(14)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33736__$1,(35),out,inst_33690);
} else {
if((state_val_33737 === (33))){
var inst_33681 = (state_33736[(12)]);
var inst_33658 = inst_33681;
var state_33736__$1 = (function (){var statearr_33754 = state_33736;
(statearr_33754[(7)] = inst_33658);

return statearr_33754;
})();
var statearr_33755_33835 = state_33736__$1;
(statearr_33755_33835[(2)] = null);

(statearr_33755_33835[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (13))){
var inst_33658 = (state_33736[(7)]);
var inst_33665 = inst_33658.cljs$lang$protocol_mask$partition0$;
var inst_33666 = (inst_33665 & (64));
var inst_33667 = inst_33658.cljs$core$ISeq$;
var inst_33668 = (cljs.core.PROTOCOL_SENTINEL === inst_33667);
var inst_33669 = (inst_33666) || (inst_33668);
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33669)){
var statearr_33756_33838 = state_33736__$1;
(statearr_33756_33838[(1)] = (16));

} else {
var statearr_33757_33839 = state_33736__$1;
(statearr_33757_33839[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (22))){
var inst_33691 = (state_33736[(11)]);
var inst_33690 = (state_33736[(14)]);
var inst_33689 = (state_33736[(2)]);
var inst_33690__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33689,(0),null);
var inst_33691__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33689,(1),null);
var inst_33693 = (inst_33690__$1 == null);
var inst_33694 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33691__$1,change);
var inst_33695 = (inst_33693) || (inst_33694);
var state_33736__$1 = (function (){var statearr_33758 = state_33736;
(statearr_33758[(11)] = inst_33691__$1);

(statearr_33758[(14)] = inst_33690__$1);

return statearr_33758;
})();
if(cljs.core.truth_(inst_33695)){
var statearr_33759_33841 = state_33736__$1;
(statearr_33759_33841[(1)] = (23));

} else {
var statearr_33760_33844 = state_33736__$1;
(statearr_33760_33844[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (36))){
var inst_33681 = (state_33736[(12)]);
var inst_33658 = inst_33681;
var state_33736__$1 = (function (){var statearr_33761 = state_33736;
(statearr_33761[(7)] = inst_33658);

return statearr_33761;
})();
var statearr_33762_33845 = state_33736__$1;
(statearr_33762_33845[(2)] = null);

(statearr_33762_33845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (29))){
var inst_33708 = (state_33736[(9)]);
var state_33736__$1 = state_33736;
var statearr_33763_33847 = state_33736__$1;
(statearr_33763_33847[(2)] = inst_33708);

(statearr_33763_33847[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (6))){
var state_33736__$1 = state_33736;
var statearr_33764_33848 = state_33736__$1;
(statearr_33764_33848[(2)] = false);

(statearr_33764_33848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (28))){
var inst_33704 = (state_33736[(2)]);
var inst_33705 = calc_state();
var inst_33658 = inst_33705;
var state_33736__$1 = (function (){var statearr_33765 = state_33736;
(statearr_33765[(15)] = inst_33704);

(statearr_33765[(7)] = inst_33658);

return statearr_33765;
})();
var statearr_33766_33849 = state_33736__$1;
(statearr_33766_33849[(2)] = null);

(statearr_33766_33849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (25))){
var inst_33732 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33767_33850 = state_33736__$1;
(statearr_33767_33850[(2)] = inst_33732);

(statearr_33767_33850[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (34))){
var inst_33730 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33768_33851 = state_33736__$1;
(statearr_33768_33851[(2)] = inst_33730);

(statearr_33768_33851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (17))){
var state_33736__$1 = state_33736;
var statearr_33769_33852 = state_33736__$1;
(statearr_33769_33852[(2)] = false);

(statearr_33769_33852[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (3))){
var state_33736__$1 = state_33736;
var statearr_33770_33854 = state_33736__$1;
(statearr_33770_33854[(2)] = false);

(statearr_33770_33854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (12))){
var inst_33734 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33736__$1,inst_33734);
} else {
if((state_val_33737 === (2))){
var inst_33633 = (state_33736[(8)]);
var inst_33638 = inst_33633.cljs$lang$protocol_mask$partition0$;
var inst_33639 = (inst_33638 & (64));
var inst_33640 = inst_33633.cljs$core$ISeq$;
var inst_33641 = (cljs.core.PROTOCOL_SENTINEL === inst_33640);
var inst_33642 = (inst_33639) || (inst_33641);
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33642)){
var statearr_33771_33857 = state_33736__$1;
(statearr_33771_33857[(1)] = (5));

} else {
var statearr_33772_33858 = state_33736__$1;
(statearr_33772_33858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (23))){
var inst_33690 = (state_33736[(14)]);
var inst_33697 = (inst_33690 == null);
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33697)){
var statearr_33773_33862 = state_33736__$1;
(statearr_33773_33862[(1)] = (26));

} else {
var statearr_33774_33863 = state_33736__$1;
(statearr_33774_33863[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (35))){
var inst_33721 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
if(cljs.core.truth_(inst_33721)){
var statearr_33775_33866 = state_33736__$1;
(statearr_33775_33866[(1)] = (36));

} else {
var statearr_33776_33867 = state_33736__$1;
(statearr_33776_33867[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (19))){
var inst_33658 = (state_33736[(7)]);
var inst_33678 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33658);
var state_33736__$1 = state_33736;
var statearr_33777_33868 = state_33736__$1;
(statearr_33777_33868[(2)] = inst_33678);

(statearr_33777_33868[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (11))){
var inst_33658 = (state_33736[(7)]);
var inst_33662 = (inst_33658 == null);
var inst_33663 = cljs.core.not(inst_33662);
var state_33736__$1 = state_33736;
if(inst_33663){
var statearr_33778_33872 = state_33736__$1;
(statearr_33778_33872[(1)] = (13));

} else {
var statearr_33779_33873 = state_33736__$1;
(statearr_33779_33873[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (9))){
var inst_33633 = (state_33736[(8)]);
var state_33736__$1 = state_33736;
var statearr_33780_33874 = state_33736__$1;
(statearr_33780_33874[(2)] = inst_33633);

(statearr_33780_33874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (5))){
var state_33736__$1 = state_33736;
var statearr_33781_33875 = state_33736__$1;
(statearr_33781_33875[(2)] = true);

(statearr_33781_33875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (14))){
var state_33736__$1 = state_33736;
var statearr_33782_33876 = state_33736__$1;
(statearr_33782_33876[(2)] = false);

(statearr_33782_33876[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (26))){
var inst_33691 = (state_33736[(11)]);
var inst_33701 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33691);
var state_33736__$1 = state_33736;
var statearr_33783_33877 = state_33736__$1;
(statearr_33783_33877[(2)] = inst_33701);

(statearr_33783_33877[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (16))){
var state_33736__$1 = state_33736;
var statearr_33787_33878 = state_33736__$1;
(statearr_33787_33878[(2)] = true);

(statearr_33787_33878[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (38))){
var inst_33726 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33788_33879 = state_33736__$1;
(statearr_33788_33879[(2)] = inst_33726);

(statearr_33788_33879[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (30))){
var inst_33682 = (state_33736[(10)]);
var inst_33691 = (state_33736[(11)]);
var inst_33683 = (state_33736[(13)]);
var inst_33711 = cljs.core.empty_QMARK_(inst_33682);
var inst_33714 = (inst_33683.cljs$core$IFn$_invoke$arity$1 ? inst_33683.cljs$core$IFn$_invoke$arity$1(inst_33691) : inst_33683.call(null,inst_33691));
var inst_33715 = cljs.core.not(inst_33714);
var inst_33716 = (inst_33711) && (inst_33715);
var state_33736__$1 = state_33736;
var statearr_33789_33884 = state_33736__$1;
(statearr_33789_33884[(2)] = inst_33716);

(statearr_33789_33884[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (10))){
var inst_33633 = (state_33736[(8)]);
var inst_33654 = (state_33736[(2)]);
var inst_33655 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33654,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33656 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33654,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33654,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33658 = inst_33633;
var state_33736__$1 = (function (){var statearr_33791 = state_33736;
(statearr_33791[(16)] = inst_33656);

(statearr_33791[(17)] = inst_33655);

(statearr_33791[(7)] = inst_33658);

(statearr_33791[(18)] = inst_33657);

return statearr_33791;
})();
var statearr_33792_33885 = state_33736__$1;
(statearr_33792_33885[(2)] = null);

(statearr_33792_33885[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (18))){
var inst_33673 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33794_33886 = state_33736__$1;
(statearr_33794_33886[(2)] = inst_33673);

(statearr_33794_33886[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (37))){
var state_33736__$1 = state_33736;
var statearr_33795_33888 = state_33736__$1;
(statearr_33795_33888[(2)] = null);

(statearr_33795_33888[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (8))){
var inst_33633 = (state_33736[(8)]);
var inst_33651 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33633);
var state_33736__$1 = state_33736;
var statearr_33796_33889 = state_33736__$1;
(statearr_33796_33889[(2)] = inst_33651);

(statearr_33796_33889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___33819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32260__auto__,c__32469__auto___33819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32261__auto__ = null;
var cljs$core$async$mix_$_state_machine__32261__auto____0 = (function (){
var statearr_33797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33797[(0)] = cljs$core$async$mix_$_state_machine__32261__auto__);

(statearr_33797[(1)] = (1));

return statearr_33797;
});
var cljs$core$async$mix_$_state_machine__32261__auto____1 = (function (state_33736){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_33736);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e33798){if((e33798 instanceof Object)){
var ex__32264__auto__ = e33798;
var statearr_33805_33890 = state_33736;
(statearr_33805_33890[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33798;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33891 = state_33736;
state_33736 = G__33891;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32261__auto__ = function(state_33736){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32261__auto____1.call(this,state_33736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32261__auto____0;
cljs$core$async$mix_$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32261__auto____1;
return cljs$core$async$mix_$_state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___33819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32471__auto__ = (function (){var statearr_33806 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_33806[(6)] = c__32469__auto___33819);

return statearr_33806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___33819,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5860__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5860__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5860__auto____$1.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5860__auto__.call(null,p,v,ch));
} else {
var m__5860__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5860__auto____$1.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33893 = arguments.length;
switch (G__33893) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5860__auto__.call(null,p));
} else {
var m__5860__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$1(p) : m__5860__auto____$1.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5859__auto__ = (((p == null))?null:p);
var m__5860__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5859__auto__)]);
if(!((m__5860__auto__ == null))){
return (m__5860__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5860__auto__.call(null,p,v));
} else {
var m__5860__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5860__auto____$1 == null))){
return (m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5860__auto____$1.cljs$core$IFn$_invoke$arity$2(p,v) : m__5860__auto____$1.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33907 = arguments.length;
switch (G__33907) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5126__auto__)){
return or__5126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__5126__auto__,mults){
return (function (p1__33905_SHARP_){
if(cljs.core.truth_((p1__33905_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33905_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33905_SHARP_.call(null,topic)))){
return p1__33905_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33905_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__5126__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33914 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33915){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33915 = meta33915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33916,meta33915__$1){
var self__ = this;
var _33916__$1 = this;
return (new cljs.core.async.t_cljs$core$async33914(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33915__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33916){
var self__ = this;
var _33916__$1 = this;
return self__.meta33915;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33914.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33914.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33915","meta33915",-1662162660,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33914";

cljs.core.async.t_cljs$core$async33914.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async33914");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33914 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33914(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33915){
return (new cljs.core.async.t_cljs$core$async33914(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33915));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33914(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32469__auto___34070 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___34070,mults,ensure_mult,p){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___34070,mults,ensure_mult,p){
return (function (state_33990){
var state_val_33991 = (state_33990[(1)]);
if((state_val_33991 === (7))){
var inst_33986 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_33992_34071 = state_33990__$1;
(statearr_33992_34071[(2)] = inst_33986);

(statearr_33992_34071[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (20))){
var state_33990__$1 = state_33990;
var statearr_33993_34072 = state_33990__$1;
(statearr_33993_34072[(2)] = null);

(statearr_33993_34072[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (1))){
var state_33990__$1 = state_33990;
var statearr_33994_34073 = state_33990__$1;
(statearr_33994_34073[(2)] = null);

(statearr_33994_34073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (24))){
var inst_33969 = (state_33990[(7)]);
var inst_33978 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33969);
var state_33990__$1 = state_33990;
var statearr_33995_34074 = state_33990__$1;
(statearr_33995_34074[(2)] = inst_33978);

(statearr_33995_34074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (4))){
var inst_33921 = (state_33990[(8)]);
var inst_33921__$1 = (state_33990[(2)]);
var inst_33922 = (inst_33921__$1 == null);
var state_33990__$1 = (function (){var statearr_33996 = state_33990;
(statearr_33996[(8)] = inst_33921__$1);

return statearr_33996;
})();
if(cljs.core.truth_(inst_33922)){
var statearr_33997_34082 = state_33990__$1;
(statearr_33997_34082[(1)] = (5));

} else {
var statearr_33998_34083 = state_33990__$1;
(statearr_33998_34083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (15))){
var inst_33963 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_34000_34084 = state_33990__$1;
(statearr_34000_34084[(2)] = inst_33963);

(statearr_34000_34084[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (21))){
var inst_33983 = (state_33990[(2)]);
var state_33990__$1 = (function (){var statearr_34007 = state_33990;
(statearr_34007[(9)] = inst_33983);

return statearr_34007;
})();
var statearr_34008_34087 = state_33990__$1;
(statearr_34008_34087[(2)] = null);

(statearr_34008_34087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (13))){
var inst_33945 = (state_33990[(10)]);
var inst_33947 = cljs.core.chunked_seq_QMARK_(inst_33945);
var state_33990__$1 = state_33990;
if(inst_33947){
var statearr_34009_34088 = state_33990__$1;
(statearr_34009_34088[(1)] = (16));

} else {
var statearr_34010_34089 = state_33990__$1;
(statearr_34010_34089[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (22))){
var inst_33975 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
if(cljs.core.truth_(inst_33975)){
var statearr_34011_34090 = state_33990__$1;
(statearr_34011_34090[(1)] = (23));

} else {
var statearr_34012_34091 = state_33990__$1;
(statearr_34012_34091[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (6))){
var inst_33971 = (state_33990[(11)]);
var inst_33921 = (state_33990[(8)]);
var inst_33969 = (state_33990[(7)]);
var inst_33969__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33921) : topic_fn.call(null,inst_33921));
var inst_33970 = cljs.core.deref(mults);
var inst_33971__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33970,inst_33969__$1);
var state_33990__$1 = (function (){var statearr_34013 = state_33990;
(statearr_34013[(11)] = inst_33971__$1);

(statearr_34013[(7)] = inst_33969__$1);

return statearr_34013;
})();
if(cljs.core.truth_(inst_33971__$1)){
var statearr_34014_34092 = state_33990__$1;
(statearr_34014_34092[(1)] = (19));

} else {
var statearr_34015_34093 = state_33990__$1;
(statearr_34015_34093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (25))){
var inst_33980 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_34016_34094 = state_33990__$1;
(statearr_34016_34094[(2)] = inst_33980);

(statearr_34016_34094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (17))){
var inst_33945 = (state_33990[(10)]);
var inst_33954 = cljs.core.first(inst_33945);
var inst_33955 = cljs.core.async.muxch_STAR_(inst_33954);
var inst_33956 = cljs.core.async.close_BANG_(inst_33955);
var inst_33957 = cljs.core.next(inst_33945);
var inst_33931 = inst_33957;
var inst_33932 = null;
var inst_33933 = (0);
var inst_33934 = (0);
var state_33990__$1 = (function (){var statearr_34017 = state_33990;
(statearr_34017[(12)] = inst_33931);

(statearr_34017[(13)] = inst_33956);

(statearr_34017[(14)] = inst_33932);

(statearr_34017[(15)] = inst_33934);

(statearr_34017[(16)] = inst_33933);

return statearr_34017;
})();
var statearr_34024_34095 = state_33990__$1;
(statearr_34024_34095[(2)] = null);

(statearr_34024_34095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (3))){
var inst_33988 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33990__$1,inst_33988);
} else {
if((state_val_33991 === (12))){
var inst_33965 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_34032_34096 = state_33990__$1;
(statearr_34032_34096[(2)] = inst_33965);

(statearr_34032_34096[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (2))){
var state_33990__$1 = state_33990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33990__$1,(4),ch);
} else {
if((state_val_33991 === (23))){
var state_33990__$1 = state_33990;
var statearr_34033_34097 = state_33990__$1;
(statearr_34033_34097[(2)] = null);

(statearr_34033_34097[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (19))){
var inst_33971 = (state_33990[(11)]);
var inst_33921 = (state_33990[(8)]);
var inst_33973 = cljs.core.async.muxch_STAR_(inst_33971);
var state_33990__$1 = state_33990;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33990__$1,(22),inst_33973,inst_33921);
} else {
if((state_val_33991 === (11))){
var inst_33931 = (state_33990[(12)]);
var inst_33945 = (state_33990[(10)]);
var inst_33945__$1 = cljs.core.seq(inst_33931);
var state_33990__$1 = (function (){var statearr_34034 = state_33990;
(statearr_34034[(10)] = inst_33945__$1);

return statearr_34034;
})();
if(inst_33945__$1){
var statearr_34035_34098 = state_33990__$1;
(statearr_34035_34098[(1)] = (13));

} else {
var statearr_34036_34099 = state_33990__$1;
(statearr_34036_34099[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (9))){
var inst_33967 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_34037_34100 = state_33990__$1;
(statearr_34037_34100[(2)] = inst_33967);

(statearr_34037_34100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (5))){
var inst_33928 = cljs.core.deref(mults);
var inst_33929 = cljs.core.vals(inst_33928);
var inst_33930 = cljs.core.seq(inst_33929);
var inst_33931 = inst_33930;
var inst_33932 = null;
var inst_33933 = (0);
var inst_33934 = (0);
var state_33990__$1 = (function (){var statearr_34038 = state_33990;
(statearr_34038[(12)] = inst_33931);

(statearr_34038[(14)] = inst_33932);

(statearr_34038[(15)] = inst_33934);

(statearr_34038[(16)] = inst_33933);

return statearr_34038;
})();
var statearr_34039_34101 = state_33990__$1;
(statearr_34039_34101[(2)] = null);

(statearr_34039_34101[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (14))){
var state_33990__$1 = state_33990;
var statearr_34043_34102 = state_33990__$1;
(statearr_34043_34102[(2)] = null);

(statearr_34043_34102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (16))){
var inst_33945 = (state_33990[(10)]);
var inst_33949 = cljs.core.chunk_first(inst_33945);
var inst_33950 = cljs.core.chunk_rest(inst_33945);
var inst_33951 = cljs.core.count(inst_33949);
var inst_33931 = inst_33950;
var inst_33932 = inst_33949;
var inst_33933 = inst_33951;
var inst_33934 = (0);
var state_33990__$1 = (function (){var statearr_34044 = state_33990;
(statearr_34044[(12)] = inst_33931);

(statearr_34044[(14)] = inst_33932);

(statearr_34044[(15)] = inst_33934);

(statearr_34044[(16)] = inst_33933);

return statearr_34044;
})();
var statearr_34045_34103 = state_33990__$1;
(statearr_34045_34103[(2)] = null);

(statearr_34045_34103[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (10))){
var inst_33931 = (state_33990[(12)]);
var inst_33932 = (state_33990[(14)]);
var inst_33934 = (state_33990[(15)]);
var inst_33933 = (state_33990[(16)]);
var inst_33939 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_33932,inst_33934);
var inst_33940 = cljs.core.async.muxch_STAR_(inst_33939);
var inst_33941 = cljs.core.async.close_BANG_(inst_33940);
var inst_33942 = (inst_33934 + (1));
var tmp34040 = inst_33931;
var tmp34041 = inst_33932;
var tmp34042 = inst_33933;
var inst_33931__$1 = tmp34040;
var inst_33932__$1 = tmp34041;
var inst_33933__$1 = tmp34042;
var inst_33934__$1 = inst_33942;
var state_33990__$1 = (function (){var statearr_34050 = state_33990;
(statearr_34050[(12)] = inst_33931__$1);

(statearr_34050[(17)] = inst_33941);

(statearr_34050[(14)] = inst_33932__$1);

(statearr_34050[(15)] = inst_33934__$1);

(statearr_34050[(16)] = inst_33933__$1);

return statearr_34050;
})();
var statearr_34051_34104 = state_33990__$1;
(statearr_34051_34104[(2)] = null);

(statearr_34051_34104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (18))){
var inst_33960 = (state_33990[(2)]);
var state_33990__$1 = state_33990;
var statearr_34052_34111 = state_33990__$1;
(statearr_34052_34111[(2)] = inst_33960);

(statearr_34052_34111[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33991 === (8))){
var inst_33934 = (state_33990[(15)]);
var inst_33933 = (state_33990[(16)]);
var inst_33936 = (inst_33934 < inst_33933);
var inst_33937 = inst_33936;
var state_33990__$1 = state_33990;
if(cljs.core.truth_(inst_33937)){
var statearr_34055_34117 = state_33990__$1;
(statearr_34055_34117[(1)] = (10));

} else {
var statearr_34058_34118 = state_33990__$1;
(statearr_34058_34118[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___34070,mults,ensure_mult,p))
;
return ((function (switch__32260__auto__,c__32469__auto___34070,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32261__auto__ = null;
var cljs$core$async$state_machine__32261__auto____0 = (function (){
var statearr_34062 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34062[(0)] = cljs$core$async$state_machine__32261__auto__);

(statearr_34062[(1)] = (1));

return statearr_34062;
});
var cljs$core$async$state_machine__32261__auto____1 = (function (state_33990){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_33990);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e34063){if((e34063 instanceof Object)){
var ex__32264__auto__ = e34063;
var statearr_34064_34119 = state_33990;
(statearr_34064_34119[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34063;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34120 = state_33990;
state_33990 = G__34120;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$state_machine__32261__auto__ = function(state_33990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32261__auto____1.call(this,state_33990);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32261__auto____0;
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32261__auto____1;
return cljs$core$async$state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___34070,mults,ensure_mult,p))
})();
var state__32471__auto__ = (function (){var statearr_34065 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_34065[(6)] = c__32469__auto___34070);

return statearr_34065;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___34070,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34122 = arguments.length;
switch (G__34122) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34129 = arguments.length;
switch (G__34129) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34132 = arguments.length;
switch (G__34132) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32469__auto___34212 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___34212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___34212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34175){
var state_val_34176 = (state_34175[(1)]);
if((state_val_34176 === (7))){
var state_34175__$1 = state_34175;
var statearr_34177_34213 = state_34175__$1;
(statearr_34177_34213[(2)] = null);

(statearr_34177_34213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (1))){
var state_34175__$1 = state_34175;
var statearr_34178_34214 = state_34175__$1;
(statearr_34178_34214[(2)] = null);

(statearr_34178_34214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (4))){
var inst_34139 = (state_34175[(7)]);
var inst_34141 = (inst_34139 < cnt);
var state_34175__$1 = state_34175;
if(cljs.core.truth_(inst_34141)){
var statearr_34179_34215 = state_34175__$1;
(statearr_34179_34215[(1)] = (6));

} else {
var statearr_34180_34216 = state_34175__$1;
(statearr_34180_34216[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (15))){
var inst_34171 = (state_34175[(2)]);
var state_34175__$1 = state_34175;
var statearr_34181_34217 = state_34175__$1;
(statearr_34181_34217[(2)] = inst_34171);

(statearr_34181_34217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (13))){
var inst_34164 = cljs.core.async.close_BANG_(out);
var state_34175__$1 = state_34175;
var statearr_34182_34218 = state_34175__$1;
(statearr_34182_34218[(2)] = inst_34164);

(statearr_34182_34218[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (6))){
var state_34175__$1 = state_34175;
var statearr_34183_34219 = state_34175__$1;
(statearr_34183_34219[(2)] = null);

(statearr_34183_34219[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (3))){
var inst_34173 = (state_34175[(2)]);
var state_34175__$1 = state_34175;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34175__$1,inst_34173);
} else {
if((state_val_34176 === (12))){
var inst_34161 = (state_34175[(8)]);
var inst_34161__$1 = (state_34175[(2)]);
var inst_34162 = cljs.core.some(cljs.core.nil_QMARK_,inst_34161__$1);
var state_34175__$1 = (function (){var statearr_34192 = state_34175;
(statearr_34192[(8)] = inst_34161__$1);

return statearr_34192;
})();
if(cljs.core.truth_(inst_34162)){
var statearr_34193_34221 = state_34175__$1;
(statearr_34193_34221[(1)] = (13));

} else {
var statearr_34194_34222 = state_34175__$1;
(statearr_34194_34222[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (2))){
var inst_34138 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34139 = (0);
var state_34175__$1 = (function (){var statearr_34195 = state_34175;
(statearr_34195[(7)] = inst_34139);

(statearr_34195[(9)] = inst_34138);

return statearr_34195;
})();
var statearr_34196_34223 = state_34175__$1;
(statearr_34196_34223[(2)] = null);

(statearr_34196_34223[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (11))){
var inst_34139 = (state_34175[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34175,(10),Object,null,(9));
var inst_34148 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34139) : chs__$1.call(null,inst_34139));
var inst_34149 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34139) : done.call(null,inst_34139));
var inst_34150 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34148,inst_34149);
var state_34175__$1 = state_34175;
var statearr_34197_34224 = state_34175__$1;
(statearr_34197_34224[(2)] = inst_34150);


cljs.core.async.impl.ioc_helpers.process_exception(state_34175__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (9))){
var inst_34139 = (state_34175[(7)]);
var inst_34152 = (state_34175[(2)]);
var inst_34153 = (inst_34139 + (1));
var inst_34139__$1 = inst_34153;
var state_34175__$1 = (function (){var statearr_34199 = state_34175;
(statearr_34199[(10)] = inst_34152);

(statearr_34199[(7)] = inst_34139__$1);

return statearr_34199;
})();
var statearr_34200_34225 = state_34175__$1;
(statearr_34200_34225[(2)] = null);

(statearr_34200_34225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (5))){
var inst_34159 = (state_34175[(2)]);
var state_34175__$1 = (function (){var statearr_34201 = state_34175;
(statearr_34201[(11)] = inst_34159);

return statearr_34201;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34175__$1,(12),dchan);
} else {
if((state_val_34176 === (14))){
var inst_34161 = (state_34175[(8)]);
var inst_34166 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34161);
var state_34175__$1 = state_34175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34175__$1,(16),out,inst_34166);
} else {
if((state_val_34176 === (16))){
var inst_34168 = (state_34175[(2)]);
var state_34175__$1 = (function (){var statearr_34202 = state_34175;
(statearr_34202[(12)] = inst_34168);

return statearr_34202;
})();
var statearr_34203_34228 = state_34175__$1;
(statearr_34203_34228[(2)] = null);

(statearr_34203_34228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (10))){
var inst_34143 = (state_34175[(2)]);
var inst_34144 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34175__$1 = (function (){var statearr_34204 = state_34175;
(statearr_34204[(13)] = inst_34143);

return statearr_34204;
})();
var statearr_34205_34229 = state_34175__$1;
(statearr_34205_34229[(2)] = inst_34144);


cljs.core.async.impl.ioc_helpers.process_exception(state_34175__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34176 === (8))){
var inst_34157 = (state_34175[(2)]);
var state_34175__$1 = state_34175;
var statearr_34206_34230 = state_34175__$1;
(statearr_34206_34230[(2)] = inst_34157);

(statearr_34206_34230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___34212,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32260__auto__,c__32469__auto___34212,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32261__auto__ = null;
var cljs$core$async$state_machine__32261__auto____0 = (function (){
var statearr_34207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34207[(0)] = cljs$core$async$state_machine__32261__auto__);

(statearr_34207[(1)] = (1));

return statearr_34207;
});
var cljs$core$async$state_machine__32261__auto____1 = (function (state_34175){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_34175);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e34208){if((e34208 instanceof Object)){
var ex__32264__auto__ = e34208;
var statearr_34209_34231 = state_34175;
(statearr_34209_34231[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34208;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34232 = state_34175;
state_34175 = G__34232;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$state_machine__32261__auto__ = function(state_34175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32261__auto____1.call(this,state_34175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32261__auto____0;
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32261__auto____1;
return cljs$core$async$state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___34212,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32471__auto__ = (function (){var statearr_34210 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_34210[(6)] = c__32469__auto___34212);

return statearr_34210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___34212,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34235 = arguments.length;
switch (G__34235) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32469__auto___34296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___34296,out){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___34296,out){
return (function (state_34269){
var state_val_34270 = (state_34269[(1)]);
if((state_val_34270 === (7))){
var inst_34248 = (state_34269[(7)]);
var inst_34247 = (state_34269[(8)]);
var inst_34247__$1 = (state_34269[(2)]);
var inst_34248__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34247__$1,(0),null);
var inst_34249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34247__$1,(1),null);
var inst_34250 = (inst_34248__$1 == null);
var state_34269__$1 = (function (){var statearr_34272 = state_34269;
(statearr_34272[(7)] = inst_34248__$1);

(statearr_34272[(9)] = inst_34249);

(statearr_34272[(8)] = inst_34247__$1);

return statearr_34272;
})();
if(cljs.core.truth_(inst_34250)){
var statearr_34273_34297 = state_34269__$1;
(statearr_34273_34297[(1)] = (8));

} else {
var statearr_34274_34298 = state_34269__$1;
(statearr_34274_34298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (1))){
var inst_34236 = cljs.core.vec(chs);
var inst_34237 = inst_34236;
var state_34269__$1 = (function (){var statearr_34275 = state_34269;
(statearr_34275[(10)] = inst_34237);

return statearr_34275;
})();
var statearr_34276_34299 = state_34269__$1;
(statearr_34276_34299[(2)] = null);

(statearr_34276_34299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (4))){
var inst_34237 = (state_34269[(10)]);
var state_34269__$1 = state_34269;
return cljs.core.async.ioc_alts_BANG_(state_34269__$1,(7),inst_34237);
} else {
if((state_val_34270 === (6))){
var inst_34265 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34277_34300 = state_34269__$1;
(statearr_34277_34300[(2)] = inst_34265);

(statearr_34277_34300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (3))){
var inst_34267 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34269__$1,inst_34267);
} else {
if((state_val_34270 === (2))){
var inst_34237 = (state_34269[(10)]);
var inst_34240 = cljs.core.count(inst_34237);
var inst_34241 = (inst_34240 > (0));
var state_34269__$1 = state_34269;
if(cljs.core.truth_(inst_34241)){
var statearr_34279_34301 = state_34269__$1;
(statearr_34279_34301[(1)] = (4));

} else {
var statearr_34280_34302 = state_34269__$1;
(statearr_34280_34302[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (11))){
var inst_34237 = (state_34269[(10)]);
var inst_34258 = (state_34269[(2)]);
var tmp34278 = inst_34237;
var inst_34237__$1 = tmp34278;
var state_34269__$1 = (function (){var statearr_34281 = state_34269;
(statearr_34281[(11)] = inst_34258);

(statearr_34281[(10)] = inst_34237__$1);

return statearr_34281;
})();
var statearr_34283_34303 = state_34269__$1;
(statearr_34283_34303[(2)] = null);

(statearr_34283_34303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (9))){
var inst_34248 = (state_34269[(7)]);
var state_34269__$1 = state_34269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34269__$1,(11),out,inst_34248);
} else {
if((state_val_34270 === (5))){
var inst_34263 = cljs.core.async.close_BANG_(out);
var state_34269__$1 = state_34269;
var statearr_34284_34304 = state_34269__$1;
(statearr_34284_34304[(2)] = inst_34263);

(statearr_34284_34304[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (10))){
var inst_34261 = (state_34269[(2)]);
var state_34269__$1 = state_34269;
var statearr_34285_34305 = state_34269__$1;
(statearr_34285_34305[(2)] = inst_34261);

(statearr_34285_34305[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34270 === (8))){
var inst_34248 = (state_34269[(7)]);
var inst_34249 = (state_34269[(9)]);
var inst_34247 = (state_34269[(8)]);
var inst_34237 = (state_34269[(10)]);
var inst_34253 = (function (){var cs = inst_34237;
var vec__34243 = inst_34247;
var v = inst_34248;
var c = inst_34249;
return ((function (cs,vec__34243,v,c,inst_34248,inst_34249,inst_34247,inst_34237,state_val_34270,c__32469__auto___34296,out){
return (function (p1__34233_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34233_SHARP_);
});
;})(cs,vec__34243,v,c,inst_34248,inst_34249,inst_34247,inst_34237,state_val_34270,c__32469__auto___34296,out))
})();
var inst_34254 = cljs.core.filterv(inst_34253,inst_34237);
var inst_34237__$1 = inst_34254;
var state_34269__$1 = (function (){var statearr_34286 = state_34269;
(statearr_34286[(10)] = inst_34237__$1);

return statearr_34286;
})();
var statearr_34287_34306 = state_34269__$1;
(statearr_34287_34306[(2)] = null);

(statearr_34287_34306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___34296,out))
;
return ((function (switch__32260__auto__,c__32469__auto___34296,out){
return (function() {
var cljs$core$async$state_machine__32261__auto__ = null;
var cljs$core$async$state_machine__32261__auto____0 = (function (){
var statearr_34288 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34288[(0)] = cljs$core$async$state_machine__32261__auto__);

(statearr_34288[(1)] = (1));

return statearr_34288;
});
var cljs$core$async$state_machine__32261__auto____1 = (function (state_34269){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_34269);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e34289){if((e34289 instanceof Object)){
var ex__32264__auto__ = e34289;
var statearr_34291_34307 = state_34269;
(statearr_34291_34307[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34289;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34308 = state_34269;
state_34269 = G__34308;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$state_machine__32261__auto__ = function(state_34269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32261__auto____1.call(this,state_34269);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32261__auto____0;
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32261__auto____1;
return cljs$core$async$state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___34296,out))
})();
var state__32471__auto__ = (function (){var statearr_34294 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_34294[(6)] = c__32469__auto___34296);

return statearr_34294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___34296,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34310 = arguments.length;
switch (G__34310) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32469__auto___34362 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___34362,out){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___34362,out){
return (function (state_34336){
var state_val_34337 = (state_34336[(1)]);
if((state_val_34337 === (7))){
var inst_34318 = (state_34336[(7)]);
var inst_34318__$1 = (state_34336[(2)]);
var inst_34319 = (inst_34318__$1 == null);
var inst_34320 = cljs.core.not(inst_34319);
var state_34336__$1 = (function (){var statearr_34338 = state_34336;
(statearr_34338[(7)] = inst_34318__$1);

return statearr_34338;
})();
if(inst_34320){
var statearr_34340_34363 = state_34336__$1;
(statearr_34340_34363[(1)] = (8));

} else {
var statearr_34341_34364 = state_34336__$1;
(statearr_34341_34364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34337 === (1))){
var inst_34312 = (0);
var state_34336__$1 = (function (){var statearr_34342 = state_34336;
(statearr_34342[(8)] = inst_34312);

return statearr_34342;
})();
var statearr_34343_34365 = state_34336__$1;
(statearr_34343_34365[(2)] = null);

(statearr_34343_34365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34337 === (4))){
var state_34336__$1 = state_34336;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34336__$1,(7),ch);
} else {
if((state_val_34337 === (6))){
var inst_34331 = (state_34336[(2)]);
var state_34336__$1 = state_34336;
var statearr_34344_34368 = state_34336__$1;
(statearr_34344_34368[(2)] = inst_34331);

(statearr_34344_34368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34337 === (3))){
var inst_34333 = (state_34336[(2)]);
var inst_34334 = cljs.core.async.close_BANG_(out);
var state_34336__$1 = (function (){var statearr_34346 = state_34336;
(statearr_34346[(9)] = inst_34333);

return statearr_34346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34336__$1,inst_34334);
} else {
if((state_val_34337 === (2))){
var inst_34312 = (state_34336[(8)]);
var inst_34314 = (inst_34312 < n);
var state_34336__$1 = state_34336;
if(cljs.core.truth_(inst_34314)){
var statearr_34347_34370 = state_34336__$1;
(statearr_34347_34370[(1)] = (4));

} else {
var statearr_34348_34371 = state_34336__$1;
(statearr_34348_34371[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34337 === (11))){
var inst_34312 = (state_34336[(8)]);
var inst_34323 = (state_34336[(2)]);
var inst_34324 = (inst_34312 + (1));
var inst_34312__$1 = inst_34324;
var state_34336__$1 = (function (){var statearr_34349 = state_34336;
(statearr_34349[(10)] = inst_34323);

(statearr_34349[(8)] = inst_34312__$1);

return statearr_34349;
})();
var statearr_34350_34372 = state_34336__$1;
(statearr_34350_34372[(2)] = null);

(statearr_34350_34372[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34337 === (9))){
var state_34336__$1 = state_34336;
var statearr_34351_34374 = state_34336__$1;
(statearr_34351_34374[(2)] = null);

(statearr_34351_34374[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34337 === (5))){
var state_34336__$1 = state_34336;
var statearr_34352_34376 = state_34336__$1;
(statearr_34352_34376[(2)] = null);

(statearr_34352_34376[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34337 === (10))){
var inst_34328 = (state_34336[(2)]);
var state_34336__$1 = state_34336;
var statearr_34353_34377 = state_34336__$1;
(statearr_34353_34377[(2)] = inst_34328);

(statearr_34353_34377[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34337 === (8))){
var inst_34318 = (state_34336[(7)]);
var state_34336__$1 = state_34336;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34336__$1,(11),out,inst_34318);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___34362,out))
;
return ((function (switch__32260__auto__,c__32469__auto___34362,out){
return (function() {
var cljs$core$async$state_machine__32261__auto__ = null;
var cljs$core$async$state_machine__32261__auto____0 = (function (){
var statearr_34354 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34354[(0)] = cljs$core$async$state_machine__32261__auto__);

(statearr_34354[(1)] = (1));

return statearr_34354;
});
var cljs$core$async$state_machine__32261__auto____1 = (function (state_34336){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_34336);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e34355){if((e34355 instanceof Object)){
var ex__32264__auto__ = e34355;
var statearr_34356_34378 = state_34336;
(statearr_34356_34378[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34336);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34380 = state_34336;
state_34336 = G__34380;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$state_machine__32261__auto__ = function(state_34336){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32261__auto____1.call(this,state_34336);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32261__auto____0;
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32261__auto____1;
return cljs$core$async$state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___34362,out))
})();
var state__32471__auto__ = (function (){var statearr_34359 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_34359[(6)] = c__32469__auto___34362);

return statearr_34359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___34362,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34382 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34382 = (function (f,ch,meta34383){
this.f = f;
this.ch = ch;
this.meta34383 = meta34383;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34384,meta34383__$1){
var self__ = this;
var _34384__$1 = this;
return (new cljs.core.async.t_cljs$core$async34382(self__.f,self__.ch,meta34383__$1));
});

cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34384){
var self__ = this;
var _34384__$1 = this;
return self__.meta34383;
});

cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34385 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34385 = (function (f,ch,meta34383,_,fn1,meta34386){
this.f = f;
this.ch = ch;
this.meta34383 = meta34383;
this._ = _;
this.fn1 = fn1;
this.meta34386 = meta34386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34387,meta34386__$1){
var self__ = this;
var _34387__$1 = this;
return (new cljs.core.async.t_cljs$core$async34385(self__.f,self__.ch,self__.meta34383,self__._,self__.fn1,meta34386__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34387){
var self__ = this;
var _34387__$1 = this;
return self__.meta34386;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34385.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34381_SHARP_){
var G__34388 = (((p1__34381_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34381_SHARP_) : self__.f.call(null,p1__34381_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34388) : f1.call(null,G__34388));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34385.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34383","meta34383",-1775608819,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34382","cljs.core.async/t_cljs$core$async34382",1236170226,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34386","meta34386",-1998832075,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34385.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34385";

cljs.core.async.t_cljs$core$async34385.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async34385");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34385 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34385(f__$1,ch__$1,meta34383__$1,___$2,fn1__$1,meta34386){
return (new cljs.core.async.t_cljs$core$async34385(f__$1,ch__$1,meta34383__$1,___$2,fn1__$1,meta34386));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34385(self__.f,self__.ch,self__.meta34383,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5114__auto__ = ret;
if(cljs.core.truth_(and__5114__auto__)){
return !((cljs.core.deref(ret) == null));
} else {
return and__5114__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34389 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34389) : self__.f.call(null,G__34389));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34382.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34382.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34383","meta34383",-1775608819,null)], null);
});

cljs.core.async.t_cljs$core$async34382.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34382.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34382";

cljs.core.async.t_cljs$core$async34382.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async34382");
});

cljs.core.async.__GT_t_cljs$core$async34382 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34382(f__$1,ch__$1,meta34383){
return (new cljs.core.async.t_cljs$core$async34382(f__$1,ch__$1,meta34383));
});

}

return (new cljs.core.async.t_cljs$core$async34382(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34390 = (function (f,ch,meta34391){
this.f = f;
this.ch = ch;
this.meta34391 = meta34391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34392,meta34391__$1){
var self__ = this;
var _34392__$1 = this;
return (new cljs.core.async.t_cljs$core$async34390(self__.f,self__.ch,meta34391__$1));
});

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34392){
var self__ = this;
var _34392__$1 = this;
return self__.meta34391;
});

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34391","meta34391",-962299627,null)], null);
});

cljs.core.async.t_cljs$core$async34390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34390";

cljs.core.async.t_cljs$core$async34390.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async34390");
});

cljs.core.async.__GT_t_cljs$core$async34390 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34390(f__$1,ch__$1,meta34391){
return (new cljs.core.async.t_cljs$core$async34390(f__$1,ch__$1,meta34391));
});

}

return (new cljs.core.async.t_cljs$core$async34390(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34393 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34393 = (function (p,ch,meta34394){
this.p = p;
this.ch = ch;
this.meta34394 = meta34394;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34395,meta34394__$1){
var self__ = this;
var _34395__$1 = this;
return (new cljs.core.async.t_cljs$core$async34393(self__.p,self__.ch,meta34394__$1));
});

cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34395){
var self__ = this;
var _34395__$1 = this;
return self__.meta34394;
});

cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34393.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34393.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34394","meta34394",1775188063,null)], null);
});

cljs.core.async.t_cljs$core$async34393.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34393.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34393";

cljs.core.async.t_cljs$core$async34393.cljs$lang$ctorPrWriter = (function (this__5797__auto__,writer__5798__auto__,opt__5799__auto__){
return cljs.core._write(writer__5798__auto__,"cljs.core.async/t_cljs$core$async34393");
});

cljs.core.async.__GT_t_cljs$core$async34393 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34393(p__$1,ch__$1,meta34394){
return (new cljs.core.async.t_cljs$core$async34393(p__$1,ch__$1,meta34394));
});

}

return (new cljs.core.async.t_cljs$core$async34393(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34397 = arguments.length;
switch (G__34397) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32469__auto___34437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___34437,out){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___34437,out){
return (function (state_34418){
var state_val_34419 = (state_34418[(1)]);
if((state_val_34419 === (7))){
var inst_34414 = (state_34418[(2)]);
var state_34418__$1 = state_34418;
var statearr_34420_34438 = state_34418__$1;
(statearr_34420_34438[(2)] = inst_34414);

(statearr_34420_34438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (1))){
var state_34418__$1 = state_34418;
var statearr_34421_34439 = state_34418__$1;
(statearr_34421_34439[(2)] = null);

(statearr_34421_34439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (4))){
var inst_34400 = (state_34418[(7)]);
var inst_34400__$1 = (state_34418[(2)]);
var inst_34401 = (inst_34400__$1 == null);
var state_34418__$1 = (function (){var statearr_34422 = state_34418;
(statearr_34422[(7)] = inst_34400__$1);

return statearr_34422;
})();
if(cljs.core.truth_(inst_34401)){
var statearr_34423_34440 = state_34418__$1;
(statearr_34423_34440[(1)] = (5));

} else {
var statearr_34424_34441 = state_34418__$1;
(statearr_34424_34441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (6))){
var inst_34400 = (state_34418[(7)]);
var inst_34405 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34400) : p.call(null,inst_34400));
var state_34418__$1 = state_34418;
if(cljs.core.truth_(inst_34405)){
var statearr_34425_34442 = state_34418__$1;
(statearr_34425_34442[(1)] = (8));

} else {
var statearr_34426_34443 = state_34418__$1;
(statearr_34426_34443[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (3))){
var inst_34416 = (state_34418[(2)]);
var state_34418__$1 = state_34418;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34418__$1,inst_34416);
} else {
if((state_val_34419 === (2))){
var state_34418__$1 = state_34418;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34418__$1,(4),ch);
} else {
if((state_val_34419 === (11))){
var inst_34408 = (state_34418[(2)]);
var state_34418__$1 = state_34418;
var statearr_34427_34444 = state_34418__$1;
(statearr_34427_34444[(2)] = inst_34408);

(statearr_34427_34444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (9))){
var state_34418__$1 = state_34418;
var statearr_34428_34445 = state_34418__$1;
(statearr_34428_34445[(2)] = null);

(statearr_34428_34445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (5))){
var inst_34403 = cljs.core.async.close_BANG_(out);
var state_34418__$1 = state_34418;
var statearr_34429_34446 = state_34418__$1;
(statearr_34429_34446[(2)] = inst_34403);

(statearr_34429_34446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (10))){
var inst_34411 = (state_34418[(2)]);
var state_34418__$1 = (function (){var statearr_34430 = state_34418;
(statearr_34430[(8)] = inst_34411);

return statearr_34430;
})();
var statearr_34431_34447 = state_34418__$1;
(statearr_34431_34447[(2)] = null);

(statearr_34431_34447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34419 === (8))){
var inst_34400 = (state_34418[(7)]);
var state_34418__$1 = state_34418;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34418__$1,(11),out,inst_34400);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___34437,out))
;
return ((function (switch__32260__auto__,c__32469__auto___34437,out){
return (function() {
var cljs$core$async$state_machine__32261__auto__ = null;
var cljs$core$async$state_machine__32261__auto____0 = (function (){
var statearr_34432 = [null,null,null,null,null,null,null,null,null];
(statearr_34432[(0)] = cljs$core$async$state_machine__32261__auto__);

(statearr_34432[(1)] = (1));

return statearr_34432;
});
var cljs$core$async$state_machine__32261__auto____1 = (function (state_34418){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_34418);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e34433){if((e34433 instanceof Object)){
var ex__32264__auto__ = e34433;
var statearr_34434_34448 = state_34418;
(statearr_34434_34448[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34433;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34449 = state_34418;
state_34418 = G__34449;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$state_machine__32261__auto__ = function(state_34418){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32261__auto____1.call(this,state_34418);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32261__auto____0;
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32261__auto____1;
return cljs$core$async$state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___34437,out))
})();
var state__32471__auto__ = (function (){var statearr_34435 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_34435[(6)] = c__32469__auto___34437);

return statearr_34435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___34437,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34451 = arguments.length;
switch (G__34451) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32469__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto__){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto__){
return (function (state_34535){
var state_val_34536 = (state_34535[(1)]);
if((state_val_34536 === (7))){
var inst_34531 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34542_34620 = state_34535__$1;
(statearr_34542_34620[(2)] = inst_34531);

(statearr_34542_34620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (20))){
var inst_34501 = (state_34535[(7)]);
var inst_34512 = (state_34535[(2)]);
var inst_34513 = cljs.core.next(inst_34501);
var inst_34486 = inst_34513;
var inst_34488 = null;
var inst_34489 = (0);
var inst_34490 = (0);
var state_34535__$1 = (function (){var statearr_34543 = state_34535;
(statearr_34543[(8)] = inst_34490);

(statearr_34543[(9)] = inst_34488);

(statearr_34543[(10)] = inst_34489);

(statearr_34543[(11)] = inst_34486);

(statearr_34543[(12)] = inst_34512);

return statearr_34543;
})();
var statearr_34544_34622 = state_34535__$1;
(statearr_34544_34622[(2)] = null);

(statearr_34544_34622[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (1))){
var state_34535__$1 = state_34535;
var statearr_34545_34623 = state_34535__$1;
(statearr_34545_34623[(2)] = null);

(statearr_34545_34623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (4))){
var inst_34474 = (state_34535[(13)]);
var inst_34474__$1 = (state_34535[(2)]);
var inst_34475 = (inst_34474__$1 == null);
var state_34535__$1 = (function (){var statearr_34546 = state_34535;
(statearr_34546[(13)] = inst_34474__$1);

return statearr_34546;
})();
if(cljs.core.truth_(inst_34475)){
var statearr_34547_34624 = state_34535__$1;
(statearr_34547_34624[(1)] = (5));

} else {
var statearr_34548_34630 = state_34535__$1;
(statearr_34548_34630[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (15))){
var state_34535__$1 = state_34535;
var statearr_34552_34633 = state_34535__$1;
(statearr_34552_34633[(2)] = null);

(statearr_34552_34633[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (21))){
var state_34535__$1 = state_34535;
var statearr_34553_34634 = state_34535__$1;
(statearr_34553_34634[(2)] = null);

(statearr_34553_34634[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (13))){
var inst_34490 = (state_34535[(8)]);
var inst_34488 = (state_34535[(9)]);
var inst_34489 = (state_34535[(10)]);
var inst_34486 = (state_34535[(11)]);
var inst_34497 = (state_34535[(2)]);
var inst_34498 = (inst_34490 + (1));
var tmp34549 = inst_34488;
var tmp34550 = inst_34489;
var tmp34551 = inst_34486;
var inst_34486__$1 = tmp34551;
var inst_34488__$1 = tmp34549;
var inst_34489__$1 = tmp34550;
var inst_34490__$1 = inst_34498;
var state_34535__$1 = (function (){var statearr_34554 = state_34535;
(statearr_34554[(14)] = inst_34497);

(statearr_34554[(8)] = inst_34490__$1);

(statearr_34554[(9)] = inst_34488__$1);

(statearr_34554[(10)] = inst_34489__$1);

(statearr_34554[(11)] = inst_34486__$1);

return statearr_34554;
})();
var statearr_34555_34637 = state_34535__$1;
(statearr_34555_34637[(2)] = null);

(statearr_34555_34637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (22))){
var state_34535__$1 = state_34535;
var statearr_34556_34638 = state_34535__$1;
(statearr_34556_34638[(2)] = null);

(statearr_34556_34638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (6))){
var inst_34474 = (state_34535[(13)]);
var inst_34484 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34474) : f.call(null,inst_34474));
var inst_34485 = cljs.core.seq(inst_34484);
var inst_34486 = inst_34485;
var inst_34488 = null;
var inst_34489 = (0);
var inst_34490 = (0);
var state_34535__$1 = (function (){var statearr_34557 = state_34535;
(statearr_34557[(8)] = inst_34490);

(statearr_34557[(9)] = inst_34488);

(statearr_34557[(10)] = inst_34489);

(statearr_34557[(11)] = inst_34486);

return statearr_34557;
})();
var statearr_34558_34643 = state_34535__$1;
(statearr_34558_34643[(2)] = null);

(statearr_34558_34643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (17))){
var inst_34501 = (state_34535[(7)]);
var inst_34505 = cljs.core.chunk_first(inst_34501);
var inst_34506 = cljs.core.chunk_rest(inst_34501);
var inst_34507 = cljs.core.count(inst_34505);
var inst_34486 = inst_34506;
var inst_34488 = inst_34505;
var inst_34489 = inst_34507;
var inst_34490 = (0);
var state_34535__$1 = (function (){var statearr_34559 = state_34535;
(statearr_34559[(8)] = inst_34490);

(statearr_34559[(9)] = inst_34488);

(statearr_34559[(10)] = inst_34489);

(statearr_34559[(11)] = inst_34486);

return statearr_34559;
})();
var statearr_34569_34659 = state_34535__$1;
(statearr_34569_34659[(2)] = null);

(statearr_34569_34659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (3))){
var inst_34533 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34535__$1,inst_34533);
} else {
if((state_val_34536 === (12))){
var inst_34521 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34570_34661 = state_34535__$1;
(statearr_34570_34661[(2)] = inst_34521);

(statearr_34570_34661[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (2))){
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34535__$1,(4),in$);
} else {
if((state_val_34536 === (23))){
var inst_34529 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34571_34662 = state_34535__$1;
(statearr_34571_34662[(2)] = inst_34529);

(statearr_34571_34662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (19))){
var inst_34516 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34572_34663 = state_34535__$1;
(statearr_34572_34663[(2)] = inst_34516);

(statearr_34572_34663[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (11))){
var inst_34501 = (state_34535[(7)]);
var inst_34486 = (state_34535[(11)]);
var inst_34501__$1 = cljs.core.seq(inst_34486);
var state_34535__$1 = (function (){var statearr_34573 = state_34535;
(statearr_34573[(7)] = inst_34501__$1);

return statearr_34573;
})();
if(inst_34501__$1){
var statearr_34574_34664 = state_34535__$1;
(statearr_34574_34664[(1)] = (14));

} else {
var statearr_34575_34665 = state_34535__$1;
(statearr_34575_34665[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (9))){
var inst_34523 = (state_34535[(2)]);
var inst_34524 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34535__$1 = (function (){var statearr_34576 = state_34535;
(statearr_34576[(15)] = inst_34523);

return statearr_34576;
})();
if(cljs.core.truth_(inst_34524)){
var statearr_34577_34673 = state_34535__$1;
(statearr_34577_34673[(1)] = (21));

} else {
var statearr_34578_34674 = state_34535__$1;
(statearr_34578_34674[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (5))){
var inst_34477 = cljs.core.async.close_BANG_(out);
var state_34535__$1 = state_34535;
var statearr_34579_34676 = state_34535__$1;
(statearr_34579_34676[(2)] = inst_34477);

(statearr_34579_34676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (14))){
var inst_34501 = (state_34535[(7)]);
var inst_34503 = cljs.core.chunked_seq_QMARK_(inst_34501);
var state_34535__$1 = state_34535;
if(inst_34503){
var statearr_34580_34677 = state_34535__$1;
(statearr_34580_34677[(1)] = (17));

} else {
var statearr_34581_34678 = state_34535__$1;
(statearr_34581_34678[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (16))){
var inst_34519 = (state_34535[(2)]);
var state_34535__$1 = state_34535;
var statearr_34582_34679 = state_34535__$1;
(statearr_34582_34679[(2)] = inst_34519);

(statearr_34582_34679[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34536 === (10))){
var inst_34490 = (state_34535[(8)]);
var inst_34488 = (state_34535[(9)]);
var inst_34495 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34488,inst_34490);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34535__$1,(13),out,inst_34495);
} else {
if((state_val_34536 === (18))){
var inst_34501 = (state_34535[(7)]);
var inst_34510 = cljs.core.first(inst_34501);
var state_34535__$1 = state_34535;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34535__$1,(20),out,inst_34510);
} else {
if((state_val_34536 === (8))){
var inst_34490 = (state_34535[(8)]);
var inst_34489 = (state_34535[(10)]);
var inst_34492 = (inst_34490 < inst_34489);
var inst_34493 = inst_34492;
var state_34535__$1 = state_34535;
if(cljs.core.truth_(inst_34493)){
var statearr_34597_34685 = state_34535__$1;
(statearr_34597_34685[(1)] = (10));

} else {
var statearr_34598_34693 = state_34535__$1;
(statearr_34598_34693[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto__))
;
return ((function (switch__32260__auto__,c__32469__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32261__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32261__auto____0 = (function (){
var statearr_34601 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34601[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32261__auto__);

(statearr_34601[(1)] = (1));

return statearr_34601;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32261__auto____1 = (function (state_34535){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_34535);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e34604){if((e34604 instanceof Object)){
var ex__32264__auto__ = e34604;
var statearr_34605_34698 = state_34535;
(statearr_34605_34698[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34604;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34708 = state_34535;
state_34535 = G__34708;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32261__auto__ = function(state_34535){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32261__auto____1.call(this,state_34535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32261__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32261__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto__))
})();
var state__32471__auto__ = (function (){var statearr_34607 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_34607[(6)] = c__32469__auto__);

return statearr_34607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto__))
);

return c__32469__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34711 = arguments.length;
switch (G__34711) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34740 = arguments.length;
switch (G__34740) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34758 = arguments.length;
switch (G__34758) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32469__auto___34849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___34849,out){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___34849,out){
return (function (state_34804){
var state_val_34805 = (state_34804[(1)]);
if((state_val_34805 === (7))){
var inst_34799 = (state_34804[(2)]);
var state_34804__$1 = state_34804;
var statearr_34807_34852 = state_34804__$1;
(statearr_34807_34852[(2)] = inst_34799);

(statearr_34807_34852[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (1))){
var inst_34764 = null;
var state_34804__$1 = (function (){var statearr_34808 = state_34804;
(statearr_34808[(7)] = inst_34764);

return statearr_34808;
})();
var statearr_34809_34853 = state_34804__$1;
(statearr_34809_34853[(2)] = null);

(statearr_34809_34853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (4))){
var inst_34767 = (state_34804[(8)]);
var inst_34767__$1 = (state_34804[(2)]);
var inst_34768 = (inst_34767__$1 == null);
var inst_34769 = cljs.core.not(inst_34768);
var state_34804__$1 = (function (){var statearr_34813 = state_34804;
(statearr_34813[(8)] = inst_34767__$1);

return statearr_34813;
})();
if(inst_34769){
var statearr_34814_34880 = state_34804__$1;
(statearr_34814_34880[(1)] = (5));

} else {
var statearr_34815_34881 = state_34804__$1;
(statearr_34815_34881[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (6))){
var state_34804__$1 = state_34804;
var statearr_34816_34888 = state_34804__$1;
(statearr_34816_34888[(2)] = null);

(statearr_34816_34888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (3))){
var inst_34801 = (state_34804[(2)]);
var inst_34802 = cljs.core.async.close_BANG_(out);
var state_34804__$1 = (function (){var statearr_34817 = state_34804;
(statearr_34817[(9)] = inst_34801);

return statearr_34817;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34804__$1,inst_34802);
} else {
if((state_val_34805 === (2))){
var state_34804__$1 = state_34804;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34804__$1,(4),ch);
} else {
if((state_val_34805 === (11))){
var inst_34767 = (state_34804[(8)]);
var inst_34793 = (state_34804[(2)]);
var inst_34764 = inst_34767;
var state_34804__$1 = (function (){var statearr_34822 = state_34804;
(statearr_34822[(10)] = inst_34793);

(statearr_34822[(7)] = inst_34764);

return statearr_34822;
})();
var statearr_34823_34889 = state_34804__$1;
(statearr_34823_34889[(2)] = null);

(statearr_34823_34889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (9))){
var inst_34767 = (state_34804[(8)]);
var state_34804__$1 = state_34804;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34804__$1,(11),out,inst_34767);
} else {
if((state_val_34805 === (5))){
var inst_34767 = (state_34804[(8)]);
var inst_34764 = (state_34804[(7)]);
var inst_34772 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34767,inst_34764);
var state_34804__$1 = state_34804;
if(inst_34772){
var statearr_34825_34891 = state_34804__$1;
(statearr_34825_34891[(1)] = (8));

} else {
var statearr_34826_34892 = state_34804__$1;
(statearr_34826_34892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (10))){
var inst_34796 = (state_34804[(2)]);
var state_34804__$1 = state_34804;
var statearr_34827_34893 = state_34804__$1;
(statearr_34827_34893[(2)] = inst_34796);

(statearr_34827_34893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34805 === (8))){
var inst_34764 = (state_34804[(7)]);
var tmp34824 = inst_34764;
var inst_34764__$1 = tmp34824;
var state_34804__$1 = (function (){var statearr_34828 = state_34804;
(statearr_34828[(7)] = inst_34764__$1);

return statearr_34828;
})();
var statearr_34829_34895 = state_34804__$1;
(statearr_34829_34895[(2)] = null);

(statearr_34829_34895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___34849,out))
;
return ((function (switch__32260__auto__,c__32469__auto___34849,out){
return (function() {
var cljs$core$async$state_machine__32261__auto__ = null;
var cljs$core$async$state_machine__32261__auto____0 = (function (){
var statearr_34830 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34830[(0)] = cljs$core$async$state_machine__32261__auto__);

(statearr_34830[(1)] = (1));

return statearr_34830;
});
var cljs$core$async$state_machine__32261__auto____1 = (function (state_34804){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_34804);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e34840){if((e34840 instanceof Object)){
var ex__32264__auto__ = e34840;
var statearr_34841_34903 = state_34804;
(statearr_34841_34903[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34840;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34905 = state_34804;
state_34804 = G__34905;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$state_machine__32261__auto__ = function(state_34804){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32261__auto____1.call(this,state_34804);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32261__auto____0;
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32261__auto____1;
return cljs$core$async$state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___34849,out))
})();
var state__32471__auto__ = (function (){var statearr_34844 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_34844[(6)] = c__32469__auto___34849);

return statearr_34844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___34849,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34915 = arguments.length;
switch (G__34915) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32469__auto___35018 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___35018,out){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___35018,out){
return (function (state_34960){
var state_val_34961 = (state_34960[(1)]);
if((state_val_34961 === (7))){
var inst_34956 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_34969_35019 = state_34960__$1;
(statearr_34969_35019[(2)] = inst_34956);

(statearr_34969_35019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (1))){
var inst_34922 = (new Array(n));
var inst_34923 = inst_34922;
var inst_34924 = (0);
var state_34960__$1 = (function (){var statearr_34971 = state_34960;
(statearr_34971[(7)] = inst_34923);

(statearr_34971[(8)] = inst_34924);

return statearr_34971;
})();
var statearr_34972_35020 = state_34960__$1;
(statearr_34972_35020[(2)] = null);

(statearr_34972_35020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (4))){
var inst_34927 = (state_34960[(9)]);
var inst_34927__$1 = (state_34960[(2)]);
var inst_34928 = (inst_34927__$1 == null);
var inst_34929 = cljs.core.not(inst_34928);
var state_34960__$1 = (function (){var statearr_34973 = state_34960;
(statearr_34973[(9)] = inst_34927__$1);

return statearr_34973;
})();
if(inst_34929){
var statearr_34974_35021 = state_34960__$1;
(statearr_34974_35021[(1)] = (5));

} else {
var statearr_34975_35022 = state_34960__$1;
(statearr_34975_35022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (15))){
var inst_34950 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_34977_35023 = state_34960__$1;
(statearr_34977_35023[(2)] = inst_34950);

(statearr_34977_35023[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (13))){
var state_34960__$1 = state_34960;
var statearr_34979_35024 = state_34960__$1;
(statearr_34979_35024[(2)] = null);

(statearr_34979_35024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (6))){
var inst_34924 = (state_34960[(8)]);
var inst_34945 = (inst_34924 > (0));
var state_34960__$1 = state_34960;
if(cljs.core.truth_(inst_34945)){
var statearr_34980_35025 = state_34960__$1;
(statearr_34980_35025[(1)] = (12));

} else {
var statearr_34981_35026 = state_34960__$1;
(statearr_34981_35026[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (3))){
var inst_34958 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34960__$1,inst_34958);
} else {
if((state_val_34961 === (12))){
var inst_34923 = (state_34960[(7)]);
var inst_34948 = cljs.core.vec(inst_34923);
var state_34960__$1 = state_34960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34960__$1,(15),out,inst_34948);
} else {
if((state_val_34961 === (2))){
var state_34960__$1 = state_34960;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34960__$1,(4),ch);
} else {
if((state_val_34961 === (11))){
var inst_34939 = (state_34960[(2)]);
var inst_34940 = (new Array(n));
var inst_34923 = inst_34940;
var inst_34924 = (0);
var state_34960__$1 = (function (){var statearr_34988 = state_34960;
(statearr_34988[(7)] = inst_34923);

(statearr_34988[(8)] = inst_34924);

(statearr_34988[(10)] = inst_34939);

return statearr_34988;
})();
var statearr_34989_35027 = state_34960__$1;
(statearr_34989_35027[(2)] = null);

(statearr_34989_35027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (9))){
var inst_34923 = (state_34960[(7)]);
var inst_34937 = cljs.core.vec(inst_34923);
var state_34960__$1 = state_34960;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34960__$1,(11),out,inst_34937);
} else {
if((state_val_34961 === (5))){
var inst_34927 = (state_34960[(9)]);
var inst_34923 = (state_34960[(7)]);
var inst_34924 = (state_34960[(8)]);
var inst_34932 = (state_34960[(11)]);
var inst_34931 = (inst_34923[inst_34924] = inst_34927);
var inst_34932__$1 = (inst_34924 + (1));
var inst_34933 = (inst_34932__$1 < n);
var state_34960__$1 = (function (){var statearr_34990 = state_34960;
(statearr_34990[(12)] = inst_34931);

(statearr_34990[(11)] = inst_34932__$1);

return statearr_34990;
})();
if(cljs.core.truth_(inst_34933)){
var statearr_34991_35033 = state_34960__$1;
(statearr_34991_35033[(1)] = (8));

} else {
var statearr_34992_35034 = state_34960__$1;
(statearr_34992_35034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (14))){
var inst_34953 = (state_34960[(2)]);
var inst_34954 = cljs.core.async.close_BANG_(out);
var state_34960__$1 = (function (){var statearr_34994 = state_34960;
(statearr_34994[(13)] = inst_34953);

return statearr_34994;
})();
var statearr_34995_35035 = state_34960__$1;
(statearr_34995_35035[(2)] = inst_34954);

(statearr_34995_35035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (10))){
var inst_34943 = (state_34960[(2)]);
var state_34960__$1 = state_34960;
var statearr_34996_35037 = state_34960__$1;
(statearr_34996_35037[(2)] = inst_34943);

(statearr_34996_35037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34961 === (8))){
var inst_34923 = (state_34960[(7)]);
var inst_34932 = (state_34960[(11)]);
var tmp34993 = inst_34923;
var inst_34923__$1 = tmp34993;
var inst_34924 = inst_34932;
var state_34960__$1 = (function (){var statearr_34998 = state_34960;
(statearr_34998[(7)] = inst_34923__$1);

(statearr_34998[(8)] = inst_34924);

return statearr_34998;
})();
var statearr_34999_35040 = state_34960__$1;
(statearr_34999_35040[(2)] = null);

(statearr_34999_35040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___35018,out))
;
return ((function (switch__32260__auto__,c__32469__auto___35018,out){
return (function() {
var cljs$core$async$state_machine__32261__auto__ = null;
var cljs$core$async$state_machine__32261__auto____0 = (function (){
var statearr_35000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35000[(0)] = cljs$core$async$state_machine__32261__auto__);

(statearr_35000[(1)] = (1));

return statearr_35000;
});
var cljs$core$async$state_machine__32261__auto____1 = (function (state_34960){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_34960);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e35001){if((e35001 instanceof Object)){
var ex__32264__auto__ = e35001;
var statearr_35002_35041 = state_34960;
(statearr_35002_35041[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35001;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35042 = state_34960;
state_34960 = G__35042;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$state_machine__32261__auto__ = function(state_34960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32261__auto____1.call(this,state_34960);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32261__auto____0;
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32261__auto____1;
return cljs$core$async$state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___35018,out))
})();
var state__32471__auto__ = (function (){var statearr_35004 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_35004[(6)] = c__32469__auto___35018);

return statearr_35004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___35018,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35044 = arguments.length;
switch (G__35044) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32469__auto___35142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__32469__auto___35142,out){
return (function (){
var f__32470__auto__ = (function (){var switch__32260__auto__ = ((function (c__32469__auto___35142,out){
return (function (state_35087){
var state_val_35088 = (state_35087[(1)]);
if((state_val_35088 === (7))){
var inst_35083 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
var statearr_35092_35143 = state_35087__$1;
(statearr_35092_35143[(2)] = inst_35083);

(statearr_35092_35143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (1))){
var inst_35046 = [];
var inst_35047 = inst_35046;
var inst_35048 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35087__$1 = (function (){var statearr_35097 = state_35087;
(statearr_35097[(7)] = inst_35047);

(statearr_35097[(8)] = inst_35048);

return statearr_35097;
})();
var statearr_35098_35144 = state_35087__$1;
(statearr_35098_35144[(2)] = null);

(statearr_35098_35144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (4))){
var inst_35051 = (state_35087[(9)]);
var inst_35051__$1 = (state_35087[(2)]);
var inst_35052 = (inst_35051__$1 == null);
var inst_35053 = cljs.core.not(inst_35052);
var state_35087__$1 = (function (){var statearr_35103 = state_35087;
(statearr_35103[(9)] = inst_35051__$1);

return statearr_35103;
})();
if(inst_35053){
var statearr_35106_35145 = state_35087__$1;
(statearr_35106_35145[(1)] = (5));

} else {
var statearr_35109_35146 = state_35087__$1;
(statearr_35109_35146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (15))){
var inst_35077 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
var statearr_35112_35147 = state_35087__$1;
(statearr_35112_35147[(2)] = inst_35077);

(statearr_35112_35147[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (13))){
var state_35087__$1 = state_35087;
var statearr_35117_35148 = state_35087__$1;
(statearr_35117_35148[(2)] = null);

(statearr_35117_35148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (6))){
var inst_35047 = (state_35087[(7)]);
var inst_35072 = inst_35047.length;
var inst_35073 = (inst_35072 > (0));
var state_35087__$1 = state_35087;
if(cljs.core.truth_(inst_35073)){
var statearr_35120_35149 = state_35087__$1;
(statearr_35120_35149[(1)] = (12));

} else {
var statearr_35121_35150 = state_35087__$1;
(statearr_35121_35150[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (3))){
var inst_35085 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35087__$1,inst_35085);
} else {
if((state_val_35088 === (12))){
var inst_35047 = (state_35087[(7)]);
var inst_35075 = cljs.core.vec(inst_35047);
var state_35087__$1 = state_35087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35087__$1,(15),out,inst_35075);
} else {
if((state_val_35088 === (2))){
var state_35087__$1 = state_35087;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35087__$1,(4),ch);
} else {
if((state_val_35088 === (11))){
var inst_35055 = (state_35087[(10)]);
var inst_35051 = (state_35087[(9)]);
var inst_35065 = (state_35087[(2)]);
var inst_35066 = [];
var inst_35067 = inst_35066.push(inst_35051);
var inst_35047 = inst_35066;
var inst_35048 = inst_35055;
var state_35087__$1 = (function (){var statearr_35122 = state_35087;
(statearr_35122[(7)] = inst_35047);

(statearr_35122[(11)] = inst_35067);

(statearr_35122[(12)] = inst_35065);

(statearr_35122[(8)] = inst_35048);

return statearr_35122;
})();
var statearr_35123_35151 = state_35087__$1;
(statearr_35123_35151[(2)] = null);

(statearr_35123_35151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (9))){
var inst_35047 = (state_35087[(7)]);
var inst_35063 = cljs.core.vec(inst_35047);
var state_35087__$1 = state_35087;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35087__$1,(11),out,inst_35063);
} else {
if((state_val_35088 === (5))){
var inst_35055 = (state_35087[(10)]);
var inst_35051 = (state_35087[(9)]);
var inst_35048 = (state_35087[(8)]);
var inst_35055__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35051) : f.call(null,inst_35051));
var inst_35056 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35055__$1,inst_35048);
var inst_35057 = cljs.core.keyword_identical_QMARK_(inst_35048,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35058 = (inst_35056) || (inst_35057);
var state_35087__$1 = (function (){var statearr_35124 = state_35087;
(statearr_35124[(10)] = inst_35055__$1);

return statearr_35124;
})();
if(cljs.core.truth_(inst_35058)){
var statearr_35125_35156 = state_35087__$1;
(statearr_35125_35156[(1)] = (8));

} else {
var statearr_35126_35157 = state_35087__$1;
(statearr_35126_35157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (14))){
var inst_35080 = (state_35087[(2)]);
var inst_35081 = cljs.core.async.close_BANG_(out);
var state_35087__$1 = (function (){var statearr_35131 = state_35087;
(statearr_35131[(13)] = inst_35080);

return statearr_35131;
})();
var statearr_35132_35158 = state_35087__$1;
(statearr_35132_35158[(2)] = inst_35081);

(statearr_35132_35158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (10))){
var inst_35070 = (state_35087[(2)]);
var state_35087__$1 = state_35087;
var statearr_35133_35168 = state_35087__$1;
(statearr_35133_35168[(2)] = inst_35070);

(statearr_35133_35168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35088 === (8))){
var inst_35047 = (state_35087[(7)]);
var inst_35055 = (state_35087[(10)]);
var inst_35051 = (state_35087[(9)]);
var inst_35060 = inst_35047.push(inst_35051);
var tmp35130 = inst_35047;
var inst_35047__$1 = tmp35130;
var inst_35048 = inst_35055;
var state_35087__$1 = (function (){var statearr_35134 = state_35087;
(statearr_35134[(7)] = inst_35047__$1);

(statearr_35134[(14)] = inst_35060);

(statearr_35134[(8)] = inst_35048);

return statearr_35134;
})();
var statearr_35135_35172 = state_35087__$1;
(statearr_35135_35172[(2)] = null);

(statearr_35135_35172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32469__auto___35142,out))
;
return ((function (switch__32260__auto__,c__32469__auto___35142,out){
return (function() {
var cljs$core$async$state_machine__32261__auto__ = null;
var cljs$core$async$state_machine__32261__auto____0 = (function (){
var statearr_35136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35136[(0)] = cljs$core$async$state_machine__32261__auto__);

(statearr_35136[(1)] = (1));

return statearr_35136;
});
var cljs$core$async$state_machine__32261__auto____1 = (function (state_35087){
while(true){
var ret_value__32262__auto__ = (function (){try{while(true){
var result__32263__auto__ = switch__32260__auto__(state_35087);
if(cljs.core.keyword_identical_QMARK_(result__32263__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32263__auto__;
}
break;
}
}catch (e35137){if((e35137 instanceof Object)){
var ex__32264__auto__ = e35137;
var statearr_35139_35183 = state_35087;
(statearr_35139_35183[(5)] = ex__32264__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35137;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35189 = state_35087;
state_35087 = G__35189;
continue;
} else {
return ret_value__32262__auto__;
}
break;
}
});
cljs$core$async$state_machine__32261__auto__ = function(state_35087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32261__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32261__auto____1.call(this,state_35087);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32261__auto____0;
cljs$core$async$state_machine__32261__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32261__auto____1;
return cljs$core$async$state_machine__32261__auto__;
})()
;})(switch__32260__auto__,c__32469__auto___35142,out))
})();
var state__32471__auto__ = (function (){var statearr_35140 = (f__32470__auto__.cljs$core$IFn$_invoke$arity$0 ? f__32470__auto__.cljs$core$IFn$_invoke$arity$0() : f__32470__auto__.call(null));
(statearr_35140[(6)] = c__32469__auto___35142);

return statearr_35140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32471__auto__);
});})(c__32469__auto___35142,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map

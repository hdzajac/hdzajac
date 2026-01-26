(function(){const R=document.createElement("link").relList;if(R&&R.supports&&R.supports("modulepreload"))return;for(const j of document.querySelectorAll('link[rel="modulepreload"]'))s(j);new MutationObserver(j=>{for(const M of j)if(M.type==="childList")for(const w of M.addedNodes)w.tagName==="LINK"&&w.rel==="modulepreload"&&s(w)}).observe(document,{childList:!0,subtree:!0});function y(j){const M={};return j.integrity&&(M.integrity=j.integrity),j.referrerPolicy&&(M.referrerPolicy=j.referrerPolicy),j.crossOrigin==="use-credentials"?M.credentials="include":j.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function s(j){if(j.ep)return;j.ep=!0;const M=y(j);fetch(j.href,M)}})();function Ec(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var la={exports:{}},Sn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oc;function Fs(){if(oc)return Sn;oc=1;var p=Symbol.for("react.transitional.element"),R=Symbol.for("react.fragment");function y(s,j,M){var w=null;if(M!==void 0&&(w=""+M),j.key!==void 0&&(w=""+j.key),"key"in j){M={};for(var fi in j)fi!=="key"&&(M[fi]=j[fi])}else M=j;return j=M.ref,{$$typeof:p,type:s,key:w,ref:j!==void 0?j:null,props:M}}return Sn.Fragment=R,Sn.jsx=y,Sn.jsxs=y,Sn}var mc;function Is(){return mc||(mc=1,la.exports=Fs()),la.exports}var g=Is(),aa={exports:{}},B={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vc;function Ps(){if(vc)return B;vc=1;var p=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),M=Symbol.for("react.consumer"),w=Symbol.for("react.context"),fi=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),Ci=Symbol.iterator;function xi(G){return G===null||typeof G!="object"?null:(G=Ci&&G[Ci]||G["@@iterator"],typeof G=="function"?G:null)}var qi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ji=Object.assign,_t={};function ki(G,z,x){this.props=G,this.context=z,this.refs=_t,this.updater=x||qi}ki.prototype.isReactComponent={},ki.prototype.setState=function(G,z){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,z,"setState")},ki.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function kt(){}kt.prototype=ki.prototype;function Ni(G,z,x){this.props=G,this.context=z,this.refs=_t,this.updater=x||qi}var lt=Ni.prototype=new kt;lt.constructor=Ni,ji(lt,ki.prototype),lt.isPureReactComponent=!0;var St=Array.isArray;function Bi(){}var $={H:null,A:null,T:null,S:null},Yi=Object.prototype.hasOwnProperty;function pt(G,z,x){var _=x.ref;return{$$typeof:p,type:G,key:z,ref:_!==void 0?_:null,props:x}}function Q1(G,z){return pt(G.type,z,G.props)}function zt(G){return typeof G=="object"&&G!==null&&G.$$typeof===p}function Xi(G){var z={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(x){return z[x]})}var S1=/\/+/g;function Ot(G,z){return typeof G=="object"&&G!==null&&G.key!=null?Xi(""+G.key):z.toString(36)}function yt(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(Bi,Bi):(G.status="pending",G.then(function(z){G.status==="pending"&&(G.status="fulfilled",G.value=z)},function(z){G.status==="pending"&&(G.status="rejected",G.reason=z)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function r(G,z,x,_,Y){var V=typeof G;(V==="undefined"||V==="boolean")&&(G=null);var ti=!1;if(G===null)ti=!0;else switch(V){case"bigint":case"string":case"number":ti=!0;break;case"object":switch(G.$$typeof){case p:case R:ti=!0;break;case Z:return ti=G._init,r(ti(G._payload),z,x,_,Y)}}if(ti)return Y=Y(G),ti=_===""?"."+Ot(G,0):_,St(Y)?(x="",ti!=null&&(x=ti.replace(S1,"$&/")+"/"),r(Y,z,x,"",function(Af){return Af})):Y!=null&&(zt(Y)&&(Y=Q1(Y,x+(Y.key==null||G&&G.key===Y.key?"":(""+Y.key).replace(S1,"$&/")+"/")+ti)),z.push(Y)),1;ti=0;var Hi=_===""?".":_+":";if(St(G))for(var yi=0;yi<G.length;yi++)_=G[yi],V=Hi+Ot(_,yi),ti+=r(_,z,x,V,Y);else if(yi=xi(G),typeof yi=="function")for(G=yi.call(G),yi=0;!(_=G.next()).done;)_=_.value,V=Hi+Ot(_,yi++),ti+=r(_,z,x,V,Y);else if(V==="object"){if(typeof G.then=="function")return r(yt(G),z,x,_,Y);throw z=String(G),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return ti}function T(G,z,x){if(G==null)return G;var _=[],Y=0;return r(G,_,"","",function(V){return z.call(x,V,Y++)}),_}function q(G){if(G._status===-1){var z=G._result;z=z(),z.then(function(x){(G._status===0||G._status===-1)&&(G._status=1,G._result=x)},function(x){(G._status===0||G._status===-1)&&(G._status=2,G._result=x)}),G._status===-1&&(G._status=0,G._result=z)}if(G._status===1)return G._result.default;throw G._result}var li=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)},Gi={map:T,forEach:function(G,z,x){T(G,function(){z.apply(this,arguments)},x)},count:function(G){var z=0;return T(G,function(){z++}),z},toArray:function(G){return T(G,function(z){return z})||[]},only:function(G){if(!zt(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};return B.Activity=U,B.Children=Gi,B.Component=ki,B.Fragment=y,B.Profiler=j,B.PureComponent=Ni,B.StrictMode=s,B.Suspense=D,B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,B.__COMPILER_RUNTIME={__proto__:null,c:function(G){return $.H.useMemoCache(G)}},B.cache=function(G){return function(){return G.apply(null,arguments)}},B.cacheSignal=function(){return null},B.cloneElement=function(G,z,x){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var _=ji({},G.props),Y=G.key;if(z!=null)for(V in z.key!==void 0&&(Y=""+z.key),z)!Yi.call(z,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&z.ref===void 0||(_[V]=z[V]);var V=arguments.length-2;if(V===1)_.children=x;else if(1<V){for(var ti=Array(V),Hi=0;Hi<V;Hi++)ti[Hi]=arguments[Hi+2];_.children=ti}return pt(G.type,Y,_)},B.createContext=function(G){return G={$$typeof:w,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:M,_context:G},G},B.createElement=function(G,z,x){var _,Y={},V=null;if(z!=null)for(_ in z.key!==void 0&&(V=""+z.key),z)Yi.call(z,_)&&_!=="key"&&_!=="__self"&&_!=="__source"&&(Y[_]=z[_]);var ti=arguments.length-2;if(ti===1)Y.children=x;else if(1<ti){for(var Hi=Array(ti),yi=0;yi<ti;yi++)Hi[yi]=arguments[yi+2];Y.children=Hi}if(G&&G.defaultProps)for(_ in ti=G.defaultProps,ti)Y[_]===void 0&&(Y[_]=ti[_]);return pt(G,V,Y)},B.createRef=function(){return{current:null}},B.forwardRef=function(G){return{$$typeof:fi,render:G}},B.isValidElement=zt,B.lazy=function(G){return{$$typeof:Z,_payload:{_status:-1,_result:G},_init:q}},B.memo=function(G,z){return{$$typeof:E,type:G,compare:z===void 0?null:z}},B.startTransition=function(G){var z=$.T,x={};$.T=x;try{var _=G(),Y=$.S;Y!==null&&Y(x,_),typeof _=="object"&&_!==null&&typeof _.then=="function"&&_.then(Bi,li)}catch(V){li(V)}finally{z!==null&&x.types!==null&&(z.types=x.types),$.T=z}},B.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},B.use=function(G){return $.H.use(G)},B.useActionState=function(G,z,x){return $.H.useActionState(G,z,x)},B.useCallback=function(G,z){return $.H.useCallback(G,z)},B.useContext=function(G){return $.H.useContext(G)},B.useDebugValue=function(){},B.useDeferredValue=function(G,z){return $.H.useDeferredValue(G,z)},B.useEffect=function(G,z){return $.H.useEffect(G,z)},B.useEffectEvent=function(G){return $.H.useEffectEvent(G)},B.useId=function(){return $.H.useId()},B.useImperativeHandle=function(G,z,x){return $.H.useImperativeHandle(G,z,x)},B.useInsertionEffect=function(G,z){return $.H.useInsertionEffect(G,z)},B.useLayoutEffect=function(G,z){return $.H.useLayoutEffect(G,z)},B.useMemo=function(G,z){return $.H.useMemo(G,z)},B.useOptimistic=function(G,z){return $.H.useOptimistic(G,z)},B.useReducer=function(G,z,x){return $.H.useReducer(G,z,x)},B.useRef=function(G){return $.H.useRef(G)},B.useState=function(G){return $.H.useState(G)},B.useSyncExternalStore=function(G,z,x){return $.H.useSyncExternalStore(G,z,x)},B.useTransition=function(){return $.H.useTransition()},B.version="19.2.3",B}var yc;function sa(){return yc||(yc=1,aa.exports=Ps()),aa.exports}var b1=sa();const id=Ec(b1);var ua={exports:{}},pn={},ea={exports:{}},Ga={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hc;function td(){return hc||(hc=1,(function(p){function R(r,T){var q=r.length;r.push(T);i:for(;0<q;){var li=q-1>>>1,Gi=r[li];if(0<j(Gi,T))r[li]=T,r[q]=Gi,q=li;else break i}}function y(r){return r.length===0?null:r[0]}function s(r){if(r.length===0)return null;var T=r[0],q=r.pop();if(q!==T){r[0]=q;i:for(var li=0,Gi=r.length,G=Gi>>>1;li<G;){var z=2*(li+1)-1,x=r[z],_=z+1,Y=r[_];if(0>j(x,q))_<Gi&&0>j(Y,x)?(r[li]=Y,r[_]=q,li=_):(r[li]=x,r[z]=q,li=z);else if(_<Gi&&0>j(Y,q))r[li]=Y,r[_]=q,li=_;else break i}}return T}function j(r,T){var q=r.sortIndex-T.sortIndex;return q!==0?q:r.id-T.id}if(p.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var M=performance;p.unstable_now=function(){return M.now()}}else{var w=Date,fi=w.now();p.unstable_now=function(){return w.now()-fi}}var D=[],E=[],Z=1,U=null,Ci=3,xi=!1,qi=!1,ji=!1,_t=!1,ki=typeof setTimeout=="function"?setTimeout:null,kt=typeof clearTimeout=="function"?clearTimeout:null,Ni=typeof setImmediate<"u"?setImmediate:null;function lt(r){for(var T=y(E);T!==null;){if(T.callback===null)s(E);else if(T.startTime<=r)s(E),T.sortIndex=T.expirationTime,R(D,T);else break;T=y(E)}}function St(r){if(ji=!1,lt(r),!qi)if(y(D)!==null)qi=!0,Bi||(Bi=!0,Xi());else{var T=y(E);T!==null&&yt(St,T.startTime-r)}}var Bi=!1,$=-1,Yi=5,pt=-1;function Q1(){return _t?!0:!(p.unstable_now()-pt<Yi)}function zt(){if(_t=!1,Bi){var r=p.unstable_now();pt=r;var T=!0;try{i:{qi=!1,ji&&(ji=!1,kt($),$=-1),xi=!0;var q=Ci;try{t:{for(lt(r),U=y(D);U!==null&&!(U.expirationTime>r&&Q1());){var li=U.callback;if(typeof li=="function"){U.callback=null,Ci=U.priorityLevel;var Gi=li(U.expirationTime<=r);if(r=p.unstable_now(),typeof Gi=="function"){U.callback=Gi,lt(r),T=!0;break t}U===y(D)&&s(D),lt(r)}else s(D);U=y(D)}if(U!==null)T=!0;else{var G=y(E);G!==null&&yt(St,G.startTime-r),T=!1}}break i}finally{U=null,Ci=q,xi=!1}T=void 0}}finally{T?Xi():Bi=!1}}}var Xi;if(typeof Ni=="function")Xi=function(){Ni(zt)};else if(typeof MessageChannel<"u"){var S1=new MessageChannel,Ot=S1.port2;S1.port1.onmessage=zt,Xi=function(){Ot.postMessage(null)}}else Xi=function(){ki(zt,0)};function yt(r,T){$=ki(function(){r(p.unstable_now())},T)}p.unstable_IdlePriority=5,p.unstable_ImmediatePriority=1,p.unstable_LowPriority=4,p.unstable_NormalPriority=3,p.unstable_Profiling=null,p.unstable_UserBlockingPriority=2,p.unstable_cancelCallback=function(r){r.callback=null},p.unstable_forceFrameRate=function(r){0>r||125<r?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Yi=0<r?Math.floor(1e3/r):5},p.unstable_getCurrentPriorityLevel=function(){return Ci},p.unstable_next=function(r){switch(Ci){case 1:case 2:case 3:var T=3;break;default:T=Ci}var q=Ci;Ci=T;try{return r()}finally{Ci=q}},p.unstable_requestPaint=function(){_t=!0},p.unstable_runWithPriority=function(r,T){switch(r){case 1:case 2:case 3:case 4:case 5:break;default:r=3}var q=Ci;Ci=r;try{return T()}finally{Ci=q}},p.unstable_scheduleCallback=function(r,T,q){var li=p.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?li+q:li):q=li,r){case 1:var Gi=-1;break;case 2:Gi=250;break;case 5:Gi=1073741823;break;case 4:Gi=1e4;break;default:Gi=5e3}return Gi=q+Gi,r={id:Z++,callback:T,priorityLevel:r,startTime:q,expirationTime:Gi,sortIndex:-1},q>li?(r.sortIndex=q,R(E,r),y(D)===null&&r===y(E)&&(ji?(kt($),$=-1):ji=!0,yt(St,q-li))):(r.sortIndex=Gi,R(D,r),qi||xi||(qi=!0,Bi||(Bi=!0,Xi()))),r},p.unstable_shouldYield=Q1,p.unstable_wrapCallback=function(r){var T=Ci;return function(){var q=Ci;Ci=T;try{return r.apply(this,arguments)}finally{Ci=q}}}})(Ga)),Ga}var rc;function fd(){return rc||(rc=1,ea.exports=td()),ea.exports}var ca={exports:{}},Ui={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gc;function nd(){if(gc)return Ui;gc=1;var p=sa();function R(D){var E="https://react.dev/errors/"+D;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var Z=2;Z<arguments.length;Z++)E+="&args[]="+encodeURIComponent(arguments[Z])}return"Minified React error #"+D+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(){}var s={d:{f:y,r:function(){throw Error(R(522))},D:y,C:y,L:y,m:y,X:y,S:y,M:y},p:0,findDOMNode:null},j=Symbol.for("react.portal");function M(D,E,Z){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:j,key:U==null?null:""+U,children:D,containerInfo:E,implementation:Z}}var w=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function fi(D,E){if(D==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Ui.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ui.createPortal=function(D,E){var Z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(R(299));return M(D,E,null,Z)},Ui.flushSync=function(D){var E=w.T,Z=s.p;try{if(w.T=null,s.p=2,D)return D()}finally{w.T=E,s.p=Z,s.d.f()}},Ui.preconnect=function(D,E){typeof D=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,s.d.C(D,E))},Ui.prefetchDNS=function(D){typeof D=="string"&&s.d.D(D)},Ui.preinit=function(D,E){if(typeof D=="string"&&E&&typeof E.as=="string"){var Z=E.as,U=fi(Z,E.crossOrigin),Ci=typeof E.integrity=="string"?E.integrity:void 0,xi=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;Z==="style"?s.d.S(D,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:U,integrity:Ci,fetchPriority:xi}):Z==="script"&&s.d.X(D,{crossOrigin:U,integrity:Ci,fetchPriority:xi,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Ui.preinitModule=function(D,E){if(typeof D=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var Z=fi(E.as,E.crossOrigin);s.d.M(D,{crossOrigin:Z,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&s.d.M(D)},Ui.preload=function(D,E){if(typeof D=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var Z=E.as,U=fi(Z,E.crossOrigin);s.d.L(D,Z,{crossOrigin:U,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Ui.preloadModule=function(D,E){if(typeof D=="string")if(E){var Z=fi(E.as,E.crossOrigin);s.d.m(D,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:Z,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else s.d.m(D)},Ui.requestFormReset=function(D){s.d.r(D)},Ui.unstable_batchedUpdates=function(D,E){return D(E)},Ui.useFormState=function(D,E,Z){return w.H.useFormState(D,E,Z)},Ui.useFormStatus=function(){return w.H.useHostTransitionStatus()},Ui.version="19.2.3",Ui}var bc;function Ld(){if(bc)return ca.exports;bc=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(R){console.error(R)}}return p(),ca.exports=nd(),ca.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sc;function Cd(){if(Sc)return pn;Sc=1;var p=fd(),R=sa(),y=Ld();function s(i){var t="https://react.dev/errors/"+i;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var f=2;f<arguments.length;f++)t+="&args[]="+encodeURIComponent(arguments[f])}return"Minified React error #"+i+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function j(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function M(i){var t=i,f=i;if(i.alternate)for(;t.return;)t=t.return;else{i=t;do t=i,(t.flags&4098)!==0&&(f=t.return),i=t.return;while(i)}return t.tag===3?f:null}function w(i){if(i.tag===13){var t=i.memoizedState;if(t===null&&(i=i.alternate,i!==null&&(t=i.memoizedState)),t!==null)return t.dehydrated}return null}function fi(i){if(i.tag===31){var t=i.memoizedState;if(t===null&&(i=i.alternate,i!==null&&(t=i.memoizedState)),t!==null)return t.dehydrated}return null}function D(i){if(M(i)!==i)throw Error(s(188))}function E(i){var t=i.alternate;if(!t){if(t=M(i),t===null)throw Error(s(188));return t!==i?null:i}for(var f=i,n=t;;){var L=f.return;if(L===null)break;var C=L.alternate;if(C===null){if(n=L.return,n!==null){f=n;continue}break}if(L.child===C.child){for(C=L.child;C;){if(C===f)return D(L),i;if(C===n)return D(L),t;C=C.sibling}throw Error(s(188))}if(f.return!==n.return)f=L,n=C;else{for(var l=!1,a=L.child;a;){if(a===f){l=!0,f=L,n=C;break}if(a===n){l=!0,n=L,f=C;break}a=a.sibling}if(!l){for(a=C.child;a;){if(a===f){l=!0,f=C,n=L;break}if(a===n){l=!0,n=C,f=L;break}a=a.sibling}if(!l)throw Error(s(189))}}if(f.alternate!==n)throw Error(s(190))}if(f.tag!==3)throw Error(s(188));return f.stateNode.current===f?i:t}function Z(i){var t=i.tag;if(t===5||t===26||t===27||t===6)return i;for(i=i.child;i!==null;){if(t=Z(i),t!==null)return t;i=i.sibling}return null}var U=Object.assign,Ci=Symbol.for("react.element"),xi=Symbol.for("react.transitional.element"),qi=Symbol.for("react.portal"),ji=Symbol.for("react.fragment"),_t=Symbol.for("react.strict_mode"),ki=Symbol.for("react.profiler"),kt=Symbol.for("react.consumer"),Ni=Symbol.for("react.context"),lt=Symbol.for("react.forward_ref"),St=Symbol.for("react.suspense"),Bi=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),pt=Symbol.for("react.activity"),Q1=Symbol.for("react.memo_cache_sentinel"),zt=Symbol.iterator;function Xi(i){return i===null||typeof i!="object"?null:(i=zt&&i[zt]||i["@@iterator"],typeof i=="function"?i:null)}var S1=Symbol.for("react.client.reference");function Ot(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===S1?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case ji:return"Fragment";case ki:return"Profiler";case _t:return"StrictMode";case St:return"Suspense";case Bi:return"SuspenseList";case pt:return"Activity"}if(typeof i=="object")switch(i.$$typeof){case qi:return"Portal";case Ni:return i.displayName||"Context";case kt:return(i._context.displayName||"Context")+".Consumer";case lt:var t=i.render;return i=i.displayName,i||(i=t.displayName||t.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case $:return t=i.displayName||null,t!==null?t:Ot(i.type)||"Memo";case Yi:t=i._payload,i=i._init;try{return Ot(i(t))}catch{}}return null}var yt=Array.isArray,r=R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T=y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},li=[],Gi=-1;function G(i){return{current:i}}function z(i){0>Gi||(i.current=li[Gi],li[Gi]=null,Gi--)}function x(i,t){Gi++,li[Gi]=i.current,i.current=t}var _=G(null),Y=G(null),V=G(null),ti=G(null);function Hi(i,t){switch(x(V,t),x(Y,i),x(_,null),t.nodeType){case 9:case 11:i=(i=t.documentElement)&&(i=i.namespaceURI)?RG(i):0;break;default:if(i=t.tagName,t=t.namespaceURI)t=RG(t),i=qG(t,i);else switch(i){case"svg":i=1;break;case"math":i=2;break;default:i=0}}z(_),x(_,i)}function yi(){z(_),z(Y),z(V)}function Af(i){i.memoizedState!==null&&x(ti,i);var t=_.current,f=qG(t,i.type);t!==f&&(x(Y,i),x(_,f))}function zn(i){Y.current===i&&(z(_),z(Y)),ti.current===i&&(z(ti),hn._currentValue=q)}var QL,da;function p1(i){if(QL===void 0)try{throw Error()}catch(f){var t=f.stack.trim().match(/\n( *(at )?)/);QL=t&&t[1]||"",da=-1<f.stack.indexOf(`
    at`)?" (<anonymous>)":-1<f.stack.indexOf("@")?"@unknown:0:0":""}return`
`+QL+i+da}var ZL=!1;function VL(i,t){if(!i||ZL)return"";ZL=!0;var f=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(v){var m=v}Reflect.construct(i,[],S)}else{try{S.call()}catch(v){m=v}i.call(S.prototype)}}else{try{throw Error()}catch(v){m=v}(S=i())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(v){if(v&&m&&typeof v.stack=="string")return[v.stack,m.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var L=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");L&&L.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var C=n.DetermineComponentFrameRoot(),l=C[0],a=C[1];if(l&&a){var u=l.split(`
`),o=a.split(`
`);for(L=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;L<o.length&&!o[L].includes("DetermineComponentFrameRoot");)L++;if(n===u.length||L===o.length)for(n=u.length-1,L=o.length-1;1<=n&&0<=L&&u[n]!==o[L];)L--;for(;1<=n&&0<=L;n--,L--)if(u[n]!==o[L]){if(n!==1||L!==1)do if(n--,L--,0>L||u[n]!==o[L]){var h=`
`+u[n].replace(" at new "," at ");return i.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",i.displayName)),h}while(1<=n&&0<=L);break}}}finally{ZL=!1,Error.prepareStackTrace=f}return(f=i?i.displayName||i.name:"")?p1(f):""}function Ac(i,t){switch(i.tag){case 26:case 27:case 5:return p1(i.type);case 16:return p1("Lazy");case 13:return i.child!==t&&t!==null?p1("Suspense Fallback"):p1("Suspense");case 19:return p1("SuspenseList");case 0:case 15:return VL(i.type,!1);case 11:return VL(i.type.render,!1);case 1:return VL(i.type,!0);case 31:return p1("Activity");default:return""}}function oa(i){try{var t="",f=null;do t+=Ac(i,f),f=i,i=i.return;while(i);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var KL=Object.prototype.hasOwnProperty,JL=p.unstable_scheduleCallback,wL=p.unstable_cancelCallback,_c=p.unstable_shouldYield,Oc=p.unstable_requestPaint,$i=p.unstable_now,Mc=p.unstable_getCurrentPriorityLevel,ma=p.unstable_ImmediatePriority,va=p.unstable_UserBlockingPriority,En=p.unstable_NormalPriority,Dc=p.unstable_LowPriority,ya=p.unstable_IdlePriority,Nc=p.log,Uc=p.unstable_setDisableYieldValue,_f=null,Fi=null;function $t(i){if(typeof Nc=="function"&&Uc(i),Fi&&typeof Fi.setStrictMode=="function")try{Fi.setStrictMode(_f,i)}catch{}}var Ii=Math.clz32?Math.clz32:Rc,jc=Math.log,Hc=Math.LN2;function Rc(i){return i>>>=0,i===0?32:31-(jc(i)/Hc|0)|0}var Tn=256,xn=262144,An=4194304;function z1(i){var t=i&42;if(t!==0)return t;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return i&261888;case 262144:case 524288:case 1048576:case 2097152:return i&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function _n(i,t,f){var n=i.pendingLanes;if(n===0)return 0;var L=0,C=i.suspendedLanes,l=i.pingedLanes;i=i.warmLanes;var a=n&134217727;return a!==0?(n=a&~C,n!==0?L=z1(n):(l&=a,l!==0?L=z1(l):f||(f=a&~i,f!==0&&(L=z1(f))))):(a=n&~C,a!==0?L=z1(a):l!==0?L=z1(l):f||(f=n&~i,f!==0&&(L=z1(f)))),L===0?0:t!==0&&t!==L&&(t&C)===0&&(C=L&-L,f=t&-t,C>=f||C===32&&(f&4194048)!==0)?t:L}function Of(i,t){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&t)===0}function qc(i,t){switch(i){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ha(){var i=An;return An<<=1,(An&62914560)===0&&(An=4194304),i}function WL(i){for(var t=[],f=0;31>f;f++)t.push(i);return t}function Mf(i,t){i.pendingLanes|=t,t!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function Bc(i,t,f,n,L,C){var l=i.pendingLanes;i.pendingLanes=f,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=f,i.entangledLanes&=f,i.errorRecoveryDisabledLanes&=f,i.shellSuspendCounter=0;var a=i.entanglements,u=i.expirationTimes,o=i.hiddenUpdates;for(f=l&~f;0<f;){var h=31-Ii(f),S=1<<h;a[h]=0,u[h]=-1;var m=o[h];if(m!==null)for(o[h]=null,h=0;h<m.length;h++){var v=m[h];v!==null&&(v.lane&=-536870913)}f&=~S}n!==0&&ra(i,n,0),C!==0&&L===0&&i.tag!==0&&(i.suspendedLanes|=C&~(l&~t))}function ra(i,t,f){i.pendingLanes|=t,i.suspendedLanes&=~t;var n=31-Ii(t);i.entangledLanes|=t,i.entanglements[n]=i.entanglements[n]|1073741824|f&261930}function ga(i,t){var f=i.entangledLanes|=t;for(i=i.entanglements;f;){var n=31-Ii(f),L=1<<n;L&t|i[n]&t&&(i[n]|=t),f&=~L}}function ba(i,t){var f=t&-t;return f=(f&42)!==0?1:kL(f),(f&(i.suspendedLanes|t))!==0?0:f}function kL(i){switch(i){case 2:i=1;break;case 8:i=4;break;case 32:i=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:i=128;break;case 268435456:i=134217728;break;default:i=0}return i}function $L(i){return i&=-i,2<i?8<i?(i&134217727)!==0?32:268435456:8:2}function Sa(){var i=T.p;return i!==0?i:(i=window.event,i===void 0?32:ac(i.type))}function pa(i,t){var f=T.p;try{return T.p=i,t()}finally{T.p=f}}var Ft=Math.random().toString(36).slice(2),Ai="__reactFiber$"+Ft,Qi="__reactProps$"+Ft,Z1="__reactContainer$"+Ft,FL="__reactEvents$"+Ft,Yc="__reactListeners$"+Ft,Xc="__reactHandles$"+Ft,za="__reactResources$"+Ft,Df="__reactMarker$"+Ft;function IL(i){delete i[Ai],delete i[Qi],delete i[FL],delete i[Yc],delete i[Xc]}function V1(i){var t=i[Ai];if(t)return t;for(var f=i.parentNode;f;){if(t=f[Z1]||f[Ai]){if(f=t.alternate,t.child!==null||f!==null&&f.child!==null)for(i=KG(i);i!==null;){if(f=i[Ai])return f;i=KG(i)}return t}i=f,f=i.parentNode}return null}function K1(i){if(i=i[Ai]||i[Z1]){var t=i.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return i}return null}function Nf(i){var t=i.tag;if(t===5||t===26||t===27||t===6)return i.stateNode;throw Error(s(33))}function J1(i){var t=i[za];return t||(t=i[za]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ei(i){i[Df]=!0}var Ea=new Set,Ta={};function E1(i,t){w1(i,t),w1(i+"Capture",t)}function w1(i,t){for(Ta[i]=t,i=0;i<t.length;i++)Ea.add(t[i])}var Qc=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xa={},Aa={};function Zc(i){return KL.call(Aa,i)?!0:KL.call(xa,i)?!1:Qc.test(i)?Aa[i]=!0:(xa[i]=!0,!1)}function On(i,t,f){if(Zc(t))if(f===null)i.removeAttribute(t);else{switch(typeof f){case"undefined":case"function":case"symbol":i.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){i.removeAttribute(t);return}}i.setAttribute(t,""+f)}}function Mn(i,t,f){if(f===null)i.removeAttribute(t);else{switch(typeof f){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(t);return}i.setAttribute(t,""+f)}}function Mt(i,t,f,n){if(n===null)i.removeAttribute(f);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(f);return}i.setAttributeNS(t,f,""+n)}}function at(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function _a(i){var t=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vc(i,t,f){var n=Object.getOwnPropertyDescriptor(i.constructor.prototype,t);if(!i.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var L=n.get,C=n.set;return Object.defineProperty(i,t,{configurable:!0,get:function(){return L.call(this)},set:function(l){f=""+l,C.call(this,l)}}),Object.defineProperty(i,t,{enumerable:n.enumerable}),{getValue:function(){return f},setValue:function(l){f=""+l},stopTracking:function(){i._valueTracker=null,delete i[t]}}}}function PL(i){if(!i._valueTracker){var t=_a(i)?"checked":"value";i._valueTracker=Vc(i,t,""+i[t])}}function Oa(i){if(!i)return!1;var t=i._valueTracker;if(!t)return!0;var f=t.getValue(),n="";return i&&(n=_a(i)?i.checked?"true":"false":i.value),i=n,i!==f?(t.setValue(i),!0):!1}function Dn(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Kc=/[\n"\\]/g;function ut(i){return i.replace(Kc,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function iC(i,t,f,n,L,C,l,a){i.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?i.type=l:i.removeAttribute("type"),t!=null?l==="number"?(t===0&&i.value===""||i.value!=t)&&(i.value=""+at(t)):i.value!==""+at(t)&&(i.value=""+at(t)):l!=="submit"&&l!=="reset"||i.removeAttribute("value"),t!=null?tC(i,l,at(t)):f!=null?tC(i,l,at(f)):n!=null&&i.removeAttribute("value"),L==null&&C!=null&&(i.defaultChecked=!!C),L!=null&&(i.checked=L&&typeof L!="function"&&typeof L!="symbol"),a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?i.name=""+at(a):i.removeAttribute("name")}function Ma(i,t,f,n,L,C,l,a){if(C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"&&(i.type=C),t!=null||f!=null){if(!(C!=="submit"&&C!=="reset"||t!=null)){PL(i);return}f=f!=null?""+at(f):"",t=t!=null?""+at(t):f,a||t===i.value||(i.value=t),i.defaultValue=t}n=n??L,n=typeof n!="function"&&typeof n!="symbol"&&!!n,i.checked=a?i.checked:!!n,i.defaultChecked=!!n,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(i.name=l),PL(i)}function tC(i,t,f){t==="number"&&Dn(i.ownerDocument)===i||i.defaultValue===""+f||(i.defaultValue=""+f)}function W1(i,t,f,n){if(i=i.options,t){t={};for(var L=0;L<f.length;L++)t["$"+f[L]]=!0;for(f=0;f<i.length;f++)L=t.hasOwnProperty("$"+i[f].value),i[f].selected!==L&&(i[f].selected=L),L&&n&&(i[f].defaultSelected=!0)}else{for(f=""+at(f),t=null,L=0;L<i.length;L++){if(i[L].value===f){i[L].selected=!0,n&&(i[L].defaultSelected=!0);return}t!==null||i[L].disabled||(t=i[L])}t!==null&&(t.selected=!0)}}function Da(i,t,f){if(t!=null&&(t=""+at(t),t!==i.value&&(i.value=t),f==null)){i.defaultValue!==t&&(i.defaultValue=t);return}i.defaultValue=f!=null?""+at(f):""}function Na(i,t,f,n){if(t==null){if(n!=null){if(f!=null)throw Error(s(92));if(yt(n)){if(1<n.length)throw Error(s(93));n=n[0]}f=n}f==null&&(f=""),t=f}f=at(t),i.defaultValue=f,n=i.textContent,n===f&&n!==""&&n!==null&&(i.value=n),PL(i)}function k1(i,t){if(t){var f=i.firstChild;if(f&&f===i.lastChild&&f.nodeType===3){f.nodeValue=t;return}}i.textContent=t}var Jc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ua(i,t,f){var n=t.indexOf("--")===0;f==null||typeof f=="boolean"||f===""?n?i.setProperty(t,""):t==="float"?i.cssFloat="":i[t]="":n?i.setProperty(t,f):typeof f!="number"||f===0||Jc.has(t)?t==="float"?i.cssFloat=f:i[t]=(""+f).trim():i[t]=f+"px"}function ja(i,t,f){if(t!=null&&typeof t!="object")throw Error(s(62));if(i=i.style,f!=null){for(var n in f)!f.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?i.setProperty(n,""):n==="float"?i.cssFloat="":i[n]="");for(var L in t)n=t[L],t.hasOwnProperty(L)&&f[L]!==n&&Ua(i,L,n)}else for(var C in t)t.hasOwnProperty(C)&&Ua(i,C,t[C])}function fC(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wc=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wc=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Nn(i){return Wc.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}function Dt(){}var nC=null;function LC(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var $1=null,F1=null;function Ha(i){var t=K1(i);if(t&&(i=t.stateNode)){var f=i[Qi]||null;i:switch(i=t.stateNode,t.type){case"input":if(iC(i,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name),t=f.name,f.type==="radio"&&t!=null){for(f=i;f.parentNode;)f=f.parentNode;for(f=f.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<f.length;t++){var n=f[t];if(n!==i&&n.form===i.form){var L=n[Qi]||null;if(!L)throw Error(s(90));iC(n,L.value,L.defaultValue,L.defaultValue,L.checked,L.defaultChecked,L.type,L.name)}}for(t=0;t<f.length;t++)n=f[t],n.form===i.form&&Oa(n)}break i;case"textarea":Da(i,f.value,f.defaultValue);break i;case"select":t=f.value,t!=null&&W1(i,!!f.multiple,t,!1)}}}var CC=!1;function Ra(i,t,f){if(CC)return i(t,f);CC=!0;try{var n=i(t);return n}finally{if(CC=!1,($1!==null||F1!==null)&&(gL(),$1&&(t=$1,i=F1,F1=$1=null,Ha(t),i)))for(t=0;t<i.length;t++)Ha(i[t])}}function Uf(i,t){var f=i.stateNode;if(f===null)return null;var n=f[Qi]||null;if(n===null)return null;f=n[t];i:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(i=i.type,n=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!n;break i;default:i=!1}if(i)return null;if(f&&typeof f!="function")throw Error(s(231,t,typeof f));return f}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lC=!1;if(Nt)try{var jf={};Object.defineProperty(jf,"passive",{get:function(){lC=!0}}),window.addEventListener("test",jf,jf),window.removeEventListener("test",jf,jf)}catch{lC=!1}var It=null,aC=null,Un=null;function qa(){if(Un)return Un;var i,t=aC,f=t.length,n,L="value"in It?It.value:It.textContent,C=L.length;for(i=0;i<f&&t[i]===L[i];i++);var l=f-i;for(n=1;n<=l&&t[f-n]===L[C-n];n++);return Un=L.slice(i,1<n?1-n:void 0)}function jn(i){var t=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&t===13&&(i=13)):i=t,i===10&&(i=13),32<=i||i===13?i:0}function Hn(){return!0}function Ba(){return!1}function Zi(i){function t(f,n,L,C,l){this._reactName=f,this._targetInst=L,this.type=n,this.nativeEvent=C,this.target=l,this.currentTarget=null;for(var a in i)i.hasOwnProperty(a)&&(f=i[a],this[a]=f?f(C):C[a]);return this.isDefaultPrevented=(C.defaultPrevented!=null?C.defaultPrevented:C.returnValue===!1)?Hn:Ba,this.isPropagationStopped=Ba,this}return U(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Hn)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Hn)},persist:function(){},isPersistent:Hn}),t}var T1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=Zi(T1),Hf=U({},T1,{view:0,detail:0}),kc=Zi(Hf),uC,eC,Rf,qn=U({},Hf,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cC,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Rf&&(Rf&&i.type==="mousemove"?(uC=i.screenX-Rf.screenX,eC=i.screenY-Rf.screenY):eC=uC=0,Rf=i),uC)},movementY:function(i){return"movementY"in i?i.movementY:eC}}),Ya=Zi(qn),$c=U({},qn,{dataTransfer:0}),Fc=Zi($c),Ic=U({},Hf,{relatedTarget:0}),GC=Zi(Ic),Pc=U({},T1,{animationName:0,elapsedTime:0,pseudoElement:0}),i0=Zi(Pc),t0=U({},T1,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),f0=Zi(t0),n0=U({},T1,{data:0}),Xa=Zi(n0),L0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},C0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a0(i){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(i):(i=l0[i])?!!t[i]:!1}function cC(){return a0}var u0=U({},Hf,{key:function(i){if(i.key){var t=L0[i.key]||i.key;if(t!=="Unidentified")return t}return i.type==="keypress"?(i=jn(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?C0[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cC,charCode:function(i){return i.type==="keypress"?jn(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?jn(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),e0=Zi(u0),G0=U({},qn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qa=Zi(G0),c0=U({},Hf,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cC}),s0=Zi(c0),d0=U({},T1,{propertyName:0,elapsedTime:0,pseudoElement:0}),o0=Zi(d0),m0=U({},qn,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),v0=Zi(m0),y0=U({},T1,{newState:0,oldState:0}),h0=Zi(y0),r0=[9,13,27,32],sC=Nt&&"CompositionEvent"in window,qf=null;Nt&&"documentMode"in document&&(qf=document.documentMode);var g0=Nt&&"TextEvent"in window&&!qf,Za=Nt&&(!sC||qf&&8<qf&&11>=qf),Va=" ",Ka=!1;function Ja(i,t){switch(i){case"keyup":return r0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wa(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var I1=!1;function b0(i,t){switch(i){case"compositionend":return wa(t);case"keypress":return t.which!==32?null:(Ka=!0,Va);case"textInput":return i=t.data,i===Va&&Ka?null:i;default:return null}}function S0(i,t){if(I1)return i==="compositionend"||!sC&&Ja(i,t)?(i=qa(),Un=aC=It=null,I1=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Za&&t.locale!=="ko"?null:t.data;default:return null}}var p0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wa(i){var t=i&&i.nodeName&&i.nodeName.toLowerCase();return t==="input"?!!p0[i.type]:t==="textarea"}function ka(i,t,f,n){$1?F1?F1.push(n):F1=[n]:$1=n,t=xL(t,"onChange"),0<t.length&&(f=new Rn("onChange","change",null,f,n),i.push({event:f,listeners:t}))}var Bf=null,Yf=null;function z0(i){MG(i,0)}function Bn(i){var t=Nf(i);if(Oa(t))return i}function $a(i,t){if(i==="change")return t}var Fa=!1;if(Nt){var dC;if(Nt){var oC="oninput"in document;if(!oC){var Ia=document.createElement("div");Ia.setAttribute("oninput","return;"),oC=typeof Ia.oninput=="function"}dC=oC}else dC=!1;Fa=dC&&(!document.documentMode||9<document.documentMode)}function Pa(){Bf&&(Bf.detachEvent("onpropertychange",iu),Yf=Bf=null)}function iu(i){if(i.propertyName==="value"&&Bn(Yf)){var t=[];ka(t,Yf,i,LC(i)),Ra(z0,t)}}function E0(i,t,f){i==="focusin"?(Pa(),Bf=t,Yf=f,Bf.attachEvent("onpropertychange",iu)):i==="focusout"&&Pa()}function T0(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Bn(Yf)}function x0(i,t){if(i==="click")return Bn(t)}function A0(i,t){if(i==="input"||i==="change")return Bn(t)}function _0(i,t){return i===t&&(i!==0||1/i===1/t)||i!==i&&t!==t}var Pi=typeof Object.is=="function"?Object.is:_0;function Xf(i,t){if(Pi(i,t))return!0;if(typeof i!="object"||i===null||typeof t!="object"||t===null)return!1;var f=Object.keys(i),n=Object.keys(t);if(f.length!==n.length)return!1;for(n=0;n<f.length;n++){var L=f[n];if(!KL.call(t,L)||!Pi(i[L],t[L]))return!1}return!0}function tu(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function fu(i,t){var f=tu(i);i=0;for(var n;f;){if(f.nodeType===3){if(n=i+f.textContent.length,i<=t&&n>=t)return{node:f,offset:t-i};i=n}i:{for(;f;){if(f.nextSibling){f=f.nextSibling;break i}f=f.parentNode}f=void 0}f=tu(f)}}function nu(i,t){return i&&t?i===t?!0:i&&i.nodeType===3?!1:t&&t.nodeType===3?nu(i,t.parentNode):"contains"in i?i.contains(t):i.compareDocumentPosition?!!(i.compareDocumentPosition(t)&16):!1:!1}function Lu(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var t=Dn(i.document);t instanceof i.HTMLIFrameElement;){try{var f=typeof t.contentWindow.location.href=="string"}catch{f=!1}if(f)i=t.contentWindow;else break;t=Dn(i.document)}return t}function mC(i){var t=i&&i.nodeName&&i.nodeName.toLowerCase();return t&&(t==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||t==="textarea"||i.contentEditable==="true")}var O0=Nt&&"documentMode"in document&&11>=document.documentMode,P1=null,vC=null,Qf=null,yC=!1;function Cu(i,t,f){var n=f.window===f?f.document:f.nodeType===9?f:f.ownerDocument;yC||P1==null||P1!==Dn(n)||(n=P1,"selectionStart"in n&&mC(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Qf&&Xf(Qf,n)||(Qf=n,n=xL(vC,"onSelect"),0<n.length&&(t=new Rn("onSelect","select",null,t,f),i.push({event:t,listeners:n}),t.target=P1)))}function x1(i,t){var f={};return f[i.toLowerCase()]=t.toLowerCase(),f["Webkit"+i]="webkit"+t,f["Moz"+i]="moz"+t,f}var tf={animationend:x1("Animation","AnimationEnd"),animationiteration:x1("Animation","AnimationIteration"),animationstart:x1("Animation","AnimationStart"),transitionrun:x1("Transition","TransitionRun"),transitionstart:x1("Transition","TransitionStart"),transitioncancel:x1("Transition","TransitionCancel"),transitionend:x1("Transition","TransitionEnd")},hC={},lu={};Nt&&(lu=document.createElement("div").style,"AnimationEvent"in window||(delete tf.animationend.animation,delete tf.animationiteration.animation,delete tf.animationstart.animation),"TransitionEvent"in window||delete tf.transitionend.transition);function A1(i){if(hC[i])return hC[i];if(!tf[i])return i;var t=tf[i],f;for(f in t)if(t.hasOwnProperty(f)&&f in lu)return hC[i]=t[f];return i}var au=A1("animationend"),uu=A1("animationiteration"),eu=A1("animationstart"),M0=A1("transitionrun"),D0=A1("transitionstart"),N0=A1("transitioncancel"),Gu=A1("transitionend"),cu=new Map,rC="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");rC.push("scrollEnd");function ht(i,t){cu.set(i,t),E1(t,[i])}var Yn=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)},et=[],ff=0,gC=0;function Xn(){for(var i=ff,t=gC=ff=0;t<i;){var f=et[t];et[t++]=null;var n=et[t];et[t++]=null;var L=et[t];et[t++]=null;var C=et[t];if(et[t++]=null,n!==null&&L!==null){var l=n.pending;l===null?L.next=L:(L.next=l.next,l.next=L),n.pending=L}C!==0&&su(f,L,C)}}function Qn(i,t,f,n){et[ff++]=i,et[ff++]=t,et[ff++]=f,et[ff++]=n,gC|=n,i.lanes|=n,i=i.alternate,i!==null&&(i.lanes|=n)}function bC(i,t,f,n){return Qn(i,t,f,n),Zn(i)}function _1(i,t){return Qn(i,null,null,t),Zn(i)}function su(i,t,f){i.lanes|=f;var n=i.alternate;n!==null&&(n.lanes|=f);for(var L=!1,C=i.return;C!==null;)C.childLanes|=f,n=C.alternate,n!==null&&(n.childLanes|=f),C.tag===22&&(i=C.stateNode,i===null||i._visibility&1||(L=!0)),i=C,C=C.return;return i.tag===3?(C=i.stateNode,L&&t!==null&&(L=31-Ii(f),i=C.hiddenUpdates,n=i[L],n===null?i[L]=[t]:n.push(t),t.lane=f|536870912),C):null}function Zn(i){if(50<cn)throw cn=0,Ol=null,Error(s(185));for(var t=i.return;t!==null;)i=t,t=i.return;return i.tag===3?i.stateNode:null}var nf={};function U0(i,t,f,n){this.tag=i,this.key=f,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(i,t,f,n){return new U0(i,t,f,n)}function SC(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Ut(i,t){var f=i.alternate;return f===null?(f=it(i.tag,t,i.key,i.mode),f.elementType=i.elementType,f.type=i.type,f.stateNode=i.stateNode,f.alternate=i,i.alternate=f):(f.pendingProps=t,f.type=i.type,f.flags=0,f.subtreeFlags=0,f.deletions=null),f.flags=i.flags&65011712,f.childLanes=i.childLanes,f.lanes=i.lanes,f.child=i.child,f.memoizedProps=i.memoizedProps,f.memoizedState=i.memoizedState,f.updateQueue=i.updateQueue,t=i.dependencies,f.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},f.sibling=i.sibling,f.index=i.index,f.ref=i.ref,f.refCleanup=i.refCleanup,f}function du(i,t){i.flags&=65011714;var f=i.alternate;return f===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=f.childLanes,i.lanes=f.lanes,i.child=f.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=f.memoizedProps,i.memoizedState=f.memoizedState,i.updateQueue=f.updateQueue,i.type=f.type,t=f.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),i}function Vn(i,t,f,n,L,C){var l=0;if(n=i,typeof i=="function")SC(i)&&(l=1);else if(typeof i=="string")l=Bs(i,f,_.current)?26:i==="html"||i==="head"||i==="body"?27:5;else i:switch(i){case pt:return i=it(31,f,t,L),i.elementType=pt,i.lanes=C,i;case ji:return O1(f.children,L,C,t);case _t:l=8,L|=24;break;case ki:return i=it(12,f,t,L|2),i.elementType=ki,i.lanes=C,i;case St:return i=it(13,f,t,L),i.elementType=St,i.lanes=C,i;case Bi:return i=it(19,f,t,L),i.elementType=Bi,i.lanes=C,i;default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Ni:l=10;break i;case kt:l=9;break i;case lt:l=11;break i;case $:l=14;break i;case Yi:l=16,n=null;break i}l=29,f=Error(s(130,i===null?"null":typeof i,"")),n=null}return t=it(l,f,t,L),t.elementType=i,t.type=n,t.lanes=C,t}function O1(i,t,f,n){return i=it(7,i,n,t),i.lanes=f,i}function pC(i,t,f){return i=it(6,i,null,t),i.lanes=f,i}function ou(i){var t=it(18,null,null,0);return t.stateNode=i,t}function zC(i,t,f){return t=it(4,i.children!==null?i.children:[],i.key,t),t.lanes=f,t.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},t}var mu=new WeakMap;function Gt(i,t){if(typeof i=="object"&&i!==null){var f=mu.get(i);return f!==void 0?f:(t={value:i,source:t,stack:oa(t)},mu.set(i,t),t)}return{value:i,source:t,stack:oa(t)}}var Lf=[],Cf=0,Kn=null,Zf=0,ct=[],st=0,Pt=null,Et=1,Tt="";function jt(i,t){Lf[Cf++]=Zf,Lf[Cf++]=Kn,Kn=i,Zf=t}function vu(i,t,f){ct[st++]=Et,ct[st++]=Tt,ct[st++]=Pt,Pt=i;var n=Et;i=Tt;var L=32-Ii(n)-1;n&=~(1<<L),f+=1;var C=32-Ii(t)+L;if(30<C){var l=L-L%5;C=(n&(1<<l)-1).toString(32),n>>=l,L-=l,Et=1<<32-Ii(t)+L|f<<L|n,Tt=C+i}else Et=1<<C|f<<L|n,Tt=i}function EC(i){i.return!==null&&(jt(i,1),vu(i,1,0))}function TC(i){for(;i===Kn;)Kn=Lf[--Cf],Lf[Cf]=null,Zf=Lf[--Cf],Lf[Cf]=null;for(;i===Pt;)Pt=ct[--st],ct[st]=null,Tt=ct[--st],ct[st]=null,Et=ct[--st],ct[st]=null}function yu(i,t){ct[st++]=Et,ct[st++]=Tt,ct[st++]=Pt,Et=t.id,Tt=t.overflow,Pt=i}var _i=null,si=null,F=!1,i1=null,dt=!1,xC=Error(s(519));function t1(i){var t=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vf(Gt(t,i)),xC}function hu(i){var t=i.stateNode,f=i.type,n=i.memoizedProps;switch(t[Ai]=i,t[Qi]=n,f){case"dialog":J("cancel",t),J("close",t);break;case"iframe":case"object":case"embed":J("load",t);break;case"video":case"audio":for(f=0;f<dn.length;f++)J(dn[f],t);break;case"source":J("error",t);break;case"img":case"image":case"link":J("error",t),J("load",t);break;case"details":J("toggle",t);break;case"input":J("invalid",t),Ma(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":J("invalid",t);break;case"textarea":J("invalid",t),Na(t,n.value,n.defaultValue,n.children)}f=n.children,typeof f!="string"&&typeof f!="number"&&typeof f!="bigint"||t.textContent===""+f||n.suppressHydrationWarning===!0||jG(t.textContent,f)?(n.popover!=null&&(J("beforetoggle",t),J("toggle",t)),n.onScroll!=null&&J("scroll",t),n.onScrollEnd!=null&&J("scrollend",t),n.onClick!=null&&(t.onclick=Dt),t=!0):t=!1,t||t1(i,!0)}function ru(i){for(_i=i.return;_i;)switch(_i.tag){case 5:case 31:case 13:dt=!1;return;case 27:case 3:dt=!0;return;default:_i=_i.return}}function lf(i){if(i!==_i)return!1;if(!F)return ru(i),F=!0,!1;var t=i.tag,f;if((f=t!==3&&t!==27)&&((f=t===5)&&(f=i.type,f=!(f!=="form"&&f!=="button")||Kl(i.type,i.memoizedProps)),f=!f),f&&si&&t1(i),ru(i),t===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));si=VG(i)}else if(t===31){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(317));si=VG(i)}else t===27?(t=si,m1(i.type)?(i=$l,$l=null,si=i):si=t):si=_i?mt(i.stateNode.nextSibling):null;return!0}function M1(){si=_i=null,F=!1}function AC(){var i=i1;return i!==null&&(wi===null?wi=i:wi.push.apply(wi,i),i1=null),i}function Vf(i){i1===null?i1=[i]:i1.push(i)}var _C=G(null),D1=null,Ht=null;function f1(i,t,f){x(_C,t._currentValue),t._currentValue=f}function Rt(i){i._currentValue=_C.current,z(_C)}function OC(i,t,f){for(;i!==null;){var n=i.alternate;if((i.childLanes&t)!==t?(i.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),i===f)break;i=i.return}}function MC(i,t,f,n){var L=i.child;for(L!==null&&(L.return=i);L!==null;){var C=L.dependencies;if(C!==null){var l=L.child;C=C.firstContext;i:for(;C!==null;){var a=C;C=L;for(var u=0;u<t.length;u++)if(a.context===t[u]){C.lanes|=f,a=C.alternate,a!==null&&(a.lanes|=f),OC(C.return,f,i),n||(l=null);break i}C=a.next}}else if(L.tag===18){if(l=L.return,l===null)throw Error(s(341));l.lanes|=f,C=l.alternate,C!==null&&(C.lanes|=f),OC(l,f,i),l=null}else l=L.child;if(l!==null)l.return=L;else for(l=L;l!==null;){if(l===i){l=null;break}if(L=l.sibling,L!==null){L.return=l.return,l=L;break}l=l.return}L=l}}function af(i,t,f,n){i=null;for(var L=t,C=!1;L!==null;){if(!C){if((L.flags&524288)!==0)C=!0;else if((L.flags&262144)!==0)break}if(L.tag===10){var l=L.alternate;if(l===null)throw Error(s(387));if(l=l.memoizedProps,l!==null){var a=L.type;Pi(L.pendingProps.value,l.value)||(i!==null?i.push(a):i=[a])}}else if(L===ti.current){if(l=L.alternate,l===null)throw Error(s(387));l.memoizedState.memoizedState!==L.memoizedState.memoizedState&&(i!==null?i.push(hn):i=[hn])}L=L.return}i!==null&&MC(t,i,f,n),t.flags|=262144}function Jn(i){for(i=i.firstContext;i!==null;){if(!Pi(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function N1(i){D1=i,Ht=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Oi(i){return gu(D1,i)}function wn(i,t){return D1===null&&N1(i),gu(i,t)}function gu(i,t){var f=t._currentValue;if(t={context:t,memoizedValue:f,next:null},Ht===null){if(i===null)throw Error(s(308));Ht=t,i.dependencies={lanes:0,firstContext:t},i.flags|=524288}else Ht=Ht.next=t;return f}var j0=typeof AbortController<"u"?AbortController:function(){var i=[],t=this.signal={aborted:!1,addEventListener:function(f,n){i.push(n)}};this.abort=function(){t.aborted=!0,i.forEach(function(f){return f()})}},H0=p.unstable_scheduleCallback,R0=p.unstable_NormalPriority,gi={$$typeof:Ni,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function DC(){return{controller:new j0,data:new Map,refCount:0}}function Kf(i){i.refCount--,i.refCount===0&&H0(R0,function(){i.controller.abort()})}var Jf=null,NC=0,uf=0,ef=null;function q0(i,t){if(Jf===null){var f=Jf=[];NC=0,uf=Hl(),ef={status:"pending",value:void 0,then:function(n){f.push(n)}}}return NC++,t.then(bu,bu),t}function bu(){if(--NC===0&&Jf!==null){ef!==null&&(ef.status="fulfilled");var i=Jf;Jf=null,uf=0,ef=null;for(var t=0;t<i.length;t++)(0,i[t])()}}function B0(i,t){var f=[],n={status:"pending",value:null,reason:null,then:function(L){f.push(L)}};return i.then(function(){n.status="fulfilled",n.value=t;for(var L=0;L<f.length;L++)(0,f[L])(t)},function(L){for(n.status="rejected",n.reason=L,L=0;L<f.length;L++)(0,f[L])(void 0)}),n}var Su=r.S;r.S=function(i,t){CG=$i(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&q0(i,t),Su!==null&&Su(i,t)};var U1=G(null);function UC(){var i=U1.current;return i!==null?i:ci.pooledCache}function Wn(i,t){t===null?x(U1,U1.current):x(U1,t.pool)}function pu(){var i=UC();return i===null?null:{parent:gi._currentValue,pool:i}}var Gf=Error(s(460)),jC=Error(s(474)),kn=Error(s(542)),$n={then:function(){}};function zu(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Eu(i,t,f){switch(f=i[f],f===void 0?i.push(t):f!==t&&(t.then(Dt,Dt),t=f),t.status){case"fulfilled":return t.value;case"rejected":throw i=t.reason,xu(i),i;default:if(typeof t.status=="string")t.then(Dt,Dt);else{if(i=ci,i!==null&&100<i.shellSuspendCounter)throw Error(s(482));i=t,i.status="pending",i.then(function(n){if(t.status==="pending"){var L=t;L.status="fulfilled",L.value=n}},function(n){if(t.status==="pending"){var L=t;L.status="rejected",L.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw i=t.reason,xu(i),i}throw H1=t,Gf}}function j1(i){try{var t=i._init;return t(i._payload)}catch(f){throw f!==null&&typeof f=="object"&&typeof f.then=="function"?(H1=f,Gf):f}}var H1=null;function Tu(){if(H1===null)throw Error(s(459));var i=H1;return H1=null,i}function xu(i){if(i===Gf||i===kn)throw Error(s(483))}var cf=null,wf=0;function Fn(i){var t=wf;return wf+=1,cf===null&&(cf=[]),Eu(cf,i,t)}function Wf(i,t){t=t.props.ref,i.ref=t!==void 0?t:null}function In(i,t){throw t.$$typeof===Ci?Error(s(525)):(i=Object.prototype.toString.call(t),Error(s(31,i==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":i)))}function Au(i){function t(c,e){if(i){var d=c.deletions;d===null?(c.deletions=[e],c.flags|=16):d.push(e)}}function f(c,e){if(!i)return null;for(;e!==null;)t(c,e),e=e.sibling;return null}function n(c){for(var e=new Map;c!==null;)c.key!==null?e.set(c.key,c):e.set(c.index,c),c=c.sibling;return e}function L(c,e){return c=Ut(c,e),c.index=0,c.sibling=null,c}function C(c,e,d){return c.index=d,i?(d=c.alternate,d!==null?(d=d.index,d<e?(c.flags|=67108866,e):d):(c.flags|=67108866,e)):(c.flags|=1048576,e)}function l(c){return i&&c.alternate===null&&(c.flags|=67108866),c}function a(c,e,d,b){return e===null||e.tag!==6?(e=pC(d,c.mode,b),e.return=c,e):(e=L(e,d),e.return=c,e)}function u(c,e,d,b){var N=d.type;return N===ji?h(c,e,d.props.children,b,d.key):e!==null&&(e.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Yi&&j1(N)===e.type)?(e=L(e,d.props),Wf(e,d),e.return=c,e):(e=Vn(d.type,d.key,d.props,null,c.mode,b),Wf(e,d),e.return=c,e)}function o(c,e,d,b){return e===null||e.tag!==4||e.stateNode.containerInfo!==d.containerInfo||e.stateNode.implementation!==d.implementation?(e=zC(d,c.mode,b),e.return=c,e):(e=L(e,d.children||[]),e.return=c,e)}function h(c,e,d,b,N){return e===null||e.tag!==7?(e=O1(d,c.mode,b,N),e.return=c,e):(e=L(e,d),e.return=c,e)}function S(c,e,d){if(typeof e=="string"&&e!==""||typeof e=="number"||typeof e=="bigint")return e=pC(""+e,c.mode,d),e.return=c,e;if(typeof e=="object"&&e!==null){switch(e.$$typeof){case xi:return d=Vn(e.type,e.key,e.props,null,c.mode,d),Wf(d,e),d.return=c,d;case qi:return e=zC(e,c.mode,d),e.return=c,e;case Yi:return e=j1(e),S(c,e,d)}if(yt(e)||Xi(e))return e=O1(e,c.mode,d,null),e.return=c,e;if(typeof e.then=="function")return S(c,Fn(e),d);if(e.$$typeof===Ni)return S(c,wn(c,e),d);In(c,e)}return null}function m(c,e,d,b){var N=e!==null?e.key:null;if(typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint")return N!==null?null:a(c,e,""+d,b);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xi:return d.key===N?u(c,e,d,b):null;case qi:return d.key===N?o(c,e,d,b):null;case Yi:return d=j1(d),m(c,e,d,b)}if(yt(d)||Xi(d))return N!==null?null:h(c,e,d,b,null);if(typeof d.then=="function")return m(c,e,Fn(d),b);if(d.$$typeof===Ni)return m(c,e,wn(c,d),b);In(c,d)}return null}function v(c,e,d,b,N){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return c=c.get(d)||null,a(e,c,""+b,N);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case xi:return c=c.get(b.key===null?d:b.key)||null,u(e,c,b,N);case qi:return c=c.get(b.key===null?d:b.key)||null,o(e,c,b,N);case Yi:return b=j1(b),v(c,e,d,b,N)}if(yt(b)||Xi(b))return c=c.get(d)||null,h(e,c,b,N,null);if(typeof b.then=="function")return v(c,e,d,Fn(b),N);if(b.$$typeof===Ni)return v(c,e,d,wn(e,b),N);In(e,b)}return null}function A(c,e,d,b){for(var N=null,I=null,O=e,Q=e=0,k=null;O!==null&&Q<d.length;Q++){O.index>Q?(k=O,O=null):k=O.sibling;var P=m(c,O,d[Q],b);if(P===null){O===null&&(O=k);break}i&&O&&P.alternate===null&&t(c,O),e=C(P,e,Q),I===null?N=P:I.sibling=P,I=P,O=k}if(Q===d.length)return f(c,O),F&&jt(c,Q),N;if(O===null){for(;Q<d.length;Q++)O=S(c,d[Q],b),O!==null&&(e=C(O,e,Q),I===null?N=O:I.sibling=O,I=O);return F&&jt(c,Q),N}for(O=n(O);Q<d.length;Q++)k=v(O,c,Q,d[Q],b),k!==null&&(i&&k.alternate!==null&&O.delete(k.key===null?Q:k.key),e=C(k,e,Q),I===null?N=k:I.sibling=k,I=k);return i&&O.forEach(function(g1){return t(c,g1)}),F&&jt(c,Q),N}function H(c,e,d,b){if(d==null)throw Error(s(151));for(var N=null,I=null,O=e,Q=e=0,k=null,P=d.next();O!==null&&!P.done;Q++,P=d.next()){O.index>Q?(k=O,O=null):k=O.sibling;var g1=m(c,O,P.value,b);if(g1===null){O===null&&(O=k);break}i&&O&&g1.alternate===null&&t(c,O),e=C(g1,e,Q),I===null?N=g1:I.sibling=g1,I=g1,O=k}if(P.done)return f(c,O),F&&jt(c,Q),N;if(O===null){for(;!P.done;Q++,P=d.next())P=S(c,P.value,b),P!==null&&(e=C(P,e,Q),I===null?N=P:I.sibling=P,I=P);return F&&jt(c,Q),N}for(O=n(O);!P.done;Q++,P=d.next())P=v(O,c,Q,P.value,b),P!==null&&(i&&P.alternate!==null&&O.delete(P.key===null?Q:P.key),e=C(P,e,Q),I===null?N=P:I.sibling=P,I=P);return i&&O.forEach(function($s){return t(c,$s)}),F&&jt(c,Q),N}function ei(c,e,d,b){if(typeof d=="object"&&d!==null&&d.type===ji&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case xi:i:{for(var N=d.key;e!==null;){if(e.key===N){if(N=d.type,N===ji){if(e.tag===7){f(c,e.sibling),b=L(e,d.props.children),b.return=c,c=b;break i}}else if(e.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Yi&&j1(N)===e.type){f(c,e.sibling),b=L(e,d.props),Wf(b,d),b.return=c,c=b;break i}f(c,e);break}else t(c,e);e=e.sibling}d.type===ji?(b=O1(d.props.children,c.mode,b,d.key),b.return=c,c=b):(b=Vn(d.type,d.key,d.props,null,c.mode,b),Wf(b,d),b.return=c,c=b)}return l(c);case qi:i:{for(N=d.key;e!==null;){if(e.key===N)if(e.tag===4&&e.stateNode.containerInfo===d.containerInfo&&e.stateNode.implementation===d.implementation){f(c,e.sibling),b=L(e,d.children||[]),b.return=c,c=b;break i}else{f(c,e);break}else t(c,e);e=e.sibling}b=zC(d,c.mode,b),b.return=c,c=b}return l(c);case Yi:return d=j1(d),ei(c,e,d,b)}if(yt(d))return A(c,e,d,b);if(Xi(d)){if(N=Xi(d),typeof N!="function")throw Error(s(150));return d=N.call(d),H(c,e,d,b)}if(typeof d.then=="function")return ei(c,e,Fn(d),b);if(d.$$typeof===Ni)return ei(c,e,wn(c,d),b);In(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"||typeof d=="bigint"?(d=""+d,e!==null&&e.tag===6?(f(c,e.sibling),b=L(e,d),b.return=c,c=b):(f(c,e),b=pC(d,c.mode,b),b.return=c,c=b),l(c)):f(c,e)}return function(c,e,d,b){try{wf=0;var N=ei(c,e,d,b);return cf=null,N}catch(O){if(O===Gf||O===kn)throw O;var I=it(29,O,null,c.mode);return I.lanes=b,I.return=c,I}finally{}}}var R1=Au(!0),_u=Au(!1),n1=!1;function HC(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function RC(i,t){i=i.updateQueue,t.updateQueue===i&&(t.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function L1(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function C1(i,t,f){var n=i.updateQueue;if(n===null)return null;if(n=n.shared,(ii&2)!==0){var L=n.pending;return L===null?t.next=t:(t.next=L.next,L.next=t),n.pending=t,t=Zn(i),su(i,null,f),t}return Qn(i,n,t,f),Zn(i)}function kf(i,t,f){if(t=t.updateQueue,t!==null&&(t=t.shared,(f&4194048)!==0)){var n=t.lanes;n&=i.pendingLanes,f|=n,t.lanes=f,ga(i,f)}}function qC(i,t){var f=i.updateQueue,n=i.alternate;if(n!==null&&(n=n.updateQueue,f===n)){var L=null,C=null;if(f=f.firstBaseUpdate,f!==null){do{var l={lane:f.lane,tag:f.tag,payload:f.payload,callback:null,next:null};C===null?L=C=l:C=C.next=l,f=f.next}while(f!==null);C===null?L=C=t:C=C.next=t}else L=C=t;f={baseState:n.baseState,firstBaseUpdate:L,lastBaseUpdate:C,shared:n.shared,callbacks:n.callbacks},i.updateQueue=f;return}i=f.lastBaseUpdate,i===null?f.firstBaseUpdate=t:i.next=t,f.lastBaseUpdate=t}var BC=!1;function $f(){if(BC){var i=ef;if(i!==null)throw i}}function Ff(i,t,f,n){BC=!1;var L=i.updateQueue;n1=!1;var C=L.firstBaseUpdate,l=L.lastBaseUpdate,a=L.shared.pending;if(a!==null){L.shared.pending=null;var u=a,o=u.next;u.next=null,l===null?C=o:l.next=o,l=u;var h=i.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==l&&(a===null?h.firstBaseUpdate=o:a.next=o,h.lastBaseUpdate=u))}if(C!==null){var S=L.baseState;l=0,h=o=u=null,a=C;do{var m=a.lane&-536870913,v=m!==a.lane;if(v?(W&m)===m:(n&m)===m){m!==0&&m===uf&&(BC=!0),h!==null&&(h=h.next={lane:0,tag:a.tag,payload:a.payload,callback:null,next:null});i:{var A=i,H=a;m=t;var ei=f;switch(H.tag){case 1:if(A=H.payload,typeof A=="function"){S=A.call(ei,S,m);break i}S=A;break i;case 3:A.flags=A.flags&-65537|128;case 0:if(A=H.payload,m=typeof A=="function"?A.call(ei,S,m):A,m==null)break i;S=U({},S,m);break i;case 2:n1=!0}}m=a.callback,m!==null&&(i.flags|=64,v&&(i.flags|=8192),v=L.callbacks,v===null?L.callbacks=[m]:v.push(m))}else v={lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(o=h=v,u=S):h=h.next=v,l|=m;if(a=a.next,a===null){if(a=L.shared.pending,a===null)break;v=a,a=v.next,v.next=null,L.lastBaseUpdate=v,L.shared.pending=null}}while(!0);h===null&&(u=S),L.baseState=u,L.firstBaseUpdate=o,L.lastBaseUpdate=h,C===null&&(L.shared.lanes=0),G1|=l,i.lanes=l,i.memoizedState=S}}function Ou(i,t){if(typeof i!="function")throw Error(s(191,i));i.call(t)}function Mu(i,t){var f=i.callbacks;if(f!==null)for(i.callbacks=null,i=0;i<f.length;i++)Ou(f[i],t)}var sf=G(null),Pn=G(0);function Du(i,t){i=Jt,x(Pn,i),x(sf,t),Jt=i|t.baseLanes}function YC(){x(Pn,Jt),x(sf,sf.current)}function XC(){Jt=Pn.current,z(sf),z(Pn)}var tt=G(null),ot=null;function l1(i){var t=i.alternate;x(hi,hi.current&1),x(tt,i),ot===null&&(t===null||sf.current!==null||t.memoizedState!==null)&&(ot=i)}function QC(i){x(hi,hi.current),x(tt,i),ot===null&&(ot=i)}function Nu(i){i.tag===22?(x(hi,hi.current),x(tt,i),ot===null&&(ot=i)):a1()}function a1(){x(hi,hi.current),x(tt,tt.current)}function ft(i){z(tt),ot===i&&(ot=null),z(hi)}var hi=G(0);function iL(i){for(var t=i;t!==null;){if(t.tag===13){var f=t.memoizedState;if(f!==null&&(f=f.dehydrated,f===null||Wl(f)||kl(f)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break;for(;t.sibling===null;){if(t.return===null||t.return===i)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qt=0,X=null,ai=null,bi=null,tL=!1,df=!1,q1=!1,fL=0,If=0,of=null,Y0=0;function mi(){throw Error(s(321))}function ZC(i,t){if(t===null)return!1;for(var f=0;f<t.length&&f<i.length;f++)if(!Pi(i[f],t[f]))return!1;return!0}function VC(i,t,f,n,L,C){return qt=C,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,r.H=i===null||i.memoizedState===null?ve:Cl,q1=!1,C=f(n,L),q1=!1,df&&(C=ju(t,f,n,L)),Uu(i),C}function Uu(i){r.H=fn;var t=ai!==null&&ai.next!==null;if(qt=0,bi=ai=X=null,tL=!1,If=0,of=null,t)throw Error(s(300));i===null||Si||(i=i.dependencies,i!==null&&Jn(i)&&(Si=!0))}function ju(i,t,f,n){X=i;var L=0;do{if(df&&(of=null),If=0,df=!1,25<=L)throw Error(s(301));if(L+=1,bi=ai=null,i.updateQueue!=null){var C=i.updateQueue;C.lastEffect=null,C.events=null,C.stores=null,C.memoCache!=null&&(C.memoCache.index=0)}r.H=ye,C=t(f,n)}while(df);return C}function X0(){var i=r.H,t=i.useState()[0];return t=typeof t.then=="function"?Pf(t):t,i=i.useState()[0],(ai!==null?ai.memoizedState:null)!==i&&(X.flags|=1024),t}function KC(){var i=fL!==0;return fL=0,i}function JC(i,t,f){t.updateQueue=i.updateQueue,t.flags&=-2053,i.lanes&=~f}function wC(i){if(tL){for(i=i.memoizedState;i!==null;){var t=i.queue;t!==null&&(t.pending=null),i=i.next}tL=!1}qt=0,bi=ai=X=null,df=!1,If=fL=0,of=null}function Ri(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bi===null?X.memoizedState=bi=i:bi=bi.next=i,bi}function ri(){if(ai===null){var i=X.alternate;i=i!==null?i.memoizedState:null}else i=ai.next;var t=bi===null?X.memoizedState:bi.next;if(t!==null)bi=t,ai=i;else{if(i===null)throw X.alternate===null?Error(s(467)):Error(s(310));ai=i,i={memoizedState:ai.memoizedState,baseState:ai.baseState,baseQueue:ai.baseQueue,queue:ai.queue,next:null},bi===null?X.memoizedState=bi=i:bi=bi.next=i}return bi}function nL(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pf(i){var t=If;return If+=1,of===null&&(of=[]),i=Eu(of,i,t),t=X,(bi===null?t.memoizedState:bi.next)===null&&(t=t.alternate,r.H=t===null||t.memoizedState===null?ve:Cl),i}function LL(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Pf(i);if(i.$$typeof===Ni)return Oi(i)}throw Error(s(438,String(i)))}function WC(i){var t=null,f=X.updateQueue;if(f!==null&&(t=f.memoCache),t==null){var n=X.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(L){return L.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),f===null&&(f=nL(),X.updateQueue=f),f.memoCache=t,f=t.data[t.index],f===void 0)for(f=t.data[t.index]=Array(i),n=0;n<i;n++)f[n]=Q1;return t.index++,f}function Bt(i,t){return typeof t=="function"?t(i):t}function CL(i){var t=ri();return kC(t,ai,i)}function kC(i,t,f){var n=i.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=f;var L=i.baseQueue,C=n.pending;if(C!==null){if(L!==null){var l=L.next;L.next=C.next,C.next=l}t.baseQueue=L=C,n.pending=null}if(C=i.baseState,L===null)i.memoizedState=C;else{t=L.next;var a=l=null,u=null,o=t,h=!1;do{var S=o.lane&-536870913;if(S!==o.lane?(W&S)===S:(qt&S)===S){var m=o.revertLane;if(m===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null}),S===uf&&(h=!0);else if((qt&m)===m){o=o.next,m===uf&&(h=!0);continue}else S={lane:0,revertLane:o.revertLane,gesture:null,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},u===null?(a=u=S,l=C):u=u.next=S,X.lanes|=m,G1|=m;S=o.action,q1&&f(C,S),C=o.hasEagerState?o.eagerState:f(C,S)}else m={lane:S,revertLane:o.revertLane,gesture:o.gesture,action:o.action,hasEagerState:o.hasEagerState,eagerState:o.eagerState,next:null},u===null?(a=u=m,l=C):u=u.next=m,X.lanes|=S,G1|=S;o=o.next}while(o!==null&&o!==t);if(u===null?l=C:u.next=a,!Pi(C,i.memoizedState)&&(Si=!0,h&&(f=ef,f!==null)))throw f;i.memoizedState=C,i.baseState=l,i.baseQueue=u,n.lastRenderedState=C}return L===null&&(n.lanes=0),[i.memoizedState,n.dispatch]}function $C(i){var t=ri(),f=t.queue;if(f===null)throw Error(s(311));f.lastRenderedReducer=i;var n=f.dispatch,L=f.pending,C=t.memoizedState;if(L!==null){f.pending=null;var l=L=L.next;do C=i(C,l.action),l=l.next;while(l!==L);Pi(C,t.memoizedState)||(Si=!0),t.memoizedState=C,t.baseQueue===null&&(t.baseState=C),f.lastRenderedState=C}return[C,n]}function Hu(i,t,f){var n=X,L=ri(),C=F;if(C){if(f===void 0)throw Error(s(407));f=f()}else f=t();var l=!Pi((ai||L).memoizedState,f);if(l&&(L.memoizedState=f,Si=!0),L=L.queue,PC(Bu.bind(null,n,L,i),[i]),L.getSnapshot!==t||l||bi!==null&&bi.memoizedState.tag&1){if(n.flags|=2048,mf(9,{destroy:void 0},qu.bind(null,n,L,f,t),null),ci===null)throw Error(s(349));C||(qt&127)!==0||Ru(n,t,f)}return f}function Ru(i,t,f){i.flags|=16384,i={getSnapshot:t,value:f},t=X.updateQueue,t===null?(t=nL(),X.updateQueue=t,t.stores=[i]):(f=t.stores,f===null?t.stores=[i]:f.push(i))}function qu(i,t,f,n){t.value=f,t.getSnapshot=n,Yu(t)&&Xu(i)}function Bu(i,t,f){return f(function(){Yu(t)&&Xu(i)})}function Yu(i){var t=i.getSnapshot;i=i.value;try{var f=t();return!Pi(i,f)}catch{return!0}}function Xu(i){var t=_1(i,2);t!==null&&Wi(t,i,2)}function FC(i){var t=Ri();if(typeof i=="function"){var f=i;if(i=f(),q1){$t(!0);try{f()}finally{$t(!1)}}}return t.memoizedState=t.baseState=i,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:i},t}function Qu(i,t,f,n){return i.baseState=f,kC(i,ai,typeof n=="function"?n:Bt)}function Q0(i,t,f,n,L){if(uL(i))throw Error(s(485));if(i=t.action,i!==null){var C={payload:L,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){C.listeners.push(l)}};r.T!==null?f(!0):C.isTransition=!1,n(C),f=t.pending,f===null?(C.next=t.pending=C,Zu(t,C)):(C.next=f.next,t.pending=f.next=C)}}function Zu(i,t){var f=t.action,n=t.payload,L=i.state;if(t.isTransition){var C=r.T,l={};r.T=l;try{var a=f(L,n),u=r.S;u!==null&&u(l,a),Vu(i,t,a)}catch(o){IC(i,t,o)}finally{C!==null&&l.types!==null&&(C.types=l.types),r.T=C}}else try{C=f(L,n),Vu(i,t,C)}catch(o){IC(i,t,o)}}function Vu(i,t,f){f!==null&&typeof f=="object"&&typeof f.then=="function"?f.then(function(n){Ku(i,t,n)},function(n){return IC(i,t,n)}):Ku(i,t,f)}function Ku(i,t,f){t.status="fulfilled",t.value=f,Ju(t),i.state=f,t=i.pending,t!==null&&(f=t.next,f===t?i.pending=null:(f=f.next,t.next=f,Zu(i,f)))}function IC(i,t,f){var n=i.pending;if(i.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=f,Ju(t),t=t.next;while(t!==n)}i.action=null}function Ju(i){i=i.listeners;for(var t=0;t<i.length;t++)(0,i[t])()}function wu(i,t){return t}function Wu(i,t){if(F){var f=ci.formState;if(f!==null){i:{var n=X;if(F){if(si){t:{for(var L=si,C=dt;L.nodeType!==8;){if(!C){L=null;break t}if(L=mt(L.nextSibling),L===null){L=null;break t}}C=L.data,L=C==="F!"||C==="F"?L:null}if(L){si=mt(L.nextSibling),n=L.data==="F!";break i}}t1(n)}n=!1}n&&(t=f[0])}}return f=Ri(),f.memoizedState=f.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wu,lastRenderedState:t},f.queue=n,f=de.bind(null,X,n),n.dispatch=f,n=FC(!1),C=Ll.bind(null,X,!1,n.queue),n=Ri(),L={state:t,dispatch:null,action:i,pending:null},n.queue=L,f=Q0.bind(null,X,L,C,f),L.dispatch=f,n.memoizedState=i,[t,f,!1]}function ku(i){var t=ri();return $u(t,ai,i)}function $u(i,t,f){if(t=kC(i,t,wu)[0],i=CL(Bt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Pf(t)}catch(l){throw l===Gf?kn:l}else n=t;t=ri();var L=t.queue,C=L.dispatch;return f!==t.memoizedState&&(X.flags|=2048,mf(9,{destroy:void 0},Z0.bind(null,L,f),null)),[n,C,i]}function Z0(i,t){i.action=t}function Fu(i){var t=ri(),f=ai;if(f!==null)return $u(t,f,i);ri(),t=t.memoizedState,f=ri();var n=f.queue.dispatch;return f.memoizedState=i,[t,n,!1]}function mf(i,t,f,n){return i={tag:i,create:f,deps:n,inst:t,next:null},t=X.updateQueue,t===null&&(t=nL(),X.updateQueue=t),f=t.lastEffect,f===null?t.lastEffect=i.next=i:(n=f.next,f.next=i,i.next=n,t.lastEffect=i),i}function Iu(){return ri().memoizedState}function lL(i,t,f,n){var L=Ri();X.flags|=i,L.memoizedState=mf(1|t,{destroy:void 0},f,n===void 0?null:n)}function aL(i,t,f,n){var L=ri();n=n===void 0?null:n;var C=L.memoizedState.inst;ai!==null&&n!==null&&ZC(n,ai.memoizedState.deps)?L.memoizedState=mf(t,C,f,n):(X.flags|=i,L.memoizedState=mf(1|t,C,f,n))}function Pu(i,t){lL(8390656,8,i,t)}function PC(i,t){aL(2048,8,i,t)}function V0(i){X.flags|=4;var t=X.updateQueue;if(t===null)t=nL(),X.updateQueue=t,t.events=[i];else{var f=t.events;f===null?t.events=[i]:f.push(i)}}function ie(i){var t=ri().memoizedState;return V0({ref:t,nextImpl:i}),function(){if((ii&2)!==0)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function te(i,t){return aL(4,2,i,t)}function fe(i,t){return aL(4,4,i,t)}function ne(i,t){if(typeof t=="function"){i=i();var f=t(i);return function(){typeof f=="function"?f():t(null)}}if(t!=null)return i=i(),t.current=i,function(){t.current=null}}function Le(i,t,f){f=f!=null?f.concat([i]):null,aL(4,4,ne.bind(null,t,i),f)}function il(){}function Ce(i,t){var f=ri();t=t===void 0?null:t;var n=f.memoizedState;return t!==null&&ZC(t,n[1])?n[0]:(f.memoizedState=[i,t],i)}function le(i,t){var f=ri();t=t===void 0?null:t;var n=f.memoizedState;if(t!==null&&ZC(t,n[1]))return n[0];if(n=i(),q1){$t(!0);try{i()}finally{$t(!1)}}return f.memoizedState=[n,t],n}function tl(i,t,f){return f===void 0||(qt&1073741824)!==0&&(W&261930)===0?i.memoizedState=t:(i.memoizedState=f,i=aG(),X.lanes|=i,G1|=i,f)}function ae(i,t,f,n){return Pi(f,t)?f:sf.current!==null?(i=tl(i,f,n),Pi(i,t)||(Si=!0),i):(qt&42)===0||(qt&1073741824)!==0&&(W&261930)===0?(Si=!0,i.memoizedState=f):(i=aG(),X.lanes|=i,G1|=i,t)}function ue(i,t,f,n,L){var C=T.p;T.p=C!==0&&8>C?C:8;var l=r.T,a={};r.T=a,Ll(i,!1,t,f);try{var u=L(),o=r.S;if(o!==null&&o(a,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=B0(u,n);tn(i,t,h,Ct(i))}else tn(i,t,n,Ct(i))}catch(S){tn(i,t,{then:function(){},status:"rejected",reason:S},Ct())}finally{T.p=C,l!==null&&a.types!==null&&(l.types=a.types),r.T=l}}function K0(){}function fl(i,t,f,n){if(i.tag!==5)throw Error(s(476));var L=ee(i).queue;ue(i,L,t,q,f===null?K0:function(){return Ge(i),f(n)})}function ee(i){var t=i.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:q},next:null};var f={};return t.next={memoizedState:f,baseState:f,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bt,lastRenderedState:f},next:null},i.memoizedState=t,i=i.alternate,i!==null&&(i.memoizedState=t),t}function Ge(i){var t=ee(i);t.next===null&&(t=i.alternate.memoizedState),tn(i,t.next.queue,{},Ct())}function nl(){return Oi(hn)}function ce(){return ri().memoizedState}function se(){return ri().memoizedState}function J0(i){for(var t=i.return;t!==null;){switch(t.tag){case 24:case 3:var f=Ct();i=L1(f);var n=C1(t,i,f);n!==null&&(Wi(n,t,f),kf(n,t,f)),t={cache:DC()},i.payload=t;return}t=t.return}}function w0(i,t,f){var n=Ct();f={lane:n,revertLane:0,gesture:null,action:f,hasEagerState:!1,eagerState:null,next:null},uL(i)?oe(t,f):(f=bC(i,t,f,n),f!==null&&(Wi(f,i,n),me(f,t,n)))}function de(i,t,f){var n=Ct();tn(i,t,f,n)}function tn(i,t,f,n){var L={lane:n,revertLane:0,gesture:null,action:f,hasEagerState:!1,eagerState:null,next:null};if(uL(i))oe(t,L);else{var C=i.alternate;if(i.lanes===0&&(C===null||C.lanes===0)&&(C=t.lastRenderedReducer,C!==null))try{var l=t.lastRenderedState,a=C(l,f);if(L.hasEagerState=!0,L.eagerState=a,Pi(a,l))return Qn(i,t,L,0),ci===null&&Xn(),!1}catch{}finally{}if(f=bC(i,t,L,n),f!==null)return Wi(f,i,n),me(f,t,n),!0}return!1}function Ll(i,t,f,n){if(n={lane:2,revertLane:Hl(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},uL(i)){if(t)throw Error(s(479))}else t=bC(i,f,n,2),t!==null&&Wi(t,i,2)}function uL(i){var t=i.alternate;return i===X||t!==null&&t===X}function oe(i,t){df=tL=!0;var f=i.pending;f===null?t.next=t:(t.next=f.next,f.next=t),i.pending=t}function me(i,t,f){if((f&4194048)!==0){var n=t.lanes;n&=i.pendingLanes,f|=n,t.lanes=f,ga(i,f)}}var fn={readContext:Oi,use:LL,useCallback:mi,useContext:mi,useEffect:mi,useImperativeHandle:mi,useLayoutEffect:mi,useInsertionEffect:mi,useMemo:mi,useReducer:mi,useRef:mi,useState:mi,useDebugValue:mi,useDeferredValue:mi,useTransition:mi,useSyncExternalStore:mi,useId:mi,useHostTransitionStatus:mi,useFormState:mi,useActionState:mi,useOptimistic:mi,useMemoCache:mi,useCacheRefresh:mi};fn.useEffectEvent=mi;var ve={readContext:Oi,use:LL,useCallback:function(i,t){return Ri().memoizedState=[i,t===void 0?null:t],i},useContext:Oi,useEffect:Pu,useImperativeHandle:function(i,t,f){f=f!=null?f.concat([i]):null,lL(4194308,4,ne.bind(null,t,i),f)},useLayoutEffect:function(i,t){return lL(4194308,4,i,t)},useInsertionEffect:function(i,t){lL(4,2,i,t)},useMemo:function(i,t){var f=Ri();t=t===void 0?null:t;var n=i();if(q1){$t(!0);try{i()}finally{$t(!1)}}return f.memoizedState=[n,t],n},useReducer:function(i,t,f){var n=Ri();if(f!==void 0){var L=f(t);if(q1){$t(!0);try{f(t)}finally{$t(!1)}}}else L=t;return n.memoizedState=n.baseState=L,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:L},n.queue=i,i=i.dispatch=w0.bind(null,X,i),[n.memoizedState,i]},useRef:function(i){var t=Ri();return i={current:i},t.memoizedState=i},useState:function(i){i=FC(i);var t=i.queue,f=de.bind(null,X,t);return t.dispatch=f,[i.memoizedState,f]},useDebugValue:il,useDeferredValue:function(i,t){var f=Ri();return tl(f,i,t)},useTransition:function(){var i=FC(!1);return i=ue.bind(null,X,i.queue,!0,!1),Ri().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,t,f){var n=X,L=Ri();if(F){if(f===void 0)throw Error(s(407));f=f()}else{if(f=t(),ci===null)throw Error(s(349));(W&127)!==0||Ru(n,t,f)}L.memoizedState=f;var C={value:f,getSnapshot:t};return L.queue=C,Pu(Bu.bind(null,n,C,i),[i]),n.flags|=2048,mf(9,{destroy:void 0},qu.bind(null,n,C,f,t),null),f},useId:function(){var i=Ri(),t=ci.identifierPrefix;if(F){var f=Tt,n=Et;f=(n&~(1<<32-Ii(n)-1)).toString(32)+f,t="_"+t+"R_"+f,f=fL++,0<f&&(t+="H"+f.toString(32)),t+="_"}else f=Y0++,t="_"+t+"r_"+f.toString(32)+"_";return i.memoizedState=t},useHostTransitionStatus:nl,useFormState:Wu,useActionState:Wu,useOptimistic:function(i){var t=Ri();t.memoizedState=t.baseState=i;var f={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=f,t=Ll.bind(null,X,!0,f),f.dispatch=t,[i,t]},useMemoCache:WC,useCacheRefresh:function(){return Ri().memoizedState=J0.bind(null,X)},useEffectEvent:function(i){var t=Ri(),f={impl:i};return t.memoizedState=f,function(){if((ii&2)!==0)throw Error(s(440));return f.impl.apply(void 0,arguments)}}},Cl={readContext:Oi,use:LL,useCallback:Ce,useContext:Oi,useEffect:PC,useImperativeHandle:Le,useInsertionEffect:te,useLayoutEffect:fe,useMemo:le,useReducer:CL,useRef:Iu,useState:function(){return CL(Bt)},useDebugValue:il,useDeferredValue:function(i,t){var f=ri();return ae(f,ai.memoizedState,i,t)},useTransition:function(){var i=CL(Bt)[0],t=ri().memoizedState;return[typeof i=="boolean"?i:Pf(i),t]},useSyncExternalStore:Hu,useId:ce,useHostTransitionStatus:nl,useFormState:ku,useActionState:ku,useOptimistic:function(i,t){var f=ri();return Qu(f,ai,i,t)},useMemoCache:WC,useCacheRefresh:se};Cl.useEffectEvent=ie;var ye={readContext:Oi,use:LL,useCallback:Ce,useContext:Oi,useEffect:PC,useImperativeHandle:Le,useInsertionEffect:te,useLayoutEffect:fe,useMemo:le,useReducer:$C,useRef:Iu,useState:function(){return $C(Bt)},useDebugValue:il,useDeferredValue:function(i,t){var f=ri();return ai===null?tl(f,i,t):ae(f,ai.memoizedState,i,t)},useTransition:function(){var i=$C(Bt)[0],t=ri().memoizedState;return[typeof i=="boolean"?i:Pf(i),t]},useSyncExternalStore:Hu,useId:ce,useHostTransitionStatus:nl,useFormState:Fu,useActionState:Fu,useOptimistic:function(i,t){var f=ri();return ai!==null?Qu(f,ai,i,t):(f.baseState=i,[i,f.queue.dispatch])},useMemoCache:WC,useCacheRefresh:se};ye.useEffectEvent=ie;function ll(i,t,f,n){t=i.memoizedState,f=f(n,t),f=f==null?t:U({},t,f),i.memoizedState=f,i.lanes===0&&(i.updateQueue.baseState=f)}var al={enqueueSetState:function(i,t,f){i=i._reactInternals;var n=Ct(),L=L1(n);L.payload=t,f!=null&&(L.callback=f),t=C1(i,L,n),t!==null&&(Wi(t,i,n),kf(t,i,n))},enqueueReplaceState:function(i,t,f){i=i._reactInternals;var n=Ct(),L=L1(n);L.tag=1,L.payload=t,f!=null&&(L.callback=f),t=C1(i,L,n),t!==null&&(Wi(t,i,n),kf(t,i,n))},enqueueForceUpdate:function(i,t){i=i._reactInternals;var f=Ct(),n=L1(f);n.tag=2,t!=null&&(n.callback=t),t=C1(i,n,f),t!==null&&(Wi(t,i,f),kf(t,i,f))}};function he(i,t,f,n,L,C,l){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(n,C,l):t.prototype&&t.prototype.isPureReactComponent?!Xf(f,n)||!Xf(L,C):!0}function re(i,t,f,n){i=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(f,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(f,n),t.state!==i&&al.enqueueReplaceState(t,t.state,null)}function B1(i,t){var f=t;if("ref"in t){f={};for(var n in t)n!=="ref"&&(f[n]=t[n])}if(i=i.defaultProps){f===t&&(f=U({},f));for(var L in i)f[L]===void 0&&(f[L]=i[L])}return f}function ge(i){Yn(i)}function be(i){console.error(i)}function Se(i){Yn(i)}function eL(i,t){try{var f=i.onUncaughtError;f(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function pe(i,t,f){try{var n=i.onCaughtError;n(f.value,{componentStack:f.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(L){setTimeout(function(){throw L})}}function ul(i,t,f){return f=L1(f),f.tag=3,f.payload={element:null},f.callback=function(){eL(i,t)},f}function ze(i){return i=L1(i),i.tag=3,i}function Ee(i,t,f,n){var L=f.type.getDerivedStateFromError;if(typeof L=="function"){var C=n.value;i.payload=function(){return L(C)},i.callback=function(){pe(t,f,n)}}var l=f.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(i.callback=function(){pe(t,f,n),typeof L!="function"&&(c1===null?c1=new Set([this]):c1.add(this));var a=n.stack;this.componentDidCatch(n.value,{componentStack:a!==null?a:""})})}function W0(i,t,f,n,L){if(f.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=f.alternate,t!==null&&af(t,f,L,!0),f=tt.current,f!==null){switch(f.tag){case 31:case 13:return ot===null?bL():f.alternate===null&&vi===0&&(vi=3),f.flags&=-257,f.flags|=65536,f.lanes=L,n===$n?f.flags|=16384:(t=f.updateQueue,t===null?f.updateQueue=new Set([n]):t.add(n),Nl(i,n,L)),!1;case 22:return f.flags|=65536,n===$n?f.flags|=16384:(t=f.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},f.updateQueue=t):(f=t.retryQueue,f===null?t.retryQueue=new Set([n]):f.add(n)),Nl(i,n,L)),!1}throw Error(s(435,f.tag))}return Nl(i,n,L),bL(),!1}if(F)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=L,n!==xC&&(i=Error(s(422),{cause:n}),Vf(Gt(i,f)))):(n!==xC&&(t=Error(s(423),{cause:n}),Vf(Gt(t,f))),i=i.current.alternate,i.flags|=65536,L&=-L,i.lanes|=L,n=Gt(n,f),L=ul(i.stateNode,n,L),qC(i,L),vi!==4&&(vi=2)),!1;var C=Error(s(520),{cause:n});if(C=Gt(C,f),Gn===null?Gn=[C]:Gn.push(C),vi!==4&&(vi=2),t===null)return!0;n=Gt(n,f),f=t;do{switch(f.tag){case 3:return f.flags|=65536,i=L&-L,f.lanes|=i,i=ul(f.stateNode,n,i),qC(f,i),!1;case 1:if(t=f.type,C=f.stateNode,(f.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(c1===null||!c1.has(C))))return f.flags|=65536,L&=-L,f.lanes|=L,L=ze(L),Ee(L,i,f,n),qC(f,L),!1}f=f.return}while(f!==null);return!1}var el=Error(s(461)),Si=!1;function Mi(i,t,f,n){t.child=i===null?_u(t,null,f,n):R1(t,i.child,f,n)}function Te(i,t,f,n,L){f=f.render;var C=t.ref;if("ref"in n){var l={};for(var a in n)a!=="ref"&&(l[a]=n[a])}else l=n;return N1(t),n=VC(i,t,f,l,C,L),a=KC(),i!==null&&!Si?(JC(i,t,L),Yt(i,t,L)):(F&&a&&EC(t),t.flags|=1,Mi(i,t,n,L),t.child)}function xe(i,t,f,n,L){if(i===null){var C=f.type;return typeof C=="function"&&!SC(C)&&C.defaultProps===void 0&&f.compare===null?(t.tag=15,t.type=C,Ae(i,t,C,n,L)):(i=Vn(f.type,null,n,t,t.mode,L),i.ref=t.ref,i.return=t,t.child=i)}if(C=i.child,!yl(i,L)){var l=C.memoizedProps;if(f=f.compare,f=f!==null?f:Xf,f(l,n)&&i.ref===t.ref)return Yt(i,t,L)}return t.flags|=1,i=Ut(C,n),i.ref=t.ref,i.return=t,t.child=i}function Ae(i,t,f,n,L){if(i!==null){var C=i.memoizedProps;if(Xf(C,n)&&i.ref===t.ref)if(Si=!1,t.pendingProps=n=C,yl(i,L))(i.flags&131072)!==0&&(Si=!0);else return t.lanes=i.lanes,Yt(i,t,L)}return Gl(i,t,f,n,L)}function _e(i,t,f,n){var L=n.children,C=i!==null?i.memoizedState:null;if(i===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(C=C!==null?C.baseLanes|f:f,i!==null){for(n=t.child=i.child,L=0;n!==null;)L=L|n.lanes|n.childLanes,n=n.sibling;n=L&~C}else n=0,t.child=null;return Oe(i,t,C,f,n)}if((f&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},i!==null&&Wn(t,C!==null?C.cachePool:null),C!==null?Du(t,C):YC(),Nu(t);else return n=t.lanes=536870912,Oe(i,t,C!==null?C.baseLanes|f:f,f,n)}else C!==null?(Wn(t,C.cachePool),Du(t,C),a1(),t.memoizedState=null):(i!==null&&Wn(t,null),YC(),a1());return Mi(i,t,L,f),t.child}function nn(i,t){return i!==null&&i.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Oe(i,t,f,n,L){var C=UC();return C=C===null?null:{parent:gi._currentValue,pool:C},t.memoizedState={baseLanes:f,cachePool:C},i!==null&&Wn(t,null),YC(),Nu(t),i!==null&&af(i,t,n,!0),t.childLanes=L,null}function GL(i,t){return t=sL({mode:t.mode,children:t.children},i.mode),t.ref=i.ref,i.child=t,t.return=i,t}function Me(i,t,f){return R1(t,i.child,null,f),i=GL(t,t.pendingProps),i.flags|=2,ft(t),t.memoizedState=null,i}function k0(i,t,f){var n=t.pendingProps,L=(t.flags&128)!==0;if(t.flags&=-129,i===null){if(F){if(n.mode==="hidden")return i=GL(t,n),t.lanes=536870912,nn(null,i);if(QC(t),(i=si)?(i=ZG(i,dt),i=i!==null&&i.data==="&"?i:null,i!==null&&(t.memoizedState={dehydrated:i,treeContext:Pt!==null?{id:Et,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},f=ou(i),f.return=t,t.child=f,_i=t,si=null)):i=null,i===null)throw t1(t);return t.lanes=536870912,null}return GL(t,n)}var C=i.memoizedState;if(C!==null){var l=C.dehydrated;if(QC(t),L)if(t.flags&256)t.flags&=-257,t=Me(i,t,f);else if(t.memoizedState!==null)t.child=i.child,t.flags|=128,t=null;else throw Error(s(558));else if(Si||af(i,t,f,!1),L=(f&i.childLanes)!==0,Si||L){if(n=ci,n!==null&&(l=ba(n,f),l!==0&&l!==C.retryLane))throw C.retryLane=l,_1(i,l),Wi(n,i,l),el;bL(),t=Me(i,t,f)}else i=C.treeContext,si=mt(l.nextSibling),_i=t,F=!0,i1=null,dt=!1,i!==null&&yu(t,i),t=GL(t,n),t.flags|=4096;return t}return i=Ut(i.child,{mode:n.mode,children:n.children}),i.ref=t.ref,t.child=i,i.return=t,i}function cL(i,t){var f=t.ref;if(f===null)i!==null&&i.ref!==null&&(t.flags|=4194816);else{if(typeof f!="function"&&typeof f!="object")throw Error(s(284));(i===null||i.ref!==f)&&(t.flags|=4194816)}}function Gl(i,t,f,n,L){return N1(t),f=VC(i,t,f,n,void 0,L),n=KC(),i!==null&&!Si?(JC(i,t,L),Yt(i,t,L)):(F&&n&&EC(t),t.flags|=1,Mi(i,t,f,L),t.child)}function De(i,t,f,n,L,C){return N1(t),t.updateQueue=null,f=ju(t,n,f,L),Uu(i),n=KC(),i!==null&&!Si?(JC(i,t,C),Yt(i,t,C)):(F&&n&&EC(t),t.flags|=1,Mi(i,t,f,C),t.child)}function Ne(i,t,f,n,L){if(N1(t),t.stateNode===null){var C=nf,l=f.contextType;typeof l=="object"&&l!==null&&(C=Oi(l)),C=new f(n,C),t.memoizedState=C.state!==null&&C.state!==void 0?C.state:null,C.updater=al,t.stateNode=C,C._reactInternals=t,C=t.stateNode,C.props=n,C.state=t.memoizedState,C.refs={},HC(t),l=f.contextType,C.context=typeof l=="object"&&l!==null?Oi(l):nf,C.state=t.memoizedState,l=f.getDerivedStateFromProps,typeof l=="function"&&(ll(t,f,l,n),C.state=t.memoizedState),typeof f.getDerivedStateFromProps=="function"||typeof C.getSnapshotBeforeUpdate=="function"||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(l=C.state,typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount(),l!==C.state&&al.enqueueReplaceState(C,C.state,null),Ff(t,n,C,L),$f(),C.state=t.memoizedState),typeof C.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(i===null){C=t.stateNode;var a=t.memoizedProps,u=B1(f,a);C.props=u;var o=C.context,h=f.contextType;l=nf,typeof h=="object"&&h!==null&&(l=Oi(h));var S=f.getDerivedStateFromProps;h=typeof S=="function"||typeof C.getSnapshotBeforeUpdate=="function",a=t.pendingProps!==a,h||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(a||o!==l)&&re(t,C,n,l),n1=!1;var m=t.memoizedState;C.state=m,Ff(t,n,C,L),$f(),o=t.memoizedState,a||m!==o||n1?(typeof S=="function"&&(ll(t,f,S,n),o=t.memoizedState),(u=n1||he(t,f,u,n,m,o,l))?(h||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(t.flags|=4194308)):(typeof C.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=o),C.props=n,C.state=o,C.context=l,n=u):(typeof C.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{C=t.stateNode,RC(i,t),l=t.memoizedProps,h=B1(f,l),C.props=h,S=t.pendingProps,m=C.context,o=f.contextType,u=nf,typeof o=="object"&&o!==null&&(u=Oi(o)),a=f.getDerivedStateFromProps,(o=typeof a=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(l!==S||m!==u)&&re(t,C,n,u),n1=!1,m=t.memoizedState,C.state=m,Ff(t,n,C,L),$f();var v=t.memoizedState;l!==S||m!==v||n1||i!==null&&i.dependencies!==null&&Jn(i.dependencies)?(typeof a=="function"&&(ll(t,f,a,n),v=t.memoizedState),(h=n1||he(t,f,h,n,m,v,u)||i!==null&&i.dependencies!==null&&Jn(i.dependencies))?(o||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(n,v,u),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(n,v,u)),typeof C.componentDidUpdate=="function"&&(t.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof C.componentDidUpdate!="function"||l===i.memoizedProps&&m===i.memoizedState||(t.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||l===i.memoizedProps&&m===i.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),C.props=n,C.state=v,C.context=u,n=h):(typeof C.componentDidUpdate!="function"||l===i.memoizedProps&&m===i.memoizedState||(t.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||l===i.memoizedProps&&m===i.memoizedState||(t.flags|=1024),n=!1)}return C=n,cL(i,t),n=(t.flags&128)!==0,C||n?(C=t.stateNode,f=n&&typeof f.getDerivedStateFromError!="function"?null:C.render(),t.flags|=1,i!==null&&n?(t.child=R1(t,i.child,null,L),t.child=R1(t,null,f,L)):Mi(i,t,f,L),t.memoizedState=C.state,i=t.child):i=Yt(i,t,L),i}function Ue(i,t,f,n){return M1(),t.flags|=256,Mi(i,t,f,n),t.child}var cl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sl(i){return{baseLanes:i,cachePool:pu()}}function dl(i,t,f){return i=i!==null?i.childLanes&~f:0,t&&(i|=Lt),i}function je(i,t,f){var n=t.pendingProps,L=!1,C=(t.flags&128)!==0,l;if((l=C)||(l=i!==null&&i.memoizedState===null?!1:(hi.current&2)!==0),l&&(L=!0,t.flags&=-129),l=(t.flags&32)!==0,t.flags&=-33,i===null){if(F){if(L?l1(t):a1(),(i=si)?(i=ZG(i,dt),i=i!==null&&i.data!=="&"?i:null,i!==null&&(t.memoizedState={dehydrated:i,treeContext:Pt!==null?{id:Et,overflow:Tt}:null,retryLane:536870912,hydrationErrors:null},f=ou(i),f.return=t,t.child=f,_i=t,si=null)):i=null,i===null)throw t1(t);return kl(i)?t.lanes=32:t.lanes=536870912,null}var a=n.children;return n=n.fallback,L?(a1(),L=t.mode,a=sL({mode:"hidden",children:a},L),n=O1(n,L,f,null),a.return=t,n.return=t,a.sibling=n,t.child=a,n=t.child,n.memoizedState=sl(f),n.childLanes=dl(i,l,f),t.memoizedState=cl,nn(null,n)):(l1(t),ol(t,a))}var u=i.memoizedState;if(u!==null&&(a=u.dehydrated,a!==null)){if(C)t.flags&256?(l1(t),t.flags&=-257,t=ml(i,t,f)):t.memoizedState!==null?(a1(),t.child=i.child,t.flags|=128,t=null):(a1(),a=n.fallback,L=t.mode,n=sL({mode:"visible",children:n.children},L),a=O1(a,L,f,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,R1(t,i.child,null,f),n=t.child,n.memoizedState=sl(f),n.childLanes=dl(i,l,f),t.memoizedState=cl,t=nn(null,n));else if(l1(t),kl(a)){if(l=a.nextSibling&&a.nextSibling.dataset,l)var o=l.dgst;l=o,n=Error(s(419)),n.stack="",n.digest=l,Vf({value:n,source:null,stack:null}),t=ml(i,t,f)}else if(Si||af(i,t,f,!1),l=(f&i.childLanes)!==0,Si||l){if(l=ci,l!==null&&(n=ba(l,f),n!==0&&n!==u.retryLane))throw u.retryLane=n,_1(i,n),Wi(l,i,n),el;Wl(a)||bL(),t=ml(i,t,f)}else Wl(a)?(t.flags|=192,t.child=i.child,t=null):(i=u.treeContext,si=mt(a.nextSibling),_i=t,F=!0,i1=null,dt=!1,i!==null&&yu(t,i),t=ol(t,n.children),t.flags|=4096);return t}return L?(a1(),a=n.fallback,L=t.mode,u=i.child,o=u.sibling,n=Ut(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,o!==null?a=Ut(o,a):(a=O1(a,L,f,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,nn(null,n),n=t.child,a=i.child.memoizedState,a===null?a=sl(f):(L=a.cachePool,L!==null?(u=gi._currentValue,L=L.parent!==u?{parent:u,pool:u}:L):L=pu(),a={baseLanes:a.baseLanes|f,cachePool:L}),n.memoizedState=a,n.childLanes=dl(i,l,f),t.memoizedState=cl,nn(i.child,n)):(l1(t),f=i.child,i=f.sibling,f=Ut(f,{mode:"visible",children:n.children}),f.return=t,f.sibling=null,i!==null&&(l=t.deletions,l===null?(t.deletions=[i],t.flags|=16):l.push(i)),t.child=f,t.memoizedState=null,f)}function ol(i,t){return t=sL({mode:"visible",children:t},i.mode),t.return=i,i.child=t}function sL(i,t){return i=it(22,i,null,t),i.lanes=0,i}function ml(i,t,f){return R1(t,i.child,null,f),i=ol(t,t.pendingProps.children),i.flags|=2,t.memoizedState=null,i}function He(i,t,f){i.lanes|=t;var n=i.alternate;n!==null&&(n.lanes|=t),OC(i.return,t,f)}function vl(i,t,f,n,L,C){var l=i.memoizedState;l===null?i.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:f,tailMode:L,treeForkCount:C}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=f,l.tailMode=L,l.treeForkCount=C)}function Re(i,t,f){var n=t.pendingProps,L=n.revealOrder,C=n.tail;n=n.children;var l=hi.current,a=(l&2)!==0;if(a?(l=l&1|2,t.flags|=128):l&=1,x(hi,l),Mi(i,t,n,f),n=F?Zf:0,!a&&i!==null&&(i.flags&128)!==0)i:for(i=t.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&He(i,f,t);else if(i.tag===19)He(i,f,t);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break i;for(;i.sibling===null;){if(i.return===null||i.return===t)break i;i=i.return}i.sibling.return=i.return,i=i.sibling}switch(L){case"forwards":for(f=t.child,L=null;f!==null;)i=f.alternate,i!==null&&iL(i)===null&&(L=f),f=f.sibling;f=L,f===null?(L=t.child,t.child=null):(L=f.sibling,f.sibling=null),vl(t,!1,L,f,C,n);break;case"backwards":case"unstable_legacy-backwards":for(f=null,L=t.child,t.child=null;L!==null;){if(i=L.alternate,i!==null&&iL(i)===null){t.child=L;break}i=L.sibling,L.sibling=f,f=L,L=i}vl(t,!0,f,null,C,n);break;case"together":vl(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Yt(i,t,f){if(i!==null&&(t.dependencies=i.dependencies),G1|=t.lanes,(f&t.childLanes)===0)if(i!==null){if(af(i,t,f,!1),(f&t.childLanes)===0)return null}else return null;if(i!==null&&t.child!==i.child)throw Error(s(153));if(t.child!==null){for(i=t.child,f=Ut(i,i.pendingProps),t.child=f,f.return=t;i.sibling!==null;)i=i.sibling,f=f.sibling=Ut(i,i.pendingProps),f.return=t;f.sibling=null}return t.child}function yl(i,t){return(i.lanes&t)!==0?!0:(i=i.dependencies,!!(i!==null&&Jn(i)))}function $0(i,t,f){switch(t.tag){case 3:Hi(t,t.stateNode.containerInfo),f1(t,gi,i.memoizedState.cache),M1();break;case 27:case 5:Af(t);break;case 4:Hi(t,t.stateNode.containerInfo);break;case 10:f1(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,QC(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(l1(t),t.flags|=128,null):(f&t.child.childLanes)!==0?je(i,t,f):(l1(t),i=Yt(i,t,f),i!==null?i.sibling:null);l1(t);break;case 19:var L=(i.flags&128)!==0;if(n=(f&t.childLanes)!==0,n||(af(i,t,f,!1),n=(f&t.childLanes)!==0),L){if(n)return Re(i,t,f);t.flags|=128}if(L=t.memoizedState,L!==null&&(L.rendering=null,L.tail=null,L.lastEffect=null),x(hi,hi.current),n)break;return null;case 22:return t.lanes=0,_e(i,t,f,t.pendingProps);case 24:f1(t,gi,i.memoizedState.cache)}return Yt(i,t,f)}function qe(i,t,f){if(i!==null)if(i.memoizedProps!==t.pendingProps)Si=!0;else{if(!yl(i,f)&&(t.flags&128)===0)return Si=!1,$0(i,t,f);Si=(i.flags&131072)!==0}else Si=!1,F&&(t.flags&1048576)!==0&&vu(t,Zf,t.index);switch(t.lanes=0,t.tag){case 16:i:{var n=t.pendingProps;if(i=j1(t.elementType),t.type=i,typeof i=="function")SC(i)?(n=B1(i,n),t.tag=1,t=Ne(null,t,i,n,f)):(t.tag=0,t=Gl(null,t,i,n,f));else{if(i!=null){var L=i.$$typeof;if(L===lt){t.tag=11,t=Te(null,t,i,n,f);break i}else if(L===$){t.tag=14,t=xe(null,t,i,n,f);break i}}throw t=Ot(i)||i,Error(s(306,t,""))}}return t;case 0:return Gl(i,t,t.type,t.pendingProps,f);case 1:return n=t.type,L=B1(n,t.pendingProps),Ne(i,t,n,L,f);case 3:i:{if(Hi(t,t.stateNode.containerInfo),i===null)throw Error(s(387));n=t.pendingProps;var C=t.memoizedState;L=C.element,RC(i,t),Ff(t,n,null,f);var l=t.memoizedState;if(n=l.cache,f1(t,gi,n),n!==C.cache&&MC(t,[gi],f,!0),$f(),n=l.element,C.isDehydrated)if(C={element:n,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=C,t.memoizedState=C,t.flags&256){t=Ue(i,t,n,f);break i}else if(n!==L){L=Gt(Error(s(424)),t),Vf(L),t=Ue(i,t,n,f);break i}else{switch(i=t.stateNode.containerInfo,i.nodeType){case 9:i=i.body;break;default:i=i.nodeName==="HTML"?i.ownerDocument.body:i}for(si=mt(i.firstChild),_i=t,F=!0,i1=null,dt=!0,f=_u(t,null,n,f),t.child=f;f;)f.flags=f.flags&-3|4096,f=f.sibling}else{if(M1(),n===L){t=Yt(i,t,f);break i}Mi(i,t,n,f)}t=t.child}return t;case 26:return cL(i,t),i===null?(f=kG(t.type,null,t.pendingProps,null))?t.memoizedState=f:F||(f=t.type,i=t.pendingProps,n=AL(V.current).createElement(f),n[Ai]=t,n[Qi]=i,Di(n,f,i),Ei(n),t.stateNode=n):t.memoizedState=kG(t.type,i.memoizedProps,t.pendingProps,i.memoizedState),null;case 27:return Af(t),i===null&&F&&(n=t.stateNode=JG(t.type,t.pendingProps,V.current),_i=t,dt=!0,L=si,m1(t.type)?($l=L,si=mt(n.firstChild)):si=L),Mi(i,t,t.pendingProps.children,f),cL(i,t),i===null&&(t.flags|=4194304),t.child;case 5:return i===null&&F&&((L=n=si)&&(n=Ts(n,t.type,t.pendingProps,dt),n!==null?(t.stateNode=n,_i=t,si=mt(n.firstChild),dt=!1,L=!0):L=!1),L||t1(t)),Af(t),L=t.type,C=t.pendingProps,l=i!==null?i.memoizedProps:null,n=C.children,Kl(L,C)?n=null:l!==null&&Kl(L,l)&&(t.flags|=32),t.memoizedState!==null&&(L=VC(i,t,X0,null,null,f),hn._currentValue=L),cL(i,t),Mi(i,t,n,f),t.child;case 6:return i===null&&F&&((i=f=si)&&(f=xs(f,t.pendingProps,dt),f!==null?(t.stateNode=f,_i=t,si=null,i=!0):i=!1),i||t1(t)),null;case 13:return je(i,t,f);case 4:return Hi(t,t.stateNode.containerInfo),n=t.pendingProps,i===null?t.child=R1(t,null,n,f):Mi(i,t,n,f),t.child;case 11:return Te(i,t,t.type,t.pendingProps,f);case 7:return Mi(i,t,t.pendingProps,f),t.child;case 8:return Mi(i,t,t.pendingProps.children,f),t.child;case 12:return Mi(i,t,t.pendingProps.children,f),t.child;case 10:return n=t.pendingProps,f1(t,t.type,n.value),Mi(i,t,n.children,f),t.child;case 9:return L=t.type._context,n=t.pendingProps.children,N1(t),L=Oi(L),n=n(L),t.flags|=1,Mi(i,t,n,f),t.child;case 14:return xe(i,t,t.type,t.pendingProps,f);case 15:return Ae(i,t,t.type,t.pendingProps,f);case 19:return Re(i,t,f);case 31:return k0(i,t,f);case 22:return _e(i,t,f,t.pendingProps);case 24:return N1(t),n=Oi(gi),i===null?(L=UC(),L===null&&(L=ci,C=DC(),L.pooledCache=C,C.refCount++,C!==null&&(L.pooledCacheLanes|=f),L=C),t.memoizedState={parent:n,cache:L},HC(t),f1(t,gi,L)):((i.lanes&f)!==0&&(RC(i,t),Ff(t,null,null,f),$f()),L=i.memoizedState,C=t.memoizedState,L.parent!==n?(L={parent:n,cache:n},t.memoizedState=L,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=L),f1(t,gi,n)):(n=C.cache,f1(t,gi,n),n!==L.cache&&MC(t,[gi],f,!0))),Mi(i,t,t.pendingProps.children,f),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Xt(i){i.flags|=4}function hl(i,t,f,n,L){if((t=(i.mode&32)!==0)&&(t=!1),t){if(i.flags|=16777216,(L&335544128)===L)if(i.stateNode.complete)i.flags|=8192;else if(cG())i.flags|=8192;else throw H1=$n,jC}else i.flags&=-16777217}function Be(i,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)i.flags&=-16777217;else if(i.flags|=16777216,!ic(t))if(cG())i.flags|=8192;else throw H1=$n,jC}function dL(i,t){t!==null&&(i.flags|=4),i.flags&16384&&(t=i.tag!==22?ha():536870912,i.lanes|=t,rf|=t)}function Ln(i,t){if(!F)switch(i.tailMode){case"hidden":t=i.tail;for(var f=null;t!==null;)t.alternate!==null&&(f=t),t=t.sibling;f===null?i.tail=null:f.sibling=null;break;case"collapsed":f=i.tail;for(var n=null;f!==null;)f.alternate!==null&&(n=f),f=f.sibling;n===null?t||i.tail===null?i.tail=null:i.tail.sibling=null:n.sibling=null}}function di(i){var t=i.alternate!==null&&i.alternate.child===i.child,f=0,n=0;if(t)for(var L=i.child;L!==null;)f|=L.lanes|L.childLanes,n|=L.subtreeFlags&65011712,n|=L.flags&65011712,L.return=i,L=L.sibling;else for(L=i.child;L!==null;)f|=L.lanes|L.childLanes,n|=L.subtreeFlags,n|=L.flags,L.return=i,L=L.sibling;return i.subtreeFlags|=n,i.childLanes=f,t}function F0(i,t,f){var n=t.pendingProps;switch(TC(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return di(t),null;case 1:return di(t),null;case 3:return f=t.stateNode,n=null,i!==null&&(n=i.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Rt(gi),yi(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(lf(t)?Xt(t):i===null||i.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,AC())),di(t),null;case 26:var L=t.type,C=t.memoizedState;return i===null?(Xt(t),C!==null?(di(t),Be(t,C)):(di(t),hl(t,L,null,n,f))):C?C!==i.memoizedState?(Xt(t),di(t),Be(t,C)):(di(t),t.flags&=-16777217):(i=i.memoizedProps,i!==n&&Xt(t),di(t),hl(t,L,i,n,f)),null;case 27:if(zn(t),f=V.current,L=t.type,i!==null&&t.stateNode!=null)i.memoizedProps!==n&&Xt(t);else{if(!n){if(t.stateNode===null)throw Error(s(166));return di(t),null}i=_.current,lf(t)?hu(t):(i=JG(L,n,f),t.stateNode=i,Xt(t))}return di(t),null;case 5:if(zn(t),L=t.type,i!==null&&t.stateNode!=null)i.memoizedProps!==n&&Xt(t);else{if(!n){if(t.stateNode===null)throw Error(s(166));return di(t),null}if(C=_.current,lf(t))hu(t);else{var l=AL(V.current);switch(C){case 1:C=l.createElementNS("http://www.w3.org/2000/svg",L);break;case 2:C=l.createElementNS("http://www.w3.org/1998/Math/MathML",L);break;default:switch(L){case"svg":C=l.createElementNS("http://www.w3.org/2000/svg",L);break;case"math":C=l.createElementNS("http://www.w3.org/1998/Math/MathML",L);break;case"script":C=l.createElement("div"),C.innerHTML="<script><\/script>",C=C.removeChild(C.firstChild);break;case"select":C=typeof n.is=="string"?l.createElement("select",{is:n.is}):l.createElement("select"),n.multiple?C.multiple=!0:n.size&&(C.size=n.size);break;default:C=typeof n.is=="string"?l.createElement(L,{is:n.is}):l.createElement(L)}}C[Ai]=t,C[Qi]=n;i:for(l=t.child;l!==null;){if(l.tag===5||l.tag===6)C.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===t)break i;for(;l.sibling===null;){if(l.return===null||l.return===t)break i;l=l.return}l.sibling.return=l.return,l=l.sibling}t.stateNode=C;i:switch(Di(C,L,n),L){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break i;case"img":n=!0;break i;default:n=!1}n&&Xt(t)}}return di(t),hl(t,t.type,i===null?null:i.memoizedProps,t.pendingProps,f),null;case 6:if(i&&t.stateNode!=null)i.memoizedProps!==n&&Xt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(s(166));if(i=V.current,lf(t)){if(i=t.stateNode,f=t.memoizedProps,n=null,L=_i,L!==null)switch(L.tag){case 27:case 5:n=L.memoizedProps}i[Ai]=t,i=!!(i.nodeValue===f||n!==null&&n.suppressHydrationWarning===!0||jG(i.nodeValue,f)),i||t1(t,!0)}else i=AL(i).createTextNode(n),i[Ai]=t,t.stateNode=i}return di(t),null;case 31:if(f=t.memoizedState,i===null||i.memoizedState!==null){if(n=lf(t),f!==null){if(i===null){if(!n)throw Error(s(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(s(557));i[Ai]=t}else M1(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;di(t),i=!1}else f=AC(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=f),i=!0;if(!i)return t.flags&256?(ft(t),t):(ft(t),null);if((t.flags&128)!==0)throw Error(s(558))}return di(t),null;case 13:if(n=t.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(L=lf(t),n!==null&&n.dehydrated!==null){if(i===null){if(!L)throw Error(s(318));if(L=t.memoizedState,L=L!==null?L.dehydrated:null,!L)throw Error(s(317));L[Ai]=t}else M1(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;di(t),L=!1}else L=AC(),i!==null&&i.memoizedState!==null&&(i.memoizedState.hydrationErrors=L),L=!0;if(!L)return t.flags&256?(ft(t),t):(ft(t),null)}return ft(t),(t.flags&128)!==0?(t.lanes=f,t):(f=n!==null,i=i!==null&&i.memoizedState!==null,f&&(n=t.child,L=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(L=n.alternate.memoizedState.cachePool.pool),C=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(C=n.memoizedState.cachePool.pool),C!==L&&(n.flags|=2048)),f!==i&&f&&(t.child.flags|=8192),dL(t,t.updateQueue),di(t),null);case 4:return yi(),i===null&&Yl(t.stateNode.containerInfo),di(t),null;case 10:return Rt(t.type),di(t),null;case 19:if(z(hi),n=t.memoizedState,n===null)return di(t),null;if(L=(t.flags&128)!==0,C=n.rendering,C===null)if(L)Ln(n,!1);else{if(vi!==0||i!==null&&(i.flags&128)!==0)for(i=t.child;i!==null;){if(C=iL(i),C!==null){for(t.flags|=128,Ln(n,!1),i=C.updateQueue,t.updateQueue=i,dL(t,i),t.subtreeFlags=0,i=f,f=t.child;f!==null;)du(f,i),f=f.sibling;return x(hi,hi.current&1|2),F&&jt(t,n.treeForkCount),t.child}i=i.sibling}n.tail!==null&&$i()>hL&&(t.flags|=128,L=!0,Ln(n,!1),t.lanes=4194304)}else{if(!L)if(i=iL(C),i!==null){if(t.flags|=128,L=!0,i=i.updateQueue,t.updateQueue=i,dL(t,i),Ln(n,!0),n.tail===null&&n.tailMode==="hidden"&&!C.alternate&&!F)return di(t),null}else 2*$i()-n.renderingStartTime>hL&&f!==536870912&&(t.flags|=128,L=!0,Ln(n,!1),t.lanes=4194304);n.isBackwards?(C.sibling=t.child,t.child=C):(i=n.last,i!==null?i.sibling=C:t.child=C,n.last=C)}return n.tail!==null?(i=n.tail,n.rendering=i,n.tail=i.sibling,n.renderingStartTime=$i(),i.sibling=null,f=hi.current,x(hi,L?f&1|2:f&1),F&&jt(t,n.treeForkCount),i):(di(t),null);case 22:case 23:return ft(t),XC(),n=t.memoizedState!==null,i!==null?i.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(f&536870912)!==0&&(t.flags&128)===0&&(di(t),t.subtreeFlags&6&&(t.flags|=8192)):di(t),f=t.updateQueue,f!==null&&dL(t,f.retryQueue),f=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(f=i.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==f&&(t.flags|=2048),i!==null&&z(U1),null;case 24:return f=null,i!==null&&(f=i.memoizedState.cache),t.memoizedState.cache!==f&&(t.flags|=2048),Rt(gi),di(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function I0(i,t){switch(TC(t),t.tag){case 1:return i=t.flags,i&65536?(t.flags=i&-65537|128,t):null;case 3:return Rt(gi),yi(),i=t.flags,(i&65536)!==0&&(i&128)===0?(t.flags=i&-65537|128,t):null;case 26:case 27:case 5:return zn(t),null;case 31:if(t.memoizedState!==null){if(ft(t),t.alternate===null)throw Error(s(340));M1()}return i=t.flags,i&65536?(t.flags=i&-65537|128,t):null;case 13:if(ft(t),i=t.memoizedState,i!==null&&i.dehydrated!==null){if(t.alternate===null)throw Error(s(340));M1()}return i=t.flags,i&65536?(t.flags=i&-65537|128,t):null;case 19:return z(hi),null;case 4:return yi(),null;case 10:return Rt(t.type),null;case 22:case 23:return ft(t),XC(),i!==null&&z(U1),i=t.flags,i&65536?(t.flags=i&-65537|128,t):null;case 24:return Rt(gi),null;case 25:return null;default:return null}}function Ye(i,t){switch(TC(t),t.tag){case 3:Rt(gi),yi();break;case 26:case 27:case 5:zn(t);break;case 4:yi();break;case 31:t.memoizedState!==null&&ft(t);break;case 13:ft(t);break;case 19:z(hi);break;case 10:Rt(t.type);break;case 22:case 23:ft(t),XC(),i!==null&&z(U1);break;case 24:Rt(gi)}}function Cn(i,t){try{var f=t.updateQueue,n=f!==null?f.lastEffect:null;if(n!==null){var L=n.next;f=L;do{if((f.tag&i)===i){n=void 0;var C=f.create,l=f.inst;n=C(),l.destroy=n}f=f.next}while(f!==L)}}catch(a){Li(t,t.return,a)}}function u1(i,t,f){try{var n=t.updateQueue,L=n!==null?n.lastEffect:null;if(L!==null){var C=L.next;n=C;do{if((n.tag&i)===i){var l=n.inst,a=l.destroy;if(a!==void 0){l.destroy=void 0,L=t;var u=f,o=a;try{o()}catch(h){Li(L,u,h)}}}n=n.next}while(n!==C)}}catch(h){Li(t,t.return,h)}}function Xe(i){var t=i.updateQueue;if(t!==null){var f=i.stateNode;try{Mu(t,f)}catch(n){Li(i,i.return,n)}}}function Qe(i,t,f){f.props=B1(i.type,i.memoizedProps),f.state=i.memoizedState;try{f.componentWillUnmount()}catch(n){Li(i,t,n)}}function ln(i,t){try{var f=i.ref;if(f!==null){switch(i.tag){case 26:case 27:case 5:var n=i.stateNode;break;case 30:n=i.stateNode;break;default:n=i.stateNode}typeof f=="function"?i.refCleanup=f(n):f.current=n}}catch(L){Li(i,t,L)}}function xt(i,t){var f=i.ref,n=i.refCleanup;if(f!==null)if(typeof n=="function")try{n()}catch(L){Li(i,t,L)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof f=="function")try{f(null)}catch(L){Li(i,t,L)}else f.current=null}function Ze(i){var t=i.type,f=i.memoizedProps,n=i.stateNode;try{i:switch(t){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break i;case"img":f.src?n.src=f.src:f.srcSet&&(n.srcset=f.srcSet)}}catch(L){Li(i,i.return,L)}}function rl(i,t,f){try{var n=i.stateNode;gs(n,i.type,f,t),n[Qi]=t}catch(L){Li(i,i.return,L)}}function Ve(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27&&m1(i.type)||i.tag===4}function gl(i){i:for(;;){for(;i.sibling===null;){if(i.return===null||Ve(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.tag===27&&m1(i.type)||i.flags&2||i.child===null||i.tag===4)continue i;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function bl(i,t,f){var n=i.tag;if(n===5||n===6)i=i.stateNode,t?(f.nodeType===9?f.body:f.nodeName==="HTML"?f.ownerDocument.body:f).insertBefore(i,t):(t=f.nodeType===9?f.body:f.nodeName==="HTML"?f.ownerDocument.body:f,t.appendChild(i),f=f._reactRootContainer,f!=null||t.onclick!==null||(t.onclick=Dt));else if(n!==4&&(n===27&&m1(i.type)&&(f=i.stateNode,t=null),i=i.child,i!==null))for(bl(i,t,f),i=i.sibling;i!==null;)bl(i,t,f),i=i.sibling}function oL(i,t,f){var n=i.tag;if(n===5||n===6)i=i.stateNode,t?f.insertBefore(i,t):f.appendChild(i);else if(n!==4&&(n===27&&m1(i.type)&&(f=i.stateNode),i=i.child,i!==null))for(oL(i,t,f),i=i.sibling;i!==null;)oL(i,t,f),i=i.sibling}function Ke(i){var t=i.stateNode,f=i.memoizedProps;try{for(var n=i.type,L=t.attributes;L.length;)t.removeAttributeNode(L[0]);Di(t,n,f),t[Ai]=i,t[Qi]=f}catch(C){Li(i,i.return,C)}}var Qt=!1,pi=!1,Sl=!1,Je=typeof WeakSet=="function"?WeakSet:Set,Ti=null;function P0(i,t){if(i=i.containerInfo,Zl=jL,i=Lu(i),mC(i)){if("selectionStart"in i)var f={start:i.selectionStart,end:i.selectionEnd};else i:{f=(f=i.ownerDocument)&&f.defaultView||window;var n=f.getSelection&&f.getSelection();if(n&&n.rangeCount!==0){f=n.anchorNode;var L=n.anchorOffset,C=n.focusNode;n=n.focusOffset;try{f.nodeType,C.nodeType}catch{f=null;break i}var l=0,a=-1,u=-1,o=0,h=0,S=i,m=null;t:for(;;){for(var v;S!==f||L!==0&&S.nodeType!==3||(a=l+L),S!==C||n!==0&&S.nodeType!==3||(u=l+n),S.nodeType===3&&(l+=S.nodeValue.length),(v=S.firstChild)!==null;)m=S,S=v;for(;;){if(S===i)break t;if(m===f&&++o===L&&(a=l),m===C&&++h===n&&(u=l),(v=S.nextSibling)!==null)break;S=m,m=S.parentNode}S=v}f=a===-1||u===-1?null:{start:a,end:u}}else f=null}f=f||{start:0,end:0}}else f=null;for(Vl={focusedElem:i,selectionRange:f},jL=!1,Ti=t;Ti!==null;)if(t=Ti,i=t.child,(t.subtreeFlags&1028)!==0&&i!==null)i.return=t,Ti=i;else for(;Ti!==null;){switch(t=Ti,C=t.alternate,i=t.flags,t.tag){case 0:if((i&4)!==0&&(i=t.updateQueue,i=i!==null?i.events:null,i!==null))for(f=0;f<i.length;f++)L=i[f],L.ref.impl=L.nextImpl;break;case 11:case 15:break;case 1:if((i&1024)!==0&&C!==null){i=void 0,f=t,L=C.memoizedProps,C=C.memoizedState,n=f.stateNode;try{var A=B1(f.type,L);i=n.getSnapshotBeforeUpdate(A,C),n.__reactInternalSnapshotBeforeUpdate=i}catch(H){Li(f,f.return,H)}}break;case 3:if((i&1024)!==0){if(i=t.stateNode.containerInfo,f=i.nodeType,f===9)wl(i);else if(f===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":wl(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((i&1024)!==0)throw Error(s(163))}if(i=t.sibling,i!==null){i.return=t.return,Ti=i;break}Ti=t.return}}function we(i,t,f){var n=f.flags;switch(f.tag){case 0:case 11:case 15:Vt(i,f),n&4&&Cn(5,f);break;case 1:if(Vt(i,f),n&4)if(i=f.stateNode,t===null)try{i.componentDidMount()}catch(l){Li(f,f.return,l)}else{var L=B1(f.type,t.memoizedProps);t=t.memoizedState;try{i.componentDidUpdate(L,t,i.__reactInternalSnapshotBeforeUpdate)}catch(l){Li(f,f.return,l)}}n&64&&Xe(f),n&512&&ln(f,f.return);break;case 3:if(Vt(i,f),n&64&&(i=f.updateQueue,i!==null)){if(t=null,f.child!==null)switch(f.child.tag){case 27:case 5:t=f.child.stateNode;break;case 1:t=f.child.stateNode}try{Mu(i,t)}catch(l){Li(f,f.return,l)}}break;case 27:t===null&&n&4&&Ke(f);case 26:case 5:Vt(i,f),t===null&&n&4&&Ze(f),n&512&&ln(f,f.return);break;case 12:Vt(i,f);break;case 31:Vt(i,f),n&4&&$e(i,f);break;case 13:Vt(i,f),n&4&&Fe(i,f),n&64&&(i=f.memoizedState,i!==null&&(i=i.dehydrated,i!==null&&(f=us.bind(null,f),As(i,f))));break;case 22:if(n=f.memoizedState!==null||Qt,!n){t=t!==null&&t.memoizedState!==null||pi,L=Qt;var C=pi;Qt=n,(pi=t)&&!C?Kt(i,f,(f.subtreeFlags&8772)!==0):Vt(i,f),Qt=L,pi=C}break;case 30:break;default:Vt(i,f)}}function We(i){var t=i.alternate;t!==null&&(i.alternate=null,We(t)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(t=i.stateNode,t!==null&&IL(t)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var oi=null,Vi=!1;function Zt(i,t,f){for(f=f.child;f!==null;)ke(i,t,f),f=f.sibling}function ke(i,t,f){if(Fi&&typeof Fi.onCommitFiberUnmount=="function")try{Fi.onCommitFiberUnmount(_f,f)}catch{}switch(f.tag){case 26:pi||xt(f,t),Zt(i,t,f),f.memoizedState?f.memoizedState.count--:f.stateNode&&(f=f.stateNode,f.parentNode.removeChild(f));break;case 27:pi||xt(f,t);var n=oi,L=Vi;m1(f.type)&&(oi=f.stateNode,Vi=!1),Zt(i,t,f),mn(f.stateNode),oi=n,Vi=L;break;case 5:pi||xt(f,t);case 6:if(n=oi,L=Vi,oi=null,Zt(i,t,f),oi=n,Vi=L,oi!==null)if(Vi)try{(oi.nodeType===9?oi.body:oi.nodeName==="HTML"?oi.ownerDocument.body:oi).removeChild(f.stateNode)}catch(C){Li(f,t,C)}else try{oi.removeChild(f.stateNode)}catch(C){Li(f,t,C)}break;case 18:oi!==null&&(Vi?(i=oi,XG(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,f.stateNode),xf(i)):XG(oi,f.stateNode));break;case 4:n=oi,L=Vi,oi=f.stateNode.containerInfo,Vi=!0,Zt(i,t,f),oi=n,Vi=L;break;case 0:case 11:case 14:case 15:u1(2,f,t),pi||u1(4,f,t),Zt(i,t,f);break;case 1:pi||(xt(f,t),n=f.stateNode,typeof n.componentWillUnmount=="function"&&Qe(f,t,n)),Zt(i,t,f);break;case 21:Zt(i,t,f);break;case 22:pi=(n=pi)||f.memoizedState!==null,Zt(i,t,f),pi=n;break;default:Zt(i,t,f)}}function $e(i,t){if(t.memoizedState===null&&(i=t.alternate,i!==null&&(i=i.memoizedState,i!==null))){i=i.dehydrated;try{xf(i)}catch(f){Li(t,t.return,f)}}}function Fe(i,t){if(t.memoizedState===null&&(i=t.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{xf(i)}catch(f){Li(t,t.return,f)}}function is(i){switch(i.tag){case 31:case 13:case 19:var t=i.stateNode;return t===null&&(t=i.stateNode=new Je),t;case 22:return i=i.stateNode,t=i._retryCache,t===null&&(t=i._retryCache=new Je),t;default:throw Error(s(435,i.tag))}}function mL(i,t){var f=is(i);t.forEach(function(n){if(!f.has(n)){f.add(n);var L=es.bind(null,i,n);n.then(L,L)}})}function Ki(i,t){var f=t.deletions;if(f!==null)for(var n=0;n<f.length;n++){var L=f[n],C=i,l=t,a=l;i:for(;a!==null;){switch(a.tag){case 27:if(m1(a.type)){oi=a.stateNode,Vi=!1;break i}break;case 5:oi=a.stateNode,Vi=!1;break i;case 3:case 4:oi=a.stateNode.containerInfo,Vi=!0;break i}a=a.return}if(oi===null)throw Error(s(160));ke(C,l,L),oi=null,Vi=!1,C=L.alternate,C!==null&&(C.return=null),L.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Ie(t,i),t=t.sibling}var rt=null;function Ie(i,t){var f=i.alternate,n=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Ki(t,i),Ji(i),n&4&&(u1(3,i,i.return),Cn(3,i),u1(5,i,i.return));break;case 1:Ki(t,i),Ji(i),n&512&&(pi||f===null||xt(f,f.return)),n&64&&Qt&&(i=i.updateQueue,i!==null&&(n=i.callbacks,n!==null&&(f=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=f===null?n:f.concat(n))));break;case 26:var L=rt;if(Ki(t,i),Ji(i),n&512&&(pi||f===null||xt(f,f.return)),n&4){var C=f!==null?f.memoizedState:null;if(n=i.memoizedState,f===null)if(n===null)if(i.stateNode===null){i:{n=i.type,f=i.memoizedProps,L=L.ownerDocument||L;t:switch(n){case"title":C=L.getElementsByTagName("title")[0],(!C||C[Df]||C[Ai]||C.namespaceURI==="http://www.w3.org/2000/svg"||C.hasAttribute("itemprop"))&&(C=L.createElement(n),L.head.insertBefore(C,L.querySelector("head > title"))),Di(C,n,f),C[Ai]=i,Ei(C),n=C;break i;case"link":var l=IG("link","href",L).get(n+(f.href||""));if(l){for(var a=0;a<l.length;a++)if(C=l[a],C.getAttribute("href")===(f.href==null||f.href===""?null:f.href)&&C.getAttribute("rel")===(f.rel==null?null:f.rel)&&C.getAttribute("title")===(f.title==null?null:f.title)&&C.getAttribute("crossorigin")===(f.crossOrigin==null?null:f.crossOrigin)){l.splice(a,1);break t}}C=L.createElement(n),Di(C,n,f),L.head.appendChild(C);break;case"meta":if(l=IG("meta","content",L).get(n+(f.content||""))){for(a=0;a<l.length;a++)if(C=l[a],C.getAttribute("content")===(f.content==null?null:""+f.content)&&C.getAttribute("name")===(f.name==null?null:f.name)&&C.getAttribute("property")===(f.property==null?null:f.property)&&C.getAttribute("http-equiv")===(f.httpEquiv==null?null:f.httpEquiv)&&C.getAttribute("charset")===(f.charSet==null?null:f.charSet)){l.splice(a,1);break t}}C=L.createElement(n),Di(C,n,f),L.head.appendChild(C);break;default:throw Error(s(468,n))}C[Ai]=i,Ei(C),n=C}i.stateNode=n}else PG(L,i.type,i.stateNode);else i.stateNode=FG(L,n,i.memoizedProps);else C!==n?(C===null?f.stateNode!==null&&(f=f.stateNode,f.parentNode.removeChild(f)):C.count--,n===null?PG(L,i.type,i.stateNode):FG(L,n,i.memoizedProps)):n===null&&i.stateNode!==null&&rl(i,i.memoizedProps,f.memoizedProps)}break;case 27:Ki(t,i),Ji(i),n&512&&(pi||f===null||xt(f,f.return)),f!==null&&n&4&&rl(i,i.memoizedProps,f.memoizedProps);break;case 5:if(Ki(t,i),Ji(i),n&512&&(pi||f===null||xt(f,f.return)),i.flags&32){L=i.stateNode;try{k1(L,"")}catch(A){Li(i,i.return,A)}}n&4&&i.stateNode!=null&&(L=i.memoizedProps,rl(i,L,f!==null?f.memoizedProps:L)),n&1024&&(Sl=!0);break;case 6:if(Ki(t,i),Ji(i),n&4){if(i.stateNode===null)throw Error(s(162));n=i.memoizedProps,f=i.stateNode;try{f.nodeValue=n}catch(A){Li(i,i.return,A)}}break;case 3:if(ML=null,L=rt,rt=_L(t.containerInfo),Ki(t,i),rt=L,Ji(i),n&4&&f!==null&&f.memoizedState.isDehydrated)try{xf(t.containerInfo)}catch(A){Li(i,i.return,A)}Sl&&(Sl=!1,Pe(i));break;case 4:n=rt,rt=_L(i.stateNode.containerInfo),Ki(t,i),Ji(i),rt=n;break;case 12:Ki(t,i),Ji(i);break;case 31:Ki(t,i),Ji(i),n&4&&(n=i.updateQueue,n!==null&&(i.updateQueue=null,mL(i,n)));break;case 13:Ki(t,i),Ji(i),i.child.flags&8192&&i.memoizedState!==null!=(f!==null&&f.memoizedState!==null)&&(yL=$i()),n&4&&(n=i.updateQueue,n!==null&&(i.updateQueue=null,mL(i,n)));break;case 22:L=i.memoizedState!==null;var u=f!==null&&f.memoizedState!==null,o=Qt,h=pi;if(Qt=o||L,pi=h||u,Ki(t,i),pi=h,Qt=o,Ji(i),n&8192)i:for(t=i.stateNode,t._visibility=L?t._visibility&-2:t._visibility|1,L&&(f===null||u||Qt||pi||Y1(i)),f=null,t=i;;){if(t.tag===5||t.tag===26){if(f===null){u=f=t;try{if(C=u.stateNode,L)l=C.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{a=u.stateNode;var S=u.memoizedProps.style,m=S!=null&&S.hasOwnProperty("display")?S.display:null;a.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(A){Li(u,u.return,A)}}}else if(t.tag===6){if(f===null){u=t;try{u.stateNode.nodeValue=L?"":u.memoizedProps}catch(A){Li(u,u.return,A)}}}else if(t.tag===18){if(f===null){u=t;try{var v=u.stateNode;L?QG(v,!0):QG(u.stateNode,!1)}catch(A){Li(u,u.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===i)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break i;for(;t.sibling===null;){if(t.return===null||t.return===i)break i;f===t&&(f=null),t=t.return}f===t&&(f=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=i.updateQueue,n!==null&&(f=n.retryQueue,f!==null&&(n.retryQueue=null,mL(i,f))));break;case 19:Ki(t,i),Ji(i),n&4&&(n=i.updateQueue,n!==null&&(i.updateQueue=null,mL(i,n)));break;case 30:break;case 21:break;default:Ki(t,i),Ji(i)}}function Ji(i){var t=i.flags;if(t&2){try{for(var f,n=i.return;n!==null;){if(Ve(n)){f=n;break}n=n.return}if(f==null)throw Error(s(160));switch(f.tag){case 27:var L=f.stateNode,C=gl(i);oL(i,C,L);break;case 5:var l=f.stateNode;f.flags&32&&(k1(l,""),f.flags&=-33);var a=gl(i);oL(i,a,l);break;case 3:case 4:var u=f.stateNode.containerInfo,o=gl(i);bl(i,o,u);break;default:throw Error(s(161))}}catch(h){Li(i,i.return,h)}i.flags&=-3}t&4096&&(i.flags&=-4097)}function Pe(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var t=i;Pe(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),i=i.sibling}}function Vt(i,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)we(i,t.alternate,t),t=t.sibling}function Y1(i){for(i=i.child;i!==null;){var t=i;switch(t.tag){case 0:case 11:case 14:case 15:u1(4,t,t.return),Y1(t);break;case 1:xt(t,t.return);var f=t.stateNode;typeof f.componentWillUnmount=="function"&&Qe(t,t.return,f),Y1(t);break;case 27:mn(t.stateNode);case 26:case 5:xt(t,t.return),Y1(t);break;case 22:t.memoizedState===null&&Y1(t);break;case 30:Y1(t);break;default:Y1(t)}i=i.sibling}}function Kt(i,t,f){for(f=f&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,L=i,C=t,l=C.flags;switch(C.tag){case 0:case 11:case 15:Kt(L,C,f),Cn(4,C);break;case 1:if(Kt(L,C,f),n=C,L=n.stateNode,typeof L.componentDidMount=="function")try{L.componentDidMount()}catch(o){Li(n,n.return,o)}if(n=C,L=n.updateQueue,L!==null){var a=n.stateNode;try{var u=L.shared.hiddenCallbacks;if(u!==null)for(L.shared.hiddenCallbacks=null,L=0;L<u.length;L++)Ou(u[L],a)}catch(o){Li(n,n.return,o)}}f&&l&64&&Xe(C),ln(C,C.return);break;case 27:Ke(C);case 26:case 5:Kt(L,C,f),f&&n===null&&l&4&&Ze(C),ln(C,C.return);break;case 12:Kt(L,C,f);break;case 31:Kt(L,C,f),f&&l&4&&$e(L,C);break;case 13:Kt(L,C,f),f&&l&4&&Fe(L,C);break;case 22:C.memoizedState===null&&Kt(L,C,f),ln(C,C.return);break;case 30:break;default:Kt(L,C,f)}t=t.sibling}}function pl(i,t){var f=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(f=i.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==f&&(i!=null&&i.refCount++,f!=null&&Kf(f))}function zl(i,t){i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&Kf(i))}function gt(i,t,f,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)iG(i,t,f,n),t=t.sibling}function iG(i,t,f,n){var L=t.flags;switch(t.tag){case 0:case 11:case 15:gt(i,t,f,n),L&2048&&Cn(9,t);break;case 1:gt(i,t,f,n);break;case 3:gt(i,t,f,n),L&2048&&(i=null,t.alternate!==null&&(i=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==i&&(t.refCount++,i!=null&&Kf(i)));break;case 12:if(L&2048){gt(i,t,f,n),i=t.stateNode;try{var C=t.memoizedProps,l=C.id,a=C.onPostCommit;typeof a=="function"&&a(l,t.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(u){Li(t,t.return,u)}}else gt(i,t,f,n);break;case 31:gt(i,t,f,n);break;case 13:gt(i,t,f,n);break;case 23:break;case 22:C=t.stateNode,l=t.alternate,t.memoizedState!==null?C._visibility&2?gt(i,t,f,n):an(i,t):C._visibility&2?gt(i,t,f,n):(C._visibility|=2,vf(i,t,f,n,(t.subtreeFlags&10256)!==0||!1)),L&2048&&pl(l,t);break;case 24:gt(i,t,f,n),L&2048&&zl(t.alternate,t);break;default:gt(i,t,f,n)}}function vf(i,t,f,n,L){for(L=L&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var C=i,l=t,a=f,u=n,o=l.flags;switch(l.tag){case 0:case 11:case 15:vf(C,l,a,u,L),Cn(8,l);break;case 23:break;case 22:var h=l.stateNode;l.memoizedState!==null?h._visibility&2?vf(C,l,a,u,L):an(C,l):(h._visibility|=2,vf(C,l,a,u,L)),L&&o&2048&&pl(l.alternate,l);break;case 24:vf(C,l,a,u,L),L&&o&2048&&zl(l.alternate,l);break;default:vf(C,l,a,u,L)}t=t.sibling}}function an(i,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var f=i,n=t,L=n.flags;switch(n.tag){case 22:an(f,n),L&2048&&pl(n.alternate,n);break;case 24:an(f,n),L&2048&&zl(n.alternate,n);break;default:an(f,n)}t=t.sibling}}var un=8192;function yf(i,t,f){if(i.subtreeFlags&un)for(i=i.child;i!==null;)tG(i,t,f),i=i.sibling}function tG(i,t,f){switch(i.tag){case 26:yf(i,t,f),i.flags&un&&i.memoizedState!==null&&Ys(f,rt,i.memoizedState,i.memoizedProps);break;case 5:yf(i,t,f);break;case 3:case 4:var n=rt;rt=_L(i.stateNode.containerInfo),yf(i,t,f),rt=n;break;case 22:i.memoizedState===null&&(n=i.alternate,n!==null&&n.memoizedState!==null?(n=un,un=16777216,yf(i,t,f),un=n):yf(i,t,f));break;default:yf(i,t,f)}}function fG(i){var t=i.alternate;if(t!==null&&(i=t.child,i!==null)){t.child=null;do t=i.sibling,i.sibling=null,i=t;while(i!==null)}}function en(i){var t=i.deletions;if((i.flags&16)!==0){if(t!==null)for(var f=0;f<t.length;f++){var n=t[f];Ti=n,LG(n,i)}fG(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)nG(i),i=i.sibling}function nG(i){switch(i.tag){case 0:case 11:case 15:en(i),i.flags&2048&&u1(9,i,i.return);break;case 3:en(i);break;case 12:en(i);break;case 22:var t=i.stateNode;i.memoizedState!==null&&t._visibility&2&&(i.return===null||i.return.tag!==13)?(t._visibility&=-3,vL(i)):en(i);break;default:en(i)}}function vL(i){var t=i.deletions;if((i.flags&16)!==0){if(t!==null)for(var f=0;f<t.length;f++){var n=t[f];Ti=n,LG(n,i)}fG(i)}for(i=i.child;i!==null;){switch(t=i,t.tag){case 0:case 11:case 15:u1(8,t,t.return),vL(t);break;case 22:f=t.stateNode,f._visibility&2&&(f._visibility&=-3,vL(t));break;default:vL(t)}i=i.sibling}}function LG(i,t){for(;Ti!==null;){var f=Ti;switch(f.tag){case 0:case 11:case 15:u1(8,f,t);break;case 23:case 22:if(f.memoizedState!==null&&f.memoizedState.cachePool!==null){var n=f.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Kf(f.memoizedState.cache)}if(n=f.child,n!==null)n.return=f,Ti=n;else i:for(f=i;Ti!==null;){n=Ti;var L=n.sibling,C=n.return;if(We(n),n===f){Ti=null;break i}if(L!==null){L.return=C,Ti=L;break i}Ti=C}}}var ts={getCacheForType:function(i){var t=Oi(gi),f=t.data.get(i);return f===void 0&&(f=i(),t.data.set(i,f)),f},cacheSignal:function(){return Oi(gi).controller.signal}},fs=typeof WeakMap=="function"?WeakMap:Map,ii=0,ci=null,K=null,W=0,ni=0,nt=null,e1=!1,hf=!1,El=!1,Jt=0,vi=0,G1=0,X1=0,Tl=0,Lt=0,rf=0,Gn=null,wi=null,xl=!1,yL=0,CG=0,hL=1/0,rL=null,c1=null,zi=0,s1=null,gf=null,wt=0,Al=0,_l=null,lG=null,cn=0,Ol=null;function Ct(){return(ii&2)!==0&&W!==0?W&-W:r.T!==null?Hl():Sa()}function aG(){if(Lt===0)if((W&536870912)===0||F){var i=xn;xn<<=1,(xn&3932160)===0&&(xn=262144),Lt=i}else Lt=536870912;return i=tt.current,i!==null&&(i.flags|=32),Lt}function Wi(i,t,f){(i===ci&&(ni===2||ni===9)||i.cancelPendingCommit!==null)&&(bf(i,0),d1(i,W,Lt,!1)),Mf(i,f),((ii&2)===0||i!==ci)&&(i===ci&&((ii&2)===0&&(X1|=f),vi===4&&d1(i,W,Lt,!1)),At(i))}function uG(i,t,f){if((ii&6)!==0)throw Error(s(327));var n=!f&&(t&127)===0&&(t&i.expiredLanes)===0||Of(i,t),L=n?Cs(i,t):Dl(i,t,!0),C=n;do{if(L===0){hf&&!n&&d1(i,t,0,!1);break}else{if(f=i.current.alternate,C&&!ns(f)){L=Dl(i,t,!1),C=!1;continue}if(L===2){if(C=t,i.errorRecoveryDisabledLanes&C)var l=0;else l=i.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){t=l;i:{var a=i;L=Gn;var u=a.current.memoizedState.isDehydrated;if(u&&(bf(a,l).flags|=256),l=Dl(a,l,!1),l!==2){if(El&&!u){a.errorRecoveryDisabledLanes|=C,X1|=C,L=4;break i}C=wi,wi=L,C!==null&&(wi===null?wi=C:wi.push.apply(wi,C))}L=l}if(C=!1,L!==2)continue}}if(L===1){bf(i,0),d1(i,t,0,!0);break}i:{switch(n=i,C=L,C){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:d1(n,t,Lt,!e1);break i;case 2:wi=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(L=yL+300-$i(),10<L)){if(d1(n,t,Lt,!e1),_n(n,0,!0)!==0)break i;wt=t,n.timeoutHandle=BG(eG.bind(null,n,f,wi,rL,xl,t,Lt,X1,rf,e1,C,"Throttled",-0,0),L);break i}eG(n,f,wi,rL,xl,t,Lt,X1,rf,e1,C,null,-0,0)}}break}while(!0);At(i)}function eG(i,t,f,n,L,C,l,a,u,o,h,S,m,v){if(i.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Dt},tG(t,C,S);var A=(C&62914560)===C?yL-$i():(C&4194048)===C?CG-$i():0;if(A=Xs(S,A),A!==null){wt=C,i.cancelPendingCommit=A(yG.bind(null,i,t,C,f,n,L,l,a,u,h,S,null,m,v)),d1(i,C,l,!o);return}}yG(i,t,C,f,n,L,l,a,u)}function ns(i){for(var t=i;;){var f=t.tag;if((f===0||f===11||f===15)&&t.flags&16384&&(f=t.updateQueue,f!==null&&(f=f.stores,f!==null)))for(var n=0;n<f.length;n++){var L=f[n],C=L.getSnapshot;L=L.value;try{if(!Pi(C(),L))return!1}catch{return!1}}if(f=t.child,t.subtreeFlags&16384&&f!==null)f.return=t,t=f;else{if(t===i)break;for(;t.sibling===null;){if(t.return===null||t.return===i)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function d1(i,t,f,n){t&=~Tl,t&=~X1,i.suspendedLanes|=t,i.pingedLanes&=~t,n&&(i.warmLanes|=t),n=i.expirationTimes;for(var L=t;0<L;){var C=31-Ii(L),l=1<<C;n[C]=-1,L&=~l}f!==0&&ra(i,f,t)}function gL(){return(ii&6)===0?(sn(0),!1):!0}function Ml(){if(K!==null){if(ni===0)var i=K.return;else i=K,Ht=D1=null,wC(i),cf=null,wf=0,i=K;for(;i!==null;)Ye(i.alternate,i),i=i.return;K=null}}function bf(i,t){var f=i.timeoutHandle;f!==-1&&(i.timeoutHandle=-1,ps(f)),f=i.cancelPendingCommit,f!==null&&(i.cancelPendingCommit=null,f()),wt=0,Ml(),ci=i,K=f=Ut(i.current,null),W=t,ni=0,nt=null,e1=!1,hf=Of(i,t),El=!1,rf=Lt=Tl=X1=G1=vi=0,wi=Gn=null,xl=!1,(t&8)!==0&&(t|=t&32);var n=i.entangledLanes;if(n!==0)for(i=i.entanglements,n&=t;0<n;){var L=31-Ii(n),C=1<<L;t|=i[L],n&=~C}return Jt=t,Xn(),f}function GG(i,t){X=null,r.H=fn,t===Gf||t===kn?(t=Tu(),ni=3):t===jC?(t=Tu(),ni=4):ni=t===el?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,K===null&&(vi=1,eL(i,Gt(t,i.current)))}function cG(){var i=tt.current;return i===null?!0:(W&4194048)===W?ot===null:(W&62914560)===W||(W&536870912)!==0?i===ot:!1}function sG(){var i=r.H;return r.H=fn,i===null?fn:i}function dG(){var i=r.A;return r.A=ts,i}function bL(){vi=4,e1||(W&4194048)!==W&&tt.current!==null||(hf=!0),(G1&134217727)===0&&(X1&134217727)===0||ci===null||d1(ci,W,Lt,!1)}function Dl(i,t,f){var n=ii;ii|=2;var L=sG(),C=dG();(ci!==i||W!==t)&&(rL=null,bf(i,t)),t=!1;var l=vi;i:do try{if(ni!==0&&K!==null){var a=K,u=nt;switch(ni){case 8:Ml(),l=6;break i;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var o=ni;if(ni=0,nt=null,Sf(i,a,u,o),f&&hf){l=0;break i}break;default:o=ni,ni=0,nt=null,Sf(i,a,u,o)}}Ls(),l=vi;break}catch(h){GG(i,h)}while(!0);return t&&i.shellSuspendCounter++,Ht=D1=null,ii=n,r.H=L,r.A=C,K===null&&(ci=null,W=0,Xn()),l}function Ls(){for(;K!==null;)oG(K)}function Cs(i,t){var f=ii;ii|=2;var n=sG(),L=dG();ci!==i||W!==t?(rL=null,hL=$i()+500,bf(i,t)):hf=Of(i,t);i:do try{if(ni!==0&&K!==null){t=K;var C=nt;t:switch(ni){case 1:ni=0,nt=null,Sf(i,t,C,1);break;case 2:case 9:if(zu(C)){ni=0,nt=null,mG(t);break}t=function(){ni!==2&&ni!==9||ci!==i||(ni=7),At(i)},C.then(t,t);break i;case 3:ni=7;break i;case 4:ni=5;break i;case 7:zu(C)?(ni=0,nt=null,mG(t)):(ni=0,nt=null,Sf(i,t,C,7));break;case 5:var l=null;switch(K.tag){case 26:l=K.memoizedState;case 5:case 27:var a=K;if(l?ic(l):a.stateNode.complete){ni=0,nt=null;var u=a.sibling;if(u!==null)K=u;else{var o=a.return;o!==null?(K=o,SL(o)):K=null}break t}}ni=0,nt=null,Sf(i,t,C,5);break;case 6:ni=0,nt=null,Sf(i,t,C,6);break;case 8:Ml(),vi=6;break i;default:throw Error(s(462))}}ls();break}catch(h){GG(i,h)}while(!0);return Ht=D1=null,r.H=n,r.A=L,ii=f,K!==null?0:(ci=null,W=0,Xn(),vi)}function ls(){for(;K!==null&&!_c();)oG(K)}function oG(i){var t=qe(i.alternate,i,Jt);i.memoizedProps=i.pendingProps,t===null?SL(i):K=t}function mG(i){var t=i,f=t.alternate;switch(t.tag){case 15:case 0:t=De(f,t,t.pendingProps,t.type,void 0,W);break;case 11:t=De(f,t,t.pendingProps,t.type.render,t.ref,W);break;case 5:wC(t);default:Ye(f,t),t=K=du(t,Jt),t=qe(f,t,Jt)}i.memoizedProps=i.pendingProps,t===null?SL(i):K=t}function Sf(i,t,f,n){Ht=D1=null,wC(t),cf=null,wf=0;var L=t.return;try{if(W0(i,L,t,f,W)){vi=1,eL(i,Gt(f,i.current)),K=null;return}}catch(C){if(L!==null)throw K=L,C;vi=1,eL(i,Gt(f,i.current)),K=null;return}t.flags&32768?(F||n===1?i=!0:hf||(W&536870912)!==0?i=!1:(e1=i=!0,(n===2||n===9||n===3||n===6)&&(n=tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),vG(t,i)):SL(t)}function SL(i){var t=i;do{if((t.flags&32768)!==0){vG(t,e1);return}i=t.return;var f=F0(t.alternate,t,Jt);if(f!==null){K=f;return}if(t=t.sibling,t!==null){K=t;return}K=t=i}while(t!==null);vi===0&&(vi=5)}function vG(i,t){do{var f=I0(i.alternate,i);if(f!==null){f.flags&=32767,K=f;return}if(f=i.return,f!==null&&(f.flags|=32768,f.subtreeFlags=0,f.deletions=null),!t&&(i=i.sibling,i!==null)){K=i;return}K=i=f}while(i!==null);vi=6,K=null}function yG(i,t,f,n,L,C,l,a,u){i.cancelPendingCommit=null;do pL();while(zi!==0);if((ii&6)!==0)throw Error(s(327));if(t!==null){if(t===i.current)throw Error(s(177));if(C=t.lanes|t.childLanes,C|=gC,Bc(i,f,C,l,a,u),i===ci&&(K=ci=null,W=0),gf=t,s1=i,wt=f,Al=C,_l=L,lG=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(i.callbackNode=null,i.callbackPriority=0,Gs(En,function(){return SG(),null})):(i.callbackNode=null,i.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=r.T,r.T=null,L=T.p,T.p=2,l=ii,ii|=4;try{P0(i,t,f)}finally{ii=l,T.p=L,r.T=n}}zi=1,hG(),rG(),gG()}}function hG(){if(zi===1){zi=0;var i=s1,t=gf,f=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||f){f=r.T,r.T=null;var n=T.p;T.p=2;var L=ii;ii|=4;try{Ie(t,i);var C=Vl,l=Lu(i.containerInfo),a=C.focusedElem,u=C.selectionRange;if(l!==a&&a&&a.ownerDocument&&nu(a.ownerDocument.documentElement,a)){if(u!==null&&mC(a)){var o=u.start,h=u.end;if(h===void 0&&(h=o),"selectionStart"in a)a.selectionStart=o,a.selectionEnd=Math.min(h,a.value.length);else{var S=a.ownerDocument||document,m=S&&S.defaultView||window;if(m.getSelection){var v=m.getSelection(),A=a.textContent.length,H=Math.min(u.start,A),ei=u.end===void 0?H:Math.min(u.end,A);!v.extend&&H>ei&&(l=ei,ei=H,H=l);var c=fu(a,H),e=fu(a,ei);if(c&&e&&(v.rangeCount!==1||v.anchorNode!==c.node||v.anchorOffset!==c.offset||v.focusNode!==e.node||v.focusOffset!==e.offset)){var d=S.createRange();d.setStart(c.node,c.offset),v.removeAllRanges(),H>ei?(v.addRange(d),v.extend(e.node,e.offset)):(d.setEnd(e.node,e.offset),v.addRange(d))}}}}for(S=[],v=a;v=v.parentNode;)v.nodeType===1&&S.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<S.length;a++){var b=S[a];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}jL=!!Zl,Vl=Zl=null}finally{ii=L,T.p=n,r.T=f}}i.current=t,zi=2}}function rG(){if(zi===2){zi=0;var i=s1,t=gf,f=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||f){f=r.T,r.T=null;var n=T.p;T.p=2;var L=ii;ii|=4;try{we(i,t.alternate,t)}finally{ii=L,T.p=n,r.T=f}}zi=3}}function gG(){if(zi===4||zi===3){zi=0,Oc();var i=s1,t=gf,f=wt,n=lG;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?zi=5:(zi=0,gf=s1=null,bG(i,i.pendingLanes));var L=i.pendingLanes;if(L===0&&(c1=null),$L(f),t=t.stateNode,Fi&&typeof Fi.onCommitFiberRoot=="function")try{Fi.onCommitFiberRoot(_f,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=r.T,L=T.p,T.p=2,r.T=null;try{for(var C=i.onRecoverableError,l=0;l<n.length;l++){var a=n[l];C(a.value,{componentStack:a.stack})}}finally{r.T=t,T.p=L}}(wt&3)!==0&&pL(),At(i),L=i.pendingLanes,(f&261930)!==0&&(L&42)!==0?i===Ol?cn++:(cn=0,Ol=i):cn=0,sn(0)}}function bG(i,t){(i.pooledCacheLanes&=t)===0&&(t=i.pooledCache,t!=null&&(i.pooledCache=null,Kf(t)))}function pL(){return hG(),rG(),gG(),SG()}function SG(){if(zi!==5)return!1;var i=s1,t=Al;Al=0;var f=$L(wt),n=r.T,L=T.p;try{T.p=32>f?32:f,r.T=null,f=_l,_l=null;var C=s1,l=wt;if(zi=0,gf=s1=null,wt=0,(ii&6)!==0)throw Error(s(331));var a=ii;if(ii|=4,nG(C.current),iG(C,C.current,l,f),ii=a,sn(0,!1),Fi&&typeof Fi.onPostCommitFiberRoot=="function")try{Fi.onPostCommitFiberRoot(_f,C)}catch{}return!0}finally{T.p=L,r.T=n,bG(i,t)}}function pG(i,t,f){t=Gt(f,t),t=ul(i.stateNode,t,2),i=C1(i,t,2),i!==null&&(Mf(i,2),At(i))}function Li(i,t,f){if(i.tag===3)pG(i,i,f);else for(;t!==null;){if(t.tag===3){pG(t,i,f);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(c1===null||!c1.has(n))){i=Gt(f,i),f=ze(2),n=C1(t,f,2),n!==null&&(Ee(f,n,t,i),Mf(n,2),At(n));break}}t=t.return}}function Nl(i,t,f){var n=i.pingCache;if(n===null){n=i.pingCache=new fs;var L=new Set;n.set(t,L)}else L=n.get(t),L===void 0&&(L=new Set,n.set(t,L));L.has(f)||(El=!0,L.add(f),i=as.bind(null,i,t,f),t.then(i,i))}function as(i,t,f){var n=i.pingCache;n!==null&&n.delete(t),i.pingedLanes|=i.suspendedLanes&f,i.warmLanes&=~f,ci===i&&(W&f)===f&&(vi===4||vi===3&&(W&62914560)===W&&300>$i()-yL?(ii&2)===0&&bf(i,0):Tl|=f,rf===W&&(rf=0)),At(i)}function zG(i,t){t===0&&(t=ha()),i=_1(i,t),i!==null&&(Mf(i,t),At(i))}function us(i){var t=i.memoizedState,f=0;t!==null&&(f=t.retryLane),zG(i,f)}function es(i,t){var f=0;switch(i.tag){case 31:case 13:var n=i.stateNode,L=i.memoizedState;L!==null&&(f=L.retryLane);break;case 19:n=i.stateNode;break;case 22:n=i.stateNode._retryCache;break;default:throw Error(s(314))}n!==null&&n.delete(t),zG(i,f)}function Gs(i,t){return JL(i,t)}var zL=null,pf=null,Ul=!1,EL=!1,jl=!1,o1=0;function At(i){i!==pf&&i.next===null&&(pf===null?zL=pf=i:pf=pf.next=i),EL=!0,Ul||(Ul=!0,ss())}function sn(i,t){if(!jl&&EL){jl=!0;do for(var f=!1,n=zL;n!==null;){if(i!==0){var L=n.pendingLanes;if(L===0)var C=0;else{var l=n.suspendedLanes,a=n.pingedLanes;C=(1<<31-Ii(42|i)+1)-1,C&=L&~(l&~a),C=C&201326741?C&201326741|1:C?C|2:0}C!==0&&(f=!0,AG(n,C))}else C=W,C=_n(n,n===ci?C:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(C&3)===0||Of(n,C)||(f=!0,AG(n,C));n=n.next}while(f);jl=!1}}function cs(){EG()}function EG(){EL=Ul=!1;var i=0;o1!==0&&Ss()&&(i=o1);for(var t=$i(),f=null,n=zL;n!==null;){var L=n.next,C=TG(n,t);C===0?(n.next=null,f===null?zL=L:f.next=L,L===null&&(pf=f)):(f=n,(i!==0||(C&3)!==0)&&(EL=!0)),n=L}zi!==0&&zi!==5||sn(i),o1!==0&&(o1=0)}function TG(i,t){for(var f=i.suspendedLanes,n=i.pingedLanes,L=i.expirationTimes,C=i.pendingLanes&-62914561;0<C;){var l=31-Ii(C),a=1<<l,u=L[l];u===-1?((a&f)===0||(a&n)!==0)&&(L[l]=qc(a,t)):u<=t&&(i.expiredLanes|=a),C&=~a}if(t=ci,f=W,f=_n(i,i===t?f:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),n=i.callbackNode,f===0||i===t&&(ni===2||ni===9)||i.cancelPendingCommit!==null)return n!==null&&n!==null&&wL(n),i.callbackNode=null,i.callbackPriority=0;if((f&3)===0||Of(i,f)){if(t=f&-f,t===i.callbackPriority)return t;switch(n!==null&&wL(n),$L(f)){case 2:case 8:f=va;break;case 32:f=En;break;case 268435456:f=ya;break;default:f=En}return n=xG.bind(null,i),f=JL(f,n),i.callbackPriority=t,i.callbackNode=f,t}return n!==null&&n!==null&&wL(n),i.callbackPriority=2,i.callbackNode=null,2}function xG(i,t){if(zi!==0&&zi!==5)return i.callbackNode=null,i.callbackPriority=0,null;var f=i.callbackNode;if(pL()&&i.callbackNode!==f)return null;var n=W;return n=_n(i,i===ci?n:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),n===0?null:(uG(i,n,t),TG(i,$i()),i.callbackNode!=null&&i.callbackNode===f?xG.bind(null,i):null)}function AG(i,t){if(pL())return null;uG(i,t,!0)}function ss(){zs(function(){(ii&6)!==0?JL(ma,cs):EG()})}function Hl(){if(o1===0){var i=uf;i===0&&(i=Tn,Tn<<=1,(Tn&261888)===0&&(Tn=256)),o1=i}return o1}function _G(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:Nn(""+i)}function OG(i,t){var f=t.ownerDocument.createElement("input");return f.name=t.name,f.value=t.value,i.id&&f.setAttribute("form",i.id),t.parentNode.insertBefore(f,t),i=new FormData(i),f.parentNode.removeChild(f),i}function ds(i,t,f,n,L){if(t==="submit"&&f&&f.stateNode===L){var C=_G((L[Qi]||null).action),l=n.submitter;l&&(t=(t=l[Qi]||null)?_G(t.formAction):l.getAttribute("formAction"),t!==null&&(C=t,l=null));var a=new Rn("action","action",null,n,L);i.push({event:a,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(o1!==0){var u=l?OG(L,l):new FormData(L);fl(f,{pending:!0,data:u,method:L.method,action:C},null,u)}}else typeof C=="function"&&(a.preventDefault(),u=l?OG(L,l):new FormData(L),fl(f,{pending:!0,data:u,method:L.method,action:C},C,u))},currentTarget:L}]})}}for(var Rl=0;Rl<rC.length;Rl++){var ql=rC[Rl],os=ql.toLowerCase(),ms=ql[0].toUpperCase()+ql.slice(1);ht(os,"on"+ms)}ht(au,"onAnimationEnd"),ht(uu,"onAnimationIteration"),ht(eu,"onAnimationStart"),ht("dblclick","onDoubleClick"),ht("focusin","onFocus"),ht("focusout","onBlur"),ht(M0,"onTransitionRun"),ht(D0,"onTransitionStart"),ht(N0,"onTransitionCancel"),ht(Gu,"onTransitionEnd"),w1("onMouseEnter",["mouseout","mouseover"]),w1("onMouseLeave",["mouseout","mouseover"]),w1("onPointerEnter",["pointerout","pointerover"]),w1("onPointerLeave",["pointerout","pointerover"]),E1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),E1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),E1("onBeforeInput",["compositionend","keypress","textInput","paste"]),E1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),E1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),E1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vs=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dn));function MG(i,t){t=(t&4)!==0;for(var f=0;f<i.length;f++){var n=i[f],L=n.event;n=n.listeners;i:{var C=void 0;if(t)for(var l=n.length-1;0<=l;l--){var a=n[l],u=a.instance,o=a.currentTarget;if(a=a.listener,u!==C&&L.isPropagationStopped())break i;C=a,L.currentTarget=o;try{C(L)}catch(h){Yn(h)}L.currentTarget=null,C=u}else for(l=0;l<n.length;l++){if(a=n[l],u=a.instance,o=a.currentTarget,a=a.listener,u!==C&&L.isPropagationStopped())break i;C=a,L.currentTarget=o;try{C(L)}catch(h){Yn(h)}L.currentTarget=null,C=u}}}}function J(i,t){var f=t[FL];f===void 0&&(f=t[FL]=new Set);var n=i+"__bubble";f.has(n)||(DG(t,i,2,!1),f.add(n))}function Bl(i,t,f){var n=0;t&&(n|=4),DG(f,i,n,t)}var TL="_reactListening"+Math.random().toString(36).slice(2);function Yl(i){if(!i[TL]){i[TL]=!0,Ea.forEach(function(f){f!=="selectionchange"&&(vs.has(f)||Bl(f,!1,i),Bl(f,!0,i))});var t=i.nodeType===9?i:i.ownerDocument;t===null||t[TL]||(t[TL]=!0,Bl("selectionchange",!1,t))}}function DG(i,t,f,n){switch(ac(t)){case 2:var L=Vs;break;case 8:L=Ks;break;default:L=ta}f=L.bind(null,t,f,i),L=void 0,!lC||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(L=!0),n?L!==void 0?i.addEventListener(t,f,{capture:!0,passive:L}):i.addEventListener(t,f,!0):L!==void 0?i.addEventListener(t,f,{passive:L}):i.addEventListener(t,f,!1)}function Xl(i,t,f,n,L){var C=n;if((t&1)===0&&(t&2)===0&&n!==null)i:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var a=n.stateNode.containerInfo;if(a===L)break;if(l===4)for(l=n.return;l!==null;){var u=l.tag;if((u===3||u===4)&&l.stateNode.containerInfo===L)return;l=l.return}for(;a!==null;){if(l=V1(a),l===null)return;if(u=l.tag,u===5||u===6||u===26||u===27){n=C=l;continue i}a=a.parentNode}}n=n.return}Ra(function(){var o=C,h=LC(f),S=[];i:{var m=cu.get(i);if(m!==void 0){var v=Rn,A=i;switch(i){case"keypress":if(jn(f)===0)break i;case"keydown":case"keyup":v=e0;break;case"focusin":A="focus",v=GC;break;case"focusout":A="blur",v=GC;break;case"beforeblur":case"afterblur":v=GC;break;case"click":if(f.button===2)break i;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ya;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Fc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=s0;break;case au:case uu:case eu:v=i0;break;case Gu:v=o0;break;case"scroll":case"scrollend":v=kc;break;case"wheel":v=v0;break;case"copy":case"cut":case"paste":v=f0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Qa;break;case"toggle":case"beforetoggle":v=h0}var H=(t&4)!==0,ei=!H&&(i==="scroll"||i==="scrollend"),c=H?m!==null?m+"Capture":null:m;H=[];for(var e=o,d;e!==null;){var b=e;if(d=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||d===null||c===null||(b=Uf(e,c),b!=null&&H.push(on(e,b,d))),ei)break;e=e.return}0<H.length&&(m=new v(m,A,null,f,h),S.push({event:m,listeners:H}))}}if((t&7)===0){i:{if(m=i==="mouseover"||i==="pointerover",v=i==="mouseout"||i==="pointerout",m&&f!==nC&&(A=f.relatedTarget||f.fromElement)&&(V1(A)||A[Z1]))break i;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(A=f.relatedTarget||f.toElement,v=o,A=A?V1(A):null,A!==null&&(ei=M(A),H=A.tag,A!==ei||H!==5&&H!==27&&H!==6)&&(A=null)):(v=null,A=o),v!==A)){if(H=Ya,b="onMouseLeave",c="onMouseEnter",e="mouse",(i==="pointerout"||i==="pointerover")&&(H=Qa,b="onPointerLeave",c="onPointerEnter",e="pointer"),ei=v==null?m:Nf(v),d=A==null?m:Nf(A),m=new H(b,e+"leave",v,f,h),m.target=ei,m.relatedTarget=d,b=null,V1(h)===o&&(H=new H(c,e+"enter",A,f,h),H.target=d,H.relatedTarget=ei,b=H),ei=b,v&&A)t:{for(H=ys,c=v,e=A,d=0,b=c;b;b=H(b))d++;b=0;for(var N=e;N;N=H(N))b++;for(;0<d-b;)c=H(c),d--;for(;0<b-d;)e=H(e),b--;for(;d--;){if(c===e||e!==null&&c===e.alternate){H=c;break t}c=H(c),e=H(e)}H=null}else H=null;v!==null&&NG(S,m,v,H,!1),A!==null&&ei!==null&&NG(S,ei,A,H,!0)}}i:{if(m=o?Nf(o):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var I=$a;else if(Wa(m))if(Fa)I=A0;else{I=T0;var O=E0}else v=m.nodeName,!v||v.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?o&&fC(o.elementType)&&(I=$a):I=x0;if(I&&(I=I(i,o))){ka(S,I,f,h);break i}O&&O(i,m,o),i==="focusout"&&o&&m.type==="number"&&o.memoizedProps.value!=null&&tC(m,"number",m.value)}switch(O=o?Nf(o):window,i){case"focusin":(Wa(O)||O.contentEditable==="true")&&(P1=O,vC=o,Qf=null);break;case"focusout":Qf=vC=P1=null;break;case"mousedown":yC=!0;break;case"contextmenu":case"mouseup":case"dragend":yC=!1,Cu(S,f,h);break;case"selectionchange":if(O0)break;case"keydown":case"keyup":Cu(S,f,h)}var Q;if(sC)i:{switch(i){case"compositionstart":var k="onCompositionStart";break i;case"compositionend":k="onCompositionEnd";break i;case"compositionupdate":k="onCompositionUpdate";break i}k=void 0}else I1?Ja(i,f)&&(k="onCompositionEnd"):i==="keydown"&&f.keyCode===229&&(k="onCompositionStart");k&&(Za&&f.locale!=="ko"&&(I1||k!=="onCompositionStart"?k==="onCompositionEnd"&&I1&&(Q=qa()):(It=h,aC="value"in It?It.value:It.textContent,I1=!0)),O=xL(o,k),0<O.length&&(k=new Xa(k,i,null,f,h),S.push({event:k,listeners:O}),Q?k.data=Q:(Q=wa(f),Q!==null&&(k.data=Q)))),(Q=g0?b0(i,f):S0(i,f))&&(k=xL(o,"onBeforeInput"),0<k.length&&(O=new Xa("onBeforeInput","beforeinput",null,f,h),S.push({event:O,listeners:k}),O.data=Q)),ds(S,i,o,f,h)}MG(S,t)})}function on(i,t,f){return{instance:i,listener:t,currentTarget:f}}function xL(i,t){for(var f=t+"Capture",n=[];i!==null;){var L=i,C=L.stateNode;if(L=L.tag,L!==5&&L!==26&&L!==27||C===null||(L=Uf(i,f),L!=null&&n.unshift(on(i,L,C)),L=Uf(i,t),L!=null&&n.push(on(i,L,C))),i.tag===3)return n;i=i.return}return[]}function ys(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function NG(i,t,f,n,L){for(var C=t._reactName,l=[];f!==null&&f!==n;){var a=f,u=a.alternate,o=a.stateNode;if(a=a.tag,u!==null&&u===n)break;a!==5&&a!==26&&a!==27||o===null||(u=o,L?(o=Uf(f,C),o!=null&&l.unshift(on(f,o,u))):L||(o=Uf(f,C),o!=null&&l.push(on(f,o,u)))),f=f.return}l.length!==0&&i.push({event:t,listeners:l})}var hs=/\r\n?/g,rs=/\u0000|\uFFFD/g;function UG(i){return(typeof i=="string"?i:""+i).replace(hs,`
`).replace(rs,"")}function jG(i,t){return t=UG(t),UG(i)===t}function ui(i,t,f,n,L,C){switch(f){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||k1(i,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&k1(i,""+n);break;case"className":Mn(i,"class",n);break;case"tabIndex":Mn(i,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Mn(i,f,n);break;case"style":ja(i,n,C);break;case"data":if(t!=="object"){Mn(i,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||f!=="href")){i.removeAttribute(f);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){i.removeAttribute(f);break}n=Nn(""+n),i.setAttribute(f,n);break;case"action":case"formAction":if(typeof n=="function"){i.setAttribute(f,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof C=="function"&&(f==="formAction"?(t!=="input"&&ui(i,t,"name",L.name,L,null),ui(i,t,"formEncType",L.formEncType,L,null),ui(i,t,"formMethod",L.formMethod,L,null),ui(i,t,"formTarget",L.formTarget,L,null)):(ui(i,t,"encType",L.encType,L,null),ui(i,t,"method",L.method,L,null),ui(i,t,"target",L.target,L,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){i.removeAttribute(f);break}n=Nn(""+n),i.setAttribute(f,n);break;case"onClick":n!=null&&(i.onclick=Dt);break;case"onScroll":n!=null&&J("scroll",i);break;case"onScrollEnd":n!=null&&J("scrollend",i);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(f=n.__html,f!=null){if(L.children!=null)throw Error(s(60));i.innerHTML=f}}break;case"multiple":i.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":i.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){i.removeAttribute("xlink:href");break}f=Nn(""+n),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",f);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?i.setAttribute(f,""+n):i.removeAttribute(f);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?i.setAttribute(f,""):i.removeAttribute(f);break;case"capture":case"download":n===!0?i.setAttribute(f,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?i.setAttribute(f,n):i.removeAttribute(f);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?i.setAttribute(f,n):i.removeAttribute(f);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?i.removeAttribute(f):i.setAttribute(f,n);break;case"popover":J("beforetoggle",i),J("toggle",i),On(i,"popover",n);break;case"xlinkActuate":Mt(i,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Mt(i,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Mt(i,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Mt(i,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Mt(i,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Mt(i,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Mt(i,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Mt(i,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Mt(i,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":On(i,"is",n);break;case"innerText":case"textContent":break;default:(!(2<f.length)||f[0]!=="o"&&f[0]!=="O"||f[1]!=="n"&&f[1]!=="N")&&(f=wc.get(f)||f,On(i,f,n))}}function Ql(i,t,f,n,L,C){switch(f){case"style":ja(i,n,C);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(s(61));if(f=n.__html,f!=null){if(L.children!=null)throw Error(s(60));i.innerHTML=f}}break;case"children":typeof n=="string"?k1(i,n):(typeof n=="number"||typeof n=="bigint")&&k1(i,""+n);break;case"onScroll":n!=null&&J("scroll",i);break;case"onScrollEnd":n!=null&&J("scrollend",i);break;case"onClick":n!=null&&(i.onclick=Dt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ta.hasOwnProperty(f))i:{if(f[0]==="o"&&f[1]==="n"&&(L=f.endsWith("Capture"),t=f.slice(2,L?f.length-7:void 0),C=i[Qi]||null,C=C!=null?C[f]:null,typeof C=="function"&&i.removeEventListener(t,C,L),typeof n=="function")){typeof C!="function"&&C!==null&&(f in i?i[f]=null:i.hasAttribute(f)&&i.removeAttribute(f)),i.addEventListener(t,n,L);break i}f in i?i[f]=n:n===!0?i.setAttribute(f,""):On(i,f,n)}}}function Di(i,t,f){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":J("error",i),J("load",i);var n=!1,L=!1,C;for(C in f)if(f.hasOwnProperty(C)){var l=f[C];if(l!=null)switch(C){case"src":n=!0;break;case"srcSet":L=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ui(i,t,C,l,f,null)}}L&&ui(i,t,"srcSet",f.srcSet,f,null),n&&ui(i,t,"src",f.src,f,null);return;case"input":J("invalid",i);var a=C=l=L=null,u=null,o=null;for(n in f)if(f.hasOwnProperty(n)){var h=f[n];if(h!=null)switch(n){case"name":L=h;break;case"type":l=h;break;case"checked":u=h;break;case"defaultChecked":o=h;break;case"value":C=h;break;case"defaultValue":a=h;break;case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(137,t));break;default:ui(i,t,n,h,f,null)}}Ma(i,C,a,u,o,l,L,!1);return;case"select":J("invalid",i),n=l=C=null;for(L in f)if(f.hasOwnProperty(L)&&(a=f[L],a!=null))switch(L){case"value":C=a;break;case"defaultValue":l=a;break;case"multiple":n=a;default:ui(i,t,L,a,f,null)}t=C,f=l,i.multiple=!!n,t!=null?W1(i,!!n,t,!1):f!=null&&W1(i,!!n,f,!0);return;case"textarea":J("invalid",i),C=L=n=null;for(l in f)if(f.hasOwnProperty(l)&&(a=f[l],a!=null))switch(l){case"value":n=a;break;case"defaultValue":L=a;break;case"children":C=a;break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(s(91));break;default:ui(i,t,l,a,f,null)}Na(i,n,L,C);return;case"option":for(u in f)if(f.hasOwnProperty(u)&&(n=f[u],n!=null))switch(u){case"selected":i.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ui(i,t,u,n,f,null)}return;case"dialog":J("beforetoggle",i),J("toggle",i),J("cancel",i),J("close",i);break;case"iframe":case"object":J("load",i);break;case"video":case"audio":for(n=0;n<dn.length;n++)J(dn[n],i);break;case"image":J("error",i),J("load",i);break;case"details":J("toggle",i);break;case"embed":case"source":case"link":J("error",i),J("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(o in f)if(f.hasOwnProperty(o)&&(n=f[o],n!=null))switch(o){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,t));default:ui(i,t,o,n,f,null)}return;default:if(fC(t)){for(h in f)f.hasOwnProperty(h)&&(n=f[h],n!==void 0&&Ql(i,t,h,n,f,void 0));return}}for(a in f)f.hasOwnProperty(a)&&(n=f[a],n!=null&&ui(i,t,a,n,f,null))}function gs(i,t,f,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var L=null,C=null,l=null,a=null,u=null,o=null,h=null;for(v in f){var S=f[v];if(f.hasOwnProperty(v)&&S!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":u=S;default:n.hasOwnProperty(v)||ui(i,t,v,null,n,S)}}for(var m in n){var v=n[m];if(S=f[m],n.hasOwnProperty(m)&&(v!=null||S!=null))switch(m){case"type":C=v;break;case"name":L=v;break;case"checked":o=v;break;case"defaultChecked":h=v;break;case"value":l=v;break;case"defaultValue":a=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(s(137,t));break;default:v!==S&&ui(i,t,m,v,n,S)}}iC(i,l,a,u,o,h,C,L);return;case"select":v=l=a=m=null;for(C in f)if(u=f[C],f.hasOwnProperty(C)&&u!=null)switch(C){case"value":break;case"multiple":v=u;default:n.hasOwnProperty(C)||ui(i,t,C,null,n,u)}for(L in n)if(C=n[L],u=f[L],n.hasOwnProperty(L)&&(C!=null||u!=null))switch(L){case"value":m=C;break;case"defaultValue":a=C;break;case"multiple":l=C;default:C!==u&&ui(i,t,L,C,n,u)}t=a,f=l,n=v,m!=null?W1(i,!!f,m,!1):!!n!=!!f&&(t!=null?W1(i,!!f,t,!0):W1(i,!!f,f?[]:"",!1));return;case"textarea":v=m=null;for(a in f)if(L=f[a],f.hasOwnProperty(a)&&L!=null&&!n.hasOwnProperty(a))switch(a){case"value":break;case"children":break;default:ui(i,t,a,null,n,L)}for(l in n)if(L=n[l],C=f[l],n.hasOwnProperty(l)&&(L!=null||C!=null))switch(l){case"value":m=L;break;case"defaultValue":v=L;break;case"children":break;case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(91));break;default:L!==C&&ui(i,t,l,L,n,C)}Da(i,m,v);return;case"option":for(var A in f)if(m=f[A],f.hasOwnProperty(A)&&m!=null&&!n.hasOwnProperty(A))switch(A){case"selected":i.selected=!1;break;default:ui(i,t,A,null,n,m)}for(u in n)if(m=n[u],v=f[u],n.hasOwnProperty(u)&&m!==v&&(m!=null||v!=null))switch(u){case"selected":i.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:ui(i,t,u,m,n,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var H in f)m=f[H],f.hasOwnProperty(H)&&m!=null&&!n.hasOwnProperty(H)&&ui(i,t,H,null,n,m);for(o in n)if(m=n[o],v=f[o],n.hasOwnProperty(o)&&m!==v&&(m!=null||v!=null))switch(o){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(s(137,t));break;default:ui(i,t,o,m,n,v)}return;default:if(fC(t)){for(var ei in f)m=f[ei],f.hasOwnProperty(ei)&&m!==void 0&&!n.hasOwnProperty(ei)&&Ql(i,t,ei,void 0,n,m);for(h in n)m=n[h],v=f[h],!n.hasOwnProperty(h)||m===v||m===void 0&&v===void 0||Ql(i,t,h,m,n,v);return}}for(var c in f)m=f[c],f.hasOwnProperty(c)&&m!=null&&!n.hasOwnProperty(c)&&ui(i,t,c,null,n,m);for(S in n)m=n[S],v=f[S],!n.hasOwnProperty(S)||m===v||m==null&&v==null||ui(i,t,S,m,n,v)}function HG(i){switch(i){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bs(){if(typeof performance.getEntriesByType=="function"){for(var i=0,t=0,f=performance.getEntriesByType("resource"),n=0;n<f.length;n++){var L=f[n],C=L.transferSize,l=L.initiatorType,a=L.duration;if(C&&a&&HG(l)){for(l=0,a=L.responseEnd,n+=1;n<f.length;n++){var u=f[n],o=u.startTime;if(o>a)break;var h=u.transferSize,S=u.initiatorType;h&&HG(S)&&(u=u.responseEnd,l+=h*(u<a?1:(a-o)/(u-o)))}if(--n,t+=8*(C+l)/(L.duration/1e3),i++,10<i)break}}if(0<i)return t/i/1e6}return navigator.connection&&(i=navigator.connection.downlink,typeof i=="number")?i:5}var Zl=null,Vl=null;function AL(i){return i.nodeType===9?i:i.ownerDocument}function RG(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qG(i,t){if(i===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&t==="foreignObject"?0:i}function Kl(i,t){return i==="textarea"||i==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jl=null;function Ss(){var i=window.event;return i&&i.type==="popstate"?i===Jl?!1:(Jl=i,!0):(Jl=null,!1)}var BG=typeof setTimeout=="function"?setTimeout:void 0,ps=typeof clearTimeout=="function"?clearTimeout:void 0,YG=typeof Promise=="function"?Promise:void 0,zs=typeof queueMicrotask=="function"?queueMicrotask:typeof YG<"u"?function(i){return YG.resolve(null).then(i).catch(Es)}:BG;function Es(i){setTimeout(function(){throw i})}function m1(i){return i==="head"}function XG(i,t){var f=t,n=0;do{var L=f.nextSibling;if(i.removeChild(f),L&&L.nodeType===8)if(f=L.data,f==="/$"||f==="/&"){if(n===0){i.removeChild(L),xf(t);return}n--}else if(f==="$"||f==="$?"||f==="$~"||f==="$!"||f==="&")n++;else if(f==="html")mn(i.ownerDocument.documentElement);else if(f==="head"){f=i.ownerDocument.head,mn(f);for(var C=f.firstChild;C;){var l=C.nextSibling,a=C.nodeName;C[Df]||a==="SCRIPT"||a==="STYLE"||a==="LINK"&&C.rel.toLowerCase()==="stylesheet"||f.removeChild(C),C=l}}else f==="body"&&mn(i.ownerDocument.body);f=L}while(f);xf(t)}function QG(i,t){var f=i;i=0;do{var n=f.nextSibling;if(f.nodeType===1?t?(f._stashedDisplay=f.style.display,f.style.display="none"):(f.style.display=f._stashedDisplay||"",f.getAttribute("style")===""&&f.removeAttribute("style")):f.nodeType===3&&(t?(f._stashedText=f.nodeValue,f.nodeValue=""):f.nodeValue=f._stashedText||""),n&&n.nodeType===8)if(f=n.data,f==="/$"){if(i===0)break;i--}else f!=="$"&&f!=="$?"&&f!=="$~"&&f!=="$!"||i++;f=n}while(f)}function wl(i){var t=i.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var f=t;switch(t=t.nextSibling,f.nodeName){case"HTML":case"HEAD":case"BODY":wl(f),IL(f);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(f.rel.toLowerCase()==="stylesheet")continue}i.removeChild(f)}}function Ts(i,t,f,n){for(;i.nodeType===1;){var L=f;if(i.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(n){if(!i[Df])switch(t){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(C=i.getAttribute("rel"),C==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(C!==L.rel||i.getAttribute("href")!==(L.href==null||L.href===""?null:L.href)||i.getAttribute("crossorigin")!==(L.crossOrigin==null?null:L.crossOrigin)||i.getAttribute("title")!==(L.title==null?null:L.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(C=i.getAttribute("src"),(C!==(L.src==null?null:L.src)||i.getAttribute("type")!==(L.type==null?null:L.type)||i.getAttribute("crossorigin")!==(L.crossOrigin==null?null:L.crossOrigin))&&C&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(t==="input"&&i.type==="hidden"){var C=L.name==null?null:""+L.name;if(L.type==="hidden"&&i.getAttribute("name")===C)return i}else return i;if(i=mt(i.nextSibling),i===null)break}return null}function xs(i,t,f){if(t==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!f||(i=mt(i.nextSibling),i===null))return null;return i}function ZG(i,t){for(;i.nodeType!==8;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!t||(i=mt(i.nextSibling),i===null))return null;return i}function Wl(i){return i.data==="$?"||i.data==="$~"}function kl(i){return i.data==="$!"||i.data==="$?"&&i.ownerDocument.readyState!=="loading"}function As(i,t){var f=i.ownerDocument;if(i.data==="$~")i._reactRetry=t;else if(i.data!=="$?"||f.readyState!=="loading")t();else{var n=function(){t(),f.removeEventListener("DOMContentLoaded",n)};f.addEventListener("DOMContentLoaded",n),i._reactRetry=n}}function mt(i){for(;i!=null;i=i.nextSibling){var t=i.nodeType;if(t===1||t===3)break;if(t===8){if(t=i.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return i}var $l=null;function VG(i){i=i.nextSibling;for(var t=0;i;){if(i.nodeType===8){var f=i.data;if(f==="/$"||f==="/&"){if(t===0)return mt(i.nextSibling);t--}else f!=="$"&&f!=="$!"&&f!=="$?"&&f!=="$~"&&f!=="&"||t++}i=i.nextSibling}return null}function KG(i){i=i.previousSibling;for(var t=0;i;){if(i.nodeType===8){var f=i.data;if(f==="$"||f==="$!"||f==="$?"||f==="$~"||f==="&"){if(t===0)return i;t--}else f!=="/$"&&f!=="/&"||t++}i=i.previousSibling}return null}function JG(i,t,f){switch(t=AL(f),i){case"html":if(i=t.documentElement,!i)throw Error(s(452));return i;case"head":if(i=t.head,!i)throw Error(s(453));return i;case"body":if(i=t.body,!i)throw Error(s(454));return i;default:throw Error(s(451))}}function mn(i){for(var t=i.attributes;t.length;)i.removeAttributeNode(t[0]);IL(i)}var vt=new Map,wG=new Set;function _L(i){return typeof i.getRootNode=="function"?i.getRootNode():i.nodeType===9?i:i.ownerDocument}var Wt=T.d;T.d={f:_s,r:Os,D:Ms,C:Ds,L:Ns,m:Us,X:Hs,S:js,M:Rs};function _s(){var i=Wt.f(),t=gL();return i||t}function Os(i){var t=K1(i);t!==null&&t.tag===5&&t.type==="form"?Ge(t):Wt.r(i)}var zf=typeof document>"u"?null:document;function WG(i,t,f){var n=zf;if(n&&typeof t=="string"&&t){var L=ut(t);L='link[rel="'+i+'"][href="'+L+'"]',typeof f=="string"&&(L+='[crossorigin="'+f+'"]'),wG.has(L)||(wG.add(L),i={rel:i,crossOrigin:f,href:t},n.querySelector(L)===null&&(t=n.createElement("link"),Di(t,"link",i),Ei(t),n.head.appendChild(t)))}}function Ms(i){Wt.D(i),WG("dns-prefetch",i,null)}function Ds(i,t){Wt.C(i,t),WG("preconnect",i,t)}function Ns(i,t,f){Wt.L(i,t,f);var n=zf;if(n&&i&&t){var L='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&f&&f.imageSrcSet?(L+='[imagesrcset="'+ut(f.imageSrcSet)+'"]',typeof f.imageSizes=="string"&&(L+='[imagesizes="'+ut(f.imageSizes)+'"]')):L+='[href="'+ut(i)+'"]';var C=L;switch(t){case"style":C=Ef(i);break;case"script":C=Tf(i)}vt.has(C)||(i=U({rel:"preload",href:t==="image"&&f&&f.imageSrcSet?void 0:i,as:t},f),vt.set(C,i),n.querySelector(L)!==null||t==="style"&&n.querySelector(vn(C))||t==="script"&&n.querySelector(yn(C))||(t=n.createElement("link"),Di(t,"link",i),Ei(t),n.head.appendChild(t)))}}function Us(i,t){Wt.m(i,t);var f=zf;if(f&&i){var n=t&&typeof t.as=="string"?t.as:"script",L='link[rel="modulepreload"][as="'+ut(n)+'"][href="'+ut(i)+'"]',C=L;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":C=Tf(i)}if(!vt.has(C)&&(i=U({rel:"modulepreload",href:i},t),vt.set(C,i),f.querySelector(L)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(f.querySelector(yn(C)))return}n=f.createElement("link"),Di(n,"link",i),Ei(n),f.head.appendChild(n)}}}function js(i,t,f){Wt.S(i,t,f);var n=zf;if(n&&i){var L=J1(n).hoistableStyles,C=Ef(i);t=t||"default";var l=L.get(C);if(!l){var a={loading:0,preload:null};if(l=n.querySelector(vn(C)))a.loading=5;else{i=U({rel:"stylesheet",href:i,"data-precedence":t},f),(f=vt.get(C))&&Fl(i,f);var u=l=n.createElement("link");Ei(u),Di(u,"link",i),u._p=new Promise(function(o,h){u.onload=o,u.onerror=h}),u.addEventListener("load",function(){a.loading|=1}),u.addEventListener("error",function(){a.loading|=2}),a.loading|=4,OL(l,t,n)}l={type:"stylesheet",instance:l,count:1,state:a},L.set(C,l)}}}function Hs(i,t){Wt.X(i,t);var f=zf;if(f&&i){var n=J1(f).hoistableScripts,L=Tf(i),C=n.get(L);C||(C=f.querySelector(yn(L)),C||(i=U({src:i,async:!0},t),(t=vt.get(L))&&Il(i,t),C=f.createElement("script"),Ei(C),Di(C,"link",i),f.head.appendChild(C)),C={type:"script",instance:C,count:1,state:null},n.set(L,C))}}function Rs(i,t){Wt.M(i,t);var f=zf;if(f&&i){var n=J1(f).hoistableScripts,L=Tf(i),C=n.get(L);C||(C=f.querySelector(yn(L)),C||(i=U({src:i,async:!0,type:"module"},t),(t=vt.get(L))&&Il(i,t),C=f.createElement("script"),Ei(C),Di(C,"link",i),f.head.appendChild(C)),C={type:"script",instance:C,count:1,state:null},n.set(L,C))}}function kG(i,t,f,n){var L=(L=V.current)?_L(L):null;if(!L)throw Error(s(446));switch(i){case"meta":case"title":return null;case"style":return typeof f.precedence=="string"&&typeof f.href=="string"?(t=Ef(f.href),f=J1(L).hoistableStyles,n=f.get(t),n||(n={type:"style",instance:null,count:0,state:null},f.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(f.rel==="stylesheet"&&typeof f.href=="string"&&typeof f.precedence=="string"){i=Ef(f.href);var C=J1(L).hoistableStyles,l=C.get(i);if(l||(L=L.ownerDocument||L,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},C.set(i,l),(C=L.querySelector(vn(i)))&&!C._p&&(l.instance=C,l.state.loading=5),vt.has(i)||(f={rel:"preload",as:"style",href:f.href,crossOrigin:f.crossOrigin,integrity:f.integrity,media:f.media,hrefLang:f.hrefLang,referrerPolicy:f.referrerPolicy},vt.set(i,f),C||qs(L,i,f,l.state))),t&&n===null)throw Error(s(528,""));return l}if(t&&n!==null)throw Error(s(529,""));return null;case"script":return t=f.async,f=f.src,typeof f=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tf(f),f=J1(L).hoistableScripts,n=f.get(t),n||(n={type:"script",instance:null,count:0,state:null},f.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,i))}}function Ef(i){return'href="'+ut(i)+'"'}function vn(i){return'link[rel="stylesheet"]['+i+"]"}function $G(i){return U({},i,{"data-precedence":i.precedence,precedence:null})}function qs(i,t,f,n){i.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=i.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Di(t,"link",f),Ei(t),i.head.appendChild(t))}function Tf(i){return'[src="'+ut(i)+'"]'}function yn(i){return"script[async]"+i}function FG(i,t,f){if(t.count++,t.instance===null)switch(t.type){case"style":var n=i.querySelector('style[data-href~="'+ut(f.href)+'"]');if(n)return t.instance=n,Ei(n),n;var L=U({},f,{"data-href":f.href,"data-precedence":f.precedence,href:null,precedence:null});return n=(i.ownerDocument||i).createElement("style"),Ei(n),Di(n,"style",L),OL(n,f.precedence,i),t.instance=n;case"stylesheet":L=Ef(f.href);var C=i.querySelector(vn(L));if(C)return t.state.loading|=4,t.instance=C,Ei(C),C;n=$G(f),(L=vt.get(L))&&Fl(n,L),C=(i.ownerDocument||i).createElement("link"),Ei(C);var l=C;return l._p=new Promise(function(a,u){l.onload=a,l.onerror=u}),Di(C,"link",n),t.state.loading|=4,OL(C,f.precedence,i),t.instance=C;case"script":return C=Tf(f.src),(L=i.querySelector(yn(C)))?(t.instance=L,Ei(L),L):(n=f,(L=vt.get(C))&&(n=U({},f),Il(n,L)),i=i.ownerDocument||i,L=i.createElement("script"),Ei(L),Di(L,"link",n),i.head.appendChild(L),t.instance=L);case"void":return null;default:throw Error(s(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,OL(n,f.precedence,i));return t.instance}function OL(i,t,f){for(var n=f.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),L=n.length?n[n.length-1]:null,C=L,l=0;l<n.length;l++){var a=n[l];if(a.dataset.precedence===t)C=a;else if(C!==L)break}C?C.parentNode.insertBefore(i,C.nextSibling):(t=f.nodeType===9?f.head:f,t.insertBefore(i,t.firstChild))}function Fl(i,t){i.crossOrigin==null&&(i.crossOrigin=t.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=t.referrerPolicy),i.title==null&&(i.title=t.title)}function Il(i,t){i.crossOrigin==null&&(i.crossOrigin=t.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=t.referrerPolicy),i.integrity==null&&(i.integrity=t.integrity)}var ML=null;function IG(i,t,f){if(ML===null){var n=new Map,L=ML=new Map;L.set(f,n)}else L=ML,n=L.get(f),n||(n=new Map,L.set(f,n));if(n.has(i))return n;for(n.set(i,null),f=f.getElementsByTagName(i),L=0;L<f.length;L++){var C=f[L];if(!(C[Df]||C[Ai]||i==="link"&&C.getAttribute("rel")==="stylesheet")&&C.namespaceURI!=="http://www.w3.org/2000/svg"){var l=C.getAttribute(t)||"";l=i+l;var a=n.get(l);a?a.push(C):n.set(l,[C])}}return n}function PG(i,t,f){i=i.ownerDocument||i,i.head.insertBefore(f,t==="title"?i.querySelector("head > title"):null)}function Bs(i,t,f){if(f===1||t.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return i=t.disabled,typeof t.precedence=="string"&&i==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function ic(i){return!(i.type==="stylesheet"&&(i.state.loading&3)===0)}function Ys(i,t,f,n){if(f.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(f.state.loading&4)===0){if(f.instance===null){var L=Ef(n.href),C=t.querySelector(vn(L));if(C){t=C._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(i.count++,i=DL.bind(i),t.then(i,i)),f.state.loading|=4,f.instance=C,Ei(C);return}C=t.ownerDocument||t,n=$G(n),(L=vt.get(L))&&Fl(n,L),C=C.createElement("link"),Ei(C);var l=C;l._p=new Promise(function(a,u){l.onload=a,l.onerror=u}),Di(C,"link",n),f.instance=C}i.stylesheets===null&&(i.stylesheets=new Map),i.stylesheets.set(f,t),(t=f.state.preload)&&(f.state.loading&3)===0&&(i.count++,f=DL.bind(i),t.addEventListener("load",f),t.addEventListener("error",f))}}var Pl=0;function Xs(i,t){return i.stylesheets&&i.count===0&&UL(i,i.stylesheets),0<i.count||0<i.imgCount?function(f){var n=setTimeout(function(){if(i.stylesheets&&UL(i,i.stylesheets),i.unsuspend){var C=i.unsuspend;i.unsuspend=null,C()}},6e4+t);0<i.imgBytes&&Pl===0&&(Pl=62500*bs());var L=setTimeout(function(){if(i.waitingForImages=!1,i.count===0&&(i.stylesheets&&UL(i,i.stylesheets),i.unsuspend)){var C=i.unsuspend;i.unsuspend=null,C()}},(i.imgBytes>Pl?50:800)+t);return i.unsuspend=f,function(){i.unsuspend=null,clearTimeout(n),clearTimeout(L)}}:null}function DL(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)UL(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var NL=null;function UL(i,t){i.stylesheets=null,i.unsuspend!==null&&(i.count++,NL=new Map,t.forEach(Qs,i),NL=null,DL.call(i))}function Qs(i,t){if(!(t.state.loading&4)){var f=NL.get(i);if(f)var n=f.get(null);else{f=new Map,NL.set(i,f);for(var L=i.querySelectorAll("link[data-precedence],style[data-precedence]"),C=0;C<L.length;C++){var l=L[C];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(f.set(l.dataset.precedence,l),n=l)}n&&f.set(null,n)}L=t.instance,l=L.getAttribute("data-precedence"),C=f.get(l)||n,C===n&&f.set(null,L),f.set(l,L),this.count++,n=DL.bind(this),L.addEventListener("load",n),L.addEventListener("error",n),C?C.parentNode.insertBefore(L,C.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(L,i.firstChild)),t.state.loading|=4}}var hn={$$typeof:Ni,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Zs(i,t,f,n,L,C,l,a,u){this.tag=1,this.containerInfo=i,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=WL(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=WL(0),this.hiddenUpdates=WL(null),this.identifierPrefix=n,this.onUncaughtError=L,this.onCaughtError=C,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function tc(i,t,f,n,L,C,l,a,u,o,h,S){return i=new Zs(i,t,f,l,u,o,h,S,a),t=1,C===!0&&(t|=24),C=it(3,null,null,t),i.current=C,C.stateNode=i,t=DC(),t.refCount++,i.pooledCache=t,t.refCount++,C.memoizedState={element:n,isDehydrated:f,cache:t},HC(C),i}function fc(i){return i?(i=nf,i):nf}function nc(i,t,f,n,L,C){L=fc(L),n.context===null?n.context=L:n.pendingContext=L,n=L1(t),n.payload={element:f},C=C===void 0?null:C,C!==null&&(n.callback=C),f=C1(i,n,t),f!==null&&(Wi(f,i,t),kf(f,i,t))}function Lc(i,t){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var f=i.retryLane;i.retryLane=f!==0&&f<t?f:t}}function ia(i,t){Lc(i,t),(i=i.alternate)&&Lc(i,t)}function Cc(i){if(i.tag===13||i.tag===31){var t=_1(i,67108864);t!==null&&Wi(t,i,67108864),ia(i,67108864)}}function lc(i){if(i.tag===13||i.tag===31){var t=Ct();t=kL(t);var f=_1(i,t);f!==null&&Wi(f,i,t),ia(i,t)}}var jL=!0;function Vs(i,t,f,n){var L=r.T;r.T=null;var C=T.p;try{T.p=2,ta(i,t,f,n)}finally{T.p=C,r.T=L}}function Ks(i,t,f,n){var L=r.T;r.T=null;var C=T.p;try{T.p=8,ta(i,t,f,n)}finally{T.p=C,r.T=L}}function ta(i,t,f,n){if(jL){var L=fa(n);if(L===null)Xl(i,t,n,HL,f),uc(i,n);else if(ws(L,i,t,f,n))n.stopPropagation();else if(uc(i,n),t&4&&-1<Js.indexOf(i)){for(;L!==null;){var C=K1(L);if(C!==null)switch(C.tag){case 3:if(C=C.stateNode,C.current.memoizedState.isDehydrated){var l=z1(C.pendingLanes);if(l!==0){var a=C;for(a.pendingLanes|=2,a.entangledLanes|=2;l;){var u=1<<31-Ii(l);a.entanglements[1]|=u,l&=~u}At(C),(ii&6)===0&&(hL=$i()+500,sn(0))}}break;case 31:case 13:a=_1(C,2),a!==null&&Wi(a,C,2),gL(),ia(C,2)}if(C=fa(n),C===null&&Xl(i,t,n,HL,f),C===L)break;L=C}L!==null&&n.stopPropagation()}else Xl(i,t,n,null,f)}}function fa(i){return i=LC(i),na(i)}var HL=null;function na(i){if(HL=null,i=V1(i),i!==null){var t=M(i);if(t===null)i=null;else{var f=t.tag;if(f===13){if(i=w(t),i!==null)return i;i=null}else if(f===31){if(i=fi(t),i!==null)return i;i=null}else if(f===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;i=null}else t!==i&&(i=null)}}return HL=i,null}function ac(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Mc()){case ma:return 2;case va:return 8;case En:case Dc:return 32;case ya:return 268435456;default:return 32}default:return 32}}var La=!1,v1=null,y1=null,h1=null,rn=new Map,gn=new Map,r1=[],Js="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function uc(i,t){switch(i){case"focusin":case"focusout":v1=null;break;case"dragenter":case"dragleave":y1=null;break;case"mouseover":case"mouseout":h1=null;break;case"pointerover":case"pointerout":rn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gn.delete(t.pointerId)}}function bn(i,t,f,n,L,C){return i===null||i.nativeEvent!==C?(i={blockedOn:t,domEventName:f,eventSystemFlags:n,nativeEvent:C,targetContainers:[L]},t!==null&&(t=K1(t),t!==null&&Cc(t)),i):(i.eventSystemFlags|=n,t=i.targetContainers,L!==null&&t.indexOf(L)===-1&&t.push(L),i)}function ws(i,t,f,n,L){switch(t){case"focusin":return v1=bn(v1,i,t,f,n,L),!0;case"dragenter":return y1=bn(y1,i,t,f,n,L),!0;case"mouseover":return h1=bn(h1,i,t,f,n,L),!0;case"pointerover":var C=L.pointerId;return rn.set(C,bn(rn.get(C)||null,i,t,f,n,L)),!0;case"gotpointercapture":return C=L.pointerId,gn.set(C,bn(gn.get(C)||null,i,t,f,n,L)),!0}return!1}function ec(i){var t=V1(i.target);if(t!==null){var f=M(t);if(f!==null){if(t=f.tag,t===13){if(t=w(f),t!==null){i.blockedOn=t,pa(i.priority,function(){lc(f)});return}}else if(t===31){if(t=fi(f),t!==null){i.blockedOn=t,pa(i.priority,function(){lc(f)});return}}else if(t===3&&f.stateNode.current.memoizedState.isDehydrated){i.blockedOn=f.tag===3?f.stateNode.containerInfo:null;return}}}i.blockedOn=null}function RL(i){if(i.blockedOn!==null)return!1;for(var t=i.targetContainers;0<t.length;){var f=fa(i.nativeEvent);if(f===null){f=i.nativeEvent;var n=new f.constructor(f.type,f);nC=n,f.target.dispatchEvent(n),nC=null}else return t=K1(f),t!==null&&Cc(t),i.blockedOn=f,!1;t.shift()}return!0}function Gc(i,t,f){RL(i)&&f.delete(t)}function Ws(){La=!1,v1!==null&&RL(v1)&&(v1=null),y1!==null&&RL(y1)&&(y1=null),h1!==null&&RL(h1)&&(h1=null),rn.forEach(Gc),gn.forEach(Gc)}function qL(i,t){i.blockedOn===t&&(i.blockedOn=null,La||(La=!0,p.unstable_scheduleCallback(p.unstable_NormalPriority,Ws)))}var BL=null;function cc(i){BL!==i&&(BL=i,p.unstable_scheduleCallback(p.unstable_NormalPriority,function(){BL===i&&(BL=null);for(var t=0;t<i.length;t+=3){var f=i[t],n=i[t+1],L=i[t+2];if(typeof n!="function"){if(na(n||f)===null)continue;break}var C=K1(f);C!==null&&(i.splice(t,3),t-=3,fl(C,{pending:!0,data:L,method:f.method,action:n},n,L))}}))}function xf(i){function t(u){return qL(u,i)}v1!==null&&qL(v1,i),y1!==null&&qL(y1,i),h1!==null&&qL(h1,i),rn.forEach(t),gn.forEach(t);for(var f=0;f<r1.length;f++){var n=r1[f];n.blockedOn===i&&(n.blockedOn=null)}for(;0<r1.length&&(f=r1[0],f.blockedOn===null);)ec(f),f.blockedOn===null&&r1.shift();if(f=(i.ownerDocument||i).$$reactFormReplay,f!=null)for(n=0;n<f.length;n+=3){var L=f[n],C=f[n+1],l=L[Qi]||null;if(typeof C=="function")l||cc(f);else if(l){var a=null;if(C&&C.hasAttribute("formAction")){if(L=C,l=C[Qi]||null)a=l.formAction;else if(na(L)!==null)continue}else a=l.action;typeof a=="function"?f[n+1]=a:(f.splice(n,3),n-=3),cc(f)}}}function sc(){function i(C){C.canIntercept&&C.info==="react-transition"&&C.intercept({handler:function(){return new Promise(function(l){return L=l})},focusReset:"manual",scroll:"manual"})}function t(){L!==null&&(L(),L=null),n||setTimeout(f,20)}function f(){if(!n&&!navigation.transition){var C=navigation.currentEntry;C&&C.url!=null&&navigation.navigate(C.url,{state:C.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,L=null;return navigation.addEventListener("navigate",i),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(f,100),function(){n=!0,navigation.removeEventListener("navigate",i),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),L!==null&&(L(),L=null)}}}function Ca(i){this._internalRoot=i}YL.prototype.render=Ca.prototype.render=function(i){var t=this._internalRoot;if(t===null)throw Error(s(409));var f=t.current,n=Ct();nc(f,n,i,t,null,null)},YL.prototype.unmount=Ca.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var t=i.containerInfo;nc(i.current,2,null,i,null,null),gL(),t[Z1]=null}};function YL(i){this._internalRoot=i}YL.prototype.unstable_scheduleHydration=function(i){if(i){var t=Sa();i={blockedOn:null,target:i,priority:t};for(var f=0;f<r1.length&&t!==0&&t<r1[f].priority;f++);r1.splice(f,0,i),f===0&&ec(i)}};var dc=R.version;if(dc!=="19.2.3")throw Error(s(527,dc,"19.2.3"));T.findDOMNode=function(i){var t=i._reactInternals;if(t===void 0)throw typeof i.render=="function"?Error(s(188)):(i=Object.keys(i).join(","),Error(s(268,i)));return i=E(t),i=i!==null?Z(i):null,i=i===null?null:i.stateNode,i};var ks={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:r,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var XL=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!XL.isDisabled&&XL.supportsFiber)try{_f=XL.inject(ks),Fi=XL}catch{}}return pn.createRoot=function(i,t){if(!j(i))throw Error(s(299));var f=!1,n="",L=ge,C=be,l=Se;return t!=null&&(t.unstable_strictMode===!0&&(f=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(L=t.onUncaughtError),t.onCaughtError!==void 0&&(C=t.onCaughtError),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=tc(i,1,!1,null,null,f,n,null,L,C,l,sc),i[Z1]=t.current,Yl(i),new Ca(t)},pn.hydrateRoot=function(i,t,f){if(!j(i))throw Error(s(299));var n=!1,L="",C=ge,l=be,a=Se,u=null;return f!=null&&(f.unstable_strictMode===!0&&(n=!0),f.identifierPrefix!==void 0&&(L=f.identifierPrefix),f.onUncaughtError!==void 0&&(C=f.onUncaughtError),f.onCaughtError!==void 0&&(l=f.onCaughtError),f.onRecoverableError!==void 0&&(a=f.onRecoverableError),f.formState!==void 0&&(u=f.formState)),t=tc(i,1,!0,t,f??null,n,L,u,C,l,a,sc),t.context=fc(null),f=t.current,n=Ct(),n=kL(n),L=L1(n),L.callback=null,C1(f,L,n),f=n,t.current.lanes=f,Mf(t,f),At(t),i[Z1]=t.current,Yl(i),new YL(t)},pn.version="19.2.3",pn}var pc;function ld(){if(pc)return ua.exports;pc=1;function p(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(p)}catch(R){console.error(R)}}return p(),ua.exports=Cd(),ua.exports}var ad=ld();const ud=Ec(ad);var bt=(p=>(p.HOME="home",p.RESEARCH="research",p.PUBLICATIONS="publications",p.PROJECTS="projects",p.ABOUT="about",p))(bt||{});const ed=({currentSection:p,setSection:R})=>{const y=[{id:bt.HOME,label:"00",fullLabel:"Home",icon:"home"},{id:bt.PUBLICATIONS,label:"02",fullLabel:"Publications",icon:"description"},{id:bt.ABOUT,label:"04",fullLabel:"About Me",icon:"person"}];return g.jsxs(g.Fragment,{children:[g.jsxs("nav",{className:"lg:hidden fixed top-0 left-0 w-full h-14 bg-white/95 backdrop-blur-md border-b border-black/5 z-[60] flex items-center justify-between px-4",children:[g.jsx("div",{className:"flex flex-col cursor-pointer",onClick:()=>R(bt.HOME),children:g.jsxs("span",{className:"font-black text-xs uppercase leading-none tracking-tighter",children:["HD ",g.jsx("span",{className:"text-red-600",children:"Z"})]})}),g.jsx("div",{className:"flex items-center gap-5",children:y.map(s=>g.jsx("button",{onClick:()=>R(s.id),className:`p-1 transition-all flex items-center justify-center ${p===s.id?"text-red-600 border-b-2 border-red-600":"text-gray-300 hover:text-black"}`,children:g.jsx("span",{className:"material-symbols-outlined text-[20px]",children:s.icon})},s.id))}),g.jsx("div",{className:"w-8"})]}),g.jsx("aside",{className:"hidden lg:flex w-[320px] fixed top-12 left-12 z-50 flex-col pointer-events-none",children:g.jsxs("div",{className:"blueprint-module bg-white/90 backdrop-blur-md p-8 pointer-events-auto shadow-sm",children:[g.jsxs("div",{className:"mb-12 cursor-pointer",onClick:()=>R(bt.HOME),children:[g.jsxs("h1",{className:"font-extrabold text-3xl tracking-tighter leading-[0.9] mb-2 uppercase",children:["Hubert D. ",g.jsx("br",{})," ",g.jsx("span",{className:"text-red-600",children:"Zając"})]}),g.jsx("p",{className:"mono text-xs text-gray-500 uppercase tracking-widest",children:"Postdoc in Human-Centred AI"}),g.jsx("p",{className:"mono text-xs text-gray-500 uppercase tracking-widest",children:"University of Copenhagen"}),g.jsx("p",{className:"mono text-xs text-gray-500 uppercase tracking-widest",children:"Denmark"})]}),g.jsx("nav",{className:"flex flex-col space-y-1 mono text-[11px] uppercase tracking-tighter",children:y.map(s=>g.jsxs("button",{onClick:()=>R(s.id),className:`flex items-center justify-between group p-2.5 transition-all text-left ${p===s.id?"bg-black text-white":"hover:bg-gray-100 text-gray-600"}`,children:[g.jsxs("span",{className:"flex items-center gap-3",children:[g.jsx("span",{className:`material-symbols-outlined text-[16px] ${p===s.id?"text-red-500":"opacity-40"}`,children:s.icon}),g.jsxs("span",{children:[s.label," ",s.fullLabel]})]}),g.jsx("span",{className:`opacity-0 group-hover:opacity-100 transition-opacity ${p===s.id?"opacity-100":""}`,children:"→"})]},s.id))}),g.jsx("div",{className:"mt-8 border-t border-black/5"})]})})]})},zc=["[+]","/ \\","|--|",">>","_.*._","{ : }","<|--|>","0xFD","::::","[SYS]","((.))","[====]","#_#","^v^"],Gd=p=>Array.from({length:p}).map((R,y)=>({id:`ascii-${y}`,text:zc[Math.floor(Math.random()*zc.length)],top:Math.random()*100,left:Math.random()*100,delay:Math.random()*5})),cd=()=>{const p=b1.useMemo(()=>Gd(15),[]);return g.jsx("div",{className:"fixed inset-0 z-0 pointer-events-none",children:p.map(R=>g.jsx("div",{className:"absolute mono text-[10px] text-gray-400 ascii-float",style:{top:`${R.top}%`,left:`${R.left}%`,animationDelay:`${R.delay}s`,opacity:.15},children:R.text},R.id))})},sd=()=>{const p=b1.useRef(null);return b1.useEffect(()=>{const R=document.createElement("style");if(R.textContent=`
            @keyframes float {
                0% {
                    transform: translate(0, 0);
                }
                100% {
                    transform: translate(120vw, -120vh);
                }
            }
        `,document.head.appendChild(R),p.current){const M=Math.random()*10-5,w=Math.random()*10-5;p.current.style.left=`${-20+M}vw`,p.current.style.bottom=`${-20+w}vh`}const y=[],s="#00aaff";return y[0]=`            ..                                                         ,  .                         
                                                 ,.                                                 
                                  .              .                          ,                  ..   
             ..               .                                                                     
                                                                                             .      
                                                    ,.                                              
  .                                           .. ..                                                 
                                                 ..                                                 
   ..                                                            ,                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                         .           ..             
                                                                                     ::.    ..      
                                           . .....,::::,,,,.                  ..                    
                                          .:;ii11111iiitt11i::,,...                  .              
                                   .      :iitttftt1i;ii;;;;;iiii;;;:,.              .         ..   
                                         ,i;i111tfttttti;::::;i;ii;;;;;:,.                  ..      
                                        .:1ii11111ttttiiii;;:;ii1t1i;ii;;;.                 ..      
              ..                       .,:1iii11111;;iii111iii111fL1;;;::;;:.                       
                          .            .:iii;;1t11t111t111iii;iii;1tiii:::;i:.                    , 
               .                     ,itfLft11fffffLLLLLftt11i1iiii11;i;;:;;;;:,.           ..      
                               ...,:iL00CLCGCCCCLCCCCGCLffttLt1111i1i:i;i;;;i;;ii;.           .     
                          ., .:;;i11tLCCG00GLCCCLLCGCffffftfGGCLt111i11ii11iii1fLti..   .     .     
                .           .,,::;iiiiiitL8@0GCffffCGGCCCLfCG00Gft111t1iii1t11tfftti.               
            .   ,            ..,:::;::;;::1LC000GCLffCCGGCCGGCffffftttt1ii111ttttfff;.              
                              ...,,,,:::,;;,,i1G8CfLffffftLGGGGLffttttfff11ttfffffffi.              
             ..      .          ...,,,,,,:,,:;;;f1GL1fftitCGLfLGCffLLffffttf1fLLLttt:.              
                      .   ,      ....,.,,..,;;:1t;tt11i;ifLt111tCGGGCLffffft1tfLLt1:.               
                                    .......,:,itii1ii;;1t1i1ttitLLCCCGCCCLf1111f1;,                 
                                        ...,,iiiiii;;;iiiitLLfCCLLffLCGCCCCLtti;,.                  
      .                                  ..,i11ii;;i;;i1i1ft1fG00GGCLCCCCGGGCf:..                   
                                       .  .1tii;;i1;i1iiif1;:::itL0800G8GLG0Lt..                    
             ..                        , .i1ii;iii1iti:;f1,,::::,:;tG0000@@0f:..                    
                                        :tt;;;i;:11t;:1tf:.,:,,,,:,::;1;iCGf;..                     
                     :.               .;ft;;;i:1ti1;;1ti,.,,,,,,,,,,::::;iti..                      
                      .       .      .:1i::ii;Lfi;i11i:............,,:::;;;;.        .              
                              . . .,:;i;:::;;CCi;;1i;,..      .......,,,::,,.                       
                                .,;i;i;:;;i;CGf1;i;;.                ...,...     .                  
                               ,;iiii::;i1i1L1fi;;:;,                   .                           
                     .     .:;iiii1i::;i;;11;ii;ii;;.                                               
                         .,;i;:,:1i;;i;,:111111;ii;.                                                
                  .    .,:,.    ii:;i,.;tt1;ii,:::,                                                 
                     .::.     ,1;,:;..ifLt;,. ,;;:.          ..                                     
                  .:,:,.     :t;.:;..;ift;,   :::.      .    ..                 .                   
.            ..,:;;:,.      .1: :i,.;,ifi;.   :;:       ,.                                          
           .,:;ii;. .,      :,.:;i,::;i1i;.   :i,               .                               . ,.
          :1ii:,.       .  :,,;;i:,;;iii;,    .;,                                               ,   
         .11:. .    .   ,,;: ,;1;,,;;;:.       ..         .               ,                         
         .,.            ,;i,.:1::,:;;,                   .,                                         
                     .,:ii:,,1;:,:;;:                                                      ..       
                   ,:;ii;,..,:;,:;;;.           ..                                                  
                  .;;11;:.  .;,:iii,            .,                         ..                       
 .                 .i1;;,  ,i,if1;:,          . .                                                   
                    ii:.  :i,;Ct:            ,,,.                                                   
                  .;1,  .,;,:t;              ,::                 ..     ..                          
                  ,,   .:i. ,.              .:,.                                                ..  
                        ,,                  ,;.                                                     
                              .             ,,.                                                     
                     .                   .  ..                        .                             
                     .     .                                                         ..   .         
                                          ..    ,         .                                         
                     .                          .         .                     .                   
                     .                                         ,                ,,                  
                                                                                 ..                 
                                                                    .                               
                                                                            .                       
`,y[1]=`            ..                                                         ,. .                         
                                                 ,.                                                 
                                  .              .                          ,                  ..   
             ..               .                                                                     
                                                                                             .      
                                                    ,.                                              
  .                                           .. ..                                                 
                                                 ..                                                 
   ..                                                            ,                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                         .           ..             
                                                                                     ,:.    ..      
                                              ....,::::,,.,.                  ..                    
                                          .:;iii1111iiitt11i::,,..                   .              
                                   .      :iittttt1ii;ii;;;;iiiii;;;:,.              .         ..   
                                         ,i;ii111ftt1tti;::::i;;ii;;;;;:,                   ..      
                                       ..:iiii111tt1ttiiii;;:;ii11i;:ii;;;.                 ..      
              .                        .,:1iii1111i;;;ii111iii111fLi;;;::;;,                        
                                       .:ii;;i111111111111i1i;iii;1tii;:::;i:.                    , 
               .                     ,itfLf1i1fftffLLLLfft11i;iiii;1i;i;;:;;;;:,.           ..      
                                 .,:iC00CLGCCCGCLCLCCGCLffttft111i;1i:i;i;;;i;;ii;.           .     
                          ., .,:;;i1tLCCG0GCLCCCLCGGLffffttLGCLf1111;11ii11iii1fLt;..         .     
                .           .,::;;iii1iitC8@0GLfffLCGCCCCffC080Cft111tiiii1t11tfftti.               
            .   ,           ...,:::;;;;i;:1LG00GCCLfLCGGGCCGGCfLffftttt1ii111ttftfff;.              
                              .,,,,::::,,;;::it00LffffCCffCGGGGLffttttfff1tttfffffffi.              
             ..      .        . ...,,,,,,:,,;;i;t1CtfLL11fCCffLGCffLfffffttf1fLLfttt;.              
                      .  .,      ....,,,,,.::;:11;it11;;tLfi1ttLCGGCCLffffft1tfLf11;.               
                                   .......,,::it;;iii;1ft1ittttfLLCCGGCLLLt111tft;,                 
                                       ....,:iiiii;;;iii1ifLtfCCLLffLGCCCCCLt1i;,.                  
      .                                  ..,i1iii:;;;i11;tLt1LG00GGCCCCCCGGGCf:..                   
                                          .itiii;ii;11111L1;:::itC080008GLGGLt..                    
             ..                        , .;1ii;i1t1tt1:;Lt,,,:::,:;tG0800@@Gf:..                    
                                        ,1ti;;1;;tf1i;1CC:,,:,,,,:,::;1;iCGf;..                     
                     :.               .:ffi:;i;;;11i1tCt,.,,,,,,,,,,:;::;it;.                       
                      .       .      .,tt;:;1i1t1i111t;............,,,,:;ii:.        .              
                              . .  ,:;ii;;;;1Ltiiii;;,..   .  .......,,,::,,                        
                                .:;i;;;;;;;;0fti;i;:,               ....,...     .                  
                               ,;1ii;;:;iiiGGtf;;;;:;                   .                           
                     .     .,:i11iii::;;:ifLi1ii;i;;.                                               
                          .;1i:,:1i;;;,.i11i11i:ii;,                                                
                  .    .,::,.  .i;:;;.,1fti;1;,:;;,                                                 
                      ,:,.    :1;,::.,1ff1:,. :;;:.          .                                      
                  .,,::,    .i1:.::.:;1fi::  .:::.           ..                 .                   
.             ..,:::,..     :i. :;,:::t1;;,  .;;,       ,.                                          
           .,:;;ii,..,     ,:..,;;:;,;iiii,   ;i.                                               . ,.
          :iii:,,.      . ,;..:;;i:,;i1ti:    ,:                                                ,   
         .11:. .    .   ,,i, .;i1:,;;;;,.      .          .               ,                         
         .,.           .,i;,..;1:.:;;,                   .,                                         
                     .,:ii:,.:t:.,;;:           .                                          ..       
                   .::;1i,...i;.:;;;.           ,.                                                  
                   ,,iti:.  ,;.;iii,         ...:.                         ..                       
 .                  ,ti;:..:;,1t1;:,         .,,,       .                                           
                    .1;:  :;,tC1,           .,:,                                                    
                   .ii. .,:,1t,             .::,                 ..     ..                          
                   ,,  .,;,.,               ,:,                                                 ..  
                        .:.                 ;,.                                                     
                              .            .,.                                                      
                     .                   .                            .                             
   .                 .     .                                                         ..   .         
                                          ..    ,         .                                         
                     .                          .         .                                         
                     .                                         .                ..                  
                                                                                 ..                 
                                                                    .                               
       .                                                                    .                       
`,y[2]=`            ..                                                         ,. .                         
                                                 ,.                                                 
                                  .              .                          ,                  ..   
             .                .                                                                     
                                                                                                    
                                                    ..                                              
  .                                           .. ..                                                 
                                                 ..                                                 
   ..                                                            ,                                  
                                                                 .                        .         
                                                               ..                                   
                                                                                                    
                                                                         .           ..             
                                                                                     ,:.    ..      
                                           . .....,:::,,....                  ..                    
                                          .:;;;iii11iiit111;:,,...                   .              
                                  ..      :i1t1111ii;;ii;;;;iiiii;;:,,.              .         ..   
                                         :i;ii11tt111fti::::;i;i1i;;;;;:,                   ..      
                                       .,;i;i11111t1ttiii;:;:;;i11i::i;;;:.                 ..      
              .                        .,;1iii1111i;;;;111iiii1i1LLi;;;::;;,                        
                                       .:ii;;i11111i111111i11;iii;1tii;:::ii:.                    , 
               .                    .,;tLftii1fttffLLLLff111i;iiiii1i;i;::;;;;,,.           ..      
                                  .:1C00LCGCLLCLLLLCCGCLffttft111i;1i:;;i:;;i;;ii:.           .     
                          ..  .,:;i1tLCCG0GCLCCLLCGCfffftttLCLft111i;1iii11iii1fft;.    .     .     
                .           .,:;;;iiii11fG@80CLfffCGGCLCLtfG080Ct1111tiiiitt11tfftti.               
            .   ,           ..,,:;;;;;;i;;tCG00GCCLfCCGGGCGGGCLLfffttt11ii111ttttfff;.              
                             ..,,,:::::::;;::it0GLfffCCLfCCGGGCfffttttfft1tttfffffffi.              
             ..      .        ....,,:,,,::,,:;iitfttffttffCLtfCGLtffffffftff1fLLfttt;.              
                     ..  .,      ....,,,,,,,:i;t1;11ii;1fLti1ttLGGGCLffftfftttfLf11;.               
                                   .......,,:;i1::ii1tftti1fft1fLCCCGCCLLLt111tft;,                 
                                        ....:ii;;i;i11ii1;LLtfCCLLffLGCCCCCft1i;,.                  
      .                                  ...i1ii;;iii11iiLL11LG00GGCCCCCCGGGCf:..                   
                                          .it1ii;ii11111fC1;:::itC080G00GCGGLt..                    
             ..                        , .;t1i;itttt1i;10t,,,:::,:;tG0000@@Gf:..                    
                                        .iti;;111tttftt0L,,,,,,,,:,::i1;iCGfi..                     
                     :.               .,tfi:;ii;itttLLG1,.,,,,,,,,,::;::;it;.                       
                      .       .       .1Li;;1i1ft1t1tt:....,,.....,,,,,;;i;,         .              
                              . .  .:;ifi;;itftf11ii;...  ...........,,:::,.                        
                                .,;iiifi;;;LLft;;i;:;..            ....,,..      .                  
                               ,;11i;ii;i1C8fLi;;;;:;.                 ..                           
                     .     .,:i11iii:;i;1CGt11;i:i;;,                                               
 .                        .:ii;,;1i;;;,;t11111i:ii;,                                                
                  .     .,:,,  ,i;;;:,;fff1i1;,:i;,                                                 
                      .,:,   .i1:,:,,;tff;:,. ;;;,.          .                                      
                  .,.,:,.   ,ti,,;,,;;ft:::  ,;:,            ..                 .                   
.              .,,:::,.    .i;  :;:;,if::i:  :;;.       ,.                                          
           .,:;;ii:,,,     ::. ,;i;:,i;:ti;  ,i,.                                               . ,.
          :iii;:,.      . :,..,;i;,,;i1ffi.   :.                                                ,.  
         .11:...    .   ,:i. .,i;,.:i;i:.                 .               ,                         
         .,.            ,1;,. ,:..:;;,                   .,                                         
                     ..:i1,,. ;, :;;:          ..    .                                     ..       
                    .:;1i:.  ::.:i;;.          ,:.                                                  
                   ..,t1:,  ,:.;ii;,        .;:::.                         ..                       
 .                   :1;i, ::,1ti;:.        ,;::,.      .                                           
                     :ii, ,:;CLi.           ,:;,                                                    
                    .1i. .:ifi.             ::,.                 ..                                 
                   .:,  .:i:.              ,;,.                                                 ..  
                   .    ..:                ,,,                                                      
                          .   .            ,.                                                       
                     .                   .                            .                             
   .                 .     .                                                         ..   .         
                                          ..    ,                                                   
                     .                          .         .                                         
                     .                                         .                ..                  
                                                                                 ..                 
                                                                    .                               
       .                                                                    .                       
`,y[3]=`            .                                                          ,. .                         
                                                 ,.                                                 
                                  .              .                          ,                  ..   
             .                .                                                                     
                                                                                                    
                                                    ..                                              
  .                                           .. ..                                                 
                                                 ..                                                 
   .. .                                                          ,                                  
                                                                 .                        .         
                                                               ..                                   
                                                                                                    
                                                                         .           ..             
                                                                                     ,:.    ..      
                                            . ....,::,,.. ..                  ..                    
                                          .:;;;;;i11iiit1i1;,,....                   .              
                                  ..     .;ii1iiii;;;;1tiiiiii;;;;::,.               .         ..   
                                        .;iiii11i11i1Lti;;;;iii11;iii;;:.                   ..      
      .                                .,ii;iiiii1tittiii;;;;;i11;::;ii;;:.                  .      
              .                        .,i1ii11111;;;;ii11;;iii1tLf;;;;:;i;,                        
                                       .;ii;i11111iiii111tiiiiiiiift1i::::;;,.                    , 
                                    .:itf1ii11tttffLLLftt111;iiii;;1i;:::;:;;;,..           ..      
                                  ,:tC0CCCCLLLLfffLLCGCLfttftt1iii;1;:iii;;;i;;i;:.           .     
                          ..   .,:;1tCCCG0GCCCCCCCLftffftffLftt11iiii1iii11ii11ff1;..         .     
                .            .,:;;;iiii1L080GCfffCGGLfLCLfG000Gft1t11tiiiitt11tfftti,               
            .   .           .,:::;;;;;;i:ifC000GCLfLGGGGG0GGGCCLffttt11iii111tttttfti.              
                           ...,,:::::;:::;::;1L0CfifCt1LCCCCGCLfffttttff11ttttffffft1,              
             .       .        ....,,,,,,::::;;1tti1ftitLfffLfCGCftffftffftff1LLLfttti.              
                     ..  .,      ....,,,,,,,:;1t;i1i1ifffLL11tLGGCCLLftttfft1tLLf11i,               
                                   ....,.,,,,;ti,;ifLffL1titffftLCGGGCLLLLt1t1tfti:.                
                                       .....:11;:itL1ffii;tGtttLLLLLCGCCCLLft1ii:.                  
      .                                  ..,i1i:;i1it1i1itLt11C00GGCCCCCGGGGCf;,.                   
                                          .it1;:11111tL1tLti::;ifC0800G0GCGGLf,.                    
             ..                        .  ;111;ittt1:LffGL:,,,,:,:;tG0000@@0L;..                    
                                         :11i;;1tft1tLC0f,,,,,,,,:,:;i1;iCGL1,.                     
                     :.               ..:fftii1tt;ffC0Ci..,,,,,,,,,::;::;11;.                       
                                      .,LC1;i1fft1tff1,.....,.....,,,,,;ii:.         .              
                              . .  .,:ifLtiftff11tiit...............,,:::,.                         
                                 ,;;itL1iiLLffi;ii1if;..       .   ....,,.                          
                               .:iii1fiit0GfC1;i;:;:1:.                ..                           
                     .      .,;1t1ii111L0Ltf1iti:i;i:                                               
 .                         ,iii:i1i;i;1Ltt1i1ti:1i:.                                                
                  .      ,::,..;1;;;:;fff1;;i,,;i;.                                                 
                       .::.  ,11;:::;1ft::,. ,;;:..          .                                      
                   ...,:,   ;1;,,::::tt:.:;..;;,.            ..                 .                   
.               ..,,,,,.   ,i,..:;:,;t;,:ii,,i:,.       ,.                                          
           .,,::;i;::,    .:,. .:;:,ii,.;ii,.;,..                                               . ..
          ,iii;::,.     . ,,. .,:ii:i::1Lt:  ..                                                 ,.  
         .ii;,..    .   ,,,.  ,,;tii;;ii:.                .               ,                         
         .,.            ,::,. .,i1i;,:,                  .,                                         
                      .::;:,...:1ii:::.       ..                                           ..       
                     ,::,i:... ;i;;.,.      ..;:,                                                   
                   .  .,:i;...:iii:.       .::;,,.                         ..                       
 .                    .;;;,.,iti;,,.       ,;;:,,                                                   
                      ,;;;,iCC1,           ,::,.                                                    
                     .,ti,;1i,            .:.,,                  ..                                 
                    ..:: ,,:,             ::,,.                                                 ..  
                      .  . :.             .,,                                                       
                                           .                                                        
                     .                   .                            .                             
   .                 .     .                                                         ..             
                                          ..    .                                                   
                     .                          .         .                                         
                     .                                         .                ..                  
                                                                                 ..                 
                                                                    .                               
       .    .                                                               .                       
`,y[4]=`            .                                                          ,. .                         
                                                 ,.                                                 
                                  .                                         ,                  ..   
             .                .                                                                     
                                                                                                    
                                                    ..                                              
  .                                           .  ..                                                 
                                                 .                                                  
   .. .                                                          ,                                  
                                                                 .                        .         
                                                               ..                                   
                                                                                                    
                                                                         .           ..             
                                                                                     ,:.    ..      
                                            ......,,:,,.                      ..                    
                                          .:;;;;;i111ii1iii:,...                     .              
                                  ..     .;iii;;ii;;;;1ti11iii;;;:::,.               .         ..   
                                        ,;iiiiiiiiiitCti;;;;iii11i11i;;,.                   ..      
      .                                .:iiiiii;1t1ittii1iiiii1t1;::i1ii;:.                  .      
              .                        .:iiii1i111;;;;i11iiiii11tft;;;;:;i;,                        
                                       .;iiii11111iiii1111i1iiiii1ft1i;:;:;i,.                    ..
                                    .:ittiii11tttffLLLftt1t1;ii;i;i1i;:::;;;;;,..            .      
                                  ,;tCGCCCLLffLfffLLCGCft1ttt1iii;;1;;ii;;;ii;;ii:.           ..    
                          ..    .:;itCCCG0GCCCCCCCLftfffttfLft11iiiii1iii11ii11ffti,.   .     ..    
                .             .,;;;;;i1tL880GLffLGGCffLCLLG000Cft111t1iiiit1i1tfftt1,.              
            .   .            ,:;;;;;;;;i:iLG00GCLLfGGGGGGGGGGGCLffftt11iii1111ttttfti,              
                            .,,,:::::;:::;::;1C0L11Ct1fCCCCGCCLffftfttff11tttttttfftt:              
             .       .       ....,,,,::,::::;i1ti;tfiiLLffLLLCGLftffffffftfftLLLfftt1,              
                     ..  .,      ....,,,,:,,;;t1:ii1iffffLCf1tCGGCLLLttttfftttLLf11i:.              
                                   ....,,,,,,it;:iiLCffLtL1ifLLtLGGGCLLLLLt1t1tfti;.                
                                       ....,;t1:;iff1ttii;iCLftfLLLLCGCCCLLtt1ii:,                  
      .                                  ..:iti:;111ft11i1LLt1L00GGCCCCCCGGGCf;,.                   
                                          .1tti:1i1t1;fftCf1;;;ifC0800G00CGGLL,..                   
             ..                        .  :11t;itttt:;LLGCi,,,,,::;tC00GG@@0L1..                    
                                         ,1t1;;1tfti1fG0L:,,,,,,,:::;ii;iLGLt:.                     
                     :.               ..,fLL1;tf1:tCG0L;..,,,,,,,,,:::::i11;,              .        
                                      .,fCL1;tLfi1tLfi,.,..,......,,,,:;1;,.         .              
                              . .  .,:ifLtft1Lfi1t111:..............,,:;:.                          
                                 .:;iff1i1Lffti;i;ttf1..       .   ....,.                           
                               .:;iitt;iL0LLLii1::;:1:..               .                            
                     .      .,:11iii1it0Gfttiifi:i;;,                                               
                           .:1ii11iiiifft1i;1ti:1i:.                                                
                  .      .,::,,i1;;i;1ffti;::,,;i:.                                                 
                        ,:,..:11;,:;;tfi,,,, ,;;,..          .                                      
                   . ..:,. .;i:..:;:;fi,.:;:,i;,             ..                 .                   
                 ..,,::,   :;,..,;:,i1:,,;i:;1,..       ,.                                          
            .,::;;;;;,    .:,.  ::::1:,.:1i:,: ..                                               . ..
          ,i1i;;;:,.   .. ..   .:i;1;,:;ff;.                                                    ,.  
          :i;,..    .   ,...   .:t1i,:;i;,.                               ,                         
           .             ...   .:ii:,,:,                 .,                                         
                        ..,,.. .ii;,.;,       .                                            ..       
                       ..,:,...;ii, .,      .,.                                                     
                   .   .,;:,..;1i:         ,:,.                            ..                       
 .                     .::;.:t1;,         .;;:,.                            .                       
                        :i;iCf;           .::,.                                                     
                       .ii;i;,            ::,.                    .                                 
                      .., .,i,           ,;,,                                                   ..  
                          .,,            .                                                          
                                                                                                    
                     .        .          .                            .                             
   .                ..     .                                          .              ..             
                                          ..    .                                                   
                     .                          .         .                                         
                     .                                         .                ..                  
                                                                                 ..                 
                                                                    .                               
       .    .                                                                                       
`,y[5]=`            .                                                          ,. .                         
                                                 ,.                                                 
                                  .                                         ,                  ..   
             .                .                                                                     
                                                                                                    
                                                    ..                                              
  .                                           .  ..                                                 
                                                 .                                                  
   .  .                                                          ,                                  
                                                                 .                        .         
                                                               ..                                   
                                                                                                    
                                                                         .           ..             
                                                                                     ,:.    ..      
                                           ........,:,,.                      ..                    
                                          .:;i;;;i111ii1i;;:,....                    .              
                                  ..    .,;;ii;;i;;;;itt111iii;;;::,,.               .         ..   
                                       .:ii;iiii1ii1tLtii;;iiii11i11i;:,.                   ..      
      .                                ,:iiiii;ii1i1t1ii1111ii1t1iii111i;,.                  .      
              .                        .;1ii11111i;;;;i11iii111ttf1;i;;;ii:.                        
                                       ,iiii11111iiiii1111i11iiiitLt1i;;;:;i,.                    ..
                                   .,:1t1i111tttfffLLLft11t1iiiii;i1i;:::;;;;;,,.            .      
                                 .,;fCGCCLLfffffffLLCGLft1t111iii;;1;;i;i;;ii;iii;.           ..    
                          ..    .,;ifCCG00CCCCCGCLfttfffttfft111iiiii1;ii111111ffti,.   .     ..    
                .              ,:;;;;i1tC880CLLLGGCLffLCLCG0GGLt1111t1iiiit1i1ttftt1,.              
            .   .            .,::;;:;;;;;1C000GCCLCGGGGGCGG0G0CLfftt111iii1111ttttft1,              
                            .,::::::::;::;:;itC0fiLL1tLCCCCGCCLffftfttff1itttttttfftt;.             
             .       .      ....,,,,,:::::;:;i1t;ifi;1CfttLLCGGLftffftffftfftLLLfftt1:              
                     .   .,     .....,,,,:::;;1i:iti1LfttLCLttCGCCLffttttfftttLLf111:.              
                                    ...,,,,,:1t:;11LLttffCfi1fLLLGGGCLLLLLt1tt1ft1i,                
                                       ....,;f1:i1Lt11t1i;;fCLffLLLCCGCCLLLttti1;,                  
      .          .                       ..:1ti:if11f1iiiifLttfC0GGCCCCCCGGGCfi,.                   
                 .                        .1tf;:111Cf;1ffCL1i;;ifC0800G00CGGCC;..                   
             .                         ,. :11t:iftfti,tCGCt:,,:,::;tC0GGG8@8Lf..                    
                                        .:tf1::tLttt1fG0L;,,,,,,,:::;ii;;LGLf;..                    
                    .:                ..,LCf1;L01:1GGGf;,.,,,,,,,,,:::::i1i;,.             .        
                      .      .        .:LGCLtL8f;1LLfi.....,,...,,,,,,:ii;,.         .              
                              . .  .,;1fLfLtt0f;ttif1i.,............,,:;,.                          
                                 .:;1Lfi1fttLtiii:tttf..       .   ...,,.                           
                                ,;iif1;t0GfCt;1t::;:1:..               .                            
                             .:i11i111L0Ltt1i1fi;i;;,                                               
                            :11it1111tft1i;i11::ti:                                                 
                  .      .,:;,,tt;;ii1fti;;:,.:ii:.                                                 
                        ,:,..:11:,;;;ft,,,,,.:i:. .          .                                      
                   .  .::. .;i:..;;:1t:.,:;;;1;.             ..                 .                   
                 ..,,::,   ,;,..:;,:1;,.,;iiii,..       ,.                                          
            .,,::;;;;:.   .,,. .::,i;....i1;,, ..               .                                 ..
          .i1i;;;::..  .. ...  ,,;1i,.,;tLi.                                                    ,.  
          ,;:,..    .   ,. .   .,i1:..:ii,.                               ,                         
                          ...  .;1;, .;,                 .,                                         
                         ..,,. :1i,. ,;      .       .                                      .       
                        ..:,,.:ii;   .     ...                                                      
                        ,:::.:11i.        .::,.                            .,                       
 .                      ,:::iti;.         ,;:,.                             .                       
                         :1fL1:.          ::,                                                       
                        .i1:,;,          .;:,                    ..                                 
                        ..  ,1.          ,,..                                                   ..  
                           .,.                                                                      
     .                                                                                              
                     .        .          .                            .                             
   .                ..     .                                          .              ..             
                                          ..    .                                                   
                     .                          .         .                                         
                     .                                         .                ..                  
                                                                                 ..                 
                                                                    .                               
       .    .                                                                                       
`,y[6]=`            .                                                          ,. .                         
                                                 ,.                                                 
                                  .                                         .                  ..   
             .                .                                                                     
                                                                                                    
                                                    ..                                              
  .                                           .  ..                                                 
                                                 .                                                  
   .  .                                                          ,                                  
                                                                 .                        .         
                                                               ..                                   
                                                                                                    
                                                                         .           ..             
                                                                                     .:.    .,      
                                           ........,,,..                      ..                    
                                          .;i;;;ii111iii;;:,...                      .              
                                  ..    .:i;ii;ii;;;;itt111iii;;;::,,.               .         ..   
                                       .:i;;i;;i1ii1tLtii;iiiii1ii11;;:,.                   ..      
      .                                ,;i;iiiii11i1t1ii1i1i;i1tiiii11ii;,                   .      
              .                        ,iiii1ii11i;;;;i11iii11i1tt1111iiii:.                        
                                      .:iiii1i111iiiii11111ttiii1tLfti;i;;ii,.                    ..
                                   .,;1tii1111ttfffLLLt11111iii;i;i1i;:::;ii;;,..            .      
                                 .,iLGGCLffffffffffLGGLt11tit1iii;i1;i;;i;;1i;iii;.           ..    
                          ..    .,;ifLCG0GCCCCCCLfftfffftttft11iiiiiii;ii1tt111fft1:.   .     ..    
                .              .::;;;i1fG880LLLCGGCfffLCLGGGCCft1111t1iiiit1i1ttftt1:.              
            .   .             ,:::::;;;;;tC00GCCCLGGCGGCCCG000CLffttt1iiii11111tttftt:.             
                            .,::::::::;:;;;;ifGGt1Cf1fCGCCCGGCLfLftftttt1ittttttttftti.             
             .              ..,,,,,,,:::::;:i;1i;1tiitLftfCLGGCLttffftffftff1fLfffttt;.             
                     .   .,     .....,,,,:::;;1;;tiifL11tLCLftCGCCffftfttfftttLLf111;.              
                                   ....,,:,,:11:i11Lf1tffGLti1LCLGGGCLLLLLt1tt1ft1i:.               
                                      ...,.,it1:itLttttt1i;iLLftfLLCCGCCLLLttti1i:.                 
      .                                  ..;1ti,1LfLt11iiitLLttfGGGCCCCCCGGCCL1:,                   
                 .                        ,1ff;:fLGfLi:tfCCt1;;;fCG800008GGGCCi..                   
             .                         ...;1tt:1C8Cf1::L0Gf;:,:,::;tC0GGC8@8LL:..                   
                                       ..;LL1,;L8LiftfL0Ci,,,,,,:,::;;i;;fGLf1..                    
                    .:                ..;CCti100i;1CGGt;,.,,,,,,,,,;::::i11i:.                      
                             .       ..iGGLft001ifCfLt,.....,...,,,,,::ii;,.         .              
                              . .  .,;tfffttC8iitt;ft1:.............,,:;,                           
                                  ,;fL11LttfLfi1i,1ttL,..      .  ....,,                            
                                .;i1fiiC8LCfiitf,;;;1:..               .                            
                             .,;11i1itC0ftti1tt:;i;;.                                               
                            ,ii1t11t1tt1iiii1i,;ti,                                                 
                  .      .,:;::tt;;iitti:;;,,.:i;,.                                                 
                        ,:,..:1i::;;1f;..,,,,;i:. .          .                                      
                  .. ..::. .;i:.:;:;t;...,:;i1;.             ..                 .                   
                  .,,::,. .,;,.,;:,1;,..,:1ii:...       ,.                                          
            .,,,:;;;;,.    ,,..,:,;i,. ..i1i,. ..                                                 ..
           ;1i;;;;:,.  ..  .. ...:1;,..:1Lt,                                                    ,.  
          .;:,,.    .   ,. .    :i;:,.,i1:.                               ,                         
                           ..  :1;::..;;.                .,            .                            
                          .,,.,1i;i. .;,    ..       .                                      .       
                         .,,,,i1;i;       .,,.                                                      
                         :::,i1i,,        ,;:,                             .,                       
 .                       ,:;f1;:.         ::, .                             .                       
                         .1Lt;:,          ;:.                                                       
                        .:1:.,1,         ,::.                     .          .                      
.                         .  :;         .,..                                                    ..  
                            ..                                                                      
     .                                                                                              
                              .          .                            .                             
   .                ..     .                                          .              ..             
                                          .     .                                                   
                     .                          .         .                                         
                    ..                                         .                ..                  
                                                                                 ..                 
                                                                    .                               
       .    .                                                                                       
`,y[7]=`            .                                                          ,.                           
                                                 ,                                                  
                                 ..                                         .                  ..   
             .                .                                                                     
                                                                                                    
                                                    ..                                              
  .                                           .  ..                                                 
                                                 .                                                  
   .  .                                                          ,                                  
                                                                 .                        .         
                                                               ..                                   
                                                                                                    
                                                                         .           ..             
                                                                                     .:     .,      
                                           .........,,.                       ..                    
                                          ,;i;;;i1111iii;:,...                       .              
                                  ..    .;i;;;;ii;i;i1tt111iii;;::,,.                .         ..   
                                       .;i;i;;;iiii1tLtii;i1iii1ii1i;;:.                    ..      
      .                                ,i;iiiii111;1t1;i1i1i;i1tii;i111i;,                   .      
              .                        ,iii1111t1i;;iii111ii1111t1ii11iiii:.                        
                                      .;iii11i11iiiii1tt111t1iii1fLftii1ii1i,.                    ..
                                   ,:i11ii1111ttffffLLt11111iii;i;it1;:iii11i;:,.            .      
                                 .:1LGGCLffttffffffLGGft11tit1iii;i1;;;;iiittiiii;,.          ..    
                          ..    .:;1LCG00CCCCCCCftttffffftfft11ii;ii1i;ii1tf111fft1:.         ..    
                .              .,:;;;itL088CLLCGGCLfffLCLCCCCLtt11i1t1iiiit1i1ttfttt;.              
            .   .             .,::::;;i;ifG0GGCCLCGGCGCCCC0000Cffftt11iiii11111tttttt;.             
                             .,,,:::::;:;:;;1fGC1fCtfLCCCCCGGCLfLffftttt1ittttttttftt1,             
             .              ..,,,,,,,::::;;:i;1iit1iifLftfCCGGCfttffftffttfftfLfffttti.             
                     .   .,    ......,,,,;::;i1;11;1tf1t1LCLCLCGCLffftttffftttLLf111i,              
                                   ....,,:,,;t1;1itLftttf0Gf1ifCCGGCCLfLLftttt1ff11;.               
                                      ..,,.:1ti;itLLCftt1ii;tLLf1tLCCGCCLLLttti1i:.                 
      .          .                      ...itti:1CGC111ii;1fft11fCGCCCCCCGGCCLt:,.                  
                 .                        :tLf;;CG01Lt:ifCCfti;;1LG000008GGGCCt,..                  
             .                         ...ifL1,f00CLti,t0Gfi:,:,::;1LGGGC0@@CCi..                   
                                      ...1CCi.10Gfi1LffCC1:,,:,,::::;;i;;tGCLt,.                    
                    .:               ...fGfi:t@GiifGGLf;,..,,,,,,,:;:::;i11i;..                     
                             .       .,tCCLtL@Li1LCtfti.....,.,.,,,,,::ii:,.         .              
                              . .  .,it1tttf8C;1t1;itti.,...........,,;:.                           
                                  ,iLf1ttttLC11ti,i1tC:..      .  ...,,.                            
                                .;i1tif8ffLiiitt,;;;1:..              ..                            
                             .,:111ti1Ltitii111:iii:.                                               
                            .iitf11ii11ii;iii;,iti,                                                 
                         .,:::;ft;;;iti:,::,..;i:..                                                 
                       .,:,..:1;,::ifi, ...,,ii:  .          .                                      
                  .. .,::. .;;..;::1i:. .,:;1i:.             ..                 .                   
                 ..,:::,   ,:. ::,ii,,  .:1ii,..        ,.                                          
            .,,,;;;;;,     ....:,:i:,   .:ti,  ..                                                 ..
           ;1i;;;;:,.  ..  .. . .;;,:. .;ff:                                                    .. .
           ,,,..        ,  ..  .;i:;:  :i;..                              ,                         
                           .,..ii::;. ,i,                .,           ..                            
                           ,,,i1;,1:  ,,   ..        .                                      .       
                         ..:,i1i::1.      ,::.                                                      
                         .::;1i;...       :;:.                             .,                       
 .                        ,1ti;:,         ::.           .                   .                       
                         ,1Li,;;.        .i:                                                        
                        .::;. ii         ,:,                      .          .                      
                           . .;.         ..                                                     ..  
                                                                                                    
     .                                                                                              
                              .          .                            .                             
   .                ..     .                     .                    .              ..             
                                          .     .                                                   
                                                ,         .                                         
                    ..                                         .                ..                  
                                                                                 ,.                 
                                                                    .                               
       .    .                                                                                       
`,y[8]=`                                                                       ,.                           
                                                 ,                                                  
                              .  ..                                         .                   .   
             .                .                                                                     
                                                                                                    
                                                    ..                          .                   
  .                                           .  .                                                  
                                               .                                                    
   .  .                                       .                  ,                                  
                                                                                          .         
                                                               ..                                   
                                                                                                    
                                                                         .            .             
                                                                                     .:     .,      
                                           ............                       ..                    
                                         .:ii;iii111ii;;:,..                         .              
                                  ..   .:;;iiiiiiiiii1ftt1iii;::,,,,.                           .   
                                       :i;;;;iiii111ff1iii11iii1i1ii;;,.                     .      
      .                               .;;;iii;1ti;i11ii1iiiiii1i;;i1i11i;,                   .      
              .                       .iii1i11tti;;iii1111ii11111ii111111i:.                        
                                     .:iii1iii1iii;ii1t1t1ttiiiitLLft1ttiiti,                     ..
              .                  .,:;iiii1111tftftfLLf1ttt11iii;;itt11t1i1tt1;:,.            .      
                                .:1LCGCfffttffffffLCGLt1iti1tiiii;iii;i1i1ittiii1;,.          ..    
                          ..   .,;itLG0GCCLCCLLftttffffttttf11ii;;iit;ii111ft11fft1;.         ..    
                .              .,:;;i1LG88CLCCGCLLLftfCCCLLLft11iii11iiiiit111tttttt;.              
            .   .             .,:::;:;iifCGGGCGCCGGCCCCCG0008GLffft11ii;ii1ii11tttttt;.             
                              .,,,:::;:;:;i1fLLitGffLGGGCCC0GGCLLffttttti1tt111tttfftt:             
             .               ..,,,,,,::::;;;iii11tii1LftfLCGGCLfffffffffttfttffffffttt,             
                     .   .,   ......,,,:;;,:11iii;1111fLtfLLGGGCLLffttttfffttfLLf1111:.             
                                  ....,::,.;tt1:;1ttLCfft00CLttLGGGCLffLLftttttfttti,               
                                     .....,itf;,itfGGf1tttt111ftt1fCCCCCLLLttt111;,.                
      .          .                      ..;tff:,fLGfiit1;;;ttttt11fCCCCCCGGCLff;,.                  
                 .                      .,1ff1,fCCCitfi:iLCft1iii1G0000080GGGCf:..                  
             .                         ,.iLLt,100CLLff1iG0f1;::::;;1LGCCC0@@CLt..                   
                                     ..,tGL1.i0GCffttLfLCt:,,,:,,::;;;;;;1CGLf;..                   
                    .:              ..:LCi::t@8ftfLGCtt1:...,,,,,:;::::;i1iii,.                     
                     .       .      .;tttffC@Li1fLffiiii.....,,.,:,,,:;ii:,.         .              
                              . .  :11i1ttf8f:1ttii;tff:.........,.,,:::.                           
                                 .;Lt1CLf1fLiiff;:;itLi..      .  ...,,.                            
                                ,1t1iC0tiii;i1ti:iiii,..                                            
                              .it1t1i1iii;:i1ii:11i,                                                
                           .,;1ffti;ii;;:,;i:;;i1:.                                                 
                        .,::::i1i;;11:...,:,,:i;, .                                                 
                      .,::...;;:;:;1;,   .,,;1i,  .          .                                      
                  ...,::,  .;:.;:;;::,  .,,:i:,              ..                 .                   
                ..,,::,.   ., ,:;i,:,   .,1ii, .        ,.                                          
            .,,,;;;;;.      . .,i:,,,.. .:11:. ..               .                                 ..
           ,ii::;:,..  .    . .:i:,,:,  .;Li.                                                   .. .
           ,,...        ,  ...,;::::;, ,;;:.                              .                         
                           .,:;;,,,;: .;;  ..            .,           ..                            
                           .;1i,,.;1. ..  ,,,.       .                       .              .       
                          .:t1:,,.::      :::.                                                      
                          ,1i;:,,.        ::.                              .,                       
..                       .tt:::::.       .1,                                .                       
                        .ii;;:.1i        ,;.                                                        
                        ...::..i:        .,.                      .          .                      
                           .  ..                                                                 .  
                                                                                                    
     .                                                                                              
                              .          .                            .                             
   .                ..     .                                          .               .             
                                          .     .                                                   
                                                ,         .                                         
                    ..                                         .                ..                  
                                                                                 ..                 
                                                                    .                               
       .    .                                                                                       
`,y[9]=`                                                                       ,.                           
                                                 ,                                                  
                                 ..                                         .                   .   
             .                .                                                                     
                                                                                                    
                                                    .                           .                   
  .                                           .  .                                                  
                                               .                                                    
   .  .                                       .                  ,                                  
                                                                                          .         
                                                               .                                    
                                                                                                    
                                                                         .            .             
                                                                                     .:      ,      
                                           ...........                        ..                    
                                         .:ii;ii1111i;;;:,.                          .              
                                  ,.   .:iiii1iiiiii1tftt1iii::,....                            .   
                                      .;i;;;;i111111ff1i;i1i1ii1i1i;;:,.                     .      
      .                               ,i;iii;it1iiit1ii1iii;;i1;;ii1i11i;.                   .      
              .                       ,ii11111t1;;;iii111iii1111iiii11t11i,.                        
                                     .;ii11ii11i1;;iitt1t1ttiii1tLLft1ttiiti.                     ..
                                 .:;i1ii11111tttftfLLf11t11iiii;;itf1ii1ii1t1;:,.            .      
                               .,;fCGCLfftttfffftfLCGLtiiti1tiiii;iii;i111itt1i11i,.          ..    
                          ..   .:;1fCG0GCCLCCLLftttffffttttf1iii;;i11;ii111t111fft1;.   .      .    
                               ,:;;;itC080LCCCGCLLLttLCCLLLLf111iii11iiiiit111tttttti,              
            .   .             .,:::;;;i1LGGGGCCCGGGCCCCCGGG80CLfftt11ii;ii1ii11tttttti,             
                              .,,,:::;:;:;i1fLtifCffCGGGCCC0GGLLLffttttti1tti111ttfftt;.            
             .               ...,,,,::::;;;;1i11i1iitLttfLCGGCLfffffffffttfttffttffttt;             
                     .   ,.   ......,,,:;:,;11i;iit11tfCLtLLGGGCLfffttttffftffLLf1111;.             
                                  ....,,,.,1tti,i1ftLCtffG0GCLtLGGGCLffLLftttftfftti,               
                                     .....;tt1;,itfGCL1ttfLtti1tttfCCCCCLLLttt111i:.                
      .          .                     ..,1ff1,:fLCtii11i;;1t111111LCCCCCGGCCffi:.                  
                 .                     ..:tfL;,LCCCt1t1:;fLft1iiiif0000080GGGCL;..                  
             .                        ..,tCfi,fGGGGLfft1C0fi;;;::;;1LCCCLG@@GLL,.                   
                                     ..iGCt;,L80CCftfffLGt:,,,:,,::;;;;;;1LGCL1..                   
                    .:              .,1Ct::;C@GffLLGCftt;...,,,,,:;::::;i1iii:.                     
                     .              :11t1fL00ti1fLft1i;i,...,,,,,:,,,:;ii:,..        .              
                                  .1ti1fttC0;;tf111itff1.........,.,,:::.                           
                                .:tf1LGLt1ft:1ffi;;itLt,.      .  ...,..                            
                               .;1t1t0Li;i;:;11i;111i:.                                             
                             .,tft1iii;ii;,iiii;i1i,.                                               
                          ..,;tff1iii;;:,.;i,:;ii:                                                  
                       ..,::,:1ii;it;.   .,,,;1;, .                                                 
                      .,:,..,i::::i;     .,,;1;. ..          .                                      
                  ...,::.  .:.,;:;,..   .,,,i:               ..                 .                   
                ..,:::,    .. :,i:,,,   .,11i: .        ,.                                          
             .,,;;;::.      . .;i:,.,,  .:1t;, ..                                                 ..
           .;i::::, .  .    ..:i:..,::. .:tt.                                                   .. .
           .,..         ,   ,:;;  .:;:..;;:.                              .                         
                           .:;;,. .;;. ,:....            .,           ..                            
                           ,i1:,, .i:     ::,.       .                       .              .       
                          .i1;,,,..:      :;,                                                       
                          ;t::::,.        ;;                               .,                       
..                       if;,;::;,       .i.            .                   .                       
                        :i,..;.;t.       ,,                                                         
                        .    ..,:                                 .          .                      
                                                                                                 .  
                                                                                                    
    ..                                                                                              
                              .          .                            .                             
   .                ..     .                     .                    .               .             
                                          .     .               .                     .             
                                                ,         .                                         
                    ..                                         .                ..                  
                                                               .                 ,.                 
                                                                    .                               
       .    .                                                                                       
`,y[10]=`                                                                       ,.                           
                                                 ,                                                  
                              .  ..                                         .                   .   
             .                .                                                                     
                                                                                                    
                                                    .                           .                   
 ..                                           .  .                                                  
                                              ..                                                    
   .  .                                       .                  ,                                  
                                                                                          .         
                                                               .                                    
                                                                                                    
                                                                         .            .             
                                                                                     .:      .      
                                           ...........                        ..                    
                                         ,;i;iii1111i;;;:,.                          .              
                                  ,.   ,;ii111iiii1i1tftt1ii;:,,..                              .   
                                      ,i;;;;i1111111ff1iii1iiiiiii;;::,.                     .      
     ..                               :;;iii;1tiii1t1i111i;;;ii;;i11i11i;.                   .      
              .                      .;ii1i111t1;;;iii11tii1i111iiiiii11ti:.                        
                                    .,iii1iii1i1i;i1itt1t1t1iii1tLffti11i1ti,                     ..
              .                 .,:i11ii1111tftfttfLLt11t11iii;;iitt1;i1ii1tti:,.            .      
                               .:1LGGCffftttfffftfLCGf1i11i11iiii;ii;;i1111t11i11i,.          ..    
                          .    .:i1LCGGCCLLCLLftttffffftttttiii;;;i1i;ii111t11tfftti,   .      .    
                              .,:;;iifG88GCCCGGLLLfttLCCLLLLt111iii11iiiii111ttttttt1,.             
               ..             .,:::;;iitLGGGCCLCGGGCCCCCGGG80CLfftt11ii;ii1ii111ttftt1,.            
                              .,,,:::;:;;;i1LtL1LLtfCCGCCLLGGCLLLfftttfti1t1i111ttfftti.            
             .                ..,,,,::::;;:i11t1;ii;tLftLCCGGCLfffffffffttfttffttftttti.            
                     .   ,.    .....,,,:;,:11ti:iit111tCCfLLGGGCCLffttttffftfffLft111i,             
                                 ....,,,,,it11;,;1ftLL1ffL0GGCfLCGGCLffLLftttftfftt1:.              
                                    .....:tt1;;,itfGCf11tfCLfii1tftLCCCLLLLftt1111:.                
      .          .                     ..iff1:,:fLCt111t1;;iii1tt11tCCCCCGGCCLf1:.                  
                 .                     ..ifft.:LCLft1i1;:1ftt1iiiiiC000080GGGCCi..                  
             .                        ..iCCt,,L0GG0CftttL0fi;;;::;;1fCCLLC@@0fC:..                  
                                    ..:fGfi.;G80LGCLffffCt:,,:::,::;;;;:;ifCCLt,.                   
                    .,             ..;ff;:;108CffCCGCft11,..,,,,,:;::::;11iii;.                     
                     .       .     ,i1tttfC0C1i1fLt111i;i....,,,,::,::;ii;:,.        .              
                              .  .if11tfftGC:;ffti1i11tf:.. .....,..,,::,                           
                                ,iLtf0GL1iti,1ftiiii1ff;.      . ....,..                            
                               :1tt1LC1i;i;,;11ii111i:.                                             
                             .;fftiii;;i;:,;i;iiii;,.                                               
                          .,:itftiiii;:,..:;,:iii,                                                  
                       .,::,,:1ii;11;.   .,,,;1;, .                                                 
                     .,::...:;:;:;;,.    .,,;i:. ..          .                                      
                  .,,::,   .,.:;;:.,.   .,,,i:.              ..                 .                   
                .,:::,.      .:i;..,,.  .,i1i;..        ,.                                          
             .,,;;:,,       ..;i,...,:. .,it;, ..                                           .     ..
            :;::,,. .  .    .:;:   ,::,  ,if,                                                   .. .
           .,,.         ,  .:;;..  ,;;. :i,,                              .                         
                           ,:i,.,  ,i: .,..,.            .,           ..                            
                           :i;,.,. :;.    :::.       .                       .              .       
                          ,i;;:,,. ,.     :;,                                                       
                         :ti,;;::,        ;;                               .,                       
..                      ,f1,.:;:i:        ;.            .                   .                       
                       .;:.  ,:,t:       ..                                                         
                              ..,                                            .                      
                                                                                                 .  
                                                                 .                                  
    ..                                                               .                              
                              .          .                                                          
   .                ..     .                                          .               .             
                                          .     .               .                     .             
                                                ,         .                                         
                    ..                                         .                ..                  
                                                               .                 ,.                 
                                                                    .                               
            ,                                                                                       
`,y[11]=`                                                                       ,.                           
                                      .          ,                                              .   
                              .  ..                                         .                   .   
            ..                .                                                                     
                                                                                                    
                                                    .                           .                   
 ..                                           .  .                                                  
                                              ..                                                    
   .  .                                       .                  .                                  
                                                                                          .         
                                                                                                    
                                                                                                    
                                                                         .            ,             
                                                                                     .:      .      
                                           ..........                         ..                    
                                        .,;i;ii1111ii;;;:,.                                         
                                  ,.   :;i11111ii11i1ft1t1i;;:,,..                              .   
                                      :i;i;i1t11i11tff1ii11iiiiiii;;::,.                     .      
     ..                              .;;iii;it1;;i1t1i11ii;;;ii;;i11i11i;.                   .      
              .                      .;i1i111111;;;ii1111i11i111iiiiii1tt1:.                        
                                    .:iiiiii11i1i;ii1fttttt1iii1tLff1i11i1ti,.                    ..
                                .:;111ii1111ffft1tfLLt11t1iiii;iiitt1;iiii11ti;:..           .      
                               .;1LGGLffttttfffftfLGCf1i11i11iiii;i;:;11111t11111i:.          ..    
                          .   .,;i1LG0GCCLLCLLftttffffftttttiii;;;11i;i1111ft1tfftti,.         .    
                              .,:;;i1LG80CCCCGGLLLfttLCCLCLft111iiit1iii;i111tttttttt:.             
            .  ..             .,:::;;;1fCGGGCLCCGGGCCCCGGGG80CLfftt11;i;ii1ii11tttfft1:.            
                             ..,,,::;;;:;iittfGtfLtLCCGCCLLGGCLLLfftttfti1tti11tttfftt1.            
             .               ...,,,,::::;;;1itt1;i1ifLf1fCCCCCLfffLfffffttft1tftfft1tt1.            
                     .   ,.    ....,,,:;;,i1it;:iiftt11LGffLGGGCCLfftfttffftftfLLt111i,             
                                 ....,,,,;ttii;,:1ftff11LtCGCCLLCGGCLfLLLftttfttftt1:.              
                                    ....,1fti;;.;tfGfL1i1fGGLt1iiftLCCCLLLLftt1i11;.                
      .          .                    ..:tfti,,:tfGftt1t1i;i;ii1tii1fCCCCGGCCLf1:.                  
                 .                    ..:tff;.:LLLt1tiii:ittt1iiiii1000088GGGGCt,.                  
             .                       ..:LGL;.;C0GLGGftttfGLi;;;;;;:ifCLLfL8@8LCi..                  
                                   ..,1Cf;,.i08GLGGCLfffLf:,,,::,::;;;::;ifCCLf:.                   
                    .,             .:1fi:;if00LfffCCCfti1:.,.,,,,:;::::;i1iii;..                    
                     .       .    ,i1tffffCGf111fLt11t1;1,...,,,,::,::;;i;:,.        .              
                              .  :ft1fLLtf0L:iLLtiii111f1..  ....,..,,::,                           
                                :tLtC0Cfi11:,1f1iiiii1f1.      .   ..,..                            
                              .itt11Lfi;ii,.;i1iiii11;,                                             
                            .,1ff1;;;;;;:..;i:iiii:,.            .                                  
                        ..,,;itt1i1ii;,.. :;,:i1i,                                                  
                      .,::,,.;ii;i1;;.    ,,:;1i, .                                                 
                     ,:;,. .:;:;;;,..    .,,;i:. ..                                                 
                  .,,::,   .,.;;;. ,,   .,,,i:.              ..                 .                   
                .,::,..     ..ii. .,,,  .,i1;;,.        ,.                                          
              .,;;:,.       .:i:   .,,,  ,;fi:...                                                 ..
            .;:,,,. .      .:;;.   .,::  ,;t:.                                                  .. .
            ,,.         ,  ,:i,..  .:;: .;,,.                             .                         
                          .:i;,.,  .i;. ..,,,.           .,           ..                            
                          .;;::.,. .i.    ,::.                              ..              .       
                         .;;::;,,, ..     ,i,                                                       
                        .11:,;;::,.       :;                               .,                       
.                       i1:, ,;:1;.       ,.            .                   .                       
                       .:..   ,,i;                                                                  
                         .      .                                            .                      
                                                                                                 .  
                                                                 .                                  
    ..                                                                                              
                              .          .                                                          
   .                ..     .                     .                    .               .             
                                                                ..                    .             
                                          .     ,         .                                         
                    ..                                         .                .                   
                                                               .                 ,.                 
                                                                    .                               
            ,                                                                                       
`,y[12]=`                                                                       ,.                           
                                      .          ,                                              .   
                              .  ..                                         .                   .   
             .                .                                                                     
                                                                                                    
                                                    .                           ..                  
 ..                                           .  .                                                  
                                              ..                                                    
   . ..                                       .                  .                                  
                                                                                          .         
                                                                                                    
                                                                                                    
                                                                         .            .             
                                                                                     .,      .      
                                           .,,,,.....                         ..                    
                                        .:ii;ii1111i;;;;:..                                         
                                  ,.  .:ii11111111iitft1t1i;::,,..                              .   
                                     .;i;;i1t11i111tft1iii1iiiiiii;:::,.                     .      
     ..                              .;;iiiitti;;i1tii111i;;;i;;;;1iiiii;.                          
             ..                      ,ii1iii111i;;;ii1111i1ti111iiiiii1tt1:.                        
                                   ..;ii1iii1i1i;;ii1fttttt1iii1tLffti11i11i:.                    ..
                               .,;i1tii1111tftft1tLLLt1tt1iiii;iiitt1;ii1ii1ti;:..           .      
                              .,;tCGGLfftttfLffttfLGCt1i11i11ii;i;i;:;1t1iitt1111i:.          ..    
                          .   .,;itLG0GCCLLCLLfttfffffftttftiii;;;11;;ii111tfttLftt1:.  .      .    
                              .,:;;itC080CCCCGCLLLftfLCLLCLft111iiit1iii;i11ttttttttt:.             
               ..             .,::;;i;1LCCGCLCCCGGGCGCCCGG08GCLfftt1iii;ii11111tttfft1:.            
                             ..,,,::;;;;;;it1CGtfftLCCGCCLLGGCLLLffttffti1t1i11tttfft11,            
             .               ...,,,,:::;;;i1ittiii1ifLt1tCCCGCLffLLfffffttft1ttttftttt1,            
                     .   ,.    ....,,,:;:;t1it;:iifff1ifGCfLGGGCCLfftfftffftftfLLt111i:.            
                                 ....,,,:1t1;i;,:1ft1111CffCCCCLCGGCLLLLLfttffttf1t1:.              
                                    ....iff1:;;.;ttLttf;1tG8GLti;1tfLCCCLCLftt1i11;,                
      .          .                    ..ifft::,:tfGttftttii1ii;;i;i1iCCCCGGCCLft;.                  
                 .                    ..1ffi,.:fLCt1t1ii;;1111iiii1;L00088GGGGCf,.                  
             .                      ..,fGLi,.;L0GLfCftt1fGLi;;;;;;:;fLLLff8@8LCt..                  
                                   ..;LL;,..108GLCGLLLftff;,,,::,::;;;:::;tCLLf:.                   
                    .,            .:it1;ii1LGGLfffLCCftiii.,,,,,,::::::;i1iii;,.                    
                     .       .   .i11fLLLfCGf11tfLt111t;1;...,,,,,:,:::;i;:,.        .              
                              . .tL1tLLftL0f:iLftiii11i1f,.  ....,..,,,:,.                          
                               ,1LfLGGL1i1i,,1tiiiiii11t:.        . .,...                           
                              :1ft11f1;;i;..:i;;iiiiii:.                                            
                           .,;tfti;i;i;:,..;;,;iii:,..           .                                  
                       ..,,::it1ii1;ii,.  ,;,:;11,                                                  
                     .,:::,..iiii1;,;.    .,:;1i, .                                                 
                    .:::.   :::;;: ..    .,,;i;. ..                                                 
                  ,::,,.   ...ii,  .,.   ,::;:,              ..                 .                   
                .,::..      .;i,   ,,,. .,;t;::.        ,.                                          
              .,:;:..      .,;;.   ..,,. .:f1:...                                                  .
             ::,,,. .      ,:;...  .:::, .:1i.                                                  .. .
            ,:,        ., ,:i:,..  .:;;. ,:,.                             .                         
                          ,;;::.,.  :i,  .,:,.           .,           ..                            
                         .:::;:,..  ;,    ,;:.                              ..              .       
       .                 ;;,::;::,  .     .i:                                                       
                        ;t;,.;i:;:.       .;                               .,                       
.                      .i,,. .::i1.       .             .                   ,                       
                       ...     ,::                                                                  
                                                                             .                      
                                                                                                 .  
                                                                 .                                  
    ..                                                                                              
                              .          .                                                          
   .                .      .                     .                    .               .             
                                                                ..                    .    .        
                                          .     ,         .                                         
                    ..                                         .                .                   
                                                               .                 ,.                 
                                                                                                    
           .,                                                                                       
`,y[13]=`                                                                       ..                           
                                      .          ,                                              .   
                              .                                             .                   .   
                              .                                                                     
                                                                                                    
                                                    .                           ..                  
 ..                                           .  .                                                  
                                              ..                                                    
   . ..                                       .                  .                                  
                                                                                          .         
                                                                                                    
                                                                                                    
                                                                         .            .      .      
                                                                                     .,      .      
                                           .,,,,....                           .                    
                                        ,:iiii11111i;;;:,.                                          
                                  ,.  ,;ii11111111i1ff111ii;:,,...                              .   
                   .                 ,i;ii1tt1iii1tft1iiiiiiiiiii;:::,,                      .      
     .                               :i;iii1t1i;;i11ii11iiiiii;;;;1iii11;.                          
             ..                     .;i1iii1111i;:iii111111i11iiiiiiii11t1:.                        
                                  ..:;;iiii1i1ii;;1i1ff111iii;i1tLfLt;iii111:.                    ..
                               .:i1ttii11ttftft1tfLCftt11i;iii;i;it1i;i1iii11i;:..           .      
                              .:1LGGCLffftffffttfLCGLt1iti11i;ii;;i::ii1ii1fff111i:.          ..    
                          .   .:;1fCGGCCLCCCLLfttffffLftttt1iii;;;1ii;1ii11fCffLftt1:.         .    
                              .::;;1LG88GLCCCGCLCLttLCCCCCLft11iii11iiii;ittttttttttt;.             
               ..            .,,::;iiifCCCCfCGCCGGCCGCCGGG00GCLfftt1iiii1i1t11ttttfft1;.            
                             ..,,,:;;;;;;1t1f00fttfLCCGGCLC0GLLLLfftfff111t111t11ffft11:            
             .               ...,,,:::;;i11;;tffi1t1LCf1tCCGGCLLfLLffffftfft1tttfftt111,            
                     .   ,.    ....,,,:;1t1;i1::;1fffi:1CCLfCGGGCLLftffffffffttLft111i:.            
                                 ...,,,1ft1;:i:,:;LtiittC0ffCLCCCCGGCLLLLfttffttt111:.              
                                   ...,1ff1,,;:.;f111tCtift000C1;itLfCCCLCLfft1i11:,       .        
      .          .                   .,itt;.,,.,tfLfttLLLt1tft;:i;ii:tCCCGGCCCft;.                  
                 .                  . :LLi,.,.:ffCftff11i;iii;ii;;i;i0008800GCCL,.                  
             .                    ...1GLi,...iC0GLffff11tLCt;;;;ii::1Lfftf8@@CLf..                  
                                 ..:tL;.,:::t00GffLfLLfttt1:,::::::;;::::;1Lfft;.                   
                    .,           ,;11;ifCffCLffttfLLLf1i;i:.,,,,.,:::::;iiiii;.                     
                     .          :t11tLCCfLGLt1tfLftiii11;1,..,,,.,:,,::;i;:,.        .              
                               .fLt1LLL11fGt;tftiiii1i1i1t..  ........,::.                          
                              ,:CftfLtiiiii,,t1,iiiiii111,          .,...                           
                             :;ftii1i;ii:,..;i:;1iii;ii:.                                           
                         .,,;1t1;ii;;ii:...:;::ii1;,...          .                                  
                      .,:,,,:11i11;,;1,.  ,i;;;i1;.                                                 
                    .,:::...:;;ii;,.;,    ,i;,i1:                                                   
                   .:,,,.  .::;;:. .,.   .;i;;;. ..                                                 
                 .,:,..    .:;;,.  ,,,   ,;i;::.             ..                 .                   
                .,:,.     .,::,    .,:, .,;1::;,        ,.                                          
               .:::,.    .,:::,     .,:. .,t1,,.                                                   .
             .::,,. .   .,,;::...   ,:::  ,;i.,                                                 .. .
             ::.       .:,:;,:,..   ,:;: .,,,.                            .                         
                        .,::::;,..  .i;. ..::,           ..           ..                            
                        ,;:,::;:,.  ,:    .:;.                              ..              .       
       .               .t1,.,;;::,. .     .,;                                                       
                       :i,:..,;:;i.        ..                              .,                       
.                      . ,,   .,;1.                     .                   ,                       
                        ..     ..                                                                   
                                                                             .                      
                                                                                                 .  
                                                                 .                                  
    ..                                                                                              
                              .          .                                                          
   .                .      .                                          .               .             
                                                                ..                    .             
                                          .     ,         .                                         
                    ..                                         .                .                   
                                                               .                 ,.                 
                                                                                                    
           .,                                                                                       
`,y[14]=`                                                                       ..                           
                                      .          ,                                              .   
                                                                            .                   .   
            .                                                                                       
                                                                                                    
                                                    .                           ..                  
 .                                            .  .                                                  
                                              ..                                                    
   . ..                                       .                  .                                  
                                                                                          .         
                                                                                                    
                                                                                                    
                                                                         .            .      .      
                                                                                      ,      .      
                                           .,,,,....                           .                    
                                       .,:iii111tt1ii;;:,.                                          
                                  ,. .:;i11111111111ff111ii;:,,...                              .   
                   .                .;i;ii1tt1iii1ttt1iiii;ii;iii;::::,.                     .      
     .                              .;iiiii1t1i;;i11ii11iiiiii;;:;1iii11;,                          
             ..                     .;i1iii1111i::ii1t111iiii1ii1iiiii1111;.                        
                                  .,;i;iiii1i1i;;iiitfL1iiiii;iitLfLti1ii111:.                    ..
                               ,;itftii1ttfftt1ttfLLtt11ii;iii;i;itii;i1iii11i;:,.           .      
                              ,;1CGGGLffffffffftfLCGLt111i11iiii;;i;;;i1ii1ftt1i1i;,          ..    
                          .  .,:;1fC0GCCCCCCCLfttffffffttttiii;;;;1;iiiii11tftfLfttt;.         .    
                             .,::;;1LG88GLLLCGCLCLttLCCCCCLLtt11ii11iiiiiitttttfftttfi,             
               ..            .,,::;i;1fCGCttGGGCGGCCGGCG0G080CLfftt1ii;i1i1t1ttttfftt1;.            
                             ..,,,:;;;;ii11tf08f1ttLCCGGCCCGGLLLLfftfff11tt111t11fffti1:            
            ..               ...,,,:::;i111;;tfC11ttLCL11LCGGCLLfLLffffftfft11ttffff111:            
                     .   ,.   .....,,,:1t1i:;1::;1ftL1;iCCLLLGGGGCLffffffffffttLLtt1ii:.            
                                 ...,,;tfti::i:,,:Lti;ifC8CtLLCCLCCGGCLCLfttfftttt1i:.              
                                   ...;ttt:,,;,.:tti11LC;ftL00Gtii1LtLCCCCLfft1i1i:,       .        
                                    ..;tt;.,,,,.1fftftfLff1tfL1;i;ii:iCCCGGGGCLf;..                 
                 .                 ..,fC1,....,tfLLff1t11iii;;;i;;i;:L8088000GCC:..                 
             .                    ..iGCi.....;L0GLffff1itLLti;i;ii;:;ffftt0@@GLL,.                  
                                 .,1fi..,:;:iC0GLtfffLLft11;,,:::::::::::;iffft;.                   
                    .,          .;1t;:1LCLfCCff1tfLLLf1i;;i.,,,,,,:::::;;iiii:.                     
                     .         ,tf11fCLLfLGLtttfLt1i;;i1;i;...,,.,,,,::;;;:,.        .              
                              ;fCft1LLf11tGfitf1;;iii11i;f:   ........,,,,                          
                             ,tCLttff1iiii1::ti,;1iiiii11;.          .,..                           
                           ..iffiiiii;ii;:..:i::1iii;iii,                                           
                        .,,:;t1;ii;::i1;...,i;:ii1i:,..          .                                  
                     .,::,,,:i;i1;..:1:.  ,1i:;i1i.                                                 
                    ,::.   .;;;i;.  ;:    :1;,:i;                                                   
                   ,:,.    .;;i:.  .:,   .;i;:;, ..                                                 
                 .::..    .:i;,    .:,.  ,ii;::,             ..                 .                   
                .,:,.    .,;;,     .::,  .;1;,:,        ,.                                          
               .:::,.   .,:;:, .    .,:,  ,1t,,,                                                   .
              ,;:,. .  .,,i:,:...   .::;, .:i ..                                                .. .
             .;,       .:;;:,::...  .,;;. .,,.                            .                         
             ..         ::,,::;,..   :i,  .,:,           ..           .,                            
                       ,ii..,:;::,   :.    .i,                              ..              .       
       .             .,it, ..:;::,.        .:.                                                      
                      .::.   .,::1,                                        .,                       
.                       ..     .:;,                     .                   ,                       
                                                                                                    
                                                                             .                      
                                                                                                 .  
                                                                 .                                  
    .                                                                                               
                              .                                                                     
                    .      .                                          .               .             
                                                                ..                    .             
                                          .     ,         .                                         
                    ..                                                          .                   
                                                               .                 ,.                 
                                                                                                    
           .,                                                                                       
`,y[15]=`                                                                       ..                           
                                      .          ,                                              .   
                              .                                             .                   .   
                                                                                                    
                                                                                                    
                                                    .                           ..                  
 .                                            .  .                                                  
                                              ..                                                    
   . ..                                       .                  .                                  
                                                                                          .         
                                                                                                    
                                                                                                    
                                                                         .            .      .      
                                                                                      ,      .      
                                          ..,,,,,...                           .                    
                                       .,;ii11ttttiiii;;,.                                          
                                  ,. .:;i1111111111tff111i;;:,,...                              .   
                   .                .;i;ii1tt1iiittt11iiii;i;;;ii;;:::,.                     .      
     .                              .;iiiii1tii;;i11i111iiiiii;;:;1iii1ti,                          
             ..                     ,iiiiii111ii::ii1tt11iiii1i11iiiii1i11;,                        
                                  .,;i;iiii1i1i;ii1i1tt1iiii;;i1tLfLtiiii111:.                    ..
                              .,;1fLt11tttfftt11tfLLt111ii;iii;i;i1i1ii1ii1i1i;:,.           .      
                              ,;tCGGGCLffffffffffLCGLt11ti11i;ii;;1;;;i11i1ttt1i11;,.          .    
                          .  .,:;1tC0GCCCCCCCLftfffffffftttiii;;;;i;iiiii11tftfLfttti.         .    
                             .,::;;1LG88GLffCGCCCLftLCCCCCCLtt111i11iiiiiittttffftttfi,             
               ..            .,,::;i;1fCGL1LGGGCGGCGGGGG0C080CLffftt1i;iii1tttt1tffttti.            
                            ..,,,,:;;;;1t11tf08C11tfCCGGGCCGGLfLLfftfff11tt111111fffti1:            
            ..               ...,,,:::;111i;;tfGf1ttfLCtiLCGGCLLLLLffffftfLt11ttffft111:   .        
                     .   ,.   .....,,,itt1;:;1::;itLfti:fCLCLCGGGCLLfffffffffftfLft1ii:.            
                                 ....,1ffi:::i:,,:tt1;;tC00ttLCCLCCGGCLCLfttfftttt1i:.              
                                   ..,1tt::,,:,.,tfii1tG1tft000f1iiftfCCCCCLft1i1i:.       .        
                                   ..,ffi...,,,.ittttttLffttfLf;;;;i,;LCCGGGGCLf;.                  
                 .                ..,fC1,......1ffCLt:itt1ii;;:ii:i;:t8088000GCC:.                  
             .                   ..:CC:......:LG0LfLftt11ftti;;iii;::1ft11G@80LL,.                  
                                .,if1..,:;;;ifGGLtttfLLLL111:,:::;:::::::;itttt;.                   
                    ..         .;1ti:1tfLffCCLf11ffLLfti;:1:.,,,,,::::::;iiii:.                     
                     .       .,1Lt1iLCLftLGLfttfft1i;;i1i:1....,.,,,,::;;;;,.        .              
                             ,fCCfttLftii1CL1tfi:;iii111;11.. .........,:,.                         
                             iLLfttftii;i1t;:t;,:iiiiiii1i,          ....                           
                           .:1f1iiiiii;i1;. ;i::iiiiiiii;.                                          
                       ..,,:i1;;i;:::;1i,..,i;:;ii1;,,..         .                                  
                     .::,,,,;;;1i,..,1;.. .ii,;;i1,                                                 
                 .  ::,    .;;;i,   :i    :1;,,;i.                                                  
                  .::.     ,ii;,   .::.  .;i;,;:  .                                                 
                 .::,.    :ii:.    .::.  .iii:::.            ..                 .                   
                .,:,.   .:;;;.     .,:,. .;t;,::        ,.                                          
               .:::,.  .,:;::, .    .,,:. .1t.,:                                                   .
              .;:,. .  ,:;;:,:...   .,::,  ,;. ,                                                .. .
              ;:       :;::,,::...  ..:;,  ,,,                            .                         
              .        .;;..::;,.,   .;:.  .::.          ..           .,                            
                      .;t,  ,:;::,   .,    .;;                              ..              .       
       .             .:i;   .,;:::.         ,,                                                      
                      ...    ..,:1:                                        ..                       
.                               ,:,                    ..                   ,                       
.                                                                                                   
                                                                             ..                     
                                                                                                 .  
                                                                 .                                  
    .                                                            .                                  
    .                                                                                               
                    .                                                 .               .             
                                                                ..                    .    .        
                                          .     ,         .                                         
                    ..                                                          .                   
                                                               .                 ,.                 
                                                                                                    
           .,                                                                                       
`,y[16]=`                                                                       ..                           
                                      .          ,                                              .   
                                                                            .                   .   
                                                                                                    
                                                                                                    
                                                    .                           ..                  
 .                                            .. .                                                  
                                              ..                                                    
     ..                                       .                  .                                  
                                                                                          .         
                                                                                                    
                                                                                                    
                                                                         .            .      .      
                                                                                      ,      .      
                                          ..,,,,,...                           .                    
                                       .,;i111ttt1iiii;;:..                                         
                                  ,..,:iii1111i1i11tft111i;;::,,...                             .   
                   .                .;iiii11t1i;ittt111iii;i;;;i;;;;:::.                     .      
     .                              ,iiiii1ttii;;i11ii111iiiii;;;;iiii11i,                          
             .                      ,iiiiii111i;::;i1t1iiiiii1i11111i11i11;,                        
                                 ..:;;;iii1ii1iiiiii1t1iiiii;;i1tffffii1i111;,.                    .
                              .,;1fLf11ttfLftt1ttfLLt11ii;;;i;;i;i1;ii;1ii111i;:,.           .      
                             .,;tCGGGCLffffffffffLCGLt11ti11i;i;;;i::;ii111tff1i11;:.          .    
                          .  .,:;1tC0GCCCCCCCLftfffffffftftiii;i;;iiiiii1tttfffLfttt1,         .    
                             .,::;i1L088CftfCGCCCLffLCLCGCCCft111i1tiii11;ttttffftttf1,.            
               ..            .,,::;ii1fCCttGGGGCCCCGGGGGGC080CLffftt1iiiii1ttt11tttttti,            
                            ...,,::;;;;tt111f08G111fLCGGGCCGGLfLLfftfLft1t1111t11fffti1;.           
            ..               ...,,,:::i111;;;1tGL1ttfLCfitCCGGLLLLLffffftfLt11ttffft111:   .        
                     .   ,    .....,,:1tt;::;1:::itLtt1:1CLCLCGGGGCLLfffffffLftfLft1ii:.            
                                 ....;tf1,:::;:,,;ff1i:iC00L1LCCLLLGGGCCLfttffttttti:.              
                                   ..;tf;,:,,:,.,1LiiiiCL1C1C00C1i;f11LCCCCLft1iii:.       .        
                                  ...tC1,,..,,,.:f11t11fL111fLLi;;;1,:fCCGGGGGCLi..                 
                 .               ...tC1,.......;ftCf1::1ftii;;:;i:;;:iG0800080LC;..                 
             .                  ..:tC;........tG0CfL11t11f1i1i;iiii::ift1iC@80LL,.                  
                               .,;t1,.,:;;;;;1CGCftfffCCL1i1i,:::;:::::::;ittt1:.                   
                    ..        .;ttt:ifffLffLCLf11tfLLLt1;:i;,,,,,,,::::::iiii:.                     
                     .       ,iLLt1iLCLftfCCttffft1i;;iii:1:...,..,,,::;;;;:.        .              
                            .1CCLt1fLttiiifCttt1;:;iii11iit,   ........,,:.                         
                            ,tLLtttt1ii;i1ti;t;,,iiiiiii1t:          .....                          
                           ,ittiiiiiii;iti, ;i::;i;1iiiii,                                          
                       .,,:;ii:;i;,:,:11:. ,i::;i;1i::,..        .                                  
                     ,,,...:;:;1:   .ii,. .ii,:;i1:.                                                
                   .::.    ,;;;;.   ,i.   ;1i,,:1,                                                  
                  .::.    ,;i;:.    :;.  .;ii,:;. .                                                 
                 .;:,.   :ii;.     .::.  .iii:::.            ..                 .                   
                .,::.  .:;;;:       ,:,.  :ti,,;.       ..                                          
               .:::,.  ::;i::. .     ,,,. .it..;.                                                  .
               ::,. . .;:i;,,:...   .,:::. .:. ..                                               .. .
              :;.     .;;:.,,;:...  ..,;:. .,,.                           .                         
              ,        ;1, .::;,.,    ::.  .::.          ..           .,                            
                      .1i   .:;::,    .    .,i.                             ..              .       
       .             .,:    ..::::.         .,                                                      
                              .,,1:                                         .                       
.                               .,,                    ..                   ,                       
.                                                                                                   
                                                                             ..                     
                                                                                                 .  
                                                                 .                                  
    .                                                            .                                  
    .                                                                                               
  .                 .                                                 .                             
                                                                ..                    .    .        
                                          .     .         .                                         
                    ..                                                                              
                                                               .                 ..                 
                                                                                                    
           ..                                                                                       
`,y[17]=`                                                                       .                            
                                      .          ,                                              .   
                                                                            .                   .   
                                                                                                    
                                                                                                    
                                                    .                           ..                  
 .                                            .. .                                                  
                                              ..                                                    
     .                                        .                  .                                  
                                                                                          .         
                                                                                                    
                                                                                                    
                                                                         .            .      .      
                                                                                      ,      .      
                                          ..,,,,,...                           .                    
                                       .:;i1111111ii1i;;:,.                                         
                                  ,..,:iii1111iii11tft111ii;::,,,..                             .   
                   .                ,iiiii11t1i;ittt111i1iii;;;i;;;;:::,.                    .      
     .                              ,iiii11t1ii;;;11i11111i1i1;;;;iiii11i:                          
             .                      :iiiii111ii;::;;1t1t1iiii1i111111iiii1i,.                       
                                 .,:i;;iii11iiiiiiii1tii;iii;;ii1ffffii1ii11;,.                    .
                              .,itLLLt1ttfLtttttffLLt1iii;;;i;;i;i1;;ii11i1i11i::..          .      
                             .,;tGGCGCLLLLfLfffffLGGLt11ti1ii;i;;;i;;iii111tff1i1i;:.          .    
                          .  .,;;1tCGGCCCLLCCCLtffftfffffft1iiiii;i11ii111ttfffCfttt1,         .    
                             .,::;;1L080LttfLCGCCCffLCLCGCGGLft11111iiiti;ffttffffttft:.            
               .            ..,,::;ii1fCf1LGGGGCCCCGGGGGGCG00GLfffft11iiiiitttt11ttttt1,            
                            ..,,,::;;;1t11i1f080ti1tLLCGGCCCCLfLLffffLft1t111ttttffft1i;.           
            .                ...,,,::;111i;:;1tCL1tftfLL11LCGGCLLLLfffLftLLt11ttfftf111:   .        
                     .   ,    .....,:1tf1,;:;1:,:;fC1tf;;fLCLLGGGGCCLfffffffLftfLft1i;,.            
                                 ...:tff:,:::;:,,;LCt1;:f88C1fCLLffCGGCCLfttffttttti:.              
                                  ..,tfi,,:,,:,.,1C1ii;tG1Ctf80Gt;;f1ifCCCCLLft1i;:.       .        
     .                            ..iCf,,,..,,,.,tti1;;tL111tfCt;;;1,:1CC0GCGGCLi..                 
                 .               ..1Gt,........,ttfLi:,iff1i;;::;;;;:;L0800880LC;..                 
             .                 ..,iLi... . ...:CGGLfii11tt1iii;iiii;:;tt1iL88GLf,.                  
                              ..;1t:.,:;;;;::ifCCL1tffLCCtiii;,::;:::::::;;1t1i:.                   
                    ..       .:tfti:ifffffffCLtt1tfLLLL1;:;i:,,,.,,:::,::;iii:.                     
                     .      .iLGt1;1fLft1tCLfttfft1i;;;ii,ii......,,,::::;;:.        .              
                            :LCCft1ff11ii;1LLtti;::ii111i;f;.. . ......,,:,                         
                           .;fLfttt1ii;;;ittit;,,:i;i;iiiti.          ..,.                          
                          .;it1;ii;ii;;itt:.i1::;i;;;iiii:.                                         
                       .,,:;i::ii:,,..it;..:i:.;i;iti;:,.        .                                  
                     ,,,..,::,ii,    :i:. ,ii,,;;ii,.                                               
                 . .:,.   .:;;;:    .i:   ;1;,,,i;.                                                 
                  .::.   ,;ii;,.    ,;.  .;1i.,;:..                                                 
                 .;:,.  ,;ii,..     ,:,  .i1i:::,            .                  .                   
                .,::. .::ii;,..     .:,.. :f1,.;:       .                                           
               .::;,. ,;;1;,:. .     .,,,  ;t,.::                                                  .
               :;:. ..:;;;,.,:...   ..:::.  :,. ,                                                . .
              .i,     :;;. ,,;:.,.  ...;;.  ,:,                           .                         
              ..    . .1i  .:::,,,    .:,  .,;,          ..           .,                            
                      ,i.   .::::,          .;,                             ..                      
       .             ..     ..::::.          ..                                                     
                               .,i:                                         .                       
.                               ...                    ..                   ,                       
.                                                                                                   
                                                                             ..                     
                                                                                                 .  
                                                                 .                                  
    .                                                            .                                  
    .                                                                                               
                    .                                                 .                             
                                                                ..                    .             
                                          .     .         .                                         
                    .                                                                               
                                                               .                 .                  
                                                                                                    
           ..                                                                                       
`,y[18]=`                                                                       .                            
                                      .          ,                                              .   
                                                                            .                   .   
                                                                                                    
                                                                                                    
                                                    .                           ..                  
 .                                            .. .                                                  
                                              ,.                                                    
     .                                        .                  .                                  
                                                                                          .         
                                                                                                    
                                                                                                    
                                                                         .            .      .      
                                                                                      ,      .      
                                          ..,:,,,...                           .                    
                                       ,:;11111111111i;;,,.                                         
                                  ,..:;ii11i11iii111tt11ii;;::,,,...        .                   .   
                   .                ,iiii1i11iiiittt11t111iii;;;;;;;;;;:.                    .      
     .                              :i1111tt1ii;;;11i111iii111ii;i1ii111i:.                         
             .                     .:iiiii111i;;;;iit1i;;;iii1i11tttt11i1t1:.                       
                                ..,;i;;ii111iiiiiii11i;;;i;;;;ii1tttt11t11t1;,.                    .
                              .:1tLCCftttfffttttfLLft1iii;;;i;i;;1i;;iiit111t1i;:,.          .      
                             .:ifGGCCCCLLLLLffffLLGCLt11t11ii;i;;ii11iii111ttt1iii;;.          .    
                          .  .:;;1tCGGCCCLfLCCLfftffffffLft1iiiii;ii111f1tffttfCfttt1,.        .    
                            ..,::;i1LG8CftfffCGGGCCLCCLCGCG0CLt1t1tti111i1ftfffffttttt:.            
               .            ..,:::;ii1fftfCGGGCCCLLCGGGGGCCG0Cffffftt1iiii1ttt11tttttt1,            
                            ..,,,::;;1tttii1tG80tiitCLCGGCCCCLfLLfftfffttt111ttttfftt1i:.           
            .                ...,,,:;1tti;i:ii1Ct1Lf1fLLfitCGGCCCCLffLfffLLt11tffft1iii,   .        
                     .   ,    .....:1tL1::;,;i:,:iff1tft;iLLLLCGGGGCCLLfffffLftfLft1i;,             
                                 ..;tft:,,,,:;,,,iCCfft;;G8GtfLLL1tCCCCCLfftfft1tt1;,               
                                 ..:ff:,,,,,::,.,iCL11;;ffCLt08Gi;if1;tLLCCCLft1i:,.       .        
                                ..:Lf;:,..,.,,,..;Lii1;iLti1tfL;,iii::iLCGCCGGCL;..                 
                 .             ..:Lf::,  .......,tttf;,:1f1i;:::;;;i;;i0808888fL:.                  
                              ..:t1,,...    ...:LGGC1;i1ti;;;iii;;i;::itiiL8GCft,.                  
                             .,;11:,.::;;:::,,;fCCf11ffff1i;ii:,::;::::::;;111;.                    
                    ..      .;ttfi::;fLfLLfffLftti1tfLfti:;i::,.,,,,,,,,:;iii:.                     
                    ..     .iCCL1;;1fLt111fLtt11i1ti;:,:;,;1:.....,,,,,::;i:,        .              
                          ..1CL1i11t1i;;;;iit11i:;,:;ii1i:t1...  ......,,:,.                        
                          ;,iti1tt1iii;:;;ittii::,;i11ii;it:           .,,.                         
                         ,;:;1i11;;;::,;tt1;i;;,;;i;;;;iii,             .                           
                       ..:;:::;i;. ...,tt;,;ii,.;i:i11i;:.       .                                  
                     ,,,,,:.::i:     .ii, ;ii:.,::11;:..                                            
                   .:,. .,::;;;.    .;i. :1i;..,:i;                                                 
                   ::. .:;;;:,,     .;:  ,i1:.,,;:.                                                 
                 .::,. :;ii:..      .:,. .1ti,:;:.           .                                      
                .:;:. :;ii;:...      ,,.. :f1::,i.      .                                           
               .,:;,..;i1;,:,...     .,,,. :1,.,i,                                                  
               ,::. .,;i:,,,;,.,.     ,::,  .,. ..                                               . .
              .;:    ,11, ,,;;.,,   . .,i,  .:,.                          .                         
              .,      ;;,  .:;:,:.     .,   .:;          ..           .,                            
                      ,,    .::::.          .,:                             .,                      
       .                     .,,::.          .                                                      
                                .;:                                         .                       
                                ...                    ..                   ,                       
.                                                   .                                               
                                                                             ..                     
                                                                                                 .  
                                                                 .                                  
    .                                                            .                                  
    .                                                                                               
                    .                                                 .                             
                                                                ..                    .             
                                          .     .         .                                         
                    .                                     .                                         
                                                               .                 .                  
                                                                                                    
           ..                                                                                       
`,y[19]=`                                                                       .                            
                                      .          .                                              .   
                                                                            .                       
                                                                                                    
                                                                                                    
                                                    .                           ..                  
 .                                            .. .                                                  
                                              ,.                                                    
     .                                        .                  .                                  
                                                                                          .         
                                                                                                    
                                                                                                    
                                                                         .            .      .      
                                                                                      ,      .      
                                          .,,::,,...                           .                    
                                      .,:i11111111111i;;:,.                                         
                                  ,..:;ii1iii1iiit111t111i;;::::,,...       .                   .   
                   .                ,111i1i11iii1ttt11111111i;i;;i;;;i;:.                    .      
     .                              :i111ttt1iii;;1t111iiii11t1iii1ii11i1;.                         
             .                     .:iiiii11ii;;;ii1t1i;;;ii11i11tfft11i111:.                       
                                .,:;1;;i1t111iiiiii1i;;;;;;;i;1i1t1tt1i111t1i:..                   .
                              .:1fLCCftttfLfttttfLLLt1iii;;;i;iii1i;iiiit1t1tti;:,.          .      
                             .:;f00LCCCCCLCLLfffLCGCLt1tt11iii;;;ii1ti11t11ftt1iiii;,.         .    
                          .  .:;;1tL0GGCLffLCGCLftftfftfLftt1iiii;i1it1fftffttfCLttt1:.        .    
                            .,,::;;1fG0LffLLfLCGGCCLCCLCGCG8GCttttttii1ii1tttffffttttt:.            
               .            .,,:::;i;1fftfCG00CLLffCGGGGGCCGGCfffffft11iii1ttt111t1ttf1,            
                           ...,,,::;ittt1;iitG80tii1CLLGCCCCCLfLLfftfffttt11ttfttftt111:.           
            .                ...,,,:1ttt;;;:iiiLi1Lf1fLLf1iLGGGCCCLfLLfffLLtt1tffft1iii,   .        
                     .   .     ...,itfLi:::,;;:,:iffftfLi;fCCLCCGGGGGCLLffffLftfLftii:.             
                                 .:1ffi,,,,,:;:,,iCCtLf1:f@GffLCfi1LCCCCLLftfft11tt;,               
                                 ,:fCi...,,,::,,,;LLtti:1LLL108L;;if1;1LLCCCCLf1;:,        .        
     .                          ..tC1,.....,,,,.,:ttii;;ffi1tft;,iii:;;fCGCCGGCL:..                 
                 .             .,1Ci,..   .......if1tt::1t1i;:::;;;;;;:G8G88@8fL,.                  
                             ..,it:,. ..    ....1CCCC1itti;;;ii;;;i;::itiif0GLf1..                  
                            ..:1t;,..,::::,,,,,1CGCf1tLLtii;;i;:,:;;::;::;;11i:.                    
                    ..      ,1ftt;..:ffffffftfLtt11ttfLti;;i:::,,,,,,,,,:;iii:.                     
                    ..    .,LGCf;,,1ft1ii1fLtt11iit1i;:,:,:1:,....,,,,,,:;i;,.       .              
                         ..;CC1::itti;;;:;iiiii1;;:,:;iii:t1,.   ......,,::.                        
                         :;iti,;ft1iii;::i;11;;::;:i111ii;t;           ..,.                         
                        .;:;i;it1;::,..:1111i:i.:;1i;;;;ii;.            .                           
                       .,;:;;:;i:.    .1f1;i;i, :i;:iiii;,       .                                  
                     .,,,:::,:i,      ;1;,iii: .::itti:,                                            
                    ,,,..:;;;;:.     ,i, :i1; .,,;1:.                                               
                   ,:. ,;ii;,..      :;. ;i1,.,.:;.                                                 
                  ::,.,i1i;.         ,,. ,tf;.:;;,           .                                      
                .,;:,,ii1::,. .      .,.. ;f1:::::      .                                           
               .::;,.:;i;,.:,..      .,,,. :i:,,;;                                                  
               .::. ,it;.,.:;,.,      .,::. ..,..,                                               . .
               ::   .it,..,,;:.,,     ..:;.  ,:,                          .                         
              .,     ,;,   ,:;:::       ,.   ,;,         ..           ..                            
                     ..    .,::::.           .:.                            ..                      
       .                     .,,;:.                                                                 
                                .;,                                         .                       
                                ...                    ..                   ,                       
.                                                   .                                               
                                                                             ..                     
                                                                                                 .  
                                                                 .                                  
    .                                                            .                                  
    .                                                                                               
  .                 .                                                 .                             
                                                                ..                    .             
                                          .     .                                                   
                    .                                                                               
                                                               .                 .                  
                                                                                                    
           ..                                                                                       
`,y[20]=`                                                                                                    
                                      .          .                                              .   
                                                                            .                       
                                                                                                    
                                                                                                    
                                                    .                           ..                  
                                              .. .                                                  
                                              ,.                                                    
     .                                        .                  .                                  
                                                                                          .         
                                                                                                    
                                                                                                    
                                                                         .            .      .      
                                                                                      ,      .      
                                          .,,::,,....                          .                    
                                      .,;ii11111111t1ii;:,..                                        
                                  ,..:ii1iii;iiii1111tt111i;;::::,,...      .                   .   
                   .                ,11111111iiiittt1111i111iiiiii;iii;:.                    .      
     .                              :11t1ttt1iiiii1t1111iii11t1iiit1i11i1i,                         
             .                     .:iiii111ii;;;;i11i;:;;ii11i11fffft111tt;.                       
                                .,:i1iii1t11111ii1iii;;;;;;;ii1it1i1tti11tt11;,.                   .
                              .:1fLCCLffffffttttffLLt1i11;;;i;iii1iiti1i1tt1Lt1;:,.          .      
                             .:if00LCCCCCCCCLLfLLCGCLtttftiiii;;ii;i111ff1tLt11iiii;,.         .    
                          .  ,:;;1fL00GCLfffCGCCLtfffttfLLftt11i1;i1it1tftffttLCLttt1:.        .    
                            .,,:::;1fG0LffLLfLCGGGCCGCLCCCC80Cftttft1iiiiitttttfttt1tt:.            
               .            .,,:::;i;tfftfLG00GLfftLGGGGGGCCGCfffffft11iiii1tt11111t1f1,.           
                           ...,,,::;iftt1;;itC8G1ii1LLLCCCCCCLLLLfftfffftt111ffttftti1i:.           
            .                ...,,,;tttt;;;:i;it11Lt1fLLLtiLGGGGGCCLLLLffLLft1tfLft1ii;.   .        
                     .   .    ...,:1tLf;:::.;;,::1LffttLt:1LCLCCCCGGGCLLffffCftffftii:.             
                                 ,;tft:,,,,.:::,,1GLfL;t;i80ffCC1;ifCLCCCLfffft1tt1:.               
                                .:1Cf:.....,,:,,,;Lf11;;;LLC1G0t;iit1:1LLCCCCLf1;,.        .        
                               ..iCL:.......,,..,;1t1;i;1Li1tt;;:iii:;;tGGCCGGLL:.                  
                              ..;Ct:..     ......;tf1t1:it1;:::i;i;i;;:C8G8@@0fL,.                  
                             ,,;f1,.  ..    ....:LCCCC111;;;;;i;;;i;::i1i;f0Cfti..                  
                            .,itt:.  ,:::,....,;fGCCf11ttiii:;;:::;;::;::;;i1i,.                    
                    ..     .:tff1.  ,1tffttfttLft111i11t1;;i::::,,,,,:,,,:i1i,.                     
                    ..    .:GGLt:.,it1iii1tLftti1;1ti;:,:,;t;,....,.,,,,::i;,.       .              
                         , iCf;.,itti;;;::iiii;1i;i::::;i:11:.   ......,,::,                        
                        ,;;t1: :ftiii;:,,;;i1::i:i:;i111i;t;           ..,.                         
                       .::;;;:it1;:,,..,i111i,i,.;1t1i;;;ii.            ..                          
                       .:::;::ii:.     :ft1i;;; ,;i;;;;ii:       .                                  
                     .,,,;;:,;;,      ,1i;iii;..:::1fti:.                                           
                    .:,.:ii;;;:      .i:.ii1i..,,,1t;,.                                             
                   ,:,.;1ii:..       :i. i11:.,.,;:                                                 
                  ,:,,;11i:.         ,,. :ft;,,;i:           .                                      
                .,;:,:i1;::...       .,.. ;f1i:::,      .                                           
               .::;:.;1i,.:,...      ..,,, ,::,,,;                                                  
               .::. :t1..,,;:.,,       ,::.  .,..,                                               . .
               ,:   ,1:..,::;,,:.       ,;.  .:,.                         .                         
              .,.    ,,.  .,;:::,        ,   .::         ..           ..                            
                           .,::::.            ,,                             .                      
                             .,,;,                                                                  
                                .:,                                         .              .        
                                  .                    ..                   ,              .        
.                                        .          .                                               
                                                                             ..                     
                                                                                                 .  
                                                                 .                                  
    .                                                            .                                  
    .                                                                                               
                    .                                                 .                             
                                                                ..                    .             
                                          .     .                                                   
                    .                                     .                                         
                                                               .                 .                  
                                                                                                    
           ..                                                                                       
`,y[21]=`                                                                                                    
                                      .          .                                              .   
                             .                                              .                       
                                                                                                    
                                                                                                    
                                                    .                           ..                  
 .                                            .. .                                                  
                                              ,.                                                    
     .                                        .                  .                                  
                                                                                          .         
                                                                                                    
                                                                                                    
                                                                         .            .      .      
                                                                                      ,      .      
                                         ..,,::,,.....                         .                    
                                      .,;;ii1111111t1ii;:,..                                        
                                  , .;ii1iii;iii;111111111i;;:::::,...      .                   .   
                   .                ,1t111111iiiitft1111i1111iiiii;iii;:,                    .      
     .                              :1111ttt1;iiii11111;iiittt11i1tt111i1i,.                        
             .                     .:iiii111ii;;;ii11i;;;;ii1t;i1tLfft111tt;,                       
                                .,:i1iii1t111111i1iii;;;;;;;ii1itiiittii1tt11;,.                   .
                              .:1fLCCCLffLLfttttfLLfft111;;;i;iii1iiti1111ttLt1;;,.          .      
                             .:itG8CLCCCCCCCCLLLLCGCLtttft11iii;ii:i1ttffttLf111iiii,.         .    
                          .  .:;;1tL00GCLLffLCGCLffffttfCLffft111ii1i111ttffttLCLftt1:.             
                            .,,:::;1fG0CffLLLfLCGGGGGCLCCCC08Gftttff1iiiiitttttttt11tt:.            
               .            .,,:::;iitLfttLC00GLtftfCGGGGGCCCCfffffftt1iii1tt1i1111t1f1:.           
                           ...,,,,:;1ft11;;i1L8L11iifLLCGCCCCCLLLfttfffftt111fftffttiii:.           
            .               ....,,,;ttf1;:;;i;:1t1ff1tLLLf;tGGGGGGCLLLfffLLft1tLLft1ii:.   .        
                     .   .    ...,:ttft;:::,;;,:i1CCf1tLL;iLCLLCCLCGGGCLffffCttfffti;,.             
                                .,itti:,,,,.::,::tGCCi,ti;08ftCLiiifLLLCCLffLft1tti:.               
                                ,;fCi,......,,:,:iLfi,:i:fLC1CC;i1iti:ifLCCCCLft;,.        .        
                               .,tC1,.......,,,.,iti:ii;iLii11,;1iii:;;1CGCCGGLL,.         .        
                              .,tL;..      .,...,i1ftitiiti;::;ii;;;;;:f8G8@@0ff,.                  
                            .:;tf;..   .     ...;tfCLCL11;:;ii;;;;;;::;1i;fGCf1;.                   
                            .:tfi.   .,,,,.....;tCGCCf11iii;:;:;::;;;:;::;ii1;,                     
                    ..     .;fff;   .;11tttt1ifCfttt1i111iii::::,,,,,:,,,:i1i,.                     
                    ..   ..;GCf1, .;1iiii1tLLttt1iit1i;::,i1,:,.....,,.,::ii,.       .              
                        ...tL1:..;11i;;;::i1ii;ii;1i,,,:;:t1:,   ......,,:;,.                       
                       .:;1ti. ,ttii;;,,,,i;i;,i,;;:;1tt1i1;.         ...,,.                        
                       :ii;:,.;tt;:,.  ,:11i1.;:.:itft1iiii.            ...                         
                       ;i:;;:;ii:.     .1fti;:i .;ii;::;i;.      ,                                  
                      .:;::::;;,      .it1ii;i..:::;1t1i:.                                          
                    .,,:iii;;;,      .;;,ii11..,,.iffi:.                                            
                   .:,:11ii:..       ,i:.tt1: ,..:i:.                                               
                  ,:,:i11i,          .,, ;Lt:,,;ii,          .                                      
                 ,:::;ii::,. .        ,.. ;fii::;,      .                                           
                ,:;;:1f;.,:....      ..,,, ,:,,,.,.                                                 
               .:;,.;t:.,,;;,.:.       .,:,   .,.,.                                              . .
               ,;.  :; .,::;:,,:    .   .:,  .,,.                         .                         
              .,.   .,.   .:;::;.        ..   ,;.        ..           ..                            
                           .:::::             .,                             .                      
                            .,.,;.                                                                  
                                ,:.                                         .              .        
                  .               .                    ..                   ,              .        
                                         .          .                                               
                                                                             ..                     
                                                                                                 .  
                                                                 .                                  
    .                                                            .                                  
    .                                                                                               
                    .                                                 .                             
                                                                ..                    .             
                                          .     .                                                   
                    .                                     .                                         
                                                               .                 .                  
                                                                                                    
           .                                                                                        
`,y[22]=`                                                                                                    
                                      .          .                                              .   
            .                .                                              .                       
                                                                                                    
                                                                                                    
                                                    .                            .                  
                                              .. .                                                  
                                              ,.                                                    
     .                                                           .                                  
                                                                                          .         
                                                          .                                         
                                                                                                    
                                                                         .            .      .      
                                                                                      ,.     .      
                                         ..,,::,,.....                         .                    
                                      .,;;ii11i111111ii;:,..                                        
                                  . ,;i11iii;;;i;1t11t111tii;;::::,...      .                   .   
                  ..                :111111111ii;tft11iii111111iiiiiiii:,.                   .      
     .                              :11111tttiiii11111i;;iittt1111tt111111:.                        
             .                     .:i1ii1111ii;;iii1;;;;;i11tii1fLfft111tt;,                       
                                .,:it1ii1tt11111i11ii;;;;;;;ii1itii1ttii1tttti,.                   .
                              .:1fCCCCLfLLLftttffffLft111;;;;iii11i1ftttt1ttLt1;:,.          ..     
                             .:itG8CLCCCCCCCCCLLLCGCLtttft11iiiii1:;ittffftLf111iiii,.         .    
                          .  ,:;;itLG00CLLftfCGGCffffttfLLLLLf111iiti11i11tfttLCLttt1:.             
                            .,::::;itC0GLfLLLfLCCGGGGCLCCCL080Ltttff1iiiii1ttttttt11tt:.            
           .   .            .,,:::;ii1Lft1fCG00ftt1tLGG0GGCCCLtffffttt1iii1ttt1111111t1:            
                           ...,,,,:;itt11;;;1LGt11iifCLCGCLCCCLLLfttfffftt111fftffttiii,            
            .               ....,,,;ttf1::;;i;,t1ttfttLCLfi1CGGGGGCCCCLffLLft1tLLft1ii:.   .        
                     .   .    ...,;ttf1;,::,;;,:1tGL1itfC1;LCLLCffLCGGCLffffCttfffti;,              
                                .:1ti;,,,,,.::,,;f0Gt,,1t:C8ftCti1itLfLLCLLfLft1tti,.               
                                ,;Lf:.......,,,,:1Lt:.,i:1LCtft:ftiti:1fLCCCCCft:,.        .        
                               .;LL;...    .,,,.;1t;.;ii;L1ii::1Ciii;;i1CGCCG0Lf,.         .        
                .            .,:ff,.       .....;11itt1t11;::;ii;i;;i::t008@@Gft..                  
                            .:;1t,.    .    ....1iiLCfGfi;:;1;:;i;;;::;1i;tGCti:.                   
                            .:1t:     .,.... ..;ftGGCCtii;i;,::;::;;;;;::;ii1;.                     
                    .      .;tff,    ,;i1iiii;tCLLfLf1i11iii::::,,:,,::,,:i1i,                      
                    ..   . iGLti.  ,;;;ii1tCLffft1i1ti;;:,ii,,,,....,,.,,:ii:.       .              
                       .,,:LLi,  :iii;;;:;i111ii1;it;,,:,:f;:,.  ......,,:;:.                       
                      .:;1t1:  .itii;:,.,,;iii,1;,i;,;i11i1;,         ...,,.                        
                      ,1i;;, .:1t;,,.  .,;1i1,;i..;tffLt1ii.             ..                         
                      :i:,,.:;ii:.      :t1i;,1..:i1i;:;;i,      ,                                  
                      ,;:;;;;i;.       :ttii:1,.::,,:ii1i.                                          
                     .,iiiii;;,      .:i;tit1, ,,.,1ff1:.                                           
                    :,;11ii,.        .;:,Lt1;.,,.,i1;.                                              
                  .:::11i;.          .,,.1C1:,.:ii;.         .                                      
                 .:;:1ti;:.  .        ,,..;t;i::;:.     .                                           
                ,:;;;ft,,;,. ,.      ..,,, ,,.,,,.                                                  
               .:;:,1i.,,:i,..;.       .,:,   .,..                                               . .
               ,;, .;. ,::;;,,;;         ,:   .:,                                                   
              .:,  .,.   .,i:::i.         .   .::        ..           ..                            
                          .:;.:;,             .,.        .             .     .                      
                            . .:;.                                           .                      
                                ,,                                          .              .        
                  .              .                     ..                   ,              .        
                                         .          .                                               
                                                                             ..                     
                                                                                                    
                                                                 .                                  
    .                                                            .                                  
   ..                                                                                               
                    .                                                 .                             
                                                                ..                    .             
                              .     .     .     .                                                   
                    .                                     .                                         
                    .                                          .                 .                  
                                                                                  .                 
           .                                                                                        
`,y[23]=`                                                                                                    
                                      .          .                                                  
                             .                                                                      
                                                                                                    
                                                                                                    
                                                    .                            .                  
                                              .. .                                                  
                                              ..                                                    
     .                                                           .                                  
                                                                                                    
                                                          .                                         
                                                                                                    
                                                                                      .      .      
                                                                                      ,      .      
                                          ...,,,....                           .                    
                                     ..,:;;iiiii1iiii;;:,,.                                         
                                  . ,;i1t11iiiiiii1111ttt1i;;:::,,,...      .                   .   
                  ..                ,ii1111tt11ii1tt111iiii11111iiiiii;:,                    .      
     .                              :i1i11ttt11iii1t111i;ii11t1111ft11111i,                         
             .                     .:iiii1111ii;iiiii;;;;;i11t;i1ffftfttttt;.      .                
                                .,:it1iitttt1111i11ii;;;:::;i1111ii1ff11tttt1:.                    .
                              .:1LCCCCCLLLfffttffffftt111ii;iiii1i;i1tttttt1tti;:..          ..     
                             .:itG8GCCCCCCCCCCCCCCCCLtttft111iii1i:i1ttfLffftt111i;:.          .    
                          .  ,;;;itfG80GLLfttfCGCCLfftttLLLCGLt1111t1111ttfftfLCftt1;,              
                            .,::::;i1LGGCffLLfLLLCGCGCLCLLLC0GLfttff1i1i11ttttfft111t;,.            
               .            .,,::::iiitftitLG8Gt111ifG000GCLLftffttttt1i111tfftft111tt::            
                           ...,,,,::i1t1i;;;;ft111iifLLLGCLLCGCLLfttftffttt1ffffftt1ii:.            
            .               ....,,,;tff1::;:ii1t11tf1fLLLLtifGCGGGGCGGLLLLLfttfLff1ii;,    .        
                         .    ...,;ttf1;,,:,;:;11Lf;i1tfCf;tLLCf1tfCGGCLLLfLf1tfff1;:.              
                                .:11i;,,,,,.:,,1tCL::,:1f;f8Lft;ttifttfLCLLLLf11fi:.                
                                ,1t1:.......:,,iftt:,,.;iifCt:;CCt11::tffLCCCCf1,..        .        
                               .iL1,..   . .,,.it11..,;i1f1:::tGLi;;;;t1LGCCGCL1..                  
                             .,;fi.        ....it11;,tt1t;::iii;ii;i::;108@@8Lf;.                   
                            .:;ti.     .     ..i1:i;fCLC1::ii;:;i;;;:;;11ifGLi:.                    
                            .:11,       .    .,fi,iLGCGf;i;,,,::;::;;;;;:;i1i:.                     
                    .      ,i1t1.     .:;;;;::fLttLGCCfi1;i::,:;:,,,,::,,:11;.                      
                    ..  ...1Cfi:.   .:;iii1fLfffffttt1ii;i;,,,:,....,,..,:ii,.       .              
                     .,,,:tLt;.  .;;iii;;ii1ttti11;1t;;:,Li,,:, ... ....,:;:.                       
                     :;ii11;.   :t1i;:,.,::111;;t,,ii.;iit;::.        ..,,,,.                       
                     :i;:,.   ,iti,,.  .,:;111,t,.,;1ttfti;,.           ...                         
                    ,;:,   .,:ii:.      .;t1i,i; ,ifffft1i.      .                                  
                    ,:.,:;;;ii;,       .;t11,1i.,;;,..:i1,                                          
                    ,::i11ii;:,       ,;1tt1i; .:,.,:1f1,                                           
                    .:1t1i;,.        .:;1Lt1i..,,.:it1;. .                                          
                   .,;fti,            ,,:LL;:,,,;i;;:        .                                      
                  ,::tL1:    .        ,,,:ti:;::;i:.    .                                           
                .:;;1f;;:,. .,.      ..,,,.,. .:,,                                                  
               .:;;;;,,:i::,.::.        .:;.   ...                                               . .
               ,;:.,. ,:;i:::;1,         .:,  .,,,                                                  
              .;:  .   .,;i:::i:.              ,:,       ..            .  .                         
               .         .;, ,;;.              .,                            .                      
                           .  ,;,.                                           .                      
                               ,,.                                                         .        
                  .             .                      .                    ,              .        
                                         .          .                                               
                                                                             .                      
                                                                                                    
                                                                 .                                  
    .                                                            .                                  
   ..                                                                                               
                    .                                                                               
                                                                ..                    .             
                              .     .     .     .                                                   
                    .                                                                               
                    .                                          .                 .                  
                                                                                                    
                                                                                                    
`,y[24]=`                                                                                                    
                                      .          .                                              .   
                             .                                                                      
                                                                                                    
                                                                                                    
                                                    .                            .                  
                                              .. .                                                  
                                              ..                                                    
     .                                                           .                                  
                                                                                                    
                                                          .                                         
                                                                                                    
                                                                                      .      .      
                                                                                      ,      .      
                                                                               .                    
                                     ...,::;;;;ii;;;::,,..                                          
                                  . .:ii111111ii1ii111ttt1;;:::,,,,...      .                       
                  ..                ,ii11111111i;i11t11i111111111iii1i;:.                    .      
                                    ,ii1i11ttt1i;itt1iii;ii11t1111ftttft1;.                         
             .                     .:iiii11t1iiiiiii;;;;;;;i11;;ift1tfttff1:.      .                
                                .,:it1i1tttt11111111i;;;:::;;i111;;;iftttttti,                     .
                              .:1LCCCCCLCLLffttfftfftt1ttiiiiii11i;iiftittt1tti:..           ..     
                             .:1tC80CCCCCCCCCCCCCCCLftttft1111iiti:i1t1it1t1ii11i;:..               
                          .  ,;;;i1fG88GCLLttfCGGCCLft1tLLLCGCftt11t1i11tifftfLLttt;,.              
                            .,::::;i1fGGCLfLLLLLfLCCGGCCLLLC0GLfttff1i1i1tfftfLLtt1ti:,             
               .            .,,::::iii1tti1LC8Gtf11i1CGG0GCCLftffttttt1i111fffLft111f;:.            
                           ..,,,,,::i1tti:;;;ftt1i1itLLLCCLLCGCLLftffffftt11fLLfft11i;,.            
            .               ....,,,:1tf1;:;:;11fiitt1fLLfLfitCCGGGGGGGLLLLLfttfLft1i;,.    .        
                         .    ...,;ttf1;:,:::i1ttft:;1tfCLi1fLC11ttLCGCLLLfLf11tfti;,.              
                                .:111i,,,,,,::it1Gt,:,:tLii8Ltiiftit1tLLCLLLLtttfi:.                
                                :i11;.......:,;fif1,,,.;1;tG1,t0Ct1i:;ftfLCCCCfi,.         .        
                               ,iL1:..     .,,:f11i.,.:iifi::ifGfi:;;;ttLCCC0CLi..                  
                .            .,;fi.        ...,ti11:.;ftt;::1i;;ii;i:;;108@@8Lf:.                   
                            .:;t;.     .     .,t:;i;;LCCL;ii;::;1i:;;;i11ifCfi,.                    
                            .:1i.             :L:,;iCGGC1;;,,,,:;::;;;;;:;i1i,.                     
                    .      ,i11;.      .,:::,:fL1tfCGCCtii;,:,:;:,,,,::,,:1t;.                      
                    ..    :fCt;,    .,;;ii1tLfffLfftt11i;;;:,,::....,,,.,:11,        .              
                     .,;i1LL1:.   ,:;ii;;;iitff11t;itii;it,,,:,.... ....,:;:.                       
                    ,ittt1;,    .;1ii;:,,:;itt1,t;.:t;i;tt:::,         .,,,,.                       
                    :t;..     .:ii:,... .,:i1L,1; ,,ii1fti;:.           ...                         
                   .;;      .:;i:.       ,i1t:;i .;tLCLLt;,      .                                  
                   ,;. .:::;iii,       .,1t1,;1,.;i;:,;i1,                                          
                   ,:,:111ii;:,       .:1ftii1..::,..,1f:                                           
                   .:;tt1i;,          :;tLti1..,,..,;tf: .                                          
                  . ,1Lfi,            ,:;CL::,,,:;i;i:.      .                                      
                  .,,fL;              .,,:fi:;,::ii:.   .                                           
                .,:;11i:.   .,       ..,,,,,   ::,,     .                                           
               .:;ii;::i,  ..:,         .,;,    ,.                                               . .
               .;;,. ,:;;, ,,ii.          ,,    ,,.                                                 
              .;;. .  .:i1. :;1,.               ,:.      ..            .                            
              ..        .;, .:i:.               ..       .             .     .                      
                          .  .;;,                                            .                      
                              .:.                                                                   
                  .             .                      .                    .              .        
                                         .          .                                               
                                                                             .                      
                                                                                                    
                                                                                                    
                                                                 .                                  
   ..                                                                                               
                    .                   .                                                           
                                                                                      .             
                              .     .     .     .                                                   
                                                          .                                         
                    .                                          .                 .                  
                                                                                 .                  
                                                                                                    
`,y[25]=`                                                                                                    
                                      .          .                                                  
                             .                                                                      
                                                                                                    
                                                                                                    
                                                    .                            .                  
                                              .. .                                                  
                                              ..                                                    
     .                                                           .                                  
                                                                                                    
                                                          .                                         
                                                                                                    
                                                                                      .      .      
                                                                                      .      .      
                                                                               .                    
                                        ..,,:::::::,,....                                           
                                  . .,:;i1111ii111i111111;::,,,,.....       ..                      
                  ..                .;1tttttt11i;;itft11tt111i11iiiiii;,.                           
                                    .i1111ttttii;itftiii;111tt111tt1tttt1:.                         
             .                     .:iiii11tt1iiiii;;;;:;;iit1ii1tt1tfftffi,.      .                
                                .,:itt11ttttt1111111iii;;;:;i1111;;;;1fftfft:.                     .
                              .:1LCCCCCCCLLfftfftttttt1ttiiii1i11;;i;ttt111tti:.             ..     
                             .:1tC80CCCCCCCCCGCCCCCLft1tLt111111t1:;11tii1ti;iii;,.                 
                          .  ,;;;i1fC080CCLfttLGGGCLft1tffLLGCftt11t1i1i1ittttfft1;,.               
                            .:::::;i1tCGGCffLfLLffCCGGCCLLfLGGLfttff111i11tLLLCLftti:,.             
               .            .,:,,::;ii111iitC8Gt1i1iifCCGGGCLftttttttt1iii1LCffft11Li:.             
                           ..,,,,,,:i111;:;;:ttfti11tffLLLfLCGCCCftffffftt11fLLfft11i:.             
            .               ....,,.,it1i;::::11tii1t1tLLfLLitCCGCGGG0GLLLLLtt1fLftii:.     .        
                         .    ...,:1t1i;:,:,:1tt1t;;i1fLLC1ifCL11t1LCCCLLLfLt11tf1i:.               
                                .:i1;;,,,,,,,i1ifCi::,itL1;8L1;1Lfi1itLLLCLLLfttt;,                 
                                ,;ii:.......,:fitf;:,,,i1itCi:C8Cfi;:1ftfLCCGCfi..         .        
                               .;f1:.     ..,,t1;t:.,,,i1t;,;1LCt;:;;1ttLCCC0CL;..                  
                .            .,;f1.         ..i1:ti,.,tffi:;1i;;ii;;;;;108@@0Lf:.                   
                             :;ti.           .;1,ii;:1GCCiii;::;i;:;;;i11iLCfi,.                    
                            .:11.            .if,:;;tGGCf;;,,,:;;::;;;;;:;iti,.                     
                    .     .,;i1;.       .,,,,:Lti1tLGGCLi;,,:,:i;,,,,::,,;1t;.                      
                    .    .:LL1;.     ,:;ii1tffttCfffftti;;;:,,;:....,,,,,:11,        .              
                    .;ii1tLL1:.   .,;ii;;;ii1ttt1tiiti;;1;:,,::.........,:;;,                       
                    ifftt1;,.   .:1ii;::::;ittt,11,,i1;1L;,::,..       .,,,,.                       
                   .1i,.       ,;i:,,,.. .,;ifi;1...:ii1t1i:,           ....                        
                   :i.      .,;i;,.      .:1t1:1,.:itLLCt;:.     .                                  
                  .;,  .,::;i1i,.       .it1::t:.,111i11i.                                          
                 .,:, ,i1111i:,       .,1ff;;1,.,::...;f;.                                          
                  .:::tft1;,.         ,;LCfi1,.,,,..,iL1..                                          
                  ..:iLf1,            ,:1GL;:,,,,:;i;1:      .                                      
                  ..:tf:              .,,;L;:;,::ii;,.  .                                           
                 ,::i1:     ..       . .,,:,   ,;::.                                                
                :;;i;:;,   .,:,         .,;:    .,.                                              . .
               .:;:.,::;,  ,:i;.          .,    .,.                                                 
             ..;;. . .:i1. .:ii,.                :,       .            .  .                         
              .,       ,;: .,;;,,                ,       .             .     .                      
                         .  .,i:.                                            .                      
                              ::                                                                    
                  .                                                         .              .        
                                         .          .                                               
                                                                             .                      
                                                                                                    
                                                                                                    
                                                                 .                                  
   ..                                                                                               
                                        .                                                           
                                                                                      .             
                              .                 .                                                   
                                                          .                                         
                    .                                                            .                  
                                                                                                    
                                                                                                    
`,y[26]=`                                                 .                                                  
                                      .          .                                                  
            .                .                                                                      
                                                                                                    
                                                                                                    
                                                    .                            .                  
                                              .. .                                                  
                                              ..                                                    
     .                                                           .                                  
                                                                                                    
                                                          .                                         
                                                                                                    
                                                                                      .      .      
                                                                                      .             
                                                                               .                    
                                          ...........                                               
                                  .  .,,:;;;i;iiiiii;ii;;:,........         ..                      
                  ..                .,;itt111iii11i1fftft11iii1iiiiiii;,                            
                                    .;tttttt111ii111t1i111111111tt1ttffti.                          
             .                     .,iiii11ttt1ii1ii;;;;;ii1t11i1t11ffttf1,..      .                
                                .,:ift11ttttt1111t11iiii;;:;i1t1;;;i;1ffttt:.                      .
                              .:1LCGCCCCCLLLfftfttttt111tiii11it1iii;111tttfi,.              ..     
                             .:1tC00GCCCLCCCCGCCCGCLft11f111111tti;i111iit1i11;,..                  
                          .  ,;i;i1fC080GCLLfffCGGCCft1tffLfCLftt11ti;ii;it111t1i:,.                
                            .:::::;i1tLG0GLLfffLftCCCGCCLLLLGGftttfft11iii1iLCCfft::,               
               .            .,::,::;1ii1t1i1L00fi;11itLCGGGCLLtttttttt1iiiitLCLffLL;:.              
                           ..,,,,,,:;ii1i;;;:tt1t;i1tffLLLfLCCCCCffCLffftt1tttffttfi,.              
            .               ...,,,,,;11i;::::11fiii1tffLLLL11LCCCGG00GLLLLLtt1tLf11;.      .        
                         .    ....,;11i;:,:,i1tti1;,i1tLC0fifCti111fLCCLLLff111tf1;.                
                                 ,;1i;:,,,,,;tttff:,;;1tCt;0Li;tLfii1fLLLCCLLttt1:.                 
                                ,:ii;,.....,,1i1tf,,:,,1titf;i08L1;;iLttfLCCGCf;..         .        
                               .:t1:.     ...i1;;1,,,,,i1t;,;tLfi;;;1t1tLCCC0LL:,.                  
                .            .,:tt,        ..:t:;t;..,iLf1;iii;;ii;;i;it08@@0Lt,.                   
                             ::11.           .1;,1i;;1CGCtii;::;i;:;;;it1iLCf;..                    
                             ,i1.            .11.:i;if0GC1;,.,:;i::;:;;;:;iti,                      
                    .      ,;i1;.       .....;L1iitfL0GC1;:::,:i;,,,,:::,;1t;.                      
                    ..  ..;LL1i,     .,:;i111Lt1LLfLLffi;;::,,i:,...,,,,,:11:        .              
                   .;111tfCCt;.   .,:;ii;;iiittft1t1i1i;;;:,,;:.........,:;;,                       
                   ,fLftt1;,.    ,iii;;;::;i11t:;f;,;i1L1:,,::..       ..,,,.                       
                   ;t;..       ,;i;::::,..,:itt,t:.,,;;fti;;,.          ....                        
                  .i:       .,;i;,..      :i1t:1: ,;itfLti:.     .                                  
                  ::.  .,:;;i11:.       .itti:i;.,itftft;,.                                         
                 ,;,. .;11t11;,.      .,1ff;:1;.,:;,.,;f:.                                          
                 .::..iLffi,.         .;LCf;1: ,,,,..,ft..                                          
                  ,::;LL1:            .;L0t::..,,::;;;i,     .                                      
                  .,:1t:.             .::i1,;;,,:;ii;,. .                                           
                 .,,;1,              . .,,;, . .:;;,.   .                                           
                ,;;i;;,   ...,.         ..::.   .:,                                              . .
               .:;:,:::,. .::;:.           ..    ,,.                                                
             ..;;,  ,:i1,  ,:i;,                 ,:.                   .  .                         
              .,.    .,i:  .,;;:.                ..                    .     .                      
                        .   .;i,.                                            .                      
                             .;.                                                                    
                  .                                                         .              .        
                                         .          .                                               
                                                                             .                      
                                                                                                    
                                                                                                    
                                                                 .                                  
   ..                                                                                               
                                        .                                                           
                                                                                      .             
                              .                                 .                                   
                                                                                                    
                    .                                          .                 .                  
                                                                                  .                 
                                                                                                    
`,y[27]=`                                                                                                    
                                      .          .                                                  
                             .                                                                      
                                                                                                    
                                                                                                    
                                                    .                            .                  
                                              .. .                                                  
                                              ..                                                    
     .                                                           .                                  
                                                                                                    
                                                          .                                         
                                                                                                    
                                                                                      .      .      
                                                                                      .             
                                                                                                    
                                                                                                    
                                  .  .....,,,::::,,,,,,,..........          ..                      
                  ..                 .,:;;;i11iii1t1tttt1iii;i;i;iiii;:.                            
                                     .:11ii11ii11t11t11111iiii1iiii1tff1:.                          
             .                      .:ii;i11ttt111i1i;;;ii1t111i111tt1ttt:.        .                
                                .,:itt11tttttt11ttt11iii;;;ii1t111111ffttt:.                       .
                              .:1LCGCCCCCLLLfffftttt1111t1ii111tiiiiitttt1f;,.               ..     
                             .:1tC00GGCCLCCCCGGGCGCLft11f1111t1fti;i11i1t1iti:.. .                  
                             ,;iii1fC080GCLLLffCGGGCLf1tffftfffft11ti;iii1;i1i;,,.                  
                            .::;::;ittfC0GGCfffLf1CCCCCCLffLCCttttff11i;i1;1fft1:,.                 
               .            ,,:::::;iii11111tG8Li:1ti1LCGGCCCCttt11ttt1iii11fLtLL;,,                
                           ..,,,,,,:;ii1i;;;;1fi;;;itffLLLffCCCCLffGfffttt1t11tLft:,                
            .               ....,,.,:iii;::::ii1iiiifLCCCLLttLCCLCG0GCCLLLLt111tft,.       .        
                         .    ....,:i1i;:,,:itfti1i:;tLCC8L1fC1it11fLCCLLLftii1ff:..                
                                 ,:11i;,,,,,1ffttt,,,;ttLf1Cf;iLCt;itLLLLCCLfff1,..                 
                                .:i1i:.....,it1if1,,,,iff1tt:t8Gt;;;LLtffLCCGCf,..         .        
                               .,iti,    ...:ti:1i.,,,,t1t;,;tti;;;;f1ttCCCC0ff,,.                  
                .             ,:1t;.       ..1i,i1:.,:iLLt;iii;iii;i;;iL88@@0f1..                   
                             ,:i1,           :1,:1;:i1fGCfii:,,;i;:;;i1t1iLGf;..                    
                             ,if,           .,t;.;i;i1GGCfi:.,:ii::;:;;;:iiti,.                     
                    .      .:i1i.         ...;Li;ifitGGCL;:::,:i;,,,,:::,;1t;.                      
                    ... ..iLf1;,      .,;i1iiff1tLtfCLfti:;:,:i:,...,,,,,:11:        .              
                   ,itftfLGCt;.    .,;iiiiiii1tfLtt1iii;;;:,,i;.........,:;;,                       
                   :CCLftt1:.    .:i;i;::::;i1t1;ti;;if1:,,,::..       ..,:,.                       
                  .it:..       .:;i::;;:,..,iff,11.,i:1f:;;;,.           ...                        
                  :i.        .:i;:,,,..   ,;1f;;i .,;ifL11;,     .                                  
                 ,i,    .,::;1t;.       .;1ft:;i..;tLLL1;,                                          
                .;:.  .:11t111:.      .,1ffi:1i..:i;::11,                                           
                .::, .:fLLt;,.        .:LLt;1; .,,,..:Lf..                                          
                 .:,.:fL1;.           .;CG1::..,,,::;:i:     .                                      
                 .,::if;.             ,:;ti,;;,.::;11;, .                                           
                 ..:ii,              ..,,:;,.. ..;i;:.  .                                           
                ,;;:i,    ...,.         ..,;,    ,:.                                             . .
               .:;;;::..  .::;,.            .    .,.                                                
             ..;;,.,iii:.  ,:;,.                 .:.                   .                            
              ,,.   ,;1:   .,i::.                 ,      .             .     .                      
                      ..    .i:.                                             .                      
                             :,                                                                     
                  .                                                         .              .        
                                         .          .                                               
                                                                                                    
                                                                                                    
                                                                                                    
                                                                 .                                  
   ..                                                                                               
                                        .                                                           
                                                                                      .             
                              .                                 .                                   
                                                .                                                   
                                                                                 .                  
                                                                                 .                  
                                                                                                    
`,y[28]=`                                                                                                    
                                                 .                                                  
                             .                                                                      
                                                                                                    
                                                                                                    
                                                                                                    
                                              .  .                                                  
                                              .                                                     
     .                                                           .                                  
                                                                                                    
                                                          .                                         
                                                                                                    
                                                                                      .      .      
                                                                                      ..            
                                                                                                    
                                                                                                    
                                  .       ..........                        ..                      
                  ..                  .,,.,,,,,,,,,,,,,::::::::;;i;::,..                            
                                       ,,.,,,:;;:;;i111t111i111111i1111:.                           
                                     .,:::;itft11ffff1111ii111111ii11111:.         .                
                                 ..:i1111ttttt111t1t1ii;;11;i1111111t1i1i,.                        .
                              .:ifLCCCGCCLfLfffftft1111iiiii1iiiiiiii1111:,.                 ..     
                             .:tfC88GGGGCCCCCCGGCCLft11t11111fC1;;;iiit11i,:,.   .                  
                             :iii1tfCG880GCLLLCGGGGCLt1t111tL8Giii11iii1;i:,,,,.                    
                            .:;;;;;ittfLG0GGCLtt1fGLCGGCff1tLLtt11t1ii;iiii:,::,.                   
                            ,::::::;iii111tfttGC;1tftttLGCCCLtt111tt1ii1iit1:,,,,.                  
                           .,,,,,,,::;;iii;;;iLt:;i11tfLCftLCGGCLLCLftttttf1i,,,,..                 
            .              ....,,,.,,;;ii;:::;i:;::iL00GCCffLCLfCCGGCLLfff1i1;.....        .        
                    .    .    .....::i1;;:,::i;;;;;i1fCC08GLLt;ffitfCCCCLf11f;.....                 
                                 .::11i;:.,:ii;;1i,:11ttifCfi1CC1;fCCffCCCCLC:....                  
                                .::i1i;....,iii1t:.,;i1f1tt:;CL;;itLftffLCCGC;...          .        
                                ,:i1;,   ...;i:ii.,,.i1tffi:ii;;;it11tfCGCC8Ct,..                   
                .             .:;1i,.      .;;,:i,..:;1LCf;ii;:i1i;;;if@88@8Ci,.                    
                             ,:;1;.       ..:1,,1;:iii1GGfii:,:ii::iiiff1tGC1,.                     
                             .;1:        ....1i.;i;ii;f0CLi;,:;1i::;:;;;;i1f:,                      
                    .      .:;11.     ......,f1,:iiiit0CC1:,,,;i:,,,,::::i1t:.                      
                    .....,itfti,     ..,,:;;iLt11ttfLGLfi::,,:i:,...,,,,,;11,        .              
                   :ifLLLCGCfi,    .,:;111iiiit1ttfft1i;::,,;i:.. .......:;;,                       
                  .iGLLfff1;,.    ,;iii;:::::;itt111tt1i:,,,::.       . .,:,.                       
                 . i1:,..      .,;ii;;;;;:,,:1t;:ft;1f;:,:;:,.           ...                        
                 ,::         .:iii;;;;;:. .:;tt,fi:;1G;;ii;,.    .                                  
                ,i;.    .,,,:1ft;:,,.    ,itft:1;.;i1L11;,.                                         
               .;;,    ,;1tffft:..     ,i1tf1i1:.,;11t1:,                                           
               ,:,,.  ,;fLf1;,.       .ift1;i1, ,::,:tf:.                                           
               ::,,, .ifti:,.         .iLf:::. .,::;;i1,     .                                      
               .,:.,:;ti,..           .,1L:,::. .::;tt;..                                           
               ..,::;i:.. .          . .:ii;::.. ,;i1;. .                                           
               .:::i;.    .....         ..,;:    .;:..                                           .  
               .;i:;,...  ,:::.                   ,,.                                               
             .,;;:;i;:,.  .,::,.                  ,:.                  .                            
             .,:. ,ii:,    .;:,,                  ..                   .     .                      
                    ..     .;,.                                              .                      
                            ,.                                                                      
                  .                                                         .              .        
                                                    .                                               
                                                                                                    
                                                                                                    
                                                                                                    
                                                                 .                                  
   .                                                                                                
                                        .                                                           
                                                                                      .             
                              .                                 .                                   
                                                .                                                   
                    .                                          .                 .                  
                                                                                                    
                                                                                                    
`,y[29]=`                                                                                                    
                                 .               .                                                  
                             .                                                                      
                                                                                                    
                                                    .                                               
                                              .     .                                               
                                              .  .                                                  
                                              .                                                     
                                                                 .                                  
                                                                                                    
                                                          .                                         
                                                                                                    
                                                                                      .      .      
                                                                                      .             
                                                                                                    
                                                                                                    
                                  .                                         ..                      
                  .                           ....    ..,,,,,,:::;:,,.                              
                                           ........,,:i111i;;;;iiiiiiti,.                           
                                      ....,,,:;;;;itf1tf1111iiiiiiiit11i.          .                
                                   .,:;;;ii1tff11ffff1ii11iii1tt11111i;1,.                          
                               ,;itLLLCCLfLLffttfL1111iiiii;;iiiiii1t1t1:.                    .     
                             .:tLC8@80GGGCCCCCGCCLLt1111i1111i;;;;;iit11;..                         
                             ,i1111fLC0800CLLLCG00GCft1ti111fL1iiit1ii1ii,,.                        
                            .;;;;;;itttfG080GCLfttGCCCGCfti1ttt1itf1ii1ii;,,.                       
                           .,::::::;i1ii1i1tLtff;tfttttLGGCLLft11Lft1ii1i1:,,.                      
                           .,,,,,,,:;;;;;iii;;f1:1111itLCLtLCGCCCCCft111t1i,,.....                  
            .              ....,,,,,,::ii;;;,;i::::;L000GCftCLtLCCGGCLf11i1:.......        .        
                    .    .    .....,,:ii;:,:,;;;;;;1fffL08GLLi1CtifLCCCLt1L;......                  
                                  ,:;1i;:,,,;i;;i;;ii11;;tGf;LCt;1LCffLGGCCt.....                   
                                 .,:1i1:...,;iii1:.;1ift;fL;1Ci:;1fftffLCLGC;...           .        
                                .,;iii, ....;i;1i.,,;i1tLCi;i;;;;1t1tfLGGG80f,. .                   
                              .,:i1;:.     .:;,;;..,;iifGLii;::i1i:;i1080@@G1,.                     
                             .::ii,   .   ..:i.:i::ii;iCGLi;:,;i;;:i;1ft1fCL;,                      
                             .,i;.       ...,t:,i;iii;t0CCi;::;1;::::;;;iitt:.                      
                    .      .,:11.     ......:fi.;;i1iiGGCt::,,ii,,,,,;;::it1,.                      
                    .....,;1fti,     ...,,::1fti1ttttCGf1::,,;1,....,,,.:;11,        .              
                   :itfLLCCLfi.    ..,;11111ii1t1ttttt1;::,,;i:..   .....:;;,                       
                  .1GCLLLf1i,.    .:ii1i::::::;1ft11tt1i;,,,;:.      .. .,,:.                       
                  .tt:,,...    .,:i1i;;;;;::;i11:ttit1i,.,::,.           ...                        
                .:i:         .,;i11iiii;:, .:1t,;GL:t;::;i;,.    .                                  
               .i1.      ...,;ff1;;;:,.  .:itt:;tif:fi;1i:.                                         
               :1.     .,:itfLL1:..    ,:itLt;;i,.;iffi;.                                           
              .ii.    .,ifLLf;,.      .;t1ti;1; .,:;tL;, .                                          
              :;;,.   :1fti:.         .iLf;:;:  ,::;i11.     .                                      
              ,,:::..,i1:,..           ,tL:,,,.  ,:;i1i...                                          
              .,,::::;;.  ...           :1;:;;,.  :iti....                                          
               ::;ii;.    ....          .,:;;,    :;,.                                           . .
               ,;;;:.  .  ::::.                   ,,..                                              
             .,;;ii,   .  .,:,.                   .:,                  .                            
             .::.,1:      .:: ..                   ,.                  .     .                      
                  ..       ::                                                .                      
                           .,                                                                       
                                                                            .              .        
                                                    .                                               
                                                                                                    
                                                                                                    
                                                                                                    
                                                                 .                                  
   .                                                                                                
                                        .                                                           
                                                                                                    
                              .                                                                     
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
`,y[30]=`                                                                                                    
                                 .               .                                                  
                             .                                                                      
                                                                                                    
                                                    .                                               
                                              .     .                                               
                                              .  .                                                  
                                              .                                                     
                                                                 .                                  
                                                                                                    
                                                          .                                         
                                                                                                    
                                                                                      .      .      
                                                                                      ..            
                                                                                                    
                                                                                                    
                                  .                                         ..                      
                  .                                    ..,,,,,:::::,,.                              
                                             ........,:i;i;:;::;;;;;;1;.                            
                                         .......,,,;ii1tiii;;;;;;;ii1t1;.          .                
                                    .,,,,,,:::;;ii1ff11tt1ii1tt1111i1i11.                           
                                .:;i1ttftttffLfttLfff1111i;;;1tt111ttfi1,.                    .     
                              .;fCG88800GCCCCLCLCLtt11i1i11i;ii;;;;i1tii..                          
                             .;tfttfLLG8800CCLCG0GCLfttii11tt1iiiiiiiiii...                         
                            .:;1;;;i11ttC0880GCLLfCGGGGLt1i1ft111ft1i1ii,,.                         
                            ,::;:::;i1iii11tLGLti1LftffLGCLffft1fCf1111i;.,.                        
                           .,:::,,,,:;;;;;iii;iiif111i1LCCfLGGCLCCLt11t1i,......                    
            .              ...,,,.,.,,,:ii;;::;;;:::1C000GLfGffCCCGCft1it;.......          .        
                    .    .     .....,,;ii:::,:;;;;;i1ttfG80LL1LL1tLCCCftL1.,.....                   
                                  .::i1i;:,,,i;;;;ii1t;,:1Cft0Li;tCLfCGGGC:.....                    
                                 .,,i111,...:ii;i:i1itf;:tLiff:;;ffffLLLC0L:,..            .        
                                 .:iiii, ...:i;1i.,1iitif0t;i;;;it11ffG0G@8t,,  .                   
                               .,;1i:,     .,;:i:..:ii;t0Cii;:;i1i;;if808@0t:,                      
                              ,:;i:.        ,i,:;,:ii;;CGLi;::;;:;;i;1111fLi,.                      
                             .,;;.        ..,1,,i;iii;i0GC1;::i1;::::;iii1fi,                       
                    .      .,;1i,      .....:f;.;:iiiiL0Cf::,,fi,,,,,:;:;iti,                       
                    .....,:1ff1,     . ..,,:1f1;1ttttL0Cf;:,,;1,....,:,,,:1i,        .              
                   ,itffLLCCfi,     ..:i11i11i1t11fLffti::,,;i,..   .....,:;,                       
                 ..1GCCCLfti:.    .,:i1i;:::::;itt1111i;;,,:;:.        ...,:.                       
                 .,ffi:,,..     .:;11i;::;;::ii111t1tti:.,::,.            ..                        
                ,i1;.         .:i11iiiiii;,.,it;,Ct;;,:,:;;,.    .                                  
               ,tt,.      ...,1f1i;ii;:,. .:1fi.fC:1;:;ii:.                                         
             ..it.      ..:;1fLti:,..  .,;1tfi:1i:iff11;.                                           
             ,;1:.     .:ifLL1:,.     .:111t;ii, ,;iLi,.                                            
            .;ii:.    .;1t1;,          iLfi:;;. .:,:iti.     .                                      
            .:;i;:.  .;1i,...          ,fC:,,.   .:;ii;.                                            
             .,:;:,,:;;,. ...        .  ,t;::;:.  ,;i:. .                                           
              ,:;i;;;,.   ,,..           ,:;1;.   .;:                                               
              .::;i;.  .  ::;,.            ...    .:..                                              
             .:;1i:.   .  .,;.                    .,,.                 .                            
             ,::,i:       .:,                      ,.                  .     .                      
                  .       .;,                                                .                      
                           ,.                                                                       
                                                                            .              .        
                                                    .                                               
                                                                                                    
                                                                                                    
                                                                                                    
                                                                 .                                  
   .                                                                                                
                                        .                                                           
                   .                                                                                
                              .                                                                     
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
`,y[31]=`                                                                                                    
                                 .                                                                  
                             .                                                                      
                                                                                                    
                                                    .                                               
                                              .                                                     
                                              .  .                                                  
                                              .                                                     
                                                                 .                                  
                                                                                                    
                                                          .                                         
                                                                                                    
                                                                                      .             
                                                                                      ..            
                                                                                                    
                                                                                                    
                                  .                                         ..                      
                  .                                   ..,:,,:,::,:;:,..                             
                                                 . ...::;1;;;:::;fi:;1i,                            
                                             ......,:;1ti;:::::11;;111i;.          .                
                                          ...,,,,:;iii11111iittLf1ttCLtt,                           
                                  .,,:;:;;iiiii1111fft1t1i;iifLt111tLLLf,.                    .     
                               .:1fLG00GGCCCCCLLLLfLf11iiii;i111ii1tLfLi..                          
                             .:ifLffLCCG8800CCCGGCLf11iii1t11iii;iiii1f,.                           
                            .:;1t;i;i1ittG888GGGGCCCCCLft11ft1ii1fti1;i,..                          
                            ,:;i;:;:;iiiii1tLC0L1iLLLCLCCCLfff1tLft11ii,..                          
                           .,,:::::,::::;;ii111iiLttt11fCCLCGCCLCLt111i;.....                       
            .              ...,,,,...,,,;iii;::;ii:;it088GLfCfLCCCCft1ti.......                     
                    .    .     .....,,:ii;:::,;;;::;;ittC88LffCftfCGCfCt.,.....                     
                                  .,:;11;:,,,:i;;;i1t;,,:1LtC0t;tLLLCGGGi.,...                      
                                  ,:;1i1;,..,;i;;;;;ifi,:1t1fi:;1LtCCLLG01,...                      
                                 .,;i;i;.....;;i;:ii;tt:tCtii;;i1t1tfG88@8i,,   .                   
                               ..,ii;:.    ..:;1:.,iii:iGC1;;:;i;;i;1CG08G1:,                       
                              .,;i;,.       .;:::.:i;::L0Ci;:;;;:;i;;1111Lt,.                       
                              .:;,          .;,:;:;;;;;G0C1:::f1:::::;i;;ft,.                       
                           .,;i;,         ..:1:,;:i1i1t8GL;:,;L:.,,,::::;1t:.                       
                    .....,:iffi,.        ..,1ti:11ffffG0Li:,,ii.....,,,,::i;.        .              
                   ,;111tfLLfi.      .,:iiii1i1tt1tLCLf1;:,,;i,.   ......,:;,                       
                  .iCCCLLf1i:.     .:;11i;:::::;1tt1ii;;;:,:;,.         ...,.                       
                 ..fL1;:,..      ,;1t1;;::;::;;1t11ttf1;,,::,.             .                        
                ,i1i,          ,;i11i;;;ii;,.;1iiCLi,,:,,;;,.    .                                  
               :t1,          .:11i;;ii;;,. .;tt.fCi;.,:;;:.                                         
              ,1i.        .,:iff1;::,. ..,;ift,;f11f:11;,                                           
            .:1t,.      .,ifCfi:,.     ,;11t1:ii.:tft;,.                                            
            ,i1i,.     ,;111i.         :Lt1;:i: .,,;11i,     .                                      
            ,;i;:,    ,i;;,,.         .,LG;,:,   .:;i11,.                                           
            .::i;, .,:;:. ...           ,Li,:::,  .;;,,..                                           
             ,:;;::;;:.   ,,..           ,:;ii;.   :;.                                              
              ,:;;i;,  .  ::;,.           ..,,     ,:                                               
             .:iii,.   .  .::.                     ,,,.                                             
            .,:;i;.       .:.                      .,                  .     .                      
                 .        ,;                                                 .                      
                          .,                                                                        
                                                                            .              .        
                                                    .  .                                            
                                                                                                    
                                                                                                    
                                                                                                    
                                                                 .                                  
   .                                                                                                
                                        .                                                           
                   .                                                                                
                              .                                 .                                   
                                                                                                    
                                                                                                    
                                                                                   .                
                                                                    .                               
`,y[32]=`                                                                                                    
                                 .                                                                  
                             .                                                                      
                                                                                                    
                                                    .                                               
                                              .                                                     
                                              .  .                                                  
                                              .                                                     
                                                                 .                                  
                                                                                                    
                                                          .                                         
                                                                                                    
                                                                         .            .             
                                                                                      ..            
                                                                                                    
                                                                                                    
                                  .                                         ..                      
                  .                                   .,;;:::,::,;;:,.                              
                                                     ,:;i1:::::::ii:;1i,.                           
                                                ....:;1t1i;;;;;iiii1i11;,          ..               
                                             .....,;i;it111i1ttfLLCCLft1;.                          
                                      ....,,,,,::;i11i1t11ii1ff11ttLCLLLi.                    .     
                                 .:i1tfLfffffffffffCLtttiiii1Lf1111fCLLt,.                          
                              .:;tLLLCGG0080GGCCGGLLf1ii111ittiiii11tLf,.                           
                             ,;ift1i111itfG880GGGGGCLLft1itt1ii111iiif;..                           
                            .:;ii;:;:;i;iittLC00L1fLLLCCCLffft1fLf11i1,...                          
                           .,,:;::,:,:::;;iititt;1LfLt1tLGCCCCLLLf11i1,....                         
           ..              ...,,,,....,,:;i1i;;;;1i;iiL800CfCLCCCCf1t1,......                       
                    .    .     .  ...,,:ii;::,::;:::::ttL00ffCCffLGCGL,,.....                       
                                   .::i1i::,,,;;;;;ii,,,:iftGG1;LLCGGGt,....                        
                                . .::11i;:,..:;;;;;iLi.::iftt;:;ffCGCG8L:.,.                        
                                  .:ii;i:....:;;;;i;ft::iCfi;:;i1f1LC8@@C,:,    .                   
                                ..:i;::.   . ,;1:,;ii:,:GCt;;:;;:;iitLGGG1:.                        
                              ..,ii,..       ,;:,.:i;:,t0C1::;;::;i;i1i1ff,.                        
                               ,;:           ,:,::;;;;if0Gt::iL;::::;;;i1f:                         
                            .,::,           .;:,::iii1tG0Ci:.ff,.,.,:::;:1i.                .       
                    ..   .,;tt;,          ..i1i:iifLffL0G1:,:t:.....,,.,,:i:.        .              
                   .:;;i1ttffi.       .,;iii1111f1tLLCCLi:,:;;..   ..  ...::.                       
                   :fLffft1i:. .   .,;it1i;::::;i111ii;;;,,:;,            .,.                       
                  .1L1;:,...  .  .:i11i;;::;:;;iii1ttt1i,,::,.                                      
                .iti,          .:i11ii;::;i:.ii;11ft;;;,,;;,     .                                  
               ,t1,           .i1ii;iiii;:..,i1;tGL,..,:;:.                                         
              .1i.          .:1fti;;;:,...,:1t::CLt:,;;;,                                           
            .:11.        ,:1LL11i;,.    ,;i1t::iiff1;i;.                                            
           .:it;.      .:;itt,         .1t1i:;i,.,;11ii:     .                                      
           .;ii;:.    .;:,,,,          .tGt,::.  ..:i1t:.                                           
            :;ii,   .,;;,..,.           ,L1,,,..  .:;:i..                                           
            ,;;i:,,:;;,.  ,...           ,;:i;i:.  ,;...                                            
             ,::;;i;:.   .::;,.           .,,::.   .;..                                             
             ,;iii:.   .  ,::.                     .:,,                                             
            .:;i1,        ,:                       .,.                 .                            
                .         ::                                                 .                      
                          ,.                                                                        
                                                                            .              .        
                                                    .                                               
                                                                                                    
                                                                                                    
                                                                                                    
                                                                 .                                  
   .                                                                                                
                                        .                                                           
                   .                                                                                
                                                                                                    
                              .                                                                     
                                                                                                    
                                                                                   .                
                                                                    .                               
`,y[33]=`                                                                                                    
                                 .                                                                  
                             .                                                                      
                                                                                                    
                                                    .                                               
                                              .     .                                               
                                              .  .                                                  
                                              .                                                     
                                                                                                    
                                                                                                    
                                                          .                                         
                                                                                                    
                                                                                      .             
                                                                                      ..            
                                                                                                    
                                                                                                    
                                  .                    .,......                                     
                  .                                 .:;i;::::::::;;;:,                              
                                                   .;i1i:,,,:;;;tfii;ii,.                           
                                                  .;1tLtii;;;;;if;:;i1fi:.                          
                                                 .;tft1ttttttffffftt1itii:                          
             .                                 ..:i1ii1111i11ftftffLLft1t1.                   .     
                                    ...,::::::;;ii1111f1iii1ff111t1fLLLff1.                         
                                .,,;itfLCGGGGCCLLLCCf1ii1itf111iit1fLfLLt,                          
                             ..,;i1fLftttfCC0@0CGGGCLt111fL1iiiiiiii1ffi.                           
                            ..,:;i1t1;iiiii1fCG00CLLLCCCfLft11tLL1i;1i,..                           
                     .      .,,:;i;:,::::;;i111fLtifLftfCGCCLLLLf1i1:....                           
           ..               ..,,:,.....,,:;i1i;;i,:111iC0GftCCCCLft1.....                           
                    .                .,,,;iii:,::;;,,:itLL1tfGLLGGL1,...                            
                                    ,::;1i:::,,,;i;i:,,::i1f0CifCCGf:,,.                            
                                   .,:i1i::,,.,:;ii;,,,::iLti:;tCG801.::,.                          
                                   .,i1ii:,...::;;;,,:,,;CC1:;ii1fCG0t:;;,      .                   
                                  .:ii;:,.   .,;;;;:,:,,f0L;;;;:;11ffCC;::.                         
                                .:i;:..       ,i;;;::,,,CCf:;i;:;;ii1iff;,.                         
                                :;,.         .:::;;::;iiLLL;;f;,.,::;;;1i,.                         
                             .,::.         ..,,,:;;i11ftCGL,if,...,,,:,;i;.                 .       
                    ..    .,;;:,.          ..;:,,;111t1tGC1,ii.. ......,:::.         .              
                   .,::;;;iii;.       ..,:;;i11itt11ft1LL1,;i:          ..,.                        
                   ,tftt11ii:. .    ,:;it11i;;:;1ii;ii11:,,;i,                                      
                  .iCti:,,..     .:;i111i;;,::;;;1ti;;i;:,,:,                                       
                .;t1:.         .:iii1i;;;;:::i;;;1LLLti:,::,     .                                  
               ,ii:            :iiii;;;::::,,f1;ifC1;,,,:;,                                         
              .i;.           .;ffi;;;;;;:,..:1iL1G1.,;:::.                                          
            ,i1;..       .,:1CCCfii;::,. .:;i;,1t1;:i;:, .                                          
           .11;,.       ,:itL1::::,.    .;i1:,:i::i;::i:..                                          
           ,i;,,.      ,;::;i,..        :tfi,:;, .:;ifLi,.                                          
           :;i:.    .,:;:;;;:.          ,tf:,,,.  .:it;,.                                           
           :;;i,..,:;i;;;:::,.           ,i,,,,,  .,:,,.                                            
           .::;::;;ii;:,..::;,.           .,,:;;,   :,,.                                            
            .;;i1i;:,... .,;:.              ....   .::,.                                            
           .,:11;.       .:,                       .,.                 .                            
           .....         ,:.                                                 .               .      
                         ,.                                                                         
                                                                            .              .        
                                                    .                                               
                                                                                                    
                                                                                                    
                                                                                                    
                                                                 .                                  
   .                                                                                                
                             .          .                                                           
                   .                                                                                
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                    .                               
`,y[34]=`                                                                                                    
                                 .                                                                  
                             .                                                                      
                                                                                                    
                                                    .                                               
                                              .                                                     
                                              .  .                                                  
                                              .                                                     
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                      .             
                                                                                      ..            
                                                                                                    
                                                                                                    
                                  .                  ..,,,,,.....                                   
                  .                                .;i;;::::;::::;;;:,.                             
                                                  ,;i1;:,,,,:;;i1ti;;ii:.                           
                                                 .;1fLt11;;:;;ii1::;11ti:.                          
                                                 ,1tt111ttttttttff1iiiiii:.                         
             .                                  .;ii;i1111111ftttfLLf1;iii;                   .     
                                         ....,,:;ii11tf1iiif0Ct11t1fLLf1iii.                        
                                     ,;1tLLLCLLLLLLft11i11fLft1i1f1tLLLLft,                         
                               ...,:ifLffLCGG88GGGCLLti1tGC1iiiii1i1fffft,                          
                            ..,,::itftiiii11fLG00GCCLCCLfLft111fL1;itt1;.                           
                            ..,,:;i1;,:::;;i1ttfLtftffffCCCCLLLLf1i;;:...                           
           ..                ...,,,,....,::i11i;i;,;tt1f0GffGCCCL1f;....                            
                    .                ....:;iii,:::;;,:;1LLitCGLCGCt:...                             
                                      .,;ii;::.::i;:::,::i1fGL1LCGLi...                             
                                      ,11i::,,.,;;;;:,,::;Lti:;fG00L.,.                             
                                     ,11i;:,..,:;;;:,,,,,LGt:;;itLLL1,.         .                   
                                   .;1i;;,.   ,:;;;,::,.iGLi;;;:i11tCL;.                            
                                 .;i;,,.      .:ii::::.,fLf1;i;:;;;1;tf;.                           
                                .i;,          .:;;;;::;itLC1it,..,,:;:11:                           
                             ..,:,            ,:::;i1tLttCG:11......,,:;;.                  .       
                    .      .:;;,.           .,,,,:i1itt;fC1,1:.. .  ...,,,.          .              
                    .,::;;;iii,        ..,:;;1i;1tt1ti;1Ct:;i,           ..                         
                  ..1Lft111i;, .    .:;i1111ii;;11iiiiit1::;i,                                      
                  .:CCt;,,,.. .  .,;i1tt1i;:,:;:;1ti;;;i:,,::                                       
                .;fti,         .:;i;11i;;::::;;;it1i1i1;,::,.    .                                  
               ,1t;.           ,ii;;::::::::,ti;1fCGt;:,:;,                                         
              ,1i.            ,1ti::;;;;;:,.,11f1LC:,;::;,                                          
           .,ii;..        .,;fCLt:;;;;;,.  ,;;;Ltt:.ii::..                                          
          .:f1:.        .,;tLC1:;i;:,.   .:ii,,:ii;:;:;;,.                                          
         ..;1:,.       .,;iii;.,,.      .iti,:;i,,ii;tGt,,.                                         
          .;i;.      .,:;i;ii..         .if;,::,  ,i1Lt.,..                                         
          ,11i,.  .,:i1t1i;;,,.          ,1:,,,. ..:;;:.                                            
           ;ii;..:i1tfti:,:::,.           .,,::;:.  ,,:.                                            
           .;iii1111i;,, .::,               .,,:,. .:::,                                            
            ,1t1i:,..    ,:.                       ,,.                 .                            
           .,.,         .;.                                                  .               .      
                        ,,                                                                          
                                                                            .              .        
                                                    .                                               
                                                                                                    
                                                                                                    
                                                                                                    
                                                                 .                                  
   .                                                                                                
                             .          .                                                           
                   .                                                                                
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                   .                
                                                                    .                               
`,y[35]=`                                                                                                    
                                 .                                                                  
                             .                                                                      
                                                                                                    
                                                    .                                               
                                              .                                                     
                                              .  .                                                  
                                              .                                                     
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                      .             
                                                                                      ..            
                                                                                                    
                                                                                                    
                                                   .,,,::,:,,.......                                
                  .                               :ii;;:::::;;:::;;;:,.                             
                                                 :i1i;;::;,,:;i;iti;;;i;.                           
                                                .;1fftt11i;;;;ii;;;;i111;.                          
                                                ,i1tt111t1111i1111i;;iiii;.                         
             .                                 .:;;ii11111111ttttfft1iii1i;.                  .     
                                          ...,,;;i1tt1f1ii1L0Ct1111tLf111ii;                        
                                      .;1tffLLLLLLftt11iii1ttt111f11LLLfff1:                        
                                 ...,ifLLGCGC00GGGCLf1i1Lfii;iiii111tLLfLf;                         
                             ...,,:;1ft1111tttG00GCCCCCLLCt1111tf1ii1tff1:                          
                     .       .,,,:;ii;::;;;i111tCtCLtLLLCCGCLLfft1i;i1i:.                           
           ..                 ..,,,,,..,,::;it1ii;::tttfC0LfCCCCft1;,..                             
                    .                ....,:ii1;::;:i::;ifLitGGCGGL1...                              
                                    ....,iii:;,,::i;::,;:iiL0LfLGCt,..                              
                                . .....:11;::,,,:;;;;:,::;ffi:iL0GG:..                              
                               .......;t1;;:..,,;;;::,,,,tGt:;;1ftCt,..         .                   
                             .......,i1ii:,.  .,:::,:,,,:CC1;;::i11LL;.                             
                            ......:ii;:,.     .,;;:::,.:iLft:;:,::iitfi.                            
                          .......;i:.         .:;;;::,;1iCLf1;...,,::i1;.                           
                        .....,,,:;.           .:,:;;itLfifCff;.....,,,:;,                   .       
                    ......,,:;;:,.           .,,.,;1iff;;LLi1,     ....,,.           .              
                  ..,:;;;;;iii:.         ..,:i1;itt1i;:;LLi;;.                                      
                ..:;1Lfft11i;:,.    .,:i1i111iii1tiiiii11;:ii,                                      
                .:;t00L1;::,,..  .,:;1ttf1i;::::;11;;::;,,,::.                                      
               .:1LCti,..      .:;;;i1i;;:::::;i;11;;;1i:::,.    .                                  
             ..:tft:....       :ii:;;:,:::::,i;;11i;;;:,:;:.                                        
         ....,:11:,...        ,i1i:::;::::,.,1i1111;:;:::,                                          
       ...,:;11i:,..       .:tLf1:,;;;;;,.  :;iL1ii.i1::,.                                          
      ...:;tCfi;,..      ,:1LLf;:;;;::,.  .:i:.;ii;,;:;;..                                          
     ...:;;ff1;,..      ,:;;;i,,;,..     ,11:,:;;;ii;iCt,..                                         
    ..,,::;1i;..      .,:::;1:..         :t1,::;, ,iitf:,..                                         
   ...,,,.;11i..   .,:;i11i1;,.          .i;,,..   :;i:..                                           
  ...,,,..:11i:..,;i1tLL1;;;:,.           .,,,,:.   ,,:,.                                           
  ........ ,11i;i1ffft1;.,::,              ..,:;;. ,;::,.                                           
 ......     :tt11i;:,,.  :,.                 ...   ,,..                .                            
 ..        .,:,.        ,:                                                   .               .      
                       .,                                                                           
                                                                            .              .        
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                 .                                  
   .                                                                                                
                             .          .                                                           
                   .                                                                                
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                   .                
                                                                    .                               
`,y[36]=`                                                                                                    
                                 .                                                                  
                             .                                                                      
                                                                                                    
                                                    .                                               
                                              .     .                                               
                                              .  .                                                  
                                              .                                                     
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                      ..            
                                                                                      ..            
                                                                                                    
                                                     ...... .                                       
                                                  ,:;;;;;::::,,....                                 
                  .                             .;ii;;;::::::;:::;;i;,.                             
                                               .;i1;;i;;;tiii;i;iii;;;ii,                           
            .                                  ,i1fttt111fi11;;ii;;:;ii1;,                          
                                               ,i1tt11111111iiiiii;:;1iiii,                         
             .                                .:;;ii1ttt1111111111t1iii1ii;,.                 .     
                                          ..,,;;itt1t1tt111L8Ct1111tti1i;iii:                       
                                      .,;1fLCCLLLfttt111ii1tftt11t1ifLfttf11i                       
                                  ...:1fLCCCCG0GGGCLf111t1iiiiiiitt11fLLLfti.                       
          .                     ..,,;tfttft111LGGGCCCCCCfLt11ii1t11t11ffffi.                        
                              ..,,:i1i;:;iii1iitftLLttffCCCCLftft1ii1ifti:                          
           ..                  ..,,,,..,::;;i11i1i;:i11tL0CfLLGLLL1i;;:,.                           
                    .               ....,,:;111::;::i:;iLC1tCCCGGLi,..                              
                                   ...,..:i1i;;,::;i:::;;i;L0LLCGC:..                               
                                .......,;1i;;,:,::i;;;:::;tCi:tGGG1..                               
                              ........,11i;:,.,::;;;;:,,,iGf:;itfLL:,.          .                   
                            .........:11i;:,. .,:::::,,,,fCt:::;i1CC1,.                             
                           ...,,..,;1i;:,.     ,:;:::,:::LLf;;,:::itf1.                             
                         ....,,..:1i:..        ,:;;;::;t;tCLt,...,,:;ii.                            
                    .  ....,,,,,:i:.           ::,;;;1ff:iLLt.. ....,,;:.                   .       
                   .,...,,,::;;;:.            .,,,;1ift:,tLti.    .  ..,.            .              
                 .,,::;;iiii1i;,.         ..,:i;;1t1ii,:iCfi;.                                      
                .,:;1fffftt1;::.    .,:iiiiiii1i1f1iiiiit1iii.                                      
               .,;;f00Gti;::,,.  .,::i1tff1i;;::i1i;i;:;,,,:;.                                      
             ..,;1L0L1;,.....  .:;;:it1i;;;;::i;;t1;i;;;,,,,.    .                                  
            ..,;fCLi,.....     :i;,;;:,,::::,:;111ii;;;,,::.                                        
        ....,,:tf;:,...       ,i1;,,,::::::,.ii111ii;i;:::.                                         
      ....,:;111;,,..      .,1ff1:,:;;;;:,  ,ii11ii;;1;:,.                                          
     ...,:;tCfi;:,..     .:iLLLi,,;;;;:,   .;;,;i;i,:;::.                                           
     ..,:;iCLt;:,..     .::::i;.;;:,.     :1;.,:;ii;:;t1,.                                          
    ..,::;it1i,..      .,,,,ii.,,        .1t;,;;;,:ii;t1,.                                          
   ..,,:::i11;..   . .,:;;;1i,.          .;1::,..  :;;;:.                                           
  ...,,,,,it1i,  .,:;i1fLt1i:,.           .;,,,,    ,::..                                           
 ...,,,...,1tt;,:ifftttt;::,,              ..,:;;, ,;::,.                                           
........   .itt1ttt1;:,..:.                 ..,,:, ,,.,                .                            
....       .,:,....    .:.                                                                   .      
                       ..                                                                           
                                                                            .              .        
                                                                                                    
                                                                                                    
                                                                                 .                  
                                                                                                    
                                                                 .                                  
   .                                                                 .                              
                             .          .                                                           
                   .                                                                                
                                                                                                    
                                          .                                                         
                                                                                                    
                                                               .                   .                
                                                                    .                               
`,y[37]=`                                                                                                    
                                 .                                                                  
                             .                                                                      
                                                                                                    
                                                    .                                               
                                              .     .                                               
                                              .  .                                                  
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                      .             
                                                                                      ..            
                                                                                                    
                                                  .,:::,,,...                                       
                                               .:;;iii;;;:::::,,,...                                
                  .                           .;11i;i;:::::::;;::;ii;:,                             
                                              ,ii1;;i1i;;;::::iiiii;;;ii:                           
            .                                 ,i1f11111i11;;;i;;;;;;;ii1i:                          
                                              :11ttt1tiiii1ii1iii;;;i1i;;i:.                        
             .                               .:;;;i1tttt1111i1iiii;iiii;iii:.                 .     
                                         ..,:;i1ttt1t11t11tG0Ct11i;11;;;iiiii:                      
                                      .:itLGGCLCLLftt1i1ii1fftt1tt1i1tii1ff1i1.                     
                                    .,ifffLLLG0CGGCLLt1tt1iiii111tf11tLftftt1;                      
          .                       ..:1ff1111i1LCCCLLCCGCffttiii1tttttitfLLft:.                      
                              ...,,:i1i;;iiii;;1f1LL11ffCCCCffttt11ttiitfti,                        
           ..                  ..,,::,,,,;;;;:i1ii;;;1i11CCLLLGLLf11i;11;,                          
                    .               ....,,::itt;;::,;;:;tGftLfLG0L1;::,.                            
                                   ...,,.,;if1::,;:i;:::;1;fCffLCL1,..                              
                                ........,ii1i::,:;;i;;:::;1G1ifCGGL,..                              
                              .........:11i;:,,,;:;;;;:,,;CL;;itfCL;,.                              
                             ........,;11i;:...,:;::::,,,1Cf;::;ifCt;,                              
                            .......,i1i;:,.    .:;;::::::1Lf1,,:::1ft;.                             
                          ...,,,.,;1i:..       .:;:;:;i1::CLf,..,,:;i1,                             
                        ...,,,,,,;i,           ,;,:;11ff,:LLt......:,::.                    .       
                   .....,,,,:;;;:,.           .:,,:11LL,;;ff;.   . .....             .              
                 ..,::::;;;i11;:.           ..:;:i11i1::1fL1:.                                      
                .,::ittfftt1i::,   ..,:;ii;;iiii1ff11iii1t1i;.                                      
               ..:;1G0Gf1i;:,,.  .:::;1tfft1i;;:i1;:;i;;,,:;i,                                      
              .,;1f0Cfi:,....  .:;::i1t1iii;::i:itii1;:;,,,,.    .                                  
             ..;tLL1:,....    .;i:,;i:,,,:::::;ii1;i::;,,::,                                        
         ....,:1fi:,...       ,i1:,,,::::::,.;i1ii;iii;,::,                                         
       ...,:;i11;,,..      .,1f1i:,,;;;;;,. ,ii;i1i1ii;;:.                                          
      ...,;1Lfi;,,..     .,;LLt;,,,;;i;:.   ;i:i1;i;:i:,                                            
     ...,;iCCt;:,,.     .::,,;;,,;;:,.    .;i: .:;i;,:;:.                                           
    ..,,:;it1i,,.       .,,.:i,.:,.       :t1..:;;;i;;;,,.                                          
   ...,,::111;..      .,,,:ii:..          :ti:;:,..:i;:,.                                           
  ...,,,,,1fti,   ..,,;it11i:,.           .;,,,.    ,:;,.                                           
  ..,,,,..:fft:..:i11tfft1;,.              .,,,:, .:;,;;..                                          
 .......  .,1tiitLLt11;,::.                 .:;;i;,,..,,                                            
 ....      .:;:,::,,.. ,:.                    .,,.                           .               .      
                      ..                                                                            
                                                                            .              .        
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                 .                                  
                                                                                                    
                             .          .                                                           
                   .                                                                                
                                                                                                    
                                          .                                                         
                                                                                                    
                                                               .                                    
                                                                                                    
`,y[38]=`                                                                                                    
                                 .                                                                  
                             .                                                                      
                                                                                                    
                                                    .                                               
                                              .                                                     
                                              .  .                                                  
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                      ..            
                                                                                      ..            
                                              .........                                             
                                           .,::;;11i;;:::,,..                                       
                                          .:;;ii1iii;;;::::::;::,,,..                            .  
                                          .;ii1iii;iit1::::;;;i;:;iiii:.                            
                                          .:ii1ii;i;i11ii;;i;;i;ii;;:;i1;.                          
            .                             .,;i1iii;iiii1i11i;ii;iiiii;111;,                         
                                           ,i1111ttt1ii;;;i1ii;iiiiii;;i;ii,                        
             .                           .,:;;ii1ttft1t1t11iiiiii1i;;i;i1i;i:,                .     
                                      .:itt1ttttttt1111ttfC0Cttiiii;;;i1;i1ii;;,                    
                                    .,;1fCGGGCCGCftt1iit11fLfttttt1iii1i;itf11t1,                   
                                   .,;i11tttC0LLGGCCLftt11ii1i1ttff1i11iiii111i1;                   
          .                       ..,i1i;i;;;tLfCffffCGCftft1i11tttttti1tt11ii11:                   
                              .....,;ii:::;;::;i1tGtittfCCCCft1tft1tt111fLftttt;.                   
           .       .          ..,,,::::,,:::::iii;i;;1;;;fLCLLCLt11tt1i;1fff1;,                     
                    .            .......,:,,;i1;;,,::;:;;tftt1fGLftt1;;;1i;,                        
                                      ...,,;11;,,,;;;:::;1;ttitLGGL1;;::,                           
                                       ..,;tt;,,,;:i;;;;:;iL1:fLLCLf1,.                             
                                     . .:iiti:..:;:;;;;::;fGi;1L08GGf...                            
                                      .;t1i;,. .::::;:,,::CCt:;ifLCL1,.                             
                                   .,;i1;;:.    :;;;::,,;;fLfi:::1Lt:;,                             
                               . .,i1i:,.       ,i::;;,ii:1Gff:,,:it;:,                             
                           ......,ii,.         .;:;1ti1t,:iCLf,.,,,:;:,                     .       
                   .........,:::::,           .;;tfffLC:;:tCLi.......,.              .              
                 .......,,::;i;;,.           .:;tC1ii1;i;,CC1.    .                                 
                 ...,:;ii111i;:,   .,,:ii;:::;iitffff111itL1:.                                      
                 .,:1LLtii;:,,...,:,::;tLftt11i;;11iiiii;;i;i,                                      
               .,:iLGL1:,...  .,;:.,;1ttttt1ii:if1;;;;i;,,,,:.   .                                  
               ,;tLt;,..     .:;i..;i;::;;;;;;:itiiii:;:,,:,.                                       
              ,;t1:,..       ,:i;,,,.,::::;,:;iiii;;,:;.,::.                                        
          .,:;i1i,,..       :1t;,,..:;;;;,. ,iii:ii;;;;::,                                          
        .,:iff1;:,..     .:1Lt:,,..:;;i:.   ;i:;11iii1:,                                            
       .:;;CGti:,,.     .:,,,.::.:;;;:.    ,1i;.,i;:;i:,                                            
      .,:;ifti:,.       .,...i;.:;,.       ;1i,..:i;::;,.                                           
    ..,::;111;..       ...,;i;,,,.         ;tt,:;;,:;;:,                                            
   ..,,,,:tfti,      .,.,;ii;,.            :i:;;,. .::;:.                                           
  ..,,,,.,iLLt:  .,:::;1t1:,.              .::,,. ,;:,:1:                                           
 ...,,.....;f1::;1tttttt1,                  .;:::......:,                                           
......      ;;;;;i1ii;;:.                    .::ii:.                                         .      
..          .        .                          ...                                                 
                                                                                                    
                                                       .                                            
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                     .                              
                             .          .                                                           
                   .                                                                                
                                                                                                    
                                          .                                                         
                                                                                                    
                                                               .                   .                
                                                                                                    
`,y[39]=`                                                                                                    
                                 .                                                                  
                             .                                                                      
                                                                                                    
                                                    .                                               
                                              .                                                     
                                              .  .                                                  
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                      ..            
                                                                                      ..            
                                           .,,,,::,,,,..                                            
                                         .:iii1111ii;;;;::,...                                      
                                        .:ii111iii;ii;i;:::;;:::::,,..                           .  
                                        .:1111t11i1ii1t1;;:::;;;;;i1ii:,                            
                                        .,i1t11iii11i111i11i;;;;ti:;;:;i1,                          
            .                            .:i11iiiiiii;iiii11ii;;ii;i;;ii1i:.                        
                                         .;i111i11tti;i;;i;1ii:;iiiiiii1i;i;.                       
                                       .,;;;ii1tffftttt11111ii;ii1i,;;;iitii;:,               .     
                                     ,;1fLffffffftt1111tffGGLttii1ii;;;;:;i11iii:.                  
                                    ,;1tLGGGGCCGCftt111tttfCf1tftt1i;iii;;itti1tf:                  
                                  ..:;iii11fGCfLGGCCCLft1111111tttftii;ii;iii11111.                 
          .                       .,:;;:;:;;iLLfLtttfCGCftLL1i11ttttttiiiii1tiiiii,                 
                    .           ...,::::::;::::i1fCi;t1tLCCCLtttft1tftti1ftt1;i1i;.                 
           .       .          ...,,::,,,,:::::i1i;i;:i;:;1LCLLCCt11tt1111fLLfft1:.                  
                    .           .........,,,;11;;,,::::::1Lft1tGLftt11i;;tfti;,.                    
                                      ....,;t1;:,,::;:::;1i1ti1LGGCfti;:;:,.                        
                                        ..;11i:,.,:;i;;;;;:f1iffLCCff1;,.                           
                                        .;if1:..,::;;;;:::iCt:1CCG0CCC:..                           
                                       :111i:...,;;::::,::t0Ci;ifCCCGt..                            
                                    .:i1i;;,.   .ii;;;::;:iGff;;;ifLii,                             
                                  .;11i:..      ,;:::;:11;iLLf1::;1f:,:.                            
                                 .;1;,.        .;;i11i11:;;LGLt,,,:i;,,.                    .       
                    .        .,,:::.          .:ifftfLL::i1LGC;.,...,,.              .              
                     .     .,;i;:.           .:iCfi1i1i1:;CGC;...    .                              
                      .,::;iii::. ..,,:i;,,,,;i1f1ttt111;tGf:..                                     
                   .,i11iii;:,...::,,:;tLft111ii;1ttttt11ii:;,                                      
                 .,1CL1:,...  .:;,.,:i1ttfff1iiiii;:::i;:,:,:,   .                                  
                ,iLLi,.      ,:i: .;1iiii;;iii;tiiii1;i;.,,,.                                       
               ,1t;,.       .;i1, ,,.,:::;;:;;;iiii;::;..::.                                        
           .,:i1i:..       ,1ti, ...:;;;;:..:iii;;i;;;;:::.                                         
         .:;tfti:,.      .;tf;  ...:;;i:.   ;i::i1iii1;,.                                           
        ,:;fGti:,,.     ,:,,. ,:.,;;;:.    ,i;i:,;1:i1,,                                            
      .,:;ifti,,.      .,....;i.,;;,.      ,1ii, .;;:::,.                                           
     .,:::111;..       ....:ii,,:,         :ifi.,;:,:::,.                                           
    .,,,,:1fti,       .  ,ii;:,.           ,i;;;;:.,::;;,.                                          
    ..,..,iLLf:    ...,:;i;,..              ::::..:i:.:ii,.                                         
   ..... .,;f1,.,:;i11tf1:.                  ::,, ...  ,;.                                          
            ;;i1tfLLff1:.                    .::;;,.                                         .      
            ......,,,.                         .,;:,.                                               
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                     .                              
                             .          .                                                           
                   .                                                  .                             
                                                                                            .       
                                          .                                                         
                                                                                 .                  
                                                               .                                    
                                                                                                    
`,y[40]=`                                                                                                    
                                ..                                                                  
           .                 .                                                                      
                                                                                                    
                                                    .                                               
                                              .                                                     
                                              .  .                                                  
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                      ..            
                                                                                      ..            
                                         ,::;:;;;;::::,,.                                           
                                       .:ii11iiiiii;iiii;;:,,.                                      
                                       :;;i1ii1iiiiii;ii;;;;;;;;;;:,..                           .  
                                       ,iiiiii1t11iiiitti;,,:;;;ii;i1i;:.                           
                                       .;ii11111ii;i;i1ii1i;;;;iti;;;;;1t;                          
            .                          .,iitii;iiiii;:;i1iiiii;;;;;;;;;i11;,                        
                                       .,;i11111111ii;;;;;;ii;:;i;i;:it11;ii:.                      
                                     .,ii;i11ttffftttt111t11ii;i;;i::;;;i11i;;:,              .     
                                   .:itLCCLLLLLLft111111tL0GL1ti;iii1i;;;;i111iii:.                 
                                  .,;i1fCCGGCLCGCLft111tttfCf1tft111i;;ii;:i11i11fi                 
                                  .:;i;;ii1LGCtLGGCCCLft1111111ffffti;;i;;iii;;ii11,                
          .                      .,::;:;:;;;1LffL111tCCCLtfLfi1ttttft1i;iii11t1ii;i;                
                    .           ..,,:::::;;::::11LL;if1tLCGCCfttfft1fLt1i111tt1;;;i,                
           .       .          ...,,,,,,.,:,:::i1;ii::i;::1LCCLCCft1tttt11tfff111ii:                 
                    .          ..........,,,if1;:,,:::::,iLfti1CCfttt11111fLfft1:.                  
                                      ...,.iLt;:,,:;;::::ttiti1fGCCLft1i;;i;:,.                     
                                        ..;fti:,,,:i;;;;;;,1t1LffCCCftti,..                         
    .                                   .;1f1;,.,,1i:;;::,:ft;fCCLCGLfCi..                          
                                       ,i111;,...;i:::::,,;GCfiifLGGGGf,.                           
                                     ,;11ii:.   .;i;;;;::::CCft;;i1tffi.                            
                                   ,it1;,..     .;:;;;it1;:1GfLi;i1f1,:.                            
                                  :1i:,        .:itt1tff:;;i0LC1:,:i;,,.                    .       
                              .,,:;,.         .:1CttfLC;:tiiGGf,,.,,:,.              .              
                            .:i;:,           .:tC1;11t1i:ttC0t,...  ..                              
                        .,:;ii;:. ..,:;;,....:1Ct1tt111i:t0Ci..                                     
                     ,;iiii;;,,,,:,,,:ittt1i111ii1fLLLLfLft;;:                                      
                  .;fLt;,,....,::. .:;i1tffft1i;;;;;;i1i;,:::;                                      
                .:tL1:.     ,:;;. .;11111i111i1i;iii;i1i,,,:,                                       
               .iti,       ,1i1;. ,:.:;::;;ii;ii;i1;;;1:.,:,                                        
            .,:ii:.       .1f1:.  ..:;;ii:.:iii;i;;i:;i,::,                                         
          .:itt;,..      .tfi.  ...:;;i:.  .:i:,;1iii1i,.                                           
        .,:1Cti:,..     .ii.  ,:..:;;:.    .i::;,,ii:i:,                                            
       .,,:11i:.        ,:  .:i,,;;,.      ,1;;;. ,;::,,.                                           
      .,,,i11;..          .:ii:,:,         .i1t,.,:.,:::,                                           
      ...,1ft1,       .  ,ii;:,,           .;;i:;;,,:::;:..                                         
     ....,;fLL;       ..:;;:,.              ,::;:.;i:.:;1:.                                         
          ,;ft, ..,::;it1;,.                 ::,.....  .:,                                          
            ;;;11tfLffLf;.                   .,:::.                                          .      
            .,,,,:;i;:,.                       .,;;,.                                               
                                                  ..                                                
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                     .                              
                             .          .                                                           
                   .                                                  .                             
                                                                                            .       
                                          .                                                         
                                                                                 .                  
                                                               .                   .                
                                                                                                    
`,y[41]=`                                                                                                    
                                ..                                                                  
           .                 .                                                                      
                                                                                                    
                                                    .                                               
                                             ..                                                     
                                              .  .                                                  
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                      ..            
                                         ........                                     ..            
                                       ,:;;iiiiii;;;;;;:,.                                          
                                      ,ii1iiiii;;iiiiii1i;;::...                                    
                                     .;;;i;;i;i1i1iiiiii;:;;;;;;;:::,,.                          .  
                                     .:;;;;;;;i1ii1iiiit1i:,:;;:;i;;11i;,.                          
                                     .,iiii1i1ii;;i;;;ii11ii;;i11i;;;;;i11,                         
            .                         .:i11i1iiiiiii;:;11iiiii;;;;;i;i;;it1:.                       
                                      ,;ii1111111t1iii;i;;iii;;;::;;;i1ttii1i,.                     
                                   .,;tt11tttfLffftttt1111111i1i;;;;::;;i1ii;i;;,.            .     
                                  .:itLCGCLLCCCLft11i1ttfC0Gf1ti;i1;;ii;;;ii1t1iii:.                
                                 .,;i11fLCGCLLCGCLff1tt1ttfCL1tft1iii;iii;;;i1iii1ti.               
                                 .:;;;;;;1tCGLfLCCLCCCLt11t1111ffftt1iii;ii1i;:;;iit:               
          .                     .,::::;:;;;;tLLLLi1itCCCLffLL11ttfttt1ii;i111iiii1iii.              
                    .          ..,,,:::,:;:;:,;1tCt:1fi1fCGCGfttftt1tt111iiii1t1ii;;:               
           .       .          ...,,,,,,,,:,:::11ii;:i1;::iLCCLLCLttttfttt11tfti;;;;;.               
                    .           .........,,,if1i,,:::;::,iCL11iLGftttttt1t1fLft1ii:.                
                                      .....if1;:.,,;:;::;tLi111tCGCLfftt1iitt1i;,.                  
                                        ..1Lt1:,,,:;;i;;i;,;ttCffLCGGLtt1;,,.                       
    .                                   .;ff1;,,,:i;:;;:,,:1f1LGCLLCCLtL1..                         
                                       .it1ti,...it;::::,,:LCLtitLC00GCL;.                          
                                     .;11ii;. . .;i;;;:,::,t0LL;;i1ttLC:.                           
                                   .itti:,.     .:;i;ii11,:;CLLLiii1t1i,                            
                                  .i1i:.       .:tLt1tGL:;;:fCCL:::ii,,,                    .       
                              .,,:;:..        .:LC1ifCC:;f;,LCL;..,:;,,.             .              
                            .,;i;:.          .:LLi;11t1;:t1tGL;... .,..                             
                         .,:i1i;,...,::,.....:LC:tt11i1i,iCCt,..                                    
                     .:;iiii;::,:,,,:itii1;;itf11tfLLffffLfi;:.                                     
                  .,1ffi:,,..,::,  .,:;1tfffft1iii1ttttt1::::;.                                     
                 :1ft;,   .:;;i,  .;111t11ff11i;;;;;;;;i:,,::.                                      
               .;ti:.     ,ttti,  ,:,:;::;i1iiiii;iiiit1.,::.                                       
            .,;i1;.       1ft:.  ...:;;ii,:1;:;;i;;;::1:,:,.                                        
         ..:itfi:,.      iL1,   . .:;ii:. .,,;;,:i1;ii;,..                                          
        .,:;Lf1:,.      :t,   .,..:;;:.     :;,:,,:i:;:,                                            
       .,,,i1i:..       ;,  .:;,,;;,.      .i;:;,  :;::,.                                           
      ..,,;11i,.          .:ii,,;:.         ;11i..,.,:::,                                           
     ....,ift1,       .  ,ii;::,.           :;t;:;,,,:;i:,.                                         
     ... .:tLLi.       ,;;;::,.             ,;:;;,;i:.,:ii,                                         
          .:ff:    ..,;ti;:,.                ,;;,..,.  .,:.                                         
            ;:,:;i1tttLfi:.                   ,::,.                                          .      
            ...,:;1tt1i:.                      .,;;,.                                               
                                                 ,;:.                                               
                 .                                 .   .                                            
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                     .                              
                                        .                                                           
                   .                                                  .                             
                                                                                            .       
                                         ..                                                         
                                                                                 .                  
                                                               .                                    
                                                                                                    
`,y[42]=`                                                                                                    
                                ..                                                               .  
           .                 .                                                                      
                                                                                                    
                                                    .                                               
                                             ..                                                     
                                              .  .                                                  
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                      ..            
                                       .,,,,,,,,......                                ..            
                                     .:;;ii;ii11iiiiii;;:,.                                         
                                     :;iiiiiii1iiiiiiiiiiii;:,....                                  
                                    .;;ii;;;i;i1iiiiii;1i;;;;;;;;;;:,,.                          .  
                                    .;;;i;;;;iiiii;;i;i1ti;::;;;ii;;i1i;,.                          
                                     ,iiiiiiiiiiii;;;;iii1iiiiitti;ii;;;11:.                        
            .                        .;11i111ii;iiii;;it1ii;ii;;;;iiiii;i1ti,                       
                                    .:i1111tt1111t111iii;;;iiii:::;;;;111i;i1;,.                    
                                  .:1LLfftfLffLLfffttt11111i111i;i;;;:;iiiii;iii;,.           .     
                                 ,;1fLGGCCCCCGCLft11i1ttfL0Gftti;i1i;::;;;;itttii11:                
                                .,;ii1tfLGGLffCGCLLfttt1ttfCCtfftiiii;;;i;;;;i;;ii1t;.              
                               ..:;;;;;;i1LGGLfLCLLLCCCft1tt111tfftt1i;;i;ii1i;;;:iit;              
          .                    .,:;:;;:;;;;itLLLfii;fLLCLffLf111tfftt1iii11tt1i;;;;;ii.             
                    .         ..,,::::::;;:;::;1tCi:ffiitCGGCLttfft11tt111i;ii1ii1i;;;.             
           .       .          ..,,,,,,,,::,;:;t1;i;:t1;::;LCCLLCCtttttttt1ii1tt1i1i;::              
                    .           ........,,,:1t1;.,:::;:::1Gf11itGLtttfttft1tft1;ii;:,               
                                      ....,1L1;:,,:::;::;tC;it1tfGCLffttttiitLfti;,.                
                                        ..1ft;:,,,::;;;ii;,:tLGf1fCGGCCft1i:::,..                   
                                       ..iLf1;,,,;i;:;;::,:1tLLGLLLLCLCtft,.                        
                                       .;ttfi,,.,11;::::,:,1CLttfLGG00GLLi.                         
                                     .:11iii. ...;i;::;,;,,i0GCL;;1ffLCC;.                          
                                   .;tf1;,.     .;ii;i:ti,::fCfCiiiii1t;.                           
                                  .;t1;,       .:tf111Cf:i;,1ffLi;;iii:,.                   .       
                              .,,,;;,..       .;LfiitLL:;t;,1LC1,,,,;,,.             .              
                             ,;i;:.          .;C1iiitt1;;11;LC1,....:...                            
                         ..,;1ii:..,,:,......:Ci,tt11ii;,:tCL;..    ..                              
                     .,:iiiii;:::,,:;t1;;;,:;fL;ittff1ttfft1;:.                                     
                  .,iLLt;:,::::,.  .,:iiffttLt11i1tLCCCCL;:;,i:                                     
                .,itf1:,..;iii;.  ,;11tttffLfti;;;i;;;ii;,,::,.                                     
               .;11;.    :t11i:.  ::,;;:;1111;;;ii;i;i1t:.::,                                       
           ..,;1t;,.    .1f1;.   ...:;;i;:ii:,;:;i;;;:1i,;:,                                        
         .,;1fLt;:.     :L1,    . .::;i:. ...::.,:ii:ii,,.                                          
        .,:;fft;:,.     1i    .,..:;;:.     ,:,,,,,i;:;.                                            
      .,,::i1i:..      ,;    :;..;;,.       :::::. ,;::,.                                           
     .,,,,;11i,.       .  .:i;,,;:.         ,1;i: ..,::,,                                           
     .,,,,;t11:       .  :1i;:::.           ,i11,:,..::;:,.                                         
    ......:tLfi.  .   .::;::::.             .:;:;,,;:.,:;1:.                                        
    ...   .:fL;      ,11;;::.                .:;;.,:,   .:,                                         
            ;;.,:::;1ff1i;,                   .::,.                                          .      
            . .,;itLLfti,.                     .,;:,.                                               
                 ..,,.                           :;;:.                                              
                                                  ,,.                                               
                                                                                                    
                                                                                                    
                                                                                                    
                                                                                                    
                                                                     .                              
                             .          .                                                           
                   .                                                  .                             
                                                                                       .    .       
                                         ..                                                         
                   .                                                             .                  
                                                               .                                    
                                                                                   .                
`,y[43]=`                                                                                                    
                                ..                                                               .  
           .                 .                                                                      
                                                                                                    
                                                    .                                               
                                             ..                                                     
                                              .  .                                                  
                                                                                                    
                                                                                                    
                                                                .                                   
                                                                                                    
                                                                                                    
                                       ....                                            .            
                                    .::;;;;::::,,,,,,,..                              ..            
                                   ,;;iii;i;i111iii11ii;;:,.                                        
                                  .;iii;;;;;;;;iiiiiiiiiiiii;:,,,...                                
                                  ,;iii;;;;i;:::;;i;i;;i1i;i;;;i1ii;;::.                         .  
                                  .;i;iii;;iiii;;;;;;i;itti;;;i1t1iiiiii;:.                         
                                  .:i;i1iiii;11iii;:;;;11i1iii1ff1i11i;;i11:                        
            .                     .:ii1111111i111iii1;;;;ii;;ii;::iiii1;;it1i,                      
                                .:ittttttttttttttttt11ii;iiii1i:,;;;;iiii;;i11;:..                  
            .                  ,;1fLCCLLLfLLLLLLLfftttttfft1i1ii;i;;;;;;;i;iiiiii;;,          .     
                              .,;itfLLCCCLLCCGCLft1111tffC0GLf11ii1i;::;;;;ii111ii11i.              
                              .:;;;ii1fCGGLfffCGCCCLfff111fCGLtttii11i::;;;i;;i;:;iit1,             
                              .:;;;i;;ii1LGGGLfLfttfCCGf1t1tt1ttftt111i;;;;i;i;;;;;;i11.            
          .                  .,:::;;::;i;;i1fLCC1;;1fttLCLffLt11tfftt11i1i1iiiiiii;:;ii;.           
                    .        .,,::::::::::;:,:1tLi;ff1;;1fGGCLfttfft11tt1i11fft1i;ii:;:i.           
           .       .         ..,,,:,,,,,,,:::tti;::fGi:;:iLCLGLCCLttttttttt111iiii1i;;::.           
                    .          ...........:;fLi,,::;1::::CGf11i1fGCttfffffttttf11tiii;:.            
                                      ....iLC1;.::::;;:;iLf::itttfGCftftttfLt1ttiiii;,.             
                                       ..itC1;:,,;:;;;iii:,,;tLffftCGCCCLfttiifti;:,.               
    .                                 ..iCfti:,,:i;:;;;::::,1fG0CLtfLLCCCttt;:,...                  
                                     . ,ttLf:,,.;1i;:;::::,:tLftLCCGCCGLLtL1.                       
                                     .;ttii: ...:1;;;i:;;,::tCffti1LGG00CC1,                        
                                    :tf1;,     .:iii;,;f:,,:1LLGL:;;i11fLi.                         
                                   ;t1;,       ,111i,;Ct,;i,;tfGt;;i1i11:                   .       
                   .           ...:i:..       ,fLi;:ift,;11.iLCf:::::;:,.                           
                              ,:::,.         ,ft:;1;iti;;i1;fCL:....,,...                           
                           .:;ii:,......   .,ft.:i1i111i;.iLC1,..  ....                             
                       .:;iii;;:::;1i;:,,,::tC:;i11t1;11i;1ti;,.                                    
                   .,1ft1;;::::....,::itiii1GtiiitfffffL1;:i:;;.                                    
                 .:iffi;:;ii;:,   ,;i1tfLLfLt11i1t11111ii,,:::,                                     
                ,ii;,..:;11i:,.  .::;1i1tfLft1i;:;::::;i;.:::.                                      
            ..:i1;,   :;i1;,.   ....:;ii;i1:,,::,:;;:i1t::;:                                        
           ,:1ft:,.   ;i1;.       ,:;i;. ....::...,i;:i;,,.  .                                      
         ..:1t;,,,..  :i:.   ... ,:;:.      .:,.,,,,;::,     .                                      
       ...,;i;, .     ;,.  .,:,.,;;,        .:,:,,. ,::.                                            
      ....:1ii,.      .  .:;;:.,;:.          ,;,:, .:::,.                                           
      ....;t11:         ,;i;:,::.            ;1i;,.. ,:::,.                                         
     .....,1fti.  .  .:;::::::,             .i11::,,...:;i:.                                        
          .,fL;    .,ii:,::;:.               ,::;,,;:.  .:,                                         
            ;i...,,,;;::;;:,                   :;.. ..  .                                    .      
            . .,;i1tfft1;,.                    .:;;.                                                
                .,;11i:,.                       .ii;:.                                              
                                                 ::,:.                                              
                                                 .,                                                 
                                                                                                    
                                                                                                    
                                                                                                    
                                                                     .                              
                                        .                                                           
                   .                    .                             .                             
                                                                                       .    .       
                                         ..                                                         
                   .                                                             .                  
                                                               .                 .                  
                                                                                   .                
`,y[44]=`                                                                                                    
                                ..                                                               .  
           .                ..                                                                      
                                                                                                    
                                                    .                                               
                                             ..                                                     
                                              .  .                                                  
                                                                                                    
                                                                                                    
                                                                .                                   
                                                                                                    
                                                                                                    
                                     ..,.....                                          .            
                                   ,:;1iii;;;;;:::::,,,,.                             ..            
                                  ,;iii;;;iiiii11i11i1ii;::,.                                       
                                 .;i11i;;:;:::;;iii;iiiiiiiii;:::,,..                               
                                 .;111ii;;i:::::;;iii;;;11;;;;;;iiii;;:,.                        .  
                                 .;1iiiiiiiiii;;::;;;i;itt1i;i1tf1i1iiiii;,                         
                                 .;1i11iiii1ti1iii;,;;;i1i1iii1tt1i111i;i1ti,                       
            .                   .:i11ttt1tttt1tt111ii;;:;iiiiii;:;i;ii1;;itt1;,.                    
                        .     .,1tfLLffftttttttfffff111i;iii;1i;;ii;;;i;ii;;i11;:..                 
            .                .,i1LCGCCLLLLCCLLLLLffttttffft1i1iii1i;;i;;;;ii;;ii11i:.         .     
                             .,;i1tLLGCCLfLLCGCLft1111tffC00GL11ii11i;;;;;;iii1tiii11;.             
                             .,;i;;i1tLGGGLfffLCCCCCLfft11fCGLttt1i11i:::;;i;;i;::ii1ti.            
                             .:;;;;;;iiifCG0GLLLf11fLCGL1tttt11tttt1111;;i;;;;;;;;;;;iti.           
          .                  ,:;;:;::;i;:;i1fCGC1;itttffCCLfLt11ttfftt1ii11;ii;;;;;::;it;           
                    .       .,,:::::,:::::;,:;tff:1LLti:;tCGCCfttfftt11ttiii1111ii;i;::;i.          
           .       .        ...,,,,,,,,,,,;,;f1;;:;GCi:;:1LLLCCCCCfftttttttfffiii;ii;;:;;.          
                    .           ..........:iLt:.,::ii:::;CGft1i1tCGLttfftffff111111iiii:.           
                                      ...:1Cfi:,::::;;;;iCt;:;tfttLCLfffttffLfttt1iiii:.            
                                       .,1LCi;,,:;:;;;ii;::,:1fLtftfCGCCCLtttiittii:,.              
    .                                 ..fLf1;,,,;i;;;;::,:::1tLGGLftfLLCCCf1t1;;;,.                 
                                     ..;tfLt,,.,i1i;:;::;;::itLLLCGCCLCCLLtff,.                     
                                     .itt1i,....;i:i;;:1i;;,iCfft11fG0080CLf:.                      
                                    ;ft1:.     .;i;i:,;1:i,,ifLGCi;;i1tfCC1.                        
                                   ;ti:,      .;t11;,:1i:ii,:ttCt;;iiii11:.                 .       
                   .             .:i:..      .;Cf;i,:ii::i1,iLft;::;;;;;,                           
                               ,:::.        .;L1,it;;tt;;:1ifLf;....,:,..                           
                            .::i:,.       .,;L;.;iiii1ti;.;fLt,..  ..,..                            
                        ,:;;i;;:::ii:,,...,iLt.;i11ttii1i:1t1i:.     .                              
                    .:i11i;;;:,...,::it;:;iCLi;ii1ttttff1;:i;;i,                                    
                  .;tft1ii;,,.    ,;i1ffffLLf1iitffftt1ii,,:::,                                     
                .;i;:,;11i,      ,;;111tfLLLtt11i;;:::;i;,:;:.                                      
             .,i1;,  :it;.     ....,:;ii;i:,,:::..;;:;1t;:;:                                        
            ,itt:.   ;i1:     ..  ,:;i:.     ,:, .:;;,;i:,.  .                                      
           .;i;,..   :i:.   ...  ,;;,.       :: .,.:i,:,     .                                      
           :;;,      :;.  .,:,. ,i:.         :,,:,,.:::.                                            
         .:11i,.     .  .,;;:,.,;,. .        .::,,..::::                                            
         ,;t11,       ..:ii:,.::.            ,i:;. ..,:::..                                         
          ,1f1;.     ,;;:,,,::,              itt;,.   ,:ii,.                                        
          .,fL;   .,;;,..,:;:.               ,:;::,;:. ..,.                                         
            ;i.   ...  .:;;:                   .;,.,,,                                       .      
            .  ,:;;iii11;:.                     ::,.                                                
               .,;1fLt;:.                       ,i1;,                                               
                 ....                           .i;::, .                                            
                                                 ::.                                                
                                                  ..                                                
                                                                                                    
                                                                                                    
                                                                     .                              
                                                                                                    
                   .                    .                             ..                            
                                                                                       .    .       
                                         ..                                                         
                   .                                                             .                  
                                                               .                 .                  
                                                                                   .                
`,y[45]=`                                                                                                    
                                ..                                                               .  
           .                ..                                                                      
                                                                                               .    
                                                    .                                               
                                             ..                                                     
                                              .  .                                                  
                                                                                                    
                                                                                                    
                                                                .                                   
                                                                                                    
                                                                                                    
                                   ..,:,,,....                                         .            
                                  ,:;11111i;;;;::::;::::.                             ..            
                                 ,;ii1i;;iiiiiii1tt11tti;;::..                                      
                                .;11i1i;:;::::;;iii;iiiiiiiii;;;;:,,..                              
                                .;i11iii;;;:::,::;ii;;;;11ii;;iiiiiii;;:,.                       .  
                                .;1iiiiiiii;;;;:::;;;i;i1t1iii1tftt11i11ii;.                        
                                .;1i1111111t111t1;;::;:i1iiiii11tt1111i;i1f1;.                      
            .                 .,ifftttttttttttttft111;;:;iiiiii;;;;;i11i;i1t11:,                    
                        .    .;tLCGCLLffffffffttffff111ii;i;i11;;1i;;;;;;i;;ii1i;,.                 
            .               .,;1fCCCCLLLLLCCCLLLLffttttffft1iiiiit1;;;;;::ii;iii11i;:.        .     
                            .,;;i1fLCGCLfffLCGGCLftt11tffLG00C1ii;11i;;;;:;iii111iiiii,             
                            .,:;i;iitfC00CLLffLCCCCCCLft11tLCCttt1i1t1;::;;i;;;i;:;ii1t:            
                            .,:;;:;;ii;1fCG0GCLfti1tfLCCftttt11ttttt11i;;i;:;;i;;;;:;;1t:.          
          .                 .,:;:;;::;;:;;i1fCGLi;1t11ttLCCfff111tffft1111iiii;:;;;;::;it,          
                    .       .,,::::,,,:::;:,:iff1:tLLt;:;1LCCCLfttfttt11t1iii;i11i;;;;;;i;.         
           .       .        ...,,,,...,,,::,1fi:;:tGL;:;:tLLCCCLCGLfftttttttff1iiiii;:::i;.         
                    .           .........,;1f1,.::;1;:::;GCffti1tfCGLffffffLLf1iii1ii;ii;.          
                                      ...;fCi;,,:::;;;;;1Ct;::1ftttLCLffftffLfLtt11ii11:.           
                                      ..ifCt;:,,;;:;;;;i;:::;1tfttftfLCGCCLftt1itt1i;:.             
    .                                 .;Cffi:,,:ii;;:;::,;;ifffLCLLftfLLCCCf1t1;1i:.                
                                     .,1tffi.,.:11;;;i:;iii1:ttLCGGCLLLLCfLf1f;,.                   
                                     :tft1:.....i;;i;;;ti;1:;LLffttfGGG00CCLLi..                    
                                   .ifti,      :;;i;:,i1;i;.;ffGG1;;ifLCGGGf;..                     
                                   it;:.      .i1i1;,:11:ii,:ttLt::;iiii1ti,                .       
                   .             .;i,.       .1C1ii::;i:;it:iftt;::;;iiii,.                         
                               .,::.       ..1f;,i1;;if;i:11LLt:,,,,,,:,,.                          
                            .,:;;,.       .,1f,,;i1ii1t1i.;LLt:......,,.                            
                        .,::;;;;;;i:,..  ,;tL;.;iii1t1i1;:1t1i;..    .                              
                     .:;i;;;;:,.,,::i1;:;1fL1,;1i1t1ttft1i:i;:1,                                    
                  .:1ft1i;:..     ,:ifttffLLtiii1fLLfftii,,:;:,.                                    
                .:i;;i11i,      .,;;11tfLLLLtt1tt1i;::;i;,:;:.                                      
              ,ii;,.,i1;.      ... ,:ii;::;;;;;;..::;;iti:;:                                        
            .;t1:...:ii;.    ..   ,:i;.      ,:,  :;:,:i::,  .                                      
           .;i:...  :i;,   ....  :;:,        ::  ..;t::,.    .                                      
           :;;,     :;,  .,,,.. :;:.         ,:.,,.:1::,.                                           
         .:11i,.    ..  ,:;:,. ,;,. .         ,:,,,.:;::                                            
         ,it11,       .:;i;,..::.             :::, .,,,:,..                                         
          ,tf1:     ,:;::,..,:,              :t1;..   .:i:,.                                        
          .:ff:   ,:;:.  .:;:.               :ii::,:,....,.                                         
            ;i.        .,:;:                    ;,.::,                                       .      
            .  .,,,:::;i;;,                     .,..                                                
               .:i1LLti;,.                      ,;;;,                                               
                 .,::.                          ,i;:;.                                              
                                             .  ,i,...                                              
                                                 ,,.                                                
                                                                                                    
                                                                                                    
                                                                     .                              
                                                                                                    
                  ..                    .                             ..                            
                                                                                       .    .       
                                         ..                                                         
                   .                                                                                
                   .                                           .                 .                  
                                                                                   .                
`,y[46]=`                                                                                                    
                                ..                                                               .  
           .                ..                                                                      
                                                                                               .    
                                                   ..                                               
                                             ..  .                                                  
                                                 .                                                  
                                                                                                    
                                                                                                    
                                                                .                                   
                                                                                                    
                                                                                                    
                                  .,,:;::,,....                                        .            
                                 .:;111111ii;;;;;;;;;;;:.                             ..            
                                ,;;iii;;;iiiiii1tfttft1i;;::,...                                    
                               .:ii1iii;;:::::;;iiiiiiiiiiiii;;;;;:,,,.                             
                               .:iiiiiii;;:,::::;;;i;i;;11ii;;iiiiiii;;;:,.                      .  
                               .:ii11iiiii;;;;:;::;:;;ii1t1iiiitfff1iii11ii,.                       
                               .i111tt111tt111111;;:;;;i1iiiiii11111111;;itti,.                     
            .                .;1LLLfffffffffttttttt11i;;;iiiiii;;;;;i1ii;i1t11i:.                   
                            .;tCGCGCLLLLLLLfffffffff1i1ii;iiii1i;ii;;;;;;ii:;i1ii;,.                
            .              .,;itLCCCLLLLLCCCCLLLLffttttffft11iiii1ti:;i;;:;i;;;ii1i;;,        .     
                           .,:;iitfLGGCLfffLCGGCLfft1ttffLG00Gt1tii1i;;:;:;ii;i1tiii;i;.            
                           ..:;;;;iitLG0GCLLffLLCLLCCCft11tfCCffft1i11;::;i;i;;i;;:;iiti.           
                            .:;::;;;i;itLCG0GCLf1ii1tfCGLt1tt11ttttt1t1;;;;;;;;;:;;:;;iti.          
          .                .,,::::::;;::;;i1LC0fi;tt1t11fCCLfft11ttfft1111ii;;;:;;;::;;i1i          
                    .      .,,,,,:,,,::,:;:::1fti;LLLt;::1LGCCCftfffttt1t1ii;;;iii;;;:;;i1:         
           .       .       .....,,,,.,,.,:::tt;:;:LGf:::,tCLCGCCCGCLftttttttt1iiii;i;:::;i:         
                   ..           .........:ift;.,;:i1;:::;CCfLfii1tLCCLfffffLCCtiiiiii;;i;:.         
                                      ,.:1Cfi:.:;;:i;;;i1C1;::i1ft1fLLLfLffffLtttt1ii1ti:.          
                                      .:fLCi;,,:i;;;;;;i;:;:iftffttfttfCCCCLfftttttiii:.            
                                     ..tLft;,,,;1ii;:;:::iiiLC1fLLfLLtfLLCCCLt11i1i:.               
                                     .;ftft:.,.;1i;;ii:;1111:1tfCGGCLLLLCCfLfit1:,.                 
                                    .ifft;.....,;:ii;:;tiiL;:fLCLtfLC0GCGGLCtft,.                   
                                   .tf1;.     .:;ii;:,;tii1,;ftCGfi;ifCG08GGL1:.                    
                                  .11;,       :1111;,:it:i1,;ttft::;;;ii1tLt;.              .       
                   .             .;i.        :fLii;:,;1;:11;ittt:::;;iiiii:.          .             
                                .::.       .:ft,,11;;it;1i;tLf1:,,,,,::::,.                         
                            ..,::,.      .,;f1.:ii11iitti,:LLf,.......,..                           
                         .,::;;;;::,    .;tLf.,;;:i111i1;;tt11i,.    ..                             
                      .,:;;;::,,,,:i1:,;1LLt:,:ii1t1tttt1i:ii;1:                                    
                   ,;iiii:..     .,;tttffLf1;;1iittffft1i,,;;;,                                     
                .,:;i11i,       .:;i1ttffLLft1i1tt1i;;;i;,:;:.                                      
              ,;ii,,i1;.      .....:;1;:;i1iiiii:.:;;;i1i:;:                                        
            .;1i:. :ii;,    ...  .,;i:      .,:,  :i;::i;:,  .                                      
           .;i:... :i;:.  ..,.  .:;:.        :;. .,;L;::.    .                                      
          .:;;,    :;,.  ,,:,. .:;,          ,:..,.11::,.                                           
         .;11i..   ,.. .:;;,.  ::,. .         ,:,,,.,;::.                                           
         ,it1i.      .:;i;:. .:,              ,:,,..::::...                                         
         .,11i,    .:;;:,,..,:,              ,ii;..  ..:;,.                                         
          .:ft,  .,::.   .,;;.               ;11;:,.....,..                                         
            ;;.         ,:;:.                ...::.::,                                       .      
            .   ....,,:;;;:                     .,.,.                                        .      
               .:;1fLti;:.                      .:::,                                               
                 ,;ii:.                        .:;::;.                                              
                                             ...:1, ,.                                              
                                                .;,.                                                
                                                  .                                                 
                                                                                                    
                                                                     .                              
                                                                                                    
                  ..                    .                             ..                            
                                                                                       .    .       
                                         ..                                                         
                   .                                                                                
                   .                                           .                 .                  
                                                                                   .                
`,y[47]=`                                                                                                    
                                ..                                                               .  
           .                ..                                                                      
                                                                                               .    
                                                   ..                                               
                                             ..  .                                                  
                                                 .                                                  
                                                                                                    
                                                                                                    
                                                                .                                   
                                                                                                    
                                                                                                    
                                  .,:;;:::,,...                                        .            
                                .:;i11111tii;;iiiiiii;;:,.                            ..            
                               .;;iii;;;;;i;iii1fftft1ii;;::,....                                   
                               ,i11iii;:;::::;;;i1iiiiiiii;iiii;i;;:,,,.                            
                               ,ii1iii;;;:,:::::;;;i;i;;11ii;iiiiiiiii;i;,.                      .  
                               ,ii111ii1ii;;;;;;;;:;:;ii1t1i;;i1ffff11i1111;,                       
                             .,it1ttttttttt111111i;:;;ii1iiiii111111111i;itt1;,                     
            .               .;tLCCLLffffLfffftttttt1tiii;iiiiiii;;;;i1ii;;it111;,.                  
                        .  .:1LGCCCCLLLLLLLfffffffff1i11i;iiii1i;;;;;;;;;i1;;;ii1;:,.               
            .             .,:i1tCCCCLfLLLCCGCCLLLffftttfffttt11ii1ti;:;;;:;i;;iiiiii;:.       ..    
                          ..:;iiitfCGGCLffffCCGCLLffttttfLC080f1t1i1i;;;;:;;i;i1t1ii;ii,            
                           .:;;;;ii1tC00GCCLffffLLLCCCLft11fLCfffttii1i;:;iii;;ii;;;iiii,           
                           .,::::;;ii;1fLCGGGCLf1;i1tfCGCf1ttt11tttt1t1i;i;;;;;;;;;:;;i11,          
          .                .,,:,::::;;:;;;itLGGti;tt1t1itLCCLLt111tfftt111iiiii;;;;;:;;;i1,         
                    .      ..,,,,,,,::,:::,:;ftt;iLfLt;::1C0CCCLffffttt1tt1iii;;i;;;;;;;i1i.        
           .       .        ....,,...,,,,::if1:::iG0f:::,tGGL0CCCCCCLftttfttt1;;;;;;;;::;;;.        
                   ..           ........,;tLt:.,:;ii;:::;CCfLLii1tfCGCLLffffLLLtiiii;;;ii;,         
                                     .,,iLL1;,.:;;i;;;;itC1;::iitt1tfLLLLLfffLf11t1iii11;,          
                                     ..1LCfi:,,;;;ii;;;;;::;iLLtfftft1tfCCCLLft1ftt1ii;,            
   ..                               ..:Lfft:,,,iiii;;;:::i11C0ttfffLLf1tffLLCCf1ii1i,.              
                                    .,tfft;,,.,11;;ii;;i111ti1fLLC0CCfLLLCCfLLitt;,.                
                                    ,tff1,.. ..:;;i;;::t1iC1:tLCGffCGGGCCGCLCttf;..                 
                                   :fti,      ,;;ii::::t1if;;f1tLtiiifG08@8CGfLi..                  
                                  ,1i,.      .;1i11::,;t;i1:;ttt1;:;;;i1ttLGL1,..           .       
                   .             .;:.       .;Lfi1;:::ii:11iitf1,,::;iiiiii;,.        .             
                                .::.      .,iC1,:11;;;tii1;tfti,,,,:::::::,.                        
                            ..,::,.      .:1L;.;;i11ii1f1:;Lft,........,..                          
                         ..,:;;;:,.    ,;ttLi.,i;:ii11i1iitti1i,.  .  ...                           
                      .,::::::,,,:;;,,i1fLf1,.:;iitttt111i,ii;1:.                                   
                   .::;;;,...     :i11ffLti:::i11ttttt1ii:,ii;,                                     
                .,:;i1i:.       .:;;1ttffLft11ii1t11i;;ii::;:.                                      
              .;i;:;1;,      .....,:ii;;i1t1iiii;,:i;;i11;i:                                        
            .:i1:.,;;:,    ...   .:;;,    ...:;,  :ii;:ii;,  .                                      
           .;;:. .:i:;,  .,,.   .:;,.        :;. .,;f;::,    .                                      
          .;i;.   :;,,  ,,:.   .;;,          ,:..,.:::::.                                           
         ,i11;..  ,,. .:;;,.  .::.  .         .:,.,.,;;;,                                           
         ,i1i:.     .,;;;:.  .:,              .:.,..:;:,.                                           
         .,1i;.   .::::,,. .::,              .;;;....,.,,.                                          
          .;f1. ..,,.    .,;;.               :t1;:,. ..,,.                                          
            i;.         ,:;;.                ,,,:;.:,,. .                                    .      
            .       ..,;;;:.                    .,.,,.                                       .      
               .,:i1t1ii:,                      .,,:.                                               
                .:it1;..                       .,;:;:.                                              
                                             ...;i,.:.                                              
                                                ,i,                                                 
                                                 ..                                                 
                                                                                                    
                                                                     .                              
                                                                                                    
                  ..                    .                             ..                            
                   .     .                                                            ..    .       
                                         ..                                                         
                   .                                                                                
                   .                                           .                 .                  
                                                                                   .                
`,y[48]=`                                                                                                    
                                ..                                                               .  
           .                ..                                                                      
                                                                                               .    
                                                   ..                                               
                                             ..  .                                                  
                                                 .                                                  
                                                                                                    
                                                                                                    
                                                               ..                                   
                                                                                                    
                                                                                                    
                                  ,::;;;::,,...       .                   .            .            
                                ,:;it111t1iii;i;iiiii;::,.                            ..            
                              .:;;i1iii;ii;iii1tfftt1i;i;;;;:,.....                                 
                              ,iiiiii;;;;::::;;;11iiiiiii;iiiiiiii;;::,,.                           
                              ,ii11ii;;;;:::::;:;;iiiiii11iiiiiii1iiiiiii;,.                     .  
                             .:i11tt11ii;i;;;;ii;;i;;;;ittii;;i1tLLLf1111fti;.                      
                           .:itfftfffffttt1t11111iii;;i1111iiii1i1111t11ii1tt1:.                    
           ..             .:tfCCGGCLLLLLLLffffttttt1tiiiiii1ii1iii:;11iii11tti1i:.                  
                        . ,;1LCCCCCCLCLCCCLLffffffftt111iiiiii1iiiiii;;;itf1i;ii1i;:.               
            .            .,;i11fCGCLLLLffLCGGCCCLfffttttfttt1t1ii111t;;;;;iii1iiiiiii;,       ..    
                         .,:;i;i1tC00GCLfftfLCCGCCLLftttfLC008Cfttiiiii;;;i;:;1tt1iiiii:            
                         ..,:;;;;;1tCG00GCLfftffffLLCCCLf11fCCLffft1iiiiiit1;;ii;;;i1iii:           
                          .,,:::::i;;itLCGG0GCLti;i1tLfCGCftft11tttttt1i;i1i;ii11;::;;i11:.         
          .               ..,,,,:,;;:;;;;;1fC0L1;;tttti;itCCCCft11ttfftt11ii;i111i;;:;;ii1:         
                    .     ...,,,,,::,::::,:;1fft:tLffi;:,iGCLCGGLLfff1tttf11iii;::;;;;;;;i1,        
           .       .       .......,,,,,,:;itt;:::L0G1:::,10LfCCfLCGGCLLftftttf1i;i;ii;;:;;i,        
                   ..           ......,:tfL1;,,:;iiti;::;LLtLfi;i1LLLGGCLLffLCLtii1i;;;ii;:         
                                    ..;fCL1;:.:::ii;;;iifCi;::i1itt1ffCCCLLffLCf11t1ii11;,          
                                    .,1LLf;:,.:::it;;;;;:,:;;tfftftt1tftfffCLLL11fttt1i:.           
   .                               ..;ftti:,,,:;iii;;;:::;iitCLfLffffftt1tffLCCL1111;,.             
                                   .,tfL1::,..:1i;iii;;i111ftttf1C0CLLLfLLLLftCf11i:.               
           .                       ,tfti:, . .,;;i;:::,it;LGiii11ffG0GCCLLGLLfCf1t:.                
                                  ,tt;,.     .;ii1;,:::itiff11111,:i1L00088GCCLtLi..                
                                 .;i:.      .;11t1;,:::tiit11tt1:,;;;;1LCGG80GL1;.          .       
                   .             ,;,      .,;ttii1i::;ii:1111tt::::::;;;;ii1t1;.      .             
                               .,::.     ,:ift;;;11iii1t;ti111,,,.,,:;;;ii;;,.                      
                             ..::,.    .:ifL;.:1;i1iii1ftffff;....,,,,,,,,,.                        
                          ..,:;:,.   .:1fLL;..;i;:ii11i1fLt1if;,..........                          
                     ..,,::;;;;::,,:itfLft;:..;;i:;1ttt111:ii1;..                                   
                   .:;;::,.......,;1fff1;:,,.:iit111iiiiiii1i;.                                     
                 .:;i;,.        .,;i1t1111i;;i111i;;;;;ii;;i,                                       
              .:i;;i;,     ......,::;ii1ttt11i;;;,;11iii1ii,                                        
             :;i;:;:::. ...,.    ,:::, .,,,::;;, .i1tiii1;,  .                                      
           .;;,.,i;.:: ..,,    .:;:,.       .;:  :,:;::i;.   .                                      
          ,;i;. :i.,:..,:,     :;:.          ::..,...:;::                                           
        .:iii,. ,,.:,,:;:.    .:,.  .         ,:,.. ,;;;:                                           
         :i;;,    ,:::;::.  .,:,              ,,....:;::,                                           
          :i;,  .::,,,,,.  ,::.               ::;...,:..                                            
          .it: ...,.     .,;:.               :ti:,, .,..                                            
           .;,.         .:;;                .ii,:;,.,,. .                                    .      
             .       .,:;;;.                   .,,.,,,.                                      .      
                .,,:;;i;;,                      .,,,.                                               
                .:it1;,.                       .,:::,                                               
                 .,,.                        ..,;;,..                                               
                                               .;i.                                                 
                                                 ,.                                                 
                                                                                                    
                                                                     .                              
                                                                                                    
                  ..                    .                             ..                            
                   .     .                                                             .    .       
                                         ..                                                         
                   .                                      .                                         
                   .                                           .                 .                  
                                                                                   .                
`,y[49]=`                                                                                                    
                                ..                                                               .  
          ..                ..                                                                      
                                                                                               .    
                                                   ..                                               
                                             ..  .                                                  
                                                 .                                                  
                                                                                                    
                                                                                                    
                                                                .                                   
                                                                                                    
                                                                                                    
                                 .,,:;;;::,...        .                                .            
                                ,;iittt1ttii;;i;;;ii;;::,.                            ..            
                              .:;ii11iiiiiiii11tfftt1i;;;;;;:,,,...                                 
                              ,iiiiii;;;;;;;;i;i11iiiiiiiiii11ii1ii;;::,.                           
                             .:111111i;;;;:;;;;;;;iiiiii1i11iiii111iiii1i;:.                     .  
                            .,i11tfft1iiiii;;iiiii1i;;;it1iiii1ttLCLf111tff1;,                      
                           ,itLLfffffffftttt1i1t1iiiiii1tt1iiiiii1111tt11;1tt1;,.                   
           ..             ,ifCGCGCLLLLCCLLffftttt11111iiii11111i1i:i11i11t1t1i11;,.                 
                        ..:i1LCCCCCCCCCCCCCLffffffftt111iiiiiiiiiii11;;i;tft1;ii11i:,               
            .           .,:ii1tfCGGCLLftfLCGGCCCCLfft1ttfftt1ttiiiiifi;i;;ii111iiii11i,       ..    
                        ..:;;i;i1fG80GCLffffLCGGCCLLffttfLCG080fftiiii1i;;;::;11tt1111i:.           
                        ..,:::;;;i1tG080GCLfftfffffLCGCLftttLCLffft11i;itti;;:;ii;;11111:.          
                          .,,,:::;i;iifLCG00GCLti;i1tLfLGGLtff111ttttt1i;iii;iii:::;ii1t1:.         
         ..               ..,,,,,:;:;;;;:;1fG8f1;;ftftii;1LGCCLtt1tttftt11iii;i1;::::;;i11:         
                    .     .....,,,:::::;:,:ittff:tLLti;:,:LCtLGGCLLfft1ttft111i;;;;:;ii;;i1,        
          ..       .       .......,,,,,:;1tf1:;::L0fi;::,;GffCCffCCGGCLftftttf1iiiiii;;;;;i,        
                   .            .....,:1LCfi;.,,:i1ii;::;LL1ffi;i1fLLLGCCLffLCCf1i11i;ii;;:         
                                    ,:fGCf;:,.:,:;1i;;iifCi;::;t11ftfffCCLfLLLCL111t1111;,          
                                   .,iCff1,,.,:::it;;;;;:,:;;1ffttf1ttfftfffCCLti1ttt1i:.           
   .                               ..fCf1;,,.,:;iii;;;;::;iitCfttfffffft11fffLCCf1t1i,.             
                                  ..iCLL;:....:i;;iii;;i11ifLf1itC0GLLLffLLLftfCf11;.               
           .                       ifti:,.    ,;;i;::,,it;tGf;;1tfLG00CLCLCCLfLGt11..               
                                  :t;.       ,ii11;::::;titCti1t1:,itC00008GCCCLtf:.                
                                 .i:        ,ii1t1i::::11;tf1tfi:,:i;;1LG00880Gf1;.         .       
                   .            .;:.     .,:it1i;1i;;i;1:it11fi,,,:::;::;;i1LL1:.     .             
                                ,;,     ,:;tfi:;:t1i;iif;t111;.,,,,,::;;;iii;,.                     
                              .:::.   .;itL1,.;1;itiiiit1Lftt,....,,,:::::,,.                       
                           .,:::,.  .:1fLL1...i;i,ii1111ff1i1t,,...........                         
                     ...,,:;i;;:,,,itfLfti,. ,;;i,:1tft11fiii1:..                                   
                   ,::::::,....,,,ifffti:.   :;11i11i1ii1t111:                                      
                 ,;;:,,..       .,;i11ii;;:::1111i;;ii;1ii1i,                                       
              .,;;;;.     .......,;ii11tft111i;;;,;tf1ii11i.                                        
             ,;1i;;:,. ..,,..   .;;:,..,::::;i;, ,i1t;i1ti,  .                                      
           .;;:;11;:, .,,,.    .i;,.        ,i, .i:::,;ii.   ..                                     
         .,;i:.:Li:,..,:,     .;:.          .:, ,,.. ,;i:                                           
        .:;i;..,i...::;:      ,:    .        .,:,.. .;;;;.      .                                   
        .:i;:   .,:::::.    .,:.              ,,.,..:;:;:.                                          
         .;;,  .,,:,..,.   ,::.               ;;;...,:,                                             
          .1i  ....      .:::                ,1i:,, ,,                                              
           ,;.          .:;;.               .11,,:,.,,. .                                    .      
             .        .:;;;.                ...,::.,,,.                                      .      
                  ..:;;;;:                     .,,,,,.                                              
                 :;1i:,.                       .,::.                                                
                 :;:.                        ..,:;,                                                 
                                              .,ii                                                  
                .                               .,                                                  
                                                                                                    
                                                                     .                              
                                                                                                    
                  ..                    .                             ..                            
                  ..     .                                                             .    .       
                                         ..                                                         
                                                          .                                         
                   .                                           .                 .                  
                                                                                   .                
`,y[50]=`                                                                                                    
                                ..                                                               .  
          ..                ..                                                                      
                                                                                               .    
                                                   .,                                               
                                             ..  .                                                  
                                                 .                                                  
                                                                                                    
                                                                                                    
                                                               ..                                   
                                                                                                    
                                                                                                    
                                 ..,::;:::,....       .                   .            .            
                                .:ii1tttttii;;;;;;;;;;;:,.                             .            
                               ,;ii1t11iiiiii11ttfft1i;;i;;;:,,,,,..                                
                              ,iiii1ii;ii;;;;ii1t111iiiiiiiii11111ii;;:,,.                          
                             .:11tt11i;ii;;;;i;;iiiiiii11i1111111t1iiii11i;,.                    .  
                            .:i11tfft11iiii;;i11111iiii1t11111tttLCCft1ttff1i:.                     
                          .;1fLLLffffffftttt1i11t111ii1ttt1iii1111tttfft1i1tt1i,.                   
           ..            .:1LGGCGCLLLLCCLLLLffftt111t1iii1111111iii1tt1tt11t1i11i:.                 
                        .,;1tLCGCCCCCCLCCCCLLfffffftt1111iiiiiii;i1tti;;ifLf1;ii11i;,.              
            .           .:;i111fC0GCLLftfLCGGCCCCLfft1ttfft1ttt1iiii11;;;i111tt1iii1ti,       ..    
                        .,:;ii;i1L080GLffttfLCGGCCCLLftttfC0080LLf1iii1ii;::;i1tftt1111:.           
                        ..,::::;;1ifG880GGLfftfffffLCCGCfffffGCLfLt11i;i1i;;;;i1i;i1tt11:.          
                         ..,,,,::i;;i1fLG000GCLt1;i1tffLCGGfLftttttfttti;iiii;;;:::;i1tt1:.         
         ..              ...,,,,,:;:;;;::;1fG0f1;;ttf1ii;itCGGLftt1tttttt1iiiii;;;;;:;i111,         
                    .     .....,,,::::::,:;it1LL,1Lf1ii:,,fC1fCGGCLfLt1ttft1i1iii;;;;ii;iti,        
          ..                ......,,,,,:itfti:;::LGii;::,:GLtLLffCCGGCCLfffttt11iiii1i;;;ii.        
                   .           ......,iLGC1;:.,,:ii;i;::;fL1tti;i1fLLLCCCCLfLCCfti1t1iiiii,         
                                   .,iGGCt::..,,::ii;;;ifL;;::;1t1fftffLCCLfLLCL111ttt11;.          
                                   .:fCff;,,..:::;1;;;;;:,:;:itt1tfttffLtffffCCL11ttf1i:.           
   .                              ..;CLfi:,...:;i;iiii;:;ii;1Lt1;tftfffftttffLCCLtt1i,.             
                                  .,fCLt;,.,..,i:;iii;:;11itLt;;1C0CLLLLffLffffLLtt;.               
           .                      .tfi:,.    .:;;i:::,,;t;1Ct;;t1fC000CLCLLLLLfGC1t:.               
                                  i1,        :ii11;::::;t11t1iti;i,;tC880G0GCLCGft1..               
                                 ,i,       .:ii1tii::::i1;1t1t1;;:,;;;1C0888880Ct1:.        .       
                   .            ,;:      .:i111i:i1;;;;1::titt:,,,:;::::;ii1LCfi,.    .             
                               .::,    .::1tt;:i,t1iii1f:111i,,.,,,,,::;:;iii;,                     
                              .:::.   :itLf:.,i1:iLi1iittttt1......,,:::;;::,.                      
                            .:::,.  ,ifLCt:..:iii.iii11tfftif1,,....,,,,,,..                        
                      ....:;i;;:,,;tfLfti:.  :;;;.:1tft1tft;11,..      ..                           
                  .,,:::;::,,,,,,:1fft1;,   .;;1ii11i1iitLt11,                                      
                 ,:::,.,.        .;i1;;::,,,;11t1i;i1ii1111i,                                       
               .;;;:..   .......,:ii111ttt11iii;;:;tftii11i.                                        
             ,:;:;;:.  .,,,..   ,ii::,:;;;;;ii:,.:;11ii1t1,  .                                      
           .;i;iii::..,,,.     ,i;,         ;i. ,i,:,,;i1,   ..                                     
         .,:i:,f1....,::.     .;.           ,;. :,,. ,i1;.                                          
        .:;;;.,i. ,::;:.     .:, .  .        .,:.., .iii;,      .                                   
        .;i;,  .,:::::,     .::.              :,.,..:;::;,                                          
         .;:. .,,,,....   .,::.              .:;;..,,,,..                                           
          ,1:   ...      .:;:                ,ii:,,.:,                                              
           ::.          .:;;                .1i,,:..,,  .                                    .      
            ..        .:;i;.                ,,.,::.,,..                                      .      
                    .:;;;:                    .,::,,,.                                              
                 ..;i;,.                       .,::..                                               
                  :;,                        ..,:;.                                                 
                  .                            ,ii                                                  
                .                               ..                .                                 
                                                                                                    
                                                                     .                              
                                                                                                    
                  ..                    .                             ..                            
                  ..     .                                                             ,    .       
                                         ..                                                         
                                                          .                                         
                   .                                           .                 .                  
                                                                                   .                
`,y[51]=`                                                                                                    
                                .                                                                .. 
          ..                ..                                                                      
                                                                                               .    
                                                   ..                                               
                                             ..  .                                                  
                                                 .                                                  
                                                                                                    
                                                                                                    
                                                               ..                                   
                                                                                                    
                                                                                                    
                                  ..,::::,,...                            .            .            
                                 ,;i1ttttti;;;;;::;;;;;:,.                             .            
                               .:;i1t11111ii1111ttft1iiiii;;:,,,,,...                               
                              .;ii1111iii;;;ii1tt1111iii11111111111i;;::,.                          
                             .:11ttt111iiiiiiiii11iiii1111111111tt111i1111;,.                    .  
                           .,:111tfft111111iii11t1iiiiit111111tffLCCfttttff1i:.                     
                          .itLCLLfffffffttt11111t111ii1ttt1ii111ttffffftti11111,.                   
           ..            .;tL0GGGCLLLLCCLCLfftfft111tii1ii1111i1ii1tftttttttii11i:.                 
                        .,i1tCGGCCCCCCCCCCCLLfffffftft1t11ii11ii;i11t1ii1LLLt;ii11i;,.              
            .          .,:ii1itfC00CLLftfLCGGCCCCLfft11ttft1ttf1i1iii11ii1fffft11111ti,.      ..    
                       ..,:;i;;i1L080GLfftffLCGGGGCLLftttfCGG00CLf11i;i11;;;i1ttfftt111:.           
                        .,,::::;i1ifG880GGLfffffLLfLCGGCLfLLLCGCLLftt1;iii;;;i1t1i1tft11:.          
                        ...,,,,::i;;i1fCG000GCLt1ii1tftLCG0CLffttttftff1ii;i1ii;;;:i1ttt1,.         
         .               ...,,,,,:;:;;::;;1f00tti:1ff1ii;itLGGCfft1ttttttt1ii1iii;;;;i1tti,         
                    .     .....,,,:,::::,:i1tiLG:;Lf1ii;:,iCtfCGGCCLfttttft111i111iii1i11t:.        
          ..      .        ......,,,,,,;1ff1;:;;,1f;ii::,,CCtLfffLGGGGCCLLfttf11i1ttt1iii1;.        
                   .           ......:tCCfi;,.,,,;::i;:;;fLit1i;itfLLLLCGCLfLCCtti1ft1iii:.         
                                   .:t0CL;:,..,:,:i;;;;itLi;::;1t1fLftffLCLffCGL11itftti:.          
                                  .,;CLf1:,,..:::;1i;;;;:,:::;1t1tfttffLfffLfLCLt11tL1;,.           
   .                              .,tGCf;,....:;;;iiii;;:ii;itti:fftffffttttffCCCff1;,              
                                 .,iCLLi:,....,i:;ii;:::11itti;:i00CLLLLffLLffffGffi..              
           .                     .:ft:,..  . .;ii;:::,.;t;iti:11ifC080GLCLLLLLfL0ff;..              
           .                     .ii.       ,ii111;:,:,;t11ti1t;:;::tC880G00CLC0Ctt,.               
                                 :;.      .:;;i1tii:::,i1:111f;:;;,:;;1C0888888Gf1;.        .       
                   .            ,;,     .,;i111;,i1;;:;t;,1it;,:,,,:;:::;ii1fGC1:.    .             
                               .,:,   .::itti:;;.f1i;i1t;;1t:.,,,,,:,,::::;iii:.                    
                              .,::.  ,itLL1,.:11,iCi1iitfttti.,..,,.,,::;;;;:,.                     
                            .,::,. ,ifCCf;...ii1;.iii11tffL1L;,.....,,,,,,,,.                       
                         .,:i;;:,:tLCLti:,. .;:i:.;1tft1fLtit;..............                        
                   .,,::;;;::::,:ifft1;:.   ,;i1i11ii111tft1i.                                      
                 ,::::,,,.      .,;ii:,,.,,,i11t1i;1ft1i1t1i.                                       
               .:;::,.  ........,;ii1111111iiii;;::tLfi111;.                                        
             .,:;;;:. .,,:,...  :1;::;;iiii;ii:,.:;i1ii1t1,  .                                      
           .:;;;;:,,..,,,.     :;:.        .1;. ;;,:,.;11:   ..                                     
         .,:i:it, ..,:::      ,;.           ::..i,:. .i1i.                                          
        .:;;;.i: ,:::;:.     .:, .  .        .,:.,, .;1i;:      .                                   
        .;;:, ,,::::,,.     ,::.             .:,:, .:;::;:.                                         
         ,;,. ..,:,.  .   .,::.              .:;;..,,,,...                                          
          :i,  ....      .:;:                ,i;,,,.:.                                              
          .:,.          ,:;;                .1i,,:..,,  .                                    .      
            ..        .:;i;.                ,,.,::.,,..                                      .      
                    .:;;;,                    .:;:,::,.                                             
                 . .ii:.                      .,:::,..                                              
                  .;:.                       ...:;.                                                 
                  ..                           ,i;                                                  
                .                               ..                .                                 
                                                                                                    
                                                                     .                              
                                                                                                    
                  ..                    .                             ..                            
                  ..     .                                                             ,    .       
                                         ..                                                 .       
                                                          .                                         
                  ..                                           .                 .                  
                                                               .                   .                
`,y[52]=`                                                                                                    
                                .                                                                .. 
          ..                .                                                                       
                                                                                               .    
                                                   .,                                               
                                             ..  .                                                  
                                                 .                                                  
                                                                                                    
                                                                                                    
                                                               ..                                   
                                                                                                    
                                                                                                    
                                   .,,::,,...                             .            .            
                                 .:;itftt1i;;;;::::;;;;:,.                             . .          
                                ,;iittttt11111i11tft11iiiii;:,,,,,...                               
                              .:ii11t111iiii111ffttt1ii11111111t1t1ii;;:,..                         
                             .,111tttt1111iiii1tt1iiii1111111111ft11111111i:...                  .  
                           .,:i11tfftt11111iii1tt111ii111111tttfffCCftttfftt1:...             .     
                          .itLCLLfffffffttt1111ttt1tii1t1i1ii11ttfLLfLffti1i1f1:..                  
           ..            .ifC0GGGCCLLLCCLCLfffffttttt111ii1111i11i1tfffff1ttiit1i:.                 
                       ..;11fLGGCCCCCCCCCCCLLfffffttft1tt11i111i;;ii11ttfLLL1iiit1i;,.              
            .          .:;ii1itfC00CLLftfLCGGCCCCLfft11ttfttttft111iii111tLffft11i1tt;..      ..    
                       .,::;;;i1tL088GLffttfLCGGGGCCLftttfCGGGGCLft11iii11ittttffft1111,.           
                       .,,,::::;iiiL0880GGLLffffLLLLCGGCLtfCCC0GCLftt1iiiiii1ttft1tfft11,.          
                        ...,,,:::i;;i1fCG000GGLft1i1tfffCCGCLLfttftffff1iiii1t11iii1tft1i,          
         .              ....,,,,,;::;::::;1L00f11:iff1iii;1LCCCLfttttttttt1ii111t1i1i1ttt;.         
                    .     .....,,,:::::,,;i1tif81,tfi11i:,:fttCGGGCLLftttft111i11tttt111t1,.        
          ..      .         .....,,,,,:;1ft1;:;1,:;;11;::,1L1fLftLGGGGGCLLfttt11iifftt1i1i,.        
                   .           .....,;fCCt;;,,.,,::;i;:::1C111i;1fLffLLLGCCLLCCt1i1fft11i,.         
                                  .,;LGCf::,..,:::;i;;;;1fi::::itffLLttffLLLfCGC1iitftti,.          
                                  .,1GLf;,,...,::;;i;;;;:,:::;1t1tffffLLfffLLLCCt11tfi:..           
   .                             .,:CGC1:,....,;;:;1ii;:;ii;;11:;ffffffLffftffLCCLft:..             
                                 .:1CLt;:.... :i:;ii;:,,i1i1t;::f0GGLLLLLfLLffftCLfi..              
           .                     .;f1,..   ..,iii::::,.:tiit;;1i1fC080GCCLLLLLff8Ct;..              
           .                     .i;       .:ii111;:::,;ti11it;:::;:tC880G00CCC00ft:.               
                                .;:      .,;;;it1i;;;:.i1:tit1,,;;:,;;1C088888@0L1;..       ..      
                  ..            :i,    .,:i11t1;,i1;;,it;,111,,:::,:::::;iiifGGf;,    .             
                               .,:,   ,;;tt1i:i:.f1i:1ftii11.,,,,,,,::::::;;iii,.                   
                            . .,::. .:tLCf;.,;1i.1C;11i1ftft:.,...,,,,,::;;;;:,                     
                             ,::,..;1fLfi,..,1;1,.iii1tttft1f,,......,,,::,,,.                      
                          .,;;::,1fCCfi;:.  ,;;i,,;ttt11fLtit:..............                        
                   ..,,:::;;;;;;itff1;:,.   :i1ii11i1111tff1;..                                     
                 .:::;:::,.  ....,;i;,,...,,i1t11;;1Lft1tffi.                                       
               .::::;:..........,:i1i111ii11iii;;:,1ff111ti.                                        
              ,:;;::,..,:::,....;1;;;i11iiiii;:,:;;i1;i1tt,  .                                      
            ,;;:;:,,,,,::.     :;,.   .....:1: .;;::,.:11;   ,.                                     
         .,:;;1;. .,::;,      ,:           .:, :i,:.  ;t1,                                          
        .:;i::t..,:;;:,      ,;, .  .       ..,:,;,  :ti;:.     .                                   
        .;;:.,,,;;:,..      ,::.             ,:,;, .,;:,;;,                                         
         ,;,. .,:,.   .   .,::.              ,:i: .,,,...,.                                         
          :i,  .. .      ,:;:                .;:.,,,,.                                              
          .:,.          ,;;;                .i;,,:.,,.  .                                    .      
            .          ,;i;.                ,::::,.,,..                                      .      
                     ,;;;,                   .,:;::::,.                                             
                 .  ;1;,                     .,:;:::,.                                              
                   ,i,                       ...;;.                                                 
                   .                           .;:                                                  
                .                                                 .                                 
                                                                                                    
                                                                     .                              
                                                                                                    
                  .                    ..                             ..                            
                  ..     .                                                             ,    .       
                                         ..                                                 .       
                                                          .                                         
                  ..                                           .                 .                  
                                                               .                   .                
`,y[53]=`                                .                                                                   
                                .                                                                .. 
          ..                .                                                                       
                                                                                               .    
                                                   .,                                               
                                             ..  .                                                  
                                                 .                                                  
                                                                                                    
                                                                                                    
                                                               ..                                   
                                                                                                    
                                                                                                    
                                    .........                             .            .            
                                   ,;i111ii;::::::::::::,.                             . .          
                                 .:i1ttftt1111111ttt1111i;;::,,,,,..                                
                                :ii1tftttt11111ttfLt11i1ttt1ii1111iii;::,.                          
                              .:111tftt1111111ttt11111111ii11ttftt111ii111;,..                   .  
                            .,;11tffft11111ii1ttt11iii1ii1111111ttLLf1ttt1tt1,..              .     
                          .itfCLfffffffftft111tff1tti1t1ii111111ttLt1ttft1iiffi,..                  
           ..            .ifC0GGGCLCLLLLLLfffftffttfttt1i;;iiiii1i11tL1iittii1t1;,.                 
                       .,it1fCGGGGGCCCCCCCLLfffftftfLftttt11t11i;;iii1i1tfffiii1t1i:..              
            .          ,;ii111tLC00CCCLffCCGCCLLLffft1ttftttttft11iiiii1fff1tt11i1tfi,..      ..    
                      .,::;;ii11tC088GLfftffLCGGGCCCfffttffLCLLCLfftt1ii1tfffffftt1tt1:..           
                      .,,:,::;;;ii1L0800GCLfffffLCGCGGGCLfLLCCG00Gfttt11iiitLLLLLLff111,..          
                      ....,,,::::i;;i1fCG000GCCftft1fffLCGCLLLLLfLffffft1iiifLLLffffft1i,.          
         .            ......,,,::;:::::;;itL00f1t1:itiii111fCCCCLfttttttftt111tfffffffft:,.         
                    .    ....,,,,:,::::,:i11t1tGGi:;itf1;,,iftLGGGCLLffttftt11ii1ffffttLi,,         
          ..      .        ......,,,,,:1ffti::iLf,:1LL1;:,:LttLtfCCGGGGGCCfttt11i1ffft1t:,,         
          .        .           ....,,1CCf;::,,.,,,,ifi;::;Lfii;;fLCLfLLLCGCLLLf11i1Lft1;..          
                                  .,10CL1,:,..,;::::;;;;;1i::,:tfLLfLftffLLLLGGfiii1Lt:..           
                                  .:CGL1:,,...;;:;:;;;;;:::::;1ifffLLfCLLLfLLLCCt1t1i,..            
   .                             .,iGGL;:....:i;:;;i1i;::ii;;i:;fffffLLLfffffLLCCCC;..              
                                 .:fCL;:,....:i;;;;;:,,,iiii;;;f80GCLLLLLLLLffftGCf,..              
           .                     .if;..    ..;ii;,::,..;ti1i;1:i1fC080GCLLLLLLfL@C1,.               
           .                     ,i,      .:iii11ii::,.1titit;,,:,;;tG880000CCG80fi,.               
                                ,;,    .,;1i;it11i;;:,,Li:1t1,:,::;,:;1C088888@0f1:.        .       
                  .,            :;,   ,:;i1itf;,:ii;,,tfii1t:.,,,:,,::::;iiifCCf;,    .             
                               .,:, .:i1fti;;;:,:ti;:LLt11fi..,,,,,,,::::::;ii1;.                   
                            . .,,:..,1LCt;..i11.,tt;1CLtt;C1.,....,.,,,,,:;;;;:.                    
                             .:::,;i111;,..,1i1:,,i11t1tt1fC:,......,.,,,:::,.                      
                           .,;::ifGL1;;:.  :i;i:,;1t1it1tLLL;,.........,,....                       
                     ..,,,:;i;;1ffti;:,.   ;i11;11iiiff1tLLt:.                                      
                 ..,:;;;:;:,,,,,,,:i, .. .,i1t11i;:ifCfttLL:.                                       
               .,:::;;:.,,,..  ..;i;::i;;;i1iii;:,.;fLt1tL1.                                        
              .::;;;;::::::,,,.,;111ttt1iiiii::;;,,;1ii1tt,  .                                      
            .,:;;;;::::;:,..  .::....,,,,.:1:,.;;,::,..1ti.  ,.                                     
         ..,;ii:..,::;;,.     ::          .:...i::;.  .1t;                                          
        .:ii;ti.:;;;;:.      ,;, .  .      ...:,:;.  ,iti;,     .                                   
        .;;:::.:i;:,..      ,::.           ..:::;.  .:;::;:.                                        
         :;:...,:.    ,   .,::.             ,,;;, ,,,,...,,                .                        
         .;;.     .      ,:;;.              ,::..,,,,.   .                                          
          .:.           .;ii.              .:i,.,,.,... .                                    .      
            .          .;i;.               .:::,::,,,,..                                     .      
                     .:;:,                  .::,::;:::,                                             
                 .  .i1:.                    ,:,:;:::,                                              
                    :;.                      .,:i;..                                                
                    .                          .,.                                                  
                .         .                                       .                                 
                                                                                                    
                                                                                                    
                                                                                                    
                  .         .          ..                             ..                            
                  ..     .                                            .                ,    .       
                                         .                                             .    .       
                                         .               ..                                         
                  ..                                           .                 .                  
                                                               .                   .                
`,y[54]=`                                .                                                                .  
                            .   .                                                                .. 
          ..                .                                                                       
                                                                                               .    
                                                   .,                                               
                                             ..  .                                                  
                                                 .                                                  
                                                                                                    
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                                                    
                                      .....                               .            .            
                                   .,;iiiii;;:::,,,,,,,,..                             . .          
                                  ,;i1tfft111111111tt111i;;:,,,.....                                
                                .:ii1tffffttt11tfLLft11tt111ii111iii;;::,.                          
                               .;11ttffttttttttttt11111t1ii111tttt111iii11;,.                    .. 
                            ..,i11tfft11111ii1t111iiiiiiii1111i1t1fLftt1111ti,.               .     
                           :1tLfttffftttttt11ttfftt1i11iii1111i1t1Lt1ttftiiift;..                   
           ..            .ifCG0GGCCLLLLLLffffftfftfftftii;;;iiii11iitLti1t1iitt1:,.                 
                       .,ittLCG00GGGCCCCCLLLffffffffLLtttt1111iiiiiii1i11fft;ii111i,..              
            .          ,i1i1t1tLC00CCCCLLCCGCCLLffffttffffttttfft11iiii1ffLi1t11i1tf;,.       ..    
                      .,;;;;1i11tL0880LfftffCCGGGCCLffLtttfLLfLLCfftt1i1ttt11tttt1itti,..           
                      .,::::;;;iiiiL0800CCLfffLLLCGGGGCCffffLCG000Lftt11i;itttffffft1ti..           
                      .,,,,,,:::;;;;i1fC0000GCCLfLL1fLfLCGCLLLCCLCffffft1ii1ffLLfLLLf11:..          
         .            .....,,,,::;::::::;itL08Cttti:1i11111fCCCCLfttttttftt11t1tfLLffffi,.          
                    .    ...,,,,,::::,,,:i11tttCGf::itfti:,;LtfGGGCLLfffftt111iiitLfftLf,.          
          ..      .        .....,,,,,,;1fL1i;:iLG;,:fLt;:,,fL1LtfCCGGGGGCCftt111i1tLftfi..          
          .        .           ....,:tCC1;::,,.:;,,,i1;::;tL1i;;LLCLLLLCCGCLLft1ii1LLti,.           
                                 ..,tGLt;,,,..:;::::;;;;;ii::,:tfLLLLfffffLLLGCtiiitL;..            
                                  .:CGLi,,,..,i::;;:;;;;:::::;11ffLLLLCLLLLLLfCCtt1i:...            
   .                             .,iGGL;,,...;i;::;iii;::ii;i;:1LfffLLCLLLLLfLfLCCL,..              
                                 ,;fGf;,.....;i;;;;::,,,iiii;;iG80GGLLLLLLLLffft0Ct,.               
           .                     ,if;..    .:ii;;,::...;ti1;iiii1fC080GCCLLLLLLG@Ci,.               
           .                     ,i,     .;iii1iiii::,.tf;t111:,:,::tC880080CG0@0f;..               
                                ,;,    ,;1ti:1t11i;;,.,L1;1tt;,,,,:,:;1C00088@8Gfi,.         .      
                  .,           .:i,  .:;it11ft;,:ii:.,tf1i1ti.,,,,:,::::;i;itLLf;.    .             
                               .,:, .;1tLti;;;,.:L1;:fCt1itt,.,.,,,,,,:::::;ii1;.                   
                            . .,,:..:1Lfi:.:1t;.;1t;1Lftf;L1.,....,..,,,,,:;;;:.                    
                              ::::;iii;:,..i1ii,,.1t1i1tttft,,.......,..,::::,.                     
                            .:;:1fL1i;;,  .i;;i,,it1iitt1fCf:,..........,,,,.                       
                         .,:ii;iLL1;;,.   ,1i1;;t1;i1tfttLCf,..                                     
                  ..,,:;;;;;i;;;;,;;,    .:itti1i;,itCLftLCi.                                       
               ..,,,:;tLi:,..   .;1;,..::;i11ii;:,.,tLfttLL.                                        
               .:::::1L1::::,,,,;111ttt11iii;;;;,..:iii1tf;  .                                      
             .::::;;:ii;;:,....;:.,,:;;::,i1,.::,,:;,..;f1,  ,.                                     
          .,:;;:,,:;iii:.     :;          ,:. :;,::,  .;fi.                                         
        .,;i1ti,;ii;;:.      ,i, .  .      ,.,:,;;.  .:11;:     .                                   
        .:i;1,.;i;:...      ,;;.           .,::::.  .,::,;:,                                        
         :i;, ...     ,   .,:;.            ..,;:. ,,,,...,:,               .                        
         .;:.     .   .  .:;;.             .,;: .:,,,.   ..                                         
          ,,            .;ii.              ,:i. :,.,.....                                           
                       .:;;.              .:::. ,::..,,,                                     .      
                      ,;;,                 .;,  ,:;,:::.                                            
                 .   ,1i,                   ,..,:i;;;:.                                             
                     :,                      .,:i;,..  .                                            
                                                ..                                                  
                .         .                                       .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                  .         .          ..                             ..                            
                  ..     .                      .                     .                ,    .       
                                         .                                             .    .       
                                         .               ..                                         
                  .,                                           .                 .                  
                                                               .                   .                
`,y[55]=`                                .                                                                .  
          .                 .   .                                                                .. 
          .                 .                                                                       
                                                                                               .    
                                                   .,                                               
                                             ..  .                                                  
                                                 .                                                  
.                                                                                                   
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                                                    
                                                                          .            .            
                                    .,;;;;;;;::,,,,..,...                              . .          
                                   ,;1ttttttt1tt1111t11ii;:,,,,....                                 
                                 .;i1tfLLffftt11ffLfftttt11iii11iiii;;::,..                         
                                ,i11tfLfftttttttfft1111tiii111tt11111iii11;,..                   .. 
                             .,:11ttttt11111i1t1i1iii;i1ii1111i111fLf111111t;...              .     
                           ,;1tftttffttttttt1tffftt1iiiiii1111i111Lf1fff1ii1tt:..                   
           ..            .:tLG0GGCLLLfLffffftffLLtfftfti;;:;iii111i1tft1t11i1tti:.                  
                       .,;ttLGGG0GGGCCCCCLLfffffffffLLfttt111iiiiiiii1i11fL1iii111;.                
            .          ,i111tttLC08GCCCLCCGGCCLfffffffffffttttfftt1ii;itfffi1111iitt:..       ..    
                      .:;;;i11i1tL0880CffffLCGGGGCCLffCfttfffffLCLfft11tttti1tttt11ft;..            
                      .:::::;i;ii11f0880CCLfffLLCCGGGGCCffffLLC000Lfftttiiit11ttttftit:..           
                     .,,,,,,::::;i;;i1fC0000GCLLfLLftLLCCGGCfLCGCCLffftt11i1tffttffft1i...          
         .           ......,,,,::;;::::;;itL08Gfttt;;i111ttfCCCCCLftttttfttttf11tfLffft:..          
                    .    ...,,,,,::::,,,:;i1tftLCL1:;tft1:,:fffGGGGLLfffftt1t1i;ittfffL;..          
          ..      .       ......,,,,,,;1Lf1i;:;LG1,,:fti:,,tCtftLLLGGGGCCCftt11iiitffff,.           
          .        .          .....,:tCLt;::,,,::,,,,i;:::1Lti;iLLLLLLCCCGCLLft1iitLLt:..           
                                  .,t0Lt;,,,..;;:::::;;;;;i;::;ffLLCLfffffLLCCL1;i;ft,..            
                                  .:CCfi,,,..:i:;:;::;;;:::::;itffLLLLCLLLLLLLCCft1;...             
   .                             .,;GGL:,....i;;:::;ii;::ii;i;;tLffLLCCLLLLLfLfLCGt...              
                                 ,;tGL;,....,ii;;;;;,,,,i1ii;;iG000GCCLLLLLLLLtL0Ci,.               
           .                     .;fi..    ,:ii;;,::...;f;i;1it1ifC088GCCLCLLLC08L;,.               
           .                     ,i:  . .,1f1ii:1i1i,..tf;111f;,,,::1C888880G08@Gt:..               
                                ,i,   .;itLi;t1i1i;;,.,Lti1111,,,,:,:;1CGGG0@88Gt;..         .      
                  .,           .:i,  ,;i1f11fi:,:ii:.,tL11ttt,,,,,:,,:::;;;itLLt:.    .             
                               .,:, ,itfL1;;i:.,;fii:tLt1iiL:.,.,,,,,,,,:::;ii1;.     .             
                            .  ,,:,,;1t1;,,111.,:i1itfttfitf.........,,,,,;;ii;.                    
                              ,::;i1i;::..:1ii;,..1tiittttff,.,.........,::::,.                     
                             ,;;fCf1;;:.  ;i;i;.:11iii1tttCL;,,.........,,,,..                      
                           ,;i;1CLi;:,   .;ii1:;ti:i1tfftLCC:,..        ...                         
                   ...,,,::;1ii;;,:;,    .;1tii1i;,:1fCLtLCt..                                      
               . .,,,::i1i:,..  .;i;,  ,:;i11ii;:...1ffttfC:.                                       
               ..:;;::1Lt;:,,..,;1111111iiii;;;:. .,;ii1tLi. .                                      
              ,:;;;::;t1;;:,...::.::;ii;::1;,,;..,,::..:tt;. ,.                                     
          ...:;;:::;i1i;,..   ,i.         ;,..;:,:;,   ,t1:                                         
        .,:itfi::11ii;,.     ,i;..  .     .,.,:,;:.   ,;ti:.    .                                   
        .:i11;.:ii;,..      ,;i,           ,,::;:   ..::::;,.                                       
         ,i;,  ..    .,    ,:;,            ,.,;:..,,,,,..,::.              .                        
         .;:.     .   .  .;;i,            .,.i, .:,,,.   ..                .                        
          ,.            .:i1,             ,:::  :,.,.....                                           
                       .,:;,              ,::.  ,::..,,,.                                    .      
                      .;i;.               .;,   ,;:.::;,                    .                       
                 .   .;i:.                .:.  ,:1;:;;,                                             
                     .,.                     ..:;i:,.  .                                            
                                                                                                    
                                                                  .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                  .         .          ..                                                           
                  ..     .                      .                     .                ,            
                                         .                                             .    .       
                                         .               ..                                         
                  ..                                           .                 .                  
                                                               .                .  .                
`,y[56]=`                                .                                                                .. 
          .                 .   .                                                                .. 
          .                 .                                                                       
                                                                                               .    
                                                   .,                                               
                                             ..  .                                                  
                                                 .                                                  
.                                                                                                   
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                                                    
                                                                          .            .            
                                     .,:;;;::::,,,,......                              . .          
                                   .:i1tttttttt11111111i;;:,,,.....                                 
                                  ,;i1tLffffffttffLfffttt11iiiiiiiii;;:,..                          
                                .:ii1tfCLffffftfLLttttt11111111111111ii11i:,.                    .. 
                              .,;11tttft11111i1111iii;i1iii11111iitLt111t111;.                .     
                           .:;1ttttffttttttt1ttfttt1iiii;i111i11i1Lftfffi;ii11:.                    
           ..             ,iLCGGCCLffffffffttfLLfffttfti;;;;;ii11i;1tfftt1iittt;,.                  
                       .,:1ffG0G00GGCCCCLLffffffffffCLfft11iiii1iiiii1iit1tiiii1ii:.                
            .          .;111tttLC080GCCCCCGCCLLfffLfLfffftfftttftt11i;i1tff1111iii1i,.        ..    
                      .,;;;ii1i1tLG080GLfLfLCGGGCCLLffCLftfffffLCLfft11ftft1ttttt1tt1,.             
                      .::::;;iiii11fG880GCLfffLLCGGGGGCCfftffLCG00Cffttti;1tt111ttt111..            
                     .,,,,,,::::;i;;i1fCG00GGCLLfLLLfLLCCGCCfLCGCCCffftt11i1tftiiitf1t:..           
         .           ......,,,::::;::::;;1tL080Lttt1;itttftfCCCCCLfttfttttttff1111tfft1..           
                    .  ....,,,,,,::::,,,:;i1tLttLLf;:ift1;,:fLfCGGGCLffffttttti;1ttffLt..           
          ..      .       .....,,,,,,,:itft1i::fG1:,,;t1;,,iCfttLfLGGGGGCCft11iii1fLLL;..           
          .        .          .....,,1CCt;::,,,;::,,,:;:::iLti;1CfLLLLCCCGCLft1ii1tLLi...           
                                  .,1GL1;,,,.,;:::::,:;;;;;;::;ffLLCLfffffLLLCfiiiit;...            
                                  .:LCfi,,,..;;:;:;;::;;;:;;:;1tfLLLLLLLLLLLLLCCfti,...             
   .                             .,:CGL:,...,i;;::::ii;::ii;;;itLLfLLCCLLLLLLffCGC;...              
                                 ,:1GL;,....:ii;;;:;:,.,;1i;;iiL000GCCLLCLLLLLtG0L;,.               
           .                     .;ft,.   .,;ii;;,:;...;fiii1ittifLG88GCCLCLLCG88t:..               
           .                     ,;:  ..,;tf1i:,ii11...tLi1t;tt,,,::1C888@@80088Li,.                
                                ,i:  .,itLt;ii;i1;;;...ffi11it:.,,:,:;iLCCC0880C1,.          .      
                  .,            :i, .:iitf1t1;:,:ii:.,1fi111t;.,,,:,,::::;:itLft:.    .             
                               .,:,.:1tLfi;1;,.,;1ii,1L11;;L1.,.,,,,,,,,:::ii11:.     .             
                            .  ,,:,,i11i:,i11;.;,;1ittftf1;L:........,,,,:;iii:.                    
                              .::;i1i;:,.,1i;i,,.,11iifftftL;.,.........,:;;:,.                     
                             .;;tf1i;;:. :i;;i:.;1iiiiitftLCt,,........ .,:,..                      
                           .,;ifGf;;:,   ,ii1i,iti:;1tfLffCG1,,.        ....                        
                    ......,:it1ii,:;,    :i11;11;:.,1tCCffCC:..                                     
               .   ,::,,,;;::,. .:i;,  .,;i1iii;:...;tfftfGt..                                      
                  .,;;,:i;:,....:1iiiiiiiiii;;;,. ..:ii11Lf:..                                      
              .,::;:;:;1i;:,...:;::;i11i;i1:,;,..,,::,.,if1: ,.                                     
             .:;;::::i1i:,..  ,1;        ,i,.,;,,:;,.  .i1i.                                        
         ,,;1t1::;11ii;,.    .it:.  .     ,,.,:,::.    :i1;,    .                                   
         ,itt1:,:ii:..      .;i;.         .,.::;:    .,::,;:.                                       
         .11;. ...   .,    ,:;;.          .,.:;,..,,,,,..,::,              .                        
          ;:.     .   .   :;i;.           .,,i, ,:,,,.   ...               .                        
          ,.             ,;i;.           .:::,  :,,,.. ...                                          
                        ,;;:             .:;,   ,:: .,,,:                                    .      
                      .:i1:              .;:   .,;: ,:::.                                           
                ..    ,;;,                :.   ,:1::;;;.                                            
                      ..                     ..,:;;:,.                                              
                                                                                                    
                                                                  .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                  .         .          ..                                                           
                  ..     .                      .                     ..               ,            
                                         .                                             .    .       
                                         .               ..                                         
                  ,.                                           .                 .                  
                                                               .                .  .                
`,y[57]=`                                .               .                                                .. 
          .                 .   .                                            .                   .. 
          .                 .                                                                       
                                                                                               .    
                                                   .,                                               
                                             .. ..                                                  
                                                ..                                                  
.                                                                .                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                                                    
                                                                          .            .            
                                     .,,::::::,,,,......                               . .          
                                    ,:i1tttt1tt111i1111i;::,,.....                                  
                                  .:;i1fffffftftffftfLttt1iiiiiiii;;:::,..                          
                                 .;iittfCCfffffLLLftttt1111111i11111iii11;:.                     .. 
                               .,i11tttfft111111t1iiii11iii1111iiitft1i1ti1i:.                .     
                            .:;111ttfttttttt111111tii;ii;1111i11i1LLftftii;i1i,.                    
           ,              .:tLCGCLLfLfffffffffLLffftttt1;ii;;iit1ii1tfLt1iiitft:,.                  
                       ..,iffC0GG0GCCLLLLLffffLffffLCCfft1iiii111ii111;1ti1i1ii1i;,.                
            .          .:i11tffLG000GCCCCCCCCLLLffLLLLffffftt1tftt11iii1tf1111ii111;,.        ..    
                       .:;;ii111tfG080GLLLLLCGGGCLLfffLCftfffffLLLfft1fftL11ttttt1fti,.             
                      .:;::;;iii1i1tG880GCLfffLCCGGGGCCLfttffLLGG0Cfffffi;1tt111ttf1t;.             
                     .,,,,,,:::;;;;;;1tCG00GCLLLfLLCLLCCGGCLfLCGCCCfffff1111tt1ii1ttt1,.            
         .           .....,,,:::::;::::;;1tL080CfttfiitttfffCGCCCLfttttttttttt11tttftt:..           
                       ....,,,,,,::::,,,,:;itCLtfft1;:1tti,:fLfCGGGLLfffftttf1;;1ffLtL:..           
          ..      .      .....,,,,,,,,,:i1t1i;:tCi;:,:;1;,,iCLttLfLGGGGGCLft11iiitfLLt...           
          .        .         .......,:1ti;:::,,;:::,,,::,:;ff1;fLfCLLLCCCGGCft1ii1tLt,..            
                                  .,;CLti,,,.,i::;:::,::;;;;;:1LfLLCLLfffLLLLLtiii11,...            
                                  .,fGf1:.,..i;:;::;::::::;i:;1ffLLLLCLCLLLLCLCLft:....             
   .                              ,:L0L;....;i;;:,::;i;:,i1;;i1tLLLLCGLLLCLLLffCGL,,..              
                                 .:;CG1,....;iii;;;;:,,.;1i;ii1t000GCCLLLLLLLff00t,..               
                                 .:tf;.   .:ii;:;,:i...;fiiii;tfttLG880CCCGCCG0@G1,.                
          ..                     .;;. ..:itt1;.,ii1t,..tC11t;ifi,:::1C888@@808@0t:..                
                                ,i:. .;tLL1ii;iiii;;...tfit1it1.,,:,:;ifLLLG88Gf;,.          .      
                  ,,            :i:.,i1tft1ti;:,:;i;..iti1i1t1,,,,:,,:::::;1tff1,.    .             
                                ,::.;1fLti1;:..::iii:if1t;,tf:.,.,,,,,,,::;ii11:      .             
                            .  .,,::ii1i,;tii.,;.:1ittfLtt;ti.,......,,,,,;iii:.                    
                              .::;i1i;:,.ii;i:,,.:1iiitCtf1ft,,,.........:;;;:.                     
                              :itt1i;;:..i;;i;,.i1iiiiitftfCL:,,....... .,:,..                      
                            .:1LGt:;:,  .iii1,,11;::11tLLfCGL:,..        ...                        
                       ... ,;1fti.,i:   .;i1::1i;:..1tLCffC0i..                                     
               .     .,::::;;;, .,i;,.  ,i1i;ii;:...:tfftfCC,.                                      
                     ,;;:::,,...,1i:::;;iiiii;:.   .,;i11fCL,.                                      
               .,,,,:;::;;:,,..,;;ii1111ii;,:;. .,,::,.,;tft,,.                                     
              .:;;::::;i;:,....1t,.......;;..:,,,:;,.  .;11;                                        
         .,,:i1;;;;11ii:,.   .;Cf,. .    ,:..::,::.    .;ii:    .                                   
         .:tff1::;1i:,.     .:1f;..      .,..::;:    ..::::;,                                     . 
          ;fi:. ...  .,    .:ii:         .,,.::, .,,,,,,..::,.             .                        
          :i.     .   .   ,iii,          .,.,i. ,:,,,..  ....              .                        
          ,.             .;ii,           ,::,. .:::,....,.                                          
                        .;i;.           .:;,    ,;:  ,,,:.                                   ..     
                       ,;1i.            .;:.   .:i: .::;,                                           
                ..    .:;:               :,.   ,:1:,;;;,                                            
                      ...                    . .:;::,.                                              
                                                                                                    
                                                                  .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                  .         .          ..                                                           
                  ,.     .                      .                     ..               .            
                                         .                                             .    .       
                                         .               ..                                         
                  ,.                                           .                 .                  
                                                               .                . ..                
`,y[58]=`                                .               .                                                .. 
          .                 .   .                                            .                   .. 
          .                 .                                                                       
                                                                                               .    
                                                   .,                                               
                                             ,. ..                                                  
                                                 .                                                  
.                                                                .                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                                                    
                                                                          .            ,            
                                       ..,..............                               . .          
                                     .:;11111t11iiiiii;;;:,.....                                    
                                   .,;i1tfttt1tfffftfftttii;;iii;;:::,,..                           
                                  .:;i1tfLLLLffLCCftLft111iiiiiii1iiiii1i:,                      .. 
                                .,:i11tttfLftttfLt111t1111ii1i;;i1ft1iitiii;.                 ..    
                             .,:;i1ttttttft1t1111i1iiii;iiii11tiitCCf1t1iii;i:..                    
           ,               .:1fLLffffffttffttffttttt111ii1i;;it1iii1tff1iiiiifi,..                  
                       ...:1tL00GGGCLLffffffffffffffLLft11i;ii11ii11tttt;ii11tt1i:..                
            .           .:1ttfLLG00GGCCCCCCLLLLffffCCLfftt1t11tttt11i;;tt1i11;ii1i;,..        ..    
                        ,;ii1111ffC0800CLLCCCGCCCLLffLLLffffftfLLLft1tt1f1i1tt1111t1,,              
                      .,;;::;;ii1i1tC088GLffLLCCGGGCCLLLfttfLLLCGGLfffCf1iitt11ttfff;..             
                     .,,,,,:::;;;ii;;1fC000GCLffLLCCCGGGCCLfffCGG0Lfffff11111tiiitff1,.             
         .           .....,,,::::;;;:::;i1fCG80CLLttt11ffLLLCCCCGCftttttttt1111fftttf;..            
                   .   ....,,,,:::::::,,,,:;1C0Ltt111;;11i::fCLCGGCLLLffttfLfi;1LfLfL;..            
          .       .     .....,,,,,,:,,,,:ii111;i1i1Ci,:;;,,iCCttffCGGGGGCLtt1ii11tLLt...            
          .        .        .......,,:;i1i;;:,:;::11,,,,,,;ffiiL1tCCLLCCCGCLt1ii11ft,...            
                                  ..,it1i::,,:;::::,,,,,:;:;;iLLfCCCLLLffLCLLftiiii,...             
                                   .;ttt;,..:i::,:::::::::;ti1tfffLLLLCCLLLCCCCLf;....              
   .                              .:iCCt:..,i;;:::,::;;;:;1;;1tfLLCCCCCCCCLCLfCGL,,..               
                                  ,;t0L:...:iii;;;;;::,.;1i;11ffL08GGCLCLLLLfL08t:,.                
                                 .,iLt,.. .;ii;;;::t...:f1i1iittLffG880GG0GCG0@Gi,..                
          ..                     .:1;.,:i1t1;,.,;:ii...iC111;i;f1:,:1C8@@@@88@Gt:..                 
                                .;i,.:1fLt1i;;:iiii,...1ti1;1:tf,,:,::itt1f00Cfi:.           .      
                  ,,            ,i;,;tCLfft11i;;;:;:..;ti1,,t1t,.,,,,:::::i11f1;,     .             
                                ,:::ifCLti;:,.,;:;;i:;t1f1.:fL:.,,,,.,,,,:ii1t;,      .             
                            . ..,,:;iiii;;;;..:,.:iitttCtf;;t;.,......,,,,it1i:.                    
                               ,:;i1i;:;;;:i,,, ,iii;;1CLtt11;,,.........:ii:,.                     
                               :1ti;;;,:i;;i;,.:ti;;iii1ffttLf,,.....   .,::..                      
                             ,:tfi,::, ,ii1i,.:ti;,,111tLLfLCt,,..       ...                        
                            ,;fLi..;;. ,;ii,,:ii;,..;ttLLtLGG:...                                   
               .         .,,:i;, .;i;. ,i1::;ii;,  .,1ffttL0t..                                     
                       .,::::,. .;i;,,,;iiii;;,.   ..:ii1tLGf,.                                     
                ..   .,::::,,,,,:i1i111iii;i:.. .,,:::,.:1tLLi.                                     
               .:,,,,:;;:::,,..:11:::,,,;; ,:.,,,:;:.  .:i111.                                      
          ...,;::::;;;ii;:,,. .:ff,..   .:,. :::;:.     :;;;:   .                                   
          ,;;11;;;iiii;:..   .;tf1..     ,,..:;;,     .,,,,::.                                    . 
          ,;11i;,,.. .,     ,;1tt,       .,.,i:..,,,,,,,..,::,             .                        
          ,i:,.   .   .   .:iii:.       .,,.,:. ::,,,..  .,,,.            ..                        
          ,.             .,i11:         :;:,.. ,:::.. .....                                         
                        .:;11:         .:::.   ,;;,. .,.,:.                                  ..     
                        ::ii,          :;,,    .;t,  ,::;,                  .                       
                ..     ,,,:            ,,..    ,,;,.:;;;,                                           
                       .                     . ..,:::,..                                            
                                                                                                    
                                                                  .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                            .          ..                                                           
                  ,      .                      .                     ..               .            
                                         .                                             .    .       
                                         .               ..                                         
                  ,.                                           .                 .                  
                                                               .                . ..                
`,y[59]=`                                .               ..                                               .. 
          .                 .   .                                            .                   .. 
          .                 .                                                                       
                                                                                               .    
                                                   .,                                               
                                             ,. ..                                                  
                                                 .                                                  
.                                                                .                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            ,            
                                       ................                                . .          
                                      ,;iiii1t1iiiiii;;;::,...                                      
                                    .:;i1tftt1ttttttfftt1i;;;;;;;;::,,..                            
                                   .:ii1tfLLCfffLLffLft11iii;iii1iiiii1ii:.                      .. 
                                 .,;ii11ttfLffffCf111t11t1iii;;;itt11i11iii:.                 ..    
                               .,:i1tt11ttft1t111i1;iii;iiii111i;tCCf1ttii;ii,..                    
           ,                .:itfffftttftfffttttttt111i;iii;;it1iii1tftiiii;ifi,.                   
                       .  .:1fC00GGCLfffffffffffffffLfft11i;;i11ii11fftt;iit1ft1;,..                
            .            .;tttfCG00GGCCCCCLLLLfffffCCLftt11111ttttt1i;it11i1i;ii11;,.         ..    
                        .,iii111fLL0000GCCCGCGCCCLLfLLLLLftfttfLLLf1111tfti1t11111ti,.          .   
                       .:;::;;ii11itL088GLLLLLCCGGGCCCLLfttfLLfCGGCffLLfti1ttt1ttftt:..             
                     ..,,,,,::;i;iii;ifCG80GCLffLCCGGGGGCCLffLCGG0LfffLf1111tt111fff1..             
         .           .....,,,::;:;;;;;:;itfCG80GCLfttttfLLLLCCCGGCfttttttt1111tfftfff,..            
                   .   ....,,,,:::::::::,,:;iC8Gf1iiti;iti::fCCCGGCLLfffttfLfi;tLffLf,..            
          .       .     ......,,,,,:,,,,:;i1111;;;tGf:::;,,iCCttffCGGGGGLLtttii11fLLi..             
          .        .        .......,,,:;11ii;:;;;;1f;,,,,,;fti1f1tCCCCCCGGCf1iii1tLi...             
                                  ...;111i;:,;i::::,,,,,:;;;itCLtCCCLLLLLLCCLf1iii;...              
                                    ,ifti;:.;i::,:;:::::;:;f1tttfLLCLLCCLLLCCCCLt,...               
   .                               ,:fCLi,.:i;;:::,::;;;:;1i;1t1LLCCCCCCCCCCLfGGt.,.                
                                  .:iGG1,.,;ii;;;;;;::,,:1i;1i1ffG8GGCCCCCLLLC8Gi,..                
          .                      .,:LCi...,;iii;;:,i,..,tt;1;itffLLG880G00GCG88f:..                 
          .                      .:11,,;ii1i;:,,;:ii,..;Ci11iiiif1,:1L88888888L;,.                  
                                .:i;,;tfLti;,,:;i1i,...iti1,1i:ft,:,::i11if0GLt:.            .      
                  :,            ,i1;ifGCfft11ii;;:::..,1i1,.i1tt.,:,,::::;i11fi,.     .             
                                .:;;1GCLti;,..::,:;i:;11tt.,iLf,.,.,,,,,,:iitt:.      .             
                            . ...,:i11ii;:;..,:. ,ii1ttCff1,1t:.......,,,:it1;,.                    
                               .:;11i;;i;:;:.,. ,iii;i1LGtti1i:..........:i1;,.                     
                               ,1ti;;;;1iii;...:1i;:iiiifff1tfi,,...    .,;:..                      
                             ..if1,:::,ii11,,,:1i;,.i111LCffLC;,..       ...                        
                             :1f1, :;,.;i1:,,:;i;...:tttLffC0t,..                                   
               .            ,;1;. ,;i,.;1;:;;ii;,  ..iftf1LG0;..                                    
                          .:;:,  .;i:,.iiiii;:,     ..;i11fCGt,.                                    
                .       ,:::,,,,,;11111ii;ii,.  .,,,::,.,i1fLL;.                                    
                     .,;;;;::,,,:ii;;::,i,.:..,:,:::,. .::11ft:.                                    
              ..,::::::;i;:::,..:ft..   ::.  :;:::,     ,:iii,  .                                   
            .,;;;;i;;;;i;,..  .:1Li..    ,,  :;:,      .,:,,:,                                    . 
           .;1t1;;:,,,:.     ,;fLt..     ,,.,i,..,:,,,,,.  ,;:.            .                        
          .;;:::...   .    .;i1i;.      ,:,..,..;;:,,..  ..,:,            ..                        
          ..              .;1t1,       .:;:.   :;::.   .,....                                       
                         .:itt,        ,;:.   .:i1,    ,,.,.                                 ..     
                         :;i;.        .i:.    .,;1.   .:::.                 .                       
                .       .,,,          .:.      .....,:;i;.                                          
                                             .   .,;i;,,.                                           
                                                                                                    
                                                                  .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                            .          ..                                                           
                  ,      .                      .                     ..               .            
                                         .                                             .    .       
                                         .               ..                                         
                  ,.                                           .                 .                  
                                                               .                . ..                
`,y[60]=`                                .               ..                                               .. 
          .                 .   .                                            .                   .. 
          .                 .                                                                       
                                                                                               .    
                                                   .,                                               
                                             ,. ..                                                  
                                                ..                                                  
.                                                                .                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            ,            
                                        ...............                                . .          
                                      .:;iii11iiii;i;;;;:,,...                 ..                   
                                     .:i11ttt11tt11ttttt1;;;;;;;;;::,,..                            
                                    ,;ii1tffffttfftfLf111;;;;;1i1iiiii1i;,.                      .. 
                                  .,;iii1ttfLffLCLt1t111tiii;;;;itt1ii11iii:.                 ..    
                               ..:;i11111ttft1t11iiiiiiiiiiii111ifCCf1ttii;ii,..                    
           ,                 .:i1ttttttfttftttt111t1i1i;iii;;1t11ii11ttiiii;1t;..                   
                       .   .;tLGGGCCLffffffffffffftfffft1iii;i11ii1tfft1iii11Lti;,.                 
           ..             ,ittfC00GGGCCCLLLLLLLffLLCCLff111111ttttt11itt11i1iii;i1;,.         .,    
                         .;ii1ttfLLG000GCCCGGGGCLLLLLLLLftttttfLLft11i1tftit1111111i,.          .   
                        :;;:;;i1i1i1fG8@0LfLLLCCGGGCCCLffftfLLLCGGCffLLf1i1ftt11tftt:..             
                      .,,:,,::;i;iii;itC000GCLffLCCGCGGGCLfffLCG00LffLCf1111tt11tfffi..             
         .           ..,..,,,::;;;;;;;:;itfC000GCLfftttfLLLLCCCGGCtttttttt1i1tfLfffLt,.             
                   .   .....,,,::::;::::,,::iL80Lt11f1;it1:;LCCCGGCLLfttttffti;tffLLt..             
          ,       .      .....,,,,,:,,,,,::;ii1i;;tGC;::;:,1CLffffCGGGGCLffftii11LLf:..             
          .        .        .......,,,::;1iii;;:;;1L1,,,,,;fti1tifCCCCCCGGCf1i111ff;...             
                                  ...:;it1i;:i;;;::,,,,,::;;iLCtfCGCLLLLLCCCLti1ii:...              
                                    ,:itii;:ii::,,;:::,:;:;LffftLLCLCCCCLCLCCCLLi,...               
  ..                               .:iCL1;,:1i;,::,,::;;::1i;1f1fLCCCCCCCCCCfL0C;...                
                                  .:;L8L;,,;ii;:;:;:;::,:1i;11itfL000CCCCCCLLG@L:...                
          .                      .,:tGf,..,;ii;;;;,i:...1f;1i;iLffCC880088GG0@G1,..                 
          .                     ..,if;,:;iii;;,:;:it,..,L11iiiiitf1:1L08808880t:..                  
                                .:i1:;1ffti:..,;11i,...:ti1,:1;;f1,,::;1iifGCLi,.            .      
                  :,            .i11iLGLff1iiiiii:::...ii1,.,tit1,,,,::::;1itf;,      .             
                                .:;;f0GLt1;:,,::,,;i:;11tf,.:tLt..,,.,,,,:i1t1,.      .             
                            . . .,:itt1i;:, .::  ,;;1ttLCtf,;1t:......,,,:1tt;.                     
                               .:i111i;;;:;..,  :i;i;i1fGftii1i,.........:i1:..                     
                               .1f1i;;iiiii,.. :1i;,;ii1tfft11i:....    ..::.                       
                              .;f1::;:;11t;,,.,ii;. ;11ifLLttLt,,.        ..                        
                             ,itt;.,:::i1;,,,:;i;. .,1t1LLtLCC;,..                                  
               .             :1i:..:;::ii,:;;ii;.   .;tffttC0L,..                                   
                           .:;:.  .;;,:1iiii;:,     ..:i11tCCGi.                                    
                .       ..::::,.,:;1ii1i;i1;,   .,,,::,.,i1tLCt,.                                   
                      .,:;;:::,,::iii;::;.,,..,:::::,.  :,i1tft,                                    
             ..   ..,:;;;;i;;;,,.ifi..  :,   ,;:::,.    .,;iii, .                                   
             ...:;i;;;::;i:,.. .:1Li..  .,, .;;:,.     ..,,,,:.                                   ..
            ,:iti;;:,::..    .,1ff1,.    ,, ,i, .,::::,,,.  ,;.            .                        
           :;;ii;:,   .     .i1tf1,.   .,,,... ,;;:,,..  ...::.           ..                        
           .                ;tt1,      :;;:.  .ii;,. .  .,....                                      
                          .:it1,      ,;;:.   ,,11,     ,...                                 ..     
                          :;i:        ;;,      ,;i,    ,:::.                                        
                .        .,:,         :,       ..  ..,:;;:.                                         
                                             .   .,:ii::.                                           
                                                   ..                                               
                                                                  .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                            .          ..                                                           
                  ,      .                      .                     ..               .            
                                                                                       .    .       
                                         .               ..                                         
                  ,.                                      .    .                 .                  
                                                               ,                . ..                
`,y[61]=`                                .               ..                                                . 
          .                 .   .                                            .                    . 
          .                 .                                                                       
                                                                                                    
                                                   .,                                               
                                             ,. ..                                                  
                                                 .                                                  
.                                                                .                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            ,.           
                                              ...                               .      . .          
                                       ,:;;;i1iiii;;;;;;:,,...                 ..                   
                                      ,;i11tt111111tt11t1i;;;;;;;;::,,..                            
                                    .:iii1tfffttfttLft11i;;;;;1i1iiiii11;,.                      .. 
                                   .:iiii11tfLffCLttt11t1ii;;;;;i1111it1iii,.                 ..    
                                .,:;i11111tffttt1iiiiiii11iii111ifCCftftiiii;...                    
           ,                  ,:i11tttttttffttt11111i1i;i1i;;1111i111tt;iii;11:..                   
                       .    ,ifLGGCCLfffffffffffftttfftt1iii;i11ii1tLft1iii11Lfi;,.                 
           ..             .:tttL00GGGCCLLLLLLLfffLfCCLfft11111tttftt11t11i1tiiii11;..         .,    
                         .,i111tfLLC000GCCCCGGGCLLLCLLLfftttttfLLft11i1tftit1i1iii1i,.          .   
                        ,,;;;;i1i1i1fC8@0CLLLLCCGGCCCCLffftfLLLCGGLfffff111ft1t1tttt,..             
                       .,:::::;i;iii;itC000GCLffLCCGGGGCCLftfLCG00LffLCft111ttttfLLti..             
         .            .,,,,,,::;;;;;;;;;itLC00GCCLLfttffCCCLCCCG0Cttt1tttt1i1tfLLfLLt,.             
                      .....,,,,::::;::::,,:;iL88Cf11ft;iti;;LCCG0GLLLftttfff1;ifffLL1..             
          ,       .      .....,,,,,::,,,,:::;ittii1GGi::::,1CLfLLfGGGGGCLffLtii1tLLf:..             
          .        .        .......,,.,::;iiii;:;;1Lt,:,,,;fti1tifCGCCCCGCLt1111tft:...             
                                 ....,;:11i;:;;;;,,,,,,,::;;1LC1fCGCLLLLLCCCfti1i;,...              
                                     ,:11ii;ii;;,,::::,:;;iCLfLtfCCCCLCLLCLCGCLf;....               
  ..                                ,:tf1i:i1i;,,:,,::;;;:11i1ftfCCCCCCCCCGLfC0L:...                
                                   .:iGG1:,iii::;:;:;::,,ii;1111tLC00CCCCCCLL08t,..                 
          .                       .,iCCi,.:;i;;i;;:ii...;f;11i;tLfLG080088GG08C;..                  
          .                      .,iLt,,:;iii;:;;:it,...fti;;t;1tfLiiL080G888C1,..                  
                                 ,;1i:i1fti:,.,i1ti,...,1i1,.ii:ifi,::;ii;fCLf;,.            .      
                  :,            .;1i;fLfLti;;;iii:::...;i1,..;tifi,,,::,:;1itt:.      .             
                                .:iif0CLt1;;::::,,:i::1ttf;.,;fL1.,..,,,,:i1fi,       .             
                            . .  .:ittti;;. .:,  ,;;1t1tCtL:,itf,.....,.,:1t1;.                     
                                ,i1111;;;i, ,,  :;;ii;1tCCt1;11i,........:ii:.                      
                               .1fti;;iii1:..  :ii;,:i;1tfffi1ii,....   .,::.                       
                               ,tt;:;;ii11,,..:i;:. ,11itLL11t1;,..       ..                        
                              :1ti,,:;i1i,,,,:;i:. ..it1tLttfCf:,.                                  
               .             .;i;, .:;i1:::;;ii;.   .,tftt1LG01,..                                  
                            ,;;,.  .;:i1;iii;:.     ..,;1t1LC0C:.                                   
                .         .:::,..::i111i;1i:.   ..,,,,,..;i1tCC1,                                   
                       .,:;::::,,,;1ii:;:,:.. .,::,,,...:,:iitf1.                                   
             ..     ..,:;;;i;;;,:.;1;. .;.   ,;;::,.    ..:i;1i..                                   
              .  .;:;;;;:;1i:,,..:1C;.. .,, .;;:,.   ....,:,,:,                                   ..
            .,,:ii;;;;;,.,.    ,i1tt,.   ,,..;, .::::::,,.  .:,            .                        
           ,:;1t1;;:,.,      .ifLLt;,. ,:,,.   :;;:,,..  .. ,:,           ..                        
             .....           itff;..  ,;;;,.  ,ii;:..   ... ...                                     
                           .,1t1,    .;;;,.  .,,i1:      ....                                ..     
                           :ii;.     ,i:.      .:;.    .,::,                                        
                .         .,:.       ,,.            ..:;;;,                                         
                                             .    .,;1i;,.                                          
                                                   ...                                              
                                                                  .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                            .          ..                                                           
                  ,      .                      .                     ..               .            
                                                                                       .    .       
                                         .               ..                                         
                  ,.                                     ..                      .                  
                  .                                            ,                ....                
`,y[62]=`                                .               ..                           .                    . 
          .                 .   .                                            .                    . 
          .                 .                                                                       
                                                                                                    
                                                   .,                                               
                                             ,. ..                                                  
                                                ..                                                  
.                                                                .                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            ,.           
                                                                                .      . .          
                                       .:;;;i1iiii;;;;;;:,,...                 ..                   
                                      .;i111tti111i111111i;;;;;i;;::,,.                .            
                                     ,;ii11ttt1ttt1fftt1i;;;;;1i1iiiii11;,.                      .. 
                                    ,;iii111tLffLftft11t1;;;:;;i11111111iii,.                 ..    
                                 .,:i11ii11tffttt1ii1iii11iii1itiLCCftftiiii;.                      
           ,                   ,;i11tt1ttttfftt1ii1111;;i1i;;111111t1tti1i;;11:.                    
                       .    .:1fLCCCLfffffffffftfttttft111ii;i1iii1tff11iiiiiLfi:..            .    
           .               .ittf00GGGCCLLLLLLffffffCLLftt11111t11fttttt1ii1t11ii11;..         .,    
                          .;111tfLLC000GCCCCGGCCLLLCCLffftttt1ffLft1ii1tft1tiiiiiiti,.          .   
                        ,.:;;;i1i1i1tC088CLLLLCGGGCCCCLffttfLLLCGGLfffff111tt111tt1t:..             
                        .::::::iiiiiii1L080GCLffLCGGGGGCCLftfCCG00LfLCCL1111t1ttfLft1..  .          
         .   .         .,,,,,::;;;;;;;;;itLC00GCCLLfftffCCCLCCCG0Cttttftft1i1tLLLLLft,.             
                   .  ......,,,::::::::::,:;if8@GLt1f1iif1;iLCCG0GLLfftttttt1;iffLLL1..             
          ,       .     ......,,,,,::,,,,,,,:;1f1i1CG1:;;:,tCLfCfLGGGGCCLfLLtii1tfft:..             
          .        .        .......,,.,,:::;ii;::;1Lt,::,,;ft1ftiLCGCCGCGCLt111ttft:..              
                                  ...,::;i11i;;i;:,:,,:,::i;tLfifCGCCLfLCCCLf1i1ii,..               
                                     .:;t1ii;;ii,,::::,:;;iCCCLftCCCCLCLLLCCGCLf:...                
  ..                                 ,:ttiiiii;,,:,::::;;:i111tLtCCCLCCCCCGLfC0f,...                
                                    ,;fGt;;iii::;:;::::,,;iit11t1LCG0CCCCCCLC80i,..                 
          .                       ..:f0t:.:;;::;;;:;1,..:t;ii1iitfLC8880@80G88L:..                  
          .                      ..;fL;..:;i;;;;;;it:...it;;,1iifLffif00GG888L;..                   
                                 .:tf,,;i1i;:,,i11i,....ii;:.,1i;tf;::;i;;tCLt:.             .      
                  :,             ,i1;itfC1:,,;i1i:::...:ii:.,,111f;.:::,:;1if1,.      .             
                                 :i1fCCLt1iii;;:.,:;:,ittt1.,,1fLi.,.,,,,:1tti.       .             
                            . .  .;1fft1i:..,:,  .:;11t1Gff1.:itt.......,:111;.                     
                              . .itt1ii;i;. :,  :;;;i;11fG1t;;i1i........:;i;,.    .                
                                ift1iiii1i,,.  :ii;,,;;itfff1i11i,..     .,:,                       
                               .11;:;;;11::, .:i;:...i1itLLf1tii;...                                
                              .i1i:,:;i1:,,.,;;i:.  .;tt1Lf1tffi:,.                                 
               .              :i;;..:;ii,::;;ii;.   ..1ftt1fC0Ci,.                                  
                            .:;:,.  :;1i;i1i;:.       .;it1tCG0f,.                                  
                .         .,::,..,:;1t1i;1;,.    .,,,,,..;11itCL;.                                  
                        .,:;:,,,,::;i;:;,:.   .,::,,,...,,:;;;tf;                                   
             ..       .,;;;::;;;:, :;, ,:.   .;;;:,..   ..,;;i1;.                                   
              .   ,.::;;;:i1i;::,.:tf:. ,:,  ;;:,..   . .,::,::                                   ..
             ....,;iii;:,,:,.   .;1ft,. .,,..:, .:::::::,,.  .:.           .                        
           .::i11ti;;:,.      ,iLLLf;, ::,,.   :i;::,,.. ..  ,:.          .,                        
            ..,:;,...        .1fLL1:. :i;;,.  :;1i:.    ... ....                                    
                             :tft:   ,i::,.  ...i1: .     ....                               ..     
                            :i1;.    i;.       .,:.     .::,.                                       
                .          .::.     .:.              .,:;;;,                                        
                            .                .    .,:i1i:,                                          
                                             .     ....                                             
                                                                  .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                            .          ..                                                           
                  ,      .                      .                     ..               .            
                                                                                       ,    ..      
                                         .               ..                                         
                  ,.                                     ..                      .                  
                  .                                            ,                ...                 
`,y[63]=`                                .               ..                           .                    . 
          .                 .   .                                            .                    . 
          .                 .                                                                       
                                                                                                    
                                                   .,                                               
                                             ,. ..                                                  
                                                ..                                                  
.                                                                ,                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            ,.           
                                                                               ..      . .          
                                        ,;;;iii;;;;;;;;:::,...                 ..                   
                                       :i1tft1111ii11i11ii;;;:;;::,,..                 .            
                                     .:ii1tt1111111ft1ti1;;;ii1111i111ii,.                       .. 
                                    .:iii1111fftfttf111ti;ii;i1i11111t1tt1:..                 ..    
                                  .,:iiii11tfLfft111ii111iiiii1t1CCCttt1i11i,..                     
           ,                    ,:;i111111ttftt1iii11i;;ii;;i111ttt1tffiii;it;,.                    
                       .  .  .:1tLCLLftffffffffttttttt1111i;;11iii11ttii1ii;1Lti,.             .    
           .                ,itfC0GGGCCLLLLLfffffffLLLftt1111tt11t1fft11ii1t1t111i:..         .,    
                           ,ii11fLLCG00GCCCCGCCCLLCCCfffttt11tftfft1i111tt1tiiiii11i,.          .   
                        , .:;;iiii1itL088GLLLCCGGGCCCCLftttfLLCGGLft11t1t11t1111t11f:..             
                         .,::::;iiiiii1L080GLLfLLCGGGGGCLfffCGGG8GLLLLCfi11t11ttftttt..  .          
         .   .          .,::,,:;;;;;;;;;itLG00GCCLLLLLtCGCCCCCG0Gftttfffft1itfffLLftf,.             
                   .   .,,,,,,:::::;;::,:,:;iL8@GLLt1iifLiitCCG0GLfttttttt111itLLLLLt,.             
          .       .    .......,,,,,::,,,,,,::;1Cf11t;;;i;:;LLL0CfCGGGCCLffLf1;i1LLLt:..             
          .        .        .......,,.,.,,,,:;:;;:;i:;:::,1f1LCi1LCCCGGGGLLf11t1fft;..              
                                  ...,,,::,;;i;;:::,::::,:i1tL11ffGLLLLCCCCft1t1ii,..               
                                      .,::iii;;;,:::,::::;f0GL1LffLGCCCLCLCGCLf1,...                
  ..                                  ..;1iiiii,::,:::;;;:itfttCLtLCLCCCLCCLLGCi...                 
                                    .,,iftiiii::;:i;;;:,,;1i1iiffttfGCGCCCCLG8L:..                  
          .                        ..;fC1::;;::;;;::1:,.,11t;11111tL0@88@8008G1,..                  
          .                       .,1Cf;.:;;:;;;;;it:...,1;;,:tiifCGffGGCC88Gt:..                   
                                 .:fG1,,:;;ii;;i11i:....:i;:..:1i1fLi:;;:;fLf1,.             .      
                  :,             .iLt::i;;;;,itti,::....i;:.,,,111fi,:,::;i1fi.       .             
                   .             .i1ftLft1iitti:..:;:.:tt1t:.,,ifC1.,,,,,;1tt;.       .             
                            . .  ,ifLCLt11i;;:.  .,;iitifGtf:.,i1f:.....,:i11;.                     
                              . .;tff1i;:, .:.  ,;;;iii1iGf11,:iii,.. ...,;;;,     .                
                                ;t11iii;:,.,. .;i;;,,;;ittftf;i1ii:      .,,,                       
                               .i1;:;ii;:,.  .;i;:.  :i;iLLLtii1i;.                                 
                               ,ii;::;;:,...,;;i:    ,111fft1iii;,                                  
               .              ,;::;,,::,,:;;ii;;.   ..;fttiittft;..                                 
                             ,,,,,..:iiii11i;,.        ;itt1fLGG1..                                 
                .          .,:,,,;;i1ti;i;,.     ....,,..;111ttCC:.                                 
                         ,,::,,,,:;;:;;::.     .::::,,..,.:;i;:tf,                                  
             ..         ,,::,;;::,..,,,:,.    :;;;:,..  . ,:;;;1i                                   
             ..  .,  ..,;i;:ii;;;:,:;:,.:,.  :;:,,..     .::,,::                                  ..
                   ,:ii;;::;i;,,.,:i11, .,.  ,...,:::::::,,.. ,,           .                        
           ..,:::;;;ii;:,.     ,,;i1fi.::,..  .;1i::,... .    ,,.         .,                        
             .,;ii;::,..      ,;1ffft:;;;:,  .:;ii:.    .,.  ....                                   
                ....         .:1fLf;,1i::,.  ...:;: .                                        ..     
                            .:;tti, ;i,         ,,.      .,,,.                                      
                .           .:;:.  .,..                .:;;:,                                       
                .            ..              .     .,:11;:..                                        
                                             .      .,,.                                            
                                                                  .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                            .          ..                                                           
                  ,      .                      .                     ..               .            
                                                                                       ,.   ..      
                                         ,               ..                                         
                  ,.                                     ..                      .                  
                  .                                            ,.               ...                 
`,y[64]=`                                .               ..                           .                    . 
          .                 .   .                                            .                    . 
          .                 .                                                                       
                                                                                                    
                                                   ..                                               
                                             ,. ..                                                  
                                                 .                                                  
.                                                                ,                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            ,.           
                                                                               ..      . .          
                                        ,;;;ii;;;;;;;::::,...                  ..                   
                                       :i1tft11111111it1ii;;;::;::,...                 .            
                                      :i11tt1111111ft1ti1iii;ii111i11ii:,.                       .. 
                                     ,1i1111tfftftff1111iiiii111t1tt1fft1i,.                  .,    
                                   .,iiii111fLffft11ii1t1iiii1tttCCLtfft1t1;..                      
          .,                    .,:;111111tfffttiii11i;;ii;ii111fffttftiiii11:.                     
                       .  .   .;1fLLLtttfffffffttttttt1111i;;11iii11t11i1i;itL1:..             .    
           .                .:1tC0GGGCLLLLLffLfffffffLftt1111t11111fft111111tf1t1;,..         .,    
                           .:i11tLCCG0GGCCCCGCCCLLCCLffftt111tttff11it11ttttiiiii11;,.          .   
                        ,  ,;;iiii11tL080CLLCCCGGGGCCCLftttfLLCGCff11111t11t1t11111f:..  .          
                          ,:;:;;iiiiii1C880CLLfLCCGGGGGCLftfC0G08CfLLLLti11t1tftftttt,.  .          
         .   .           .:::::;;;;;;;;;ifCG00GCCLLLCffCGCCCCCGGCfttfLLftt1i1tLLfLftf:.             
                   .   ..,,,,,,::::;;::::::;1C88GLLt1;1CtiifGG0GGLftttttft1111fLLLLft:.             
          .       .    .......,,,::::,,,,,,,:;1GLtf1:;tt;:iCLL0LLGGGCCLftfftiiitLLLf;..             
          .        .        .......,,.,..,,,::;i;;;::;::::tftGCitfCCGGGGCLLf11t1fff;..              
                                 ....,,....,:;;;;::,::::,;i1LL1tLfCLLfLCCGLft1fi1i,..               
                                      ....,;i;;:,:::::;:;iLCC1tLLtfCCGLLCCGGCLfi,...                
  ..                                  ...,;iii;,:::;:;;;;:tCLtfLGtLLCCCCLCCLLGCi...                 
                         .          ....;1iiii::;:i;;;::,;11111tLttfGCGCCGCLG8t:..                  
          .                         .,;tfi;;;::;;i:;1,,.,ttt:1t111ttC@88@8008G1,.                   
          .                       ..:fC1:;;;,:i;;;1t:...,1ii,,11itLCLLGGCG@8C1,..                   
                                 ..iCL:,:;:,;iii1ti:....,i;,.,,1i1fCt:;;:;fffi,.             .      
                  ;,             .:GLi,;::;i;iffi,:;....ii;,,,,it1ft:::,:;;1t;.       .             
                   .             .;tt1t1iiiitL1:..:;:.,1t1t;.,.;tLL:.,,,,;1t1;.       .             
                            . .  .iLLGCLtt11i:.  .,:;itit0tL;..:if1.....,:111;.                     
                              . .;fLLf1i;:.,:.  ,::;;iii;CL1t,,iii;.. ...,:;;:     .                
                                ;t11i1i;,..,. .;i;;,.;;ittftf:;1iii.     .,,,.                      
                               .i1;:;ii;,,.  ,;i;:.  ,i;iLLftiiiii;                                 
                               ,;:;;;;;:...,:;;;:    ,11itfi1iiii;.                                 
               .              .:,,1i:;;,,;;;i;;:     .;ttti:11tti,                                  
                              .. :;,:iiii1i;:,         :i1fi1fLGL:.                                 
                .          ..   ,iii11i;;:,       ....,..;tttffLGt.                                 
                .        .,.,..::::::;;;.       ,::::,,.,.,;11;iL1                                  
             ..          ,,:,:;:,,,,,,::,     ,;;;:,,.  . .::;;;t,                                  
             ..  .,     .:i::;;:;:,..,,,;,.  ,;:,,,.     .:;,,:;,                                 ..
                     ::;ii:;ii;;:,..:i:.,,.  .. .,,,::::::,,...,           .                       .
           .. .  ..,;1ti;,....   ..:t1:,,,.   .:11;:,,.. ..    ,.         .,                        
              .,:;;;;;:,.      .:;itt1;;;:.  .::ii:.    .,.   ..,                                   
               .,,:,..         :1CLttt;:,.      ,:, .         ...                            ..     
                              ,itt1;i:          ..         ...                                      
                .             :i:. ...                   ,:;:.                                      
                .            .,.             .       .:ii;:,.                                       
                                             .       ,::.                                           
                                                                  .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                            .          .                                                            
                 .,      .             .        .                     ..               .            
                         .                                                             ,    ..      
                                         ,               ..                                         
                  ,                                      ..                      .                  
                  .                                            ,.               ...                 
`,y[65]=`                                .               ,.                           .                    . 
          .                 .   .                                            .                    . 
          .                 .                                                                       
                                                    .                                               
                                                   ..                                               
                                             ,  ..                                                  
                                                ..                                                  
                                                                 ,                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            ,.           
                                                                               ..      . .          
                                        ,:;;;;;;;::::::,,,..                   ..                   
                                       ,i1fft11111111ittii;;;::::,...                  .            
                                      :i1tftt11ii11t1111iiiiii1111iiii;:..                       .. 
                                     ,1111ttffttftff111i;i1iiiitt111tttti;,.                  .,    
                                   .,i1i111tfLfff1t1ii1t1iiii1ttfLLffft1tt1:..                      
          .,                     .,;i11i1ttfLft1iii1ii;iiiiii11ifLfttff1tti1;,..                    
                       .  .   .:itfLftttfffLffftttttt1i11i;;;11iii1i11iittiitt:,..             .    
           .                .:itLGGGGCLLLLLfLLffffffffftt1ii1t11iitff11tt111LGfti:...          ,    
                            :ii1tLCCG0GCCCCCGCCCLLCCLfLftt11ttttfttt1t11ttffLL111ti:..          .   
                        ,  .:;;iii11fC080CLLCCCGGGGGCLfftttLLLCCCft1i111t11ttt1111tt,..  .          
                          .:::;;;iiiiitC88GCLfLLCCGGGGCCLftLG0G00LfffLf1i11tttfffttf1..  .          
         .   .           .,::::;;;;;;;;;1fCG00CLCCLGLtLGGCCCCCGCLftfLLLftti1tfCLfffff:.             
                   .    .,,,,,:::::;;::::::;1C@8GLft;1CC1i1LGG0GCft1ttttft11i1fffffff:.             
          .       .    .......,,:::::,,,,,,,:it0Lffi:tLi;;tCLGCfCGGCCLfftft11i1fLCLfi..             
          .        .        .....,,,,,,.,,,,::ii;i1;:i;::;ftL8L1tLCCGGGCCLLf111tfLfi,.              
                                .....,,...,,:i;:;:;::;:::;1fG0ffLfLLLfCCGCLfttfi11:..               
                                      .....,i;;;:;;::;;:i1CCCttfLtfCCCLCLCGCLLfi:...                
  ..                                  .....;;;;:;:;i;;;;;iCGfttLCtLfCLCCCGCLCGLi...                 
                         .              .:;iii:;:;iii;:::i1t1f1tCftfCCCCCGLLG0t:..                  
          .                          .,;11iii::;;i:ii,,,;tt1:1t111ttL888@8008Ci..                   
          .                         .iLfii;;,:;;;;1t,.,.:1ti,,i1i1LLLCGGCG@8C1,..                   
                                  .,tC1::;:.:ii11ti:....:i;,.,,11ifGC;;;:ifffi..             .      
                  ;,             ..1C1:;;,,;i1LL1::;....ii;,.,,:t1ff;::,:;;1t;.       .             
                   .             .:Lftii;;ii1Lt:..:;:.,1t1ti.,,,1tC1.,,,,;i11;.       .             
                            . .  .iLLCCLtt11i;.   .:;;1ii8tL;.,,i1L:....,:i11;.                     
                              . .;fCCLt1i;::,   .::;;iii;CL1t,.,iii, .  .,:;;:.    .                
                               .ittt1i;;:,,,  .:i;;:,:;ittf1t:,i1ii,     ..,,.                      
                  .            ,ii;:;:i;:,.  ,ii;:.  ,i;;fLf1;iiiii,                                
                               :;,;;;;;:...,:;i;:    .i1itfi;1iiii,                                 
               .              .:.,ii:;;::;;ii;::      :ttt1,i111;:.                                 
                              .. ,iii1ii11i;,.         :11Liittff;.                                 
                .               ,i1111i;:,.        ......;tftfffGL,                                 
                .         ...  .:,,::;i,        .,:::,,,:.:;1tiiff.                                 
             ..          .,,,.,::,,,,:;:.     ,:;;;:,.. , .::;;:f;                                  
             ..  .,      .i;,:;:::,,. .::,.  .;:,,,..    .:;,.:i:                                 ..
                     ,,::ii;iii;;;,..,,.,,.  .. .,,,,,,::::,...,.                                 ..
           .     . .,;11i:,,:::,.. .;i;,,,.   .:iti::,.. ..    ,,         .,                        
               .,:;;;;i;,.      .,.;t1i;;:.  .:,;i:..   .,.    .,.                                  
               .,::::,..       .:i111i;:,.      .,.            ...                           ..     
                               .iLL1i,          ..          ..                                      
                .             .ii;:,.                     ,::,.                                     
                .             ,:.            .        .:;;::,.                                      
                             ..              .       .:;:.                                          
                                                                  .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                            .          .                                                            
                 .,      .             .        .                     ..               .            
                         .                                                             ,.   ..      
                                         ,               ..                                         
                  ,                                      ..                      .                  
                  .                                            ,.                ..                 
`,y[66]=`                               ..               ,.                           .                    , 
         ..                 .   .                                            .                    . 
          .                 .                                                                       
                                                    .                                               
                                                   ..                                               
                                             ,  ..                                                  
                                                 .                                                  
                                                                 ,                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            :.           
                                                                               ..      . .          
                                        ,::::::::,,,,,,....                    ..                   
                                       ,i1tft1111111111iii;:::,,,,.                    .            
                                      :i1tfft111t1tt1111iiiiii11t1ii;:,..                         . 
                                     ,111tttffffftft111iii1i;i11111tttf1i:.                   .,    
                                   .,i1i111tfLfLf1t1iittiiiiit1tfffttt1111i..                       
          .,                     .,;i1ii1ttfCLf1iii1iiii1iiii1iitLLt1ft11i1i,..                     
                       .  .   .:itffftttfffLffftttttt1i11i;;i11ii11i111tt1i1t;,..              .    
           .                .:itCGGGGCLLLLLfLLfffftffftt11ii1t11ii1ft111ttttCL1i:..            ,    
                            ,;i1tLCGG0GCCCCCGCCCLLCLfLftt111ttttfttttt1tttLftLttti:,.           ..  
                        ,  .:;;iii11fC080CLLCCCGGGGCLLfttttLLLCCLftii111f111tt1111t;...          .  
                           ,::;;;i;iiitG88GCLfLLCCGGGGCLfffCG0G0Gffffff1i1tttttffttf:..  .          
        ..   .            ,::,:;;;;;;;;;1LC00GCLCLCCtLCGCCCCCCCLfftfLLLtt1i1ttfffffft,.             
                   .     .,,,,:::::;::::,::;tG@0CLfi1LCLiitGGGGGLf11tttfft11i1ffffftf:.             
         ..       .     .,...,,,,,:::,,,,,,,:if0Lft:LGtiiifCLGLLCGCCLLftttt11i1fLCtti..             
          .        .        ....,,,,.,,..,,,::i1i11:tt:;:iffGGftfLCGGGGCLLLf111tfCfi,.              
                                .....,,....,:ii:;:;:;;:::;1L0GLfLffLfLCCCCff1tt11t;..               
                                      .....,ii:;:i;:;;;;itLCGLtfLtfLLLLCCCCCLft;:,..                
  .                                    ....;i;;:i;i1;iii;fGGtf1fCtffCLCLCGCCCGLi...                 
                         .               .:;;i:;;;t1i;::;fffiLt1Cf1LCCCCGGLLGGt:..                  
          .                          ..,:iiii::;ii:1i,:,1t11:1t111ftL888@8G08C1..                   
          .                          ,1t11i;,,;;;;tt,,,.itt;,,;t11LLLCGGCG@8C1,..                   
                                   .:fL1;i:.,ii11f1:,...;11,,,,i1ifG0i;;:iLLf;..             .      
                  ;.              .,tfi:;:.,i1CC1:::....111,.,,,11fL1::,:;;1t;.       .             
                   .              .tf1;i;,;1tLf:..;;:..1t1ti.,,,i1Lf,.,,,;i11;.       .             
                            . .  .:LLfft1tt1i;.   .:;;iii8fLi.,.:ifi....,:i1ii,                     
                              . .;LCCCft1i;;,   .,,:;i;i;LL1t,..;i1;.. ..,:;;;.    .                
                               .ittt1ii;;;:,  .:;;;:,,;ittt1t:.:1ii;     ..,,,                      
                  .            ,1i;;:i:;i;.  ,ii;:.  .;;;tLt1:;1i;i;                                
                              .;;,;;;;:i:,.,:ii;,    .;i;tf1,i1ii;;.                                
               .              .: ,i;;;i;;iiii;::      :tt1t,:1i1i;.                                 
                              .. :11ttii11;:,.         ,11Li:1111;.                                 
                .               :i111ii;:.            ...;ff1tffLf,                                 
                .          .    .,,,:;;.         .,:::,,:.:itt1ifL,                                 
             ..           .... ,:,.,,:;,      ,,:;;;:,.., .,;ii:t1                                  
             ..  .,       :;,,:::,,,,.,::,   .:;:,,,.    .:;,.:;i.                                ..
                     ...,;1;;i;::;:,. .,:,.   . ..,,,,,,:::,...:.                                 ..
           .     .   :;i1i::;;i::,,.,::,:,.    ,;1i;:,...,.    ,,         .,                        
                ..,::;ii;,.        .i1i;;:.   ,:;i;..    ,.     ,,                                  
                ,:;;;;:..        .:;t1;:,.      ...             .,                           ..     
                ......          .;111i,                      .                                      
                               .iff1;.                     ,:,..                                    
                .             ,i;,..         .         .:;;::,.                                     
                             .:.             .        ,:;:.                                         
                                                      .           .                                 
                                                                                                    
                                                                                                    
                                                                     .                              
                            .          .                                                            
                 .,      .             .        .                     ..               .            
                         .                                                             ,.   ..      
                                         ,                .                                         
                  ,                                      ..                      .                  
                  .                                            ,.                .,                 
`,y[67]=`                               ..               ,.                           .                    , 
         ..                 .   .                                            .                    . 
          .                 .                                                                       
                                                    .                                               
                                                   ..                                               
                                             ,  ..                                                  
                                                 .                                                  
                                                                 ,                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            :.           
                                                                               ..      . .          
                                        .,,,,,,,.........                      ..                   
                                       .;i111ii11iii;i;;;;::,,,...                     .            
                                      ,i1tfLttt111tt1111111iii11t1i;::,.                          . 
                                     ,111ttttfftttf111iiii1i;i11t11ttft1;,.                   .,    
                                    ,i1i11ttfLfffttiiit1i1i11tttttttttt1t1:.                        
          .,                     .,:i1ii11tfCfft1i11;ii11i1i1111ffftff1111t:..                      
                       .  .   .:i1ffft1tffLLLft1t1tt11i1iii;i1111t1itt1tt1it;,..               .    
           .                .:itCGGGGCLLLLLLLLffffttfttt11iitt1iii1fti1ttt1fCt;,..             ,    
                            ,;i1fLCGG0GCCCCCGCCCLLCLfLft1111tt11t1fftt11tffffftti:,.            ..  
                        ,  .:;;i;i11LG08GLLLCCGGGGGCLfftttfLLfLLLtti11iittttttt111;,..   .       .  
                           .:::;;i;iiifG88GCLfLLCGGGGGCLftfC00G0Cffttft1i1tttttf11t;..              
        ..   .            .,::;;;;;;;;;itLG00GCLLLCffCCGCCCCCCCLffffLCLtt1it1ttfLf1t:..             
                   .     .,,,,:::::;::::::;it0@0Lft1LLLfi1fGGGGCft1ttttfft11i11ffLfL1..             
         ..       .     ..,..,,,,::::,,,,,,:;iL0LfifGC1iiiLLCGfCGGCLLftfttt11i1tLfffi..             
         ..       ..       ......,,,....,,,,::it1fifC1:;:1fLGLftfCGGGGGLLLLt11itfLt1,.              
                                .....,,....,:ii;iii;i;:::itGGfLfLffLfCCGCCLf1tt1tf;..               
                                      .....,ii:;:i;:i;;;itLGLt1tLtfLLLLCCCCCLLfi;,..                
  .                                    ....;1;;:ii11i1iiiCGCftifCttfCLCLCCCCCCLi...                 
                         .                ,i;;;;:iL11;:;tCCf1Lt1Cf1fLCCCGCLLGCt;..                  
          .                          ....,;ii;;;i1:ti,::t111:1f11tftL088@8G08Ct,..                  
          .                          .:;111i:,;;i:ft,,,,1tt;,,;111fffCG0C0@8C1,..                   
                                    .:fL1i;,.;i11f1:,...1ft:.,,;titG0t;i:;LLf;..             .      
                  ;.               .:LL1;;..:1CGt::;...:ftf:.,,,i1tLf::,:;;1t;.                     
                   .              .:tti;;,,;tLL;..;;:.,ttLt1.,,.;1fL;.,,,;i11i.       .             
                            . .   ,fftttii111;.   .:;;1i;8fLi...,itt....,:i1ii,.                    
                              . .:fCCLft1ii;,    .,:;i;;;Lf1t,..:iii.. ..,;;;i,    .                
                               .ittttiii;;::   ,;;;;:,;i1tt1t:.,i1ii.    .,,,,.                     
                  .           .:1i;;;;i;:;;..,;i;:,.  :i:tf1i,:i1i;i.       .                       
                              ,1;,;:;i::i;:,;ii;:     :i;tfi,:1ii;;,                                
               .              ,: ,i;ii;iiiiii;::      ,1ttt,.ii1ii:                                 
                              ...;tttt111i;:,.         ,iiL1,i111;,                                 
               ..              .;iiiiii:,.             ..;fLt1tttf:                                 
                .               ..,::::.          .,,,,,:,:itttitL:                                 
             ..           ....  ,,.,::;,      ,,,;;;:,,., .,;i1:1f.                                 
             ..  ,,       .:,.,,;:,,,,:;,.    ,;:::,..   .,:,.:;1,                                .,
                     ,. .,i;:;;;:::,,..:,,.   .  .....,,::;:,..:.                                 ..
           .     .   ,::ii;;t1i;;:,,...,:,.    .:ii;:,,,.,.    ,,.        .,                        
                 ..,,:;ii:,.,,:,..  ,;;;;,    .,:i;,..   ,.     .,                                  
                .:;;;;;:.         .,11i:.       ... .   .        ,.                          ..     
                .,,,,,.           ,1tt;                                                             
                .               ,1ttft,                     ,,...           .                       
                .              :1t1i:.                 ..:::;:,.                                    
                             .;;,.           .        .,;;:...                                      
                             ,.                        .          .                                 
                                                                  .                                 
                                                                                                    
                                                                     .                              
                            .          .                                                            
                 .,      .             .        .                     ..                            
                  .      .                                                             ,.   ..      
                                         ,                                                          
                  ,                                      ..                      .                  
                  ,                                            ,.                ..                 
`,y[68]=`                               ..               ,.                           .                    , 
         ..                 .   .                                            .                    . 
          .                                                                                         
                                                    .                                               
                                             .     ..                                               
                                             ,  ..                                                  
                                                 .                                                  
                                                                 ,                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
          .                                                               .            :,           
                                                                               ..      . .          
                                         .,......                              ..                   
                                        .:;:,,,,,,,,,,,,,,......                       .            
                                       .::;i1iiiiiii;;iiiiiiii11ii;:,..                           . 
                                     .,:;i1tf11111111111t11tttfLLLLLLf1;...                   .,    
                                    .:;iii111ttttt1iiii1i11ii1tffttttfLCL:..                        
          ..                     .,:iiii11ttfLLt1t1i111tt111ttffftft111tLL,..                       
                       .  .   .:;1ffft1tfffLCCft1tttt11tt1111ttLLttfLtt11f1,,.                 .    
           .                .:itCGGGGCLLLLLLLffffttft1tt1ii1tttt11tfttftttf1,,.                ,    
                            ,;i1fCGG0GCCCCCGGGCLLLLffft1111ff1111tftttttttLLt;,,,..             ..  
                       .,  .:;;i;11tCG00CLLLCCGGGGGCfft111tftftfffLft1i1ffttt11:,,,.             .  
                           .::;;;;;ii1L080CCffLCCGGGGCLffttLCLCGff1tft11iit11i1t;,,,                
        ..  ..            .,,:;:;;;;;;;ifCG00GCCLCLLLLGGCCCLCGCLttfLLCftt11111t11i.,,               
                   .      .,,:::::;:::::::;if88LLtftfLL11tCGGGGLfttffLffttt1iiff1f;.,.              
         ..       .      ...,,,,,::,,,,,,,,:;1Cft1fCGLiiitLCCfLGGCLLfttttt111itftt1...              
         ..       ..      ......,,,...,.,,,,::tt11fCLi;;;tfCCfftLCGGGGLffft111111t:...              
                                .....,,...,:,;1ttii;i;::;ifGLttfLtLLLCGGCCLf11ti1i...               
                                      ....,,;111t1i;;;;;iLCC1titLtffLLCCCCCCLLfi:...                
  .                                     ...:1;;;1iii11iifCLt11itCttfLLLLCCCCCCL1...                 
                         .               ..ii;;;;1fi1;:tG0Gtff11LftffCLCCLLLCCti..                  
          .                          .  ..,;;;ii11;t1::tLfC1;it11tftLG8880G08Cf:..                  
          .                          ..,::i1i;ii1;Lt:,,1t1C1,::1t1fLLG00G0@@Gt;..                   
                                      ,;itti,:ii1Lt;,..1ftGi.:,,111C0L;i;;LGfi..             .      
                 .;.                .:1Lt1:..ifCfi::,.,LLLC;.,,.:11CCi:::;;it;.                     
                   .       .       .,1Lti,.,iLCi..ii:.tLtGL1.,,,,i1L1,,,:;;i1i,       .             
                            . .    ;tt1i1;i1ti, . .:i1f1i8tL:....;it;..,,:;iii:.                    
                              .  ,1CLLLft11i;.   .,,;ii;if1ti....;ii:...,,;;;;:.   .                
                                ;tffft1i;i;::..,::;;:.:;itt1i...,1ii;    .,::,,                     
                              .:1iiii;;:;;:::,;i;;,.  ,;;ti;:,.:;i;i:      ...                      
                             .;1;:;;;::i;:;iiii;:.    .ii11:,.:i;;,,.                               
               .              ;: :11t1i1iiiii;::      .;ttt:.:iii::.                                
                             .,.:1tttt1ii;:,,.         .;1ff:,1iii:                                 
               ..              ,::;;;::;:.              .;fLf11111:                                 
                .               .,:::,::.         ...,,,:,:1tft1tf:                                 
             .                  ...,::::      ,. ,:;;:,,, .,;1t:1f.                                 
             ..  ,,        ... .,,..,:;;,     .:;;:::,.   ,::,;;1:                                .,
                     ,. ..:;,,,:::,,,.,,,,     ........,::::,..:,                                 ..
           .     .   ,,.:;i;;1;::::,,. ::.      .,:;:,,,,,.. . ,:         .,                        
                   ...,:ii:;1i:;;,. ,,,::.     ,:;i,..   ,.     ,,                                  
                 .,:;;;;:,....::,..:i;;,.        ..     .       ..,                          ..     
                .,,::::,.         ,:;i;.                          .                                 
                ......           ..,1ii.                    ....            .                       
                .               ,;i1ft;                . ..,:::,.                                   
                              ,;1fft1;.      .         .,:;;::,.                                    
                             ,ii:,,..                  ....       .                                 
                            .,.                                   .                                 
                                                                                                    
                                                                     .                              
                            .          .                                                            
                 ..                    .        .                     ..                            
                  .     ..                                                             ,.   ..      
                                         ,                                                          
                  ,                                      ..                      .                  
                  ,                                            ,.                ..                 
`,y[69]=`                               ..               ,.                           .                    , 
         ..                ..   .                                            .                    . 
                                                                                                    
                                                    .                                               
                                             .     ..                                               
                                             ,  ..                                                  
                                                                                                    
                                                                 ,                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            :,           
                                                                                .      . .          
                                                                                .                   
                                            .....                                      .            
                                           ,:::::,,,,,,,,,,:;;;;;::,,.                            . 
                                       ..,:;i11t11111111111fftttftt11i;,..                    .,    
                                    .,,:;ii1ftfttt11iii11ii1ii1tt1t1ttffi,.                         
          ..                     ..:;i11111ttfLtft1i111111111tfftft1ttfLf;...                       
                       .  .   .,;1tffttftfffLLftttt1t11tt1iii1tfftfLt1t111:..                  .    
           .                .:ifCGGGGCLCLLLCLffffttf111t1ii1itCL11fftftttt1,..                 ,    
                            :iitfCGGGGCCCCGGGCCLLffffft11i1ft111itft1ttLtLLt,..   .             ..  
                       .,  .:;;;;11fCG00CLLLCCGGGGCLfft111fttttttLff1iifLfftt:,,.                .  
                           .:;;:;;;iitC88GCLfLLCCGGGGCLff1tCCLCCfftt1111t11itt:,,.                  
        .   ..            .,::::;:;;;;;1fCGG0GCLCLLCCLCGCCLLCGCfttfLCLft111111t;.,...               
                   .      .,::::::;:::::::;iL8GLftLttLL11fCGGGCfftfLLLftttt11ttt;.,..               
         ..       .       ..,,,,,::,,,,,,:,:;tLfittLCfiiitLCGfCGCCLLfttttt111tttt,....              
         ..       ..       ....,,,.,..,.,,,::1f1i1tGL;;;iffCCfftCGGGGCLftt11111i1....               
                               ......,,...,::1tt;i;;;:::;1C0LttfLfLLCGGGCCLt1111;....               
   .                                  ....,,;11t;1i;;;;;tC0C1titLtffLLCCCCCCLLfi....                
  .                                     ...,111f1iii11i1LCCt11itLttfLLCLLCCCGCL;...                 
                         .               ..;iii1;1titi;CGGftftt1LftffLLLCLLLGCf;..                  
                                     .    .;;;iitt;tt:iLGCLtiit11tfffG8880G08Cf:..                  
          .                          ..  .:ii;ii1;Lf;,;tttGt::,itifLLGG0G0@@0fi..                   
                                        .;fti:111Lt;,.:ff1C1,:,,111C8C;iiiLGfi,.             .      
                 .;.                 ..;1ti:.;fCf1;;,.1CftC;,,,.:11CG1:;:;;i1i.                     
                   .       .        .:fCt:..;fC1..ii;;LLiCL1.,,..i1ft,:,::;;1i,       .             
                           .. .    .itf11;;it1: ...:1ff;i0tL,....:i1i.,,,:;;ii:.                    
                              .  .;LLfffft11;, . .,:ii;;111t:....:ii;..,,,:;;::.                    
                                :1Lfftt1iii;:,.,::;;,.,;if11:....iiii.  ..,::,,.                    
                              .:t1i1i;;::;;:::;;;;,.  .;it;:,..,;;;ii.     ....                     
                             .;1;:;;;;::;;:;iii;:.    .;ii1:..,;;:,:,                               
               .             .i,.ittt111iiiii;::       :ttt;.,;;;::.                                
                             .,:11ttt1iii;:,,.          :1tfi,;iii:                                 
               ..             .:,:;;;,::;,              .;fLLti111:                                 
               ..               .,::,.,::           ...,:,:1tft111:                                 
             .                  .,,:::,:,     ,. .,::::,,..,;1t;1t.                                 
             ..  ,,          .   ..,,:;;,     .,;;;;:,,.  .,:,;;1:                                .,
                     ,.   .,....:,,,..:::.     .........,:::,..:,                                 .,
           .     .   ,,  :1;:;;;:::,.,.,:.         ,::,:,:,... ,:         .,                        
                       .,i;;tt;:::,.;,.,.      ..,;:,.   ,.    .:,                                  
                  ...,:;;:,::,:ii,,;i...         .. .   .       ..,                           .     
                 ..,;;i;..   .,,. ,.,;;.                          ,.                                
                ..,::,.             ;i;,                      ..            .                       
                .                 .;i;;.               .    .,:,,.                                  
                               .,;tfft,      .           .:ii;:,,.                                  
                             .;1ttti;.                  .,::,.    .                                 
                            ,;;,.                                 .                                .
                            .                                                                       
                                                                     .                              
                            .          .                                                            
                 ..                    .        .                     ..                            
                  .     ..                                                             ,.   ..      
                                         ,                                                          
                  .                                      ..                                         
                  ,                                            ,.                ..                 
`,y[70]=`                               ..               ,.                           .                    , 
         ..                ..   .                                            .                    . 
                                                                                                    
                                                    .                                               
                                             .     ..                                               
                                             ,  ..                                                  
                                                                                                    
                                                                 ,                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            :,           
                                                                                .      . .          
                                                                                .                   
                                                                                       ,            
                                           .........   .....,::::,,,..                            . 
                                          .,,:::::::::;;;i1iiiii1i;;;::,..                    .,    
                                     ...,,:;iittt111111t111ti1iii1;;i11i:..                         
          ..                      .,:;;ii11tftfft111i;i1iii11t1ttt111fCf1,. .                       
                       .  .   .,:i1tfffffffLfffftt11t111iiii1ttffffftttt1;..                   .    
           .                .:itCCCGGCLCLLLLffftftt111ttti1ii1tt1tLftL1111:..                  ,    
                           .:iitLCGGGGCCCCGGCCCCLfffft11iittiL8f1fLt1fCtfL1...    .             ..  
                       .,  .:;i;i1tfC000CLLCCCGGGGCffft1ittCG0Gttff1iifLLCLi...                  .  
                           .:;;:;;;iitG88GCCLLLCCGGGCCLft1tLGGCfLft1i11ft11f;,,.                    
        .   ..             ,::::::;;;;;1LCGG0GCLLLLCCLCGCCLLLCLtttfLLLtt1111t:.,.. ..               
                   .      .,::::::::::::::;1L8CftfLf1fL1tfCGGGCfttLLCftttt111t:......               
         ..       .       .,,,,,,::,,,,,,:::;tL1if1tLf111tLGGLCGCCLLtttft1111tt,......              
         ..       ..       ...,,,,,..,,.,,,:iftii11CL;;;ifC0CLffGGGGGLftt11111t:......              
                              .......,,...,:1tt;;i;;;;::;tG0LftfffLLCGGCLLt1111,.....               
   .                                  ....,:i1t;;1i;;;;;fC0CttitftfLLCCCGCCCLL1,....                
  .                                     ...;1tf;t1ii11itCCCt1titftfLCCCCCCCCGGt,,..                 
                         .               ..;t1f1;1f1ti1GGCttft11fttLfCLLCLLL0Ct,..                  
                                     .   ..;ii1i11;tt:fG0CLC1;111tftLG0880G08Ct,..                  
          .                          ..  .,iii111;LLi,1ftiCL::,i1ifLCGG0G0@@Gt;..                   
                                       ..,1Lti111ffi,.tLf;Lt,:.,i11G8C;iiiLGfi,.             .      
                 .;.                 ...;tft:;fCL1i;,:LL1;C1,,,,,11LG1:;:;;;1i.                     
                   .       .        ..;LLi:.:fGt,.i11fLt,LCt.,..,;iff,:,::;;ii,.      .             
                           .. .    .:iCLt;:itt;....;tf1,1Ctf.....:i1i,,.,,;;ii:.                    
                              .  .:tfLLffft1i:....:;;:;i11i1,....,iii..,.,::;::,   .                
                                ,ifLffft11i;;:.,:;;:..,;1t11.....;iii, ...,::,,.                    
                              .,111ii;;;:::::::;;:.   .:ii;:.. .:;;;1.    ..,..                     
                             .;1;;ii1i;::;;;;i;;:      :iii:...;i;::,                               
              ..             ,i::1ffLt1iii;i;;::       ,1f1i..:;;::,                                
                             ,:;i11111ii;;:,..          :ttft,;i;i;.                                
               ..             .,.;;;:,,:;:.             .:ffLf;i11:                                 
               ..              .,,::,.,:;,           ..,:,:itft111,                                 
             .                  .,,:;:,::     ,.  .,:::,:..,;1tit1                                  
             ..  ,.          .   ..,,;:::     .,:;;;;:,.. .,;:;i1,                                .,
                     ,     ...  ,.,,.,::,      .,,,.....,,::,..:.                                 .,
           .     .   ,,  .i:,,:;:,,,.:,,,          .,,::::,... ,:          ,                        
                        .ii:i1i;::,:;:..        ..::,,...:.    .:,                                  
                     ..,;i:i1i,:i::i:.           ....   .       ,,,                           .     
                  ..,:ii:,..  ,i;...  ..                         ..,                                
                ..,:;;:.      ..    ::;.                           .        .                       
                . ...              ,ii;.               .     .,,,..                                 
                                 .;1ii,      .            .:ii;:,,.                                 
                              .:itLft;.                  ,;i;,.....                                 
                            ,;1t1i;:,                    .        .                                .
                           .,,,.                                                                    
                                                                     .                              
                            .                                                                       
                 ..                    .        .                     ..                            
                 ..     ..                                                             ,.   ..      
                                         ,     .                                                    
                  .                                      ..                                         
                 .,                                            ,.                ..                 
`,y[71]=`                               ..               ,.                           .                    , 
         ..                ..   .                                            .                    . 
                                                                                                    
                                                   ..                                               
                                             .     ..                                               
                                             ,  ..                                                  
                                                                                                    
                                                                 ,                                  
                                                                 .                                  
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                          .            :,           
                                                                                .      . .          
                                                                                .                   
                                                                                       ,            
                                           ..             ..,,:,,,,..                             . 
                                            ..........,::;;;;;i;;:::::,,.                     .,    
                                        ...,::::::;;iii1t1ii;:::ii::;i;;,.                          
          ..                       .,,::::;iiittt111iiiiii11i11itti1tLLii,. .                       
                       .  .    .,:;i1111ttffffLft111ii1;;ii1ttffLffftfLti:..                   .    
           .                .,;1fLLCCCCLLLLLfffttt11111t11;;itfttfLffftL1i,..                  ,    
                            :i11LCGGGGCCGCCCCCLLLfftt1111tiiitt1tff1fLtLff,..     .             ..  
                       .,  .:;i;i1tfC000GCLCCCGGGCLfft1i1ttftff1fLt11LLfCC;..                    .  
                           .:;::;;;iitG880GCLLLCGGGCCLft11tffCCfLft1ttLLfft,..                      
        .   ..             ,::::::;;;;;1LCG00GCLfLfCGCGGCCLLLLftttffLftt111i.....  ..               
                   .      .,:,,,:::::::::;i1L0CttffLtfLtffCGGGLttfLCLttttt1t;........               
         ..      ..       .,,,,,:::,,,,,::::iffi1t11Lft1ttL0CLGGCLLftttttt1tt,.......               
         ..       ..      .....,,,...,,,,,,;ff1;i1iff;iiitCGCLtLGGGGCLft1111t:.......               
                             ........,,..,,ifti;;i;i;:::;fGGLftffLLCGGCLft11t:.......               
   .                                  ....,i1fi;;ii;;;;;LG0LttifftfLCCGGGCCCCi......                
  .                                     ..:itfi;11ii111fCGCtttitttLLCCCCCCCCGf,,...                 
                         .               .:ttL1i;tfit1CGGfttf111tttLLCLCCLLG0f;...                  
                                     .    ,t1ftii1;tfiC081LGt:1tttffLG8@@00@0L;..                   
          .                          ..   .t1111t;fC1:fff:LG:,:i1ifLGGGGC0@@C1,.                    
                                         .iLfi111fLt,;Lft,tf:,,,i11G8C;;iiCCt;.              .      
                 .;.                   .,iffi:tLLti;;tLf;,Lf,,,,,itLG1:;;;;i1i.              .      
                  ..       .         .,itt1:,tCf,.i1fLt:,fCf.,.,,:itf:,:,:;;ii,.      .             
                           .. .     .:tCLi:;tfi...,tt1;.1fft.....,ii1,,,,,:;;i:.                    
                              .  .,;1fLLtttt1;. .,;;,,;i1i1i.....,i;i,....:::::.   .                
                                ,;tftffft1i;;:.,:;:....;tt1; ....:i;1, ...,,,,,.                    
                               .11iiiii;;:::;;;;;:     ,i;;,..  ,:;;i,    ..,...                    
                             .;1ii1tti;;::;;;;;i,      ,iii;...:i;:::                               
              ..             ,i;;tffft1iii;;;;::       ,tfi1:.,;;::,                                
                             ::;i1111i;;;;:,..          ;tttt::;;;;.                                
               ..            .,,,;;;:.,:::,             .:tLLfiii1:                                 
               ..              ..:::, .:;:            .,,,:itff111,                                 
             .                 .,:,:;,,::,    ,.   .,,:,:,..:1t1fi                                  
             ,   ,.             ..,,:;:::.    ..,::;;:,..  ,;:;ii.                                .,
                     ,      ..  ..,,.:,::       ,:,,,,...,:;:.,:.                                 .,
           .     .   ,.   :,...:,,,.,:::,           .,:::;:,.. :,          ,                        
           .             ;1::;;;:::;i:..          .,::,,.:.    .:.                                  
                       .:i:it1;:;:;;,             ,...  .       ,,,                           .     
                    .,:;;::;;:.it,                               ,.,                                
                  .:;i;,..    .;,   ....                           .        .                       
                ..:::.             ,;::.               .      .,,..                                 
                  .               ,i;i,      .              ,;;;::.                                 
                                .;11i;.                  .,;1;:,...                                 
               .            .,:itff1:.                   ...      .                                .
                           .:;i;:,.                                                                 
                            .                                        .                              
                                                                                                    
                 ..                    .        .                     ..                            
                 ..     ..                                                             ,.    .      
                                         ,     .                                                    
                  .                            .         ..                                         
                 .,                                            ,.                ..                 
`,y[72]=`                               ..               ,.                           .                    , 
         ..                ..   .                                            .                    . 
                                                                                                    
                                                   ..                                               
                                             .     ..                                               
                                             ,  ..                                                  
                                                                                                    
                                                                 ,                                  
                                                                 .                             .    
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                                       ::           
                                                                                .      .            
                                                                                .                   
                                                                                       ,            
                                           .              .,,::,,,,..                             , 
                                             .  .......,:;;:::;;;:::::,.                       ,    
                                           .......,,:;;iti;:,,,:;::,:;:;,.                          
          ..                        .....,,,,.,:;;iiiiii11i;;;;;11;;1Lf;i,  .                       
                       .  .      .,:;;;;;iiiiittt111ii;;;ii1ttfLCftttffii:.                    .    
           .                 .,:i1tfLLLfLLLLfLLtt1t1i11iii;ittffLLffftt1;;..                   ,    
                            ,;i1tCGG0GGGGCCCLLLfftttt11tt;;;1fftfLffLfLfti..      .             ..  
                       .,  .:;iii1tfLG800GCCCCGGGCLft111ttt11fttft11fLtfL1..                     .  
                           .:i;:;;;;i1L888GCLLCCGGGCLft111tttLffft11tLLLf1,..             .         
        .   ..             ,;:::::;;;;;1LG0800GLfCLLGGGCCLLffLfftttfffft11:...     ..               
                   .      .::,,,:::::::::;;1L0CtLLfftLLfLLCGGCf1tfCLtttttti..........               
         ..      ..       .,,,,,,,,,,,,:::::iftftittftttttL0CGGCCCLfttttttf:........                
         ..       ..   .  .....,,,...,,,,,,iLt11;ii1fi1iifCGCLfCGGGCLft111fi........                
                              .......:,.,,:tf11i:i;i;:;,ifCGLftffLCGGCLft1t1.,......                
   .                                 ....,;1f1i;:11;;;;iLC8L1tiftfLCCGGGGCCL:.,....                 
  .                                    ..,i1f1;;1tii11fCCCL1t1ittfLLCCCCCCCGf,,...                  
                         .          .   .,1tLt;ii1fi1L0CG1ttf111tffLLCCCCLG8C;...                   
                                     .   .itLLiii1;tLL080:L0f:11ttfLC0@@@0@8C;..                    
         ..                          ..  .;fLti11itCftLLt,t8;.,1tifC0GLLL8@0t:.                     
                                         .1LL:11ifLt;fLfi.iL:,,,;t1G8L:;i1ft1,.              .      
                 .;                    .,;fL;:tfLf1itLL1,,tL:,,,,i1fG1:;;;;i1:               .      
                  ..       .          .:;tt:,1CL:.ifffi,,1Cf.....:i1f:,:::;;i;.       .             
                           .. .     .,itLt::if1, .it1i:,1ffi.....,iii,,,.,:;:;:.                    
                              .   .,;tLCfttt1i,.,;i,.,;i1i1;.....,i;i:...,,::::.   .                
                                .;ittfffft1i;i,:;;,. ..;t11:..   ,;;1:....,,,,,.                    
                                i1iiiiiii;::;i;;;.     ,i;;;..  .:;;i;    ....                      
                              :i111tti;;:::;;;;i.      :i;;i,..,;;;:;.                              
              ..             ,i11tfft1iiii;;;;::       :tti1;.,;;:::                                
                            .:;;i1iii;;i;:;:..         .itttfi,;;;;.                                
               ..           .., :;;;,..::::.            .:1LLL1ii1:                                 
               ..              .,:;:, .::;.            .,,:;tff111.                                 
             .                 .:::;:,,,::    ,.    ,,,::,..,i11f;                                  
             ,   ,.             .,,,;::::,    .  ,,:;:,,.. .:;;ii                                  ,
                    ..      ..  ..,.,::;;.      .::::,,...:;:,,:.                                 .,
           .     .   :.   ...  .,...:;:::           .,,::;;,.. :,          ,                        
           .             :i,,,;;:,:;;,.,.          .:;::,:,    ,:.                                  
                        ,i;;1ii;:::,.             .,,....      .:,.                           .     
                      .:i;itfi:;i,    .                         .:.,                                
                    ,;i;,,,,.. 1i   ....                         . ,        .                       
                .  :i;,       .,   .:.,                .       .....                                
                  .,.             .;:;.      .               ,:;;:,.         .                      
                                 ,i;ii.                   .,i1i:,,.                                 
               .              .,ift1:..                  .,:,.    .                                .
                             :i1fti,                                                                
                            .::,.                                    .                              
                           ..                                                                       
                 ..                    .                              ..                            
                 ..     ..                      .                                      ,.    .      
                                         .     .                                                    
                  .                            .         ..                                         
                 .,                                            ,.                ..                 
`,y[73]=`                               ..               ,.                           ,                    ,.
         ..                ..                                                .                    . 
                                                                                                .   
                                                   ..                                               
                                             .     ..                                               
                                             .  ..                                                  
                                                                                                    
                                                                 ,                                  
                                                                 .                             .    
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                                       ::           
                                                                                .      .            
                                                                                .                   
                                                                                       ,            
                                           .            .,::::::,,,..                             , 
                                                      ,:;:;::::;;:::::,,.                      ,    
                                                ....,:ii:::,,,,:ii1,:;:;;.                          
          ,.                                  ...,,:iiiLti;::::;ii;;tf1;::  .                       
                       .  .            .,,.....,:;i;i;;;;ii11tffLtffCGL1;;,                    .    
           .                       .,,:iiii;;;ii111iiiiiii1t11tLLfffLLCLti:..                  ,    
                            ..,,:;1fLCCCCCLfLLfftft11111i1t1tffLfftttCCLLf;.      .             ..  
                       .,   .,:;i1tfLC0000GGCCCCCLftt1t111tffLtfCLfLttLCCt..                     .  
                           .,;;;;iiii1tLG@80GCCCGGCLttt11t1fGLtttt1fLtL0C:..              .         
        .   ,.             ,;;;:::;;;iiitC0888GGCLGCGGCLfftttfft11ttLffff,..       ..               
                   .      .::,::::::;;:;;;i1fG0LLCfffLLCCCGCLft1fLftt11ii.......   ..               
         ..      ..      .,,,,,,,,,,,,,,::::iftLGt11tftf1fGGGGCCCCfttttti.........                  
         ..       .    .  ...........,,,,,:1Lfttii111it1iLGGCCLCGGLftttLi.........                  
                  .    .        .....:,.,,;Lfti;;;1tii;;fG0GCf1ffCGCfffL1.,......                   
   .                                .....:ift1i;:;11;:;fC0@Ltt1tLfCCGGGCL;,,....                    
  .                                   ..,i1ft1;:;ii;;1LCC1f1t111LLLCCGCC0Gi,...  .                  
                         .          .  .,1tCfi:;;11iL0CGt,ttLt1tfLLC000G88L,,.                      
                                     .  ,1tCt:;i1f;iC888;.tGGi111fLG0008@8f::.                      
         ..                          ,. .tfG1:itt1;ffLGL,,;0C,,;i1L08f;tCLt;,.                      
                                       ..tC0i,1ti1LGCLfi,,,Lt,..:itCGt:;;it;,                .      
                 .;                    .,fCt,,ttfLLfffi,,.;C;..,.:1tL1,:;;ii,                .      
                  ..       .          .,itt:.;tL1;LLL;.,.;CL,....,;;t;,,::;;;.        .             
                           .. .      .:itt:,:tf;,11it1;,:1ti......:;i:..,,::::,.                    
                              .    .,i1LL1i1t1;:i;,..,;11i1:.... .::i;....,,,,,.   .                
                                .:;1tfCLt111;i;;:,.   .;t1i;.    .,:ii.  ..,....                    
                                :t1t11iii;;;;;;:,      ,;;:;;.  .:;;;i.                             
                              ,;tttt1iii;;;;;;;i       :;;;;i,.,:;;::,                              
              ..             .ittttt11ii;;;;;:,:      .;1i1ii:.:;:::.                               
                            .:iii;iii;;:i:;i,          ,1i1ftt;:;;;.                                
               .            ,:,.:;;;,..:::i,            .,;1fft11t:                                 
               ..          .,  .::;:. .::;:            ...,:itttt1.                                 
             .             .,  .,::::..,::,   ,.    ...,:...,;t1t,                                  
             ,   :.        ..  .,,,::;,,::.   .   .,::,,..  ,;;i:                                  .
                    ..      .   ..,:::,,::       ,::::,,,.,:;:::                                  .,
           .     .   :.    ..  ..,,;:,,:;:        ...,,,:;;:,..:.          ,                        
           .             .,,..,,,,:,...::.          .::::;,.   ::.                                  
                        .i;:,:;::,..  ...          .:;,,,.     .:,.                           .     
                       ,;i:;1i;::,    ..            ..          ,:,.                                
                     .:;;itCt;;i:    ...                         ,.,        .                       
                .   ,i1::i;;:..1,   ...                .        ....                                
                   .;:.        .   ,,,.      .                .,:::.                                
                   .              ::,,.                     .;11;:,                                 
               .                .i;ii,.                   .,;;,.. .                                .
                              .;tt1i.                      .                                       .
                             .;fLt:.                                 .                              
                           ..,:,,.                                                                  
                 ..                    .                              ..                            
                 ..     ..                      .                                      ,.    .      
                                         .     .                                                    
                  .                      .     .         ..                                         
                 .,                                            ,.                ..                 
`,y[74]=`                               ..               ,                            ,                    ,.
         ..                ..                                                .                      
                                                                                                .   
                                                   ..                                               
                                             .     ..                                               
                                             ,  ..                                                  
                                                                                                    
                                                                 ,                                  
                                                                 .                             .    
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                                       ::           
                                                                                .      .            
                                                                                .                   
                                                         .....                         ,            
                                           .          .,:;;::;;i:,,..                             , 
                                                     ,:;:;:::::;;:;::::,.                      ,    
                                                   .:;;:;::,,,,:i1t;:;:ii.                          
          ,.                                    ...;iitCti;:;;:;i1;i1f1;::. .                       
                       .  .                   ...,;iiii1iii1ttffffLLLGC1i;:.                   .    
           .                           .....,,,:;iiii;;;iitt11tfffffLLLLtii,                   ,    
                                 .,:i11ttttttttttt111i111tt1ttfffft1fLCLft1,      .             ..  
                       .,    .,,:i1tfLG0000GGCCCLLftttt111t1tffLLffftLLLLLi.                     .  
                            .:;;iiiii11fLG880CCCGGCfttttt1tLLttfttfLt1LGLi.               .         
        .   ,.             .:;;;;;;iiii11fG8880CCCGGCCLffttfLff111tfLffLf..         .               
                   .      .:::::::;;;;;;;;i1tC0CfCCfCGCCCCCLfftttfttt1i1;......    ..               
         ..      .       .,,,,,,,,::::,,::::;tffGL11fftf1CGGGCLLCLttt11i........                    
         .        .    .  ........,..,,,,,:1LLf11i1t1i11fCGCCCCCGCftfff;........                    
                  .    .         ....:,.,,iCfti;i;i111:1C0GGLLtffGGLfLL:,,.....                     
   .                                ....,:1fft;;::ii;:1LG8@Ltf1LfLGGGGGf,,,....                     
  .                                   ..:ifLfii:;;i;1LLCf;ttft1fLfCGGLG0L:,..                       
  .                      .            ..;1LGti::;;it0GCC:,tfff1tLfCG808@8t..                        
                                     ...;tfG;;;i;i1L08@L,,1G0fi1tLGG0CG@Gt,.                        
         ..                          ,..iLGL:;i1i11ffG0i,,,C8:,;itC001ittt:                         
                                      ..1L01;:i1iitCLLt:,,.tC,..:itLLi:;i1:                  .      
                 ,;                   ..1Cf;,,i1tLCLf1,.,.,C1....,i1fi,;;i;,                 .      
                  ..       .          .,tfi;.,1LfLLCf....,tC:.....:;1;,:::;:,         .             
                           .. .      .:it1;,,1f11t:;tt:,,ii1...  ..:i;,.,,:,,,.                     
                              .    .,;ift1ii11iii.. .:;i1ii;  ..  ,:;i. ...,...                     
                                 ,:itfLLt111i;;;,      :t1i;,     ,,ii,    .                        
                                .1tt1111i;ii;;;,       ,;;::;:. .,:;;i,                             
                               ,tLftiii;;;;;;;:;       :::i;;i,.:;;::,                              
              .               ;fft11iiii;;;;;..:      .;i;i1ii:,;;::,                               
                             :ii;:;ii::,;:;1,          ,1::tt1ii;;;.                                
               .           .::,,:;;::. ,;:1:            ..,itf111t:                                 
               ..         .,:. ,::::.  ::;:.            . ..:1tit1                                  
             .            .:;. .::::,. ,:;,   ,.      .,:..  ,111,                                  
             ,   ,.        .;. ..,::;:..::.   .      .,,... .;ii,                                  .
                    ..     ,:  .. ,;::,.:;.       ,,:::,,,,:;;;:                                  .,
           .     .   :.    ,. ..,.::,,.,i;        ,:,,,,:;;;:,,:.          ,                        
           .              ... ..,,,....:;.           ,:;;i:.. .:,                                   
                        .:::..:,,.    .,.           ,;;::..    ,:,.                           .     
                       .i1:::;:::.    ..            ,:...       ,:,.                                
                      .;i:i11i;:,                               .:.,        .                       
                .    .i1i1ffi,;1,   ...                .         ....                               
                    .i;.,,.    ,   .,..      .                  ,::,                                
                   .:.            ,:...                      .:11i;.                                
                         .       :;:;..                    .,;i;,..      .                         .
                                ;1i1;.                     ...                                     .
                              .tLti;.                                .                              
                           ...itt;,.                                                                
                 ..          ..        .                              ..                            
                 ..     .                       .                                      ,.    .      
                                         .     .                                             .      
                  .                      .     .         ..                                         
                 .,                                            ..                ..                 
`,y[75]=`                               ..               .                            ,                    ,.
         .                 ..                                                .                      
                                                                                                .   
                                                   ..                                               
                                             .     ..                                               
                                             .  ..                                                  
                                                                                                    
                                                                 ,                                  
                                                                 .                             .    
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                                       ::      .    
                                                                                .      .            
                                                                                .                   
                                                        .,,,...                        ,            
                                           .         .,:;;;;::;i:,,,..                            . 
                                                    ,;::::;::::;;;ii;;;:.                      ,    
                                                   :;;i;;:::,:;;ttft;;:i;,.                         
          ,.                                     .:iiiLffi;:;:;itt;;if1i:;, .                       
                       .  .                    ..,ii1itt1ii1tttfffffLLC11;;.                   .    
           .                                 ..,:;ii;iiii1tt1ttLfffLLCLt1i;;.                  ,.   
                                   .,:::;;;iii1111111i111t11tfttfttttLCLt111,     ,             ..  
                       .,     ...,:itfLCGGGGGCCLLLfttt111t11LffLLftt1fLLLLfi.                    .  
                             .,:;;1111tfLCG88GCCGGCf1ttt1tffLttfftLL11LCLL;.              .         
        .   ,.             .,:;iiii;iii11tf0800CCCGCCLLfftfLftt111tLLffLL;..        .               
                          .,:;;;;;;;;;;;;;iitLGGLLGLLGCGCCCLfLfttttft1iti.....     ..               
         .       .       ..,,,,,,::::,,,::::;1ffG0f1fLfffCGGGCLCCftt11i:.......                     
         .        .    .   ...........,,,,:;fLf11t;1t11iLCCCGCCGGLffffi.......                      
                  .    .          ...:,..,;LCL1:;:i111ifC00GLftfLGCLCL:.,.....                      
   .                                 ...,:1LLf:i::ii;ifGG08LfftLfCGGCGt,,...  .                     
  .                                   ..:ifGC;i::;i1fCCGi;tfft1ffCGGCG0f:..                         
                         .          . ..i1L01;;:;;1G0GGt,,1LfL1fLLC008@01..                         
                                     ..,1tGC,;:;;itG0@0:,,;CGCi1fCG0Lf0Ct:.                         
         ..                          ,.:LL8:,;;1i1ffG8L,,,.t81,;itLGL;i1t:.                         
                                     ..;L0f,;:;ii1LLCLi,,,.;0;..,;1tfi;;1;.                  .      
                 ,;                  ..iLC:;:,;i1fCGf;,,,,.tL....,iif;::;;,                  .      
                  ..       .         .,ifi;;,.ifG0GGt,....;fi.....,;1i:::::,          ..            
                           .  .      .,11;i,,;fLGi,ift;,,;ii,.    .:;i,.,,,,.                       
                              .     .:it11i;1ttf;.. .:1111ii. ..  .,;i: .....                       
                                 .:;1tLfttt1i;i:..    .:t1i;:.    .,;1;                             
                                 ittfftt1ii;;i:        ,::;:;;: .,:;;::                             
                               ,1ft11ii;;;;;;:,:       :::;i;;;,,;;;:,.                             
              .               :tft11iii;;;;;i..:      .;;,;11;i;:;,:,.                              
                            .:11i;;ii:,.:;;1,    .     ,i,.it1i1i;;,                                
               .           .:;::;;;;:. ,;:1:            .. ,if111t:                                 
               ..         .::..,;;,:.  ::;;..           ... .;1i11                                  
             .            ,;;. .;:::,. ,::,   ,.       .:..  .iii.                                  
             ,   ,.       .;i,  ,::;;,..::,   .       .,... .:ii,                                  .
                    ..    .;i, . .;;:,..:;.        ..,:,,,,,;;i;                                   ,
           .     .   :.   .;,.....:,,, ,;;.       ,;::,:::;;;:::           ,                        
           .              ,:....,. .. .:;,           ,:;;1;,. ,;.                                   
                         ,:,.,,,,.    .,,           .:;;;:.   .::,                            .     
                        ;i::,:::,     ..            .:;,,.     .:,,                           .     
                       :1;::i;::,                    .          .:,,        .                       
                .     :1;itf1;i;.                      .        .,,,                                
                     :t;;11;, ,;.   ...      .                  .::,                                
                   .,;.           .,..                        .;11;.                                
               .    .    .       ,;,:..                     .,ii;,.      .                         .
                                :1;1i.                     .,,                                     .
                               :111i,.                               .                              
                           ...:LLi:.                                                                
                 ..         ..;;,.     .                               .                            
                 ..     .                       .                      .               ,.    .      
                                         .     .                                             .      
                                         .     .         ..                                         
                 ,,                                            ..                ..                 
`,y[76]=`                               ..               .                            ,                    ,.
         .                 ..                                                .                      
                                                                                                .   
                                                   ..                                               
                                             .     ..                                               
                                             .  ..                                                  
                                                                                                    
                                                                 ,                                  
                                                                 .                             .    
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                                       ::      .    
                                                                                .      .            
                                                                                .                   
                                                      .,:::,,...                       ,            
                                           .        .:;:;i;:::;;::,,,..                           . 
                                                   :;:::;;::;;;i1i1i;;;,.                      ,    
                                     .            :;;;i;:;::i;;;itti;;:;;,.                         
          ,                                      ,i1itLfti;i;ii;i1:;ifti;;,..                       
                       .  .                     .;11i1tfLti1tttffttttfCt1;;,                   .    
           .                                  .,:iiiii1111tt1ttfftfLLft111;;:.                 ,.   
                                     ..,,,,::;ii1111ii11ttt1fLtfLfttfLLftiii1.    ,.             .  
                       .,        .,:;1tfLLCCCCLLLffftt111t1tGCfLLtt11fCCLLf1i.            .      .  
                              .,::;1ttttfCG080GCGGCftttf1fLG0ffLftLL11fCLLLi.             .         
        .   ,.              .,,;ii11111111tL880CCGGCCLLfttLCLtt11ttCffffff;..       .               
                           .,;;i11ii;i;;;;iitLCGLfCCCGCGCCLLffft1ttftti1t:...      ..               
         .       .        .,,::::::::,,,:::::iffL8CttLfttCCGCCCCLfft11;;,....                       
         .        .    .   .............,,,:tCLtit1itti1LLLCGCCGGfffft:......                       
                  .    .          ...:,..,:tCLt:;::iiitLC0GGCLffGGCCC1,,....                        
                                     ....:1CLL:i;::;ifCGC08CfLftLGGCGL:,,..   .                     
  .                                   ..:ifCL;;i:;;tCG0C;;1fffttLGGC00L:..                          
                         .            .,11fCi:i:;;f800G;:,tLtCtLLLGC8@01,.                          
                                     ..;t1L1.::;;iG08@t::,;GCGitLCGCtLft:.                          
         ..                          ,,tfC1.,:;1;1fC80i,,,.i8C:;itLGt;it:.                          
                                      ,fCL,,:;;i;LC00t:,,,,.Gf..,;ittiii;.                          
                 ,:                  .;fL:,::,:;f00Ct,,,,,.:L;...,i1fi:;;:                   .      
                  ..       .         .;ti:;;,,;LGLLCf,....:1t,.   ,:1i,:::,           ..            
                           .         .i1;;i:.:fL1.,1Lf;,.:ii;.    .:;i:.,,,.                        
                              .     .:t1;ii;iffi... .;tf11ii, ..  .,;i;...                          
                                 .,:itt1ttt111i... .. .:tti;:,.   .,:ii.                            
                                 ;1tt1111ii;;i,        ,;;;;;;;,..:;i:,.                            
                 .             .;t11iiii;;;;;;,:       ::,:ii::;::i;:,.                             
              .               ,tftiii;;:::::i,.:      .;;,.i1i;ii;::,.                              
                             ,1t1;;ii:,.,;:i:    .     :i. ,1t11t;;:                                
               .           .,;;;;;;;:. ,;:1;            ,.  .1111t;                                 
               .          .,:,.:;:.:.  ::;i,.           ...  ,ii1i                                  
                         .::;. :;::,,  ,:;:.  ,.       .:...  :i;.                                  
             ,   :        .:i, .:;;;,. .::,   .        ..... :i;,                                  .
                 .  ..     ;1, ..:i:,, .::.          .,,,,,,:ii;                                   ,
           .     .   :.   ,1;. ..,,,,. ,;;         :;:::::;i;:i:           ,                        
           .             .ii...,.  .  .:i,         .,,::;1i:. ,;.                                   
                         :1:.,,,.     .:,            ,:;;:,.  ,::,                            .     
                        :1;,,:,,.     ..             ,i;,,.    ,:,,                           .     
                       ,1i::;::,.                    .,.        ,:,,        .                       
                .     .1;:i1i;:,.                               .:,,                                
                     .11;1fti,;:    ..       .                  ,::,                                
                    .;:.,,,.  ..   ,.                          ,i1i,                                
               .   ...           .:,,.                       .;i;:,      ..                        .
                                .i;ii.                      .,.                                    .
                               .i111:.                               .                              
                              .tf1;,.                                                               
                 .         ..,i1;,.    .                               .                            
                 ..     .    .,                 .                      .               ..    .      
                                         .     .                                             .      
                                         .     ,         ..                                         
                 ,,                                            .                 ..                 
`,y[77]=`                               ..               .                            ,                    ,.
         ,                 ..                                                .                      
                                                                                                .   
                                                   ..                                               
                                             .     ..                                               
                                             .  ,.                                                  
                                                                                                    
                                                                 ,                                  
                                                                 .                             .    
                                                               ..                                   
                                                                                                    
                                                                          .                         
                                                                                       :;      .    
                                                                                .                   
                                                                                .                   
                                                    ..,;;:;:,,,.                       ,            
                                           .       ,:;;ii;;::;;;;:,,,..                           . 
                                                 .::;;;::::::;;;i11;;;;:,                      ,    
                                     .          .:;:;;;;;;;:,:;:;ffi;;;:;:.                         
          ,                                     ,i1iiftti;:;;;;ii1it1tti;;:..                       
                       .  .                     ;t111ffLt1i11t1ttt111tCCti;;.                  .    
           .                                  .,iii;i1tft1tt1t1ftttff1tLtti;;,                 ,.   
                                       ....,,:i1i111111tttt1LLffftttffLL1t1iii.   ,.             .  
                       ,,         .,:;i1tfLLCCLLLffftt11tt1tLCLLLtf11fGCLff1ii.           .      .  
                                .,:;1tttfLCG00GCGGCftttt1ftfftfLLtLfttfLLfLf1,            .         
        .   ,                 .,:;i1t11111tfG80CCGGCCLLftfCCttt11tfCft1tffL1.       .               
                           .,,:;;111iiii;iiitLC0CLCGCGGGCCCLfLft1ttffttitf;..      ..               
         .       .        ..,::;;;;::,,,:::;:;fff0GttLLffCCGCCCCLfft11i;;,...                       
         .        .    .   .............,,,:1LL1itti1tttLLfLCCCGCfffft;,....                        
                  .    .          ...:....:1CLf:;i;;;;tLLLG0LfffGCCCL1,....                         
                                      ...:iCff;:i;::1LCLfC0CtLttCGCCCf,,..    .                     
 ..                                   ..:i1ft;:i::1C00GLi:1ftL1fC0CGGCt...       .                  
                         .             ,1111;,i;:10088C;:,tGtCtLfCCG80f:.        .                  
                                    ...i11ti.:;;ifG8@0t:,,:GGGttLCCf1ft;,                           
         ..                          ,;fff;..:;i1tL00G1,,,.:0GiiitLCi;1;,                           
                                     .1LL;..:;:itCG0Ct:,,,,.1G:,:;itt;i;,                           
                 ,:                  ,1fi.,::,,iG0Gf1,,,,,..1t,..,i1f;;;,.                   .      
                  ..       .         ,ii,::;,.:LCttLL:.,,.,;1;..  ,:1i:::.            ..            
                           .  .      :i;;;ii,:tfi,,fGCi,.,i;i,    .,;i:,,..                         
                              .     ,1ti;ii;;t1:,.,.,itf11ii;  .   ,:ii..                           
                                  .:it1ii1ii1t;...... .;tti;;:,   .,:ii,                            
                                 :;iiiiii;iii;,..      .:;;;;:::,.,;i:..                            
                 .              ;1iiii;;;;;::;,,       ::,,;ii::i:;i:,.                             
              .               .1t1iii;:,,,::;,.:      .;;..,111i11:::.                              
                             ,it1;;i;;,.,;:i:    .     ;1.  :11111::                                
               .            ,;iii;;::, ,;,1;           .,.   ;11i1;                                 
               .          .,:,,;i:.,,  ::;i,.           ...  .,i1i               ..                 
                          ,:;..:;:,,.  ,:;:.  ,.       .:...  .;i.                                  
             ,   ,        .:i. ,:;;:,  .::,   .         .... ,;;,                                  .
                 .  ..     :i, .,i;,   .::.           ...,,,:;i;                                   :
           .         :.   ,ii, ..:,,.  ,;:          ,,::::;;;;i:           ,                        
           .             .i1;....     .;i,         .;:::;1i:,.:;                                    
                         :1i.....     .:,            .::;;:,..,;,.                            .     
                        ,11:,,,..     ...            .:;::,.  .,::.                           .     
                       .1t;:::::.                     ::.      .:::.        ..                      
                .      ;i::;i::,                                ,:,,         .                      
                      ;1;itfi;:     ..       .                  ,:;,                                
                     :1iiii:.,:    ,,                          .i1i.                                
                    .,   .        :,,.                        ,ii;,      ..                        .
                                .;;:1,.                     .,,.                                   .
                                ;ii1i,                               .                              
                           .   :t11;,                                                               
                 .         . .:ft:..   .                               .                            
                 ..     .    ,:;.               .                      .               ..    .      
                                         .     .                                             .      
                                         .     ,         ..                                         
                 ,,                                            ..                ..                 
`,y[78]=`                               ..               .                            ,                    ,.
         ,                 ..                                                .                      
                                                                                                .   
                                                   ..                                               
                                             .     ..                                               
                                             .  ,.                                                  
                                                                                                    
                                                                 :                                  
                                                                 .                          .  .    
                                                               ..                                   
                                                                                                    
                                                                          .             .           
         .                                                                             :;      .    
                                                                                .                   
                                                    ........                    .                   
                                                .,:;;iii;;::::,,..                     ,            
                                           .   .:;;ittiiii;;;iiii;;;:,.                           ..
                                              .;;:;i1;;i;::::;;ii11ii;;:,.                     ,    
                                     .        ,;;;;iiii;::;;:;i::1t;:;;:;;,                         
          ,                                   ::iiittiii;;ii;;;;;1i:;1t1i:;,.                       
                       .  .                   :i1t1fLt1t1iii11iiii;;i1LGti;;,.                 .    
          ..                                 .;;ii11tttft111tt111i1i11t1iii;;;:.               ,.   
                                        ..,,:i1111ttt11tttttLffff111tt11ii;i1;f1. ,.             .  
                       ,.          .,:;i1fLCCCLLLLfftt11tt1tfCLfLft11fff1i1t1111: .       .      .  
                                 .,:;itttLCG0GGCGGCfttt1ttttftfLLfLLtttLLftt111i.         .         
        .   ,                   .,,:i11111ttC0GLCGGCCLLftttttttt1tfLLtttffLf1i1,    .               
                             ..,,:;i11iiiii1tLGGLfGGCCGGGGLffftt11tfLft1itfft:.    ..               
         .       .         .,,::;;ii;::,:::;;ittf08LtLLLCCGGGCCLffft1t111ft;,.                      
         .        .    .   ...,,,,,.....,,::iLti1tLt1tfLCLttCCCGCffft11i;:...                       
                  .   ..            .:,..,,;LLt;;iiii1LGC1tLLt1LGCCCLft:...                         
                                     ....,;tLti:;;;tLC0G1tGCtfffLGCGCLf,..    .                     
 ..                                   ..,;i1ti,;;iLCG0C1i;ittffLGG00CCG:..   .   .                  
                         .          .  .i11ii.:iiLLG0ti1::tCtCCLGGLCGCt,.        .                  
                                    ..,it1ti,.:i1tL01;t:,:;GGGfLCCt:11:,.                           
         ..                          ,1ff1:..,:ittft;1t,,,,:CGfifLG1;i:,.                           
                                     ;fL1,...:;tLLtiit;.,,,.,tf:;itti;,,.                           
                 ,:                 .1f1,...:,10Gf1i;;:.,...,;i,.:itt:,..                    .      
                  ..       .        .;i:.,::,iGC1i:LCt:.,..:ii:.  ,;t;,,..            ..            
                           .        ,;:::;:i1GCti;,:LGf,..:i;i,    ,:i:..                           
                              .    .;i;iii1tff1;:....:tti;1;i;..   ,:;;,                            
                                  ,;11ii11tf1i;,    . .,1t1i;i;,.  ,:;;,                            
                                .:ii;;iiii11i;:.       .:ii;i;;::,,;;:,.                            
                 .             .;iiiiiiii;::::::       ,;:,,;iii;iii;:.                             
              .               .11iiiii;,.,::;:.;      .;;. .,it1tii::,.                             
                             ,;t1;ii;;, .;:i;    .    .i1.   ,it1i;:.                               
               .            ,;iiiii,;: .;,i;.          .:.   ,,;11;                                 
               .          .,:::;i:. ,. :::i,.           ...  ..:ii,              ..                 
                          ,:;:.;;...   ,:;:.  ,.       .:.,.  .:i:                                  
            .,   ,        .,;,.:;::,   .::.   .          .....;;:                                  .
                 .  ..     .i: ,;,,.   .::              ...,,;i;.                                  :
           .         :    .;i, ...     ,;,           ..,:::;;;i;           ,                        
           .              :ii,..      .;;.          .:;;;1i;::;:                                    
                         ,;i;...      ,:,           .,:::;;:,.;;,                             .     
                        ,:ii:...      ...             ,:::;,  ,:;,.                           .     
                       .;11;,,::     ...              ,,;:     ,;;,         ..                      
               ..      ,iti;::;,     ,,.               ..      .:;:.         .                      
                      .:;;;i;:.     ,,:.     .                 .;;;.                                
                      ;t1ttii;     ,:;:                        .i1;.                                
                   ..,ii;;, ,,    ,::1.                       .ii:,      ..                        .
                                 ,i,1;.                      .:,                                   .
                                .i;11:.                              .                              
                               .;111:.                                                              
                 .         .  ,;ft:.   .                               .                            
                 ,.     .    .;tf,              .                      .               ..    .      
                             ,,:,        .                                              .    .      
                                         .     ,         ..                                         
                 ,,                                            .                 ..                 
`,y[79]=`                               ,.               .                            ,                    ,.
         ,                 ..                                                .                      
                                                                                                .   
                                                   ..                                               
                                             .     ..                                               
                                             .  ,.                                                  
                                                                                                    
                                                                 ,                                  
                                                                 .                          .  .    
                                                               ..                                   
                                                                                                    
                                                                          .             .           
         .                                                                             :;      .    
                                                                                .                   
                                                ...,,:::,,..                    .                   
                                .             .:;ii1t1iii::;;;:,,..                    ,.           
                                           ...;i111t1ii11i;;;ii;iii;::,.                          ..
                                             ,;i1iiii1iii;::;ii;;11i;;;;:.                     ,    
                                     .       :;ii;;iiiii;ii;;;;i;;ti::;::i:                         
          ,                                 .:;iii1tiiii;iiii;;iii1iiit1i:;:.                       
                          .                 .;;11ifLt1111ii111iiiii111tGfii;;,                      
          ..                               .,;;ii1tttttftt11tt111i11i11t1iii;;;, .             ,.   
                                       .,,:;111ttttttt1tt1tfLffff1111t111iii1iif1.,.             .  
                       ,.           .:i1fLCCCCLCCLffttt1tt1tfGLfLft11CLtttttt111t;.       .      .  
                                   .:1tttLCG0GCCGGCfttt1tfttftfLCfLLttftttttt1i11:        .         
        .   ,                     .,;i11111tG0CLLGGGCCLfftttttfft1fCLfttfffft1i1i.  .               
                                 .,;i1iiii1itLCGLfGCLCGGGGCffLtt11tfLfff11fff1;:.  ..               
         .       .          ..,,:;;ii;::;;iiiittf00f1tfLCCCGGGCLffffttfti1tf1:.                     
         .        .   ..    .,,::::,,,,,,:::iLtiifLft1tLCCttLLLGGLfftt11i1i,.                       
                  .   ..         ....:,,,,,;LL1;;ii;tfLGG11ff11LGCCCLftt;,..                        
                                    .....,;1Lti:;iifLLCLiiCGf1tfLGGGGCLf,..   ,                     
 ..                                   ...;iit1,:iiLftLf;;;1t1tfLCGG0GCCC,.   ..  .                  
                         .             .;11ii,,;i111t1ii:;tL1CLL0CCGGGf;.        .                  
                                    ...i111i,.:i1i11i;1;,:;GGCLLCLi:i1:.                            
         .                           :1fti:..,:1t11iiit:.,,;LCftLCCii:.                             
                                    .iLLi. ..,ift1i;i1i:,,,,,tLii1f1;,.                             
                 ::                 ,tf;.....;GGtiiii:;,,,,,.;i,,:iti..                             
                 ...       .        :1i...,:iGC1ii;:Gfi,,,.,:;;,..,i1:,.              ..            
                           .        :i:,,;;iCfi1;;,,t0Gi..,;i;;.  .,;i:.                            
                              .    :ii:i111ftii;:,.,,,1ti;ii;i:.   ,:::.                            
                                 ,:iiiiiitttfi;:.....  .it1iiii:,. ,:::.           .                
                                ,;iiiii1tffti;:..      .:ii;ii;;::,;:,..                            
                 .             ,;i1tfLftt1;::::,       ,;;,.,;iii;11;:,.                            
              .               ,11itfLti:,.,,;:.:      .;;,   ,itt1;;:,.                             
                             ,;t1i1i;;:..::;;.   .    .i1.    .i1i::.                               
               .            ,;11i1i:::..;,;;.          ,:    ,..ii;.                                
               .           ,;i;;i,. .. :;:;,.           ..   ...i1:              ..                 
                          .:;;,:,      ,:;:.  ,.       .:.,.  .:i;                                  
            .,   ,         .;;,,,  ..  .::.   ,          ..,..:;;.                                 .
                 .  ..     .;i,.. .    .::              ...,,:i;.                                  ,
          .         .:     ,i;..       :;,            .,:,::;ii;.          ,                        
          ..              .;i:.       .;:           .,:;;ii;;;;:                                    
                          :ii,.       ,:,           .,::;;;;:,;:.                             .     
                         ,iii,..     .,,               ,:;;:..;;;.                            .     
                        .;11;,,.     ,;.               .ii,   ,;i:.         ..                      
               ..      .:tti::,     .;i.               .:.    .:ii,.         .                      
                       ,;i;;:,.     :1i      .         .       :i1:.                                
                       it11ii.     ,i1;.                       ,ii:.                                
                    .,;ft1;,;     ,;;1:.                       ;i,,      ..                        .
                   ..,:,         .i:1i,                       ,:.                                  .
                                 :;i1;.                                                             
                                .;11;,                                                              
                 .         .    1f1:.  .                               .                            
                 ,      .      .t1.             .                      .               ..           
                               ,,.       .                                             ..    .      
                              ..         .     ,         ..                                         
                 ,.                                                              ..                 
`,y[80]=`                               ,.               .                            ,                    ,.
         ,                 ..                                                .                      
                                                                                                .   
                                                   ..                                               
                                             .     ..                                               
                                             .  ,.                                                  
                                                                                                    
                                                                 ,                                  
                                                                                            .  .    
                                                               ..                                   
                                                                                                    
                                                                          .             .           
         .                                                                             :;      .    
                                                                                .                   
                                             .,::::;;::;,,,..                   .                   
                                .          .,;i111tt1i;i;::;;;:::,..                   ..           
                                           ,;;ii1t1iii1t1i;;;iii1ti;;:,.                          ..
                                           .;i1111iiiiii1ii11ii;;i1i;:;;;,                     ,    
                                     .     .;iiii;i;iii;;;:;iii;i;ti:::;:;;.                        
          ,                                .;;iii11iiiii;iiii;;iii1ii1tti;;;,                       
                      ..  .                .;;i1itLt1ii1ttt11iii;iiii1tCCiiii:.                     
          ..                              .,;;i11fftt1tfft11t1ii1i1i;i1ttt1i;i;:,              ..   
                                      .:;ii11tttfftttttttttfCffff1i111111it111;i11,.             .  
                       ,.           ,;1fLCGGCCCCCLffttt1tt1tfGLfLft11Lf111itf1111fi.             .  
                                   .;1t1fLC0GCLLGGCffttttfttfttLCfLLtfLf11it111ii1i.      .         
        .   ,                     .,;i1iii1f0GLfLCGGGCLLftttttfftttCLftt11tt111iit;..               
                                 .,:;iii;iiitfCGffCCLCGGGGCffftt111tLLffftfLft1;::...               
         .       .           ..,,:;;i;;:;iii;1fff0GL11tLCCCGGGCLffffttff111fft;,.                   
         .        .   ..    ..,:::::,,,,:;;;1Lti1tCf1i1LCCttfLCCGLffttf1iii1;,.                     
                  .   ..     ........:,,,:,;ff1;;iti1ffLC1;1t1itGGCLLfft1i,.                        
                                    ...,,.;1Lti::1itLftf;;fCt1tffCGGGGCLf,..  ,                     
 .                                   ....:iit1,:ii11iii;;;1t11ffLCCGGCLCL..  ..  .                  
                                       .:11i1,.;iiiii;;i::1LtLLfGGC0GGGf:.       .                  
                                    ...;t11i,.,iii1i:;i:,:;CCCLLGfii;i1,.                           
         .                           ,if1i;,..:111i:;i;;,,:;CGftCGf;i:.                             
                                    .iLf1,...,1t1iii;1;;,,,,,tL11fLi:.                              
                 ::                 ,ffi.....fG1i;ii;i;;,,,,.:1;,;i1,                        .      
                 ..        .        :ti...,;C01;i;:,:C1;,,..,;;:..:i;..               ..            
                           .       .;i:,,;1CC:;1;;:,,f0L,..:i;i:. .:;;,.                            
                              .   .:ii;i1tft:;i::,.,,,;t1:;1;ii,   ,,::.                            
                                .:;;;iiit1t11;;:...... .:1tiiii;,. ,:,:.           .                
                               .;;iii1tLLLLti:;...      :i1ii1;;;::;:,,.                            
                 .             :;i1LCGGCfti::::,       .;;:.,:;iiiii;;,.                            
              .              .:11tCGGL1;,.,,::,:       :;,   .:1tti;:,.                             
                            ..;ttfft1i;..::;;.   .    .i1.     ,1i::.                               
               .            ,:1111;,,;..;::;.          :;    ,. ;i;.                                
               .           ,;11ii,.  . :;,:,.           ..   ...;1;              ..                 
                           ,;1;:,      ,:::.. ,        .:.,.  .:;i.                                 
            .,   ,          :i:..  .   .::.   ,         ..,,..:;;.                                 .
                 .  .       :i,   .    .:,               ..,,:i;.                                  ,
          .         .:     .i;..       :;.            ..,,:::ii;.          ,                        
          ..               :i:..      .i:            ,,:;1iiii;:                                    
                          .;i:.      .:;.           .,,i;iii;:;:.                             .     
                         .:ii:.      ,i,              ..,;i:.,;;:.                            .     
                         ,i1i,..     ;i.               .:t;  .;ii,.         ..                      
               .        ,it1;:,     .1i.                ,,    :i1;.          .                      
                       .:ii;::.     i1;      .         .      .iti,.                                
                       ,iiii:.     :11:                        :1i:                                 
                    ..,tLt;1,     ,111:.                       ;;,,      ..                         
                   .,:i;,. .     .;;1i,.                      .:.                                  .
                     .           ,;it;.                                                             
                                 :i1i,                               .                              
                           .    :ft:.  .                               .                            
                 ,      .       it:             .                      .               ..           
                               .,,       .                                             ..    .      
                                .        .     ,         ..                                         
                 ,.                                                              ..                 
`,y[81]=`                               ,.               .                            ,                    ..
         .                 ..                                                .                      
                                                                                                .   
                                                   ..                                               
                                             .     ..                                               
                                             .  ,.                                                  
                                                                                                    
                                                                 ,                                  
                                                                                            .  .    
                                                               ..                                   
                                                                                                    
                                                                          .             .           
         .                                                                             ,;      .    
                                               .........                        .                   
                                           ,:;;iii;;;;::::,,..                  .                   
                                .         ,ii11ttt11ii;;i;;;;;;;::,..                  ..           
                                         .;;111ttiiii;it1ii;ii;i1t1;;;:,.                         ..
                                         .;i1t111;;;;;iii;i1111iii1i;:;;;,.                    ,.   
                                     .   .,i11iiii;;;ii::;;;iiiiii11;;;;:;;.                        
          ,                               .;;iiii1iii;i;;i1ii;;i;;1i;i1fi;;i:.                      
                      .                   ,;;iiitLt11iit1i111iii;i;;;i1fGti;1i,.                    
          .                             .,:;i11tffft11tLLt1tt1iiiiii;i11t11i;;;::,             ..   
                                     .:i1tttttffftfttttffttLLfftf1i111iii;;ii1i;ii1.             .  
                       ,.          .;1fCCGGGCCCCCLffttt1ttttfGLfLft11Lti11i;1ti1iifi.     .      .  
                                  .,i11tfLG0GCLLGGCffttttfttfttLCLfLtfLf11ii1;;iiii1,     .         
        .   ,                    ..:;ii;ii1C0CLfCCGGGCCLffttttfffttLCftt1ii11ii1i;i1,               
                                 .,:;iii;i;itfCGLfCCLLCGGGLffffft11tLLffLttft111iii:.               
         .       .            ...,;;;;;;;;i;;ifff0GCt1tLCLCGGGCLffffftfLft1tLLti;:.                 
         .        .   ..     ..,:::::,,::;;;1ffi1tCL11iLLGttLLCCGCLfftft1ii1ti:,.                   
                  .   ..     ........:,,:::;tf1;;;fiifffLt;i11i1CGCLLfftt1i:,.                      
                                    ...,,.:iLt1::111ff11i:1ft11fLLGGGGCLff:.. ,                     
 .                                   ..,.:iit1::i111iii;;;1ttitLLfCLGGCLCL.....  .                  
                                      ..:i1i1:.;1iiii;;i;:iCtfCLCGGG800Ct:.      .                  
                                    ...,1111:.,iii1i::i;::;CCLCLCt11ii1i,                           
         .                           ,;t1ii:..itt1i::ii;:,::CGfLGG1;;;:.                            
                                     :ff1;,..;t111i1i1i;;,,,,tL1tCL;:.                              
                 :,                 ,tfi:...iCt;;i1i;;i;:,,,.:1;:;1i                                
                 ..        .        :ti,.,:f0L:i1;::.iCi,...,;i:.,:i:                 ..            
                           .       .i1;:;iLG1:11;::,.,LG;..,iii;..,,:,.                             
                              .   .;i111tft1ii;::,....,1t;;1i;i:. .,,:,.                            
                                ,:;ii11t1111i:;:.       ,1t1iiii:, ,,::.           .                
                               ,;i111ttttttti:;,        :i1i;1i;;::;::,.                            
                 .            .:;1tLGGfftt1;::;:       .;i;,.,:ii1ii;;:.                            
              .              .;1tLG0GLti;,,,::,:       :;:.   .;t1i;;,.                             
                           .,:1LC0GLt1i,.:::;.   .    .i1,     .;i::.                               
               .        ...,:ifLGLti:;,.::,:,          :;    ,. :1;,                                
               .       ...,:ittt1:...,.,;:::.           .    ...;1;.             ..                 
                      ...,:;iti;,....  ,:::,. ,        .:,,    :;i,                                 
            ..  .,   ....,::ii;,.. .   .::.   ,         .,,,..:;;,                                  
                 . .,...,,,,;i:.. .    .:,              ...,::i;,                                  ,
                   .,:.....,i;..,      :i.             .,,:::ii;,          ,                        
          ..     ..........,i;.,.     ,1:            .::;1iiii;;           .                        
                 ......... :i;..     .i;.           .,,;11iii:;:                              .     
               ........   ,ii;..     :i,               ,,;ti,:;;,                             .     
                ...      .;11;..    .ii.                .11. ;ii:.          ..                      
               ..       .:1ti:,.    :1;.                .:   ,i11:.          .                      
                        ,;ii::,    .i1:      .         .      ;Lf;,                                 
                       .ii;;:.     ;11:                        i1;,                                 
                      ,tfi;1.     ,111:.                       :;,.      ..                         
                   .,:ti:.,.     .;1ti:.                       ,.                                  .
                   ..;,          .;iti,                                                             
                     .           ,;1i,                               .                              
                           .    .tfi.  .                               .                            
                 ,      .       :t;.            .                      .               ..           
                                ,,       .                                             ..    .      
                                         .     ,         ..                                         
                 ,.                                      .                       ..                 
`,y[82]=`                               ,.                                            ,                    ..
         .                 .                                                 .                      
                                                                                                .   
                                                   ..                                               
                                             .     ..                                               
                                             .  ,.                                                  
                                                                                                    
                                                                 ,                                  
                                                                                            .  .    
                                                               ..                                   
                                                                                                    
                                                                          .             .           
         .                                                                             ,;      .    
                                           ..,,,,,,,,,...                       .                   
                                         ,;iiiiiii;;;;:::::,,.                  .                   
                                .       .;i1t1t11iii1i;;i;;;;;;;;:,..                  ..           
                                .       :;;1ttt1i;;;;;i1iiiiii;ii11i;;;,.                         ..
                                        ,;;11111i;;;;;ii;;itt111ii11i;;i;:.                    ,.   
 .                                   .  .:i11ii;iii;;;;::;;iiiiii;i1i1;;;;i,                        
          ,                             .,i1iiiiiiii;;;;;;iii:;;;;ii:iif1;;;:.                      
                      .                 .;iiiiitftt1i1111;iiiii;:;;;;i1tCLi;ii:.                    
          .                           .,:;ii11tffftt1tffftttt1iiiii1i;iit111i;;;;:.            ..   
                                    ,;1fffffffLffftttttffttLLLftt111i,;ii;:;i11;;iii.            .  
                       ,.         .:1tCCGGGGCCCGCLffttttttttfGLfCLt11t1;iii;itiiiiiti.    .      .  
                                 .,;ii1tfL0GCLfLGGCffftttfttfttLCLfLfLCf111;1ii;i;iit,    .         
        .   ,                    .,;;i;iiifGGCLfLCGGGGCCLfttttfffftLCLff11;;1iii;:;;1:              
                                ..,:;;;;ii;1tfCGffCCLLCCGGLLfffftt11fLftf11ftii1i;i;;.              
         .       .             ..,::;;;:;;i;;1LffGGCt11LCLCGGGCLffffffffLffttftt1i:,.               
         .        .   ..       .,:::,,,::i:;iLf11tLL11;fLCf1CLCCGCLLftffttii1fti:,.                 
                  .   ..      ...,,..:,,;::i1f1i:;fi;tttff;iii1iLGGLLfftt1ii;:.                     
                                   ....,:,:iff1;:11itt1ii:;t1ti1LLCGGCCCLff:...                     
 .                                   ..,,,;i11;,;1iiii;;:;itfi1fCffCLGGCLCL,...  .                  
                                      ..,i1i1;.:1i;ii;:;;;iCf1CCCG0GG80GCt:.     .                  
                                     . .it11;.,iii1i:,;;::;LCLCCf1ttt11ti.                          
         .                           ,,11ii;,,i111i:,;i:;,::CGLL0L;;;;;,.                           
                                     ,tf1i:..i11iii1i1i;;,,,,tCffGt;;,.                             
                 :,                 .1f1;..:tfi::i1i;:;i;,,,.:ti:1f:.                               
                 ..        .        ,ti,.,t0C;,;i;:,,.tL;....:i:,,;i.                 ..            
                           .       .;1;:;fGt::ii;::,,.:Gt..,;ii;,..,:,.                             
                              .  ..:111tt1;;i;:::,. ...:1i:i1;ii, .,,:,.                            
                               .:;;ii1t1iii1;,::.       .;1tiiii;,.,,::..          .                
                               :;iii1iii111i:::,        ,i11;;1;;;:;::,.                            
                 .            ,;;i1tt11ii1i:::::       .;ii:,,:;i1ii;::.                            
              .              .;11tLGft1i;,,,,:::       ,;;.   .,i1i:;,.                             
              .            .,:1fLGGLt1i,.,:::,   .     ;i,     .,i::.                               
                          .,:ifCGCf1;::.::,,,          :i    ,. ,i;,                                
               .         .::;tLLt;:....,;:::,          ..    .. :1i.             ..                 
                        .,;i;t1;,....  ,:::,. ,        .:..    ,;;,                                 
            ..  .,     ..,;i;i;,.  ..  .::.   ,        .,,:, .:;:,                                  
                 .  . ..,,,;i;:,. .    .::              ..,:::;;,                                  ,
                    .:..,,.;i;,., .    :i.             .,,,:;i;;:          ,                        
          .      .   ......,;;.,,     ,1:             ,:;iiiiii;.          .                        
                     ..    .i;..,    .i;            ..:;1t111i;:                              .     
                          .;i;..     ;i.              .,::t1:;;;.                             .     
                          :1ii,.    ,1;.                 ,t,.iii,           ..                      
               .         ,i11;..    ;1:.                 ,, .;tt;,           .                      
                        ,;;1;:,.   ,1i,      .         .     .tC1,.                                 
                       :i;;;:,    .i1i,                       ,ti;.                                 
                      ;ttii;.     ,11i:.                       ::,.      ..                         
                   .,if1;,:.     .;tti,.                       ..                                  .
                   ,,i,          .;1ti,                                                             
                    .,           .i1i,                               .                              
                           .     if1,  .                                                            
                 ,      .       .1i.            .                      .               ..           
                                .,.                                                    ..    .      
                                        ..     ,         ..                                         
                 ,.                                      .                       ..                 
`,y[83]=`                               ,.                                            ,                    ..
         .                 .                                                                        
                                                                                                .   
                                                   ..                                               
                                             .     ..                                               
                                             .  ..                                                  
                                                                                                    
 .                                                               ,                                  
                                                                                            .  .    
                                                               ..                                   
                                                                                                    
                                                                          .             .           
         .                                  ..                                         ,;      ..   
                                        ,:;;;;;:::::::,,..                      .                   
                                      .:;i1iiiiiii;ii;;;:;::,..                 .                   
                                .    .::;i1tf11ii;;11i;;iiiiii;;;::,,.                 ..           
                                .    ,:,:ittt1;iii;;;;;;iiii1i;;ii11iii;,.                        ..
                                     .;::i11t1iiiiiiiii;;i1tt1iiii1f1;;i1i,                    ,.   
 .                                   .:;;1111iiiiii;;;i;;iiiiiiiii1ft;;;;;i;.                       
         .,                          .,;;i1iiiiiiii;;;ii;ii;;;;;;iii;:i1ti;;;,.                     
                      .              .,;;iii1ttttt11iiii1iiiiii;;it1;;i1LCt;;ii:,.                  
          .                        .,;i1111ttfLfftttft1tftttt1iii1111;;iit11i;;ii;;:.          ..   
                                 .,itfLCCCLLLLffffffftttfttLLfft111i1iiiii;;;;tiiii11,           .  
                       ,.       .,;1fLLCGGCCCCGGCLffftftttttfCffLf1111ti;;ii;i1i11ii11,   .      .  
                                .:;i111tC0GCLffLGGCLLfffttftfftfLCfft1f1iiii;1;;;i;iii1,  .         
            ,                  ..:;;i;;iitG0CCLLCCGGGGGCLLtttttfLfffCLftt1i:;:;::;:;;:i;            
                               ..:::;;;;i;i1tLGGffCLffLCGGCLfffffttttCCLft1iiii;;::;;;;:            
         .       .             .,,:::::;;i;;itfftGGGt1iLCtfGGGGCffftfffffffft111i;i;;:,             
         .        .   ..       .,,,,,,,:;;:i1ff11fLCi1;iC1LfGCLGGGCfLffLftfft1tt11i;,.              
                  .   ..        .....:,:;::i1tti:;1i:iiif1i1titftCGGLLffttt1iii1i:,.                
                                  .....,:::;iLL;:i1;iit1i;:;iLL1fCLCGGGCCCCt1;,.                    
 .                                    .,,::i1t1,;1i1iii;::;1fLi1GLLtLCLCCCLLL,.  .                  
 .                                     ..:i1ii:,ii;;ii::::1LC1tCCGGGGG080CCt:.   .                  
                                       .,1t1i:,;i;ii;,:;::;L0tCC1itLCCLtfL;.                        
         .                           ,,:11ii:,i1111;,,i;::,;CCLCC1;ii;;;;,.                         
                                     .:11i;,:i111;;;1iii;:,,:fCLGL;iii;,.                           
                 :,                  ,tfi::1t1i:,;;i;:.1t:.,,:tiiL1:,..                             
                 ..                  ifi;tCfi;.:i;::,,.1C;.,.:1;,;i,                  ..            
                           .       .:111LL1;:,;i;:::,..:L1,,:ii;,.,:,.                              
                             ..  .,i1ft1i;;;;;;:,,.  ...:11;11ii:..,::,                             
                               .:;i1tti;ii;ii:,:.       .,i11iii;:,,,:,.           .                
                              .;iiiii;;iiii;:,:,        .;11i;;;;;:;::,.                            
                 .            :;;;111i;;;;;;::,,        :i1;:.,:iii;;::.                            
              .              .ii;11iii;;;:,,,,::       .;i:   ..:i;::,.                             
                           .,:t1t1iiiii:,,::,,.  .     ,i:      ,;::.                               
                         .,::1tttt11i;:.,;,,,.         ,i.   ,. ,i;:                                
               .        .:,,;tt1Lft;,  ,::::,.         .,    .. :ii,             ..                 
                        ,;;:iftLLi,.   ,:::,. .        .:.     ,;;,                                 
            ..  .,      .:;:it1f1. .   .,:,   ,        .,::. .:;;,                                  
                 .  .   .:;,it1i,..     :;             .,,::,:i;:.                                 ,
                    .: ..,;,1tt:, .    :1,              ,.,:iii;:.         ,                        
          .          .  . .:ii;:,     ,i:             .::i;;i1i;,      .   .                        
                          .;i;:,,    ,i:            . ,;itfttii:                              .     
                          :;;;,.,.  .;;.              .::11f1ii:.                             .     
                         ,;;ii:     :1:.                 .:i;11:.           ..                      
               .        ,i:11i,    .11:.                  , :tf;,            ,                      
                       :i::;i:,.   ;1i,      .         .     ;Li:.                                  
                      ;1:,::::.   ,i1i.                       ;1;:                                  
                    .;i;:i;:,.    :11i:.                       ,:..      ..                         
                   ,1i::11:.     .;tii,.                                                           .
                   i1: ,,        .:1;;,                                                             
                   ,i.            ;i;,                               .                              
                    ,      .     ,f1,  .                                                            
                 ,      .        ;i.            .                      .               ..           
                                 ,                                                     ..    .      
                                        ..    .,         ..                                         
                 ,.                                      .                       ..                 
`,y[84]=`                               ..                                            ,                    .,
        ..                 .                                                                        
                                                                                                .   
                                                   ..                                               
                                             .     .                                                
                                             .  ..                                                  
                                                                                                    
 .                                                               ,                                  
                                                                                            .  .    
                                                               ..                                   
                                                                                                    
                                                                          .             .           
                                        .........  ..                                  ,;      ..   
                                      .:iii;;;;;::;;;;::,.                      .                   
                                     .;iiiiii1iiiii11ii;;;;::,..                .                   
                                .   .::;i1ittiiiii111i;;11iiii;;;;:,,..                ..           
                                .   ,::;i1iii;;iii;;;;;;ii;iii;;11111ii;:.                        ..
                                    ,;;;ii1i1i;;;11ii;i;;ii11iiiiiit1;:;1i,.                   ,.   
 .                                  .;111ii111iiiii;;i;;;iiiiiiiii1ff;;;;;i;,                       
         ..                         .,1ii1iiiii;iii;;iiii;;;;;;;;iiii:;iti;i;:.                     
                      .             .:iii111ttttt11iii111iiii11i;i1t;;;1fGt;;ii;:,                  
          .                       .:i1tftttfLfffttfttt1tffftt1iii11i1i;iitt11;;iiii:,.         ..   
                                .,;tLLCCCCLLLLLLfffffttffffLLftt1i111iiiii;;;;11iiiiti,          .  
                       ,.      .,;1fLfCGGCLCCCGGCLffftftttttfCffff111tiii;i1;i1111iii11.         .  
                               .,;ii1i1L00GCfffCGGCCLfffttftfftfLCfft1fti;;i;i;;;i;;ii1i. .         
           .,                 ..:;;;i;;i1L00CCLLCCGGGGGCLLtffttfLffLCLft1ii::::;;;;i;;;i:           
                              ..,:;;;;;i;ii1fLGGffCLtffC0GCLLffffttttLCLftt1;:;;;;;;;;:;:           
         .       .            ..,::::::;ii:ii1fLtGGCt1ifGf1GGGGCLfffffffLffft1ii;;;;;;;:.           
         .        .   ..       .,,,,,,,:;::;11f11fCLii;iL1tLCCLCGGCLffffLftffft1i1i;;:,             
                  .   ..        .....:,:;::;i1f1;:1i;;;:1t11ti1ftfGGCLLffttt11i1t1;,.               
                                    ...,:::;ifC1:i1:;;111;:;ifftiCCCGGGCCCCLt1;,,.                  
 .                                    .,,:,;1tt:;ii11ii;;:;1fL1iLGLLtLCLGCCLLL,. ..                 
 .                                     ..,:1ii:,iii;;i;:;:tfCf1fCGGCCCC08GGCt;.. .                  
                                    .   .;t1i;,:i;;ii:,;::;f0tLC1itLCCGLfLL;.                       
         .                           ,..;tii;,;1i11;,,;;::,;LCfCL;i;ii;;i;,.                        
                                      .;ti;;:;111;;;iiiii:,,,fCC0t;1iiii:.                          
                 :,                   ;fi;i111i;::;ii:,;Li.,.;fitL;;:,,.                            
                 ..                 .:fttffti;,,;i;:,,.:C1...:1:,ii,                  ..            
                           .       .,ifLLi:::,:i;:::,...1t:,,i1;,.::.                               
                             ..  .:itLf1::;:;;;:,,.    ..itii1ii;,.::,.                             
                               .:i1fCt;:ii;ii;,:.       .,;111iii;,,::,.           .                
                              .ii1i1i;;iiiii;,:,.       .:1t1i;;;;:;::,                             
                 .           .iiiiiiiii;;;;;::,,        ,i1i;,.:;i;;;:,.                            
              .              ,i;;ii;:;;;;;,,:,:,       .;i;.   .:;;::,.                             
                           .,iti1i:;;;i;,,::,,. ..     ,i;      ,:::.                               
                         ,:::t11i;iiii:..::,,.   .     ,i.   .. ,i;:                                
               .        ::::if1i1f11;. .:::::.         .,    ,. :;;,             ..                 
                       .;:,,1f1;GL1:.  ,:::,. .        .:      ,;;,                                 
            ..  .,     .:;,.1f1fGi..   .,:,   ,        .,:,. .:;;:                                  
                 .  .   :i:,i1:fi .     ,i.            ,,:;:,;i;:.                                 ,
                    .,  .1:,i;1;. .    ,i:             .,,:;iii;:.         ,                        
          .          .   ,.;;11;,     ,i;             .,:;;;i1ii:      .   .                        
                          ,i:;:;:    .;:            . .:i1ftfti;.                             .     
                         .i;;;:,,.  .;;.               .:1tffii:                              .     
                        .;i;;;,  .  :i:                 ,,.itt1.            ..                      
               .       .i;,iii:    .1i,                    .1Ct.             ,                      
                      ,i;,:i1;,.. .;1i.      .         .    .if,                                    
                     :1;,,::::,.  ,11i.                      .;;,.                                  
                   .;i;:,;;:,.    :11i,.                       ....      ..                         
                  .;;:,.;1:.     .;tii,                                                            .
                  :i;..:;.       .:1;:,                                                             
                  .1:             ;i;,                               .                              
                   ::      .     .11,  .                                                            
                 , ..   .        :i.            .                      .                .           
                                 .                                                     ..    .      
                                        ..    .,         ..                                         
                 ,                                       ..                       .                 
`,y[85]=`                               ,.                                            ,                    .,
        ..                 .                                                                        
                                                                                                .   
 .                                                 ..                                               
                                             .     .                              .                 
                                             .  ..                                                  
                                                                                                    
 .                                                               ,                                  
                                                                                            .  .    
                                                               ..                                   
                                                                                                    
                                                                          .             .           
                                       .,,,,,,........                                 ,;      ..   
                                     .;iiiiiiii;;;iii;;:,.                      .                   
                                    .;i;;iiiiii11i11111i;i;::,..                .                   
                                .  .;;iiiii1iiii11i11ii1t1iiii;;;;::,..                ..           
                                .  ,;;;i1i;i;;;;ii;;;;;;ii;;ii;i11i1iii;:.                        ..
                                   ,;i;ii1iii;;;;11;;;i;;iiiiiiiii1t1;;;ii:.                   ,.   
 .                                 .;111iii11iiii1iii;;;;iii;iiiii1tLi;;;;ii,                       
         ..                        .:1iiii1i1iiiiiii1ii;;;;;;;;;;ii;i:;it1i;i;,.                    
                      .  .         .;ii111ttttttt111ii11iiiii11;;i11;;;1fCf;;i1i;,.                 
          .                      .:itfLfffLLfffLfftt1111tftttiiii11iii;;itf11i;i1ii;:.         ..   
                               .,itLCCCCCCCCCCLfffffttttffffft1t1;111ii;;ii;;;itiiii1t:.         .  
                       ,.      .:itLfLGGCLLLLCGGCLffftffttttfCffff1i1tiii;;1i;11iii;ii1:  .      .  
                              .,;iii11fC0GCLfffCGGCCCLffttffffffLCLf11ffi;;;;;i:;;i:;ii1: .         
           .,                ..,;;;;i;iitG0GCCLLCCGCCGGCCLfffftfLLfLCLtt1ii:::::;;;i;:;ii,          
                             ..,:;;;;;;;;ii1fCGGLfLLfttC0GCLLffffttttLLftt1i;::;;;;ii:;;;:          
         .       .           ..,::::::;;i;:ii1LCtCGL1t;fGLiLGGGCLffffffffffttti;;;;;i;;;;.          
        ..        .   ..      ..,,,,,,::i:;;1;tt1fCfii;;fiiLCCLCGGGCffffLffffLf1iiii;i;,.           
                  .   ,.        .....:,::::;;if1i:1i;;;:;11ttiifftCGGLLfffttt1t1tti;:,.             
                                    ...,:::;;tLf:i1:::i11i;;ittfitCCCGGCCCCCf11i;:,.                
 .                                    ..,:,;itf;:;;;iiii;;;ifLti1CCLLfLCCGCCLff:..                  
 .           .                         ...,iii;,;iii;i;;;:tfCL1tC0GGCCCC08CGLf1..,.                 
             .                      .    ,1ti;,:1i;;i;,;::it0ffLt1tLGGGGCLCLi,.                     
         .                           , .,11ii::i1i11;,:;::,:LLfLt:;iiii;;i;,.                       
                                       ,1i;;;:i11i;:;;iit;,,:LCG0;;iiiiii:.                         
                 :.                   ,11;i111ii::;ii;:,L1.,.ifiLf:;;::,.                           
                 ..                 ..1t1ff1i;,.;i;:,,,.tf,..;1:,1;,..                ..            
                           .       .,;ft1;:::,,ii:::,,..;f;,,i1;.,;:.                               
                             ..  .:itLLi,:;:;:;;,,.    ..;1ii111:,,;:,                              
                               .;itLCf::ii;ii;:,.       ..:111i11;,,::.            .                
                              ,ii111;;;iii1i;::,.       .:1t1iii;;;;::,                             
                 .           ,11i1;:;iiiii;;::,,        ,iti;,,:ii;;::,.                            
                             :1iii:::;;;;;:::,,,       .;1i,   .:;:::,.                             
                           .,1tii;,,;;ii:,::,,. ..     ,ii.     .:::.                               
                        .,::if11;,:iiii,.::,,,   .     ,1,   .. ,;;,                                
               .       .;;::if1i,1t11:..:::::.         .:    ,..:;:,             ..                 
                       :;:,:1L1,tLt1:  .,::,. .        .:      ,;:,                                 
            ..  ..     ,::..1f1;GL:.   .,::   ,        .,:. ..;ii:                            .     
                ..  .  ,i;,,1i;fL,.     ,i,            ,:;i:,i1i:.                                 ,
                    ., .1;.;i,:1, .    ,ii             ,,,:iii1;:.         .                        
          .          .  ..,i:;ti,     .;;.            .,:;;;1tii:      .   .                        
                         .;;,Li;:    .:;.           .  ,;1ttffi;.                                   
                         :i,:;:;:.  .:i.               .,ifff11,                              .     
                        :i;,;;:,..  ,i;                  .::fti                                     
               .      .;;:,;ii:    .ii:                    .1C;              ,                      
                     ,i;, ,11i,.  .i1i.      .         .    .i1.                                    
                    :i;,..:;;:,.. ,11i.                      .:,.                                   
                   ,;;:,.,i;:,.   ;t1i,.                       .. .      .                          
                  :::,. ,1:,.    .;t;;,                                                             
                 .i;,  .;,       .:1;:.                                                             
                  11   .          :1;.                               .                              
                  :i       .      i1,  .                                                            
                 ,.,.   .        ,;.            .                      .                .           
                  .,.            .                                                     ..    .      
                                        ..    .,         ..                                         
                 ,                                       ..                       .                 
`,y[86]=`                               ,                                             ,                    .,
        ..                 .                                                                        
                                                                                                .   
                                                   ..                                               
                                             .     .                              .                 
                                             .  ..                                                  
                                             .                                                      
 .                                                               ,                                  
                                                                                            .       
                                                               ..                                   
                                                                                                    
                                                                          .             .           
                                      .,:::,,,,........                                .;      ..   
                                    .;iiiiiiii1iii1iii;:,..                     .                   
                                   .;i;;;iii1i111111111i;ii;:,...               .                   
                                ,  ;iiiiiii1ii11iii1111t1t111ii;;;;:,..                ..           
                                . .ii;i1ii;;;;;;i;;;;;;;1iiiiiii1i1tii;;:.                        ..
                                  .;iii11iiii;:;;11;;ii;iiiiiii1iii11;;;ii:.                   ,.   
 .                                .:1t1111it1iiii11;;;;;;;ii;iiii1tfLi;;;iii:.                      
         ..                       .,11i111111iiiiii1iiii;;;;;;;;;i;;i;;i11ii1i,.                    
                      .           .;1111ttttttft1111111iiiii111;;i1i;;;ifCLiii11;:,                 
          .                    .,;1fLCLfLLLLfLLfftttt11ttftt1iiii11iii;;itL11iii11ii:,.        ..   
                              .,itLCLCCCCCCCCCLffffftttttfffft111ii1iii;;ii;;;i1i;ii1ti.         .  
                       ,      .:;1LffCGCLfLLLCGGCCfffttftttffGLffL1i1t11i;;iii11;iiiii1i. .      .. 
                             .,:;ii11tLG0GCffffCGGGCCLftttfftffLLCLf11ffti:;i;1;:;i;;ii1i..         
           .,                .,:;;;iiii1LG0GCCfLCCCCCGGCCLftfftfLLfLCLtt1i;;:::;::;;;;;i1;          
                            ..,:;;;;;;i;iiitfG0GLfLLtttCGGCCLffffttttfLft11i;;;::;;ii::;ii,         
         .       .           .,,:;::::;;i:;;i1LGtLGf11;t0GifGGGCCfffffffffff1t1;ii;1i:;;;;.         
        ..        .   ..      ..,,,,,,:;;:;;i:1f1fLt;;;:t1:tCGCCGGGCLLffLfffffftiiiiii;;:.          
                  .   ,.       ......:,::::;::t1i:1;::;::i1tf1itffLGGCLfLffttt111t1ii;:.            
                                    ...,,:::,1LL;;i;:,:;11i;;11tiifCCGGGCCCCLf1i1i;,.               
 .                                    ..,,,,;tL1:;;:;i11i;;;fftiitGCCLfCCCCCCLff:,.                 
 .           .                         ...,;i11:;iiii;;;i:1fLC11fG0GCLCCC00CGLLf.,.                 
             .                      .    .iti;::11i;;i;;;:itGLtLf1tLC000GCCGL1:..                   
         .                           ,  .it1i;,;1ii1i:,::;,:fLtft:;;ii1i;iii,.                      
                                       .it;;;:;111i;::;;1i,,;LC0C::;iiiiii:.                        
                 :.                   .;1;i1ii1i:,;;i;:.1f,.,1fiCi:;;;;;:.                    .     
                 ..                 ..;t1tft1i,.,i;;:,,.1L:..i1,;1;,...                .            
                           .       .,:111i:::,,;1;:::,..,ti::11:.:;:.                               
                             ..  .:i1f1i::;:;:;i,,,..  ..:111111:,:::.                              
                               .:1fLCf;:;i;ii;;,.       ..:1t1i11;:,:,.            .                
                              .i1ttti;;iii11;;:,.       .:1t11ii;;i;,:.                             
                            .,i111i:;iiiiii;;:,,        ,1t1;,,i1i;;:;,                             
                             ;111i::::;;;;;;:,,,        ;ti,  .,:;:::,.                             
                           .,tf1i;:,:;;i;:::,,....     .11.     .:::.                               
                        .,::1Lf1i,.:iii;,,:,,,   .     ,1:   .. ,;;,                                
               .       ,;;::tft1,:111;,.,::::.         ,:    ,..:;:.             ..                 
                      .;;:,:tf1,,ffti. .,:::...        .:      :;:.                                 
            ..  ..    .:;..,tf;.fG1:....,::.  ,        ..,.  .:ii:                            .     
                ..  . .ii. :tiiiG1..... ,;:            ,:;;,.;ii;.                                 ,
                    ., i; .i;,;t;.,..  .;1,            :,:;iii1i:.         .                        
          .     .    . .. ;;.,i1,,.   .:i,            .,:;;;1t1i;      .   .                        
                         :i,,LL1:.   .:;,           .  ,;1ttffii,                                   
                        ,i:,tG;i;.   :i:                ,:tff11:                              .     
                       ,ii,:i;:::,  ,;;.                  ,;ff;.                                    
               .     .:ii,.:ii;,.  .;i:                    .tC:.             ,                      
                    ,ii:,.,11i:.   ;1i,      .         .    .i;                                     
                   ,i;:,. :11;,,. ,11i.                      .,.                                    
                  .:;:,. ,ii;,..  ;tii,.                          .       .                         
                 ,:::.  ,i;,.    .;t;;,                                                             
                 ;i:   .;,        :1;:.                                                             
                 ;1.    .         :1i.                               .                              
                 ,i        .      ;1,  .                                                            
                 ,:,    .         :.            .                      .                .           
                 .,.                                                                   ..    .      
                                        ..    .,         ..                                         
                 ,                                       ..                       .                 
`,y[87]=`                               ,                                             ,                    .,
        ..                 .                                                                        
                                                                                                .   
                                                   ..                                               
                                             .     .                              .                 
                                             .  ..                                                  
                                             .                                                      
 .                                                               ,                                  
                                                                                            ..      
                                                                .                                   
                                                                                                    
                                                                          .             .           
                                     .,;;:::,,,........                                .;      ..   
                                    ,iii1111111111t1ii;:,..                     .                   
                                   :ii;;;ii11111111111i;;ii;:,,..               .                   
                                , :iii;iiii1i1ii;ii1t1tt1t111iii;;;:,..                ..           
                                ..;iii1iiiii;;;;i;ii;;;i11iiiiii111tii;;:,                        ..
                                 .;111t11ii1i;;;;ti;i1;;iii1ii11iii1ti;iii:.                   ..   
 .                                ,11t1t1111iiii11i;:i;;;iiiiiiii1fLLi;;;iii:.                      
         ..                       ,i111111111iiiii11iiii;;;;;;;;;;;;i;;i1ii111:.                    
                      .  .      .,itt11ttffttttt1111t1iiii1ii11;;1ii;;;ifCL11tt1;:,                 
          .                   .:i1fCCLLCLLLLCLftttttt111tftt1iii111iii;;1tLt111f1iii;,.        ..   
                             .,;tLCLCCCCCCCCGCLLfffftttttfffft111;i1iii;;iii;;i11iii111,         .  
                       ,     .,;1tLfLGGLfLfLLCGGCCLffftftttfLGLfff1i1t1i;:;i1i11iiiiiit1. .      .. 
                            ..:;iiiitfG00GCffffCGGGGCLfttttffffLLCLft1fft1;;i;1i;;ii;ii11,.         
           .,               ..:;;;;iiiitC00GCLfLLCCLCCGCCCftfftfLLLLCLttt1;;::::::;;;;;i1i.         
                            ..,;;;;;;i;;ii1tLGGGLfLftt1LGGGCLLfffttttfLft11i;;:,:;;i::::;1;.        
         .       .          ..,:::::::;ii:i;itC0tLCti1;1G0i1CGGGCLtfffffffftt11iii;1i:::;i:.        
        ..        .   ..     ...,,,,,,:;::;ii:;f1ff;;;i:11,iLGCCGGGCLLffLLffffftt1i1i:;i;:.         
                      ,.       ......:,:::;;,,t1i;i;:;;::;itLti1ffLCGGCLLfffttt1t11iii;:.           
                                     .,,:,:,.iffi;:;:i::i1ii;;i11i1fCCCGCCLCCLt1111;:,.             
 .                                    ..,.,.:tLt::;::;iii;;;ttt1i1fCCCffCCCCCCLt1;,.                
 .           .                         ....:i11;;i;iiii;i;;tLCf1tL0GCLLLCC00LCfLL,.                 
             .                           .:11;;:1iii;;i;;:;1LCtfftfLCG0000GGGCt1;..                 
         .                           ,   :t1i;,:1i;i1i:::;,:tf1t1;;;i1t11iii1:..                    
                                        :ti;;::i111i;::;i1,.;CL0f,::;;;ii1i:..                      
                 :.                    ,1;:;;i1ii:;;i;;,;C:.,fttG;:;;;ii;:.                   .     
                 ..                   ,1i1ttti:..;i;;:,.:f;.,1i,i1;,,,...              .            
                           .        ..;ii1i;;:,:i;:::,..,t1;it1,,:;:.                               
                             ..   .::;;;::::;;:i:,,..  ..:1111t1:,:;:.                              
                               .,;tt1i;,:i;ii:;:.       ..:1Lf1t1;:::,.            .                
                               :i11i;::;iii1;;;,.       .:1t1t1i;;i:::.                             
                             ,;1iii::;iiiii;;;,,.       .1f1;:i11ii;:;.                             
                             ;111i;:::;;;;;;;,,,       .;fi,  .:;::::,.                             
                           .:ffti;;:,:;;;;;:,,....     .11.     ,:::.                               
                        .,::tCti1i,,;iii:,:::,   .     ,1:   .  .;:.                                
              ..      .:;;:;Lf11;.:iii;,.:;::.         ,;    ,..:;:.             ..                 
                      ,;;,,:ft1:.iCft:..,:::...        ,:      ,;;.                                 
            ..  ..    ,:: .,ff;.:Gfi,....,:.  ,        ..,   .;ii:                            .     
                ..  . :1,  ;t1::Lf:......:;            ,:;;,.i1i;.                                 .
                    ,,:i. :1:,itt,,,....,i:           .::;ii;11i,.         .                        
          .     .    ... ,i,..;i,,,....,;;            .,,;;;1t1;;.     .   .                        
                        .i:,.it1:,..  ,;:              ,;i1tftii,             .                     
                       .;;,,;8f1i..  ,;;.               .:1ft1t:                              .     
                      ,;i:,;LL:;1,  .;i,                  .;Lt:.                                    
               .    .:;i:,:;i;:,,. .:i;.                   ,tL:..            :                      
                   .;i;:,,,i11;,.  :i1:      .         .   .,i:.                                    
                  .;;::,,.:f1i:,. ,111,                      ..                                     
                 .:;:,.. .1ti:,.. :tii,.                          .       .                         
                .:::.   ,i;:.    .:t;:,                                                             
                :;:    .;:        ,1;:.                                                             
                :1,     .         ,ti.                               .                              
                ,;.        .      :1,  .                                                            
                .:,     .         ,,            .                      .                .           
                .,.                                                                    ..    .      
                                        ..    .,         ..                                         
                 .                             .         ..                                         
`,y[88]=`                               .                                             ,                    .,
        ..                 .                                                                        
                                                                                                    
                                                   ..                                               
                                             .     .                              .                 
                                             .  .                                                   
                                             .                                                      
 .                                                               ,                                  
                                                                                            ..      
                                                                .                                   
                                                                                                    
                                                                          .             .           
                                    .,:;;::::,,,.......                                .;      ..   
                                   .;i1111111111i1t1ii;::,.                     .                   
                                  ,iiiiii111111tiiii1i;;iii;:,,,.               .                   
                                ,,iiiiii11111iiiiii1iii;;i1111t1;;;:,,.                ..           
                                ,;i111111111iii;;;;ii;;;1ii1i111i1ttiii;:,                        ..
                                .;1tffttt1t1ii1iii;;i1;i1iiii11111i11iii1i;,                   ..   
 .                              .:1tttttttt1iii11i;;i1iiiiii1iiii1fLLi;;1111;.                      
         ..                     ,:iii111t1111iii11ii;i11iiiii;;;;iii1i;i1111ii:.                    
                      .  .   .,;itfftttffffttt11tttt1;ii11iiii1i111i;;i1fLfti;it1;,.                
          .                 .:1tffLCCCCCCCCLLftttttt1111fft11iii1111iiiitLCtt1it1iii;:.        ..   
                           .,;1fCLLLLCLCCLCGGCLLfffttttttffLt1iii;i1i11iii11i11t1;;ii1i:.        .. 
                       ,   .,:iitffLGGLffffLLCGGCCLLLftfftfLCGCft1ii1tti::;i111t1i1ii1i1, .      .. 
                           .,:;;;ii1LC00GCLffffLCGGGGCfftttffCLLLCLt1itf11ii1ii1;;i1ii11t:.         
           ..              ..,:;;;;1iitLG00GCfLLLLLLLCCGCCLfffttfLLLLLffftti;;::,i1i;iii11,         
                           ..,:;;;;;;;i;;itfG0GCCLt1it1tCGGCCLfffftttfLLft1ii;;:::;;;;::;i1,        
        ..       .         ..,,:::::::i;;;;i1f00ft1;tf1;iCtiLGGGCLftftfLffft1111i:ii;;:::;i:        
        ..            ..    ...,,,,,,:;:::;i::;f1ii;L01;:i::tCCCGGGCCLLffLfffffttttti;:;:;;,        
                      ,.       .....,:,::::,,,it1;;iff1;::;1LL1itLLCGGGCLLffffft1tft11ii;:.         
                                    ..,,,:,..:tfi::i1.:::i1i1;;it1i1tLLCGCCCCCLt111tti:,            
 .                                   ....,..,1LL;::;,:;;ii;:;i1t1i1fLLLLfLCCCGCCLti:.        .      
 .           .                          ....;1ti;;;.,i1iii;itLLt11CCGCCfLLCGGCCLtLt..               
             .                            .i1;;iii,:ii;i;::ttfftttfCG0G0088880GGtCt..               
         .                           ,   .iti;:;;;;i;;1;:;,,1ti1i;i;i1fLft1i1fL1i;..                
                                        .it;i;,;ii1i11;::1;.iLtC1::::;;;;;iii:,..                   
                 :.                    .;1;;:,;iiii1i;;:,1;.;f;LL,,::;;iiii:,.                .     
                 ..       .            :1;;;;ii:,;ii;:,.,ii,i1,;ft:,,,:::,..           .            
                           .          .1i;;11i,,:i;::,...it1f1,,:;i:....                            
                             ..     ..;i;;i;;;,;;,,..   .:ttit1:,:;;,.                              
                                ,,:::;;:;i;;i,;;..      .,iCC1tf;,:::,                              
                               .:;i;;;;;iii1;;;.,       .;1iLti;ii::::                              
                             .,;1ii;;;;iiii;;;,..       ,ttii11i;1::;:.                             
                             ,i11i;;;;;;;;;;;,.,       .1fi,.:;;;i:;:..                             
                           .,if1i;ii:,:;;;;:,., ..     ,fi.   .,:;::                                
                       .,,::1Lti11i,.;iii:::::. ..     :t,   .  ,;,                                 
              ..      ,:;;,;Lf111:..iii;:,:::,         ,i    .. :;,              ..                 
                     ,:i:.,iLtti..:ft1:.,,::,..        ,:.     ,;:.                                 
            ..  ..  .,:;. .:ff;..;GC1:  .,:,  ,        .,,   .:;i:.                           .     
                ..  .:i:.  it1,,;Cf:... .,;,          .,:i:..:ii;,,                                .
                    .;;. .;i:;;if;.... .,,i,          ,:;;i::11;,,.        .                        
          .     .    ..  ;;. :i1:....  ,,::           .:,;;ii1i;:.     ..  .                        
                        :;. .:i;....  .,;:          .  ,;ii1t1ii;.            .                     
                      .:;...,tii,..  .:;;.              ,:1f11ti.                             .     
                     ,:;,.,.i0i1i.   ,;;.                 .;Lf;.                                    
               .   .:;;:..,:LL:;i,  ,:i:                   .1t,.             :                      
                  ,;;:,...,iti,,,. .;;i.               .    .:.                                     
                 ,;:;:....,ttt;:,. :;1;                      .                                      
                .:::,... .ifti:,. .;ii:.                          .           .                     
               .,:,.    ,;ii:.    ,;;:,                                                             
               :::.     ::        ,i1:.                                                             
              ,;,,.               .;t,                               .                              
              ,, ,         .      .i;  .                                                            
                ,:      .         .,   .        .                      .                            
                ,.                                               .                      .    .      
                                        ..    .,                                                    
                 .                             .         ..                                         
`,y[89]=`                               .                                             ,.                   .,
        ..                 .                                                                        
                                                                                                .   
                                                   ..                                               
                                             .     .                              .                 
                                             .  .                                                   
                                             .                                                      
 .                                                               ,                                  
                                                                                            ..      
                                                                .                                   
                                                                                                    
                                                                          .             .           
                                    .,:;;:::,,,........                                .:      ..   
                                   ,iittttt1t111i1111i;;:,.                     .                   
                                  :i111111t11111iii111iiiii;;,,,.               .                   
                                ,;1i111111tt111iiii1iiiii1i111ti;;;:,,.                ..           
                                :11ttttttftt1ii;iiiii;ii11;i11iii1ttii;;:,                        ..
                                ,11tffffftftt11iii;;111iiiii1t111i11t11i1i;,                   ..   
..                              ,i11tttttt11i1111i;iit1iiiii1ii111fLLiii1i1i;.                      
         ..                    .:i1i1tttt1111111t1i;ii11iiiii;;;i11tti;1t111ii:.                    
                      .  .  .,;1fLLfffffffffft1tttt1i;iii11iiii111t1iii1fCf1;;1ti;,.                
          .                .:1fCCLGGCCCCGCCLLftttttt111tftt11iiii111iit1fCCttti1tiii;:,.        .   
                           ,;ifGGLCLCLLLLCCGGCLLfffttttttffft1ii1;i1111tfttt11i1t;;;1ti:.        .. 
                       ,  ..:;i1ffLCGGLLLffLLCGGCCLLLftfftfCCCLtttii1tt1i;ii11tt1111i1i1: .      .. 
                          ..,:;;;i1tCG00GCLffffLCGGGGCfffttfLGCLLCLt1itf11iiti1tiii1i111t:.         
           ..             ..,:;;;;iii1fC0000CfLLLCLLLCCGGCLLftttfLLLLLLfttt1i;:;;;iiiii11t:         
                          ..,::::;;;;;;iiitL00GCCLti1tt1LGGGCLfffftftfLLft1ii;;:;;i;;;;:;it:.       
        ..       .         ..,,,::,::;i;;;;i1C80ffiiLLti;ff1fGGGCLftttfLffft1111i;;ii;;::;1i,       
        .             ..    .....,,,:;:::;i;::if11it00Ci;;;:iCCCGGGCCLLffLffftfttttti;;;:;;:.       
                      ,.       .....,:::::,,,,i11;;fffCi;::iLCt11fCCGGGCCLLffffft1ff11i;;:,         
                                   ...,,,,,.,;tf1::t:.,::;i11i;i1111tfLCGGCCCCLf111tf1;:.           
 .                                  ....,...:1fL;:::,:;:iii;:;ittiiffLLLLfCCCGGCLf1i:.       .      
 .           .                         .....;1ti;;,,,;i;;i;i1fCf11fGCCCCfLLCGCLCLfL1..              
             .                            .;1;;ii:.,:i;;i::1t1ftttfC000G888888GGCtC1.               
         .                           .   .;t1;;;:,,;i;;i:;:,i1ii1:iii1fCCft1tLCCf1i,.               
                                         ;ti;;;;,;1i;i1::1;.iftCi,;::::;::;iiii;,.                  
                 :.                     ,1;;;,;;ii;iii;:,ii.it;Ct,,,::;;iiii;,..              .     
                 ..                    ,1;;:,;i;:;ii;:,..;i;1i,1L1,,,:::;::,.          .            
                           .           ii;::1i:,:i;:,,...i1tf;.:;ii:......                          
                             ..       :i;:;i1:,;i,,...  .:t11f;,,;;;,.                              
                                 ....:;;;;;;i:;;,.      .,tCttL1,,:;:,                              
                                .::;;;;;;;i1;:i,..      .iiLLii1i,,:::                              
                               .:iii;;iiiii;;i:..       :f111tiit:,;;:                              
                              ,i1iiiii;;;;;;;,,,       .tt;,;ii;i;,i:.                              
                           ..:11iiii;:,:;;;;,,,...     :f;.  .,:i:.:                                
                      ..,:::iff111i:.,iii;;:::, ..     ;t,   . .::.                                 
              ..     .::;::;fL11t;,.:iii;,:;:,         ii    ,. ,:.              ..                 
                    .,;i, ,iLft1,..;fti,.:::,..       .;;.     .;,                                  
            .   ..  ,:1, ..:Lf;...tGfi. .,::..,       .,:,    ,;i,.                           .     
                ..  ;t;.  .ift..,LGi,   .,:;          .,:i.  ,ii;,.                                .
                    ;i.  .;;:t;:tt,     .,;;          ,:;;;.,ii;,,.        .                        
          .     .   ..  .;: .i11:      .,:;,          ,,,;i;;ii:,,     ..  .                        
                       .;,   :1;..     .:;:         ...,;iiii1i11.            .                     
                      ,;:   ,;i;.     .:;,             .,:11i11t:                             ..    
                    .:;:  ..1L:1;.   .:i:                 .:tf:,                                    
               .  .:;:,.  .,LL,i1:.  :;i.                  .1i               :.                     
                 .;i:,   ..;f1,::,  :;i:               .    ..                                      
                 :i;;.  ...tf1;:,. .;;1,                                                            
                ,i;:,.  . ;tt1;:.. ,:;;.                          .           ..                    
               ,::.     .:11i:.   .,;::.                                                            
              ,;:       ,;.        ,1i,                          .                                  
             .:,:                  ,1i                               .                              
             ..,,          .       ,i. .                                                            
              ....      .          ..  .        .                      .                            
                                                                 .                      .    .      
                                        ..    .,                                                    
                 .                             .         ..                                         
`,y[90]=`                               .                                             ,                    .,
        ..                 .                                                                        
                                                                                                    
                                                   ..                                               
                                             .                                    .                 
                                             .  .                                                   
                                             .                                                      
 .                                                               ,                                  
                                                                                            ..      
                                                                .                                   
                                                                                                    
                                                                          .             .           
                                    .,:::::,,,.........                                .:      ..   
                                   ,;1tttt11111ii111ii;:,,.                     .                   
                                 .:111ttttttt11ii11111iii1i;::,..                                   
                               .:;11tfftttftt11ii111iiii111t11tii;::,,.                ..           
                               .;11tfffffftft11iiii1i;;1t1ii11iii1tt1ii;:.                         .
                                :11tfttfffftt1iiii;;1iiiiiii1t11iiittt111i;,                   ..   
..                             .:ii1ttttt11iii111i;;itiiiiii1ii11ttLfii11i1i;.                      
         ..                   .:i1111tttt11111111i;;;i1iiiiii;;;ii1tfi;itLt1ii:..                   
                      .  . .,;1fCCCLffffffftftttttt1i;;;;iiiiii1iiiii;i1LGf1;;1ti:,.                
          .               .,ifGGLCGGCCCCCCLLLfttttft1111ttt11iiiii11ii1ifGCttti1fiii;:,.        .   
                          .:itCGCCLLLLLLLCCGGCLLfffftttttffft1iiiii1111tffftt1;11;;i1ti,.        .. 
                       ,  .,:;i1ffCGGCLLLffLLCGGGCCLLfttfffCCLftttii1tttt111111f11111111,..      .. 
                          .,:;;;;i1fG080GCLffffCCGGGGCfffttfLGGLLLLt1i1ftt11fi1tii1t1t11t:.         
           ..            ..,::;;;;ii1tLG000GCfLLLCLLfLGCGCLLfttffCLLLLfttttt1i;iiii11111tt:         
                          .,,:::::;;;;;;;1tL00GCCLt1tft1tCGGCLffffttffCLff1iii;i;;1;ii;;i1t:.       
        .        .        ..,,,:,,:::;;;;;;i1G80ftitLLf1;;fftGGGCLfttttLffftt1111iiiii;;;;1i,.      
        .             .     .....,,,:::::;;:::1f1it0000fi:;:iLCCGGGCCLLffLLfffft1ttt1i;::;;:.       
                      ,.       ....,,;,,::,,,,i11;tttLGL:;:iLCf11fCCGGGGCLLffffft1ff111;;;,.        
                                   ..,,,,,..,;tf1:i;:.:;:;i1t1;;i111tfLCCGCCCCLLt1tttti:.           
 .                                  ........:1ff;;::,,i:;ii;:;;1t1i1ffLLCLLCCGGGCLt1;,.      .      
 .           .                         ....,i1tii:,,,:i;;iii1tLL1ttCCCCCLfLLCCCLCLLL:.              
             .                            .;1;:i;,.,,:i;i:,it1ff1ttG0880G888@@8GGffG;.              
         .                           .   .;t1;;;,..,;i:i;;:,i1iit:;ii1LCGCfttLGGCf1i.               
                                         :ti;ii:.,:ii;;i:1i.1ftL1.;;;;;::::iii11i:.                 
                 :                      ,1;;;;;,:ii;;;i;,;i,i1iC1,:,,::;;;iii;:,.             .     
                 ..       .            .1;;::;:;;;;;;;:..;ii1::ff1,,,:::;;;:,.         .            
                           .           ;i;::i1;::ii:,,...i1tt,,;i1i,..,,,,..                        
                             .        ,i;;;;i:.,i:,... ..;t1f1,,:;;;,...                            
                                     ,;;:;;ii,:i,.      .;LL1Ct,.,;;:.                              
                                 .,,:;;;;;i1::i:..      ,itC1iti,,:;:,                              
                                .:;;;;iii1i::i:..      .it1tt1tt,.:;;,                              
                              .,i1iii1i;;;:;;:,,      .:t1;i1ii1,,:i,                               
                           ..,i11i1i;:,:;;;;:,,...     it:. ,::i;..,                                
                      .,,:::;tL11t1;,,iii;;::;, ..     i1.   ..,;:.                                 
              ..     ,:;;:,:tGftfi:,,i1i;,:::,         i;    .  .,.               .                 
                    ,:i;. :iCGLt:,.,tt1:.,::,..       .i;      .,.                                  
            .   .. .:1i. .,i00t:,.:CLt:  ,::,.,       ,;;.    ,;;.                            .     
                .. ,ti,...:tGG;,,10L;.   ,,;.         ,i;;.  .ii:..                                .
                   ,1, ..:ii1G;,tL;.    .,:i.         ,:;;:.,;1;,..        .                        
          .     .   ,...:i:,:ft1i.      .,;;.         ,,:;i:;1;:,,     ..  .                        
                      .,i:..,;1i.       .:;.          .:;;;;;1;ii,            .                     
                    ..:;:...,;i;.      ,;;.            .,;11;itf;.                            ..    
                  ..:;;:....11;i:     ,;i.               .,:1f;,                                    
               . .,;;:,.  .,Cf,i1,   ,:;:                   ii               :.                     
               . ,i;:,     iCt:;i:  .;:1.              .    .                                       
                ,ii;:.    .1f1;;,.  ::;;                                                            
               .;i:,.     ,1t1i;,.  ::::                          .           ..                    
              .::,.      ,111i,.   .:;:.                                                            
             ,;;,       .;:.        :1:                          .                                  
            ,i;:.                   :t,                              .                              
            ,,..           .       .;: .                                                            
                ..                  .  .        .                      .                            
                                                                 .                      .    .      
                                        ..    .,                                                    
                 .                             .         ..                                         
`,y[91]=`                               .                                             ,                     ,
        ..                 .                                                                        
                                                                                                    
                                                   ..                                               
                                             .     .                              .                 
                                             .  .                                                   
                                             .                                                      
..                                                               ,                                  
                                                                                            ..      
                                                                .                                   
                                                                                                    
                                                                          .             .           
                                     .,:::,,,.........                                 .:      ..   
                                   .;1tttt1111iiii11ii;:,,.                     .                   
                                  :1ttfffft1111i1111111i11i;;:,..                                   
                               .:;1tttfLLLfft11ii111iiii111ttttii;::,..                ..           
                               .;1i1ttfffLfff11i11i1i;;1ttii11ii11t111i;:.                         .
                                ;ii1tttttfttt1ii1i;ii11i111i1t11i;it11111i;,                   ..   
..                             .;1i1tt1111iii111ii;;1tiiiiiiii111ttLtii11111:.                      
         ..                  .,;1t11tttt1111111t1i;;;ii;;iii;iiii1tLLi;itLt1i;:.                    
                         ...;1fCCGCLffffffttfttttt1ii;ii;iiiiiiii;i1ii11LLfi;i1ti:,                 
          .               .;tC0GCGGGCCCCCCLLLffttttt11111tt1iii;i;1t11t1LGCtftittiii;:..        .   
                          ,;1LGGGCLLLfLLLCGGGCLLffffftttffftt1iiiii1ftt1tfLLLi;ii;;itti,.        .. 
                       , ..:;;itfLC0GCCLLffLLCGGCCCLLfttffLGGLftttii1t111tLf111t11111t11,..      .. 
                         ..,:;;;;i1fG080GCLfffLCCGGGGGLfftfLC00LLLLt1i1fttftf1ft1ttt1t111,.         
       .   ..            ..,:::;;iii1tLG000GCfLLLCLLLCGGGGLLffffLCCLLLftt11tt11t11tt1tttt1,.        
                         ..,,::::;;;;;;;i1tC00GLCL11tftffLGGGLfffftfffLLff1iii1111t111ii11t:.       
        .                 ..,,,,,:::;;::;:;;tG@GfttLLLLti:iLtCGGCCfttttLffftt1111t111ii;;i1i,.      
        .             .     ....,,,::::::;;:::1fi1G000GC1;;:;LCCGGGCLLLffLLfftft1tff1ii;:ii:.       
                      ,.       ....,::,::,,,,,i1111tfLG0i::;fCLttfCGGGGGCLLLffffttfft11i;;,         
                                  ...,,,,...,;tf1;;;:,:i:;i1f1i;;111tfLCCCGCCCLLf11ttfi:.           
 .                                  .......,:1ff;:::,,;;;;ii::;i11iiftLLLLLCGGGGCLfti:.      .      
             .                        .....,;11i;,.,,,;;;ii;1tfL111fGLCCCffLLCCLCCLCt..             
             .                            .;1;:;,..,,,i;;;,:11ff111C0880G088@@8GGCtCL.              
         .                           .   .;t1;;:....:ii:i;:,i1i;t;:i11LCGGLffL00GCft;.              
                                         :ti;i;,. .:1i:;:ii,tftLt,:;;:;;;;:;iii11i:.                
                .:                      ,1;;i;,..:;ii;;;,:i;iitC1.:::::::;;ii;;:,.            .     
                 ..       .            .ii;;i:.:;;;;;;:,.:i11,iLf;,,,,::;;;;:,..       .            
                           .           ;i;;;i;;;:ii;,,...;1t1,:11t;..,,,,,,,.                       
                             .        ,i;;;;i;:,;;,... ..it1L;,:;;;;......                          
                                     ,;;ii:;:.,;:.      ,1ftLC:,,;;::.                              
                                  .,:i;;;;;;,:i:..      ;1Lf1fi,,,;:;,                              
                                 .;;;;;;;i;::i;,,.     ,t1tttLi,.,;;;.                              
                               .:iiiii;::::;i:,,.     .itiit11i..,;i,                               
                           ..,:i111ii:,,;;i;:,,...    .11:.,:;i:...,                                
                      .,,::::ift11i:,.;iii;::;, ..    .1;.   ,:;:..                                 
              ..    .,;;:,,:iCCffi,,.;1ii,,:::        .1:    ...,:.               .                 
                   .,;1:..:;L0L1:,,.it1;..:::..       ,i:       ..                                  
            .   .. :11:  ,,iGG1,,,.tCfi. ,,:,.,      .,i:.    .::..                           .     
                ...t1:. ..,tLL,,,;CGi,.  ,.;:         :i;:   .;i,..                                .
                  .i:. ..,iiiL:,1Ct,.    ,,i:         :;:;, .;i;,..        .                        
          .     .  .....:i:.:Ct11,      .,:i,         ,,:;;,:i;:,,.    ..  .                        
                      .,i,..:tfi.        ,;:         ..:;;;:;;,;;:     .      .                     
                     .:;:...,ii;.      .,;;            .:;1i::11i.            .               ..    
                   .:;:,....1i;i,      :;;.              .,;:t1:.                                   
               . .:;;:.   .:C1:1i,    ::i,                  ;;.              :.                     
                 :i;:.    .i0f:i1:.  :;;i              .    .                .                      
                :i;:,     .iLt;;:,  .::;:                                                           
               ,i;:,.     .itt1i:.  .:::,                         .           ..                    
              ,::.       .;ttt;,.   .:;:                                                            
            .ii:.        :i;,        ;1,                         .                                  
           .;:,.         .           ;1                              .                              
           .               .        .;,                                                             
                ..                  .  .                               .                            
                                                                 .                      .    .      
                                        ..    ..                                                    
                                               .         ..                                         
`,y[92]=`                               .                                             ..                    ,
        .                  .                                                                        
                                                                                                    
                                                   ..                                               
                                             .                                    .                 
                                             .  .                                                   
                                             ,                                                      
..                                                               ,                                  
                                                                                            ..      
                                                                .                                   
                                                                                                    
                                                                          .             .           
                                     .,,,,,.....   ...                                 .:      ..   
                                   .:i1111111iiiiii1ii;:,..                     .                   
                                  ,itttfftt11111111t111111i;;:,.                                    
                               .::ittttfffft11iii111iii11ttttt1ii;::,..                ..           
                               .;ii111ttfffft1i;111tiiitt1i11t1i1tt111ii:.                         .
                                ;ii1t1t1tt11iiii1i;ii11111111t111i1tttttti;,..                 ..   
..                             .iii1tt1111i;ii1iii;;11;iiii11111tttLt1i1ttt1:.                      
         ..                 ..:itt11ttttt1111111i;;;i1ii;iii;iii1tfCf;;itLt11i,.                    
                         ..:1tfCGGCLLfffffttfttttt11i;1i;;iiiiiiiiii1itffLfiiitt;:.                 
          .              .:1fG0GCCCCCCCCCCLLLfftttt111111tt11iiii;1tf111LGLtf11tt11i:,..        .   
                         .:;tLGGGCLLLfLLLCCGGCLLfffftttttftt11ii1ii1ff111LLLLi;ii;i1t1;,.        .. 
                       , .,:;;itfLG0GCCLfffLLCGGCCCLLftfffLCCfttttii1tt1i1ft111t1111ttti,..      .. 
                         .,:::;;;i1L0880GLLfffLCGGGGGGLffffCG80LLLft1i1Lt1tff1ftttttfftti..         
           ..            ..,::::;i;i1fCG000GLfLLLCLLLCGGGCCGCLLfLCCLLLftt1tfttft11ttttttf1,.        
                         ..,,::::;;;:;;;i1fC00GLCLttffffLLC0GCfffftffLLLtff1ii111ftttt11tt1,.       
        .                 ..,,,,,::::::::::it08CffLLLLLLti;1fCGGCCffttfLffftt1111fftt1iiii1;,.      
        .             .    .....,,,::::,:;:::;tt1L0000GCLi;;;fCGGGGCLLLffLLfftft1tfft11i;i;:.       
                      ,        ...,,::,::,,,,;1tt1itLC08L:;;fLLttfCGGGGGCCLfffffttffft1ii;,         
                                 ...,,,,,...,1tL1::::,:1;:i1f1ii;it1tLLCCCGCCCCLf11ttfi:.           
                                    .......,:1ft::,,:,:;:;i1i;;;111;tffLLLLCGGGGGLft1;.      .      
             .                         ...,,;11;:,.,,,;i;;i;1ttf1i1fCLCCLffLCCCCCGLLL,.             
             .                          ..,;1;::,..,,,;i;;:,itfL111C8880G0888@@0GGffG:.             
        ..                           .  ..;t1;:,...,,;i;;i:,i1iitt:;1tLGG0CLfLG80GLt1.              
                                         :ti;i:.. .,;1i:;;i:tf1ff:,;;:::;;;:;i11t1i,.               
                .,                      ,1;;i:.  .:iii;;,,;;i1tL1.,::::::::;iii;:,.           .     
                 ..                    .1;;ii, .:;;;:::,.:ii;:tCt:,,,,,::;;;;:,,.      .            
                                       iiiiii.:;;;;:,,...itti.it1t:.,,,,,::,,.                      
                             .        ,;;i;1;:;:;;,......tttL:,;i;i:.......                         
                                     ,;;i;ii;:,;:..    .:tftGi.,:i;;,.                              
                                  .,;;;ii;;;:,;;.,.    ,1tCtLi,,.;;;;.                              
                                 .:iii;;;;:,,;;,,.   . ;ttffLi,,.:;;;.                              
                                ,;ii;;;;::::;;,,.    .,t1ittt;,..,i;.                               
                           ...,;111iii:,;ii;:::,..    ;t;,,;;;,...,,                                
                     .,,,::::;tt111i:,:11i;;:;: ..    :1:.  ,:;,.                                   
              ..    ,:;;:,.,;fCft;:,.:t1i:.:::.       ,1,    ..,.,.               .                 
                   ,:1i. .:;fGC1:...:11;,..::,.      .:i:       .,.                                 
            .   . ,11i,  .,iCG1,,,.;LL1, .,::.,      .:i:      ....                                 
                ..i1:.    ,tLL,,,:fGt;.  ,,:i.        ;i;,    ,;..,                                .
                 .;,..   ,1iiL:,iGC;..   .,;i         ;;:;.  :i;,..        .                        
          .     ... ..  ,i,.:Liif;...     .;:        .,,:i;.:i;:,,.    ..  .                        
                       ,;,..:fL1, .      .:i.        .,:;;;,;:.:;;.    .      .                     
                     .:;, ..:1t;..      .:i:           ,:i1:,.:ii,            .               ..    
                   .:;;, ...11ii,      .:i;             ..::.;ti,                                   
               . .;;;:. ...:C1;1;.    .;;i.                 ,1:              :.                     
                .;i::.   ..18f;1t;.  .:;i;             .    .                .                      
                ;i;:,     .iGt;ii:   .::;,                                                          
               :i;,,.     .;11t1;.   .:::.                        .           ..                    
             .;;:.       .:i1ft:.     :;,                                                           
            :1;,         .;1;,        ;1.                        .                                  
           ,,.           ...         .i;                             .                              
                           .         ,;.                                                            
                ..                  ....                               .                            
                                                                 .                      .    .      
                                        ..    ..                 .                                  
                                               .         ..                                         
`,y[93]=`                               .                                             ..                    .
        .                  .                                                                        
                                                                                                    
                                                   ..                             .                 
                                             .                                    .                 
                                             .  .                                                   
                                             ,                                                      
..                                                               ,                                  
                                                                                            ..      
                                                                .                                   
                                                                                                    
                                                                          .             .      .    
                                      .....                                            .:      ..   
                                    ,:;;iiii;;;;;;;;;;:,,..                     .                   
                                  .:ii1t11111111t1tt111111i;:,,.                                    
                               .,,;i1111t111iiiii111iiit11ttft11ii:,,.                 ..           
                                ,;ii111i11111ii;itt1ii1tt111ttt1fftt11ii,.                         .
                                ,ii1111111iiiii;11iii1tt1tt1ft1111ttttffti:..                  ..   
.                              .;1i1ttt11ii;;i1ii;;;iiiii111ttttt1tt111tfft1,.                      
         .                  .,:ift1tttttttt11tt1ii;i1iiiiiiii11itLCC1i11ffttt;,.                    
                         ..;1tLGGGCLLfffffffftttt111i1ii;ii1iiii;;ittttffLt11tti;,.                 
                         .;tL00GCCCCCCCCCCCLLfftttt11tt11tf11iiiii11tt1fCLttt1ftt1i;:,..        .   
                         ,;itLGGGCLCLLLLLCGGGCLLfffftttttftt111i1111tt11fCfLf1ii;i1f1i:,.        .. 
                       , ,::;;i1tLG0GGCLfffLCGGGGCLLLffffLLLLt11t1i1t1ttitttt1t1i1ttft1:..        . 
                        ..,::::;;i1L0880GLLfffLCGGGGGGCLfffG00Gffft1111Lft1tttftttftftt1:..         
           ..           ..,,,:::;;;;1fCG000GCLLLCGLLCCGGCCLCG0LfLCCLfftftttf1tf1tfLLLfff1:..        
                        ..,,,,,:::::::;;i1fC00GLCCffLLLLGCCGGCftLftffLCftff1111ttLLLffffft:.        
        .                ...,,,,,::::,,::::;f0CtfLCLLLLfLLt1LGGCCLffttLCfftt111i1tfLfft111i,.       
        .             .    .....,,,:,,,,:::::i;ttG0000GLLGt;;tCGGGGCLLLffLLfttft1tffLt1ii;:..       
                      ,        ...,,,:,:,,,,;;tft;itLC080f;;1LfffLCGGGGCCCLfffft1ttfft1i;:.         
                                 ....,,,...:;iff;:::::;ft:;iftiii1tttLCCGGGCCCLLf11t1ti,.           
                                    .......;itt;::,,:::::;i11;ii111;1ffCLLCCGGGGCLLft;..     .      
             .                         ....;1i;:,,.,,,,;i;ii;fff1iitLCLGLLfCCCCCCGCCC;..            
             .                          ..,11;;,...,,,;;;;i.;ffL1itL08880G888@@0GGCtG1.             
        ..                           .  .,t1ii,.....,::i:;:,11;i1f1:itfG0GGLffG8@0Cft:.             
                                        .1i;i:.  ..,,:ii:;;iftiff1,:;::;;;;;:;itft1;,               
                .,                     .ii:i;.    .:;ii;::i;ifttf,,:::::::::;iii;:,.          .     
                 .                     ;i;i1,   .,;ii;::,:ti;tLLf:,,:,,,,,::;;;:,.     .            
                                      :i;iii...,;;;::,,..11tiiftf1.,,.,,,::::,,.                    
                             .       .;;;i1;,.,;i::,....;GffL:i1i1;.....,,....                      
                                    .::;;i1:.,:;;..  ..:t0LLL,,i;:i:..                              
                                  .:;;;i11i,,:;;,,.....1t0Lfi,,::;;i,                               
                                 ,;ii;i1i;:;;;;,,.....:ttCLt::,.;;;;,                               
                               .:;i1iii;:;;;;;,,,....,111ffi:,. ,ii;                                
                      ..  ....,iii11i;;;;;;;;:::.....:1;:11;,,.  .,.                                
                    .,,,::::,;11i1111i;i;i;:::;,..   ,1;,.,:,,,.                                    
              ..   ,,:;;:,.,;11tt1ii::1ii;.,:;,      .i;.   .,,.. .               .                 
                 .:;ii:   :;ffLLi:,..11i,  .::.      ,i:,      ..,.                                 
            .   .:ii;:   .,1LCC;, .,1Lt:  ..;;,      ,i;.       ,,,.                                
                ,;:,.     ,tfCi..,:tf1:  .::ii       ,i;:     .,.,:.                               .
                 ,. ..   ,1iit:,:tL1:.   .,,;;       ,;:;,   ,i:,,,        .                        
          .     ..  ..  ,i,.;t:;ff;..      .;:       .::;i,.,ii:,,,    ..  .                        
                       ,i, .;tfti.         :i,       .,;;i,,:..,:;:    ..     .                     
                     .:;,  .:1G1..       .:;;.        .,;1:,. ,:;;.           .               ..    
  .                ,:;;,   ,iift..      .;;;;           .::,.,;1i,                                  
               . ,;;;;.   .iCti1;.     .:;;i,               .:;:.            :.                     
                ,i;;:.   ..t8t;11:.   ..;:;:           .    .                .                      
               .ii::.    ..iLti1ti.   ,,:::.                                                        
              .;i:,..     .:tttLt,    .,::,                       .           ..                    
            .:;;,.        ,:i;tf,      ,:,.                                                         
           .;;:.         .::;;i.       ::,                       .                                  
          .,              .,,,        .:..                       .                                  
                           .          :,                                                            
                ..                   ..                                .                            
                                                                 .                      .    .      
                                        ..    ..                 .                                  
                                              ..         ..                                         
`,y[94]=`                               .                                             ..                    .
        .                  .                                                                        
                                                                                                    
                                                   .                              .                 
                                             .                                    .                 
                                             .  .                                                   
                                             ,                                                      
..                                                               ,                                  
                                                                                            ..      
                                                                .                                   
                                                                                                    
                                                                          .             .      .    
                                                                                        :      ..   
                                     ,::;;;;:::::::;:::,...                     .                   
                                   .;ii111111111t11t111i1ii;:,..                                    
                               ., ,i11i111i1iiii1111ii1tt1ttt11ii;:,,.                  .           
                                .,iiiii11111ii;;i1tt1i1tt111ttttft1111i;,.                         .
                                .;iii11111iiiii;itiii1tt1t11Lt11111tttffti:..                  ..   
.                              .:1iitft11iiiiiiiii;;iiiii11ttt1t1tt1111fftfi,..                     
         .                   .,;tt1ttttt1tt11tt11iiiiiiiiiiii111fLCLii11fftf1:..                    
                         ..;1tLCGGCLfLffffffftttt11111iiii11ii1i;i1fttttLL111t1i:..                 
                         .itC00GCCCCCCCGCCCLLfftttt11f111tf111iiii11111LLftt1tftti;:,..         .   
                         :;itLGGCCCCLLLLLCGGGCLffffftttttftt11111111111fCCfLt11iiitt1;,.         .. 
                       ,.,:;:;i1tLG0GGCLffLLCGGGCCLLLffffffLft1tt1i1ttf11tttt1tii11tt1i,. .       . 
                        .,,:::::;i1LG880GLfffLCCGGGGGGCLfLLGGGCffft111tLf1111tf11fttftti,..         
           ..           .,,,,,::;;;;1tCG00GGCLLCCGLLCGGGCLLG08LfCCCffttftttf1fttftLLfffti,.         
                        ..,,,,,:::::::;;;1tC88GfCCfLLLLCGCGGGCffLLfffCLttfft1111tLLLLLLffi..        
        .                ....,,,::,,:,,::::if0ttfLCLLLLLCLLtLGGCLLffttLLfLtt111ii1fLLfft1t,.        
        .             .    .....,,,,,,,,,:::;;itt0000GGLLGC;;tCG0GGCLLLffLLfttft1tffLf1i;;..        
                      ,        ...,,,:,,,,.:;;ff1;ifLC080Li;1LfffCGGGGGCCCLfffft1tffff1;:,          
                                 ....,,,...;;tf1::::::;tf:;iftiiiffffLCCGGCCCCLLt11t1t;,.           
                                   .......,iit1::,,,::,:;;iitiii1t1i1ffCLLCCGGGGGLLft:..     .      
             .                         ...,i1i;,,,,,,,,;i;;i;fLf1iitLCLGCLfCCCCCCGCCC;..            
             .                          ..;1ii:,...,,,;;;;i,;fff1itL0888008@8@@800CfG1.             
        ..                           .   ;tiii......,;,;;;;:ti;;1fL;itfC0GGLffC0@0Gft:.             
                                        :t;ii,. ...,,,:1;:;ift1tft,:;::;;i;;:;i1ffti,.              
                .,                     ,1:;i,     .::;1i;:1;iCttf:.::::::::::iiii;:.          .     
                 .                    .i;i1;     .:;ii;;,:1iiLLtf:,,,:,,,,:::;;;:,     .            
                                      ;iii1:   .,;;;::,.,11tt1ftfi.,,,.,,,::::,..                   
                             .       ,;:i1i, .,;i:::...,1Gtffi11i1:.....,,,,...                     
                                   .,;;;i1;..,:;:.,....1f8LLt,;;:;i,.   ..                          
                                  ,;;;;111:.,:;;,,,...,ff0Lf;,,::ii;.                               
                                 :iiiiii;:,:;;;,,,....itLGfi,..;;;i,                                
                               .:iiiii;:::;;;;,,,....;tifff:.  .;ii.                                
                      ... ....:iii1;;;;;;;;;;:::,....11:;t1:,   .,:.                                
                   .,,,::::::;1111ii1iii;i;:::;,..  .i1:.:i;:,                                      
              ..  .,:i;:,..,;1itfii11iiii;..:::.    .;1,  .,,:.                   .                 
                 :1t1;.  .:ifttLfti;,;ii:   ,;,     .;;,,    ..  ...                                
            .   :ti:.    ,:1LfCL1,..ift:    ,i:      :i:.       ,,.,.                               
               .;,        ,ftfL:. .ift;   .,:1,      ;;;,      .,::,                               .
               ..   ..   ,1i;f;..it1;.    ..:i,      :;:;.    ::,:,        .                        
          .     .   ..  :i,.;t,:fLi,.       ,i.      ,::;;. .ii:,,:    ..  .                        
                       :i. .;ttL1..        .;i.      .:;;i..,. ,:::.   ..     .                     
                     .:;.   ;1Gi..        .;i;.       .:11,.   .;i:           .                .    
  .               .,:;;,   ,iiLf..       .;i;;.        .,;:.  .iti.                                 
                .:;;;:.   .;ft1f;.       ;iii,               .:;:            :.                     
                :i;;:    ..f0ti11:.     ,;i1;.         .                     .                      
               ,1i::.    ..iLt1tfi.    ,,:;:,                                                       
              ,ii:,.      .:1ttfLi     ..,:,                      .           ..                    
            ,;i:,.         ,:i;f1.      .,,                                                         
           ,;:.            ...;i        .,.                      .                                  
          ..                 ,:         ,.                       .                                  
                           .           ..                                                           
                ..                     .                               .                            
                                                                 .                      .           
                                        ..     .                 .                                  
                                              ..         ..                                         
`,(async()=>{let M=0;for(;;)p.current&&y[M]&&(p.current.innerHTML=`<font color="${s}"><pre>${y[M]}</pre></font>`),await new Promise(w=>setTimeout(w,40)),M++,M>=95&&(M=0)})(),()=>{R.remove()}},[]),g.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",zIndex:1,pointerEvents:"none",overflow:"hidden",opacity:.2},children:g.jsx("div",{ref:p,style:{position:"absolute",bottom:"-30vh",left:"-30vw",width:"100vw",height:"100vh",color:"#00aaff",fontFamily:"monospace",fontSize:"0.7vw",lineHeight:"0.8vw",whiteSpace:"pre",margin:0,display:"flex",alignItems:"center",justifyContent:"center",animation:"float 60s linear infinite"}})})},dd=({publication:p})=>{const R=(j,M)=>{j.stopPropagation(),M&&window.open(M,"_blank","noopener,noreferrer")},y=(j,M)=>{if(j.stopPropagation(),M){const w=`/data/pdfs/${M}`,fi=document.createElement("a");fi.href=w,fi.download=M,document.body.appendChild(fi),fi.click(),document.body.removeChild(fi)}},s=j=>{const M=/((?:Hubert\s+(?:D\.?|Dariusz)\s+)?Zaj[aą]c\s*,?\s*(?:HD|H\.?\s*D\.?)?|(?:HD|H\.?\s*D\.?)\s+Zaj[aą]c|Zaj[aą]c\s*,?\s*Hubert\s+(?:D\.?|Dariusz))/gi;return j.split(M).map((fi,D)=>fi&&fi.match(M)?g.jsx("span",{className:"text-red-600 font-extrabold",children:fi},D):fi)};return g.jsx("div",{className:"p-6 md:p-8 group/item hover:bg-gray-50/50 transition-colors border-b border-black/5 last:border-0",children:g.jsxs("div",{className:"flex justify-between items-start gap-6",children:[g.jsxs("div",{className:"flex-1",children:[g.jsxs("div",{className:"mono text-xs text-gray-400 mb-2 uppercase tracking-wider",children:[p.Venue," • ",p.Year]}),g.jsx("h4",{className:"text-lg md:text-xl font-black uppercase tracking-tight text-black mb-3",children:p.Title}),g.jsx("div",{className:"text-sm text-gray-600 leading-relaxed",children:s(p.Authors)})]}),g.jsxs("div",{className:"flex flex-col gap-2 items-end",children:[p.Link&&g.jsxs("button",{onClick:j=>R(j,p.Link),className:"flex items-center gap-1 text-xs mono uppercase text-blue-600 hover:text-blue-800 transition-colors group/link",title:"View publication",children:[g.jsx("span",{className:"material-symbols-outlined text-base transition-all group-hover/link:translate-x-1 group-hover/link:-translate-y-1",children:"north_east"}),"Link"]}),p.PDF&&g.jsxs("button",{onClick:j=>y(j,p.PDF),className:"flex items-center gap-1 text-xs mono uppercase text-red-600 hover:text-red-800 transition-colors group/pdf",title:"Download PDF",children:[g.jsx("span",{className:"material-symbols-outlined text-base",children:"download"}),"PDF"]})]})]})})},Tc=({limit:p,onViewAll:R,showViewAll:y=!1})=>{const[s,j]=b1.useState([]);return b1.useEffect(()=>{fetch("/data/publications.csv").then(M=>M.text()).then(M=>{const w=M.split(`
`).filter(E=>E.trim());w[0].split(",");const fi=w.slice(1).map(E=>{const Z=[];let U="",Ci=!1;for(let xi of E)xi==='"'?Ci=!Ci:xi===","&&!Ci?(Z.push(U.trim()),U=""):U+=xi;return Z.push(U.trim()),{Year:Z[0]||"",Authors:Z[1]||"",Title:Z[2]||"",Venue:Z[3]||"",Link:Z[4]||"",PDF:Z[5]||""}}),D=p?fi.slice(0,p):fi;j(D)}).catch(M=>console.error("Error loading publications:",M))},[p]),g.jsxs("div",{className:"blueprint-module bg-white/80 backdrop-blur-sm transition-all hover:shadow-2xl",children:[g.jsx("div",{className:"divide-y divide-black/5",children:s.map((M,w)=>g.jsx(dd,{publication:M},w))}),y&&R&&g.jsx("div",{onClick:R,className:"p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors group/link border-t border-black/5",children:g.jsxs("span",{className:"mono text-sm uppercase text-blue-600 group-hover/link:text-blue-800 transition-colors inline-flex items-center gap-2",children:["See all publications",g.jsx("span",{className:"material-symbols-outlined text-base transition-all group-hover/link:translate-x-1",children:"arrow_forward"})]})})]})},od=()=>g.jsxs("div",{className:"blueprint-module p-6 md:p-8 bg-white/90 backdrop-blur-sm transition-all hover:shadow-2xl",children:[g.jsx("h4",{className:"mono text-xs font-bold uppercase mb-6 border-b pb-2 text-red-600",children:"Contact"}),g.jsxs("div",{className:"space-y-6",children:[g.jsxs("div",{children:[g.jsx("span",{className:"mono text-[10px] text-gray-400 uppercase block mb-1",children:"Electronic Mail"}),g.jsx("a",{href:"mailto:hdz@di.ku.dk",className:"text-lg md:text-xl font-black hover:underline transition-colors text-black",children:"HDZ@DI.KU.DK"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"mono text-[10px] text-gray-400 uppercase block mb-1",children:"Phone"}),g.jsx("div",{className:"text-lg md:text-xl font-black text-black",children:"+45 50 14 95 52"})]}),g.jsxs("div",{children:[g.jsx("span",{className:"mono text-[10px] text-gray-400 uppercase block mb-1",children:"LinkedIn"}),g.jsx("a",{href:"https://www.linkedin.com/in/hdzajac/",target:"_blank",rel:"noopener noreferrer",className:"text-lg md:text-xl font-black hover:underline transition-colors text-black inline-flex items-center gap-2",children:"/in/hdzajac"})]})]})]}),md=()=>g.jsx("div",{className:"blueprint-module p-6 md:p-8 flex flex-col justify-between transition-all hover:shadow-2xl bg-black text-white",children:g.jsxs("div",{children:[g.jsx("h4",{className:"mono text-xs font-bold uppercase tracking-widest border-b pb-1 mb-6 border-red-600",children:"Physical Node"}),g.jsx("p",{className:"text-2xl md:text-3xl font-light mb-2",children:"Sigurdsgade 41"}),g.jsx("p",{className:"text-lg md:text-xl font-bold italic",children:"Copenhagen"})]})}),vd=({setSection:p,renderCardHeader:R})=>g.jsxs("section",{className:"max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700",children:[g.jsxs("h2",{className:"text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase transition-all mb-16 md:mb-20 text-black [word-spacing:0.2em]",children:["Designing Responsible AI in ",g.jsx("span",{className:"italic text-gray-400",children:"Service"})," of Human Expertise"]}),g.jsxs("div",{className:"flex flex-col gap-12 md:gap-20",children:[g.jsxs("div",{children:[R("description","Recent publications","2021—PRESENT"),g.jsx(Tc,{limit:3,showViewAll:!0,onViewAll:()=>p(bt.PUBLICATIONS)})]}),g.jsxs("div",{children:[R("person","Who I Am + How to Reach Me","Direct Transmission"),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[g.jsx(od,{}),g.jsx(md,{}),g.jsx("div",{onClick:()=>p(bt.ABOUT),className:"blueprint-module p-6 md:p-8 cursor-pointer group transition-all hover:shadow-2xl bg-red-600 text-white",children:g.jsxs("div",{className:"flex flex-col justify-between h-full",children:[g.jsx("p",{className:"text-xl md:text-2xl font-black tracking-tighter uppercase",children:"More about me"}),g.jsx("span",{className:"material-symbols-outlined text-white/40 group-hover:text-white transition-all self-end text-4xl",children:"arrow_forward"})]})})]})]})]})]}),yd=({renderCardHeader:p})=>g.jsxs("section",{className:"max-w-5xl animate-in fade-in slide-in-from-right-4 duration-700",children:[p("description","Publications","Research Output"),g.jsx("div",{className:"mt-4",children:g.jsx(Tc,{})})]}),hd=({renderCardHeader:p})=>g.jsxs("section",{className:"max-w-5xl animate-in fade-in slide-in-from-right-4 duration-700 pb-32",children:[p("person","About Me"),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10",children:[g.jsxs("div",{className:"blueprint-module p-6 md:p-10 bg-white/90 backdrop-blur-sm",children:[g.jsx("h4",{className:"mono text-xs font-bold uppercase mb-8 border-b pb-2 text-red-600",children:"Contact"}),g.jsx("div",{className:"space-y-8",children:g.jsxs("div",{children:[g.jsx("span",{className:"mono text-[10px] text-gray-400 uppercase block mb-1",children:"Electronic Mail"}),g.jsx("a",{href:"mailto:hdz@di.ku.dk",className:"text-xl md:text-2xl font-black hover:underline transition-colors text-black",children:"HDZ@DI.KU.DK"}),g.jsx("span",{className:"mt-8 mono text-[10px] text-gray-400 uppercase block mb-1",children:"Phone"}),g.jsx("div",{className:"text-xl md:text-2xl font-black hover:underline transition-colors text-black",children:"+45 50 14 95 52"})]})})]}),g.jsx("div",{className:"blueprint-module p-6 md:p-10 flex flex-col justify-between transition-all duration-700 bg-black text-white",children:g.jsxs("div",{children:[g.jsx("h4",{className:"mono text-xs font-bold uppercase tracking-widest border-b pb-1 mb-8 border-red-600",children:"Physical Node"}),g.jsx("p",{className:"text-3xl md:text-4xl font-light mb-2",children:"Sigurdsgade 41"}),g.jsx("p",{className:"text-xl md:text-2xl font-bold italic mb-8",children:"Copenhagen"})]})})]}),g.jsx("div",{className:"mt-12",children:g.jsxs("div",{className:"blueprint-module p-6 md:p-10 bg-white/90 backdrop-blur-sm",children:[g.jsx("h4",{className:"mono text-xs font-bold uppercase mb-6 border-b pb-2 text-red-600",children:"Curriculum Vitae"}),g.jsxs("a",{href:"/data/cv.pdf",download:!0,className:"flex items-center gap-4 p-6 border-2 border-black/10 hover:border-red-600 transition-all group",children:[g.jsx("span",{className:"material-symbols-outlined text-4xl text-red-600 group-hover:scale-110 transition-transform",children:"description"}),g.jsxs("div",{className:"flex-1",children:[g.jsx("h5",{className:"font-black uppercase tracking-tight text-lg",children:"Download CV"}),g.jsx("p",{className:"text-sm text-gray-500 mono",children:"PDF Format"})]}),g.jsx("span",{className:"material-symbols-outlined text-red-600 group-hover:translate-x-2 transition-transform",children:"download"})]})]})})]}),rd=()=>{const[p,R]=b1.useState(bt.HOME);b1.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[p]);const y=(j,M,w)=>g.jsxs("div",{className:"mb-4 flex flex-col md:flex-row md:items-baseline justify-between w-full max-w-4xl",children:[g.jsxs("div",{className:"flex items-baseline gap-4",children:[g.jsx("span",{className:"material-symbols-outlined text-lg transition-colors text-red-600",children:j}),g.jsx("h3",{className:"font-black text-xl md:text-2xl uppercase tracking-tighter text-black",children:M})]}),w&&g.jsx("span",{className:"mono text-[10px] text-gray-400 uppercase tracking-widest hidden md:block",children:w})]}),s=()=>{switch(p){case bt.PUBLICATIONS:return g.jsx(yd,{renderCardHeader:y});case bt.ABOUT:return g.jsx(hd,{renderCardHeader:y});default:return g.jsx(vd,{setSection:R,renderCardHeader:y})}};return g.jsxs("div",{className:"min-h-screen transition-colors duration-700 relative overflow-x-hidden bg-[#F1F3F4]",children:[g.jsx("div",{className:"fixed inset-0 transition-opacity duration-1000 blueprint-grid opacity-100"}),g.jsx(sd,{}),g.jsx(cd,{}),g.jsx(ed,{currentSection:p,setSection:R}),g.jsx("main",{className:"lg:ml-[420px] p-6 md:p-12 lg:p-20 pt-24 lg:pt-12 relative z-10 transition-all duration-700 min-h-screen pb-24",children:s()})]})},xc=document.getElementById("root");if(!xc)throw new Error("Could not find root element to mount to");const gd=ud.createRoot(xc);gd.render(g.jsx(id.StrictMode,{children:g.jsx(rd,{})}));

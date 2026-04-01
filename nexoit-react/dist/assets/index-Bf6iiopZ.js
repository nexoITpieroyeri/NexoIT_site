(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function f_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var cm={exports:{}},Al={},um={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ia=Symbol.for("react.element"),h_=Symbol.for("react.portal"),p_=Symbol.for("react.fragment"),m_=Symbol.for("react.strict_mode"),g_=Symbol.for("react.profiler"),__=Symbol.for("react.provider"),v_=Symbol.for("react.context"),x_=Symbol.for("react.forward_ref"),S_=Symbol.for("react.suspense"),y_=Symbol.for("react.memo"),M_=Symbol.for("react.lazy"),rh=Symbol.iterator;function E_(t){return t===null||typeof t!="object"?null:(t=rh&&t[rh]||t["@@iterator"],typeof t=="function"?t:null)}var dm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fm=Object.assign,hm={};function Ls(t,e,n){this.props=t,this.context=e,this.refs=hm,this.updater=n||dm}Ls.prototype.isReactComponent={};Ls.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ls.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function pm(){}pm.prototype=Ls.prototype;function Hd(t,e,n){this.props=t,this.context=e,this.refs=hm,this.updater=n||dm}var Gd=Hd.prototype=new pm;Gd.constructor=Hd;fm(Gd,Ls.prototype);Gd.isPureReactComponent=!0;var sh=Array.isArray,mm=Object.prototype.hasOwnProperty,Wd={current:null},gm={key:!0,ref:!0,__self:!0,__source:!0};function _m(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)mm.call(e,i)&&!gm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ia,type:t,key:s,ref:a,props:r,_owner:Wd.current}}function T_(t,e){return{$$typeof:Ia,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ia}function w_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ah=/\/+/g;function $l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w_(""+t.key):e.toString(36)}function Do(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ia:case h_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+$l(a,0):i,sh(r)?(n="",t!=null&&(n=t.replace(ah,"$&/")+"/"),Do(r,e,n,"",function(c){return c})):r!=null&&(jd(r)&&(r=T_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(ah,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",sh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+$l(s,o);a+=Do(s,e,n,l,r)}else if(l=E_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+$l(s,o++),a+=Do(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Xa(t,e,n){if(t==null)return t;var i=[],r=0;return Do(t,i,"","",function(s){return e.call(n,s,r++)}),i}function A_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Io={transition:null},C_={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Io,ReactCurrentOwner:Wd};function vm(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=Ls;He.Fragment=p_;He.Profiler=g_;He.PureComponent=Hd;He.StrictMode=m_;He.Suspense=S_;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C_;He.act=vm;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=fm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Wd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)mm.call(e,l)&&!gm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ia,type:t.type,key:r,ref:s,props:i,_owner:a}};He.createContext=function(t){return t={$$typeof:v_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:__,_context:t},t.Consumer=t};He.createElement=_m;He.createFactory=function(t){var e=_m.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:x_,render:t}};He.isValidElement=jd;He.lazy=function(t){return{$$typeof:M_,_payload:{_status:-1,_result:t},_init:A_}};He.memo=function(t,e){return{$$typeof:y_,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Io.transition;Io.transition={};try{t()}finally{Io.transition=e}};He.unstable_act=vm;He.useCallback=function(t,e){return Jt.current.useCallback(t,e)};He.useContext=function(t){return Jt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};He.useEffect=function(t,e){return Jt.current.useEffect(t,e)};He.useId=function(){return Jt.current.useId()};He.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Jt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};He.useRef=function(t){return Jt.current.useRef(t)};He.useState=function(t){return Jt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return Jt.current.useTransition()};He.version="18.3.1";um.exports=He;var Re=um.exports;const Ua=f_(Re);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_=Re,b_=Symbol.for("react.element"),P_=Symbol.for("react.fragment"),L_=Object.prototype.hasOwnProperty,N_=R_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,D_={key:!0,ref:!0,__self:!0,__source:!0};function xm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)L_.call(e,i)&&!D_.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:b_,type:t,key:s,ref:a,props:r,_owner:N_.current}}Al.Fragment=P_;Al.jsx=xm;Al.jsxs=xm;cm.exports=Al;var v=cm.exports,nu={},Sm={exports:{}},_n={},ym={exports:{}},Mm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,X){var Q=B.length;B.push(X);e:for(;0<Q;){var oe=Q-1>>>1,re=B[oe];if(0<r(re,X))B[oe]=X,B[Q]=re,Q=oe;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var X=B[0],Q=B.pop();if(Q!==X){B[0]=Q;e:for(var oe=0,re=B.length,Le=re>>>1;oe<Le;){var qe=2*(oe+1)-1,Ze=B[qe],K=qe+1,ie=B[K];if(0>r(Ze,Q))K<re&&0>r(ie,Ze)?(B[oe]=ie,B[K]=Q,oe=K):(B[oe]=Ze,B[qe]=Q,oe=qe);else if(K<re&&0>r(ie,Q))B[oe]=ie,B[K]=Q,oe=K;else break e}}return X}function r(B,X){var Q=B.sortIndex-X.sortIndex;return Q!==0?Q:B.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],f=1,h=null,d=3,m=!1,_=!1,T=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var X=n(c);X!==null;){if(X.callback===null)i(c);else if(X.startTime<=B)i(c),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(c)}}function M(B){if(T=!1,S(B),!_)if(n(l)!==null)_=!0,W(C);else{var X=n(c);X!==null&&U(M,X.startTime-B)}}function C(B,X){_=!1,T&&(T=!1,u(y),y=-1),m=!0;var Q=d;try{for(S(X),h=n(l);h!==null&&(!(h.expirationTime>X)||B&&!P());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,d=h.priorityLevel;var re=oe(h.expirationTime<=X);X=t.unstable_now(),typeof re=="function"?h.callback=re:h===n(l)&&i(l),S(X)}else i(l);h=n(l)}if(h!==null)var Le=!0;else{var qe=n(c);qe!==null&&U(M,qe.startTime-X),Le=!1}return Le}finally{h=null,d=Q,m=!1}}var R=!1,b=null,y=-1,w=5,k=-1;function P(){return!(t.unstable_now()-k<w)}function V(){if(b!==null){var B=t.unstable_now();k=B;var X=!0;try{X=b(!0,B)}finally{X?F():(R=!1,b=null)}}else R=!1}var F;if(typeof p=="function")F=function(){p(V)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,H=q.port2;q.port1.onmessage=V,F=function(){H.postMessage(null)}}else F=function(){g(V,0)};function W(B){b=B,R||(R=!0,F())}function U(B,X){y=g(function(){B(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,W(C))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(d){case 1:case 2:case 3:var X=3;break;default:X=d}var Q=d;d=X;try{return B()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=d;d=B;try{return X()}finally{d=Q}},t.unstable_scheduleCallback=function(B,X,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,B={id:f++,callback:X,priorityLevel:B,startTime:Q,expirationTime:re,sortIndex:-1},Q>oe?(B.sortIndex=Q,e(c,B),n(l)===null&&B===n(c)&&(T?(u(y),y=-1):T=!0,U(M,Q-oe))):(B.sortIndex=re,e(l,B),_||m||(_=!0,W(C))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var X=d;return function(){var Q=d;d=X;try{return B.apply(this,arguments)}finally{d=Q}}}})(Mm);ym.exports=Mm;var I_=ym.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_=Re,gn=I_;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Em=new Set,ha={};function Ir(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(ha[t]=e,t=0;t<e.length;t++)Em.add(e[t])}var Mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),iu=Object.prototype.hasOwnProperty,F_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oh={},lh={};function O_(t){return iu.call(lh,t)?!0:iu.call(oh,t)?!1:F_.test(t)?lh[t]=!0:(oh[t]=!0,!1)}function k_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B_(t,e,n,i){if(e===null||typeof e>"u"||k_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var zt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){zt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];zt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){zt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){zt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){zt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){zt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){zt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){zt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){zt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xd=/[\-:]([a-z])/g;function qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xd,qd);zt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xd,qd);zt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xd,qd);zt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){zt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});zt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){zt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yd(t,e,n,i){var r=zt.hasOwnProperty(e)?zt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B_(e,n,r,i)&&(n=null),i||r===null?O_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=U_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),es=Symbol.for("react.fragment"),$d=Symbol.for("react.strict_mode"),ru=Symbol.for("react.profiler"),Tm=Symbol.for("react.provider"),wm=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),su=Symbol.for("react.suspense"),au=Symbol.for("react.suspense_list"),Zd=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),Am=Symbol.for("react.offscreen"),ch=Symbol.iterator;function Os(t){return t===null||typeof t!="object"?null:(t=ch&&t[ch]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,Kl;function Qs(t){if(Kl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Kl=e&&e[1]||""}return`
`+Kl+t}var Zl=!1;function Ql(t,e){if(!t||Zl)return"";Zl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Zl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function z_(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=Ql(t.type,!1),t;case 11:return t=Ql(t.type.render,!1),t;case 1:return t=Ql(t.type,!0),t;default:return""}}function ou(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case es:return"Fragment";case Jr:return"Portal";case ru:return"Profiler";case $d:return"StrictMode";case su:return"Suspense";case au:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case wm:return(t.displayName||"Context")+".Consumer";case Tm:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zd:return e=t.displayName||null,e!==null?e:ou(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return ou(t(e))}catch{}}return null}function V_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ou(e);case 8:return e===$d?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Cm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function H_(t){var e=Cm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=H_(t))}function Rm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Cm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Zo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function lu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function uh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function bm(t,e){e=e.checked,e!=null&&Yd(t,"checked",e,!1)}function cu(t,e){bm(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uu(t,e.type,n):e.hasOwnProperty("defaultValue")&&uu(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uu(t,e,n){(e!=="number"||Zo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Js=Array.isArray;function ds(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function du(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Js(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Pm(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function hh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $a,Nm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for($a=$a||document.createElement("div"),$a.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=$a.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G_=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){G_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function Dm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function Im(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Dm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var W_=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hu(t,e){if(e){if(W_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mu=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gu=null,fs=null,hs=null;function ph(t){if(t=ka(t)){if(typeof gu!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Ll(e),gu(t.stateNode,t.type,e))}}function Um(t){fs?hs?hs.push(t):hs=[t]:fs=t}function Fm(){if(fs){var t=fs,e=hs;if(hs=fs=null,ph(t),e)for(t=0;t<e.length;t++)ph(e[t])}}function Om(t,e){return t(e)}function km(){}var Jl=!1;function Bm(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return Om(t,e,n)}finally{Jl=!1,(fs!==null||hs!==null)&&(km(),Fm())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var i=Ll(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var _u=!1;if(Mi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){_u=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{_u=!1}function j_(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var sa=!1,Qo=null,Jo=!1,vu=null,X_={onError:function(t){sa=!0,Qo=t}};function q_(t,e,n,i,r,s,a,o,l){sa=!1,Qo=null,j_.apply(X_,arguments)}function Y_(t,e,n,i,r,s,a,o,l){if(q_.apply(this,arguments),sa){if(sa){var c=Qo;sa=!1,Qo=null}else throw Error(ee(198));Jo||(Jo=!0,vu=c)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function mh(t){if(Ur(t)!==t)throw Error(ee(188))}function $_(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return mh(r),t;if(s===i)return mh(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Vm(t){return t=$_(t),t!==null?Hm(t):null}function Hm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Hm(t);if(e!==null)return e;t=t.sibling}return null}var Gm=gn.unstable_scheduleCallback,gh=gn.unstable_cancelCallback,K_=gn.unstable_shouldYield,Z_=gn.unstable_requestPaint,yt=gn.unstable_now,Q_=gn.unstable_getCurrentPriorityLevel,Jd=gn.unstable_ImmediatePriority,Wm=gn.unstable_UserBlockingPriority,el=gn.unstable_NormalPriority,J_=gn.unstable_LowPriority,jm=gn.unstable_IdlePriority,Cl=null,Qn=null;function ev(t){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:iv,tv=Math.log,nv=Math.LN2;function iv(t){return t>>>=0,t===0?32:31-(tv(t)/nv|0)|0}var Ka=64,Za=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ea(o):(s&=a,s!==0&&(i=ea(s)))}else a=n&~r,a!==0?i=ea(a):s!==0&&(i=ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function rv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=rv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xm(){var t=Ka;return Ka<<=1,!(Ka&4194240)&&(Ka=64),t}function ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function av(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function qm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ym,tf,$m,Km,Zm,Su=!1,Qa=[],Yi=null,$i=null,Ki=null,ga=new Map,_a=new Map,Hi=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _h(t,e){switch(t){case"focusin":case"focusout":Yi=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Bs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ka(e),e!==null&&tf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function lv(t,e,n,i,r){switch(e){case"focusin":return Yi=Bs(Yi,t,e,n,i,r),!0;case"dragenter":return $i=Bs($i,t,e,n,i,r),!0;case"mouseover":return Ki=Bs(Ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ga.set(s,Bs(ga.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_a.set(s,Bs(_a.get(s)||null,t,e,n,i,r)),!0}return!1}function Qm(t){var e=yr(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=zm(n),e!==null){t.blockedOn=e,Zm(t.priority,function(){$m(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=yu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);mu=i,n.target.dispatchEvent(i),mu=null}else return e=ka(n),e!==null&&tf(e),t.blockedOn=n,!1;e.shift()}return!0}function vh(t,e,n){Uo(t)&&n.delete(e)}function cv(){Su=!1,Yi!==null&&Uo(Yi)&&(Yi=null),$i!==null&&Uo($i)&&($i=null),Ki!==null&&Uo(Ki)&&(Ki=null),ga.forEach(vh),_a.forEach(vh)}function zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Su||(Su=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,cv)))}function va(t){function e(r){return zs(r,t)}if(0<Qa.length){zs(Qa[0],t);for(var n=1;n<Qa.length;n++){var i=Qa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Yi!==null&&zs(Yi,t),$i!==null&&zs($i,t),Ki!==null&&zs(Ki,t),ga.forEach(e),_a.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)Qm(n),n.blockedOn===null&&Hi.shift()}var ps=bi.ReactCurrentBatchConfig,nl=!0;function uv(t,e,n,i){var r=tt,s=ps.transition;ps.transition=null;try{tt=1,nf(t,e,n,i)}finally{tt=r,ps.transition=s}}function dv(t,e,n,i){var r=tt,s=ps.transition;ps.transition=null;try{tt=4,nf(t,e,n,i)}finally{tt=r,ps.transition=s}}function nf(t,e,n,i){if(nl){var r=yu(t,e,n,i);if(r===null)uc(t,e,i,il,n),_h(t,i);else if(lv(r,t,e,n,i))i.stopPropagation();else if(_h(t,i),e&4&&-1<ov.indexOf(t)){for(;r!==null;){var s=ka(r);if(s!==null&&Ym(s),s=yu(t,e,n,i),s===null&&uc(t,e,i,il,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else uc(t,e,i,null,n)}}var il=null;function yu(t,e,n,i){if(il=null,t=Qd(i),t=yr(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return il=t,null}function Jm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Q_()){case Jd:return 1;case Wm:return 4;case el:case J_:return 16;case jm:return 536870912;default:return 16}default:return 16}}var ji=null,rf=null,Fo=null;function eg(){if(Fo)return Fo;var t,e=rf,n=e.length,i,r="value"in ji?ji.value:ji.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Fo=r.slice(t,1<i?1-i:void 0)}function Oo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ja(){return!0}function xh(){return!1}function vn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ja:xh,this.isPropagationStopped=xh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ja)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ja)},persist:function(){},isPersistent:Ja}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sf=vn(Ns),Oa=gt({},Ns,{view:0,detail:0}),fv=vn(Oa),tc,nc,Vs,Rl=gt({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:af,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vs&&(Vs&&t.type==="mousemove"?(tc=t.screenX-Vs.screenX,nc=t.screenY-Vs.screenY):nc=tc=0,Vs=t),tc)},movementY:function(t){return"movementY"in t?t.movementY:nc}}),Sh=vn(Rl),hv=gt({},Rl,{dataTransfer:0}),pv=vn(hv),mv=gt({},Oa,{relatedTarget:0}),ic=vn(mv),gv=gt({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),_v=vn(gv),vv=gt({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xv=vn(vv),Sv=gt({},Ns,{data:0}),yh=vn(Sv),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ev={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ev[t])?!!e[t]:!1}function af(){return Tv}var wv=gt({},Oa,{key:function(t){if(t.key){var e=yv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Oo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:af,charCode:function(t){return t.type==="keypress"?Oo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Oo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Av=vn(wv),Cv=gt({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Mh=vn(Cv),Rv=gt({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:af}),bv=vn(Rv),Pv=gt({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=vn(Pv),Nv=gt({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dv=vn(Nv),Iv=[9,13,27,32],of=Mi&&"CompositionEvent"in window,aa=null;Mi&&"documentMode"in document&&(aa=document.documentMode);var Uv=Mi&&"TextEvent"in window&&!aa,tg=Mi&&(!of||aa&&8<aa&&11>=aa),Eh=" ",Th=!1;function ng(t,e){switch(t){case"keyup":return Iv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ig(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function Fv(t,e){switch(t){case"compositionend":return ig(e);case"keypress":return e.which!==32?null:(Th=!0,Eh);case"textInput":return t=e.data,t===Eh&&Th?null:t;default:return null}}function Ov(t,e){if(ts)return t==="compositionend"||!of&&ng(t,e)?(t=eg(),Fo=rf=ji=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tg&&e.locale!=="ko"?null:e.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!kv[t.type]:e==="textarea"}function rg(t,e,n,i){Um(i),e=rl(e,"onChange"),0<e.length&&(n=new sf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var oa=null,xa=null;function Bv(t){mg(t,0)}function bl(t){var e=rs(t);if(Rm(e))return t}function zv(t,e){if(t==="change")return e}var sg=!1;if(Mi){var rc;if(Mi){var sc="oninput"in document;if(!sc){var Ah=document.createElement("div");Ah.setAttribute("oninput","return;"),sc=typeof Ah.oninput=="function"}rc=sc}else rc=!1;sg=rc&&(!document.documentMode||9<document.documentMode)}function Ch(){oa&&(oa.detachEvent("onpropertychange",ag),xa=oa=null)}function ag(t){if(t.propertyName==="value"&&bl(xa)){var e=[];rg(e,xa,t,Qd(t)),Bm(Bv,e)}}function Vv(t,e,n){t==="focusin"?(Ch(),oa=e,xa=n,oa.attachEvent("onpropertychange",ag)):t==="focusout"&&Ch()}function Hv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(xa)}function Gv(t,e){if(t==="click")return bl(e)}function Wv(t,e){if(t==="input"||t==="change")return bl(e)}function jv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Vn=typeof Object.is=="function"?Object.is:jv;function Sa(t,e){if(Vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!iu.call(e,r)||!Vn(t[r],e[r]))return!1}return!0}function Rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bh(t,e){var n=Rh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rh(n)}}function og(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?og(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function lg(){for(var t=window,e=Zo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Zo(t.document)}return e}function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Xv(t){var e=lg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&og(n.ownerDocument.documentElement,n)){if(i!==null&&lf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=bh(n,s);var a=bh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qv=Mi&&"documentMode"in document&&11>=document.documentMode,ns=null,Mu=null,la=null,Eu=!1;function Ph(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Eu||ns==null||ns!==Zo(i)||(i=ns,"selectionStart"in i&&lf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&Sa(la,i)||(la=i,i=rl(Mu,"onSelect"),0<i.length&&(e=new sf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ns)))}function eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var is={animationend:eo("Animation","AnimationEnd"),animationiteration:eo("Animation","AnimationIteration"),animationstart:eo("Animation","AnimationStart"),transitionend:eo("Transition","TransitionEnd")},ac={},cg={};Mi&&(cg=document.createElement("div").style,"AnimationEvent"in window||(delete is.animationend.animation,delete is.animationiteration.animation,delete is.animationstart.animation),"TransitionEvent"in window||delete is.transitionend.transition);function Pl(t){if(ac[t])return ac[t];if(!is[t])return t;var e=is[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cg)return ac[t]=e[n];return t}var ug=Pl("animationend"),dg=Pl("animationiteration"),fg=Pl("animationstart"),hg=Pl("transitionend"),pg=new Map,Lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){pg.set(t,e),Ir(e,[t])}for(var oc=0;oc<Lh.length;oc++){var lc=Lh[oc],Yv=lc.toLowerCase(),$v=lc[0].toUpperCase()+lc.slice(1);sr(Yv,"on"+$v)}sr(ug,"onAnimationEnd");sr(dg,"onAnimationIteration");sr(fg,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(hg,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Nh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Y_(i,e,void 0,t),t.currentTarget=null}function mg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Nh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Nh(r,o,c),s=l}}}if(Jo)throw t=vu,Jo=!1,vu=null,t}function dt(t,e){var n=e[Ru];n===void 0&&(n=e[Ru]=new Set);var i=t+"__bubble";n.has(i)||(gg(e,t,2,!1),n.add(i))}function cc(t,e,n){var i=0;e&&(i|=4),gg(n,t,i,e)}var to="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[to]){t[to]=!0,Em.forEach(function(n){n!=="selectionchange"&&(Kv.has(n)||cc(n,!1,t),cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[to]||(e[to]=!0,cc("selectionchange",!1,e))}}function gg(t,e,n,i){switch(Jm(e)){case 1:var r=uv;break;case 4:r=dv;break;default:r=nf}n=r.bind(null,e,n,t),r=void 0,!_u||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function uc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=yr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Bm(function(){var c=s,f=Qd(n),h=[];e:{var d=pg.get(t);if(d!==void 0){var m=sf,_=t;switch(t){case"keypress":if(Oo(n)===0)break e;case"keydown":case"keyup":m=Av;break;case"focusin":_="focus",m=ic;break;case"focusout":_="blur",m=ic;break;case"beforeblur":case"afterblur":m=ic;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=bv;break;case ug:case dg:case fg:m=_v;break;case hg:m=Lv;break;case"scroll":m=fv;break;case"wheel":m=Dv;break;case"copy":case"cut":case"paste":m=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Mh}var T=(e&4)!==0,g=!T&&t==="scroll",u=T?d!==null?d+"Capture":null:d;T=[];for(var p=c,S;p!==null;){S=p;var M=S.stateNode;if(S.tag===5&&M!==null&&(S=M,u!==null&&(M=ma(p,u),M!=null&&T.push(Ma(p,M,S)))),g)break;p=p.return}0<T.length&&(d=new m(d,_,null,n,f),h.push({event:d,listeners:T}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==mu&&(_=n.relatedTarget||n.fromElement)&&(yr(_)||_[Ei]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?yr(_):null,_!==null&&(g=Ur(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(T=Sh,M="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(T=Mh,M="onPointerLeave",u="onPointerEnter",p="pointer"),g=m==null?d:rs(m),S=_==null?d:rs(_),d=new T(M,p+"leave",m,n,f),d.target=g,d.relatedTarget=S,M=null,yr(f)===c&&(T=new T(u,p+"enter",_,n,f),T.target=S,T.relatedTarget=g,M=T),g=M,m&&_)t:{for(T=m,u=_,p=0,S=T;S;S=kr(S))p++;for(S=0,M=u;M;M=kr(M))S++;for(;0<p-S;)T=kr(T),p--;for(;0<S-p;)u=kr(u),S--;for(;p--;){if(T===u||u!==null&&T===u.alternate)break t;T=kr(T),u=kr(u)}T=null}else T=null;m!==null&&Dh(h,d,m,T,!1),_!==null&&g!==null&&Dh(h,g,_,T,!0)}}e:{if(d=c?rs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var C=zv;else if(wh(d))if(sg)C=Wv;else{C=Hv;var R=Vv}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=Gv);if(C&&(C=C(t,c))){rg(h,C,n,f);break e}R&&R(t,d,c),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&uu(d,"number",d.value)}switch(R=c?rs(c):window,t){case"focusin":(wh(R)||R.contentEditable==="true")&&(ns=R,Mu=c,la=null);break;case"focusout":la=Mu=ns=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,Ph(h,n,f);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":Ph(h,n,f)}var b;if(of)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else ts?ng(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(tg&&n.locale!=="ko"&&(ts||y!=="onCompositionStart"?y==="onCompositionEnd"&&ts&&(b=eg()):(ji=f,rf="value"in ji?ji.value:ji.textContent,ts=!0)),R=rl(c,y),0<R.length&&(y=new yh(y,t,null,n,f),h.push({event:y,listeners:R}),b?y.data=b:(b=ig(n),b!==null&&(y.data=b)))),(b=Uv?Fv(t,n):Ov(t,n))&&(c=rl(c,"onBeforeInput"),0<c.length&&(f=new yh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=b))}mg(h,e)})}function Ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ma(t,n),s!=null&&i.unshift(Ma(t,s,r)),s=ma(t,e),s!=null&&i.push(Ma(t,s,r))),t=t.return}return i}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=ma(n,s),l!=null&&a.unshift(Ma(n,l,o))):r||(l=ma(n,s),l!=null&&a.push(Ma(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Zv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function Ih(t){return(typeof t=="string"?t:""+t).replace(Zv,`
`).replace(Qv,"")}function no(t,e,n){if(e=Ih(e),Ih(t)!==e&&n)throw Error(ee(425))}function sl(){}var Tu=null,wu=null;function Au(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,ex=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(t){return Uh.resolve(null).then(t).catch(tx)}:Cu;function tx(t){setTimeout(function(){throw t})}function dc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),va(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);va(e)}function Zi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),$n="__reactFiber$"+Ds,Ea="__reactProps$"+Ds,Ei="__reactContainer$"+Ds,Ru="__reactEvents$"+Ds,nx="__reactListeners$"+Ds,ix="__reactHandles$"+Ds;function yr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ei]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fh(t);t!==null;){if(n=t[$n])return n;t=Fh(t)}return e}t=n,n=t.parentNode}return null}function ka(t){return t=t[$n]||t[Ei],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Ll(t){return t[Ea]||null}var bu=[],ss=-1;function ar(t){return{current:t}}function ft(t){0>ss||(t.current=bu[ss],bu[ss]=null,ss--)}function ut(t,e){ss++,bu[ss]=t.current,t.current=e}var ir={},Yt=ar(ir),sn=ar(!1),Rr=ir;function Ss(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function al(){ft(sn),ft(Yt)}function Oh(t,e,n){if(Yt.current!==ir)throw Error(ee(168));ut(Yt,e),ut(sn,n)}function _g(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,V_(t)||"Unknown",r));return gt({},n,i)}function ol(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Rr=Yt.current,ut(Yt,t),ut(sn,sn.current),!0}function kh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=_g(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,ft(sn),ft(Yt),ut(Yt,t)):ft(sn),ut(sn,n)}var hi=null,Nl=!1,fc=!1;function vg(t){hi===null?hi=[t]:hi.push(t)}function rx(t){Nl=!0,vg(t)}function or(){if(!fc&&hi!==null){fc=!0;var t=0,e=tt;try{var n=hi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,Nl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),Gm(Jd,or),r}finally{tt=e,fc=!1}}return null}var as=[],os=0,ll=null,cl=0,yn=[],Mn=0,br=null,mi=1,gi="";function gr(t,e){as[os++]=cl,as[os++]=ll,ll=t,cl=e}function xg(t,e,n){yn[Mn++]=mi,yn[Mn++]=gi,yn[Mn++]=br,br=t;var i=mi;t=gi;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,mi=1<<32-Bn(e)+r|n<<r|i,gi=s+t}else mi=1<<s|n<<r|i,gi=t}function cf(t){t.return!==null&&(gr(t,1),xg(t,1,0))}function uf(t){for(;t===ll;)ll=as[--os],as[os]=null,cl=as[--os],as[os]=null;for(;t===br;)br=yn[--Mn],yn[Mn]=null,gi=yn[--Mn],yn[Mn]=null,mi=yn[--Mn],yn[Mn]=null}var pn=null,hn=null,ht=!1,Un=null;function Sg(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Bh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Zi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function Pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lu(t){if(ht){var e=hn;if(e){var n=e;if(!Bh(t,e)){if(Pu(t))throw Error(ee(418));e=Zi(n.nextSibling);var i=pn;e&&Bh(t,e)?Sg(i,n):(t.flags=t.flags&-4097|2,ht=!1,pn=t)}}else{if(Pu(t))throw Error(ee(418));t.flags=t.flags&-4097|2,ht=!1,pn=t}}}function zh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function io(t){if(t!==pn)return!1;if(!ht)return zh(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Au(t.type,t.memoizedProps)),e&&(e=hn)){if(Pu(t))throw yg(),Error(ee(418));for(;e;)Sg(t,e),e=Zi(e.nextSibling)}if(zh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Zi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Zi(t.stateNode.nextSibling):null;return!0}function yg(){for(var t=hn;t;)t=Zi(t.nextSibling)}function ys(){hn=pn=null,ht=!1}function df(t){Un===null?Un=[t]:Un.push(t)}var sx=bi.ReactCurrentBatchConfig;function Hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function ro(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vh(t){var e=t._init;return e(t._payload)}function Mg(t){function e(u,p){if(t){var S=u.deletions;S===null?(u.deletions=[p],u.flags|=16):S.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=tr(u,p),u.index=0,u.sibling=null,u}function s(u,p,S){return u.index=S,t?(S=u.alternate,S!==null?(S=S.index,S<p?(u.flags|=2,p):S):(u.flags|=2,p)):(u.flags|=1048576,p)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,p,S,M){return p===null||p.tag!==6?(p=xc(S,u.mode,M),p.return=u,p):(p=r(p,S),p.return=u,p)}function l(u,p,S,M){var C=S.type;return C===es?f(u,p,S.props.children,M,S.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zi&&Vh(C)===p.type)?(M=r(p,S.props),M.ref=Hs(u,p,S),M.return=u,M):(M=Wo(S.type,S.key,S.props,null,u.mode,M),M.ref=Hs(u,p,S),M.return=u,M)}function c(u,p,S,M){return p===null||p.tag!==4||p.stateNode.containerInfo!==S.containerInfo||p.stateNode.implementation!==S.implementation?(p=Sc(S,u.mode,M),p.return=u,p):(p=r(p,S.children||[]),p.return=u,p)}function f(u,p,S,M,C){return p===null||p.tag!==7?(p=Cr(S,u.mode,M,C),p.return=u,p):(p=r(p,S),p.return=u,p)}function h(u,p,S){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xc(""+p,u.mode,S),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case qa:return S=Wo(p.type,p.key,p.props,null,u.mode,S),S.ref=Hs(u,null,p),S.return=u,S;case Jr:return p=Sc(p,u.mode,S),p.return=u,p;case zi:var M=p._init;return h(u,M(p._payload),S)}if(Js(p)||Os(p))return p=Cr(p,u.mode,S,null),p.return=u,p;ro(u,p)}return null}function d(u,p,S,M){var C=p!==null?p.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return C!==null?null:o(u,p,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case qa:return S.key===C?l(u,p,S,M):null;case Jr:return S.key===C?c(u,p,S,M):null;case zi:return C=S._init,d(u,p,C(S._payload),M)}if(Js(S)||Os(S))return C!==null?null:f(u,p,S,M,null);ro(u,S)}return null}function m(u,p,S,M,C){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(S)||null,o(p,u,""+M,C);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case qa:return u=u.get(M.key===null?S:M.key)||null,l(p,u,M,C);case Jr:return u=u.get(M.key===null?S:M.key)||null,c(p,u,M,C);case zi:var R=M._init;return m(u,p,S,R(M._payload),C)}if(Js(M)||Os(M))return u=u.get(S)||null,f(p,u,M,C,null);ro(p,M)}return null}function _(u,p,S,M){for(var C=null,R=null,b=p,y=p=0,w=null;b!==null&&y<S.length;y++){b.index>y?(w=b,b=null):w=b.sibling;var k=d(u,b,S[y],M);if(k===null){b===null&&(b=w);break}t&&b&&k.alternate===null&&e(u,b),p=s(k,p,y),R===null?C=k:R.sibling=k,R=k,b=w}if(y===S.length)return n(u,b),ht&&gr(u,y),C;if(b===null){for(;y<S.length;y++)b=h(u,S[y],M),b!==null&&(p=s(b,p,y),R===null?C=b:R.sibling=b,R=b);return ht&&gr(u,y),C}for(b=i(u,b);y<S.length;y++)w=m(b,u,y,S[y],M),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?y:w.key),p=s(w,p,y),R===null?C=w:R.sibling=w,R=w);return t&&b.forEach(function(P){return e(u,P)}),ht&&gr(u,y),C}function T(u,p,S,M){var C=Os(S);if(typeof C!="function")throw Error(ee(150));if(S=C.call(S),S==null)throw Error(ee(151));for(var R=C=null,b=p,y=p=0,w=null,k=S.next();b!==null&&!k.done;y++,k=S.next()){b.index>y?(w=b,b=null):w=b.sibling;var P=d(u,b,k.value,M);if(P===null){b===null&&(b=w);break}t&&b&&P.alternate===null&&e(u,b),p=s(P,p,y),R===null?C=P:R.sibling=P,R=P,b=w}if(k.done)return n(u,b),ht&&gr(u,y),C;if(b===null){for(;!k.done;y++,k=S.next())k=h(u,k.value,M),k!==null&&(p=s(k,p,y),R===null?C=k:R.sibling=k,R=k);return ht&&gr(u,y),C}for(b=i(u,b);!k.done;y++,k=S.next())k=m(b,u,y,k.value,M),k!==null&&(t&&k.alternate!==null&&b.delete(k.key===null?y:k.key),p=s(k,p,y),R===null?C=k:R.sibling=k,R=k);return t&&b.forEach(function(V){return e(u,V)}),ht&&gr(u,y),C}function g(u,p,S,M){if(typeof S=="object"&&S!==null&&S.type===es&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case qa:e:{for(var C=S.key,R=p;R!==null;){if(R.key===C){if(C=S.type,C===es){if(R.tag===7){n(u,R.sibling),p=r(R,S.props.children),p.return=u,u=p;break e}}else if(R.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===zi&&Vh(C)===R.type){n(u,R.sibling),p=r(R,S.props),p.ref=Hs(u,R,S),p.return=u,u=p;break e}n(u,R);break}else e(u,R);R=R.sibling}S.type===es?(p=Cr(S.props.children,u.mode,M,S.key),p.return=u,u=p):(M=Wo(S.type,S.key,S.props,null,u.mode,M),M.ref=Hs(u,p,S),M.return=u,u=M)}return a(u);case Jr:e:{for(R=S.key;p!==null;){if(p.key===R)if(p.tag===4&&p.stateNode.containerInfo===S.containerInfo&&p.stateNode.implementation===S.implementation){n(u,p.sibling),p=r(p,S.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=Sc(S,u.mode,M),p.return=u,u=p}return a(u);case zi:return R=S._init,g(u,p,R(S._payload),M)}if(Js(S))return _(u,p,S,M);if(Os(S))return T(u,p,S,M);ro(u,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,S),p.return=u,u=p):(n(u,p),p=xc(S,u.mode,M),p.return=u,u=p),a(u)):n(u,p)}return g}var Ms=Mg(!0),Eg=Mg(!1),ul=ar(null),dl=null,ls=null,ff=null;function hf(){ff=ls=dl=null}function pf(t){var e=ul.current;ft(ul),t._currentValue=e}function Nu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){dl=t,ff=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function An(t){var e=t._currentValue;if(ff!==t)if(t={context:t,memoizedValue:e,next:null},ls===null){if(dl===null)throw Error(ee(308));ls=t,dl.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return e}var Mr=null;function mf(t){Mr===null?Mr=[t]:Mr.push(t)}function Tg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,mf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ti(t,i)}function Ti(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function gf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ti(t,n)}return r=i.interleaved,r===null?(e.next=e,mf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ti(t,n)}function ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}function Hh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function fl(t,e,n,i){var r=t.updateQueue;Vi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=c:o.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=c=l=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,T=o;switch(d=e,m=n,T.tag){case 1:if(_=T.payload,typeof _=="function"){h=_.call(m,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=T.payload,d=typeof _=="function"?_.call(m,h,d):_,d==null)break e;h=gt({},h,d);break e;case 2:Vi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=a,t.lanes=a,t.memoizedState=h}}function Gh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Ba={},Jn=ar(Ba),Ta=ar(Ba),wa=ar(Ba);function Er(t){if(t===Ba)throw Error(ee(174));return t}function _f(t,e){switch(ut(wa,e),ut(Ta,t),ut(Jn,Ba),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=fu(e,t)}ft(Jn),ut(Jn,e)}function Es(){ft(Jn),ft(Ta),ft(wa)}function Ag(t){Er(wa.current);var e=Er(Jn.current),n=fu(e,t.type);e!==n&&(ut(Ta,t),ut(Jn,n))}function vf(t){Ta.current===t&&(ft(Jn),ft(Ta))}var pt=ar(0);function hl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var hc=[];function xf(){for(var t=0;t<hc.length;t++)hc[t]._workInProgressVersionPrimary=null;hc.length=0}var Bo=bi.ReactCurrentDispatcher,pc=bi.ReactCurrentBatchConfig,Pr=0,mt=null,Ct=null,It=null,pl=!1,ca=!1,Aa=0,ax=0;function Ht(){throw Error(ee(321))}function Sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Vn(t[n],e[n]))return!1;return!0}function yf(t,e,n,i,r,s){if(Pr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bo.current=t===null||t.memoizedState===null?ux:dx,t=n(i,r),ca){s=0;do{if(ca=!1,Aa=0,25<=s)throw Error(ee(301));s+=1,It=Ct=null,e.updateQueue=null,Bo.current=fx,t=n(i,r)}while(ca)}if(Bo.current=ml,e=Ct!==null&&Ct.next!==null,Pr=0,It=Ct=mt=null,pl=!1,e)throw Error(ee(300));return t}function Mf(){var t=Aa!==0;return Aa=0,t}function qn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?mt.memoizedState=It=t:It=It.next=t,It}function Cn(){if(Ct===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=It===null?mt.memoizedState:It.next;if(e!==null)It=e,Ct=t;else{if(t===null)throw Error(ee(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?mt.memoizedState=It=t:It=It.next=t}return It}function Ca(t,e){return typeof e=="function"?e(t):e}function mc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var f=c.lane;if((Pr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,mt.lanes|=f,Lr|=f}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Vn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function gc(t){var e=Cn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Vn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Cg(){}function Rg(t,e){var n=mt,i=Cn(),r=e(),s=!Vn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Ef(Lg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,Ra(9,Pg.bind(null,n,i,r,e),void 0,null),Ut===null)throw Error(ee(349));Pr&30||bg(n,e,r)}return r}function bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Pg(t,e,n,i){e.value=n,e.getSnapshot=i,Ng(e)&&Dg(t)}function Lg(t,e,n){return n(function(){Ng(e)&&Dg(t)})}function Ng(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Vn(t,n)}catch{return!0}}function Dg(t){var e=Ti(t,1);e!==null&&zn(e,t,1,-1)}function Wh(t){var e=qn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:t},e.queue=t,t=t.dispatch=cx.bind(null,mt,t),[e.memoizedState,t]}function Ra(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ig(){return Cn().memoizedState}function zo(t,e,n,i){var r=qn();mt.flags|=t,r.memoizedState=Ra(1|e,n,void 0,i===void 0?null:i)}function Dl(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var a=Ct.memoizedState;if(s=a.destroy,i!==null&&Sf(i,a.deps)){r.memoizedState=Ra(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Ra(1|e,n,s,i)}function jh(t,e){return zo(8390656,8,t,e)}function Ef(t,e){return Dl(2048,8,t,e)}function Ug(t,e){return Dl(4,2,t,e)}function Fg(t,e){return Dl(4,4,t,e)}function Og(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kg(t,e,n){return n=n!=null?n.concat([t]):null,Dl(4,4,Og.bind(null,e,t),n)}function Tf(){}function Bg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function zg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Sf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Vg(t,e,n){return Pr&21?(Vn(n,e)||(n=Xm(),mt.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function ox(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=pc.transition;pc.transition={};try{t(!1),e()}finally{tt=n,pc.transition=i}}function Hg(){return Cn().memoizedState}function lx(t,e,n){var i=er(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Gg(t))Wg(e,n);else if(n=Tg(t,e,n,i),n!==null){var r=Zt();zn(n,t,i,r),jg(n,e,i)}}function cx(t,e,n){var i=er(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gg(t))Wg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Vn(o,a)){var l=e.interleaved;l===null?(r.next=r,mf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Tg(t,e,r,i),n!==null&&(r=Zt(),zn(n,t,i,r),jg(n,e,i))}}function Gg(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function Wg(t,e){ca=pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ef(t,n)}}var ml={readContext:An,useCallback:Ht,useContext:Ht,useEffect:Ht,useImperativeHandle:Ht,useInsertionEffect:Ht,useLayoutEffect:Ht,useMemo:Ht,useReducer:Ht,useRef:Ht,useState:Ht,useDebugValue:Ht,useDeferredValue:Ht,useTransition:Ht,useMutableSource:Ht,useSyncExternalStore:Ht,useId:Ht,unstable_isNewReconciler:!1},ux={readContext:An,useCallback:function(t,e){return qn().memoizedState=[t,e===void 0?null:e],t},useContext:An,useEffect:jh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zo(4194308,4,Og.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return zo(4,2,t,e)},useMemo:function(t,e){var n=qn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=qn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=lx.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=qn();return t={current:t},e.memoizedState=t},useState:Wh,useDebugValue:Tf,useDeferredValue:function(t){return qn().memoizedState=t},useTransition:function(){var t=Wh(!1),e=t[0];return t=ox.bind(null,t[1]),qn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=qn();if(ht){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Ut===null)throw Error(ee(349));Pr&30||bg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,jh(Lg.bind(null,i,s,t),[t]),i.flags|=2048,Ra(9,Pg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=qn(),e=Ut.identifierPrefix;if(ht){var n=gi,i=mi;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Aa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ax++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dx={readContext:An,useCallback:Bg,useContext:An,useEffect:Ef,useImperativeHandle:kg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:zg,useReducer:mc,useRef:Ig,useState:function(){return mc(Ca)},useDebugValue:Tf,useDeferredValue:function(t){var e=Cn();return Vg(e,Ct.memoizedState,t)},useTransition:function(){var t=mc(Ca)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Cg,useSyncExternalStore:Rg,useId:Hg,unstable_isNewReconciler:!1},fx={readContext:An,useCallback:Bg,useContext:An,useEffect:Ef,useImperativeHandle:kg,useInsertionEffect:Ug,useLayoutEffect:Fg,useMemo:zg,useReducer:gc,useRef:Ig,useState:function(){return gc(Ca)},useDebugValue:Tf,useDeferredValue:function(t){var e=Cn();return Ct===null?e.memoizedState=t:Vg(e,Ct.memoizedState,t)},useTransition:function(){var t=gc(Ca)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:Cg,useSyncExternalStore:Rg,useId:Hg,unstable_isNewReconciler:!1};function Dn(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Du(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Il={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=er(t),s=vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(zn(e,t,r,i),ko(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=er(t),s=vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(zn(e,t,r,i),ko(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=er(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Qi(t,r,i),e!==null&&(zn(e,t,i,n),ko(e,t,i))}};function Xh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Sa(n,i)||!Sa(r,s):!0}function Xg(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=An(s):(r=an(e)?Rr:Yt.current,i=e.contextTypes,s=(i=i!=null)?Ss(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Il,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function qh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Il.enqueueReplaceState(e,e.state,null)}function Iu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=An(s):(s=an(e)?Rr:Yt.current,r.context=Ss(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Du(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Il.enqueueReplaceState(r,r.state,null),fl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ts(t,e){try{var n="",i=e;do n+=z_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function _c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hx=typeof WeakMap=="function"?WeakMap:Map;function qg(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_l||(_l=!0,ju=i),Uu(t,e)},n}function Yg(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uu(t,e),typeof i!="function"&&(Ji===null?Ji=new Set([this]):Ji.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Yh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new hx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Cx.bind(null,t,e,n),e.then(t,t))}function $h(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Kh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,Qi(n,e,1))),n.lanes|=1),t)}var px=bi.ReactCurrentOwner,rn=!1;function Kt(t,e,n,i){e.child=t===null?Eg(e,null,n,i):Ms(e,t.child,n,i)}function Zh(t,e,n,i,r){n=n.render;var s=e.ref;return ms(e,r),i=yf(t,e,n,i,s,r),n=Mf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ht&&n&&cf(e),e.flags|=1,Kt(t,e,i,r),e.child)}function Qh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Nf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$g(t,e,s,i,r)):(t=Wo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Sa,n(a,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=tr(s,i),t.ref=e.ref,t.return=e,e.child=t}function $g(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Sa(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,wi(t,e,r)}return Fu(t,e,n,i,r)}function Kg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(us,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(us,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(us,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(us,fn),fn|=i;return Kt(t,e,r,n),e.child}function Zg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Fu(t,e,n,i,r){var s=an(n)?Rr:Yt.current;return s=Ss(e,s),ms(e,r),n=yf(t,e,n,i,s,r),i=Mf(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ht&&i&&cf(e),e.flags|=1,Kt(t,e,n,r),e.child)}function Jh(t,e,n,i,r){if(an(n)){var s=!0;ol(e)}else s=!1;if(ms(e,r),e.stateNode===null)Vo(t,e),Xg(e,n,i),Iu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=an(n)?Rr:Yt.current,c=Ss(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&qh(e,a,i,c),Vi=!1;var d=e.memoizedState;a.state=d,fl(e,i,a,r),l=e.memoizedState,o!==i||d!==l||sn.current||Vi?(typeof f=="function"&&(Du(e,n,f,i),l=e.memoizedState),(o=Vi||Xh(e,n,o,i,d,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,wg(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Dn(e.type,o),a.props=c,h=e.pendingProps,d=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=an(n)?Rr:Yt.current,l=Ss(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||d!==l)&&qh(e,a,i,l),Vi=!1,d=e.memoizedState,a.state=d,fl(e,i,a,r);var _=e.memoizedState;o!==h||d!==_||sn.current||Vi?(typeof m=="function"&&(Du(e,n,m,i),_=e.memoizedState),(c=Vi||Xh(e,n,c,i,d,_,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ou(t,e,n,i,s,r)}function Ou(t,e,n,i,r,s){Zg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&kh(e,n,!1),wi(t,e,s);i=e.stateNode,px.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ms(e,t.child,null,s),e.child=Ms(e,null,o,s)):Kt(t,e,o,s),e.memoizedState=i.state,r&&kh(e,n,!0),e.child}function Qg(t){var e=t.stateNode;e.pendingContext?Oh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Oh(t,e.context,!1),_f(t,e.containerInfo)}function ep(t,e,n,i,r){return ys(),df(r),e.flags|=256,Kt(t,e,n,i),e.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Bu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Jg(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(pt,r&1),t===null)return Lu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Ol(a,i,0,null),t=Cr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bu(n),e.memoizedState=ku,t):wf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return mx(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=tr(o,s):(s=Cr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Bu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ku,i}return s=t.child,t=s.sibling,i=tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function wf(t,e){return e=Ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function so(t,e,n,i){return i!==null&&df(i),Ms(e,t.child,null,n),t=wf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mx(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=_c(Error(ee(422))),so(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ol({mode:"visible",children:i.children},r,0,null),s=Cr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ms(e,t.child,null,a),e.child.memoizedState=Bu(a),e.memoizedState=ku,s);if(!(e.mode&1))return so(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ee(419)),i=_c(s,i,void 0),so(t,e,a,i)}if(o=(a&t.childLanes)!==0,rn||o){if(i=Ut,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ti(t,r),zn(i,t,r,-1))}return Lf(),i=_c(Error(ee(421))),so(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Rx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Zi(r.nextSibling),pn=e,ht=!0,Un=null,t!==null&&(yn[Mn++]=mi,yn[Mn++]=gi,yn[Mn++]=br,mi=t.id,gi=t.overflow,br=e),e=wf(e,i.children),e.flags|=4096,e)}function tp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Nu(t.return,e,n)}function vc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function e0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&tp(t,n,e);else if(t.tag===19)tp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&hl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),vc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&hl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}vc(e,!0,n,null,s);break;case"together":vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=tr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=tr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gx(t,e,n){switch(e.tag){case 3:Qg(e),ys();break;case 5:Ag(e);break;case 1:an(e.type)&&ol(e);break;case 4:_f(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(ul,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?Jg(t,e,n):(ut(pt,pt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);ut(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return e0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,Kg(t,e,n)}return wi(t,e,n)}var t0,zu,n0,i0;t0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zu=function(){};n0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Er(Jn.current);var s=null;switch(n){case"input":r=lu(t,r),i=lu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=du(t,r),i=du(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=sl)}hu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};i0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Gs(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function _x(t,e,n){var i=e.pendingProps;switch(uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return an(e.type)&&al(),Gt(e),null;case 3:return i=e.stateNode,Es(),ft(sn),ft(Yt),xf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(io(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Yu(Un),Un=null))),zu(t,e),Gt(e),null;case 5:vf(e);var r=Er(wa.current);if(n=e.type,t!==null&&e.stateNode!=null)n0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Gt(e),null}if(t=Er(Jn.current),io(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Ea]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<ta.length;r++)dt(ta[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":uh(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":fh(i,s),dt("invalid",i)}hu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&no(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&no(i.textContent,o,t),r=["children",""+o]):ha.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&dt("scroll",i)}switch(n){case"input":Ya(i),dh(i,s,!0);break;case"textarea":Ya(i),hh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[$n]=e,t[Ea]=i,t0(t,e,!1,!1),e.stateNode=t;e:{switch(a=pu(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ta.length;r++)dt(ta[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":uh(t,i),r=lu(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),dt("invalid",t);break;case"textarea":fh(t,i),r=du(t,i),dt("invalid",t);break;default:r=i}hu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Im(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Nm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&pa(t,l):typeof l=="number"&&pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&Yd(t,s,l,a))}switch(n){case"input":Ya(t),dh(t,i,!1);break;case"textarea":Ya(t),hh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ds(t,!!i.multiple,s,!1):i.defaultValue!=null&&ds(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)i0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Er(wa.current),Er(Jn.current),io(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:no(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&no(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Gt(e),null;case 13:if(ft(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&hn!==null&&e.mode&1&&!(e.flags&128))yg(),ys(),e.flags|=98560,s=!1;else if(s=io(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[$n]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Un!==null&&(Yu(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Rt===0&&(Rt=3):Lf())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Es(),zu(t,e),t===null&&ya(e.stateNode.containerInfo),Gt(e),null;case 10:return pf(e.type._context),Gt(e),null;case 17:return an(e.type)&&al(),Gt(e),null;case 19:if(ft(pt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Gs(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=hl(t),a!==null){for(e.flags|=128,Gs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>ws&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304)}else{if(!i)if(t=hl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return Gt(e),null}else 2*yt()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,i=!0,Gs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=pt.current,ut(pt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return Pf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function vx(t,e){switch(uf(e),e.tag){case 1:return an(e.type)&&al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),ft(sn),ft(Yt),xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vf(e),null;case 13:if(ft(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(pt),null;case 4:return Es(),null;case 10:return pf(e.type._context),null;case 22:case 23:return Pf(),null;case 24:return null;default:return null}}var ao=!1,Xt=!1,xx=typeof WeakSet=="function"?WeakSet:Set,ge=null;function cs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Vu(t,e,n){try{n()}catch(i){vt(t,e,i)}}var np=!1;function Sx(t,e){if(Tu=nl,t=lg(),lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(o=a),d===s&&++f===i&&(l=a),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(wu={focusedElem:t,selectionRange:n},nl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var T=_.memoizedProps,g=_.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?T:Dn(e.type,T),g);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(M){vt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return _=np,np=!1,_}function ua(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Vu(e,n,s)}r=r.next}while(r!==i)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Hu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function r0(t){var e=t.alternate;e!==null&&(t.alternate=null,r0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Ea],delete e[Ru],delete e[nx],delete e[ix])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function s0(t){return t.tag===5||t.tag===3||t.tag===4}function ip(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||s0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Gu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sl));else if(i!==4&&(t=t.child,t!==null))for(Gu(t,e,n),t=t.sibling;t!==null;)Gu(t,e,n),t=t.sibling}function Wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Ot=null,In=!1;function Di(t,e,n){for(n=n.child;n!==null;)a0(t,e,n),n=n.sibling}function a0(t,e,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:Xt||cs(n,e);case 6:var i=Ot,r=In;Ot=null,Di(t,e,n),Ot=i,In=r,Ot!==null&&(In?(t=Ot,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ot.removeChild(n.stateNode));break;case 18:Ot!==null&&(In?(t=Ot,n=n.stateNode,t.nodeType===8?dc(t.parentNode,n):t.nodeType===1&&dc(t,n),va(t)):dc(Ot,n.stateNode));break;case 4:i=Ot,r=In,Ot=n.stateNode.containerInfo,In=!0,Di(t,e,n),Ot=i,In=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Vu(n,e,a),r=r.next}while(r!==i)}Di(t,e,n);break;case 1:if(!Xt&&(cs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){vt(n,e,o)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Di(t,e,n),Xt=i):Di(t,e,n);break;default:Di(t,e,n)}}function rp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new xx),e.forEach(function(i){var r=bx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ot=o.stateNode,In=!1;break e;case 3:Ot=o.stateNode.containerInfo,In=!0;break e;case 4:Ot=o.stateNode.containerInfo,In=!0;break e}o=o.return}if(Ot===null)throw Error(ee(160));a0(s,a,r),Ot=null,In=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o0(e,t),e=e.sibling}function o0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(bn(e,t),Wn(t),i&4){try{ua(3,t,t.return),Ul(3,t)}catch(T){vt(t,t.return,T)}try{ua(5,t,t.return)}catch(T){vt(t,t.return,T)}}break;case 1:bn(e,t),Wn(t),i&512&&n!==null&&cs(n,n.return);break;case 5:if(bn(e,t),Wn(t),i&512&&n!==null&&cs(n,n.return),t.flags&32){var r=t.stateNode;try{pa(r,"")}catch(T){vt(t,t.return,T)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&bm(r,s),pu(o,a);var c=pu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?Im(r,h):f==="dangerouslySetInnerHTML"?Nm(r,h):f==="children"?pa(r,h):Yd(r,f,h,c)}switch(o){case"input":cu(r,s);break;case"textarea":Pm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ds(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?ds(r,!!s.multiple,s.defaultValue,!0):ds(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ea]=s}catch(T){vt(t,t.return,T)}}break;case 6:if(bn(e,t),Wn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(T){vt(t,t.return,T)}}break;case 3:if(bn(e,t),Wn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(T){vt(t,t.return,T)}break;case 4:bn(e,t),Wn(t);break;case 13:bn(e,t),Wn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Rf=yt())),i&4&&rp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(c=Xt)||f,bn(e,t),Xt=c):bn(e,t),Wn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ge=t,f=t.child;f!==null;){for(h=ge=f;ge!==null;){switch(d=ge,m=d.child,d.tag){case 0:case 11:case 14:case 15:ua(4,d,d.return);break;case 1:cs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(T){vt(i,n,T)}}break;case 5:cs(d,d.return);break;case 22:if(d.memoizedState!==null){ap(h);continue}}m!==null?(m.return=d,ge=m):ap(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Dm("display",a))}catch(T){vt(t,t.return,T)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(T){vt(t,t.return,T)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:bn(e,t),Wn(t),i&4&&rp(t);break;case 21:break;default:bn(e,t),Wn(t)}}function Wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(s0(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pa(r,""),i.flags&=-33);var s=ip(t);Wu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=ip(t);Gu(t,o,a);break;default:throw Error(ee(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function yx(t,e,n){ge=t,l0(t)}function l0(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ao;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Xt;o=ao;var c=Xt;if(ao=a,(Xt=l)&&!c)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?op(r):l!==null?(l.return=a,ge=l):op(r);for(;s!==null;)ge=s,l0(s),s=s.sibling;ge=r,ao=o,Xt=c}sp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):sp(t)}}function sp(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Ul(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Dn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&va(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Xt||e.flags&512&&Hu(e)}catch(d){vt(e,e.return,d)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function ap(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function op(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{Hu(e)}catch(l){vt(e,s,l)}break;case 5:var a=e.return;try{Hu(e)}catch(l){vt(e,a,l)}}}catch(l){vt(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var Mx=Math.ceil,gl=bi.ReactCurrentDispatcher,Af=bi.ReactCurrentOwner,wn=bi.ReactCurrentBatchConfig,Xe=0,Ut=null,wt=null,Bt=0,fn=0,us=ar(0),Rt=0,ba=null,Lr=0,Fl=0,Cf=0,da=null,nn=null,Rf=0,ws=1/0,fi=null,_l=!1,ju=null,Ji=null,oo=!1,Xi=null,vl=0,fa=0,Xu=null,Ho=-1,Go=0;function Zt(){return Xe&6?yt():Ho!==-1?Ho:Ho=yt()}function er(t){return t.mode&1?Xe&2&&Bt!==0?Bt&-Bt:sx.transition!==null?(Go===0&&(Go=Xm()),Go):(t=tt,t!==0||(t=window.event,t=t===void 0?16:Jm(t.type)),t):1}function zn(t,e,n,i){if(50<fa)throw fa=0,Xu=null,Error(ee(185));Fa(t,n,i),(!(Xe&2)||t!==Ut)&&(t===Ut&&(!(Xe&2)&&(Fl|=n),Rt===4&&Gi(t,Bt)),on(t,i),n===1&&Xe===0&&!(e.mode&1)&&(ws=yt()+500,Nl&&or()))}function on(t,e){var n=t.callbackNode;sv(t,e);var i=tl(t,t===Ut?Bt:0);if(i===0)n!==null&&gh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gh(n),e===1)t.tag===0?rx(lp.bind(null,t)):vg(lp.bind(null,t)),ex(function(){!(Xe&6)&&or()}),n=null;else{switch(qm(i)){case 1:n=Jd;break;case 4:n=Wm;break;case 16:n=el;break;case 536870912:n=jm;break;default:n=el}n=g0(n,c0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function c0(t,e){if(Ho=-1,Go=0,Xe&6)throw Error(ee(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var i=tl(t,t===Ut?Bt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=xl(t,i);else{e=i;var r=Xe;Xe|=2;var s=d0();(Ut!==t||Bt!==e)&&(fi=null,ws=yt()+500,Ar(t,e));do try{wx();break}catch(o){u0(t,o)}while(!0);hf(),gl.current=s,Xe=r,wt!==null?e=0:(Ut=null,Bt=0,e=Rt)}if(e!==0){if(e===2&&(r=xu(t),r!==0&&(i=r,e=qu(t,r))),e===1)throw n=ba,Ar(t,0),Gi(t,i),on(t,yt()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ex(r)&&(e=xl(t,i),e===2&&(s=xu(t),s!==0&&(i=s,e=qu(t,s))),e===1))throw n=ba,Ar(t,0),Gi(t,i),on(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:_r(t,nn,fi);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=Rf+500-yt(),10<e)){if(tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cu(_r.bind(null,t,nn,fi),e);break}_r(t,nn,fi);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Mx(i/1960))-i,10<i){t.timeoutHandle=Cu(_r.bind(null,t,nn,fi),i);break}_r(t,nn,fi);break;case 5:_r(t,nn,fi);break;default:throw Error(ee(329))}}}return on(t,yt()),t.callbackNode===n?c0.bind(null,t):null}function qu(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=xl(t,e),t!==2&&(e=nn,nn=n,e!==null&&Yu(e)),t}function Yu(t){nn===null?nn=t:nn.push.apply(nn,t)}function Ex(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Vn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~Cf,e&=~Fl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function lp(t){if(Xe&6)throw Error(ee(327));gs();var e=tl(t,0);if(!(e&1))return on(t,yt()),null;var n=xl(t,e);if(t.tag!==0&&n===2){var i=xu(t);i!==0&&(e=i,n=qu(t,i))}if(n===1)throw n=ba,Ar(t,0),Gi(t,e),on(t,yt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,nn,fi),on(t,yt()),null}function bf(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(ws=yt()+500,Nl&&or())}}function Nr(t){Xi!==null&&Xi.tag===0&&!(Xe&6)&&gs();var e=Xe;Xe|=1;var n=wn.transition,i=tt;try{if(wn.transition=null,tt=1,t)return t()}finally{tt=i,wn.transition=n,Xe=e,!(Xe&6)&&or()}}function Pf(){fn=us.current,ft(us)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Jv(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(uf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&al();break;case 3:Es(),ft(sn),ft(Yt),xf();break;case 5:vf(i);break;case 4:Es();break;case 13:ft(pt);break;case 19:ft(pt);break;case 10:pf(i.type._context);break;case 22:case 23:Pf()}n=n.return}if(Ut=t,wt=t=tr(t.current,null),Bt=fn=e,Rt=0,ba=null,Cf=Fl=Lr=0,nn=da=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Mr=null}return t}function u0(t,e){do{var n=wt;try{if(hf(),Bo.current=ml,pl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}pl=!1}if(Pr=0,It=Ct=mt=null,ca=!1,Aa=0,Af.current=null,n===null||n.return===null){Rt=1,ba=e,wt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Bt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=$h(a);if(m!==null){m.flags&=-257,Kh(m,a,o,s,e),m.mode&1&&Yh(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var T=new Set;T.add(l),e.updateQueue=T}else _.add(l);break e}else{if(!(e&1)){Yh(s,c,e),Lf();break e}l=Error(ee(426))}}else if(ht&&o.mode&1){var g=$h(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Kh(g,a,o,s,e),df(Ts(l,o));break e}}s=l=Ts(l,o),Rt!==4&&(Rt=2),da===null?da=[s]:da.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=qg(s,l,e);Hh(s,u);break e;case 1:o=l;var p=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Ji===null||!Ji.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Yg(s,o,e);Hh(s,M);break e}}s=s.return}while(s!==null)}h0(n)}catch(C){e=C,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function d0(){var t=gl.current;return gl.current=ml,t===null?ml:t}function Lf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ut===null||!(Lr&268435455)&&!(Fl&268435455)||Gi(Ut,Bt)}function xl(t,e){var n=Xe;Xe|=2;var i=d0();(Ut!==t||Bt!==e)&&(fi=null,Ar(t,e));do try{Tx();break}catch(r){u0(t,r)}while(!0);if(hf(),Xe=n,gl.current=i,wt!==null)throw Error(ee(261));return Ut=null,Bt=0,Rt}function Tx(){for(;wt!==null;)f0(wt)}function wx(){for(;wt!==null&&!K_();)f0(wt)}function f0(t){var e=m0(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?h0(t):wt=e,Af.current=null}function h0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=vx(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,wt=null;return}}else if(n=_x(n,e,fn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Rt===0&&(Rt=5)}function _r(t,e,n){var i=tt,r=wn.transition;try{wn.transition=null,tt=1,Ax(t,e,n,i)}finally{wn.transition=r,tt=i}return null}function Ax(t,e,n,i){do gs();while(Xi!==null);if(Xe&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(av(t,s),t===Ut&&(wt=Ut=null,Bt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||oo||(oo=!0,g0(el,function(){return gs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var a=tt;tt=1;var o=Xe;Xe|=4,Af.current=null,Sx(t,n),o0(n,t),Xv(wu),nl=!!Tu,wu=Tu=null,t.current=n,yx(n),Z_(),Xe=o,tt=a,wn.transition=s}else t.current=n;if(oo&&(oo=!1,Xi=t,vl=r),s=t.pendingLanes,s===0&&(Ji=null),ev(n.stateNode),on(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_l)throw _l=!1,t=ju,ju=null,t;return vl&1&&t.tag!==0&&gs(),s=t.pendingLanes,s&1?t===Xu?fa++:(fa=0,Xu=t):fa=0,or(),null}function gs(){if(Xi!==null){var t=qm(vl),e=wn.transition,n=tt;try{if(wn.transition=null,tt=16>t?16:t,Xi===null)var i=!1;else{if(t=Xi,Xi=null,vl=0,Xe&6)throw Error(ee(331));var r=Xe;for(Xe|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ge=c;ge!==null;){var f=ge;switch(f.tag){case 0:case 11:case 15:ua(8,f,s)}var h=f.child;if(h!==null)h.return=f,ge=h;else for(;ge!==null;){f=ge;var d=f.sibling,m=f.return;if(r0(f),f===c){ge=null;break}if(d!==null){d.return=m,ge=d;break}ge=m}}}var _=s.alternate;if(_!==null){var T=_.child;if(T!==null){_.child=null;do{var g=T.sibling;T.sibling=null,T=g}while(T!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ua(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ge=u;break e}ge=s.return}}var p=t.current;for(ge=p;ge!==null;){a=ge;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,ge=S;else e:for(a=p;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ul(9,o)}}catch(C){vt(o,o.return,C)}if(o===a){ge=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,ge=M;break e}ge=o.return}}if(Xe=r,or(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Cl,t)}catch{}i=!0}return i}finally{tt=n,wn.transition=e}}return!1}function cp(t,e,n){e=Ts(n,e),e=qg(t,e,1),t=Qi(t,e,1),e=Zt(),t!==null&&(Fa(t,1,e),on(t,e))}function vt(t,e,n){if(t.tag===3)cp(t,t,n);else for(;e!==null;){if(e.tag===3){cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ji===null||!Ji.has(i))){t=Ts(n,t),t=Yg(e,t,1),e=Qi(e,t,1),t=Zt(),e!==null&&(Fa(e,1,t),on(e,t));break}}e=e.return}}function Cx(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Ut===t&&(Bt&n)===n&&(Rt===4||Rt===3&&(Bt&130023424)===Bt&&500>yt()-Rf?Ar(t,0):Cf|=n),on(t,e)}function p0(t,e){e===0&&(t.mode&1?(e=Za,Za<<=1,!(Za&130023424)&&(Za=4194304)):e=1);var n=Zt();t=Ti(t,e),t!==null&&(Fa(t,e,n),on(t,n))}function Rx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),p0(t,n)}function bx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),p0(t,n)}var m0;m0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||sn.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,gx(t,e,n);rn=!!(t.flags&131072)}else rn=!1,ht&&e.flags&1048576&&xg(e,cl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Vo(t,e),t=e.pendingProps;var r=Ss(e,Yt.current);ms(e,n),r=yf(null,e,i,t,r,n);var s=Mf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,ol(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gf(e),r.updater=Il,e.stateNode=r,r._reactInternals=e,Iu(e,i,t,n),e=Ou(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&cf(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Vo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Lx(i),t=Dn(i,t),r){case 0:e=Fu(null,e,i,t,n);break e;case 1:e=Jh(null,e,i,t,n);break e;case 11:e=Zh(null,e,i,t,n);break e;case 14:e=Qh(null,e,i,Dn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Fu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Jh(t,e,i,r,n);case 3:e:{if(Qg(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,wg(t,e),fl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ts(Error(ee(423)),e),e=ep(t,e,i,n,r);break e}else if(i!==r){r=Ts(Error(ee(424)),e),e=ep(t,e,i,n,r);break e}else for(hn=Zi(e.stateNode.containerInfo.firstChild),pn=e,ht=!0,Un=null,n=Eg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=wi(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return Ag(e),t===null&&Lu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Au(i,r)?a=null:s!==null&&Au(i,s)&&(e.flags|=32),Zg(t,e),Kt(t,e,a,n),e.child;case 6:return t===null&&Lu(e),null;case 13:return Jg(t,e,n);case 4:return _f(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ms(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Zh(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ut(ul,i._currentValue),i._currentValue=a,s!==null)if(Vn(s.value,a)){if(s.children===r.children&&!sn.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Nu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ee(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Nu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ms(e,n),r=An(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=Dn(i,e.pendingProps),r=Dn(i.type,r),Qh(t,e,i,r,n);case 15:return $g(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Dn(i,r),Vo(t,e),e.tag=1,an(i)?(t=!0,ol(e)):t=!1,ms(e,n),Xg(e,i,r),Iu(e,i,r,n),Ou(null,e,i,!0,t,n);case 19:return e0(t,e,n);case 22:return Kg(t,e,n)}throw Error(ee(156,e.tag))};function g0(t,e){return Gm(t,e)}function Px(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new Px(t,e,n,i)}function Nf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lx(t){if(typeof t=="function")return Nf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Zd)return 14}return 2}function tr(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Nf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case es:return Cr(n.children,r,s,e);case $d:a=8,r|=8;break;case ru:return t=Tn(12,n,e,r|2),t.elementType=ru,t.lanes=s,t;case su:return t=Tn(13,n,e,r),t.elementType=su,t.lanes=s,t;case au:return t=Tn(19,n,e,r),t.elementType=au,t.lanes=s,t;case Am:return Ol(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tm:a=10;break e;case wm:a=9;break e;case Kd:a=11;break e;case Zd:a=14;break e;case zi:a=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Tn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Cr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function Ol(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=Am,t.lanes=n,t.stateNode={isHidden:!1},t}function xc(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Sc(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Nx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ec(0),this.expirationTimes=ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ec(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Df(t,e,n,i,r,s,a,o,l){return t=new Nx(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gf(s),t}function Dx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function _0(t){if(!t)return ir;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(an(n))return _g(t,n,e)}return e}function v0(t,e,n,i,r,s,a,o,l){return t=Df(n,i,!0,t,r,s,a,o,l),t.context=_0(null),n=t.current,i=Zt(),r=er(n),s=vi(i,r),s.callback=e??null,Qi(n,s,r),t.current.lanes=r,Fa(t,r,i),on(t,i),t}function kl(t,e,n,i){var r=e.current,s=Zt(),a=er(r);return n=_0(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Qi(r,e,a),t!==null&&(zn(t,r,a,s),ko(t,r,a)),a}function Sl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function up(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function If(t,e){up(t,e),(t=t.alternate)&&up(t,e)}function Ix(){return null}var x0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Uf(t){this._internalRoot=t}Bl.prototype.render=Uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));kl(t,e,null,null)};Bl.prototype.unmount=Uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){kl(null,t,null,null)}),e[Ei]=null}};function Bl(t){this._internalRoot=t}Bl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Km();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&Qm(t)}};function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dp(){}function Ux(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Sl(a);s.call(c)}}var a=v0(e,i,t,0,null,!1,!1,"",dp);return t._reactRootContainer=a,t[Ei]=a.current,ya(t.nodeType===8?t.parentNode:t),Nr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Sl(l);o.call(c)}}var l=Df(t,0,!1,null,null,!1,!1,"",dp);return t._reactRootContainer=l,t[Ei]=l.current,ya(t.nodeType===8?t.parentNode:t),Nr(function(){kl(e,l,n,i)}),l}function Vl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Sl(a);o.call(l)}}kl(e,a,t,r)}else a=Ux(n,e,t,r,i);return Sl(a)}Ym=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(ef(e,n|1),on(e,yt()),!(Xe&6)&&(ws=yt()+500,or()))}break;case 13:Nr(function(){var i=Ti(t,1);if(i!==null){var r=Zt();zn(i,t,1,r)}}),If(t,1)}};tf=function(t){if(t.tag===13){var e=Ti(t,134217728);if(e!==null){var n=Zt();zn(e,t,134217728,n)}If(t,134217728)}};$m=function(t){if(t.tag===13){var e=er(t),n=Ti(t,e);if(n!==null){var i=Zt();zn(n,t,e,i)}If(t,e)}};Km=function(){return tt};Zm=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};gu=function(t,e,n){switch(e){case"input":if(cu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ll(i);if(!r)throw Error(ee(90));Rm(i),cu(i,r)}}}break;case"textarea":Pm(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};Om=bf;km=Nr;var Fx={usingClientEntryPoint:!1,Events:[ka,rs,Ll,Um,Fm,bf]},Ws={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ox={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||Ix,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lo.isDisabled&&lo.supportsFiber)try{Cl=lo.inject(Ox),Qn=lo}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fx;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ff(e))throw Error(ee(200));return Dx(t,e,null,n)};_n.createRoot=function(t,e){if(!Ff(t))throw Error(ee(299));var n=!1,i="",r=x0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Df(t,1,!1,null,null,n,!1,i,r),t[Ei]=e.current,ya(t.nodeType===8?t.parentNode:t),new Uf(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Vm(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Nr(t)};_n.hydrate=function(t,e,n){if(!zl(e))throw Error(ee(200));return Vl(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!Ff(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=x0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=v0(e,null,t,1,n??null,r,!1,s,a),t[Ei]=e.current,ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Bl(e)};_n.render=function(t,e,n){if(!zl(e))throw Error(ee(200));return Vl(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!zl(t))throw Error(ee(40));return t._reactRootContainer?(Nr(function(){Vl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ei]=null})}),!0):!1};_n.unstable_batchedUpdates=bf;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zl(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return Vl(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function S0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S0)}catch(t){console.error(t)}}S0(),Sm.exports=_n;var kx=Sm.exports,fp=kx;nu.createRoot=fp.createRoot,nu.hydrateRoot=fp.hydrateRoot;const Bx=()=>{const[t,e]=Re.useState(!0);return Re.useEffect(()=>{const n=()=>{e(!1),document.body.classList.add("loaded")};if(document.readyState==="complete")n();else{window.addEventListener("load",n);const i=setTimeout(n,4e3);return()=>{window.removeEventListener("load",n),clearTimeout(i)}}},[]),t?v.jsx("div",{className:`page-loader${t?" active":""}`,id:"pageLoader",children:v.jsxs("div",{className:"loader__content",children:[v.jsx("div",{className:"loader__logo",children:v.jsx("img",{src:"/assets/img/logo.jpg",alt:"NexoIT Logo",width:"80",height:"80"})}),v.jsxs("div",{className:"loader",children:[v.jsx("div",{className:"loader__ring"}),v.jsx("div",{className:"loader__ring"}),v.jsx("div",{className:"loader__ring"})]}),v.jsx("p",{className:"loader__text",children:"Cargando..."})]})}):null},zx=[{href:"#servicios",label:"Servicios"},{href:"#proceso",label:"Proceso"},{href:"#portafolio",label:"Portafolio"},{href:"#testimonios",label:"Testimonios"},{href:"#planes",label:"Planes"},{href:"#faq",label:"FAQ"}],Pa="51925585217",yl="nexoit90@gmail.com",yc={facebook:"https://www.facebook.com/share/1J2pU7xaFT/",linkedin:"https://www.linkedin.com/company/nexoittech/",tiktok:"https://www.tiktok.com/@nexo.it"},Vx=[{title:"Páginas web profesionales",description:"Landing pages, portafolios, catálogos y e‑commerce con diseño moderno, responsive y SEO.",features:["Diseño UX/UI","Velocidad y optimización","Hosting + dominio (opcional)"],icon:"web"},{title:"Apps móviles y PWA",description:"Aplicaciones para Android/iOS o web apps instalables (PWA) con login, roles y notificaciones.",features:["Flutter / React Native","Integración de pagos","Publicación en tiendas (opcional)"],icon:"mobile"},{title:"Sistemas & software a medida",description:"Automatizamos procesos: ventas, inventario, reportes, control de clientes, dashboards y más.",features:["SQL / APIs","Roles y permisos","Escalable y seguro"],icon:"systems"},{title:"Asesoría y proyectos",description:"Te apoyamos en tu proyecto: arquitectura, base de datos, front-end, back-end, documentación y despliegue.",features:["Buenas prácticas","Git/GitHub","Documentación y entregables"],icon:"advisory"},{title:"Automatizaciones",description:"Conectamos herramientas (forms, Excel/Sheets, CRM, WhatsApp, correo) para ahorrar tiempo y reducir errores.",features:["Flujos de trabajo","Notificaciones","Reportes automáticos"],icon:"automation"},{title:"Mantenimiento & soporte",description:"Actualizaciones, mejoras, monitoreo y soporte continuo para que tu sistema siempre esté al 100%.",features:["Backups","Seguridad","Mejoras evolutivas"],icon:"support"}],Hx={web:v.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:v.jsx("path",{d:"M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm7.9 9h-3.1a15.6 15.6 0 0 0-1.2-5.1A8.02 8.02 0 0 1 19.9 11ZM12 4c1 1.3 1.8 3.5 2.2 7H9.8C10.2 7.5 11 5.3 12 4Zm-3.6 1.9A15.6 15.6 0 0 0 7.2 11H4.1a8.02 8.02 0 0 1 4.3-5.1ZM4.1 13h3.1c.2 2 .7 3.8 1.2 5.1A8.02 8.02 0 0 1 4.1 13Zm7.9 7c-1-1.3-1.8-3.5-2.2-7h4.4c-.4 3.5-1.2 5.7-2.2 7Zm3.6-1.9c.5-1.3 1-3.1 1.2-5.1h3.1a8.02 8.02 0 0 1-4.3 5.1Z"})}),mobile:v.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:v.jsx("path",{d:"M17 1H7C5.9 1 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2Zm0 18H7V5h10v14Z"})}),systems:v.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:v.jsx("path",{d:"M19.4 13a7.7 7.7 0 0 0 0-2l2.1-1.6-2-3.5-2.5 1a7.6 7.6 0 0 0-1.7-1l-.4-2.7h-4l-.4 2.7c-.6.2-1.2.5-1.7 1l-2.5-1-2 3.5L4.6 11a7.7 7.7 0 0 0 0 2L2.5 14.6l2 3.5 2.5-1c.5.4 1.1.7 1.7 1l.4 2.7h4l.4-2.7c.6-.2 1.2-.5 1.7-1l2.5 1 2-3.5L19.4 13ZM12 15.5A3.5 3.5 0 1 1 12 8a3.5 3.5 0 0 1 0 7.5Z"})}),advisory:v.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:v.jsx("path",{d:"M21 6h-8l-2-2H3C1.9 4 1 4.9 1 6v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2Zm0 12H3V6h7.2l2 2H21v10Z"})}),automation:v.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:v.jsx("path",{d:"M13 2 3 14h7l-1 8 10-12h-7l1-8Z"})}),support:v.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",children:v.jsx("path",{d:"M12 2a10 10 0 0 0-10 10v3a3 3 0 0 0 3 3h2v-8H5a7 7 0 0 1 14 0h-2v8h2a3 3 0 0 0 3-3v-3A10 10 0 0 0 12 2Zm-1 15h2v2h-2v-2Zm0-10h2v8h-2V7Z"})})},hp=[{title:"Plataforma de E-commerce",year:2026,description:"Sistema completo de administración de tienda en línea con roles de usuario, seguimiento de pedidos y dashboard interactivo.",fullDescription:"Sistema completo de administración de tienda en línea con roles de usuario (administrador, vendedor, cliente), seguimiento de pedidos en tiempo real, reportes automatizados y dashboard interactivo con indicadores clave de rendimiento.",features:["Gestión de inventario y productos","Control de pedidos y estados de entrega","Panel de reportes con gráficas","Módulo de usuarios y permisos","Notificaciones automáticas"],tags:["E-commerce","Dashboard","PHP + MySQL"],category:"ecommerce",image:"/assets/img/projects/fotosPlataformadeE-commerce/fotoPlataformadeE-commerce1.webp",gallery:["/assets/img/projects/fotosPlataformadeE-commerce/fotoPlataformadeE-commerce1.webp","/assets/img/projects/fotosPlataformadeE-commerce/fotoPlataformadeE-commerce2.webp","/assets/img/projects/fotosPlataformadeE-commerce/fotoPlataformadeE-commerce3.webp"],link:"proyectos/sistema-gestion.html",badge:"Destacado"},{title:"Landing Page Restaurante",year:2025,description:"Landing page moderna para restaurante de alta gama con diseño responsive y optimización de rendimiento.",fullDescription:"Desarrollo de una landing page moderna para un restaurante de alta gama, enfocada en la conversión, mostrando el menú interactivo, reserva de mesas online y galería de alta calidad con optimización avanzada de rendimiento para Web Vitals.",features:["Diseño responsive premium","Optimización de SEO y velocidad","Sistema de reservas integrado","Menú interactivo y dinámico"],tags:["React","Next.js","Tailwind CSS"],category:"web",image:"/assets/img/projects/fotosLandingPageRestaurante/fotosLandingPageRestaurante1.webp",gallery:["/assets/img/projects/fotosLandingPageRestaurante/fotosLandingPageRestaurante1.webp","/assets/img/projects/fotosLandingPageRestaurante/fotosLandingPageRestaurante2.webp","/assets/img/projects/fotosLandingPageRestaurante/fotosLandingPageRestaurante3.webp"],link:"proyectos/cola-atencion.html",badge:"Popular"},{title:"Sistema de Préstamo con Bot",year:2025,description:"Sistema SaaS de gestión de préstamos con panel administrativo y bot automatizado para atención al cliente.",fullDescription:"Plataforma SaaS diseñada para agencias de préstamos, integrando un bot conversacional por WhatsApp para calificar prospectos automáticamente y un panel administrativo completo para controlar desembolsos, cuotas y mora.",features:["Bot de WhatsApp automatizado","Dashboard financiero","Asignación automática de analistas","Módulo de alertas de cobro"],tags:["SaaS","React","Node.js"],category:"sistema",image:"/assets/img/projects/fotosSistemadePréstamoconBot/fotosSistemadePréstamoconBot1.webp",gallery:["/assets/img/projects/fotosSistemadePréstamoconBot/fotosSistemadePréstamoconBot1.webp","/assets/img/projects/fotosSistemadePréstamoconBot/fotosSistemadePréstamoconBot2.webp","/assets/img/projects/fotosSistemadePréstamoconBot/fotosSistemadePréstamoconBot3.webp"],link:"proyectos/agencia-viajes.html",badge:null},{title:"Página Web Empresarial para Clínica",year:2024,description:"Sitio web corporativo para clínica en Piura con agendamiento de citas online, especialidades médicas y diseño moderno.",fullDescription:"Sitio web corporativo e institucional para una importante clínica en Piura. Incluye un sistema de agendamiento de citas online, catálogo detallado de especialidades médicas, blog de salud y diseño limpio que inspira confianza.",features:["Agendamiento de citas en línea","Catálogo de especialidades","Integración con CRM médico","Blog de noticias"],tags:["Web Empresarial","HTML/CSS/JS","PHP"],category:"web",image:"/assets/img/projects/fotosPáginaWebEmpresarialparaClínica/fotosPáginaWebEmpresarialparaClínica1.webp",gallery:["/assets/img/projects/fotosPáginaWebEmpresarialparaClínica/fotosPáginaWebEmpresarialparaClínica1.webp","/assets/img/projects/fotosPáginaWebEmpresarialparaClínica/fotosPáginaWebEmpresarialparaClínica2.webp","/assets/img/projects/fotosPáginaWebEmpresarialparaClínica/fotosPáginaWebEmpresarialparaClínica3.webp"],link:"proyectos/tienda-online.html",badge:null},{title:"App Web Lavandería",year:2024,description:"Aplicación web para lavandería en Piura con gestión de pedidos, seguimiento en tiempo real y catálogo de servicios.",fullDescription:"Aplicación PWA escalable para una cadena de lavanderías. Permite a los usuarios solicitar recogidas, realizar seguimiento del estado de sus prendas en tiempo real, visualizar el catálogo de servicios y procesar pagos integrados.",features:["Seguimiento GPS de conductores","Estados del pedido en tiempo real","Catálogo interactivo","Pasarela de pagos en línea"],tags:["Aplicación Web","Frontend","Backend"],category:"app",image:"/assets/img/projects/fotosAppWebLavandería/fotosAppWebLavandería1.webp",gallery:["/assets/img/projects/fotosAppWebLavandería/fotosAppWebLavandería1.webp","/assets/img/projects/fotosAppWebLavandería/fotosAppWebLavandería2.webp","/assets/img/projects/fotosAppWebLavandería/fotosAppWebLavandería3.webp"],link:"proyectos/lavanderia.html",badge:null}],Gx={web:[{tag:"Landing Page",name:"Starter",description:"Para emprendedores y marcas que quieren captar clientes rápido.",price:"$220",note:"Pago único · Entrega 7-12 días hábiles",features:["1 página con 3 a 5 secciones","Diseño moderno y responsive","Hero, servicios, contacto y WhatsApp","Formulario de contacto","Optimización de velocidad"],featured:!1},{tag:"Web Empresarial",name:"Business",description:"Presencia digital completa con panel de administración.",price:"$350",note:"Pago único · Entrega 2-3 semanas",features:["Hasta 8 secciones / páginas internas","Diseño profesional personalizado","Panel de administración de contenido","SEO básico (metatags, velocidad, sitemap)","WhatsApp, correo y formularios avanzados","Soporte técnico 30 días"],featured:!0},{tag:"Tienda Online",name:"E-commerce",description:"Para negocios que venden productos y quieren una tienda funcional.",price:"$450",note:"Pago en etapas · Entrega 3-5 semanas",features:["Catálogo de productos con filtros","Carrito de compras","Panel admin para stock y pedidos","Pasarela de pagos (Yape, Stripe…)","Diseño responsive y optimizado","Soporte 30 días"],featured:!1}],sistemas:[{tag:"Gestión",name:"Sistema Básico",description:"Digitaliza y automatiza los procesos internos de tu empresa.",price:"$380",note:"Pago en etapas · Entrega 3-5 semanas",features:["Panel administrativo (dashboard)","Módulos de clientes, ventas o inventario","Gestión de usuarios y roles","Base de datos estructurada","Reportes exportables","Soporte técnico 30 días"],featured:!1},{tag:"Plataforma SaaS",name:"SaaS Completo",description:"Plataforma multi-usuario con suscripciones o gestión avanzada.",price:"$550",note:"Pago en etapas · Entrega 6-10 semanas",features:["Arquitectura multi-tenant (SaaS)","Autenticación con roles y permisos","Dashboard con métricas en tiempo real","Módulos a medida (CRM, reservas…)","APIs REST para integraciones","Despliegue en servidor + capacitación 60 días"],featured:!0}],apps:[{tag:"App Web",name:"PWA",description:"App instalable desde el navegador, sin publicar en tiendas.",price:"$500",note:"Pago en etapas · Entrega 3-5 semanas",features:["Funciona en celular, tablet y PC","Instalable desde el navegador","Login de usuarios y roles","Notificaciones push","Funcionamiento offline básico","Backend con API REST"],featured:!0},{tag:"App Móvil",name:"App Nativa",description:"App publicada en Google Play y/o App Store con Flutter.",price:"$750",note:"Pago en etapas · Entrega 6-12 semanas",features:["Android e iOS desde un solo código (Flutter)","Login, registro y perfiles de usuario","Integración con backend (API / Firebase)","Notificaciones push","Diseño UX/UI moderno y fluido","Publicación en Google Play + soporte 60 días"],featured:!1}]},Wx=[{initials:"PL",name:"Piero Antonio Lazo Ancajima",role:"Co‑fundador • Desarrollo web & sistemas",description:"Frontend, backend, bases de datos, automatización, despliegue y optimización."},{initials:"EV",name:"Eri Jampier Valladolid Cruzado",role:"Co‑fundador • Apps & web",description:"Arquitectura, integración, automatización y desarrollo de soluciones."},{initials:"DE",name:"Diego Espinoza Rodriguez",role:"Desarrollador & Marketing",description:"Soluciones digitales, estrategias de marketing y optimización de presencia online."}],Mc=[{number:"01",text:"Implementaron un sistema de gestión de pedidos y seguimiento que optimizó completamente nuestra operación de tienda online. El dashboard es intuitivo y el equipo estuvo siempre disponible.",highlight:"+60% eficiencia",author:"María González",company:"CEO & Founder · Plataforma de E-commerce",image:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",navImage:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=face",project:"Plataforma de E-commerce"},{number:"02",text:"El bot automatizado para atención al cliente y el panel administrativo han reducido significativamente nuestro tiempo de gestión. El sistema de préstamos funciona de manera impecable.",highlight:"+80% más rápido",author:"Carlos Rodríguez",company:"Gerente de Operaciones · Sistema de Préstamo con Bot",image:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",navImage:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&h=120&fit=crop&crop=face",project:"Sistema de Préstamo con Bot"},{number:"03",text:"La aplicación web para lavandería permite a nuestros clientes hacer seguimiento de pedidos en tiempo real. El catálogo de servicios y la gestión de pedidos han mejorado nuestro servicio enormemente.",highlight:"+500 pedidos/mes",author:"Laura Pérez",company:"Directora · Lavandería App",image:"https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=80&h=80&fit=crop&crop=face",navImage:"https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=120&h=120&fit=crop&crop=face",project:"Lavandería App"}],jx=[{question:"¿Cuánto tiempo demoran en desarrollar una página web?",answer:"El tiempo depende del alcance del proyecto. Una landing page puede estar lista en 1-2 semanas, mientras que un sitio web completo puede tomar 3-6 semanas. Siempre te damos un cronograma claro antes de iniciar."},{question:"¿Ofrecen mantenimiento y soporte?",answer:"Sí, ofrecemos planes de mantenimiento que incluyen actualizaciones, seguridad, backups y soporte técnico para que tu sitio o aplicación siempre esté funcionando correctamente."},{question:"¿Pueden trabajar con tecnologías específicas?",answer:"Absolutamente. Tenemos experiencia con HTML/CSS/JS, React, Node.js, PHP, SQL, Firebase y más. Si necesitas una tecnología específica, podemos adaptarnos a tus requerimientos."},{question:"¿Qué incluye la entrega final?",answer:"La entrega incluye el código fuente completo, documentación, guía de uso, despliegue en el servidor de tu elección y un periodo de soporte inicial para asegurar que todo funcione correctamente."},{question:"¿Cómo funcionan los pagos?",answer:"Generalmente trabajamos con un anticipo inicial para comenzar el proyecto y pagos por hitos o según el avance. Los términos exactos se definen en la propuesta antes de iniciar."},{question:"¿Realizan proyectos fuera de Perú?",answer:"Sí, trabajamos con clientes de cualquier parte del mundo. La comunicación se realiza por WhatsApp, correo, videollamadas y otras herramientas digitales, lo que nos permite colaborar eficientemente sin importar la ubicación."}],Xx=[{number:1,title:"Brief + objetivos",description:"Definimos qué vas a lograr, público, funciones, estilo y fecha de entrega."},{number:2,title:"Propuesta + prototipo",description:"Te mostramos un diseño base y el flujo del sistema antes de programar."},{number:3,title:"Desarrollo",description:"Construimos por módulos. Te compartimos avances y versiones de prueba."},{number:4,title:"Pruebas + ajuste",description:"Validamos rendimiento, seguridad y corregimos detalles de UX."},{number:5,title:"Entrega + soporte",description:"Publicamos/instalamos y te dejamos guía de uso + soporte inicial."}],qx=({onNavClick:t})=>{const[e,n]=Re.useState(!1),[i,r]=Re.useState({}),s=Re.useRef(null),a=Re.useRef(null),o=Re.useCallback(()=>{window.scrollY>50?r({background:"rgba(7,11,18,.85)",boxShadow:"0 4px 30px rgba(0,0,0,.3)"}):r({background:"rgba(7,11,18,.7)",boxShadow:"none"})},[]);Re.useEffect(()=>(window.addEventListener("scroll",o,{passive:!0}),o(),()=>window.removeEventListener("scroll",o)),[o]),Re.useEffect(()=>{const f=h=>{e&&s.current&&!s.current.contains(h.target)&&a.current&&!a.current.contains(h.target)&&n(!1)};return document.addEventListener("click",f),()=>document.removeEventListener("click",f)},[e]);const l=f=>{f.stopPropagation(),n(h=>!h)},c=()=>{n(!1),t&&t()};return v.jsx("header",{className:"header",id:"top",style:i,children:v.jsxs("div",{className:"container header__inner",children:[v.jsxs("a",{className:"brand",href:"#top","aria-label":"Ir al inicio",onClick:()=>{t&&t()},children:[v.jsx("img",{className:"brand__logo",src:"/assets/img/logo.jpg",alt:"Logo de NexoIT",width:"44",height:"44"}),v.jsxs("div",{className:"brand__text",children:[v.jsx("span",{className:"brand__name",children:"NexoIT"}),v.jsx("span",{className:"brand__tag",children:"Soluciones que conectan"})]})]}),v.jsxs("button",{ref:a,className:`navbtn${e?" open":""}`,onClick:l,"aria-label":e?"Cerrar menú":"Abrir menú","aria-controls":"nav","aria-expanded":e,children:[v.jsx("span",{}),v.jsx("span",{}),v.jsx("span",{})]}),v.jsxs("nav",{ref:s,className:`nav${e?" open":""}`,id:"nav",onClick:f=>f.stopPropagation(),children:[zx.map(f=>v.jsx("a",{href:f.href,onClick:c,children:f.label},f.href)),v.jsx("a",{href:"#contacto",className:"btn btn--sm",onClick:c,children:"Cotizar"})]})]})})},$u=({text:t,disabled:e=!1,speed:n=5,className:i=""})=>v.jsx("span",{className:`shiny-text ${e?"disabled":""} ${i}`,style:{animationDuration:`${n}s`,fontWeight:"600"},children:t}),Yx=()=>{const t=Re.useRef(null);return Re.useEffect(()=>{const e=t.current;if(!e)return;const n=["webs, sistemas, apps","soluciones digitales","software a medida","experiencias únicas"];let i=0,r=0,s=!1,a;const o=()=>{const l=n[i];s?(e.textContent=l.substring(0,r-1),r--):(e.textContent=l.substring(0,r+1),r++);let c=s?50:100;!s&&r===l.length?(c=2e3,s=!0):s&&r===0&&(s=!1,i=(i+1)%n.length,c=500),a=setTimeout(o,c)};return a=setTimeout(o,1e3),()=>clearTimeout(a)},[]),v.jsxs("section",{className:"hero",children:[v.jsxs("div",{className:"container hero__grid",children:[v.jsxs("div",{className:"hero__copy animate-blur-in",children:[v.jsx("p",{className:"pill animate-scale-in animate-delay-1",children:v.jsx($u,{text:"Ingeniería de software • Web • Apps • Automatización",speed:4})}),v.jsxs("h1",{className:"animate-scale-in animate-delay-2",children:["Convertimos ideas en"," ",v.jsx("span",{className:"grad gradient-animated",children:v.jsx("span",{ref:t})})," ",v.jsx("br",{}),v.jsx($u,{text:"listas para crecer.",speed:3})]}),v.jsxs("p",{className:"lead animate-scale-in animate-delay-3",children:["Somos ",v.jsx("strong",{children:"NexoIT"}),", un equipo de ingenieros de sistemas enfocado en crear soluciones rápidas, seguras y escalables: páginas web, aplicaciones móviles, sistemas internos, software a medida y apoyo en proyectos."]}),v.jsxs("div",{className:"hero__cta animate-scale-in animate-delay-4",children:[v.jsx("a",{className:"btn",href:"#contacto",children:"Quiero una cotización"}),v.jsx("a",{className:"btn btn--ghost",href:"#servicios",children:"Ver servicios"})]})]}),v.jsx("div",{className:"hero__card animate-slide-right",children:v.jsxs("div",{className:"card",children:[v.jsxs("div",{className:"card__top",children:[v.jsx("div",{className:"pulse"}),v.jsx("span",{className:"muted",children:"Disponible para nuevos proyectos"})]}),v.jsxs("div",{className:"preview",children:[v.jsx("img",{src:"/assets/img/logo.jpg",alt:"NexoIT",className:"preview__img",loading:"eager"}),v.jsxs("div",{className:"preview__overlay",children:[v.jsx("p",{className:"preview__title",children:"NexoIT"}),v.jsx("p",{className:"preview__sub",children:"Soluciones que conectan"})]})]}),v.jsxs("div",{className:"card__row",children:[v.jsxs("div",{className:"mini",children:[v.jsx("span",{className:"mini__k",children:"Web"}),v.jsx("span",{className:"mini__t",children:"Landing • Ecommerce • Portafolio"})]}),v.jsxs("div",{className:"mini",children:[v.jsx("span",{className:"mini__k",children:"Apps"}),v.jsx("span",{className:"mini__t",children:"Android • iOS • PWA"})]}),v.jsxs("div",{className:"mini",children:[v.jsx("span",{className:"mini__k",children:"Sistemas"}),v.jsx("span",{className:"mini__t",children:"ERP • Gestión • Automatización"})]})]}),v.jsxs("div",{className:"card__actions",children:[v.jsx("a",{className:"btn btn--full",href:"#video",children:"Ver video"}),v.jsx("a",{className:"link",href:"#portafolio",children:"Explorar trabajos →"})]})]})})]}),v.jsx("div",{className:"fade"})]})},Hl=({children:t,className:e="",style:n={}})=>{const i=Re.useRef(null),[r,s]=Re.useState({x:0,y:0}),[a,o]=Re.useState(0),l=c=>{if(!i.current)return;const f=i.current.getBoundingClientRect();s({x:c.clientX-f.left,y:c.clientY-f.top})};return v.jsxs("div",{ref:i,onMouseMove:l,onMouseEnter:()=>o(1),onMouseLeave:()=>o(0),className:e,style:{position:"relative",overflow:"hidden",...n},children:[v.jsx("div",{style:{opacity:a,background:`radial-gradient(400px circle at ${r.x}px ${r.y}px, rgba(0, 128, 255, 0.15), transparent 40%)`,position:"absolute",inset:0,pointerEvents:"none",transition:"opacity 0.3s",zIndex:0}}),v.jsx("div",{style:{position:"relative",zIndex:1,height:"100%"},children:t})]})},y0=Ua.memo(({service:t,index:e})=>v.jsx(Hl,{className:`svc animate-on-scroll animate-delay-${e+1}`,children:v.jsxs("article",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[v.jsx("div",{className:"svc__icon",children:Hx[t.icon]}),v.jsx("h3",{children:t.title}),v.jsx("p",{children:t.description}),v.jsx("ul",{className:"ul",children:t.features.map((n,i)=>v.jsx("li",{children:n},i))})]})}));y0.displayName="ServiceCard";const $x=()=>v.jsx("section",{className:"section",id:"servicios",children:v.jsxs("div",{className:"container",children:[v.jsxs("div",{className:"section__head animate-on-scroll",children:[v.jsx("h2",{children:"Servicios"}),v.jsx("p",{children:"Elige el servicio que necesites: desde una web rápida hasta un sistema completo para tu negocio."})]}),v.jsx("div",{className:"grid3",children:Vx.map((t,e)=>v.jsx(y0,{service:t,index:e},t.title))})]})}),Kx=()=>v.jsx("section",{className:"section section--alt",id:"video",children:v.jsxs("div",{className:"container",children:[v.jsxs("div",{className:"section__head",children:[v.jsx("h2",{children:"Lo que hacemos (video)"}),v.jsx("p",{children:"Mira un resumen rápido del tipo de soluciones que entregamos."})]}),v.jsxs("div",{className:"video",children:[v.jsxs("video",{className:"video__player",controls:!0,playsInline:!0,preload:"metadata",poster:"/assets/img/logo.jpg",children:[v.jsx("source",{src:"/assets/video/promo.mp4",type:"video/mp4"}),"Tu navegador no soporta video HTML5."]}),v.jsxs("div",{className:"video__side",children:[v.jsx("h3",{children:"¿Qué incluye una entrega NexoIT?"}),v.jsxs("ul",{className:"check",children:[v.jsx("li",{children:"Diseño moderno + responsive (celular y PC)"}),v.jsx("li",{children:"Código ordenado y escalable"}),v.jsx("li",{children:"Integración con base de datos / APIs"}),v.jsx("li",{children:"Despliegue (Netlify/Vercel/Hosting) opcional"}),v.jsx("li",{children:"Soporte para mejoras"})]}),v.jsxs("div",{className:"cta2",children:[v.jsx("a",{className:"btn",href:"#contacto",children:"Cotizar ahora"}),v.jsx("a",{className:"btn btn--ghost",href:"#proceso",children:"Ver proceso"})]})]})]})]})}),Zx=()=>v.jsx("section",{className:"section",id:"proceso",children:v.jsxs("div",{className:"container",children:[v.jsxs("div",{className:"section__head",children:[v.jsx("h2",{children:"Proceso de trabajo"}),v.jsx("p",{children:"Simple, claro y con entregas por etapas para que siempre tengas control del avance."})]}),v.jsx("div",{className:"steps",children:Xx.map(t=>v.jsxs("div",{className:"step",children:[v.jsx("span",{className:"step__n",children:t.number}),v.jsx("h3",{children:t.title}),v.jsx("p",{children:t.description})]},t.number))})]})}),Qx=[{value:"all",label:"Todos"},{value:"ecommerce",label:"E-commerce"},{value:"web",label:"Sitios Web"},{value:"sistema",label:"Sistemas"},{value:"app",label:"Aplicaciones"}],M0=Ua.memo(({project:t,onSelect:e})=>v.jsx(Hl,{className:"pcard animate-on-scroll",children:v.jsxs("article",{"data-category":t.category,style:{display:"flex",flexDirection:"column",height:"100%"},children:[v.jsxs("a",{className:"pcard__media",href:"#!",onClick:n=>{n.preventDefault(),e(t)},"aria-label":`Ver descripción: ${t.title}`,children:[v.jsx("img",{src:t.image,alt:`Proyecto: ${t.title}`,loading:"lazy"}),t.badge&&v.jsx("div",{className:"pcard__badge",children:t.badge})]}),v.jsxs("div",{className:"pcard__body",children:[v.jsxs("div",{className:"pcard__top",children:[v.jsx("h3",{children:t.title}),v.jsx("span",{className:"pcard__year",children:t.year})]}),v.jsx("p",{className:"pcard__description",children:t.description}),v.jsx("div",{className:"pcard__tags",children:t.tags.map((n,i)=>v.jsx("span",{className:"chip",children:n},i))}),v.jsx("div",{className:"pcard__actions",children:v.jsxs("a",{className:"btn btn--sm",href:"#!",onClick:n=>{n.preventDefault(),e(t)},children:[v.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:v.jsx("path",{fill:"currentColor",d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"})}),"Ver descripción"]})})]})]})}));M0.displayName="ProjectCard";const Jx=({onSelectProject:t})=>{const[e,n]=Re.useState("all"),i=Re.useMemo(()=>e==="all"?hp:hp.filter(s=>s.category===e),[e]),r=Re.useCallback(s=>{n(s)},[]);return v.jsx("section",{className:"section section--alt",id:"portafolio",children:v.jsxs("div",{className:"container",children:[v.jsxs("div",{className:"section__head animate-on-scroll",children:[v.jsx("h2",{children:"Portafolio"}),v.jsx("p",{children:"Proyectos y soluciones que hemos construido con nuestros clientes."})]}),v.jsx("div",{className:"portfolio__filters animate-on-scroll animate-delay-1",children:Qx.map(s=>v.jsx("button",{className:`portfolio__filter${e===s.value?" active":""}`,onClick:()=>r(s.value),"aria-pressed":e===s.value,children:s.label},s.value))}),v.jsx("div",{className:"portfolio",children:i.map(s=>v.jsx(M0,{project:s,onSelect:t},s.title))})]})})},E0=Ua.memo(({plan:t,onQuote:e})=>v.jsx(Hl,{className:`plan-card${t.featured?" featured":""}`,children:v.jsxs("div",{style:{position:"relative",zIndex:10},children:[t.featured&&v.jsx("div",{className:"badge",children:"Más pedido"}),v.jsx("p",{className:"plan-tag",children:t.tag}),v.jsx("h3",{className:"plan-name",children:t.name}),v.jsx("p",{className:"plan-desc",children:t.description}),v.jsxs("div",{className:"price-row",children:[v.jsx("span",{className:"price-from",children:"Desde"}),v.jsx("span",{className:"price-num",children:t.price})]}),v.jsx("p",{className:"price-note",children:t.note}),v.jsx("div",{className:"divider"}),v.jsx("p",{className:"feat-title",children:"Incluye"}),v.jsx("ul",{className:"features",children:t.features.map((n,i)=>v.jsx("li",{children:n},i))}),v.jsx("button",{className:`btn${t.featured?" btn-filled":" btn-outline"}`,onClick:()=>e(t.name,t.price,t.description),children:"Cotizar ahora"})]})}));E0.displayName="PlanCard";const eS=[{id:"web",label:"Páginas Web",count:3,icon:v.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2"}),v.jsx("path",{d:"M8 21h8M12 17v4"})]})},{id:"sistemas",label:"Sistemas",count:2,icon:v.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),v.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),v.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"}),v.jsx("path",{d:"M14 17h7M17 14v7"})]})},{id:"apps",label:"Apps",count:2,icon:v.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[v.jsx("rect",{x:"7",y:"2",width:"10",height:"20",rx:"2"}),v.jsx("circle",{cx:"12",cy:"18",r:"1",fill:"#2ef59a",stroke:"none"})]})}],tS=({onCotizar:t})=>{const[e,n]=Re.useState("web"),i=Re.useCallback(s=>{n(s)},[]),r=Re.useCallback((s,a,o)=>{t&&t(s,a,o)},[t]);return v.jsx("section",{className:"section",id:"planes",children:v.jsxs("div",{className:"container",children:[v.jsxs("div",{className:"section__head",children:[v.jsx("h2",{children:"Planes para tu negocio"}),v.jsx("p",{className:"subtitle",children:"Selecciona la categoría que necesitas. La cotización final varía según alcance."})]}),v.jsx("div",{className:"categories",children:eS.map(s=>v.jsxs("button",{className:`cat-btn${e===s.id?" active":""}`,onClick:()=>i(s.id),children:[v.jsx("div",{className:"cat-icon",children:s.icon}),v.jsxs("div",{className:"cat-info",children:[v.jsx("div",{className:"cat-name",children:s.label}),v.jsxs("div",{className:"cat-count",children:[s.count," planes"]})]})]},s.id))}),Object.entries(Gx).map(([s,a])=>v.jsx("div",{id:`panel-${s}`,className:`panel${e===s?" active":""}`,children:a.map((o,l)=>v.jsx(E0,{plan:o,onQuote:r},l))},s)),v.jsxs("p",{className:"footer-note",children:["¿Necesitas algo diferente? ",v.jsx("span",{children:"Escríbenos"})," y armamos un plan a tu medida."]})]})})},nS=()=>v.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:v.jsx("path",{fill:"#2ef59a",d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"})}),iS=()=>{const[t,e]=Re.useState(0),[n,i]=Re.useState(!1),r=Re.useRef(null),s=Re.useCallback(l=>{e(l)},[]);Re.useEffect(()=>{if(!n)return r.current=setInterval(()=>{e(l=>(l+1)%Mc.length)},6e3),()=>clearInterval(r.current)},[n]);const a=Re.useCallback(()=>i(!0),[]),o=Re.useCallback(()=>i(!1),[]);return v.jsx("section",{className:"section",id:"testimonios",children:v.jsxs("div",{className:"container",children:[v.jsxs("div",{className:"section__head animate-on-scroll",children:[v.jsx("h2",{children:"Lo que dicen nuestros clientes"}),v.jsx("p",{children:"Empresas que confían en NexoIT para transformar sus ideas en soluciones digitales."})]}),v.jsxs("div",{className:"testimonials-split",onMouseEnter:a,onMouseLeave:o,children:[v.jsx("div",{className:"testimonials-split__nav",children:Mc.map((l,c)=>v.jsxs("button",{className:`testimonial-nav${t===c?" active":""}`,onClick:()=>s(c),children:[v.jsx("img",{src:l.navImage,alt:l.author}),v.jsx("span",{className:"testimonial-nav__company",children:l.project})]},c))}),v.jsx("div",{className:"testimonials-split__content",children:Mc.map((l,c)=>v.jsxs("div",{className:`testimonial-slide${t===c?" active":""}`,children:[v.jsx("div",{className:"testimonial-slide__number",children:String(c+1).padStart(2,"0")}),v.jsx("div",{className:"testimonial-slide__quote",children:'"'}),v.jsx("p",{className:"testimonial-slide__text",children:l.text}),v.jsx("div",{className:"testimonial-slide__highlight",children:l.highlight}),v.jsxs("div",{className:"testimonial-slide__author",children:[v.jsx("img",{src:l.image,alt:l.author}),v.jsxs("div",{children:[v.jsx("strong",{children:l.author}),v.jsx("span",{children:l.company})]})]}),v.jsx("div",{className:"testimonial-slide__rating",children:[...Array(5)].map((f,h)=>v.jsx(nS,{},h))})]},c))})]})]})})},rS=()=>v.jsx("section",{className:"section section--alt",id:"equipo",children:v.jsxs("div",{className:"container",children:[v.jsxs("div",{className:"section__head animate-on-scroll",children:[v.jsx("h2",{children:"Equipo"}),v.jsx("p",{children:"Ingenieros de sistemas enfocados en entregar soluciones reales, con comunicación clara y resultados."})]}),v.jsx("div",{className:"team team--cards",children:Wx.map((t,e)=>v.jsxs("article",{className:"person person--avatar",children:[v.jsx("div",{className:"avatar",children:v.jsx("span",{children:t.initials})}),v.jsxs("div",{className:"person__info",children:[v.jsx("h3",{children:t.name}),v.jsx("p",{className:"muted",children:t.role}),v.jsx("p",{children:t.description})]})]},e))})]})}),sS=()=>v.jsx("section",{className:"section",id:"faq",children:v.jsxs("div",{className:"container",children:[v.jsxs("div",{className:"section__head",children:[v.jsx("h2",{children:"Preguntas Frecuentes"}),v.jsx("p",{children:"Encuentra respuestas a las consultas más comunes sobre nuestros servicios."})]}),v.jsx("div",{className:"faq",children:jx.map((t,e)=>v.jsxs("details",{className:"faq__item",open:e===0,children:[v.jsx("summary",{className:"faq__question",children:t.question}),v.jsx("div",{className:"faq__answer",children:v.jsx("p",{children:t.answer})})]},e))})]})}),aS=()=>{const[t,e]=Re.useState({nombre:"",numero:"",correo:"",necesita:"",descripcion:""}),[n,i]=Re.useState("Copiar mensaje"),r=Re.useCallback(l=>{const{name:c,value:f}=l.target;e(h=>({...h,[c]:f}))},[]),s=Re.useCallback(()=>{const{nombre:l,numero:c,correo:f,necesita:h,descripcion:d}=t;return[`Hola, soy ${l}.`,"",`Número: ${c}`,`Correo: ${f}`,`Necesito: ${h}`,"","Descripción:",d].join(`
`)},[t]),a=Re.useCallback(l=>{l.preventDefault();const{nombre:c,numero:f,correo:h,necesita:d,descripcion:m}=t;if(!c||!f||!h||!d||!m){alert("Completa todos los campos para enviar tu solicitud.");return}const _=s();window.open(`https://wa.me/${Pa}?text=${encodeURIComponent(_)}`,"_blank","noopener,noreferrer")},[t,s]),o=Re.useCallback(async()=>{const l=s();try{await navigator.clipboard.writeText(l),i("Copiado"),setTimeout(()=>i("Copiar mensaje"),1100)}catch{const c=document.createElement("textarea");c.value=l,document.body.appendChild(c),c.select(),document.execCommand("copy"),document.body.removeChild(c),i("Copiado"),setTimeout(()=>i("Copiar mensaje"),1100)}},[s]);return v.jsx("section",{className:"section",id:"contacto",children:v.jsxs("div",{className:"container",children:[v.jsxs("div",{className:"section__head",children:[v.jsx("h2",{children:"Contacto"}),v.jsx("p",{children:"Contáctanos para cotizar tu proyecto o resolver tus dudas."})]}),v.jsxs("div",{className:"contact",children:[v.jsxs("div",{className:"contact__side animate-slide-left",children:[v.jsxs("div",{className:"contactcard glassmorphism",children:[v.jsx("h3",{className:"gradient-animated",children:"Escríbenos"}),v.jsx("a",{className:"contactcard__link",href:`https://wa.me/${Pa}`,target:"_blank",rel:"noopener noreferrer",children:"WhatsApp: 925585217"}),v.jsxs("a",{className:"contactcard__link",href:`mailto:${yl}`,children:["Correo: ",yl]})]}),v.jsxs("div",{className:"contactcard glassmorphism",children:[v.jsx("h3",{className:"gradient-animated",children:"Redes sociales"}),v.jsx("p",{className:"muted",children:"Síguenos para ver avances y contenido."}),v.jsxs("div",{className:"social",children:[v.jsx("a",{className:"social__btn icon-rotate",href:yc.facebook,"aria-label":"Facebook",target:"_blank",rel:"noopener noreferrer",children:v.jsx("img",{src:"/assets/img/icons/facebook.svg",alt:"Facebook NexoIT"})}),v.jsx("a",{className:"social__btn icon-rotate",href:yc.linkedin,"aria-label":"LinkedIn",target:"_blank",rel:"noopener noreferrer",children:v.jsx("img",{src:"/assets/img/icons/linkedin.svg",alt:"LinkedIn NexoIT"})}),v.jsx("a",{className:"social__btn icon-rotate",href:yc.tiktok,"aria-label":"TikTok",target:"_blank",rel:"noopener noreferrer",children:v.jsx("img",{src:"/assets/img/icons/tiktok.svg",alt:"TikTok NexoIT"})})]})]})]}),v.jsxs("form",{className:"form glassmorphism animate-slide-right",onSubmit:a,children:[v.jsxs("div",{className:"row",children:[v.jsxs("label",{children:["Nombre",v.jsx("input",{required:!0,name:"nombre",placeholder:"Tu nombre",autoComplete:"name",value:t.nombre,onChange:r})]}),v.jsxs("label",{children:["Número (WhatsApp)",v.jsx("input",{type:"tel",required:!0,name:"numero",placeholder:"Tu número",inputMode:"tel",autoComplete:"tel",pattern:"[0-9+\\s\\-]{7,15}",value:t.numero,onChange:r})]})]}),v.jsxs("div",{className:"row",children:[v.jsxs("label",{children:["Correo",v.jsx("input",{type:"email",required:!0,name:"correo",placeholder:"tucorreo@email.com",autoComplete:"email",value:t.correo,onChange:r})]}),v.jsxs("label",{children:["¿Qué necesitas?",v.jsxs("select",{required:!0,name:"necesita",value:t.necesita,onChange:r,children:[v.jsx("option",{value:"",disabled:!0,children:"Selecciona"}),v.jsx("option",{children:"Web / Landing"}),v.jsx("option",{children:"App móvil"}),v.jsx("option",{children:"Sistema / Software"}),v.jsx("option",{children:"Automatización"}),v.jsx("option",{children:"Asesoría / Proyecto"})]})]})]}),v.jsxs("label",{children:["Descripción",v.jsx("textarea",{required:!0,name:"descripcion",rows:"6",placeholder:"Cuéntanos tu idea, funcionalidades, fecha ideal y cualquier referencia.",value:t.descripcion,onChange:r})]}),v.jsxs("div",{className:"form__actions",children:[v.jsx("button",{className:"btn",type:"submit",children:"Enviar por WhatsApp"}),v.jsx("button",{className:"btn btn--ghost",type:"button",onClick:o,children:n})]})]})]})]})})},oS=({onNavClick:t})=>{const e=new Date().getFullYear();return v.jsx("footer",{className:"footer",children:v.jsxs("div",{className:"container footer__grid",children:[v.jsxs("div",{children:[v.jsxs("div",{className:"brand brand--footer",children:[v.jsx("img",{className:"brand__logo",src:"/assets/img/logo.jpg",alt:"Logo de NexoIT",width:"44",height:"44"}),v.jsxs("div",{className:"brand__text",children:[v.jsx("span",{className:"brand__name",children:"NexoIT"}),v.jsx("span",{className:"brand__tag",children:"Soluciones que conectan"})]})]}),v.jsx("p",{className:"muted",children:"Desarrollo de páginas web, apps y software a medida. Automatizamos procesos para que tu negocio crezca."})]}),v.jsxs("div",{className:"footer__col",children:[v.jsx("h4",{children:"Secciones"}),v.jsx("a",{href:"#servicios",onClick:()=>{t&&t()},children:"Servicios"}),v.jsx("a",{href:"#proceso",onClick:()=>{t&&t()},children:"Proceso"}),v.jsx("a",{href:"#portafolio",onClick:()=>{t&&t()},children:"Portafolio"}),v.jsx("a",{href:"#testimonios",onClick:()=>{t&&t()},children:"Testimonios"}),v.jsx("a",{href:"#planes",onClick:()=>{t&&t()},children:"Planes"}),v.jsx("a",{href:"#faq",onClick:()=>{t&&t()},children:"FAQ"}),v.jsx("a",{href:"#contacto",onClick:()=>{t&&t()},children:"Contacto"}),v.jsx("a",{href:"/casos-exito.html",children:"Casos de Éxito"})]}),v.jsxs("div",{className:"footer__col",children:[v.jsx("h4",{children:"Legal"}),v.jsx("a",{href:"/terminos.html",children:"Términos y condiciones"}),v.jsx("a",{href:"/privacidad.html",children:"Política de privacidad"})]}),v.jsxs("div",{className:"footer__col",children:[v.jsx("h4",{children:"Contacto"}),v.jsx("a",{href:"#contacto",onClick:()=>{t&&t()},children:"Cotizar"}),v.jsx("a",{href:`mailto:${yl}`,children:yl}),v.jsx("a",{href:`https://wa.me/${Pa}`,target:"_blank",rel:"noopener noreferrer",children:"WhatsApp"})]}),v.jsxs("div",{className:"footer__bottom",children:[v.jsxs("span",{children:["© ",e," NexoIT. Todos los derechos reservados."]}),v.jsx("span",{className:"muted",children:"Hecho por Piero & Eri"})]})]})})},T0=({initialPlan:t,initialPrice:e,initialDesc:n,onClose:i})=>{const[r,s]=Re.useState(""),a=Re.useCallback(l=>{l.preventDefault();let c=`Hola, qué tal, soy ${r}, estoy interesado en sus servicios que brindan`;t&&(c+=`, específicamente en el plan ${t} (desde ${e} USD). ${n}`),window.open(`https://wa.me/${Pa}?text=${encodeURIComponent(c)}`,"_blank"),i()},[r,t,e,n,i]),o=Re.useCallback(l=>{l.target===l.currentTarget&&i()},[i]);return v.jsx("div",{className:"wa-modal open",onClick:o,children:v.jsxs("div",{className:"wa-modal__box",children:[v.jsx("button",{className:"wa-modal__close",onClick:i,children:"×"}),v.jsx("h3",{children:"Cotizar por WhatsApp"}),v.jsx("p",{className:"wa-modal__sub",children:"Déjanos tus datos y te atenderemos al instante."}),v.jsxs("form",{onSubmit:a,children:[v.jsxs("label",{children:["Nombre completo *",v.jsx("input",{type:"text",required:!0,placeholder:"Tu nombre completo",autoComplete:"name",value:r,onChange:l=>s(l.target.value)})]}),v.jsxs("button",{type:"submit",className:"wa-modal__btn",children:[v.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:v.jsx("path",{fill:"currentColor",d:"M17.47 14.38c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.37-.03-.51-.08-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.37-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.01c.15.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.08-.12-.26-.19-.55-.34zM12.05 21.7c-1.73 0-3.43-.46-4.92-1.33l-.35-.21-3.67.96.98-3.57-.23-.37a9.74 9.74 0 0 1-1.49-5.23c0-5.38 4.39-9.76 9.77-9.76 2.61 0 5.07 1.02 6.91 2.87a9.72 9.72 0 0 1 2.86 6.91c-.01 5.39-4.39 9.77-9.77 9.77z"})}),"Abrir WhatsApp"]})]})]})})},lS=()=>{const[t,e]=Re.useState(!1),[n,i]=Re.useState({plan:"",price:"",desc:""}),r=Re.useCallback((a="",o="",l="")=>{i({plan:a,price:o,desc:l}),e(!0)},[]),s=Re.useCallback(()=>{e(!1)},[]);return v.jsxs(v.Fragment,{children:[v.jsx("button",{className:"wa-float",onClick:()=>r(),"aria-label":"Escríbenos por WhatsApp",children:v.jsx("svg",{viewBox:"0 0 24 24",width:"28",height:"28",children:v.jsx("path",{fill:"#fff",d:"M17.47 14.38c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.19-.34.21-.63.07-.29-.15-1.22-.45-2.33-1.43-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.37-.03-.51-.08-.15-.64-1.54-.88-2.11-.23-.56-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.37-.26.29-1 1-1 2.43s1.03 2.82 1.17 3.01c.15.19 2.03 3.1 4.93 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.11.55-.08 1.7-.7 1.94-1.37.24-.67.24-1.25.17-1.37-.08-.12-.26-.19-.55-.34zM12.05 21.7c-1.73 0-3.43-.46-4.92-1.33l-.35-.21-3.67.96.98-3.57-.23-.37a9.74 9.74 0 0 1-1.49-5.23c0-5.38 4.39-9.76 9.77-9.76 2.61 0 5.07 1.02 6.91 2.87a9.72 9.72 0 0 1 2.86 6.91c-.01 5.39-4.39 9.77-9.77 9.77zm8.32-18.15a11.5 11.5 0 0 0-8.29-3.44c-6.36 0-11.53 5.17-11.53 11.53 0 2.03.53 4.01 1.53 5.76l-1.63 5.95 6.1-1.6a11.47 11.47 0 0 0 5.53 1.4c6.36 0 11.53-5.17 11.53-11.53-.01-3.08-1.2-5.97-3.24-8.07z"})})}),t&&v.jsx(T0,{initialPlan:n.plan,initialPrice:n.price,initialDesc:n.desc,onClose:s})]})},cS=()=>(Re.useEffect(()=>{const t=new IntersectionObserver(n=>{n.forEach(i=>{i.isIntersecting&&i.target.classList.add("is-visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});return document.querySelectorAll(".animate-on-scroll, .animate-slide-left, .animate-slide-right, .animate-scale-in, .animate-blur-in").forEach(n=>t.observe(n)),()=>t.disconnect()},[]),null);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="183",uS=0,pp=1,dS=2,jo=1,fS=2,na=3,rr=0,ln=1,pi=2,xi=0,_s=1,mp=2,gp=3,_p=4,hS=5,xr=100,pS=101,mS=102,gS=103,_S=104,vS=200,xS=201,SS=202,yS=203,Ku=204,Zu=205,MS=206,ES=207,TS=208,wS=209,AS=210,CS=211,RS=212,bS=213,PS=214,Qu=0,Ju=1,ed=2,As=3,td=4,nd=5,id=6,rd=7,w0=0,LS=1,NS=2,ei=0,A0=1,C0=2,R0=3,b0=4,P0=5,L0=6,N0=7,D0=300,Dr=301,Cs=302,Ec=303,Tc=304,Gl=306,sd=1e3,_i=1001,ad=1002,kt=1003,DS=1004,co=1005,qt=1006,wc=1007,Tr=1008,En=1009,I0=1010,U0=1011,La=1012,kf=1013,ii=1014,Kn=1015,Ai=1016,Bf=1017,zf=1018,Na=1020,F0=35902,O0=35899,k0=1021,B0=1022,kn=1023,Ci=1026,wr=1027,z0=1028,Vf=1029,Rs=1030,Hf=1031,Gf=1033,Xo=33776,qo=33777,Yo=33778,$o=33779,od=35840,ld=35841,cd=35842,ud=35843,dd=36196,fd=37492,hd=37496,pd=37488,md=37489,gd=37490,_d=37491,vd=37808,xd=37809,Sd=37810,yd=37811,Md=37812,Ed=37813,Td=37814,wd=37815,Ad=37816,Cd=37817,Rd=37818,bd=37819,Pd=37820,Ld=37821,Nd=36492,Dd=36494,Id=36495,Ud=36283,Fd=36284,Od=36285,kd=36286,IS=3200,US=0,FS=1,Wi="",Sn="srgb",bs="srgb-linear",Ml="linear",et="srgb",Br=7680,vp=519,OS=512,kS=513,BS=514,Wf=515,zS=516,VS=517,jf=518,HS=519,xp=35044,Sp="300 es",Zn=2e3,El=2001;function GS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Tl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function WS(){const t=Tl("canvas");return t.style.display="block",t}const yp={};function Mp(...t){const e="THREE."+t.shift();console.log(e,...t)}function V0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=V0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function $e(...t){t=V0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function wl(...t){const e=t.join(" ");e in yp||(yp[e]=!0,Ie(...t))}function jS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const XS={[Qu]:Ju,[ed]:id,[td]:rd,[As]:nd,[Ju]:Qu,[id]:ed,[rd]:td,[nd]:As};class Is{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ac=Math.PI/180,Bd=180/Math.PI;function za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ge(t,e,n){return Math.max(e,Math.min(n,t))}function qS(t,e){return(t%e+e)%e}function Cc(t,e,n){return(1-n)*t+n*e}function js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Us{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[a+0],m=s[a+1],_=s[a+2],T=s[a+3];if(h!==T||l!==d||c!==m||f!==_){let g=l*d+c*m+f*_+h*T;g<0&&(d=-d,m=-m,_=-_,T=-T,g=-g);let u=1-o;if(g<.9995){const p=Math.acos(g),S=Math.sin(p);u=Math.sin(u*p)/S,o=Math.sin(o*p)/S,l=l*u+d*o,c=c*u+m*o,f=f*u+_*o,h=h*u+T*o}else{l=l*u+d*o,c=c*u+m*o,f=f*u+_*o,h=h*u+T*o;const p=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=p,c*=p,f*=p,h*=p}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[a],d=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+f*h+l*m-c*d,e[n+1]=l*_+f*d+c*h-o*m,e[n+2]=c*_+f*m+o*d-l*h,e[n+3]=f*_-o*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),f=o(r/2),h=o(s/2),d=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=d*f*h+c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h-d*m*_;break;case"YXZ":this._x=d*f*h+c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h+d*m*_;break;case"ZXY":this._x=d*f*h-c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h-d*m*_;break;case"ZYX":this._x=d*f*h-c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h+d*m*_;break;case"YZX":this._x=d*f*h+c*m*_,this._y=c*m*h+d*f*_,this._z=c*f*_-d*m*h,this._w=c*f*h-d*m*_;break;case"XZY":this._x=d*f*h-c*m*_,this._y=c*m*h-d*f*_,this._z=c*f*_+d*m*h,this._w=c*f*h+d*m*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+o+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ge(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+a*o+r*c-s*l,this._y=r*f+a*l+s*o-i*c,this._z=s*f+a*c+i*l-r*o,this._w=a*f-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ep.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ep.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*f,this.y=i+l*f+o*c-s*h,this.z=r+l*h+s*f-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this.z=Ge(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this.z=Ge(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ge(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new G,Ep=new Us;class Oe{constructor(e,n,i,r,s,a,o,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],_=i[8],T=r[0],g=r[3],u=r[6],p=r[1],S=r[4],M=r[7],C=r[2],R=r[5],b=r[8];return s[0]=a*T+o*p+l*C,s[3]=a*g+o*S+l*R,s[6]=a*u+o*M+l*b,s[1]=c*T+f*p+h*C,s[4]=c*g+f*S+h*R,s[7]=c*u+f*M+h*b,s[2]=d*T+m*p+_*C,s[5]=d*g+m*S+_*R,s[8]=d*u+m*M+_*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8];return n*a*f-n*o*c-i*s*f+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=f*a-o*c,d=o*l-f*s,m=c*s-a*l,_=n*h+i*d+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/_;return e[0]=h*T,e[1]=(r*c-f*i)*T,e[2]=(o*i-r*a)*T,e[3]=d*T,e[4]=(f*n-r*l)*T,e[5]=(r*s-o*n)*T,e[6]=m*T,e[7]=(i*l-c*n)*T,e[8]=(a*n-i*s)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(bc.makeScale(e,n)),this}rotate(e){return this.premultiply(bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bc=new Oe,Tp=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wp=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YS(){const t={enabled:!0,workingColorSpace:bs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=Si(r.r),r.g=Si(r.g),r.b=Si(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=vs(r.r),r.g=vs(r.g),r.b=vs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Wi?Ml:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return wl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return wl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[bs]:{primaries:e,whitePoint:i,transfer:Ml,toXYZ:Tp,fromXYZ:wp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:et,toXYZ:Tp,fromXYZ:wp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),t}const je=YS();function Si(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class $S{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zr===void 0&&(zr=Tl("canvas")),zr.width=e.width,zr.height=e.height;const r=zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Tl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Si(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Si(n[i]/255)*255):n[i]=Si(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class Xf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=za(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Pc(r[a].image)):s.push(Pc(r[a]))}else s=Pc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Pc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$S.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let ZS=0;const Lc=new G;class Qt extends Is{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=_i,r=_i,s=qt,a=Tr,o=kn,l=En,c=Qt.DEFAULT_ANISOTROPY,f=Wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=za(),this.name="",this.source=new Xf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Lc).x}get height(){return this.source.getSize(Lc).y}get depth(){return this.source.getSize(Lc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==D0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sd:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sd:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=D0;Qt.DEFAULT_ANISOTROPY=1;class Mt{constructor(e=0,n=0,i=0,r=1){Mt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],_=l[9],T=l[2],g=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-T)<.01&&Math.abs(_-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+T)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,M=(m+1)/2,C=(u+1)/2,R=(f+d)/4,b=(h+T)/4,y=(_+g)/4;return S>M&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=R/i,s=b/i):M>C?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=y/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=b/s,r=y/s),this.set(i,r,s,n),this}let p=Math.sqrt((g-_)*(g-_)+(h-T)*(h-T)+(d-f)*(d-f));return Math.abs(p)<.001&&(p=1),this.x=(g-_)/p,this.y=(h-T)/p,this.z=(d-f)/p,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ge(this.x,e.x,n.x),this.y=Ge(this.y,e.y,n.y),this.z=Ge(this.z,e.z,n.z),this.w=Ge(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ge(this.x,e,n),this.y=Ge(this.y,e,n),this.z=Ge(this.z,e,n),this.w=Ge(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ge(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QS extends Is{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Mt(0,0,e,n),this.scissorTest=!1,this.viewport=new Mt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new Qt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Xf(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends QS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class H0 extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JS extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class At{constructor(e,n,i,r,s,a,o,l,c,f,h,d,m,_,T,g){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,f,h,d,m,_,T,g)}set(e,n,i,r,s,a,o,l,c,f,h,d,m,_,T,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=_,u[11]=T,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,m=a*h,_=o*f,T=o*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=d-T*c,n[9]=-o*l,n[2]=T-d*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,_=c*f,T=c*h;n[0]=d+T*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=m*o-_,n[6]=T+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,_=c*f,T=c*h;n[0]=d-T*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*f,n[9]=T-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*f,m=a*h,_=o*f,T=o*h;n[0]=l*f,n[4]=_*c-m,n[8]=d*c+T,n[1]=l*h,n[5]=T*c+d,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,_=o*l,T=o*c;n[0]=l*f,n[4]=T-d*h,n[8]=_*h+m,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-c*f,n[6]=m*h+_,n[10]=d-T*h}else if(e.order==="XZY"){const d=a*l,m=a*c,_=o*l,T=o*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+T,n[5]=a*f,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*f,n[10]=T*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ey,e,ty)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ii.crossVectors(i,un),Ii.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ii.crossVectors(i,un)),Ii.normalize(),uo.crossVectors(un,Ii),r[0]=Ii.x,r[4]=uo.x,r[8]=un.x,r[1]=Ii.y,r[5]=uo.y,r[9]=un.y,r[2]=Ii.z,r[6]=uo.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],_=i[2],T=i[6],g=i[10],u=i[14],p=i[3],S=i[7],M=i[11],C=i[15],R=r[0],b=r[4],y=r[8],w=r[12],k=r[1],P=r[5],V=r[9],F=r[13],q=r[2],H=r[6],W=r[10],U=r[14],B=r[3],X=r[7],Q=r[11],oe=r[15];return s[0]=a*R+o*k+l*q+c*B,s[4]=a*b+o*P+l*H+c*X,s[8]=a*y+o*V+l*W+c*Q,s[12]=a*w+o*F+l*U+c*oe,s[1]=f*R+h*k+d*q+m*B,s[5]=f*b+h*P+d*H+m*X,s[9]=f*y+h*V+d*W+m*Q,s[13]=f*w+h*F+d*U+m*oe,s[2]=_*R+T*k+g*q+u*B,s[6]=_*b+T*P+g*H+u*X,s[10]=_*y+T*V+g*W+u*Q,s[14]=_*w+T*F+g*U+u*oe,s[3]=p*R+S*k+M*q+C*B,s[7]=p*b+S*P+M*H+C*X,s[11]=p*y+S*V+M*W+C*Q,s[15]=p*w+S*F+M*U+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],_=e[3],T=e[7],g=e[11],u=e[15],p=l*m-c*d,S=o*m-c*h,M=o*d-l*h,C=a*m-c*f,R=a*d-l*f,b=a*h-o*f;return n*(T*p-g*S+u*M)-i*(_*p-g*C+u*R)+r*(_*S-T*C+u*b)-s*(_*M-T*R+g*b)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],_=e[12],T=e[13],g=e[14],u=e[15],p=n*o-i*a,S=n*l-r*a,M=n*c-s*a,C=i*l-r*o,R=i*c-s*o,b=r*c-s*l,y=f*T-h*_,w=f*g-d*_,k=f*u-m*_,P=h*g-d*T,V=h*u-m*T,F=d*u-m*g,q=p*F-S*V+M*P+C*k-R*w+b*y;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/q;return e[0]=(o*F-l*V+c*P)*H,e[1]=(r*V-i*F-s*P)*H,e[2]=(T*b-g*R+u*C)*H,e[3]=(d*R-h*b-m*C)*H,e[4]=(l*k-a*F-c*w)*H,e[5]=(n*F-r*k+s*w)*H,e[6]=(g*M-_*b-u*S)*H,e[7]=(f*b-d*M+m*S)*H,e[8]=(a*V-o*k+c*y)*H,e[9]=(i*k-n*V-s*y)*H,e[10]=(_*R-T*M+u*p)*H,e[11]=(h*M-f*R-m*p)*H,e[12]=(o*w-a*P-l*y)*H,e[13]=(n*P-i*w+r*y)*H,e[14]=(T*S-_*C-g*p)*H,e[15]=(f*C-h*S+d*p)*H,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,f=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,f*o+i,f*l-r*a,0,c*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,f=a+a,h=o+o,d=s*c,m=s*f,_=s*h,T=a*f,g=a*h,u=o*h,p=l*c,S=l*f,M=l*h,C=i.x,R=i.y,b=i.z;return r[0]=(1-(T+u))*C,r[1]=(m+M)*C,r[2]=(_-S)*C,r[3]=0,r[4]=(m-M)*R,r[5]=(1-(d+u))*R,r[6]=(g+p)*R,r[7]=0,r[8]=(_+S)*b,r[9]=(g-p)*b,r[10]=(1-(d+T))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Pn.copy(this);const c=1/a,f=1/o,h=1/l;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=f,Pn.elements[5]*=f,Pn.elements[6]*=f,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,n.setFromRotationMatrix(Pn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Zn,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let _,T;if(l)_=s/(a-s),T=a*s/(a-s);else if(o===Zn)_=-(a+s)/(a-s),T=-2*a*s/(a-s);else if(o===El)_=-a/(a-s),T=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Zn,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,T;if(l)_=1/(a-s),T=a/(a-s);else if(o===Zn)_=-2/(a-s),T=-(a+s)/(a-s);else if(o===El)_=-1/(a-s),T=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=T,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Vr=new G,Pn=new At,ey=new G(0,0,0),ty=new G(1,1,1),Ii=new G,uo=new G,un=new G,Ap=new At,Cp=new Us;class Ri{constructor(e=0,n=0,i=0,r=Ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Ap.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ap,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Cp.setFromEuler(this),this.setFromQuaternion(Cp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ri.DEFAULT_ORDER="XYZ";class G0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ny=0;const Rp=new G,Hr=new Us,oi=new At,fo=new G,Xs=new G,iy=new G,ry=new Us,bp=new G(1,0,0),Pp=new G(0,1,0),Lp=new G(0,0,1),Np={type:"added"},sy={type:"removed"},Gr={type:"childadded",child:null},Nc={type:"childremoved",child:null};class mn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new G,n=new Ri,i=new Us,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Oe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new G0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(e,n){return Hr.setFromAxisAngle(e,n),this.quaternion.premultiply(Hr),this}rotateX(e){return this.rotateOnAxis(bp,e)}rotateY(e){return this.rotateOnAxis(Pp,e)}rotateZ(e){return this.rotateOnAxis(Lp,e)}translateOnAxis(e,n){return Rp.copy(e).applyQuaternion(this.quaternion),this.position.add(Rp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(bp,e)}translateY(e){return this.translateOnAxis(Pp,e)}translateZ(e){return this.translateOnAxis(Lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fo.copy(e):fo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Xs,fo,this.up):oi.lookAt(fo,Xs,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Hr.setFromRotationMatrix(oi),this.quaternion.premultiply(Hr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?($e("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Np),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null):$e("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sy),Nc.child=e,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Np),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,iy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,ry,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const f=o[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new G(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ho extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ay={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const T of e.hand.values()){const g=n.getJointPose(T,i),u=this._getHandJoint(c,T);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&d>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ay)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ho;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},po={h:0,s:0,l:0};function Ic(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=qS(e,1),n=Ge(n,0,1),i=Ge(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ic(a,s,e+1/3),this.g=Ic(a,s,e),this.b=Ic(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Sn){const i=W0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Si(e.r),this.g=Si(e.g),this.b=Si(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return je.workingToColorSpace(jt.copy(this),e),Math.round(Ge(jt.r*255,0,255))*65536+Math.round(Ge(jt.g*255,0,255))*256+Math.round(Ge(jt.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const f=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Sn){je.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Sn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(po);const i=Cc(Ui.h,po.h,n),r=Cc(Ui.s,po.s,n),s=Cc(Ui.l,po.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new st;st.NAMES=W0;class oy extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ln=new G,li=new G,Uc=new G,ci=new G,Wr=new G,jr=new G,Dp=new G,Fc=new G,Oc=new G,kc=new G,Bc=new Mt,zc=new Mt,Vc=new Mt;class On{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),li.subVectors(i,n),Uc.subVectors(e,n);const a=Ln.dot(Ln),o=Ln.dot(li),l=Ln.dot(Uc),c=li.dot(li),f=li.dot(Uc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-o*f)*d,_=(a*f-o*l)*d;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Bc.setScalar(0),zc.setScalar(0),Vc.setScalar(0),Bc.fromBufferAttribute(e,n),zc.fromBufferAttribute(e,i),Vc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Bc,s.x),a.addScaledVector(zc,s.y),a.addScaledVector(Vc,s.z),a}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),li.subVectors(e,n),Ln.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Ln.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Wr.subVectors(r,i),jr.subVectors(s,i),Fc.subVectors(e,i);const l=Wr.dot(Fc),c=jr.dot(Fc);if(l<=0&&c<=0)return n.copy(i);Oc.subVectors(e,r);const f=Wr.dot(Oc),h=jr.dot(Oc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(Wr,a);kc.subVectors(e,s);const m=Wr.dot(kc),_=jr.dot(kc);if(_>=0&&m<=_)return n.copy(s);const T=m*c-l*_;if(T<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(jr,o);const g=f*_-m*h;if(g<=0&&h-f>=0&&m-_>=0)return Dp.subVectors(s,r),o=(h-f)/(h-f+(m-_)),n.copy(r).addScaledVector(Dp,o);const u=1/(g+T+d);return a=T*u,o=d*u,n.copy(i).addScaledVector(Wr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Va{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),go.subVectors(this.max,qs),Xr.subVectors(e.a,qs),qr.subVectors(e.b,qs),Yr.subVectors(e.c,qs),Fi.subVectors(qr,Xr),Oi.subVectors(Yr,qr),ur.subVectors(Xr,Yr);let n=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-ur.z,ur.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,ur.z,0,-ur.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-ur.y,ur.x,0];return!Hc(n,Xr,qr,Yr,go)||(n=[1,0,0,0,1,0,0,0,1],!Hc(n,Xr,qr,Yr,go))?!1:(_o.crossVectors(Fi,Oi),n=[_o.x,_o.y,_o.z],Hc(n,Xr,qr,Yr,go))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new G,new G,new G,new G,new G,new G,new G,new G],Nn=new G,mo=new Va,Xr=new G,qr=new G,Yr=new G,Fi=new G,Oi=new G,ur=new G,qs=new G,go=new G,_o=new G,dr=new G;function Hc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){dr.fromArray(t,s);const o=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),f=i.dot(dr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>o)return!1}return!0}const Tt=new G,vo=new nt;let ly=0;class ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ly++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xp,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vo.fromBufferAttribute(this,n),vo.applyMatrix3(e),this.setXY(n,vo.x,vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=js(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=js(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=js(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xp&&(e.usage=this.usage),e}}class j0 extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class X0 extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yi extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}const cy=new Va,Ys=new G,Gc=new G;class qf{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):cy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);const n=Ys.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ys,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Gc)),this.expandByPoint(Ys.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let uy=0;const xn=new At,Wc=new mn,$r=new G,dn=new Va,$s=new Va,Dt=new G;class Pi extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(GS(e)?X0:j0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yi(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$e('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){$e("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(dn.min,$s.min),dn.expandByPoint(Dt),Dt.addVectors(dn.max,$s.max),dn.expandByPoint(Dt)):(dn.expandByPoint($s.min),dn.expandByPoint($s.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,f=o.count;c<f;c++)Dt.fromBufferAttribute(o,c),l&&($r.fromBufferAttribute(e,c),Dt.add($r)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$e('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){$e("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let y=0;y<i.count;y++)o[y]=new G,l[y]=new G;const c=new G,f=new G,h=new G,d=new nt,m=new nt,_=new nt,T=new G,g=new G;function u(y,w,k){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,k),d.fromBufferAttribute(s,y),m.fromBufferAttribute(s,w),_.fromBufferAttribute(s,k),f.sub(c),h.sub(c),m.sub(d),_.sub(d);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(T.copy(f).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(P),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-_.x).multiplyScalar(P),o[y].add(T),o[w].add(T),o[k].add(T),l[y].add(g),l[w].add(g),l[k].add(g))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let y=0,w=p.length;y<w;++y){const k=p[y],P=k.start,V=k.count;for(let F=P,q=P+V;F<q;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const S=new G,M=new G,C=new G,R=new G;function b(y){C.fromBufferAttribute(r,y),R.copy(C);const w=o[y];S.copy(w),S.sub(C.multiplyScalar(C.dot(w))).normalize(),M.crossVectors(R,w);const P=M.dot(l[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,P)}for(let y=0,w=p.length;y<w;++y){const k=p[y],P=k.start,V=k.count;for(let F=P,q=P+V;F<q;F+=3)b(e.getX(F+0)),b(e.getX(F+1)),b(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,f=new G,h=new G;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),T=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,T),a.fromBufferAttribute(n,g),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,g),o.add(f),l.add(f),c.add(f),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(T,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,f=o.itemSize,h=o.normalized,d=new c.constructor(l.length*f);let m=0,_=0;for(let T=0,g=l.length;T<g;T++){o.isInterleavedBufferAttribute?m=l[T]*o.data.stride+o.offset:m=l[T]*f;for(let u=0;u<f;u++)d[_++]=c[m++]}return new ni(d,f,h)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pi,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,f=a.length;c<f;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let dy=0;class Wl extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=za(),this.name="",this.type="Material",this.blending=_s,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Zu,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=As,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ku&&(i.blendSrc=this.blendSrc),this.blendDst!==Zu&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==As&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const di=new G,jc=new G,xo=new G,ki=new G,Xc=new G,So=new G,qc=new G;class fy{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){jc.copy(e).add(n).multiplyScalar(.5),xo.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(jc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(xo),o=ki.dot(this.direction),l=-ki.dot(xo),c=ki.lengthSq(),f=Math.abs(1-a*a);let h,d,m,_;if(f>0)if(h=a*l-o,d=a*o-l,_=s*f,h>=0)if(d>=-_)if(d<=_){const T=1/f;h*=T,d*=T,m=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(jc).addScaledVector(xo,d),m}intersectSphere(e,n){di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){Xc.subVectors(n,e),So.subVectors(i,e),qc.crossVectors(Xc,So);let a=this.direction.dot(qc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(So.crossVectors(ki,So));if(l<0)return null;const c=o*this.direction.dot(Xc.cross(ki));if(c<0||l+c>a)return null;const f=-o*ki.dot(qc);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class q0 extends Wl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=w0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ip=new At,fr=new fy,yo=new qf,Up=new G,Mo=new G,Eo=new G,To=new G,Yc=new G,wo=new G,Fp=new G,Ao=new G;class ri extends mn{constructor(e=new Pi,n=new q0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){wo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=o[l],h=s[l];f!==0&&(Yc.fromBufferAttribute(h,e),a?wo.addScaledVector(Yc,f):wo.addScaledVector(Yc.sub(n),f))}n.add(wo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(yo.containsPoint(fr.origin)===!1&&(fr.intersectSphere(yo,Up)===null||fr.origin.distanceToSquared(Up)>(e.far-e.near)**2))&&(Ip.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Ip),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,T=d.length;_<T;_++){const g=d[_],u=a[g.materialIndex],p=Math.max(g.start,m.start),S=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let M=p,C=S;M<C;M+=3){const R=o.getX(M),b=o.getX(M+1),y=o.getX(M+2);r=Co(this,u,e,i,c,f,h,R,b,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),T=Math.min(o.count,m.start+m.count);for(let g=_,u=T;g<u;g+=3){const p=o.getX(g),S=o.getX(g+1),M=o.getX(g+2);r=Co(this,a,e,i,c,f,h,p,S,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,T=d.length;_<T;_++){const g=d[_],u=a[g.materialIndex],p=Math.max(g.start,m.start),S=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let M=p,C=S;M<C;M+=3){const R=M,b=M+1,y=M+2;r=Co(this,u,e,i,c,f,h,R,b,y),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),T=Math.min(l.count,m.start+m.count);for(let g=_,u=T;g<u;g+=3){const p=g,S=g+1,M=g+2;r=Co(this,a,e,i,c,f,h,p,S,M),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function hy(t,e,n,i,r,s,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===rr,o),l===null)return null;Ao.copy(o),Ao.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ao);return c<n.near||c>n.far?null:{distance:c,point:Ao.clone(),object:t}}function Co(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Mo),t.getVertexPosition(l,Eo),t.getVertexPosition(c,To);const f=hy(t,e,n,i,Mo,Eo,To,Fp);if(f){const h=new G;On.getBarycoord(Fp,Mo,Eo,To,h),r&&(f.uv=On.getInterpolatedAttribute(r,o,l,c,h,new nt)),s&&(f.uv1=On.getInterpolatedAttribute(s,o,l,c,h,new nt)),a&&(f.normal=On.getInterpolatedAttribute(a,o,l,c,h,new G),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new G,materialIndex:0};On.getNormal(Mo,Eo,To,d.normal),f.face=d,f.barycoord=h}return f}class py extends Qt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=kt,f=kt,h,d){super(null,a,o,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $c=new G,my=new G,gy=new Oe;class vr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=$c.subVectors(i,n).cross(my.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta($c),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gy.getNormalMatrix(e),r=this.coplanarPoint($c).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new qf,_y=new nt(.5,.5),Ro=new G;class Y0{constructor(e=new vr,n=new vr,i=new vr,r=new vr,s=new vr,a=new vr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Zn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],m=s[7],_=s[8],T=s[9],g=s[10],u=s[11],p=s[12],S=s[13],M=s[14],C=s[15];if(r[0].setComponents(c-a,m-f,u-_,C-p).normalize(),r[1].setComponents(c+a,m+f,u+_,C+p).normalize(),r[2].setComponents(c+o,m+h,u+T,C+S).normalize(),r[3].setComponents(c-o,m-h,u-T,C-S).normalize(),i)r[4].setComponents(l,d,g,M).normalize(),r[5].setComponents(c-l,m-d,u-g,C-M).normalize();else if(r[4].setComponents(c-l,m-d,u-g,C-M).normalize(),n===Zn)r[5].setComponents(c+l,m+d,u+g,C+M).normalize();else if(n===El)r[5].setComponents(l,d,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){hr.center.set(0,0,0);const n=_y.distanceTo(e.center);return hr.radius=.7071067811865476+n,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ro.x=r.normal.x>0?e.max.x:e.min.x,Ro.y=r.normal.y>0?e.max.y:e.min.y,Ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $0 extends Qt{constructor(e=[],n=Dr,i,r,s,a,o,l,c,f){super(e,n,i,r,s,a,o,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Da extends Qt{constructor(e,n,i=ii,r,s,a,o=kt,l=kt,c,f=Ci,h=1){if(f!==Ci&&f!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vy extends Da{constructor(e,n=ii,i=Dr,r,s,a=kt,o=kt,l,c=Ci){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class K0 extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ha extends Pi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],f=[],h=[];let d=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(f,3)),this.setAttribute("uv",new yi(h,2));function _(T,g,u,p,S,M,C,R,b,y,w){const k=M/b,P=C/y,V=M/2,F=C/2,q=R/2,H=b+1,W=y+1;let U=0,B=0;const X=new G;for(let Q=0;Q<W;Q++){const oe=Q*P-F;for(let re=0;re<H;re++){const Le=re*k-V;X[T]=Le*p,X[g]=oe*S,X[u]=q,c.push(X.x,X.y,X.z),X[T]=0,X[g]=0,X[u]=R>0?1:-1,f.push(X.x,X.y,X.z),h.push(re/b),h.push(1-Q/y),U+=1}}for(let Q=0;Q<y;Q++)for(let oe=0;oe<b;oe++){const re=d+oe+H*Q,Le=d+oe+H*(Q+1),qe=d+(oe+1)+H*(Q+1),Ze=d+(oe+1)+H*Q;l.push(re,Le,Ze),l.push(Le,qe,Ze),B+=6}o.addGroup(m,B,w),m+=B,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ha(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ga extends Pi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,f=l+1,h=e/o,d=n/l,m=[],_=[],T=[],g=[];for(let u=0;u<f;u++){const p=u*d-a;for(let S=0;S<c;S++){const M=S*h-s;_.push(M,-p,0),T.push(0,0,1),g.push(S/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<o;p++){const S=p+c*u,M=p+c*(u+1),C=p+1+c*(u+1),R=p+1+c*u;m.push(S,M,R),m.push(M,C,R)}this.setIndex(m),this.setAttribute("position",new yi(_,3)),this.setAttribute("normal",new yi(T,3)),this.setAttribute("uv",new yi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ps(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=Ps(t[n]);for(const r in i)e[r]=i[r]}return e}function xy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Z0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const Sy={clone:Ps,merge:$t};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,My=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Wl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=My,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=xy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ey extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ty extends Wl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wy extends Wl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const bo=new G,Po=new Us,jn=new G;class Q0 extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(bo,Po,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Po,jn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(bo,Po,jn),jn.x===1&&jn.y===1&&jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(bo,Po,jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new G,Op=new nt,kp=new nt;class Fn extends Q0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ac*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bd*2*Math.atan(Math.tan(Ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,Op,kp),n.subVectors(kp,Op)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ac*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Yf extends Q0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Kr=-90,Zr=1;class Ay extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(Kr,Zr,e,n);r.layers=this.layers,this.add(r);const s=new Fn(Kr,Zr,e,n);s.layers=this.layers,this.add(s);const a=new Fn(Kr,Zr,e,n);a.layers=this.layers,this.add(a);const o=new Fn(Kr,Zr,e,n);o.layers=this.layers,this.add(o);const l=new Fn(Kr,Zr,e,n);l.layers=this.layers,this.add(l);const c=new Fn(Kr,Zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===El)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Cy extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Bp(t,e,n,i){const r=Ry(i);switch(n){case k0:return t*e;case z0:return t*e/r.components*r.byteLength;case Vf:return t*e/r.components*r.byteLength;case Rs:return t*e*2/r.components*r.byteLength;case Hf:return t*e*2/r.components*r.byteLength;case B0:return t*e*3/r.components*r.byteLength;case kn:return t*e*4/r.components*r.byteLength;case Gf:return t*e*4/r.components*r.byteLength;case Xo:case qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yo:case $o:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ld:case ud:return Math.max(t,16)*Math.max(e,8)/4;case od:case cd:return Math.max(t,8)*Math.max(e,8)/2;case dd:case fd:case pd:case md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hd:case gd:case _d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Sd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Md:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case wd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ad:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Pd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ld:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Nd:case Dd:case Id:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ud:case Fd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Od:case kd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ry(t){switch(t){case En:case I0:return{byteLength:1,components:1};case La:case U0:case Ai:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case ii:case kf:case Kn:return{byteLength:4,components:1};case F0:case O0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function J0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function by(t){const e=new WeakMap;function n(o,l){const c=o.array,f=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,_)=>m.start-_.start);let d=0;for(let m=1;m<h.length;m++){const _=h[d],T=h[m];T.start<=_.start+_.count+1?_.count=Math.max(_.count,T.start+T.count-_.start):(++d,h[d]=T)}h.length=d+1;for(let m=0,_=h.length;m<_;m++){const T=h[m];t.bufferSubData(c,T.start*f.BYTES_PER_ELEMENT,f,T.start,T.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ly=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ny=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Iy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Oy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ky=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,By=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Gy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Wy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$y=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ky=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aM="gl_FragColor = linearToOutputTexel( gl_FragColor );",oM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,cM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_M=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,EM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,RM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,PM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,LM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,XM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$M=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_E=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ME=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,RE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,e1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Py,alphahash_pars_fragment:Ly,alphamap_fragment:Ny,alphamap_pars_fragment:Dy,alphatest_fragment:Iy,alphatest_pars_fragment:Uy,aomap_fragment:Fy,aomap_pars_fragment:Oy,batching_pars_vertex:ky,batching_vertex:By,begin_vertex:zy,beginnormal_vertex:Vy,bsdfs:Hy,iridescence_fragment:Gy,bumpmap_pars_fragment:Wy,clipping_planes_fragment:jy,clipping_planes_pars_fragment:Xy,clipping_planes_pars_vertex:qy,clipping_planes_vertex:Yy,color_fragment:$y,color_pars_fragment:Ky,color_pars_vertex:Zy,color_vertex:Qy,common:Jy,cube_uv_reflection_fragment:eM,defaultnormal_vertex:tM,displacementmap_pars_vertex:nM,displacementmap_vertex:iM,emissivemap_fragment:rM,emissivemap_pars_fragment:sM,colorspace_fragment:aM,colorspace_pars_fragment:oM,envmap_fragment:lM,envmap_common_pars_fragment:cM,envmap_pars_fragment:uM,envmap_pars_vertex:dM,envmap_physical_pars_fragment:MM,envmap_vertex:fM,fog_vertex:hM,fog_pars_vertex:pM,fog_fragment:mM,fog_pars_fragment:gM,gradientmap_pars_fragment:_M,lightmap_pars_fragment:vM,lights_lambert_fragment:xM,lights_lambert_pars_fragment:SM,lights_pars_begin:yM,lights_toon_fragment:EM,lights_toon_pars_fragment:TM,lights_phong_fragment:wM,lights_phong_pars_fragment:AM,lights_physical_fragment:CM,lights_physical_pars_fragment:RM,lights_fragment_begin:bM,lights_fragment_maps:PM,lights_fragment_end:LM,logdepthbuf_fragment:NM,logdepthbuf_pars_fragment:DM,logdepthbuf_pars_vertex:IM,logdepthbuf_vertex:UM,map_fragment:FM,map_pars_fragment:OM,map_particle_fragment:kM,map_particle_pars_fragment:BM,metalnessmap_fragment:zM,metalnessmap_pars_fragment:VM,morphinstance_vertex:HM,morphcolor_vertex:GM,morphnormal_vertex:WM,morphtarget_pars_vertex:jM,morphtarget_vertex:XM,normal_fragment_begin:qM,normal_fragment_maps:YM,normal_pars_fragment:$M,normal_pars_vertex:KM,normal_vertex:ZM,normalmap_pars_fragment:QM,clearcoat_normal_fragment_begin:JM,clearcoat_normal_fragment_maps:eE,clearcoat_pars_fragment:tE,iridescence_pars_fragment:nE,opaque_fragment:iE,packing:rE,premultiplied_alpha_fragment:sE,project_vertex:aE,dithering_fragment:oE,dithering_pars_fragment:lE,roughnessmap_fragment:cE,roughnessmap_pars_fragment:uE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:fE,shadowmap_vertex:hE,shadowmask_pars_fragment:pE,skinbase_vertex:mE,skinning_pars_vertex:gE,skinning_vertex:_E,skinnormal_vertex:vE,specularmap_fragment:xE,specularmap_pars_fragment:SE,tonemapping_fragment:yE,tonemapping_pars_fragment:ME,transmission_fragment:EE,transmission_pars_fragment:TE,uv_pars_fragment:wE,uv_pars_vertex:AE,uv_vertex:CE,worldpos_vertex:RE,background_vert:bE,background_frag:PE,backgroundCube_vert:LE,backgroundCube_frag:NE,cube_vert:DE,cube_frag:IE,depth_vert:UE,depth_frag:FE,distance_vert:OE,distance_frag:kE,equirect_vert:BE,equirect_frag:zE,linedashed_vert:VE,linedashed_frag:HE,meshbasic_vert:GE,meshbasic_frag:WE,meshlambert_vert:jE,meshlambert_frag:XE,meshmatcap_vert:qE,meshmatcap_frag:YE,meshnormal_vert:$E,meshnormal_frag:KE,meshphong_vert:ZE,meshphong_frag:QE,meshphysical_vert:JE,meshphysical_frag:e1,meshtoon_vert:t1,meshtoon_frag:n1,points_vert:i1,points_frag:r1,shadow_vert:s1,shadow_frag:a1,sprite_vert:o1,sprite_frag:l1},de={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Yn={basic:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:$t([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:$t([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:$t([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new st(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:$t([de.points,de.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:$t([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:$t([de.common,de.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:$t([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:$t([de.sprite,de.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:$t([de.common,de.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:$t([de.lights,de.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Yn.physical={uniforms:$t([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Lo={r:0,b:0,g:0},pr=new Ri,c1=new At;function u1(t,e,n,i,r,s){const a=new st(0);let o=r===!0?0:1,l,c,f=null,h=0,d=null;function m(p){let S=p.isScene===!0?p.background:null;if(S&&S.isTexture){const M=p.backgroundBlurriness>0;S=e.get(S,M)}return S}function _(p){let S=!1;const M=m(p);M===null?g(a,o):M&&M.isColor&&(g(M,1),S=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function T(p,S){const M=m(S);M&&(M.isCubeTexture||M.mapping===Gl)?(c===void 0&&(c=new ri(new Ha(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:Ps(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),pr.copy(S.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),c.material.uniforms.envMap.value=M,c.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c1.makeRotationFromEuler(pr)),c.material.toneMapped=je.getTransfer(M.colorSpace)!==et,(f!==M||h!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ri(new Ga(2,2),new Hn({name:"BackgroundMaterial",uniforms:Ps(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=je.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||h!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=M,h=M.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,S){p.getRGB(Lo,Z0(t)),n.buffers.color.setClear(Lo.r,Lo.g,Lo.b,S,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,S=1){a.set(p),o=S,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(a,o)},render:_,addToRenderList:T,dispose:u}}function d1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(P,V,F,q,H){let W=!1;const U=h(P,q,F,V);s!==U&&(s=U,c(s.object)),W=m(P,q,F,H),W&&_(P,q,F,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,M(P,V,F,q),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function f(P){return t.deleteVertexArray(P)}function h(P,V,F,q){const H=q.wireframe===!0;let W=i[V.id];W===void 0&&(W={},i[V.id]=W);const U=P.isInstancedMesh===!0?P.id:0;let B=W[U];B===void 0&&(B={},W[U]=B);let X=B[F.id];X===void 0&&(X={},B[F.id]=X);let Q=X[H];return Q===void 0&&(Q=d(l()),X[H]=Q),Q}function d(P){const V=[],F=[],q=[];for(let H=0;H<n;H++)V[H]=0,F[H]=0,q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:F,attributeDivisors:q,object:P,attributes:{},index:null}}function m(P,V,F,q){const H=s.attributes,W=V.attributes;let U=0;const B=F.getAttributes();for(const X in B)if(B[X].location>=0){const oe=H[X];let re=W[X];if(re===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),oe===void 0||oe.attribute!==re||re&&oe.data!==re.data)return!0;U++}return s.attributesNum!==U||s.index!==q}function _(P,V,F,q){const H={},W=V.attributes;let U=0;const B=F.getAttributes();for(const X in B)if(B[X].location>=0){let oe=W[X];oe===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));const re={};re.attribute=oe,oe&&oe.data&&(re.data=oe.data),H[X]=re,U++}s.attributes=H,s.attributesNum=U,s.index=q}function T(){const P=s.newAttributes;for(let V=0,F=P.length;V<F;V++)P[V]=0}function g(P){u(P,0)}function u(P,V){const F=s.newAttributes,q=s.enabledAttributes,H=s.attributeDivisors;F[P]=1,q[P]===0&&(t.enableVertexAttribArray(P),q[P]=1),H[P]!==V&&(t.vertexAttribDivisor(P,V),H[P]=V)}function p(){const P=s.newAttributes,V=s.enabledAttributes;for(let F=0,q=V.length;F<q;F++)V[F]!==P[F]&&(t.disableVertexAttribArray(F),V[F]=0)}function S(P,V,F,q,H,W,U){U===!0?t.vertexAttribIPointer(P,V,F,H,W):t.vertexAttribPointer(P,V,F,q,H,W)}function M(P,V,F,q){T();const H=q.attributes,W=F.getAttributes(),U=V.defaultAttributeValues;for(const B in W){const X=W[B];if(X.location>=0){let Q=H[B];if(Q===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const oe=Q.normalized,re=Q.itemSize,Le=e.get(Q);if(Le===void 0)continue;const qe=Le.buffer,Ze=Le.type,K=Le.bytesPerElement,ie=Ze===t.INT||Ze===t.UNSIGNED_INT||Q.gpuType===kf;if(Q.isInterleavedBufferAttribute){const ue=Q.data,Fe=ue.stride,be=Q.offset;if(ue.isInstancedInterleavedBuffer){for(let Ne=0;Ne<X.locationSize;Ne++)u(X.location+Ne,ue.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ne=0;Ne<X.locationSize;Ne++)g(X.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Ne=0;Ne<X.locationSize;Ne++)S(X.location+Ne,re/X.locationSize,Ze,oe,Fe*K,(be+re/X.locationSize*Ne)*K,ie)}else{if(Q.isInstancedBufferAttribute){for(let ue=0;ue<X.locationSize;ue++)u(X.location+ue,Q.meshPerAttribute);P.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ue=0;ue<X.locationSize;ue++)g(X.location+ue);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let ue=0;ue<X.locationSize;ue++)S(X.location+ue,re/X.locationSize,Ze,oe,re*K,re/X.locationSize*ue*K,ie)}}else if(U!==void 0){const oe=U[B];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(X.location,oe);break;case 3:t.vertexAttrib3fv(X.location,oe);break;case 4:t.vertexAttrib4fv(X.location,oe);break;default:t.vertexAttrib1fv(X.location,oe)}}}}p()}function C(){w();for(const P in i){const V=i[P];for(const F in V){const q=V[F];for(const H in q){const W=q[H];for(const U in W)f(W[U].object),delete W[U];delete q[H]}}delete i[P]}}function R(P){if(i[P.id]===void 0)return;const V=i[P.id];for(const F in V){const q=V[F];for(const H in q){const W=q[H];for(const U in W)f(W[U].object),delete W[U];delete q[H]}}delete i[P.id]}function b(P){for(const V in i){const F=i[V];for(const q in F){const H=F[q];if(H[P.id]===void 0)continue;const W=H[P.id];for(const U in W)f(W[U].object),delete W[U];delete H[P.id]}}}function y(P){for(const V in i){const F=i[V],q=P.isInstancedMesh===!0?P.id:0,H=F[q];if(H!==void 0){for(const W in H){const U=H[W];for(const B in U)f(U[B].object),delete U[B];delete H[W]}delete F[q],Object.keys(F).length===0&&delete i[V]}}}function w(){k(),a=!0,s!==r&&(s=r,c(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:w,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfObject:y,releaseStatesOfProgram:b,initAttributes:T,enableAttribute:g,disableUnusedAttributes:p}}function f1(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function a(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function o(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let m=0;for(let _=0;_<h;_++)m+=f[_];n.update(m,i,1)}function l(c,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],f[_],d[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let _=0;for(let T=0;T<h;T++)_+=f[T]*d[T];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function h1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==kn&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const y=b===Ai&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==En&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Kn&&!y)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ie("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:T,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:p,maxVaryings:S,maxFragmentUniforms:M,maxSamples:C,samples:R}}function p1(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new vr,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const _=h.clippingPlanes,T=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?f(null):c();else{const p=s?0:i,S=p*4;let M=u.clippingState||null;l.value=M,M=f(_,d,S,m);for(let C=0;C!==S;++C)M[C]=n[C];u.clippingState=M,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,_){const T=h!==null?h.length:0;let g=null;if(T!==0){if(g=l.value,_!==!0||g===null){const u=m+T*4,p=d.matrixWorldInverse;o.getNormalMatrix(p),(g===null||g.length<u)&&(g=new Float32Array(u));for(let S=0,M=m;S!==T;++S,M+=4)a.copy(h[S]).applyMatrix4(p,o),a.normal.toArray(g,M),g[M+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,g}}const qi=4,zp=[.125,.215,.35,.446,.526,.582],Sr=20,m1=256,Ks=new Yf,Vp=new st;let Kc=null,Zc=0,Qc=0,Jc=!1;const g1=new G;class Hp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=g1}=s;Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Kc,Zc,Qc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,Qr(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Dr||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Kc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Qc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Ai,format:kn,colorSpace:bs,depthBuffer:!1},r=Gp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gp(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_1(s)),this._blurMaterial=x1(s,e,n),this._ggxMaterial=v1(s,e,n)}return r}_compileMaterial(e){const n=new ri(new Pi,e);this._renderer.compile(n,Ks)}_sceneToCubeUV(e,n,i,r,s){const l=new Fn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(Vp),h.toneMapping=ei,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new Ha,new q0({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,g=T.material;let u=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,u=!0):(g.color.copy(Vp),u=!0);for(let S=0;S<6;S++){const M=S%3;M===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[S],s.y,s.z)):M===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[S]));const C=this._cubeSize;Qr(r,M*C,S>2?C:0,C,C),h.setRenderTarget(r),u&&h.render(T,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Dr||e.mapping===Cs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Qr(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Ks)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,m=h*d,{_lodMax:_}=this,T=this._sizeLods[i],g=3*T*(i>_-qi?i-_+qi:0),u=4*(this._cubeSize-T);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-n,Qr(s,g,u,3*T,2*T),r.setRenderTarget(s),r.render(o,Ks),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,Qr(e,g,u,3*T,2*T),r.setRenderTarget(e),r.render(o,Ks)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&$e("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Sr-1),T=s/_,g=isFinite(s)?1+Math.floor(f*T):Sr;g>Sr&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Sr}`);const u=[];let p=0;for(let b=0;b<Sr;++b){const y=b/T,w=Math.exp(-y*y/2);u.push(w),b===0?p+=w:b<g&&(p+=2*w)}for(let b=0;b<u.length;b++)u[b]=u[b]/p;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=_,d.mipInt.value=S-i;const M=this._sizeLods[r],C=3*M*(r>S-qi?r-S+qi:0),R=4*(this._cubeSize-M);Qr(n,C,R,3*M,2*M),l.setRenderTarget(n),l.render(h,Ks)}}function _1(t){const e=[],n=[],i=[];let r=t;const s=t-qi+1+zp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-qi?l=zp[a-t+qi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,_=6,T=3,g=2,u=1,p=new Float32Array(T*_*m),S=new Float32Array(g*_*m),M=new Float32Array(u*_*m);for(let R=0;R<m;R++){const b=R%3*2/3-1,y=R>2?0:-1,w=[b,y,0,b+2/3,y,0,b+2/3,y+1,0,b,y,0,b+2/3,y+1,0,b,y+1,0];p.set(w,T*_*R),S.set(d,g*_*R);const k=[R,R,R,R,R,R];M.set(k,u*_*R)}const C=new Pi;C.setAttribute("position",new ni(p,T)),C.setAttribute("uv",new ni(S,g)),C.setAttribute("faceIndex",new ni(M,u)),i.push(new ri(C,null)),r>qi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Gp(t,e,n){const i=new ti(t,e,n);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function v1(t,e,n){return new Hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function x1(t,e,n){const i=new Float32Array(Sr),r=new G(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Wp(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function jp(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function jl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class e_ extends ti{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ha(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:xi});s.uniforms.tEquirect.value=n;const a=new ri(r,s),o=n.minFilter;return n.minFilter===Tr&&(n.minFilter=qt),new Ay(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function S1(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Ec||m===Tc)if(e.has(d)){const _=e.get(d).texture;return o(_,d.mapping)}else{const _=d.image;if(_&&_.height>0){const T=new e_(_.height);return T.fromEquirectangularTexture(t,d),e.set(d,T),d.addEventListener("dispose",c),o(T.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,_=m===Ec||m===Tc,T=m===Dr||m===Cs;if(_||T){let g=n.get(d);const u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new Hp(t)),g=_?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const p=d.image;return _&&p&&p.height>0||T&&p&&l(p)?(i===null&&(i=new Hp(t)),g=_?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function o(d,m){return m===Ec?d.mapping=Dr:m===Tc&&(d.mapping=Cs),d}function l(d){let m=0;const _=6;for(let T=0;T<_;T++)d[T]!==void 0&&m++;return m===_}function c(d){const m=d.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function y1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&wl("WebGLRenderer: "+i+" extension not supported."),r}}}function M1(t,e,n,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,_=h.attributes.position;let T=0;if(_===void 0)return;if(m!==null){const p=m.array;T=m.version;for(let S=0,M=p.length;S<M;S+=3){const C=p[S+0],R=p[S+1],b=p[S+2];d.push(C,R,R,b,b,C)}}else{const p=_.array;T=_.version;for(let S=0,M=p.length/3-1;S<M;S+=3){const C=S+0,R=S+1,b=S+2;d.push(C,R,R,b,b,C)}}const g=new(_.count>=65535?X0:j0)(d,1);g.version=T;const u=s.get(h);u&&e.remove(u),s.set(h,g)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function E1(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*a),n.update(m,i,1)}function c(d,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,d*a,_),n.update(m,i,_))}function f(d,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,_);let g=0;for(let u=0;u<_;u++)g+=m[u];n.update(g,i,1)}function h(d,m,_,T){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<d.length;u++)c(d[u]/a,m[u],T[u]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,T,0,_);let u=0;for(let p=0;p<_;p++)u+=m[p]*T[p];n.update(u,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function T1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:$e("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function w1(t,e,n){const i=new WeakMap,r=new Mt;function s(a,o,l){const c=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let k=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",k)};var m=k;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,T=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),T===!0&&(M=2),g===!0&&(M=3);let C=o.attributes.position.count*M,R=1;C>e.maxTextureSize&&(R=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const b=new Float32Array(C*R*4*h),y=new H0(b,C,R,h);y.type=Kn,y.needsUpdate=!0;const w=M*4;for(let P=0;P<h;P++){const V=u[P],F=p[P],q=S[P],H=C*R*4*P;for(let W=0;W<V.count;W++){const U=W*w;_===!0&&(r.fromBufferAttribute(V,W),b[H+U+0]=r.x,b[H+U+1]=r.y,b[H+U+2]=r.z,b[H+U+3]=0),T===!0&&(r.fromBufferAttribute(F,W),b[H+U+4]=r.x,b[H+U+5]=r.y,b[H+U+6]=r.z,b[H+U+7]=0),g===!0&&(r.fromBufferAttribute(q,W),b[H+U+8]=r.x,b[H+U+9]=r.y,b[H+U+10]=r.z,b[H+U+11]=q.itemSize===4?r.w:1)}}d={count:h,texture:y,size:new nt(C,R)},i.set(o,d),o.addEventListener("dispose",k)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const T=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",T),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function A1(t,e,n,i,r){let s=new WeakMap;function a(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function o(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:o}}const C1={[A0]:"LINEAR_TONE_MAPPING",[C0]:"REINHARD_TONE_MAPPING",[R0]:"CINEON_TONE_MAPPING",[b0]:"ACES_FILMIC_TONE_MAPPING",[L0]:"AGX_TONE_MAPPING",[N0]:"NEUTRAL_TONE_MAPPING",[P0]:"CUSTOM_TONE_MAPPING"};function R1(t,e,n,i,r){const s=new ti(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new ti(e,n,{type:Ai,depthBuffer:!1,stencilBuffer:!1}),o=new Pi;o.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new yi([0,2,0,0,2,0],2));const l=new Ey({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ri(o,l),f=new Yf(-1,1,1,-1,0,1);let h=null,d=null,m=!1,_,T=null,g=[],u=!1;this.setSize=function(p,S){s.setSize(p,S),a.setSize(p,S);for(let M=0;M<g.length;M++){const C=g[M];C.setSize&&C.setSize(p,S)}},this.setEffects=function(p){g=p,u=g.length>0&&g[0].isRenderPass===!0;const S=s.width,M=s.height;for(let C=0;C<g.length;C++){const R=g[C];R.setSize&&R.setSize(S,M)}},this.begin=function(p,S){if(m||p.toneMapping===ei&&g.length===0)return!1;if(T=S,S!==null){const M=S.width,C=S.height;(s.width!==M||s.height!==C)&&this.setSize(M,C)}return u===!1&&p.setRenderTarget(s),_=p.toneMapping,p.toneMapping=ei,!0},this.hasRenderPass=function(){return u},this.end=function(p,S){p.toneMapping=_,m=!0;let M=s,C=a;for(let R=0;R<g.length;R++){const b=g[R];if(b.enabled!==!1&&(b.render(p,C,M,S),b.needsSwap!==!1)){const y=M;M=C,C=y}}if(h!==p.outputColorSpace||d!==p.toneMapping){h=p.outputColorSpace,d=p.toneMapping,l.defines={},je.getTransfer(h)===et&&(l.defines.SRGB_TRANSFER="");const R=C1[d];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,p.setRenderTarget(T),p.render(c,f),T=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const t_=new Qt,zd=new Da(1,1),n_=new H0,i_=new JS,r_=new $0,Xp=[],qp=[],Yp=new Float32Array(16),$p=new Float32Array(9),Kp=new Float32Array(4);function Fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Xp[r];if(s===void 0&&(s=new Float32Array(r),Xp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xl(t,e){let n=qp[e];n===void 0&&(n=new Int32Array(e),qp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function b1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function P1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function N1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function D1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;Kp.set(i),t.uniformMatrix2fv(this.addr,!1,Kp),Pt(n,i)}}function I1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;$p.set(i),t.uniformMatrix3fv(this.addr,!1,$p),Pt(n,i)}}function U1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(bt(n,i))return;Yp.set(i),t.uniformMatrix4fv(this.addr,!1,Yp),Pt(n,i)}}function F1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function B1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function z1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function W1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(zd.compareFunction=n.isReversedDepthBuffer()?jf:Wf,s=zd):s=t_,n.setTexture2D(e||s,r)}function j1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||i_,r)}function X1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||r_,r)}function q1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||n_,r)}function Y1(t){switch(t){case 5126:return b1;case 35664:return P1;case 35665:return L1;case 35666:return N1;case 35674:return D1;case 35675:return I1;case 35676:return U1;case 5124:case 35670:return F1;case 35667:case 35671:return O1;case 35668:case 35672:return k1;case 35669:case 35673:return B1;case 5125:return z1;case 36294:return V1;case 36295:return H1;case 36296:return G1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return j1;case 35680:case 36300:case 36308:case 36293:return X1;case 36289:case 36303:case 36311:case 36292:return q1}}function $1(t,e){t.uniform1fv(this.addr,e)}function K1(t,e){const n=Fs(e,this.size,2);t.uniform2fv(this.addr,n)}function Z1(t,e){const n=Fs(e,this.size,3);t.uniform3fv(this.addr,n)}function Q1(t,e){const n=Fs(e,this.size,4);t.uniform4fv(this.addr,n)}function J1(t,e){const n=Fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function eT(t,e){const n=Fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tT(t,e){const n=Fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nT(t,e){t.uniform1iv(this.addr,e)}function iT(t,e){t.uniform2iv(this.addr,e)}function rT(t,e){t.uniform3iv(this.addr,e)}function sT(t,e){t.uniform4iv(this.addr,e)}function aT(t,e){t.uniform1uiv(this.addr,e)}function oT(t,e){t.uniform2uiv(this.addr,e)}function lT(t,e){t.uniform3uiv(this.addr,e)}function cT(t,e){t.uniform4uiv(this.addr,e)}function uT(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=zd:a=t_;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function dT(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||i_,s[a])}function fT(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||r_,s[a])}function hT(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||n_,s[a])}function pT(t){switch(t){case 5126:return $1;case 35664:return K1;case 35665:return Z1;case 35666:return Q1;case 35674:return J1;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return aT;case 36294:return oT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return dT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return hT}}class mT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Y1(n.type)}}class gT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pT(n.type)}}class _T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const eu=/(\w+)(\])?(\[|\.)?/g;function Zp(t,e){t.seq.push(e),t.map[e.id]=e}function vT(t,e,n){const i=t.name,r=i.length;for(eu.lastIndex=0;;){const s=eu.exec(i),a=eu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Zp(n,c===void 0?new mT(o,t,e):new gT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new _T(o),Zp(n,h)),n=h}}}class Ko{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);vT(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Qp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xT=37297;let ST=0;function yT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Jp=new Oe;function MT(t){je._getMatrix(Jp,je.workingColorSpace,t);const e=`mat3( ${Jp.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case Ml:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function em(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+yT(t.getShaderSource(e),o)}else return s}function ET(t,e){const n=MT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const TT={[A0]:"Linear",[C0]:"Reinhard",[R0]:"Cineon",[b0]:"ACESFilmic",[L0]:"AgX",[N0]:"Neutral",[P0]:"Custom"};function wT(t,e){const n=TT[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const No=new G;function AT(){je.getLuminanceCoefficients(No);const t=No.x.toFixed(4),e=No.y.toFixed(4),n=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function RT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function bT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ia(t){return t!==""}function tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(t){return t.replace(PT,NT)}const LT=new Map;function NT(t,e){let n=ke[e];if(n===void 0){const i=LT.get(e);if(i!==void 0)n=ke[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Vd(n)}const DT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function im(t){return t.replace(DT,IT)}function IT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function rm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const UT={[jo]:"SHADOWMAP_TYPE_PCF",[na]:"SHADOWMAP_TYPE_VSM"};function FT(t){return UT[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const OT={[Dr]:"ENVMAP_TYPE_CUBE",[Cs]:"ENVMAP_TYPE_CUBE",[Gl]:"ENVMAP_TYPE_CUBE_UV"};function kT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":OT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const BT={[Cs]:"ENVMAP_MODE_REFRACTION"};function zT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":BT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VT={[w0]:"ENVMAP_BLENDING_MULTIPLY",[LS]:"ENVMAP_BLENDING_MIX",[NS]:"ENVMAP_BLENDING_ADD"};function HT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":VT[t.combine]||"ENVMAP_BLENDING_NONE"}function GT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function WT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=FT(n),c=kT(n),f=zT(n),h=HT(n),d=GT(n),m=CT(n),_=RT(s),T=r.createProgram();let g,u,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ia).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(ia).join(`
`),u.length>0&&(u+=`
`)):(g=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),u=[rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ei?"#define TONE_MAPPING":"",n.toneMapping!==ei?ke.tonemapping_pars_fragment:"",n.toneMapping!==ei?wT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,ET("linearToOutputTexel",n.outputColorSpace),AT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),a=Vd(a),a=tm(a,n),a=nm(a,n),o=Vd(o),o=tm(o,n),o=nm(o,n),a=im(a),o=im(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===Sp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Sp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const S=p+g+a,M=p+u+o,C=Qp(r,r.VERTEX_SHADER,S),R=Qp(r,r.FRAGMENT_SHADER,M);r.attachShader(T,C),r.attachShader(T,R),n.index0AttributeName!==void 0?r.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function b(P){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(T)||"",F=r.getShaderInfoLog(C)||"",q=r.getShaderInfoLog(R)||"",H=V.trim(),W=F.trim(),U=q.trim();let B=!0,X=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,T,C,R);else{const Q=em(r,C,"vertex"),oe=em(r,R,"fragment");$e("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Q+`
`+oe)}else H!==""?Ie("WebGLProgram: Program Info Log:",H):(W===""||U==="")&&(X=!1);X&&(P.diagnostics={runnable:B,programLog:H,vertexShader:{log:W,prefix:g},fragmentShader:{log:U,prefix:u}})}r.deleteShader(C),r.deleteShader(R),y=new Ko(r,T),w=bT(r,T)}let y;this.getUniforms=function(){return y===void 0&&b(this),y};let w;this.getAttributes=function(){return w===void 0&&b(this),w};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(T,xT)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ST++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=C,this.fragmentShader=R,this}let jT=0;class XT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new qT(e),n.set(e,i)),i}}class qT{constructor(e){this.id=jT++,this.code=e,this.usedTimes=0}}function YT(t,e,n,i,r,s){const a=new G0,o=new XT,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function T(y,w,k,P,V){const F=P.fog,q=V.geometry,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,U=e.get(y.envMap||H,W),B=U&&U.mapping===Gl?U.image.height:null,X=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ie("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const Q=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=Q!==void 0?Q.length:0;let re=0;q.morphAttributes.position!==void 0&&(re=1),q.morphAttributes.normal!==void 0&&(re=2),q.morphAttributes.color!==void 0&&(re=3);let Le,qe,Ze,K;if(X){const Je=Yn[X];Le=Je.vertexShader,qe=Je.fragmentShader}else Le=y.vertexShader,qe=y.fragmentShader,o.update(y),Ze=o.getVertexShaderID(y),K=o.getFragmentShaderID(y);const ie=t.getRenderTarget(),ue=t.state.buffers.depth.getReversed(),Fe=V.isInstancedMesh===!0,be=V.isBatchedMesh===!0,Ne=!!y.map,Lt=!!y.matcap,We=!!U,Qe=!!y.aoMap,at=!!y.lightMap,Be=!!y.bumpMap,xt=!!y.normalMap,L=!!y.displacementMap,Et=!!y.emissiveMap,Ke=!!y.metalnessMap,lt=!!y.roughnessMap,Ee=y.anisotropy>0,A=y.clearcoat>0,x=y.dispersion>0,D=y.iridescence>0,Z=y.sheen>0,J=y.transmission>0,$=Ee&&!!y.anisotropyMap,ve=A&&!!y.clearcoatMap,le=A&&!!y.clearcoatNormalMap,Ce=A&&!!y.clearcoatRoughnessMap,Pe=D&&!!y.iridescenceMap,te=D&&!!y.iridescenceThicknessMap,se=Z&&!!y.sheenColorMap,xe=Z&&!!y.sheenRoughnessMap,ye=!!y.specularMap,pe=!!y.specularColorMap,ze=!!y.specularIntensityMap,N=J&&!!y.transmissionMap,ce=J&&!!y.thicknessMap,ae=!!y.gradientMap,_e=!!y.alphaMap,ne=y.alphaTest>0,Y=!!y.alphaHash,Se=!!y.extensions;let De=ei;y.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(De=t.toneMapping);const ct={shaderID:X,shaderType:y.type,shaderName:y.name,vertexShader:Le,fragmentShader:qe,defines:y.defines,customVertexShaderID:Ze,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:be,batchingColor:be&&V._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&V.instanceColor!==null,instancingMorph:Fe&&V.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:bs,alphaToCoverage:!!y.alphaToCoverage,map:Ne,matcap:Lt,envMap:We,envMapMode:We&&U.mapping,envMapCubeUVHeight:B,aoMap:Qe,lightMap:at,bumpMap:Be,normalMap:xt,displacementMap:L,emissiveMap:Et,normalMapObjectSpace:xt&&y.normalMapType===FS,normalMapTangentSpace:xt&&y.normalMapType===US,metalnessMap:Ke,roughnessMap:lt,anisotropy:Ee,anisotropyMap:$,clearcoat:A,clearcoatMap:ve,clearcoatNormalMap:le,clearcoatRoughnessMap:Ce,dispersion:x,iridescence:D,iridescenceMap:Pe,iridescenceThicknessMap:te,sheen:Z,sheenColorMap:se,sheenRoughnessMap:xe,specularMap:ye,specularColorMap:pe,specularIntensityMap:ze,transmission:J,transmissionMap:N,thicknessMap:ce,gradientMap:ae,opaque:y.transparent===!1&&y.blending===_s&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Y,combine:y.combine,mapUv:Ne&&_(y.map.channel),aoMapUv:Qe&&_(y.aoMap.channel),lightMapUv:at&&_(y.lightMap.channel),bumpMapUv:Be&&_(y.bumpMap.channel),normalMapUv:xt&&_(y.normalMap.channel),displacementMapUv:L&&_(y.displacementMap.channel),emissiveMapUv:Et&&_(y.emissiveMap.channel),metalnessMapUv:Ke&&_(y.metalnessMap.channel),roughnessMapUv:lt&&_(y.roughnessMap.channel),anisotropyMapUv:$&&_(y.anisotropyMap.channel),clearcoatMapUv:ve&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:te&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(y.sheenRoughnessMap.channel),specularMapUv:ye&&_(y.specularMap.channel),specularColorMapUv:pe&&_(y.specularColorMap.channel),specularIntensityMapUv:ze&&_(y.specularIntensityMap.channel),transmissionMapUv:N&&_(y.transmissionMap.channel),thicknessMapUv:ce&&_(y.thicknessMap.channel),alphaMapUv:_e&&_(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(xt||Ee),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!q.attributes.uv&&(Ne||_e),fog:!!F,useFog:y.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||q.attributes.normal===void 0&&xt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ue,skinning:V.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:De,decodeVideoTexture:Ne&&y.map.isVideoTexture===!0&&je.getTransfer(y.map.colorSpace)===et,decodeVideoTextureEmissive:Et&&y.emissiveMap.isVideoTexture===!0&&je.getTransfer(y.emissiveMap.colorSpace)===et,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===pi,flipSided:y.side===ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Se&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&y.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function g(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)w.push(k),w.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(u(w,y),p(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function u(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function p(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const w=m[y.type];let k;if(w){const P=Yn[w];k=Sy.clone(P.uniforms)}else k=y.uniforms;return k}function M(y,w){let k=f.get(w);return k!==void 0?++k.usedTimes:(k=new WT(t,w,y,r),c.push(k),f.set(w,k)),k}function C(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function R(y){o.remove(y)}function b(){o.dispose()}return{getParameters:T,getProgramCacheKey:g,getUniforms:S,acquireProgram:M,releaseProgram:C,releaseShaderCache:R,programs:c,dispose:b}}function $T(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function KT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function sm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function am(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,_,T,g,u){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:m,material:_,materialVariant:a(d),groupOrder:T,renderOrder:d.renderOrder,z:g,group:u},t[e]=p):(p.id=d.id,p.object=d,p.geometry=m,p.material=_,p.materialVariant=a(d),p.groupOrder=T,p.renderOrder=d.renderOrder,p.z=g,p.group=u),e++,p}function l(d,m,_,T,g,u){const p=o(d,m,_,T,g,u);_.transmission>0?i.push(p):_.transparent===!0?r.push(p):n.push(p)}function c(d,m,_,T,g,u){const p=o(d,m,_,T,g,u);_.transmission>0?i.unshift(p):_.transparent===!0?r.unshift(p):n.unshift(p)}function f(d,m){n.length>1&&n.sort(d||KT),i.length>1&&i.sort(m||sm),r.length>1&&r.sort(m||sm)}function h(){for(let d=e,m=t.length;d<m;d++){const _=t[d];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function ZT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new am,t.set(i,[a])):r>=s.length?(a=new am,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function QT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new st};break;case"SpotLight":n={position:new G,direction:new G,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function JT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let ew=0;function tw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function nw(t){const e=new QT,n=JT(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new At,a=new At;function o(c){let f=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,_=0,T=0,g=0,u=0,p=0,S=0,M=0,C=0,R=0,b=0;c.sort(tw);for(let w=0,k=c.length;w<k;w++){const P=c[w],V=P.color,F=P.intensity,q=P.distance;let H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Rs?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)f+=V.r*F,h+=V.g*F,d+=V.b*F;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],F);b++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const U=P.shadow,B=n.get(P);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=H,i.directionalShadowMatrix[m]=P.shadow.matrix,p++}i.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(V).multiplyScalar(F),W.distance=q,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[T]=W;const U=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,U.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[T]=U.matrix,P.castShadow){const B=n.get(P);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,i.spotShadow[T]=B,i.spotShadowMap[T]=H,M++}T++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(V).multiplyScalar(F),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=W,g++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const U=P.shadow,B=n.get(P);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,B.shadowCameraNear=U.camera.near,B.shadowCameraFar=U.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=H,i.pointShadowMatrix[_]=P.shadow.matrix,S++}i.point[_]=W,_++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(F),W.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[u]=W,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==m||y.pointLength!==_||y.spotLength!==T||y.rectAreaLength!==g||y.hemiLength!==u||y.numDirectionalShadows!==p||y.numPointShadows!==S||y.numSpotShadows!==M||y.numSpotMaps!==C||y.numLightProbes!==b)&&(i.directional.length=m,i.spot.length=T,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=M+C-R,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=b,y.directionalLength=m,y.pointLength=_,y.spotLength=T,y.rectAreaLength=g,y.hemiLength=u,y.numDirectionalShadows=p,y.numPointShadows=S,y.numSpotShadows=M,y.numSpotMaps=C,y.numLightProbes=b,i.version=ew++)}function l(c,f){let h=0,d=0,m=0,_=0,T=0;const g=f.matrixWorldInverse;for(let u=0,p=c.length;u<p;u++){const S=c[u];if(S.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),h++}else if(S.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),M.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(g),m++}else if(S.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),a.identity(),s.copy(S.matrixWorld),s.premultiply(g),a.extractRotation(s),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const M=i.hemi[T];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(g),T++}}}return{setup:o,setupView:l,state:i}}function om(t){const e=new nw(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function a(f){i.push(f)}function o(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function iw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new om(t),e.set(r,[o])):s>=a.length?(o=new om(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const rw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,aw=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],ow=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],lm=new At,Zs=new G,tu=new G;function lw(t,e,n){let i=new Y0;const r=new nt,s=new nt,a=new Mt,o=new Ty,l=new wy,c={},f=n.maxTextureSize,h={[rr]:ln,[ln]:rr,[pi]:pi},d=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:rw,fragmentShader:sw}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Pi;_.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new ri(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let u=this.type;this.render=function(R,b,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===fS&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jo);const w=t.getRenderTarget(),k=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),V=t.state;V.setBlending(xi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const F=u!==this.type;F&&b.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(H=>H.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,H=R.length;q<H;q++){const W=R[q],U=W.shadow;if(U===void 0){Ie("WebGLShadowMap:",W,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const B=U.getFrameExtents();r.multiply(B),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/B.x),r.x=s.x*B.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/B.y),r.y=s.y*B.y,U.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=X,U.map===null||F===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===na){if(W.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ti(r.x,r.y,{format:Rs,type:Ai,minFilter:qt,magFilter:qt,generateMipmaps:!1}),U.map.texture.name=W.name+".shadowMap",U.map.depthTexture=new Da(r.x,r.y,Kn),U.map.depthTexture.name=W.name+".shadowMapDepth",U.map.depthTexture.format=Ci,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=kt,U.map.depthTexture.magFilter=kt}else W.isPointLight?(U.map=new e_(r.x),U.map.depthTexture=new vy(r.x,ii)):(U.map=new ti(r.x,r.y),U.map.depthTexture=new Da(r.x,r.y,ii)),U.map.depthTexture.name=W.name+".shadowMap",U.map.depthTexture.format=Ci,this.type===jo?(U.map.depthTexture.compareFunction=X?jf:Wf,U.map.depthTexture.minFilter=qt,U.map.depthTexture.magFilter=qt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=kt,U.map.depthTexture.magFilter=kt);U.camera.updateProjectionMatrix()}const Q=U.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<Q;oe++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(U.map),t.clear());const re=U.getViewport(oe);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),V.viewport(a)}if(W.isPointLight){const re=U.camera,Le=U.matrix,qe=W.distance||re.far;qe!==re.far&&(re.far=qe,re.updateProjectionMatrix()),Zs.setFromMatrixPosition(W.matrixWorld),re.position.copy(Zs),tu.copy(re.position),tu.add(aw[oe]),re.up.copy(ow[oe]),re.lookAt(tu),re.updateMatrixWorld(),Le.makeTranslation(-Zs.x,-Zs.y,-Zs.z),lm.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),U._frustum.setFromProjectionMatrix(lm,re.coordinateSystem,re.reversedDepth)}else U.updateMatrices(W);i=U.getFrustum(),M(b,y,U.camera,W,this.type)}U.isPointLightShadow!==!0&&this.type===na&&p(U,y),U.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(w,k,P)};function p(R,b){const y=e.update(T);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ti(r.x,r.y,{format:Rs,type:Ai})),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(b,null,y,d,T,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(b,null,y,m,T,null)}function S(R,b,y,w){let k=null;const P=y.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)k=P;else if(k=y.isPointLight===!0?l:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const V=k.uuid,F=b.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let H=q[F];H===void 0&&(H=k.clone(),q[F]=H,b.addEventListener("dispose",C)),k=H}if(k.visible=b.visible,k.wireframe=b.wireframe,w===na?k.side=b.shadowSide!==null?b.shadowSide:b.side:k.side=b.shadowSide!==null?b.shadowSide:h[b.side],k.alphaMap=b.alphaMap,k.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,k.map=b.map,k.clipShadows=b.clipShadows,k.clippingPlanes=b.clippingPlanes,k.clipIntersection=b.clipIntersection,k.displacementMap=b.displacementMap,k.displacementScale=b.displacementScale,k.displacementBias=b.displacementBias,k.wireframeLinewidth=b.wireframeLinewidth,k.linewidth=b.linewidth,y.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const V=t.properties.get(k);V.light=y}return k}function M(R,b,y,w,k){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===na)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,R.matrixWorld);const F=e.update(R),q=R.material;if(Array.isArray(q)){const H=F.groups;for(let W=0,U=H.length;W<U;W++){const B=H[W],X=q[B.materialIndex];if(X&&X.visible){const Q=S(R,X,w,k);R.onBeforeShadow(t,R,b,y,F,Q,B),t.renderBufferDirect(y,null,F,Q,R,B),R.onAfterShadow(t,R,b,y,F,Q,B)}}}else if(q.visible){const H=S(R,q,w,k);R.onBeforeShadow(t,R,b,y,F,H,null),t.renderBufferDirect(y,null,F,H,R,null),R.onAfterShadow(t,R,b,y,F,H,null)}}const V=R.children;for(let F=0,q=V.length;F<q;F++)M(V[F],b,y,w,k)}function C(R){R.target.removeEventListener("dispose",C);for(const y in c){const w=c[y],k=R.target.uuid;k in w&&(w[k].dispose(),delete w[k])}}}function cw(t,e){function n(){let N=!1;const ce=new Mt;let ae=null;const _e=new Mt(0,0,0,0);return{setMask:function(ne){ae!==ne&&!N&&(t.colorMask(ne,ne,ne,ne),ae=ne)},setLocked:function(ne){N=ne},setClear:function(ne,Y,Se,De,ct){ct===!0&&(ne*=De,Y*=De,Se*=De),ce.set(ne,Y,Se,De),_e.equals(ce)===!1&&(t.clearColor(ne,Y,Se,De),_e.copy(ce))},reset:function(){N=!1,ae=null,_e.set(-1,0,0,0)}}}function i(){let N=!1,ce=!1,ae=null,_e=null,ne=null;return{setReversed:function(Y){if(ce!==Y){const Se=e.get("EXT_clip_control");Y?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ce=Y;const De=ne;ne=null,this.setClear(De)}},getReversed:function(){return ce},setTest:function(Y){Y?ie(t.DEPTH_TEST):ue(t.DEPTH_TEST)},setMask:function(Y){ae!==Y&&!N&&(t.depthMask(Y),ae=Y)},setFunc:function(Y){if(ce&&(Y=XS[Y]),_e!==Y){switch(Y){case Qu:t.depthFunc(t.NEVER);break;case Ju:t.depthFunc(t.ALWAYS);break;case ed:t.depthFunc(t.LESS);break;case As:t.depthFunc(t.LEQUAL);break;case td:t.depthFunc(t.EQUAL);break;case nd:t.depthFunc(t.GEQUAL);break;case id:t.depthFunc(t.GREATER);break;case rd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=Y}},setLocked:function(Y){N=Y},setClear:function(Y){ne!==Y&&(ne=Y,ce&&(Y=1-Y),t.clearDepth(Y))},reset:function(){N=!1,ae=null,_e=null,ne=null,ce=!1}}}function r(){let N=!1,ce=null,ae=null,_e=null,ne=null,Y=null,Se=null,De=null,ct=null;return{setTest:function(Je){N||(Je?ie(t.STENCIL_TEST):ue(t.STENCIL_TEST))},setMask:function(Je){ce!==Je&&!N&&(t.stencilMask(Je),ce=Je)},setFunc:function(Je,si,ai){(ae!==Je||_e!==si||ne!==ai)&&(t.stencilFunc(Je,si,ai),ae=Je,_e=si,ne=ai)},setOp:function(Je,si,ai){(Y!==Je||Se!==si||De!==ai)&&(t.stencilOp(Je,si,ai),Y=Je,Se=si,De=ai)},setLocked:function(Je){N=Je},setClear:function(Je){ct!==Je&&(t.clearStencil(Je),ct=Je)},reset:function(){N=!1,ce=null,ae=null,_e=null,ne=null,Y=null,Se=null,De=null,ct=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,m=[],_=null,T=!1,g=null,u=null,p=null,S=null,M=null,C=null,R=null,b=new st(0,0,0),y=0,w=!1,k=null,P=null,V=null,F=null,q=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,U=0;const B=t.getParameter(t.VERSION);B.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=U>=1):B.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=U>=2);let X=null,Q={};const oe=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),Le=new Mt().fromArray(oe),qe=new Mt().fromArray(re);function Ze(N,ce,ae,_e){const ne=new Uint8Array(4),Y=t.createTexture();t.bindTexture(N,Y),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<ae;Se++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(ce+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return Y}const K={};K[t.TEXTURE_2D]=Ze(t.TEXTURE_2D,t.TEXTURE_2D,1),K[t.TEXTURE_CUBE_MAP]=Ze(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[t.TEXTURE_2D_ARRAY]=Ze(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),K[t.TEXTURE_3D]=Ze(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(As),Be(!1),xt(pp),ie(t.CULL_FACE),Qe(xi);function ie(N){f[N]!==!0&&(t.enable(N),f[N]=!0)}function ue(N){f[N]!==!1&&(t.disable(N),f[N]=!1)}function Fe(N,ce){return h[N]!==ce?(t.bindFramebuffer(N,ce),h[N]=ce,N===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ce),N===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function be(N,ce){let ae=m,_e=!1;if(N){ae=d.get(ce),ae===void 0&&(ae=[],d.set(ce,ae));const ne=N.textures;if(ae.length!==ne.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let Y=0,Se=ne.length;Y<Se;Y++)ae[Y]=t.COLOR_ATTACHMENT0+Y;ae.length=ne.length,_e=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,_e=!0);_e&&t.drawBuffers(ae)}function Ne(N){return _!==N?(t.useProgram(N),_=N,!0):!1}const Lt={[xr]:t.FUNC_ADD,[pS]:t.FUNC_SUBTRACT,[mS]:t.FUNC_REVERSE_SUBTRACT};Lt[gS]=t.MIN,Lt[_S]=t.MAX;const We={[vS]:t.ZERO,[xS]:t.ONE,[SS]:t.SRC_COLOR,[Ku]:t.SRC_ALPHA,[AS]:t.SRC_ALPHA_SATURATE,[TS]:t.DST_COLOR,[MS]:t.DST_ALPHA,[yS]:t.ONE_MINUS_SRC_COLOR,[Zu]:t.ONE_MINUS_SRC_ALPHA,[wS]:t.ONE_MINUS_DST_COLOR,[ES]:t.ONE_MINUS_DST_ALPHA,[CS]:t.CONSTANT_COLOR,[RS]:t.ONE_MINUS_CONSTANT_COLOR,[bS]:t.CONSTANT_ALPHA,[PS]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(N,ce,ae,_e,ne,Y,Se,De,ct,Je){if(N===xi){T===!0&&(ue(t.BLEND),T=!1);return}if(T===!1&&(ie(t.BLEND),T=!0),N!==hS){if(N!==g||Je!==w){if((u!==xr||M!==xr)&&(t.blendEquation(t.FUNC_ADD),u=xr,M=xr),Je)switch(N){case _s:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mp:t.blendFunc(t.ONE,t.ONE);break;case gp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case _p:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:$e("WebGLState: Invalid blending: ",N);break}else switch(N){case _s:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case mp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case gp:$e("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _p:$e("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$e("WebGLState: Invalid blending: ",N);break}p=null,S=null,C=null,R=null,b.set(0,0,0),y=0,g=N,w=Je}return}ne=ne||ce,Y=Y||ae,Se=Se||_e,(ce!==u||ne!==M)&&(t.blendEquationSeparate(Lt[ce],Lt[ne]),u=ce,M=ne),(ae!==p||_e!==S||Y!==C||Se!==R)&&(t.blendFuncSeparate(We[ae],We[_e],We[Y],We[Se]),p=ae,S=_e,C=Y,R=Se),(De.equals(b)===!1||ct!==y)&&(t.blendColor(De.r,De.g,De.b,ct),b.copy(De),y=ct),g=N,w=!1}function at(N,ce){N.side===pi?ue(t.CULL_FACE):ie(t.CULL_FACE);let ae=N.side===ln;ce&&(ae=!ae),Be(ae),N.blending===_s&&N.transparent===!1?Qe(xi):Qe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const _e=N.stencilWrite;o.setTest(_e),_e&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Et(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ue(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(N){k!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),k=N)}function xt(N){N!==uS?(ie(t.CULL_FACE),N!==P&&(N===pp?t.cullFace(t.BACK):N===dS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ue(t.CULL_FACE),P=N}function L(N){N!==V&&(W&&t.lineWidth(N),V=N)}function Et(N,ce,ae){N?(ie(t.POLYGON_OFFSET_FILL),(F!==ce||q!==ae)&&(F=ce,q=ae,a.getReversed()&&(ce=-ce),t.polygonOffset(ce,ae))):ue(t.POLYGON_OFFSET_FILL)}function Ke(N){N?ie(t.SCISSOR_TEST):ue(t.SCISSOR_TEST)}function lt(N){N===void 0&&(N=t.TEXTURE0+H-1),X!==N&&(t.activeTexture(N),X=N)}function Ee(N,ce,ae){ae===void 0&&(X===null?ae=t.TEXTURE0+H-1:ae=X);let _e=Q[ae];_e===void 0&&(_e={type:void 0,texture:void 0},Q[ae]=_e),(_e.type!==N||_e.texture!==ce)&&(X!==ae&&(t.activeTexture(ae),X=ae),t.bindTexture(N,ce||K[N]),_e.type=N,_e.texture=ce)}function A(){const N=Q[X];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function D(){try{t.compressedTexImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function Z(){try{t.texSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function J(){try{t.texSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function ve(){try{t.compressedTexSubImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function le(){try{t.texStorage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function Ce(){try{t.texStorage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function Pe(){try{t.texImage2D(...arguments)}catch(N){$e("WebGLState:",N)}}function te(){try{t.texImage3D(...arguments)}catch(N){$e("WebGLState:",N)}}function se(N){Le.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Le.copy(N))}function xe(N){qe.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),qe.copy(N))}function ye(N,ce){let ae=c.get(ce);ae===void 0&&(ae=new WeakMap,c.set(ce,ae));let _e=ae.get(N);_e===void 0&&(_e=t.getUniformBlockIndex(ce,N.name),ae.set(N,_e))}function pe(N,ce){const _e=c.get(ce).get(N);l.get(ce)!==_e&&(t.uniformBlockBinding(ce,_e,N.__bindingPointIndex),l.set(ce,_e))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},X=null,Q={},h={},d=new WeakMap,m=[],_=null,T=!1,g=null,u=null,p=null,S=null,M=null,C=null,R=null,b=new st(0,0,0),y=0,w=!1,k=null,P=null,V=null,F=null,q=null,Le.set(0,0,t.canvas.width,t.canvas.height),qe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ue,bindFramebuffer:Fe,drawBuffers:be,useProgram:Ne,setBlending:Qe,setMaterial:at,setFlipSided:Be,setCullFace:xt,setLineWidth:L,setPolygonOffset:Et,setScissorTest:Ke,activeTexture:lt,bindTexture:Ee,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:D,texImage2D:Pe,texImage3D:te,updateUBOMapping:ye,uniformBlockBinding:pe,texStorage2D:le,texStorage3D:Ce,texSubImage2D:Z,texSubImage3D:J,compressedTexSubImage2D:$,compressedTexSubImage3D:ve,scissor:se,viewport:xe,reset:ze}}function uw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return m?new OffscreenCanvas(A,x):Tl("canvas")}function T(A,x,D){let Z=1;const J=Ee(A);if((J.width>D||J.height>D)&&(Z=D/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(Z*J.width),ve=Math.floor(Z*J.height);h===void 0&&(h=_($,ve));const le=x?_($,ve):h;return le.width=$,le.height=ve,le.getContext("2d").drawImage(A,0,0,$,ve),Ie("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+$+"x"+ve+")."),le}else return"data"in A&&Ie("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function g(A){return A.generateMipmaps}function u(A){t.generateMipmap(A)}function p(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(A,x,D,Z,J=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=x;if(x===t.RED&&(D===t.FLOAT&&($=t.R32F),D===t.HALF_FLOAT&&($=t.R16F),D===t.UNSIGNED_BYTE&&($=t.R8)),x===t.RED_INTEGER&&(D===t.UNSIGNED_BYTE&&($=t.R8UI),D===t.UNSIGNED_SHORT&&($=t.R16UI),D===t.UNSIGNED_INT&&($=t.R32UI),D===t.BYTE&&($=t.R8I),D===t.SHORT&&($=t.R16I),D===t.INT&&($=t.R32I)),x===t.RG&&(D===t.FLOAT&&($=t.RG32F),D===t.HALF_FLOAT&&($=t.RG16F),D===t.UNSIGNED_BYTE&&($=t.RG8)),x===t.RG_INTEGER&&(D===t.UNSIGNED_BYTE&&($=t.RG8UI),D===t.UNSIGNED_SHORT&&($=t.RG16UI),D===t.UNSIGNED_INT&&($=t.RG32UI),D===t.BYTE&&($=t.RG8I),D===t.SHORT&&($=t.RG16I),D===t.INT&&($=t.RG32I)),x===t.RGB_INTEGER&&(D===t.UNSIGNED_BYTE&&($=t.RGB8UI),D===t.UNSIGNED_SHORT&&($=t.RGB16UI),D===t.UNSIGNED_INT&&($=t.RGB32UI),D===t.BYTE&&($=t.RGB8I),D===t.SHORT&&($=t.RGB16I),D===t.INT&&($=t.RGB32I)),x===t.RGBA_INTEGER&&(D===t.UNSIGNED_BYTE&&($=t.RGBA8UI),D===t.UNSIGNED_SHORT&&($=t.RGBA16UI),D===t.UNSIGNED_INT&&($=t.RGBA32UI),D===t.BYTE&&($=t.RGBA8I),D===t.SHORT&&($=t.RGBA16I),D===t.INT&&($=t.RGBA32I)),x===t.RGB&&(D===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),D===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),x===t.RGBA){const ve=J?Ml:je.getTransfer(Z);D===t.FLOAT&&($=t.RGBA32F),D===t.HALF_FLOAT&&($=t.RGBA16F),D===t.UNSIGNED_BYTE&&($=ve===et?t.SRGB8_ALPHA8:t.RGBA8),D===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),D===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(A,x){let D;return A?x===null||x===ii||x===Na?D=t.DEPTH24_STENCIL8:x===Kn?D=t.DEPTH32F_STENCIL8:x===La&&(D=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ii||x===Na?D=t.DEPTH_COMPONENT24:x===Kn?D=t.DEPTH_COMPONENT32F:x===La&&(D=t.DEPTH_COMPONENT16),D}function C(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==kt&&A.minFilter!==qt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){const x=A.target;x.removeEventListener("dispose",R),y(x),x.isVideoTexture&&f.delete(x)}function b(A){const x=A.target;x.removeEventListener("dispose",b),k(x)}function y(A){const x=i.get(A);if(x.__webglInit===void 0)return;const D=A.source,Z=d.get(D);if(Z){const J=Z[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(A),Object.keys(Z).length===0&&d.delete(D)}i.remove(A)}function w(A){const x=i.get(A);t.deleteTexture(x.__webglTexture);const D=A.source,Z=d.get(D);delete Z[x.__cacheKey],a.memory.textures--}function k(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let J=0;J<x.__webglFramebuffer[Z].length;J++)t.deleteFramebuffer(x.__webglFramebuffer[Z][J]);else t.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)t.deleteFramebuffer(x.__webglFramebuffer[Z]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=A.textures;for(let Z=0,J=D.length;Z<J;Z++){const $=i.get(D[Z]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(D[Z])}i.remove(A)}let P=0;function V(){P=0}function F(){const A=P;return A>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function q(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function H(A,x){const D=i.get(A);if(A.isVideoTexture&&Ke(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&D.__version!==A.version){const Z=A.image;if(Z===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{K(D,A,x);return}}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,D.__webglTexture,t.TEXTURE0+x)}function W(A,x){const D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){K(D,A,x);return}else A.isExternalTexture&&(D.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,D.__webglTexture,t.TEXTURE0+x)}function U(A,x){const D=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&D.__version!==A.version){K(D,A,x);return}n.bindTexture(t.TEXTURE_3D,D.__webglTexture,t.TEXTURE0+x)}function B(A,x){const D=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&D.__version!==A.version){ie(D,A,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,D.__webglTexture,t.TEXTURE0+x)}const X={[sd]:t.REPEAT,[_i]:t.CLAMP_TO_EDGE,[ad]:t.MIRRORED_REPEAT},Q={[kt]:t.NEAREST,[DS]:t.NEAREST_MIPMAP_NEAREST,[co]:t.NEAREST_MIPMAP_LINEAR,[qt]:t.LINEAR,[wc]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},oe={[OS]:t.NEVER,[HS]:t.ALWAYS,[kS]:t.LESS,[Wf]:t.LEQUAL,[BS]:t.EQUAL,[jf]:t.GEQUAL,[zS]:t.GREATER,[VS]:t.NOTEQUAL};function re(A,x){if(x.type===Kn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===qt||x.magFilter===wc||x.magFilter===co||x.magFilter===Tr||x.minFilter===qt||x.minFilter===wc||x.minFilter===co||x.minFilter===Tr)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,X[x.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,X[x.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,X[x.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Q[x.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,oe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==co&&x.minFilter!==Tr||x.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Le(A,x){let D=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));const Z=x.source;let J=d.get(Z);J===void 0&&(J={},d.set(Z,J));const $=q(x);if($!==A.__cacheKey){J[$]===void 0&&(J[$]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,D=!0),J[$].usedTimes++;const ve=J[A.__cacheKey];ve!==void 0&&(J[A.__cacheKey].usedTimes--,ve.usedTimes===0&&w(x)),A.__cacheKey=$,A.__webglTexture=J[$].texture}return D}function qe(A,x,D){return Math.floor(Math.floor(A/D)/x)}function Ze(A,x,D,Z){const $=A.updateRanges;if($.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,D,Z,x.data);else{$.sort((te,se)=>te.start-se.start);let ve=0;for(let te=1;te<$.length;te++){const se=$[ve],xe=$[te],ye=se.start+se.count,pe=qe(xe.start,x.width,4),ze=qe(se.start,x.width,4);xe.start<=ye+1&&pe===ze&&qe(xe.start+xe.count-1,x.width,4)===pe?se.count=Math.max(se.count,xe.start+xe.count-se.start):(++ve,$[ve]=xe)}$.length=ve+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),Ce=t.getParameter(t.UNPACK_SKIP_PIXELS),Pe=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let te=0,se=$.length;te<se;te++){const xe=$[te],ye=Math.floor(xe.start/4),pe=Math.ceil(xe.count/4),ze=ye%x.width,N=Math.floor(ye/x.width),ce=pe,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,N),n.texSubImage2D(t.TEXTURE_2D,0,ze,N,ce,ae,D,Z,x.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(t.UNPACK_SKIP_ROWS,Pe)}}function K(A,x,D){let Z=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=t.TEXTURE_3D);const J=Le(A,x),$=x.source;n.bindTexture(Z,A.__webglTexture,t.TEXTURE0+D);const ve=i.get($);if($.version!==ve.__version||J===!0){n.activeTexture(t.TEXTURE0+D);const le=je.getPrimaries(je.workingColorSpace),Ce=x.colorSpace===Wi?null:je.getPrimaries(x.colorSpace),Pe=x.colorSpace===Wi||le===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let te=T(x.image,!1,r.maxTextureSize);te=lt(x,te);const se=s.convert(x.format,x.colorSpace),xe=s.convert(x.type);let ye=S(x.internalFormat,se,xe,x.colorSpace,x.isVideoTexture);re(Z,x);let pe;const ze=x.mipmaps,N=x.isVideoTexture!==!0,ce=ve.__version===void 0||J===!0,ae=$.dataReady,_e=C(x,te);if(x.isDepthTexture)ye=M(x.format===wr,x.type),ce&&(N?n.texStorage2D(t.TEXTURE_2D,1,ye,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,ye,te.width,te.height,0,se,xe,null));else if(x.isDataTexture)if(ze.length>0){N&&ce&&n.texStorage2D(t.TEXTURE_2D,_e,ye,ze[0].width,ze[0].height);for(let ne=0,Y=ze.length;ne<Y;ne++)pe=ze[ne],N?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,xe,pe.data):n.texImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,se,xe,pe.data);x.generateMipmaps=!1}else N?(ce&&n.texStorage2D(t.TEXTURE_2D,_e,ye,te.width,te.height),ae&&Ze(x,te,se,xe)):n.texImage2D(t.TEXTURE_2D,0,ye,te.width,te.height,0,se,xe,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,ye,ze[0].width,ze[0].height,te.depth);for(let ne=0,Y=ze.length;ne<Y;ne++)if(pe=ze[ne],x.format!==kn)if(se!==null)if(N){if(ae)if(x.layerUpdates.size>0){const Se=Bp(pe.width,pe.height,x.format,x.type);for(const De of x.layerUpdates){const ct=pe.data.subarray(De*Se/pe.data.BYTES_PER_ELEMENT,(De+1)*Se/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,De,pe.width,pe.height,1,se,ct)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,ye,pe.width,pe.height,te.depth,0,pe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,xe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,ye,pe.width,pe.height,te.depth,0,se,xe,pe.data)}else{N&&ce&&n.texStorage2D(t.TEXTURE_2D,_e,ye,ze[0].width,ze[0].height);for(let ne=0,Y=ze.length;ne<Y;ne++)pe=ze[ne],x.format!==kn?se!==null?N?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,pe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,xe,pe.data):n.texImage2D(t.TEXTURE_2D,ne,ye,pe.width,pe.height,0,se,xe,pe.data)}else if(x.isDataArrayTexture)if(N){if(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,ye,te.width,te.height,te.depth),ae)if(x.layerUpdates.size>0){const ne=Bp(te.width,te.height,x.format,x.type);for(const Y of x.layerUpdates){const Se=te.data.subarray(Y*ne/te.data.BYTES_PER_ELEMENT,(Y+1)*ne/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,se,xe,Se)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,xe,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ye,te.width,te.height,te.depth,0,se,xe,te.data);else if(x.isData3DTexture)N?(ce&&n.texStorage3D(t.TEXTURE_3D,_e,ye,te.width,te.height,te.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,xe,te.data)):n.texImage3D(t.TEXTURE_3D,0,ye,te.width,te.height,te.depth,0,se,xe,te.data);else if(x.isFramebufferTexture){if(ce)if(N)n.texStorage2D(t.TEXTURE_2D,_e,ye,te.width,te.height);else{let ne=te.width,Y=te.height;for(let Se=0;Se<_e;Se++)n.texImage2D(t.TEXTURE_2D,Se,ye,ne,Y,0,se,xe,null),ne>>=1,Y>>=1}}else if(ze.length>0){if(N&&ce){const ne=Ee(ze[0]);n.texStorage2D(t.TEXTURE_2D,_e,ye,ne.width,ne.height)}for(let ne=0,Y=ze.length;ne<Y;ne++)pe=ze[ne],N?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,se,xe,pe):n.texImage2D(t.TEXTURE_2D,ne,ye,se,xe,pe);x.generateMipmaps=!1}else if(N){if(ce){const ne=Ee(te);n.texStorage2D(t.TEXTURE_2D,_e,ye,ne.width,ne.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se,xe,te)}else n.texImage2D(t.TEXTURE_2D,0,ye,se,xe,te);g(x)&&u(Z),ve.__version=$.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ie(A,x,D){if(x.image.length!==6)return;const Z=Le(A,x),J=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+D);const $=i.get(J);if(J.version!==$.__version||Z===!0){n.activeTexture(t.TEXTURE0+D);const ve=je.getPrimaries(je.workingColorSpace),le=x.colorSpace===Wi?null:je.getPrimaries(x.colorSpace),Ce=x.colorSpace===Wi||ve===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,se=[];for(let Y=0;Y<6;Y++)!Pe&&!te?se[Y]=T(x.image[Y],!0,r.maxCubemapSize):se[Y]=te?x.image[Y].image:x.image[Y],se[Y]=lt(x,se[Y]);const xe=se[0],ye=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),ze=S(x.internalFormat,ye,pe,x.colorSpace),N=x.isVideoTexture!==!0,ce=$.__version===void 0||Z===!0,ae=J.dataReady;let _e=C(x,xe);re(t.TEXTURE_CUBE_MAP,x);let ne;if(Pe){N&&ce&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,ze,xe.width,xe.height);for(let Y=0;Y<6;Y++){ne=se[Y].mipmaps;for(let Se=0;Se<ne.length;Se++){const De=ne[Se];x.format!==kn?ye!==null?N?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,De.width,De.height,ye,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,ze,De.width,De.height,0,De.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,0,0,De.width,De.height,ye,pe,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se,ze,De.width,De.height,0,ye,pe,De.data)}}}else{if(ne=x.mipmaps,N&&ce){ne.length>0&&_e++;const Y=Ee(se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,ze,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,se[Y].width,se[Y].height,ye,pe,se[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,se[Y].width,se[Y].height,0,ye,pe,se[Y].data);for(let Se=0;Se<ne.length;Se++){const ct=ne[Se].image[Y].image;N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,ct.width,ct.height,ye,pe,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,ze,ct.width,ct.height,0,ye,pe,ct.data)}}else{N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ye,pe,se[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,ye,pe,se[Y]);for(let Se=0;Se<ne.length;Se++){const De=ne[Se];N?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,0,0,ye,pe,De.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Se+1,ze,ye,pe,De.image[Y])}}}g(x)&&u(t.TEXTURE_CUBE_MAP),$.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ue(A,x,D,Z,J,$){const ve=s.convert(D.format,D.colorSpace),le=s.convert(D.type),Ce=S(D.internalFormat,ve,le,D.colorSpace),Pe=i.get(x),te=i.get(D);if(te.__renderTarget=x,!Pe.__hasExternalTextures){const se=Math.max(1,x.width>>$),xe=Math.max(1,x.height>>$);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,$,Ce,se,xe,x.depth,0,ve,le,null):n.texImage2D(J,$,Ce,se,xe,0,ve,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Et(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,J,te.__webglTexture,0,L(x)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,J,te.__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(A,x,D){if(t.bindRenderbuffer(t.RENDERBUFFER,A),x.depthBuffer){const Z=x.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,$=M(x.stencilBuffer,J),ve=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Et(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(x),$,x.width,x.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(x),$,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,$,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,A)}else{const Z=x.textures;for(let J=0;J<Z.length;J++){const $=Z[J],ve=s.convert($.format,$.colorSpace),le=s.convert($.type),Ce=S($.internalFormat,ve,le,$.colorSpace);Et(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(x),Ce,x.width,x.height):D?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(x),Ce,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Ce,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function be(A,x,D){const Z=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),re(t.TEXTURE_CUBE_MAP,x.depthTexture);const Pe=s.convert(x.depthTexture.format),te=s.convert(x.depthTexture.type);let se;x.depthTexture.format===Ci?se=t.DEPTH_COMPONENT24:x.depthTexture.format===wr&&(se=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,se,x.width,x.height,0,Pe,te,null)}}else H(x.depthTexture,0);const $=J.__webglTexture,ve=L(x),le=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+D:t.TEXTURE_2D,Ce=x.depthTexture.format===wr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ci)Et(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,le,$,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,le,$,0);else if(x.depthTexture.format===wr)Et(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ce,le,$,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,Ce,le,$,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const x=i.get(A),D=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=Z}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let Z=0;Z<6;Z++)be(x.__webglFramebuffer[Z],A,Z);else{const Z=A.texture.mipmaps;Z&&Z.length>0?be(x.__webglFramebuffer[0],A,0):be(x.__webglFramebuffer,A,0)}else if(D){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=t.createRenderbuffer(),Fe(x.__webglDepthbuffer[Z],A,!1);else{const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,$)}}else{const Z=A.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Fe(x.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,$)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Lt(A,x,D){const Z=i.get(A);x!==void 0&&ue(Z.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),D!==void 0&&Ne(A)}function We(A){const x=A.texture,D=i.get(A),Z=i.get(x);A.addEventListener("dispose",b);const J=A.textures,$=A.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=x.version,a.memory.textures++),$){D.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[le]=[];for(let Ce=0;Ce<x.mipmaps.length;Ce++)D.__webglFramebuffer[le][Ce]=t.createFramebuffer()}else D.__webglFramebuffer[le]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)D.__webglFramebuffer[le]=t.createFramebuffer()}else D.__webglFramebuffer=t.createFramebuffer();if(ve)for(let le=0,Ce=J.length;le<Ce;le++){const Pe=i.get(J[le]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&Et(A)===!1){D.__webglMultisampledFramebuffer=t.createFramebuffer(),D.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const Ce=J[le];D.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,D.__webglColorRenderbuffer[le]);const Pe=s.convert(Ce.format,Ce.colorSpace),te=s.convert(Ce.type),se=S(Ce.internalFormat,Pe,te,Ce.colorSpace,A.isXRRenderTarget===!0),xe=L(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,se,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,D.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(D.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe(D.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),re(t.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)ue(D.__webglFramebuffer[le][Ce],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ce);else ue(D.__webglFramebuffer[le],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(x)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let le=0,Ce=J.length;le<Ce;le++){const Pe=J[le],te=i.get(Pe);let se=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,te.__webglTexture),re(se,Pe),ue(D.__webglFramebuffer,A,Pe,t.COLOR_ATTACHMENT0+le,se,0),g(Pe)&&u(se)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Z.__webglTexture),re(le,x),x.mipmaps&&x.mipmaps.length>0)for(let Ce=0;Ce<x.mipmaps.length;Ce++)ue(D.__webglFramebuffer[Ce],A,x,t.COLOR_ATTACHMENT0,le,Ce);else ue(D.__webglFramebuffer,A,x,t.COLOR_ATTACHMENT0,le,0);g(x)&&u(le),n.unbindTexture()}A.depthBuffer&&Ne(A)}function Qe(A){const x=A.textures;for(let D=0,Z=x.length;D<Z;D++){const J=x[D];if(g(J)){const $=p(A),ve=i.get(J).__webglTexture;n.bindTexture($,ve),u($),n.unbindTexture()}}}const at=[],Be=[];function xt(A){if(A.samples>0){if(Et(A)===!1){const x=A.textures,D=A.width,Z=A.height;let J=t.COLOR_BUFFER_BIT;const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(A),le=x.length>1;if(le)for(let Pe=0;Pe<x.length;Pe++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Ce=A.texture.mipmaps;Ce&&Ce.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Pe=0;Pe<x.length;Pe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);const te=i.get(x[Pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,D,Z,0,0,D,Z,J,t.NEAREST),l===!0&&(at.length=0,Be.length=0,at.push(t.COLOR_ATTACHMENT0+Pe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(at.push($),Be.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,at))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Pe=0;Pe<x.length;Pe++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Pe]);const te=i.get(x[Pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Pe,t.TEXTURE_2D,te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function L(A){return Math.min(r.maxSamples,A.samples)}function Et(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ke(A){const x=a.render.frame;f.get(A)!==x&&(f.set(A,x),A.update())}function lt(A,x){const D=A.colorSpace,Z=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||D!==bs&&D!==Wi&&(je.getTransfer(D)===et?(Z!==kn||J!==En)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$e("WebGLTextures: Unsupported texture color space:",D)),x}function Ee(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=W,this.setTexture3D=U,this.setTextureCube=B,this.rebindTextures=Lt,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Et,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function dw(t,e){function n(i,r=Wi){let s;const a=je.getTransfer(r);if(i===En)return t.UNSIGNED_BYTE;if(i===Bf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===zf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===F0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===O0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===I0)return t.BYTE;if(i===U0)return t.SHORT;if(i===La)return t.UNSIGNED_SHORT;if(i===kf)return t.INT;if(i===ii)return t.UNSIGNED_INT;if(i===Kn)return t.FLOAT;if(i===Ai)return t.HALF_FLOAT;if(i===k0)return t.ALPHA;if(i===B0)return t.RGB;if(i===kn)return t.RGBA;if(i===Ci)return t.DEPTH_COMPONENT;if(i===wr)return t.DEPTH_STENCIL;if(i===z0)return t.RED;if(i===Vf)return t.RED_INTEGER;if(i===Rs)return t.RG;if(i===Hf)return t.RG_INTEGER;if(i===Gf)return t.RGBA_INTEGER;if(i===Xo||i===qo||i===Yo||i===$o)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===$o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===od||i===ld||i===cd||i===ud)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===od)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ld)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ud)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dd||i===fd||i===hd||i===pd||i===md||i===gd||i===_d)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===dd||i===fd)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===hd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===pd)return s.COMPRESSED_R11_EAC;if(i===md)return s.COMPRESSED_SIGNED_R11_EAC;if(i===gd)return s.COMPRESSED_RG11_EAC;if(i===_d)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===vd||i===xd||i===Sd||i===yd||i===Md||i===Ed||i===Td||i===wd||i===Ad||i===Cd||i===Rd||i===bd||i===Pd||i===Ld)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===vd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===xd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Sd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===yd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Md)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ed)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Td)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ad)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Cd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===bd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Pd)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ld)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Nd||i===Dd||i===Id)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Nd)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Dd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Id)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ud||i===Fd||i===Od||i===kd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ud)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Fd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Od)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===kd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Na?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const fw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new K0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Hn({vertexShader:fw,fragmentShader:hw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new Ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mw extends Is{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,_=null;const T=typeof XRWebGLBinding<"u",g=new pw,u={},p=n.getContextAttributes();let S=null,M=null;const C=[],R=[],b=new nt;let y=null;const w=new Fn;w.viewport=new Mt;const k=new Fn;k.viewport=new Mt;const P=[w,k],V=new Cy;let F=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=C[K];return ie===void 0&&(ie=new Dc,C[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=C[K];return ie===void 0&&(ie=new Dc,C[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=C[K];return ie===void 0&&(ie=new Dc,C[K]=ie),ie.getHandSpace()};function H(K){const ie=R.indexOf(K.inputSource);if(ie===-1)return;const ue=C[ie];ue!==void 0&&(ue.update(K.inputSource,K.frame,c||a),ue.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",U);for(let K=0;K<C.length;K++){const ie=R[K];ie!==null&&(R[K]=null,C[K].disconnect(ie))}F=null,q=null,g.reset();for(const K in u)delete u[K];e.setRenderTarget(S),m=null,d=null,h=null,r=null,M=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&T&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",W),r.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(b),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Fe=null,be=null;p.depth&&(be=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=p.stencil?wr:Ci,Fe=p.stencil?Na:ii);const Ne={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ti(d.textureWidth,d.textureHeight,{format:kn,type:En,depthTexture:new Da(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ue={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ue),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ti(m.framebufferWidth,m.framebufferHeight,{format:kn,type:En,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(K){for(let ie=0;ie<K.removed.length;ie++){const ue=K.removed[ie],Fe=R.indexOf(ue);Fe>=0&&(R[Fe]=null,C[Fe].disconnect(ue))}for(let ie=0;ie<K.added.length;ie++){const ue=K.added[ie];let Fe=R.indexOf(ue);if(Fe===-1){for(let Ne=0;Ne<C.length;Ne++)if(Ne>=R.length){R.push(ue),Fe=Ne;break}else if(R[Ne]===null){R[Ne]=ue,Fe=Ne;break}if(Fe===-1)break}const be=C[Fe];be&&be.connect(ue)}}const B=new G,X=new G;function Q(K,ie,ue){B.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(ue.matrixWorld);const Fe=B.distanceTo(X),be=ie.projectionMatrix.elements,Ne=ue.projectionMatrix.elements,Lt=be[14]/(be[10]-1),We=be[14]/(be[10]+1),Qe=(be[9]+1)/be[5],at=(be[9]-1)/be[5],Be=(be[8]-1)/be[0],xt=(Ne[8]+1)/Ne[0],L=Lt*Be,Et=Lt*xt,Ke=Fe/(-Be+xt),lt=Ke*-Be;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(lt),K.translateZ(Ke),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ee=Lt+Ke,A=We+Ke,x=L-lt,D=Et+(Fe-lt),Z=Qe*We/A*Ee,J=at*We/A*Ee;K.projectionMatrix.makePerspective(x,D,Z,J,Ee,A),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function oe(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let ie=K.near,ue=K.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ue=g.depthFar)),V.near=k.near=w.near=ie,V.far=k.far=w.far=ue,(F!==V.near||q!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),F=V.near,q=V.far),V.layers.mask=K.layers.mask|6,w.layers.mask=V.layers.mask&-5,k.layers.mask=V.layers.mask&-3;const Fe=K.parent,be=V.cameras;oe(V,Fe);for(let Ne=0;Ne<be.length;Ne++)oe(be[Ne],Fe);be.length===2?Q(V,w,k):V.projectionMatrix.copy(w.projectionMatrix),re(K,V,Fe)};function re(K,ie,ue){ue===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(ue.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Bd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(K){return u[K]};let Le=null;function qe(K,ie){if(f=ie.getViewerPose(c||a),_=ie,f!==null){const ue=f.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Fe=!1;ue.length!==V.cameras.length&&(V.cameras.length=0,Fe=!0);for(let We=0;We<ue.length;We++){const Qe=ue[We];let at=null;if(m!==null)at=m.getViewport(Qe);else{const xt=h.getViewSubImage(d,Qe);at=xt.viewport,We===0&&(e.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(M))}let Be=P[We];Be===void 0&&(Be=new Fn,Be.layers.enable(We),Be.viewport=new Mt,P[We]=Be),Be.matrix.fromArray(Qe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Qe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(at.x,at.y,at.width,at.height),We===0&&(V.matrix.copy(Be.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Fe===!0&&V.cameras.push(Be)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){h=i.getBinding();const We=h.getDepthInformation(ue[0]);We&&We.isValid&&We.texture&&g.init(We,r.renderState)}if(be&&be.includes("camera-access")&&T){e.state.unbindTexture(),h=i.getBinding();for(let We=0;We<ue.length;We++){const Qe=ue[We].camera;if(Qe){let at=u[Qe];at||(at=new K0,u[Qe]=at);const Be=h.getCameraImage(Qe);at.sourceTexture=Be}}}}for(let ue=0;ue<C.length;ue++){const Fe=R[ue],be=C[ue];Fe!==null&&be!==void 0&&be.update(Fe,ie,c||a)}Le&&Le(K,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),_=null}const Ze=new J0;Ze.setAnimationLoop(qe),this.setAnimationLoop=function(K){Le=K},this.dispose=function(){}}}const mr=new Ri,gw=new At;function _w(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Z0(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,p,S,M){u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),h(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&m(g,u,M)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),T(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,p,S):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===ln&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===ln&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const p=e.get(u),S=p.envMap,M=p.envMapRotation;S&&(g.envMap.value=S,mr.copy(M),mr.x*=-1,mr.y*=-1,mr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),g.envMapRotation.value.setFromMatrix4(gw.makeRotationFromEuler(mr)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,p,S){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*p,g.scale.value=S*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,p){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===ln&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=p.texture,g.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function T(g,u){const p=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(p.matrixWorld),g.nearDistance.value=p.shadow.camera.near,g.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,S){const M=S.program;i.uniformBlockBinding(p,M)}function c(p,S){let M=r[p.id];M===void 0&&(_(p),M=f(p),r[p.id]=M,p.addEventListener("dispose",g));const C=S.program;i.updateUBOMapping(p,C);const R=e.render.frame;s[p.id]!==R&&(d(p),s[p.id]=R)}function f(p){const S=h();p.__bindingPointIndex=S;const M=t.createBuffer(),C=p.__size,R=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,C,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,M),M}function h(){for(let p=0;p<o;p++)if(a.indexOf(p)===-1)return a.push(p),p;return $e("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){const S=r[p.id],M=p.uniforms,C=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let R=0,b=M.length;R<b;R++){const y=Array.isArray(M[R])?M[R]:[M[R]];for(let w=0,k=y.length;w<k;w++){const P=y[w];if(m(P,R,w,C)===!0){const V=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let H=0;H<F.length;H++){const W=F[H],U=T(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,V+q,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,q),q+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,S,M,C){const R=p.value,b=S+"_"+M;if(C[b]===void 0)return typeof R=="number"||typeof R=="boolean"?C[b]=R:C[b]=R.clone(),!0;{const y=C[b];if(typeof R=="number"||typeof R=="boolean"){if(y!==R)return C[b]=R,!0}else if(y.equals(R)===!1)return y.copy(R),!0}return!1}function _(p){const S=p.uniforms;let M=0;const C=16;for(let b=0,y=S.length;b<y;b++){const w=Array.isArray(S[b])?S[b]:[S[b]];for(let k=0,P=w.length;k<P;k++){const V=w[k],F=Array.isArray(V.value)?V.value:[V.value];for(let q=0,H=F.length;q<H;q++){const W=F[q],U=T(W),B=M%C,X=B%U.boundary,Q=B+X;M+=X,Q!==0&&C-Q<U.storage&&(M+=C-Q),V.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=U.storage}}}const R=M%C;return R>0&&(M+=C-R),p.__size=M,p.__cache={},this}function T(p){const S={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(S.boundary=4,S.storage=4):p.isVector2?(S.boundary=8,S.storage=8):p.isVector3||p.isColor?(S.boundary=16,S.storage=12):p.isVector4?(S.boundary=16,S.storage=16):p.isMatrix3?(S.boundary=48,S.storage=48):p.isMatrix4?(S.boundary=64,S.storage=64):p.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",p),S}function g(p){const S=p.target;S.removeEventListener("dispose",g);const M=a.indexOf(S.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function u(){for(const p in r)t.deleteBuffer(r[p]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const xw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xn=null;function Sw(){return Xn===null&&(Xn=new py(xw,16,16,Rs,Ai),Xn.name="DFG_LUT",Xn.minFilter=qt,Xn.magFilter=qt,Xn.wrapS=_i,Xn.wrapT=_i,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class yw{constructor(e={}){const{canvas:n=WS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=En}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const T=m,g=new Set([Gf,Hf,Vf]),u=new Set([En,ii,La,Na,Bf,zf]),p=new Uint32Array(4),S=new Int32Array(4);let M=null,C=null;const R=[],b=[];let y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ei,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let k=!1;this._outputColorSpace=Sn;let P=0,V=0,F=null,q=-1,H=null;const W=new Mt,U=new Mt;let B=null;const X=new st(0);let Q=0,oe=n.width,re=n.height,Le=1,qe=null,Ze=null;const K=new Mt(0,0,oe,re),ie=new Mt(0,0,oe,re);let ue=!1;const Fe=new Y0;let be=!1,Ne=!1;const Lt=new At,We=new G,Qe=new Mt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function xt(){return F===null?Le:1}let L=i;function Et(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",ct,!1),L===null){const I="webgl2";if(L=Et(I,E),L===null)throw Et(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw $e("WebGLRenderer: "+E.message),E}let Ke,lt,Ee,A,x,D,Z,J,$,ve,le,Ce,Pe,te,se,xe,ye,pe,ze,N,ce,ae,_e;function ne(){Ke=new y1(L),Ke.init(),ce=new dw(L,Ke),lt=new h1(L,Ke,e,ce),Ee=new cw(L,Ke),lt.reversedDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),A=new T1(L),x=new $T,D=new uw(L,Ke,Ee,x,lt,ce,A),Z=new S1(w),J=new by(L),ae=new d1(L,J),$=new M1(L,J,A,ae),ve=new A1(L,$,J,ae,A),pe=new w1(L,lt,D),se=new p1(x),le=new YT(w,Z,Ke,lt,ae,se),Ce=new _w(w,x),Pe=new ZT,te=new iw(Ke),ye=new u1(w,Z,Ee,ve,_,l),xe=new lw(w,ve,lt),_e=new vw(L,A,lt,Ee),ze=new f1(L,Ke,A),N=new E1(L,Ke,A),A.programs=le.programs,w.capabilities=lt,w.extensions=Ke,w.properties=x,w.renderLists=Pe,w.shadowMap=xe,w.state=Ee,w.info=A}ne(),T!==En&&(y=new R1(T,n.width,n.height,r,s));const Y=new mw(w,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Le},this.setPixelRatio=function(E){E!==void 0&&(Le=E,this.setSize(oe,re,!1))},this.getSize=function(E){return E.set(oe,re)},this.setSize=function(E,I,j=!0){if(Y.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=E,re=I,n.width=Math.floor(E*Le),n.height=Math.floor(I*Le),j===!0&&(n.style.width=E+"px",n.style.height=I+"px"),y!==null&&y.setSize(n.width,n.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(oe*Le,re*Le).floor()},this.setDrawingBufferSize=function(E,I,j){oe=E,re=I,Le=j,n.width=Math.floor(E*j),n.height=Math.floor(I*j),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(T===En){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(W)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,I,j,z){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,I,j,z),Ee.viewport(W.copy(K).multiplyScalar(Le).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,I,j,z){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,I,j,z),Ee.scissor(U.copy(ie).multiplyScalar(Le).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(E){Ee.setScissorTest(ue=E)},this.setOpaqueSort=function(E){qe=E},this.setTransparentSort=function(E){Ze=E},this.getClearColor=function(E){return E.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,j=!0){let z=0;if(E){let O=!1;if(F!==null){const fe=F.texture.format;O=g.has(fe)}if(O){const fe=F.texture.type,me=u.has(fe),he=ye.getClearColor(),Me=ye.getClearAlpha(),we=he.r,Ue=he.g,Ve=he.b;me?(p[0]=we,p[1]=Ue,p[2]=Ve,p[3]=Me,L.clearBufferuiv(L.COLOR,0,p)):(S[0]=we,S[1]=Ue,S[2]=Ve,S[3]=Me,L.clearBufferiv(L.COLOR,0,S))}else z|=L.COLOR_BUFFER_BIT}I&&(z|=L.DEPTH_BUFFER_BIT),j&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",ct,!1),ye.dispose(),Pe.dispose(),te.dispose(),x.dispose(),Z.dispose(),ve.dispose(),ae.dispose(),_e.dispose(),le.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Kf),Y.removeEventListener("sessionend",Zf),lr.stop()};function Se(E){E.preventDefault(),Mp("WebGLRenderer: Context Lost."),k=!0}function De(){Mp("WebGLRenderer: Context Restored."),k=!1;const E=A.autoReset,I=xe.enabled,j=xe.autoUpdate,z=xe.needsUpdate,O=xe.type;ne(),A.autoReset=E,xe.enabled=I,xe.autoUpdate=j,xe.needsUpdate=z,xe.type=O}function ct(E){$e("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Je(E){const I=E.target;I.removeEventListener("dispose",Je),si(I)}function si(E){ai(E),x.remove(E)}function ai(E){const I=x.get(E).programs;I!==void 0&&(I.forEach(function(j){le.releaseProgram(j)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,j,z,O,fe){I===null&&(I=at);const me=O.isMesh&&O.matrixWorld.determinant()<0,he=a_(E,I,j,z,O);Ee.setMaterial(z,me);let Me=j.index,we=1;if(z.wireframe===!0){if(Me=$.getWireframeAttribute(j),Me===void 0)return;we=2}const Ue=j.drawRange,Ve=j.attributes.position;let Ae=Ue.start*we,it=(Ue.start+Ue.count)*we;fe!==null&&(Ae=Math.max(Ae,fe.start*we),it=Math.min(it,(fe.start+fe.count)*we)),Me!==null?(Ae=Math.max(Ae,0),it=Math.min(it,Me.count)):Ve!=null&&(Ae=Math.max(Ae,0),it=Math.min(it,Ve.count));const St=it-Ae;if(St<0||St===1/0)return;ae.setup(O,z,he,j,Me);let _t,rt=ze;if(Me!==null&&(_t=J.get(Me),rt=N,rt.setIndex(_t)),O.isMesh)z.wireframe===!0?(Ee.setLineWidth(z.wireframeLinewidth*xt()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(O.isLine){let Vt=z.linewidth;Vt===void 0&&(Vt=1),Ee.setLineWidth(Vt*xt()),O.isLineSegments?rt.setMode(L.LINES):O.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else O.isPoints?rt.setMode(L.POINTS):O.isSprite&&rt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)wl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),rt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))rt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Vt=O._multiDrawStarts,Te=O._multiDrawCounts,cn=O._multiDrawCount,Ye=Me?J.get(Me).bytesPerElement:1,Rn=x.get(z).currentProgram.getUniforms();for(let Gn=0;Gn<cn;Gn++)Rn.setValue(L,"_gl_DrawID",Gn),rt.render(Vt[Gn]/Ye,Te[Gn])}else if(O.isInstancedMesh)rt.renderInstances(Ae,St,O.count);else if(j.isInstancedBufferGeometry){const Vt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Te=Math.min(j.instanceCount,Vt);rt.renderInstances(Ae,St,Te)}else rt.render(Ae,St)};function $f(E,I,j){E.transparent===!0&&E.side===pi&&E.forceSinglePass===!1?(E.side=ln,E.needsUpdate=!0,ja(E,I,j),E.side=rr,E.needsUpdate=!0,ja(E,I,j),E.side=pi):ja(E,I,j)}this.compile=function(E,I,j=null){j===null&&(j=E),C=te.get(j),C.init(I),b.push(C),j.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(C.pushLight(O),O.castShadow&&C.pushShadow(O))}),E!==j&&E.traverseVisible(function(O){O.isLight&&O.layers.test(I.layers)&&(C.pushLight(O),O.castShadow&&C.pushShadow(O))}),C.setupLights();const z=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const fe=O.material;if(fe)if(Array.isArray(fe))for(let me=0;me<fe.length;me++){const he=fe[me];$f(he,j,O),z.add(he)}else $f(fe,j,O),z.add(fe)}),C=b.pop(),z},this.compileAsync=function(E,I,j=null){const z=this.compile(E,I,j);return new Promise(O=>{function fe(){if(z.forEach(function(me){x.get(me).currentProgram.isReady()&&z.delete(me)}),z.size===0){O(E);return}setTimeout(fe,10)}Ke.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ql=null;function s_(E){ql&&ql(E)}function Kf(){lr.stop()}function Zf(){lr.start()}const lr=new J0;lr.setAnimationLoop(s_),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(E){ql=E,Y.setAnimationLoop(E),E===null?lr.stop():lr.start()},Y.addEventListener("sessionstart",Kf),Y.addEventListener("sessionend",Zf),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){$e("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;const j=Y.enabled===!0&&Y.isPresenting===!0,z=y!==null&&(F===null||j)&&y.begin(w,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(I),I=Y.getCamera()),E.isScene===!0&&E.onBeforeRender(w,E,I,F),C=te.get(E,b.length),C.init(I),b.push(C),Lt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Fe.setFromProjectionMatrix(Lt,Zn,I.reversedDepth),Ne=this.localClippingEnabled,be=se.init(this.clippingPlanes,Ne),M=Pe.get(E,R.length),M.init(),R.push(M),Y.enabled===!0&&Y.isPresenting===!0){const me=w.xr.getDepthSensingMesh();me!==null&&Yl(me,I,-1/0,w.sortObjects)}Yl(E,I,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(qe,Ze),Be=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Be&&ye.addToRenderList(M,E),this.info.render.frame++,be===!0&&se.beginShadows();const O=C.state.shadowsArray;if(xe.render(O,E,I),be===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&y.hasRenderPass())===!1){const me=M.opaque,he=M.transmissive;if(C.setupLights(),I.isArrayCamera){const Me=I.cameras;if(he.length>0)for(let we=0,Ue=Me.length;we<Ue;we++){const Ve=Me[we];Jf(me,he,E,Ve)}Be&&ye.render(E);for(let we=0,Ue=Me.length;we<Ue;we++){const Ve=Me[we];Qf(M,E,Ve,Ve.viewport)}}else he.length>0&&Jf(me,he,E,I),Be&&ye.render(E),Qf(M,E,I)}F!==null&&V===0&&(D.updateMultisampleRenderTarget(F),D.updateRenderTargetMipmap(F)),z&&y.end(w),E.isScene===!0&&E.onAfterRender(w,E,I),ae.resetDefaultState(),q=-1,H=null,b.pop(),b.length>0?(C=b[b.length-1],be===!0&&se.setGlobalState(w.clippingPlanes,C.state.camera)):C=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function Yl(E,I,j,z){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLight)C.pushLight(E),E.castShadow&&C.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){z&&Qe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const me=ve.update(E),he=E.material;he.visible&&M.push(E,me,he,j,Qe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const me=ve.update(E),he=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Qe.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Qe.copy(me.boundingSphere.center)),Qe.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(he)){const Me=me.groups;for(let we=0,Ue=Me.length;we<Ue;we++){const Ve=Me[we],Ae=he[Ve.materialIndex];Ae&&Ae.visible&&M.push(E,me,Ae,j,Qe.z,Ve)}}else he.visible&&M.push(E,me,he,j,Qe.z,null)}}const fe=E.children;for(let me=0,he=fe.length;me<he;me++)Yl(fe[me],I,j,z)}function Qf(E,I,j,z){const{opaque:O,transmissive:fe,transparent:me}=E;C.setupLightsView(j),be===!0&&se.setGlobalState(w.clippingPlanes,j),z&&Ee.viewport(W.copy(z)),O.length>0&&Wa(O,I,j),fe.length>0&&Wa(fe,I,j),me.length>0&&Wa(me,I,j),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Jf(E,I,j,z){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(C.state.transmissionRenderTarget[z.id]===void 0){const Ae=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");C.state.transmissionRenderTarget[z.id]=new ti(1,1,{generateMipmaps:!0,type:Ae?Ai:En,minFilter:Tr,samples:Math.max(4,lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const fe=C.state.transmissionRenderTarget[z.id],me=z.viewport||W;fe.setSize(me.z*w.transmissionResolutionScale,me.w*w.transmissionResolutionScale);const he=w.getRenderTarget(),Me=w.getActiveCubeFace(),we=w.getActiveMipmapLevel();w.setRenderTarget(fe),w.getClearColor(X),Q=w.getClearAlpha(),Q<1&&w.setClearColor(16777215,.5),w.clear(),Be&&ye.render(j);const Ue=w.toneMapping;w.toneMapping=ei;const Ve=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),C.setupLightsView(z),be===!0&&se.setGlobalState(w.clippingPlanes,z),Wa(E,j,z),D.updateMultisampleRenderTarget(fe),D.updateRenderTargetMipmap(fe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let it=0,St=I.length;it<St;it++){const _t=I[it],{object:rt,geometry:Vt,material:Te,group:cn}=_t;if(Te.side===pi&&rt.layers.test(z.layers)){const Ye=Te.side;Te.side=ln,Te.needsUpdate=!0,eh(rt,j,z,Vt,Te,cn),Te.side=Ye,Te.needsUpdate=!0,Ae=!0}}Ae===!0&&(D.updateMultisampleRenderTarget(fe),D.updateRenderTargetMipmap(fe))}w.setRenderTarget(he,Me,we),w.setClearColor(X,Q),Ve!==void 0&&(z.viewport=Ve),w.toneMapping=Ue}function Wa(E,I,j){const z=I.isScene===!0?I.overrideMaterial:null;for(let O=0,fe=E.length;O<fe;O++){const me=E[O],{object:he,geometry:Me,group:we}=me;let Ue=me.material;Ue.allowOverride===!0&&z!==null&&(Ue=z),he.layers.test(j.layers)&&eh(he,I,j,Me,Ue,we)}}function eh(E,I,j,z,O,fe){E.onBeforeRender(w,I,j,z,O,fe),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(w,I,j,z,E,fe),O.transparent===!0&&O.side===pi&&O.forceSinglePass===!1?(O.side=ln,O.needsUpdate=!0,w.renderBufferDirect(j,I,z,O,E,fe),O.side=rr,O.needsUpdate=!0,w.renderBufferDirect(j,I,z,O,E,fe),O.side=pi):w.renderBufferDirect(j,I,z,O,E,fe),E.onAfterRender(w,I,j,z,O,fe)}function ja(E,I,j){I.isScene!==!0&&(I=at);const z=x.get(E),O=C.state.lights,fe=C.state.shadowsArray,me=O.state.version,he=le.getParameters(E,O.state,fe,I,j),Me=le.getProgramCacheKey(he);let we=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,z.fog=I.fog;const Ue=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=Z.get(E.envMap||z.environment,Ue),z.envMapRotation=z.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",Je),we=new Map,z.programs=we);let Ve=we.get(Me);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===me)return nh(E,he),Ve}else he.uniforms=le.getUniforms(E),E.onBeforeCompile(he,w),Ve=le.acquireProgram(he,Me),we.set(Me,Ve),z.uniforms=he.uniforms;const Ae=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=se.uniform),nh(E,he),z.needsLights=l_(E),z.lightsStateVersion=me,z.needsLights&&(Ae.ambientLightColor.value=O.state.ambient,Ae.lightProbe.value=O.state.probe,Ae.directionalLights.value=O.state.directional,Ae.directionalLightShadows.value=O.state.directionalShadow,Ae.spotLights.value=O.state.spot,Ae.spotLightShadows.value=O.state.spotShadow,Ae.rectAreaLights.value=O.state.rectArea,Ae.ltc_1.value=O.state.rectAreaLTC1,Ae.ltc_2.value=O.state.rectAreaLTC2,Ae.pointLights.value=O.state.point,Ae.pointLightShadows.value=O.state.pointShadow,Ae.hemisphereLights.value=O.state.hemi,Ae.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ae.spotLightMatrix.value=O.state.spotLightMatrix,Ae.spotLightMap.value=O.state.spotLightMap,Ae.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Ve,z.uniformsList=null,Ve}function th(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=Ko.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function nh(E,I){const j=x.get(E);j.outputColorSpace=I.outputColorSpace,j.batching=I.batching,j.batchingColor=I.batchingColor,j.instancing=I.instancing,j.instancingColor=I.instancingColor,j.instancingMorph=I.instancingMorph,j.skinning=I.skinning,j.morphTargets=I.morphTargets,j.morphNormals=I.morphNormals,j.morphColors=I.morphColors,j.morphTargetsCount=I.morphTargetsCount,j.numClippingPlanes=I.numClippingPlanes,j.numIntersection=I.numClipIntersection,j.vertexAlphas=I.vertexAlphas,j.vertexTangents=I.vertexTangents,j.toneMapping=I.toneMapping}function a_(E,I,j,z,O){I.isScene!==!0&&(I=at),D.resetTextureUnits();const fe=I.fog,me=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?I.environment:null,he=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:bs,Me=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,we=Z.get(z.envMap||me,Me),Ue=z.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ve=!!j.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!j.morphAttributes.position,it=!!j.morphAttributes.normal,St=!!j.morphAttributes.color;let _t=ei;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(_t=w.toneMapping);const rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Vt=rt!==void 0?rt.length:0,Te=x.get(z),cn=C.state.lights;if(be===!0&&(Ne===!0||E!==H)){const Nt=E===H&&z.id===q;se.setState(z,E,Nt)}let Ye=!1;z.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==cn.state.version||Te.outputColorSpace!==he||O.isBatchedMesh&&Te.batching===!1||!O.isBatchedMesh&&Te.batching===!0||O.isBatchedMesh&&Te.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Te.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Te.instancing===!1||!O.isInstancedMesh&&Te.instancing===!0||O.isSkinnedMesh&&Te.skinning===!1||!O.isSkinnedMesh&&Te.skinning===!0||O.isInstancedMesh&&Te.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Te.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Te.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Te.instancingMorph===!1&&O.morphTexture!==null||Te.envMap!==we||z.fog===!0&&Te.fog!==fe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==Ue||Te.vertexTangents!==Ve||Te.morphTargets!==Ae||Te.morphNormals!==it||Te.morphColors!==St||Te.toneMapping!==_t||Te.morphTargetsCount!==Vt)&&(Ye=!0):(Ye=!0,Te.__version=z.version);let Rn=Te.currentProgram;Ye===!0&&(Rn=ja(z,I,O));let Gn=!1,cr=!1,Fr=!1;const ot=Rn.getUniforms(),Ft=Te.uniforms;if(Ee.useProgram(Rn.program)&&(Gn=!0,cr=!0,Fr=!0),z.id!==q&&(q=z.id,cr=!0),Gn||H!==E){Ee.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ot.setValue(L,"projectionMatrix",E.projectionMatrix),ot.setValue(L,"viewMatrix",E.matrixWorldInverse);const Ni=ot.map.cameraPosition;Ni!==void 0&&Ni.setValue(L,We.setFromMatrixPosition(E.matrixWorld)),lt.logarithmicDepthBuffer&&ot.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ot.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),H!==E&&(H=E,cr=!0,Fr=!0)}if(Te.needsLights&&(cn.state.directionalShadowMap.length>0&&ot.setValue(L,"directionalShadowMap",cn.state.directionalShadowMap,D),cn.state.spotShadowMap.length>0&&ot.setValue(L,"spotShadowMap",cn.state.spotShadowMap,D),cn.state.pointShadowMap.length>0&&ot.setValue(L,"pointShadowMap",cn.state.pointShadowMap,D)),O.isSkinnedMesh){ot.setOptional(L,O,"bindMatrix"),ot.setOptional(L,O,"bindMatrixInverse");const Nt=O.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ot.setValue(L,"boneTexture",Nt.boneTexture,D))}O.isBatchedMesh&&(ot.setOptional(L,O,"batchingTexture"),ot.setValue(L,"batchingTexture",O._matricesTexture,D),ot.setOptional(L,O,"batchingIdTexture"),ot.setValue(L,"batchingIdTexture",O._indirectTexture,D),ot.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ot.setValue(L,"batchingColorTexture",O._colorsTexture,D));const Li=j.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&pe.update(O,j,Rn),(cr||Te.receiveShadow!==O.receiveShadow)&&(Te.receiveShadow=O.receiveShadow,ot.setValue(L,"receiveShadow",O.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&I.environment!==null&&(Ft.envMapIntensity.value=I.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=Sw()),cr&&(ot.setValue(L,"toneMappingExposure",w.toneMappingExposure),Te.needsLights&&o_(Ft,Fr),fe&&z.fog===!0&&Ce.refreshFogUniforms(Ft,fe),Ce.refreshMaterialUniforms(Ft,z,Le,re,C.state.transmissionRenderTarget[E.id]),Ko.upload(L,th(Te),Ft,D)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Ko.upload(L,th(Te),Ft,D),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ot.setValue(L,"center",O.center),ot.setValue(L,"modelViewMatrix",O.modelViewMatrix),ot.setValue(L,"normalMatrix",O.normalMatrix),ot.setValue(L,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Nt=z.uniformsGroups;for(let Ni=0,Or=Nt.length;Ni<Or;Ni++){const ih=Nt[Ni];_e.update(ih,Rn),_e.bind(ih,Rn)}}return Rn}function o_(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function l_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,I,j){const z=x.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),x.get(E.texture).__webglTexture=I,x.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:j,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const j=x.get(E);j.__webglFramebuffer=I,j.__useDefaultFramebuffer=I===void 0};const c_=L.createFramebuffer();this.setRenderTarget=function(E,I=0,j=0){F=E,P=I,V=j;let z=null,O=!1,fe=!1;if(E){const he=x.get(E);if(he.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(L.FRAMEBUFFER,he.__webglFramebuffer),W.copy(E.viewport),U.copy(E.scissor),B=E.scissorTest,Ee.viewport(W),Ee.scissor(U),Ee.setScissorTest(B),q=-1;return}else if(he.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(he.__hasExternalTextures)D.rebindTextures(E,x.get(E.texture).__webglTexture,x.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ue=E.depthTexture;if(he.__boundDepthTexture!==Ue){if(Ue!==null&&x.has(Ue)&&(E.width!==Ue.image.width||E.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}const Me=E.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(fe=!0);const we=x.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[I])?z=we[I][j]:z=we[I],O=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?z=x.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?z=we[j]:z=we,W.copy(E.viewport),U.copy(E.scissor),B=E.scissorTest}else W.copy(K).multiplyScalar(Le).floor(),U.copy(ie).multiplyScalar(Le).floor(),B=ue;if(j!==0&&(z=c_),Ee.bindFramebuffer(L.FRAMEBUFFER,z)&&Ee.drawBuffers(E,z),Ee.viewport(W),Ee.scissor(U),Ee.setScissorTest(B),O){const he=x.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,he.__webglTexture,j)}else if(fe){const he=I;for(let Me=0;Me<E.textures.length;Me++){const we=x.get(E.textures[Me]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Me,we.__webglTexture,j,he)}}else if(E!==null&&j!==0){const he=x.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,he.__webglTexture,j)}q=-1},this.readRenderTargetPixels=function(E,I,j,z,O,fe,me,he=0){if(!(E&&E.isWebGLRenderTarget)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Ee.bindFramebuffer(L.FRAMEBUFFER,Me);try{const we=E.textures[he],Ue=we.format,Ve=we.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!lt.textureFormatReadable(Ue)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ve)){$e("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-z&&j>=0&&j<=E.height-O&&L.readPixels(I,j,z,O,ce.convert(Ue),ce.convert(Ve),fe)}finally{const we=F!==null?x.get(F).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,I,j,z,O,fe,me,he=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me)if(I>=0&&I<=E.width-z&&j>=0&&j<=E.height-O){Ee.bindFramebuffer(L.FRAMEBUFFER,Me);const we=E.textures[he],Ue=we.format,Ve=we.type;if(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+he),!lt.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,fe.byteLength,L.STREAM_READ),L.readPixels(I,j,z,O,ce.convert(Ue),ce.convert(Ve),0);const it=F!==null?x.get(F).__webglFramebuffer:null;Ee.bindFramebuffer(L.FRAMEBUFFER,it);const St=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jS(L,St,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,fe),L.deleteBuffer(Ae),L.deleteSync(St),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,j=0){const z=Math.pow(2,-j),O=Math.floor(E.image.width*z),fe=Math.floor(E.image.height*z),me=I!==null?I.x:0,he=I!==null?I.y:0;D.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,j,0,0,me,he,O,fe),Ee.unbindTexture()};const u_=L.createFramebuffer(),d_=L.createFramebuffer();this.copyTextureToTexture=function(E,I,j=null,z=null,O=0,fe=0){let me,he,Me,we,Ue,Ve,Ae,it,St;const _t=E.isCompressedTexture?E.mipmaps[fe]:E.image;if(j!==null)me=j.max.x-j.min.x,he=j.max.y-j.min.y,Me=j.isBox3?j.max.z-j.min.z:1,we=j.min.x,Ue=j.min.y,Ve=j.isBox3?j.min.z:0;else{const Ft=Math.pow(2,-O);me=Math.floor(_t.width*Ft),he=Math.floor(_t.height*Ft),E.isDataArrayTexture?Me=_t.depth:E.isData3DTexture?Me=Math.floor(_t.depth*Ft):Me=1,we=0,Ue=0,Ve=0}z!==null?(Ae=z.x,it=z.y,St=z.z):(Ae=0,it=0,St=0);const rt=ce.convert(I.format),Vt=ce.convert(I.type);let Te;I.isData3DTexture?(D.setTexture3D(I,0),Te=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(D.setTexture2DArray(I,0),Te=L.TEXTURE_2D_ARRAY):(D.setTexture2D(I,0),Te=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const cn=L.getParameter(L.UNPACK_ROW_LENGTH),Ye=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Rn=L.getParameter(L.UNPACK_SKIP_PIXELS),Gn=L.getParameter(L.UNPACK_SKIP_ROWS),cr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,_t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);const Fr=E.isDataArrayTexture||E.isData3DTexture,ot=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const Ft=x.get(E),Li=x.get(I),Nt=x.get(Ft.__renderTarget),Ni=x.get(Li.__renderTarget);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,Nt.__webglFramebuffer),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let Or=0;Or<Me;Or++)Fr&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(E).__webglTexture,O,Ve+Or),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(I).__webglTexture,fe,St+Or)),L.blitFramebuffer(we,Ue,me,he,Ae,it,me,he,L.DEPTH_BUFFER_BIT,L.NEAREST);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||x.has(E)){const Ft=x.get(E),Li=x.get(I);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,u_),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,d_);for(let Nt=0;Nt<Me;Nt++)Fr?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.__webglTexture,O,Ve+Nt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ft.__webglTexture,O),ot?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Li.__webglTexture,fe,St+Nt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Li.__webglTexture,fe),O!==0?L.blitFramebuffer(we,Ue,me,he,Ae,it,me,he,L.COLOR_BUFFER_BIT,L.NEAREST):ot?L.copyTexSubImage3D(Te,fe,Ae,it,St+Nt,we,Ue,me,he):L.copyTexSubImage2D(Te,fe,Ae,it,we,Ue,me,he);Ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ot?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Te,fe,Ae,it,St,me,he,Me,rt,Vt,_t.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Te,fe,Ae,it,St,me,he,Me,rt,_t.data):L.texSubImage3D(Te,fe,Ae,it,St,me,he,Me,rt,Vt,_t):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,fe,Ae,it,me,he,rt,Vt,_t.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,fe,Ae,it,_t.width,_t.height,rt,_t.data):L.texSubImage2D(L.TEXTURE_2D,fe,Ae,it,me,he,rt,Vt,_t);L.pixelStorei(L.UNPACK_ROW_LENGTH,cn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ye),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Gn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,cr),fe===0&&I.generateMipmaps&&L.generateMipmap(Te),Ee.unbindTexture()},this.initRenderTarget=function(E){x.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){P=0,V=0,F=null,Ee.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}function Mw({color:t="#0000ff",flakeSize:e=.01,minFlakeSize:n=1.25,pixelResolution:i=200,speed:r=1.25,depthFade:s=8,farPlane:a=20,brightness:o=1,gamma:l=.4545,density:c=.3,variant:f="snowflake",direction:h=125,style:d={}}){const m=Re.useRef(null);return Re.useEffect(()=>{const _=m.current;if(!_)return;const T=_.offsetWidth,g=_.offsetHeight;if(T===0||g===0)return;let u,p,S,M,C,R,b=!1;const y=f==="round"?1:f==="snowflake"?2:0;function w(F){const q=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(F);return q?{r:parseInt(q[1],16)/255,g:parseInt(q[2],16)/255,b:parseInt(q[3],16)/255}:{r:0,g:0,b:1}}const k=w(t),P=`
    void main() {
      gl_Position = vec4(position, 1.0);
    }`,V=`
    precision mediump float;
    uniform float uTime;
    uniform vec2 uResolution;
    uniform float uFlakeSize;
    uniform float uMinFlakeSize;
    uniform float uPixelResolution;
    uniform float uSpeed;
    uniform float uDepthFade;
    uniform float uFarPlane;
    uniform vec3 uColor;
    uniform float uBrightness;
    uniform float uGamma;
    uniform float uDensity;
    uniform float uVariant;
    uniform float uDirection;

    #define PI 3.14159265
    #define PI_OVER_6 0.5235988
    #define PI_OVER_3 1.0471976
    #define M1 1597334677U
    #define M2 3812015801U
    #define M3 3299493293U
    #define F0 2.3283064e-10

    #define hash(n) (n * (n ^ (n >> 15)))
    #define coord3(p) (uvec3(p).x * M1 ^ uvec3(p).y * M2 ^ uvec3(p).z * M3)

    const vec3 camK = vec3(0.57735027, 0.57735027, 0.57735027);
    const vec3 camI = vec3(0.81649658, -0.40824829, -0.40824829);
    const vec3 camJ = vec3(-0.40824829, 0.81649658, -0.40824829);
    const vec2 b1d = vec2(0.574, 0.819);

    vec3 hash3(uint n) {
      uvec3 hashed = hash(n) * uvec3(1U, 511U, 262143U);
      return vec3(hashed) * F0;
    }

    float snowflakeDist(vec2 p) {
      float r = length(p);
      float a = atan(p.y, p.x);
      a = abs(mod(a + PI_OVER_6, PI_OVER_3) - PI_OVER_6);
      vec2 q = r * vec2(cos(a), sin(a));
      float dMain = max(abs(q.y), max(-q.x, q.x - 1.0));
      float b1t = clamp(dot(q - vec2(0.4, 0.0), b1d), 0.0, 0.4);
      float dB1 = length(q - vec2(0.4, 0.0) - b1t * b1d);
      float b2t = clamp(dot(q - vec2(0.7, 0.0), b1d), 0.0, 0.25);
      float dB2 = length(q - vec2(0.7, 0.0) - b2t * b1d);
      return min(dMain, min(dB1, dB2)) * 10.0;
    }

    void main() {
      float invPixelRes = 1.0 / uPixelResolution;
      float pixelSize = max(1.0, floor(0.5 + uResolution.x * invPixelRes));
      float invPixelSize = 1.0 / pixelSize;

      vec2 fragCoord = floor(gl_FragCoord.xy * invPixelSize);
      vec2 res = uResolution * invPixelSize;
      float invResX = 1.0 / res.x;
      vec3 ray = normalize(vec3((fragCoord - res * 0.5) * invResX, 1.0));
      ray = ray.x * camI + ray.y * camJ + ray.z * camK;

      float timeSpeed = uTime * uSpeed;
      float windX = cos(uDirection) * 0.4;
      float windY = sin(uDirection) * 0.4;
      vec3 camPos = (windX * camI + windY * camJ + 0.1 * camK) * timeSpeed;
      vec3 pos = camPos;

      vec3 absRay = max(abs(ray), vec3(0.001));
      vec3 strides = 1.0 / absRay;
      vec3 raySign = step(ray, vec3(0.0));
      vec3 phase = fract(pos) * strides;
      phase = mix(strides - phase, phase, raySign);

      float rayDotCamK = dot(ray, camK);
      float invRayDotCamK = 1.0 / rayDotCamK;
      float invDepthFade = 1.0 / uDepthFade;
      float halfInvResX = 0.5 * invResX;
      vec3 timeAnim = timeSpeed * 0.1 * vec3(7.0, 8.0, 5.0);
      float t = 0.0;

      for (int i = 0; i < 128; i++) {
        if (t >= uFarPlane) break;

        vec3 fpos = floor(pos);
        uint cellCoord = coord3(fpos);
        float cellHash = hash3(cellCoord).x;

        if (cellHash < uDensity) {
          vec3 h = hash3(cellCoord);

          vec3 sinArg1 = fpos.yzx * 0.073;
          vec3 sinArg2 = fpos.zxy * 0.27;
          vec3 flakePos = 0.5 - 0.5 * cos(4.0 * sin(sinArg1) + 4.0 * sin(sinArg2) + 2.0 * h + timeAnim);
          flakePos = flakePos * 0.8 + 0.1 + fpos;
          float toIntersection = dot(flakePos - pos, camK) * invRayDotCamK;

          if (toIntersection > 0.0) {
            vec3 testPos = pos + ray * toIntersection - flakePos;
            float testX = dot(testPos, camI);
            float testY = dot(testPos, camJ);
            vec2 testUV = abs(vec2(testX, testY));

            float depth = dot(flakePos - camPos, camK);
            float flakeSize = max(uFlakeSize, uMinFlakeSize * depth * halfInvResX);

            float dist;
            if (uVariant < 0.5) {
              dist = max(testUV.x, testUV.y);
            } else if (uVariant < 1.5) {
              dist = length(testUV);
            } else {
              float invFlakeSize = 1.0 / flakeSize;
              dist = snowflakeDist(vec2(testX, testY) * invFlakeSize) * flakeSize;
            }

            if (dist < flakeSize) {
              float flakeSizeRatio = uFlakeSize / flakeSize;
              float intensity = exp2(-(t + toIntersection) * invDepthFade) *
                                min(1.0, flakeSizeRatio * flakeSizeRatio) * uBrightness;
              gl_FragColor = vec4(uColor * pow(vec3(intensity), vec3(uGamma)), 1.0);
              return;
            }
          }
        }

        float nextStep = min(min(phase.x, phase.y), phase.z);
        vec3 sel = step(phase, vec3(nextStep));
        phase = phase - nextStep + strides * sel;
        t += nextStep;
        pos = mix(pos + ray * nextStep, floor(pos + ray * nextStep + 0.5), sel);
      }

      gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }`;try{p=new yw({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1}),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setSize(T,g),p.setClearColor(0,0),_.appendChild(p.domElement),S=new oy,M=new Yf(-1,1,1,-1,0,1),C=new Hn({vertexShader:P,fragmentShader:V,uniforms:{uTime:{value:0},uResolution:{value:new nt(T,g)},uFlakeSize:{value:e},uMinFlakeSize:{value:n},uPixelResolution:{value:i},uSpeed:{value:r},uDepthFade:{value:s},uFarPlane:{value:a},uColor:{value:new G(k.r,k.g,k.b)},uBrightness:{value:o},uGamma:{value:l},uDensity:{value:c},uVariant:{value:y},uDirection:{value:h*Math.PI/180}},transparent:!0}),R=new Ga(2,2),S.add(new ri(R,C));const F=performance.now(),q=()=>{b||(u=requestAnimationFrame(q),C.uniforms.uTime.value=(performance.now()-F)*.001,p.render(S,M))};q()}catch(F){console.warn("PixelSnow init error:",F)}return()=>{if(b=!0,cancelAnimationFrame(u),p){try{_&&_.contains(p.domElement)&&_.removeChild(p.domElement)}catch{}try{p.dispose()}catch{}try{p.forceContextLoss()}catch{}}try{R&&R.dispose()}catch{}try{C&&C.dispose()}catch{}}},[t,e,n,i,r,s,a,o,l,c,f,h]),v.jsx("div",{ref:m,style:d})}const Ew=()=>v.jsx("div",{className:"fuzzy-overlay","aria-hidden":"true"}),Tw=({project:t,onClose:e})=>{const[n,i]=Re.useState(null);return Re.useLayoutEffect(()=>{const r=document.documentElement,s=document.body,a=r.style.scrollBehavior;r.style.scrollBehavior="auto",s.style.scrollBehavior="auto";const o=()=>{window.scrollTo({top:0,left:0,behavior:"auto"}),r.scrollTop=0,s.scrollTop=0};o();const l=setTimeout(()=>{o(),r.style.scrollBehavior=a||"",s.style.scrollBehavior=""},50);return()=>clearTimeout(l)},[t]),Re.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[n]),t?v.jsxs("div",{style:{padding:"120px 20px 60px",minHeight:"100vh",maxWidth:"1120px",margin:"0 auto",animation:"fadeIn 0.4s ease-out"},children:[v.jsxs("button",{onClick:e,style:{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",color:"#eaf2ff",padding:"10px 20px",borderRadius:"99px",cursor:"pointer",display:"inline-flex",alignItems:"center",gap:"8px",marginBottom:"2rem",transition:"all 0.3s ease"},onMouseEnter:r=>{r.currentTarget.style.background="rgba(255,255,255,0.1)",r.currentTarget.style.transform="translateX(-5px)"},onMouseLeave:r=>{r.currentTarget.style.background="rgba(255,255,255,0.05)",r.currentTarget.style.transform="translateX(0)"},children:[v.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:v.jsx("path",{d:"M19 12H5M12 19l-7-7 7-7"})}),"Volver al portafolio"]}),v.jsxs(Hl,{className:"project-details-content",style:{width:"100%",background:"rgba(255, 255, 255, 0.03)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"24px",padding:"3rem",display:"flex",flexDirection:"column",gap:"2.5rem",boxShadow:"0 20px 40px rgba(0,0,0,0.3)"},children:[v.jsxs("div",{style:{textAlign:"center"},children:[v.jsxs("p",{className:"pill",style:{display:"inline-block",marginBottom:"1rem"},children:[t.category.toUpperCase()," • PROYECTO"]}),v.jsx("h1",{style:{fontSize:"clamp(2rem, 5vw, 3.5rem)",margin:"0 0 1rem 0"},children:v.jsx($u,{text:t.title,speed:3})}),v.jsxs("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:"1.2rem"},children:["Desarrollado en ",t.year]})]}),v.jsx("img",{src:t.image,alt:t.title,style:{width:"100%",maxHeight:"600px",borderRadius:"16px",objectFit:"cover",border:"1px solid rgba(255,255,255,0.1)",cursor:"pointer"},onClick:()=>i(t.image)}),v.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:[v.jsxs("div",{style:{fontSize:"1.1rem",lineHeight:"1.7",color:"rgba(255,255,255,0.85)"},children:[v.jsx("h3",{style:{marginBottom:"1rem",color:"#fff",fontSize:"1.5rem"},children:"Sobre el proyecto"}),v.jsx("p",{children:t.fullDescription||t.description}),v.jsx("h4",{style:{marginTop:"2rem",marginBottom:"1rem",color:"#fff"},children:"Stack Tecnológico"}),v.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:t.tags.map((r,s)=>v.jsx("span",{className:"chip",children:r},s))})]}),t.features&&t.features.length>0&&v.jsxs("div",{style:{background:"rgba(0,0,0,0.2)",padding:"2rem",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.05)"},children:[v.jsx("h3",{style:{marginBottom:"1.5rem",color:"#fff",fontSize:"1.5rem"},children:"Características Principales"}),v.jsx("ul",{style:{listStyleType:"none",padding:0,display:"flex",flexDirection:"column",gap:"1rem"},children:t.features.map((r,s)=>v.jsxs("li",{style:{display:"flex",alignItems:"flex-start",gap:"0.8rem",color:"rgba(255,255,255,0.8)",lineHeight:"1.5"},children:[v.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#2ef59a",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{flexShrink:0,marginTop:"2px"},children:[v.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),v.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),r]},s))})]})]}),t.gallery&&t.gallery.length>1&&v.jsxs("div",{style:{marginTop:"1rem"},children:[v.jsx("h3",{style:{marginBottom:"1.5rem",color:"#fff",fontSize:"1.5rem",textAlign:"center"},children:"Galería de Pantallas"}),v.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.5rem"},children:t.gallery.slice(1).map((r,s)=>v.jsx("div",{style:{overflow:"hidden",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.1)"},children:v.jsx("img",{src:r,alt:`Pantalla ${s+1} del proyecto`,style:{width:"100%",height:"220px",objectFit:"cover",cursor:"pointer",transition:"transform 0.4s"},onClick:()=>i(r),onMouseEnter:a=>a.currentTarget.style.transform="scale(1.05)",onMouseLeave:a=>a.currentTarget.style.transform="scale(1)"})},s))})]}),v.jsxs("div",{style:{textAlign:"center",margin:"4rem 0 1rem",padding:"3.5rem 2rem",background:"rgba(255,255,255,0.02)",borderRadius:"24px",border:"1px solid rgba(255,255,255,0.05)"},children:[v.jsx("h3",{style:{marginBottom:"1.5rem",color:"#fff",fontSize:"1.8rem",fontWeight:"800"},children:"Somos NexoIT"}),v.jsx("p",{style:{color:"rgba(255,255,255,0.8)",fontSize:"1.15rem",lineHeight:"1.7",maxWidth:"800px",margin:"0 auto 2.5rem"},children:"Un equipo de ingenieros de sistemas enfocado en crear soluciones rápidas, seguras y escalables: páginas web, aplicaciones móviles, sistemas internos, software a medida y apoyo en proyectos."}),v.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[v.jsx("a",{href:`https://wa.me/${Pa}?text=Hola,%20busco%20crear%20un%20proyecto%20similar%20a%20${encodeURIComponent(t.title)}.`,target:"_blank",rel:"noopener noreferrer",className:"btn btn-filled",style:{padding:"14px 32px",fontSize:"1.1rem"},children:"Quiero una parecida"}),v.jsx("a",{href:"#servicios",onClick:()=>e(),className:"btn",style:{padding:"14px 32px",fontSize:"1.1rem",background:"transparent",border:"1px solid rgba(255,255,255,0.2)",color:"#fff"},children:"Ver servicios"})]})]})]}),n&&v.jsxs("div",{onClick:()=>i(null),style:{position:"fixed",inset:0,backgroundColor:"rgba(0, 0, 0, 0.9)",backdropFilter:"blur(8px)",zIndex:999999,display:"flex",alignItems:"center",justifyContent:"center",cursor:"zoom-out",animation:"fadeIn 0.2s ease-out"},children:[v.jsx("img",{src:n,alt:"Vista ampliada",style:{maxWidth:"90vw",maxHeight:"90vh",objectFit:"contain",borderRadius:"8px",animation:"scaleIn 0.3s ease-out"},onClick:r=>r.stopPropagation()}),v.jsx("button",{onClick:()=>i(null),style:{position:"absolute",top:"20px",right:"30px",background:"rgba(255,255,255,0.1)",border:"none",color:"#fff",width:"50px",height:"50px",borderRadius:"50%",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",zIndex:10,transition:"background 0.2s"},onMouseEnter:r=>r.currentTarget.style.background="rgba(255,255,255,0.2)",onMouseLeave:r=>r.currentTarget.style.background="rgba(255,255,255,0.1)",children:v.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:v.jsx("path",{d:"M18 6L6 18M6 6l12 12"})})})]})]}):null};function ww(){const[t,e]=Re.useState({open:!1,plan:"",price:"",desc:""}),[n,i]=Re.useState(null),r=Re.useCallback((a,o,l)=>{e({open:!0,plan:a,price:o,desc:l})},[]),s=Re.useCallback(()=>{e({open:!1,plan:"",price:"",desc:""})},[]);return v.jsxs(v.Fragment,{children:[v.jsx(Bx,{}),v.jsx(Ew,{}),v.jsx(Mw,{color:"#0000ff",flakeSize:.01,minFlakeSize:1.25,pixelResolution:200,speed:1.25,depthFade:8,farPlane:20,brightness:1,gamma:.4545,density:.3,variant:"snowflake",direction:125,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}}),v.jsx("a",{className:"skip",href:"#contenido",children:"Saltar al contenido"}),v.jsx(qx,{onNavClick:()=>i(null)}),v.jsx("main",{id:"contenido",style:{overflowAnchor:"none"},children:n?v.jsx(Tw,{project:n,onClose:()=>i(null)}):v.jsxs(v.Fragment,{children:[v.jsx(Yx,{}),v.jsx($x,{}),v.jsx(Kx,{}),v.jsx(Zx,{}),v.jsx(Jx,{onSelectProject:i}),v.jsx(tS,{onCotizar:r}),v.jsx(iS,{}),v.jsx(rS,{}),v.jsx(sS,{}),v.jsx(aS,{})]})}),v.jsx(oS,{onNavClick:()=>i(null)}),v.jsx(lS,{}),v.jsx(cS,{},n?"proj":"main"),t.open&&v.jsx(T0,{initialPlan:t.plan,initialPrice:t.price,initialDesc:t.desc,onClose:s})]})}class Aw extends Ua.Component{constructor(e){super(e),this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,n){console.error("ErrorBoundary caught an error:",e,n)}render(){return this.state.hasError?v.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#0a0a0a",color:"#fff",padding:"2rem",textAlign:"center"},children:v.jsxs("div",{children:[v.jsx("h1",{style:{fontSize:"2rem",marginBottom:"1rem"},children:"Algo salió mal"}),v.jsx("p",{style:{color:"#888",marginBottom:"2rem"},children:"Ha ocurrido un error inesperado. Por favor, recarga la página."}),v.jsx("button",{onClick:()=>window.location.reload(),style:{padding:"0.75rem 1.5rem",background:"#2ef59a",color:"#0a0a0a",border:"none",borderRadius:"12px",fontWeight:"700",cursor:"pointer",fontSize:"1rem"},children:"Recargar página"})]})}):this.props.children}}nu.createRoot(document.getElementById("root")).render(v.jsx(Ua.StrictMode,{children:v.jsx(Aw,{children:v.jsx(ww,{})})}));

(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var gc={exports:{}},wo={},vc={exports:{}},ct={};var fp;function Dv(){if(fp)return ct;fp=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function _(N,re,Ie){this.props=N,this.context=re,this.refs=T,this.updater=Ie||y}_.prototype.isReactComponent={},_.prototype.setState=function(N,re){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,re,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=_.prototype;function I(N,re,Ie){this.props=N,this.context=re,this.refs=T,this.updater=Ie||y}var R=I.prototype=new g;R.constructor=I,w(R,_.prototype),R.isPureReactComponent=!0;var D=Array.isArray,Q=Object.prototype.hasOwnProperty,z={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function K(N,re,Ie){var $,fe={},ye=null,Ee=null;if(re!=null)for($ in re.ref!==void 0&&(Ee=re.ref),re.key!==void 0&&(ye=""+re.key),re)Q.call(re,$)&&!F.hasOwnProperty($)&&(fe[$]=re[$]);var Pe=arguments.length-2;if(Pe===1)fe.children=Ie;else if(1<Pe){for(var Fe=Array(Pe),je=0;je<Pe;je++)Fe[je]=arguments[je+2];fe.children=Fe}if(N&&N.defaultProps)for($ in Pe=N.defaultProps,Pe)fe[$]===void 0&&(fe[$]=Pe[$]);return{$$typeof:o,type:N,key:ye,ref:Ee,props:fe,_owner:z.current}}function P(N,re){return{$$typeof:o,type:N.type,key:re,ref:N.ref,props:N.props,_owner:N._owner}}function A(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function H(N){var re={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ie){return re[Ie]})}var ce=/\/+/g;function ie(N,re){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):re.toString(36)}function le(N,re,Ie,$,fe){var ye=typeof N;(ye==="undefined"||ye==="boolean")&&(N=null);var Ee=!1;if(N===null)Ee=!0;else switch(ye){case"string":case"number":Ee=!0;break;case"object":switch(N.$$typeof){case o:case e:Ee=!0}}if(Ee)return Ee=N,fe=fe(Ee),N=$===""?"."+ie(Ee,0):$,D(fe)?(Ie="",N!=null&&(Ie=N.replace(ce,"$&/")+"/"),le(fe,re,Ie,"",function(je){return je})):fe!=null&&(A(fe)&&(fe=P(fe,Ie+(!fe.key||Ee&&Ee.key===fe.key?"":(""+fe.key).replace(ce,"$&/")+"/")+N)),re.push(fe)),1;if(Ee=0,$=$===""?".":$+":",D(N))for(var Pe=0;Pe<N.length;Pe++){ye=N[Pe];var Fe=$+ie(ye,Pe);Ee+=le(ye,re,Ie,Fe,fe)}else if(Fe=x(N),typeof Fe=="function")for(N=Fe.call(N),Pe=0;!(ye=N.next()).done;)ye=ye.value,Fe=$+ie(ye,Pe++),Ee+=le(ye,re,Ie,Fe,fe);else if(ye==="object")throw re=String(N),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return Ee}function he(N,re,Ie){if(N==null)return N;var $=[],fe=0;return le(N,$,"","",function(ye){return re.call(Ie,ye,fe++)}),$}function se(N){if(N._status===-1){var re=N._result;re=re(),re.then(function(Ie){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ie)},function(Ie){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ie)}),N._status===-1&&(N._status=0,N._result=re)}if(N._status===1)return N._result.default;throw N._result}var ue={current:null},B={transition:null},de={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:B,ReactCurrentOwner:z};function ae(){throw Error("act(...) is not supported in production builds of React.")}return ct.Children={map:he,forEach:function(N,re,Ie){he(N,function(){re.apply(this,arguments)},Ie)},count:function(N){var re=0;return he(N,function(){re++}),re},toArray:function(N){return he(N,function(re){return re})||[]},only:function(N){if(!A(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ct.Component=_,ct.Fragment=n,ct.Profiler=a,ct.PureComponent=I,ct.StrictMode=r,ct.Suspense=p,ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=de,ct.act=ae,ct.cloneElement=function(N,re,Ie){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var $=w({},N.props),fe=N.key,ye=N.ref,Ee=N._owner;if(re!=null){if(re.ref!==void 0&&(ye=re.ref,Ee=z.current),re.key!==void 0&&(fe=""+re.key),N.type&&N.type.defaultProps)var Pe=N.type.defaultProps;for(Fe in re)Q.call(re,Fe)&&!F.hasOwnProperty(Fe)&&($[Fe]=re[Fe]===void 0&&Pe!==void 0?Pe[Fe]:re[Fe])}var Fe=arguments.length-2;if(Fe===1)$.children=Ie;else if(1<Fe){Pe=Array(Fe);for(var je=0;je<Fe;je++)Pe[je]=arguments[je+2];$.children=Pe}return{$$typeof:o,type:N.type,key:fe,ref:ye,props:$,_owner:Ee}},ct.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},ct.createElement=K,ct.createFactory=function(N){var re=K.bind(null,N);return re.type=N,re},ct.createRef=function(){return{current:null}},ct.forwardRef=function(N){return{$$typeof:d,render:N}},ct.isValidElement=A,ct.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:se}},ct.memo=function(N,re){return{$$typeof:m,type:N,compare:re===void 0?null:re}},ct.startTransition=function(N){var re=B.transition;B.transition={};try{N()}finally{B.transition=re}},ct.unstable_act=ae,ct.useCallback=function(N,re){return ue.current.useCallback(N,re)},ct.useContext=function(N){return ue.current.useContext(N)},ct.useDebugValue=function(){},ct.useDeferredValue=function(N){return ue.current.useDeferredValue(N)},ct.useEffect=function(N,re){return ue.current.useEffect(N,re)},ct.useId=function(){return ue.current.useId()},ct.useImperativeHandle=function(N,re,Ie){return ue.current.useImperativeHandle(N,re,Ie)},ct.useInsertionEffect=function(N,re){return ue.current.useInsertionEffect(N,re)},ct.useLayoutEffect=function(N,re){return ue.current.useLayoutEffect(N,re)},ct.useMemo=function(N,re){return ue.current.useMemo(N,re)},ct.useReducer=function(N,re,Ie){return ue.current.useReducer(N,re,Ie)},ct.useRef=function(N){return ue.current.useRef(N)},ct.useState=function(N){return ue.current.useState(N)},ct.useSyncExternalStore=function(N,re,Ie){return ue.current.useSyncExternalStore(N,re,Ie)},ct.useTransition=function(){return ue.current.useTransition()},ct.version="18.3.1",ct}var dp;function Uf(){return dp||(dp=1,vc.exports=Dv()),vc.exports}var hp;function Uv(){if(hp)return wo;hp=1;var o=Uf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,S={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(S[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)S[v]===void 0&&(S[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:y,props:S,_owner:a.current}}return wo.Fragment=n,wo.jsx=f,wo.jsxs=f,wo}var pp;function Iv(){return pp||(pp=1,gc.exports=Uv()),gc.exports}var $c=Iv(),ui=Uf(),Ya={},_c={exports:{}},yn={},xc={exports:{}},Sc={};var mp;function Nv(){return mp||(mp=1,(function(o){function e(B,de){var ae=B.length;B.push(de);e:for(;0<ae;){var N=ae-1>>>1,re=B[N];if(0<a(re,de))B[N]=de,B[ae]=re,ae=N;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var de=B[0],ae=B.pop();if(ae!==de){B[0]=ae;e:for(var N=0,re=B.length,Ie=re>>>1;N<Ie;){var $=2*(N+1)-1,fe=B[$],ye=$+1,Ee=B[ye];if(0>a(fe,ae))ye<re&&0>a(Ee,fe)?(B[N]=Ee,B[ye]=ae,N=ye):(B[N]=fe,B[$]=ae,N=$);else if(ye<re&&0>a(Ee,ae))B[N]=Ee,B[ye]=ae,N=ye;else break e}}return de}function a(B,de){var ae=B.sortIndex-de.sortIndex;return ae!==0?ae:B.id-de.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,S=null,x=3,y=!1,w=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(B){for(var de=n(m);de!==null;){if(de.callback===null)r(m);else if(de.startTime<=B)r(m),de.sortIndex=de.expirationTime,e(p,de);else break;de=n(m)}}function D(B){if(T=!1,R(B),!w)if(n(p)!==null)w=!0,se(Q);else{var de=n(m);de!==null&&ue(D,de.startTime-B)}}function Q(B,de){w=!1,T&&(T=!1,g(K),K=-1),y=!0;var ae=x;try{for(R(de),S=n(p);S!==null&&(!(S.expirationTime>de)||B&&!H());){var N=S.callback;if(typeof N=="function"){S.callback=null,x=S.priorityLevel;var re=N(S.expirationTime<=de);de=o.unstable_now(),typeof re=="function"?S.callback=re:S===n(p)&&r(p),R(de)}else r(p);S=n(p)}if(S!==null)var Ie=!0;else{var $=n(m);$!==null&&ue(D,$.startTime-de),Ie=!1}return Ie}finally{S=null,x=ae,y=!1}}var z=!1,F=null,K=-1,P=5,A=-1;function H(){return!(o.unstable_now()-A<P)}function ce(){if(F!==null){var B=o.unstable_now();A=B;var de=!0;try{de=F(!0,B)}finally{de?ie():(z=!1,F=null)}}else z=!1}var ie;if(typeof I=="function")ie=function(){I(ce)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,he=le.port2;le.port1.onmessage=ce,ie=function(){he.postMessage(null)}}else ie=function(){_(ce,0)};function se(B){F=B,z||(z=!0,ie())}function ue(B,de){K=_(function(){B(o.unstable_now())},de)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(B){B.callback=null},o.unstable_continueExecution=function(){w||y||(w=!0,se(Q))},o.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(B){switch(x){case 1:case 2:case 3:var de=3;break;default:de=x}var ae=x;x=de;try{return B()}finally{x=ae}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(B,de){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ae=x;x=B;try{return de()}finally{x=ae}},o.unstable_scheduleCallback=function(B,de,ae){var N=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?N+ae:N):ae=N,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=ae+re,B={id:v++,callback:de,priorityLevel:B,startTime:ae,expirationTime:re,sortIndex:-1},ae>N?(B.sortIndex=ae,e(m,B),n(p)===null&&B===n(m)&&(T?(g(K),K=-1):T=!0,ue(D,ae-N))):(B.sortIndex=re,e(p,B),w||y||(w=!0,se(Q))),B},o.unstable_shouldYield=H,o.unstable_wrapCallback=function(B){var de=x;return function(){var ae=x;x=de;try{return B.apply(this,arguments)}finally{x=ae}}}})(Sc)),Sc}var gp;function Fv(){return gp||(gp=1,xc.exports=Nv()),xc.exports}var vp;function Ov(){if(vp)return yn;vp=1;var o=Uf(),e=Fv();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(t){return p.call(S,t)?!0:p.call(v,t)?!1:m.test(t)?S[t]=!0:(v[t]=!0,!1)}function y(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,s,l){if(i===null||typeof i>"u"||y(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,I);_[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,I);_[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,I);_[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function R(t,i,s,l){var c=_.hasOwnProperty(i)?_[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var D=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Q=Symbol.for("react.element"),z=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),K=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),H=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),B=Symbol.iterator;function de(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Object.assign,N;function re(t){if(N===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var Ie=!1;function $(t,i){if(!t||Ie)return"";Ie=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var l=ee}Reflect.construct(t,[],i)}else{try{i.call()}catch(ee){l=ee}t.call(i.prototype)}else{try{throw Error()}catch(ee){l=ee}t()}}catch(ee){if(ee&&l&&typeof ee.stack=="string"){for(var c=ee.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,L=h.length-1;1<=M&&0<=L&&c[M]!==h[L];)L--;for(;1<=M&&0<=L;M--,L--)if(c[M]!==h[L]){if(M!==1||L!==1)do if(M--,L--,0>L||c[M]!==h[L]){var k=`
`+c[M].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=M&&0<=L);break}}}finally{Ie=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?re(t):""}function fe(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=$(t.type,!1),t;case 11:return t=$(t.type.render,!1),t;case 1:return t=$(t.type,!0),t;default:return""}}function ye(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case z:return"Portal";case P:return"Profiler";case K:return"StrictMode";case ie:return"Suspense";case le:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case H:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case ce:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:ye(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return ye(t(i))}catch{}}return null}function Ee(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===K?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function je(t){var i=Fe(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function yt(t){t._valueTracker||(t._valueTracker=je(t))}function O(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Fe(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function Tt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dt(t,i){var s=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function pt(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Pe(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function We(t,i){i=i.checked,i!=null&&R(t,"checked",i,!1)}function At(t,i){We(t,i);var s=Pe(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Je(t,i.type,s):i.hasOwnProperty("defaultValue")&&Je(t,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function Je(t,i,s){(i!=="number"||Tt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var U=Array.isArray;function E(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Pe(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function te(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function oe(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(U(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Pe(s)}}function b(t,i){var s=Pe(i.value),l=Pe(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function Y(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ve(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ve(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Te,Ye=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Te=Te||document.createElement("div"),Te.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Te.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Me(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},at=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(t){at.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Le[i]=Le[t]})});function tt(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Le.hasOwnProperty(t)&&Le[t]?(""+i).trim():i+"px"}function Oe(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=tt(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var it=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function st(t,i){if(i){if(it[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function wt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var G=null;function Ae(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pe=null,me=null,Re=null;function Ze(t){if(t=uo(t)){if(typeof pe!="function")throw Error(n(280));var i=t.stateNode;i&&(i=aa(i),pe(t.stateNode,t.type,i))}}function ft(t){me?Re?Re.push(t):Re=[t]:me=t}function Nt(){if(me){var t=me,i=Re;if(Re=me=null,Ze(t),i)for(t=0;t<i.length;t++)Ze(i[t])}}function Bt(t,i){return t(i)}function mt(){}var Cn=!1;function Rn(t,i,s){if(Cn)return t(i,s);Cn=!0;try{return Bt(t,i,s)}finally{Cn=!1,(me!==null||Re!==null)&&(mt(),Nt())}}function ki(t,i){var s=t.stateNode;if(s===null)return null;var l=aa(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Yn=!1;if(d)try{var pi={};Object.defineProperty(pi,"passive",{get:function(){Yn=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{Yn=!1}function Ho(t,i,s,l,c,h,M,L,k){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(s,ee)}catch(xe){this.onError(xe)}}var zi=!1,mi=null,Sr=!1,Bi=null,Vo={onError:function(t){zi=!0,mi=t}};function Go(t,i,s,l,c,h,M,L,k){zi=!1,mi=null,Ho.apply(Vo,arguments)}function kl(t,i,s,l,c,h,M,L,k){if(Go.apply(this,arguments),zi){if(zi){var ee=mi;zi=!1,mi=null}else throw Error(n(198));Sr||(Sr=!0,Bi=ee)}}function gi(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function Wo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function C(t){if(gi(t)!==t)throw Error(n(188))}function W(t){var i=t.alternate;if(!i){if(i=gi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return C(c),t;if(h===l)return C(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,L=c.child;L;){if(L===s){M=!0,s=c,l=h;break}if(L===l){M=!0,l=c,s=h;break}L=L.sibling}if(!M){for(L=h.child;L;){if(L===s){M=!0,s=h,l=c;break}if(L===l){M=!0,l=h,s=c;break}L=L.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Z(t){return t=W(t),t!==null?J(t):null}function J(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=J(t);if(i!==null)return i;t=t.sibling}return null}var X=e.unstable_scheduleCallback,Ce=e.unstable_cancelCallback,Ue=e.unstable_shouldYield,Be=e.unstable_requestPaint,be=e.unstable_now,et=e.unstable_getCurrentPriorityLevel,Qe=e.unstable_ImmediatePriority,Ge=e.unstable_UserBlockingPriority,ht=e.unstable_NormalPriority,Ut=e.unstable_LowPriority,Pt=e.unstable_IdlePriority,Kt=null,ot=null;function Xe(t){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(Kt,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Hi,vt=Math.log,Pn=Math.LN2;function Hi(t){return t>>>=0,t===0?32:31-(vt(t)/Pn|0)|0}var $t=64,Vi=4194304;function Ct(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function bn(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var L=M&~c;L!==0?l=Ct(L):(h&=M,h!==0&&(l=Ct(h)))}else M=s&~c,M!==0?l=Ct(M):h!==0&&(l=Ct(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-Mt(i),c=1<<s,l|=t[s],i&=~c;return l}function Xs(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mn(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-Mt(h),L=1<<M,k=c[M];k===-1?((L&s)===0||(L&l)!==0)&&(c[M]=Xs(L,i)):k<=i&&(t.expiredLanes|=L),h&=~L}}function yr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xo(){var t=$t;return $t<<=1,($t&4194240)===0&&($t=64),t}function qr(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Ys(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Mt(i),t[i]=s}function Jm(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-Mt(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function zl(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Mt(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var Et=0;function Gf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Wf,Bl,Xf,Yf,qf,Hl=!1,Yo=[],Gi=null,Wi=null,Xi=null,qs=new Map,js=new Map,Yi=[],eg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(t,i){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":qs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(i.pointerId)}}function Ks(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=uo(i),i!==null&&Bl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function tg(t,i,s,l,c){switch(i){case"focusin":return Gi=Ks(Gi,t,i,s,l,c),!0;case"dragenter":return Wi=Ks(Wi,t,i,s,l,c),!0;case"mouseover":return Xi=Ks(Xi,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return qs.set(h,Ks(qs.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,js.set(h,Ks(js.get(h)||null,t,i,s,l,c)),!0}return!1}function Kf(t){var i=Mr(t.target);if(i!==null){var s=gi(i);if(s!==null){if(i=s.tag,i===13){if(i=Wo(s),i!==null){t.blockedOn=i,qf(t.priority,function(){Xf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Gl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);G=l,s.target.dispatchEvent(l),G=null}else return i=uo(s),i!==null&&Bl(i),t.blockedOn=s,!1;i.shift()}return!0}function $f(t,i,s){qo(t)&&s.delete(i)}function ng(){Hl=!1,Gi!==null&&qo(Gi)&&(Gi=null),Wi!==null&&qo(Wi)&&(Wi=null),Xi!==null&&qo(Xi)&&(Xi=null),qs.forEach($f),js.forEach($f)}function $s(t,i){t.blockedOn===i&&(t.blockedOn=null,Hl||(Hl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ng)))}function Zs(t){function i(c){return $s(c,t)}if(0<Yo.length){$s(Yo[0],t);for(var s=1;s<Yo.length;s++){var l=Yo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Gi!==null&&$s(Gi,t),Wi!==null&&$s(Wi,t),Xi!==null&&$s(Xi,t),qs.forEach(i),js.forEach(i),s=0;s<Yi.length;s++)l=Yi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Yi.length&&(s=Yi[0],s.blockedOn===null);)Kf(s),s.blockedOn===null&&Yi.shift()}var jr=D.ReactCurrentBatchConfig,jo=!0;function ig(t,i,s,l){var c=Et,h=jr.transition;jr.transition=null;try{Et=1,Vl(t,i,s,l)}finally{Et=c,jr.transition=h}}function rg(t,i,s,l){var c=Et,h=jr.transition;jr.transition=null;try{Et=4,Vl(t,i,s,l)}finally{Et=c,jr.transition=h}}function Vl(t,i,s,l){if(jo){var c=Gl(t,i,s,l);if(c===null)ou(t,i,l,Ko,s),jf(t,l);else if(tg(c,t,i,s,l))l.stopPropagation();else if(jf(t,l),i&4&&-1<eg.indexOf(t)){for(;c!==null;){var h=uo(c);if(h!==null&&Wf(h),h=Gl(t,i,s,l),h===null&&ou(t,i,l,Ko,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else ou(t,i,l,null,s)}}var Ko=null;function Gl(t,i,s,l){if(Ko=null,t=Ae(l),t=Mr(t),t!==null)if(i=gi(t),i===null)t=null;else if(s=i.tag,s===13){if(t=Wo(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Ko=t,null}function Zf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(et()){case Qe:return 1;case Ge:return 4;case ht:case Ut:return 16;case Pt:return 536870912;default:return 16}default:return 16}}var qi=null,Wl=null,$o=null;function Qf(){if($o)return $o;var t,i=Wl,s=i.length,l,c="value"in qi?qi.value:qi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return $o=c.slice(t,1<l?1-l:void 0)}function Zo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Qo(){return!0}function Jf(){return!1}function Ln(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var L in t)t.hasOwnProperty(L)&&(s=t[L],this[L]=s?s(h):h[L]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Qo:Jf,this.isPropagationStopped=Jf,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),i}var Kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Ln(Kr),Qs=ae({},Kr,{view:0,detail:0}),sg=Ln(Qs),Yl,ql,Js,Jo=ae({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(Yl=t.screenX-Js.screenX,ql=t.screenY-Js.screenY):ql=Yl=0,Js=t),Yl)},movementY:function(t){return"movementY"in t?t.movementY:ql}}),ed=Ln(Jo),og=ae({},Jo,{dataTransfer:0}),ag=Ln(og),lg=ae({},Qs,{relatedTarget:0}),jl=Ln(lg),ug=ae({},Kr,{animationName:0,elapsedTime:0,pseudoElement:0}),cg=Ln(ug),fg=ae({},Kr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dg=Ln(fg),hg=ae({},Kr,{data:0}),td=Ln(hg),pg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function vg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=gg[t])?!!i[t]:!1}function Kl(){return vg}var _g=ae({},Qs,{key:function(t){if(t.key){var i=pg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xg=Ln(_g),Sg=ae({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),nd=Ln(Sg),yg=ae({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Mg=Ln(yg),Eg=ae({},Kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tg=Ln(Eg),wg=ae({},Jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ag=Ln(wg),Cg=[9,13,27,32],$l=d&&"CompositionEvent"in window,eo=null;d&&"documentMode"in document&&(eo=document.documentMode);var Rg=d&&"TextEvent"in window&&!eo,id=d&&(!$l||eo&&8<eo&&11>=eo),rd=" ",sd=!1;function od(t,i){switch(t){case"keyup":return Cg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function Pg(t,i){switch(t){case"compositionend":return ad(i);case"keypress":return i.which!==32?null:(sd=!0,rd);case"textInput":return t=i.data,t===rd&&sd?null:t;default:return null}}function bg(t,i){if($r)return t==="compositionend"||!$l&&od(t,i)?(t=Qf(),$o=Wl=qi=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return id&&i.locale!=="ko"?null:i.data;default:return null}}var Lg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ld(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Lg[t.type]:i==="textarea"}function ud(t,i,s,l){ft(l),i=ra(i,"onChange"),0<i.length&&(s=new Xl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var to=null,no=null;function Dg(t){Cd(t,0)}function ea(t){var i=ts(t);if(O(i))return t}function Ug(t,i){if(t==="change")return i}var cd=!1;if(d){var Zl;if(d){var Ql="oninput"in document;if(!Ql){var fd=document.createElement("div");fd.setAttribute("oninput","return;"),Ql=typeof fd.oninput=="function"}Zl=Ql}else Zl=!1;cd=Zl&&(!document.documentMode||9<document.documentMode)}function dd(){to&&(to.detachEvent("onpropertychange",hd),no=to=null)}function hd(t){if(t.propertyName==="value"&&ea(no)){var i=[];ud(i,no,t,Ae(t)),Rn(Dg,i)}}function Ig(t,i,s){t==="focusin"?(dd(),to=i,no=s,to.attachEvent("onpropertychange",hd)):t==="focusout"&&dd()}function Ng(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ea(no)}function Fg(t,i){if(t==="click")return ea(i)}function Og(t,i){if(t==="input"||t==="change")return ea(i)}function kg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var qn=typeof Object.is=="function"?Object.is:kg;function io(t,i){if(qn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!qn(t[c],i[c]))return!1}return!0}function pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function md(t,i){var s=pd(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=pd(s)}}function gd(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?gd(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function vd(){for(var t=window,i=Tt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=Tt(t.document)}return i}function Jl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function zg(t){var i=vd(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&gd(s.ownerDocument.documentElement,s)){if(l!==null&&Jl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=md(s,h);var M=md(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bg=d&&"documentMode"in document&&11>=document.documentMode,Zr=null,eu=null,ro=null,tu=!1;function _d(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;tu||Zr==null||Zr!==Tt(l)||(l=Zr,"selectionStart"in l&&Jl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ro&&io(ro,l)||(ro=l,l=ra(eu,"onSelect"),0<l.length&&(i=new Xl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Zr)))}function ta(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var Qr={animationend:ta("Animation","AnimationEnd"),animationiteration:ta("Animation","AnimationIteration"),animationstart:ta("Animation","AnimationStart"),transitionend:ta("Transition","TransitionEnd")},nu={},xd={};d&&(xd=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function na(t){if(nu[t])return nu[t];if(!Qr[t])return t;var i=Qr[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in xd)return nu[t]=i[s];return t}var Sd=na("animationend"),yd=na("animationiteration"),Md=na("animationstart"),Ed=na("transitionend"),Td=new Map,wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ji(t,i){Td.set(t,i),u(i,[t])}for(var iu=0;iu<wd.length;iu++){var ru=wd[iu],Hg=ru.toLowerCase(),Vg=ru[0].toUpperCase()+ru.slice(1);ji(Hg,"on"+Vg)}ji(Sd,"onAnimationEnd"),ji(yd,"onAnimationIteration"),ji(Md,"onAnimationStart"),ji("dblclick","onDoubleClick"),ji("focusin","onFocus"),ji("focusout","onBlur"),ji(Ed,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gg=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function Ad(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,kl(l,i,void 0,t),t.currentTarget=null}function Cd(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var L=l[M],k=L.instance,ee=L.currentTarget;if(L=L.listener,k!==h&&c.isPropagationStopped())break e;Ad(c,L,ee),h=k}else for(M=0;M<l.length;M++){if(L=l[M],k=L.instance,ee=L.currentTarget,L=L.listener,k!==h&&c.isPropagationStopped())break e;Ad(c,L,ee),h=k}}}if(Sr)throw t=Bi,Sr=!1,Bi=null,t}function bt(t,i){var s=i[du];s===void 0&&(s=i[du]=new Set);var l=t+"__bubble";s.has(l)||(Rd(i,t,2,!1),s.add(l))}function su(t,i,s){var l=0;i&&(l|=4),Rd(s,t,l,i)}var ia="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[ia]){t[ia]=!0,r.forEach(function(s){s!=="selectionchange"&&(Gg.has(s)||su(s,!1,t),su(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[ia]||(i[ia]=!0,su("selectionchange",!1,i))}}function Rd(t,i,s,l){switch(Zf(i)){case 1:var c=ig;break;case 4:c=rg;break;default:c=Vl}s=c.bind(null,i,s,t),c=void 0,!Yn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function ou(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var L=l.stateNode.containerInfo;if(L===c||L.nodeType===8&&L.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===c||k.nodeType===8&&k.parentNode===c))return;M=M.return}for(;L!==null;){if(M=Mr(L),M===null)return;if(k=M.tag,k===5||k===6){l=h=M;continue e}L=L.parentNode}}l=l.return}Rn(function(){var ee=h,xe=Ae(s),Se=[];e:{var _e=Td.get(t);if(_e!==void 0){var Ne=Xl,ze=t;switch(t){case"keypress":if(Zo(s)===0)break e;case"keydown":case"keyup":Ne=xg;break;case"focusin":ze="focus",Ne=jl;break;case"focusout":ze="blur",Ne=jl;break;case"beforeblur":case"afterblur":Ne=jl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=Mg;break;case Sd:case yd:case Md:Ne=cg;break;case Ed:Ne=Tg;break;case"scroll":Ne=sg;break;case"wheel":Ne=Ag;break;case"copy":case"cut":case"paste":Ne=dg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=nd}var He=(i&4)!==0,zt=!He&&t==="scroll",q=He?_e!==null?_e+"Capture":null:_e;He=[];for(var V=ee,j;V!==null;){j=V;var we=j.stateNode;if(j.tag===5&&we!==null&&(j=we,q!==null&&(we=ki(V,q),we!=null&&He.push(ao(V,we,j)))),zt)break;V=V.return}0<He.length&&(_e=new Ne(_e,ze,null,s,xe),Se.push({event:_e,listeners:He}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",Ne=t==="mouseout"||t==="pointerout",_e&&s!==G&&(ze=s.relatedTarget||s.fromElement)&&(Mr(ze)||ze[vi]))break e;if((Ne||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Ne?(ze=s.relatedTarget||s.toElement,Ne=ee,ze=ze?Mr(ze):null,ze!==null&&(zt=gi(ze),ze!==zt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ne=null,ze=ee),Ne!==ze)){if(He=ed,we="onMouseLeave",q="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(He=nd,we="onPointerLeave",q="onPointerEnter",V="pointer"),zt=Ne==null?_e:ts(Ne),j=ze==null?_e:ts(ze),_e=new He(we,V+"leave",Ne,s,xe),_e.target=zt,_e.relatedTarget=j,we=null,Mr(xe)===ee&&(He=new He(q,V+"enter",ze,s,xe),He.target=j,He.relatedTarget=zt,we=He),zt=we,Ne&&ze)t:{for(He=Ne,q=ze,V=0,j=He;j;j=Jr(j))V++;for(j=0,we=q;we;we=Jr(we))j++;for(;0<V-j;)He=Jr(He),V--;for(;0<j-V;)q=Jr(q),j--;for(;V--;){if(He===q||q!==null&&He===q.alternate)break t;He=Jr(He),q=Jr(q)}He=null}else He=null;Ne!==null&&Pd(Se,_e,Ne,He,!1),ze!==null&&zt!==null&&Pd(Se,zt,ze,He,!0)}}e:{if(_e=ee?ts(ee):window,Ne=_e.nodeName&&_e.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&_e.type==="file")var Ve=Ug;else if(ld(_e))if(cd)Ve=Og;else{Ve=Ng;var Ke=Ig}else(Ne=_e.nodeName)&&Ne.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ve=Fg);if(Ve&&(Ve=Ve(t,ee))){ud(Se,Ve,s,xe);break e}Ke&&Ke(t,_e,ee),t==="focusout"&&(Ke=_e._wrapperState)&&Ke.controlled&&_e.type==="number"&&Je(_e,"number",_e.value)}switch(Ke=ee?ts(ee):window,t){case"focusin":(ld(Ke)||Ke.contentEditable==="true")&&(Zr=Ke,eu=ee,ro=null);break;case"focusout":ro=eu=Zr=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,_d(Se,s,xe);break;case"selectionchange":if(Bg)break;case"keydown":case"keyup":_d(Se,s,xe)}var $e;if($l)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else $r?od(t,s)&&(nt="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(nt="onCompositionStart");nt&&(id&&s.locale!=="ko"&&($r||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&$r&&($e=Qf()):(qi=xe,Wl="value"in qi?qi.value:qi.textContent,$r=!0)),Ke=ra(ee,nt),0<Ke.length&&(nt=new td(nt,t,null,s,xe),Se.push({event:nt,listeners:Ke}),$e?nt.data=$e:($e=ad(s),$e!==null&&(nt.data=$e)))),($e=Rg?Pg(t,s):bg(t,s))&&(ee=ra(ee,"onBeforeInput"),0<ee.length&&(xe=new td("onBeforeInput","beforeinput",null,s,xe),Se.push({event:xe,listeners:ee}),xe.data=$e))}Cd(Se,i)})}function ao(t,i,s){return{instance:t,listener:i,currentTarget:s}}function ra(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=ki(t,s),h!=null&&l.unshift(ao(t,h,c)),h=ki(t,i),h!=null&&l.push(ao(t,h,c))),t=t.return}return l}function Jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Pd(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var L=s,k=L.alternate,ee=L.stateNode;if(k!==null&&k===l)break;L.tag===5&&ee!==null&&(L=ee,c?(k=ki(s,h),k!=null&&M.unshift(ao(s,k,L))):c||(k=ki(s,h),k!=null&&M.push(ao(s,k,L)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var Wg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function bd(t){return(typeof t=="string"?t:""+t).replace(Wg,`
`).replace(Xg,"")}function sa(t,i,s){if(i=bd(i),bd(t)!==i&&s)throw Error(n(425))}function oa(){}var au=null,lu=null;function uu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var cu=typeof setTimeout=="function"?setTimeout:void 0,Yg=typeof clearTimeout=="function"?clearTimeout:void 0,Ld=typeof Promise=="function"?Promise:void 0,qg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ld<"u"?function(t){return Ld.resolve(null).then(t).catch(jg)}:cu;function jg(t){setTimeout(function(){throw t})}function fu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),Zs(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);Zs(i)}function Ki(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Dd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var es=Math.random().toString(36).slice(2),si="__reactFiber$"+es,lo="__reactProps$"+es,vi="__reactContainer$"+es,du="__reactEvents$"+es,Kg="__reactListeners$"+es,$g="__reactHandles$"+es;function Mr(t){var i=t[si];if(i)return i;for(var s=t.parentNode;s;){if(i=s[vi]||s[si]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Dd(t);t!==null;){if(s=t[si])return s;t=Dd(t)}return i}t=s,s=t.parentNode}return null}function uo(t){return t=t[si]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function aa(t){return t[lo]||null}var hu=[],ns=-1;function $i(t){return{current:t}}function Lt(t){0>ns||(t.current=hu[ns],hu[ns]=null,ns--)}function Rt(t,i){ns++,hu[ns]=t.current,t.current=i}var Zi={},rn=$i(Zi),gn=$i(!1),Er=Zi;function is(t,i){var s=t.type.contextTypes;if(!s)return Zi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function vn(t){return t=t.childContextTypes,t!=null}function la(){Lt(gn),Lt(rn)}function Ud(t,i,s){if(rn.current!==Zi)throw Error(n(168));Rt(rn,i),Rt(gn,s)}function Id(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,Ee(t)||"Unknown",c));return ae({},s,l)}function ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zi,Er=rn.current,Rt(rn,t),Rt(gn,gn.current),!0}function Nd(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Id(t,i,Er),l.__reactInternalMemoizedMergedChildContext=t,Lt(gn),Lt(rn),Rt(rn,t)):Lt(gn),Rt(gn,s)}var _i=null,ca=!1,pu=!1;function Fd(t){_i===null?_i=[t]:_i.push(t)}function Zg(t){ca=!0,Fd(t)}function Qi(){if(!pu&&_i!==null){pu=!0;var t=0,i=Et;try{var s=_i;for(Et=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}_i=null,ca=!1}catch(c){throw _i!==null&&(_i=_i.slice(t+1)),X(Qe,Qi),c}finally{Et=i,pu=!1}}return null}var rs=[],ss=0,fa=null,da=0,On=[],kn=0,Tr=null,xi=1,Si="";function wr(t,i){rs[ss++]=da,rs[ss++]=fa,fa=t,da=i}function Od(t,i,s){On[kn++]=xi,On[kn++]=Si,On[kn++]=Tr,Tr=t;var l=xi;t=Si;var c=32-Mt(l)-1;l&=~(1<<c),s+=1;var h=32-Mt(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,xi=1<<32-Mt(i)+c|s<<c|l,Si=h+t}else xi=1<<h|s<<c|l,Si=t}function mu(t){t.return!==null&&(wr(t,1),Od(t,1,0))}function gu(t){for(;t===fa;)fa=rs[--ss],rs[ss]=null,da=rs[--ss],rs[ss]=null;for(;t===Tr;)Tr=On[--kn],On[kn]=null,Si=On[--kn],On[kn]=null,xi=On[--kn],On[kn]=null}var Dn=null,Un=null,It=!1,jn=null;function kd(t,i){var s=Vn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function zd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Dn=t,Un=Ki(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Dn=t,Un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=Tr!==null?{id:xi,overflow:Si}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Vn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Dn=t,Un=null,!0):!1;default:return!1}}function vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _u(t){if(It){var i=Un;if(i){var s=i;if(!zd(t,i)){if(vu(t))throw Error(n(418));i=Ki(s.nextSibling);var l=Dn;i&&zd(t,i)?kd(l,s):(t.flags=t.flags&-4097|2,It=!1,Dn=t)}}else{if(vu(t))throw Error(n(418));t.flags=t.flags&-4097|2,It=!1,Dn=t}}}function Bd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function ha(t){if(t!==Dn)return!1;if(!It)return Bd(t),It=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!uu(t.type,t.memoizedProps)),i&&(i=Un)){if(vu(t))throw Hd(),Error(n(418));for(;i;)kd(t,i),i=Ki(i.nextSibling)}if(Bd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){Un=Ki(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}Un=null}}else Un=Dn?Ki(t.stateNode.nextSibling):null;return!0}function Hd(){for(var t=Un;t;)t=Ki(t.nextSibling)}function os(){Un=Dn=null,It=!1}function xu(t){jn===null?jn=[t]:jn.push(t)}var Qg=D.ReactCurrentBatchConfig;function co(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var L=c.refs;M===null?delete L[h]:L[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function pa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Vd(t){var i=t._init;return i(t._payload)}function Gd(t){function i(q,V){if(t){var j=q.deletions;j===null?(q.deletions=[V],q.flags|=16):j.push(V)}}function s(q,V){if(!t)return null;for(;V!==null;)i(q,V),V=V.sibling;return null}function l(q,V){for(q=new Map;V!==null;)V.key!==null?q.set(V.key,V):q.set(V.index,V),V=V.sibling;return q}function c(q,V){return q=or(q,V),q.index=0,q.sibling=null,q}function h(q,V,j){return q.index=j,t?(j=q.alternate,j!==null?(j=j.index,j<V?(q.flags|=2,V):j):(q.flags|=2,V)):(q.flags|=1048576,V)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function L(q,V,j,we){return V===null||V.tag!==6?(V=cc(j,q.mode,we),V.return=q,V):(V=c(V,j),V.return=q,V)}function k(q,V,j,we){var Ve=j.type;return Ve===F?xe(q,V,j.props.children,we,j.key):V!==null&&(V.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===se&&Vd(Ve)===V.type)?(we=c(V,j.props),we.ref=co(q,V,j),we.return=q,we):(we=ka(j.type,j.key,j.props,null,q.mode,we),we.ref=co(q,V,j),we.return=q,we)}function ee(q,V,j,we){return V===null||V.tag!==4||V.stateNode.containerInfo!==j.containerInfo||V.stateNode.implementation!==j.implementation?(V=fc(j,q.mode,we),V.return=q,V):(V=c(V,j.children||[]),V.return=q,V)}function xe(q,V,j,we,Ve){return V===null||V.tag!==7?(V=Ur(j,q.mode,we,Ve),V.return=q,V):(V=c(V,j),V.return=q,V)}function Se(q,V,j){if(typeof V=="string"&&V!==""||typeof V=="number")return V=cc(""+V,q.mode,j),V.return=q,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Q:return j=ka(V.type,V.key,V.props,null,q.mode,j),j.ref=co(q,null,V),j.return=q,j;case z:return V=fc(V,q.mode,j),V.return=q,V;case se:var we=V._init;return Se(q,we(V._payload),j)}if(U(V)||de(V))return V=Ur(V,q.mode,j,null),V.return=q,V;pa(q,V)}return null}function _e(q,V,j,we){var Ve=V!==null?V.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return Ve!==null?null:L(q,V,""+j,we);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:return j.key===Ve?k(q,V,j,we):null;case z:return j.key===Ve?ee(q,V,j,we):null;case se:return Ve=j._init,_e(q,V,Ve(j._payload),we)}if(U(j)||de(j))return Ve!==null?null:xe(q,V,j,we,null);pa(q,j)}return null}function Ne(q,V,j,we,Ve){if(typeof we=="string"&&we!==""||typeof we=="number")return q=q.get(j)||null,L(V,q,""+we,Ve);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case Q:return q=q.get(we.key===null?j:we.key)||null,k(V,q,we,Ve);case z:return q=q.get(we.key===null?j:we.key)||null,ee(V,q,we,Ve);case se:var Ke=we._init;return Ne(q,V,j,Ke(we._payload),Ve)}if(U(we)||de(we))return q=q.get(j)||null,xe(V,q,we,Ve,null);pa(V,we)}return null}function ze(q,V,j,we){for(var Ve=null,Ke=null,$e=V,nt=V=0,Jt=null;$e!==null&&nt<j.length;nt++){$e.index>nt?(Jt=$e,$e=null):Jt=$e.sibling;var _t=_e(q,$e,j[nt],we);if(_t===null){$e===null&&($e=Jt);break}t&&$e&&_t.alternate===null&&i(q,$e),V=h(_t,V,nt),Ke===null?Ve=_t:Ke.sibling=_t,Ke=_t,$e=Jt}if(nt===j.length)return s(q,$e),It&&wr(q,nt),Ve;if($e===null){for(;nt<j.length;nt++)$e=Se(q,j[nt],we),$e!==null&&(V=h($e,V,nt),Ke===null?Ve=$e:Ke.sibling=$e,Ke=$e);return It&&wr(q,nt),Ve}for($e=l(q,$e);nt<j.length;nt++)Jt=Ne($e,q,nt,j[nt],we),Jt!==null&&(t&&Jt.alternate!==null&&$e.delete(Jt.key===null?nt:Jt.key),V=h(Jt,V,nt),Ke===null?Ve=Jt:Ke.sibling=Jt,Ke=Jt);return t&&$e.forEach(function(ar){return i(q,ar)}),It&&wr(q,nt),Ve}function He(q,V,j,we){var Ve=de(j);if(typeof Ve!="function")throw Error(n(150));if(j=Ve.call(j),j==null)throw Error(n(151));for(var Ke=Ve=null,$e=V,nt=V=0,Jt=null,_t=j.next();$e!==null&&!_t.done;nt++,_t=j.next()){$e.index>nt?(Jt=$e,$e=null):Jt=$e.sibling;var ar=_e(q,$e,_t.value,we);if(ar===null){$e===null&&($e=Jt);break}t&&$e&&ar.alternate===null&&i(q,$e),V=h(ar,V,nt),Ke===null?Ve=ar:Ke.sibling=ar,Ke=ar,$e=Jt}if(_t.done)return s(q,$e),It&&wr(q,nt),Ve;if($e===null){for(;!_t.done;nt++,_t=j.next())_t=Se(q,_t.value,we),_t!==null&&(V=h(_t,V,nt),Ke===null?Ve=_t:Ke.sibling=_t,Ke=_t);return It&&wr(q,nt),Ve}for($e=l(q,$e);!_t.done;nt++,_t=j.next())_t=Ne($e,q,nt,_t.value,we),_t!==null&&(t&&_t.alternate!==null&&$e.delete(_t.key===null?nt:_t.key),V=h(_t,V,nt),Ke===null?Ve=_t:Ke.sibling=_t,Ke=_t);return t&&$e.forEach(function(Lv){return i(q,Lv)}),It&&wr(q,nt),Ve}function zt(q,V,j,we){if(typeof j=="object"&&j!==null&&j.type===F&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case Q:e:{for(var Ve=j.key,Ke=V;Ke!==null;){if(Ke.key===Ve){if(Ve=j.type,Ve===F){if(Ke.tag===7){s(q,Ke.sibling),V=c(Ke,j.props.children),V.return=q,q=V;break e}}else if(Ke.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===se&&Vd(Ve)===Ke.type){s(q,Ke.sibling),V=c(Ke,j.props),V.ref=co(q,Ke,j),V.return=q,q=V;break e}s(q,Ke);break}else i(q,Ke);Ke=Ke.sibling}j.type===F?(V=Ur(j.props.children,q.mode,we,j.key),V.return=q,q=V):(we=ka(j.type,j.key,j.props,null,q.mode,we),we.ref=co(q,V,j),we.return=q,q=we)}return M(q);case z:e:{for(Ke=j.key;V!==null;){if(V.key===Ke)if(V.tag===4&&V.stateNode.containerInfo===j.containerInfo&&V.stateNode.implementation===j.implementation){s(q,V.sibling),V=c(V,j.children||[]),V.return=q,q=V;break e}else{s(q,V);break}else i(q,V);V=V.sibling}V=fc(j,q.mode,we),V.return=q,q=V}return M(q);case se:return Ke=j._init,zt(q,V,Ke(j._payload),we)}if(U(j))return ze(q,V,j,we);if(de(j))return He(q,V,j,we);pa(q,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,V!==null&&V.tag===6?(s(q,V.sibling),V=c(V,j),V.return=q,q=V):(s(q,V),V=cc(j,q.mode,we),V.return=q,q=V),M(q)):s(q,V)}return zt}var as=Gd(!0),Wd=Gd(!1),ma=$i(null),ga=null,ls=null,Su=null;function yu(){Su=ls=ga=null}function Mu(t){var i=ma.current;Lt(ma),t._currentValue=i}function Eu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function us(t,i){ga=t,Su=ls=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(_n=!0),t.firstContext=null)}function zn(t){var i=t._currentValue;if(Su!==t)if(t={context:t,memoizedValue:i,next:null},ls===null){if(ga===null)throw Error(n(308));ls=t,ga.dependencies={lanes:0,firstContext:t}}else ls=ls.next=t;return i}var Ar=null;function Tu(t){Ar===null?Ar=[t]:Ar.push(t)}function Xd(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,Tu(i)):(s.next=c.next,c.next=s),i.interleaved=s,yi(t,l)}function yi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var Ji=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function er(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(gt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,yi(t,s)}return c=l.interleaved,c===null?(i.next=i,Tu(l)):(i.next=c.next,c.next=i),l.interleaved=i,yi(t,s)}function va(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,zl(t,s)}}function qd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function _a(t,i,s,l){var c=t.updateQueue;Ji=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,L=c.shared.pending;if(L!==null){c.shared.pending=null;var k=L,ee=k.next;k.next=null,M===null?h=ee:M.next=ee,M=k;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,L=xe.lastBaseUpdate,L!==M&&(L===null?xe.firstBaseUpdate=ee:L.next=ee,xe.lastBaseUpdate=k))}if(h!==null){var Se=c.baseState;M=0,xe=ee=k=null,L=h;do{var _e=L.lane,Ne=L.eventTime;if((l&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Ne,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var ze=t,He=L;switch(_e=i,Ne=s,He.tag){case 1:if(ze=He.payload,typeof ze=="function"){Se=ze.call(Ne,Se,_e);break e}Se=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=He.payload,_e=typeof ze=="function"?ze.call(Ne,Se,_e):ze,_e==null)break e;Se=ae({},Se,_e);break e;case 2:Ji=!0}}L.callback!==null&&L.lane!==0&&(t.flags|=64,_e=c.effects,_e===null?c.effects=[L]:_e.push(L))}else Ne={eventTime:Ne,lane:_e,tag:L.tag,payload:L.payload,callback:L.callback,next:null},xe===null?(ee=xe=Ne,k=Se):xe=xe.next=Ne,M|=_e;if(L=L.next,L===null){if(L=c.shared.pending,L===null)break;_e=L,L=_e.next,_e.next=null,c.lastBaseUpdate=_e,c.shared.pending=null}}while(!0);if(xe===null&&(k=Se),c.baseState=k,c.firstBaseUpdate=ee,c.lastBaseUpdate=xe,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Pr|=M,t.lanes=M,t.memoizedState=Se}}function jd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var fo={},oi=$i(fo),ho=$i(fo),po=$i(fo);function Cr(t){if(t===fo)throw Error(n(174));return t}function Au(t,i){switch(Rt(po,i),Rt(ho,t),Rt(oi,fo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ge(i,t)}Lt(oi),Rt(oi,i)}function cs(){Lt(oi),Lt(ho),Lt(po)}function Kd(t){Cr(po.current);var i=Cr(oi.current),s=ge(i,t.type);i!==s&&(Rt(ho,t),Rt(oi,s))}function Cu(t){ho.current===t&&(Lt(oi),Lt(ho))}var Ft=$i(0);function xa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ru=[];function Pu(){for(var t=0;t<Ru.length;t++)Ru[t]._workInProgressVersionPrimary=null;Ru.length=0}var Sa=D.ReactCurrentDispatcher,bu=D.ReactCurrentBatchConfig,Rr=0,Ot=null,Wt=null,Zt=null,ya=!1,mo=!1,go=0,Jg=0;function sn(){throw Error(n(321))}function Lu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!qn(t[s],i[s]))return!1;return!0}function Du(t,i,s,l,c,h){if(Rr=h,Ot=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Sa.current=t===null||t.memoizedState===null?iv:rv,t=s(l,c),mo){h=0;do{if(mo=!1,go=0,25<=h)throw Error(n(301));h+=1,Zt=Wt=null,i.updateQueue=null,Sa.current=sv,t=s(l,c)}while(mo)}if(Sa.current=Ta,i=Wt!==null&&Wt.next!==null,Rr=0,Zt=Wt=Ot=null,ya=!1,i)throw Error(n(300));return t}function Uu(){var t=go!==0;return go=0,t}function ai(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t,Zt}function Bn(){if(Wt===null){var t=Ot.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var i=Zt===null?Ot.memoizedState:Zt.next;if(i!==null)Zt=i,Wt=t;else{if(t===null)throw Error(n(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},Zt===null?Ot.memoizedState=Zt=t:Zt=Zt.next=t}return Zt}function vo(t,i){return typeof i=="function"?i(t):i}function Iu(t){var i=Bn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Wt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var L=M=null,k=null,ee=h;do{var xe=ee.lane;if((Rr&xe)===xe)k!==null&&(k=k.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),l=ee.hasEagerState?ee.eagerState:t(l,ee.action);else{var Se={lane:xe,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};k===null?(L=k=Se,M=l):k=k.next=Se,Ot.lanes|=xe,Pr|=xe}ee=ee.next}while(ee!==null&&ee!==h);k===null?M=l:k.next=L,qn(l,i.memoizedState)||(_n=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=k,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Ot.lanes|=h,Pr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Nu(t){var i=Bn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);qn(h,i.memoizedState)||(_n=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function $d(){}function Zd(t,i){var s=Ot,l=Bn(),c=i(),h=!qn(l.memoizedState,c);if(h&&(l.memoizedState=c,_n=!0),l=l.queue,Fu(eh.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||Zt!==null&&Zt.memoizedState.tag&1){if(s.flags|=2048,_o(9,Jd.bind(null,s,l,c,i),void 0,null),Qt===null)throw Error(n(349));(Rr&30)!==0||Qd(s,i,c)}return c}function Qd(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Jd(t,i,s,l){i.value=s,i.getSnapshot=l,th(i)&&nh(t)}function eh(t,i,s){return s(function(){th(i)&&nh(t)})}function th(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!qn(t,s)}catch{return!0}}function nh(t){var i=yi(t,1);i!==null&&Qn(i,t,1,-1)}function ih(t){var i=ai();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},i.queue=t,t=t.dispatch=nv.bind(null,Ot,t),[i.memoizedState,t]}function _o(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ot.updateQueue,i===null?(i={lastEffect:null,stores:null},Ot.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function rh(){return Bn().memoizedState}function Ma(t,i,s,l){var c=ai();Ot.flags|=t,c.memoizedState=_o(1|i,s,void 0,l===void 0?null:l)}function Ea(t,i,s,l){var c=Bn();l=l===void 0?null:l;var h=void 0;if(Wt!==null){var M=Wt.memoizedState;if(h=M.destroy,l!==null&&Lu(l,M.deps)){c.memoizedState=_o(i,s,h,l);return}}Ot.flags|=t,c.memoizedState=_o(1|i,s,h,l)}function sh(t,i){return Ma(8390656,8,t,i)}function Fu(t,i){return Ea(2048,8,t,i)}function oh(t,i){return Ea(4,2,t,i)}function ah(t,i){return Ea(4,4,t,i)}function lh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function uh(t,i,s){return s=s!=null?s.concat([t]):null,Ea(4,4,lh.bind(null,i,t),s)}function Ou(){}function ch(t,i){var s=Bn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Lu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function fh(t,i){var s=Bn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Lu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function dh(t,i,s){return(Rr&21)===0?(t.baseState&&(t.baseState=!1,_n=!0),t.memoizedState=s):(qn(s,i)||(s=Xo(),Ot.lanes|=s,Pr|=s,t.baseState=!0),i)}function ev(t,i){var s=Et;Et=s!==0&&4>s?s:4,t(!0);var l=bu.transition;bu.transition={};try{t(!1),i()}finally{Et=s,bu.transition=l}}function hh(){return Bn().memoizedState}function tv(t,i,s){var l=rr(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},ph(t))mh(i,s);else if(s=Xd(t,i,s,l),s!==null){var c=fn();Qn(s,t,l,c),gh(s,i,l)}}function nv(t,i,s){var l=rr(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(ph(t))mh(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,L=h(M,s);if(c.hasEagerState=!0,c.eagerState=L,qn(L,M)){var k=i.interleaved;k===null?(c.next=c,Tu(i)):(c.next=k.next,k.next=c),i.interleaved=c;return}}catch{}finally{}s=Xd(t,i,c,l),s!==null&&(c=fn(),Qn(s,t,l,c),gh(s,i,l))}}function ph(t){var i=t.alternate;return t===Ot||i!==null&&i===Ot}function mh(t,i){mo=ya=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function gh(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,zl(t,s)}}var Ta={readContext:zn,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useInsertionEffect:sn,useLayoutEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useMutableSource:sn,useSyncExternalStore:sn,useId:sn,unstable_isNewReconciler:!1},iv={readContext:zn,useCallback:function(t,i){return ai().memoizedState=[t,i===void 0?null:i],t},useContext:zn,useEffect:sh,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,Ma(4194308,4,lh.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Ma(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ma(4,2,t,i)},useMemo:function(t,i){var s=ai();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=ai();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=tv.bind(null,Ot,t),[l.memoizedState,t]},useRef:function(t){var i=ai();return t={current:t},i.memoizedState=t},useState:ih,useDebugValue:Ou,useDeferredValue:function(t){return ai().memoizedState=t},useTransition:function(){var t=ih(!1),i=t[0];return t=ev.bind(null,t[1]),ai().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ot,c=ai();if(It){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),Qt===null)throw Error(n(349));(Rr&30)!==0||Qd(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,sh(eh.bind(null,l,h,t),[t]),l.flags|=2048,_o(9,Jd.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=ai(),i=Qt.identifierPrefix;if(It){var s=Si,l=xi;s=(l&~(1<<32-Mt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=go++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Jg++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},rv={readContext:zn,useCallback:ch,useContext:zn,useEffect:Fu,useImperativeHandle:uh,useInsertionEffect:oh,useLayoutEffect:ah,useMemo:fh,useReducer:Iu,useRef:rh,useState:function(){return Iu(vo)},useDebugValue:Ou,useDeferredValue:function(t){var i=Bn();return dh(i,Wt.memoizedState,t)},useTransition:function(){var t=Iu(vo)[0],i=Bn().memoizedState;return[t,i]},useMutableSource:$d,useSyncExternalStore:Zd,useId:hh,unstable_isNewReconciler:!1},sv={readContext:zn,useCallback:ch,useContext:zn,useEffect:Fu,useImperativeHandle:uh,useInsertionEffect:oh,useLayoutEffect:ah,useMemo:fh,useReducer:Nu,useRef:rh,useState:function(){return Nu(vo)},useDebugValue:Ou,useDeferredValue:function(t){var i=Bn();return Wt===null?i.memoizedState=t:dh(i,Wt.memoizedState,t)},useTransition:function(){var t=Nu(vo)[0],i=Bn().memoizedState;return[t,i]},useMutableSource:$d,useSyncExternalStore:Zd,useId:hh,unstable_isNewReconciler:!1};function Kn(t,i){if(t&&t.defaultProps){i=ae({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function ku(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:ae({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var wa={isMounted:function(t){return(t=t._reactInternals)?gi(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=fn(),c=rr(t),h=Mi(l,c);h.payload=i,s!=null&&(h.callback=s),i=er(t,h,c),i!==null&&(Qn(i,t,c,l),va(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=fn(),c=rr(t),h=Mi(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=er(t,h,c),i!==null&&(Qn(i,t,c,l),va(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=fn(),l=rr(t),c=Mi(s,l);c.tag=2,i!=null&&(c.callback=i),i=er(t,c,l),i!==null&&(Qn(i,t,l,s),va(i,t,l))}};function vh(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!io(s,l)||!io(c,h):!0}function _h(t,i,s){var l=!1,c=Zi,h=i.contextType;return typeof h=="object"&&h!==null?h=zn(h):(c=vn(i)?Er:rn.current,l=i.contextTypes,h=(l=l!=null)?is(t,c):Zi),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=wa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function xh(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&wa.enqueueReplaceState(i,i.state,null)}function zu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},wu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=zn(h):(h=vn(i)?Er:rn.current,c.context=is(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(ku(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&wa.enqueueReplaceState(c,c.state,null),_a(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function fs(t,i){try{var s="",l=i;do s+=fe(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function Bu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Hu(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var ov=typeof WeakMap=="function"?WeakMap:Map;function Sh(t,i,s){s=Mi(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Da||(Da=!0,nc=l),Hu(t,i)},s}function yh(t,i,s){s=Mi(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Hu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Hu(t,i),typeof l!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Mh(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new ov;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=Sv.bind(null,t,i,s),i.then(t,t))}function Eh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Th(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=Mi(-1,1),i.tag=2,er(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var av=D.ReactCurrentOwner,_n=!1;function cn(t,i,s,l){i.child=t===null?Wd(i,null,s,l):as(i,t.child,s,l)}function wh(t,i,s,l,c){s=s.render;var h=i.ref;return us(i,c),l=Du(t,i,s,l,h,c),s=Uu(),t!==null&&!_n?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ei(t,i,c)):(It&&s&&mu(i),i.flags|=1,cn(t,i,l,c),i.child)}function Ah(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!uc(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Ch(t,i,h,l,c)):(t=ka(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:io,s(M,l)&&t.ref===i.ref)return Ei(t,i,c)}return i.flags|=1,t=or(h,l),t.ref=i.ref,t.return=i,i.child=t}function Ch(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(io(h,l)&&t.ref===i.ref)if(_n=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(_n=!0);else return i.lanes=t.lanes,Ei(t,i,c)}return Vu(t,i,s,l,c)}function Rh(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Rt(hs,In),In|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Rt(hs,In),In|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Rt(hs,In),In|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Rt(hs,In),In|=l;return cn(t,i,c,s),i.child}function Ph(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Vu(t,i,s,l,c){var h=vn(s)?Er:rn.current;return h=is(i,h),us(i,c),s=Du(t,i,s,l,h,c),l=Uu(),t!==null&&!_n?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Ei(t,i,c)):(It&&l&&mu(i),i.flags|=1,cn(t,i,s,c),i.child)}function bh(t,i,s,l,c){if(vn(s)){var h=!0;ua(i)}else h=!1;if(us(i,c),i.stateNode===null)Ca(t,i),_h(i,s,l),zu(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var k=M.context,ee=s.contextType;typeof ee=="object"&&ee!==null?ee=zn(ee):(ee=vn(s)?Er:rn.current,ee=is(i,ee));var xe=s.getDerivedStateFromProps,Se=typeof xe=="function"||typeof M.getSnapshotBeforeUpdate=="function";Se||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==l||k!==ee)&&xh(i,M,l,ee),Ji=!1;var _e=i.memoizedState;M.state=_e,_a(i,l,M,c),k=i.memoizedState,L!==l||_e!==k||gn.current||Ji?(typeof xe=="function"&&(ku(i,s,xe,l),k=i.memoizedState),(L=Ji||vh(i,s,L,l,_e,k,ee))?(Se||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),M.props=l,M.state=k,M.context=ee,l=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,Yd(t,i),L=i.memoizedProps,ee=i.type===i.elementType?L:Kn(i.type,L),M.props=ee,Se=i.pendingProps,_e=M.context,k=s.contextType,typeof k=="object"&&k!==null?k=zn(k):(k=vn(s)?Er:rn.current,k=is(i,k));var Ne=s.getDerivedStateFromProps;(xe=typeof Ne=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==Se||_e!==k)&&xh(i,M,l,k),Ji=!1,_e=i.memoizedState,M.state=_e,_a(i,l,M,c);var ze=i.memoizedState;L!==Se||_e!==ze||gn.current||Ji?(typeof Ne=="function"&&(ku(i,s,Ne,l),ze=i.memoizedState),(ee=Ji||vh(i,s,ee,l,_e,ze,k)||!1)?(xe||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,ze,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,ze,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),M.props=l,M.state=ze,M.context=k,l=ee):(typeof M.componentDidUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),l=!1)}return Gu(t,i,s,l,h,c)}function Gu(t,i,s,l,c,h){Ph(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Nd(i,s,!1),Ei(t,i,h);l=i.stateNode,av.current=i;var L=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=as(i,t.child,null,h),i.child=as(i,null,L,h)):cn(t,i,L,h),i.memoizedState=l.state,c&&Nd(i,s,!0),i.child}function Lh(t){var i=t.stateNode;i.pendingContext?Ud(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Ud(t,i.context,!1),Au(t,i.containerInfo)}function Dh(t,i,s,l,c){return os(),xu(c),i.flags|=256,cn(t,i,s,l),i.child}var Wu={dehydrated:null,treeContext:null,retryLane:0};function Xu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Uh(t,i,s){var l=i.pendingProps,c=Ft.current,h=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=t!==null&&t.memoizedState===null?!1:(c&2)!==0),L?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Rt(Ft,c&1),t===null)return _u(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=za(M,l,0,null),t=Ur(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Xu(s),i.memoizedState=Wu,t):Yu(i,M));if(c=t.memoizedState,c!==null&&(L=c.dehydrated,L!==null))return lv(t,i,M,l,L,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,L=c.sibling;var k={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=or(c,k),l.subtreeFlags=c.subtreeFlags&14680064),L!==null?h=or(L,h):(h=Ur(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Xu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Wu,l}return h=t.child,t=h.sibling,l=or(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Yu(t,i){return i=za({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Aa(t,i,s,l){return l!==null&&xu(l),as(i,t.child,null,s),t=Yu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function lv(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=Bu(Error(n(422))),Aa(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=za({mode:"visible",children:l.children},c,0,null),h=Ur(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&as(i,t.child,null,M),i.child.memoizedState=Xu(M),i.memoizedState=Wu,h);if((i.mode&1)===0)return Aa(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var L=l.dgst;return l=L,h=Error(n(419)),l=Bu(h,l,void 0),Aa(t,i,M,l)}if(L=(M&t.childLanes)!==0,_n||L){if(l=Qt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,yi(t,c),Qn(l,t,c,-1))}return lc(),l=Bu(Error(n(421))),Aa(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=yv.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,Un=Ki(c.nextSibling),Dn=i,It=!0,jn=null,t!==null&&(On[kn++]=xi,On[kn++]=Si,On[kn++]=Tr,xi=t.id,Si=t.overflow,Tr=i),i=Yu(i,l.children),i.flags|=4096,i)}function Ih(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Eu(t.return,i,s)}function qu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function Nh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(cn(t,i,l.children,s),l=Ft.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ih(t,s,i);else if(t.tag===19)Ih(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Rt(Ft,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&xa(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),qu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&xa(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}qu(i,!0,s,null,h);break;case"together":qu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ca(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ei(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=or(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=or(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function uv(t,i,s){switch(i.tag){case 3:Lh(i),os();break;case 5:Kd(i);break;case 1:vn(i.type)&&ua(i);break;case 4:Au(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Rt(ma,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Rt(Ft,Ft.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Uh(t,i,s):(Rt(Ft,Ft.current&1),t=Ei(t,i,s),t!==null?t.sibling:null);Rt(Ft,Ft.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Nh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Rt(Ft,Ft.current),l)break;return null;case 22:case 23:return i.lanes=0,Rh(t,i,s)}return Ei(t,i,s)}var Fh,ju,Oh,kh;Fh=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},ju=function(){},Oh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Cr(oi.current);var h=null;switch(s){case"input":c=dt(t,c),l=dt(t,l),h=[];break;case"select":c=ae({},c,{value:void 0}),l=ae({},l,{value:void 0}),h=[];break;case"textarea":c=te(t,c),l=te(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=oa)}st(s,l);var M;s=null;for(ee in c)if(!l.hasOwnProperty(ee)&&c.hasOwnProperty(ee)&&c[ee]!=null)if(ee==="style"){var L=c[ee];for(M in L)L.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(a.hasOwnProperty(ee)?h||(h=[]):(h=h||[]).push(ee,null));for(ee in l){var k=l[ee];if(L=c?.[ee],l.hasOwnProperty(ee)&&k!==L&&(k!=null||L!=null))if(ee==="style")if(L){for(M in L)!L.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in k)k.hasOwnProperty(M)&&L[M]!==k[M]&&(s||(s={}),s[M]=k[M])}else s||(h||(h=[]),h.push(ee,s)),s=k;else ee==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,L=L?L.__html:void 0,k!=null&&L!==k&&(h=h||[]).push(ee,k)):ee==="children"?typeof k!="string"&&typeof k!="number"||(h=h||[]).push(ee,""+k):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(a.hasOwnProperty(ee)?(k!=null&&ee==="onScroll"&&bt("scroll",t),h||L===k||(h=[])):(h=h||[]).push(ee,k))}s&&(h=h||[]).push("style",s);var ee=h;(i.updateQueue=ee)&&(i.flags|=4)}},kh=function(t,i,s,l){s!==l&&(i.flags|=4)};function xo(t,i){if(!It)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function on(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function cv(t,i,s){var l=i.pendingProps;switch(gu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return on(i),null;case 1:return vn(i.type)&&la(),on(i),null;case 3:return l=i.stateNode,cs(),Lt(gn),Lt(rn),Pu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(ha(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,jn!==null&&(sc(jn),jn=null))),ju(t,i),on(i),null;case 5:Cu(i);var c=Cr(po.current);if(s=i.type,t!==null&&i.stateNode!=null)Oh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return on(i),null}if(t=Cr(oi.current),ha(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[si]=i,l[lo]=h,t=(i.mode&1)!==0,s){case"dialog":bt("cancel",l),bt("close",l);break;case"iframe":case"object":case"embed":bt("load",l);break;case"video":case"audio":for(c=0;c<so.length;c++)bt(so[c],l);break;case"source":bt("error",l);break;case"img":case"image":case"link":bt("error",l),bt("load",l);break;case"details":bt("toggle",l);break;case"input":pt(l,h),bt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},bt("invalid",l);break;case"textarea":oe(l,h),bt("invalid",l)}st(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var L=h[M];M==="children"?typeof L=="string"?l.textContent!==L&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,L,t),c=["children",L]):typeof L=="number"&&l.textContent!==""+L&&(h.suppressHydrationWarning!==!0&&sa(l.textContent,L,t),c=["children",""+L]):a.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&bt("scroll",l)}switch(s){case"input":yt(l),qe(l,h,!0);break;case"textarea":yt(l),Y(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=oa)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ve(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[si]=i,t[lo]=l,Fh(t,i,!1,!1),i.stateNode=t;e:{switch(M=wt(s,l),s){case"dialog":bt("cancel",t),bt("close",t),c=l;break;case"iframe":case"object":case"embed":bt("load",t),c=l;break;case"video":case"audio":for(c=0;c<so.length;c++)bt(so[c],t);c=l;break;case"source":bt("error",t),c=l;break;case"img":case"image":case"link":bt("error",t),bt("load",t),c=l;break;case"details":bt("toggle",t),c=l;break;case"input":pt(t,l),c=dt(t,l),bt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=ae({},l,{value:void 0}),bt("invalid",t);break;case"textarea":oe(t,l),c=te(t,l),bt("invalid",t);break;default:c=l}st(s,c),L=c;for(h in L)if(L.hasOwnProperty(h)){var k=L[h];h==="style"?Oe(t,k):h==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ye(t,k)):h==="children"?typeof k=="string"?(s!=="textarea"||k!=="")&&Me(t,k):typeof k=="number"&&Me(t,""+k):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?k!=null&&h==="onScroll"&&bt("scroll",t):k!=null&&R(t,h,k,M))}switch(s){case"input":yt(t),qe(t,l,!1);break;case"textarea":yt(t),Y(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Pe(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?E(t,!!l.multiple,h,!1):l.defaultValue!=null&&E(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=oa)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return on(i),null;case 6:if(t&&i.stateNode!=null)kh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Cr(po.current),Cr(oi.current),ha(i)){if(l=i.stateNode,s=i.memoizedProps,l[si]=i,(h=l.nodeValue!==s)&&(t=Dn,t!==null))switch(t.tag){case 3:sa(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[si]=i,i.stateNode=l}return on(i),null;case 13:if(Lt(Ft),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(It&&Un!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Hd(),os(),i.flags|=98560,h=!1;else if(h=ha(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[si]=i}else os(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;on(i),h=!1}else jn!==null&&(sc(jn),jn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ft.current&1)!==0?Xt===0&&(Xt=3):lc())),i.updateQueue!==null&&(i.flags|=4),on(i),null);case 4:return cs(),ju(t,i),t===null&&oo(i.stateNode.containerInfo),on(i),null;case 10:return Mu(i.type._context),on(i),null;case 17:return vn(i.type)&&la(),on(i),null;case 19:if(Lt(Ft),h=i.memoizedState,h===null)return on(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)xo(h,!1);else{if(Xt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=xa(t),M!==null){for(i.flags|=128,xo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Rt(Ft,Ft.current&1|2),i.child}t=t.sibling}h.tail!==null&&be()>ps&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304)}else{if(!l)if(t=xa(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),xo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!It)return on(i),null}else 2*be()-h.renderingStartTime>ps&&s!==1073741824&&(i.flags|=128,l=!0,xo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=be(),i.sibling=null,s=Ft.current,Rt(Ft,l?s&1|2:s&1),i):(on(i),null);case 22:case 23:return ac(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(In&1073741824)!==0&&(on(i),i.subtreeFlags&6&&(i.flags|=8192)):on(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function fv(t,i){switch(gu(i),i.tag){case 1:return vn(i.type)&&la(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return cs(),Lt(gn),Lt(rn),Pu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Cu(i),null;case 13:if(Lt(Ft),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));os()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Lt(Ft),null;case 4:return cs(),null;case 10:return Mu(i.type._context),null;case 22:case 23:return ac(),null;case 24:return null;default:return null}}var Ra=!1,an=!1,dv=typeof WeakSet=="function"?WeakSet:Set,ke=null;function ds(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){kt(t,i,l)}else s.current=null}function Ku(t,i,s){try{s()}catch(l){kt(t,i,l)}}var zh=!1;function hv(t,i){if(au=jo,t=vd(),Jl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,L=-1,k=-1,ee=0,xe=0,Se=t,_e=null;t:for(;;){for(var Ne;Se!==s||c!==0&&Se.nodeType!==3||(L=M+c),Se!==h||l!==0&&Se.nodeType!==3||(k=M+l),Se.nodeType===3&&(M+=Se.nodeValue.length),(Ne=Se.firstChild)!==null;)_e=Se,Se=Ne;for(;;){if(Se===t)break t;if(_e===s&&++ee===c&&(L=M),_e===h&&++xe===l&&(k=M),(Ne=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Ne}s=L===-1||k===-1?null:{start:L,end:k}}else s=null}s=s||{start:0,end:0}}else s=null;for(lu={focusedElem:t,selectionRange:s},jo=!1,ke=i;ke!==null;)if(i=ke,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ke=t;else for(;ke!==null;){i=ke;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var He=ze.memoizedProps,zt=ze.memoizedState,q=i.stateNode,V=q.getSnapshotBeforeUpdate(i.elementType===i.type?He:Kn(i.type,He),zt);q.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){kt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,ke=t;break}ke=i.return}return ze=zh,zh=!1,ze}function So(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Ku(i,s,h)}c=c.next}while(c!==l)}}function Pa(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function $u(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function Bh(t){var i=t.alternate;i!==null&&(t.alternate=null,Bh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[si],delete i[lo],delete i[du],delete i[Kg],delete i[$g])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Hh(t){return t.tag===5||t.tag===3||t.tag===4}function Vh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Hh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=oa));else if(l!==4&&(t=t.child,t!==null))for(Zu(t,i,s),t=t.sibling;t!==null;)Zu(t,i,s),t=t.sibling}function Qu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Qu(t,i,s),t=t.sibling;t!==null;)Qu(t,i,s),t=t.sibling}var tn=null,$n=!1;function tr(t,i,s){for(s=s.child;s!==null;)Gh(t,i,s),s=s.sibling}function Gh(t,i,s){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(Kt,s)}catch{}switch(s.tag){case 5:an||ds(s,i);case 6:var l=tn,c=$n;tn=null,tr(t,i,s),tn=l,$n=c,tn!==null&&($n?(t=tn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):tn.removeChild(s.stateNode));break;case 18:tn!==null&&($n?(t=tn,s=s.stateNode,t.nodeType===8?fu(t.parentNode,s):t.nodeType===1&&fu(t,s),Zs(t)):fu(tn,s.stateNode));break;case 4:l=tn,c=$n,tn=s.stateNode.containerInfo,$n=!0,tr(t,i,s),tn=l,$n=c;break;case 0:case 11:case 14:case 15:if(!an&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Ku(s,i,M),c=c.next}while(c!==l)}tr(t,i,s);break;case 1:if(!an&&(ds(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(L){kt(s,i,L)}tr(t,i,s);break;case 21:tr(t,i,s);break;case 22:s.mode&1?(an=(l=an)||s.memoizedState!==null,tr(t,i,s),an=l):tr(t,i,s);break;default:tr(t,i,s)}}function Wh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new dv),i.forEach(function(l){var c=Mv.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function Zn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:tn=L.stateNode,$n=!1;break e;case 3:tn=L.stateNode.containerInfo,$n=!0;break e;case 4:tn=L.stateNode.containerInfo,$n=!0;break e}L=L.return}if(tn===null)throw Error(n(160));Gh(h,M,c),tn=null,$n=!1;var k=c.alternate;k!==null&&(k.return=null),c.return=null}catch(ee){kt(c,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Xh(i,t),i=i.sibling}function Xh(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(i,t),li(t),l&4){try{So(3,t,t.return),Pa(3,t)}catch(He){kt(t,t.return,He)}try{So(5,t,t.return)}catch(He){kt(t,t.return,He)}}break;case 1:Zn(i,t),li(t),l&512&&s!==null&&ds(s,s.return);break;case 5:if(Zn(i,t),li(t),l&512&&s!==null&&ds(s,s.return),t.flags&32){var c=t.stateNode;try{Me(c,"")}catch(He){kt(t,t.return,He)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,L=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{L==="input"&&h.type==="radio"&&h.name!=null&&We(c,h),wt(L,M);var ee=wt(L,h);for(M=0;M<k.length;M+=2){var xe=k[M],Se=k[M+1];xe==="style"?Oe(c,Se):xe==="dangerouslySetInnerHTML"?Ye(c,Se):xe==="children"?Me(c,Se):R(c,xe,Se,ee)}switch(L){case"input":At(c,h);break;case"textarea":b(c,h);break;case"select":var _e=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var Ne=h.value;Ne!=null?E(c,!!h.multiple,Ne,!1):_e!==!!h.multiple&&(h.defaultValue!=null?E(c,!!h.multiple,h.defaultValue,!0):E(c,!!h.multiple,h.multiple?[]:"",!1))}c[lo]=h}catch(He){kt(t,t.return,He)}}break;case 6:if(Zn(i,t),li(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(He){kt(t,t.return,He)}}break;case 3:if(Zn(i,t),li(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Zs(i.containerInfo)}catch(He){kt(t,t.return,He)}break;case 4:Zn(i,t),li(t);break;case 13:Zn(i,t),li(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(tc=be())),l&4&&Wh(t);break;case 22:if(xe=s!==null&&s.memoizedState!==null,t.mode&1?(an=(ee=an)||xe,Zn(i,t),an=ee):Zn(i,t),li(t),l&8192){if(ee=t.memoizedState!==null,(t.stateNode.isHidden=ee)&&!xe&&(t.mode&1)!==0)for(ke=t,xe=t.child;xe!==null;){for(Se=ke=xe;ke!==null;){switch(_e=ke,Ne=_e.child,_e.tag){case 0:case 11:case 14:case 15:So(4,_e,_e.return);break;case 1:ds(_e,_e.return);var ze=_e.stateNode;if(typeof ze.componentWillUnmount=="function"){l=_e,s=_e.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(He){kt(l,s,He)}}break;case 5:ds(_e,_e.return);break;case 22:if(_e.memoizedState!==null){jh(Se);continue}}Ne!==null?(Ne.return=_e,ke=Ne):jh(Se)}xe=xe.sibling}e:for(xe=null,Se=t;;){if(Se.tag===5){if(xe===null){xe=Se;try{c=Se.stateNode,ee?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(L=Se.stateNode,k=Se.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,L.style.display=tt("display",M))}catch(He){kt(t,t.return,He)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ee?"":Se.memoizedProps}catch(He){kt(t,t.return,He)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Zn(i,t),li(t),l&4&&Wh(t);break;case 21:break;default:Zn(i,t),li(t)}}function li(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(Hh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(Me(c,""),l.flags&=-33);var h=Vh(t);Qu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,L=Vh(t);Zu(t,L,M);break;default:throw Error(n(161))}}catch(k){kt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function pv(t,i,s){ke=t,Yh(t)}function Yh(t,i,s){for(var l=(t.mode&1)!==0;ke!==null;){var c=ke,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ra;if(!M){var L=c.alternate,k=L!==null&&L.memoizedState!==null||an;L=Ra;var ee=an;if(Ra=M,(an=k)&&!ee)for(ke=c;ke!==null;)M=ke,k=M.child,M.tag===22&&M.memoizedState!==null?Kh(c):k!==null?(k.return=M,ke=k):Kh(c);for(;h!==null;)ke=h,Yh(h),h=h.sibling;ke=c,Ra=L,an=ee}qh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,ke=h):qh(t)}}function qh(t){for(;ke!==null;){var i=ke;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:an||Pa(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!an)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Kn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&jd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}jd(i,M,s)}break;case 5:var L=i.stateNode;if(s===null&&i.flags&4){s=L;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&s.focus();break;case"img":k.src&&(s.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var xe=ee.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&Zs(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}an||i.flags&512&&$u(i)}catch(_e){kt(i,i.return,_e)}}if(i===t){ke=null;break}if(s=i.sibling,s!==null){s.return=i.return,ke=s;break}ke=i.return}}function jh(t){for(;ke!==null;){var i=ke;if(i===t){ke=null;break}var s=i.sibling;if(s!==null){s.return=i.return,ke=s;break}ke=i.return}}function Kh(t){for(;ke!==null;){var i=ke;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{Pa(4,i)}catch(k){kt(i,s,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(k){kt(i,c,k)}}var h=i.return;try{$u(i)}catch(k){kt(i,h,k)}break;case 5:var M=i.return;try{$u(i)}catch(k){kt(i,M,k)}}}catch(k){kt(i,i.return,k)}if(i===t){ke=null;break}var L=i.sibling;if(L!==null){L.return=i.return,ke=L;break}ke=i.return}}var mv=Math.ceil,ba=D.ReactCurrentDispatcher,Ju=D.ReactCurrentOwner,Hn=D.ReactCurrentBatchConfig,gt=0,Qt=null,Ht=null,nn=0,In=0,hs=$i(0),Xt=0,yo=null,Pr=0,La=0,ec=0,Mo=null,xn=null,tc=0,ps=1/0,Ti=null,Da=!1,nc=null,nr=null,Ua=!1,ir=null,Ia=0,Eo=0,ic=null,Na=-1,Fa=0;function fn(){return(gt&6)!==0?be():Na!==-1?Na:Na=be()}function rr(t){return(t.mode&1)===0?1:(gt&2)!==0&&nn!==0?nn&-nn:Qg.transition!==null?(Fa===0&&(Fa=Xo()),Fa):(t=Et,t!==0||(t=window.event,t=t===void 0?16:Zf(t.type)),t)}function Qn(t,i,s,l){if(50<Eo)throw Eo=0,ic=null,Error(n(185));Ys(t,s,l),((gt&2)===0||t!==Qt)&&(t===Qt&&((gt&2)===0&&(La|=s),Xt===4&&sr(t,nn)),Sn(t,l),s===1&&gt===0&&(i.mode&1)===0&&(ps=be()+500,ca&&Qi()))}function Sn(t,i){var s=t.callbackNode;mn(t,i);var l=bn(t,t===Qt?nn:0);if(l===0)s!==null&&Ce(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&Ce(s),i===1)t.tag===0?Zg(Zh.bind(null,t)):Fd(Zh.bind(null,t)),qg(function(){(gt&6)===0&&Qi()}),s=null;else{switch(Gf(l)){case 1:s=Qe;break;case 4:s=Ge;break;case 16:s=ht;break;case 536870912:s=Pt;break;default:s=ht}s=sp(s,$h.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function $h(t,i){if(Na=-1,Fa=0,(gt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(ms()&&t.callbackNode!==s)return null;var l=bn(t,t===Qt?nn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Oa(t,l);else{i=l;var c=gt;gt|=2;var h=Jh();(Qt!==t||nn!==i)&&(Ti=null,ps=be()+500,Lr(t,i));do try{_v();break}catch(L){Qh(t,L)}while(!0);yu(),ba.current=h,gt=c,Ht!==null?i=0:(Qt=null,nn=0,i=Xt)}if(i!==0){if(i===2&&(c=yr(t),c!==0&&(l=c,i=rc(t,c))),i===1)throw s=yo,Lr(t,0),sr(t,l),Sn(t,be()),s;if(i===6)sr(t,l);else{if(c=t.current.alternate,(l&30)===0&&!gv(c)&&(i=Oa(t,l),i===2&&(h=yr(t),h!==0&&(l=h,i=rc(t,h))),i===1))throw s=yo,Lr(t,0),sr(t,l),Sn(t,be()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Dr(t,xn,Ti);break;case 3:if(sr(t,l),(l&130023424)===l&&(i=tc+500-be(),10<i)){if(bn(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){fn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=cu(Dr.bind(null,t,xn,Ti),i);break}Dr(t,xn,Ti);break;case 4:if(sr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-Mt(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=be()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*mv(l/1960))-l,10<l){t.timeoutHandle=cu(Dr.bind(null,t,xn,Ti),l);break}Dr(t,xn,Ti);break;case 5:Dr(t,xn,Ti);break;default:throw Error(n(329))}}}return Sn(t,be()),t.callbackNode===s?$h.bind(null,t):null}function rc(t,i){var s=Mo;return t.current.memoizedState.isDehydrated&&(Lr(t,i).flags|=256),t=Oa(t,i),t!==2&&(i=xn,xn=s,i!==null&&sc(i)),t}function sc(t){xn===null?xn=t:xn.push.apply(xn,t)}function gv(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!qn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function sr(t,i){for(i&=~ec,i&=~La,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-Mt(i),l=1<<s;t[s]=-1,i&=~l}}function Zh(t){if((gt&6)!==0)throw Error(n(327));ms();var i=bn(t,0);if((i&1)===0)return Sn(t,be()),null;var s=Oa(t,i);if(t.tag!==0&&s===2){var l=yr(t);l!==0&&(i=l,s=rc(t,l))}if(s===1)throw s=yo,Lr(t,0),sr(t,i),Sn(t,be()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Dr(t,xn,Ti),Sn(t,be()),null}function oc(t,i){var s=gt;gt|=1;try{return t(i)}finally{gt=s,gt===0&&(ps=be()+500,ca&&Qi())}}function br(t){ir!==null&&ir.tag===0&&(gt&6)===0&&ms();var i=gt;gt|=1;var s=Hn.transition,l=Et;try{if(Hn.transition=null,Et=1,t)return t()}finally{Et=l,Hn.transition=s,gt=i,(gt&6)===0&&Qi()}}function ac(){In=hs.current,Lt(hs)}function Lr(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Yg(s)),Ht!==null)for(s=Ht.return;s!==null;){var l=s;switch(gu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&la();break;case 3:cs(),Lt(gn),Lt(rn),Pu();break;case 5:Cu(l);break;case 4:cs();break;case 13:Lt(Ft);break;case 19:Lt(Ft);break;case 10:Mu(l.type._context);break;case 22:case 23:ac()}s=s.return}if(Qt=t,Ht=t=or(t.current,null),nn=In=i,Xt=0,yo=null,ec=La=Pr=0,xn=Mo=null,Ar!==null){for(i=0;i<Ar.length;i++)if(s=Ar[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}Ar=null}return t}function Qh(t,i){do{var s=Ht;try{if(yu(),Sa.current=Ta,ya){for(var l=Ot.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}ya=!1}if(Rr=0,Zt=Wt=Ot=null,mo=!1,go=0,Ju.current=null,s===null||s.return===null){Xt=1,yo=i,Ht=null;break}e:{var h=t,M=s.return,L=s,k=i;if(i=nn,L.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ee=k,xe=L,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ne=Eh(M);if(Ne!==null){Ne.flags&=-257,Th(Ne,M,L,h,i),Ne.mode&1&&Mh(h,ee,i),i=Ne,k=ee;var ze=i.updateQueue;if(ze===null){var He=new Set;He.add(k),i.updateQueue=He}else ze.add(k);break e}else{if((i&1)===0){Mh(h,ee,i),lc();break e}k=Error(n(426))}}else if(It&&L.mode&1){var zt=Eh(M);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),Th(zt,M,L,h,i),xu(fs(k,L));break e}}h=k=fs(k,L),Xt!==4&&(Xt=2),Mo===null?Mo=[h]:Mo.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var q=Sh(h,k,i);qd(h,q);break e;case 1:L=k;var V=h.type,j=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(nr===null||!nr.has(j)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=yh(h,L,i);qd(h,we);break e}}h=h.return}while(h!==null)}tp(s)}catch(Ve){i=Ve,Ht===s&&s!==null&&(Ht=s=s.return);continue}break}while(!0)}function Jh(){var t=ba.current;return ba.current=Ta,t===null?Ta:t}function lc(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Qt===null||(Pr&268435455)===0&&(La&268435455)===0||sr(Qt,nn)}function Oa(t,i){var s=gt;gt|=2;var l=Jh();(Qt!==t||nn!==i)&&(Ti=null,Lr(t,i));do try{vv();break}catch(c){Qh(t,c)}while(!0);if(yu(),gt=s,ba.current=l,Ht!==null)throw Error(n(261));return Qt=null,nn=0,Xt}function vv(){for(;Ht!==null;)ep(Ht)}function _v(){for(;Ht!==null&&!Ue();)ep(Ht)}function ep(t){var i=rp(t.alternate,t,In);t.memoizedProps=t.pendingProps,i===null?tp(t):Ht=i,Ju.current=null}function tp(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=cv(s,i,In),s!==null){Ht=s;return}}else{if(s=fv(s,i),s!==null){s.flags&=32767,Ht=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xt=6,Ht=null;return}}if(i=i.sibling,i!==null){Ht=i;return}Ht=i=t}while(i!==null);Xt===0&&(Xt=5)}function Dr(t,i,s){var l=Et,c=Hn.transition;try{Hn.transition=null,Et=1,xv(t,i,s,l)}finally{Hn.transition=c,Et=l}return null}function xv(t,i,s,l){do ms();while(ir!==null);if((gt&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(Jm(t,h),t===Qt&&(Ht=Qt=null,nn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Ua||(Ua=!0,sp(ht,function(){return ms(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=Hn.transition,Hn.transition=null;var M=Et;Et=1;var L=gt;gt|=4,Ju.current=null,hv(t,s),Xh(s,t),zg(lu),jo=!!au,lu=au=null,t.current=s,pv(s),Be(),gt=L,Et=M,Hn.transition=h}else t.current=s;if(Ua&&(Ua=!1,ir=t,Ia=c),h=t.pendingLanes,h===0&&(nr=null),Xe(s.stateNode),Sn(t,be()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Da)throw Da=!1,t=nc,nc=null,t;return(Ia&1)!==0&&t.tag!==0&&ms(),h=t.pendingLanes,(h&1)!==0?t===ic?Eo++:(Eo=0,ic=t):Eo=0,Qi(),null}function ms(){if(ir!==null){var t=Gf(Ia),i=Hn.transition,s=Et;try{if(Hn.transition=null,Et=16>t?16:t,ir===null)var l=!1;else{if(t=ir,ir=null,Ia=0,(gt&6)!==0)throw Error(n(331));var c=gt;for(gt|=4,ke=t.current;ke!==null;){var h=ke,M=h.child;if((ke.flags&16)!==0){var L=h.deletions;if(L!==null){for(var k=0;k<L.length;k++){var ee=L[k];for(ke=ee;ke!==null;){var xe=ke;switch(xe.tag){case 0:case 11:case 15:So(8,xe,h)}var Se=xe.child;if(Se!==null)Se.return=xe,ke=Se;else for(;ke!==null;){xe=ke;var _e=xe.sibling,Ne=xe.return;if(Bh(xe),xe===ee){ke=null;break}if(_e!==null){_e.return=Ne,ke=_e;break}ke=Ne}}}var ze=h.alternate;if(ze!==null){var He=ze.child;if(He!==null){ze.child=null;do{var zt=He.sibling;He.sibling=null,He=zt}while(He!==null)}}ke=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,ke=M;else e:for(;ke!==null;){if(h=ke,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:So(9,h,h.return)}var q=h.sibling;if(q!==null){q.return=h.return,ke=q;break e}ke=h.return}}var V=t.current;for(ke=V;ke!==null;){M=ke;var j=M.child;if((M.subtreeFlags&2064)!==0&&j!==null)j.return=M,ke=j;else e:for(M=V;ke!==null;){if(L=ke,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Pa(9,L)}}catch(Ve){kt(L,L.return,Ve)}if(L===M){ke=null;break e}var we=L.sibling;if(we!==null){we.return=L.return,ke=we;break e}ke=L.return}}if(gt=c,Qi(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(Kt,t)}catch{}l=!0}return l}finally{Et=s,Hn.transition=i}}return!1}function np(t,i,s){i=fs(s,i),i=Sh(t,i,1),t=er(t,i,1),i=fn(),t!==null&&(Ys(t,1,i),Sn(t,i))}function kt(t,i,s){if(t.tag===3)np(t,t,s);else for(;i!==null;){if(i.tag===3){np(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(nr===null||!nr.has(l))){t=fs(s,t),t=yh(i,t,1),i=er(i,t,1),t=fn(),i!==null&&(Ys(i,1,t),Sn(i,t));break}}i=i.return}}function Sv(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=fn(),t.pingedLanes|=t.suspendedLanes&s,Qt===t&&(nn&s)===s&&(Xt===4||Xt===3&&(nn&130023424)===nn&&500>be()-tc?Lr(t,0):ec|=s),Sn(t,i)}function ip(t,i){i===0&&((t.mode&1)===0?i=1:(i=Vi,Vi<<=1,(Vi&130023424)===0&&(Vi=4194304)));var s=fn();t=yi(t,i),t!==null&&(Ys(t,i,s),Sn(t,s))}function yv(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),ip(t,s)}function Mv(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),ip(t,s)}var rp;rp=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||gn.current)_n=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return _n=!1,uv(t,i,s);_n=(t.flags&131072)!==0}else _n=!1,It&&(i.flags&1048576)!==0&&Od(i,da,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Ca(t,i),t=i.pendingProps;var c=is(i,rn.current);us(i,s),c=Du(null,i,l,t,c,s);var h=Uu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,vn(l)?(h=!0,ua(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,wu(i),c.updater=wa,i.stateNode=c,c._reactInternals=i,zu(i,l,t,s),i=Gu(null,i,l,!0,h,s)):(i.tag=0,It&&h&&mu(i),cn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(Ca(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=Tv(l),t=Kn(l,t),c){case 0:i=Vu(null,i,l,t,s);break e;case 1:i=bh(null,i,l,t,s);break e;case 11:i=wh(null,i,l,t,s);break e;case 14:i=Ah(null,i,l,Kn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Vu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),bh(t,i,l,c,s);case 3:e:{if(Lh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,Yd(t,i),_a(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=fs(Error(n(423)),i),i=Dh(t,i,l,s,c);break e}else if(l!==c){c=fs(Error(n(424)),i),i=Dh(t,i,l,s,c);break e}else for(Un=Ki(i.stateNode.containerInfo.firstChild),Dn=i,It=!0,jn=null,s=Wd(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(os(),l===c){i=Ei(t,i,s);break e}cn(t,i,l,s)}i=i.child}return i;case 5:return Kd(i),t===null&&_u(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,uu(l,c)?M=null:h!==null&&uu(l,h)&&(i.flags|=32),Ph(t,i),cn(t,i,M,s),i.child;case 6:return t===null&&_u(i),null;case 13:return Uh(t,i,s);case 4:return Au(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=as(i,null,l,s):cn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),wh(t,i,l,c,s);case 7:return cn(t,i,i.pendingProps,s),i.child;case 8:return cn(t,i,i.pendingProps.children,s),i.child;case 12:return cn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Rt(ma,l._currentValue),l._currentValue=M,h!==null)if(qn(h.value,M)){if(h.children===c.children&&!gn.current){i=Ei(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var L=h.dependencies;if(L!==null){M=h.child;for(var k=L.firstContext;k!==null;){if(k.context===l){if(h.tag===1){k=Mi(-1,s&-s),k.tag=2;var ee=h.updateQueue;if(ee!==null){ee=ee.shared;var xe=ee.pending;xe===null?k.next=k:(k.next=xe.next,xe.next=k),ee.pending=k}}h.lanes|=s,k=h.alternate,k!==null&&(k.lanes|=s),Eu(h.return,s,i),L.lanes|=s;break}k=k.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,L=M.alternate,L!==null&&(L.lanes|=s),Eu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}cn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,us(i,s),c=zn(c),l=l(c),i.flags|=1,cn(t,i,l,s),i.child;case 14:return l=i.type,c=Kn(l,i.pendingProps),c=Kn(l.type,c),Ah(t,i,l,c,s);case 15:return Ch(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Kn(l,c),Ca(t,i),i.tag=1,vn(l)?(t=!0,ua(i)):t=!1,us(i,s),_h(i,l,c),zu(i,l,c,s),Gu(null,i,l,!0,t,s);case 19:return Nh(t,i,s);case 22:return Rh(t,i,s)}throw Error(n(156,i.tag))};function sp(t,i){return X(t,i)}function Ev(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,i,s,l){return new Ev(t,i,s,l)}function uc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Tv(t){if(typeof t=="function")return uc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ce)return 11;if(t===he)return 14}return 2}function or(t,i){var s=t.alternate;return s===null?(s=Vn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function ka(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")uc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Ur(s.children,c,h,i);case K:M=8,c|=8;break;case P:return t=Vn(12,s,i,c|2),t.elementType=P,t.lanes=h,t;case ie:return t=Vn(13,s,i,c),t.elementType=ie,t.lanes=h,t;case le:return t=Vn(19,s,i,c),t.elementType=le,t.lanes=h,t;case ue:return za(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:M=10;break e;case H:M=9;break e;case ce:M=11;break e;case he:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Vn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Ur(t,i,s,l){return t=Vn(7,t,l,i),t.lanes=s,t}function za(t,i,s,l){return t=Vn(22,t,l,i),t.elementType=ue,t.lanes=s,t.stateNode={isHidden:!1},t}function cc(t,i,s){return t=Vn(6,t,null,i),t.lanes=s,t}function fc(t,i,s){return i=Vn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function wv(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qr(0),this.expirationTimes=qr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function dc(t,i,s,l,c,h,M,L,k){return t=new wv(t,i,s,L,k),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Vn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},wu(h),t}function Av(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function op(t){if(!t)return Zi;t=t._reactInternals;e:{if(gi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(vn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(vn(s))return Id(t,s,i)}return i}function ap(t,i,s,l,c,h,M,L,k){return t=dc(s,l,!0,t,c,h,M,L,k),t.context=op(null),s=t.current,l=fn(),c=rr(s),h=Mi(l,c),h.callback=i??null,er(s,h,c),t.current.lanes=c,Ys(t,c,l),Sn(t,l),t}function Ba(t,i,s,l){var c=i.current,h=fn(),M=rr(c);return s=op(s),i.context===null?i.context=s:i.pendingContext=s,i=Mi(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=er(c,i,M),t!==null&&(Qn(t,c,M,h),va(t,c,M)),M}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function lp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function hc(t,i){lp(t,i),(t=t.alternate)&&lp(t,i)}function Cv(){return null}var up=typeof reportError=="function"?reportError:function(t){console.error(t)};function pc(t){this._internalRoot=t}Va.prototype.render=pc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ba(t,i,null,null)},Va.prototype.unmount=pc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;br(function(){Ba(null,t,null,null)}),i[vi]=null}};function Va(t){this._internalRoot=t}Va.prototype.unstable_scheduleHydration=function(t){if(t){var i=Yf();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Yi.length&&i!==0&&i<Yi[s].priority;s++);Yi.splice(s,0,t),s===0&&Kf(t)}};function mc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ga(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cp(){}function Rv(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var ee=Ha(M);h.call(ee)}}var M=ap(i,l,t,0,null,!1,!1,"",cp);return t._reactRootContainer=M,t[vi]=M.current,oo(t.nodeType===8?t.parentNode:t),br(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var L=l;l=function(){var ee=Ha(k);L.call(ee)}}var k=dc(t,0,!1,null,null,!1,!1,"",cp);return t._reactRootContainer=k,t[vi]=k.current,oo(t.nodeType===8?t.parentNode:t),br(function(){Ba(i,k,s,l)}),k}function Wa(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var L=c;c=function(){var k=Ha(M);L.call(k)}}Ba(i,M,t,c)}else M=Rv(s,i,t,c,l);return Ha(M)}Wf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=Ct(i.pendingLanes);s!==0&&(zl(i,s|1),Sn(i,be()),(gt&6)===0&&(ps=be()+500,Qi()))}break;case 13:br(function(){var l=yi(t,1);if(l!==null){var c=fn();Qn(l,t,1,c)}}),hc(t,1)}},Bl=function(t){if(t.tag===13){var i=yi(t,134217728);if(i!==null){var s=fn();Qn(i,t,134217728,s)}hc(t,134217728)}},Xf=function(t){if(t.tag===13){var i=rr(t),s=yi(t,i);if(s!==null){var l=fn();Qn(s,t,i,l)}hc(t,i)}},Yf=function(){return Et},qf=function(t,i){var s=Et;try{return Et=t,i()}finally{Et=s}},pe=function(t,i,s){switch(i){case"input":if(At(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=aa(l);if(!c)throw Error(n(90));O(l),At(l,c)}}}break;case"textarea":b(t,s);break;case"select":i=s.value,i!=null&&E(t,!!s.multiple,i,!1)}},Bt=oc,mt=br;var Pv={usingClientEntryPoint:!1,Events:[uo,ts,aa,ft,Nt,oc]},To={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bv={bundleType:To.bundleType,version:To.version,rendererPackageName:To.rendererPackageName,rendererConfig:To.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z(t),t===null?null:t.stateNode},findFiberByHostInstance:To.findFiberByHostInstance||Cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xa.isDisabled&&Xa.supportsFiber)try{Kt=Xa.inject(bv),ot=Xa}catch{}}return yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv,yn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(i))throw Error(n(200));return Av(t,i,null,s)},yn.createRoot=function(t,i){if(!mc(t))throw Error(n(299));var s=!1,l="",c=up;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=dc(t,1,!1,null,null,s,!1,l,c),t[vi]=i.current,oo(t.nodeType===8?t.parentNode:t),new pc(i)},yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Z(i),t=t===null?null:t.stateNode,t},yn.flushSync=function(t){return br(t)},yn.hydrate=function(t,i,s){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!0,s)},yn.hydrateRoot=function(t,i,s){if(!mc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=up;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=ap(i,null,t,1,s??null,c,!1,h,M),t[vi]=i.current,oo(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Va(i)},yn.render=function(t,i,s){if(!Ga(i))throw Error(n(200));return Wa(null,t,i,!1,s)},yn.unmountComponentAtNode=function(t){if(!Ga(t))throw Error(n(40));return t._reactRootContainer?(br(function(){Wa(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1},yn.unstable_batchedUpdates=oc,yn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Ga(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Wa(t,i,s,!1,l)},yn.version="18.3.1-next-f1338f8080-20240426",yn}var _p;function kv(){if(_p)return _c.exports;_p=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),_c.exports=Ov(),_c.exports}var xp;function zv(){if(xp)return Ya;xp=1;var o=kv();return Ya.createRoot=o.createRoot,Ya.hydrateRoot=o.hydrateRoot,Ya}var Bv=zv();const If="168",Hv=0,Sp=1,Vv=2,ym=1,Gv=2,bi=3,vr=0,wn=1,Li=2,mr=0,Is=1,Zc=2,yp=3,Mp=4,Wv=5,Vr=100,Xv=101,Yv=102,qv=103,jv=104,Kv=200,$v=201,Zv=202,Qv=203,Qc=204,Jc=205,Jv=206,e_=207,t_=208,n_=209,i_=210,r_=211,s_=212,o_=213,a_=214,l_=0,u_=1,c_=2,wl=3,f_=4,d_=5,h_=6,p_=7,Mm=0,m_=1,g_=2,gr=0,v_=1,__=2,x_=3,S_=4,y_=5,M_=6,E_=7,Em=300,Os=301,ks=302,ef=303,tf=304,Il=306,nf=1e3,ii=1001,rf=1002,Tn=1003,T_=1004,qa=1005,hn=1006,yc=1007,Wr=1008,Ii=1009,Tm=1010,wm=1011,No=1012,Nf=1013,Yr=1014,hi=1015,Vs=1016,Ff=1017,Of=1018,zs=1020,Am=35902,Cm=1021,Rm=1022,Wn=1023,Pm=1024,bm=1025,Ns=1026,Bs=1027,Lm=1028,kf=1029,Dm=1030,zf=1031,Bf=1033,xl=33776,Sl=33777,yl=33778,Ml=33779,sf=35840,of=35841,af=35842,lf=35843,uf=36196,cf=37492,ff=37496,df=37808,hf=37809,pf=37810,mf=37811,gf=37812,vf=37813,_f=37814,xf=37815,Sf=37816,yf=37817,Mf=37818,Ef=37819,Tf=37820,wf=37821,El=36492,Af=36494,Cf=36495,Um=36283,Rf=36284,Pf=36285,bf=36286,w_=3200,A_=3201,C_=0,R_=1,pr="",ci="srgb",xr="srgb-linear",Hf="display-p3",Nl="display-p3-linear",Al="linear",Dt="srgb",Cl="rec709",Rl="p3",gs=7680,Ep=519,P_=512,b_=513,L_=514,Im=515,D_=516,U_=517,I_=518,N_=519,Tp=35044,wp="300 es",Di=2e3,Pl=2001;class Gs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mc=Math.PI/180,Lf=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ln[o&255]+ln[o>>8&255]+ln[o>>16&255]+ln[o>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[r&255]+ln[r>>8&255]+ln[r>>16&255]+ln[r>>24&255]).toLowerCase()}function En(o,e,n){return Math.max(e,Math.min(n,o))}function F_(o,e){return(o%e+e)%e}function Ec(o,e,n){return(1-n)*o+n*e}function Ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Mn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(En(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,n,r,a,u,f,d,p,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],S=r[7],x=r[2],y=r[5],w=r[8],T=a[0],_=a[3],g=a[6],I=a[1],R=a[4],D=a[7],Q=a[2],z=a[5],F=a[8];return u[0]=f*T+d*I+p*Q,u[3]=f*_+d*R+p*z,u[6]=f*g+d*D+p*F,u[1]=m*T+v*I+S*Q,u[4]=m*_+v*R+S*z,u[7]=m*g+v*D+S*F,u[2]=x*T+y*I+w*Q,u[5]=x*_+y*R+w*z,u[8]=x*g+y*D+w*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],S=v*f-d*m,x=d*p-v*u,y=m*u-f*p,w=n*S+r*x+a*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=S*T,e[1]=(a*m-v*r)*T,e[2]=(d*r-a*f)*T,e[3]=x*T,e[4]=(v*n-a*p)*T,e[5]=(a*u-d*n)*T,e[6]=y*T,e[7]=(r*p-m*n)*T,e[8]=(f*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Tc.makeScale(e,n)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new ut;function Nm(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function bl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function O_(){const o=bl("canvas");return o.style.display="block",o}const Ap={};function Io(o){o in Ap||(Ap[o]=!0,console.warn(o))}function k_(o,e,n){return new Promise(function(r,a){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:a();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const Cp=new ut().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Rp=new ut().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Co={[xr]:{transfer:Al,primaries:Cl,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o,fromReference:o=>o},[ci]:{transfer:Dt,primaries:Cl,luminanceCoefficients:[.2126,.7152,.0722],toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Nl]:{transfer:Al,primaries:Rl,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.applyMatrix3(Rp),fromReference:o=>o.applyMatrix3(Cp)},[Hf]:{transfer:Dt,primaries:Rl,luminanceCoefficients:[.2289,.6917,.0793],toReference:o=>o.convertSRGBToLinear().applyMatrix3(Rp),fromReference:o=>o.applyMatrix3(Cp).convertLinearToSRGB()}},z_=new Set([xr,Nl]),St={enabled:!0,_workingColorSpace:xr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!z_.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=Co[e].toReference,a=Co[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Co[o].primaries},getTransfer:function(o){return o===pr?Al:Co[o].transfer},getLuminanceCoefficients:function(o,e=this._workingColorSpace){return o.fromArray(Co[e].luminanceCoefficients)}};function Fs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function wc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let vs;class B_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vs===void 0&&(vs=bl("canvas")),vs.width=e.width,vs.height=e.height;const r=vs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=vs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=bl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Fs(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Fs(n[r]/255)*255):n[r]=Fs(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H_=0;class Fm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Ac(a[f].image)):u.push(Ac(a[f]))}else u=Ac(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Ac(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?B_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let V_=0;class pn extends Gs{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,r=ii,a=ii,u=hn,f=Wr,d=Wn,p=Ii,m=pn.DEFAULT_ANISOTROPY,v=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=Fo(),this.name="",this.source=new Fm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case nf:e.x=e.x-Math.floor(e.x);break;case ii:e.x=e.x<0?0:1;break;case rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case nf:e.y=e.y-Math.floor(e.y);break;case ii:e.y=e.y<0?0:1;break;case rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Em;pn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,n=0,r=0,a=1){Yt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],S=p[8],x=p[1],y=p[5],w=p[9],T=p[2],_=p[6],g=p[10];if(Math.abs(v-x)<.01&&Math.abs(S-T)<.01&&Math.abs(w-_)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+T)<.1&&Math.abs(w+_)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const R=(m+1)/2,D=(y+1)/2,Q=(g+1)/2,z=(v+x)/4,F=(S+T)/4,K=(w+_)/4;return R>D&&R>Q?R<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(R),a=z/r,u=F/r):D>Q?D<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(D),r=z/a,u=K/a):Q<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(Q),r=F/u,a=K/u),this.set(r,a,u,n),this}let I=Math.sqrt((_-w)*(_-w)+(S-T)*(S-T)+(x-v)*(x-v));return Math.abs(I)<.001&&(I=1),this.x=(_-w)/I,this.y=(S-T)/I,this.z=(x-v)/I,this.w=Math.acos((m+y+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class G_ extends Gs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Yt(0,0,e,n),this.scissorTest=!1,this.viewport=new Yt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new pn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Fm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends G_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Om extends pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class W_ extends pn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],S=r[a+3];const x=u[f+0],y=u[f+1],w=u[f+2],T=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=S;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=w,e[n+3]=T;return}if(S!==T||p!==x||m!==y||v!==w){let _=1-d;const g=p*x+m*y+v*w+S*T,I=g>=0?1:-1,R=1-g*g;if(R>Number.EPSILON){const Q=Math.sqrt(R),z=Math.atan2(Q,g*I);_=Math.sin(_*z)/Q,d=Math.sin(d*z)/Q}const D=d*I;if(p=p*_+x*D,m=m*_+y*D,v=v*_+w*D,S=S*_+T*D,_===1-d){const Q=1/Math.sqrt(p*p+m*m+v*v+S*S);p*=Q,m*=Q,v*=Q,S*=Q}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],S=u[f],x=u[f+1],y=u[f+2],w=u[f+3];return e[n]=d*w+v*S+p*y-m*x,e[n+1]=p*w+v*x+m*S-d*y,e[n+2]=m*w+v*y+d*x-p*S,e[n+3]=v*w-d*S-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),S=d(u/2),x=p(r/2),y=p(a/2),w=p(u/2);switch(f){case"XYZ":this._x=x*v*S+m*y*w,this._y=m*y*S-x*v*w,this._z=m*v*w+x*y*S,this._w=m*v*S-x*y*w;break;case"YXZ":this._x=x*v*S+m*y*w,this._y=m*y*S-x*v*w,this._z=m*v*w-x*y*S,this._w=m*v*S+x*y*w;break;case"ZXY":this._x=x*v*S-m*y*w,this._y=m*y*S+x*v*w,this._z=m*v*w+x*y*S,this._w=m*v*S-x*y*w;break;case"ZYX":this._x=x*v*S-m*y*w,this._y=m*y*S+x*v*w,this._z=m*v*w-x*y*S,this._w=m*v*S+x*y*w;break;case"YZX":this._x=x*v*S+m*y*w,this._y=m*y*S+x*v*w,this._z=m*v*w-x*y*S,this._w=m*v*S-x*y*w;break;case"XZY":this._x=x*v*S-m*y*w,this._y=m*y*S-x*v*w,this._z=m*v*w+x*y*S,this._w=m*v*S+x*y*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],S=n[10],x=r+d+S;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(v-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(En(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*p,this._y=a*v+f*p+u*d-r*m,this._z=u*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),S=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=f*S+this._w*x,this._x=r*S+this._x*x,this._y=a*S+this._y*x,this._z=u*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ne{constructor(e=0,n=0,r=0){ne.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),S=2*(u*r-f*n);return this.x=n+p*m+f*S-d*v,this.y=r+p*v+d*m-u*S,this.z=a+p*S+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(En(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new ne,Pp=new Oo;class ko{constructor(e=new ne(1/0,1/0,1/0),n=new ne(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Jn):Jn.fromBufferAttribute(u,f),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ja.copy(r.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),Ka.subVectors(this.max,Ro),_s.subVectors(e.a,Ro),xs.subVectors(e.b,Ro),Ss.subVectors(e.c,Ro),lr.subVectors(xs,_s),ur.subVectors(Ss,xs),Ir.subVectors(_s,Ss);let n=[0,-lr.z,lr.y,0,-ur.z,ur.y,0,-Ir.z,Ir.y,lr.z,0,-lr.x,ur.z,0,-ur.x,Ir.z,0,-Ir.x,-lr.y,lr.x,0,-ur.y,ur.x,0,-Ir.y,Ir.x,0];return!Rc(n,_s,xs,Ss,Ka)||(n=[1,0,0,0,1,0,0,0,1],!Rc(n,_s,xs,Ss,Ka))?!1:($a.crossVectors(lr,ur),n=[$a.x,$a.y,$a.z],Rc(n,_s,xs,Ss,Ka))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new ne,new ne,new ne,new ne,new ne,new ne,new ne,new ne],Jn=new ne,ja=new ko,_s=new ne,xs=new ne,Ss=new ne,lr=new ne,ur=new ne,Ir=new ne,Ro=new ne,Ka=new ne,$a=new ne,Nr=new ne;function Rc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Nr.fromArray(o,u);const d=a.x*Math.abs(Nr.x)+a.y*Math.abs(Nr.y)+a.z*Math.abs(Nr.z),p=e.dot(Nr),m=n.dot(Nr),v=r.dot(Nr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const X_=new ko,Po=new ne,Pc=new ne;class Fl{constructor(e=new ne,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):X_.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Po.subVectors(e,this.center);const n=Po.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Po,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Po.copy(e.center).add(Pc)),this.expandByPoint(Po.copy(e.center).sub(Pc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ai=new ne,bc=new ne,Za=new ne,cr=new ne,Lc=new ne,Qa=new ne,Dc=new ne;class km{constructor(e=new ne,n=new ne(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ai.copy(this.origin).addScaledVector(this.direction,n),Ai.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){bc.copy(e).add(n).multiplyScalar(.5),Za.copy(n).sub(e).normalize(),cr.copy(this.origin).sub(bc);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Za),d=cr.dot(this.direction),p=-cr.dot(Za),m=cr.lengthSq(),v=Math.abs(1-f*f);let S,x,y,w;if(v>0)if(S=f*p-d,x=f*d-p,w=u*v,S>=0)if(x>=-w)if(x<=w){const T=1/v;S*=T,x*=T,y=S*(S+f*x+2*d)+x*(f*S+x+2*p)+m}else x=u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;else x=-u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;else x<=-w?(S=Math.max(0,-(-f*u+d)),x=S>0?-u:Math.min(Math.max(-u,-p),u),y=-S*S+x*(x+2*p)+m):x<=w?(S=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(S=Math.max(0,-(f*u+d)),x=S>0?u:Math.min(Math.max(-u,-p),u),y=-S*S+x*(x+2*p)+m);else x=f>0?-u:u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(bc).addScaledVector(Za,x),y}intersectSphere(e,n){Ai.subVectors(e.center,this.origin);const r=Ai.dot(this.direction),a=Ai.dot(Ai)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),S>=0?(d=(e.min.z-x.z)*S,p=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,p=(e.min.z-x.z)*S),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ai)!==null}intersectTriangle(e,n,r,a,u){Lc.subVectors(n,e),Qa.subVectors(r,e),Dc.crossVectors(Lc,Qa);let f=this.direction.dot(Dc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;cr.subVectors(this.origin,e);const p=d*this.direction.dot(Qa.crossVectors(cr,Qa));if(p<0)return null;const m=d*this.direction.dot(Lc.cross(cr));if(m<0||p+m>f)return null;const v=-d*cr.dot(Dc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,r,a,u,f,d,p,m,v,S,x,y,w,T,_){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,v,S,x,y,w,T,_)}set(e,n,r,a,u,f,d,p,m,v,S,x,y,w,T,_){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=S,g[14]=x,g[3]=y,g[7]=w,g[11]=T,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/ys.setFromMatrixColumn(e,0).length(),u=1/ys.setFromMatrixColumn(e,1).length(),f=1/ys.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const x=f*v,y=f*S,w=d*v,T=d*S;n[0]=p*v,n[4]=-p*S,n[8]=m,n[1]=y+w*m,n[5]=x-T*m,n[9]=-d*p,n[2]=T-x*m,n[6]=w+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*v,y=p*S,w=m*v,T=m*S;n[0]=x+T*d,n[4]=w*d-y,n[8]=f*m,n[1]=f*S,n[5]=f*v,n[9]=-d,n[2]=y*d-w,n[6]=T+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*v,y=p*S,w=m*v,T=m*S;n[0]=x-T*d,n[4]=-f*S,n[8]=w+y*d,n[1]=y+w*d,n[5]=f*v,n[9]=T-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*v,y=f*S,w=d*v,T=d*S;n[0]=p*v,n[4]=w*m-y,n[8]=x*m+T,n[1]=p*S,n[5]=T*m+x,n[9]=y*m-w,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,w=d*p,T=d*m;n[0]=p*v,n[4]=T-x*S,n[8]=w*S+y,n[1]=S,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=y*S+w,n[10]=x-T*S}else if(e.order==="XZY"){const x=f*p,y=f*m,w=d*p,T=d*m;n[0]=p*v,n[4]=-S,n[8]=m*v,n[1]=x*S+T,n[5]=f*v,n[9]=y*S-w,n[2]=w*S-y,n[6]=d*v,n[10]=T*S+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Y_,e,q_)}lookAt(e,n,r){const a=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),fr.crossVectors(r,Nn),fr.lengthSq()===0&&(Math.abs(r.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),fr.crossVectors(r,Nn)),fr.normalize(),Ja.crossVectors(Nn,fr),a[0]=fr.x,a[4]=Ja.x,a[8]=Nn.x,a[1]=fr.y,a[5]=Ja.y,a[9]=Nn.y,a[2]=fr.z,a[6]=Ja.z,a[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],S=r[5],x=r[9],y=r[13],w=r[2],T=r[6],_=r[10],g=r[14],I=r[3],R=r[7],D=r[11],Q=r[15],z=a[0],F=a[4],K=a[8],P=a[12],A=a[1],H=a[5],ce=a[9],ie=a[13],le=a[2],he=a[6],se=a[10],ue=a[14],B=a[3],de=a[7],ae=a[11],N=a[15];return u[0]=f*z+d*A+p*le+m*B,u[4]=f*F+d*H+p*he+m*de,u[8]=f*K+d*ce+p*se+m*ae,u[12]=f*P+d*ie+p*ue+m*N,u[1]=v*z+S*A+x*le+y*B,u[5]=v*F+S*H+x*he+y*de,u[9]=v*K+S*ce+x*se+y*ae,u[13]=v*P+S*ie+x*ue+y*N,u[2]=w*z+T*A+_*le+g*B,u[6]=w*F+T*H+_*he+g*de,u[10]=w*K+T*ce+_*se+g*ae,u[14]=w*P+T*ie+_*ue+g*N,u[3]=I*z+R*A+D*le+Q*B,u[7]=I*F+R*H+D*he+Q*de,u[11]=I*K+R*ce+D*se+Q*ae,u[15]=I*P+R*ie+D*ue+Q*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],S=e[6],x=e[10],y=e[14],w=e[3],T=e[7],_=e[11],g=e[15];return w*(+u*p*S-a*m*S-u*d*x+r*m*x+a*d*y-r*p*y)+T*(+n*p*y-n*m*x+u*f*x-a*f*y+a*m*v-u*p*v)+_*(+n*m*S-n*d*y-u*f*S+r*f*y+u*d*v-r*m*v)+g*(-a*d*v-n*p*S+n*d*x+a*f*S-r*f*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],S=e[9],x=e[10],y=e[11],w=e[12],T=e[13],_=e[14],g=e[15],I=S*_*m-T*x*m+T*p*y-d*_*y-S*p*g+d*x*g,R=w*x*m-v*_*m-w*p*y+f*_*y+v*p*g-f*x*g,D=v*T*m-w*S*m+w*d*y-f*T*y-v*d*g+f*S*g,Q=w*S*p-v*T*p-w*d*x+f*T*x+v*d*_-f*S*_,z=n*I+r*R+a*D+u*Q;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=I*F,e[1]=(T*x*u-S*_*u-T*a*y+r*_*y+S*a*g-r*x*g)*F,e[2]=(d*_*u-T*p*u+T*a*m-r*_*m-d*a*g+r*p*g)*F,e[3]=(S*p*u-d*x*u-S*a*m+r*x*m+d*a*y-r*p*y)*F,e[4]=R*F,e[5]=(v*_*u-w*x*u+w*a*y-n*_*y-v*a*g+n*x*g)*F,e[6]=(w*p*u-f*_*u-w*a*m+n*_*m+f*a*g-n*p*g)*F,e[7]=(f*x*u-v*p*u+v*a*m-n*x*m-f*a*y+n*p*y)*F,e[8]=D*F,e[9]=(w*S*u-v*T*u-w*r*y+n*T*y+v*r*g-n*S*g)*F,e[10]=(f*T*u-w*d*u+w*r*m-n*T*m-f*r*g+n*d*g)*F,e[11]=(v*d*u-f*S*u-v*r*m+n*S*m+f*r*y-n*d*y)*F,e[12]=Q*F,e[13]=(v*T*a-w*S*a+w*r*x-n*T*x-v*r*_+n*S*_)*F,e[14]=(w*d*a-f*T*a-w*r*p+n*T*p+f*r*_-n*d*_)*F,e[15]=(f*S*a-v*d*a+v*r*p-n*S*p-f*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,v=f+f,S=d+d,x=u*m,y=u*v,w=u*S,T=f*v,_=f*S,g=d*S,I=p*m,R=p*v,D=p*S,Q=r.x,z=r.y,F=r.z;return a[0]=(1-(T+g))*Q,a[1]=(y+D)*Q,a[2]=(w-R)*Q,a[3]=0,a[4]=(y-D)*z,a[5]=(1-(x+g))*z,a[6]=(_+I)*z,a[7]=0,a[8]=(w+R)*F,a[9]=(_-I)*F,a[10]=(1-(x+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=ys.set(a[0],a[1],a[2]).length();const f=ys.set(a[4],a[5],a[6]).length(),d=ys.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ei.copy(this);const m=1/u,v=1/f,S=1/d;return ei.elements[0]*=m,ei.elements[1]*=m,ei.elements[2]*=m,ei.elements[4]*=v,ei.elements[5]*=v,ei.elements[6]*=v,ei.elements[8]*=S,ei.elements[9]*=S,ei.elements[10]*=S,n.setFromRotationMatrix(ei),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Di){const p=this.elements,m=2*u/(n-e),v=2*u/(r-a),S=(n+e)/(n-e),x=(r+a)/(r-a);let y,w;if(d===Di)y=-(f+u)/(f-u),w=-2*f*u/(f-u);else if(d===Pl)y=-f/(f-u),w=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=w,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Di){const p=this.elements,m=1/(n-e),v=1/(r-a),S=1/(f-u),x=(n+e)*m,y=(r+a)*v;let w,T;if(d===Di)w=(f+u)*S,T=-2*S;else if(d===Pl)w=u*S,T=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=T,p[14]=-w,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ys=new ne,ei=new Gt,Y_=new ne(0,0,0),q_=new ne(1,1,1),fr=new ne,Ja=new ne,Nn=new ne,bp=new Gt,Lp=new Oo;class Ni{constructor(e=0,n=0,r=0,a=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],S=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(En(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-En(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(En(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-En(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(En(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-En(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class zm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let j_=0;const Dp=new ne,Ms=new Oo,Ci=new Gt,el=new ne,bo=new ne,K_=new ne,$_=new Oo,Up=new ne(1,0,0),Ip=new ne(0,1,0),Np=new ne(0,0,1),Fp={type:"added"},Z_={type:"removed"},Es={type:"childadded",child:null},Uc={type:"childremoved",child:null};class An extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=An.DEFAULT_UP.clone();const e=new ne,n=new Ni,r=new Oo,a=new ne(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ut}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=An.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.multiply(Ms),this}rotateOnWorldAxis(e,n){return Ms.setFromAxisAngle(e,n),this.quaternion.premultiply(Ms),this}rotateX(e){return this.rotateOnAxis(Up,e)}rotateY(e){return this.rotateOnAxis(Ip,e)}rotateZ(e){return this.rotateOnAxis(Np,e)}translateOnAxis(e,n){return Dp.copy(e).applyQuaternion(this.quaternion),this.position.add(Dp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Up,e)}translateY(e){return this.translateOnAxis(Ip,e)}translateZ(e){return this.translateOnAxis(Np,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?el.copy(e):el.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(bo,el,this.up):Ci.lookAt(el,bo,this.up),this.quaternion.setFromRotationMatrix(Ci),a&&(Ci.extractRotation(a.matrixWorld),Ms.setFromRotationMatrix(Ci),this.quaternion.premultiply(Ms.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fp),Es.child=e,this.dispatchEvent(Es),Es.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Z_),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fp),Es.child=e,this.dispatchEvent(Es),Es.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,K_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,$_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const S=p[m];u(e.shapes,S)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),S=f(e.shapes),x=f(e.skeletons),y=f(e.animations),w=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}An.DEFAULT_UP=new ne(0,1,0);An.DEFAULT_MATRIX_AUTO_UPDATE=!0;An.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new ne,Ri=new ne,Ic=new ne,Pi=new ne,Ts=new ne,ws=new ne,Op=new ne,Nc=new ne,Fc=new ne,Oc=new ne;class di{constructor(e=new ne,n=new ne,r=new ne){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ti.subVectors(e,n),a.cross(ti);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ti.subVectors(a,n),Ri.subVectors(r,n),Ic.subVectors(e,n);const f=ti.dot(ti),d=ti.dot(Ri),p=ti.dot(Ic),m=Ri.dot(Ri),v=Ri.dot(Ic),S=f*m-d*d;if(S===0)return u.set(0,0,0),null;const x=1/S,y=(m*p-d*v)*x,w=(f*v-d*p)*x;return u.set(1-y-w,w,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,Pi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Pi.x),p.addScaledVector(f,Pi.y),p.addScaledVector(d,Pi.z),p)}static isFrontFacing(e,n,r,a){return ti.subVectors(r,n),Ri.subVectors(e,n),ti.cross(Ri).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),ti.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return di.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;Ts.subVectors(a,r),ws.subVectors(u,r),Nc.subVectors(e,r);const p=Ts.dot(Nc),m=ws.dot(Nc);if(p<=0&&m<=0)return n.copy(r);Fc.subVectors(e,a);const v=Ts.dot(Fc),S=ws.dot(Fc);if(v>=0&&S<=v)return n.copy(a);const x=p*S-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(Ts,f);Oc.subVectors(e,u);const y=Ts.dot(Oc),w=ws.dot(Oc);if(w>=0&&y<=w)return n.copy(u);const T=y*m-p*w;if(T<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(ws,d);const _=v*w-y*S;if(_<=0&&S-v>=0&&y-w>=0)return Op.subVectors(u,a),d=(S-v)/(S-v+(y-w)),n.copy(a).addScaledVector(Op,d);const g=1/(_+T+x);return f=T*g,d=x*g,n.copy(r).addScaledVector(Ts,f).addScaledVector(ws,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},tl={h:0,s:0,l:0};function kc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=St.workingColorSpace){return this.r=e,this.g=n,this.b=r,St.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=St.workingColorSpace){if(e=F_(e,1),n=En(n,0,1),r=En(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=kc(f,u,e+1/3),this.g=kc(f,u,e),this.b=kc(f,u,e-1/3)}return St.toWorkingColorSpace(this,a),this}setStyle(e,n=ci){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ci){const r=Bm[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fs(e.r),this.g=Fs(e.g),this.b=Fs(e.b),this}copyLinearToSRGB(e){return this.r=wc(e.r),this.g=wc(e.g),this.b=wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return St.fromWorkingColorSpace(un.copy(this),e),Math.round(En(un.r*255,0,255))*65536+Math.round(En(un.g*255,0,255))*256+Math.round(En(un.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=St.workingColorSpace){St.fromWorkingColorSpace(un.copy(this),n);const r=un.r,a=un.g,u=un.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const S=f-d;switch(m=v<=.5?S/(f+d):S/(2-f-d),f){case r:p=(a-u)/S+(a<u?6:0);break;case a:p=(u-r)/S+2;break;case u:p=(r-a)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=St.workingColorSpace){return St.fromWorkingColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=ci){St.fromWorkingColorSpace(un.copy(this),e);const n=un.r,r=un.g,a=un.b;return e!==ci?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(tl);const r=Ec(dr.h,tl.h,n),a=Ec(dr.s,tl.s,n),u=Ec(dr.l,tl.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new xt;xt.NAMES=Bm;let Q_=0;class zo extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Is,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qc,this.blendDst=Jc,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ep,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(r.blending=this.blending),this.side!==vr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Qc&&(r.blendSrc=this.blendSrc),this.blendDst!==Jc&&(r.blendDst=this.blendDst),this.blendEquation!==Vr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==wl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ep&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hm extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new ne,nl=new rt;class ri{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Tp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Io("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)nl.fromBufferAttribute(this,n),nl.applyMatrix3(e),this.setXY(n,nl.x,nl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Mn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ao(n,this.array)),n}setX(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ao(n,this.array)),n}setY(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ao(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ao(n,this.array)),n}setW(e,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),r=Mn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),r=Mn(r,this.array),a=Mn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Mn(n,this.array),r=Mn(r,this.array),a=Mn(a,this.array),u=Mn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tp&&(e.usage=this.usage),e}}class Vm extends ri{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Gm extends ri{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Ui extends ri{constructor(e,n,r){super(new Float32Array(e),n,r)}}let J_=0;const Gn=new Gt,zc=new An,As=new ne,Fn=new ko,Lo=new ko,en=new ne;class Oi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nm(e)?Gm:Vm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ut().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,r){return Gn.makeTranslation(e,n,r),this.applyMatrix4(Gn),this}scale(e,n,r){return Gn.makeScale(e,n,r),this.applyMatrix4(Gn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Ui(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ko);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ne(-1/0,-1/0,-1/0),new ne(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Fn.setFromBufferAttribute(u),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ne,1/0);return}if(e){const r=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(en.addVectors(Fn.min,Lo.min),Fn.expandByPoint(en),en.addVectors(Fn.max,Lo.max),Fn.expandByPoint(en)):(Fn.expandByPoint(Lo.min),Fn.expandByPoint(Lo.max))}Fn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)en.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(en));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)en.fromBufferAttribute(d,m),p&&(As.fromBufferAttribute(e,m),en.add(As)),a=Math.max(a,r.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ri(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<r.count;K++)d[K]=new ne,p[K]=new ne;const m=new ne,v=new ne,S=new ne,x=new rt,y=new rt,w=new rt,T=new ne,_=new ne;function g(K,P,A){m.fromBufferAttribute(r,K),v.fromBufferAttribute(r,P),S.fromBufferAttribute(r,A),x.fromBufferAttribute(u,K),y.fromBufferAttribute(u,P),w.fromBufferAttribute(u,A),v.sub(m),S.sub(m),y.sub(x),w.sub(x);const H=1/(y.x*w.y-w.x*y.y);isFinite(H)&&(T.copy(v).multiplyScalar(w.y).addScaledVector(S,-y.y).multiplyScalar(H),_.copy(S).multiplyScalar(y.x).addScaledVector(v,-w.x).multiplyScalar(H),d[K].add(T),d[P].add(T),d[A].add(T),p[K].add(_),p[P].add(_),p[A].add(_))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let K=0,P=I.length;K<P;++K){const A=I[K],H=A.start,ce=A.count;for(let ie=H,le=H+ce;ie<le;ie+=3)g(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const R=new ne,D=new ne,Q=new ne,z=new ne;function F(K){Q.fromBufferAttribute(a,K),z.copy(Q);const P=d[K];R.copy(P),R.sub(Q.multiplyScalar(Q.dot(P))).normalize(),D.crossVectors(z,P);const H=D.dot(p[K])<0?-1:1;f.setXYZW(K,R.x,R.y,R.z,H)}for(let K=0,P=I.length;K<P;++K){const A=I[K],H=A.start,ce=A.count;for(let ie=H,le=H+ce;ie<le;ie+=3)F(e.getX(ie+0)),F(e.getX(ie+1)),F(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ri(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new ne,u=new ne,f=new ne,d=new ne,p=new ne,m=new ne,v=new ne,S=new ne;if(e)for(let x=0,y=e.count;x<y;x+=3){const w=e.getX(x+0),T=e.getX(x+1),_=e.getX(x+2);a.fromBufferAttribute(n,w),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,_),v.subVectors(f,u),S.subVectors(a,u),v.cross(S),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,_),d.add(v),p.add(v),m.add(v),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),S.subVectors(a,u),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)en.fromBufferAttribute(e,n),en.normalize(),e.setXYZ(n,en.x,en.y,en.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,S=d.normalized,x=new m.constructor(p.length*v);let y=0,w=0;for(let T=0,_=p.length;T<_;T++){d.isInterleavedBufferAttribute?y=p[T]*d.data.stride+d.offset:y=p[T]*v;for(let g=0;g<v;g++)x[w++]=m[y++]}return new ri(x,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Oi,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,S=m.length;v<S;v++){const x=m[v],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let S=0,x=m.length;S<x;S++){const y=m[S];v.push(y.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],S=u[m];for(let x=0,y=S.length;x<y;x++)v.push(S[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const S=f[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kp=new Gt,Fr=new km,il=new Fl,zp=new ne,Cs=new ne,Rs=new ne,Ps=new ne,Bc=new ne,rl=new ne,sl=new rt,ol=new rt,al=new rt,Bp=new ne,Hp=new ne,Vp=new ne,ll=new ne,ul=new ne;class Xn extends An{constructor(e=new Oi,n=new Hm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){rl.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],S=u[p];v!==0&&(Bc.fromBufferAttribute(S,e),f?rl.addScaledVector(Bc,v):rl.addScaledVector(Bc.sub(n),v))}n.add(rl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),il.copy(r.boundingSphere),il.applyMatrix4(u),Fr.copy(e.ray).recast(e.near),!(il.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(il,zp)===null||Fr.origin.distanceToSquared(zp)>(e.far-e.near)**2))&&(kp.copy(u).invert(),Fr.copy(e.ray).applyMatrix4(kp),!(r.boundingBox!==null&&Fr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Fr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,S=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let w=0,T=x.length;w<T;w++){const _=x[w],g=f[_.materialIndex],I=Math.max(_.start,y.start),R=Math.min(d.count,Math.min(_.start+_.count,y.start+y.count));for(let D=I,Q=R;D<Q;D+=3){const z=d.getX(D),F=d.getX(D+1),K=d.getX(D+2);a=cl(this,g,e,r,m,v,S,z,F,K),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let _=w,g=T;_<g;_+=3){const I=d.getX(_),R=d.getX(_+1),D=d.getX(_+2);a=cl(this,f,e,r,m,v,S,I,R,D),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let w=0,T=x.length;w<T;w++){const _=x[w],g=f[_.materialIndex],I=Math.max(_.start,y.start),R=Math.min(p.count,Math.min(_.start+_.count,y.start+y.count));for(let D=I,Q=R;D<Q;D+=3){const z=D,F=D+1,K=D+2;a=cl(this,g,e,r,m,v,S,z,F,K),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const w=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let _=w,g=T;_<g;_+=3){const I=_,R=_+1,D=_+2;a=cl(this,f,e,r,m,v,S,I,R,D),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function e0(o,e,n,r,a,u,f,d){let p;if(e.side===wn?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===vr,d),p===null)return null;ul.copy(d),ul.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(ul);return m<n.near||m>n.far?null:{distance:m,point:ul.clone(),object:o}}function cl(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,Cs),o.getVertexPosition(p,Rs),o.getVertexPosition(m,Ps);const v=e0(o,e,n,r,Cs,Rs,Ps,ll);if(v){a&&(sl.fromBufferAttribute(a,d),ol.fromBufferAttribute(a,p),al.fromBufferAttribute(a,m),v.uv=di.getInterpolation(ll,Cs,Rs,Ps,sl,ol,al,new rt)),u&&(sl.fromBufferAttribute(u,d),ol.fromBufferAttribute(u,p),al.fromBufferAttribute(u,m),v.uv1=di.getInterpolation(ll,Cs,Rs,Ps,sl,ol,al,new rt)),f&&(Bp.fromBufferAttribute(f,d),Hp.fromBufferAttribute(f,p),Vp.fromBufferAttribute(f,m),v.normal=di.getInterpolation(ll,Cs,Rs,Ps,Bp,Hp,Vp,new ne),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new ne,materialIndex:0};di.getNormal(Cs,Rs,Ps,S.normal),v.face=S}return v}class Bo extends Oi{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],S=[];let x=0,y=0;w("z","y","x",-1,-1,r,n,e,f,u,0),w("z","y","x",1,-1,r,n,-e,f,u,1),w("x","z","y",1,1,e,r,n,a,f,2),w("x","z","y",1,-1,e,r,-n,a,f,3),w("x","y","z",1,-1,e,n,r,a,u,4),w("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Ui(m,3)),this.setAttribute("normal",new Ui(v,3)),this.setAttribute("uv",new Ui(S,2));function w(T,_,g,I,R,D,Q,z,F,K,P){const A=D/F,H=Q/K,ce=D/2,ie=Q/2,le=z/2,he=F+1,se=K+1;let ue=0,B=0;const de=new ne;for(let ae=0;ae<se;ae++){const N=ae*H-ie;for(let re=0;re<he;re++){const Ie=re*A-ce;de[T]=Ie*I,de[_]=N*R,de[g]=le,m.push(de.x,de.y,de.z),de[T]=0,de[_]=0,de[g]=z>0?1:-1,v.push(de.x,de.y,de.z),S.push(re/F),S.push(1-ae/K),ue+=1}}for(let ae=0;ae<K;ae++)for(let N=0;N<F;N++){const re=x+N+he*ae,Ie=x+N+he*(ae+1),$=x+(N+1)+he*(ae+1),fe=x+(N+1)+he*ae;p.push(re,Ie,fe),p.push(Ie,$,fe),B+=6}d.addGroup(y,B,P),y+=B,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hs(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function dn(o){const e={};for(let n=0;n<o.length;n++){const r=Hs(o[n]);for(const a in r)e[a]=r[a]}return e}function t0(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Wm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const n0={clone:Hs,merge:dn};var i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,r0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=r0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=t0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class Ll extends An{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Di}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new ne,Gp=new rt,Wp=new rt;class ni extends Ll{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lf*2*Math.atan(Math.tan(Mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,Gp,Wp),n.subVectors(Wp,Gp)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Mc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const bs=-90,Ls=1;class s0 extends An{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ni(bs,Ls,e,n);a.layers=this.layers,this.add(a);const u=new ni(bs,Ls,e,n);u.layers=this.layers,this.add(u);const f=new ni(bs,Ls,e,n);f.layers=this.layers,this.add(f);const d=new ni(bs,Ls,e,n);d.layers=this.layers,this.add(d);const p=new ni(bs,Ls,e,n);p.layers=this.layers,this.add(p);const m=new ni(bs,Ls,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Di)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Pl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(S,x,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Xm extends pn{constructor(e,n,r,a,u,f,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Os,super(e,n,r,a,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class o0 extends _r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Xm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:hn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Bo(5,5,5),u=new Fi({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:wn,blending:mr});u.uniforms.tEquirect.value=n;const f=new Xn(a,u),d=n.minFilter;return n.minFilter===Wr&&(n.minFilter=hn),new s0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Hc=new ne,a0=new ne,l0=new ut;class Br{constructor(e=new ne(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Hc.subVectors(r,n).cross(a0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Hc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||l0.getNormalMatrix(e),a=this.coplanarPoint(Hc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Fl,fl=new ne;class Ym{constructor(e=new Br,n=new Br,r=new Br,a=new Br,u=new Br,f=new Br){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Di){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],S=a[6],x=a[7],y=a[8],w=a[9],T=a[10],_=a[11],g=a[12],I=a[13],R=a[14],D=a[15];if(r[0].setComponents(p-u,x-m,_-y,D-g).normalize(),r[1].setComponents(p+u,x+m,_+y,D+g).normalize(),r[2].setComponents(p+f,x+v,_+w,D+I).normalize(),r[3].setComponents(p-f,x-v,_-w,D-I).normalize(),r[4].setComponents(p-d,x-S,_-T,D-R).normalize(),n===Di)r[5].setComponents(p+d,x+S,_+T,D+R).normalize();else if(n===Pl)r[5].setComponents(d,S,T,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(fl.x=a.normal.x>0?e.max.x:e.min.x,fl.y=a.normal.y>0?e.max.y:e.min.y,fl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qm(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function u0(o){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,S=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,v),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,p,m){const v=p.array,S=p._updateRange,x=p.updateRanges;if(o.bindBuffer(m,d),S.count===-1&&x.length===0&&o.bufferSubData(m,0,v),x.length!==0){for(let y=0,w=x.length;y<w;y++){const T=x[y];o.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}S.count!==-1&&(o.bufferSubData(m,S.offset*v.BYTES_PER_ELEMENT,v,S.offset,S.count),S.count=-1),p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Xr extends Oi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,S=e/d,x=n/p,y=[],w=[],T=[],_=[];for(let g=0;g<v;g++){const I=g*x-f;for(let R=0;R<m;R++){const D=R*S-u;w.push(D,-I,0),T.push(0,0,1),_.push(R/d),_.push(1-g/p)}}for(let g=0;g<p;g++)for(let I=0;I<d;I++){const R=I+m*g,D=I+m*(g+1),Q=I+1+m*(g+1),z=I+1+m*g;y.push(R,D,z),y.push(D,Q,z)}this.setIndex(y),this.setAttribute("position",new Ui(w,3)),this.setAttribute("normal",new Ui(T,3)),this.setAttribute("uv",new Ui(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.widthSegments,e.heightSegments)}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,f0=`#ifdef USE_ALPHAHASH
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
#endif`,d0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
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
#endif`,v0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_0=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,x0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,S0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,y0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,E0=`#ifdef USE_IRIDESCENCE
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
#endif`,T0=`#ifdef USE_BUMPMAP
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
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,b0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,U0=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,I0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N0=`vec3 transformedNormal = objectNormal;
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
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V0=`#ifdef USE_ENVMAP
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
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,W0=`#ifdef USE_ENVMAP
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
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
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
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
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
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
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
#endif`,nx=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,lx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ux=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xx=`#if defined( USE_POINTS_UV )
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
#endif`,Sx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ex=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dx=`#ifdef USE_NORMALMAP
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
#endif`,Ux=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ix=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ox=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jx=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,Jx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cS=`uniform sampler2D t2D;
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
}`,fS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
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
}`,gS=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vS=`#define DISTANCE
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
}`,_S=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
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
	gl_FragColor = packDepthToRGBA( dist );
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,SS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`uniform float scale;
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
}`,MS=`uniform vec3 diffuse;
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
}`,ES=`#include <common>
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
}`,TS=`uniform vec3 diffuse;
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
}`,wS=`#define LAMBERT
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
}`,AS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,CS=`#define MATCAP
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
}`,RS=`#define MATCAP
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
}`,PS=`#define NORMAL
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
}`,bS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LS=`#define PHONG
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
}`,DS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,US=`#define STANDARD
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
}`,IS=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,NS=`#define TOON
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
}`,FS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,OS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,zS=`#include <common>
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
}`,BS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,HS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,VS=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:c0,alphahash_pars_fragment:f0,alphamap_fragment:d0,alphamap_pars_fragment:h0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:v0,batching_pars_vertex:_0,batching_vertex:x0,begin_vertex:S0,beginnormal_vertex:y0,bsdfs:M0,iridescence_fragment:E0,bumpmap_pars_fragment:T0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:R0,color_fragment:P0,color_pars_fragment:b0,color_pars_vertex:L0,color_vertex:D0,common:U0,cube_uv_reflection_fragment:I0,defaultnormal_vertex:N0,displacementmap_pars_vertex:F0,displacementmap_vertex:O0,emissivemap_fragment:k0,emissivemap_pars_fragment:z0,colorspace_fragment:B0,colorspace_pars_fragment:H0,envmap_fragment:V0,envmap_common_pars_fragment:G0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:nx,envmap_vertex:Y0,fog_vertex:q0,fog_pars_vertex:j0,fog_fragment:K0,fog_pars_fragment:$0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:Q0,lights_lambert_fragment:J0,lights_lambert_pars_fragment:ex,lights_pars_begin:tx,lights_toon_fragment:ix,lights_toon_pars_fragment:rx,lights_phong_fragment:sx,lights_phong_pars_fragment:ox,lights_physical_fragment:ax,lights_physical_pars_fragment:lx,lights_fragment_begin:ux,lights_fragment_maps:cx,lights_fragment_end:fx,logdepthbuf_fragment:dx,logdepthbuf_pars_fragment:hx,logdepthbuf_pars_vertex:px,logdepthbuf_vertex:mx,map_fragment:gx,map_pars_fragment:vx,map_particle_fragment:_x,map_particle_pars_fragment:xx,metalnessmap_fragment:Sx,metalnessmap_pars_fragment:yx,morphinstance_vertex:Mx,morphcolor_vertex:Ex,morphnormal_vertex:Tx,morphtarget_pars_vertex:wx,morphtarget_vertex:Ax,normal_fragment_begin:Cx,normal_fragment_maps:Rx,normal_pars_fragment:Px,normal_pars_vertex:bx,normal_vertex:Lx,normalmap_pars_fragment:Dx,clearcoat_normal_fragment_begin:Ux,clearcoat_normal_fragment_maps:Ix,clearcoat_pars_fragment:Nx,iridescence_pars_fragment:Fx,opaque_fragment:Ox,packing:kx,premultiplied_alpha_fragment:zx,project_vertex:Bx,dithering_fragment:Hx,dithering_pars_fragment:Vx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:Yx,shadowmap_vertex:qx,shadowmask_pars_fragment:jx,skinbase_vertex:Kx,skinning_pars_vertex:$x,skinning_vertex:Zx,skinnormal_vertex:Qx,specularmap_fragment:Jx,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:rS,uv_pars_fragment:sS,uv_pars_vertex:oS,uv_vertex:aS,worldpos_vertex:lS,background_vert:uS,background_frag:cS,backgroundCube_vert:fS,backgroundCube_frag:dS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distanceRGBA_vert:vS,distanceRGBA_frag:_S,equirect_vert:xS,equirect_frag:SS,linedashed_vert:yS,linedashed_frag:MS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:wS,meshlambert_frag:AS,meshmatcap_vert:CS,meshmatcap_frag:RS,meshnormal_vert:PS,meshnormal_frag:bS,meshphong_vert:LS,meshphong_frag:DS,meshphysical_vert:US,meshphysical_frag:IS,meshtoon_vert:NS,meshtoon_frag:FS,points_vert:OS,points_frag:kS,shadow_vert:zS,shadow_frag:BS,sprite_vert:HS,sprite_frag:VS},De={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},fi={basic:{uniforms:dn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:dn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:dn([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:dn([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:dn([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new xt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:dn([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:dn([De.points,De.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:dn([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:dn([De.common,De.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:dn([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:dn([De.sprite,De.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:dn([De.common,De.displacementmap,{referencePosition:{value:new ne},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:dn([De.lights,De.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};fi.physical={uniforms:dn([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const dl={r:0,b:0,g:0},kr=new Ni,GS=new Gt;function WS(o,e,n,r,a,u,f){const d=new xt(0);let p=u===!0?0:1,m,v,S=null,x=0,y=null;function w(I){let R=I.isScene===!0?I.background:null;return R&&R.isTexture&&(R=(I.backgroundBlurriness>0?n:e).get(R)),R}function T(I){let R=!1;const D=w(I);D===null?g(d,p):D&&D.isColor&&(g(D,1),R=!0);const Q=o.xr.getEnvironmentBlendMode();Q==="additive"?r.buffers.color.setClear(0,0,0,1,f):Q==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function _(I,R){const D=w(R);D&&(D.isCubeTexture||D.mapping===Il)?(v===void 0&&(v=new Xn(new Bo(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Hs(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(Q,z,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),kr.copy(R.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.material.uniforms.envMap.value=D,v.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(kr)),v.material.toneMapped=St.getTransfer(D.colorSpace)!==Dt,(S!==D||x!==D.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,S=D,x=D.version,y=o.toneMapping),v.layers.enableAll(),I.unshift(v,v.geometry,v.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Xn(new Xr(2,2),new Fi({name:"BackgroundMaterial",uniforms:Hs(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=St.getTransfer(D.colorSpace)!==Dt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(S!==D||x!==D.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,S=D,x=D.version,y=o.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function g(I,R){I.getRGB(dl,Wm(o)),r.buffers.color.setClear(dl.r,dl.g,dl.b,R,f)}return{getClearColor:function(){return d},setClearColor:function(I,R=1){d.set(I),p=R,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,g(d,p)},render:T,addToRenderList:_}}function XS(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(A,H,ce,ie,le){let he=!1;const se=S(ie,ce,H);u!==se&&(u=se,m(u.object)),he=y(A,ie,ce,le),he&&w(A,ie,ce,le),le!==null&&e.update(le,o.ELEMENT_ARRAY_BUFFER),(he||f)&&(f=!1,D(A,H,ce,ie),le!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(le).buffer))}function p(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function v(A){return o.deleteVertexArray(A)}function S(A,H,ce){const ie=ce.wireframe===!0;let le=r[A.id];le===void 0&&(le={},r[A.id]=le);let he=le[H.id];he===void 0&&(he={},le[H.id]=he);let se=he[ie];return se===void 0&&(se=x(p()),he[ie]=se),se}function x(A){const H=[],ce=[],ie=[];for(let le=0;le<n;le++)H[le]=0,ce[le]=0,ie[le]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ce,attributeDivisors:ie,object:A,attributes:{},index:null}}function y(A,H,ce,ie){const le=u.attributes,he=H.attributes;let se=0;const ue=ce.getAttributes();for(const B in ue)if(ue[B].location>=0){const ae=le[B];let N=he[B];if(N===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(N=A.instanceColor)),ae===void 0||ae.attribute!==N||N&&ae.data!==N.data)return!0;se++}return u.attributesNum!==se||u.index!==ie}function w(A,H,ce,ie){const le={},he=H.attributes;let se=0;const ue=ce.getAttributes();for(const B in ue)if(ue[B].location>=0){let ae=he[B];ae===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(ae=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(ae=A.instanceColor));const N={};N.attribute=ae,ae&&ae.data&&(N.data=ae.data),le[B]=N,se++}u.attributes=le,u.attributesNum=se,u.index=ie}function T(){const A=u.newAttributes;for(let H=0,ce=A.length;H<ce;H++)A[H]=0}function _(A){g(A,0)}function g(A,H){const ce=u.newAttributes,ie=u.enabledAttributes,le=u.attributeDivisors;ce[A]=1,ie[A]===0&&(o.enableVertexAttribArray(A),ie[A]=1),le[A]!==H&&(o.vertexAttribDivisor(A,H),le[A]=H)}function I(){const A=u.newAttributes,H=u.enabledAttributes;for(let ce=0,ie=H.length;ce<ie;ce++)H[ce]!==A[ce]&&(o.disableVertexAttribArray(ce),H[ce]=0)}function R(A,H,ce,ie,le,he,se){se===!0?o.vertexAttribIPointer(A,H,ce,le,he):o.vertexAttribPointer(A,H,ce,ie,le,he)}function D(A,H,ce,ie){T();const le=ie.attributes,he=ce.getAttributes(),se=H.defaultAttributeValues;for(const ue in he){const B=he[ue];if(B.location>=0){let de=le[ue];if(de===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(de=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(de=A.instanceColor)),de!==void 0){const ae=de.normalized,N=de.itemSize,re=e.get(de);if(re===void 0)continue;const Ie=re.buffer,$=re.type,fe=re.bytesPerElement,ye=$===o.INT||$===o.UNSIGNED_INT||de.gpuType===Nf;if(de.isInterleavedBufferAttribute){const Ee=de.data,Pe=Ee.stride,Fe=de.offset;if(Ee.isInstancedInterleavedBuffer){for(let je=0;je<B.locationSize;je++)g(B.location+je,Ee.meshPerAttribute);A.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let je=0;je<B.locationSize;je++)_(B.location+je);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let je=0;je<B.locationSize;je++)R(B.location+je,N/B.locationSize,$,ae,Pe*fe,(Fe+N/B.locationSize*je)*fe,ye)}else{if(de.isInstancedBufferAttribute){for(let Ee=0;Ee<B.locationSize;Ee++)g(B.location+Ee,de.meshPerAttribute);A.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ee=0;Ee<B.locationSize;Ee++)_(B.location+Ee);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let Ee=0;Ee<B.locationSize;Ee++)R(B.location+Ee,N/B.locationSize,$,ae,N*fe,N/B.locationSize*Ee*fe,ye)}}else if(se!==void 0){const ae=se[ue];if(ae!==void 0)switch(ae.length){case 2:o.vertexAttrib2fv(B.location,ae);break;case 3:o.vertexAttrib3fv(B.location,ae);break;case 4:o.vertexAttrib4fv(B.location,ae);break;default:o.vertexAttrib1fv(B.location,ae)}}}}I()}function Q(){K();for(const A in r){const H=r[A];for(const ce in H){const ie=H[ce];for(const le in ie)v(ie[le].object),delete ie[le];delete H[ce]}delete r[A]}}function z(A){if(r[A.id]===void 0)return;const H=r[A.id];for(const ce in H){const ie=H[ce];for(const le in ie)v(ie[le].object),delete ie[le];delete H[ce]}delete r[A.id]}function F(A){for(const H in r){const ce=r[H];if(ce[A.id]===void 0)continue;const ie=ce[A.id];for(const le in ie)v(ie[le].object),delete ie[le];delete ce[A.id]}}function K(){P(),f=!0,u!==a&&(u=a,m(u.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:K,resetDefaultState:P,dispose:Q,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:_,disableUnusedAttributes:I}}function YS(o,e,n){let r;function a(m){r=m}function u(m,v){o.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,S){S!==0&&(o.drawArraysInstanced(r,m,v,S),n.update(v,r,S))}function d(m,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,S);let y=0;for(let w=0;w<S;w++)y+=v[w];n.update(y,r,1)}function p(m,v,S,x){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let w=0;w<m.length;w++)f(m[w],v[w],x[w]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,S);let w=0;for(let T=0;T<S;T++)w+=v[T];for(let T=0;T<x.length;T++)n.update(w,r,x[T])}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function qS(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(z){return!(z!==Wn&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const F=z===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ii&&r.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==hi&&!F)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const S=n.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),g=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),I=o.getParameter(o.MAX_VARYING_VECTORS),R=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=y>0,Q=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,maxTextures:x,maxVertexTextures:y,maxTextureSize:w,maxCubemapSize:T,maxAttributes:_,maxVertexUniforms:g,maxVaryings:I,maxFragmentUniforms:R,vertexTextures:D,maxSamples:Q}}function jS(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Br,d=new ut,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const y=S.length!==0||x||r!==0||a;return a=x,r=S.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,x){n=v(S,x,0)},this.setState=function(S,x,y){const w=S.clippingPlanes,T=S.clipIntersection,_=S.clipShadows,g=o.get(S);if(!a||w===null||w.length===0||u&&!_)u?v(null):m();else{const I=u?0:r,R=I*4;let D=g.clippingState||null;p.value=D,D=v(w,x,R,y);for(let Q=0;Q!==R;++Q)D[Q]=n[Q];g.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,y,w){const T=S!==null?S.length:0;let _=null;if(T!==0){if(_=p.value,w!==!0||_===null){const g=y+T*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(_===null||_.length<g)&&(_=new Float32Array(g));for(let R=0,D=y;R!==T;++R,D+=4)f.copy(S[R]).applyMatrix4(I,d),f.normal.toArray(_,D),_[D+3]=f.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function KS(o){let e=new WeakMap;function n(f,d){return d===ef?f.mapping=Os:d===tf&&(f.mapping=ks),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===ef||d===tf)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new o0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class $S extends Ll{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Us=4,Xp=[.125,.215,.35,.446,.526,.582],Gr=20,Vc=new $S,Yp=new xt;let Gc=null,Wc=0,Xc=0,Yc=!1;const Hr=(1+Math.sqrt(5))/2,Ds=1/Hr,qp=[new ne(-Hr,Ds,0),new ne(Hr,Ds,0),new ne(-Ds,0,Hr),new ne(Ds,0,Hr),new ne(0,Hr,-Ds),new ne(0,Hr,Ds),new ne(-1,1,-1),new ne(1,1,-1),new ne(-1,1,1),new ne(1,1,1)];class jp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gc,Wc,Xc),this._renderer.xr.enabled=Yc,e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Os||e.mapping===ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gc=this._renderer.getRenderTarget(),Wc=this._renderer.getActiveCubeFace(),Xc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:Vs,format:Wn,colorSpace:xr,depthBuffer:!1},a=Kp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ZS(u)),this._blurMaterial=QS(u,e,n)}return a}_compileMaterial(e){const n=new Xn(this._lodPlanes[0],e);this._renderer.compile(n,Vc)}_sceneToCubeUV(e,n,r,a){const d=new ni(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,x=v.toneMapping;v.getClearColor(Yp),v.toneMapping=gr,v.autoClear=!1;const y=new Hm({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),w=new Xn(new Bo,y);let T=!1;const _=e.background;_?_.isColor&&(y.color.copy(_),e.background=null,T=!0):(y.color.copy(Yp),T=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):I===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const R=this._cubeSize;hl(a,I*R,g>2?R:0,R,R),v.setRenderTarget(a),T&&v.render(w,d),v.render(e,d)}w.geometry.dispose(),w.material.dispose(),v.toneMapping=x,v.autoClear=S,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Os||e.mapping===ks;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$p());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Xn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;hl(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,Vc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=qp[(a-u-1)%qp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new Xn(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Gr-1),T=u/w,_=isFinite(u)?1+Math.floor(v*T):Gr;_>Gr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Gr}`);const g=[];let I=0;for(let F=0;F<Gr;++F){const K=F/T,P=Math.exp(-K*K/2);g.push(P),F===0?I+=P:F<_&&(I+=2*P)}for(let F=0;F<g.length;F++)g[F]=g[F]/I;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:R}=this;x.dTheta.value=w,x.mipInt.value=R-r;const D=this._sizeLods[a],Q=3*D*(a>R-Us?a-R+Us:0),z=4*(this._cubeSize-D);hl(n,Q,z,3*D,2*D),p.setRenderTarget(n),p.render(S,Vc)}}function ZS(o){const e=[],n=[],r=[];let a=o;const u=o-Us+1+Xp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Us?p=Xp[f-o+Us-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,S=1+m,x=[v,v,S,v,S,S,v,v,S,S,v,S],y=6,w=6,T=3,_=2,g=1,I=new Float32Array(T*w*y),R=new Float32Array(_*w*y),D=new Float32Array(g*w*y);for(let z=0;z<y;z++){const F=z%3*2/3-1,K=z>2?0:-1,P=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];I.set(P,T*w*z),R.set(x,_*w*z);const A=[z,z,z,z,z,z];D.set(A,g*w*z)}const Q=new Oi;Q.setAttribute("position",new ri(I,T)),Q.setAttribute("uv",new ri(R,_)),Q.setAttribute("faceIndex",new ri(D,g)),e.push(Q),a>Us&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Kp(o,e,n){const r=new _r(o,e,n);return r.texture.mapping=Il,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function hl(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function QS(o,e,n){const r=new Float32Array(Gr),a=new ne(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function $p(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vf(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Zp(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Vf(){return`

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
	`}function JS(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===ef||p===tf,v=p===Os||p===ks;if(m||v){let S=e.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new jp(o)),S=m?n.fromEquirectangular(d,S):n.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const y=d.image;return m&&y&&y.height>0||v&&y&&a(y)?(n===null&&(n=new jp(o)),S=m?n.fromEquirectangular(d):n.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",u),S.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function ey(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Io("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function ty(o,e,n,r){const a={},u=new WeakMap;function f(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);for(const w in x.morphAttributes){const T=x.morphAttributes[w];for(let _=0,g=T.length;_<g;_++)e.remove(T[_])}x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(S,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(S){const x=S.attributes;for(const w in x)e.update(x[w],o.ARRAY_BUFFER);const y=S.morphAttributes;for(const w in y){const T=y[w];for(let _=0,g=T.length;_<g;_++)e.update(T[_],o.ARRAY_BUFFER)}}function m(S){const x=[],y=S.index,w=S.attributes.position;let T=0;if(y!==null){const I=y.array;T=y.version;for(let R=0,D=I.length;R<D;R+=3){const Q=I[R+0],z=I[R+1],F=I[R+2];x.push(Q,z,z,F,F,Q)}}else if(w!==void 0){const I=w.array;T=w.version;for(let R=0,D=I.length/3-1;R<D;R+=3){const Q=R+0,z=R+1,F=R+2;x.push(Q,z,z,F,F,Q)}}else return;const _=new(Nm(x)?Gm:Vm)(x,1);_.version=T;const g=u.get(S);g&&e.remove(g),u.set(S,_)}function v(S){const x=u.get(S);if(x){const y=S.index;y!==null&&x.version<y.version&&m(S)}else m(S);return u.get(S)}return{get:d,update:p,getWireframeAttribute:v}}function ny(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){o.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,w){w!==0&&(o.drawElementsInstanced(r,y,u,x*f,w),n.update(y,r,w))}function v(x,y,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,w);let _=0;for(let g=0;g<w;g++)_+=y[g];n.update(_,r,1)}function S(x,y,w,T){if(w===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<x.length;g++)m(x[g]/f,y[g],T[g]);else{_.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,T,0,w);let g=0;for(let I=0;I<w;I++)g+=y[I];for(let I=0;I<T.length;I++)n.update(g,r,T[I])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function iy(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function ry(o,e,n){const r=new WeakMap,a=new Yt;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==S){let A=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var y=A;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let D=0;w===!0&&(D=1),T===!0&&(D=2),_===!0&&(D=3);let Q=d.attributes.position.count*D,z=1;Q>e.maxTextureSize&&(z=Math.ceil(Q/e.maxTextureSize),Q=e.maxTextureSize);const F=new Float32Array(Q*z*4*S),K=new Om(F,Q,z,S);K.type=hi,K.needsUpdate=!0;const P=D*4;for(let H=0;H<S;H++){const ce=g[H],ie=I[H],le=R[H],he=Q*z*4*H;for(let se=0;se<ce.count;se++){const ue=se*P;w===!0&&(a.fromBufferAttribute(ce,se),F[he+ue+0]=a.x,F[he+ue+1]=a.y,F[he+ue+2]=a.z,F[he+ue+3]=0),T===!0&&(a.fromBufferAttribute(ie,se),F[he+ue+4]=a.x,F[he+ue+5]=a.y,F[he+ue+6]=a.z,F[he+ue+7]=0),_===!0&&(a.fromBufferAttribute(le,se),F[he+ue+8]=a.x,F[he+ue+9]=a.y,F[he+ue+10]=a.z,F[he+ue+11]=le.itemSize===4?a.w:1)}}x={count:S,texture:K,size:new rt(Q,z)},r.set(d,x),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let w=0;for(let _=0;_<m.length;_++)w+=m[_];const T=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function sy(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,S=e.get(p,v);if(a.get(S)!==m&&(e.update(S),a.set(S,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return S}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class jm extends pn{constructor(e,n,r,a,u,f,d,p,m,v=Ns){if(v!==Ns&&v!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ns&&(r=Yr),r===void 0&&v===Bs&&(r=zs),super(null,a,u,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:Tn,this.minFilter=p!==void 0?p:Tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Km=new pn,Qp=new jm(1,1),$m=new Om,Zm=new W_,Qm=new Xm,Jp=[],em=[],tm=new Float32Array(16),nm=new Float32Array(9),im=new Float32Array(4);function Ws(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=Jp[a];if(u===void 0&&(u=new Float32Array(a),Jp[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function qt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function jt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Ol(o,e){let n=em[e];n===void 0&&(n=new Int32Array(e),em[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function oy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function ay(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;o.uniform2fv(this.addr,e),jt(n,e)}}function ly(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;o.uniform3fv(this.addr,e),jt(n,e)}}function uy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;o.uniform4fv(this.addr,e),jt(n,e)}}function cy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,r))return;im.set(r),o.uniformMatrix2fv(this.addr,!1,im),jt(n,r)}}function fy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,r))return;nm.set(r),o.uniformMatrix3fv(this.addr,!1,nm),jt(n,r)}}function dy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(qt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,r))return;tm.set(r),o.uniformMatrix4fv(this.addr,!1,tm),jt(n,r)}}function hy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function py(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;o.uniform2iv(this.addr,e),jt(n,e)}}function my(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;o.uniform3iv(this.addr,e),jt(n,e)}}function gy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;o.uniform4iv(this.addr,e),jt(n,e)}}function vy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function _y(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;o.uniform2uiv(this.addr,e),jt(n,e)}}function xy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;o.uniform3uiv(this.addr,e),jt(n,e)}}function Sy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;o.uniform4uiv(this.addr,e),jt(n,e)}}function yy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);let u;this.type===o.SAMPLER_2D_SHADOW?(Qp.compareFunction=Im,u=Qp):u=Km,n.setTexture2D(e||u,a)}function My(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||Zm,a)}function Ey(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||Qm,a)}function Ty(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||$m,a)}function wy(o){switch(o){case 5126:return oy;case 35664:return ay;case 35665:return ly;case 35666:return uy;case 35674:return cy;case 35675:return fy;case 35676:return dy;case 5124:case 35670:return hy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return gy;case 5125:return vy;case 36294:return _y;case 36295:return xy;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ty}}function Ay(o,e){o.uniform1fv(this.addr,e)}function Cy(o,e){const n=Ws(e,this.size,2);o.uniform2fv(this.addr,n)}function Ry(o,e){const n=Ws(e,this.size,3);o.uniform3fv(this.addr,n)}function Py(o,e){const n=Ws(e,this.size,4);o.uniform4fv(this.addr,n)}function by(o,e){const n=Ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Ly(o,e){const n=Ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Dy(o,e){const n=Ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Uy(o,e){o.uniform1iv(this.addr,e)}function Iy(o,e){o.uniform2iv(this.addr,e)}function Ny(o,e){o.uniform3iv(this.addr,e)}function Fy(o,e){o.uniform4iv(this.addr,e)}function Oy(o,e){o.uniform1uiv(this.addr,e)}function ky(o,e){o.uniform2uiv(this.addr,e)}function zy(o,e){o.uniform3uiv(this.addr,e)}function By(o,e){o.uniform4uiv(this.addr,e)}function Hy(o,e,n){const r=this.cache,a=e.length,u=Ol(n,a);qt(r,u)||(o.uniform1iv(this.addr,u),jt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Km,u[f])}function Vy(o,e,n){const r=this.cache,a=e.length,u=Ol(n,a);qt(r,u)||(o.uniform1iv(this.addr,u),jt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||Zm,u[f])}function Gy(o,e,n){const r=this.cache,a=e.length,u=Ol(n,a);qt(r,u)||(o.uniform1iv(this.addr,u),jt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||Qm,u[f])}function Wy(o,e,n){const r=this.cache,a=e.length,u=Ol(n,a);qt(r,u)||(o.uniform1iv(this.addr,u),jt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||$m,u[f])}function Xy(o){switch(o){case 5126:return Ay;case 35664:return Cy;case 35665:return Ry;case 35666:return Py;case 35674:return by;case 35675:return Ly;case 35676:return Dy;case 5124:case 35670:return Uy;case 35667:case 35671:return Iy;case 35668:case 35672:return Ny;case 35669:case 35673:return Fy;case 5125:return Oy;case 36294:return ky;case 36295:return zy;case 36296:return By;case 35678:case 36198:case 36298:case 36306:case 35682:return Hy;case 35679:case 36299:case 36307:return Vy;case 35680:case 36300:case 36308:case 36293:return Gy;case 36289:case 36303:case 36311:case 36292:return Wy}}class Yy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=wy(n.type)}}class qy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Xy(n.type)}}class jy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const qc=/(\w+)(\])?(\[|\.)?/g;function rm(o,e){o.seq.push(e),o.map[e.id]=e}function Ky(o,e,n){const r=o.name,a=r.length;for(qc.lastIndex=0;;){const u=qc.exec(r),f=qc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){rm(n,m===void 0?new Yy(d,o,e):new qy(d,o,e));break}else{let S=n.map[d];S===void 0&&(S=new jy(d),rm(n,S)),n=S}}}class Tl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);Ky(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function sm(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const $y=37297;let Zy=0;function Qy(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function Jy(o){const e=St.getPrimaries(St.workingColorSpace),n=St.getPrimaries(o);let r;switch(e===n?r="":e===Rl&&n===Cl?r="LinearDisplayP3ToLinearSRGB":e===Cl&&n===Rl&&(r="LinearSRGBToLinearDisplayP3"),o){case xr:case Nl:return[r,"LinearTransferOETF"];case ci:case Hf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function om(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+Qy(o.getShaderSource(e),f)}else return a}function eM(o,e){const n=Jy(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function tM(o,e){let n;switch(e){case v_:n="Linear";break;case __:n="Reinhard";break;case x_:n="Cineon";break;case S_:n="ACESFilmic";break;case M_:n="AgX";break;case E_:n="Neutral";break;case y_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const pl=new ne;function nM(){St.getLuminanceCoefficients(pl);const o=pl.x.toFixed(4),e=pl.y.toFixed(4),n=pl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iM(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function rM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function sM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Uo(o){return o!==""}function am(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lm(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const oM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Df(o){return o.replace(oM,lM)}const aM=new Map;function lM(o,e){let n=lt[e];if(n===void 0){const r=aM.get(e);if(r!==void 0)n=lt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Df(n)}const uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function um(o){return o.replace(uM,cM)}function cM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function cm(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ym?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Gv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function dM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Os:case ks:e="ENVMAP_TYPE_CUBE";break;case Il:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ks:e="ENVMAP_MODE_REFRACTION";break}return e}function pM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Mm:e="ENVMAP_BLENDING_MULTIPLY";break;case m_:e="ENVMAP_BLENDING_MIX";break;case g_:e="ENVMAP_BLENDING_ADD";break}return e}function mM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function gM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=fM(n),m=dM(n),v=hM(n),S=pM(n),x=mM(n),y=iM(n),w=rM(u),T=a.createProgram();let _,g,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Uo).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Uo).join(`
`),g.length>0&&(g+=`
`)):(_=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),g=[cm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==gr?"#define TONE_MAPPING":"",n.toneMapping!==gr?lt.tonemapping_pars_fragment:"",n.toneMapping!==gr?tM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,eM("linearToOutputTexel",n.outputColorSpace),nM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Uo).join(`
`)),f=Df(f),f=am(f,n),f=lm(f,n),d=Df(d),d=am(d,n),d=lm(d,n),f=um(f),d=um(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",n.glslVersion===wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const R=I+_+f,D=I+g+d,Q=sm(a,a.VERTEX_SHADER,R),z=sm(a,a.FRAGMENT_SHADER,D);a.attachShader(T,Q),a.attachShader(T,z),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(H){if(o.debug.checkShaderErrors){const ce=a.getProgramInfoLog(T).trim(),ie=a.getShaderInfoLog(Q).trim(),le=a.getShaderInfoLog(z).trim();let he=!0,se=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(he=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,T,Q,z);else{const ue=om(a,Q,"vertex"),B=om(a,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ce+`
`+ue+`
`+B)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(ie===""||le==="")&&(se=!1);se&&(H.diagnostics={runnable:he,programLog:ce,vertexShader:{log:ie,prefix:_},fragmentShader:{log:le,prefix:g}})}a.deleteShader(Q),a.deleteShader(z),K=new Tl(a,T),P=sM(a,T)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(T,$y)),A},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Zy++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=Q,this.fragmentShader=z,this}let vM=0;class _M{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new xM(e),n.set(e,r)),r}}class xM{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}}function SM(o,e,n,r,a,u,f){const d=new zm,p=new _M,m=new Set,v=[],S=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(P){return m.add(P),P===0?"uv":`uv${P}`}function _(P,A,H,ce,ie){const le=ce.fog,he=ie.geometry,se=P.isMeshStandardMaterial?ce.environment:null,ue=(P.isMeshStandardMaterial?n:e).get(P.envMap||se),B=ue&&ue.mapping===Il?ue.image.height:null,de=w[P.type];P.precision!==null&&(y=a.getMaxPrecision(P.precision),y!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",y,"instead."));const ae=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=ae!==void 0?ae.length:0;let re=0;he.morphAttributes.position!==void 0&&(re=1),he.morphAttributes.normal!==void 0&&(re=2),he.morphAttributes.color!==void 0&&(re=3);let Ie,$,fe,ye;if(de){const mt=fi[de];Ie=mt.vertexShader,$=mt.fragmentShader}else Ie=P.vertexShader,$=P.fragmentShader,p.update(P),fe=p.getVertexShaderID(P),ye=p.getFragmentShaderID(P);const Ee=o.getRenderTarget(),Pe=ie.isInstancedMesh===!0,Fe=ie.isBatchedMesh===!0,je=!!P.map,yt=!!P.matcap,O=!!ue,Tt=!!P.aoMap,dt=!!P.lightMap,pt=!!P.bumpMap,We=!!P.normalMap,At=!!P.displacementMap,qe=!!P.emissiveMap,Je=!!P.metalnessMap,U=!!P.roughnessMap,E=P.anisotropy>0,te=P.clearcoat>0,oe=P.dispersion>0,b=P.iridescence>0,Y=P.sheen>0,ve=P.transmission>0,ge=E&&!!P.anisotropyMap,Te=te&&!!P.clearcoatMap,Ye=te&&!!P.clearcoatNormalMap,Me=te&&!!P.clearcoatRoughnessMap,Le=b&&!!P.iridescenceMap,at=b&&!!P.iridescenceThicknessMap,tt=Y&&!!P.sheenColorMap,Oe=Y&&!!P.sheenRoughnessMap,it=!!P.specularMap,st=!!P.specularColorMap,wt=!!P.specularIntensityMap,G=ve&&!!P.transmissionMap,Ae=ve&&!!P.thicknessMap,pe=!!P.gradientMap,me=!!P.alphaMap,Re=P.alphaTest>0,Ze=!!P.alphaHash,ft=!!P.extensions;let Nt=gr;P.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Nt=o.toneMapping);const Bt={shaderID:de,shaderType:P.type,shaderName:P.name,vertexShader:Ie,fragmentShader:$,defines:P.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:y,batching:Fe,batchingColor:Fe&&ie._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&ie.instanceColor!==null,instancingMorph:Pe&&ie.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ee===null?o.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:xr,alphaToCoverage:!!P.alphaToCoverage,map:je,matcap:yt,envMap:O,envMapMode:O&&ue.mapping,envMapCubeUVHeight:B,aoMap:Tt,lightMap:dt,bumpMap:pt,normalMap:We,displacementMap:x&&At,emissiveMap:qe,normalMapObjectSpace:We&&P.normalMapType===R_,normalMapTangentSpace:We&&P.normalMapType===C_,metalnessMap:Je,roughnessMap:U,anisotropy:E,anisotropyMap:ge,clearcoat:te,clearcoatMap:Te,clearcoatNormalMap:Ye,clearcoatRoughnessMap:Me,dispersion:oe,iridescence:b,iridescenceMap:Le,iridescenceThicknessMap:at,sheen:Y,sheenColorMap:tt,sheenRoughnessMap:Oe,specularMap:it,specularColorMap:st,specularIntensityMap:wt,transmission:ve,transmissionMap:G,thicknessMap:Ae,gradientMap:pe,opaque:P.transparent===!1&&P.blending===Is&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:Re,alphaHash:Ze,combine:P.combine,mapUv:je&&T(P.map.channel),aoMapUv:Tt&&T(P.aoMap.channel),lightMapUv:dt&&T(P.lightMap.channel),bumpMapUv:pt&&T(P.bumpMap.channel),normalMapUv:We&&T(P.normalMap.channel),displacementMapUv:At&&T(P.displacementMap.channel),emissiveMapUv:qe&&T(P.emissiveMap.channel),metalnessMapUv:Je&&T(P.metalnessMap.channel),roughnessMapUv:U&&T(P.roughnessMap.channel),anisotropyMapUv:ge&&T(P.anisotropyMap.channel),clearcoatMapUv:Te&&T(P.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&T(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&T(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&T(P.iridescenceMap.channel),iridescenceThicknessMapUv:at&&T(P.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&T(P.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&T(P.sheenRoughnessMap.channel),specularMapUv:it&&T(P.specularMap.channel),specularColorMapUv:st&&T(P.specularColorMap.channel),specularIntensityMapUv:wt&&T(P.specularIntensityMap.channel),transmissionMapUv:G&&T(P.transmissionMap.channel),thicknessMapUv:Ae&&T(P.thicknessMap.channel),alphaMapUv:me&&T(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(We||E),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!he.attributes.uv&&(je||me),fog:!!le,useFog:P.fog===!0,fogExp2:!!le&&le.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:ie.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:re,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:P.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Nt,decodeVideoTexture:je&&P.map.isVideoTexture===!0&&St.getTransfer(P.map.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Li,flipSided:P.side===wn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ft&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&P.extensions.multiDraw===!0||Fe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Bt.vertexUv1s=m.has(1),Bt.vertexUv2s=m.has(2),Bt.vertexUv3s=m.has(3),m.clear(),Bt}function g(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)A.push(H),A.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(I(A,P),R(A,P),A.push(o.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function I(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function R(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.skinning&&d.enable(4),A.morphTargets&&d.enable(5),A.morphNormals&&d.enable(6),A.morphColors&&d.enable(7),A.premultipliedAlpha&&d.enable(8),A.shadowMapEnabled&&d.enable(9),A.doubleSided&&d.enable(10),A.flipSided&&d.enable(11),A.useDepthPacking&&d.enable(12),A.dithering&&d.enable(13),A.transmission&&d.enable(14),A.sheen&&d.enable(15),A.opaque&&d.enable(16),A.pointsUvs&&d.enable(17),A.decodeVideoTexture&&d.enable(18),A.alphaToCoverage&&d.enable(19),P.push(d.mask)}function D(P){const A=w[P.type];let H;if(A){const ce=fi[A];H=n0.clone(ce.uniforms)}else H=P.uniforms;return H}function Q(P,A){let H;for(let ce=0,ie=v.length;ce<ie;ce++){const le=v[ce];if(le.cacheKey===A){H=le,++H.usedTimes;break}}return H===void 0&&(H=new gM(o,A,P,u),v.push(H)),H}function z(P){if(--P.usedTimes===0){const A=v.indexOf(P);v[A]=v[v.length-1],v.pop(),P.destroy()}}function F(P){p.remove(P)}function K(){p.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:D,acquireProgram:Q,releaseProgram:z,releaseShaderCache:F,programs:v,dispose:K}}function yM(){let o=new WeakMap;function e(f){return o.has(f)}function n(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function r(f){o.delete(f)}function a(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function MM(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function fm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function dm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(S,x,y,w,T,_){let g=o[e];return g===void 0?(g={id:S.id,object:S,geometry:x,material:y,groupOrder:w,renderOrder:S.renderOrder,z:T,group:_},o[e]=g):(g.id=S.id,g.object=S,g.geometry=x,g.material=y,g.groupOrder=w,g.renderOrder=S.renderOrder,g.z=T,g.group=_),e++,g}function d(S,x,y,w,T,_){const g=f(S,x,y,w,T,_);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function p(S,x,y,w,T,_){const g=f(S,x,y,w,T,_);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(S,x){n.length>1&&n.sort(S||MM),r.length>1&&r.sort(x||fm),a.length>1&&a.sort(x||fm)}function v(){for(let S=e,x=o.length;S<x;S++){const y=o[S];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:v,sort:m}}function EM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new dm,o.set(r,[f])):a>=u.length?(f=new dm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function TM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ne,color:new xt};break;case"SpotLight":n={position:new ne,direction:new ne,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ne,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ne,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new ne,halfWidth:new ne,halfHeight:new ne};break}return o[e.id]=n,n}}}function wM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let AM=0;function CM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function RM(o){const e=new TM,n=wM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ne);const a=new ne,u=new Gt,f=new Gt;function d(m){let v=0,S=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let y=0,w=0,T=0,_=0,g=0,I=0,R=0,D=0,Q=0,z=0,F=0;m.sort(CM);for(let P=0,A=m.length;P<A;P++){const H=m[P],ce=H.color,ie=H.intensity,le=H.distance,he=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=ce.r*ie,S+=ce.g*ie,x+=ce.b*ie;else if(H.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(H.sh.coefficients[se],ie);F++}else if(H.isDirectionalLight){const se=e.get(H);if(se.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ue=H.shadow,B=n.get(H);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.directionalShadow[y]=B,r.directionalShadowMap[y]=he,r.directionalShadowMatrix[y]=H.shadow.matrix,I++}r.directional[y]=se,y++}else if(H.isSpotLight){const se=e.get(H);se.position.setFromMatrixPosition(H.matrixWorld),se.color.copy(ce).multiplyScalar(ie),se.distance=le,se.coneCos=Math.cos(H.angle),se.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),se.decay=H.decay,r.spot[T]=se;const ue=H.shadow;if(H.map&&(r.spotLightMap[Q]=H.map,Q++,ue.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[T]=ue.matrix,H.castShadow){const B=n.get(H);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.spotShadow[T]=B,r.spotShadowMap[T]=he,D++}T++}else if(H.isRectAreaLight){const se=e.get(H);se.color.copy(ce).multiplyScalar(ie),se.halfWidth.set(H.width*.5,0,0),se.halfHeight.set(0,H.height*.5,0),r.rectArea[_]=se,_++}else if(H.isPointLight){const se=e.get(H);if(se.color.copy(H.color).multiplyScalar(H.intensity),se.distance=H.distance,se.decay=H.decay,H.castShadow){const ue=H.shadow,B=n.get(H);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,B.shadowCameraNear=ue.camera.near,B.shadowCameraFar=ue.camera.far,r.pointShadow[w]=B,r.pointShadowMap[w]=he,r.pointShadowMatrix[w]=H.shadow.matrix,R++}r.point[w]=se,w++}else if(H.isHemisphereLight){const se=e.get(H);se.skyColor.copy(H.color).multiplyScalar(ie),se.groundColor.copy(H.groundColor).multiplyScalar(ie),r.hemi[g]=se,g++}}_>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=De.LTC_FLOAT_1,r.rectAreaLTC2=De.LTC_FLOAT_2):(r.rectAreaLTC1=De.LTC_HALF_1,r.rectAreaLTC2=De.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=x;const K=r.hash;(K.directionalLength!==y||K.pointLength!==w||K.spotLength!==T||K.rectAreaLength!==_||K.hemiLength!==g||K.numDirectionalShadows!==I||K.numPointShadows!==R||K.numSpotShadows!==D||K.numSpotMaps!==Q||K.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=T,r.rectArea.length=_,r.point.length=w,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=D+Q-z,r.spotLightMap.length=Q,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,K.directionalLength=y,K.pointLength=w,K.spotLength=T,K.rectAreaLength=_,K.hemiLength=g,K.numDirectionalShadows=I,K.numPointShadows=R,K.numSpotShadows=D,K.numSpotMaps=Q,K.numLightProbes=F,r.version=AM++)}function p(m,v){let S=0,x=0,y=0,w=0,T=0;const _=v.matrixWorldInverse;for(let g=0,I=m.length;g<I;g++){const R=m[g];if(R.isDirectionalLight){const D=r.directional[S];D.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(_),S++}else if(R.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(_),y++}else if(R.isRectAreaLight){const D=r.rectArea[w];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(_),f.identity(),u.copy(R.matrixWorld),u.premultiply(_),f.extractRotation(u),D.halfWidth.set(R.width*.5,0,0),D.halfHeight.set(0,R.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),w++}else if(R.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(R.matrixWorld),D.position.applyMatrix4(_),x++}else if(R.isHemisphereLight){const D=r.hemi[T];D.direction.setFromMatrixPosition(R.matrixWorld),D.direction.transformDirection(_),T++}}}return{setup:d,setupView:p,state:r}}function hm(o){const e=new RM(o),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(){e.setup(n)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function PM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new hm(o),e.set(a,[d])):u>=f.length?(d=new hm(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class bM extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=w_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LM extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function IM(o,e,n){let r=new Ym;const a=new rt,u=new rt,f=new Yt,d=new bM({depthPacking:A_}),p=new LM,m={},v=n.maxTextureSize,S={[vr]:wn,[wn]:vr,[Li]:Li},x=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:DM,fragmentShader:UM}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const w=new Oi;w.setAttribute("position",new ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Xn(w,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ym;let g=this.type;this.render=function(z,F,K){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||z.length===0)return;const P=o.getRenderTarget(),A=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),ce=o.state;ce.setBlending(mr),ce.buffers.color.setClear(1,1,1,1),ce.buffers.depth.setTest(!0),ce.setScissorTest(!1);const ie=g!==bi&&this.type===bi,le=g===bi&&this.type!==bi;for(let he=0,se=z.length;he<se;he++){const ue=z[he],B=ue.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;a.copy(B.mapSize);const de=B.getFrameExtents();if(a.multiply(de),u.copy(B.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/de.x),a.x=u.x*de.x,B.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/de.y),a.y=u.y*de.y,B.mapSize.y=u.y)),B.map===null||ie===!0||le===!0){const N=this.type!==bi?{minFilter:Tn,magFilter:Tn}:{};B.map!==null&&B.map.dispose(),B.map=new _r(a.x,a.y,N),B.map.texture.name=ue.name+".shadowMap",B.camera.updateProjectionMatrix()}o.setRenderTarget(B.map),o.clear();const ae=B.getViewportCount();for(let N=0;N<ae;N++){const re=B.getViewport(N);f.set(u.x*re.x,u.y*re.y,u.x*re.z,u.y*re.w),ce.viewport(f),B.updateMatrices(ue,N),r=B.getFrustum(),D(F,K,B.camera,ue,this.type)}B.isPointLightShadow!==!0&&this.type===bi&&I(B,K),B.needsUpdate=!1}g=this.type,_.needsUpdate=!1,o.setRenderTarget(P,A,H)};function I(z,F){const K=e.update(T);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new _r(a.x,a.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(F,null,K,x,T,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(F,null,K,y,T,null)}function R(z,F,K,P){let A=null;const H=K.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)A=H;else if(A=K.isPointLight===!0?p:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const ce=A.uuid,ie=F.uuid;let le=m[ce];le===void 0&&(le={},m[ce]=le);let he=le[ie];he===void 0&&(he=A.clone(),le[ie]=he,F.addEventListener("dispose",Q)),A=he}if(A.visible=F.visible,A.wireframe=F.wireframe,P===bi?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:S[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,K.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const ce=o.properties.get(A);ce.light=K}return A}function D(z,F,K,P,A){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===bi)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,z.matrixWorld);const ie=e.update(z),le=z.material;if(Array.isArray(le)){const he=ie.groups;for(let se=0,ue=he.length;se<ue;se++){const B=he[se],de=le[B.materialIndex];if(de&&de.visible){const ae=R(z,de,P,A);z.onBeforeShadow(o,z,F,K,ie,ae,B),o.renderBufferDirect(K,null,ie,ae,z,B),z.onAfterShadow(o,z,F,K,ie,ae,B)}}}else if(le.visible){const he=R(z,le,P,A);z.onBeforeShadow(o,z,F,K,ie,he,null),o.renderBufferDirect(K,null,ie,he,z,null),z.onAfterShadow(o,z,F,K,ie,he,null)}}const ce=z.children;for(let ie=0,le=ce.length;ie<le;ie++)D(ce[ie],F,K,P,A)}function Q(z){z.target.removeEventListener("dispose",Q);for(const K in m){const P=m[K],A=z.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function NM(o){function e(){let G=!1;const Ae=new Yt;let pe=null;const me=new Yt(0,0,0,0);return{setMask:function(Re){pe!==Re&&!G&&(o.colorMask(Re,Re,Re,Re),pe=Re)},setLocked:function(Re){G=Re},setClear:function(Re,Ze,ft,Nt,Bt){Bt===!0&&(Re*=Nt,Ze*=Nt,ft*=Nt),Ae.set(Re,Ze,ft,Nt),me.equals(Ae)===!1&&(o.clearColor(Re,Ze,ft,Nt),me.copy(Ae))},reset:function(){G=!1,pe=null,me.set(-1,0,0,0)}}}function n(){let G=!1,Ae=null,pe=null,me=null;return{setTest:function(Re){Re?ye(o.DEPTH_TEST):Ee(o.DEPTH_TEST)},setMask:function(Re){Ae!==Re&&!G&&(o.depthMask(Re),Ae=Re)},setFunc:function(Re){if(pe!==Re){switch(Re){case l_:o.depthFunc(o.NEVER);break;case u_:o.depthFunc(o.ALWAYS);break;case c_:o.depthFunc(o.LESS);break;case wl:o.depthFunc(o.LEQUAL);break;case f_:o.depthFunc(o.EQUAL);break;case d_:o.depthFunc(o.GEQUAL);break;case h_:o.depthFunc(o.GREATER);break;case p_:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}pe=Re}},setLocked:function(Re){G=Re},setClear:function(Re){me!==Re&&(o.clearDepth(Re),me=Re)},reset:function(){G=!1,Ae=null,pe=null,me=null}}}function r(){let G=!1,Ae=null,pe=null,me=null,Re=null,Ze=null,ft=null,Nt=null,Bt=null;return{setTest:function(mt){G||(mt?ye(o.STENCIL_TEST):Ee(o.STENCIL_TEST))},setMask:function(mt){Ae!==mt&&!G&&(o.stencilMask(mt),Ae=mt)},setFunc:function(mt,Cn,Rn){(pe!==mt||me!==Cn||Re!==Rn)&&(o.stencilFunc(mt,Cn,Rn),pe=mt,me=Cn,Re=Rn)},setOp:function(mt,Cn,Rn){(Ze!==mt||ft!==Cn||Nt!==Rn)&&(o.stencilOp(mt,Cn,Rn),Ze=mt,ft=Cn,Nt=Rn)},setLocked:function(mt){G=mt},setClear:function(mt){Bt!==mt&&(o.clearStencil(mt),Bt=mt)},reset:function(){G=!1,Ae=null,pe=null,me=null,Re=null,Ze=null,ft=null,Nt=null,Bt=null}}}const a=new e,u=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},v={},S=new WeakMap,x=[],y=null,w=!1,T=null,_=null,g=null,I=null,R=null,D=null,Q=null,z=new xt(0,0,0),F=0,K=!1,P=null,A=null,H=null,ce=null,ie=null;const le=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,se=0;const ue=o.getParameter(o.VERSION);ue.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(ue)[1]),he=se>=1):ue.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),he=se>=2);let B=null,de={};const ae=o.getParameter(o.SCISSOR_BOX),N=o.getParameter(o.VIEWPORT),re=new Yt().fromArray(ae),Ie=new Yt().fromArray(N);function $(G,Ae,pe,me){const Re=new Uint8Array(4),Ze=o.createTexture();o.bindTexture(G,Ze),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ft=0;ft<pe;ft++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(Ae,0,o.RGBA,1,1,me,0,o.RGBA,o.UNSIGNED_BYTE,Re):o.texImage2D(Ae+ft,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Re);return Ze}const fe={};fe[o.TEXTURE_2D]=$(o.TEXTURE_2D,o.TEXTURE_2D,1),fe[o.TEXTURE_CUBE_MAP]=$(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[o.TEXTURE_2D_ARRAY]=$(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),fe[o.TEXTURE_3D]=$(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),ye(o.DEPTH_TEST),u.setFunc(wl),pt(!1),We(Sp),ye(o.CULL_FACE),Tt(mr);function ye(G){m[G]!==!0&&(o.enable(G),m[G]=!0)}function Ee(G){m[G]!==!1&&(o.disable(G),m[G]=!1)}function Pe(G,Ae){return v[G]!==Ae?(o.bindFramebuffer(G,Ae),v[G]=Ae,G===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ae),G===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Fe(G,Ae){let pe=x,me=!1;if(G){pe=S.get(Ae),pe===void 0&&(pe=[],S.set(Ae,pe));const Re=G.textures;if(pe.length!==Re.length||pe[0]!==o.COLOR_ATTACHMENT0){for(let Ze=0,ft=Re.length;Ze<ft;Ze++)pe[Ze]=o.COLOR_ATTACHMENT0+Ze;pe.length=Re.length,me=!0}}else pe[0]!==o.BACK&&(pe[0]=o.BACK,me=!0);me&&o.drawBuffers(pe)}function je(G){return y!==G?(o.useProgram(G),y=G,!0):!1}const yt={[Vr]:o.FUNC_ADD,[Xv]:o.FUNC_SUBTRACT,[Yv]:o.FUNC_REVERSE_SUBTRACT};yt[qv]=o.MIN,yt[jv]=o.MAX;const O={[Kv]:o.ZERO,[$v]:o.ONE,[Zv]:o.SRC_COLOR,[Qc]:o.SRC_ALPHA,[i_]:o.SRC_ALPHA_SATURATE,[t_]:o.DST_COLOR,[Jv]:o.DST_ALPHA,[Qv]:o.ONE_MINUS_SRC_COLOR,[Jc]:o.ONE_MINUS_SRC_ALPHA,[n_]:o.ONE_MINUS_DST_COLOR,[e_]:o.ONE_MINUS_DST_ALPHA,[r_]:o.CONSTANT_COLOR,[s_]:o.ONE_MINUS_CONSTANT_COLOR,[o_]:o.CONSTANT_ALPHA,[a_]:o.ONE_MINUS_CONSTANT_ALPHA};function Tt(G,Ae,pe,me,Re,Ze,ft,Nt,Bt,mt){if(G===mr){w===!0&&(Ee(o.BLEND),w=!1);return}if(w===!1&&(ye(o.BLEND),w=!0),G!==Wv){if(G!==T||mt!==K){if((_!==Vr||R!==Vr)&&(o.blendEquation(o.FUNC_ADD),_=Vr,R=Vr),mt)switch(G){case Is:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zc:o.blendFunc(o.ONE,o.ONE);break;case yp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mp:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Is:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Zc:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case yp:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Mp:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}g=null,I=null,D=null,Q=null,z.set(0,0,0),F=0,T=G,K=mt}return}Re=Re||Ae,Ze=Ze||pe,ft=ft||me,(Ae!==_||Re!==R)&&(o.blendEquationSeparate(yt[Ae],yt[Re]),_=Ae,R=Re),(pe!==g||me!==I||Ze!==D||ft!==Q)&&(o.blendFuncSeparate(O[pe],O[me],O[Ze],O[ft]),g=pe,I=me,D=Ze,Q=ft),(Nt.equals(z)===!1||Bt!==F)&&(o.blendColor(Nt.r,Nt.g,Nt.b,Bt),z.copy(Nt),F=Bt),T=G,K=!1}function dt(G,Ae){G.side===Li?Ee(o.CULL_FACE):ye(o.CULL_FACE);let pe=G.side===wn;Ae&&(pe=!pe),pt(pe),G.blending===Is&&G.transparent===!1?Tt(mr):Tt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),a.setMask(G.colorWrite);const me=G.stencilWrite;f.setTest(me),me&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),qe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?ye(o.SAMPLE_ALPHA_TO_COVERAGE):Ee(o.SAMPLE_ALPHA_TO_COVERAGE)}function pt(G){P!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),P=G)}function We(G){G!==Hv?(ye(o.CULL_FACE),G!==A&&(G===Sp?o.cullFace(o.BACK):G===Vv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ee(o.CULL_FACE),A=G}function At(G){G!==H&&(he&&o.lineWidth(G),H=G)}function qe(G,Ae,pe){G?(ye(o.POLYGON_OFFSET_FILL),(ce!==Ae||ie!==pe)&&(o.polygonOffset(Ae,pe),ce=Ae,ie=pe)):Ee(o.POLYGON_OFFSET_FILL)}function Je(G){G?ye(o.SCISSOR_TEST):Ee(o.SCISSOR_TEST)}function U(G){G===void 0&&(G=o.TEXTURE0+le-1),B!==G&&(o.activeTexture(G),B=G)}function E(G,Ae,pe){pe===void 0&&(B===null?pe=o.TEXTURE0+le-1:pe=B);let me=de[pe];me===void 0&&(me={type:void 0,texture:void 0},de[pe]=me),(me.type!==G||me.texture!==Ae)&&(B!==pe&&(o.activeTexture(pe),B=pe),o.bindTexture(G,Ae||fe[G]),me.type=G,me.texture=Ae)}function te(){const G=de[B];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function oe(){try{o.compressedTexImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function b(){try{o.compressedTexImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Y(){try{o.texSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{o.texSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ge(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{o.texStorage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{o.texStorage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{o.texImage2D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function at(){try{o.texImage3D.apply(o,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function tt(G){re.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),re.copy(G))}function Oe(G){Ie.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Ie.copy(G))}function it(G,Ae){let pe=p.get(Ae);pe===void 0&&(pe=new WeakMap,p.set(Ae,pe));let me=pe.get(G);me===void 0&&(me=o.getUniformBlockIndex(Ae,G.name),pe.set(G,me))}function st(G,Ae){const me=p.get(Ae).get(G);d.get(Ae)!==me&&(o.uniformBlockBinding(Ae,me,G.__bindingPointIndex),d.set(Ae,me))}function wt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},B=null,de={},v={},S=new WeakMap,x=[],y=null,w=!1,T=null,_=null,g=null,I=null,R=null,D=null,Q=null,z=new xt(0,0,0),F=0,K=!1,P=null,A=null,H=null,ce=null,ie=null,re.set(0,0,o.canvas.width,o.canvas.height),Ie.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:ye,disable:Ee,bindFramebuffer:Pe,drawBuffers:Fe,useProgram:je,setBlending:Tt,setMaterial:dt,setFlipSided:pt,setCullFace:We,setLineWidth:At,setPolygonOffset:qe,setScissorTest:Je,activeTexture:U,bindTexture:E,unbindTexture:te,compressedTexImage2D:oe,compressedTexImage3D:b,texImage2D:Le,texImage3D:at,updateUBOMapping:it,uniformBlockBinding:st,texStorage2D:Ye,texStorage3D:Me,texSubImage2D:Y,texSubImage3D:ve,compressedTexSubImage2D:ge,compressedTexSubImage3D:Te,scissor:tt,viewport:Oe,reset:wt}}function pm(o,e,n,r){const a=FM(r);switch(n){case Cm:return o*e;case Pm:return o*e;case bm:return o*e*2;case Lm:return o*e/a.components*a.byteLength;case kf:return o*e/a.components*a.byteLength;case Dm:return o*e*2/a.components*a.byteLength;case zf:return o*e*2/a.components*a.byteLength;case Rm:return o*e*3/a.components*a.byteLength;case Wn:return o*e*4/a.components*a.byteLength;case Bf:return o*e*4/a.components*a.byteLength;case xl:case Sl:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case yl:case Ml:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case of:case lf:return Math.max(o,16)*Math.max(e,8)/4;case sf:case af:return Math.max(o,8)*Math.max(e,8)/2;case uf:case cf:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ff:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case pf:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case mf:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case gf:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case vf:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case _f:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case xf:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case yf:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Mf:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Ef:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wf:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case El:case Af:case Cf:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Um:case Rf:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Pf:case bf:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function FM(o){switch(o){case Ii:case Tm:return{byteLength:1,components:1};case No:case wm:case Vs:return{byteLength:2,components:1};case Ff:case Of:return{byteLength:2,components:4};case Yr:case Nf:case hi:return{byteLength:4,components:1};case Am:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function OM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new rt,v=new WeakMap;let S;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,E){return y?new OffscreenCanvas(U,E):bl("canvas")}function T(U,E,te){let oe=1;const b=Je(U);if((b.width>te||b.height>te)&&(oe=te/Math.max(b.width,b.height)),oe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Y=Math.floor(oe*b.width),ve=Math.floor(oe*b.height);S===void 0&&(S=w(Y,ve));const ge=E?w(Y,ve):S;return ge.width=Y,ge.height=ve,ge.getContext("2d").drawImage(U,0,0,Y,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Y+"x"+ve+")."),ge}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),U;return U}function _(U){return U.generateMipmaps&&U.minFilter!==Tn&&U.minFilter!==hn}function g(U){o.generateMipmap(U)}function I(U,E,te,oe,b=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Y=E;if(E===o.RED&&(te===o.FLOAT&&(Y=o.R32F),te===o.HALF_FLOAT&&(Y=o.R16F),te===o.UNSIGNED_BYTE&&(Y=o.R8)),E===o.RED_INTEGER&&(te===o.UNSIGNED_BYTE&&(Y=o.R8UI),te===o.UNSIGNED_SHORT&&(Y=o.R16UI),te===o.UNSIGNED_INT&&(Y=o.R32UI),te===o.BYTE&&(Y=o.R8I),te===o.SHORT&&(Y=o.R16I),te===o.INT&&(Y=o.R32I)),E===o.RG&&(te===o.FLOAT&&(Y=o.RG32F),te===o.HALF_FLOAT&&(Y=o.RG16F),te===o.UNSIGNED_BYTE&&(Y=o.RG8)),E===o.RG_INTEGER&&(te===o.UNSIGNED_BYTE&&(Y=o.RG8UI),te===o.UNSIGNED_SHORT&&(Y=o.RG16UI),te===o.UNSIGNED_INT&&(Y=o.RG32UI),te===o.BYTE&&(Y=o.RG8I),te===o.SHORT&&(Y=o.RG16I),te===o.INT&&(Y=o.RG32I)),E===o.RGB&&te===o.UNSIGNED_INT_5_9_9_9_REV&&(Y=o.RGB9_E5),E===o.RGBA){const ve=b?Al:St.getTransfer(oe);te===o.FLOAT&&(Y=o.RGBA32F),te===o.HALF_FLOAT&&(Y=o.RGBA16F),te===o.UNSIGNED_BYTE&&(Y=ve===Dt?o.SRGB8_ALPHA8:o.RGBA8),te===o.UNSIGNED_SHORT_4_4_4_4&&(Y=o.RGBA4),te===o.UNSIGNED_SHORT_5_5_5_1&&(Y=o.RGB5_A1)}return(Y===o.R16F||Y===o.R32F||Y===o.RG16F||Y===o.RG32F||Y===o.RGBA16F||Y===o.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function R(U,E){let te;return U?E===null||E===Yr||E===zs?te=o.DEPTH24_STENCIL8:E===hi?te=o.DEPTH32F_STENCIL8:E===No&&(te=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yr||E===zs?te=o.DEPTH_COMPONENT24:E===hi?te=o.DEPTH_COMPONENT32F:E===No&&(te=o.DEPTH_COMPONENT16),te}function D(U,E){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==Tn&&U.minFilter!==hn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function Q(U){const E=U.target;E.removeEventListener("dispose",Q),F(E),E.isVideoTexture&&v.delete(E)}function z(U){const E=U.target;E.removeEventListener("dispose",z),P(E)}function F(U){const E=r.get(U);if(E.__webglInit===void 0)return;const te=U.source,oe=x.get(te);if(oe){const b=oe[E.__cacheKey];b.usedTimes--,b.usedTimes===0&&K(U),Object.keys(oe).length===0&&x.delete(te)}r.remove(U)}function K(U){const E=r.get(U);o.deleteTexture(E.__webglTexture);const te=U.source,oe=x.get(te);delete oe[E.__cacheKey],f.memory.textures--}function P(U){const E=r.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(E.__webglFramebuffer[oe]))for(let b=0;b<E.__webglFramebuffer[oe].length;b++)o.deleteFramebuffer(E.__webglFramebuffer[oe][b]);else o.deleteFramebuffer(E.__webglFramebuffer[oe]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[oe])}else{if(Array.isArray(E.__webglFramebuffer))for(let oe=0;oe<E.__webglFramebuffer.length;oe++)o.deleteFramebuffer(E.__webglFramebuffer[oe]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let oe=0;oe<E.__webglColorRenderbuffer.length;oe++)E.__webglColorRenderbuffer[oe]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[oe]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const te=U.textures;for(let oe=0,b=te.length;oe<b;oe++){const Y=r.get(te[oe]);Y.__webglTexture&&(o.deleteTexture(Y.__webglTexture),f.memory.textures--),r.remove(te[oe])}r.remove(U)}let A=0;function H(){A=0}function ce(){const U=A;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),A+=1,U}function ie(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function le(U,E){const te=r.get(U);if(U.isVideoTexture&&At(U),U.isRenderTargetTexture===!1&&U.version>0&&te.__version!==U.version){const oe=U.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(te,U,E);return}}n.bindTexture(o.TEXTURE_2D,te.__webglTexture,o.TEXTURE0+E)}function he(U,E){const te=r.get(U);if(U.version>0&&te.__version!==U.version){Ie(te,U,E);return}n.bindTexture(o.TEXTURE_2D_ARRAY,te.__webglTexture,o.TEXTURE0+E)}function se(U,E){const te=r.get(U);if(U.version>0&&te.__version!==U.version){Ie(te,U,E);return}n.bindTexture(o.TEXTURE_3D,te.__webglTexture,o.TEXTURE0+E)}function ue(U,E){const te=r.get(U);if(U.version>0&&te.__version!==U.version){$(te,U,E);return}n.bindTexture(o.TEXTURE_CUBE_MAP,te.__webglTexture,o.TEXTURE0+E)}const B={[nf]:o.REPEAT,[ii]:o.CLAMP_TO_EDGE,[rf]:o.MIRRORED_REPEAT},de={[Tn]:o.NEAREST,[T_]:o.NEAREST_MIPMAP_NEAREST,[qa]:o.NEAREST_MIPMAP_LINEAR,[hn]:o.LINEAR,[yc]:o.LINEAR_MIPMAP_NEAREST,[Wr]:o.LINEAR_MIPMAP_LINEAR},ae={[P_]:o.NEVER,[N_]:o.ALWAYS,[b_]:o.LESS,[Im]:o.LEQUAL,[L_]:o.EQUAL,[I_]:o.GEQUAL,[D_]:o.GREATER,[U_]:o.NOTEQUAL};function N(U,E){if(E.type===hi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===hn||E.magFilter===yc||E.magFilter===qa||E.magFilter===Wr||E.minFilter===hn||E.minFilter===yc||E.minFilter===qa||E.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,B[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,B[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,B[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,de[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,de[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==qa&&E.minFilter!==Wr||E.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const te=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function re(U,E){let te=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",Q));const oe=E.source;let b=x.get(oe);b===void 0&&(b={},x.set(oe,b));const Y=ie(E);if(Y!==U.__cacheKey){b[Y]===void 0&&(b[Y]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,te=!0),b[Y].usedTimes++;const ve=b[U.__cacheKey];ve!==void 0&&(b[U.__cacheKey].usedTimes--,ve.usedTimes===0&&K(E)),U.__cacheKey=Y,U.__webglTexture=b[Y].texture}return te}function Ie(U,E,te){let oe=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(oe=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(oe=o.TEXTURE_3D);const b=re(U,E),Y=E.source;n.bindTexture(oe,U.__webglTexture,o.TEXTURE0+te);const ve=r.get(Y);if(Y.version!==ve.__version||b===!0){n.activeTexture(o.TEXTURE0+te);const ge=St.getPrimaries(St.workingColorSpace),Te=E.colorSpace===pr?null:St.getPrimaries(E.colorSpace),Ye=E.colorSpace===pr||ge===Te?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Me=T(E.image,!1,a.maxTextureSize);Me=qe(E,Me);const Le=u.convert(E.format,E.colorSpace),at=u.convert(E.type);let tt=I(E.internalFormat,Le,at,E.colorSpace,E.isVideoTexture);N(oe,E);let Oe;const it=E.mipmaps,st=E.isVideoTexture!==!0,wt=ve.__version===void 0||b===!0,G=Y.dataReady,Ae=D(E,Me);if(E.isDepthTexture)tt=R(E.format===Bs,E.type),wt&&(st?n.texStorage2D(o.TEXTURE_2D,1,tt,Me.width,Me.height):n.texImage2D(o.TEXTURE_2D,0,tt,Me.width,Me.height,0,Le,at,null));else if(E.isDataTexture)if(it.length>0){st&&wt&&n.texStorage2D(o.TEXTURE_2D,Ae,tt,it[0].width,it[0].height);for(let pe=0,me=it.length;pe<me;pe++)Oe=it[pe],st?G&&n.texSubImage2D(o.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,Le,at,Oe.data):n.texImage2D(o.TEXTURE_2D,pe,tt,Oe.width,Oe.height,0,Le,at,Oe.data);E.generateMipmaps=!1}else st?(wt&&n.texStorage2D(o.TEXTURE_2D,Ae,tt,Me.width,Me.height),G&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Me.width,Me.height,Le,at,Me.data)):n.texImage2D(o.TEXTURE_2D,0,tt,Me.width,Me.height,0,Le,at,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&wt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,tt,it[0].width,it[0].height,Me.depth);for(let pe=0,me=it.length;pe<me;pe++)if(Oe=it[pe],E.format!==Wn)if(Le!==null)if(st){if(G)if(E.layerUpdates.size>0){const Re=pm(Oe.width,Oe.height,E.format,E.type);for(const Ze of E.layerUpdates){const ft=Oe.data.subarray(Ze*Re/Oe.data.BYTES_PER_ELEMENT,(Ze+1)*Re/Oe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,Ze,Oe.width,Oe.height,1,Le,ft,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Oe.width,Oe.height,Me.depth,Le,Oe.data,0,0)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,pe,tt,Oe.width,Oe.height,Me.depth,0,Oe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?G&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,pe,0,0,0,Oe.width,Oe.height,Me.depth,Le,at,Oe.data):n.texImage3D(o.TEXTURE_2D_ARRAY,pe,tt,Oe.width,Oe.height,Me.depth,0,Le,at,Oe.data)}else{st&&wt&&n.texStorage2D(o.TEXTURE_2D,Ae,tt,it[0].width,it[0].height);for(let pe=0,me=it.length;pe<me;pe++)Oe=it[pe],E.format!==Wn?Le!==null?st?G&&n.compressedTexSubImage2D(o.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,Le,Oe.data):n.compressedTexImage2D(o.TEXTURE_2D,pe,tt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?G&&n.texSubImage2D(o.TEXTURE_2D,pe,0,0,Oe.width,Oe.height,Le,at,Oe.data):n.texImage2D(o.TEXTURE_2D,pe,tt,Oe.width,Oe.height,0,Le,at,Oe.data)}else if(E.isDataArrayTexture)if(st){if(wt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,Ae,tt,Me.width,Me.height,Me.depth),G)if(E.layerUpdates.size>0){const pe=pm(Me.width,Me.height,E.format,E.type);for(const me of E.layerUpdates){const Re=Me.data.subarray(me*pe/Me.data.BYTES_PER_ELEMENT,(me+1)*pe/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,me,Me.width,Me.height,1,Le,at,Re)}E.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Le,at,Me.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,tt,Me.width,Me.height,Me.depth,0,Le,at,Me.data);else if(E.isData3DTexture)st?(wt&&n.texStorage3D(o.TEXTURE_3D,Ae,tt,Me.width,Me.height,Me.depth),G&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Le,at,Me.data)):n.texImage3D(o.TEXTURE_3D,0,tt,Me.width,Me.height,Me.depth,0,Le,at,Me.data);else if(E.isFramebufferTexture){if(wt)if(st)n.texStorage2D(o.TEXTURE_2D,Ae,tt,Me.width,Me.height);else{let pe=Me.width,me=Me.height;for(let Re=0;Re<Ae;Re++)n.texImage2D(o.TEXTURE_2D,Re,tt,pe,me,0,Le,at,null),pe>>=1,me>>=1}}else if(it.length>0){if(st&&wt){const pe=Je(it[0]);n.texStorage2D(o.TEXTURE_2D,Ae,tt,pe.width,pe.height)}for(let pe=0,me=it.length;pe<me;pe++)Oe=it[pe],st?G&&n.texSubImage2D(o.TEXTURE_2D,pe,0,0,Le,at,Oe):n.texImage2D(o.TEXTURE_2D,pe,tt,Le,at,Oe);E.generateMipmaps=!1}else if(st){if(wt){const pe=Je(Me);n.texStorage2D(o.TEXTURE_2D,Ae,tt,pe.width,pe.height)}G&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Le,at,Me)}else n.texImage2D(o.TEXTURE_2D,0,tt,Le,at,Me);_(E)&&g(oe),ve.__version=Y.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function $(U,E,te){if(E.image.length!==6)return;const oe=re(U,E),b=E.source;n.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+te);const Y=r.get(b);if(b.version!==Y.__version||oe===!0){n.activeTexture(o.TEXTURE0+te);const ve=St.getPrimaries(St.workingColorSpace),ge=E.colorSpace===pr?null:St.getPrimaries(E.colorSpace),Te=E.colorSpace===pr||ve===ge?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ye=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,Le=[];for(let me=0;me<6;me++)!Ye&&!Me?Le[me]=T(E.image[me],!0,a.maxCubemapSize):Le[me]=Me?E.image[me].image:E.image[me],Le[me]=qe(E,Le[me]);const at=Le[0],tt=u.convert(E.format,E.colorSpace),Oe=u.convert(E.type),it=I(E.internalFormat,tt,Oe,E.colorSpace),st=E.isVideoTexture!==!0,wt=Y.__version===void 0||oe===!0,G=b.dataReady;let Ae=D(E,at);N(o.TEXTURE_CUBE_MAP,E);let pe;if(Ye){st&&wt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,it,at.width,at.height);for(let me=0;me<6;me++){pe=Le[me].mipmaps;for(let Re=0;Re<pe.length;Re++){const Ze=pe[Re];E.format!==Wn?tt!==null?st?G&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,Ze.width,Ze.height,tt,Ze.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,it,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,Ze.width,Ze.height,tt,Oe,Ze.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,it,Ze.width,Ze.height,0,tt,Oe,Ze.data)}}}else{if(pe=E.mipmaps,st&&wt){pe.length>0&&Ae++;const me=Je(Le[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,Ae,it,me.width,me.height)}for(let me=0;me<6;me++)if(Me){st?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Le[me].width,Le[me].height,tt,Oe,Le[me].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,it,Le[me].width,Le[me].height,0,tt,Oe,Le[me].data);for(let Re=0;Re<pe.length;Re++){const ft=pe[Re].image[me].image;st?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,ft.width,ft.height,tt,Oe,ft.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,it,ft.width,ft.height,0,tt,Oe,ft.data)}}else{st?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,tt,Oe,Le[me]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,it,tt,Oe,Le[me]);for(let Re=0;Re<pe.length;Re++){const Ze=pe[Re];st?G&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,tt,Oe,Ze.image[me]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,it,tt,Oe,Ze.image[me])}}}_(E)&&g(o.TEXTURE_CUBE_MAP),Y.__version=b.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function fe(U,E,te,oe,b,Y){const ve=u.convert(te.format,te.colorSpace),ge=u.convert(te.type),Te=I(te.internalFormat,ve,ge,te.colorSpace);if(!r.get(E).__hasExternalTextures){const Me=Math.max(1,E.width>>Y),Le=Math.max(1,E.height>>Y);b===o.TEXTURE_3D||b===o.TEXTURE_2D_ARRAY?n.texImage3D(b,Y,Te,Me,Le,E.depth,0,ve,ge,null):n.texImage2D(b,Y,Te,Me,Le,0,ve,ge,null)}n.bindFramebuffer(o.FRAMEBUFFER,U),We(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,oe,b,r.get(te).__webglTexture,0,pt(E)):(b===o.TEXTURE_2D||b>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&b<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,oe,b,r.get(te).__webglTexture,Y),n.bindFramebuffer(o.FRAMEBUFFER,null)}function ye(U,E,te){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const oe=E.depthTexture,b=oe&&oe.isDepthTexture?oe.type:null,Y=R(E.stencilBuffer,b),ve=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ge=pt(E);We(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ge,Y,E.width,E.height):te?o.renderbufferStorageMultisample(o.RENDERBUFFER,ge,Y,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Y,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,U)}else{const oe=E.textures;for(let b=0;b<oe.length;b++){const Y=oe[b],ve=u.convert(Y.format,Y.colorSpace),ge=u.convert(Y.type),Te=I(Y.internalFormat,ve,ge,Y.colorSpace),Ye=pt(E);te&&We(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,Te,E.width,E.height):We(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ye,Te,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,Te,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ee(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),le(E.depthTexture,0);const oe=r.get(E.depthTexture).__webglTexture,b=pt(E);if(E.depthTexture.format===Ns)We(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,oe,0,b):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,oe,0);else if(E.depthTexture.format===Bs)We(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,oe,0,b):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Pe(U){const E=r.get(U),te=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const oe=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),oe){const b=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,oe.removeEventListener("dispose",b)};oe.addEventListener("dispose",b),E.__depthDisposeCallback=b}E.__boundDepthTexture=oe}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(te)throw new Error("target.depthTexture not supported in Cube render targets");Ee(E.__webglFramebuffer,U)}else if(te){E.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[oe]),E.__webglDepthbuffer[oe]===void 0)E.__webglDepthbuffer[oe]=o.createRenderbuffer(),ye(E.__webglDepthbuffer[oe],U,!1);else{const b=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Y=E.__webglDepthbuffer[oe];o.bindRenderbuffer(o.RENDERBUFFER,Y),o.framebufferRenderbuffer(o.FRAMEBUFFER,b,o.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),ye(E.__webglDepthbuffer,U,!1);else{const oe=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,b=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,b),o.framebufferRenderbuffer(o.FRAMEBUFFER,oe,o.RENDERBUFFER,b)}n.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(U,E,te){const oe=r.get(U);E!==void 0&&fe(oe.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),te!==void 0&&Pe(U)}function je(U){const E=U.texture,te=r.get(U),oe=r.get(E);U.addEventListener("dispose",z);const b=U.textures,Y=U.isWebGLCubeRenderTarget===!0,ve=b.length>1;if(ve||(oe.__webglTexture===void 0&&(oe.__webglTexture=o.createTexture()),oe.__version=E.version,f.memory.textures++),Y){te.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer[ge]=[];for(let Te=0;Te<E.mipmaps.length;Te++)te.__webglFramebuffer[ge][Te]=o.createFramebuffer()}else te.__webglFramebuffer[ge]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){te.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)te.__webglFramebuffer[ge]=o.createFramebuffer()}else te.__webglFramebuffer=o.createFramebuffer();if(ve)for(let ge=0,Te=b.length;ge<Te;ge++){const Ye=r.get(b[ge]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=o.createTexture(),f.memory.textures++)}if(U.samples>0&&We(U)===!1){te.__webglMultisampledFramebuffer=o.createFramebuffer(),te.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,te.__webglMultisampledFramebuffer);for(let ge=0;ge<b.length;ge++){const Te=b[ge];te.__webglColorRenderbuffer[ge]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,te.__webglColorRenderbuffer[ge]);const Ye=u.convert(Te.format,Te.colorSpace),Me=u.convert(Te.type),Le=I(Te.internalFormat,Ye,Me,Te.colorSpace,U.isXRRenderTarget===!0),at=pt(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,at,Le,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ge,o.RENDERBUFFER,te.__webglColorRenderbuffer[ge])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(te.__webglDepthRenderbuffer=o.createRenderbuffer(),ye(te.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Y){n.bindTexture(o.TEXTURE_CUBE_MAP,oe.__webglTexture),N(o.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)fe(te.__webglFramebuffer[ge][Te],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Te);else fe(te.__webglFramebuffer[ge],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);_(E)&&g(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let ge=0,Te=b.length;ge<Te;ge++){const Ye=b[ge],Me=r.get(Ye);n.bindTexture(o.TEXTURE_2D,Me.__webglTexture),N(o.TEXTURE_2D,Ye),fe(te.__webglFramebuffer,U,Ye,o.COLOR_ATTACHMENT0+ge,o.TEXTURE_2D,0),_(Ye)&&g(o.TEXTURE_2D)}n.unbindTexture()}else{let ge=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ge=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(ge,oe.__webglTexture),N(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let Te=0;Te<E.mipmaps.length;Te++)fe(te.__webglFramebuffer[Te],U,E,o.COLOR_ATTACHMENT0,ge,Te);else fe(te.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,ge,0);_(E)&&g(ge),n.unbindTexture()}U.depthBuffer&&Pe(U)}function yt(U){const E=U.textures;for(let te=0,oe=E.length;te<oe;te++){const b=E[te];if(_(b)){const Y=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,ve=r.get(b).__webglTexture;n.bindTexture(Y,ve),g(Y),n.unbindTexture()}}}const O=[],Tt=[];function dt(U){if(U.samples>0){if(We(U)===!1){const E=U.textures,te=U.width,oe=U.height;let b=o.COLOR_BUFFER_BIT;const Y=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ve=r.get(U),ge=E.length>1;if(ge)for(let Te=0;Te<E.length;Te++)n.bindFramebuffer(o.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Te=0;Te<E.length;Te++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(b|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(b|=o.STENCIL_BUFFER_BIT)),ge){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,ve.__webglColorRenderbuffer[Te]);const Ye=r.get(E[Te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ye,0)}o.blitFramebuffer(0,0,te,oe,0,0,te,oe,b,o.NEAREST),p===!0&&(O.length=0,Tt.length=0,O.push(o.COLOR_ATTACHMENT0+Te),U.depthBuffer&&U.resolveDepthBuffer===!1&&(O.push(Y),Tt.push(Y),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Tt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,O))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ge)for(let Te=0;Te<E.length;Te++){n.bindFramebuffer(o.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.RENDERBUFFER,ve.__webglColorRenderbuffer[Te]);const Ye=r.get(E[Te]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,ve.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Te,o.TEXTURE_2D,Ye,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function pt(U){return Math.min(a.maxSamples,U.samples)}function We(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function At(U){const E=f.render.frame;v.get(U)!==E&&(v.set(U,E),U.update())}function qe(U,E){const te=U.colorSpace,oe=U.format,b=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||te!==xr&&te!==pr&&(St.getTransfer(te)===Dt?(oe!==Wn||b!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",te)),E}function Je(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=ce,this.resetTextureUnits=H,this.setTexture2D=le,this.setTexture2DArray=he,this.setTexture3D=se,this.setTextureCube=ue,this.rebindTextures=Fe,this.setupRenderTarget=je,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=We}function kM(o,e){function n(r,a=pr){let u;const f=St.getTransfer(a);if(r===Ii)return o.UNSIGNED_BYTE;if(r===Ff)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Of)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Am)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===Tm)return o.BYTE;if(r===wm)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===Nf)return o.INT;if(r===Yr)return o.UNSIGNED_INT;if(r===hi)return o.FLOAT;if(r===Vs)return o.HALF_FLOAT;if(r===Cm)return o.ALPHA;if(r===Rm)return o.RGB;if(r===Wn)return o.RGBA;if(r===Pm)return o.LUMINANCE;if(r===bm)return o.LUMINANCE_ALPHA;if(r===Ns)return o.DEPTH_COMPONENT;if(r===Bs)return o.DEPTH_STENCIL;if(r===Lm)return o.RED;if(r===kf)return o.RED_INTEGER;if(r===Dm)return o.RG;if(r===zf)return o.RG_INTEGER;if(r===Bf)return o.RGBA_INTEGER;if(r===xl||r===Sl||r===yl||r===Ml)if(f===Dt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===xl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===xl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sf||r===of||r===af||r===lf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===sf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===of)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===af)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===lf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===uf||r===cf||r===ff)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===uf||r===cf)return f===Dt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===ff)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===df||r===hf||r===pf||r===mf||r===gf||r===vf||r===_f||r===xf||r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===wf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===df)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_f)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ef)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wf)return f===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===El||r===Af||r===Cf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===El)return f===Dt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Af)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Um||r===Rf||r===Pf||r===bf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===El)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Rf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pf)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}class zM extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ml extends An{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ne,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ne),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ne,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ne),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const _=n.getJointPose(T,r),g=this._getHandJoint(m,T);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const v=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],x=v.position.distanceTo(S.position),y=.02,w=.005;m.inputState.pinching&&x>y+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ml;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const HM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VM=`
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

}`;class GM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new pn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Fi({vertexShader:HM,fragmentShader:VM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Xn(new Xr(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WM extends Gs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,S=null,x=null,y=null,w=null;const T=new GM,_=n.getContextAttributes();let g=null,I=null;const R=[],D=[],Q=new rt;let z=null;const F=new ni;F.layers.enable(1),F.viewport=new Yt;const K=new ni;K.layers.enable(2),K.viewport=new Yt;const P=[F,K],A=new zM;A.layers.enable(1),A.layers.enable(2);let H=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=R[$];return fe===void 0&&(fe=new jc,R[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=R[$];return fe===void 0&&(fe=new jc,R[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=R[$];return fe===void 0&&(fe=new jc,R[$]=fe),fe.getHandSpace()};function ie($){const fe=D.indexOf($.inputSource);if(fe===-1)return;const ye=R[fe];ye!==void 0&&(ye.update($.inputSource,$.frame,m||f),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function le(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",he);for(let $=0;$<R.length;$++){const fe=D[$];fe!==null&&(D[$]=null,R[$].disconnect(fe))}H=null,ce=null,T.reset(),e.setRenderTarget(g),y=null,x=null,S=null,a=null,I=null,Ie.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(Q.width,Q.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){u=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return S},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function($){if(a=$,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",le),a.addEventListener("inputsourceschange",he),_.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(Q),a.renderState.layers===void 0){const fe={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,fe),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),I=new _r(y.framebufferWidth,y.framebufferHeight,{format:Wn,type:Ii,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let fe=null,ye=null,Ee=null;_.depth&&(Ee=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,fe=_.stencil?Bs:Ns,ye=_.stencil?zs:Yr);const Pe={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:u};S=new XRWebGLBinding(a,n),x=S.createProjectionLayer(Pe),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),I=new _r(x.textureWidth,x.textureHeight,{format:Wn,type:Ii,depthTexture:new jm(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),Ie.setContext(a),Ie.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function he($){for(let fe=0;fe<$.removed.length;fe++){const ye=$.removed[fe],Ee=D.indexOf(ye);Ee>=0&&(D[Ee]=null,R[Ee].disconnect(ye))}for(let fe=0;fe<$.added.length;fe++){const ye=$.added[fe];let Ee=D.indexOf(ye);if(Ee===-1){for(let Fe=0;Fe<R.length;Fe++)if(Fe>=D.length){D.push(ye),Ee=Fe;break}else if(D[Fe]===null){D[Fe]=ye,Ee=Fe;break}if(Ee===-1)break}const Pe=R[Ee];Pe&&Pe.connect(ye)}}const se=new ne,ue=new ne;function B($,fe,ye){se.setFromMatrixPosition(fe.matrixWorld),ue.setFromMatrixPosition(ye.matrixWorld);const Ee=se.distanceTo(ue),Pe=fe.projectionMatrix.elements,Fe=ye.projectionMatrix.elements,je=Pe[14]/(Pe[10]-1),yt=Pe[14]/(Pe[10]+1),O=(Pe[9]+1)/Pe[5],Tt=(Pe[9]-1)/Pe[5],dt=(Pe[8]-1)/Pe[0],pt=(Fe[8]+1)/Fe[0],We=je*dt,At=je*pt,qe=Ee/(-dt+pt),Je=qe*-dt;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Je),$.translateZ(qe),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Pe[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const U=je+qe,E=yt+qe,te=We-Je,oe=At+(Ee-Je),b=O*yt/E*U,Y=Tt*yt/E*U;$.projectionMatrix.makePerspective(te,oe,b,Y,U,E),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function de($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(a===null)return;let fe=$.near,ye=$.far;T.texture!==null&&(T.depthNear>0&&(fe=T.depthNear),T.depthFar>0&&(ye=T.depthFar)),A.near=K.near=F.near=fe,A.far=K.far=F.far=ye,(H!==A.near||ce!==A.far)&&(a.updateRenderState({depthNear:A.near,depthFar:A.far}),H=A.near,ce=A.far);const Ee=$.parent,Pe=A.cameras;de(A,Ee);for(let Fe=0;Fe<Pe.length;Fe++)de(Pe[Fe],Ee);Pe.length===2?B(A,F,K):A.projectionMatrix.copy(F.projectionMatrix),ae($,A,Ee)};function ae($,fe,ye){ye===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Lf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function($){p=$,x!==null&&(x.fixedFoveation=$),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=$)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(A)};let N=null;function re($,fe){if(v=fe.getViewerPose(m||f),w=fe,v!==null){const ye=v.views;y!==null&&(e.setRenderTargetFramebuffer(I,y.framebuffer),e.setRenderTarget(I));let Ee=!1;ye.length!==A.cameras.length&&(A.cameras.length=0,Ee=!0);for(let Fe=0;Fe<ye.length;Fe++){const je=ye[Fe];let yt=null;if(y!==null)yt=y.getViewport(je);else{const Tt=S.getViewSubImage(x,je);yt=Tt.viewport,Fe===0&&(e.setRenderTargetTextures(I,Tt.colorTexture,x.ignoreDepthValues?void 0:Tt.depthStencilTexture),e.setRenderTarget(I))}let O=P[Fe];O===void 0&&(O=new ni,O.layers.enable(Fe),O.viewport=new Yt,P[Fe]=O),O.matrix.fromArray(je.transform.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale),O.projectionMatrix.fromArray(je.projectionMatrix),O.projectionMatrixInverse.copy(O.projectionMatrix).invert(),O.viewport.set(yt.x,yt.y,yt.width,yt.height),Fe===0&&(A.matrix.copy(O.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Ee===!0&&A.cameras.push(O)}const Pe=a.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Fe=S.getDepthInformation(ye[0]);Fe&&Fe.isValid&&Fe.texture&&T.init(e,Fe,a.renderState)}}for(let ye=0;ye<R.length;ye++){const Ee=D[ye],Pe=R[ye];Ee!==null&&Pe!==void 0&&Pe.update(Ee,fe,m||f)}N&&N($,fe),fe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:fe}),w=null}const Ie=new qm;Ie.setAnimationLoop(re),this.setAnimationLoop=function($){N=$},this.dispose=function(){}}}const zr=new Ni,XM=new Gt;function YM(o,e){function n(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function r(_,g){g.color.getRGB(_.fogColor.value,Wm(o)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function a(_,g,I,R,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(_,g):g.isMeshToonMaterial?(u(_,g),S(_,g)):g.isMeshPhongMaterial?(u(_,g),v(_,g)):g.isMeshStandardMaterial?(u(_,g),x(_,g),g.isMeshPhysicalMaterial&&y(_,g,D)):g.isMeshMatcapMaterial?(u(_,g),w(_,g)):g.isMeshDepthMaterial?u(_,g):g.isMeshDistanceMaterial?(u(_,g),T(_,g)):g.isMeshNormalMaterial?u(_,g):g.isLineBasicMaterial?(f(_,g),g.isLineDashedMaterial&&d(_,g)):g.isPointsMaterial?p(_,g,I,R):g.isSpriteMaterial?m(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,n(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===wn&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,n(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===wn&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,n(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,n(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const I=e.get(g),R=I.envMap,D=I.envMapRotation;R&&(_.envMap.value=R,zr.copy(D),zr.x*=-1,zr.y*=-1,zr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(zr.y*=-1,zr.z*=-1),_.envMapRotation.value.setFromMatrix4(XM.makeRotationFromEuler(zr)),_.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,_.aoMapTransform))}function f(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform))}function d(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function p(_,g,I,R){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*I,_.scale.value=R*.5,g.map&&(_.map.value=g.map,n(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function m(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function v(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function S(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function x(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function y(_,g,I){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wn&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=I.texture,_.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,_.specularIntensityMapTransform))}function w(_,g){g.matcap&&(_.matcap.value=g.matcap)}function T(_,g){const I=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(I.matrixWorld),_.nearDistance.value=I.shadow.camera.near,_.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function qM(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(I,R){const D=R.program;r.uniformBlockBinding(I,D)}function m(I,R){let D=a[I.id];D===void 0&&(w(I),D=v(I),a[I.id]=D,I.addEventListener("dispose",_));const Q=R.program;r.updateUBOMapping(I,Q);const z=e.render.frame;u[I.id]!==z&&(x(I),u[I.id]=z)}function v(I){const R=S();I.__bindingPointIndex=R;const D=o.createBuffer(),Q=I.__size,z=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,Q,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,D),D}function S(){for(let I=0;I<d;I++)if(f.indexOf(I)===-1)return f.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const R=a[I.id],D=I.uniforms,Q=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let z=0,F=D.length;z<F;z++){const K=Array.isArray(D[z])?D[z]:[D[z]];for(let P=0,A=K.length;P<A;P++){const H=K[P];if(y(H,z,P,Q)===!0){const ce=H.__offset,ie=Array.isArray(H.value)?H.value:[H.value];let le=0;for(let he=0;he<ie.length;he++){const se=ie[he],ue=T(se);typeof se=="number"||typeof se=="boolean"?(H.__data[0]=se,o.bufferSubData(o.UNIFORM_BUFFER,ce+le,H.__data)):se.isMatrix3?(H.__data[0]=se.elements[0],H.__data[1]=se.elements[1],H.__data[2]=se.elements[2],H.__data[3]=0,H.__data[4]=se.elements[3],H.__data[5]=se.elements[4],H.__data[6]=se.elements[5],H.__data[7]=0,H.__data[8]=se.elements[6],H.__data[9]=se.elements[7],H.__data[10]=se.elements[8],H.__data[11]=0):(se.toArray(H.__data,le),le+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ce,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(I,R,D,Q){const z=I.value,F=R+"_"+D;if(Q[F]===void 0)return typeof z=="number"||typeof z=="boolean"?Q[F]=z:Q[F]=z.clone(),!0;{const K=Q[F];if(typeof z=="number"||typeof z=="boolean"){if(K!==z)return Q[F]=z,!0}else if(K.equals(z)===!1)return K.copy(z),!0}return!1}function w(I){const R=I.uniforms;let D=0;const Q=16;for(let F=0,K=R.length;F<K;F++){const P=Array.isArray(R[F])?R[F]:[R[F]];for(let A=0,H=P.length;A<H;A++){const ce=P[A],ie=Array.isArray(ce.value)?ce.value:[ce.value];for(let le=0,he=ie.length;le<he;le++){const se=ie[le],ue=T(se),B=D%Q,de=B%ue.boundary,ae=B+de;D+=de,ae!==0&&Q-ae<ue.storage&&(D+=Q-ae),ce.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),ce.__offset=D,D+=ue.storage}}}const z=D%Q;return z>0&&(D+=Q-z),I.__size=D,I.__cache={},this}function T(I){const R={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(R.boundary=4,R.storage=4):I.isVector2?(R.boundary=8,R.storage=8):I.isVector3||I.isColor?(R.boundary=16,R.storage=12):I.isVector4?(R.boundary=16,R.storage=16):I.isMatrix3?(R.boundary=48,R.storage=48):I.isMatrix4?(R.boundary=64,R.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),R}function _(I){const R=I.target;R.removeEventListener("dispose",_);const D=f.indexOf(R.__bindingPointIndex);f.splice(D,1),o.deleteBuffer(a[R.id]),delete a[R.id],delete u[R.id]}function g(){for(const I in a)o.deleteBuffer(a[I]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class jM{constructor(e={}){const{canvas:n=O_(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const y=new Uint32Array(4),w=new Int32Array(4);let T=null,_=null;const g=[],I=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=gr,this.toneMappingExposure=1;const R=this;let D=!1,Q=0,z=0,F=null,K=-1,P=null;const A=new Yt,H=new Yt;let ce=null;const ie=new xt(0);let le=0,he=n.width,se=n.height,ue=1,B=null,de=null;const ae=new Yt(0,0,he,se),N=new Yt(0,0,he,se);let re=!1;const Ie=new Ym;let $=!1,fe=!1;const ye=new Gt,Ee=new ne,Pe=new Yt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function yt(){return F===null?ue:1}let O=r;function Tt(C,W){return n.getContext(C,W)}try{const C={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${If}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",Re,!1),O===null){const W="webgl2";if(O=Tt(W,C),O===null)throw Tt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let dt,pt,We,At,qe,Je,U,E,te,oe,b,Y,ve,ge,Te,Ye,Me,Le,at,tt,Oe,it,st,wt;function G(){dt=new ey(O),dt.init(),it=new kM(O,dt),pt=new qS(O,dt,e,it),We=new NM(O),At=new iy(O),qe=new yM,Je=new OM(O,dt,We,qe,pt,it,At),U=new KS(R),E=new JS(R),te=new u0(O),st=new XS(O,te),oe=new ty(O,te,At,st),b=new sy(O,oe,te,At),at=new ry(O,pt,Je),Ye=new jS(qe),Y=new SM(R,U,E,dt,pt,st,Ye),ve=new YM(R,qe),ge=new EM,Te=new PM(dt),Le=new WS(R,U,E,We,b,x,p),Me=new IM(R,b,pt),wt=new qM(O,At,pt,We),tt=new YS(O,dt,At),Oe=new ny(O,dt,At),At.programs=Y.programs,R.capabilities=pt,R.extensions=dt,R.properties=qe,R.renderLists=ge,R.shadowMap=Me,R.state=We,R.info=At}G();const Ae=new WM(R,O);this.xr=Ae,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const C=dt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=dt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(C){C!==void 0&&(ue=C,this.setSize(he,se,!1))},this.getSize=function(C){return C.set(he,se)},this.setSize=function(C,W,Z=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}he=C,se=W,n.width=Math.floor(C*ue),n.height=Math.floor(W*ue),Z===!0&&(n.style.width=C+"px",n.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(he*ue,se*ue).floor()},this.setDrawingBufferSize=function(C,W,Z){he=C,se=W,ue=Z,n.width=Math.floor(C*Z),n.height=Math.floor(W*Z),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(ae)},this.setViewport=function(C,W,Z,J){C.isVector4?ae.set(C.x,C.y,C.z,C.w):ae.set(C,W,Z,J),We.viewport(A.copy(ae).multiplyScalar(ue).round())},this.getScissor=function(C){return C.copy(N)},this.setScissor=function(C,W,Z,J){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,W,Z,J),We.scissor(H.copy(N).multiplyScalar(ue).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(C){We.setScissorTest(re=C)},this.setOpaqueSort=function(C){B=C},this.setTransparentSort=function(C){de=C},this.getClearColor=function(C){return C.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor.apply(Le,arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha.apply(Le,arguments)},this.clear=function(C=!0,W=!0,Z=!0){let J=0;if(C){let X=!1;if(F!==null){const Ce=F.texture.format;X=Ce===Bf||Ce===zf||Ce===kf}if(X){const Ce=F.texture.type,Ue=Ce===Ii||Ce===Yr||Ce===No||Ce===zs||Ce===Ff||Ce===Of,Be=Le.getClearColor(),be=Le.getClearAlpha(),et=Be.r,Qe=Be.g,Ge=Be.b;Ue?(y[0]=et,y[1]=Qe,y[2]=Ge,y[3]=be,O.clearBufferuiv(O.COLOR,0,y)):(w[0]=et,w[1]=Qe,w[2]=Ge,w[3]=be,O.clearBufferiv(O.COLOR,0,w))}else J|=O.COLOR_BUFFER_BIT}W&&(J|=O.DEPTH_BUFFER_BIT),Z&&(J|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),ge.dispose(),Te.dispose(),qe.dispose(),U.dispose(),E.dispose(),b.dispose(),st.dispose(),wt.dispose(),Y.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Rn),Ae.removeEventListener("sessionend",ki),Yn.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const C=At.autoReset,W=Me.enabled,Z=Me.autoUpdate,J=Me.needsUpdate,X=Me.type;G(),At.autoReset=C,Me.enabled=W,Me.autoUpdate=Z,Me.needsUpdate=J,Me.type=X}function Re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ze(C){const W=C.target;W.removeEventListener("dispose",Ze),ft(W)}function ft(C){Nt(C),qe.remove(C)}function Nt(C){const W=qe.get(C).programs;W!==void 0&&(W.forEach(function(Z){Y.releaseProgram(Z)}),C.isShaderMaterial&&Y.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,Z,J,X,Ce){W===null&&(W=Fe);const Ue=X.isMesh&&X.matrixWorld.determinant()<0,Be=kl(C,W,Z,J,X);We.setMaterial(J,Ue);let be=Z.index,et=1;if(J.wireframe===!0){if(be=oe.getWireframeAttribute(Z),be===void 0)return;et=2}const Qe=Z.drawRange,Ge=Z.attributes.position;let ht=Qe.start*et,Ut=(Qe.start+Qe.count)*et;Ce!==null&&(ht=Math.max(ht,Ce.start*et),Ut=Math.min(Ut,(Ce.start+Ce.count)*et)),be!==null?(ht=Math.max(ht,0),Ut=Math.min(Ut,be.count)):Ge!=null&&(ht=Math.max(ht,0),Ut=Math.min(Ut,Ge.count));const Pt=Ut-ht;if(Pt<0||Pt===1/0)return;st.setup(X,J,Be,Z,be);let Kt,ot=tt;if(be!==null&&(Kt=te.get(be),ot=Oe,ot.setIndex(Kt)),X.isMesh)J.wireframe===!0?(We.setLineWidth(J.wireframeLinewidth*yt()),ot.setMode(O.LINES)):ot.setMode(O.TRIANGLES);else if(X.isLine){let Xe=J.linewidth;Xe===void 0&&(Xe=1),We.setLineWidth(Xe*yt()),X.isLineSegments?ot.setMode(O.LINES):X.isLineLoop?ot.setMode(O.LINE_LOOP):ot.setMode(O.LINE_STRIP)}else X.isPoints?ot.setMode(O.POINTS):X.isSprite&&ot.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)ot.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))ot.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Xe=X._multiDrawStarts,Mt=X._multiDrawCounts,vt=X._multiDrawCount,Pn=be?te.get(be).bytesPerElement:1,Hi=qe.get(J).currentProgram.getUniforms();for(let $t=0;$t<vt;$t++)Hi.setValue(O,"_gl_DrawID",$t),ot.render(Xe[$t]/Pn,Mt[$t])}else if(X.isInstancedMesh)ot.renderInstances(ht,Pt,X.count);else if(Z.isInstancedBufferGeometry){const Xe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Mt=Math.min(Z.instanceCount,Xe);ot.renderInstances(ht,Pt,Mt)}else ot.render(ht,Pt)};function Bt(C,W,Z){C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=wn,C.needsUpdate=!0,Bi(C,W,Z),C.side=vr,C.needsUpdate=!0,Bi(C,W,Z),C.side=Li):Bi(C,W,Z)}this.compile=function(C,W,Z=null){Z===null&&(Z=C),_=Te.get(Z),_.init(W),I.push(_),Z.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),C!==Z&&C.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(_.pushLight(X),X.castShadow&&_.pushShadow(X))}),_.setupLights();const J=new Set;return C.traverse(function(X){const Ce=X.material;if(Ce)if(Array.isArray(Ce))for(let Ue=0;Ue<Ce.length;Ue++){const Be=Ce[Ue];Bt(Be,Z,X),J.add(Be)}else Bt(Ce,Z,X),J.add(Ce)}),I.pop(),_=null,J},this.compileAsync=function(C,W,Z=null){const J=this.compile(C,W,Z);return new Promise(X=>{function Ce(){if(J.forEach(function(Ue){qe.get(Ue).currentProgram.isReady()&&J.delete(Ue)}),J.size===0){X(C);return}setTimeout(Ce,10)}dt.get("KHR_parallel_shader_compile")!==null?Ce():setTimeout(Ce,10)})};let mt=null;function Cn(C){mt&&mt(C)}function Rn(){Yn.stop()}function ki(){Yn.start()}const Yn=new qm;Yn.setAnimationLoop(Cn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(C){mt=C,Ae.setAnimationLoop(C),C===null?Yn.stop():Yn.start()},Ae.addEventListener("sessionstart",Rn),Ae.addEventListener("sessionend",ki),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(W),W=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,W,F),_=Te.get(C,I.length),_.init(W),I.push(_),ye.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ie.setFromProjectionMatrix(ye),fe=this.localClippingEnabled,$=Ye.init(this.clippingPlanes,fe),T=ge.get(C,g.length),T.init(),g.push(T),Ae.enabled===!0&&Ae.isPresenting===!0){const Ce=R.xr.getDepthSensingMesh();Ce!==null&&pi(Ce,W,-1/0,R.sortObjects)}pi(C,W,0,R.sortObjects),T.finish(),R.sortObjects===!0&&T.sort(B,de),je=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,je&&Le.addToRenderList(T,C),this.info.render.frame++,$===!0&&Ye.beginShadows();const Z=_.state.shadowsArray;Me.render(Z,C,W),$===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=T.opaque,X=T.transmissive;if(_.setupLights(),W.isArrayCamera){const Ce=W.cameras;if(X.length>0)for(let Ue=0,Be=Ce.length;Ue<Be;Ue++){const be=Ce[Ue];zi(J,X,C,be)}je&&Le.render(C);for(let Ue=0,Be=Ce.length;Ue<Be;Ue++){const be=Ce[Ue];Ho(T,C,be,be.viewport)}}else X.length>0&&zi(J,X,C,W),je&&Le.render(C),Ho(T,C,W);F!==null&&(Je.updateMultisampleRenderTarget(F),Je.updateRenderTargetMipmap(F)),C.isScene===!0&&C.onAfterRender(R,C,W),st.resetDefaultState(),K=-1,P=null,I.pop(),I.length>0?(_=I[I.length-1],$===!0&&Ye.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,g.pop(),g.length>0?T=g[g.length-1]:T=null};function pi(C,W,Z,J){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ie.intersectsSprite(C)){J&&Pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);const Ue=b.update(C),Be=C.material;Be.visible&&T.push(C,Ue,Be,Z,Pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ie.intersectsObject(C))){const Ue=b.update(C),Be=C.material;if(J&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Pe.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),Pe.copy(Ue.boundingSphere.center)),Pe.applyMatrix4(C.matrixWorld).applyMatrix4(ye)),Array.isArray(Be)){const be=Ue.groups;for(let et=0,Qe=be.length;et<Qe;et++){const Ge=be[et],ht=Be[Ge.materialIndex];ht&&ht.visible&&T.push(C,Ue,ht,Z,Pe.z,Ge)}}else Be.visible&&T.push(C,Ue,Be,Z,Pe.z,null)}}const Ce=C.children;for(let Ue=0,Be=Ce.length;Ue<Be;Ue++)pi(Ce[Ue],W,Z,J)}function Ho(C,W,Z,J){const X=C.opaque,Ce=C.transmissive,Ue=C.transparent;_.setupLightsView(Z),$===!0&&Ye.setGlobalState(R.clippingPlanes,Z),J&&We.viewport(A.copy(J)),X.length>0&&mi(X,W,Z),Ce.length>0&&mi(Ce,W,Z),Ue.length>0&&mi(Ue,W,Z),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function zi(C,W,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[J.id]===void 0&&(_.state.transmissionRenderTarget[J.id]=new _r(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?Vs:Ii,minFilter:Wr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const Ce=_.state.transmissionRenderTarget[J.id],Ue=J.viewport||A;Ce.setSize(Ue.z,Ue.w);const Be=R.getRenderTarget();R.setRenderTarget(Ce),R.getClearColor(ie),le=R.getClearAlpha(),le<1&&R.setClearColor(16777215,.5),R.clear(),je&&Le.render(Z);const be=R.toneMapping;R.toneMapping=gr;const et=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),_.setupLightsView(J),$===!0&&Ye.setGlobalState(R.clippingPlanes,J),mi(C,Z,J),Je.updateMultisampleRenderTarget(Ce),Je.updateRenderTargetMipmap(Ce),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let Ge=0,ht=W.length;Ge<ht;Ge++){const Ut=W[Ge],Pt=Ut.object,Kt=Ut.geometry,ot=Ut.material,Xe=Ut.group;if(ot.side===Li&&Pt.layers.test(J.layers)){const Mt=ot.side;ot.side=wn,ot.needsUpdate=!0,Sr(Pt,Z,J,Kt,ot,Xe),ot.side=Mt,ot.needsUpdate=!0,Qe=!0}}Qe===!0&&(Je.updateMultisampleRenderTarget(Ce),Je.updateRenderTargetMipmap(Ce))}R.setRenderTarget(Be),R.setClearColor(ie,le),et!==void 0&&(J.viewport=et),R.toneMapping=be}function mi(C,W,Z){const J=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Ce=C.length;X<Ce;X++){const Ue=C[X],Be=Ue.object,be=Ue.geometry,et=J===null?Ue.material:J,Qe=Ue.group;Be.layers.test(Z.layers)&&Sr(Be,W,Z,be,et,Qe)}}function Sr(C,W,Z,J,X,Ce){C.onBeforeRender(R,W,Z,J,X,Ce),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(R,W,Z,J,C,Ce),X.transparent===!0&&X.side===Li&&X.forceSinglePass===!1?(X.side=wn,X.needsUpdate=!0,R.renderBufferDirect(Z,W,J,X,C,Ce),X.side=vr,X.needsUpdate=!0,R.renderBufferDirect(Z,W,J,X,C,Ce),X.side=Li):R.renderBufferDirect(Z,W,J,X,C,Ce),C.onAfterRender(R,W,Z,J,X,Ce)}function Bi(C,W,Z){W.isScene!==!0&&(W=Fe);const J=qe.get(C),X=_.state.lights,Ce=_.state.shadowsArray,Ue=X.state.version,Be=Y.getParameters(C,X.state,Ce,W,Z),be=Y.getProgramCacheKey(Be);let et=J.programs;J.environment=C.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(C.isMeshStandardMaterial?E:U).get(C.envMap||J.environment),J.envMapRotation=J.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",Ze),et=new Map,J.programs=et);let Qe=et.get(be);if(Qe!==void 0){if(J.currentProgram===Qe&&J.lightsStateVersion===Ue)return Go(C,Be),Qe}else Be.uniforms=Y.getUniforms(C),C.onBeforeCompile(Be,R),Qe=Y.acquireProgram(Be,be),et.set(be,Qe),J.uniforms=Be.uniforms;const Ge=J.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ge.clippingPlanes=Ye.uniform),Go(C,Be),J.needsLights=Wo(C),J.lightsStateVersion=Ue,J.needsLights&&(Ge.ambientLightColor.value=X.state.ambient,Ge.lightProbe.value=X.state.probe,Ge.directionalLights.value=X.state.directional,Ge.directionalLightShadows.value=X.state.directionalShadow,Ge.spotLights.value=X.state.spot,Ge.spotLightShadows.value=X.state.spotShadow,Ge.rectAreaLights.value=X.state.rectArea,Ge.ltc_1.value=X.state.rectAreaLTC1,Ge.ltc_2.value=X.state.rectAreaLTC2,Ge.pointLights.value=X.state.point,Ge.pointLightShadows.value=X.state.pointShadow,Ge.hemisphereLights.value=X.state.hemi,Ge.directionalShadowMap.value=X.state.directionalShadowMap,Ge.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ge.spotShadowMap.value=X.state.spotShadowMap,Ge.spotLightMatrix.value=X.state.spotLightMatrix,Ge.spotLightMap.value=X.state.spotLightMap,Ge.pointShadowMap.value=X.state.pointShadowMap,Ge.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=Qe,J.uniformsList=null,Qe}function Vo(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=Tl.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function Go(C,W){const Z=qe.get(C);Z.outputColorSpace=W.outputColorSpace,Z.batching=W.batching,Z.batchingColor=W.batchingColor,Z.instancing=W.instancing,Z.instancingColor=W.instancingColor,Z.instancingMorph=W.instancingMorph,Z.skinning=W.skinning,Z.morphTargets=W.morphTargets,Z.morphNormals=W.morphNormals,Z.morphColors=W.morphColors,Z.morphTargetsCount=W.morphTargetsCount,Z.numClippingPlanes=W.numClippingPlanes,Z.numIntersection=W.numClipIntersection,Z.vertexAlphas=W.vertexAlphas,Z.vertexTangents=W.vertexTangents,Z.toneMapping=W.toneMapping}function kl(C,W,Z,J,X){W.isScene!==!0&&(W=Fe),Je.resetTextureUnits();const Ce=W.fog,Ue=J.isMeshStandardMaterial?W.environment:null,Be=F===null?R.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:xr,be=(J.isMeshStandardMaterial?E:U).get(J.envMap||Ue),et=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Qe=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ge=!!Z.morphAttributes.position,ht=!!Z.morphAttributes.normal,Ut=!!Z.morphAttributes.color;let Pt=gr;J.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Pt=R.toneMapping);const Kt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ot=Kt!==void 0?Kt.length:0,Xe=qe.get(J),Mt=_.state.lights;if($===!0&&(fe===!0||C!==P)){const mn=C===P&&J.id===K;Ye.setState(J,C,mn)}let vt=!1;J.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Mt.state.version||Xe.outputColorSpace!==Be||X.isBatchedMesh&&Xe.batching===!1||!X.isBatchedMesh&&Xe.batching===!0||X.isBatchedMesh&&Xe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Xe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Xe.instancing===!1||!X.isInstancedMesh&&Xe.instancing===!0||X.isSkinnedMesh&&Xe.skinning===!1||!X.isSkinnedMesh&&Xe.skinning===!0||X.isInstancedMesh&&Xe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Xe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Xe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Xe.instancingMorph===!1&&X.morphTexture!==null||Xe.envMap!==be||J.fog===!0&&Xe.fog!==Ce||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ye.numPlanes||Xe.numIntersection!==Ye.numIntersection)||Xe.vertexAlphas!==et||Xe.vertexTangents!==Qe||Xe.morphTargets!==Ge||Xe.morphNormals!==ht||Xe.morphColors!==Ut||Xe.toneMapping!==Pt||Xe.morphTargetsCount!==ot)&&(vt=!0):(vt=!0,Xe.__version=J.version);let Pn=Xe.currentProgram;vt===!0&&(Pn=Bi(J,W,X));let Hi=!1,$t=!1,Vi=!1;const Ct=Pn.getUniforms(),bn=Xe.uniforms;if(We.useProgram(Pn.program)&&(Hi=!0,$t=!0,Vi=!0),J.id!==K&&(K=J.id,$t=!0),Hi||P!==C){Ct.setValue(O,"projectionMatrix",C.projectionMatrix),Ct.setValue(O,"viewMatrix",C.matrixWorldInverse);const mn=Ct.map.cameraPosition;mn!==void 0&&mn.setValue(O,Ee.setFromMatrixPosition(C.matrixWorld)),pt.logarithmicDepthBuffer&&Ct.setValue(O,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ct.setValue(O,"isOrthographic",C.isOrthographicCamera===!0),P!==C&&(P=C,$t=!0,Vi=!0)}if(X.isSkinnedMesh){Ct.setOptional(O,X,"bindMatrix"),Ct.setOptional(O,X,"bindMatrixInverse");const mn=X.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Ct.setValue(O,"boneTexture",mn.boneTexture,Je))}X.isBatchedMesh&&(Ct.setOptional(O,X,"batchingTexture"),Ct.setValue(O,"batchingTexture",X._matricesTexture,Je),Ct.setOptional(O,X,"batchingIdTexture"),Ct.setValue(O,"batchingIdTexture",X._indirectTexture,Je),Ct.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Ct.setValue(O,"batchingColorTexture",X._colorsTexture,Je));const Xs=Z.morphAttributes;if((Xs.position!==void 0||Xs.normal!==void 0||Xs.color!==void 0)&&at.update(X,Z,Pn),($t||Xe.receiveShadow!==X.receiveShadow)&&(Xe.receiveShadow=X.receiveShadow,Ct.setValue(O,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(bn.envMap.value=be,bn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(bn.envMapIntensity.value=W.environmentIntensity),$t&&(Ct.setValue(O,"toneMappingExposure",R.toneMappingExposure),Xe.needsLights&&gi(bn,Vi),Ce&&J.fog===!0&&ve.refreshFogUniforms(bn,Ce),ve.refreshMaterialUniforms(bn,J,ue,se,_.state.transmissionRenderTarget[C.id]),Tl.upload(O,Vo(Xe),bn,Je)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Tl.upload(O,Vo(Xe),bn,Je),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ct.setValue(O,"center",X.center),Ct.setValue(O,"modelViewMatrix",X.modelViewMatrix),Ct.setValue(O,"normalMatrix",X.normalMatrix),Ct.setValue(O,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const mn=J.uniformsGroups;for(let yr=0,Xo=mn.length;yr<Xo;yr++){const qr=mn[yr];wt.update(qr,Pn),wt.bind(qr,Pn)}}return Pn}function gi(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Wo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(C,W,Z){qe.get(C.texture).__webglTexture=W,qe.get(C.depthTexture).__webglTexture=Z;const J=qe.get(C);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){const Z=qe.get(C);Z.__webglFramebuffer=W,Z.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,Z=0){F=C,Q=W,z=Z;let J=!0,X=null,Ce=!1,Ue=!1;if(C){const be=qe.get(C);if(be.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(O.FRAMEBUFFER,null),J=!1;else if(be.__webglFramebuffer===void 0)Je.setupRenderTarget(C);else if(be.__hasExternalTextures)Je.rebindTextures(C,qe.get(C.texture).__webglTexture,qe.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ge=C.depthTexture;if(be.__boundDepthTexture!==Ge){if(Ge!==null&&qe.has(Ge)&&(C.width!==Ge.image.width||C.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(C)}}const et=C.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ue=!0);const Qe=qe.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?X=Qe[W][Z]:X=Qe[W],Ce=!0):C.samples>0&&Je.useMultisampledRTT(C)===!1?X=qe.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?X=Qe[Z]:X=Qe,A.copy(C.viewport),H.copy(C.scissor),ce=C.scissorTest}else A.copy(ae).multiplyScalar(ue).floor(),H.copy(N).multiplyScalar(ue).floor(),ce=re;if(We.bindFramebuffer(O.FRAMEBUFFER,X)&&J&&We.drawBuffers(C,X),We.viewport(A),We.scissor(H),We.setScissorTest(ce),Ce){const be=qe.get(C.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+W,be.__webglTexture,Z)}else if(Ue){const be=qe.get(C.texture),et=W||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,be.__webglTexture,Z||0,et)}K=-1},this.readRenderTargetPixels=function(C,W,Z,J,X,Ce,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){We.bindFramebuffer(O.FRAMEBUFFER,Be);try{const be=C.texture,et=be.format,Qe=be.type;if(!pt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-J&&Z>=0&&Z<=C.height-X&&O.readPixels(W,Z,J,X,it.convert(et),it.convert(Qe),Ce)}finally{const be=F!==null?qe.get(F).__webglFramebuffer:null;We.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(C,W,Z,J,X,Ce,Ue){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=qe.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){We.bindFramebuffer(O.FRAMEBUFFER,Be);try{const be=C.texture,et=be.format,Qe=be.type;if(!pt.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-J&&Z>=0&&Z<=C.height-X){const Ge=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ge),O.bufferData(O.PIXEL_PACK_BUFFER,Ce.byteLength,O.STREAM_READ),O.readPixels(W,Z,J,X,it.convert(et),it.convert(Qe),0),O.flush();const ht=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);await k_(O,ht,4);try{O.bindBuffer(O.PIXEL_PACK_BUFFER,Ge),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ce)}finally{O.deleteBuffer(Ge),O.deleteSync(ht)}return Ce}}finally{const be=F!==null?qe.get(F).__webglFramebuffer:null;We.bindFramebuffer(O.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(C,W=null,Z=0){C.isTexture!==!0&&(Io("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);const J=Math.pow(2,-Z),X=Math.floor(C.image.width*J),Ce=Math.floor(C.image.height*J),Ue=W!==null?W.x:0,Be=W!==null?W.y:0;Je.setTexture2D(C,0),O.copyTexSubImage2D(O.TEXTURE_2D,Z,0,0,Ue,Be,X,Ce),We.unbindTexture()},this.copyTextureToTexture=function(C,W,Z=null,J=null,X=0){C.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,C=arguments[1],W=arguments[2],X=arguments[3]||0,Z=null);let Ce,Ue,Be,be,et,Qe;Z!==null?(Ce=Z.max.x-Z.min.x,Ue=Z.max.y-Z.min.y,Be=Z.min.x,be=Z.min.y):(Ce=C.image.width,Ue=C.image.height,Be=0,be=0),J!==null?(et=J.x,Qe=J.y):(et=0,Qe=0);const Ge=it.convert(W.format),ht=it.convert(W.type);Je.setTexture2D(W,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Ut=O.getParameter(O.UNPACK_ROW_LENGTH),Pt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Kt=O.getParameter(O.UNPACK_SKIP_PIXELS),ot=O.getParameter(O.UNPACK_SKIP_ROWS),Xe=O.getParameter(O.UNPACK_SKIP_IMAGES),Mt=C.isCompressedTexture?C.mipmaps[X]:C.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,Mt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Be),O.pixelStorei(O.UNPACK_SKIP_ROWS,be),C.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,X,et,Qe,Ce,Ue,Ge,ht,Mt.data):C.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,X,et,Qe,Mt.width,Mt.height,Ge,Mt.data):O.texSubImage2D(O.TEXTURE_2D,X,et,Qe,Ce,Ue,Ge,ht,Mt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Ut),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,ot),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xe),X===0&&W.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),We.unbindTexture()},this.copyTextureToTexture3D=function(C,W,Z=null,J=null,X=0){C.isTexture!==!0&&(Io("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,C=arguments[2],W=arguments[3],X=arguments[4]||0);let Ce,Ue,Be,be,et,Qe,Ge,ht,Ut;const Pt=C.isCompressedTexture?C.mipmaps[X]:C.image;Z!==null?(Ce=Z.max.x-Z.min.x,Ue=Z.max.y-Z.min.y,Be=Z.max.z-Z.min.z,be=Z.min.x,et=Z.min.y,Qe=Z.min.z):(Ce=Pt.width,Ue=Pt.height,Be=Pt.depth,be=0,et=0,Qe=0),J!==null?(Ge=J.x,ht=J.y,Ut=J.z):(Ge=0,ht=0,Ut=0);const Kt=it.convert(W.format),ot=it.convert(W.type);let Xe;if(W.isData3DTexture)Je.setTexture3D(W,0),Xe=O.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Je.setTexture2DArray(W,0),Xe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,W.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,W.unpackAlignment);const Mt=O.getParameter(O.UNPACK_ROW_LENGTH),vt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Pn=O.getParameter(O.UNPACK_SKIP_PIXELS),Hi=O.getParameter(O.UNPACK_SKIP_ROWS),$t=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Pt.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Pt.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,be),O.pixelStorei(O.UNPACK_SKIP_ROWS,et),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Qe),C.isDataTexture||C.isData3DTexture?O.texSubImage3D(Xe,X,Ge,ht,Ut,Ce,Ue,Be,Kt,ot,Pt.data):W.isCompressedArrayTexture?O.compressedTexSubImage3D(Xe,X,Ge,ht,Ut,Ce,Ue,Be,Kt,Pt.data):O.texSubImage3D(Xe,X,Ge,ht,Ut,Ce,Ue,Be,Kt,ot,Pt),O.pixelStorei(O.UNPACK_ROW_LENGTH,Mt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,vt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Hi),O.pixelStorei(O.UNPACK_SKIP_IMAGES,$t),X===0&&W.generateMipmaps&&O.generateMipmap(Xe),We.unbindTexture()},this.initRenderTarget=function(C){qe.get(C).__webglFramebuffer===void 0&&Je.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Je.setTextureCube(C,0):C.isData3DTexture?Je.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Je.setTexture2DArray(C,0):Je.setTexture2D(C,0),We.unbindTexture()},this.resetState=function(){Q=0,z=0,F=null,We.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Hf?"display-p3":"srgb",n.unpackColorSpace=St.workingColorSpace===Nl?"display-p3":"srgb"}}class mm extends An{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class KM extends pn{constructor(e=null,n=1,r=1,a,u,f,d,p,m=Tn,v=Tn,S,x){super(null,f,d,p,m,v,a,u,S,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $M extends zo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dl=new ne,Ul=new ne,gm=new Gt,Do=new km,gl=new Fl,Kc=new ne,vm=new ne;class ZM extends An{constructor(e=new Oi,n=new $M){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)Dl.fromBufferAttribute(n,a-1),Ul.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=Dl.distanceTo(Ul);e.setAttribute("lineDistance",new Ui(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(a),gl.radius+=u,e.ray.intersectsSphere(gl)===!1)return;gm.copy(a).invert(),Do.copy(e.ray).applyMatrix4(gm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const y=Math.max(0,f.start),w=Math.min(v.count,f.start+f.count);for(let T=y,_=w-1;T<_;T+=m){const g=v.getX(T),I=v.getX(T+1),R=vl(this,e,Do,p,g,I);R&&n.push(R)}if(this.isLineLoop){const T=v.getX(w-1),_=v.getX(y),g=vl(this,e,Do,p,T,_);g&&n.push(g)}}else{const y=Math.max(0,f.start),w=Math.min(x.count,f.start+f.count);for(let T=y,_=w-1;T<_;T+=m){const g=vl(this,e,Do,p,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=vl(this,e,Do,p,w-1,y);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function vl(o,e,n,r,a,u){const f=o.geometry.attributes.position;if(Dl.fromBufferAttribute(f,a),Ul.fromBufferAttribute(f,u),n.distanceSqToSegment(Dl,Ul,Kc,vm)>r)return;Kc.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Kc);if(!(p<e.near||p>e.far))return{distance:p,point:vm.clone().applyMatrix4(o.matrixWorld),index:a,face:null,faceIndex:null,object:o}}const _m=new ne,xm=new ne;class QM extends ZM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)_m.fromBufferAttribute(n,a),xm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+_m.distanceTo(xm);e.setAttribute("lineDistance",new Ui(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _l extends Fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class JM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Sm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Sm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:If}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=If);function eE({mouseForce:o=20,cursorSize:e=100,isViscous:n=!1,viscous:r=30,iterationsViscous:a=32,iterationsPoisson:u=32,dt:f=.014,BFECC:d=!0,resolution:p=.5,isBounce:m=!1,colors:v=["#5227FF","#FF9FFC","#B19EEF"],style:S={},className:x="",autoDemo:y=!0,autoSpeed:w=.5,autoIntensity:T=2.2,takeoverDuration:_=.25,autoResumeDelay:g=1e3,autoRampDuration:I=.6}){const R=ui.useRef(null),D=ui.useRef(null),Q=ui.useRef(null),z=ui.useRef(null),F=ui.useRef(null),K=ui.useRef(!0),P=ui.useRef(null);return ui.useEffect(()=>{if(!R.current)return;function A(oe){let b;Array.isArray(oe)&&oe.length>0?oe.length===1?b=[oe[0],oe[0]]:b=oe:b=["#ffffff","#ffffff"];const Y=b.length,ve=new Uint8Array(Y*4);for(let Te=0;Te<Y;Te++){const Ye=new xt(b[Te]);ve[Te*4+0]=Math.round(Ye.r*255),ve[Te*4+1]=Math.round(Ye.g*255),ve[Te*4+2]=Math.round(Ye.b*255),ve[Te*4+3]=255}const ge=new KM(ve,Y,1,Wn);return ge.magFilter=hn,ge.minFilter=hn,ge.wrapS=ii,ge.wrapT=ii,ge.generateMipmaps=!1,ge.needsUpdate=!0,ge}const H=A(v),ce=new Yt(0,0,0,0);class ie{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(b){this.container=b,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new jM({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new xt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new JM,this.clock.start()}resize(){if(!this.container)return;const b=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(b.width)),this.height=Math.max(1,Math.floor(b.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const le=new ie;class he{constructor(){this.mouseMoved=!1,this.coords=new rt,this.coords_old=new rt,this.diff=new rt,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new rt,this.takeoverTo=new rt,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(b){this.container=b,this.docTarget=b.ownerDocument||null;const Y=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);Y&&(this.listenerTarget=Y,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(b,Y){if(!this.container)return!1;const ve=this.container.getBoundingClientRect();return ve.width===0||ve.height===0?!1:b>=ve.left&&b<=ve.right&&Y>=ve.top&&Y<=ve.bottom}updateHoverState(b,Y){return this.isHoverInside=this.isPointInside(b,Y),this.isHoverInside}setCoords(b,Y){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const ve=this.container.getBoundingClientRect();if(ve.width===0||ve.height===0)return;const ge=(b-ve.left)/ve.width,Te=(Y-ve.top)/ve.height;this.coords.set(ge*2-1,-(Te*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(b,Y){this.coords.set(b,Y),this.mouseMoved=!0}onDocumentMouseMove(b){if(this.updateHoverState(b.clientX,b.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const Y=this.container.getBoundingClientRect();if(Y.width===0||Y.height===0)return;const ve=(b.clientX-Y.left)/Y.width,ge=(b.clientY-Y.top)/Y.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(ve*2-1,-(ge*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(b.clientX,b.clientY),this.hasUserControl=!0}}onDocumentTouchStart(b){if(b.touches.length!==1)return;const Y=b.touches[0];this.updateHoverState(Y.clientX,Y.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Y.clientX,Y.clientY),this.hasUserControl=!0)}onDocumentTouchMove(b){if(b.touches.length!==1)return;const Y=b.touches[0];this.updateHoverState(Y.clientX,Y.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(Y.clientX,Y.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const b=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(b>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const Y=b*b*(3-2*b);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,Y)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const se=new he;class ue{constructor(b,Y,ve){this.mouse=b,this.manager=Y,this.enabled=ve.enabled,this.speed=ve.speed,this.resumeDelay=ve.resumeDelay||3e3,this.rampDurationMs=(ve.rampDuration||0)*1e3,this.active=!1,this.current=new rt(0,0),this.target=new rt,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new rt,this.pickNewTarget()}pickNewTarget(){const b=Math.random;this.target.set((b()*2-1)*(1-this.margin),(b()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const b=performance.now();if(b-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=b,this.activationTime=b),!this.active)return;this.mouse.isAutoActive=!0;let ve=(b-this.lastTime)/1e3;this.lastTime=b,ve>.2&&(ve=.016);const ge=this._tmpDir.subVectors(this.target,this.current),Te=ge.length();if(Te<.01){this.pickNewTarget();return}ge.normalize();let Ye=1;if(this.rampDurationMs>0){const at=Math.min(1,(b-this.activationTime)/this.rampDurationMs);Ye=at*at*(3-2*at)}const Me=this.speed*ve*Ye,Le=Math.min(Me,Te);this.current.addScaledVector(ge,Le),this.mouse.setNormalized(this.current.x,this.current.y)}}const B=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,de=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,ae=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,N=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,re=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,Ie=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,$=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,fe=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,ye=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,Ee=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Pe{constructor(b){this.props=b||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new mm,this.camera=new Ll,this.uniforms&&(this.material=new _l(this.props.material),this.geometry=new Xr(2,2),this.plane=new Xn(this.geometry,this.material),this.scene.add(this.plane))}update(){le.renderer.setRenderTarget(this.props.output||null),le.renderer.render(this.scene,this.camera),le.renderer.setRenderTarget(null)}}class Fe extends Pe{constructor(b){super({material:{vertexShader:B,fragmentShader:N,uniforms:{boundarySpace:{value:b.cellScale},px:{value:b.cellScale},fboSize:{value:b.fboSize},velocity:{value:b.src.texture},dt:{value:b.dt},isBFECC:{value:!0}}},output:b.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const b=new Oi,Y=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);b.setAttribute("position",new ri(Y,3));const ve=new _l({vertexShader:de,fragmentShader:N,uniforms:this.uniforms});this.line=new QM(b,ve),this.scene.add(this.line)}update({dt:b,isBounce:Y,BFECC:ve}){this.uniforms.dt.value=b,this.line.visible=Y,this.uniforms.isBFECC.value=ve,super.update()}}class je extends Pe{constructor(b){super({output:b.dst}),this.init(b)}init(b){super.init();const Y=new Xr(1,1),ve=new _l({vertexShader:ae,fragmentShader:$,blending:Zc,depthWrite:!1,uniforms:{px:{value:b.cellScale},force:{value:new rt(0,0)},center:{value:new rt(0,0)},scale:{value:new rt(b.cursor_size,b.cursor_size)}}});this.mouse=new Xn(Y,ve),this.scene.add(this.mouse)}update(b){const Y=se.diff.x/2*b.mouse_force,ve=se.diff.y/2*b.mouse_force,ge=b.cursor_size*b.cellScale.x,Te=b.cursor_size*b.cellScale.y,Ye=Math.min(Math.max(se.coords.x,-1+ge+b.cellScale.x*2),1-ge-b.cellScale.x*2),Me=Math.min(Math.max(se.coords.y,-1+Te+b.cellScale.y*2),1-Te-b.cellScale.y*2),Le=this.mouse.material.uniforms;Le.force.value.set(Y,ve),Le.center.value.set(Ye,Me),Le.scale.value.set(b.cursor_size,b.cursor_size),super.update()}}class yt extends Pe{constructor(b){super({material:{vertexShader:B,fragmentShader:Ee,uniforms:{boundarySpace:{value:b.boundarySpace},velocity:{value:b.src.texture},velocity_new:{value:b.dst_.texture},v:{value:b.viscous},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst,output0:b.dst_,output1:b.dst}),this.init()}update({viscous:b,iterations:Y,dt:ve}){let ge,Te;this.uniforms.v.value=b;for(let Ye=0;Ye<Y;Ye++)Ye%2===0?(ge=this.props.output0,Te=this.props.output1):(ge=this.props.output1,Te=this.props.output0),this.uniforms.velocity_new.value=ge.texture,this.props.output=Te,this.uniforms.dt.value=ve,super.update();return Te}}class O extends Pe{constructor(b){super({material:{vertexShader:B,fragmentShader:Ie,uniforms:{boundarySpace:{value:b.boundarySpace},velocity:{value:b.src.texture},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst}),this.init()}update({vel:b}){this.uniforms.velocity.value=b.texture,super.update()}}class Tt extends Pe{constructor(b){super({material:{vertexShader:B,fragmentShader:fe,uniforms:{boundarySpace:{value:b.boundarySpace},pressure:{value:b.dst_.texture},divergence:{value:b.src.texture},px:{value:b.cellScale}}},output:b.dst,output0:b.dst_,output1:b.dst}),this.init()}update({iterations:b}){let Y,ve;for(let ge=0;ge<b;ge++)ge%2===0?(Y=this.props.output0,ve=this.props.output1):(Y=this.props.output1,ve=this.props.output0),this.uniforms.pressure.value=Y.texture,this.props.output=ve,super.update();return ve}}class dt extends Pe{constructor(b){super({material:{vertexShader:B,fragmentShader:ye,uniforms:{boundarySpace:{value:b.boundarySpace},pressure:{value:b.src_p.texture},velocity:{value:b.src_v.texture},px:{value:b.cellScale},dt:{value:b.dt}}},output:b.dst}),this.init()}update({vel:b,pressure:Y}){this.uniforms.velocity.value=b.texture,this.uniforms.pressure.value=Y.texture,super.update()}}class pt{constructor(b){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...b},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new rt,this.cellScale=new rt,this.boundarySpace=new rt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Vs:hi}createAllFBO(){const Y={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:hn,magFilter:hn,wrapS:ii,wrapT:ii};for(let ve in this.fbos)this.fbos[ve]=new _r(this.fboSize.x,this.fboSize.y,Y)}createShaderPass(){this.advection=new Fe({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new je({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new yt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new O({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Tt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new dt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const b=Math.max(1,Math.round(this.options.resolution*le.width)),Y=Math.max(1,Math.round(this.options.resolution*le.height)),ve=1/b,ge=1/Y;this.cellScale.set(ve,ge),this.fboSize.set(b,Y)}resize(){this.calcSize();for(let b in this.fbos)this.fbos[b].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let b=this.fbos.vel_1;this.options.isViscous&&(b=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:b});const Y=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:b,pressure:Y})}}class We{constructor(){this.init()}init(){this.simulation=new pt,this.scene=new mm,this.camera=new Ll,this.output=new Xn(new Xr(2,2),new _l({vertexShader:B,fragmentShader:re,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new rt},palette:{value:H},bgColor:{value:ce}}})),this.scene.add(this.output)}addScene(b){this.scene.add(b)}resize(){this.simulation.resize()}render(){le.renderer.setRenderTarget(null),le.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class At{constructor(b){this.props=b,le.init(b.$wrapper),se.init(b.$wrapper),se.autoIntensity=b.autoIntensity,se.takeoverDuration=b.takeoverDuration,this.lastUserInteraction=performance.now(),se.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new ue(se,this,{enabled:b.autoDemo,speed:b.autoSpeed,resumeDelay:b.autoResumeDelay,rampDuration:b.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():K.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(le.renderer.domElement),this.output=new We}resize(){le.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),se.update(),le.update(),this.output.update()}loop(){this.running&&(this.render(),z.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,z.current&&(cancelAnimationFrame(z.current),z.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),se.dispose(),le.renderer){const b=le.renderer.domElement;b&&b.parentNode&&b.parentNode.removeChild(b),le.renderer.dispose()}}catch{}}}const qe=R.current;qe.style.position=qe.style.position||"relative",qe.style.overflow=qe.style.overflow||"hidden";const Je=new At({$wrapper:qe,autoDemo:y,autoSpeed:w,autoIntensity:T,takeoverDuration:_,autoResumeDelay:g,autoRampDuration:I});D.current=Je,(()=>{if(!D.current)return;const oe=D.current.output?.simulation;if(!oe)return;const b=oe.options.resolution;Object.assign(oe.options,{mouse_force:o,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:u,dt:f,BFECC:d,resolution:p,isBounce:m}),p!==b&&oe.resize()})(),Je.start();const E=new IntersectionObserver(oe=>{const b=oe[0],Y=b.isIntersecting&&b.intersectionRatio>0;K.current=Y,D.current&&(Y&&!document.hidden?D.current.start():D.current.pause())},{threshold:[0,.01,.1]});E.observe(qe),F.current=E;const te=new ResizeObserver(()=>{D.current&&(P.current&&cancelAnimationFrame(P.current),P.current=requestAnimationFrame(()=>{D.current&&D.current.resize()}))});return te.observe(qe),Q.current=te,()=>{if(z.current&&cancelAnimationFrame(z.current),Q.current)try{Q.current.disconnect()}catch{}if(F.current)try{F.current.disconnect()}catch{}D.current&&D.current.dispose(),D.current=null}},[d,e,f,m,n,u,a,o,p,r,v,y,w,T,_,g,I]),ui.useEffect(()=>{const A=D.current;if(!A)return;const H=A.output?.simulation;if(!H)return;const ce=H.options.resolution;Object.assign(H.options,{mouse_force:o,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:u,dt:f,BFECC:d,resolution:p,isBounce:m}),A.autoDriver&&(A.autoDriver.enabled=y,A.autoDriver.speed=w,A.autoDriver.resumeDelay=g,A.autoDriver.rampDurationMs=I*1e3,A.autoDriver.mouse&&(A.autoDriver.mouse.autoIntensity=T,A.autoDriver.mouse.takeoverDuration=_)),p!==ce&&H.resize()},[o,e,n,r,a,u,f,d,p,m,y,w,T,_,g,I]),$c.jsx("div",{ref:R,className:`liquid-ether-container ${x||""}`,style:S})}Bv.createRoot(document.getElementById("root")).render($c.jsx(ui.StrictMode,{children:$c.jsx(eE,{})}));

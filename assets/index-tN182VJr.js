(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var ac={exports:{}},yo={},lc={exports:{}},ut={};var Lh;function xv(){if(Lh)return ut;Lh=1;var o=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function x(I){return I===null||typeof I!="object"?null:(I=S&&I[S]||I["@@iterator"],typeof I=="function"?I:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,T={};function _(I,te,De){this.props=I,this.context=te,this.refs=T,this.updater=De||y}_.prototype.isReactComponent={},_.prototype.setState=function(I,te){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,te,"setState")},_.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=_.prototype;function N(I,te,De){this.props=I,this.context=te,this.refs=T,this.updater=De||y}var P=N.prototype=new g;P.constructor=N,A(P,_.prototype),P.isPureReactComponent=!0;var D=Array.isArray,K=Object.prototype.hasOwnProperty,O={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function re(I,te,De){var Y,he={},Ee=null,Se=null;if(te!=null)for(Y in te.ref!==void 0&&(Se=te.ref),te.key!==void 0&&(Ee=""+te.key),te)K.call(te,Y)&&!F.hasOwnProperty(Y)&&(he[Y]=te[Y]);var Le=arguments.length-2;if(Le===1)he.children=De;else if(1<Le){for(var Oe=Array(Le),G=0;G<Le;G++)Oe[G]=arguments[G+2];he.children=Oe}if(I&&I.defaultProps)for(Y in Le=I.defaultProps,Le)he[Y]===void 0&&(he[Y]=Le[Y]);return{$$typeof:o,type:I,key:Ee,ref:Se,props:he,_owner:O.current}}function C(I,te){return{$$typeof:o,type:I.type,key:te,ref:I.ref,props:I.props,_owner:I._owner}}function E(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function q(I){var te={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(De){return te[De]})}var le=/\/+/g;function H(I,te){return typeof I=="object"&&I!==null&&I.key!=null?q(""+I.key):te.toString(36)}function oe(I,te,De,Y,he){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var Se=!1;if(I===null)Se=!0;else switch(Ee){case"string":case"number":Se=!0;break;case"object":switch(I.$$typeof){case o:case e:Se=!0}}if(Se)return Se=I,he=he(Se),I=Y===""?"."+H(Se,0):Y,D(he)?(De="",I!=null&&(De=I.replace(le,"$&/")+"/"),oe(he,te,De,"",function(G){return G})):he!=null&&(E(he)&&(he=C(he,De+(!he.key||Se&&Se.key===he.key?"":(""+he.key).replace(le,"$&/")+"/")+I)),te.push(he)),1;if(Se=0,Y=Y===""?".":Y+":",D(I))for(var Le=0;Le<I.length;Le++){Ee=I[Le];var Oe=Y+H(Ee,Le);Se+=oe(Ee,te,De,Oe,he)}else if(Oe=x(I),typeof Oe=="function")for(I=Oe.call(I),Le=0;!(Ee=I.next()).done;)Ee=Ee.value,Oe=Y+H(Ee,Le++),Se+=oe(Ee,te,De,Oe,he);else if(Ee==="object")throw te=String(I),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return Se}function ce(I,te,De){if(I==null)return I;var Y=[],he=0;return oe(I,Y,"","",function(Ee){return te.call(De,Ee,he++)}),Y}function me(I){if(I._status===-1){var te=I._result;te=te(),te.then(function(De){(I._status===0||I._status===-1)&&(I._status=1,I._result=De)},function(De){(I._status===0||I._status===-1)&&(I._status=2,I._result=De)}),I._status===-1&&(I._status=0,I._result=te)}if(I._status===1)return I._result.default;throw I._result}var ge={current:null},k={transition:null},se={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:k,ReactCurrentOwner:O};function $(){throw Error("act(...) is not supported in production builds of React.")}return ut.Children={map:ce,forEach:function(I,te,De){ce(I,function(){te.apply(this,arguments)},De)},count:function(I){var te=0;return ce(I,function(){te++}),te},toArray:function(I){return ce(I,function(te){return te})||[]},only:function(I){if(!E(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ut.Component=_,ut.Fragment=n,ut.Profiler=a,ut.PureComponent=N,ut.StrictMode=r,ut.Suspense=p,ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,ut.act=$,ut.cloneElement=function(I,te,De){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Y=A({},I.props),he=I.key,Ee=I.ref,Se=I._owner;if(te!=null){if(te.ref!==void 0&&(Ee=te.ref,Se=O.current),te.key!==void 0&&(he=""+te.key),I.type&&I.type.defaultProps)var Le=I.type.defaultProps;for(Oe in te)K.call(te,Oe)&&!F.hasOwnProperty(Oe)&&(Y[Oe]=te[Oe]===void 0&&Le!==void 0?Le[Oe]:te[Oe])}var Oe=arguments.length-2;if(Oe===1)Y.children=De;else if(1<Oe){Le=Array(Oe);for(var G=0;G<Oe;G++)Le[G]=arguments[G+2];Y.children=Le}return{$$typeof:o,type:I.type,key:he,ref:Ee,props:Y,_owner:Se}},ut.createContext=function(I){return I={$$typeof:f,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:u,_context:I},I.Consumer=I},ut.createElement=re,ut.createFactory=function(I){var te=re.bind(null,I);return te.type=I,te},ut.createRef=function(){return{current:null}},ut.forwardRef=function(I){return{$$typeof:d,render:I}},ut.isValidElement=E,ut.lazy=function(I){return{$$typeof:v,_payload:{_status:-1,_result:I},_init:me}},ut.memo=function(I,te){return{$$typeof:m,type:I,compare:te===void 0?null:te}},ut.startTransition=function(I){var te=k.transition;k.transition={};try{I()}finally{k.transition=te}},ut.unstable_act=$,ut.useCallback=function(I,te){return ge.current.useCallback(I,te)},ut.useContext=function(I){return ge.current.useContext(I)},ut.useDebugValue=function(){},ut.useDeferredValue=function(I){return ge.current.useDeferredValue(I)},ut.useEffect=function(I,te){return ge.current.useEffect(I,te)},ut.useId=function(){return ge.current.useId()},ut.useImperativeHandle=function(I,te,De){return ge.current.useImperativeHandle(I,te,De)},ut.useInsertionEffect=function(I,te){return ge.current.useInsertionEffect(I,te)},ut.useLayoutEffect=function(I,te){return ge.current.useLayoutEffect(I,te)},ut.useMemo=function(I,te){return ge.current.useMemo(I,te)},ut.useReducer=function(I,te,De){return ge.current.useReducer(I,te,De)},ut.useRef=function(I){return ge.current.useRef(I)},ut.useState=function(I){return ge.current.useState(I)},ut.useSyncExternalStore=function(I,te,De){return ge.current.useSyncExternalStore(I,te,De)},ut.useTransition=function(){return ge.current.useTransition()},ut.version="18.3.1",ut}var bh;function nf(){return bh||(bh=1,lc.exports=xv()),lc.exports}var Dh;function Sv(){if(Dh)return yo;Dh=1;var o=nf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function f(d,p,m){var v,S={},x=null,y=null;m!==void 0&&(x=""+m),p.key!==void 0&&(x=""+p.key),p.ref!==void 0&&(y=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(S[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)S[v]===void 0&&(S[v]=p[v]);return{$$typeof:e,type:d,key:x,ref:y,props:S,_owner:a.current}}return yo.Fragment=n,yo.jsx=f,yo.jsxs=f,yo}var Uh;function yv(){return Uh||(Uh=1,ac.exports=Sv()),ac.exports}var Yc=yv(),ai=nf(),za={},uc={exports:{}},Mn={},cc={exports:{}},fc={};var Nh;function Mv(){return Nh||(Nh=1,(function(o){function e(k,se){var $=k.length;k.push(se);e:for(;0<$;){var I=$-1>>>1,te=k[I];if(0<a(te,se))k[I]=se,k[$]=te,$=I;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var se=k[0],$=k.pop();if($!==se){k[0]=$;e:for(var I=0,te=k.length,De=te>>>1;I<De;){var Y=2*(I+1)-1,he=k[Y],Ee=Y+1,Se=k[Ee];if(0>a(he,$))Ee<te&&0>a(Se,he)?(k[I]=Se,k[Ee]=$,I=Ee):(k[I]=he,k[Y]=$,I=Y);else if(Ee<te&&0>a(Se,$))k[I]=Se,k[Ee]=$,I=Ee;else break e}}return se}function a(k,se){var $=k.sortIndex-se.sortIndex;return $!==0?$:k.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,S=null,x=3,y=!1,A=!1,T=!1,_=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(k){for(var se=n(m);se!==null;){if(se.callback===null)r(m);else if(se.startTime<=k)r(m),se.sortIndex=se.expirationTime,e(p,se);else break;se=n(m)}}function D(k){if(T=!1,P(k),!A)if(n(p)!==null)A=!0,me(K);else{var se=n(m);se!==null&&ge(D,se.startTime-k)}}function K(k,se){A=!1,T&&(T=!1,g(re),re=-1),y=!0;var $=x;try{for(P(se),S=n(p);S!==null&&(!(S.expirationTime>se)||k&&!q());){var I=S.callback;if(typeof I=="function"){S.callback=null,x=S.priorityLevel;var te=I(S.expirationTime<=se);se=o.unstable_now(),typeof te=="function"?S.callback=te:S===n(p)&&r(p),P(se)}else r(p);S=n(p)}if(S!==null)var De=!0;else{var Y=n(m);Y!==null&&ge(D,Y.startTime-se),De=!1}return De}finally{S=null,x=$,y=!1}}var O=!1,F=null,re=-1,C=5,E=-1;function q(){return!(o.unstable_now()-E<C)}function le(){if(F!==null){var k=o.unstable_now();E=k;var se=!0;try{se=F(!0,k)}finally{se?H():(O=!1,F=null)}}else O=!1}var H;if(typeof N=="function")H=function(){N(le)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ce=oe.port2;oe.port1.onmessage=le,H=function(){ce.postMessage(null)}}else H=function(){_(le,0)};function me(k){F=k,O||(O=!0,H())}function ge(k,se){re=_(function(){k(o.unstable_now())},se)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_continueExecution=function(){A||y||(A=!0,me(K))},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return n(p)},o.unstable_next=function(k){switch(x){case 1:case 2:case 3:var se=3;break;default:se=x}var $=x;x=se;try{return k()}finally{x=$}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(k,se){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var $=x;x=k;try{return se()}finally{x=$}},o.unstable_scheduleCallback=function(k,se,$){var I=o.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?I+$:I):$=I,k){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=$+te,k={id:v++,callback:se,priorityLevel:k,startTime:$,expirationTime:te,sortIndex:-1},$>I?(k.sortIndex=$,e(m,k),n(p)===null&&k===n(m)&&(T?(g(re),re=-1):T=!0,ge(D,$-I))):(k.sortIndex=te,e(p,k),A||y||(A=!0,me(K))),k},o.unstable_shouldYield=q,o.unstable_wrapCallback=function(k){var se=x;return function(){var $=x;x=se;try{return k.apply(this,arguments)}finally{x=$}}}})(fc)),fc}var Ih;function Ev(){return Ih||(Ih=1,cc.exports=Mv()),cc.exports}var Fh;function Tv(){if(Fh)return Mn;Fh=1;var o=nf(),e=Ev();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,s=1;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){f(t,i),f(t+"Capture",i)}function f(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function x(t){return p.call(S,t)?!0:p.call(v,t)?!1:m.test(t)?S[t]=!0:(v[t]=!0,!1)}function y(t,i,s,l){if(s!==null&&s.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:s!==null?!s.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function A(t,i,s,l){if(i===null||typeof i>"u"||y(t,i,s,l))return!0;if(l)return!1;if(s!==null)switch(s.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(t,i,s,l,c,h,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=s,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=M}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new T(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new T(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new T(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new T(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new T(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new T(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new T(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new T(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new T(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function N(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,N);_[i]=new T(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,N);_[i]=new T(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,N);_[i]=new T(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new T(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new T(t,1,!1,t.toLowerCase(),null,!0,!0)});function P(t,i,s,l){var c=_.hasOwnProperty(i)?_[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(A(i,s,c,l)&&(s=null),l||c===null?x(i)&&(s===null?t.removeAttribute(i):t.setAttribute(i,""+s)):c.mustUseProperty?t[c.propertyName]=s===null?c.type===3?!1:"":s:(i=c.attributeName,l=c.attributeNamespace,s===null?t.removeAttribute(i):(c=c.type,s=c===3||c===4&&s===!0?"":""+s,l?t.setAttributeNS(l,i,s):t.setAttribute(i,s))))}var D=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),O=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),q=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),ce=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),k=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var $=Object.assign,I;function te(t){if(I===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var De=!1;function Y(t,i){if(!t||De)return"";De=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var c=J.stack.split(`
`),h=l.stack.split(`
`),M=c.length-1,b=h.length-1;1<=M&&0<=b&&c[M]!==h[b];)b--;for(;1<=M&&0<=b;M--,b--)if(c[M]!==h[b]){if(M!==1||b!==1)do if(M--,b--,0>b||c[M]!==h[b]){var z=`
`+c[M].replace(" at new "," at ");return t.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",t.displayName)),z}while(1<=M&&0<=b);break}}}finally{De=!1,Error.prepareStackTrace=s}return(t=t?t.displayName||t.name:"")?te(t):""}function he(t){switch(t.tag){case 5:return te(t.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return t=Y(t.type,!1),t;case 11:return t=Y(t.type.render,!1),t;case 1:return t=Y(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case O:return"Portal";case C:return"Profiler";case re:return"StrictMode";case H:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case q:return(t.displayName||"Context")+".Consumer";case E:return(t._context.displayName||"Context")+".Provider";case le:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ce:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case me:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function Se(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Le(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Oe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function G(t){var i=Oe(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,h.call(this,M)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function gt(t){t._valueTracker||(t._valueTracker=G(t))}function Xe(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Oe(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ye(t,i){var s=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??t._wrapperState.initialChecked})}function lt(t,i){var s=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;s=Le(i.value!=null?i.value:s),t._wrapperState={initialChecked:l,initialValue:s,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function tt(t,i){i=i.checked,i!=null&&P(t,"checked",i,!1)}function rt(t,i){tt(t,i);var s=Le(i.value),l=i.type;if(s!=null)l==="number"?(s===0&&t.value===""||t.value!=s)&&(t.value=""+s):t.value!==""+s&&(t.value=""+s);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?U(t,i.type,s):i.hasOwnProperty("defaultValue")&&U(t,i.type,Le(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function ht(t,i,s){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,s||i===t.value||(t.value=i),t.defaultValue=i}s=t.name,s!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,s!==""&&(t.name=s)}function U(t,i,s){(i!=="number"||dt(t.ownerDocument)!==t)&&(s==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+s&&(t.defaultValue=""+s))}var w=Array.isArray;function ne(t,i,s,l){if(t=t.options,i){i={};for(var c=0;c<s.length;c++)i["$"+s[c]]=!0;for(s=0;s<t.length;s++)c=i.hasOwnProperty("$"+t[s].value),t[s].selected!==c&&(t[s].selected=c),c&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Le(s),i=null,c=0;c<t.length;c++){if(t[c].value===s){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function pe(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ae(t,i){var s=i.value;if(s==null){if(s=i.children,i=i.defaultValue,s!=null){if(i!=null)throw Error(n(92));if(w(s)){if(1<s.length)throw Error(n(93));s=s[0]}i=s}i==null&&(i=""),s=i}t._wrapperState={initialValue:Le(s)}}function L(t,i){var s=Le(i.value),l=Le(i.defaultValue);s!=null&&(s=""+s,s!==t.value&&(t.value=s),i.defaultValue==null&&t.defaultValue!==s&&(t.defaultValue=s)),l!=null&&(t.defaultValue=""+l)}function fe(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function ue(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?ue(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ie,Te=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,s,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,s,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ze(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var Qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(Qe).forEach(function(t){We.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Qe[i]=Qe[t]})});function Ue(t,i,s){return i==null||typeof i=="boolean"||i===""?"":s||typeof i!="number"||i===0||Qe.hasOwnProperty(t)&&Qe[t]?(""+i).trim():i+"px"}function it(t,i){t=t.style;for(var s in i)if(i.hasOwnProperty(s)){var l=s.indexOf("--")===0,c=Ue(s,i[s],l);s==="float"&&(s="cssFloat"),l?t.setProperty(s,c):t[s]=c}}var ct=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wt(t,i){if(i){if(ct[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function nt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var V=null;function _e(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var de=null,Ae=null,Pe=null;function ft(t){if(t=so(t)){if(typeof de!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Jo(i),de(t.stateNode,t.type,i))}}function yt(t){Ae?Pe?Pe.push(t):Pe=[t]:Ae=t}function At(){if(Ae){var t=Ae,i=Pe;if(Pe=Ae=null,ft(t),i)for(t=0;t<i.length;t++)ft(i[t])}}function Bt(t,i){return t(i)}function vt(){}var gn=!1;function qt(t,i,s){if(gn)return t(i,s);gn=!0;try{return Bt(t,i,s)}finally{gn=!1,(Ae!==null||Pe!==null)&&(vt(),At())}}function Ni(t,i){var s=t.stateNode;if(s===null)return null;var l=Jo(s);if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(n(231,i,typeof s));return s}var Hr=!1;if(d)try{var Ii={};Object.defineProperty(Ii,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",Ii,Ii),window.removeEventListener("test",Ii,Ii)}catch{Hr=!1}function Vr(t,i,s,l,c,h,M,b,z){var J=Array.prototype.slice.call(arguments,3);try{i.apply(s,J)}catch(ye){this.onError(ye)}}var Fi=!1,fi=null,mr=!1,Gr=null,wl={onError:function(t){Fi=!0,fi=t}};function Al(t,i,s,l,c,h,M,b,z){Fi=!1,fi=null,Vr.apply(wl,arguments)}function Rl(t,i,s,l,c,h,M,b,z){if(Al.apply(this,arguments),Fi){if(Fi){var J=fi;Fi=!1,fi=null}else throw Error(n(198));mr||(mr=!0,Gr=J)}}function R(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function W(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ie(t){if(R(t)!==t)throw Error(n(188))}function Q(t){var i=t.alternate;if(!i){if(i=R(t),i===null)throw Error(n(188));return i!==t?null:t}for(var s=t,l=i;;){var c=s.return;if(c===null)break;var h=c.alternate;if(h===null){if(l=c.return,l!==null){s=l;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===s)return ie(c),t;if(h===l)return ie(c),i;h=h.sibling}throw Error(n(188))}if(s.return!==l.return)s=c,l=h;else{for(var M=!1,b=c.child;b;){if(b===s){M=!0,s=c,l=h;break}if(b===l){M=!0,l=c,s=h;break}b=b.sibling}if(!M){for(b=h.child;b;){if(b===s){M=!0,s=h,l=c;break}if(b===l){M=!0,l=h,s=c;break}b=b.sibling}if(!M)throw Error(n(189))}}if(s.alternate!==l)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?t:i}function Z(t){return t=Q(t),t!==null?Re(t):null}function Re(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Re(t);if(i!==null)return i;t=t.sibling}return null}var He=e.unstable_scheduleCallback,Ge=e.unstable_cancelCallback,$e=e.unstable_shouldYield,et=e.unstable_requestPaint,ke=e.unstable_now,st=e.unstable_getCurrentPriorityLevel,Lt=e.unstable_ImmediatePriority,Ht=e.unstable_UserBlockingPriority,jt=e.unstable_NormalPriority,Gn=e.unstable_LowPriority,pt=e.unstable_IdlePriority,Ke=null,rn=null;function Et(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Ke,t,void 0,(t.current.flags&128)===128)}catch{}}var Vt=Math.clz32?Math.clz32:Bs,Oo=Math.log,gr=Math.LN2;function Bs(t){return t>>>=0,t===0?32:31-(Oo(t)/gr|0)|0}var It=64,Cn=4194304;function di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function en(t,i){var s=t.pendingLanes;if(s===0)return 0;var l=0,c=t.suspendedLanes,h=t.pingedLanes,M=s&268435455;if(M!==0){var b=M&~c;b!==0?l=di(b):(h&=M,h!==0&&(l=di(h)))}else M=s&~c,M!==0?l=di(M):h!==0&&(l=di(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,h=i&-i,c>=h||c===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=s&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)s=31-Vt(i),c=1<<s,l|=t[s],i&=~c;return l}function Hs(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cl(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,h=t.pendingLanes;0<h;){var M=31-Vt(h),b=1<<M,z=c[M];z===-1?((b&s)===0||(b&l)!==0)&&(c[M]=Hs(b,i)):z<=i&&(t.expiredLanes|=b),h&=~b}}function Wr(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function af(){var t=It;return It<<=1,(It&4194240)===0&&(It=64),t}function Pl(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function Vs(t,i,s){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Vt(i),t[i]=s}function Bm(t,i){var s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<s;){var c=31-Vt(s),h=1<<c;i[c]=0,l[c]=-1,t[c]=-1,s&=~h}}function Ll(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-Vt(s),c=1<<l;c&i|t[l]&i&&(t[l]|=i),s&=~c}}var St=0;function lf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var uf,bl,cf,ff,df,Dl=!1,zo=[],Oi=null,zi=null,ki=null,Gs=new Map,Ws=new Map,Bi=[],Hm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hf(t,i){switch(t){case"focusin":case"focusout":Oi=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":Gs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(i.pointerId)}}function Xs(t,i,s,l,c,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:h,targetContainers:[c]},i!==null&&(i=so(i),i!==null&&bl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function Vm(t,i,s,l,c){switch(i){case"focusin":return Oi=Xs(Oi,t,i,s,l,c),!0;case"dragenter":return zi=Xs(zi,t,i,s,l,c),!0;case"mouseover":return ki=Xs(ki,t,i,s,l,c),!0;case"pointerover":var h=c.pointerId;return Gs.set(h,Xs(Gs.get(h)||null,t,i,s,l,c)),!0;case"gotpointercapture":return h=c.pointerId,Ws.set(h,Xs(Ws.get(h)||null,t,i,s,l,c)),!0}return!1}function pf(t){var i=vr(t.target);if(i!==null){var s=R(i);if(s!==null){if(i=s.tag,i===13){if(i=W(s),i!==null){t.blockedOn=i,df(t.priority,function(){cf(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ko(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Nl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);V=l,s.target.dispatchEvent(l),V=null}else return i=so(s),i!==null&&bl(i),t.blockedOn=s,!1;i.shift()}return!0}function mf(t,i,s){ko(t)&&s.delete(i)}function Gm(){Dl=!1,Oi!==null&&ko(Oi)&&(Oi=null),zi!==null&&ko(zi)&&(zi=null),ki!==null&&ko(ki)&&(ki=null),Gs.forEach(mf),Ws.forEach(mf)}function Ys(t,i){t.blockedOn===i&&(t.blockedOn=null,Dl||(Dl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Gm)))}function qs(t){function i(c){return Ys(c,t)}if(0<zo.length){Ys(zo[0],t);for(var s=1;s<zo.length;s++){var l=zo[s];l.blockedOn===t&&(l.blockedOn=null)}}for(Oi!==null&&Ys(Oi,t),zi!==null&&Ys(zi,t),ki!==null&&Ys(ki,t),Gs.forEach(i),Ws.forEach(i),s=0;s<Bi.length;s++)l=Bi[s],l.blockedOn===t&&(l.blockedOn=null);for(;0<Bi.length&&(s=Bi[0],s.blockedOn===null);)pf(s),s.blockedOn===null&&Bi.shift()}var Xr=D.ReactCurrentBatchConfig,Bo=!0;function Wm(t,i,s,l){var c=St,h=Xr.transition;Xr.transition=null;try{St=1,Ul(t,i,s,l)}finally{St=c,Xr.transition=h}}function Xm(t,i,s,l){var c=St,h=Xr.transition;Xr.transition=null;try{St=4,Ul(t,i,s,l)}finally{St=c,Xr.transition=h}}function Ul(t,i,s,l){if(Bo){var c=Nl(t,i,s,l);if(c===null)Zl(t,i,l,Ho,s),hf(t,l);else if(Vm(c,t,i,s,l))l.stopPropagation();else if(hf(t,l),i&4&&-1<Hm.indexOf(t)){for(;c!==null;){var h=so(c);if(h!==null&&uf(h),h=Nl(t,i,s,l),h===null&&Zl(t,i,l,Ho,s),h===c)break;c=h}c!==null&&l.stopPropagation()}else Zl(t,i,l,null,s)}}var Ho=null;function Nl(t,i,s,l){if(Ho=null,t=_e(l),t=vr(t),t!==null)if(i=R(t),i===null)t=null;else if(s=i.tag,s===13){if(t=W(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Ho=t,null}function gf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(st()){case Lt:return 1;case Ht:return 4;case jt:case Gn:return 16;case pt:return 536870912;default:return 16}default:return 16}}var Hi=null,Il=null,Vo=null;function vf(){if(Vo)return Vo;var t,i=Il,s=i.length,l,c="value"in Hi?Hi.value:Hi.textContent,h=c.length;for(t=0;t<s&&i[t]===c[t];t++);var M=s-t;for(l=1;l<=M&&i[s-l]===c[h-l];l++);return Vo=c.slice(t,1<l?1-l:void 0)}function Go(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function _f(){return!1}function Pn(t){function i(s,l,c,h,M){this._reactName=s,this._targetInst=c,this.type=l,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var b in t)t.hasOwnProperty(b)&&(s=t[b],this[b]=s?s(h):h[b]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Wo:_f,this.isPropagationStopped=_f,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),i}var Yr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fl=Pn(Yr),js=$({},Yr,{view:0,detail:0}),Ym=Pn(js),Ol,zl,$s,Xo=$({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(Ol=t.screenX-$s.screenX,zl=t.screenY-$s.screenY):zl=Ol=0,$s=t),Ol)},movementY:function(t){return"movementY"in t?t.movementY:zl}}),xf=Pn(Xo),qm=$({},Xo,{dataTransfer:0}),jm=Pn(qm),$m=$({},js,{relatedTarget:0}),kl=Pn($m),Km=$({},Yr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zm=Pn(Km),Qm=$({},Yr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Jm=Pn(Qm),eg=$({},Yr,{data:0}),Sf=Pn(eg),tg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ig={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=ig[t])?!!i[t]:!1}function Bl(){return rg}var sg=$({},js,{key:function(t){if(t.key){var i=tg[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Go(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ng[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bl,charCode:function(t){return t.type==="keypress"?Go(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Go(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),og=Pn(sg),ag=$({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yf=Pn(ag),lg=$({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bl}),ug=Pn(lg),cg=$({},Yr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fg=Pn(cg),dg=$({},Xo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hg=Pn(dg),pg=[9,13,27,32],Hl=d&&"CompositionEvent"in window,Ks=null;d&&"documentMode"in document&&(Ks=document.documentMode);var mg=d&&"TextEvent"in window&&!Ks,Mf=d&&(!Hl||Ks&&8<Ks&&11>=Ks),Ef=" ",Tf=!1;function wf(t,i){switch(t){case"keyup":return pg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Af(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var qr=!1;function gg(t,i){switch(t){case"compositionend":return Af(i);case"keypress":return i.which!==32?null:(Tf=!0,Ef);case"textInput":return t=i.data,t===Ef&&Tf?null:t;default:return null}}function vg(t,i){if(qr)return t==="compositionend"||!Hl&&wf(t,i)?(t=vf(),Vo=Il=Hi=null,qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Mf&&i.locale!=="ko"?null:i.data;default:return null}}var _g={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!_g[t.type]:i==="textarea"}function Cf(t,i,s,l){yt(l),i=Ko(i,"onChange"),0<i.length&&(s=new Fl("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var Zs=null,Qs=null;function xg(t){Yf(t,0)}function Yo(t){var i=Qr(t);if(Xe(i))return t}function Sg(t,i){if(t==="change")return i}var Pf=!1;if(d){var Vl;if(d){var Gl="oninput"in document;if(!Gl){var Lf=document.createElement("div");Lf.setAttribute("oninput","return;"),Gl=typeof Lf.oninput=="function"}Vl=Gl}else Vl=!1;Pf=Vl&&(!document.documentMode||9<document.documentMode)}function bf(){Zs&&(Zs.detachEvent("onpropertychange",Df),Qs=Zs=null)}function Df(t){if(t.propertyName==="value"&&Yo(Qs)){var i=[];Cf(i,Qs,t,_e(t)),qt(xg,i)}}function yg(t,i,s){t==="focusin"?(bf(),Zs=i,Qs=s,Zs.attachEvent("onpropertychange",Df)):t==="focusout"&&bf()}function Mg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yo(Qs)}function Eg(t,i){if(t==="click")return Yo(i)}function Tg(t,i){if(t==="input"||t==="change")return Yo(i)}function wg(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var Wn=typeof Object.is=="function"?Object.is:wg;function Js(t,i){if(Wn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var c=s[l];if(!p.call(i,c)||!Wn(t[c],i[c]))return!1}return!0}function Uf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nf(t,i){var s=Uf(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Uf(s)}}function If(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?If(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Ff(){for(var t=window,i=dt();i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=dt(t.document)}return i}function Wl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Ag(t){var i=Ff(),s=t.focusedElem,l=t.selectionRange;if(i!==s&&s&&s.ownerDocument&&If(s.ownerDocument.documentElement,s)){if(l!==null&&Wl(s)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in s)s.selectionStart=i,s.selectionEnd=Math.min(t,s.value.length);else if(t=(i=s.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=s.textContent.length,h=Math.min(l.start,c);l=l.end===void 0?h:Math.min(l.end,c),!t.extend&&h>l&&(c=l,l=h,h=c),c=Nf(s,h);var M=Nf(s,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=s;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<i.length;s++)t=i[s],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Rg=d&&"documentMode"in document&&11>=document.documentMode,jr=null,Xl=null,eo=null,Yl=!1;function Of(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Yl||jr==null||jr!==dt(l)||(l=jr,"selectionStart"in l&&Wl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),eo&&Js(eo,l)||(eo=l,l=Ko(Xl,"onSelect"),0<l.length&&(i=new Fl("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=jr)))}function qo(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var $r={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},ql={},zf={};d&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete $r.animationend.animation,delete $r.animationiteration.animation,delete $r.animationstart.animation),"TransitionEvent"in window||delete $r.transitionend.transition);function jo(t){if(ql[t])return ql[t];if(!$r[t])return t;var i=$r[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in zf)return ql[t]=i[s];return t}var kf=jo("animationend"),Bf=jo("animationiteration"),Hf=jo("animationstart"),Vf=jo("transitionend"),Gf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vi(t,i){Gf.set(t,i),u(i,[t])}for(var jl=0;jl<Wf.length;jl++){var $l=Wf[jl],Cg=$l.toLowerCase(),Pg=$l[0].toUpperCase()+$l.slice(1);Vi(Cg,"on"+Pg)}Vi(kf,"onAnimationEnd"),Vi(Bf,"onAnimationIteration"),Vi(Hf,"onAnimationStart"),Vi("dblclick","onDoubleClick"),Vi("focusin","onFocus"),Vi("focusout","onBlur"),Vi(Vf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lg=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Xf(t,i,s){var l=t.type||"unknown-event";t.currentTarget=s,Rl(l,i,void 0,t),t.currentTarget=null}function Yf(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],c=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var M=l.length-1;0<=M;M--){var b=l[M],z=b.instance,J=b.currentTarget;if(b=b.listener,z!==h&&c.isPropagationStopped())break e;Xf(c,b,J),h=z}else for(M=0;M<l.length;M++){if(b=l[M],z=b.instance,J=b.currentTarget,b=b.listener,z!==h&&c.isPropagationStopped())break e;Xf(c,b,J),h=z}}}if(mr)throw t=Gr,mr=!1,Gr=null,t}function Rt(t,i){var s=i[iu];s===void 0&&(s=i[iu]=new Set);var l=t+"__bubble";s.has(l)||(qf(i,t,2,!1),s.add(l))}function Kl(t,i,s){var l=0;i&&(l|=4),qf(s,t,l,i)}var $o="_reactListening"+Math.random().toString(36).slice(2);function no(t){if(!t[$o]){t[$o]=!0,r.forEach(function(s){s!=="selectionchange"&&(Lg.has(s)||Kl(s,!1,t),Kl(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[$o]||(i[$o]=!0,Kl("selectionchange",!1,i))}}function qf(t,i,s,l){switch(gf(i)){case 1:var c=Wm;break;case 4:c=Xm;break;default:c=Ul}s=c.bind(null,i,s,t),c=void 0,!Hr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,s,{capture:!0,passive:c}):t.addEventListener(i,s,!0):c!==void 0?t.addEventListener(i,s,{passive:c}):t.addEventListener(i,s,!1)}function Zl(t,i,s,l,c){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var b=l.stateNode.containerInfo;if(b===c||b.nodeType===8&&b.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var z=M.tag;if((z===3||z===4)&&(z=M.stateNode.containerInfo,z===c||z.nodeType===8&&z.parentNode===c))return;M=M.return}for(;b!==null;){if(M=vr(b),M===null)return;if(z=M.tag,z===5||z===6){l=h=M;continue e}b=b.parentNode}}l=l.return}qt(function(){var J=h,ye=_e(s),Me=[];e:{var xe=Gf.get(t);if(xe!==void 0){var be=Fl,Fe=t;switch(t){case"keypress":if(Go(s)===0)break e;case"keydown":case"keyup":be=og;break;case"focusin":Fe="focus",be=kl;break;case"focusout":Fe="blur",be=kl;break;case"beforeblur":case"afterblur":be=kl;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":be=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":be=jm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":be=ug;break;case kf:case Bf:case Hf:be=Zm;break;case Vf:be=fg;break;case"scroll":be=Ym;break;case"wheel":be=hg;break;case"copy":case"cut":case"paste":be=Jm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":be=yf}var Be=(i&4)!==0,Ft=!Be&&t==="scroll",X=Be?xe!==null?xe+"Capture":null:xe;Be=[];for(var B=J,j;B!==null;){j=B;var we=j.stateNode;if(j.tag===5&&we!==null&&(j=we,X!==null&&(we=Ni(B,X),we!=null&&Be.push(io(B,we,j)))),Ft)break;B=B.return}0<Be.length&&(xe=new be(xe,Fe,null,s,ye),Me.push({event:xe,listeners:Be}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",be=t==="mouseout"||t==="pointerout",xe&&s!==V&&(Fe=s.relatedTarget||s.fromElement)&&(vr(Fe)||Fe[hi]))break e;if((be||xe)&&(xe=ye.window===ye?ye:(xe=ye.ownerDocument)?xe.defaultView||xe.parentWindow:window,be?(Fe=s.relatedTarget||s.toElement,be=J,Fe=Fe?vr(Fe):null,Fe!==null&&(Ft=R(Fe),Fe!==Ft||Fe.tag!==5&&Fe.tag!==6)&&(Fe=null)):(be=null,Fe=J),be!==Fe)){if(Be=xf,we="onMouseLeave",X="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Be=yf,we="onPointerLeave",X="onPointerEnter",B="pointer"),Ft=be==null?xe:Qr(be),j=Fe==null?xe:Qr(Fe),xe=new Be(we,B+"leave",be,s,ye),xe.target=Ft,xe.relatedTarget=j,we=null,vr(ye)===J&&(Be=new Be(X,B+"enter",Fe,s,ye),Be.target=j,Be.relatedTarget=Ft,we=Be),Ft=we,be&&Fe)t:{for(Be=be,X=Fe,B=0,j=Be;j;j=Kr(j))B++;for(j=0,we=X;we;we=Kr(we))j++;for(;0<B-j;)Be=Kr(Be),B--;for(;0<j-B;)X=Kr(X),j--;for(;B--;){if(Be===X||X!==null&&Be===X.alternate)break t;Be=Kr(Be),X=Kr(X)}Be=null}else Be=null;be!==null&&jf(Me,xe,be,Be,!1),Fe!==null&&Ft!==null&&jf(Me,Ft,Fe,Be,!0)}}e:{if(xe=J?Qr(J):window,be=xe.nodeName&&xe.nodeName.toLowerCase(),be==="select"||be==="input"&&xe.type==="file")var Ve=Sg;else if(Rf(xe))if(Pf)Ve=Tg;else{Ve=Mg;var qe=yg}else(be=xe.nodeName)&&be.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ve=Eg);if(Ve&&(Ve=Ve(t,J))){Cf(Me,Ve,s,ye);break e}qe&&qe(t,xe,J),t==="focusout"&&(qe=xe._wrapperState)&&qe.controlled&&xe.type==="number"&&U(xe,"number",xe.value)}switch(qe=J?Qr(J):window,t){case"focusin":(Rf(qe)||qe.contentEditable==="true")&&(jr=qe,Xl=J,eo=null);break;case"focusout":eo=Xl=jr=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,Of(Me,s,ye);break;case"selectionchange":if(Rg)break;case"keydown":case"keyup":Of(Me,s,ye)}var je;if(Hl)e:{switch(t){case"compositionstart":var Ze="onCompositionStart";break e;case"compositionend":Ze="onCompositionEnd";break e;case"compositionupdate":Ze="onCompositionUpdate";break e}Ze=void 0}else qr?wf(t,s)&&(Ze="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(Ze="onCompositionStart");Ze&&(Mf&&s.locale!=="ko"&&(qr||Ze!=="onCompositionStart"?Ze==="onCompositionEnd"&&qr&&(je=vf()):(Hi=ye,Il="value"in Hi?Hi.value:Hi.textContent,qr=!0)),qe=Ko(J,Ze),0<qe.length&&(Ze=new Sf(Ze,t,null,s,ye),Me.push({event:Ze,listeners:qe}),je?Ze.data=je:(je=Af(s),je!==null&&(Ze.data=je)))),(je=mg?gg(t,s):vg(t,s))&&(J=Ko(J,"onBeforeInput"),0<J.length&&(ye=new Sf("onBeforeInput","beforeinput",null,s,ye),Me.push({event:ye,listeners:J}),ye.data=je))}Yf(Me,i)})}function io(t,i,s){return{instance:t,listener:i,currentTarget:s}}function Ko(t,i){for(var s=i+"Capture",l=[];t!==null;){var c=t,h=c.stateNode;c.tag===5&&h!==null&&(c=h,h=Ni(t,s),h!=null&&l.unshift(io(t,h,c)),h=Ni(t,i),h!=null&&l.push(io(t,h,c))),t=t.return}return l}function Kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jf(t,i,s,l,c){for(var h=i._reactName,M=[];s!==null&&s!==l;){var b=s,z=b.alternate,J=b.stateNode;if(z!==null&&z===l)break;b.tag===5&&J!==null&&(b=J,c?(z=Ni(s,h),z!=null&&M.unshift(io(s,z,b))):c||(z=Ni(s,h),z!=null&&M.push(io(s,z,b)))),s=s.return}M.length!==0&&t.push({event:i,listeners:M})}var bg=/\r\n?/g,Dg=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace(bg,`
`).replace(Dg,"")}function Zo(t,i,s){if(i=$f(i),$f(t)!==i&&s)throw Error(n(425))}function Qo(){}var Ql=null,Jl=null;function eu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,Ug=typeof clearTimeout=="function"?clearTimeout:void 0,Kf=typeof Promise=="function"?Promise:void 0,Ng=typeof queueMicrotask=="function"?queueMicrotask:typeof Kf<"u"?function(t){return Kf.resolve(null).then(t).catch(Ig)}:tu;function Ig(t){setTimeout(function(){throw t})}function nu(t,i){var s=i,l=0;do{var c=s.nextSibling;if(t.removeChild(s),c&&c.nodeType===8)if(s=c.data,s==="/$"){if(l===0){t.removeChild(c),qs(i);return}l--}else s!=="$"&&s!=="$?"&&s!=="$!"||l++;s=c}while(s);qs(i)}function Gi(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Zf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),ii="__reactFiber$"+Zr,ro="__reactProps$"+Zr,hi="__reactContainer$"+Zr,iu="__reactEvents$"+Zr,Fg="__reactListeners$"+Zr,Og="__reactHandles$"+Zr;function vr(t){var i=t[ii];if(i)return i;for(var s=t.parentNode;s;){if(i=s[hi]||s[ii]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Zf(t);t!==null;){if(s=t[ii])return s;t=Zf(t)}return i}t=s,s=t.parentNode}return null}function so(t){return t=t[ii]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Jo(t){return t[ro]||null}var ru=[],Jr=-1;function Wi(t){return{current:t}}function Ct(t){0>Jr||(t.current=ru[Jr],ru[Jr]=null,Jr--)}function Tt(t,i){Jr++,ru[Jr]=t.current,t.current=i}var Xi={},sn=Wi(Xi),vn=Wi(!1),_r=Xi;function es(t,i){var s=t.type.contextTypes;if(!s)return Xi;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},h;for(h in s)c[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function _n(t){return t=t.childContextTypes,t!=null}function ea(){Ct(vn),Ct(sn)}function Qf(t,i,s){if(sn.current!==Xi)throw Error(n(168));Tt(sn,i),Tt(vn,s)}function Jf(t,i,s){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return s;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,Se(t)||"Unknown",c));return $({},s,l)}function ta(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xi,_r=sn.current,Tt(sn,t),Tt(vn,vn.current),!0}function ed(t,i,s){var l=t.stateNode;if(!l)throw Error(n(169));s?(t=Jf(t,i,_r),l.__reactInternalMemoizedMergedChildContext=t,Ct(vn),Ct(sn),Tt(sn,t)):Ct(vn),Tt(vn,s)}var pi=null,na=!1,su=!1;function td(t){pi===null?pi=[t]:pi.push(t)}function zg(t){na=!0,td(t)}function Yi(){if(!su&&pi!==null){su=!0;var t=0,i=St;try{var s=pi;for(St=1;t<s.length;t++){var l=s[t];do l=l(!0);while(l!==null)}pi=null,na=!1}catch(c){throw pi!==null&&(pi=pi.slice(t+1)),He(Lt,Yi),c}finally{St=i,su=!1}}return null}var ts=[],ns=0,ia=null,ra=0,In=[],Fn=0,xr=null,mi=1,gi="";function Sr(t,i){ts[ns++]=ra,ts[ns++]=ia,ia=t,ra=i}function nd(t,i,s){In[Fn++]=mi,In[Fn++]=gi,In[Fn++]=xr,xr=t;var l=mi;t=gi;var c=32-Vt(l)-1;l&=~(1<<c),s+=1;var h=32-Vt(i)+c;if(30<h){var M=c-c%5;h=(l&(1<<M)-1).toString(32),l>>=M,c-=M,mi=1<<32-Vt(i)+c|s<<c|l,gi=h+t}else mi=1<<h|s<<c|l,gi=t}function ou(t){t.return!==null&&(Sr(t,1),nd(t,1,0))}function au(t){for(;t===ia;)ia=ts[--ns],ts[ns]=null,ra=ts[--ns],ts[ns]=null;for(;t===xr;)xr=In[--Fn],In[Fn]=null,gi=In[--Fn],In[Fn]=null,mi=In[--Fn],In[Fn]=null}var Ln=null,bn=null,bt=!1,Xn=null;function id(t,i){var s=Bn(5,null,null,0);s.elementType="DELETED",s.stateNode=i,s.return=t,i=t.deletions,i===null?(t.deletions=[s],t.flags|=16):i.push(s)}function rd(t,i){switch(t.tag){case 5:var s=t.type;return i=i.nodeType!==1||s.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Ln=t,bn=Gi(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Ln=t,bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(s=xr!==null?{id:mi,overflow:gi}:null,t.memoizedState={dehydrated:i,treeContext:s,retryLane:1073741824},s=Bn(18,null,null,0),s.stateNode=i,s.return=t,t.child=s,Ln=t,bn=null,!0):!1;default:return!1}}function lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function uu(t){if(bt){var i=bn;if(i){var s=i;if(!rd(t,i)){if(lu(t))throw Error(n(418));i=Gi(s.nextSibling);var l=Ln;i&&rd(t,i)?id(l,s):(t.flags=t.flags&-4097|2,bt=!1,Ln=t)}}else{if(lu(t))throw Error(n(418));t.flags=t.flags&-4097|2,bt=!1,Ln=t}}}function sd(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ln=t}function sa(t){if(t!==Ln)return!1;if(!bt)return sd(t),bt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!eu(t.type,t.memoizedProps)),i&&(i=bn)){if(lu(t))throw od(),Error(n(418));for(;i;)id(t,i),i=Gi(i.nextSibling)}if(sd(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="/$"){if(i===0){bn=Gi(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++}t=t.nextSibling}bn=null}}else bn=Ln?Gi(t.stateNode.nextSibling):null;return!0}function od(){for(var t=bn;t;)t=Gi(t.nextSibling)}function is(){bn=Ln=null,bt=!1}function cu(t){Xn===null?Xn=[t]:Xn.push(t)}var kg=D.ReactCurrentBatchConfig;function oo(t,i,s){if(t=s.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(n(309));var l=s.stateNode}if(!l)throw Error(n(147,t));var c=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(M){var b=c.refs;M===null?delete b[h]:b[h]=M},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!s._owner)throw Error(n(290,t))}return t}function oa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ad(t){var i=t._init;return i(t._payload)}function ld(t){function i(X,B){if(t){var j=X.deletions;j===null?(X.deletions=[B],X.flags|=16):j.push(B)}}function s(X,B){if(!t)return null;for(;B!==null;)i(X,B),B=B.sibling;return null}function l(X,B){for(X=new Map;B!==null;)B.key!==null?X.set(B.key,B):X.set(B.index,B),B=B.sibling;return X}function c(X,B){return X=er(X,B),X.index=0,X.sibling=null,X}function h(X,B,j){return X.index=j,t?(j=X.alternate,j!==null?(j=j.index,j<B?(X.flags|=2,B):j):(X.flags|=2,B)):(X.flags|=1048576,B)}function M(X){return t&&X.alternate===null&&(X.flags|=2),X}function b(X,B,j,we){return B===null||B.tag!==6?(B=tc(j,X.mode,we),B.return=X,B):(B=c(B,j),B.return=X,B)}function z(X,B,j,we){var Ve=j.type;return Ve===F?ye(X,B,j.props.children,we,j.key):B!==null&&(B.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===me&&ad(Ve)===B.type)?(we=c(B,j.props),we.ref=oo(X,B,j),we.return=X,we):(we=La(j.type,j.key,j.props,null,X.mode,we),we.ref=oo(X,B,j),we.return=X,we)}function J(X,B,j,we){return B===null||B.tag!==4||B.stateNode.containerInfo!==j.containerInfo||B.stateNode.implementation!==j.implementation?(B=nc(j,X.mode,we),B.return=X,B):(B=c(B,j.children||[]),B.return=X,B)}function ye(X,B,j,we,Ve){return B===null||B.tag!==7?(B=Cr(j,X.mode,we,Ve),B.return=X,B):(B=c(B,j),B.return=X,B)}function Me(X,B,j){if(typeof B=="string"&&B!==""||typeof B=="number")return B=tc(""+B,X.mode,j),B.return=X,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case K:return j=La(B.type,B.key,B.props,null,X.mode,j),j.ref=oo(X,null,B),j.return=X,j;case O:return B=nc(B,X.mode,j),B.return=X,B;case me:var we=B._init;return Me(X,we(B._payload),j)}if(w(B)||se(B))return B=Cr(B,X.mode,j,null),B.return=X,B;oa(X,B)}return null}function xe(X,B,j,we){var Ve=B!==null?B.key:null;if(typeof j=="string"&&j!==""||typeof j=="number")return Ve!==null?null:b(X,B,""+j,we);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case K:return j.key===Ve?z(X,B,j,we):null;case O:return j.key===Ve?J(X,B,j,we):null;case me:return Ve=j._init,xe(X,B,Ve(j._payload),we)}if(w(j)||se(j))return Ve!==null?null:ye(X,B,j,we,null);oa(X,j)}return null}function be(X,B,j,we,Ve){if(typeof we=="string"&&we!==""||typeof we=="number")return X=X.get(j)||null,b(B,X,""+we,Ve);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case K:return X=X.get(we.key===null?j:we.key)||null,z(B,X,we,Ve);case O:return X=X.get(we.key===null?j:we.key)||null,J(B,X,we,Ve);case me:var qe=we._init;return be(X,B,j,qe(we._payload),Ve)}if(w(we)||se(we))return X=X.get(j)||null,ye(B,X,we,Ve,null);oa(B,we)}return null}function Fe(X,B,j,we){for(var Ve=null,qe=null,je=B,Ze=B=0,Zt=null;je!==null&&Ze<j.length;Ze++){je.index>Ze?(Zt=je,je=null):Zt=je.sibling;var _t=xe(X,je,j[Ze],we);if(_t===null){je===null&&(je=Zt);break}t&&je&&_t.alternate===null&&i(X,je),B=h(_t,B,Ze),qe===null?Ve=_t:qe.sibling=_t,qe=_t,je=Zt}if(Ze===j.length)return s(X,je),bt&&Sr(X,Ze),Ve;if(je===null){for(;Ze<j.length;Ze++)je=Me(X,j[Ze],we),je!==null&&(B=h(je,B,Ze),qe===null?Ve=je:qe.sibling=je,qe=je);return bt&&Sr(X,Ze),Ve}for(je=l(X,je);Ze<j.length;Ze++)Zt=be(je,X,Ze,j[Ze],we),Zt!==null&&(t&&Zt.alternate!==null&&je.delete(Zt.key===null?Ze:Zt.key),B=h(Zt,B,Ze),qe===null?Ve=Zt:qe.sibling=Zt,qe=Zt);return t&&je.forEach(function(tr){return i(X,tr)}),bt&&Sr(X,Ze),Ve}function Be(X,B,j,we){var Ve=se(j);if(typeof Ve!="function")throw Error(n(150));if(j=Ve.call(j),j==null)throw Error(n(151));for(var qe=Ve=null,je=B,Ze=B=0,Zt=null,_t=j.next();je!==null&&!_t.done;Ze++,_t=j.next()){je.index>Ze?(Zt=je,je=null):Zt=je.sibling;var tr=xe(X,je,_t.value,we);if(tr===null){je===null&&(je=Zt);break}t&&je&&tr.alternate===null&&i(X,je),B=h(tr,B,Ze),qe===null?Ve=tr:qe.sibling=tr,qe=tr,je=Zt}if(_t.done)return s(X,je),bt&&Sr(X,Ze),Ve;if(je===null){for(;!_t.done;Ze++,_t=j.next())_t=Me(X,_t.value,we),_t!==null&&(B=h(_t,B,Ze),qe===null?Ve=_t:qe.sibling=_t,qe=_t);return bt&&Sr(X,Ze),Ve}for(je=l(X,je);!_t.done;Ze++,_t=j.next())_t=be(je,X,Ze,_t.value,we),_t!==null&&(t&&_t.alternate!==null&&je.delete(_t.key===null?Ze:_t.key),B=h(_t,B,Ze),qe===null?Ve=_t:qe.sibling=_t,qe=_t);return t&&je.forEach(function(_v){return i(X,_v)}),bt&&Sr(X,Ze),Ve}function Ft(X,B,j,we){if(typeof j=="object"&&j!==null&&j.type===F&&j.key===null&&(j=j.props.children),typeof j=="object"&&j!==null){switch(j.$$typeof){case K:e:{for(var Ve=j.key,qe=B;qe!==null;){if(qe.key===Ve){if(Ve=j.type,Ve===F){if(qe.tag===7){s(X,qe.sibling),B=c(qe,j.props.children),B.return=X,X=B;break e}}else if(qe.elementType===Ve||typeof Ve=="object"&&Ve!==null&&Ve.$$typeof===me&&ad(Ve)===qe.type){s(X,qe.sibling),B=c(qe,j.props),B.ref=oo(X,qe,j),B.return=X,X=B;break e}s(X,qe);break}else i(X,qe);qe=qe.sibling}j.type===F?(B=Cr(j.props.children,X.mode,we,j.key),B.return=X,X=B):(we=La(j.type,j.key,j.props,null,X.mode,we),we.ref=oo(X,B,j),we.return=X,X=we)}return M(X);case O:e:{for(qe=j.key;B!==null;){if(B.key===qe)if(B.tag===4&&B.stateNode.containerInfo===j.containerInfo&&B.stateNode.implementation===j.implementation){s(X,B.sibling),B=c(B,j.children||[]),B.return=X,X=B;break e}else{s(X,B);break}else i(X,B);B=B.sibling}B=nc(j,X.mode,we),B.return=X,X=B}return M(X);case me:return qe=j._init,Ft(X,B,qe(j._payload),we)}if(w(j))return Fe(X,B,j,we);if(se(j))return Be(X,B,j,we);oa(X,j)}return typeof j=="string"&&j!==""||typeof j=="number"?(j=""+j,B!==null&&B.tag===6?(s(X,B.sibling),B=c(B,j),B.return=X,X=B):(s(X,B),B=tc(j,X.mode,we),B.return=X,X=B),M(X)):s(X,B)}return Ft}var rs=ld(!0),ud=ld(!1),aa=Wi(null),la=null,ss=null,fu=null;function du(){fu=ss=la=null}function hu(t){var i=aa.current;Ct(aa),t._currentValue=i}function pu(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function os(t,i){la=t,fu=ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(xn=!0),t.firstContext=null)}function On(t){var i=t._currentValue;if(fu!==t)if(t={context:t,memoizedValue:i,next:null},ss===null){if(la===null)throw Error(n(308));ss=t,la.dependencies={lanes:0,firstContext:t}}else ss=ss.next=t;return i}var yr=null;function mu(t){yr===null?yr=[t]:yr.push(t)}function cd(t,i,s,l){var c=i.interleaved;return c===null?(s.next=s,mu(i)):(s.next=c.next,c.next=s),i.interleaved=s,vi(t,l)}function vi(t,i){t.lanes|=i;var s=t.alternate;for(s!==null&&(s.lanes|=i),s=t,t=t.return;t!==null;)t.childLanes|=i,s=t.alternate,s!==null&&(s.childLanes|=i),s=t,t=t.return;return s.tag===3?s.stateNode:null}var qi=!1;function gu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fd(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function ji(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(mt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,vi(t,s)}return c=l.interleaved,c===null?(i.next=i,mu(l)):(i.next=c.next,c.next=i),l.interleaved=i,vi(t,s)}function ua(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ll(t,s)}}function dd(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var c=null,h=null;if(s=s.firstBaseUpdate,s!==null){do{var M={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};h===null?c=h=M:h=h.next=M,s=s.next}while(s!==null);h===null?c=h=i:h=h.next=i}else c=h=i;s={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}function ca(t,i,s,l){var c=t.updateQueue;qi=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,b=c.shared.pending;if(b!==null){c.shared.pending=null;var z=b,J=z.next;z.next=null,M===null?h=J:M.next=J,M=z;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,b=ye.lastBaseUpdate,b!==M&&(b===null?ye.firstBaseUpdate=J:b.next=J,ye.lastBaseUpdate=z))}if(h!==null){var Me=c.baseState;M=0,ye=J=z=null,b=h;do{var xe=b.lane,be=b.eventTime;if((l&xe)===xe){ye!==null&&(ye=ye.next={eventTime:be,lane:0,tag:b.tag,payload:b.payload,callback:b.callback,next:null});e:{var Fe=t,Be=b;switch(xe=i,be=s,Be.tag){case 1:if(Fe=Be.payload,typeof Fe=="function"){Me=Fe.call(be,Me,xe);break e}Me=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=Be.payload,xe=typeof Fe=="function"?Fe.call(be,Me,xe):Fe,xe==null)break e;Me=$({},Me,xe);break e;case 2:qi=!0}}b.callback!==null&&b.lane!==0&&(t.flags|=64,xe=c.effects,xe===null?c.effects=[b]:xe.push(b))}else be={eventTime:be,lane:xe,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ye===null?(J=ye=be,z=Me):ye=ye.next=be,M|=xe;if(b=b.next,b===null){if(b=c.shared.pending,b===null)break;xe=b,b=xe.next,xe.next=null,c.lastBaseUpdate=xe,c.shared.pending=null}}while(!0);if(ye===null&&(z=Me),c.baseState=z,c.firstBaseUpdate=J,c.lastBaseUpdate=ye,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else h===null&&(c.shared.lanes=0);Tr|=M,t.lanes=M,t.memoizedState=Me}}function hd(t,i,s){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=s,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var ao={},ri=Wi(ao),lo=Wi(ao),uo=Wi(ao);function Mr(t){if(t===ao)throw Error(n(174));return t}function vu(t,i){switch(Tt(uo,i),Tt(lo,t),Tt(ri,ao),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ve(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=ve(i,t)}Ct(ri),Tt(ri,i)}function as(){Ct(ri),Ct(lo),Ct(uo)}function pd(t){Mr(uo.current);var i=Mr(ri.current),s=ve(i,t.type);i!==s&&(Tt(lo,t),Tt(ri,s))}function _u(t){lo.current===t&&(Ct(ri),Ct(lo))}var Dt=Wi(0);function fa(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var xu=[];function Su(){for(var t=0;t<xu.length;t++)xu[t]._workInProgressVersionPrimary=null;xu.length=0}var da=D.ReactCurrentDispatcher,yu=D.ReactCurrentBatchConfig,Er=0,Ut=null,Gt=null,$t=null,ha=!1,co=!1,fo=0,Bg=0;function on(){throw Error(n(321))}function Mu(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!Wn(t[s],i[s]))return!1;return!0}function Eu(t,i,s,l,c,h){if(Er=h,Ut=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,da.current=t===null||t.memoizedState===null?Wg:Xg,t=s(l,c),co){h=0;do{if(co=!1,fo=0,25<=h)throw Error(n(301));h+=1,$t=Gt=null,i.updateQueue=null,da.current=Yg,t=s(l,c)}while(co)}if(da.current=ga,i=Gt!==null&&Gt.next!==null,Er=0,$t=Gt=Ut=null,ha=!1,i)throw Error(n(300));return t}function Tu(){var t=fo!==0;return fo=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Ut.memoizedState=$t=t:$t=$t.next=t,$t}function zn(){if(Gt===null){var t=Ut.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var i=$t===null?Ut.memoizedState:$t.next;if(i!==null)$t=i,Gt=t;else{if(t===null)throw Error(n(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},$t===null?Ut.memoizedState=$t=t:$t=$t.next=t}return $t}function ho(t,i){return typeof i=="function"?i(t):i}function wu(t){var i=zn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=Gt,c=l.baseQueue,h=s.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}l.baseQueue=c=h,s.pending=null}if(c!==null){h=c.next,l=l.baseState;var b=M=null,z=null,J=h;do{var ye=J.lane;if((Er&ye)===ye)z!==null&&(z=z.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var Me={lane:ye,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};z===null?(b=z=Me,M=l):z=z.next=Me,Ut.lanes|=ye,Tr|=ye}J=J.next}while(J!==null&&J!==h);z===null?M=l:z.next=b,Wn(l,i.memoizedState)||(xn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=z,s.lastRenderedState=l}if(t=s.interleaved,t!==null){c=t;do h=c.lane,Ut.lanes|=h,Tr|=h,c=c.next;while(c!==t)}else c===null&&(s.lanes=0);return[i.memoizedState,s.dispatch]}function Au(t){var i=zn(),s=i.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=t;var l=s.dispatch,c=s.pending,h=i.memoizedState;if(c!==null){s.pending=null;var M=c=c.next;do h=t(h,M.action),M=M.next;while(M!==c);Wn(h,i.memoizedState)||(xn=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),s.lastRenderedState=h}return[h,l]}function md(){}function gd(t,i){var s=Ut,l=zn(),c=i(),h=!Wn(l.memoizedState,c);if(h&&(l.memoizedState=c,xn=!0),l=l.queue,Ru(xd.bind(null,s,l,t),[t]),l.getSnapshot!==i||h||$t!==null&&$t.memoizedState.tag&1){if(s.flags|=2048,po(9,_d.bind(null,s,l,c,i),void 0,null),Kt===null)throw Error(n(349));(Er&30)!==0||vd(s,i,c)}return c}function vd(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=Ut.updateQueue,i===null?(i={lastEffect:null,stores:null},Ut.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function _d(t,i,s,l){i.value=s,i.getSnapshot=l,Sd(i)&&yd(t)}function xd(t,i,s){return s(function(){Sd(i)&&yd(t)})}function Sd(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!Wn(t,s)}catch{return!0}}function yd(t){var i=vi(t,1);i!==null&&$n(i,t,1,-1)}function Md(t){var i=si();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:t},i.queue=t,t=t.dispatch=Gg.bind(null,Ut,t),[i.memoizedState,t]}function po(t,i,s,l){return t={tag:t,create:i,destroy:s,deps:l,next:null},i=Ut.updateQueue,i===null?(i={lastEffect:null,stores:null},Ut.updateQueue=i,i.lastEffect=t.next=t):(s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t)),t}function Ed(){return zn().memoizedState}function pa(t,i,s,l){var c=si();Ut.flags|=t,c.memoizedState=po(1|i,s,void 0,l===void 0?null:l)}function ma(t,i,s,l){var c=zn();l=l===void 0?null:l;var h=void 0;if(Gt!==null){var M=Gt.memoizedState;if(h=M.destroy,l!==null&&Mu(l,M.deps)){c.memoizedState=po(i,s,h,l);return}}Ut.flags|=t,c.memoizedState=po(1|i,s,h,l)}function Td(t,i){return pa(8390656,8,t,i)}function Ru(t,i){return ma(2048,8,t,i)}function wd(t,i){return ma(4,2,t,i)}function Ad(t,i){return ma(4,4,t,i)}function Rd(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Cd(t,i,s){return s=s!=null?s.concat([t]):null,ma(4,4,Rd.bind(null,i,t),s)}function Cu(){}function Pd(t,i){var s=zn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function Ld(t,i){var s=zn();i=i===void 0?null:i;var l=s.memoizedState;return l!==null&&i!==null&&Mu(i,l[1])?l[0]:(t=t(),s.memoizedState=[t,i],t)}function bd(t,i,s){return(Er&21)===0?(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=s):(Wn(s,i)||(s=af(),Ut.lanes|=s,Tr|=s,t.baseState=!0),i)}function Hg(t,i){var s=St;St=s!==0&&4>s?s:4,t(!0);var l=yu.transition;yu.transition={};try{t(!1),i()}finally{St=s,yu.transition=l}}function Dd(){return zn().memoizedState}function Vg(t,i,s){var l=Qi(t);if(s={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null},Ud(t))Nd(i,s);else if(s=cd(t,i,s,l),s!==null){var c=dn();$n(s,t,l,c),Id(s,i,l)}}function Gg(t,i,s){var l=Qi(t),c={lane:l,action:s,hasEagerState:!1,eagerState:null,next:null};if(Ud(t))Nd(i,c);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var M=i.lastRenderedState,b=h(M,s);if(c.hasEagerState=!0,c.eagerState=b,Wn(b,M)){var z=i.interleaved;z===null?(c.next=c,mu(i)):(c.next=z.next,z.next=c),i.interleaved=c;return}}catch{}finally{}s=cd(t,i,c,l),s!==null&&(c=dn(),$n(s,t,l,c),Id(s,i,l))}}function Ud(t){var i=t.alternate;return t===Ut||i!==null&&i===Ut}function Nd(t,i){co=ha=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function Id(t,i,s){if((s&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,Ll(t,s)}}var ga={readContext:On,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Wg={readContext:On,useCallback:function(t,i){return si().memoizedState=[t,i===void 0?null:i],t},useContext:On,useEffect:Td,useImperativeHandle:function(t,i,s){return s=s!=null?s.concat([t]):null,pa(4194308,4,Rd.bind(null,i,t),s)},useLayoutEffect:function(t,i){return pa(4194308,4,t,i)},useInsertionEffect:function(t,i){return pa(4,2,t,i)},useMemo:function(t,i){var s=si();return i=i===void 0?null:i,t=t(),s.memoizedState=[t,i],t},useReducer:function(t,i,s){var l=si();return i=s!==void 0?s(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Vg.bind(null,Ut,t),[l.memoizedState,t]},useRef:function(t){var i=si();return t={current:t},i.memoizedState=t},useState:Md,useDebugValue:Cu,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=Md(!1),i=t[0];return t=Hg.bind(null,t[1]),si().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,s){var l=Ut,c=si();if(bt){if(s===void 0)throw Error(n(407));s=s()}else{if(s=i(),Kt===null)throw Error(n(349));(Er&30)!==0||vd(l,i,s)}c.memoizedState=s;var h={value:s,getSnapshot:i};return c.queue=h,Td(xd.bind(null,l,h,t),[t]),l.flags|=2048,po(9,_d.bind(null,l,h,s,i),void 0,null),s},useId:function(){var t=si(),i=Kt.identifierPrefix;if(bt){var s=gi,l=mi;s=(l&~(1<<32-Vt(l)-1)).toString(32)+s,i=":"+i+"R"+s,s=fo++,0<s&&(i+="H"+s.toString(32)),i+=":"}else s=Bg++,i=":"+i+"r"+s.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Xg={readContext:On,useCallback:Pd,useContext:On,useEffect:Ru,useImperativeHandle:Cd,useInsertionEffect:wd,useLayoutEffect:Ad,useMemo:Ld,useReducer:wu,useRef:Ed,useState:function(){return wu(ho)},useDebugValue:Cu,useDeferredValue:function(t){var i=zn();return bd(i,Gt.memoizedState,t)},useTransition:function(){var t=wu(ho)[0],i=zn().memoizedState;return[t,i]},useMutableSource:md,useSyncExternalStore:gd,useId:Dd,unstable_isNewReconciler:!1},Yg={readContext:On,useCallback:Pd,useContext:On,useEffect:Ru,useImperativeHandle:Cd,useInsertionEffect:wd,useLayoutEffect:Ad,useMemo:Ld,useReducer:Au,useRef:Ed,useState:function(){return Au(ho)},useDebugValue:Cu,useDeferredValue:function(t){var i=zn();return Gt===null?i.memoizedState=t:bd(i,Gt.memoizedState,t)},useTransition:function(){var t=Au(ho)[0],i=zn().memoizedState;return[t,i]},useMutableSource:md,useSyncExternalStore:gd,useId:Dd,unstable_isNewReconciler:!1};function Yn(t,i){if(t&&t.defaultProps){i=$({},i),t=t.defaultProps;for(var s in t)i[s]===void 0&&(i[s]=t[s]);return i}return i}function Pu(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:$({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var va={isMounted:function(t){return(t=t._reactInternals)?R(t)===t:!1},enqueueSetState:function(t,i,s){t=t._reactInternals;var l=dn(),c=Qi(t),h=_i(l,c);h.payload=i,s!=null&&(h.callback=s),i=ji(t,h,c),i!==null&&($n(i,t,c,l),ua(i,t,c))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=dn(),c=Qi(t),h=_i(l,c);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=ji(t,h,c),i!==null&&($n(i,t,c,l),ua(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=dn(),l=Qi(t),c=_i(s,l);c.tag=2,i!=null&&(c.callback=i),i=ji(t,c,l),i!==null&&($n(i,t,l,s),ua(i,t,l))}};function Fd(t,i,s,l,c,h,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,M):i.prototype&&i.prototype.isPureReactComponent?!Js(s,l)||!Js(c,h):!0}function Od(t,i,s){var l=!1,c=Xi,h=i.contextType;return typeof h=="object"&&h!==null?h=On(h):(c=_n(i)?_r:sn.current,l=i.contextTypes,h=(l=l!=null)?es(t,c):Xi),i=new i(s,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=va,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=h),i}function zd(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&va.enqueueReplaceState(i,i.state,null)}function Lu(t,i,s,l){var c=t.stateNode;c.props=s,c.state=t.memoizedState,c.refs={},gu(t);var h=i.contextType;typeof h=="object"&&h!==null?c.context=On(h):(h=_n(i)?_r:sn.current,c.context=es(t,h)),c.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Pu(t,i,h,s),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&va.enqueueReplaceState(c,c.state,null),ca(t,s,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function ls(t,i){try{var s="",l=i;do s+=he(l),l=l.return;while(l);var c=s}catch(h){c=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:c,digest:null}}function bu(t,i,s){return{value:t,source:null,stack:s??null,digest:i??null}}function Du(t,i){try{console.error(i.value)}catch(s){setTimeout(function(){throw s})}}var qg=typeof WeakMap=="function"?WeakMap:Map;function kd(t,i,s){s=_i(-1,s),s.tag=3,s.payload={element:null};var l=i.value;return s.callback=function(){Ta||(Ta=!0,qu=l),Du(t,i)},s}function Bd(t,i,s){s=_i(-1,s),s.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;s.payload=function(){return l(c)},s.callback=function(){Du(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(s.callback=function(){Du(t,i),typeof l!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),s}function Hd(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new qg;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(s)||(c.add(s),t=av.bind(null,t,i,s),i.then(t,t))}function Vd(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Gd(t,i,s,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(i=_i(-1,1),i.tag=2,ji(s,i,1))),s.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var jg=D.ReactCurrentOwner,xn=!1;function fn(t,i,s,l){i.child=t===null?ud(i,null,s,l):rs(i,t.child,s,l)}function Wd(t,i,s,l,c){s=s.render;var h=i.ref;return os(i,c),l=Eu(t,i,s,l,h,c),s=Tu(),t!==null&&!xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,xi(t,i,c)):(bt&&s&&ou(i),i.flags|=1,fn(t,i,l,c),i.child)}function Xd(t,i,s,l,c){if(t===null){var h=s.type;return typeof h=="function"&&!ec(h)&&h.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(i.tag=15,i.type=h,Yd(t,i,h,l,c)):(t=La(s.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&c)===0){var M=h.memoizedProps;if(s=s.compare,s=s!==null?s:Js,s(M,l)&&t.ref===i.ref)return xi(t,i,c)}return i.flags|=1,t=er(h,l),t.ref=i.ref,t.return=i,i.child=t}function Yd(t,i,s,l,c){if(t!==null){var h=t.memoizedProps;if(Js(h,l)&&t.ref===i.ref)if(xn=!1,i.pendingProps=l=h,(t.lanes&c)!==0)(t.flags&131072)!==0&&(xn=!0);else return i.lanes=t.lanes,xi(t,i,c)}return Uu(t,i,s,l,c)}function qd(t,i,s){var l=i.pendingProps,c=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(cs,Dn),Dn|=s;else{if((s&1073741824)===0)return t=h!==null?h.baseLanes|s:s,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Tt(cs,Dn),Dn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:s,Tt(cs,Dn),Dn|=l}else h!==null?(l=h.baseLanes|s,i.memoizedState=null):l=s,Tt(cs,Dn),Dn|=l;return fn(t,i,c,s),i.child}function jd(t,i){var s=i.ref;(t===null&&s!==null||t!==null&&t.ref!==s)&&(i.flags|=512,i.flags|=2097152)}function Uu(t,i,s,l,c){var h=_n(s)?_r:sn.current;return h=es(i,h),os(i,c),s=Eu(t,i,s,l,h,c),l=Tu(),t!==null&&!xn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,xi(t,i,c)):(bt&&l&&ou(i),i.flags|=1,fn(t,i,s,c),i.child)}function $d(t,i,s,l,c){if(_n(s)){var h=!0;ta(i)}else h=!1;if(os(i,c),i.stateNode===null)xa(t,i),Od(i,s,l),Lu(i,s,l,c),l=!0;else if(t===null){var M=i.stateNode,b=i.memoizedProps;M.props=b;var z=M.context,J=s.contextType;typeof J=="object"&&J!==null?J=On(J):(J=_n(s)?_r:sn.current,J=es(i,J));var ye=s.getDerivedStateFromProps,Me=typeof ye=="function"||typeof M.getSnapshotBeforeUpdate=="function";Me||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(b!==l||z!==J)&&zd(i,M,l,J),qi=!1;var xe=i.memoizedState;M.state=xe,ca(i,l,M,c),z=i.memoizedState,b!==l||xe!==z||vn.current||qi?(typeof ye=="function"&&(Pu(i,s,ye,l),z=i.memoizedState),(b=qi||Fd(i,s,b,l,xe,z,J))?(Me||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),M.props=l,M.state=z,M.context=J,l=b):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,fd(t,i),b=i.memoizedProps,J=i.type===i.elementType?b:Yn(i.type,b),M.props=J,Me=i.pendingProps,xe=M.context,z=s.contextType,typeof z=="object"&&z!==null?z=On(z):(z=_n(s)?_r:sn.current,z=es(i,z));var be=s.getDerivedStateFromProps;(ye=typeof be=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(b!==Me||xe!==z)&&zd(i,M,l,z),qi=!1,xe=i.memoizedState,M.state=xe,ca(i,l,M,c);var Fe=i.memoizedState;b!==Me||xe!==Fe||vn.current||qi?(typeof be=="function"&&(Pu(i,s,be,l),Fe=i.memoizedState),(J=qi||Fd(i,s,J,l,xe,Fe,z)||!1)?(ye||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,Fe,z),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,Fe,z)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||b===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=Fe),M.props=l,M.state=Fe,M.context=z,l=J):(typeof M.componentDidUpdate!="function"||b===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),l=!1)}return Nu(t,i,s,l,h,c)}function Nu(t,i,s,l,c,h){jd(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&ed(i,s,!1),xi(t,i,h);l=i.stateNode,jg.current=i;var b=M&&typeof s.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=rs(i,t.child,null,h),i.child=rs(i,null,b,h)):fn(t,i,b,h),i.memoizedState=l.state,c&&ed(i,s,!0),i.child}function Kd(t){var i=t.stateNode;i.pendingContext?Qf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Qf(t,i.context,!1),vu(t,i.containerInfo)}function Zd(t,i,s,l,c){return is(),cu(c),i.flags|=256,fn(t,i,s,l),i.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function Fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qd(t,i,s){var l=i.pendingProps,c=Dt.current,h=!1,M=(i.flags&128)!==0,b;if((b=M)||(b=t!==null&&t.memoizedState===null?!1:(c&2)!==0),b?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Tt(Dt,c&1),t===null)return uu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,h?(l=i.mode,h=i.child,M={mode:"hidden",children:M},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=M):h=ba(M,l,0,null),t=Cr(t,l,s,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Fu(s),i.memoizedState=Iu,t):Ou(i,M));if(c=t.memoizedState,c!==null&&(b=c.dehydrated,b!==null))return $g(t,i,M,l,b,c,s);if(h){h=l.fallback,M=i.mode,c=t.child,b=c.sibling;var z={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=z,i.deletions=null):(l=er(c,z),l.subtreeFlags=c.subtreeFlags&14680064),b!==null?h=er(b,h):(h=Cr(h,M,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,M=t.child.memoizedState,M=M===null?Fu(s):{baseLanes:M.baseLanes|s,cachePool:null,transitions:M.transitions},h.memoizedState=M,h.childLanes=t.childLanes&~s,i.memoizedState=Iu,l}return h=t.child,t=h.sibling,l=er(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=s),l.return=i,l.sibling=null,t!==null&&(s=i.deletions,s===null?(i.deletions=[t],i.flags|=16):s.push(t)),i.child=l,i.memoizedState=null,l}function Ou(t,i){return i=ba({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function _a(t,i,s,l){return l!==null&&cu(l),rs(i,t.child,null,s),t=Ou(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function $g(t,i,s,l,c,h,M){if(s)return i.flags&256?(i.flags&=-257,l=bu(Error(n(422))),_a(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,c=i.mode,l=ba({mode:"visible",children:l.children},c,0,null),h=Cr(h,c,M,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&rs(i,t.child,null,M),i.child.memoizedState=Fu(M),i.memoizedState=Iu,h);if((i.mode&1)===0)return _a(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var b=l.dgst;return l=b,h=Error(n(419)),l=bu(h,l,void 0),_a(t,i,M,l)}if(b=(M&t.childLanes)!==0,xn||b){if(l=Kt,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==h.retryLane&&(h.retryLane=c,vi(t,c),$n(l,t,c,-1))}return Ju(),l=bu(Error(n(421))),_a(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=lv.bind(null,t),c._reactRetry=i,null):(t=h.treeContext,bn=Gi(c.nextSibling),Ln=i,bt=!0,Xn=null,t!==null&&(In[Fn++]=mi,In[Fn++]=gi,In[Fn++]=xr,mi=t.id,gi=t.overflow,xr=i),i=Ou(i,l.children),i.flags|=4096,i)}function Jd(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),pu(t.return,i,s)}function zu(t,i,s,l,c){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:c}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=s,h.tailMode=c)}function eh(t,i,s){var l=i.pendingProps,c=l.revealOrder,h=l.tail;if(fn(t,i,l.children,s),l=Dt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jd(t,s,i);else if(t.tag===19)Jd(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Tt(Dt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(s=i.child,c=null;s!==null;)t=s.alternate,t!==null&&fa(t)===null&&(c=s),s=s.sibling;s=c,s===null?(c=i.child,i.child=null):(c=s.sibling,s.sibling=null),zu(i,!1,c,s,h);break;case"backwards":for(s=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&fa(t)===null){i.child=c;break}t=c.sibling,c.sibling=s,s=c,c=t}zu(i,!0,s,null,h);break;case"together":zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function xa(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function xi(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Tr|=i.lanes,(s&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,s=er(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=er(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Kg(t,i,s){switch(i.tag){case 3:Kd(i),is();break;case 5:pd(i);break;case 1:_n(i.type)&&ta(i);break;case 4:vu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Tt(aa,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Tt(Dt,Dt.current&1),i.flags|=128,null):(s&i.child.childLanes)!==0?Qd(t,i,s):(Tt(Dt,Dt.current&1),t=xi(t,i,s),t!==null?t.sibling:null);Tt(Dt,Dt.current&1);break;case 19:if(l=(s&i.childLanes)!==0,(t.flags&128)!==0){if(l)return eh(t,i,s);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Tt(Dt,Dt.current),l)break;return null;case 22:case 23:return i.lanes=0,qd(t,i,s)}return xi(t,i,s)}var th,ku,nh,ih;th=function(t,i){for(var s=i.child;s!==null;){if(s.tag===5||s.tag===6)t.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},ku=function(){},nh=function(t,i,s,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Mr(ri.current);var h=null;switch(s){case"input":c=Ye(t,c),l=Ye(t,l),h=[];break;case"select":c=$({},c,{value:void 0}),l=$({},l,{value:void 0}),h=[];break;case"textarea":c=pe(t,c),l=pe(t,l),h=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Qo)}wt(s,l);var M;s=null;for(J in c)if(!l.hasOwnProperty(J)&&c.hasOwnProperty(J)&&c[J]!=null)if(J==="style"){var b=c[J];for(M in b)b.hasOwnProperty(M)&&(s||(s={}),s[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?h||(h=[]):(h=h||[]).push(J,null));for(J in l){var z=l[J];if(b=c?.[J],l.hasOwnProperty(J)&&z!==b&&(z!=null||b!=null))if(J==="style")if(b){for(M in b)!b.hasOwnProperty(M)||z&&z.hasOwnProperty(M)||(s||(s={}),s[M]="");for(M in z)z.hasOwnProperty(M)&&b[M]!==z[M]&&(s||(s={}),s[M]=z[M])}else s||(h||(h=[]),h.push(J,s)),s=z;else J==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,b=b?b.__html:void 0,z!=null&&b!==z&&(h=h||[]).push(J,z)):J==="children"?typeof z!="string"&&typeof z!="number"||(h=h||[]).push(J,""+z):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(z!=null&&J==="onScroll"&&Rt("scroll",t),h||b===z||(h=[])):(h=h||[]).push(J,z))}s&&(h=h||[]).push("style",s);var J=h;(i.updateQueue=J)&&(i.flags|=4)}},ih=function(t,i,s,l){s!==l&&(i.flags|=4)};function mo(t,i){if(!bt)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function an(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)s|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function Zg(t,i,s){var l=i.pendingProps;switch(au(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return an(i),null;case 1:return _n(i.type)&&ea(),an(i),null;case 3:return l=i.stateNode,as(),Ct(vn),Ct(sn),Su(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(sa(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Xn!==null&&(Ku(Xn),Xn=null))),ku(t,i),an(i),null;case 5:_u(i);var c=Mr(uo.current);if(s=i.type,t!==null&&i.stateNode!=null)nh(t,i,s,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return an(i),null}if(t=Mr(ri.current),sa(i)){l=i.stateNode,s=i.type;var h=i.memoizedProps;switch(l[ii]=i,l[ro]=h,t=(i.mode&1)!==0,s){case"dialog":Rt("cancel",l),Rt("close",l);break;case"iframe":case"object":case"embed":Rt("load",l);break;case"video":case"audio":for(c=0;c<to.length;c++)Rt(to[c],l);break;case"source":Rt("error",l);break;case"img":case"image":case"link":Rt("error",l),Rt("load",l);break;case"details":Rt("toggle",l);break;case"input":lt(l,h),Rt("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Rt("invalid",l);break;case"textarea":ae(l,h),Rt("invalid",l)}wt(s,h),c=null;for(var M in h)if(h.hasOwnProperty(M)){var b=h[M];M==="children"?typeof b=="string"?l.textContent!==b&&(h.suppressHydrationWarning!==!0&&Zo(l.textContent,b,t),c=["children",b]):typeof b=="number"&&l.textContent!==""+b&&(h.suppressHydrationWarning!==!0&&Zo(l.textContent,b,t),c=["children",""+b]):a.hasOwnProperty(M)&&b!=null&&M==="onScroll"&&Rt("scroll",l)}switch(s){case"input":gt(l),ht(l,h,!0);break;case"textarea":gt(l),fe(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=Qo)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ue(s)),t==="http://www.w3.org/1999/xhtml"?s==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(s,{is:l.is}):(t=M.createElement(s),s==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,s),t[ii]=i,t[ro]=l,th(t,i,!1,!1),i.stateNode=t;e:{switch(M=nt(s,l),s){case"dialog":Rt("cancel",t),Rt("close",t),c=l;break;case"iframe":case"object":case"embed":Rt("load",t),c=l;break;case"video":case"audio":for(c=0;c<to.length;c++)Rt(to[c],t);c=l;break;case"source":Rt("error",t),c=l;break;case"img":case"image":case"link":Rt("error",t),Rt("load",t),c=l;break;case"details":Rt("toggle",t),c=l;break;case"input":lt(t,l),c=Ye(t,l),Rt("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=$({},l,{value:void 0}),Rt("invalid",t);break;case"textarea":ae(t,l),c=pe(t,l),Rt("invalid",t);break;default:c=l}wt(s,c),b=c;for(h in b)if(b.hasOwnProperty(h)){var z=b[h];h==="style"?it(t,z):h==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Te(t,z)):h==="children"?typeof z=="string"?(s!=="textarea"||z!=="")&&ze(t,z):typeof z=="number"&&ze(t,""+z):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(a.hasOwnProperty(h)?z!=null&&h==="onScroll"&&Rt("scroll",t):z!=null&&P(t,h,z,M))}switch(s){case"input":gt(t),ht(t,l,!1);break;case"textarea":gt(t),fe(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Le(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?ne(t,!!l.multiple,h,!1):l.defaultValue!=null&&ne(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=Qo)}switch(s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return an(i),null;case 6:if(t&&i.stateNode!=null)ih(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(s=Mr(uo.current),Mr(ri.current),sa(i)){if(l=i.stateNode,s=i.memoizedProps,l[ii]=i,(h=l.nodeValue!==s)&&(t=Ln,t!==null))switch(t.tag){case 3:Zo(l.nodeValue,s,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zo(l.nodeValue,s,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(s.nodeType===9?s:s.ownerDocument).createTextNode(l),l[ii]=i,i.stateNode=l}return an(i),null;case 13:if(Ct(Dt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)od(),is(),i.flags|=98560,h=!1;else if(h=sa(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[ii]=i}else is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;an(i),h=!1}else Xn!==null&&(Ku(Xn),Xn=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=s,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Dt.current&1)!==0?Wt===0&&(Wt=3):Ju())),i.updateQueue!==null&&(i.flags|=4),an(i),null);case 4:return as(),ku(t,i),t===null&&no(i.stateNode.containerInfo),an(i),null;case 10:return hu(i.type._context),an(i),null;case 17:return _n(i.type)&&ea(),an(i),null;case 19:if(Ct(Dt),h=i.memoizedState,h===null)return an(i),null;if(l=(i.flags&128)!==0,M=h.rendering,M===null)if(l)mo(h,!1);else{if(Wt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=fa(t),M!==null){for(i.flags|=128,mo(h,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=s,s=i.child;s!==null;)h=s,t=l,h.flags&=14680066,M=h.alternate,M===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=M.childLanes,h.lanes=M.lanes,h.child=M.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=M.memoizedProps,h.memoizedState=M.memoizedState,h.updateQueue=M.updateQueue,h.type=M.type,t=M.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),s=s.sibling;return Tt(Dt,Dt.current&1|2),i.child}t=t.sibling}h.tail!==null&&ke()>fs&&(i.flags|=128,l=!0,mo(h,!1),i.lanes=4194304)}else{if(!l)if(t=fa(M),t!==null){if(i.flags|=128,l=!0,s=t.updateQueue,s!==null&&(i.updateQueue=s,i.flags|=4),mo(h,!0),h.tail===null&&h.tailMode==="hidden"&&!M.alternate&&!bt)return an(i),null}else 2*ke()-h.renderingStartTime>fs&&s!==1073741824&&(i.flags|=128,l=!0,mo(h,!1),i.lanes=4194304);h.isBackwards?(M.sibling=i.child,i.child=M):(s=h.last,s!==null?s.sibling=M:i.child=M,h.last=M)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=ke(),i.sibling=null,s=Dt.current,Tt(Dt,l?s&1|2:s&1),i):(an(i),null);case 22:case 23:return Qu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Dn&1073741824)!==0&&(an(i),i.subtreeFlags&6&&(i.flags|=8192)):an(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function Qg(t,i){switch(au(i),i.tag){case 1:return _n(i.type)&&ea(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return as(),Ct(vn),Ct(sn),Su(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return _u(i),null;case 13:if(Ct(Dt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));is()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ct(Dt),null;case 4:return as(),null;case 10:return hu(i.type._context),null;case 22:case 23:return Qu(),null;case 24:return null;default:return null}}var Sa=!1,ln=!1,Jg=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function us(t,i){var s=t.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(l){Nt(t,i,l)}else s.current=null}function Bu(t,i,s){try{s()}catch(l){Nt(t,i,l)}}var rh=!1;function ev(t,i){if(Ql=Bo,t=Ff(),Wl(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var c=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{s.nodeType,h.nodeType}catch{s=null;break e}var M=0,b=-1,z=-1,J=0,ye=0,Me=t,xe=null;t:for(;;){for(var be;Me!==s||c!==0&&Me.nodeType!==3||(b=M+c),Me!==h||l!==0&&Me.nodeType!==3||(z=M+l),Me.nodeType===3&&(M+=Me.nodeValue.length),(be=Me.firstChild)!==null;)xe=Me,Me=be;for(;;){if(Me===t)break t;if(xe===s&&++J===c&&(b=M),xe===h&&++ye===l&&(z=M),(be=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=be}s=b===-1||z===-1?null:{start:b,end:z}}else s=null}s=s||{start:0,end:0}}else s=null;for(Jl={focusedElem:t,selectionRange:s},Bo=!1,Ne=i;Ne!==null;)if(i=Ne,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ne=t;else for(;Ne!==null;){i=Ne;try{var Fe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Fe!==null){var Be=Fe.memoizedProps,Ft=Fe.memoizedState,X=i.stateNode,B=X.getSnapshotBeforeUpdate(i.elementType===i.type?Be:Yn(i.type,Be),Ft);X.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var j=i.stateNode.containerInfo;j.nodeType===1?j.textContent="":j.nodeType===9&&j.documentElement&&j.removeChild(j.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(we){Nt(i,i.return,we)}if(t=i.sibling,t!==null){t.return=i.return,Ne=t;break}Ne=i.return}return Fe=rh,rh=!1,Fe}function go(t,i,s){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var h=c.destroy;c.destroy=void 0,h!==void 0&&Bu(i,s,h)}c=c.next}while(c!==l)}}function ya(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var l=s.create;s.destroy=l()}s=s.next}while(s!==i)}}function Hu(t){var i=t.ref;if(i!==null){var s=t.stateNode;switch(t.tag){case 5:t=s;break;default:t=s}typeof i=="function"?i(t):i.current=t}}function sh(t){var i=t.alternate;i!==null&&(t.alternate=null,sh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[ii],delete i[ro],delete i[iu],delete i[Fg],delete i[Og])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function oh(t){return t.tag===5||t.tag===3||t.tag===4}function ah(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||oh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.nodeType===8?s.parentNode.insertBefore(t,i):s.insertBefore(t,i):(s.nodeType===8?(i=s.parentNode,i.insertBefore(t,s)):(i=s,i.appendChild(t)),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Qo));else if(l!==4&&(t=t.child,t!==null))for(Vu(t,i,s),t=t.sibling;t!==null;)Vu(t,i,s),t=t.sibling}function Gu(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Gu(t,i,s),t=t.sibling;t!==null;)Gu(t,i,s),t=t.sibling}var tn=null,qn=!1;function $i(t,i,s){for(s=s.child;s!==null;)lh(t,i,s),s=s.sibling}function lh(t,i,s){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Ke,s)}catch{}switch(s.tag){case 5:ln||us(s,i);case 6:var l=tn,c=qn;tn=null,$i(t,i,s),tn=l,qn=c,tn!==null&&(qn?(t=tn,s=s.stateNode,t.nodeType===8?t.parentNode.removeChild(s):t.removeChild(s)):tn.removeChild(s.stateNode));break;case 18:tn!==null&&(qn?(t=tn,s=s.stateNode,t.nodeType===8?nu(t.parentNode,s):t.nodeType===1&&nu(t,s),qs(t)):nu(tn,s.stateNode));break;case 4:l=tn,c=qn,tn=s.stateNode.containerInfo,qn=!0,$i(t,i,s),tn=l,qn=c;break;case 0:case 11:case 14:case 15:if(!ln&&(l=s.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var h=c,M=h.destroy;h=h.tag,M!==void 0&&((h&2)!==0||(h&4)!==0)&&Bu(s,i,M),c=c.next}while(c!==l)}$i(t,i,s);break;case 1:if(!ln&&(us(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=s.memoizedProps,l.state=s.memoizedState,l.componentWillUnmount()}catch(b){Nt(s,i,b)}$i(t,i,s);break;case 21:$i(t,i,s);break;case 22:s.mode&1?(ln=(l=ln)||s.memoizedState!==null,$i(t,i,s),ln=l):$i(t,i,s);break;default:$i(t,i,s)}}function uh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var s=t.stateNode;s===null&&(s=t.stateNode=new Jg),i.forEach(function(l){var c=uv.bind(null,t,l);s.has(l)||(s.add(l),l.then(c,c))})}}function jn(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var c=s[l];try{var h=t,M=i,b=M;e:for(;b!==null;){switch(b.tag){case 5:tn=b.stateNode,qn=!1;break e;case 3:tn=b.stateNode.containerInfo,qn=!0;break e;case 4:tn=b.stateNode.containerInfo,qn=!0;break e}b=b.return}if(tn===null)throw Error(n(160));lh(h,M,c),tn=null,qn=!1;var z=c.alternate;z!==null&&(z.return=null),c.return=null}catch(J){Nt(c,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ch(i,t),i=i.sibling}function ch(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(jn(i,t),oi(t),l&4){try{go(3,t,t.return),ya(3,t)}catch(Be){Nt(t,t.return,Be)}try{go(5,t,t.return)}catch(Be){Nt(t,t.return,Be)}}break;case 1:jn(i,t),oi(t),l&512&&s!==null&&us(s,s.return);break;case 5:if(jn(i,t),oi(t),l&512&&s!==null&&us(s,s.return),t.flags&32){var c=t.stateNode;try{ze(c,"")}catch(Be){Nt(t,t.return,Be)}}if(l&4&&(c=t.stateNode,c!=null)){var h=t.memoizedProps,M=s!==null?s.memoizedProps:h,b=t.type,z=t.updateQueue;if(t.updateQueue=null,z!==null)try{b==="input"&&h.type==="radio"&&h.name!=null&&tt(c,h),nt(b,M);var J=nt(b,h);for(M=0;M<z.length;M+=2){var ye=z[M],Me=z[M+1];ye==="style"?it(c,Me):ye==="dangerouslySetInnerHTML"?Te(c,Me):ye==="children"?ze(c,Me):P(c,ye,Me,J)}switch(b){case"input":rt(c,h);break;case"textarea":L(c,h);break;case"select":var xe=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!h.multiple;var be=h.value;be!=null?ne(c,!!h.multiple,be,!1):xe!==!!h.multiple&&(h.defaultValue!=null?ne(c,!!h.multiple,h.defaultValue,!0):ne(c,!!h.multiple,h.multiple?[]:"",!1))}c[ro]=h}catch(Be){Nt(t,t.return,Be)}}break;case 6:if(jn(i,t),oi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,h=t.memoizedProps;try{c.nodeValue=h}catch(Be){Nt(t,t.return,Be)}}break;case 3:if(jn(i,t),oi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{qs(i.containerInfo)}catch(Be){Nt(t,t.return,Be)}break;case 4:jn(i,t),oi(t);break;case 13:jn(i,t),oi(t),c=t.child,c.flags&8192&&(h=c.memoizedState!==null,c.stateNode.isHidden=h,!h||c.alternate!==null&&c.alternate.memoizedState!==null||(Yu=ke())),l&4&&uh(t);break;case 22:if(ye=s!==null&&s.memoizedState!==null,t.mode&1?(ln=(J=ln)||ye,jn(i,t),ln=J):jn(i,t),oi(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!ye&&(t.mode&1)!==0)for(Ne=t,ye=t.child;ye!==null;){for(Me=Ne=ye;Ne!==null;){switch(xe=Ne,be=xe.child,xe.tag){case 0:case 11:case 14:case 15:go(4,xe,xe.return);break;case 1:us(xe,xe.return);var Fe=xe.stateNode;if(typeof Fe.componentWillUnmount=="function"){l=xe,s=xe.return;try{i=l,Fe.props=i.memoizedProps,Fe.state=i.memoizedState,Fe.componentWillUnmount()}catch(Be){Nt(l,s,Be)}}break;case 5:us(xe,xe.return);break;case 22:if(xe.memoizedState!==null){hh(Me);continue}}be!==null?(be.return=xe,Ne=be):hh(Me)}ye=ye.sibling}e:for(ye=null,Me=t;;){if(Me.tag===5){if(ye===null){ye=Me;try{c=Me.stateNode,J?(h=c.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(b=Me.stateNode,z=Me.memoizedProps.style,M=z!=null&&z.hasOwnProperty("display")?z.display:null,b.style.display=Ue("display",M))}catch(Be){Nt(t,t.return,Be)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=J?"":Me.memoizedProps}catch(Be){Nt(t,t.return,Be)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===t)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===t)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===t)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:jn(i,t),oi(t),l&4&&uh(t);break;case 21:break;default:jn(i,t),oi(t)}}function oi(t){var i=t.flags;if(i&2){try{e:{for(var s=t.return;s!==null;){if(oh(s)){var l=s;break e}s=s.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(ze(c,""),l.flags&=-33);var h=ah(t);Gu(t,h,c);break;case 3:case 4:var M=l.stateNode.containerInfo,b=ah(t);Vu(t,b,M);break;default:throw Error(n(161))}}catch(z){Nt(t,t.return,z)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function tv(t,i,s){Ne=t,fh(t)}function fh(t,i,s){for(var l=(t.mode&1)!==0;Ne!==null;){var c=Ne,h=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Sa;if(!M){var b=c.alternate,z=b!==null&&b.memoizedState!==null||ln;b=Sa;var J=ln;if(Sa=M,(ln=z)&&!J)for(Ne=c;Ne!==null;)M=Ne,z=M.child,M.tag===22&&M.memoizedState!==null?ph(c):z!==null?(z.return=M,Ne=z):ph(c);for(;h!==null;)Ne=h,fh(h),h=h.sibling;Ne=c,Sa=b,ln=J}dh(t)}else(c.subtreeFlags&8772)!==0&&h!==null?(h.return=c,Ne=h):dh(t)}}function dh(t){for(;Ne!==null;){var i=Ne;if((i.flags&8772)!==0){var s=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:ln||ya(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!ln)if(s===null)l.componentDidMount();else{var c=i.elementType===i.type?s.memoizedProps:Yn(i.type,s.memoizedProps);l.componentDidUpdate(c,s.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&hd(i,h,l);break;case 3:var M=i.updateQueue;if(M!==null){if(s=null,i.child!==null)switch(i.child.tag){case 5:s=i.child.stateNode;break;case 1:s=i.child.stateNode}hd(i,M,s)}break;case 5:var b=i.stateNode;if(s===null&&i.flags&4){s=b;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&s.focus();break;case"img":z.src&&(s.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ye=J.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&qs(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}ln||i.flags&512&&Hu(i)}catch(xe){Nt(i,i.return,xe)}}if(i===t){Ne=null;break}if(s=i.sibling,s!==null){s.return=i.return,Ne=s;break}Ne=i.return}}function hh(t){for(;Ne!==null;){var i=Ne;if(i===t){Ne=null;break}var s=i.sibling;if(s!==null){s.return=i.return,Ne=s;break}Ne=i.return}}function ph(t){for(;Ne!==null;){var i=Ne;try{switch(i.tag){case 0:case 11:case 15:var s=i.return;try{ya(4,i)}catch(z){Nt(i,s,z)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(z){Nt(i,c,z)}}var h=i.return;try{Hu(i)}catch(z){Nt(i,h,z)}break;case 5:var M=i.return;try{Hu(i)}catch(z){Nt(i,M,z)}}}catch(z){Nt(i,i.return,z)}if(i===t){Ne=null;break}var b=i.sibling;if(b!==null){b.return=i.return,Ne=b;break}Ne=i.return}}var nv=Math.ceil,Ma=D.ReactCurrentDispatcher,Wu=D.ReactCurrentOwner,kn=D.ReactCurrentBatchConfig,mt=0,Kt=null,Ot=null,nn=0,Dn=0,cs=Wi(0),Wt=0,vo=null,Tr=0,Ea=0,Xu=0,_o=null,Sn=null,Yu=0,fs=1/0,Si=null,Ta=!1,qu=null,Ki=null,wa=!1,Zi=null,Aa=0,xo=0,ju=null,Ra=-1,Ca=0;function dn(){return(mt&6)!==0?ke():Ra!==-1?Ra:Ra=ke()}function Qi(t){return(t.mode&1)===0?1:(mt&2)!==0&&nn!==0?nn&-nn:kg.transition!==null?(Ca===0&&(Ca=af()),Ca):(t=St,t!==0||(t=window.event,t=t===void 0?16:gf(t.type)),t)}function $n(t,i,s,l){if(50<xo)throw xo=0,ju=null,Error(n(185));Vs(t,s,l),((mt&2)===0||t!==Kt)&&(t===Kt&&((mt&2)===0&&(Ea|=s),Wt===4&&Ji(t,nn)),yn(t,l),s===1&&mt===0&&(i.mode&1)===0&&(fs=ke()+500,na&&Yi()))}function yn(t,i){var s=t.callbackNode;Cl(t,i);var l=en(t,t===Kt?nn:0);if(l===0)s!==null&&Ge(s),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(s!=null&&Ge(s),i===1)t.tag===0?zg(gh.bind(null,t)):td(gh.bind(null,t)),Ng(function(){(mt&6)===0&&Yi()}),s=null;else{switch(lf(l)){case 1:s=Lt;break;case 4:s=Ht;break;case 16:s=jt;break;case 536870912:s=pt;break;default:s=jt}s=Th(s,mh.bind(null,t))}t.callbackPriority=i,t.callbackNode=s}}function mh(t,i){if(Ra=-1,Ca=0,(mt&6)!==0)throw Error(n(327));var s=t.callbackNode;if(ds()&&t.callbackNode!==s)return null;var l=en(t,t===Kt?nn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Pa(t,l);else{i=l;var c=mt;mt|=2;var h=_h();(Kt!==t||nn!==i)&&(Si=null,fs=ke()+500,Ar(t,i));do try{sv();break}catch(b){vh(t,b)}while(!0);du(),Ma.current=h,mt=c,Ot!==null?i=0:(Kt=null,nn=0,i=Wt)}if(i!==0){if(i===2&&(c=Wr(t),c!==0&&(l=c,i=$u(t,c))),i===1)throw s=vo,Ar(t,0),Ji(t,l),yn(t,ke()),s;if(i===6)Ji(t,l);else{if(c=t.current.alternate,(l&30)===0&&!iv(c)&&(i=Pa(t,l),i===2&&(h=Wr(t),h!==0&&(l=h,i=$u(t,h))),i===1))throw s=vo,Ar(t,0),Ji(t,l),yn(t,ke()),s;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Rr(t,Sn,Si);break;case 3:if(Ji(t,l),(l&130023424)===l&&(i=Yu+500-ke(),10<i)){if(en(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){dn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=tu(Rr.bind(null,t,Sn,Si),i);break}Rr(t,Sn,Si);break;case 4:if(Ji(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-Vt(l);h=1<<M,M=i[M],M>c&&(c=M),l&=~h}if(l=c,l=ke()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*nv(l/1960))-l,10<l){t.timeoutHandle=tu(Rr.bind(null,t,Sn,Si),l);break}Rr(t,Sn,Si);break;case 5:Rr(t,Sn,Si);break;default:throw Error(n(329))}}}return yn(t,ke()),t.callbackNode===s?mh.bind(null,t):null}function $u(t,i){var s=_o;return t.current.memoizedState.isDehydrated&&(Ar(t,i).flags|=256),t=Pa(t,i),t!==2&&(i=Sn,Sn=s,i!==null&&Ku(i)),t}function Ku(t){Sn===null?Sn=t:Sn.push.apply(Sn,t)}function iv(t){for(var i=t;;){if(i.flags&16384){var s=i.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var l=0;l<s.length;l++){var c=s[l],h=c.getSnapshot;c=c.value;try{if(!Wn(h(),c))return!1}catch{return!1}}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ji(t,i){for(i&=~Xu,i&=~Ea,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var s=31-Vt(i),l=1<<s;t[s]=-1,i&=~l}}function gh(t){if((mt&6)!==0)throw Error(n(327));ds();var i=en(t,0);if((i&1)===0)return yn(t,ke()),null;var s=Pa(t,i);if(t.tag!==0&&s===2){var l=Wr(t);l!==0&&(i=l,s=$u(t,l))}if(s===1)throw s=vo,Ar(t,0),Ji(t,i),yn(t,ke()),s;if(s===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Rr(t,Sn,Si),yn(t,ke()),null}function Zu(t,i){var s=mt;mt|=1;try{return t(i)}finally{mt=s,mt===0&&(fs=ke()+500,na&&Yi())}}function wr(t){Zi!==null&&Zi.tag===0&&(mt&6)===0&&ds();var i=mt;mt|=1;var s=kn.transition,l=St;try{if(kn.transition=null,St=1,t)return t()}finally{St=l,kn.transition=s,mt=i,(mt&6)===0&&Yi()}}function Qu(){Dn=cs.current,Ct(cs)}function Ar(t,i){t.finishedWork=null,t.finishedLanes=0;var s=t.timeoutHandle;if(s!==-1&&(t.timeoutHandle=-1,Ug(s)),Ot!==null)for(s=Ot.return;s!==null;){var l=s;switch(au(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ea();break;case 3:as(),Ct(vn),Ct(sn),Su();break;case 5:_u(l);break;case 4:as();break;case 13:Ct(Dt);break;case 19:Ct(Dt);break;case 10:hu(l.type._context);break;case 22:case 23:Qu()}s=s.return}if(Kt=t,Ot=t=er(t.current,null),nn=Dn=i,Wt=0,vo=null,Xu=Ea=Tr=0,Sn=_o=null,yr!==null){for(i=0;i<yr.length;i++)if(s=yr[i],l=s.interleaved,l!==null){s.interleaved=null;var c=l.next,h=s.pending;if(h!==null){var M=h.next;h.next=c,l.next=M}s.pending=l}yr=null}return t}function vh(t,i){do{var s=Ot;try{if(du(),da.current=ga,ha){for(var l=Ut.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}ha=!1}if(Er=0,$t=Gt=Ut=null,co=!1,fo=0,Wu.current=null,s===null||s.return===null){Wt=1,vo=i,Ot=null;break}e:{var h=t,M=s.return,b=s,z=i;if(i=nn,b.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var J=z,ye=b,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=ye.alternate;xe?(ye.updateQueue=xe.updateQueue,ye.memoizedState=xe.memoizedState,ye.lanes=xe.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var be=Vd(M);if(be!==null){be.flags&=-257,Gd(be,M,b,h,i),be.mode&1&&Hd(h,J,i),i=be,z=J;var Fe=i.updateQueue;if(Fe===null){var Be=new Set;Be.add(z),i.updateQueue=Be}else Fe.add(z);break e}else{if((i&1)===0){Hd(h,J,i),Ju();break e}z=Error(n(426))}}else if(bt&&b.mode&1){var Ft=Vd(M);if(Ft!==null){(Ft.flags&65536)===0&&(Ft.flags|=256),Gd(Ft,M,b,h,i),cu(ls(z,b));break e}}h=z=ls(z,b),Wt!==4&&(Wt=2),_o===null?_o=[h]:_o.push(h),h=M;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var X=kd(h,z,i);dd(h,X);break e;case 1:b=z;var B=h.type,j=h.stateNode;if((h.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||j!==null&&typeof j.componentDidCatch=="function"&&(Ki===null||!Ki.has(j)))){h.flags|=65536,i&=-i,h.lanes|=i;var we=Bd(h,b,i);dd(h,we);break e}}h=h.return}while(h!==null)}Sh(s)}catch(Ve){i=Ve,Ot===s&&s!==null&&(Ot=s=s.return);continue}break}while(!0)}function _h(){var t=Ma.current;return Ma.current=ga,t===null?ga:t}function Ju(){(Wt===0||Wt===3||Wt===2)&&(Wt=4),Kt===null||(Tr&268435455)===0&&(Ea&268435455)===0||Ji(Kt,nn)}function Pa(t,i){var s=mt;mt|=2;var l=_h();(Kt!==t||nn!==i)&&(Si=null,Ar(t,i));do try{rv();break}catch(c){vh(t,c)}while(!0);if(du(),mt=s,Ma.current=l,Ot!==null)throw Error(n(261));return Kt=null,nn=0,Wt}function rv(){for(;Ot!==null;)xh(Ot)}function sv(){for(;Ot!==null&&!$e();)xh(Ot)}function xh(t){var i=Eh(t.alternate,t,Dn);t.memoizedProps=t.pendingProps,i===null?Sh(t):Ot=i,Wu.current=null}function Sh(t){var i=t;do{var s=i.alternate;if(t=i.return,(i.flags&32768)===0){if(s=Zg(s,i,Dn),s!==null){Ot=s;return}}else{if(s=Qg(s,i),s!==null){s.flags&=32767,Ot=s;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Wt=6,Ot=null;return}}if(i=i.sibling,i!==null){Ot=i;return}Ot=i=t}while(i!==null);Wt===0&&(Wt=5)}function Rr(t,i,s){var l=St,c=kn.transition;try{kn.transition=null,St=1,ov(t,i,s,l)}finally{kn.transition=c,St=l}return null}function ov(t,i,s,l){do ds();while(Zi!==null);if((mt&6)!==0)throw Error(n(327));s=t.finishedWork;var c=t.finishedLanes;if(s===null)return null;if(t.finishedWork=null,t.finishedLanes=0,s===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=s.lanes|s.childLanes;if(Bm(t,h),t===Kt&&(Ot=Kt=null,nn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||wa||(wa=!0,Th(jt,function(){return ds(),null})),h=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||h){h=kn.transition,kn.transition=null;var M=St;St=1;var b=mt;mt|=4,Wu.current=null,ev(t,s),ch(s,t),Ag(Jl),Bo=!!Ql,Jl=Ql=null,t.current=s,tv(s),et(),mt=b,St=M,kn.transition=h}else t.current=s;if(wa&&(wa=!1,Zi=t,Aa=c),h=t.pendingLanes,h===0&&(Ki=null),Et(s.stateNode),yn(t,ke()),i!==null)for(l=t.onRecoverableError,s=0;s<i.length;s++)c=i[s],l(c.value,{componentStack:c.stack,digest:c.digest});if(Ta)throw Ta=!1,t=qu,qu=null,t;return(Aa&1)!==0&&t.tag!==0&&ds(),h=t.pendingLanes,(h&1)!==0?t===ju?xo++:(xo=0,ju=t):xo=0,Yi(),null}function ds(){if(Zi!==null){var t=lf(Aa),i=kn.transition,s=St;try{if(kn.transition=null,St=16>t?16:t,Zi===null)var l=!1;else{if(t=Zi,Zi=null,Aa=0,(mt&6)!==0)throw Error(n(331));var c=mt;for(mt|=4,Ne=t.current;Ne!==null;){var h=Ne,M=h.child;if((Ne.flags&16)!==0){var b=h.deletions;if(b!==null){for(var z=0;z<b.length;z++){var J=b[z];for(Ne=J;Ne!==null;){var ye=Ne;switch(ye.tag){case 0:case 11:case 15:go(8,ye,h)}var Me=ye.child;if(Me!==null)Me.return=ye,Ne=Me;else for(;Ne!==null;){ye=Ne;var xe=ye.sibling,be=ye.return;if(sh(ye),ye===J){Ne=null;break}if(xe!==null){xe.return=be,Ne=xe;break}Ne=be}}}var Fe=h.alternate;if(Fe!==null){var Be=Fe.child;if(Be!==null){Fe.child=null;do{var Ft=Be.sibling;Be.sibling=null,Be=Ft}while(Be!==null)}}Ne=h}}if((h.subtreeFlags&2064)!==0&&M!==null)M.return=h,Ne=M;else e:for(;Ne!==null;){if(h=Ne,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:go(9,h,h.return)}var X=h.sibling;if(X!==null){X.return=h.return,Ne=X;break e}Ne=h.return}}var B=t.current;for(Ne=B;Ne!==null;){M=Ne;var j=M.child;if((M.subtreeFlags&2064)!==0&&j!==null)j.return=M,Ne=j;else e:for(M=B;Ne!==null;){if(b=Ne,(b.flags&2048)!==0)try{switch(b.tag){case 0:case 11:case 15:ya(9,b)}}catch(Ve){Nt(b,b.return,Ve)}if(b===M){Ne=null;break e}var we=b.sibling;if(we!==null){we.return=b.return,Ne=we;break e}Ne=b.return}}if(mt=c,Yi(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Ke,t)}catch{}l=!0}return l}finally{St=s,kn.transition=i}}return!1}function yh(t,i,s){i=ls(s,i),i=kd(t,i,1),t=ji(t,i,1),i=dn(),t!==null&&(Vs(t,1,i),yn(t,i))}function Nt(t,i,s){if(t.tag===3)yh(t,t,s);else for(;i!==null;){if(i.tag===3){yh(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ki===null||!Ki.has(l))){t=ls(s,t),t=Bd(i,t,1),i=ji(i,t,1),t=dn(),i!==null&&(Vs(i,1,t),yn(i,t));break}}i=i.return}}function av(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),i=dn(),t.pingedLanes|=t.suspendedLanes&s,Kt===t&&(nn&s)===s&&(Wt===4||Wt===3&&(nn&130023424)===nn&&500>ke()-Yu?Ar(t,0):Xu|=s),yn(t,i)}function Mh(t,i){i===0&&((t.mode&1)===0?i=1:(i=Cn,Cn<<=1,(Cn&130023424)===0&&(Cn=4194304)));var s=dn();t=vi(t,i),t!==null&&(Vs(t,i,s),yn(t,s))}function lv(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Mh(t,s)}function uv(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(s=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Mh(t,s)}var Eh;Eh=function(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps||vn.current)xn=!0;else{if((t.lanes&s)===0&&(i.flags&128)===0)return xn=!1,Kg(t,i,s);xn=(t.flags&131072)!==0}else xn=!1,bt&&(i.flags&1048576)!==0&&nd(i,ra,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;xa(t,i),t=i.pendingProps;var c=es(i,sn.current);os(i,s),c=Eu(null,i,l,t,c,s);var h=Tu();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,_n(l)?(h=!0,ta(i)):h=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,gu(i),c.updater=va,i.stateNode=c,c._reactInternals=i,Lu(i,l,t,s),i=Nu(null,i,l,!0,h,s)):(i.tag=0,bt&&h&&ou(i),fn(null,i,c,s),i=i.child),i;case 16:l=i.elementType;e:{switch(xa(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=fv(l),t=Yn(l,t),c){case 0:i=Uu(null,i,l,t,s);break e;case 1:i=$d(null,i,l,t,s);break e;case 11:i=Wd(null,i,l,t,s);break e;case 14:i=Xd(null,i,l,Yn(l.type,t),s);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Yn(l,c),Uu(t,i,l,c,s);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Yn(l,c),$d(t,i,l,c,s);case 3:e:{if(Kd(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,c=h.element,fd(t,i),ca(i,l,null,s);var M=i.memoizedState;if(l=M.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){c=ls(Error(n(423)),i),i=Zd(t,i,l,s,c);break e}else if(l!==c){c=ls(Error(n(424)),i),i=Zd(t,i,l,s,c);break e}else for(bn=Gi(i.stateNode.containerInfo.firstChild),Ln=i,bt=!0,Xn=null,s=ud(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(is(),l===c){i=xi(t,i,s);break e}fn(t,i,l,s)}i=i.child}return i;case 5:return pd(i),t===null&&uu(i),l=i.type,c=i.pendingProps,h=t!==null?t.memoizedProps:null,M=c.children,eu(l,c)?M=null:h!==null&&eu(l,h)&&(i.flags|=32),jd(t,i),fn(t,i,M,s),i.child;case 6:return t===null&&uu(i),null;case 13:return Qd(t,i,s);case 4:return vu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=rs(i,null,l,s):fn(t,i,l,s),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Yn(l,c),Wd(t,i,l,c,s);case 7:return fn(t,i,i.pendingProps,s),i.child;case 8:return fn(t,i,i.pendingProps.children,s),i.child;case 12:return fn(t,i,i.pendingProps.children,s),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,h=i.memoizedProps,M=c.value,Tt(aa,l._currentValue),l._currentValue=M,h!==null)if(Wn(h.value,M)){if(h.children===c.children&&!vn.current){i=xi(t,i,s);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var b=h.dependencies;if(b!==null){M=h.child;for(var z=b.firstContext;z!==null;){if(z.context===l){if(h.tag===1){z=_i(-1,s&-s),z.tag=2;var J=h.updateQueue;if(J!==null){J=J.shared;var ye=J.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),J.pending=z}}h.lanes|=s,z=h.alternate,z!==null&&(z.lanes|=s),pu(h.return,s,i),b.lanes|=s;break}z=z.next}}else if(h.tag===10)M=h.type===i.type?null:h.child;else if(h.tag===18){if(M=h.return,M===null)throw Error(n(341));M.lanes|=s,b=M.alternate,b!==null&&(b.lanes|=s),pu(M,s,i),M=h.sibling}else M=h.child;if(M!==null)M.return=h;else for(M=h;M!==null;){if(M===i){M=null;break}if(h=M.sibling,h!==null){h.return=M.return,M=h;break}M=M.return}h=M}fn(t,i,c.children,s),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,os(i,s),c=On(c),l=l(c),i.flags|=1,fn(t,i,l,s),i.child;case 14:return l=i.type,c=Yn(l,i.pendingProps),c=Yn(l.type,c),Xd(t,i,l,c,s);case 15:return Yd(t,i,i.type,i.pendingProps,s);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:Yn(l,c),xa(t,i),i.tag=1,_n(l)?(t=!0,ta(i)):t=!1,os(i,s),Od(i,l,c),Lu(i,l,c,s),Nu(null,i,l,!0,t,s);case 19:return eh(t,i,s);case 22:return qd(t,i,s)}throw Error(n(156,i.tag))};function Th(t,i){return He(t,i)}function cv(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bn(t,i,s,l){return new cv(t,i,s,l)}function ec(t){return t=t.prototype,!(!t||!t.isReactComponent)}function fv(t){if(typeof t=="function")return ec(t)?1:0;if(t!=null){if(t=t.$$typeof,t===le)return 11;if(t===ce)return 14}return 2}function er(t,i){var s=t.alternate;return s===null?(s=Bn(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&14680064,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s}function La(t,i,s,l,c,h){var M=2;if(l=t,typeof t=="function")ec(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case F:return Cr(s.children,c,h,i);case re:M=8,c|=8;break;case C:return t=Bn(12,s,i,c|2),t.elementType=C,t.lanes=h,t;case H:return t=Bn(13,s,i,c),t.elementType=H,t.lanes=h,t;case oe:return t=Bn(19,s,i,c),t.elementType=oe,t.lanes=h,t;case ge:return ba(s,c,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case E:M=10;break e;case q:M=9;break e;case le:M=11;break e;case ce:M=14;break e;case me:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Bn(M,s,i,c),i.elementType=t,i.type=l,i.lanes=h,i}function Cr(t,i,s,l){return t=Bn(7,t,l,i),t.lanes=s,t}function ba(t,i,s,l){return t=Bn(22,t,l,i),t.elementType=ge,t.lanes=s,t.stateNode={isHidden:!1},t}function tc(t,i,s){return t=Bn(6,t,null,i),t.lanes=s,t}function nc(t,i,s){return i=Bn(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function dv(t,i,s,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function ic(t,i,s,l,c,h,M,b,z){return t=new dv(t,i,s,b,z),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Bn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},gu(h),t}function hv(t,i,s){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:l==null?null:""+l,children:t,containerInfo:i,implementation:s}}function wh(t){if(!t)return Xi;t=t._reactInternals;e:{if(R(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(_n(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var s=t.type;if(_n(s))return Jf(t,s,i)}return i}function Ah(t,i,s,l,c,h,M,b,z){return t=ic(s,l,!0,t,c,h,M,b,z),t.context=wh(null),s=t.current,l=dn(),c=Qi(s),h=_i(l,c),h.callback=i??null,ji(s,h,c),t.current.lanes=c,Vs(t,c,l),yn(t,l),t}function Da(t,i,s,l){var c=i.current,h=dn(),M=Qi(c);return s=wh(s),i.context===null?i.context=s:i.pendingContext=s,i=_i(h,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=ji(c,i,M),t!==null&&($n(t,c,M,h),ua(t,c,M)),M}function Ua(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rh(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function rc(t,i){Rh(t,i),(t=t.alternate)&&Rh(t,i)}function pv(){return null}var Ch=typeof reportError=="function"?reportError:function(t){console.error(t)};function sc(t){this._internalRoot=t}Na.prototype.render=sc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Da(t,i,null,null)},Na.prototype.unmount=sc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;wr(function(){Da(null,t,null,null)}),i[hi]=null}};function Na(t){this._internalRoot=t}Na.prototype.unstable_scheduleHydration=function(t){if(t){var i=ff();t={blockedOn:null,target:t,priority:i};for(var s=0;s<Bi.length&&i!==0&&i<Bi[s].priority;s++);Bi.splice(s,0,t),s===0&&pf(t)}};function oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ia(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ph(){}function mv(t,i,s,l,c){if(c){if(typeof l=="function"){var h=l;l=function(){var J=Ua(M);h.call(J)}}var M=Ah(i,l,t,0,null,!1,!1,"",Ph);return t._reactRootContainer=M,t[hi]=M.current,no(t.nodeType===8?t.parentNode:t),wr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var b=l;l=function(){var J=Ua(z);b.call(J)}}var z=ic(t,0,!1,null,null,!1,!1,"",Ph);return t._reactRootContainer=z,t[hi]=z.current,no(t.nodeType===8?t.parentNode:t),wr(function(){Da(i,z,s,l)}),z}function Fa(t,i,s,l,c){var h=s._reactRootContainer;if(h){var M=h;if(typeof c=="function"){var b=c;c=function(){var z=Ua(M);b.call(z)}}Da(i,M,t,c)}else M=mv(s,i,t,c,l);return Ua(M)}uf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var s=di(i.pendingLanes);s!==0&&(Ll(i,s|1),yn(i,ke()),(mt&6)===0&&(fs=ke()+500,Yi()))}break;case 13:wr(function(){var l=vi(t,1);if(l!==null){var c=dn();$n(l,t,1,c)}}),rc(t,1)}},bl=function(t){if(t.tag===13){var i=vi(t,134217728);if(i!==null){var s=dn();$n(i,t,134217728,s)}rc(t,134217728)}},cf=function(t){if(t.tag===13){var i=Qi(t),s=vi(t,i);if(s!==null){var l=dn();$n(s,t,i,l)}rc(t,i)}},ff=function(){return St},df=function(t,i){var s=St;try{return St=t,i()}finally{St=s}},de=function(t,i,s){switch(i){case"input":if(rt(t,s),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var c=Jo(l);if(!c)throw Error(n(90));Xe(l),rt(l,c)}}}break;case"textarea":L(t,s);break;case"select":i=s.value,i!=null&&ne(t,!!s.multiple,i,!1)}},Bt=Zu,vt=wr;var gv={usingClientEntryPoint:!1,Events:[so,Qr,Jo,yt,At,Zu]},So={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vv={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z(t),t===null?null:t.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||pv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oa.isDisabled&&Oa.supportsFiber)try{Ke=Oa.inject(vv),rn=Oa}catch{}}return Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gv,Mn.createPortal=function(t,i){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!oc(i))throw Error(n(200));return hv(t,i,null,s)},Mn.createRoot=function(t,i){if(!oc(t))throw Error(n(299));var s=!1,l="",c=Ch;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=ic(t,1,!1,null,null,s,!1,l,c),t[hi]=i.current,no(t.nodeType===8?t.parentNode:t),new sc(i)},Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Z(i),t=t===null?null:t.stateNode,t},Mn.flushSync=function(t){return wr(t)},Mn.hydrate=function(t,i,s){if(!Ia(i))throw Error(n(200));return Fa(null,t,i,!0,s)},Mn.hydrateRoot=function(t,i,s){if(!oc(t))throw Error(n(405));var l=s!=null&&s.hydratedSources||null,c=!1,h="",M=Ch;if(s!=null&&(s.unstable_strictMode===!0&&(c=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(M=s.onRecoverableError)),i=Ah(i,null,t,1,s??null,c,!1,h,M),t[hi]=i.current,no(t),l)for(t=0;t<l.length;t++)s=l[t],c=s._getVersion,c=c(s._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[s,c]:i.mutableSourceEagerHydrationData.push(s,c);return new Na(i)},Mn.render=function(t,i,s){if(!Ia(i))throw Error(n(200));return Fa(null,t,i,!1,s)},Mn.unmountComponentAtNode=function(t){if(!Ia(t))throw Error(n(40));return t._reactRootContainer?(wr(function(){Fa(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1},Mn.unstable_batchedUpdates=Zu,Mn.unstable_renderSubtreeIntoContainer=function(t,i,s,l){if(!Ia(s))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Fa(t,i,s,!1,l)},Mn.version="18.3.1-next-f1338f8080-20240426",Mn}var Oh;function wv(){if(Oh)return uc.exports;Oh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),uc.exports=Tv(),uc.exports}var zh;function Av(){if(zh)return za;zh=1;var o=wv();return za.createRoot=o.createRoot,za.hydrateRoot=o.hydrateRoot,za}var Rv=Av();const rf="164",Cv=0,kh=1,Pv=2,cm=1,Lv=2,Ai=3,fr=0,An=1,Ri=2,ur=0,bs=1,qc=2,Bh=3,Hh=4,bv=5,Or=100,Dv=101,Uv=102,Nv=103,Iv=104,Fv=200,Ov=201,zv=202,kv=203,jc=204,$c=205,Bv=206,Hv=207,Vv=208,Gv=209,Wv=210,Xv=211,Yv=212,qv=213,jv=214,$v=0,Kv=1,Zv=2,dl=3,Qv=4,Jv=5,e_=6,t_=7,fm=0,n_=1,i_=2,cr=0,r_=1,s_=2,o_=3,a_=4,l_=5,u_=6,c_=7,dm=300,Ns=301,Is=302,Kc=303,Zc=304,yl=306,Qc=1e3,ei=1001,Jc=1002,wn=1003,f_=1004,ka=1005,pn=1006,dc=1007,kr=1008,dr=1009,d_=1010,h_=1011,hm=1012,pm=1013,Fs=1014,Ci=1015,Lo=1016,mm=1017,gm=1018,bo=1020,p_=35902,m_=1021,g_=1022,ti=1023,v_=1024,__=1025,Ds=1026,Po=1027,x_=1028,vm=1029,S_=1030,_m=1031,xm=1033,hc=33776,pc=33777,mc=33778,gc=33779,Vh=35840,Gh=35841,Wh=35842,Xh=35843,Yh=36196,qh=37492,jh=37496,$h=37808,Kh=37809,Zh=37810,Qh=37811,Jh=37812,ep=37813,tp=37814,np=37815,ip=37816,rp=37817,sp=37818,op=37819,ap=37820,lp=37821,vc=36492,up=36494,cp=36495,y_=36283,fp=36284,dp=36285,hp=36286,M_=3200,E_=3201,T_=0,w_=1,lr="",li="srgb",pr="srgb-linear",sf="display-p3",Ml="display-p3-linear",hl="linear",Pt="srgb",pl="rec709",ml="p3",hs=7680,pp=519,A_=512,R_=513,C_=514,Sm=515,P_=516,L_=517,b_=518,D_=519,mp=35044,gp="300 es",Pi=2e3,gl=2001;class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,f=a.length;u<f;u++)a[u].call(this,e);e.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_c=Math.PI/180,ef=180/Math.PI;function Do(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(un[o&255]+un[o>>8&255]+un[o>>16&255]+un[o>>24&255]+"-"+un[e&255]+un[e>>8&255]+"-"+un[e>>16&15|64]+un[e>>24&255]+"-"+un[n&63|128]+un[n>>8&255]+"-"+un[n>>16&255]+un[n>>24&255]+un[r&255]+un[r>>8&255]+un[r>>16&255]+un[r>>24&255]).toLowerCase()}function Tn(o,e,n){return Math.max(e,Math.min(n,o))}function U_(o,e){return(o%e+e)%e}function xc(o,e,n){return(1-n)*o+n*e}function Mo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function En(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,f=this.y-e.y;return this.x=u*r-f*a+e.x,this.y=u*a+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class at{constructor(e,n,r,a,u,f,d,p,m){at.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m)}set(e,n,r,a,u,f,d,p,m){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],v=r[4],S=r[7],x=r[2],y=r[5],A=r[8],T=a[0],_=a[3],g=a[6],N=a[1],P=a[4],D=a[7],K=a[2],O=a[5],F=a[8];return u[0]=f*T+d*N+p*K,u[3]=f*_+d*P+p*O,u[6]=f*g+d*D+p*F,u[1]=m*T+v*N+S*K,u[4]=m*_+v*P+S*O,u[7]=m*g+v*D+S*F,u[2]=x*T+y*N+A*K,u[5]=x*_+y*P+A*O,u[8]=x*g+y*D+A*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*f*v-n*d*m-r*u*v+r*d*p+a*u*m-a*f*p}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],S=v*f-d*m,x=d*p-v*u,y=m*u-f*p,A=n*S+r*x+a*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=S*T,e[1]=(a*m-v*r)*T,e[2]=(d*r-a*f)*T,e[3]=x*T,e[4]=(v*n-a*p)*T,e[5]=(a*u-d*n)*T,e[6]=y*T,e[7]=(r*p-m*n)*T,e[8]=(f*n-r*u)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+e,-a*m,a*p,-a*(-m*f+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Sc.makeScale(e,n)),this}rotate(e){return this.premultiply(Sc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Sc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sc=new at;function ym(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function vl(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function N_(){const o=vl("canvas");return o.style.display="block",o}const vp={};function I_(o){o in vp||(vp[o]=!0,console.warn(o))}const _p=new at().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xp=new at().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ba={[pr]:{transfer:hl,primaries:pl,toReference:o=>o,fromReference:o=>o},[li]:{transfer:Pt,primaries:pl,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Ml]:{transfer:hl,primaries:ml,toReference:o=>o.applyMatrix3(xp),fromReference:o=>o.applyMatrix3(_p)},[sf]:{transfer:Pt,primaries:ml,toReference:o=>o.convertSRGBToLinear().applyMatrix3(xp),fromReference:o=>o.applyMatrix3(_p).convertLinearToSRGB()}},F_=new Set([pr,Ml]),Mt={enabled:!0,_workingColorSpace:pr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!F_.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,n){if(this.enabled===!1||e===n||!e||!n)return o;const r=Ba[e].toReference,a=Ba[n].fromReference;return a(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Ba[o].primaries},getTransfer:function(o){return o===lr?hl:Ba[o].transfer}};function Us(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function yc(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ps;class O_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=vl("canvas")),ps.width=e.width,ps.height=e.height;const r=ps.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ps}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=vl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let f=0;f<u.length;f++)u[f]=Us(u[f]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Us(n[r]/255)*255):n[r]=Us(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z_=0;class Mm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Do(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let f=0,d=a.length;f<d;f++)a[f].isDataTexture?u.push(Mc(a[f].image)):u.push(Mc(a[f]))}else u=Mc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function Mc(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?O_.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let k_=0;class mn extends zs{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,r=ei,a=ei,u=pn,f=kr,d=ti,p=dr,m=mn.DEFAULT_ANISOTROPY,v=lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Do(),this.name="",this.source=new Mm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new at,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qc:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case Jc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qc:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case Jc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=dm;mn.DEFAULT_ANISOTROPY=1;class Jt{constructor(e=0,n=0,r=0,a=1){Jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,f=e.elements;return this.x=f[0]*n+f[4]*r+f[8]*a+f[12]*u,this.y=f[1]*n+f[5]*r+f[9]*a+f[13]*u,this.z=f[2]*n+f[6]*r+f[10]*a+f[14]*u,this.w=f[3]*n+f[7]*r+f[11]*a+f[15]*u,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const p=e.elements,m=p[0],v=p[4],S=p[8],x=p[1],y=p[5],A=p[9],T=p[2],_=p[6],g=p[10];if(Math.abs(v-x)<.01&&Math.abs(S-T)<.01&&Math.abs(A-_)<.01){if(Math.abs(v+x)<.1&&Math.abs(S+T)<.1&&Math.abs(A+_)<.1&&Math.abs(m+y+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const P=(m+1)/2,D=(y+1)/2,K=(g+1)/2,O=(v+x)/4,F=(S+T)/4,re=(A+_)/4;return P>D&&P>K?P<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(P),a=O/r,u=F/r):D>K?D<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(D),r=O/a,u=re/a):K<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(K),r=F/u,a=re/u),this.set(r,a,u,n),this}let N=Math.sqrt((_-A)*(_-A)+(S-T)*(S-T)+(x-v)*(x-v));return Math.abs(N)<.001&&(N=1),this.x=(_-A)/N,this.y=(S-T)/N,this.z=(x-v)/N,this.w=Math.acos((m+y+g-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class B_ extends zs{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Jt(0,0,e,n),this.scissorTest=!1,this.viewport=new Jt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new mn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Mm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends B_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class Em extends mn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H_ extends mn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=wn,this.minFilter=wn,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Uo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,f,d){let p=r[a+0],m=r[a+1],v=r[a+2],S=r[a+3];const x=u[f+0],y=u[f+1],A=u[f+2],T=u[f+3];if(d===0){e[n+0]=p,e[n+1]=m,e[n+2]=v,e[n+3]=S;return}if(d===1){e[n+0]=x,e[n+1]=y,e[n+2]=A,e[n+3]=T;return}if(S!==T||p!==x||m!==y||v!==A){let _=1-d;const g=p*x+m*y+v*A+S*T,N=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const K=Math.sqrt(P),O=Math.atan2(K,g*N);_=Math.sin(_*O)/K,d=Math.sin(d*O)/K}const D=d*N;if(p=p*_+x*D,m=m*_+y*D,v=v*_+A*D,S=S*_+T*D,_===1-d){const K=1/Math.sqrt(p*p+m*m+v*v+S*S);p*=K,m*=K,v*=K,S*=K}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,a,u,f){const d=r[a],p=r[a+1],m=r[a+2],v=r[a+3],S=u[f],x=u[f+1],y=u[f+2],A=u[f+3];return e[n]=d*A+v*S+p*y-m*x,e[n+1]=p*A+v*x+m*S-d*y,e[n+2]=m*A+v*y+d*x-p*S,e[n+3]=v*A-d*S-p*x-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(a/2),S=d(u/2),x=p(r/2),y=p(a/2),A=p(u/2);switch(f){case"XYZ":this._x=x*v*S+m*y*A,this._y=m*y*S-x*v*A,this._z=m*v*A+x*y*S,this._w=m*v*S-x*y*A;break;case"YXZ":this._x=x*v*S+m*y*A,this._y=m*y*S-x*v*A,this._z=m*v*A-x*y*S,this._w=m*v*S+x*y*A;break;case"ZXY":this._x=x*v*S-m*y*A,this._y=m*y*S+x*v*A,this._z=m*v*A+x*y*S,this._w=m*v*S-x*y*A;break;case"ZYX":this._x=x*v*S-m*y*A,this._y=m*y*S+x*v*A,this._z=m*v*A-x*y*S,this._w=m*v*S+x*y*A;break;case"YZX":this._x=x*v*S+m*y*A,this._y=m*y*S+x*v*A,this._z=m*v*A-x*y*S,this._w=m*v*S-x*y*A;break;case"XZY":this._x=x*v*S-m*y*A,this._y=m*y*S-x*v*A,this._z=m*v*A+x*y*S,this._w=m*v*S+x*y*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],f=n[1],d=n[5],p=n[9],m=n[2],v=n[6],S=n[10],x=r+d+S;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-p)*y,this._y=(u-m)*y,this._z=(f-a)*y}else if(r>d&&r>S){const y=2*Math.sqrt(1+r-d-S);this._w=(v-p)/y,this._x=.25*y,this._y=(a+f)/y,this._z=(u+m)/y}else if(d>S){const y=2*Math.sqrt(1+d-r-S);this._w=(u-m)/y,this._x=(a+f)/y,this._y=.25*y,this._z=(p+v)/y}else{const y=2*Math.sqrt(1+S-r-d);this._w=(f-a)/y,this._x=(u+m)/y,this._y=(p+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,f=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+f*d+a*m-u*p,this._y=a*v+f*p+u*d-r*m,this._z=u*v+f*m+r*p-a*d,this._w=f*v-r*d-a*p-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,f=this._w;let d=f*e._w+r*e._x+a*e._y+u*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=r,this._y=a,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-n;return this._w=y*f+n*this._w,this._x=y*r+n*this._x,this._y=y*a+n*this._y,this._z=y*u+n*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),S=Math.sin((1-n)*v)/m,x=Math.sin(n*v)/m;return this._w=f*S+this._w*x,this._x=r*S+this._x*x,this._y=a*S+this._y*x,this._z=u*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,f=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*f,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*f,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*f,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*a-d*r),v=2*(d*n-u*a),S=2*(u*r-f*n);return this.x=n+p*m+f*S-d*v,this.y=r+p*v+d*m-u*S,this.z=a+p*S+u*v-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(n,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,f=n.x,d=n.y,p=n.z;return this.x=a*p-u*d,this.y=u*f-r*p,this.z=r*d-a*f,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Ec.copy(this).projectOnVector(e),this.sub(Ec)}reflect(e){return this.sub(Ec.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Tn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ec=new ee,Sp=new Uo;class No{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(Kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(Kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=Kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Kn):Kn.fromBufferAttribute(u,f),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ha.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ha.copy(r.boundingBox)),Ha.applyMatrix4(e.matrixWorld),this.union(Ha)}const a=e.children;for(let u=0,f=a.length;u<f;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),Va.subVectors(this.max,Eo),ms.subVectors(e.a,Eo),gs.subVectors(e.b,Eo),vs.subVectors(e.c,Eo),nr.subVectors(gs,ms),ir.subVectors(vs,gs),Pr.subVectors(ms,vs);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Pr.z,Pr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Pr.z,0,-Pr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Pr.y,Pr.x,0];return!Tc(n,ms,gs,vs,Va)||(n=[1,0,0,0,1,0,0,0,1],!Tc(n,ms,gs,vs,Va))?!1:(Ga.crossVectors(nr,ir),n=[Ga.x,Ga.y,Ga.z],Tc(n,ms,gs,vs,Va))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],Kn=new ee,Ha=new No,ms=new ee,gs=new ee,vs=new ee,nr=new ee,ir=new ee,Pr=new ee,Eo=new ee,Va=new ee,Ga=new ee,Lr=new ee;function Tc(o,e,n,r,a){for(let u=0,f=o.length-3;u<=f;u+=3){Lr.fromArray(o,u);const d=a.x*Math.abs(Lr.x)+a.y*Math.abs(Lr.y)+a.z*Math.abs(Lr.z),p=e.dot(Lr),m=n.dot(Lr),v=r.dot(Lr);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const V_=new No,To=new ee,wc=new ee;class El{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):V_.setFromPoints(e).getCenter(r);let a=0;for(let u=0,f=e.length;u<f;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const n=To.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(To,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(wc)),this.expandByPoint(To.copy(e.center).sub(wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new ee,Ac=new ee,Wa=new ee,rr=new ee,Rc=new ee,Xa=new ee,Cc=new ee;class Tm{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Ac.copy(e).add(n).multiplyScalar(.5),Wa.copy(n).sub(e).normalize(),rr.copy(this.origin).sub(Ac);const u=e.distanceTo(n)*.5,f=-this.direction.dot(Wa),d=rr.dot(this.direction),p=-rr.dot(Wa),m=rr.lengthSq(),v=Math.abs(1-f*f);let S,x,y,A;if(v>0)if(S=f*p-d,x=f*d-p,A=u*v,S>=0)if(x>=-A)if(x<=A){const T=1/v;S*=T,x*=T,y=S*(S+f*x+2*d)+x*(f*S+x+2*p)+m}else x=u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;else x=-u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;else x<=-A?(S=Math.max(0,-(-f*u+d)),x=S>0?-u:Math.min(Math.max(-u,-p),u),y=-S*S+x*(x+2*p)+m):x<=A?(S=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(S=Math.max(0,-(f*u+d)),x=S>0?u:Math.min(Math.max(-u,-p),u),y=-S*S+x*(x+2*p)+m);else x=f>0?-u:u,S=Math.max(0,-(f*x+d)),y=-S*S+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(Ac).addScaledVector(Wa,x),y}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const r=Mi.dot(this.direction),a=Mi.dot(Mi)-r*r,u=e.radius*e.radius;if(a>u)return null;const f=Math.sqrt(u-a),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),v>=0?(u=(e.min.y-x.y)*v,f=(e.max.y-x.y)*v):(u=(e.max.y-x.y)*v,f=(e.min.y-x.y)*v),r>f||u>a||((u>r||isNaN(r))&&(r=u),(f<a||isNaN(a))&&(a=f),S>=0?(d=(e.min.z-x.z)*S,p=(e.max.z-x.z)*S):(d=(e.max.z-x.z)*S,p=(e.min.z-x.z)*S),r>p||d>a)||((d>r||r!==r)&&(r=d),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,r,a,u){Rc.subVectors(n,e),Xa.subVectors(r,e),Cc.crossVectors(Rc,Xa);let f=this.direction.dot(Cc),d;if(f>0){if(a)return null;d=1}else if(f<0)d=-1,f=-f;else return null;rr.subVectors(this.origin,e);const p=d*this.direction.dot(Xa.crossVectors(rr,Xa));if(p<0)return null;const m=d*this.direction.dot(Rc.cross(rr));if(m<0||p+m>f)return null;const v=-d*rr.dot(Cc);return v<0?null:this.at(v/f,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,n,r,a,u,f,d,p,m,v,S,x,y,A,T,_){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,f,d,p,m,v,S,x,y,A,T,_)}set(e,n,r,a,u,f,d,p,m,v,S,x,y,A,T,_){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=f,g[9]=d,g[13]=p,g[2]=m,g[6]=v,g[10]=S,g[14]=x,g[3]=y,g[7]=A,g[11]=T,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/_s.setFromMatrixColumn(e,0).length(),u=1/_s.setFromMatrixColumn(e,1).length(),f=1/_s.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*f,n[9]=r[9]*f,n[10]=r[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(a),m=Math.sin(a),v=Math.cos(u),S=Math.sin(u);if(e.order==="XYZ"){const x=f*v,y=f*S,A=d*v,T=d*S;n[0]=p*v,n[4]=-p*S,n[8]=m,n[1]=y+A*m,n[5]=x-T*m,n[9]=-d*p,n[2]=T-x*m,n[6]=A+y*m,n[10]=f*p}else if(e.order==="YXZ"){const x=p*v,y=p*S,A=m*v,T=m*S;n[0]=x+T*d,n[4]=A*d-y,n[8]=f*m,n[1]=f*S,n[5]=f*v,n[9]=-d,n[2]=y*d-A,n[6]=T+x*d,n[10]=f*p}else if(e.order==="ZXY"){const x=p*v,y=p*S,A=m*v,T=m*S;n[0]=x-T*d,n[4]=-f*S,n[8]=A+y*d,n[1]=y+A*d,n[5]=f*v,n[9]=T-x*d,n[2]=-f*m,n[6]=d,n[10]=f*p}else if(e.order==="ZYX"){const x=f*v,y=f*S,A=d*v,T=d*S;n[0]=p*v,n[4]=A*m-y,n[8]=x*m+T,n[1]=p*S,n[5]=T*m+x,n[9]=y*m-A,n[2]=-m,n[6]=d*p,n[10]=f*p}else if(e.order==="YZX"){const x=f*p,y=f*m,A=d*p,T=d*m;n[0]=p*v,n[4]=T-x*S,n[8]=A*S+y,n[1]=S,n[5]=f*v,n[9]=-d*v,n[2]=-m*v,n[6]=y*S+A,n[10]=x-T*S}else if(e.order==="XZY"){const x=f*p,y=f*m,A=d*p,T=d*m;n[0]=p*v,n[4]=-S,n[8]=m*v,n[1]=x*S+T,n[5]=f*v,n[9]=y*S-A,n[2]=A*S-y,n[6]=d*v,n[10]=T*S+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G_,e,W_)}lookAt(e,n,r){const a=this.elements;return Un.subVectors(e,n),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),sr.crossVectors(r,Un),sr.lengthSq()===0&&(Math.abs(r.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),sr.crossVectors(r,Un)),sr.normalize(),Ya.crossVectors(Un,sr),a[0]=sr.x,a[4]=Ya.x,a[8]=Un.x,a[1]=sr.y,a[5]=Ya.y,a[9]=Un.y,a[2]=sr.z,a[6]=Ya.z,a[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],v=r[1],S=r[5],x=r[9],y=r[13],A=r[2],T=r[6],_=r[10],g=r[14],N=r[3],P=r[7],D=r[11],K=r[15],O=a[0],F=a[4],re=a[8],C=a[12],E=a[1],q=a[5],le=a[9],H=a[13],oe=a[2],ce=a[6],me=a[10],ge=a[14],k=a[3],se=a[7],$=a[11],I=a[15];return u[0]=f*O+d*E+p*oe+m*k,u[4]=f*F+d*q+p*ce+m*se,u[8]=f*re+d*le+p*me+m*$,u[12]=f*C+d*H+p*ge+m*I,u[1]=v*O+S*E+x*oe+y*k,u[5]=v*F+S*q+x*ce+y*se,u[9]=v*re+S*le+x*me+y*$,u[13]=v*C+S*H+x*ge+y*I,u[2]=A*O+T*E+_*oe+g*k,u[6]=A*F+T*q+_*ce+g*se,u[10]=A*re+T*le+_*me+g*$,u[14]=A*C+T*H+_*ge+g*I,u[3]=N*O+P*E+D*oe+K*k,u[7]=N*F+P*q+D*ce+K*se,u[11]=N*re+P*le+D*me+K*$,u[15]=N*C+P*H+D*ge+K*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],f=e[1],d=e[5],p=e[9],m=e[13],v=e[2],S=e[6],x=e[10],y=e[14],A=e[3],T=e[7],_=e[11],g=e[15];return A*(+u*p*S-a*m*S-u*d*x+r*m*x+a*d*y-r*p*y)+T*(+n*p*y-n*m*x+u*f*x-a*f*y+a*m*v-u*p*v)+_*(+n*m*S-n*d*y-u*f*S+r*f*y+u*d*v-r*m*v)+g*(-a*d*v-n*p*S+n*d*x+a*f*S-r*f*x+r*p*v)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],f=e[4],d=e[5],p=e[6],m=e[7],v=e[8],S=e[9],x=e[10],y=e[11],A=e[12],T=e[13],_=e[14],g=e[15],N=S*_*m-T*x*m+T*p*y-d*_*y-S*p*g+d*x*g,P=A*x*m-v*_*m-A*p*y+f*_*y+v*p*g-f*x*g,D=v*T*m-A*S*m+A*d*y-f*T*y-v*d*g+f*S*g,K=A*S*p-v*T*p-A*d*x+f*T*x+v*d*_-f*S*_,O=n*N+r*P+a*D+u*K;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/O;return e[0]=N*F,e[1]=(T*x*u-S*_*u-T*a*y+r*_*y+S*a*g-r*x*g)*F,e[2]=(d*_*u-T*p*u+T*a*m-r*_*m-d*a*g+r*p*g)*F,e[3]=(S*p*u-d*x*u-S*a*m+r*x*m+d*a*y-r*p*y)*F,e[4]=P*F,e[5]=(v*_*u-A*x*u+A*a*y-n*_*y-v*a*g+n*x*g)*F,e[6]=(A*p*u-f*_*u-A*a*m+n*_*m+f*a*g-n*p*g)*F,e[7]=(f*x*u-v*p*u+v*a*m-n*x*m-f*a*y+n*p*y)*F,e[8]=D*F,e[9]=(A*S*u-v*T*u-A*r*y+n*T*y+v*r*g-n*S*g)*F,e[10]=(f*T*u-A*d*u+A*r*m-n*T*m-f*r*g+n*d*g)*F,e[11]=(v*d*u-f*S*u-v*r*m+n*S*m+f*r*y-n*d*y)*F,e[12]=K*F,e[13]=(v*T*a-A*S*a+A*r*x-n*T*x-v*r*_+n*S*_)*F,e[14]=(A*d*a-f*T*a-A*r*p+n*T*p+f*r*_-n*d*_)*F,e[15]=(f*S*a-v*d*a+v*r*p-n*S*p-f*r*x+n*d*x)*F,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,f=e.x,d=e.y,p=e.z,m=u*f,v=u*d;return this.set(m*f+r,m*d-a*p,m*p+a*d,0,m*d+a*p,v*d+r,v*p-a*f,0,m*p-a*d,v*p+a*f,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,f){return this.set(1,r,u,0,e,1,f,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,f=n._y,d=n._z,p=n._w,m=u+u,v=f+f,S=d+d,x=u*m,y=u*v,A=u*S,T=f*v,_=f*S,g=d*S,N=p*m,P=p*v,D=p*S,K=r.x,O=r.y,F=r.z;return a[0]=(1-(T+g))*K,a[1]=(y+D)*K,a[2]=(A-P)*K,a[3]=0,a[4]=(y-D)*O,a[5]=(1-(x+g))*O,a[6]=(_+N)*O,a[7]=0,a[8]=(A+P)*F,a[9]=(_-N)*F,a[10]=(1-(x+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=_s.set(a[0],a[1],a[2]).length();const f=_s.set(a[4],a[5],a[6]).length(),d=_s.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],Zn.copy(this);const m=1/u,v=1/f,S=1/d;return Zn.elements[0]*=m,Zn.elements[1]*=m,Zn.elements[2]*=m,Zn.elements[4]*=v,Zn.elements[5]*=v,Zn.elements[6]*=v,Zn.elements[8]*=S,Zn.elements[9]*=S,Zn.elements[10]*=S,n.setFromRotationMatrix(Zn),r.x=u,r.y=f,r.z=d,this}makePerspective(e,n,r,a,u,f,d=Pi){const p=this.elements,m=2*u/(n-e),v=2*u/(r-a),S=(n+e)/(n-e),x=(r+a)/(r-a);let y,A;if(d===Pi)y=-(f+u)/(f-u),A=-2*f*u/(f-u);else if(d===gl)y=-f/(f-u),A=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,n,r,a,u,f,d=Pi){const p=this.elements,m=1/(n-e),v=1/(r-a),S=1/(f-u),x=(n+e)*m,y=(r+a)*v;let A,T;if(d===Pi)A=(f+u)*S,T=-2*S;else if(d===gl)A=u*S,T=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=T,p[14]=-A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const _s=new ee,Zn=new kt,G_=new ee(0,0,0),W_=new ee(1,1,1),sr=new ee,Ya=new ee,Un=new ee,yp=new kt,Mp=new Uo;class bi{constructor(e=0,n=0,r=0,a=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],f=a[4],d=a[8],p=a[1],m=a[5],v=a[9],S=a[2],x=a[6],y=a[10];switch(n){case"XYZ":this._y=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,u),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Tn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-S,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Mp.setFromEuler(this),this.setFromQuaternion(Mp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class wm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X_=0;const Ep=new ee,xs=new Uo,Ei=new kt,qa=new ee,wo=new ee,Y_=new ee,q_=new Uo,Tp=new ee(1,0,0),wp=new ee(0,1,0),Ap=new ee(0,0,1),Rp={type:"added"},j_={type:"removed"},Ss={type:"childadded",child:null},Pc={type:"childremoved",child:null};class Rn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=Do(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new ee,n=new bi,r=new Uo,a=new ee(1,1,1);function u(){r.setFromEuler(n,!1)}function f(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new kt},normalMatrix:{value:new at}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,n){return xs.setFromAxisAngle(e,n),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Tp,e)}rotateY(e){return this.rotateOnAxis(wp,e)}rotateZ(e){return this.rotateOnAxis(Ap,e)}translateOnAxis(e,n){return Ep.copy(e).applyQuaternion(this.quaternion),this.position.add(Ep.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Tp,e)}translateY(e){return this.translateOnAxis(wp,e)}translateZ(e){return this.translateOnAxis(Ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?qa.copy(e):qa.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(wo,qa,this.up):Ei.lookAt(qa,wo,this.up),this.quaternion.setFromRotationMatrix(Ei),a&&(Ei.extractRotation(a.matrixWorld),xs.setFromRotationMatrix(Ei),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rp),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(j_),Pc.child=e,this.dispatchEvent(Pc),Pc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rp),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const f=this.children[r].getObjectByProperty(e,n);if(f!==void 0)return f}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,f=a.length;u<f;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,Y_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,q_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++){const u=n[r];(u.matrixWorldAutoUpdate===!0||e===!0)&&u.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const a=this.children;for(let u=0,f=a.length;u<f;u++){const d=a[u];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxGeometryCount=this._maxGeometryCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const S=p[m];u(e.shapes,S)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));a.material=d}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];a.animations.push(u(e.animations,p))}}if(n){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),v=f(e.images),S=f(e.shapes),x=f(e.skeletons),y=f(e.animations),A=f(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=a,r;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Rn.DEFAULT_UP=new ee(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new ee,Ti=new ee,Lc=new ee,wi=new ee,ys=new ee,Ms=new ee,Cp=new ee,bc=new ee,Dc=new ee,Uc=new ee;class ci{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),Qn.subVectors(e,n),a.cross(Qn);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){Qn.subVectors(a,n),Ti.subVectors(r,n),Lc.subVectors(e,n);const f=Qn.dot(Qn),d=Qn.dot(Ti),p=Qn.dot(Lc),m=Ti.dot(Ti),v=Ti.dot(Lc),S=f*m-d*d;if(S===0)return u.set(0,0,0),null;const x=1/S,y=(m*p-d*v)*x,A=(f*v-d*p)*x;return u.set(1-y-A,A,y)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,n,r,a,u,f,d,p){return this.getBarycoord(e,n,r,a,wi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,wi.x),p.addScaledVector(f,wi.y),p.addScaledVector(d,wi.z),p)}static isFrontFacing(e,n,r,a){return Qn.subVectors(r,n),Ti.subVectors(e,n),Qn.cross(Ti).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Qn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return ci.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let f,d;ys.subVectors(a,r),Ms.subVectors(u,r),bc.subVectors(e,r);const p=ys.dot(bc),m=Ms.dot(bc);if(p<=0&&m<=0)return n.copy(r);Dc.subVectors(e,a);const v=ys.dot(Dc),S=Ms.dot(Dc);if(v>=0&&S<=v)return n.copy(a);const x=p*S-v*m;if(x<=0&&p>=0&&v<=0)return f=p/(p-v),n.copy(r).addScaledVector(ys,f);Uc.subVectors(e,u);const y=ys.dot(Uc),A=Ms.dot(Uc);if(A>=0&&y<=A)return n.copy(u);const T=y*m-p*A;if(T<=0&&m>=0&&A<=0)return d=m/(m-A),n.copy(r).addScaledVector(Ms,d);const _=v*A-y*S;if(_<=0&&S-v>=0&&y-A>=0)return Cp.subVectors(u,a),d=(S-v)/(S-v+(y-A)),n.copy(a).addScaledVector(Cp,d);const g=1/(_+T+x);return f=T*g,d=x*g,n.copy(r).addScaledVector(ys,f).addScaledVector(Ms,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Am={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},ja={h:0,s:0,l:0};function Nc(o,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(e-o)*6*n:n<1/2?e:n<2/3?o+(e-o)*6*(2/3-n):o}class xt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Mt.workingColorSpace){if(e=U_(e,1),n=Tn(n,0,1),r=Tn(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,f=2*r-u;this.r=Nc(f,u,e+1/3),this.g=Nc(f,u,e),this.b=Nc(f,u,e-1/3)}return Mt.toWorkingColorSpace(this,a),this}setStyle(e,n=li){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const f=a[1],d=a[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=li){const r=Am[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}copyLinearToSRGB(e){return this.r=yc(e.r),this.g=yc(e.g),this.b=yc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return Mt.fromWorkingColorSpace(cn.copy(this),e),Math.round(Tn(cn.r*255,0,255))*65536+Math.round(Tn(cn.g*255,0,255))*256+Math.round(Tn(cn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(cn.copy(this),n);const r=cn.r,a=cn.g,u=cn.b,f=Math.max(r,a,u),d=Math.min(r,a,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const S=f-d;switch(m=v<=.5?S/(f+d):S/(2-f-d),f){case r:p=(a-u)/S+(a<u?6:0);break;case a:p=(u-r)/S+2;break;case u:p=(r-a)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=li){Mt.fromWorkingColorSpace(cn.copy(this),e);const n=cn.r,r=cn.g,a=cn.b;return e!==li?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(or),this.setHSL(or.h+e,or.s+n,or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(or),e.getHSL(ja);const r=xc(or.h,ja.h,n),a=xc(or.s,ja.s,n),u=xc(or.l,ja.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new xt;xt.NAMES=Am;let $_=0;class Io extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=Do(),this.name="",this.type="Material",this.blending=bs,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=$c,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=dl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(r.blending=this.blending),this.side!==fr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==jc&&(r.blendSrc=this.blendSrc),this.blendDst!==$c&&(r.blendDst=this.blendDst),this.blendEquation!==Or&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==dl&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==pp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(n){const u=a(e.textures),f=a(e.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rm extends Io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=fm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const zt=new ee,$a=new Je;class ni{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=mp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return I_("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)$a.fromBufferAttribute(this,n),$a.applyMatrix3(e),this.setXY(n,$a.x,$a.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Mo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=En(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Mo(n,this.array)),n}setX(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Mo(n,this.array)),n}setY(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Mo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Mo(n,this.array)),n}setW(e,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),a=En(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=En(n,this.array),r=En(r,this.array),a=En(a,this.array),u=En(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mp&&(e.usage=this.usage),e}}class Cm extends ni{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Pm extends ni{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Li extends ni{constructor(e,n,r){super(new Float32Array(e),n,r)}}let K_=0;const Hn=new kt,Ic=new Rn,Es=new ee,Nn=new No,Ao=new No,Qt=new ee;class Ui extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Do(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ym(e)?Pm:Cm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new at().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,n,r){return Hn.makeTranslation(e,n,r),this.applyMatrix4(Hn),this}scale(e,n,r){return Hn.makeScale(e,n,r),this.applyMatrix4(Hn),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const n=[];for(let r=0,a=e.length;r<a;r++){const u=e[r];n.push(u.x,u.y,u.z||0)}return this.setAttribute("position",new Li(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Nn.setFromBufferAttribute(u),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new El);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),n)for(let u=0,f=n.length;u<f;u++){const d=n[u];Ao.setFromBufferAttribute(d),this.morphTargetsRelative?(Qt.addVectors(Nn.min,Ao.min),Nn.expandByPoint(Qt),Qt.addVectors(Nn.max,Ao.max),Nn.expandByPoint(Qt)):(Nn.expandByPoint(Ao.min),Nn.expandByPoint(Ao.max))}Nn.getCenter(r);let a=0;for(let u=0,f=e.count;u<f;u++)Qt.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(Qt));if(n)for(let u=0,f=n.length;u<f;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Qt.fromBufferAttribute(d,m),p&&(Es.fromBufferAttribute(e,m),Qt.add(Es)),a=Math.max(a,r.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let re=0;re<r.count;re++)d[re]=new ee,p[re]=new ee;const m=new ee,v=new ee,S=new ee,x=new Je,y=new Je,A=new Je,T=new ee,_=new ee;function g(re,C,E){m.fromBufferAttribute(r,re),v.fromBufferAttribute(r,C),S.fromBufferAttribute(r,E),x.fromBufferAttribute(u,re),y.fromBufferAttribute(u,C),A.fromBufferAttribute(u,E),v.sub(m),S.sub(m),y.sub(x),A.sub(x);const q=1/(y.x*A.y-A.x*y.y);isFinite(q)&&(T.copy(v).multiplyScalar(A.y).addScaledVector(S,-y.y).multiplyScalar(q),_.copy(S).multiplyScalar(y.x).addScaledVector(v,-A.x).multiplyScalar(q),d[re].add(T),d[C].add(T),d[E].add(T),p[re].add(_),p[C].add(_),p[E].add(_))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let re=0,C=N.length;re<C;++re){const E=N[re],q=E.start,le=E.count;for(let H=q,oe=q+le;H<oe;H+=3)g(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const P=new ee,D=new ee,K=new ee,O=new ee;function F(re){K.fromBufferAttribute(a,re),O.copy(K);const C=d[re];P.copy(C),P.sub(K.multiplyScalar(K.dot(C))).normalize(),D.crossVectors(O,C);const q=D.dot(p[re])<0?-1:1;f.setXYZW(re,P.x,P.y,P.z,q)}for(let re=0,C=N.length;re<C;++re){const E=N[re],q=E.start,le=E.count;for(let H=q,oe=q+le;H<oe;H+=3)F(e.getX(H+0)),F(e.getX(H+1)),F(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const a=new ee,u=new ee,f=new ee,d=new ee,p=new ee,m=new ee,v=new ee,S=new ee;if(e)for(let x=0,y=e.count;x<y;x+=3){const A=e.getX(x+0),T=e.getX(x+1),_=e.getX(x+2);a.fromBufferAttribute(n,A),u.fromBufferAttribute(n,T),f.fromBufferAttribute(n,_),v.subVectors(f,u),S.subVectors(a,u),v.cross(S),d.fromBufferAttribute(r,A),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,_),d.add(v),p.add(v),m.add(v),r.setXYZ(A,d.x,d.y,d.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(_,m.x,m.y,m.z)}else for(let x=0,y=n.count;x<y;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),f.fromBufferAttribute(n,x+2),v.subVectors(f,u),S.subVectors(a,u),v.cross(S),r.setXYZ(x+0,v.x,v.y,v.z),r.setXYZ(x+1,v.x,v.y,v.z),r.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)Qt.fromBufferAttribute(e,n),Qt.normalize(),e.setXYZ(n,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,S=d.normalized,x=new m.constructor(p.length*v);let y=0,A=0;for(let T=0,_=p.length;T<_;T++){d.isInterleavedBufferAttribute?y=p[T]*d.data.stride+d.offset:y=p[T]*v;for(let g=0;g<v;g++)x[A++]=m[y++]}return new ni(x,v,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ui,r=this.index.array,a=this.attributes;for(const d in a){const p=a[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,S=m.length;v<S;v++){const x=m[v],y=e(x,r);p.push(y)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const a={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let S=0,x=m.length;S<x;S++){const y=m[S];v.push(y.toJSON(e.data))}v.length>0&&(a[p]=v,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const v=a[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],S=u[m];for(let x=0,y=S.length;x<y;x++)v.push(S[x].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,v=f.length;m<v;m++){const S=f[m];this.addGroup(S.start,S.count,S.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pp=new kt,br=new Tm,Ka=new El,Lp=new ee,Ts=new ee,ws=new ee,As=new ee,Fc=new ee,Za=new ee,Qa=new Je,Ja=new Je,el=new Je,bp=new ee,Dp=new ee,Up=new ee,tl=new ee,nl=new ee;class Vn extends Rn{constructor(e=new Ui,n=new Rm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(u&&d){Za.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],S=u[p];v!==0&&(Fc.fromBufferAttribute(S,e),f?Za.addScaledVector(Fc,v):Za.addScaledVector(Fc.sub(n),v))}n.add(Za)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ka.copy(r.boundingSphere),Ka.applyMatrix4(u),br.copy(e.ray).recast(e.near),!(Ka.containsPoint(br.origin)===!1&&(br.intersectSphere(Ka,Lp)===null||br.origin.distanceToSquared(Lp)>(e.far-e.near)**2))&&(Pp.copy(u).invert(),br.copy(e.ray).applyMatrix4(Pp),!(r.boundingBox!==null&&br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,br)))}_computeIntersections(e,n,r){let a;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,S=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let A=0,T=x.length;A<T;A++){const _=x[A],g=f[_.materialIndex],N=Math.max(_.start,y.start),P=Math.min(d.count,Math.min(_.start+_.count,y.start+y.count));for(let D=N,K=P;D<K;D+=3){const O=d.getX(D),F=d.getX(D+1),re=d.getX(D+2);a=il(this,g,e,r,m,v,S,O,F,re),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const A=Math.max(0,y.start),T=Math.min(d.count,y.start+y.count);for(let _=A,g=T;_<g;_+=3){const N=d.getX(_),P=d.getX(_+1),D=d.getX(_+2);a=il(this,f,e,r,m,v,S,N,P,D),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}else if(p!==void 0)if(Array.isArray(f))for(let A=0,T=x.length;A<T;A++){const _=x[A],g=f[_.materialIndex],N=Math.max(_.start,y.start),P=Math.min(p.count,Math.min(_.start+_.count,y.start+y.count));for(let D=N,K=P;D<K;D+=3){const O=D,F=D+1,re=D+2;a=il(this,g,e,r,m,v,S,O,F,re),a&&(a.faceIndex=Math.floor(D/3),a.face.materialIndex=_.materialIndex,n.push(a))}}else{const A=Math.max(0,y.start),T=Math.min(p.count,y.start+y.count);for(let _=A,g=T;_<g;_+=3){const N=_,P=_+1,D=_+2;a=il(this,f,e,r,m,v,S,N,P,D),a&&(a.faceIndex=Math.floor(_/3),n.push(a))}}}}function Z_(o,e,n,r,a,u,f,d){let p;if(e.side===An?p=r.intersectTriangle(f,u,a,!0,d):p=r.intersectTriangle(a,u,f,e.side===fr,d),p===null)return null;nl.copy(d),nl.applyMatrix4(o.matrixWorld);const m=n.ray.origin.distanceTo(nl);return m<n.near||m>n.far?null:{distance:m,point:nl.clone(),object:o}}function il(o,e,n,r,a,u,f,d,p,m){o.getVertexPosition(d,Ts),o.getVertexPosition(p,ws),o.getVertexPosition(m,As);const v=Z_(o,e,n,r,Ts,ws,As,tl);if(v){a&&(Qa.fromBufferAttribute(a,d),Ja.fromBufferAttribute(a,p),el.fromBufferAttribute(a,m),v.uv=ci.getInterpolation(tl,Ts,ws,As,Qa,Ja,el,new Je)),u&&(Qa.fromBufferAttribute(u,d),Ja.fromBufferAttribute(u,p),el.fromBufferAttribute(u,m),v.uv1=ci.getInterpolation(tl,Ts,ws,As,Qa,Ja,el,new Je)),f&&(bp.fromBufferAttribute(f,d),Dp.fromBufferAttribute(f,p),Up.fromBufferAttribute(f,m),v.normal=ci.getInterpolation(tl,Ts,ws,As,bp,Dp,Up,new ee),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new ee,materialIndex:0};ci.getNormal(Ts,ws,As,S.normal),v.face=S}return v}class Fo extends Ui{constructor(e=1,n=1,r=1,a=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:f};const d=this;a=Math.floor(a),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],S=[];let x=0,y=0;A("z","y","x",-1,-1,r,n,e,f,u,0),A("z","y","x",1,-1,r,n,-e,f,u,1),A("x","z","y",1,1,e,r,n,a,f,2),A("x","z","y",1,-1,e,r,-n,a,f,3),A("x","y","z",1,-1,e,n,r,a,u,4),A("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(p),this.setAttribute("position",new Li(m,3)),this.setAttribute("normal",new Li(v,3)),this.setAttribute("uv",new Li(S,2));function A(T,_,g,N,P,D,K,O,F,re,C){const E=D/F,q=K/re,le=D/2,H=K/2,oe=O/2,ce=F+1,me=re+1;let ge=0,k=0;const se=new ee;for(let $=0;$<me;$++){const I=$*q-H;for(let te=0;te<ce;te++){const De=te*E-le;se[T]=De*N,se[_]=I*P,se[g]=oe,m.push(se.x,se.y,se.z),se[T]=0,se[_]=0,se[g]=O>0?1:-1,v.push(se.x,se.y,se.z),S.push(te/F),S.push(1-$/re),ge+=1}}for(let $=0;$<re;$++)for(let I=0;I<F;I++){const te=x+I+ce*$,De=x+I+ce*($+1),Y=x+(I+1)+ce*($+1),he=x+(I+1)+ce*$;p.push(te,De,he),p.push(De,Y,he),k+=6}d.addGroup(y,k,C),y+=k,x+=ge}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(o){const e={};for(const n in o){e[n]={};for(const r in o[n]){const a=o[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function hn(o){const e={};for(let n=0;n<o.length;n++){const r=Os(o[n]);for(const a in r)e[a]=r[a]}return e}function Q_(o){const e=[];for(let n=0;n<o.length;n++)e.push(o[n].clone());return e}function Lm(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const J_={clone:Os,merge:hn};var e0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,t0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=e0,this.fragmentShader=t0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=Q_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const f=this.uniforms[a].value;f&&f.isTexture?n.uniforms[a]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?n.uniforms[a]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[a]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[a]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[a]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[a]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[a]={type:"m4",value:f.toArray()}:n.uniforms[a]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class _l extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new ee,Np=new Je,Ip=new Je;class Jn extends _l{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ef*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ef*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,n){return this.getViewBounds(e,Np,Ip),n.subVectors(Ip,Np)}setViewOffset(e,n,r,a,u,f){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_c*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*a/p,n-=f.offsetY*r/m,a*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Rs=-90,Cs=1;class n0 extends Rn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Jn(Rs,Cs,e,n);a.layers=this.layers,this.add(a);const u=new Jn(Rs,Cs,e,n);u.layers=this.layers,this.add(u);const f=new Jn(Rs,Cs,e,n);f.layers=this.layers,this.add(f);const d=new Jn(Rs,Cs,e,n);d.layers=this.layers,this.add(d);const p=new Jn(Rs,Cs,e,n);p.layers=this.layers,this.add(p);const m=new Jn(Rs,Cs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,f,d,p]=n;for(const m of n)this.remove(m);if(e===Pi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===gl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,f),e.setRenderTarget(r,2,a),e.render(n,d),e.setRenderTarget(r,3,a),e.render(n,p),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),e.render(n,v),e.setRenderTarget(S,x,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class bm extends mn{constructor(e,n,r,a,u,f,d,p,m,v){e=e!==void 0?e:[],n=n!==void 0?n:Ns,super(e,n,r,a,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class i0 extends hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new bm(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Fo(5,5,5),u=new Di({name:"CubemapFromEquirect",uniforms:Os(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:An,blending:ur});u.uniforms.tEquirect.value=n;const f=new Vn(a,u),d=n.minFilter;return n.minFilter===kr&&(n.minFilter=pn),new n0(1,10,this).update(e,f),n.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(n,r,a);e.setRenderTarget(u)}}const Oc=new ee,r0=new ee,s0=new at;class Ir{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Oc.subVectors(r,n).cross(r0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Oc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||s0.getNormalMatrix(e),a=this.coplanarPoint(Oc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Dr=new El,rl=new ee;class Dm{constructor(e=new Ir,n=new Ir,r=new Ir,a=new Ir,u=new Ir,f=new Ir){this.planes=[e,n,r,a,u,f]}set(e,n,r,a,u,f){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(a),d[4].copy(u),d[5].copy(f),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Pi){const r=this.planes,a=e.elements,u=a[0],f=a[1],d=a[2],p=a[3],m=a[4],v=a[5],S=a[6],x=a[7],y=a[8],A=a[9],T=a[10],_=a[11],g=a[12],N=a[13],P=a[14],D=a[15];if(r[0].setComponents(p-u,x-m,_-y,D-g).normalize(),r[1].setComponents(p+u,x+m,_+y,D+g).normalize(),r[2].setComponents(p+f,x+v,_+A,D+N).normalize(),r[3].setComponents(p-f,x-v,_-A,D-N).normalize(),r[4].setComponents(p-d,x-S,_-T,D-P).normalize(),n===Pi)r[5].setComponents(p+d,x+S,_+T,D+P).normalize();else if(n===gl)r[5].setComponents(d,S,T,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(e){return Dr.center.set(0,0,0),Dr.radius=.7071067811865476,Dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(rl.x=a.normal.x>0?e.max.x:e.min.x,rl.y=a.normal.y>0?e.max.y:e.min.y,rl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(rl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Um(){let o=null,e=!1,n=null,r=null;function a(u,f){n(u,f),r=o.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=o.requestAnimationFrame(a),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function o0(o){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,S=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,v),d.onUploadCallback();let y;if(m instanceof Float32Array)y=o.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=o.SHORT;else if(m instanceof Uint32Array)y=o.UNSIGNED_INT;else if(m instanceof Int32Array)y=o.INT;else if(m instanceof Int8Array)y=o.BYTE;else if(m instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:S}}function r(d,p,m){const v=p.array,S=p._updateRange,x=p.updateRanges;if(o.bindBuffer(m,d),S.count===-1&&x.length===0&&o.bufferSubData(m,0,v),x.length!==0){for(let y=0,A=x.length;y<A;y++){const T=x[y];o.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}S.count!==-1&&(o.bufferSubData(m,S.offset*v.BYTES_PER_ELEMENT,v,S.offset,S.count),S.count=-1),p.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:a,remove:u,update:f}}class Br extends Ui{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,f=n/2,d=Math.floor(r),p=Math.floor(a),m=d+1,v=p+1,S=e/d,x=n/p,y=[],A=[],T=[],_=[];for(let g=0;g<v;g++){const N=g*x-f;for(let P=0;P<m;P++){const D=P*S-u;A.push(D,-N,0),T.push(0,0,1),_.push(P/d),_.push(1-g/p)}}for(let g=0;g<p;g++)for(let N=0;N<d;N++){const P=N+m*g,D=N+m*(g+1),K=N+1+m*(g+1),O=N+1+m*g;y.push(P,D,O),y.push(D,K,O)}this.setIndex(y),this.setAttribute("position",new Li(A,3)),this.setAttribute("normal",new Li(T,3)),this.setAttribute("uv",new Li(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}var a0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,h0=`#ifdef USE_AOMAP
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
#endif`,p0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,m0=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,g0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,x0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S0=`#ifdef USE_IRIDESCENCE
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
#endif`,y0=`#ifdef USE_BUMPMAP
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
#endif`,M0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,C0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,L0=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,D0=`vec3 transformedNormal = objectNormal;
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
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,I0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,O0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`
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
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,k0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,H0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,W0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Y0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,q0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j0=`#ifdef USE_GRADIENTMAP
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
}`,$0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Q0=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,J0=`#ifdef USE_ENVMAP
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
#endif`,ex=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ix=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rx=`PhysicalMaterial material;
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
#endif`,sx=`struct PhysicalMaterial {
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
}`,ox=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,lx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ux=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,px=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gx=`#if defined( USE_POINTS_UV )
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
#endif`,vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_x=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sx=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Px=`#ifdef USE_NORMALMAP
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
#endif`,Lx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ux=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ix=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Fx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ox=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,Gx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qx=`#ifdef USE_SKINNING
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
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jx=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,eS=`#ifdef USE_TRANSMISSION
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
#endif`,tS=`#ifdef USE_TRANSMISSION
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
#endif`,nS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aS=`uniform sampler2D t2D;
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
}`,lS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dS=`#include <common>
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
}`,hS=`#if DEPTH_PACKING == 3200
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
	#endif
}`,pS=`#define DISTANCE
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
}`,mS=`#define DISTANCE
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
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_S=`uniform float scale;
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
}`,xS=`uniform vec3 diffuse;
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
}`,SS=`#include <common>
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
}`,yS=`uniform vec3 diffuse;
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
}`,MS=`#define LAMBERT
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
}`,ES=`#define LAMBERT
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
}`,TS=`#define MATCAP
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
}`,wS=`#define MATCAP
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
}`,AS=`#define NORMAL
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
}`,RS=`#define NORMAL
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
}`,CS=`#define PHONG
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
}`,PS=`#define PHONG
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
}`,LS=`#define STANDARD
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
}`,bS=`#define STANDARD
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
}`,DS=`#define TOON
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
}`,US=`#define TOON
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
}`,NS=`uniform float size;
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
}`,IS=`uniform vec3 diffuse;
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
}`,FS=`#include <common>
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
}`,OS=`uniform vec3 color;
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
}`,zS=`uniform float rotation;
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
}`,kS=`uniform vec3 diffuse;
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
}`,ot={alphahash_fragment:a0,alphahash_pars_fragment:l0,alphamap_fragment:u0,alphamap_pars_fragment:c0,alphatest_fragment:f0,alphatest_pars_fragment:d0,aomap_fragment:h0,aomap_pars_fragment:p0,batching_pars_vertex:m0,batching_vertex:g0,begin_vertex:v0,beginnormal_vertex:_0,bsdfs:x0,iridescence_fragment:S0,bumpmap_pars_fragment:y0,clipping_planes_fragment:M0,clipping_planes_pars_fragment:E0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:w0,color_fragment:A0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:P0,common:L0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:D0,displacementmap_pars_vertex:U0,displacementmap_vertex:N0,emissivemap_fragment:I0,emissivemap_pars_fragment:F0,colorspace_fragment:O0,colorspace_pars_fragment:z0,envmap_fragment:k0,envmap_common_pars_fragment:B0,envmap_pars_fragment:H0,envmap_pars_vertex:V0,envmap_physical_pars_fragment:J0,envmap_vertex:G0,fog_vertex:W0,fog_pars_vertex:X0,fog_fragment:Y0,fog_pars_fragment:q0,gradientmap_pars_fragment:j0,lightmap_pars_fragment:$0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:Z0,lights_pars_begin:Q0,lights_toon_fragment:ex,lights_toon_pars_fragment:tx,lights_phong_fragment:nx,lights_phong_pars_fragment:ix,lights_physical_fragment:rx,lights_physical_pars_fragment:sx,lights_fragment_begin:ox,lights_fragment_maps:ax,lights_fragment_end:lx,logdepthbuf_fragment:ux,logdepthbuf_pars_fragment:cx,logdepthbuf_pars_vertex:fx,logdepthbuf_vertex:dx,map_fragment:hx,map_pars_fragment:px,map_particle_fragment:mx,map_particle_pars_fragment:gx,metalnessmap_fragment:vx,metalnessmap_pars_fragment:_x,morphinstance_vertex:xx,morphcolor_vertex:Sx,morphnormal_vertex:yx,morphtarget_pars_vertex:Mx,morphtarget_vertex:Ex,normal_fragment_begin:Tx,normal_fragment_maps:wx,normal_pars_fragment:Ax,normal_pars_vertex:Rx,normal_vertex:Cx,normalmap_pars_fragment:Px,clearcoat_normal_fragment_begin:Lx,clearcoat_normal_fragment_maps:bx,clearcoat_pars_fragment:Dx,iridescence_pars_fragment:Ux,opaque_fragment:Nx,packing:Ix,premultiplied_alpha_fragment:Fx,project_vertex:Ox,dithering_fragment:zx,dithering_pars_fragment:kx,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:Hx,shadowmap_pars_fragment:Vx,shadowmap_pars_vertex:Gx,shadowmap_vertex:Wx,shadowmask_pars_fragment:Xx,skinbase_vertex:Yx,skinning_pars_vertex:qx,skinning_vertex:jx,skinnormal_vertex:$x,specularmap_fragment:Kx,specularmap_pars_fragment:Zx,tonemapping_fragment:Qx,tonemapping_pars_fragment:Jx,transmission_fragment:eS,transmission_pars_fragment:tS,uv_pars_fragment:nS,uv_pars_vertex:iS,uv_vertex:rS,worldpos_vertex:sS,background_vert:oS,background_frag:aS,backgroundCube_vert:lS,backgroundCube_frag:uS,cube_vert:cS,cube_frag:fS,depth_vert:dS,depth_frag:hS,distanceRGBA_vert:pS,distanceRGBA_frag:mS,equirect_vert:gS,equirect_frag:vS,linedashed_vert:_S,linedashed_frag:xS,meshbasic_vert:SS,meshbasic_frag:yS,meshlambert_vert:MS,meshlambert_frag:ES,meshmatcap_vert:TS,meshmatcap_frag:wS,meshnormal_vert:AS,meshnormal_frag:RS,meshphong_vert:CS,meshphong_frag:PS,meshphysical_vert:LS,meshphysical_frag:bS,meshtoon_vert:DS,meshtoon_frag:US,points_vert:NS,points_frag:IS,shadow_vert:FS,shadow_frag:OS,sprite_vert:zS,sprite_frag:kS},Ce={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new at}},envmap:{envMap:{value:null},envMapRotation:{value:new at},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new at}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new at}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new at},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new at},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new at},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new at}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new at}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new at}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0},uvTransform:{value:new at}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new at},alphaMap:{value:null},alphaMapTransform:{value:new at},alphaTest:{value:0}}},ui={basic:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new xt(0)}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:hn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:hn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:hn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new xt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:hn([Ce.points,Ce.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:hn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:hn([Ce.common,Ce.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:hn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:hn([Ce.sprite,Ce.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new at},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new at}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distanceRGBA:{uniforms:hn([Ce.common,Ce.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distanceRGBA_vert,fragmentShader:ot.distanceRGBA_frag},shadow:{uniforms:hn([Ce.lights,Ce.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};ui.physical={uniforms:hn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new at},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new at},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new at},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new at},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new at},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new at},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new at},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new at},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new at},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new at},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new at},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new at}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};const sl={r:0,b:0,g:0},Ur=new bi,BS=new kt;function HS(o,e,n,r,a,u,f){const d=new xt(0);let p=u===!0?0:1,m,v,S=null,x=0,y=null;function A(N){let P=N.isScene===!0?N.background:null;return P&&P.isTexture&&(P=(N.backgroundBlurriness>0?n:e).get(P)),P}function T(N){let P=!1;const D=A(N);D===null?g(d,p):D&&D.isColor&&(g(D,1),P=!0);const K=o.xr.getEnvironmentBlendMode();K==="additive"?r.buffers.color.setClear(0,0,0,1,f):K==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(o.autoClear||P)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil)}function _(N,P){const D=A(P);D&&(D.isCubeTexture||D.mapping===yl)?(v===void 0&&(v=new Vn(new Fo(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:Os(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(K,O,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Ur.copy(P.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),v.material.uniforms.envMap.value=D,v.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(BS.makeRotationFromEuler(Ur)),v.material.toneMapped=Mt.getTransfer(D.colorSpace)!==Pt,(S!==D||x!==D.version||y!==o.toneMapping)&&(v.material.needsUpdate=!0,S=D,x=D.version,y=o.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):D&&D.isTexture&&(m===void 0&&(m=new Vn(new Br(2,2),new Di({name:"BackgroundMaterial",uniforms:Os(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=D,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Mt.getTransfer(D.colorSpace)!==Pt,D.matrixAutoUpdate===!0&&D.updateMatrix(),m.material.uniforms.uvTransform.value.copy(D.matrix),(S!==D||x!==D.version||y!==o.toneMapping)&&(m.material.needsUpdate=!0,S=D,x=D.version,y=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function g(N,P){N.getRGB(sl,Lm(o)),r.buffers.color.setClear(sl.r,sl.g,sl.b,P,f)}return{getClearColor:function(){return d},setClearColor:function(N,P=1){d.set(N),p=P,g(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,g(d,p)},render:T,addToRenderList:_}}function VS(o,e){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,f=!1;function d(E,q,le,H,oe){let ce=!1;const me=S(H,le,q);u!==me&&(u=me,m(u.object)),ce=y(E,H,le,oe),ce&&A(E,H,le,oe),oe!==null&&e.update(oe,o.ELEMENT_ARRAY_BUFFER),(ce||f)&&(f=!1,D(E,q,le,H),oe!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function p(){return o.createVertexArray()}function m(E){return o.bindVertexArray(E)}function v(E){return o.deleteVertexArray(E)}function S(E,q,le){const H=le.wireframe===!0;let oe=r[E.id];oe===void 0&&(oe={},r[E.id]=oe);let ce=oe[q.id];ce===void 0&&(ce={},oe[q.id]=ce);let me=ce[H];return me===void 0&&(me=x(p()),ce[H]=me),me}function x(E){const q=[],le=[],H=[];for(let oe=0;oe<n;oe++)q[oe]=0,le[oe]=0,H[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:le,attributeDivisors:H,object:E,attributes:{},index:null}}function y(E,q,le,H){const oe=u.attributes,ce=q.attributes;let me=0;const ge=le.getAttributes();for(const k in ge)if(ge[k].location>=0){const $=oe[k];let I=ce[k];if(I===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(I=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(I=E.instanceColor)),$===void 0||$.attribute!==I||I&&$.data!==I.data)return!0;me++}return u.attributesNum!==me||u.index!==H}function A(E,q,le,H){const oe={},ce=q.attributes;let me=0;const ge=le.getAttributes();for(const k in ge)if(ge[k].location>=0){let $=ce[k];$===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&($=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&($=E.instanceColor));const I={};I.attribute=$,$&&$.data&&(I.data=$.data),oe[k]=I,me++}u.attributes=oe,u.attributesNum=me,u.index=H}function T(){const E=u.newAttributes;for(let q=0,le=E.length;q<le;q++)E[q]=0}function _(E){g(E,0)}function g(E,q){const le=u.newAttributes,H=u.enabledAttributes,oe=u.attributeDivisors;le[E]=1,H[E]===0&&(o.enableVertexAttribArray(E),H[E]=1),oe[E]!==q&&(o.vertexAttribDivisor(E,q),oe[E]=q)}function N(){const E=u.newAttributes,q=u.enabledAttributes;for(let le=0,H=q.length;le<H;le++)q[le]!==E[le]&&(o.disableVertexAttribArray(le),q[le]=0)}function P(E,q,le,H,oe,ce,me){me===!0?o.vertexAttribIPointer(E,q,le,oe,ce):o.vertexAttribPointer(E,q,le,H,oe,ce)}function D(E,q,le,H){T();const oe=H.attributes,ce=le.getAttributes(),me=q.defaultAttributeValues;for(const ge in ce){const k=ce[ge];if(k.location>=0){let se=oe[ge];if(se===void 0&&(ge==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),ge==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),se!==void 0){const $=se.normalized,I=se.itemSize,te=e.get(se);if(te===void 0)continue;const De=te.buffer,Y=te.type,he=te.bytesPerElement,Ee=Y===o.INT||Y===o.UNSIGNED_INT||se.gpuType===pm;if(se.isInterleavedBufferAttribute){const Se=se.data,Le=Se.stride,Oe=se.offset;if(Se.isInstancedInterleavedBuffer){for(let G=0;G<k.locationSize;G++)g(k.location+G,Se.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let G=0;G<k.locationSize;G++)_(k.location+G);o.bindBuffer(o.ARRAY_BUFFER,De);for(let G=0;G<k.locationSize;G++)P(k.location+G,I/k.locationSize,Y,$,Le*he,(Oe+I/k.locationSize*G)*he,Ee)}else{if(se.isInstancedBufferAttribute){for(let Se=0;Se<k.locationSize;Se++)g(k.location+Se,se.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Se=0;Se<k.locationSize;Se++)_(k.location+Se);o.bindBuffer(o.ARRAY_BUFFER,De);for(let Se=0;Se<k.locationSize;Se++)P(k.location+Se,I/k.locationSize,Y,$,I*he,I/k.locationSize*Se*he,Ee)}}else if(me!==void 0){const $=me[ge];if($!==void 0)switch($.length){case 2:o.vertexAttrib2fv(k.location,$);break;case 3:o.vertexAttrib3fv(k.location,$);break;case 4:o.vertexAttrib4fv(k.location,$);break;default:o.vertexAttrib1fv(k.location,$)}}}}N()}function K(){re();for(const E in r){const q=r[E];for(const le in q){const H=q[le];for(const oe in H)v(H[oe].object),delete H[oe];delete q[le]}delete r[E]}}function O(E){if(r[E.id]===void 0)return;const q=r[E.id];for(const le in q){const H=q[le];for(const oe in H)v(H[oe].object),delete H[oe];delete q[le]}delete r[E.id]}function F(E){for(const q in r){const le=r[q];if(le[E.id]===void 0)continue;const H=le[E.id];for(const oe in H)v(H[oe].object),delete H[oe];delete le[E.id]}}function re(){C(),f=!0,u!==a&&(u=a,m(u.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:re,resetDefaultState:C,dispose:K,releaseStatesOfGeometry:O,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:_,disableUnusedAttributes:N}}function GS(o,e,n){let r;function a(m){r=m}function u(m,v){o.drawArrays(r,m,v),n.update(v,r,1)}function f(m,v,S){S!==0&&(o.drawArraysInstanced(r,m,v,S),n.update(v,r,S))}function d(m,v,S){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<S;y++)this.render(m[y],v[y]);else{x.multiDrawArraysWEBGL(r,m,0,v,0,S);let y=0;for(let A=0;A<S;A++)y+=v[A];n.update(y,r,1)}}function p(m,v,S,x){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<m.length;A++)f(m[A],v[A],x[A]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,v,0,x,0,S);let A=0;for(let T=0;T<S;T++)A+=v[T];for(let T=0;T<x.length;T++)n.update(A,r,x[T])}}this.setMode=a,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function WS(o,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");a=o.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function f(O){return!(O!==ti&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const F=O===Lo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==dr&&r.convert(O)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ci&&!F)}function p(O){if(O==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const S=n.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),y=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),T=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),g=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),D=y>0,K=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:S,maxTextures:x,maxVertexTextures:y,maxTextureSize:A,maxCubemapSize:T,maxAttributes:_,maxVertexUniforms:g,maxVaryings:N,maxFragmentUniforms:P,vertexTextures:D,maxSamples:K}}function XS(o){const e=this;let n=null,r=0,a=!1,u=!1;const f=new Ir,d=new at,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const y=S.length!==0||x||r!==0||a;return a=x,r=S.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(S,x){n=v(S,x,0)},this.setState=function(S,x,y){const A=S.clippingPlanes,T=S.clipIntersection,_=S.clipShadows,g=o.get(S);if(!a||A===null||A.length===0||u&&!_)u?v(null):m();else{const N=u?0:r,P=N*4;let D=g.clippingState||null;p.value=D,D=v(A,x,P,y);for(let K=0;K!==P;++K)D[K]=n[K];g.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,x,y,A){const T=S!==null?S.length:0;let _=null;if(T!==0){if(_=p.value,A!==!0||_===null){const g=y+T*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(_===null||_.length<g)&&(_=new Float32Array(g));for(let P=0,D=y;P!==T;++P,D+=4)f.copy(S[P]).applyMatrix4(N,d),f.normal.toArray(_,D),_[D+3]=f.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,_}}function YS(o){let e=new WeakMap;function n(f,d){return d===Kc?f.mapping=Ns:d===Zc&&(f.mapping=Is),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Kc||d===Zc)if(e.has(f)){const p=e.get(f).texture;return n(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new i0(p.height);return m.fromEquirectangularTexture(o,f),e.set(f,m),f.addEventListener("dispose",a),n(m.texture,f.mapping)}else return null}}return f}function a(f){const d=f.target;d.removeEventListener("dispose",a);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}class qS extends _l{constructor(e=-1,n=1,r=1,a=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,f=r+e,d=a+n,p=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ls=4,Fp=[.125,.215,.35,.446,.526,.582],zr=20,zc=new qS,Op=new xt;let kc=null,Bc=0,Hc=0,Vc=!1;const Fr=(1+Math.sqrt(5))/2,Ps=1/Fr,zp=[new ee(-Fr,Ps,0),new ee(Fr,Ps,0),new ee(-Ps,0,Fr),new ee(Ps,0,Fr),new ee(0,Fr,-Ps),new ee(0,Fr,Ps),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class kp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){kc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kc,Bc,Hc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,ol(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ns||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Lo,format:ti,colorSpace:pr,depthBuffer:!1},a=Bp(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bp(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jS(u)),this._blurMaterial=$S(u,e,n)}return a}_compileMaterial(e){const n=new Vn(this._lodPlanes[0],e);this._renderer.compile(n,zc)}_sceneToCubeUV(e,n,r,a){const d=new Jn(90,1,n,r),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,x=v.toneMapping;v.getClearColor(Op),v.toneMapping=cr,v.autoClear=!1;const y=new Rm({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),A=new Vn(new Fo,y);let T=!1;const _=e.background;_?_.isColor&&(y.color.copy(_),e.background=null,T=!0):(y.color.copy(Op),T=!0);for(let g=0;g<6;g++){const N=g%3;N===0?(d.up.set(0,p[g],0),d.lookAt(m[g],0,0)):N===1?(d.up.set(0,0,p[g]),d.lookAt(0,m[g],0)):(d.up.set(0,p[g],0),d.lookAt(0,0,m[g]));const P=this._cubeSize;ol(a,N*P,g>2?P:0,P,P),v.setRenderTarget(a),T&&v.render(A,d),v.render(e,d)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=x,v.autoClear=S,e.background=_}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Ns||e.mapping===Is;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hp());const u=a?this._cubemapMaterial:this._equirectMaterial,f=new Vn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;ol(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(f,zc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=zp[(a-u-1)%zp.length];this._blur(e,u-1,u,f,d)}n.autoClear=r}_blur(e,n,r,a,u){const f=this._pingPongRenderTarget;this._halfBlur(e,f,n,r,a,"latitudinal",u),this._halfBlur(f,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,S=new Vn(this._lodPlanes[a],m),x=m.uniforms,y=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*zr-1),T=u/A,_=isFinite(u)?1+Math.floor(v*T):zr;_>zr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${zr}`);const g=[];let N=0;for(let F=0;F<zr;++F){const re=F/T,C=Math.exp(-re*re/2);g.push(C),F===0?N+=C:F<_&&(N+=2*C)}for(let F=0;F<g.length;F++)g[F]=g[F]/N;x.envMap.value=e.texture,x.samples.value=_,x.weights.value=g,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:P}=this;x.dTheta.value=A,x.mipInt.value=P-r;const D=this._sizeLods[a],K=3*D*(a>P-Ls?a-P+Ls:0),O=4*(this._cubeSize-D);ol(n,K,O,3*D,2*D),p.setRenderTarget(n),p.render(S,zc)}}function jS(o){const e=[],n=[],r=[];let a=o;const u=o-Ls+1+Fp.length;for(let f=0;f<u;f++){const d=Math.pow(2,a);n.push(d);let p=1/d;f>o-Ls?p=Fp[f-o+Ls-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),v=-m,S=1+m,x=[v,v,S,v,S,S,v,v,S,S,v,S],y=6,A=6,T=3,_=2,g=1,N=new Float32Array(T*A*y),P=new Float32Array(_*A*y),D=new Float32Array(g*A*y);for(let O=0;O<y;O++){const F=O%3*2/3-1,re=O>2?0:-1,C=[F,re,0,F+2/3,re,0,F+2/3,re+1,0,F,re,0,F+2/3,re+1,0,F,re+1,0];N.set(C,T*A*O),P.set(x,_*A*O);const E=[O,O,O,O,O,O];D.set(E,g*A*O)}const K=new Ui;K.setAttribute("position",new ni(N,T)),K.setAttribute("uv",new ni(P,_)),K.setAttribute("faceIndex",new ni(D,g)),e.push(K),a>Ls&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function Bp(o,e,n){const r=new hr(o,e,n);return r.texture.mapping=yl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ol(o,e,n,r,a){o.viewport.set(e,n,r,a),o.scissor.set(e,n,r,a)}function $S(o,e,n){const r=new Float32Array(zr),a=new ee(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:of(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Hp(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Vp(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function of(){return`

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
	`}function KS(o){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Kc||p===Zc,v=p===Ns||p===Is;if(m||v){let S=e.get(d);const x=S!==void 0?S.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return n===null&&(n=new kp(o)),S=m?n.fromEquirectangular(d,S):n.fromCubemap(d,S),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),S.texture;if(S!==void 0)return S.texture;{const y=d.image;return m&&y&&y.height>0||v&&y&&a(y)?(n===null&&(n=new kp(o)),S=m?n.fromEquirectangular(d):n.fromCubemap(d),S.texture.pmremVersion=d.pmremVersion,e.set(d,S),d.addEventListener("dispose",u),S.texture):null}}}return d}function a(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function ZS(o){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=o.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function QS(o,e,n,r){const a={},u=new WeakMap;function f(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const A in x.attributes)e.remove(x.attributes[A]);for(const A in x.morphAttributes){const T=x.morphAttributes[A];for(let _=0,g=T.length;_<g;_++)e.remove(T[_])}x.removeEventListener("dispose",f),delete a[x.id];const y=u.get(x);y&&(e.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function d(S,x){return a[x.id]===!0||(x.addEventListener("dispose",f),a[x.id]=!0,n.memory.geometries++),x}function p(S){const x=S.attributes;for(const A in x)e.update(x[A],o.ARRAY_BUFFER);const y=S.morphAttributes;for(const A in y){const T=y[A];for(let _=0,g=T.length;_<g;_++)e.update(T[_],o.ARRAY_BUFFER)}}function m(S){const x=[],y=S.index,A=S.attributes.position;let T=0;if(y!==null){const N=y.array;T=y.version;for(let P=0,D=N.length;P<D;P+=3){const K=N[P+0],O=N[P+1],F=N[P+2];x.push(K,O,O,F,F,K)}}else if(A!==void 0){const N=A.array;T=A.version;for(let P=0,D=N.length/3-1;P<D;P+=3){const K=P+0,O=P+1,F=P+2;x.push(K,O,O,F,F,K)}}else return;const _=new(ym(x)?Pm:Cm)(x,1);_.version=T;const g=u.get(S);g&&e.remove(g),u.set(S,_)}function v(S){const x=u.get(S);if(x){const y=S.index;y!==null&&x.version<y.version&&m(S)}else m(S);return u.get(S)}return{get:d,update:p,getWireframeAttribute:v}}function JS(o,e,n){let r;function a(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){o.drawElements(r,y,u,x*f),n.update(y,r,1)}function m(x,y,A){A!==0&&(o.drawElementsInstanced(r,y,u,x*f,A),n.update(y,r,A))}function v(x,y,A){if(A===0)return;const T=e.get("WEBGL_multi_draw");if(T===null)for(let _=0;_<A;_++)this.render(x[_]/f,y[_]);else{T.multiDrawElementsWEBGL(r,y,0,u,x,0,A);let _=0;for(let g=0;g<A;g++)_+=y[g];n.update(_,r,1)}}function S(x,y,A,T){if(A===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<x.length;g++)m(x[g]/f,y[g],T[g]);else{_.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,T,0,A);let g=0;for(let N=0;N<A;N++)g+=y[N];for(let N=0;N<T.length;N++)n.update(g,r,T[N])}}this.setMode=a,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function ey(o){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(n.calls++,f){case o.TRIANGLES:n.triangles+=d*(u/3);break;case o.LINES:n.lines+=d*(u/2);break;case o.LINE_STRIP:n.lines+=d*(u-1);break;case o.LINE_LOOP:n.lines+=d*u;break;case o.POINTS:n.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function ty(o,e,n){const r=new WeakMap,a=new Jt;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=v!==void 0?v.length:0;let x=r.get(d);if(x===void 0||x.count!==S){let E=function(){re.dispose(),r.delete(d),d.removeEventListener("dispose",E)};var y=E;x!==void 0&&x.texture.dispose();const A=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let D=0;A===!0&&(D=1),T===!0&&(D=2),_===!0&&(D=3);let K=d.attributes.position.count*D,O=1;K>e.maxTextureSize&&(O=Math.ceil(K/e.maxTextureSize),K=e.maxTextureSize);const F=new Float32Array(K*O*4*S),re=new Em(F,K,O,S);re.type=Ci,re.needsUpdate=!0;const C=D*4;for(let q=0;q<S;q++){const le=g[q],H=N[q],oe=P[q],ce=K*O*4*q;for(let me=0;me<le.count;me++){const ge=me*C;A===!0&&(a.fromBufferAttribute(le,me),F[ce+ge+0]=a.x,F[ce+ge+1]=a.y,F[ce+ge+2]=a.z,F[ce+ge+3]=0),T===!0&&(a.fromBufferAttribute(H,me),F[ce+ge+4]=a.x,F[ce+ge+5]=a.y,F[ce+ge+6]=a.z,F[ce+ge+7]=0),_===!0&&(a.fromBufferAttribute(oe,me),F[ce+ge+8]=a.x,F[ce+ge+9]=a.y,F[ce+ge+10]=a.z,F[ce+ge+11]=oe.itemSize===4?a.w:1)}}x={count:S,texture:re,size:new Je(K,O)},r.set(d,x),d.addEventListener("dispose",E)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,n);else{let A=0;for(let _=0;_<m.length;_++)A+=m[_];const T=d.morphTargetsRelative?1:1-A;p.getUniforms().setValue(o,"morphTargetBaseInfluence",T),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function ny(o,e,n,r){let a=new WeakMap;function u(p){const m=r.render.frame,v=p.geometry,S=e.get(p,v);if(a.get(S)!==m&&(e.update(S),a.set(S,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),a.get(p)!==m&&(n.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,o.ARRAY_BUFFER),a.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return S}function f(){a=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:f}}class Nm extends mn{constructor(e,n,r,a,u,f,d,p,m,v){if(v=v!==void 0?v:Ds,v!==Ds&&v!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ds&&(r=Fs),r===void 0&&v===Po&&(r=bo),super(null,a,u,f,d,p,v,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:wn,this.minFilter=p!==void 0?p:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Im=new mn,Fm=new Nm(1,1);Fm.compareFunction=Sm;const Om=new Em,zm=new H_,km=new bm,Gp=[],Wp=[],Xp=new Float32Array(16),Yp=new Float32Array(9),qp=new Float32Array(4);function ks(o,e,n){const r=o[0];if(r<=0||r>0)return o;const a=e*n;let u=Gp[a];if(u===void 0&&(u=new Float32Array(a),Gp[a]=u),e!==0){r.toArray(u,0);for(let f=1,d=0;f!==e;++f)d+=n,o[f].toArray(u,d)}return u}function Xt(o,e){if(o.length!==e.length)return!1;for(let n=0,r=o.length;n<r;n++)if(o[n]!==e[n])return!1;return!0}function Yt(o,e){for(let n=0,r=e.length;n<r;n++)o[n]=e[n]}function Tl(o,e){let n=Wp[e];n===void 0&&(n=new Int32Array(e),Wp[e]=n);for(let r=0;r!==e;++r)n[r]=o.allocateTextureUnit();return n}function iy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1f(this.addr,e),n[0]=e)}function ry(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;o.uniform2fv(this.addr,e),Yt(n,e)}}function sy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;o.uniform3fv(this.addr,e),Yt(n,e)}}function oy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;o.uniform4fv(this.addr,e),Yt(n,e)}}function ay(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Xt(n,e))return;o.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,r))return;qp.set(r),o.uniformMatrix2fv(this.addr,!1,qp),Yt(n,r)}}function ly(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Xt(n,e))return;o.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,r))return;Yp.set(r),o.uniformMatrix3fv(this.addr,!1,Yp),Yt(n,r)}}function uy(o,e){const n=this.cache,r=e.elements;if(r===void 0){if(Xt(n,e))return;o.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,r))return;Xp.set(r),o.uniformMatrix4fv(this.addr,!1,Xp),Yt(n,r)}}function cy(o,e){const n=this.cache;n[0]!==e&&(o.uniform1i(this.addr,e),n[0]=e)}function fy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;o.uniform2iv(this.addr,e),Yt(n,e)}}function dy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;o.uniform3iv(this.addr,e),Yt(n,e)}}function hy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;o.uniform4iv(this.addr,e),Yt(n,e)}}function py(o,e){const n=this.cache;n[0]!==e&&(o.uniform1ui(this.addr,e),n[0]=e)}function my(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;o.uniform2uiv(this.addr,e),Yt(n,e)}}function gy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;o.uniform3uiv(this.addr,e),Yt(n,e)}}function vy(o,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;o.uniform4uiv(this.addr,e),Yt(n,e)}}function _y(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a);const u=this.type===o.SAMPLER_2D_SHADOW?Fm:Im;n.setTexture2D(e||u,a)}function xy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||zm,a)}function Sy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||km,a)}function yy(o,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(o.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||Om,a)}function My(o){switch(o){case 5126:return iy;case 35664:return ry;case 35665:return sy;case 35666:return oy;case 35674:return ay;case 35675:return ly;case 35676:return uy;case 5124:case 35670:return cy;case 35667:case 35671:return fy;case 35668:case 35672:return dy;case 35669:case 35673:return hy;case 5125:return py;case 36294:return my;case 36295:return gy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return yy}}function Ey(o,e){o.uniform1fv(this.addr,e)}function Ty(o,e){const n=ks(e,this.size,2);o.uniform2fv(this.addr,n)}function wy(o,e){const n=ks(e,this.size,3);o.uniform3fv(this.addr,n)}function Ay(o,e){const n=ks(e,this.size,4);o.uniform4fv(this.addr,n)}function Ry(o,e){const n=ks(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function Cy(o,e){const n=ks(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function Py(o,e){const n=ks(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function Ly(o,e){o.uniform1iv(this.addr,e)}function by(o,e){o.uniform2iv(this.addr,e)}function Dy(o,e){o.uniform3iv(this.addr,e)}function Uy(o,e){o.uniform4iv(this.addr,e)}function Ny(o,e){o.uniform1uiv(this.addr,e)}function Iy(o,e){o.uniform2uiv(this.addr,e)}function Fy(o,e){o.uniform3uiv(this.addr,e)}function Oy(o,e){o.uniform4uiv(this.addr,e)}function zy(o,e,n){const r=this.cache,a=e.length,u=Tl(n,a);Xt(r,u)||(o.uniform1iv(this.addr,u),Yt(r,u));for(let f=0;f!==a;++f)n.setTexture2D(e[f]||Im,u[f])}function ky(o,e,n){const r=this.cache,a=e.length,u=Tl(n,a);Xt(r,u)||(o.uniform1iv(this.addr,u),Yt(r,u));for(let f=0;f!==a;++f)n.setTexture3D(e[f]||zm,u[f])}function By(o,e,n){const r=this.cache,a=e.length,u=Tl(n,a);Xt(r,u)||(o.uniform1iv(this.addr,u),Yt(r,u));for(let f=0;f!==a;++f)n.setTextureCube(e[f]||km,u[f])}function Hy(o,e,n){const r=this.cache,a=e.length,u=Tl(n,a);Xt(r,u)||(o.uniform1iv(this.addr,u),Yt(r,u));for(let f=0;f!==a;++f)n.setTexture2DArray(e[f]||Om,u[f])}function Vy(o){switch(o){case 5126:return Ey;case 35664:return Ty;case 35665:return wy;case 35666:return Ay;case 35674:return Ry;case 35675:return Cy;case 35676:return Py;case 5124:case 35670:return Ly;case 35667:case 35671:return by;case 35668:case 35672:return Dy;case 35669:case 35673:return Uy;case 5125:return Ny;case 36294:return Iy;case 36295:return Fy;case 36296:return Oy;case 35678:case 36198:case 36298:case 36306:case 35682:return zy;case 35679:case 36299:case 36307:return ky;case 35680:case 36300:case 36308:case 36293:return By;case 36289:case 36303:case 36311:case 36292:return Hy}}class Gy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=My(n.type)}}class Wy{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Vy(n.type)}}class Xy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,f=a.length;u!==f;++u){const d=a[u];d.setValue(e,n[d.id],r)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function jp(o,e){o.seq.push(e),o.map[e.id]=e}function Yy(o,e,n){const r=o.name,a=r.length;for(Gc.lastIndex=0;;){const u=Gc.exec(r),f=Gc.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===a){jp(n,m===void 0?new Gy(d,o,e):new Wy(d,o,e));break}else{let S=n.map[d];S===void 0&&(S=new Xy(d),jp(n,S)),n=S}}}class fl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),f=e.getUniformLocation(n,u.name);Yy(u,f,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,f=n.length;u!==f;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const f=e[a];f.id in n&&r.push(f)}return r}}function $p(o,e,n){const r=o.createShader(e);return o.shaderSource(r,n),o.compileShader(r),r}const qy=37297;let jy=0;function $y(o,e){const n=o.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let f=a;f<u;f++){const d=f+1;r.push(`${d===e?">":" "} ${d}: ${n[f]}`)}return r.join(`
`)}function Ky(o){const e=Mt.getPrimaries(Mt.workingColorSpace),n=Mt.getPrimaries(o);let r;switch(e===n?r="":e===ml&&n===pl?r="LinearDisplayP3ToLinearSRGB":e===pl&&n===ml&&(r="LinearSRGBToLinearDisplayP3"),o){case pr:case Ml:return[r,"LinearTransferOETF"];case li:case sf:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function Kp(o,e,n){const r=o.getShaderParameter(e,o.COMPILE_STATUS),a=o.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const f=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+$y(o.getShaderSource(e),f)}else return a}function Zy(o,e){const n=Ky(e);return`vec4 ${o}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Qy(o,e){let n;switch(e){case r_:n="Linear";break;case s_:n="Reinhard";break;case o_:n="OptimizedCineon";break;case a_:n="ACESFilmic";break;case u_:n="AgX";break;case c_:n="Neutral";break;case l_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Jy(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function eM(o){const e=[];for(const n in o){const r=o[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function tM(o,e){const n={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=o.getActiveAttrib(e,a),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),n[f]={type:u.type,location:o.getAttribLocation(e,f),locationSize:d}}return n}function Co(o){return o!==""}function Zp(o,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qp(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nM=/^[ \t]*#include +<([\w\d./]+)>/gm;function tf(o){return o.replace(nM,rM)}const iM=new Map;function rM(o,e){let n=ot[e];if(n===void 0){const r=iM.get(e);if(r!==void 0)n=ot[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return tf(n)}const sM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jp(o){return o.replace(sM,oM)}function oM(o,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function em(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function aM(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===cm?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Lv?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function lM(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ns:case Is:e="ENVMAP_TYPE_CUBE";break;case yl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uM(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function cM(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case fm:e="ENVMAP_BLENDING_MULTIPLY";break;case n_:e="ENVMAP_BLENDING_MIX";break;case i_:e="ENVMAP_BLENDING_ADD";break}return e}function fM(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function dM(o,e,n,r){const a=o.getContext(),u=n.defines;let f=n.vertexShader,d=n.fragmentShader;const p=aM(n),m=lM(n),v=uM(n),S=cM(n),x=fM(n),y=Jy(n),A=eM(u),T=a.createProgram();let _,g,N=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Co).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A].filter(Co).join(`
`),g.length>0&&(g+=`
`)):(_=[em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),g=[em(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,A,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==cr?"#define TONE_MAPPING":"",n.toneMapping!==cr?ot.tonemapping_pars_fragment:"",n.toneMapping!==cr?Qy("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,Zy("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Co).join(`
`)),f=tf(f),f=Zp(f,n),f=Qp(f,n),d=tf(d),d=Zp(d,n),d=Qp(d,n),f=Jp(f),d=Jp(d),n.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",n.glslVersion===gp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===gp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=N+_+f,D=N+g+d,K=$p(a,a.VERTEX_SHADER,P),O=$p(a,a.FRAGMENT_SHADER,D);a.attachShader(T,K),a.attachShader(T,O),n.index0AttributeName!==void 0?a.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(q){if(o.debug.checkShaderErrors){const le=a.getProgramInfoLog(T).trim(),H=a.getShaderInfoLog(K).trim(),oe=a.getShaderInfoLog(O).trim();let ce=!0,me=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(ce=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(a,T,K,O);else{const ge=Kp(a,K,"vertex"),k=Kp(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+le+`
`+ge+`
`+k)}else le!==""?console.warn("THREE.WebGLProgram: Program Info Log:",le):(H===""||oe==="")&&(me=!1);me&&(q.diagnostics={runnable:ce,programLog:le,vertexShader:{log:H,prefix:_},fragmentShader:{log:oe,prefix:g}})}a.deleteShader(K),a.deleteShader(O),re=new fl(a,T),C=tM(a,T)}let re;this.getUniforms=function(){return re===void 0&&F(this),re};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(T,qy)),E},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jy++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=K,this.fragmentShader=O,this}let hM=0;class pM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(a)===!1&&(f.add(a),a.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new mM(e),n.set(e,r)),r}}class mM{constructor(e){this.id=hM++,this.code=e,this.usedTimes=0}}function gM(o,e,n,r,a,u,f){const d=new wm,p=new pM,m=new Set,v=[],S=a.logarithmicDepthBuffer,x=a.vertexTextures;let y=a.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return m.add(C),C===0?"uv":`uv${C}`}function _(C,E,q,le,H){const oe=le.fog,ce=H.geometry,me=C.isMeshStandardMaterial?le.environment:null,ge=(C.isMeshStandardMaterial?n:e).get(C.envMap||me),k=ge&&ge.mapping===yl?ge.image.height:null,se=A[C.type];C.precision!==null&&(y=a.getMaxPrecision(C.precision),y!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const $=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,I=$!==void 0?$.length:0;let te=0;ce.morphAttributes.position!==void 0&&(te=1),ce.morphAttributes.normal!==void 0&&(te=2),ce.morphAttributes.color!==void 0&&(te=3);let De,Y,he,Ee;if(se){const vt=ui[se];De=vt.vertexShader,Y=vt.fragmentShader}else De=C.vertexShader,Y=C.fragmentShader,p.update(C),he=p.getVertexShaderID(C),Ee=p.getFragmentShaderID(C);const Se=o.getRenderTarget(),Le=H.isInstancedMesh===!0,Oe=H.isBatchedMesh===!0,G=!!C.map,gt=!!C.matcap,Xe=!!ge,dt=!!C.aoMap,Ye=!!C.lightMap,lt=!!C.bumpMap,tt=!!C.normalMap,rt=!!C.displacementMap,ht=!!C.emissiveMap,U=!!C.metalnessMap,w=!!C.roughnessMap,ne=C.anisotropy>0,pe=C.clearcoat>0,ae=C.dispersion>0,L=C.iridescence>0,fe=C.sheen>0,ue=C.transmission>0,ve=ne&&!!C.anisotropyMap,Ie=pe&&!!C.clearcoatMap,Te=pe&&!!C.clearcoatNormalMap,ze=pe&&!!C.clearcoatRoughnessMap,Qe=L&&!!C.iridescenceMap,We=L&&!!C.iridescenceThicknessMap,Ue=fe&&!!C.sheenColorMap,it=fe&&!!C.sheenRoughnessMap,ct=!!C.specularMap,wt=!!C.specularColorMap,nt=!!C.specularIntensityMap,V=ue&&!!C.transmissionMap,_e=ue&&!!C.thicknessMap,de=!!C.gradientMap,Ae=!!C.alphaMap,Pe=C.alphaTest>0,ft=!!C.alphaHash,yt=!!C.extensions;let At=cr;C.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&(At=o.toneMapping);const Bt={shaderID:se,shaderType:C.type,shaderName:C.name,vertexShader:De,fragmentShader:Y,defines:C.defines,customVertexShaderID:he,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Oe,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Se===null?o.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:pr,alphaToCoverage:!!C.alphaToCoverage,map:G,matcap:gt,envMap:Xe,envMapMode:Xe&&ge.mapping,envMapCubeUVHeight:k,aoMap:dt,lightMap:Ye,bumpMap:lt,normalMap:tt,displacementMap:x&&rt,emissiveMap:ht,normalMapObjectSpace:tt&&C.normalMapType===w_,normalMapTangentSpace:tt&&C.normalMapType===T_,metalnessMap:U,roughnessMap:w,anisotropy:ne,anisotropyMap:ve,clearcoat:pe,clearcoatMap:Ie,clearcoatNormalMap:Te,clearcoatRoughnessMap:ze,dispersion:ae,iridescence:L,iridescenceMap:Qe,iridescenceThicknessMap:We,sheen:fe,sheenColorMap:Ue,sheenRoughnessMap:it,specularMap:ct,specularColorMap:wt,specularIntensityMap:nt,transmission:ue,transmissionMap:V,thicknessMap:_e,gradientMap:de,opaque:C.transparent===!1&&C.blending===bs&&C.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Pe,alphaHash:ft,combine:C.combine,mapUv:G&&T(C.map.channel),aoMapUv:dt&&T(C.aoMap.channel),lightMapUv:Ye&&T(C.lightMap.channel),bumpMapUv:lt&&T(C.bumpMap.channel),normalMapUv:tt&&T(C.normalMap.channel),displacementMapUv:rt&&T(C.displacementMap.channel),emissiveMapUv:ht&&T(C.emissiveMap.channel),metalnessMapUv:U&&T(C.metalnessMap.channel),roughnessMapUv:w&&T(C.roughnessMap.channel),anisotropyMapUv:ve&&T(C.anisotropyMap.channel),clearcoatMapUv:Ie&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Te&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:We&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:it&&T(C.sheenRoughnessMap.channel),specularMapUv:ct&&T(C.specularMap.channel),specularColorMapUv:wt&&T(C.specularColorMap.channel),specularIntensityMapUv:nt&&T(C.specularIntensityMap.channel),transmissionMapUv:V&&T(C.transmissionMap.channel),thicknessMapUv:_e&&T(C.thicknessMap.channel),alphaMapUv:Ae&&T(C.alphaMap.channel),vertexTangents:!!ce.attributes.tangent&&(tt||ne),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ce.attributes.uv&&(G||Ae),fog:!!oe,useFog:C.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:H.isSkinnedMesh===!0,morphTargets:ce.morphAttributes.position!==void 0,morphNormals:ce.morphAttributes.normal!==void 0,morphColors:ce.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:te,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:o.shadowMap.enabled&&q.length>0,shadowMapType:o.shadowMap.type,toneMapping:At,useLegacyLights:o._useLegacyLights,decodeVideoTexture:G&&C.map.isVideoTexture===!0&&Mt.getTransfer(C.map.colorSpace)===Pt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Ri,flipSided:C.side===An,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:yt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:yt&&C.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Bt.vertexUv1s=m.has(1),Bt.vertexUv2s=m.has(2),Bt.vertexUv3s=m.has(3),m.clear(),Bt}function g(C){const E=[];if(C.shaderID?E.push(C.shaderID):(E.push(C.customVertexShaderID),E.push(C.customFragmentShaderID)),C.defines!==void 0)for(const q in C.defines)E.push(q),E.push(C.defines[q]);return C.isRawShaderMaterial===!1&&(N(E,C),P(E,C),E.push(o.outputColorSpace)),E.push(C.customProgramCacheKey),E.join()}function N(C,E){C.push(E.precision),C.push(E.outputColorSpace),C.push(E.envMapMode),C.push(E.envMapCubeUVHeight),C.push(E.mapUv),C.push(E.alphaMapUv),C.push(E.lightMapUv),C.push(E.aoMapUv),C.push(E.bumpMapUv),C.push(E.normalMapUv),C.push(E.displacementMapUv),C.push(E.emissiveMapUv),C.push(E.metalnessMapUv),C.push(E.roughnessMapUv),C.push(E.anisotropyMapUv),C.push(E.clearcoatMapUv),C.push(E.clearcoatNormalMapUv),C.push(E.clearcoatRoughnessMapUv),C.push(E.iridescenceMapUv),C.push(E.iridescenceThicknessMapUv),C.push(E.sheenColorMapUv),C.push(E.sheenRoughnessMapUv),C.push(E.specularMapUv),C.push(E.specularColorMapUv),C.push(E.specularIntensityMapUv),C.push(E.transmissionMapUv),C.push(E.thicknessMapUv),C.push(E.combine),C.push(E.fogExp2),C.push(E.sizeAttenuation),C.push(E.morphTargetsCount),C.push(E.morphAttributeCount),C.push(E.numDirLights),C.push(E.numPointLights),C.push(E.numSpotLights),C.push(E.numSpotLightMaps),C.push(E.numHemiLights),C.push(E.numRectAreaLights),C.push(E.numDirLightShadows),C.push(E.numPointLightShadows),C.push(E.numSpotLightShadows),C.push(E.numSpotLightShadowsWithMaps),C.push(E.numLightProbes),C.push(E.shadowMapType),C.push(E.toneMapping),C.push(E.numClippingPlanes),C.push(E.numClipIntersection),C.push(E.depthPacking)}function P(C,E){d.disableAll(),E.supportsVertexTextures&&d.enable(0),E.instancing&&d.enable(1),E.instancingColor&&d.enable(2),E.instancingMorph&&d.enable(3),E.matcap&&d.enable(4),E.envMap&&d.enable(5),E.normalMapObjectSpace&&d.enable(6),E.normalMapTangentSpace&&d.enable(7),E.clearcoat&&d.enable(8),E.iridescence&&d.enable(9),E.alphaTest&&d.enable(10),E.vertexColors&&d.enable(11),E.vertexAlphas&&d.enable(12),E.vertexUv1s&&d.enable(13),E.vertexUv2s&&d.enable(14),E.vertexUv3s&&d.enable(15),E.vertexTangents&&d.enable(16),E.anisotropy&&d.enable(17),E.alphaHash&&d.enable(18),E.batching&&d.enable(19),E.dispersion&&d.enable(20),C.push(d.mask),d.disableAll(),E.fog&&d.enable(0),E.useFog&&d.enable(1),E.flatShading&&d.enable(2),E.logarithmicDepthBuffer&&d.enable(3),E.skinning&&d.enable(4),E.morphTargets&&d.enable(5),E.morphNormals&&d.enable(6),E.morphColors&&d.enable(7),E.premultipliedAlpha&&d.enable(8),E.shadowMapEnabled&&d.enable(9),E.useLegacyLights&&d.enable(10),E.doubleSided&&d.enable(11),E.flipSided&&d.enable(12),E.useDepthPacking&&d.enable(13),E.dithering&&d.enable(14),E.transmission&&d.enable(15),E.sheen&&d.enable(16),E.opaque&&d.enable(17),E.pointsUvs&&d.enable(18),E.decodeVideoTexture&&d.enable(19),E.alphaToCoverage&&d.enable(20),C.push(d.mask)}function D(C){const E=A[C.type];let q;if(E){const le=ui[E];q=J_.clone(le.uniforms)}else q=C.uniforms;return q}function K(C,E){let q;for(let le=0,H=v.length;le<H;le++){const oe=v[le];if(oe.cacheKey===E){q=oe,++q.usedTimes;break}}return q===void 0&&(q=new dM(o,E,C,u),v.push(q)),q}function O(C){if(--C.usedTimes===0){const E=v.indexOf(C);v[E]=v[v.length-1],v.pop(),C.destroy()}}function F(C){p.remove(C)}function re(){p.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:D,acquireProgram:K,releaseProgram:O,releaseShaderCache:F,programs:v,dispose:re}}function vM(){let o=new WeakMap;function e(u){let f=o.get(u);return f===void 0&&(f={},o.set(u,f)),f}function n(u){o.delete(u)}function r(u,f,d){o.get(u)[f]=d}function a(){o=new WeakMap}return{get:e,remove:n,update:r,dispose:a}}function _M(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function tm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function nm(){const o=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function f(S,x,y,A,T,_){let g=o[e];return g===void 0?(g={id:S.id,object:S,geometry:x,material:y,groupOrder:A,renderOrder:S.renderOrder,z:T,group:_},o[e]=g):(g.id=S.id,g.object=S,g.geometry=x,g.material=y,g.groupOrder=A,g.renderOrder=S.renderOrder,g.z=T,g.group=_),e++,g}function d(S,x,y,A,T,_){const g=f(S,x,y,A,T,_);y.transmission>0?r.push(g):y.transparent===!0?a.push(g):n.push(g)}function p(S,x,y,A,T,_){const g=f(S,x,y,A,T,_);y.transmission>0?r.unshift(g):y.transparent===!0?a.unshift(g):n.unshift(g)}function m(S,x){n.length>1&&n.sort(S||_M),r.length>1&&r.sort(x||tm),a.length>1&&a.sort(x||tm)}function v(){for(let S=e,x=o.length;S<x;S++){const y=o[S];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:d,unshift:p,finish:v,sort:m}}function xM(){let o=new WeakMap;function e(r,a){const u=o.get(r);let f;return u===void 0?(f=new nm,o.set(r,[f])):a>=u.length?(f=new nm,u.push(f)):f=u[a],f}function n(){o=new WeakMap}return{get:e,dispose:n}}function SM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new xt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new xt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":n={color:new xt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return o[e.id]=n,n}}}function yM(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=n,n}}}let MM=0;function EM(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function TM(o){const e=new SM,n=yM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ee);const a=new ee,u=new kt,f=new kt;function d(m,v){let S=0,x=0,y=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let A=0,T=0,_=0,g=0,N=0,P=0,D=0,K=0,O=0,F=0,re=0;m.sort(EM);const C=v===!0?Math.PI:1;for(let q=0,le=m.length;q<le;q++){const H=m[q],oe=H.color,ce=H.intensity,me=H.distance,ge=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)S+=oe.r*ce*C,x+=oe.g*ce*C,y+=oe.b*ce*C;else if(H.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(H.sh.coefficients[k],ce);re++}else if(H.isDirectionalLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity*C),H.castShadow){const se=H.shadow,$=n.get(H);$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,r.directionalShadow[A]=$,r.directionalShadowMap[A]=ge,r.directionalShadowMatrix[A]=H.shadow.matrix,P++}r.directional[A]=k,A++}else if(H.isSpotLight){const k=e.get(H);k.position.setFromMatrixPosition(H.matrixWorld),k.color.copy(oe).multiplyScalar(ce*C),k.distance=me,k.coneCos=Math.cos(H.angle),k.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),k.decay=H.decay,r.spot[_]=k;const se=H.shadow;if(H.map&&(r.spotLightMap[O]=H.map,O++,se.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[_]=se.matrix,H.castShadow){const $=n.get(H);$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,r.spotShadow[_]=$,r.spotShadowMap[_]=ge,K++}_++}else if(H.isRectAreaLight){const k=e.get(H);k.color.copy(oe).multiplyScalar(ce),k.halfWidth.set(H.width*.5,0,0),k.halfHeight.set(0,H.height*.5,0),r.rectArea[g]=k,g++}else if(H.isPointLight){const k=e.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity*C),k.distance=H.distance,k.decay=H.decay,H.castShadow){const se=H.shadow,$=n.get(H);$.shadowBias=se.bias,$.shadowNormalBias=se.normalBias,$.shadowRadius=se.radius,$.shadowMapSize=se.mapSize,$.shadowCameraNear=se.camera.near,$.shadowCameraFar=se.camera.far,r.pointShadow[T]=$,r.pointShadowMap[T]=ge,r.pointShadowMatrix[T]=H.shadow.matrix,D++}r.point[T]=k,T++}else if(H.isHemisphereLight){const k=e.get(H);k.skyColor.copy(H.color).multiplyScalar(ce*C),k.groundColor.copy(H.groundColor).multiplyScalar(ce*C),r.hemi[N]=k,N++}}g>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=x,r.ambient[2]=y;const E=r.hash;(E.directionalLength!==A||E.pointLength!==T||E.spotLength!==_||E.rectAreaLength!==g||E.hemiLength!==N||E.numDirectionalShadows!==P||E.numPointShadows!==D||E.numSpotShadows!==K||E.numSpotMaps!==O||E.numLightProbes!==re)&&(r.directional.length=A,r.spot.length=_,r.rectArea.length=g,r.point.length=T,r.hemi.length=N,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=K,r.spotShadowMap.length=K,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=K+O-F,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=re,E.directionalLength=A,E.pointLength=T,E.spotLength=_,E.rectAreaLength=g,E.hemiLength=N,E.numDirectionalShadows=P,E.numPointShadows=D,E.numSpotShadows=K,E.numSpotMaps=O,E.numLightProbes=re,r.version=MM++)}function p(m,v){let S=0,x=0,y=0,A=0,T=0;const _=v.matrixWorldInverse;for(let g=0,N=m.length;g<N;g++){const P=m[g];if(P.isDirectionalLight){const D=r.directional[S];D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(_),S++}else if(P.isSpotLight){const D=r.spot[y];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(_),D.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),D.direction.sub(a),D.direction.transformDirection(_),y++}else if(P.isRectAreaLight){const D=r.rectArea[A];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(_),f.identity(),u.copy(P.matrixWorld),u.premultiply(_),f.extractRotation(u),D.halfWidth.set(P.width*.5,0,0),D.halfHeight.set(0,P.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),A++}else if(P.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(P.matrixWorld),D.position.applyMatrix4(_),x++}else if(P.isHemisphereLight){const D=r.hemi[T];D.direction.setFromMatrixPosition(P.matrixWorld),D.direction.transformDirection(_),T++}}}return{setup:d,setupView:p,state:r}}function im(o){const e=new TM(o),n=[],r=[];function a(v){m.camera=v,n.length=0,r.length=0}function u(v){n.push(v)}function f(v){r.push(v)}function d(v){e.setup(n,v)}function p(v){e.setupView(n,v)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function wM(o){let e=new WeakMap;function n(a,u=0){const f=e.get(a);let d;return f===void 0?(d=new im(o),e.set(a,[d])):u>=f.length?(d=new im(o),f.push(d)):d=f[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}class AM extends Io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RM extends Io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PM=`uniform sampler2D shadow_pass;
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
}`;function LM(o,e,n){let r=new Dm;const a=new Je,u=new Je,f=new Jt,d=new AM({depthPacking:E_}),p=new RM,m={},v=n.maxTextureSize,S={[fr]:An,[An]:fr,[Ri]:Ri},x=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:CM,fragmentShader:PM}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const A=new Ui;A.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Vn(A,x),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cm;let g=this.type;this.render=function(O,F,re){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;const C=o.getRenderTarget(),E=o.getActiveCubeFace(),q=o.getActiveMipmapLevel(),le=o.state;le.setBlending(ur),le.buffers.color.setClear(1,1,1,1),le.buffers.depth.setTest(!0),le.setScissorTest(!1);const H=g!==Ai&&this.type===Ai,oe=g===Ai&&this.type!==Ai;for(let ce=0,me=O.length;ce<me;ce++){const ge=O[ce],k=ge.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ge,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;a.copy(k.mapSize);const se=k.getFrameExtents();if(a.multiply(se),u.copy(k.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(u.x=Math.floor(v/se.x),a.x=u.x*se.x,k.mapSize.x=u.x),a.y>v&&(u.y=Math.floor(v/se.y),a.y=u.y*se.y,k.mapSize.y=u.y)),k.map===null||H===!0||oe===!0){const I=this.type!==Ai?{minFilter:wn,magFilter:wn}:{};k.map!==null&&k.map.dispose(),k.map=new hr(a.x,a.y,I),k.map.texture.name=ge.name+".shadowMap",k.camera.updateProjectionMatrix()}o.setRenderTarget(k.map),o.clear();const $=k.getViewportCount();for(let I=0;I<$;I++){const te=k.getViewport(I);f.set(u.x*te.x,u.y*te.y,u.x*te.z,u.y*te.w),le.viewport(f),k.updateMatrices(ge,I),r=k.getFrustum(),D(F,re,k.camera,ge,this.type)}k.isPointLightShadow!==!0&&this.type===Ai&&N(k,re),k.needsUpdate=!1}g=this.type,_.needsUpdate=!1,o.setRenderTarget(C,E,q)};function N(O,F){const re=e.update(T);x.defines.VSM_SAMPLES!==O.blurSamples&&(x.defines.VSM_SAMPLES=O.blurSamples,y.defines.VSM_SAMPLES=O.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new hr(a.x,a.y)),x.uniforms.shadow_pass.value=O.map.texture,x.uniforms.resolution.value=O.mapSize,x.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(F,null,re,x,T,null),y.uniforms.shadow_pass.value=O.mapPass.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(F,null,re,y,T,null)}function P(O,F,re,C){let E=null;const q=re.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(q!==void 0)E=q;else if(E=re.isPointLight===!0?p:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const le=E.uuid,H=F.uuid;let oe=m[le];oe===void 0&&(oe={},m[le]=oe);let ce=oe[H];ce===void 0&&(ce=E.clone(),oe[H]=ce,F.addEventListener("dispose",K)),E=ce}if(E.visible=F.visible,E.wireframe=F.wireframe,C===Ai?E.side=F.shadowSide!==null?F.shadowSide:F.side:E.side=F.shadowSide!==null?F.shadowSide:S[F.side],E.alphaMap=F.alphaMap,E.alphaTest=F.alphaTest,E.map=F.map,E.clipShadows=F.clipShadows,E.clippingPlanes=F.clippingPlanes,E.clipIntersection=F.clipIntersection,E.displacementMap=F.displacementMap,E.displacementScale=F.displacementScale,E.displacementBias=F.displacementBias,E.wireframeLinewidth=F.wireframeLinewidth,E.linewidth=F.linewidth,re.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const le=o.properties.get(E);le.light=re}return E}function D(O,F,re,C,E){if(O.visible===!1)return;if(O.layers.test(F.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&E===Ai)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,O.matrixWorld);const H=e.update(O),oe=O.material;if(Array.isArray(oe)){const ce=H.groups;for(let me=0,ge=ce.length;me<ge;me++){const k=ce[me],se=oe[k.materialIndex];if(se&&se.visible){const $=P(O,se,C,E);O.onBeforeShadow(o,O,F,re,H,$,k),o.renderBufferDirect(re,null,H,$,O,k),O.onAfterShadow(o,O,F,re,H,$,k)}}}else if(oe.visible){const ce=P(O,oe,C,E);O.onBeforeShadow(o,O,F,re,H,ce,null),o.renderBufferDirect(re,null,H,ce,O,null),O.onAfterShadow(o,O,F,re,H,ce,null)}}const le=O.children;for(let H=0,oe=le.length;H<oe;H++)D(le[H],F,re,C,E)}function K(O){O.target.removeEventListener("dispose",K);for(const re in m){const C=m[re],E=O.target.uuid;E in C&&(C[E].dispose(),delete C[E])}}}function bM(o){function e(){let V=!1;const _e=new Jt;let de=null;const Ae=new Jt(0,0,0,0);return{setMask:function(Pe){de!==Pe&&!V&&(o.colorMask(Pe,Pe,Pe,Pe),de=Pe)},setLocked:function(Pe){V=Pe},setClear:function(Pe,ft,yt,At,Bt){Bt===!0&&(Pe*=At,ft*=At,yt*=At),_e.set(Pe,ft,yt,At),Ae.equals(_e)===!1&&(o.clearColor(Pe,ft,yt,At),Ae.copy(_e))},reset:function(){V=!1,de=null,Ae.set(-1,0,0,0)}}}function n(){let V=!1,_e=null,de=null,Ae=null;return{setTest:function(Pe){Pe?Ee(o.DEPTH_TEST):Se(o.DEPTH_TEST)},setMask:function(Pe){_e!==Pe&&!V&&(o.depthMask(Pe),_e=Pe)},setFunc:function(Pe){if(de!==Pe){switch(Pe){case $v:o.depthFunc(o.NEVER);break;case Kv:o.depthFunc(o.ALWAYS);break;case Zv:o.depthFunc(o.LESS);break;case dl:o.depthFunc(o.LEQUAL);break;case Qv:o.depthFunc(o.EQUAL);break;case Jv:o.depthFunc(o.GEQUAL);break;case e_:o.depthFunc(o.GREATER);break;case t_:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}de=Pe}},setLocked:function(Pe){V=Pe},setClear:function(Pe){Ae!==Pe&&(o.clearDepth(Pe),Ae=Pe)},reset:function(){V=!1,_e=null,de=null,Ae=null}}}function r(){let V=!1,_e=null,de=null,Ae=null,Pe=null,ft=null,yt=null,At=null,Bt=null;return{setTest:function(vt){V||(vt?Ee(o.STENCIL_TEST):Se(o.STENCIL_TEST))},setMask:function(vt){_e!==vt&&!V&&(o.stencilMask(vt),_e=vt)},setFunc:function(vt,gn,qt){(de!==vt||Ae!==gn||Pe!==qt)&&(o.stencilFunc(vt,gn,qt),de=vt,Ae=gn,Pe=qt)},setOp:function(vt,gn,qt){(ft!==vt||yt!==gn||At!==qt)&&(o.stencilOp(vt,gn,qt),ft=vt,yt=gn,At=qt)},setLocked:function(vt){V=vt},setClear:function(vt){Bt!==vt&&(o.clearStencil(vt),Bt=vt)},reset:function(){V=!1,_e=null,de=null,Ae=null,Pe=null,ft=null,yt=null,At=null,Bt=null}}}const a=new e,u=new n,f=new r,d=new WeakMap,p=new WeakMap;let m={},v={},S=new WeakMap,x=[],y=null,A=!1,T=null,_=null,g=null,N=null,P=null,D=null,K=null,O=new xt(0,0,0),F=0,re=!1,C=null,E=null,q=null,le=null,H=null;const oe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,me=0;const ge=o.getParameter(o.VERSION);ge.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(ge)[1]),ce=me>=1):ge.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(ge)[1]),ce=me>=2);let k=null,se={};const $=o.getParameter(o.SCISSOR_BOX),I=o.getParameter(o.VIEWPORT),te=new Jt().fromArray($),De=new Jt().fromArray(I);function Y(V,_e,de,Ae){const Pe=new Uint8Array(4),ft=o.createTexture();o.bindTexture(V,ft),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let yt=0;yt<de;yt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(_e,0,o.RGBA,1,1,Ae,0,o.RGBA,o.UNSIGNED_BYTE,Pe):o.texImage2D(_e+yt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pe);return ft}const he={};he[o.TEXTURE_2D]=Y(o.TEXTURE_2D,o.TEXTURE_2D,1),he[o.TEXTURE_CUBE_MAP]=Y(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[o.TEXTURE_2D_ARRAY]=Y(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),he[o.TEXTURE_3D]=Y(o.TEXTURE_3D,o.TEXTURE_3D,1,1),a.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Ee(o.DEPTH_TEST),u.setFunc(dl),lt(!1),tt(kh),Ee(o.CULL_FACE),dt(ur);function Ee(V){m[V]!==!0&&(o.enable(V),m[V]=!0)}function Se(V){m[V]!==!1&&(o.disable(V),m[V]=!1)}function Le(V,_e){return v[V]!==_e?(o.bindFramebuffer(V,_e),v[V]=_e,V===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=_e),V===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=_e),!0):!1}function Oe(V,_e){let de=x,Ae=!1;if(V){de=S.get(_e),de===void 0&&(de=[],S.set(_e,de));const Pe=V.textures;if(de.length!==Pe.length||de[0]!==o.COLOR_ATTACHMENT0){for(let ft=0,yt=Pe.length;ft<yt;ft++)de[ft]=o.COLOR_ATTACHMENT0+ft;de.length=Pe.length,Ae=!0}}else de[0]!==o.BACK&&(de[0]=o.BACK,Ae=!0);Ae&&o.drawBuffers(de)}function G(V){return y!==V?(o.useProgram(V),y=V,!0):!1}const gt={[Or]:o.FUNC_ADD,[Dv]:o.FUNC_SUBTRACT,[Uv]:o.FUNC_REVERSE_SUBTRACT};gt[Nv]=o.MIN,gt[Iv]=o.MAX;const Xe={[Fv]:o.ZERO,[Ov]:o.ONE,[zv]:o.SRC_COLOR,[jc]:o.SRC_ALPHA,[Wv]:o.SRC_ALPHA_SATURATE,[Vv]:o.DST_COLOR,[Bv]:o.DST_ALPHA,[kv]:o.ONE_MINUS_SRC_COLOR,[$c]:o.ONE_MINUS_SRC_ALPHA,[Gv]:o.ONE_MINUS_DST_COLOR,[Hv]:o.ONE_MINUS_DST_ALPHA,[Xv]:o.CONSTANT_COLOR,[Yv]:o.ONE_MINUS_CONSTANT_COLOR,[qv]:o.CONSTANT_ALPHA,[jv]:o.ONE_MINUS_CONSTANT_ALPHA};function dt(V,_e,de,Ae,Pe,ft,yt,At,Bt,vt){if(V===ur){A===!0&&(Se(o.BLEND),A=!1);return}if(A===!1&&(Ee(o.BLEND),A=!0),V!==bv){if(V!==T||vt!==re){if((_!==Or||P!==Or)&&(o.blendEquation(o.FUNC_ADD),_=Or,P=Or),vt)switch(V){case bs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qc:o.blendFunc(o.ONE,o.ONE);break;case Bh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hh:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case bs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case qc:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Bh:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Hh:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}g=null,N=null,D=null,K=null,O.set(0,0,0),F=0,T=V,re=vt}return}Pe=Pe||_e,ft=ft||de,yt=yt||Ae,(_e!==_||Pe!==P)&&(o.blendEquationSeparate(gt[_e],gt[Pe]),_=_e,P=Pe),(de!==g||Ae!==N||ft!==D||yt!==K)&&(o.blendFuncSeparate(Xe[de],Xe[Ae],Xe[ft],Xe[yt]),g=de,N=Ae,D=ft,K=yt),(At.equals(O)===!1||Bt!==F)&&(o.blendColor(At.r,At.g,At.b,Bt),O.copy(At),F=Bt),T=V,re=!1}function Ye(V,_e){V.side===Ri?Se(o.CULL_FACE):Ee(o.CULL_FACE);let de=V.side===An;_e&&(de=!de),lt(de),V.blending===bs&&V.transparent===!1?dt(ur):dt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),a.setMask(V.colorWrite);const Ae=V.stencilWrite;f.setTest(Ae),Ae&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ht(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Ee(o.SAMPLE_ALPHA_TO_COVERAGE):Se(o.SAMPLE_ALPHA_TO_COVERAGE)}function lt(V){C!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),C=V)}function tt(V){V!==Cv?(Ee(o.CULL_FACE),V!==E&&(V===kh?o.cullFace(o.BACK):V===Pv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Se(o.CULL_FACE),E=V}function rt(V){V!==q&&(ce&&o.lineWidth(V),q=V)}function ht(V,_e,de){V?(Ee(o.POLYGON_OFFSET_FILL),(le!==_e||H!==de)&&(o.polygonOffset(_e,de),le=_e,H=de)):Se(o.POLYGON_OFFSET_FILL)}function U(V){V?Ee(o.SCISSOR_TEST):Se(o.SCISSOR_TEST)}function w(V){V===void 0&&(V=o.TEXTURE0+oe-1),k!==V&&(o.activeTexture(V),k=V)}function ne(V,_e,de){de===void 0&&(k===null?de=o.TEXTURE0+oe-1:de=k);let Ae=se[de];Ae===void 0&&(Ae={type:void 0,texture:void 0},se[de]=Ae),(Ae.type!==V||Ae.texture!==_e)&&(k!==de&&(o.activeTexture(de),k=de),o.bindTexture(V,_e||he[V]),Ae.type=V,Ae.texture=_e)}function pe(){const V=se[k];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ae(){try{o.compressedTexImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function L(){try{o.compressedTexImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function fe(){try{o.texSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{o.texSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ie(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{o.texStorage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ze(){try{o.texStorage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qe(){try{o.texImage2D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function We(){try{o.texImage3D.apply(o,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ue(V){te.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),te.copy(V))}function it(V){De.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),De.copy(V))}function ct(V,_e){let de=p.get(_e);de===void 0&&(de=new WeakMap,p.set(_e,de));let Ae=de.get(V);Ae===void 0&&(Ae=o.getUniformBlockIndex(_e,V.name),de.set(V,Ae))}function wt(V,_e){const Ae=p.get(_e).get(V);d.get(_e)!==Ae&&(o.uniformBlockBinding(_e,Ae,V.__bindingPointIndex),d.set(_e,Ae))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),m={},k=null,se={},v={},S=new WeakMap,x=[],y=null,A=!1,T=null,_=null,g=null,N=null,P=null,D=null,K=null,O=new xt(0,0,0),F=0,re=!1,C=null,E=null,q=null,le=null,H=null,te.set(0,0,o.canvas.width,o.canvas.height),De.set(0,0,o.canvas.width,o.canvas.height),a.reset(),u.reset(),f.reset()}return{buffers:{color:a,depth:u,stencil:f},enable:Ee,disable:Se,bindFramebuffer:Le,drawBuffers:Oe,useProgram:G,setBlending:dt,setMaterial:Ye,setFlipSided:lt,setCullFace:tt,setLineWidth:rt,setPolygonOffset:ht,setScissorTest:U,activeTexture:w,bindTexture:ne,unbindTexture:pe,compressedTexImage2D:ae,compressedTexImage3D:L,texImage2D:Qe,texImage3D:We,updateUBOMapping:ct,uniformBlockBinding:wt,texStorage2D:Te,texStorage3D:ze,texSubImage2D:fe,texSubImage3D:ue,compressedTexSubImage2D:ve,compressedTexSubImage3D:Ie,scissor:Ue,viewport:it,reset:nt}}function DM(o,e,n,r,a,u,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Je,v=new WeakMap;let S;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(U,w){return y?new OffscreenCanvas(U,w):vl("canvas")}function T(U,w,ne){let pe=1;const ae=ht(U);if((ae.width>ne||ae.height>ne)&&(pe=ne/Math.max(ae.width,ae.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const L=Math.floor(pe*ae.width),fe=Math.floor(pe*ae.height);S===void 0&&(S=A(L,fe));const ue=w?A(L,fe):S;return ue.width=L,ue.height=fe,ue.getContext("2d").drawImage(U,0,0,L,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+L+"x"+fe+")."),ue}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),U;return U}function _(U){return U.generateMipmaps&&U.minFilter!==wn&&U.minFilter!==pn}function g(U){o.generateMipmap(U)}function N(U,w,ne,pe,ae=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let L=w;if(w===o.RED&&(ne===o.FLOAT&&(L=o.R32F),ne===o.HALF_FLOAT&&(L=o.R16F),ne===o.UNSIGNED_BYTE&&(L=o.R8)),w===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(L=o.R8UI),ne===o.UNSIGNED_SHORT&&(L=o.R16UI),ne===o.UNSIGNED_INT&&(L=o.R32UI),ne===o.BYTE&&(L=o.R8I),ne===o.SHORT&&(L=o.R16I),ne===o.INT&&(L=o.R32I)),w===o.RG&&(ne===o.FLOAT&&(L=o.RG32F),ne===o.HALF_FLOAT&&(L=o.RG16F),ne===o.UNSIGNED_BYTE&&(L=o.RG8)),w===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(L=o.RG8UI),ne===o.UNSIGNED_SHORT&&(L=o.RG16UI),ne===o.UNSIGNED_INT&&(L=o.RG32UI),ne===o.BYTE&&(L=o.RG8I),ne===o.SHORT&&(L=o.RG16I),ne===o.INT&&(L=o.RG32I)),w===o.RGB&&ne===o.UNSIGNED_INT_5_9_9_9_REV&&(L=o.RGB9_E5),w===o.RGBA){const fe=ae?hl:Mt.getTransfer(pe);ne===o.FLOAT&&(L=o.RGBA32F),ne===o.HALF_FLOAT&&(L=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(L=fe===Pt?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT_4_4_4_4&&(L=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(L=o.RGB5_A1)}return(L===o.R16F||L===o.R32F||L===o.RG16F||L===o.RG32F||L===o.RGBA16F||L===o.RGBA32F)&&e.get("EXT_color_buffer_float"),L}function P(U,w){return _(U)===!0||U.isFramebufferTexture&&U.minFilter!==wn&&U.minFilter!==pn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function D(U){const w=U.target;w.removeEventListener("dispose",D),O(w),w.isVideoTexture&&v.delete(w)}function K(U){const w=U.target;w.removeEventListener("dispose",K),re(w)}function O(U){const w=r.get(U);if(w.__webglInit===void 0)return;const ne=U.source,pe=x.get(ne);if(pe){const ae=pe[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&F(U),Object.keys(pe).length===0&&x.delete(ne)}r.remove(U)}function F(U){const w=r.get(U);o.deleteTexture(w.__webglTexture);const ne=U.source,pe=x.get(ne);delete pe[w.__cacheKey],f.memory.textures--}function re(U){const w=r.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ae=0;ae<w.__webglFramebuffer[pe].length;ae++)o.deleteFramebuffer(w.__webglFramebuffer[pe][ae]);else o.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)o.deleteFramebuffer(w.__webglFramebuffer[pe]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const ne=U.textures;for(let pe=0,ae=ne.length;pe<ae;pe++){const L=r.get(ne[pe]);L.__webglTexture&&(o.deleteTexture(L.__webglTexture),f.memory.textures--),r.remove(ne[pe])}r.remove(U)}let C=0;function E(){C=0}function q(){const U=C;return U>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),C+=1,U}function le(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function H(U,w){const ne=r.get(U);if(U.isVideoTexture&&tt(U),U.isRenderTargetTexture===!1&&U.version>0&&ne.__version!==U.version){const pe=U.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(ne,U,w);return}}n.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+w)}function oe(U,w){const ne=r.get(U);if(U.version>0&&ne.__version!==U.version){te(ne,U,w);return}n.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+w)}function ce(U,w){const ne=r.get(U);if(U.version>0&&ne.__version!==U.version){te(ne,U,w);return}n.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+w)}function me(U,w){const ne=r.get(U);if(U.version>0&&ne.__version!==U.version){De(ne,U,w);return}n.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+w)}const ge={[Qc]:o.REPEAT,[ei]:o.CLAMP_TO_EDGE,[Jc]:o.MIRRORED_REPEAT},k={[wn]:o.NEAREST,[f_]:o.NEAREST_MIPMAP_NEAREST,[ka]:o.NEAREST_MIPMAP_LINEAR,[pn]:o.LINEAR,[dc]:o.LINEAR_MIPMAP_NEAREST,[kr]:o.LINEAR_MIPMAP_LINEAR},se={[A_]:o.NEVER,[D_]:o.ALWAYS,[R_]:o.LESS,[Sm]:o.LEQUAL,[C_]:o.EQUAL,[b_]:o.GEQUAL,[P_]:o.GREATER,[L_]:o.NOTEQUAL};function $(U,w){if(w.type===Ci&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===pn||w.magFilter===dc||w.magFilter===ka||w.magFilter===kr||w.minFilter===pn||w.minFilter===dc||w.minFilter===ka||w.minFilter===kr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,ge[w.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,ge[w.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,ge[w.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,k[w.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,k[w.minFilter]),w.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,se[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===wn||w.minFilter!==ka&&w.minFilter!==kr||w.type===Ci&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function I(U,w){let ne=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",D));const pe=w.source;let ae=x.get(pe);ae===void 0&&(ae={},x.set(pe,ae));const L=le(w);if(L!==U.__cacheKey){ae[L]===void 0&&(ae[L]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,ne=!0),ae[L].usedTimes++;const fe=ae[U.__cacheKey];fe!==void 0&&(ae[U.__cacheKey].usedTimes--,fe.usedTimes===0&&F(w)),U.__cacheKey=L,U.__webglTexture=ae[L].texture}return ne}function te(U,w,ne){let pe=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=o.TEXTURE_3D);const ae=I(U,w),L=w.source;n.bindTexture(pe,U.__webglTexture,o.TEXTURE0+ne);const fe=r.get(L);if(L.version!==fe.__version||ae===!0){n.activeTexture(o.TEXTURE0+ne);const ue=Mt.getPrimaries(Mt.workingColorSpace),ve=w.colorSpace===lr?null:Mt.getPrimaries(w.colorSpace),Ie=w.colorSpace===lr||ue===ve?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Te=T(w.image,!1,a.maxTextureSize);Te=rt(w,Te);const ze=u.convert(w.format,w.colorSpace),Qe=u.convert(w.type);let We=N(w.internalFormat,ze,Qe,w.colorSpace,w.isVideoTexture);$(pe,w);let Ue;const it=w.mipmaps,ct=w.isVideoTexture!==!0,wt=fe.__version===void 0||ae===!0,nt=L.dataReady,V=P(w,Te);if(w.isDepthTexture)We=o.DEPTH_COMPONENT16,w.type===Ci?We=o.DEPTH_COMPONENT32F:w.type===Fs?We=o.DEPTH_COMPONENT24:w.type===bo&&(We=o.DEPTH24_STENCIL8),wt&&(ct?n.texStorage2D(o.TEXTURE_2D,1,We,Te.width,Te.height):n.texImage2D(o.TEXTURE_2D,0,We,Te.width,Te.height,0,ze,Qe,null));else if(w.isDataTexture)if(it.length>0){ct&&wt&&n.texStorage2D(o.TEXTURE_2D,V,We,it[0].width,it[0].height);for(let _e=0,de=it.length;_e<de;_e++)Ue=it[_e],ct?nt&&n.texSubImage2D(o.TEXTURE_2D,_e,0,0,Ue.width,Ue.height,ze,Qe,Ue.data):n.texImage2D(o.TEXTURE_2D,_e,We,Ue.width,Ue.height,0,ze,Qe,Ue.data);w.generateMipmaps=!1}else ct?(wt&&n.texStorage2D(o.TEXTURE_2D,V,We,Te.width,Te.height),nt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Te.width,Te.height,ze,Qe,Te.data)):n.texImage2D(o.TEXTURE_2D,0,We,Te.width,Te.height,0,ze,Qe,Te.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ct&&wt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,V,We,it[0].width,it[0].height,Te.depth);for(let _e=0,de=it.length;_e<de;_e++)Ue=it[_e],w.format!==ti?ze!==null?ct?nt&&n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,_e,0,0,0,Ue.width,Ue.height,Te.depth,ze,Ue.data,0,0):n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,_e,We,Ue.width,Ue.height,Te.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?nt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,_e,0,0,0,Ue.width,Ue.height,Te.depth,ze,Qe,Ue.data):n.texImage3D(o.TEXTURE_2D_ARRAY,_e,We,Ue.width,Ue.height,Te.depth,0,ze,Qe,Ue.data)}else{ct&&wt&&n.texStorage2D(o.TEXTURE_2D,V,We,it[0].width,it[0].height);for(let _e=0,de=it.length;_e<de;_e++)Ue=it[_e],w.format!==ti?ze!==null?ct?nt&&n.compressedTexSubImage2D(o.TEXTURE_2D,_e,0,0,Ue.width,Ue.height,ze,Ue.data):n.compressedTexImage2D(o.TEXTURE_2D,_e,We,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?nt&&n.texSubImage2D(o.TEXTURE_2D,_e,0,0,Ue.width,Ue.height,ze,Qe,Ue.data):n.texImage2D(o.TEXTURE_2D,_e,We,Ue.width,Ue.height,0,ze,Qe,Ue.data)}else if(w.isDataArrayTexture)ct?(wt&&n.texStorage3D(o.TEXTURE_2D_ARRAY,V,We,Te.width,Te.height,Te.depth),nt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Te.width,Te.height,Te.depth,ze,Qe,Te.data)):n.texImage3D(o.TEXTURE_2D_ARRAY,0,We,Te.width,Te.height,Te.depth,0,ze,Qe,Te.data);else if(w.isData3DTexture)ct?(wt&&n.texStorage3D(o.TEXTURE_3D,V,We,Te.width,Te.height,Te.depth),nt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Te.width,Te.height,Te.depth,ze,Qe,Te.data)):n.texImage3D(o.TEXTURE_3D,0,We,Te.width,Te.height,Te.depth,0,ze,Qe,Te.data);else if(w.isFramebufferTexture){if(wt)if(ct)n.texStorage2D(o.TEXTURE_2D,V,We,Te.width,Te.height);else{let _e=Te.width,de=Te.height;for(let Ae=0;Ae<V;Ae++)n.texImage2D(o.TEXTURE_2D,Ae,We,_e,de,0,ze,Qe,null),_e>>=1,de>>=1}}else if(it.length>0){if(ct&&wt){const _e=ht(it[0]);n.texStorage2D(o.TEXTURE_2D,V,We,_e.width,_e.height)}for(let _e=0,de=it.length;_e<de;_e++)Ue=it[_e],ct?nt&&n.texSubImage2D(o.TEXTURE_2D,_e,0,0,ze,Qe,Ue):n.texImage2D(o.TEXTURE_2D,_e,We,ze,Qe,Ue);w.generateMipmaps=!1}else if(ct){if(wt){const _e=ht(Te);n.texStorage2D(o.TEXTURE_2D,V,We,_e.width,_e.height)}nt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,ze,Qe,Te)}else n.texImage2D(o.TEXTURE_2D,0,We,ze,Qe,Te);_(w)&&g(pe),fe.__version=L.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function De(U,w,ne){if(w.image.length!==6)return;const pe=I(U,w),ae=w.source;n.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+ne);const L=r.get(ae);if(ae.version!==L.__version||pe===!0){n.activeTexture(o.TEXTURE0+ne);const fe=Mt.getPrimaries(Mt.workingColorSpace),ue=w.colorSpace===lr?null:Mt.getPrimaries(w.colorSpace),ve=w.colorSpace===lr||fe===ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ie=w.isCompressedTexture||w.image[0].isCompressedTexture,Te=w.image[0]&&w.image[0].isDataTexture,ze=[];for(let de=0;de<6;de++)!Ie&&!Te?ze[de]=T(w.image[de],!0,a.maxCubemapSize):ze[de]=Te?w.image[de].image:w.image[de],ze[de]=rt(w,ze[de]);const Qe=ze[0],We=u.convert(w.format,w.colorSpace),Ue=u.convert(w.type),it=N(w.internalFormat,We,Ue,w.colorSpace),ct=w.isVideoTexture!==!0,wt=L.__version===void 0||pe===!0,nt=ae.dataReady;let V=P(w,Qe);$(o.TEXTURE_CUBE_MAP,w);let _e;if(Ie){ct&&wt&&n.texStorage2D(o.TEXTURE_CUBE_MAP,V,it,Qe.width,Qe.height);for(let de=0;de<6;de++){_e=ze[de].mipmaps;for(let Ae=0;Ae<_e.length;Ae++){const Pe=_e[Ae];w.format!==ti?We!==null?ct?nt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,0,0,Pe.width,Pe.height,We,Pe.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,it,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ct?nt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,0,0,Pe.width,Pe.height,We,Ue,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae,it,Pe.width,Pe.height,0,We,Ue,Pe.data)}}}else{if(_e=w.mipmaps,ct&&wt){_e.length>0&&V++;const de=ht(ze[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,V,it,de.width,de.height)}for(let de=0;de<6;de++)if(Te){ct?nt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ze[de].width,ze[de].height,We,Ue,ze[de].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,it,ze[de].width,ze[de].height,0,We,Ue,ze[de].data);for(let Ae=0;Ae<_e.length;Ae++){const ft=_e[Ae].image[de].image;ct?nt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,0,0,ft.width,ft.height,We,Ue,ft.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,it,ft.width,ft.height,0,We,Ue,ft.data)}}else{ct?nt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,We,Ue,ze[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,it,We,Ue,ze[de]);for(let Ae=0;Ae<_e.length;Ae++){const Pe=_e[Ae];ct?nt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,0,0,We,Ue,Pe.image[de]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ae+1,it,We,Ue,Pe.image[de])}}}_(w)&&g(o.TEXTURE_CUBE_MAP),L.__version=ae.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Y(U,w,ne,pe,ae,L){const fe=u.convert(ne.format,ne.colorSpace),ue=u.convert(ne.type),ve=N(ne.internalFormat,fe,ue,ne.colorSpace);if(!r.get(w).__hasExternalTextures){const Te=Math.max(1,w.width>>L),ze=Math.max(1,w.height>>L);ae===o.TEXTURE_3D||ae===o.TEXTURE_2D_ARRAY?n.texImage3D(ae,L,ve,Te,ze,w.depth,0,fe,ue,null):n.texImage2D(ae,L,ve,Te,ze,0,fe,ue,null)}n.bindFramebuffer(o.FRAMEBUFFER,U),lt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ae,r.get(ne).__webglTexture,0,Ye(w)):(ae===o.TEXTURE_2D||ae>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ae,r.get(ne).__webglTexture,L),n.bindFramebuffer(o.FRAMEBUFFER,null)}function he(U,w,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,U),w.depthBuffer&&!w.stencilBuffer){let pe=o.DEPTH_COMPONENT24;if(ne||lt(w)){const ae=w.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Ci?pe=o.DEPTH_COMPONENT32F:ae.type===Fs&&(pe=o.DEPTH_COMPONENT24));const L=Ye(w);lt(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,L,pe,w.width,w.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,L,pe,w.width,w.height)}else o.renderbufferStorage(o.RENDERBUFFER,pe,w.width,w.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,U)}else if(w.depthBuffer&&w.stencilBuffer){const pe=Ye(w);ne&&lt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,pe,o.DEPTH24_STENCIL8,w.width,w.height):lt(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,pe,o.DEPTH24_STENCIL8,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,U)}else{const pe=w.textures;for(let ae=0;ae<pe.length;ae++){const L=pe[ae],fe=u.convert(L.format,L.colorSpace),ue=u.convert(L.type),ve=N(L.internalFormat,fe,ue,L.colorSpace),Ie=Ye(w);ne&&lt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ie,ve,w.width,w.height):lt(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ie,ve,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,ve,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ee(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(o.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),H(w.depthTexture,0);const pe=r.get(w.depthTexture).__webglTexture,ae=Ye(w);if(w.depthTexture.format===Ds)lt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pe,0,ae):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,pe,0);else if(w.depthTexture.format===Po)lt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pe,0,ae):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Se(U){const w=r.get(U),ne=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(ne)throw new Error("target.depthTexture not supported in Cube render targets");Ee(w.__webglFramebuffer,U)}else if(ne){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]=o.createRenderbuffer(),he(w.__webglDepthbuffer[pe],U,!1)}else n.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=o.createRenderbuffer(),he(w.__webglDepthbuffer,U,!1);n.bindFramebuffer(o.FRAMEBUFFER,null)}function Le(U,w,ne){const pe=r.get(U);w!==void 0&&Y(pe.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&Se(U)}function Oe(U){const w=U.texture,ne=r.get(U),pe=r.get(w);U.addEventListener("dispose",K);const ae=U.textures,L=U.isWebGLCubeRenderTarget===!0,fe=ae.length>1;if(fe||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=w.version,f.memory.textures++),L){ne.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer[ue]=[];for(let ve=0;ve<w.mipmaps.length;ve++)ne.__webglFramebuffer[ue][ve]=o.createFramebuffer()}else ne.__webglFramebuffer[ue]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){ne.__webglFramebuffer=[];for(let ue=0;ue<w.mipmaps.length;ue++)ne.__webglFramebuffer[ue]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(fe)for(let ue=0,ve=ae.length;ue<ve;ue++){const Ie=r.get(ae[ue]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=o.createTexture(),f.memory.textures++)}if(U.samples>0&&lt(U)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let ue=0;ue<ae.length;ue++){const ve=ae[ue];ne.__webglColorRenderbuffer[ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[ue]);const Ie=u.convert(ve.format,ve.colorSpace),Te=u.convert(ve.type),ze=N(ve.internalFormat,Ie,Te,ve.colorSpace,U.isXRRenderTarget===!0),Qe=Ye(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qe,ze,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ue,o.RENDERBUFFER,ne.__webglColorRenderbuffer[ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),he(ne.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(L){n.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),$(o.TEXTURE_CUBE_MAP,w);for(let ue=0;ue<6;ue++)if(w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Y(ne.__webglFramebuffer[ue][ve],U,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ve);else Y(ne.__webglFramebuffer[ue],U,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(w)&&g(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ue=0,ve=ae.length;ue<ve;ue++){const Ie=ae[ue],Te=r.get(Ie);n.bindTexture(o.TEXTURE_2D,Te.__webglTexture),$(o.TEXTURE_2D,Ie),Y(ne.__webglFramebuffer,U,Ie,o.COLOR_ATTACHMENT0+ue,o.TEXTURE_2D,0),_(Ie)&&g(o.TEXTURE_2D)}n.unbindTexture()}else{let ue=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ue=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(ue,pe.__webglTexture),$(ue,w),w.mipmaps&&w.mipmaps.length>0)for(let ve=0;ve<w.mipmaps.length;ve++)Y(ne.__webglFramebuffer[ve],U,w,o.COLOR_ATTACHMENT0,ue,ve);else Y(ne.__webglFramebuffer,U,w,o.COLOR_ATTACHMENT0,ue,0);_(w)&&g(ue),n.unbindTexture()}U.depthBuffer&&Se(U)}function G(U){const w=U.textures;for(let ne=0,pe=w.length;ne<pe;ne++){const ae=w[ne];if(_(ae)){const L=U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,fe=r.get(ae).__webglTexture;n.bindTexture(L,fe),g(L),n.unbindTexture()}}}const gt=[],Xe=[];function dt(U){if(U.samples>0){if(lt(U)===!1){const w=U.textures,ne=U.width,pe=U.height;let ae=o.COLOR_BUFFER_BIT;const L=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=r.get(U),ue=w.length>1;if(ue)for(let ve=0;ve<w.length;ve++)n.bindFramebuffer(o.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ve,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,fe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ve,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ve=0;ve<w.length;ve++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ae|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ae|=o.STENCIL_BUFFER_BIT)),ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const Ie=r.get(w[ve]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ie,0)}o.blitFramebuffer(0,0,ne,pe,0,0,ne,pe,ae,o.NEAREST),p===!0&&(gt.length=0,Xe.length=0,gt.push(o.COLOR_ATTACHMENT0+ve),U.depthBuffer&&U.resolveDepthBuffer===!1&&(gt.push(L),Xe.push(L),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xe)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,gt))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ue)for(let ve=0;ve<w.length;ve++){n.bindFramebuffer(o.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ve,o.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const Ie=r.get(w[ve]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,fe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ve,o.TEXTURE_2D,Ie,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const w=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function Ye(U){return Math.min(a.maxSamples,U.samples)}function lt(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function tt(U){const w=f.render.frame;v.get(U)!==w&&(v.set(U,w),U.update())}function rt(U,w){const ne=U.colorSpace,pe=U.format,ae=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ne!==pr&&ne!==lr&&(Mt.getTransfer(ne)===Pt?(pe!==ti||ae!==dr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ne)),w}function ht(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=q,this.resetTextureUnits=E,this.setTexture2D=H,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=me,this.rebindTextures=Le,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=lt}function UM(o,e){function n(r,a=lr){let u;const f=Mt.getTransfer(a);if(r===dr)return o.UNSIGNED_BYTE;if(r===mm)return o.UNSIGNED_SHORT_4_4_4_4;if(r===gm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===p_)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===d_)return o.BYTE;if(r===h_)return o.SHORT;if(r===hm)return o.UNSIGNED_SHORT;if(r===pm)return o.INT;if(r===Fs)return o.UNSIGNED_INT;if(r===Ci)return o.FLOAT;if(r===Lo)return o.HALF_FLOAT;if(r===m_)return o.ALPHA;if(r===g_)return o.RGB;if(r===ti)return o.RGBA;if(r===v_)return o.LUMINANCE;if(r===__)return o.LUMINANCE_ALPHA;if(r===Ds)return o.DEPTH_COMPONENT;if(r===Po)return o.DEPTH_STENCIL;if(r===x_)return o.RED;if(r===vm)return o.RED_INTEGER;if(r===S_)return o.RG;if(r===_m)return o.RG_INTEGER;if(r===xm)return o.RGBA_INTEGER;if(r===hc||r===pc||r===mc||r===gc)if(f===Pt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===hc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===hc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vh||r===Gh||r===Wh||r===Xh)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Vh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Wh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xh)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yh||r===qh||r===jh)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Yh||r===qh)return f===Pt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===jh)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===$h||r===Kh||r===Zh||r===Qh||r===Jh||r===ep||r===tp||r===np||r===ip||r===rp||r===sp||r===op||r===ap||r===lp)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===$h)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kh)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zh)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qh)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jh)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ep)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tp)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===np)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ip)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rp)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sp)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===op)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ap)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===lp)return f===Pt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vc||r===up||r===cp)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===vc)return f===Pt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===up)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===cp)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===y_||r===fp||r===dp||r===hp)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===vc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===fp)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===dp)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hp)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:n}}class NM extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class al extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IM={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const _=n.getJointPose(T,r),g=this._getHandJoint(m,T);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}const v=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],x=v.position.distanceTo(S.position),y=.02,A=.005;m.inputState.pinching&&x>y+A?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=y-A&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(IM)))}return d!==null&&(d.visible=a!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new al;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const FM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OM=`
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

}`;class zM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new mn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}render(e,n){if(this.texture!==null){if(this.mesh===null){const r=n.cameras[0].viewport,a=new Di({vertexShader:FM,fragmentShader:OM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Vn(new Br(20,20),a)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class kM extends zs{constructor(e,n){super();const r=this;let a=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,S=null,x=null,y=null,A=null;const T=new zM,_=n.getContextAttributes();let g=null,N=null;const P=[],D=[],K=new Je;let O=null;const F=new Jn;F.layers.enable(1),F.viewport=new Jt;const re=new Jn;re.layers.enable(2),re.viewport=new Jt;const C=[F,re],E=new NM;E.layers.enable(1),E.layers.enable(2);let q=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let he=P[Y];return he===void 0&&(he=new Wc,P[Y]=he),he.getTargetRaySpace()},this.getControllerGrip=function(Y){let he=P[Y];return he===void 0&&(he=new Wc,P[Y]=he),he.getGripSpace()},this.getHand=function(Y){let he=P[Y];return he===void 0&&(he=new Wc,P[Y]=he),he.getHandSpace()};function H(Y){const he=D.indexOf(Y.inputSource);if(he===-1)return;const Ee=P[he];Ee!==void 0&&(Ee.update(Y.inputSource,Y.frame,m||f),Ee.dispatchEvent({type:Y.type,data:Y.inputSource}))}function oe(){a.removeEventListener("select",H),a.removeEventListener("selectstart",H),a.removeEventListener("selectend",H),a.removeEventListener("squeeze",H),a.removeEventListener("squeezestart",H),a.removeEventListener("squeezeend",H),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",ce);for(let Y=0;Y<P.length;Y++){const he=D[Y];he!==null&&(D[Y]=null,P[Y].disconnect(he))}q=null,le=null,T.reset(),e.setRenderTarget(g),y=null,x=null,S=null,a=null,N=null,De.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(K.width,K.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Y){m=Y},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return S},this.getFrame=function(){return A},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",H),a.addEventListener("selectstart",H),a.addEventListener("selectend",H),a.addEventListener("squeeze",H),a.addEventListener("squeezestart",H),a.addEventListener("squeezeend",H),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",ce),_.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(K),a.renderState.layers===void 0){const he={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(a,n,he),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new hr(y.framebufferWidth,y.framebufferHeight,{format:ti,type:dr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let he=null,Ee=null,Se=null;_.depth&&(Se=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=_.stencil?Po:Ds,Ee=_.stencil?bo:Fs);const Le={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:u};S=new XRWebGLBinding(a,n),x=S.createProjectionLayer(Le),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new hr(x.textureWidth,x.textureHeight,{format:ti,type:dr,depthTexture:new Nm(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await a.requestReferenceSpace(d),De.setContext(a),De.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode};function ce(Y){for(let he=0;he<Y.removed.length;he++){const Ee=Y.removed[he],Se=D.indexOf(Ee);Se>=0&&(D[Se]=null,P[Se].disconnect(Ee))}for(let he=0;he<Y.added.length;he++){const Ee=Y.added[he];let Se=D.indexOf(Ee);if(Se===-1){for(let Oe=0;Oe<P.length;Oe++)if(Oe>=D.length){D.push(Ee),Se=Oe;break}else if(D[Oe]===null){D[Oe]=Ee,Se=Oe;break}if(Se===-1)break}const Le=P[Se];Le&&Le.connect(Ee)}}const me=new ee,ge=new ee;function k(Y,he,Ee){me.setFromMatrixPosition(he.matrixWorld),ge.setFromMatrixPosition(Ee.matrixWorld);const Se=me.distanceTo(ge),Le=he.projectionMatrix.elements,Oe=Ee.projectionMatrix.elements,G=Le[14]/(Le[10]-1),gt=Le[14]/(Le[10]+1),Xe=(Le[9]+1)/Le[5],dt=(Le[9]-1)/Le[5],Ye=(Le[8]-1)/Le[0],lt=(Oe[8]+1)/Oe[0],tt=G*Ye,rt=G*lt,ht=Se/(-Ye+lt),U=ht*-Ye;he.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(U),Y.translateZ(ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const w=G+ht,ne=gt+ht,pe=tt-U,ae=rt+(Se-U),L=Xe*gt/ne*w,fe=dt*gt/ne*w;Y.projectionMatrix.makePerspective(pe,ae,L,fe,w,ne),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function se(Y,he){he===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(he.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;T.texture!==null&&(Y.near=T.depthNear,Y.far=T.depthFar),E.near=re.near=F.near=Y.near,E.far=re.far=F.far=Y.far,(q!==E.near||le!==E.far)&&(a.updateRenderState({depthNear:E.near,depthFar:E.far}),q=E.near,le=E.far,F.near=q,F.far=le,re.near=q,re.far=le,F.updateProjectionMatrix(),re.updateProjectionMatrix(),Y.updateProjectionMatrix());const he=Y.parent,Ee=E.cameras;se(E,he);for(let Se=0;Se<Ee.length;Se++)se(Ee[Se],he);Ee.length===2?k(E,F,re):E.projectionMatrix.copy(F.projectionMatrix),$(Y,E,he)};function $(Y,he,Ee){Ee===null?Y.matrix.copy(he.matrixWorld):(Y.matrix.copy(Ee.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(he.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(he.projectionMatrix),Y.projectionMatrixInverse.copy(he.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ef*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(Y){p=Y,x!==null&&(x.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return T.texture!==null};let I=null;function te(Y,he){if(v=he.getViewerPose(m||f),A=he,v!==null){const Ee=v.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Se=!1;Ee.length!==E.cameras.length&&(E.cameras.length=0,Se=!0);for(let Oe=0;Oe<Ee.length;Oe++){const G=Ee[Oe];let gt=null;if(y!==null)gt=y.getViewport(G);else{const dt=S.getViewSubImage(x,G);gt=dt.viewport,Oe===0&&(e.setRenderTargetTextures(N,dt.colorTexture,x.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(N))}let Xe=C[Oe];Xe===void 0&&(Xe=new Jn,Xe.layers.enable(Oe),Xe.viewport=new Jt,C[Oe]=Xe),Xe.matrix.fromArray(G.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(G.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(gt.x,gt.y,gt.width,gt.height),Oe===0&&(E.matrix.copy(Xe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Se===!0&&E.cameras.push(Xe)}const Le=a.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Oe=S.getDepthInformation(Ee[0]);Oe&&Oe.isValid&&Oe.texture&&T.init(e,Oe,a.renderState)}}for(let Ee=0;Ee<P.length;Ee++){const Se=D[Ee],Le=P[Ee];Se!==null&&Le!==void 0&&Le.update(Se,he,m||f)}T.render(e,E),I&&I(Y,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),A=null}const De=new Um;De.setAnimationLoop(te),this.setAnimationLoop=function(Y){I=Y},this.dispose=function(){}}}const Nr=new bi,BM=new kt;function HM(o,e){function n(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function r(_,g){g.color.getRGB(_.fogColor.value,Lm(o)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function a(_,g,N,P,D){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(_,g):g.isMeshToonMaterial?(u(_,g),S(_,g)):g.isMeshPhongMaterial?(u(_,g),v(_,g)):g.isMeshStandardMaterial?(u(_,g),x(_,g),g.isMeshPhysicalMaterial&&y(_,g,D)):g.isMeshMatcapMaterial?(u(_,g),A(_,g)):g.isMeshDepthMaterial?u(_,g):g.isMeshDistanceMaterial?(u(_,g),T(_,g)):g.isMeshNormalMaterial?u(_,g):g.isLineBasicMaterial?(f(_,g),g.isLineDashedMaterial&&d(_,g)):g.isPointsMaterial?p(_,g,N,P):g.isSpriteMaterial?m(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,n(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===An&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,n(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===An&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,n(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,n(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);const N=e.get(g),P=N.envMap,D=N.envMapRotation;if(P&&(_.envMap.value=P,Nr.copy(D),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),_.envMapRotation.value.setFromMatrix4(BM.makeRotationFromEuler(Nr)),_.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap){_.lightMap.value=g.lightMap;const K=o._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=g.lightMapIntensity*K,n(g.lightMap,_.lightMapTransform)}g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,_.aoMapTransform))}function f(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform))}function d(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function p(_,g,N,P){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*N,_.scale.value=P*.5,g.map&&(_.map.value=g.map,n(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function m(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,n(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,n(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function v(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function S(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function x(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function y(_,g,N){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===An&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=N.texture,_.transmissionSamplerSize.value.set(N.width,N.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,_.specularIntensityMapTransform))}function A(_,g){g.matcap&&(_.matcap.value=g.matcap)}function T(_,g){const N=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(N.matrixWorld),_.nearDistance.value=N.shadow.camera.near,_.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function VM(o,e,n,r){let a={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,P){const D=P.program;r.uniformBlockBinding(N,D)}function m(N,P){let D=a[N.id];D===void 0&&(A(N),D=v(N),a[N.id]=D,N.addEventListener("dispose",_));const K=P.program;r.updateUBOMapping(N,K);const O=e.render.frame;u[N.id]!==O&&(x(N),u[N.id]=O)}function v(N){const P=S();N.__bindingPointIndex=P;const D=o.createBuffer(),K=N.__size,O=N.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,K,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,P,D),D}function S(){for(let N=0;N<d;N++)if(f.indexOf(N)===-1)return f.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const P=a[N.id],D=N.uniforms,K=N.__cache;o.bindBuffer(o.UNIFORM_BUFFER,P);for(let O=0,F=D.length;O<F;O++){const re=Array.isArray(D[O])?D[O]:[D[O]];for(let C=0,E=re.length;C<E;C++){const q=re[C];if(y(q,O,C,K)===!0){const le=q.__offset,H=Array.isArray(q.value)?q.value:[q.value];let oe=0;for(let ce=0;ce<H.length;ce++){const me=H[ce],ge=T(me);typeof me=="number"||typeof me=="boolean"?(q.__data[0]=me,o.bufferSubData(o.UNIFORM_BUFFER,le+oe,q.__data)):me.isMatrix3?(q.__data[0]=me.elements[0],q.__data[1]=me.elements[1],q.__data[2]=me.elements[2],q.__data[3]=0,q.__data[4]=me.elements[3],q.__data[5]=me.elements[4],q.__data[6]=me.elements[5],q.__data[7]=0,q.__data[8]=me.elements[6],q.__data[9]=me.elements[7],q.__data[10]=me.elements[8],q.__data[11]=0):(me.toArray(q.__data,oe),oe+=ge.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,le,q.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(N,P,D,K){const O=N.value,F=P+"_"+D;if(K[F]===void 0)return typeof O=="number"||typeof O=="boolean"?K[F]=O:K[F]=O.clone(),!0;{const re=K[F];if(typeof O=="number"||typeof O=="boolean"){if(re!==O)return K[F]=O,!0}else if(re.equals(O)===!1)return re.copy(O),!0}return!1}function A(N){const P=N.uniforms;let D=0;const K=16;for(let F=0,re=P.length;F<re;F++){const C=Array.isArray(P[F])?P[F]:[P[F]];for(let E=0,q=C.length;E<q;E++){const le=C[E],H=Array.isArray(le.value)?le.value:[le.value];for(let oe=0,ce=H.length;oe<ce;oe++){const me=H[oe],ge=T(me),k=D%K;k!==0&&K-k<ge.boundary&&(D+=K-k),le.__data=new Float32Array(ge.storage/Float32Array.BYTES_PER_ELEMENT),le.__offset=D,D+=ge.storage}}}const O=D%K;return O>0&&(D+=K-O),N.__size=D,N.__cache={},this}function T(N){const P={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(P.boundary=4,P.storage=4):N.isVector2?(P.boundary=8,P.storage=8):N.isVector3||N.isColor?(P.boundary=16,P.storage=12):N.isVector4?(P.boundary=16,P.storage=16):N.isMatrix3?(P.boundary=48,P.storage=48):N.isMatrix4?(P.boundary=64,P.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),P}function _(N){const P=N.target;P.removeEventListener("dispose",_);const D=f.indexOf(P.__bindingPointIndex);f.splice(D,1),o.deleteBuffer(a[P.id]),delete a[P.id],delete u[P.id]}function g(){for(const N in a)o.deleteBuffer(a[N]);f=[],a={},u={}}return{bind:p,update:m,dispose:g}}class GM{constructor(e={}){const{canvas:n=N_(),context:r=null,depth:a=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const y=new Uint32Array(4),A=new Int32Array(4);let T=null,_=null;const g=[],N=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this._useLegacyLights=!1,this.toneMapping=cr,this.toneMappingExposure=1;const P=this;let D=!1,K=0,O=0,F=null,re=-1,C=null;const E=new Jt,q=new Jt;let le=null;const H=new xt(0);let oe=0,ce=n.width,me=n.height,ge=1,k=null,se=null;const $=new Jt(0,0,ce,me),I=new Jt(0,0,ce,me);let te=!1;const De=new Dm;let Y=!1,he=!1;const Ee=new kt,Se=new ee,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Oe(){return F===null?ge:1}let G=r;function gt(R,W){return n.getContext(R,W)}try{const R={alpha:!0,depth:a,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rf}`),n.addEventListener("webglcontextlost",V,!1),n.addEventListener("webglcontextrestored",_e,!1),n.addEventListener("webglcontextcreationerror",de,!1),G===null){const W="webgl2";if(G=gt(W,R),G===null)throw gt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Xe,dt,Ye,lt,tt,rt,ht,U,w,ne,pe,ae,L,fe,ue,ve,Ie,Te,ze,Qe,We,Ue,it,ct;function wt(){Xe=new ZS(G),Xe.init(),Ue=new UM(G,Xe),dt=new WS(G,Xe,e,Ue),Ye=new bM(G),lt=new ey(G),tt=new vM,rt=new DM(G,Xe,Ye,tt,dt,Ue,lt),ht=new YS(P),U=new KS(P),w=new o0(G),it=new VS(G,w),ne=new QS(G,w,lt,it),pe=new ny(G,ne,w,lt),ze=new ty(G,dt,rt),ve=new XS(tt),ae=new gM(P,ht,U,Xe,dt,it,ve),L=new HM(P,tt),fe=new xM,ue=new wM(Xe),Te=new HS(P,ht,U,Ye,pe,x,p),Ie=new LM(P,pe,dt),ct=new VM(G,lt,dt,Ye),Qe=new GS(G,Xe,lt),We=new JS(G,Xe,lt),lt.programs=ae.programs,P.capabilities=dt,P.extensions=Xe,P.properties=tt,P.renderLists=fe,P.shadowMap=Ie,P.state=Ye,P.info=lt}wt();const nt=new kM(P,G);this.xr=nt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const R=Xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(R){R!==void 0&&(ge=R,this.setSize(ce,me,!1))},this.getSize=function(R){return R.set(ce,me)},this.setSize=function(R,W,ie=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=R,me=W,n.width=Math.floor(R*ge),n.height=Math.floor(W*ge),ie===!0&&(n.style.width=R+"px",n.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(ce*ge,me*ge).floor()},this.setDrawingBufferSize=function(R,W,ie){ce=R,me=W,ge=ie,n.width=Math.floor(R*ie),n.height=Math.floor(W*ie),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(E)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,W,ie,Q){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,W,ie,Q),Ye.viewport(E.copy($).multiplyScalar(ge).round())},this.getScissor=function(R){return R.copy(I)},this.setScissor=function(R,W,ie,Q){R.isVector4?I.set(R.x,R.y,R.z,R.w):I.set(R,W,ie,Q),Ye.scissor(q.copy(I).multiplyScalar(ge).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(R){Ye.setScissorTest(te=R)},this.setOpaqueSort=function(R){k=R},this.setTransparentSort=function(R){se=R},this.getClearColor=function(R){return R.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(R=!0,W=!0,ie=!0){let Q=0;if(R){let Z=!1;if(F!==null){const Re=F.texture.format;Z=Re===xm||Re===_m||Re===vm}if(Z){const Re=F.texture.type,He=Re===dr||Re===Fs||Re===hm||Re===bo||Re===mm||Re===gm,Ge=Te.getClearColor(),$e=Te.getClearAlpha(),et=Ge.r,ke=Ge.g,st=Ge.b;He?(y[0]=et,y[1]=ke,y[2]=st,y[3]=$e,G.clearBufferuiv(G.COLOR,0,y)):(A[0]=et,A[1]=ke,A[2]=st,A[3]=$e,G.clearBufferiv(G.COLOR,0,A))}else Q|=G.COLOR_BUFFER_BIT}W&&(Q|=G.DEPTH_BUFFER_BIT),ie&&(Q|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",V,!1),n.removeEventListener("webglcontextrestored",_e,!1),n.removeEventListener("webglcontextcreationerror",de,!1),fe.dispose(),ue.dispose(),tt.dispose(),ht.dispose(),U.dispose(),pe.dispose(),it.dispose(),ct.dispose(),ae.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",vt),nt.removeEventListener("sessionend",gn),qt.stop()};function V(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const R=lt.autoReset,W=Ie.enabled,ie=Ie.autoUpdate,Q=Ie.needsUpdate,Z=Ie.type;wt(),lt.autoReset=R,Ie.enabled=W,Ie.autoUpdate=ie,Ie.needsUpdate=Q,Ie.type=Z}function de(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ae(R){const W=R.target;W.removeEventListener("dispose",Ae),Pe(W)}function Pe(R){ft(R),tt.remove(R)}function ft(R){const W=tt.get(R).programs;W!==void 0&&(W.forEach(function(ie){ae.releaseProgram(ie)}),R.isShaderMaterial&&ae.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,ie,Q,Z,Re){W===null&&(W=Le);const He=Z.isMesh&&Z.matrixWorld.determinant()<0,Ge=wl(R,W,ie,Q,Z);Ye.setMaterial(Q,He);let $e=ie.index,et=1;if(Q.wireframe===!0){if($e=ne.getWireframeAttribute(ie),$e===void 0)return;et=2}const ke=ie.drawRange,st=ie.attributes.position;let Lt=ke.start*et,Ht=(ke.start+ke.count)*et;Re!==null&&(Lt=Math.max(Lt,Re.start*et),Ht=Math.min(Ht,(Re.start+Re.count)*et)),$e!==null?(Lt=Math.max(Lt,0),Ht=Math.min(Ht,$e.count)):st!=null&&(Lt=Math.max(Lt,0),Ht=Math.min(Ht,st.count));const jt=Ht-Lt;if(jt<0||jt===1/0)return;it.setup(Z,Q,Ge,ie,$e);let Gn,pt=Qe;if($e!==null&&(Gn=w.get($e),pt=We,pt.setIndex(Gn)),Z.isMesh)Q.wireframe===!0?(Ye.setLineWidth(Q.wireframeLinewidth*Oe()),pt.setMode(G.LINES)):pt.setMode(G.TRIANGLES);else if(Z.isLine){let Ke=Q.linewidth;Ke===void 0&&(Ke=1),Ye.setLineWidth(Ke*Oe()),Z.isLineSegments?pt.setMode(G.LINES):Z.isLineLoop?pt.setMode(G.LINE_LOOP):pt.setMode(G.LINE_STRIP)}else Z.isPoints?pt.setMode(G.POINTS):Z.isSprite&&pt.setMode(G.TRIANGLES);if(Z.isBatchedMesh)Z._multiDrawInstances!==null?pt.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances):pt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)pt.renderInstances(Lt,jt,Z.count);else if(ie.isInstancedBufferGeometry){const Ke=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,rn=Math.min(ie.instanceCount,Ke);pt.renderInstances(Lt,jt,rn)}else pt.render(Lt,jt)};function yt(R,W,ie){R.transparent===!0&&R.side===Ri&&R.forceSinglePass===!1?(R.side=An,R.needsUpdate=!0,fi(R,W,ie),R.side=fr,R.needsUpdate=!0,fi(R,W,ie),R.side=Ri):fi(R,W,ie)}this.compile=function(R,W,ie=null){ie===null&&(ie=R),_=ue.get(ie),_.init(W),N.push(_),ie.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),R!==ie&&R.traverseVisible(function(Z){Z.isLight&&Z.layers.test(W.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights(P._useLegacyLights);const Q=new Set;return R.traverse(function(Z){const Re=Z.material;if(Re)if(Array.isArray(Re))for(let He=0;He<Re.length;He++){const Ge=Re[He];yt(Ge,ie,Z),Q.add(Ge)}else yt(Re,ie,Z),Q.add(Re)}),N.pop(),_=null,Q},this.compileAsync=function(R,W,ie=null){const Q=this.compile(R,W,ie);return new Promise(Z=>{function Re(){if(Q.forEach(function(He){tt.get(He).currentProgram.isReady()&&Q.delete(He)}),Q.size===0){Z(R);return}setTimeout(Re,10)}Xe.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let At=null;function Bt(R){At&&At(R)}function vt(){qt.stop()}function gn(){qt.start()}const qt=new Um;qt.setAnimationLoop(Bt),typeof self<"u"&&qt.setContext(self),this.setAnimationLoop=function(R){At=R,nt.setAnimationLoop(R),R===null?qt.stop():qt.start()},nt.addEventListener("sessionstart",vt),nt.addEventListener("sessionend",gn),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(W),W=nt.getCamera()),R.isScene===!0&&R.onBeforeRender(P,R,W,F),_=ue.get(R,N.length),_.init(W),N.push(_),Ee.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),De.setFromProjectionMatrix(Ee),he=this.localClippingEnabled,Y=ve.init(this.clippingPlanes,he),T=fe.get(R,g.length),T.init(),g.push(T),Ni(R,W,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(k,se);const ie=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1;ie&&Te.addToRenderList(T,R),this.info.render.frame++,Y===!0&&ve.beginShadows();const Q=_.state.shadowsArray;Ie.render(Q,R,W),Y===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=T.opaque,Re=T.transmissive;if(_.setupLights(P._useLegacyLights),W.isArrayCamera){const He=W.cameras;if(Re.length>0)for(let Ge=0,$e=He.length;Ge<$e;Ge++){const et=He[Ge];Ii(Z,Re,R,et)}ie&&Te.render(R);for(let Ge=0,$e=He.length;Ge<$e;Ge++){const et=He[Ge];Hr(T,R,et,et.viewport)}}else Re.length>0&&Ii(Z,Re,R,W),ie&&Te.render(R),Hr(T,R,W);F!==null&&(rt.updateMultisampleRenderTarget(F),rt.updateRenderTargetMipmap(F)),R.isScene===!0&&R.onAfterRender(P,R,W),it.resetDefaultState(),re=-1,C=null,N.pop(),N.length>0?(_=N[N.length-1],Y===!0&&ve.setGlobalState(P.clippingPlanes,_.state.camera)):_=null,g.pop(),g.length>0?T=g[g.length-1]:T=null};function Ni(R,W,ie,Q){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||De.intersectsSprite(R)){Q&&Se.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ee);const He=pe.update(R),Ge=R.material;Ge.visible&&T.push(R,He,Ge,ie,Se.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||De.intersectsObject(R))){const He=pe.update(R),Ge=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Se.copy(R.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Se.copy(He.boundingSphere.center)),Se.applyMatrix4(R.matrixWorld).applyMatrix4(Ee)),Array.isArray(Ge)){const $e=He.groups;for(let et=0,ke=$e.length;et<ke;et++){const st=$e[et],Lt=Ge[st.materialIndex];Lt&&Lt.visible&&T.push(R,He,Lt,ie,Se.z,st)}}else Ge.visible&&T.push(R,He,Ge,ie,Se.z,null)}}const Re=R.children;for(let He=0,Ge=Re.length;He<Ge;He++)Ni(Re[He],W,ie,Q)}function Hr(R,W,ie,Q){const Z=R.opaque,Re=R.transmissive,He=R.transparent;_.setupLightsView(ie),Y===!0&&ve.setGlobalState(P.clippingPlanes,ie),Q&&Ye.viewport(E.copy(Q)),Z.length>0&&Vr(Z,W,ie),Re.length>0&&Vr(Re,W,ie),He.length>0&&Vr(He,W,ie),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Ii(R,W,ie,Q){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Q.id]===void 0&&(_.state.transmissionRenderTarget[Q.id]=new hr(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Lo:dr,minFilter:kr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Re=_.state.transmissionRenderTarget[Q.id],He=Q.viewport||E;Re.setSize(He.z,He.w);const Ge=P.getRenderTarget();P.setRenderTarget(Re),P.getClearColor(H),oe=P.getClearAlpha(),oe<1&&P.setClearColor(16777215,.5),P.clear();const $e=P.toneMapping;P.toneMapping=cr;const et=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),_.setupLightsView(Q),Y===!0&&ve.setGlobalState(P.clippingPlanes,Q),Vr(R,ie,Q),rt.updateMultisampleRenderTarget(Re),rt.updateRenderTargetMipmap(Re),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let st=0,Lt=W.length;st<Lt;st++){const Ht=W[st],jt=Ht.object,Gn=Ht.geometry,pt=Ht.material,Ke=Ht.group;if(pt.side===Ri&&jt.layers.test(Q.layers)){const rn=pt.side;pt.side=An,pt.needsUpdate=!0,Fi(jt,ie,Q,Gn,pt,Ke),pt.side=rn,pt.needsUpdate=!0,ke=!0}}ke===!0&&(rt.updateMultisampleRenderTarget(Re),rt.updateRenderTargetMipmap(Re))}P.setRenderTarget(Ge),P.setClearColor(H,oe),et!==void 0&&(Q.viewport=et),P.toneMapping=$e}function Vr(R,W,ie){const Q=W.isScene===!0?W.overrideMaterial:null;for(let Z=0,Re=R.length;Z<Re;Z++){const He=R[Z],Ge=He.object,$e=He.geometry,et=Q===null?He.material:Q,ke=He.group;Ge.layers.test(ie.layers)&&Fi(Ge,W,ie,$e,et,ke)}}function Fi(R,W,ie,Q,Z,Re){R.onBeforeRender(P,W,ie,Q,Z,Re),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Z.onBeforeRender(P,W,ie,Q,R,Re),Z.transparent===!0&&Z.side===Ri&&Z.forceSinglePass===!1?(Z.side=An,Z.needsUpdate=!0,P.renderBufferDirect(ie,W,Q,Z,R,Re),Z.side=fr,Z.needsUpdate=!0,P.renderBufferDirect(ie,W,Q,Z,R,Re),Z.side=Ri):P.renderBufferDirect(ie,W,Q,Z,R,Re),R.onAfterRender(P,W,ie,Q,Z,Re)}function fi(R,W,ie){W.isScene!==!0&&(W=Le);const Q=tt.get(R),Z=_.state.lights,Re=_.state.shadowsArray,He=Z.state.version,Ge=ae.getParameters(R,Z.state,Re,W,ie),$e=ae.getProgramCacheKey(Ge);let et=Q.programs;Q.environment=R.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(R.isMeshStandardMaterial?U:ht).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",Ae),et=new Map,Q.programs=et);let ke=et.get($e);if(ke!==void 0){if(Q.currentProgram===ke&&Q.lightsStateVersion===He)return Gr(R,Ge),ke}else Ge.uniforms=ae.getUniforms(R),R.onBuild(ie,Ge,P),R.onBeforeCompile(Ge,P),ke=ae.acquireProgram(Ge,$e),et.set($e,ke),Q.uniforms=Ge.uniforms;const st=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=ve.uniform),Gr(R,Ge),Q.needsLights=Rl(R),Q.lightsStateVersion=He,Q.needsLights&&(st.ambientLightColor.value=Z.state.ambient,st.lightProbe.value=Z.state.probe,st.directionalLights.value=Z.state.directional,st.directionalLightShadows.value=Z.state.directionalShadow,st.spotLights.value=Z.state.spot,st.spotLightShadows.value=Z.state.spotShadow,st.rectAreaLights.value=Z.state.rectArea,st.ltc_1.value=Z.state.rectAreaLTC1,st.ltc_2.value=Z.state.rectAreaLTC2,st.pointLights.value=Z.state.point,st.pointLightShadows.value=Z.state.pointShadow,st.hemisphereLights.value=Z.state.hemi,st.directionalShadowMap.value=Z.state.directionalShadowMap,st.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,st.spotShadowMap.value=Z.state.spotShadowMap,st.spotLightMatrix.value=Z.state.spotLightMatrix,st.spotLightMap.value=Z.state.spotLightMap,st.pointShadowMap.value=Z.state.pointShadowMap,st.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=ke,Q.uniformsList=null,ke}function mr(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=fl.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Gr(R,W){const ie=tt.get(R);ie.outputColorSpace=W.outputColorSpace,ie.batching=W.batching,ie.instancing=W.instancing,ie.instancingColor=W.instancingColor,ie.instancingMorph=W.instancingMorph,ie.skinning=W.skinning,ie.morphTargets=W.morphTargets,ie.morphNormals=W.morphNormals,ie.morphColors=W.morphColors,ie.morphTargetsCount=W.morphTargetsCount,ie.numClippingPlanes=W.numClippingPlanes,ie.numIntersection=W.numClipIntersection,ie.vertexAlphas=W.vertexAlphas,ie.vertexTangents=W.vertexTangents,ie.toneMapping=W.toneMapping}function wl(R,W,ie,Q,Z){W.isScene!==!0&&(W=Le),rt.resetTextureUnits();const Re=W.fog,He=Q.isMeshStandardMaterial?W.environment:null,Ge=F===null?P.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:pr,$e=(Q.isMeshStandardMaterial?U:ht).get(Q.envMap||He),et=Q.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ke=!!ie.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),st=!!ie.morphAttributes.position,Lt=!!ie.morphAttributes.normal,Ht=!!ie.morphAttributes.color;let jt=cr;Q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(jt=P.toneMapping);const Gn=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,pt=Gn!==void 0?Gn.length:0,Ke=tt.get(Q),rn=_.state.lights;if(Y===!0&&(he===!0||R!==C)){const en=R===C&&Q.id===re;ve.setState(Q,R,en)}let Et=!1;Q.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==rn.state.version||Ke.outputColorSpace!==Ge||Z.isBatchedMesh&&Ke.batching===!1||!Z.isBatchedMesh&&Ke.batching===!0||Z.isInstancedMesh&&Ke.instancing===!1||!Z.isInstancedMesh&&Ke.instancing===!0||Z.isSkinnedMesh&&Ke.skinning===!1||!Z.isSkinnedMesh&&Ke.skinning===!0||Z.isInstancedMesh&&Ke.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ke.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ke.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ke.instancingMorph===!1&&Z.morphTexture!==null||Ke.envMap!==$e||Q.fog===!0&&Ke.fog!==Re||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==ve.numPlanes||Ke.numIntersection!==ve.numIntersection)||Ke.vertexAlphas!==et||Ke.vertexTangents!==ke||Ke.morphTargets!==st||Ke.morphNormals!==Lt||Ke.morphColors!==Ht||Ke.toneMapping!==jt||Ke.morphTargetsCount!==pt)&&(Et=!0):(Et=!0,Ke.__version=Q.version);let Vt=Ke.currentProgram;Et===!0&&(Vt=fi(Q,W,Z));let Oo=!1,gr=!1,Bs=!1;const It=Vt.getUniforms(),Cn=Ke.uniforms;if(Ye.useProgram(Vt.program)&&(Oo=!0,gr=!0,Bs=!0),Q.id!==re&&(re=Q.id,gr=!0),Oo||C!==R){It.setValue(G,"projectionMatrix",R.projectionMatrix),It.setValue(G,"viewMatrix",R.matrixWorldInverse);const en=It.map.cameraPosition;en!==void 0&&en.setValue(G,Se.setFromMatrixPosition(R.matrixWorld)),dt.logarithmicDepthBuffer&&It.setValue(G,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&It.setValue(G,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,gr=!0,Bs=!0)}if(Z.isSkinnedMesh){It.setOptional(G,Z,"bindMatrix"),It.setOptional(G,Z,"bindMatrixInverse");const en=Z.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),It.setValue(G,"boneTexture",en.boneTexture,rt))}Z.isBatchedMesh&&(It.setOptional(G,Z,"batchingTexture"),It.setValue(G,"batchingTexture",Z._matricesTexture,rt));const di=ie.morphAttributes;if((di.position!==void 0||di.normal!==void 0||di.color!==void 0)&&ze.update(Z,ie,Vt),(gr||Ke.receiveShadow!==Z.receiveShadow)&&(Ke.receiveShadow=Z.receiveShadow,It.setValue(G,"receiveShadow",Z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Cn.envMap.value=$e,Cn.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Cn.envMapIntensity.value=W.environmentIntensity),gr&&(It.setValue(G,"toneMappingExposure",P.toneMappingExposure),Ke.needsLights&&Al(Cn,Bs),Re&&Q.fog===!0&&L.refreshFogUniforms(Cn,Re),L.refreshMaterialUniforms(Cn,Q,ge,me,_.state.transmissionRenderTarget[R.id]),fl.upload(G,mr(Ke),Cn,rt)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(fl.upload(G,mr(Ke),Cn,rt),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&It.setValue(G,"center",Z.center),It.setValue(G,"modelViewMatrix",Z.modelViewMatrix),It.setValue(G,"normalMatrix",Z.normalMatrix),It.setValue(G,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const en=Q.uniformsGroups;for(let Hs=0,Cl=en.length;Hs<Cl;Hs++){const Wr=en[Hs];ct.update(Wr,Vt),ct.bind(Wr,Vt)}}return Vt}function Al(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Rl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(R,W,ie){tt.get(R.texture).__webglTexture=W,tt.get(R.depthTexture).__webglTexture=ie;const Q=tt.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=ie===void 0,Q.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,W){const ie=tt.get(R);ie.__webglFramebuffer=W,ie.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,ie=0){F=R,K=W,O=ie;let Q=!0,Z=null,Re=!1,He=!1;if(R){const $e=tt.get(R);$e.__useDefaultFramebuffer!==void 0?(Ye.bindFramebuffer(G.FRAMEBUFFER,null),Q=!1):$e.__webglFramebuffer===void 0?rt.setupRenderTarget(R):$e.__hasExternalTextures&&rt.rebindTextures(R,tt.get(R.texture).__webglTexture,tt.get(R.depthTexture).__webglTexture);const et=R.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(He=!0);const ke=tt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ke[W])?Z=ke[W][ie]:Z=ke[W],Re=!0):R.samples>0&&rt.useMultisampledRTT(R)===!1?Z=tt.get(R).__webglMultisampledFramebuffer:Array.isArray(ke)?Z=ke[ie]:Z=ke,E.copy(R.viewport),q.copy(R.scissor),le=R.scissorTest}else E.copy($).multiplyScalar(ge).floor(),q.copy(I).multiplyScalar(ge).floor(),le=te;if(Ye.bindFramebuffer(G.FRAMEBUFFER,Z)&&Q&&Ye.drawBuffers(R,Z),Ye.viewport(E),Ye.scissor(q),Ye.setScissorTest(le),Re){const $e=tt.get(R.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,$e.__webglTexture,ie)}else if(He){const $e=tt.get(R.texture),et=W||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,$e.__webglTexture,ie||0,et)}re=-1},this.readRenderTargetPixels=function(R,W,ie,Q,Z,Re,He){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=tt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&He!==void 0&&(Ge=Ge[He]),Ge){Ye.bindFramebuffer(G.FRAMEBUFFER,Ge);try{const $e=R.texture,et=$e.format,ke=$e.type;if(!dt.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-Q&&ie>=0&&ie<=R.height-Z&&G.readPixels(W,ie,Q,Z,Ue.convert(et),Ue.convert(ke),Re)}finally{const $e=F!==null?tt.get(F).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,$e)}}},this.copyFramebufferToTexture=function(R,W,ie=0){const Q=Math.pow(2,-ie),Z=Math.floor(W.image.width*Q),Re=Math.floor(W.image.height*Q);rt.setTexture2D(W,0),G.copyTexSubImage2D(G.TEXTURE_2D,ie,0,0,R.x,R.y,Z,Re),Ye.unbindTexture()},this.copyTextureToTexture=function(R,W,ie,Q=0){const Z=W.image.width,Re=W.image.height,He=Ue.convert(ie.format),Ge=Ue.convert(ie.type);rt.setTexture2D(ie,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,ie.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,ie.unpackAlignment),W.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Q,R.x,R.y,Z,Re,He,Ge,W.image.data):W.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Q,R.x,R.y,W.mipmaps[0].width,W.mipmaps[0].height,He,W.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,Q,R.x,R.y,He,Ge,W.image),Q===0&&ie.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(R,W,ie,Q,Z=0){const Re=R.max.x-R.min.x,He=R.max.y-R.min.y,Ge=R.max.z-R.min.z,$e=Ue.convert(Q.format),et=Ue.convert(Q.type);let ke;if(Q.isData3DTexture)rt.setTexture3D(Q,0),ke=G.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)rt.setTexture2DArray(Q,0),ke=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,Q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,Q.unpackAlignment);const st=G.getParameter(G.UNPACK_ROW_LENGTH),Lt=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ht=G.getParameter(G.UNPACK_SKIP_PIXELS),jt=G.getParameter(G.UNPACK_SKIP_ROWS),Gn=G.getParameter(G.UNPACK_SKIP_IMAGES),pt=ie.isCompressedTexture?ie.mipmaps[Z]:ie.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,pt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,pt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,R.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,R.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,R.min.z),ie.isDataTexture||ie.isData3DTexture?G.texSubImage3D(ke,Z,W.x,W.y,W.z,Re,He,Ge,$e,et,pt.data):Q.isCompressedArrayTexture?G.compressedTexSubImage3D(ke,Z,W.x,W.y,W.z,Re,He,Ge,$e,pt.data):G.texSubImage3D(ke,Z,W.x,W.y,W.z,Re,He,Ge,$e,et,pt),G.pixelStorei(G.UNPACK_ROW_LENGTH,st),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Lt),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ht),G.pixelStorei(G.UNPACK_SKIP_ROWS,jt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Gn),Z===0&&Q.generateMipmaps&&G.generateMipmap(ke),Ye.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?rt.setTextureCube(R,0):R.isData3DTexture?rt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?rt.setTexture2DArray(R,0):rt.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){K=0,O=0,F=null,Ye.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sf?"display-p3":"srgb",n.unpackColorSpace=Mt.workingColorSpace===Ml?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rm extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class WM extends mn{constructor(e=null,n=1,r=1,a,u,f,d,p,m=wn,v=wn,S,x){super(null,f,d,p,m,v,a,u,S,x),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class XM extends Io{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xl=new ee,Sl=new ee,sm=new kt,Ro=new Tm,ll=new El,Xc=new ee,om=new ee;class YM extends Rn{constructor(e=new Ui,n=new XM){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[0];for(let a=1,u=n.count;a<u;a++)xl.fromBufferAttribute(n,a-1),Sl.fromBufferAttribute(n,a),r[a]=r[a-1],r[a]+=xl.distanceTo(Sl);e.setAttribute("lineDistance",new Li(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const r=this.geometry,a=this.matrixWorld,u=e.params.Line.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),ll.copy(r.boundingSphere),ll.applyMatrix4(a),ll.radius+=u,e.ray.intersectsSphere(ll)===!1)return;sm.copy(a).invert(),Ro.copy(e.ray).applyMatrix4(sm);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=r.index,x=r.attributes.position;if(v!==null){const y=Math.max(0,f.start),A=Math.min(v.count,f.start+f.count);for(let T=y,_=A-1;T<_;T+=m){const g=v.getX(T),N=v.getX(T+1),P=ul(this,e,Ro,p,g,N);P&&n.push(P)}if(this.isLineLoop){const T=v.getX(A-1),_=v.getX(y),g=ul(this,e,Ro,p,T,_);g&&n.push(g)}}else{const y=Math.max(0,f.start),A=Math.min(x.count,f.start+f.count);for(let T=y,_=A-1;T<_;T+=m){const g=ul(this,e,Ro,p,T,T+1);g&&n.push(g)}if(this.isLineLoop){const T=ul(this,e,Ro,p,A-1,y);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=a.length;u<f;u++){const d=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function ul(o,e,n,r,a,u){const f=o.geometry.attributes.position;if(xl.fromBufferAttribute(f,a),Sl.fromBufferAttribute(f,u),n.distanceSqToSegment(xl,Sl,Xc,om)>r)return;Xc.applyMatrix4(o.matrixWorld);const p=e.ray.origin.distanceTo(Xc);if(!(p<e.near||p>e.far))return{distance:p,point:om.clone().applyMatrix4(o.matrixWorld),index:a,face:null,faceIndex:null,object:o}}const am=new ee,lm=new ee;class qM extends YM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,r=[];for(let a=0,u=n.count;a<u;a+=2)am.fromBufferAttribute(n,a),lm.fromBufferAttribute(n,a+1),r[a]=a===0?0:r[a-1],r[a+1]=r[a]+am.distanceTo(lm);e.setAttribute("lineDistance",new Li(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cl extends Di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=um(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=um();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function um(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rf);function $M({mouseForce:o=20,cursorSize:e=100,isViscous:n=!1,viscous:r=30,iterationsViscous:a=32,iterationsPoisson:u=32,dt:f=.014,BFECC:d=!0,resolution:p=.5,isBounce:m=!1,colors:v=["#5227FF","#FF9FFC","#B19EEF"],style:S={},className:x="",autoDemo:y=!0,autoSpeed:A=.5,autoIntensity:T=2.2,takeoverDuration:_=.25,autoResumeDelay:g=1e3,autoRampDuration:N=.6}){const P=ai.useRef(null),D=ai.useRef(null),K=ai.useRef(null),O=ai.useRef(null),F=ai.useRef(null),re=ai.useRef(!0),C=ai.useRef(null);return ai.useEffect(()=>{if(!P.current)return;function E(ae){let L;Array.isArray(ae)&&ae.length>0?ae.length===1?L=[ae[0],ae[0]]:L=ae:L=["#ffffff","#ffffff"];const fe=L.length,ue=new Uint8Array(fe*4);for(let Ie=0;Ie<fe;Ie++){const Te=new xt(L[Ie]);ue[Ie*4+0]=Math.round(Te.r*255),ue[Ie*4+1]=Math.round(Te.g*255),ue[Ie*4+2]=Math.round(Te.b*255),ue[Ie*4+3]=255}const ve=new WM(ue,fe,1,ti);return ve.magFilter=pn,ve.minFilter=pn,ve.wrapS=ei,ve.wrapT=ei,ve.generateMipmaps=!1,ve.needsUpdate=!0,ve}const q=E(v),le=new Jt(0,0,0,0);class H{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(L){this.container=L,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new GM({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new xt(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new jM,this.clock.start()}resize(){if(!this.container)return;const L=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(L.width)),this.height=Math.max(1,Math.floor(L.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const oe=new H;class ce{constructor(){this.mouseMoved=!1,this.coords=new Je,this.coords_old=new Je,this.diff=new Je,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new Je,this.takeoverTo=new Je,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(L){this.container=L,this.docTarget=L.ownerDocument||null;const fe=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);fe&&(this.listenerTarget=fe,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(L,fe){if(!this.container)return!1;const ue=this.container.getBoundingClientRect();return ue.width===0||ue.height===0?!1:L>=ue.left&&L<=ue.right&&fe>=ue.top&&fe<=ue.bottom}updateHoverState(L,fe){return this.isHoverInside=this.isPointInside(L,fe),this.isHoverInside}setCoords(L,fe){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const ue=this.container.getBoundingClientRect();if(ue.width===0||ue.height===0)return;const ve=(L-ue.left)/ue.width,Ie=(fe-ue.top)/ue.height;this.coords.set(ve*2-1,-(Ie*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(L,fe){this.coords.set(L,fe),this.mouseMoved=!0}onDocumentMouseMove(L){if(this.updateHoverState(L.clientX,L.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const fe=this.container.getBoundingClientRect();if(fe.width===0||fe.height===0)return;const ue=(L.clientX-fe.left)/fe.width,ve=(L.clientY-fe.top)/fe.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(ue*2-1,-(ve*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(L.clientX,L.clientY),this.hasUserControl=!0}}onDocumentTouchStart(L){if(L.touches.length!==1)return;const fe=L.touches[0];this.updateHoverState(fe.clientX,fe.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(fe.clientX,fe.clientY),this.hasUserControl=!0)}onDocumentTouchMove(L){if(L.touches.length!==1)return;const fe=L.touches[0];this.updateHoverState(fe.clientX,fe.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(fe.clientX,fe.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const L=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(L>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const fe=L*L*(3-2*L);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,fe)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const me=new ce;class ge{constructor(L,fe,ue){this.mouse=L,this.manager=fe,this.enabled=ue.enabled,this.speed=ue.speed,this.resumeDelay=ue.resumeDelay||3e3,this.rampDurationMs=(ue.rampDuration||0)*1e3,this.active=!1,this.current=new Je(0,0),this.target=new Je,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new Je,this.pickNewTarget()}pickNewTarget(){const L=Math.random;this.target.set((L()*2-1)*(1-this.margin),(L()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const L=performance.now();if(L-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=L,this.activationTime=L),!this.active)return;this.mouse.isAutoActive=!0;let ue=(L-this.lastTime)/1e3;this.lastTime=L,ue>.2&&(ue=.016);const ve=this._tmpDir.subVectors(this.target,this.current),Ie=ve.length();if(Ie<.01){this.pickNewTarget();return}ve.normalize();let Te=1;if(this.rampDurationMs>0){const We=Math.min(1,(L-this.activationTime)/this.rampDurationMs);Te=We*We*(3-2*We)}const ze=this.speed*ue*Te,Qe=Math.min(ze,Ie);this.current.addScaledVector(ve,Qe),this.mouse.setNormalized(this.current.x,this.current.y)}}const k=`
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
`,se=`
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
`,$=`
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
`,I=`
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
`,te=`
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
`,De=`
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
`,Y=`
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
`,he=`
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
`,Ee=`
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
`,Se=`
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
`;class Le{constructor(L){this.props=L||{},this.uniforms=this.props.material?.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new rm,this.camera=new _l,this.uniforms&&(this.material=new cl(this.props.material),this.geometry=new Br(2,2),this.plane=new Vn(this.geometry,this.material),this.scene.add(this.plane))}update(){oe.renderer.setRenderTarget(this.props.output||null),oe.renderer.render(this.scene,this.camera),oe.renderer.setRenderTarget(null)}}class Oe extends Le{constructor(L){super({material:{vertexShader:k,fragmentShader:I,uniforms:{boundarySpace:{value:L.cellScale},px:{value:L.cellScale},fboSize:{value:L.fboSize},velocity:{value:L.src.texture},dt:{value:L.dt},isBFECC:{value:!0}}},output:L.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const L=new Ui,fe=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);L.setAttribute("position",new ni(fe,3));const ue=new cl({vertexShader:se,fragmentShader:I,uniforms:this.uniforms});this.line=new qM(L,ue),this.scene.add(this.line)}update({dt:L,isBounce:fe,BFECC:ue}){this.uniforms.dt.value=L,this.line.visible=fe,this.uniforms.isBFECC.value=ue,super.update()}}class G extends Le{constructor(L){super({output:L.dst}),this.init(L)}init(L){super.init();const fe=new Br(1,1),ue=new cl({vertexShader:$,fragmentShader:Y,blending:qc,depthWrite:!1,uniforms:{px:{value:L.cellScale},force:{value:new Je(0,0)},center:{value:new Je(0,0)},scale:{value:new Je(L.cursor_size,L.cursor_size)}}});this.mouse=new Vn(fe,ue),this.scene.add(this.mouse)}update(L){const fe=me.diff.x/2*L.mouse_force,ue=me.diff.y/2*L.mouse_force,ve=L.cursor_size*L.cellScale.x,Ie=L.cursor_size*L.cellScale.y,Te=Math.min(Math.max(me.coords.x,-1+ve+L.cellScale.x*2),1-ve-L.cellScale.x*2),ze=Math.min(Math.max(me.coords.y,-1+Ie+L.cellScale.y*2),1-Ie-L.cellScale.y*2),Qe=this.mouse.material.uniforms;Qe.force.value.set(fe,ue),Qe.center.value.set(Te,ze),Qe.scale.value.set(L.cursor_size,L.cursor_size),super.update()}}class gt extends Le{constructor(L){super({material:{vertexShader:k,fragmentShader:Se,uniforms:{boundarySpace:{value:L.boundarySpace},velocity:{value:L.src.texture},velocity_new:{value:L.dst_.texture},v:{value:L.viscous},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst,output0:L.dst_,output1:L.dst}),this.init()}update({viscous:L,iterations:fe,dt:ue}){let ve,Ie;this.uniforms.v.value=L;for(let Te=0;Te<fe;Te++)Te%2===0?(ve=this.props.output0,Ie=this.props.output1):(ve=this.props.output1,Ie=this.props.output0),this.uniforms.velocity_new.value=ve.texture,this.props.output=Ie,this.uniforms.dt.value=ue,super.update();return Ie}}class Xe extends Le{constructor(L){super({material:{vertexShader:k,fragmentShader:De,uniforms:{boundarySpace:{value:L.boundarySpace},velocity:{value:L.src.texture},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst}),this.init()}update({vel:L}){this.uniforms.velocity.value=L.texture,super.update()}}class dt extends Le{constructor(L){super({material:{vertexShader:k,fragmentShader:he,uniforms:{boundarySpace:{value:L.boundarySpace},pressure:{value:L.dst_.texture},divergence:{value:L.src.texture},px:{value:L.cellScale}}},output:L.dst,output0:L.dst_,output1:L.dst}),this.init()}update({iterations:L}){let fe,ue;for(let ve=0;ve<L;ve++)ve%2===0?(fe=this.props.output0,ue=this.props.output1):(fe=this.props.output1,ue=this.props.output0),this.uniforms.pressure.value=fe.texture,this.props.output=ue,super.update();return ue}}class Ye extends Le{constructor(L){super({material:{vertexShader:k,fragmentShader:Ee,uniforms:{boundarySpace:{value:L.boundarySpace},pressure:{value:L.src_p.texture},velocity:{value:L.src_v.texture},px:{value:L.cellScale},dt:{value:L.dt}}},output:L.dst}),this.init()}update({vel:L,pressure:fe}){this.uniforms.velocity.value=L.texture,this.uniforms.pressure.value=fe.texture,super.update()}}class lt{constructor(L){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...L},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new Je,this.cellScale=new Je,this.boundarySpace=new Je,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Lo:Ci}createAllFBO(){const fe={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:pn,magFilter:pn,wrapS:ei,wrapT:ei};for(let ue in this.fbos)this.fbos[ue]=new hr(this.fboSize.x,this.fboSize.y,fe)}createShaderPass(){this.advection=new Oe({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new G({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new gt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new Xe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new dt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Ye({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const L=Math.max(1,Math.round(this.options.resolution*oe.width)),fe=Math.max(1,Math.round(this.options.resolution*oe.height)),ue=1/L,ve=1/fe;this.cellScale.set(ue,ve),this.fboSize.set(L,fe)}resize(){this.calcSize();for(let L in this.fbos)this.fbos[L].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let L=this.fbos.vel_1;this.options.isViscous&&(L=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:L});const fe=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:L,pressure:fe})}}class tt{constructor(){this.init()}init(){this.simulation=new lt,this.scene=new rm,this.camera=new _l,this.output=new Vn(new Br(2,2),new cl({vertexShader:k,fragmentShader:te,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new Je},palette:{value:q},bgColor:{value:le}}})),this.scene.add(this.output)}addScene(L){this.scene.add(L)}resize(){this.simulation.resize()}render(){oe.renderer.setRenderTarget(null),oe.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class rt{constructor(L){this.props=L,oe.init(L.$wrapper),me.init(L.$wrapper),me.autoIntensity=L.autoIntensity,me.takeoverDuration=L.takeoverDuration,this.lastUserInteraction=performance.now(),me.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new ge(me,this,{enabled:L.autoDemo,speed:L.autoSpeed,resumeDelay:L.autoResumeDelay,rampDuration:L.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():re.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(oe.renderer.domElement),this.output=new tt}resize(){oe.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),me.update(),oe.update(),this.output.update()}loop(){this.running&&(this.render(),O.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,O.current&&(cancelAnimationFrame(O.current),O.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),me.dispose(),oe.renderer){const L=oe.renderer.domElement;L&&L.parentNode&&L.parentNode.removeChild(L),oe.renderer.dispose()}}catch{}}}const ht=P.current;ht.style.position=ht.style.position||"relative",ht.style.overflow=ht.style.overflow||"hidden";const U=new rt({$wrapper:ht,autoDemo:y,autoSpeed:A,autoIntensity:T,takeoverDuration:_,autoResumeDelay:g,autoRampDuration:N});D.current=U,(()=>{if(!D.current)return;const ae=D.current.output?.simulation;if(!ae)return;const L=ae.options.resolution;Object.assign(ae.options,{mouse_force:o,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:u,dt:f,BFECC:d,resolution:p,isBounce:m}),p!==L&&ae.resize()})(),U.start();const ne=new IntersectionObserver(ae=>{const L=ae[0],fe=L.isIntersecting&&L.intersectionRatio>0;re.current=fe,D.current&&(fe&&!document.hidden?D.current.start():D.current.pause())},{threshold:[0,.01,.1]});ne.observe(ht),F.current=ne;const pe=new ResizeObserver(()=>{D.current&&(C.current&&cancelAnimationFrame(C.current),C.current=requestAnimationFrame(()=>{D.current&&D.current.resize()}))});return pe.observe(ht),K.current=pe,()=>{if(O.current&&cancelAnimationFrame(O.current),K.current)try{K.current.disconnect()}catch{}if(F.current)try{F.current.disconnect()}catch{}D.current&&D.current.dispose(),D.current=null}},[d,e,f,m,n,u,a,o,p,r,v,y,A,T,_,g,N]),ai.useEffect(()=>{const E=D.current;if(!E)return;const q=E.output?.simulation;if(!q)return;const le=q.options.resolution;Object.assign(q.options,{mouse_force:o,cursor_size:e,isViscous:n,viscous:r,iterations_viscous:a,iterations_poisson:u,dt:f,BFECC:d,resolution:p,isBounce:m}),E.autoDriver&&(E.autoDriver.enabled=y,E.autoDriver.speed=A,E.autoDriver.resumeDelay=g,E.autoDriver.rampDurationMs=N*1e3,E.autoDriver.mouse&&(E.autoDriver.mouse.autoIntensity=T,E.autoDriver.mouse.takeoverDuration=_)),p!==le&&q.resize()},[o,e,n,r,a,u,f,d,p,m,y,A,T,_,g,N]),Yc.jsx("div",{ref:P,className:`liquid-ether-container ${x||""}`,style:S})}Rv.createRoot(document.getElementById("root")).render(Yc.jsx(ai.StrictMode,{children:Yc.jsx($M,{})}));

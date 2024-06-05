var Fc=Object.defineProperty;var Lc=(s,t,e)=>t in s?Fc(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var le=(s,t,e)=>(Lc(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _o(s,t){const e=new Set(s.split(","));return i=>e.has(i)}const K={},$t=[],Ee=()=>{},$c=()=>!1,ks=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&(s.charCodeAt(2)>122||s.charCodeAt(2)<97),go=s=>s.startsWith("onUpdate:"),se=Object.assign,vo=(s,t)=>{const e=s.indexOf(t);e>-1&&s.splice(e,1)},Hc=Object.prototype.hasOwnProperty,H=(s,t)=>Hc.call(s,t),D=Array.isArray,Ht=s=>Ds(s)==="[object Map]",il=s=>Ds(s)==="[object Set]",R=s=>typeof s=="function",re=s=>typeof s=="string",kt=s=>typeof s=="symbol",Q=s=>s!==null&&typeof s=="object",sl=s=>(Q(s)||R(s))&&R(s.then)&&R(s.catch),rl=Object.prototype.toString,Ds=s=>rl.call(s),Bc=s=>Ds(s).slice(8,-1),ol=s=>Ds(s)==="[object Object]",bo=s=>re(s)&&s!=="NaN"&&s[0]!=="-"&&""+parseInt(s,10)===s,hi=_o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Os=s=>{const t=Object.create(null);return e=>t[e]||(t[e]=s(e))},Vc=/-(\w)/g,xe=Os(s=>s.replace(Vc,(t,e)=>e?e.toUpperCase():"")),Uc=/\B([A-Z])/g,ze=Os(s=>s.replace(Uc,"-$1").toLowerCase()),Ms=Os(s=>s.charAt(0).toUpperCase()+s.slice(1)),ar=Os(s=>s?`on${Ms(s)}`:""),nt=(s,t)=>!Object.is(s,t),lr=(s,t)=>{for(let e=0;e<s.length;e++)s[e](t)},nl=(s,t,e,i=!1)=>{Object.defineProperty(s,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Wc=s=>{const t=parseFloat(s);return isNaN(t)?s:t},Cn=s=>{const t=re(s)?Number(s):NaN;return isNaN(t)?s:t};let wn;const al=()=>wn||(wn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function yo(s){if(D(s)){const t={};for(let e=0;e<s.length;e++){const i=s[e],r=re(i)?qc(i):yo(i);if(r)for(const o in r)t[o]=r[o]}return t}else if(re(s)||Q(s))return s}const jc=/;(?![^(]*\))/g,Yc=/:([^]+)/,Gc=/\/\*[^]*?\*\//g;function qc(s){const t={};return s.replace(Gc,"").split(jc).forEach(e=>{if(e){const i=e.split(Yc);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function xo(s){let t="";if(re(s))t=s;else if(D(s))for(let e=0;e<s.length;e++){const i=xo(s[e]);i&&(t+=i+" ")}else if(Q(s))for(const e in s)s[e]&&(t+=e+" ");return t.trim()}const Kc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Xc=_o(Kc);function ll(s){return!!s||s===""}const Nr=s=>re(s)?s:s==null?"":D(s)||Q(s)&&(s.toString===rl||!R(s.toString))?JSON.stringify(s,dl,2):String(s),dl=(s,t)=>t&&t.__v_isRef?dl(s,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,r],o)=>(e[dr(i,o)+" =>"]=r,e),{})}:il(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>dr(e))}:kt(t)?dr(t):Q(t)&&!D(t)&&!ol(t)?String(t):t,dr=(s,t="")=>{var e;return kt(s)?`Symbol(${(e=s.description)!=null?e:t})`:s};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class Jc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Pe,!t&&Pe&&(this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=Pe;try{return Pe=this,t()}finally{Pe=e}}}on(){Pe=this}off(){Pe=this.parent}stop(t){if(this._active){let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.scopes)for(e=0,i=this.scopes.length;e<i;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Qc(s,t=Pe){t&&t.active&&t.effects.push(s)}function Zc(){return Pe}let At;class Co{constructor(t,e,i,r){this.fn=t,this.trigger=e,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Qc(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,lt();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed&&(eh(e.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),dt()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=it,e=At;try{return it=!0,At=this,this._runnings++,En(this),this.fn()}finally{An(this),this._runnings--,At=e,it=t}}stop(){this.active&&(En(this),An(this),this.onStop&&this.onStop(),this.active=!1)}}function eh(s){return s.value}function En(s){s._trackId++,s._depsLength=0}function An(s){if(s.deps.length>s._depsLength){for(let t=s._depsLength;t<s.deps.length;t++)cl(s.deps[t],s);s.deps.length=s._depsLength}}function cl(s,t){const e=s.get(t);e!==void 0&&t._trackId!==e&&(s.delete(t),s.size===0&&s.cleanup())}let it=!0,Fr=0;const hl=[];function lt(){hl.push(it),it=!1}function dt(){const s=hl.pop();it=s===void 0?!0:s}function wo(){Fr++}function Eo(){for(Fr--;!Fr&&Lr.length;)Lr.shift()()}function ul(s,t,e){if(t.get(s)!==s._trackId){t.set(s,s._trackId);const i=s.deps[s._depsLength];i!==t?(i&&cl(i,s),s.deps[s._depsLength++]=t):s._depsLength++}}const Lr=[];function pl(s,t,e){wo();for(const i of s.keys()){let r;i._dirtyLevel<t&&(r??(r=s.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=t),i._shouldSchedule&&(r??(r=s.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Lr.push(i.scheduler)))}Eo()}const fl=(s,t)=>{const e=new Map;return e.cleanup=s,e.computed=t,e},$r=new WeakMap,St=Symbol(""),Hr=Symbol("");function _e(s,t,e){if(it&&At){let i=$r.get(s);i||$r.set(s,i=new Map);let r=i.get(e);r||i.set(e,r=fl(()=>i.delete(e))),ul(At,r)}}function We(s,t,e,i,r,o){const n=$r.get(s);if(!n)return;let a=[];if(t==="clear")a=[...n.values()];else if(e==="length"&&D(s)){const l=Number(i);n.forEach((d,c)=>{(c==="length"||!kt(c)&&c>=l)&&a.push(d)})}else switch(e!==void 0&&a.push(n.get(e)),t){case"add":D(s)?bo(e)&&a.push(n.get("length")):(a.push(n.get(St)),Ht(s)&&a.push(n.get(Hr)));break;case"delete":D(s)||(a.push(n.get(St)),Ht(s)&&a.push(n.get(Hr)));break;case"set":Ht(s)&&a.push(n.get(St));break}wo();for(const l of a)l&&pl(l,4);Eo()}const th=_o("__proto__,__v_isRef,__isVue"),ml=new Set(Object.getOwnPropertyNames(Symbol).filter(s=>s!=="arguments"&&s!=="caller").map(s=>Symbol[s]).filter(kt)),Sn=ih();function ih(){const s={};return["includes","indexOf","lastIndexOf"].forEach(t=>{s[t]=function(...e){const i=W(this);for(let o=0,n=this.length;o<n;o++)_e(i,"get",o+"");const r=i[t](...e);return r===-1||r===!1?i[t](...e.map(W)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{s[t]=function(...e){lt(),wo();const i=W(this)[t].apply(this,e);return Eo(),dt(),i}}),s}function sh(s){kt(s)||(s=String(s));const t=W(this);return _e(t,"has",s),t.hasOwnProperty(s)}class _l{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){const r=this._isReadonly,o=this._isShallow;if(e==="__v_isReactive")return!r;if(e==="__v_isReadonly")return r;if(e==="__v_isShallow")return o;if(e==="__v_raw")return i===(r?o?_h:yl:o?bl:vl).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const n=D(t);if(!r){if(n&&H(Sn,e))return Reflect.get(Sn,e,i);if(e==="hasOwnProperty")return sh}const a=Reflect.get(t,e,i);return(kt(e)?ml.has(e):th(e))||(r||_e(t,"get",e),o)?a:ge(a)?n&&bo(e)?a:a.value:Q(a)?r?xl(a):To(a):a}}class gl extends _l{constructor(t=!1){super(!1,t)}set(t,e,i,r){let o=t[e];if(!this._isShallow){const l=xi(o);if(!_s(i)&&!xi(i)&&(o=W(o),i=W(i)),!D(t)&&ge(o)&&!ge(i))return l?!1:(o.value=i,!0)}const n=D(t)&&bo(e)?Number(e)<t.length:H(t,e),a=Reflect.set(t,e,i,r);return t===W(r)&&(n?nt(i,o)&&We(t,"set",e,i):We(t,"add",e,i)),a}deleteProperty(t,e){const i=H(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&i&&We(t,"delete",e,void 0),r}has(t,e){const i=Reflect.has(t,e);return(!kt(e)||!ml.has(e))&&_e(t,"has",e),i}ownKeys(t){return _e(t,"iterate",D(t)?"length":St),Reflect.ownKeys(t)}}class rh extends _l{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const oh=new gl,nh=new rh,ah=new gl(!0);const Ao=s=>s,Rs=s=>Reflect.getPrototypeOf(s);function Ki(s,t,e=!1,i=!1){s=s.__v_raw;const r=W(s),o=W(t);e||(nt(t,o)&&_e(r,"get",t),_e(r,"get",o));const{has:n}=Rs(r),a=i?Ao:e?Io:Ci;if(n.call(r,t))return a(s.get(t));if(n.call(r,o))return a(s.get(o));s!==r&&s.get(t)}function Xi(s,t=!1){const e=this.__v_raw,i=W(e),r=W(s);return t||(nt(s,r)&&_e(i,"has",s),_e(i,"has",r)),s===r?e.has(s):e.has(s)||e.has(r)}function Ji(s,t=!1){return s=s.__v_raw,!t&&_e(W(s),"iterate",St),Reflect.get(s,"size",s)}function Tn(s){s=W(s);const t=W(this);return Rs(t).has.call(t,s)||(t.add(s),We(t,"add",s,s)),this}function Pn(s,t){t=W(t);const e=W(this),{has:i,get:r}=Rs(e);let o=i.call(e,s);o||(s=W(s),o=i.call(e,s));const n=r.call(e,s);return e.set(s,t),o?nt(t,n)&&We(e,"set",s,t):We(e,"add",s,t),this}function In(s){const t=W(this),{has:e,get:i}=Rs(t);let r=e.call(t,s);r||(s=W(s),r=e.call(t,s)),i&&i.call(t,s);const o=t.delete(s);return r&&We(t,"delete",s,void 0),o}function zn(){const s=W(this),t=s.size!==0,e=s.clear();return t&&We(s,"clear",void 0,void 0),e}function Qi(s,t){return function(i,r){const o=this,n=o.__v_raw,a=W(n),l=t?Ao:s?Io:Ci;return!s&&_e(a,"iterate",St),n.forEach((d,c)=>i.call(r,l(d),l(c),o))}}function Zi(s,t,e){return function(...i){const r=this.__v_raw,o=W(r),n=Ht(o),a=s==="entries"||s===Symbol.iterator&&n,l=s==="keys"&&n,d=r[s](...i),c=e?Ao:t?Io:Ci;return!t&&_e(o,"iterate",l?Hr:St),{next(){const{value:h,done:f}=d.next();return f?{value:h,done:f}:{value:a?[c(h[0]),c(h[1])]:c(h),done:f}},[Symbol.iterator](){return this}}}}function Ke(s){return function(...t){return s==="delete"?!1:s==="clear"?void 0:this}}function lh(){const s={get(o){return Ki(this,o)},get size(){return Ji(this)},has:Xi,add:Tn,set:Pn,delete:In,clear:zn,forEach:Qi(!1,!1)},t={get(o){return Ki(this,o,!1,!0)},get size(){return Ji(this)},has:Xi,add:Tn,set:Pn,delete:In,clear:zn,forEach:Qi(!1,!0)},e={get(o){return Ki(this,o,!0)},get size(){return Ji(this,!0)},has(o){return Xi.call(this,o,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:Qi(!0,!1)},i={get(o){return Ki(this,o,!0,!0)},get size(){return Ji(this,!0)},has(o){return Xi.call(this,o,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:Qi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{s[o]=Zi(o,!1,!1),e[o]=Zi(o,!0,!1),t[o]=Zi(o,!1,!0),i[o]=Zi(o,!0,!0)}),[s,e,t,i]}const[dh,ch,hh,uh]=lh();function So(s,t){const e=t?s?uh:hh:s?ch:dh;return(i,r,o)=>r==="__v_isReactive"?!s:r==="__v_isReadonly"?s:r==="__v_raw"?i:Reflect.get(H(e,r)&&r in i?e:i,r,o)}const ph={get:So(!1,!1)},fh={get:So(!1,!0)},mh={get:So(!0,!1)};const vl=new WeakMap,bl=new WeakMap,yl=new WeakMap,_h=new WeakMap;function gh(s){switch(s){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vh(s){return s.__v_skip||!Object.isExtensible(s)?0:gh(Bc(s))}function To(s){return xi(s)?s:Po(s,!1,oh,ph,vl)}function bh(s){return Po(s,!1,ah,fh,bl)}function xl(s){return Po(s,!0,nh,mh,yl)}function Po(s,t,e,i,r){if(!Q(s)||s.__v_raw&&!(t&&s.__v_isReactive))return s;const o=r.get(s);if(o)return o;const n=vh(s);if(n===0)return s;const a=new Proxy(s,n===2?i:e);return r.set(s,a),a}function ui(s){return xi(s)?ui(s.__v_raw):!!(s&&s.__v_isReactive)}function xi(s){return!!(s&&s.__v_isReadonly)}function _s(s){return!!(s&&s.__v_isShallow)}function Cl(s){return s?!!s.__v_raw:!1}function W(s){const t=s&&s.__v_raw;return t?W(t):s}function yh(s){return Object.isExtensible(s)&&nl(s,"__v_skip",!0),s}const Ci=s=>Q(s)?To(s):s,Io=s=>Q(s)?xl(s):s;class wl{constructor(t,e,i,r){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Co(()=>t(this._value),()=>ns(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const t=W(this);return(!t._cacheable||t.effect.dirty)&&nt(t._value,t._value=t.effect.run())&&ns(t,4),El(t),t.effect._dirtyLevel>=2&&ns(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function xh(s,t,e=!1){let i,r;const o=R(s);return o?(i=s,r=Ee):(i=s.get,r=s.set),new wl(i,r,o||!r,e)}function El(s){var t;it&&At&&(s=W(s),ul(At,(t=s.dep)!=null?t:s.dep=fl(()=>s.dep=void 0,s instanceof wl?s:void 0)))}function ns(s,t=4,e){s=W(s);const i=s.dep;i&&pl(i,t)}function ge(s){return!!(s&&s.__v_isRef===!0)}function yt(s){return Ch(s,!1)}function Ch(s,t){return ge(s)?s:new wh(s,t)}class wh{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:W(t),this._value=e?t:Ci(t)}get value(){return El(this),this._value}set value(t){const e=this.__v_isShallow||_s(t)||xi(t);t=e?t:W(t),nt(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Ci(t),ns(this,4))}}function Eh(s){return ge(s)?s.value:s}const Ah={get:(s,t,e)=>Eh(Reflect.get(s,t,e)),set:(s,t,e,i)=>{const r=s[t];return ge(r)&&!ge(e)?(r.value=e,!0):Reflect.set(s,t,e,i)}};function Al(s){return ui(s)?s:new Proxy(s,Ah)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function st(s,t,e,i){try{return i?s(...i):s()}catch(r){Ns(r,t,e)}}function Oe(s,t,e,i){if(R(s)){const r=st(s,t,e,i);return r&&sl(r)&&r.catch(o=>{Ns(o,t,e)}),r}if(D(s)){const r=[];for(let o=0;o<s.length;o++)r.push(Oe(s[o],t,e,i));return r}}function Ns(s,t,e,i=!0){const r=t?t.vnode:null;if(t){let o=t.parent;const n=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${e}`;for(;o;){const d=o.ec;if(d){for(let c=0;c<d.length;c++)if(d[c](s,n,a)===!1)return}o=o.parent}const l=t.appContext.config.errorHandler;if(l){lt(),st(l,null,10,[s,n,a]),dt();return}}Sh(s,e,r,i)}function Sh(s,t,e,i=!0){console.error(s)}let wi=!1,Br=!1;const de=[];let He=0;const Bt=[];let Je=null,xt=0;const Sl=Promise.resolve();let zo=null;function Tl(s){const t=zo||Sl;return s?t.then(this?s.bind(this):s):t}function Th(s){let t=He+1,e=de.length;for(;t<e;){const i=t+e>>>1,r=de[i],o=Ei(r);o<s||o===s&&r.pre?t=i+1:e=i}return t}function ko(s){(!de.length||!de.includes(s,wi&&s.allowRecurse?He+1:He))&&(s.id==null?de.push(s):de.splice(Th(s.id),0,s),Pl())}function Pl(){!wi&&!Br&&(Br=!0,zo=Sl.then(zl))}function Ph(s){const t=de.indexOf(s);t>He&&de.splice(t,1)}function Ih(s){D(s)?Bt.push(...s):(!Je||!Je.includes(s,s.allowRecurse?xt+1:xt))&&Bt.push(s),Pl()}function kn(s,t,e=wi?He+1:0){for(;e<de.length;e++){const i=de[e];if(i&&i.pre){if(s&&i.id!==s.uid)continue;de.splice(e,1),e--,i()}}}function Il(s){if(Bt.length){const t=[...new Set(Bt)].sort((e,i)=>Ei(e)-Ei(i));if(Bt.length=0,Je){Je.push(...t);return}for(Je=t,xt=0;xt<Je.length;xt++)Je[xt]();Je=null,xt=0}}const Ei=s=>s.id==null?1/0:s.id,zh=(s,t)=>{const e=Ei(s)-Ei(t);if(e===0){if(s.pre&&!t.pre)return-1;if(t.pre&&!s.pre)return 1}return e};function zl(s){Br=!1,wi=!0,de.sort(zh);try{for(He=0;He<de.length;He++){const t=de[He];t&&t.active!==!1&&st(t,null,14)}}finally{He=0,de.length=0,Il(),wi=!1,zo=null,(de.length||Bt.length)&&zl()}}function kh(s,t,...e){if(s.isUnmounted)return;const i=s.vnode.props||K;let r=e;const o=t.startsWith("update:"),n=o&&t.slice(7);if(n&&n in i){const c=`${n==="modelValue"?"model":n}Modifiers`,{number:h,trim:f}=i[c]||K;f&&(r=e.map(_=>re(_)?_.trim():_)),h&&(r=e.map(Wc))}let a,l=i[a=ar(t)]||i[a=ar(xe(t))];!l&&o&&(l=i[a=ar(ze(t))]),l&&Oe(l,s,6,r);const d=i[a+"Once"];if(d){if(!s.emitted)s.emitted={};else if(s.emitted[a])return;s.emitted[a]=!0,Oe(d,s,6,r)}}function kl(s,t,e=!1){const i=t.emitsCache,r=i.get(s);if(r!==void 0)return r;const o=s.emits;let n={},a=!1;if(!R(s)){const l=d=>{const c=kl(d,t,!0);c&&(a=!0,se(n,c))};!e&&t.mixins.length&&t.mixins.forEach(l),s.extends&&l(s.extends),s.mixins&&s.mixins.forEach(l)}return!o&&!a?(Q(s)&&i.set(s,null),null):(D(o)?o.forEach(l=>n[l]=null):se(n,o),Q(s)&&i.set(s,n),n)}function Fs(s,t){return!s||!ks(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(s,t[0].toLowerCase()+t.slice(1))||H(s,ze(t))||H(s,t))}let ke=null,Ls=null;function gs(s){const t=ke;return ke=s,Ls=s&&s.type.__scopeId||null,t}function Dh(s){Ls=s}function Oh(){Ls=null}function Mh(s,t=ke,e){if(!t||s._n)return s;const i=(...r)=>{i._d&&Vn(-1);const o=gs(t);let n;try{n=s(...r)}finally{gs(o),i._d&&Vn(1)}return n};return i._n=!0,i._c=!0,i._d=!0,i}function cr(s){const{type:t,vnode:e,proxy:i,withProxy:r,propsOptions:[o],slots:n,attrs:a,emit:l,render:d,renderCache:c,props:h,data:f,setupState:_,ctx:E,inheritAttrs:P}=s,L=gs(s);let T,z;try{if(e.shapeFlag&4){const V=r||i,U=V;T=$e(d.call(U,V,c,h,_,f,E)),z=a}else{const V=t;T=$e(V.length>1?V(h,{attrs:a,slots:n,emit:l}):V(h,null)),z=t.props?a:Rh(a)}}catch(V){mi.length=0,Ns(V,s,1),T=Me(Ai)}let M=T;if(z&&P!==!1){const V=Object.keys(z),{shapeFlag:U}=M;V.length&&U&7&&(o&&V.some(go)&&(z=Nh(z,o)),M=Yt(M,z,!1,!0))}return e.dirs&&(M=Yt(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(e.dirs):e.dirs),e.transition&&(M.transition=e.transition),T=M,gs(L),T}const Rh=s=>{let t;for(const e in s)(e==="class"||e==="style"||ks(e))&&((t||(t={}))[e]=s[e]);return t},Nh=(s,t)=>{const e={};for(const i in s)(!go(i)||!(i.slice(9)in t))&&(e[i]=s[i]);return e};function Fh(s,t,e){const{props:i,children:r,component:o}=s,{props:n,children:a,patchFlag:l}=t,d=o.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?Dn(i,n,d):!!n;if(l&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(n[f]!==i[f]&&!Fs(d,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===n?!1:i?n?Dn(i,n,d):!0:!!n;return!1}function Dn(s,t,e){const i=Object.keys(t);if(i.length!==Object.keys(s).length)return!0;for(let r=0;r<i.length;r++){const o=i[r];if(t[o]!==s[o]&&!Fs(e,o))return!0}return!1}function Lh({vnode:s,parent:t},e){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===s&&(i.el=s.el),i===s)(s=t.vnode).el=e,t=t.parent;else break}}const Dl="components";function Ol(s,t){return Rl(Dl,s,!0,t)||s}const Ml=Symbol.for("v-ndc");function $h(s){return re(s)?Rl(Dl,s,!1)||s:s||Ml}function Rl(s,t,e=!0,i=!1){const r=ke||ce;if(r){const o=r.type;{const a=Nu(o,!1);if(a&&(a===t||a===xe(t)||a===Ms(xe(t))))return o}const n=On(r[s]||o[s],t)||On(r.appContext[s],t);return!n&&i?o:n}}function On(s,t){return s&&(s[t]||s[xe(t)]||s[Ms(xe(t))])}const Hh=s=>s.__isSuspense;function Bh(s,t){t&&t.pendingBranch?D(s)?t.effects.push(...s):t.effects.push(s):Ih(s)}const Vh=Symbol.for("v-scx"),Uh=()=>ls(Vh),es={};function hr(s,t,e){return Nl(s,t,e)}function Nl(s,t,{immediate:e,deep:i,flush:r,once:o,onTrack:n,onTrigger:a}=K){if(t&&o){const N=t;t=(...Se)=>{N(...Se),U()}}const l=ce,d=N=>i===!0?N:Ft(N,i===!1?1:void 0);let c,h=!1,f=!1;if(ge(s)?(c=()=>s.value,h=_s(s)):ui(s)?(c=()=>d(s),h=!0):D(s)?(f=!0,h=s.some(N=>ui(N)||_s(N)),c=()=>s.map(N=>{if(ge(N))return N.value;if(ui(N))return d(N);if(R(N))return st(N,l,2)})):R(s)?t?c=()=>st(s,l,2):c=()=>(_&&_(),Oe(s,l,3,[E])):c=Ee,t&&i){const N=c;c=()=>Ft(N())}let _,E=N=>{_=M.onStop=()=>{st(N,l,4),_=M.onStop=void 0}},P;if(Vs)if(E=Ee,t?e&&Oe(t,l,3,[c(),f?[]:void 0,E]):c(),r==="sync"){const N=Uh();P=N.__watcherHandles||(N.__watcherHandles=[])}else return Ee;let L=f?new Array(s.length).fill(es):es;const T=()=>{if(!(!M.active||!M.dirty))if(t){const N=M.run();(i||h||(f?N.some((Se,Re)=>nt(Se,L[Re])):nt(N,L)))&&(_&&_(),Oe(t,l,3,[N,L===es?void 0:f&&L[0]===es?[]:L,E]),L=N)}else M.run()};T.allowRecurse=!!t;let z;r==="sync"?z=T:r==="post"?z=()=>fe(T,l&&l.suspense):(T.pre=!0,l&&(T.id=l.uid),z=()=>ko(T));const M=new Co(c,Ee,z),V=Zc(),U=()=>{M.stop(),V&&vo(V.effects,M)};return t?e?T():L=M.run():r==="post"?fe(M.run.bind(M),l&&l.suspense):M.run(),P&&P.push(U),U}function Wh(s,t,e){const i=this.proxy,r=re(s)?s.includes(".")?Fl(i,s):()=>i[s]:s.bind(i,i);let o;R(t)?o=t:(o=t.handler,e=t);const n=Hi(this),a=Nl(r,o.bind(i),e);return n(),a}function Fl(s,t){const e=t.split(".");return()=>{let i=s;for(let r=0;r<e.length&&i;r++)i=i[e[r]];return i}}function Ft(s,t=1/0,e){if(t<=0||!Q(s)||s.__v_skip||(e=e||new Set,e.has(s)))return s;if(e.add(s),t--,ge(s))Ft(s.value,t,e);else if(D(s))for(let i=0;i<s.length;i++)Ft(s[i],t,e);else if(il(s)||Ht(s))s.forEach(i=>{Ft(i,t,e)});else if(ol(s))for(const i in s)Ft(s[i],t,e);return s}function _t(s,t,e,i){const r=s.dirs,o=t&&t.dirs;for(let n=0;n<r.length;n++){const a=r[n];o&&(a.oldValue=o[n].value);let l=a.dir[i];l&&(lt(),Oe(l,e,8,[s.el,a,s,t]),dt())}}/*! #__NO_SIDE_EFFECTS__ */function Li(s,t){return R(s)?se({name:s.name},t,{setup:s}):s}const as=s=>!!s.type.__asyncLoader,Ll=s=>s.type.__isKeepAlive;function jh(s,t){$l(s,"a",t)}function Yh(s,t){$l(s,"da",t)}function $l(s,t,e=ce){const i=s.__wdc||(s.__wdc=()=>{let r=e;for(;r;){if(r.isDeactivated)return;r=r.parent}return s()});if($s(t,i,e),e){let r=e.parent;for(;r&&r.parent;)Ll(r.parent.vnode)&&Gh(i,t,e,r),r=r.parent}}function Gh(s,t,e,i){const r=$s(t,s,i,!0);Hl(()=>{vo(i[t],r)},e)}function $s(s,t,e=ce,i=!1){if(e){const r=e[s]||(e[s]=[]),o=t.__weh||(t.__weh=(...n)=>{if(e.isUnmounted)return;lt();const a=Hi(e),l=Oe(t,e,s,n);return a(),dt(),l});return i?r.unshift(o):r.push(o),o}}const Ge=s=>(t,e=ce)=>(!Vs||s==="sp")&&$s(s,(...i)=>t(...i),e),qh=Ge("bm"),Kh=Ge("m"),Xh=Ge("bu"),Jh=Ge("u"),Qh=Ge("bum"),Hl=Ge("um"),Zh=Ge("sp"),eu=Ge("rtg"),tu=Ge("rtc");function iu(s,t=ce){$s("ec",s,t)}const Vr=s=>s?td(s)?Ro(s)||s.proxy:Vr(s.parent):null,pi=se(Object.create(null),{$:s=>s,$el:s=>s.vnode.el,$data:s=>s.data,$props:s=>s.props,$attrs:s=>s.attrs,$slots:s=>s.slots,$refs:s=>s.refs,$parent:s=>Vr(s.parent),$root:s=>Vr(s.root),$emit:s=>s.emit,$options:s=>Do(s),$forceUpdate:s=>s.f||(s.f=()=>{s.effect.dirty=!0,ko(s.update)}),$nextTick:s=>s.n||(s.n=Tl.bind(s.proxy)),$watch:s=>Wh.bind(s)}),ur=(s,t)=>s!==K&&!s.__isScriptSetup&&H(s,t),su={get({_:s},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:r,props:o,accessCache:n,type:a,appContext:l}=s;let d;if(t[0]!=="$"){const _=n[t];if(_!==void 0)switch(_){case 1:return i[t];case 2:return r[t];case 4:return e[t];case 3:return o[t]}else{if(ur(i,t))return n[t]=1,i[t];if(r!==K&&H(r,t))return n[t]=2,r[t];if((d=s.propsOptions[0])&&H(d,t))return n[t]=3,o[t];if(e!==K&&H(e,t))return n[t]=4,e[t];Ur&&(n[t]=0)}}const c=pi[t];let h,f;if(c)return t==="$attrs"&&_e(s.attrs,"get",""),c(s);if((h=a.__cssModules)&&(h=h[t]))return h;if(e!==K&&H(e,t))return n[t]=4,e[t];if(f=l.config.globalProperties,H(f,t))return f[t]},set({_:s},t,e){const{data:i,setupState:r,ctx:o}=s;return ur(r,t)?(r[t]=e,!0):i!==K&&H(i,t)?(i[t]=e,!0):H(s.props,t)||t[0]==="$"&&t.slice(1)in s?!1:(o[t]=e,!0)},has({_:{data:s,setupState:t,accessCache:e,ctx:i,appContext:r,propsOptions:o}},n){let a;return!!e[n]||s!==K&&H(s,n)||ur(t,n)||(a=o[0])&&H(a,n)||H(i,n)||H(pi,n)||H(r.config.globalProperties,n)},defineProperty(s,t,e){return e.get!=null?s._.accessCache[t]=0:H(e,"value")&&this.set(s,t,e.value,null),Reflect.defineProperty(s,t,e)}};function Mn(s){return D(s)?s.reduce((t,e)=>(t[e]=null,t),{}):s}let Ur=!0;function ru(s){const t=Do(s),e=s.proxy,i=s.ctx;Ur=!1,t.beforeCreate&&Rn(t.beforeCreate,s,"bc");const{data:r,computed:o,methods:n,watch:a,provide:l,inject:d,created:c,beforeMount:h,mounted:f,beforeUpdate:_,updated:E,activated:P,deactivated:L,beforeDestroy:T,beforeUnmount:z,destroyed:M,unmounted:V,render:U,renderTracked:N,renderTriggered:Se,errorCaptured:Re,serverPrefetch:rr,expose:pt,inheritAttrs:Xt,components:ji,directives:Yi,filters:or}=t;if(d&&ou(d,i,null),n)for(const X in n){const Y=n[X];R(Y)&&(i[X]=Y.bind(e))}if(r){const X=r.call(e,e);Q(X)&&(s.data=To(X))}if(Ur=!0,o)for(const X in o){const Y=o[X],ft=R(Y)?Y.bind(e,e):R(Y.get)?Y.get.bind(e,e):Ee,Gi=!R(Y)&&R(Y.set)?Y.set.bind(e):Ee,mt=cs({get:ft,set:Gi});Object.defineProperty(i,X,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Ne=>mt.value=Ne})}if(a)for(const X in a)Bl(a[X],i,e,X);if(l){const X=R(l)?l.call(e):l;Reflect.ownKeys(X).forEach(Y=>{hu(Y,X[Y])})}c&&Rn(c,s,"c");function he(X,Y){D(Y)?Y.forEach(ft=>X(ft.bind(e))):Y&&X(Y.bind(e))}if(he(qh,h),he(Kh,f),he(Xh,_),he(Jh,E),he(jh,P),he(Yh,L),he(iu,Re),he(tu,N),he(eu,Se),he(Qh,z),he(Hl,V),he(Zh,rr),D(pt))if(pt.length){const X=s.exposed||(s.exposed={});pt.forEach(Y=>{Object.defineProperty(X,Y,{get:()=>e[Y],set:ft=>e[Y]=ft})})}else s.exposed||(s.exposed={});U&&s.render===Ee&&(s.render=U),Xt!=null&&(s.inheritAttrs=Xt),ji&&(s.components=ji),Yi&&(s.directives=Yi)}function ou(s,t,e=Ee){D(s)&&(s=Wr(s));for(const i in s){const r=s[i];let o;Q(r)?"default"in r?o=ls(r.from||i,r.default,!0):o=ls(r.from||i):o=ls(r),ge(o)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:n=>o.value=n}):t[i]=o}}function Rn(s,t,e){Oe(D(s)?s.map(i=>i.bind(t.proxy)):s.bind(t.proxy),t,e)}function Bl(s,t,e,i){const r=i.includes(".")?Fl(e,i):()=>e[i];if(re(s)){const o=t[s];R(o)&&hr(r,o)}else if(R(s))hr(r,s.bind(e));else if(Q(s))if(D(s))s.forEach(o=>Bl(o,t,e,i));else{const o=R(s.handler)?s.handler.bind(e):t[s.handler];R(o)&&hr(r,o,s)}}function Do(s){const t=s.type,{mixins:e,extends:i}=t,{mixins:r,optionsCache:o,config:{optionMergeStrategies:n}}=s.appContext,a=o.get(t);let l;return a?l=a:!r.length&&!e&&!i?l=t:(l={},r.length&&r.forEach(d=>vs(l,d,n,!0)),vs(l,t,n)),Q(t)&&o.set(t,l),l}function vs(s,t,e,i=!1){const{mixins:r,extends:o}=t;o&&vs(s,o,e,!0),r&&r.forEach(n=>vs(s,n,e,!0));for(const n in t)if(!(i&&n==="expose")){const a=nu[n]||e&&e[n];s[n]=a?a(s[n],t[n]):t[n]}return s}const nu={data:Nn,props:Fn,emits:Fn,methods:ai,computed:ai,beforeCreate:ue,created:ue,beforeMount:ue,mounted:ue,beforeUpdate:ue,updated:ue,beforeDestroy:ue,beforeUnmount:ue,destroyed:ue,unmounted:ue,activated:ue,deactivated:ue,errorCaptured:ue,serverPrefetch:ue,components:ai,directives:ai,watch:lu,provide:Nn,inject:au};function Nn(s,t){return t?s?function(){return se(R(s)?s.call(this,this):s,R(t)?t.call(this,this):t)}:t:s}function au(s,t){return ai(Wr(s),Wr(t))}function Wr(s){if(D(s)){const t={};for(let e=0;e<s.length;e++)t[s[e]]=s[e];return t}return s}function ue(s,t){return s?[...new Set([].concat(s,t))]:t}function ai(s,t){return s?se(Object.create(null),s,t):t}function Fn(s,t){return s?D(s)&&D(t)?[...new Set([...s,...t])]:se(Object.create(null),Mn(s),Mn(t??{})):t}function lu(s,t){if(!s)return t;if(!t)return s;const e=se(Object.create(null),s);for(const i in t)e[i]=ue(s[i],t[i]);return e}function Vl(){return{app:null,config:{isNativeTag:$c,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let du=0;function cu(s,t){return function(i,r=null){R(i)||(i=se({},i)),r!=null&&!Q(r)&&(r=null);const o=Vl(),n=new WeakSet;let a=!1;const l=o.app={_uid:du++,_component:i,_props:r,_container:null,_context:o,_instance:null,version:Lu,get config(){return o.config},set config(d){},use(d,...c){return n.has(d)||(d&&R(d.install)?(n.add(d),d.install(l,...c)):R(d)&&(n.add(d),d(l,...c))),l},mixin(d){return o.mixins.includes(d)||o.mixins.push(d),l},component(d,c){return c?(o.components[d]=c,l):o.components[d]},directive(d,c){return c?(o.directives[d]=c,l):o.directives[d]},mount(d,c,h){if(!a){const f=Me(i,r);return f.appContext=o,h===!0?h="svg":h===!1&&(h=void 0),c&&t?t(f,d):s(f,d,h),a=!0,l._container=d,d.__vue_app__=l,Ro(f.component)||f.component.proxy}},unmount(){a&&(s(null,l._container),delete l._container.__vue_app__)},provide(d,c){return o.provides[d]=c,l},runWithContext(d){const c=fi;fi=l;try{return d()}finally{fi=c}}};return l}}let fi=null;function hu(s,t){if(ce){let e=ce.provides;const i=ce.parent&&ce.parent.provides;i===e&&(e=ce.provides=Object.create(i)),e[s]=t}}function ls(s,t,e=!1){const i=ce||ke;if(i||fi){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:fi._context.provides;if(r&&s in r)return r[s];if(arguments.length>1)return e&&R(t)?t.call(i&&i.proxy):t}}const Ul={},Wl=()=>Object.create(Ul),jl=s=>Object.getPrototypeOf(s)===Ul;function uu(s,t,e,i=!1){const r={},o=Wl();s.propsDefaults=Object.create(null),Yl(s,t,r,o);for(const n in s.propsOptions[0])n in r||(r[n]=void 0);e?s.props=i?r:bh(r):s.type.props?s.props=r:s.props=o,s.attrs=o}function pu(s,t,e,i){const{props:r,attrs:o,vnode:{patchFlag:n}}=s,a=W(r),[l]=s.propsOptions;let d=!1;if((i||n>0)&&!(n&16)){if(n&8){const c=s.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];if(Fs(s.emitsOptions,f))continue;const _=t[f];if(l)if(H(o,f))_!==o[f]&&(o[f]=_,d=!0);else{const E=xe(f);r[E]=jr(l,a,E,_,s,!1)}else _!==o[f]&&(o[f]=_,d=!0)}}}else{Yl(s,t,r,o)&&(d=!0);let c;for(const h in a)(!t||!H(t,h)&&((c=ze(h))===h||!H(t,c)))&&(l?e&&(e[h]!==void 0||e[c]!==void 0)&&(r[h]=jr(l,a,h,void 0,s,!0)):delete r[h]);if(o!==a)for(const h in o)(!t||!H(t,h))&&(delete o[h],d=!0)}d&&We(s.attrs,"set","")}function Yl(s,t,e,i){const[r,o]=s.propsOptions;let n=!1,a;if(t)for(let l in t){if(hi(l))continue;const d=t[l];let c;r&&H(r,c=xe(l))?!o||!o.includes(c)?e[c]=d:(a||(a={}))[c]=d:Fs(s.emitsOptions,l)||(!(l in i)||d!==i[l])&&(i[l]=d,n=!0)}if(o){const l=W(e),d=a||K;for(let c=0;c<o.length;c++){const h=o[c];e[h]=jr(r,l,h,d[h],s,!H(d,h))}}return n}function jr(s,t,e,i,r,o){const n=s[e];if(n!=null){const a=H(n,"default");if(a&&i===void 0){const l=n.default;if(n.type!==Function&&!n.skipFactory&&R(l)){const{propsDefaults:d}=r;if(e in d)i=d[e];else{const c=Hi(r);i=d[e]=l.call(null,t),c()}}else i=l}n[0]&&(o&&!a?i=!1:n[1]&&(i===""||i===ze(e))&&(i=!0))}return i}function Gl(s,t,e=!1){const i=t.propsCache,r=i.get(s);if(r)return r;const o=s.props,n={},a=[];let l=!1;if(!R(s)){const c=h=>{l=!0;const[f,_]=Gl(h,t,!0);se(n,f),_&&a.push(..._)};!e&&t.mixins.length&&t.mixins.forEach(c),s.extends&&c(s.extends),s.mixins&&s.mixins.forEach(c)}if(!o&&!l)return Q(s)&&i.set(s,$t),$t;if(D(o))for(let c=0;c<o.length;c++){const h=xe(o[c]);Ln(h)&&(n[h]=K)}else if(o)for(const c in o){const h=xe(c);if(Ln(h)){const f=o[c],_=n[h]=D(f)||R(f)?{type:f}:se({},f);if(_){const E=Bn(Boolean,_.type),P=Bn(String,_.type);_[0]=E>-1,_[1]=P<0||E<P,(E>-1||H(_,"default"))&&a.push(h)}}}const d=[n,a];return Q(s)&&i.set(s,d),d}function Ln(s){return s[0]!=="$"&&!hi(s)}function $n(s){return s===null?"null":typeof s=="function"?s.name||"":typeof s=="object"&&s.constructor&&s.constructor.name||""}function Hn(s,t){return $n(s)===$n(t)}function Bn(s,t){return D(t)?t.findIndex(e=>Hn(e,s)):R(t)&&Hn(t,s)?0:-1}const ql=s=>s[0]==="_"||s==="$stable",Oo=s=>D(s)?s.map($e):[$e(s)],fu=(s,t,e)=>{if(t._n)return t;const i=Mh((...r)=>Oo(t(...r)),e);return i._c=!1,i},Kl=(s,t,e)=>{const i=s._ctx;for(const r in s){if(ql(r))continue;const o=s[r];if(R(o))t[r]=fu(r,o,i);else if(o!=null){const n=Oo(o);t[r]=()=>n}}},Xl=(s,t)=>{const e=Oo(t);s.slots.default=()=>e},mu=(s,t)=>{const e=s.slots=Wl();if(s.vnode.shapeFlag&32){const i=t._;i?(se(e,t),nl(e,"_",i,!0)):Kl(t,e)}else t&&Xl(s,t)},_u=(s,t,e)=>{const{vnode:i,slots:r}=s;let o=!0,n=K;if(i.shapeFlag&32){const a=t._;a?e&&a===1?o=!1:(se(r,t),!e&&a===1&&delete r._):(o=!t.$stable,Kl(t,r)),n=t}else t&&(Xl(s,t),n={default:1});if(o)for(const a in r)!ql(a)&&n[a]==null&&delete r[a]};function Yr(s,t,e,i,r=!1){if(D(s)){s.forEach((f,_)=>Yr(f,t&&(D(t)?t[_]:t),e,i,r));return}if(as(i)&&!r)return;const o=i.shapeFlag&4?Ro(i.component)||i.component.proxy:i.el,n=r?null:o,{i:a,r:l}=s,d=t&&t.r,c=a.refs===K?a.refs={}:a.refs,h=a.setupState;if(d!=null&&d!==l&&(re(d)?(c[d]=null,H(h,d)&&(h[d]=null)):ge(d)&&(d.value=null)),R(l))st(l,a,12,[n,c]);else{const f=re(l),_=ge(l);if(f||_){const E=()=>{if(s.f){const P=f?H(h,l)?h[l]:c[l]:l.value;r?D(P)&&vo(P,o):D(P)?P.includes(o)||P.push(o):f?(c[l]=[o],H(h,l)&&(h[l]=c[l])):(l.value=[o],s.k&&(c[s.k]=l.value))}else f?(c[l]=n,H(h,l)&&(h[l]=n)):_&&(l.value=n,s.k&&(c[s.k]=n))};n?(E.id=-1,fe(E,e)):E()}}}const fe=Bh;function gu(s){return vu(s)}function vu(s,t){const e=al();e.__VUE__=!0;const{insert:i,remove:r,patchProp:o,createElement:n,createText:a,createComment:l,setText:d,setElementText:c,parentNode:h,nextSibling:f,setScopeId:_=Ee,insertStaticContent:E}=s,P=(u,p,m,g=null,v=null,x=null,w=void 0,y=null,C=!!p.dynamicChildren)=>{if(u===p)return;u&&!Zt(u,p)&&(g=qi(u),Ne(u,v,x,!0),u=null),p.patchFlag===-2&&(C=!1,p.dynamicChildren=null);const{type:b,ref:A,shapeFlag:k}=p;switch(b){case Hs:L(u,p,m,g);break;case Ai:T(u,p,m,g);break;case fr:u==null&&z(p,m,g,w);break;case Ie:ji(u,p,m,g,v,x,w,y,C);break;default:k&1?U(u,p,m,g,v,x,w,y,C):k&6?Yi(u,p,m,g,v,x,w,y,C):(k&64||k&128)&&b.process(u,p,m,g,v,x,w,y,C,Jt)}A!=null&&v&&Yr(A,u&&u.ref,x,p||u,!p)},L=(u,p,m,g)=>{if(u==null)i(p.el=a(p.children),m,g);else{const v=p.el=u.el;p.children!==u.children&&d(v,p.children)}},T=(u,p,m,g)=>{u==null?i(p.el=l(p.children||""),m,g):p.el=u.el},z=(u,p,m,g)=>{[u.el,u.anchor]=E(u.children,p,m,g,u.el,u.anchor)},M=({el:u,anchor:p},m,g)=>{let v;for(;u&&u!==p;)v=f(u),i(u,m,g),u=v;i(p,m,g)},V=({el:u,anchor:p})=>{let m;for(;u&&u!==p;)m=f(u),r(u),u=m;r(p)},U=(u,p,m,g,v,x,w,y,C)=>{p.type==="svg"?w="svg":p.type==="math"&&(w="mathml"),u==null?N(p,m,g,v,x,w,y,C):rr(u,p,v,x,w,y,C)},N=(u,p,m,g,v,x,w,y)=>{let C,b;const{props:A,shapeFlag:k,transition:I,dirs:O}=u;if(C=u.el=n(u.type,x,A&&A.is,A),k&8?c(C,u.children):k&16&&Re(u.children,C,null,g,v,pr(u,x),w,y),O&&_t(u,null,g,"created"),Se(C,u,u.scopeId,w,g),A){for(const j in A)j!=="value"&&!hi(j)&&o(C,j,null,A[j],x,u.children,g,v,Be);"value"in A&&o(C,"value",null,A.value,x),(b=A.onVnodeBeforeMount)&&Le(b,g,u)}O&&_t(u,null,g,"beforeMount");const $=bu(v,I);$&&I.beforeEnter(C),i(C,p,m),((b=A&&A.onVnodeMounted)||$||O)&&fe(()=>{b&&Le(b,g,u),$&&I.enter(C),O&&_t(u,null,g,"mounted")},v)},Se=(u,p,m,g,v)=>{if(m&&_(u,m),g)for(let x=0;x<g.length;x++)_(u,g[x]);if(v){let x=v.subTree;if(p===x){const w=v.vnode;Se(u,w,w.scopeId,w.slotScopeIds,v.parent)}}},Re=(u,p,m,g,v,x,w,y,C=0)=>{for(let b=C;b<u.length;b++){const A=u[b]=y?Qe(u[b]):$e(u[b]);P(null,A,p,m,g,v,x,w,y)}},rr=(u,p,m,g,v,x,w)=>{const y=p.el=u.el;let{patchFlag:C,dynamicChildren:b,dirs:A}=p;C|=u.patchFlag&16;const k=u.props||K,I=p.props||K;let O;if(m&&gt(m,!1),(O=I.onVnodeBeforeUpdate)&&Le(O,m,p,u),A&&_t(p,u,m,"beforeUpdate"),m&&gt(m,!0),b?pt(u.dynamicChildren,b,y,m,g,pr(p,v),x):w||Y(u,p,y,null,m,g,pr(p,v),x,!1),C>0){if(C&16)Xt(y,p,k,I,m,g,v);else if(C&2&&k.class!==I.class&&o(y,"class",null,I.class,v),C&4&&o(y,"style",k.style,I.style,v),C&8){const $=p.dynamicProps;for(let j=0;j<$.length;j++){const q=$[j],oe=k[q],Te=I[q];(Te!==oe||q==="value")&&o(y,q,oe,Te,v,u.children,m,g,Be)}}C&1&&u.children!==p.children&&c(y,p.children)}else!w&&b==null&&Xt(y,p,k,I,m,g,v);((O=I.onVnodeUpdated)||A)&&fe(()=>{O&&Le(O,m,p,u),A&&_t(p,u,m,"updated")},g)},pt=(u,p,m,g,v,x,w)=>{for(let y=0;y<p.length;y++){const C=u[y],b=p[y],A=C.el&&(C.type===Ie||!Zt(C,b)||C.shapeFlag&70)?h(C.el):m;P(C,b,A,null,g,v,x,w,!0)}},Xt=(u,p,m,g,v,x,w)=>{if(m!==g){if(m!==K)for(const y in m)!hi(y)&&!(y in g)&&o(u,y,m[y],null,w,p.children,v,x,Be);for(const y in g){if(hi(y))continue;const C=g[y],b=m[y];C!==b&&y!=="value"&&o(u,y,b,C,w,p.children,v,x,Be)}"value"in g&&o(u,"value",m.value,g.value,w)}},ji=(u,p,m,g,v,x,w,y,C)=>{const b=p.el=u?u.el:a(""),A=p.anchor=u?u.anchor:a("");let{patchFlag:k,dynamicChildren:I,slotScopeIds:O}=p;O&&(y=y?y.concat(O):O),u==null?(i(b,m,g),i(A,m,g),Re(p.children||[],m,A,v,x,w,y,C)):k>0&&k&64&&I&&u.dynamicChildren?(pt(u.dynamicChildren,I,m,v,x,w,y),(p.key!=null||v&&p===v.subTree)&&Jl(u,p,!0)):Y(u,p,m,A,v,x,w,y,C)},Yi=(u,p,m,g,v,x,w,y,C)=>{p.slotScopeIds=y,u==null?p.shapeFlag&512?v.ctx.activate(p,m,g,w,C):or(p,m,g,v,x,w,C):fn(u,p,C)},or=(u,p,m,g,v,x,w)=>{const y=u.component=ku(u,g,v);if(Ll(u)&&(y.ctx.renderer=Jt),Du(y),y.asyncDep){if(v&&v.registerDep(y,he),!u.el){const C=y.subTree=Me(Ai);T(null,C,p,m)}}else he(y,u,p,m,v,x,w)},fn=(u,p,m)=>{const g=p.component=u.component;if(Fh(u,p,m))if(g.asyncDep&&!g.asyncResolved){X(g,p,m);return}else g.next=p,Ph(g.update),g.effect.dirty=!0,g.update();else p.el=u.el,g.vnode=p},he=(u,p,m,g,v,x,w)=>{const y=()=>{if(u.isMounted){let{next:A,bu:k,u:I,parent:O,vnode:$}=u;{const Mt=Ql(u);if(Mt){A&&(A.el=$.el,X(u,A,w)),Mt.asyncDep.then(()=>{u.isUnmounted||y()});return}}let j=A,q;gt(u,!1),A?(A.el=$.el,X(u,A,w)):A=$,k&&lr(k),(q=A.props&&A.props.onVnodeBeforeUpdate)&&Le(q,O,A,$),gt(u,!0);const oe=cr(u),Te=u.subTree;u.subTree=oe,P(Te,oe,h(Te.el),qi(Te),u,v,x),A.el=oe.el,j===null&&Lh(u,oe.el),I&&fe(I,v),(q=A.props&&A.props.onVnodeUpdated)&&fe(()=>Le(q,O,A,$),v)}else{let A;const{el:k,props:I}=p,{bm:O,m:$,parent:j}=u,q=as(p);if(gt(u,!1),O&&lr(O),!q&&(A=I&&I.onVnodeBeforeMount)&&Le(A,j,p),gt(u,!0),k&&vn){const oe=()=>{u.subTree=cr(u),vn(k,u.subTree,u,v,null)};q?p.type.__asyncLoader().then(()=>!u.isUnmounted&&oe()):oe()}else{const oe=u.subTree=cr(u);P(null,oe,m,g,u,v,x),p.el=oe.el}if($&&fe($,v),!q&&(A=I&&I.onVnodeMounted)){const oe=p;fe(()=>Le(A,j,oe),v)}(p.shapeFlag&256||j&&as(j.vnode)&&j.vnode.shapeFlag&256)&&u.a&&fe(u.a,v),u.isMounted=!0,p=m=g=null}},C=u.effect=new Co(y,Ee,()=>ko(b),u.scope),b=u.update=()=>{C.dirty&&C.run()};b.id=u.uid,gt(u,!0),b()},X=(u,p,m)=>{p.component=u;const g=u.vnode.props;u.vnode=p,u.next=null,pu(u,p.props,g,m),_u(u,p.children,m),lt(),kn(u),dt()},Y=(u,p,m,g,v,x,w,y,C=!1)=>{const b=u&&u.children,A=u?u.shapeFlag:0,k=p.children,{patchFlag:I,shapeFlag:O}=p;if(I>0){if(I&128){Gi(b,k,m,g,v,x,w,y,C);return}else if(I&256){ft(b,k,m,g,v,x,w,y,C);return}}O&8?(A&16&&Be(b,v,x),k!==b&&c(m,k)):A&16?O&16?Gi(b,k,m,g,v,x,w,y,C):Be(b,v,x,!0):(A&8&&c(m,""),O&16&&Re(k,m,g,v,x,w,y,C))},ft=(u,p,m,g,v,x,w,y,C)=>{u=u||$t,p=p||$t;const b=u.length,A=p.length,k=Math.min(b,A);let I;for(I=0;I<k;I++){const O=p[I]=C?Qe(p[I]):$e(p[I]);P(u[I],O,m,null,v,x,w,y,C)}b>A?Be(u,v,x,!0,!1,k):Re(p,m,g,v,x,w,y,C,k)},Gi=(u,p,m,g,v,x,w,y,C)=>{let b=0;const A=p.length;let k=u.length-1,I=A-1;for(;b<=k&&b<=I;){const O=u[b],$=p[b]=C?Qe(p[b]):$e(p[b]);if(Zt(O,$))P(O,$,m,null,v,x,w,y,C);else break;b++}for(;b<=k&&b<=I;){const O=u[k],$=p[I]=C?Qe(p[I]):$e(p[I]);if(Zt(O,$))P(O,$,m,null,v,x,w,y,C);else break;k--,I--}if(b>k){if(b<=I){const O=I+1,$=O<A?p[O].el:g;for(;b<=I;)P(null,p[b]=C?Qe(p[b]):$e(p[b]),m,$,v,x,w,y,C),b++}}else if(b>I)for(;b<=k;)Ne(u[b],v,x,!0),b++;else{const O=b,$=b,j=new Map;for(b=$;b<=I;b++){const be=p[b]=C?Qe(p[b]):$e(p[b]);be.key!=null&&j.set(be.key,b)}let q,oe=0;const Te=I-$+1;let Mt=!1,bn=0;const Qt=new Array(Te);for(b=0;b<Te;b++)Qt[b]=0;for(b=O;b<=k;b++){const be=u[b];if(oe>=Te){Ne(be,v,x,!0);continue}let Fe;if(be.key!=null)Fe=j.get(be.key);else for(q=$;q<=I;q++)if(Qt[q-$]===0&&Zt(be,p[q])){Fe=q;break}Fe===void 0?Ne(be,v,x,!0):(Qt[Fe-$]=b+1,Fe>=bn?bn=Fe:Mt=!0,P(be,p[Fe],m,null,v,x,w,y,C),oe++)}const yn=Mt?yu(Qt):$t;for(q=yn.length-1,b=Te-1;b>=0;b--){const be=$+b,Fe=p[be],xn=be+1<A?p[be+1].el:g;Qt[b]===0?P(null,Fe,m,xn,v,x,w,y,C):Mt&&(q<0||b!==yn[q]?mt(Fe,m,xn,2):q--)}}},mt=(u,p,m,g,v=null)=>{const{el:x,type:w,transition:y,children:C,shapeFlag:b}=u;if(b&6){mt(u.component.subTree,p,m,g);return}if(b&128){u.suspense.move(p,m,g);return}if(b&64){w.move(u,p,m,Jt);return}if(w===Ie){i(x,p,m);for(let k=0;k<C.length;k++)mt(C[k],p,m,g);i(u.anchor,p,m);return}if(w===fr){M(u,p,m);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),i(x,p,m),fe(()=>y.enter(x),v);else{const{leave:k,delayLeave:I,afterLeave:O}=y,$=()=>i(x,p,m),j=()=>{k(x,()=>{$(),O&&O()})};I?I(x,$,j):j()}else i(x,p,m)},Ne=(u,p,m,g=!1,v=!1)=>{const{type:x,props:w,ref:y,children:C,dynamicChildren:b,shapeFlag:A,patchFlag:k,dirs:I}=u;if(y!=null&&Yr(y,null,m,u,!0),A&256){p.ctx.deactivate(u);return}const O=A&1&&I,$=!as(u);let j;if($&&(j=w&&w.onVnodeBeforeUnmount)&&Le(j,p,u),A&6)Nc(u.component,m,g);else{if(A&128){u.suspense.unmount(m,g);return}O&&_t(u,null,p,"beforeUnmount"),A&64?u.type.remove(u,p,m,v,Jt,g):b&&(x!==Ie||k>0&&k&64)?Be(b,p,m,!1,!0):(x===Ie&&k&384||!v&&A&16)&&Be(C,p,m),g&&mn(u)}($&&(j=w&&w.onVnodeUnmounted)||O)&&fe(()=>{j&&Le(j,p,u),O&&_t(u,null,p,"unmounted")},m)},mn=u=>{const{type:p,el:m,anchor:g,transition:v}=u;if(p===Ie){Rc(m,g);return}if(p===fr){V(u);return}const x=()=>{r(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(u.shapeFlag&1&&v&&!v.persisted){const{leave:w,delayLeave:y}=v,C=()=>w(m,x);y?y(u.el,x,C):C()}else x()},Rc=(u,p)=>{let m;for(;u!==p;)m=f(u),r(u),u=m;r(p)},Nc=(u,p,m)=>{const{bum:g,scope:v,update:x,subTree:w,um:y}=u;g&&lr(g),v.stop(),x&&(x.active=!1,Ne(w,u,p,m)),y&&fe(y,p),fe(()=>{u.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Be=(u,p,m,g=!1,v=!1,x=0)=>{for(let w=x;w<u.length;w++)Ne(u[w],p,m,g,v)},qi=u=>u.shapeFlag&6?qi(u.component.subTree):u.shapeFlag&128?u.suspense.next():f(u.anchor||u.el);let nr=!1;const _n=(u,p,m)=>{u==null?p._vnode&&Ne(p._vnode,null,null,!0):P(p._vnode||null,u,p,null,null,null,m),nr||(nr=!0,kn(),Il(),nr=!1),p._vnode=u},Jt={p:P,um:Ne,m:mt,r:mn,mt:or,mc:Re,pc:Y,pbc:pt,n:qi,o:s};let gn,vn;return{render:_n,hydrate:gn,createApp:cu(_n,gn)}}function pr({type:s,props:t},e){return e==="svg"&&s==="foreignObject"||e==="mathml"&&s==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function gt({effect:s,update:t},e){s.allowRecurse=t.allowRecurse=e}function bu(s,t){return(!s||s&&!s.pendingBranch)&&t&&!t.persisted}function Jl(s,t,e=!1){const i=s.children,r=t.children;if(D(i)&&D(r))for(let o=0;o<i.length;o++){const n=i[o];let a=r[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[o]=Qe(r[o]),a.el=n.el),e||Jl(n,a)),a.type===Hs&&(a.el=n.el)}}function yu(s){const t=s.slice(),e=[0];let i,r,o,n,a;const l=s.length;for(i=0;i<l;i++){const d=s[i];if(d!==0){if(r=e[e.length-1],s[r]<d){t[i]=r,e.push(i);continue}for(o=0,n=e.length-1;o<n;)a=o+n>>1,s[e[a]]<d?o=a+1:n=a;d<s[e[o]]&&(o>0&&(t[i]=e[o-1]),e[o]=i)}}for(o=e.length,n=e[o-1];o-- >0;)e[o]=n,n=t[n];return e}function Ql(s){const t=s.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ql(t)}const xu=s=>s.__isTeleport,Ie=Symbol.for("v-fgt"),Hs=Symbol.for("v-txt"),Ai=Symbol.for("v-cmt"),fr=Symbol.for("v-stc"),mi=[];let De=null;function $i(s=!1){mi.push(De=s?null:[])}function Cu(){mi.pop(),De=mi[mi.length-1]||null}let Si=1;function Vn(s){Si+=s}function Zl(s){return s.dynamicChildren=Si>0?De||$t:null,Cu(),Si>0&&De&&De.push(s),s}function Bs(s,t,e,i,r,o){return Zl(J(s,t,e,i,r,o,!0))}function wu(s,t,e,i,r){return Zl(Me(s,t,e,i,r,!0))}function Eu(s){return s?s.__v_isVNode===!0:!1}function Zt(s,t){return s.type===t.type&&s.key===t.key}const ed=({key:s})=>s??null,ds=({ref:s,ref_key:t,ref_for:e})=>(typeof s=="number"&&(s=""+s),s!=null?re(s)||ge(s)||R(s)?{i:ke,r:s,k:t,f:!!e}:s:null);function J(s,t=null,e=null,i=0,r=null,o=s===Ie?0:1,n=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:s,props:t,key:t&&ed(t),ref:t&&ds(t),scopeId:Ls,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ke};return a?(Mo(l,e),o&128&&s.normalize(l)):e&&(l.shapeFlag|=re(e)?8:16),Si>0&&!n&&De&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&De.push(l),l}const Me=Au;function Au(s,t=null,e=null,i=0,r=null,o=!1){if((!s||s===Ml)&&(s=Ai),Eu(s)){const a=Yt(s,t,!0);return e&&Mo(a,e),Si>0&&!o&&De&&(a.shapeFlag&6?De[De.indexOf(s)]=a:De.push(a)),a.patchFlag|=-2,a}if(Fu(s)&&(s=s.__vccOpts),t){t=Su(t);let{class:a,style:l}=t;a&&!re(a)&&(t.class=xo(a)),Q(l)&&(Cl(l)&&!D(l)&&(l=se({},l)),t.style=yo(l))}const n=re(s)?1:Hh(s)?128:xu(s)?64:Q(s)?4:R(s)?2:0;return J(s,t,e,i,r,n,o,!0)}function Su(s){return s?Cl(s)||jl(s)?se({},s):s:null}function Yt(s,t,e=!1,i=!1){const{props:r,ref:o,patchFlag:n,children:a,transition:l}=s,d=t?Pu(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:s.type,props:d,key:d&&ed(d),ref:t&&t.ref?e&&o?D(o)?o.concat(ds(t)):[o,ds(t)]:ds(t):o,scopeId:s.scopeId,slotScopeIds:s.slotScopeIds,children:a,target:s.target,targetAnchor:s.targetAnchor,staticCount:s.staticCount,shapeFlag:s.shapeFlag,patchFlag:t&&s.type!==Ie?n===-1?16:n|16:n,dynamicProps:s.dynamicProps,dynamicChildren:s.dynamicChildren,appContext:s.appContext,dirs:s.dirs,transition:l,component:s.component,suspense:s.suspense,ssContent:s.ssContent&&Yt(s.ssContent),ssFallback:s.ssFallback&&Yt(s.ssFallback),el:s.el,anchor:s.anchor,ctx:s.ctx,ce:s.ce};return l&&i&&(c.transition=l.clone(c)),c}function Tu(s=" ",t=0){return Me(Hs,null,s,t)}function $e(s){return s==null||typeof s=="boolean"?Me(Ai):D(s)?Me(Ie,null,s.slice()):typeof s=="object"?Qe(s):Me(Hs,null,String(s))}function Qe(s){return s.el===null&&s.patchFlag!==-1||s.memo?s:Yt(s)}function Mo(s,t){let e=0;const{shapeFlag:i}=s;if(t==null)t=null;else if(D(t))e=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Mo(s,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!jl(t)?t._ctx=ke:r===3&&ke&&(ke.slots._===1?t._=1:(t._=2,s.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:ke},e=32):(t=String(t),i&64?(e=16,t=[Tu(t)]):e=8);s.children=t,s.shapeFlag|=e}function Pu(...s){const t={};for(let e=0;e<s.length;e++){const i=s[e];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=xo([t.class,i.class]));else if(r==="style")t.style=yo([t.style,i.style]);else if(ks(r)){const o=t[r],n=i[r];n&&o!==n&&!(D(o)&&o.includes(n))&&(t[r]=o?[].concat(o,n):n)}else r!==""&&(t[r]=i[r])}return t}function Le(s,t,e,i=null){Oe(s,t,7,[e,i])}const Iu=Vl();let zu=0;function ku(s,t,e){const i=s.type,r=(t?t.appContext:s.appContext)||Iu,o={uid:zu++,vnode:s,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gl(i,r),emitsOptions:kl(i,r),emit:null,emitted:null,propsDefaults:K,inheritAttrs:i.inheritAttrs,ctx:K,data:K,props:K,attrs:K,slots:K,refs:K,setupState:K,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=kh.bind(null,o),s.ce&&s.ce(o),o}let ce=null,bs,Gr;{const s=al(),t=(e,i)=>{let r;return(r=s[e])||(r=s[e]=[]),r.push(i),o=>{r.length>1?r.forEach(n=>n(o)):r[0](o)}};bs=t("__VUE_INSTANCE_SETTERS__",e=>ce=e),Gr=t("__VUE_SSR_SETTERS__",e=>Vs=e)}const Hi=s=>{const t=ce;return bs(s),s.scope.on(),()=>{s.scope.off(),bs(t)}},Un=()=>{ce&&ce.scope.off(),bs(null)};function td(s){return s.vnode.shapeFlag&4}let Vs=!1;function Du(s,t=!1){t&&Gr(t);const{props:e,children:i}=s.vnode,r=td(s);uu(s,e,r,t),mu(s,i);const o=r?Ou(s,t):void 0;return t&&Gr(!1),o}function Ou(s,t){const e=s.type;s.accessCache=Object.create(null),s.proxy=new Proxy(s.ctx,su);const{setup:i}=e;if(i){const r=s.setupContext=i.length>1?Ru(s):null,o=Hi(s);lt();const n=st(i,s,0,[s.props,r]);if(dt(),o(),sl(n)){if(n.then(Un,Un),t)return n.then(a=>{Wn(s,a,t)}).catch(a=>{Ns(a,s,0)});s.asyncDep=n}else Wn(s,n,t)}else id(s,t)}function Wn(s,t,e){R(t)?s.type.__ssrInlineRender?s.ssrRender=t:s.render=t:Q(t)&&(s.setupState=Al(t)),id(s,e)}let jn;function id(s,t,e){const i=s.type;if(!s.render){if(!t&&jn&&!i.render){const r=i.template||Do(s).template;if(r){const{isCustomElement:o,compilerOptions:n}=s.appContext.config,{delimiters:a,compilerOptions:l}=i,d=se(se({isCustomElement:o,delimiters:a},n),l);i.render=jn(r,d)}}s.render=i.render||Ee}{const r=Hi(s);lt();try{ru(s)}finally{dt(),r()}}}const Mu={get(s,t){return _e(s,"get",""),s[t]}};function Ru(s){const t=e=>{s.exposed=e||{}};return{attrs:new Proxy(s.attrs,Mu),slots:s.slots,emit:s.emit,expose:t}}function Ro(s){if(s.exposed)return s.exposeProxy||(s.exposeProxy=new Proxy(Al(yh(s.exposed)),{get(t,e){if(e in t)return t[e];if(e in pi)return pi[e](s)},has(t,e){return e in t||e in pi}}))}function Nu(s,t=!0){return R(s)?s.displayName||s.name:s.name||t&&s.__name}function Fu(s){return R(s)&&"__vccOpts"in s}const cs=(s,t)=>xh(s,t,Vs),Lu="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const $u="http://www.w3.org/2000/svg",Hu="http://www.w3.org/1998/Math/MathML",Ze=typeof document<"u"?document:null,Yn=Ze&&Ze.createElement("template"),Bu={insert:(s,t,e)=>{t.insertBefore(s,e||null)},remove:s=>{const t=s.parentNode;t&&t.removeChild(s)},createElement:(s,t,e,i)=>{const r=t==="svg"?Ze.createElementNS($u,s):t==="mathml"?Ze.createElementNS(Hu,s):Ze.createElement(s,e?{is:e}:void 0);return s==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:s=>Ze.createTextNode(s),createComment:s=>Ze.createComment(s),setText:(s,t)=>{s.nodeValue=t},setElementText:(s,t)=>{s.textContent=t},parentNode:s=>s.parentNode,nextSibling:s=>s.nextSibling,querySelector:s=>Ze.querySelector(s),setScopeId(s,t){s.setAttribute(t,"")},insertStaticContent(s,t,e,i,r,o){const n=e?e.previousSibling:t.lastChild;if(r&&(r===o||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),e),!(r===o||!(r=r.nextSibling)););else{Yn.innerHTML=i==="svg"?`<svg>${s}</svg>`:i==="mathml"?`<math>${s}</math>`:s;const a=Yn.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[n?n.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Vu=Symbol("_vtc");function Uu(s,t,e){const i=s[Vu];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?s.removeAttribute("class"):e?s.setAttribute("class",t):s.className=t}const Gn=Symbol("_vod"),Wu=Symbol("_vsh"),ju=Symbol(""),Yu=/(^|;)\s*display\s*:/;function Gu(s,t,e){const i=s.style,r=re(e);let o=!1;if(e&&!r){if(t)if(re(t))for(const n of t.split(";")){const a=n.slice(0,n.indexOf(":")).trim();e[a]==null&&hs(i,a,"")}else for(const n in t)e[n]==null&&hs(i,n,"");for(const n in e)n==="display"&&(o=!0),hs(i,n,e[n])}else if(r){if(t!==e){const n=i[ju];n&&(e+=";"+n),i.cssText=e,o=Yu.test(e)}}else t&&s.removeAttribute("style");Gn in s&&(s[Gn]=o?i.display:"",s[Wu]&&(i.display="none"))}const qn=/\s*!important$/;function hs(s,t,e){if(D(e))e.forEach(i=>hs(s,t,i));else if(e==null&&(e=""),t.startsWith("--"))s.setProperty(t,e);else{const i=qu(s,t);qn.test(e)?s.setProperty(ze(i),e.replace(qn,""),"important"):s[i]=e}}const Kn=["Webkit","Moz","ms"],mr={};function qu(s,t){const e=mr[t];if(e)return e;let i=xe(t);if(i!=="filter"&&i in s)return mr[t]=i;i=Ms(i);for(let r=0;r<Kn.length;r++){const o=Kn[r]+i;if(o in s)return mr[t]=o}return t}const Xn="http://www.w3.org/1999/xlink";function Ku(s,t,e,i,r){if(i&&t.startsWith("xlink:"))e==null?s.removeAttributeNS(Xn,t.slice(6,t.length)):s.setAttributeNS(Xn,t,e);else{const o=Xc(t);e==null||o&&!ll(e)?s.removeAttribute(t):s.setAttribute(t,o?"":e)}}function Xu(s,t,e,i,r,o,n){if(t==="innerHTML"||t==="textContent"){i&&n(i,r,o),s[t]=e??"";return}const a=s.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const d=a==="OPTION"?s.getAttribute("value")||"":s.value,c=e??"";(d!==c||!("_value"in s))&&(s.value=c),e==null&&s.removeAttribute(t),s._value=e;return}let l=!1;if(e===""||e==null){const d=typeof s[t];d==="boolean"?e=ll(e):e==null&&d==="string"?(e="",l=!0):d==="number"&&(e=0,l=!0)}try{s[t]=e}catch{}l&&s.removeAttribute(t)}function Ju(s,t,e,i){s.addEventListener(t,e,i)}function Qu(s,t,e,i){s.removeEventListener(t,e,i)}const Jn=Symbol("_vei");function Zu(s,t,e,i,r=null){const o=s[Jn]||(s[Jn]={}),n=o[t];if(i&&n)n.value=i;else{const[a,l]=ep(t);if(i){const d=o[t]=sp(i,r);Ju(s,a,d,l)}else n&&(Qu(s,a,n,l),o[t]=void 0)}}const Qn=/(?:Once|Passive|Capture)$/;function ep(s){let t;if(Qn.test(s)){t={};let i;for(;i=s.match(Qn);)s=s.slice(0,s.length-i[0].length),t[i[0].toLowerCase()]=!0}return[s[2]===":"?s.slice(3):ze(s.slice(2)),t]}let _r=0;const tp=Promise.resolve(),ip=()=>_r||(tp.then(()=>_r=0),_r=Date.now());function sp(s,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;Oe(rp(i,e.value),t,5,[i])};return e.value=s,e.attached=ip(),e}function rp(s,t){if(D(t)){const e=s.stopImmediatePropagation;return s.stopImmediatePropagation=()=>{e.call(s),s._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Zn=s=>s.charCodeAt(0)===111&&s.charCodeAt(1)===110&&s.charCodeAt(2)>96&&s.charCodeAt(2)<123,op=(s,t,e,i,r,o,n,a,l)=>{const d=r==="svg";t==="class"?Uu(s,i,d):t==="style"?Gu(s,e,i):ks(t)?go(t)||Zu(s,t,e,i,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):np(s,t,i,d))?Xu(s,t,i,o,n,a,l):(t==="true-value"?s._trueValue=i:t==="false-value"&&(s._falseValue=i),Ku(s,t,i,d))};function np(s,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in s&&Zn(t)&&R(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&s.tagName==="INPUT"||t==="type"&&s.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=s.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Zn(t)&&re(e)?!1:t in s}/*! #__NO_SIDE_EFFECTS__ */function ei(s,t){const e=Li(s);class i extends No{constructor(o){super(e,o,t)}}return i.def=e,i}const ap=typeof HTMLElement<"u"?HTMLElement:class{};class No extends ap{constructor(t,e={},i){super(),this._def=t,this._props=e,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this._ob=null,this.shadowRoot&&i?i(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,this._ob&&(this._ob.disconnect(),this._ob=null),Tl(()=>{this._connected||(ta(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let i=0;i<this.attributes.length;i++)this._setAttr(this.attributes[i].name);this._ob=new MutationObserver(i=>{for(const r of i)this._setAttr(r.attributeName)}),this._ob.observe(this,{attributes:!0});const t=(i,r=!1)=>{const{props:o,styles:n}=i;let a;if(o&&!D(o))for(const l in o){const d=o[l];(d===Number||d&&d.type===Number)&&(l in this._props&&(this._props[l]=Cn(this._props[l])),(a||(a=Object.create(null)))[xe(l)]=!0)}this._numberProps=a,r&&this._resolveProps(i),this._applyStyles(n),this._update()},e=this._def.__asyncLoader;e?e().then(i=>t(i,!0)):t(this._def)}_resolveProps(t){const{props:e}=t,i=D(e)?e:Object.keys(e||{});for(const r of Object.keys(this))r[0]!=="_"&&i.includes(r)&&this._setProp(r,this[r],!0,!1);for(const r of i.map(xe))Object.defineProperty(this,r,{get(){return this._getProp(r)},set(o){this._setProp(r,o)}})}_setAttr(t){let e=this.hasAttribute(t)?this.getAttribute(t):void 0;const i=xe(t);this._numberProps&&this._numberProps[i]&&(e=Cn(e)),this._setProp(i,e,!1)}_getProp(t){return this._props[t]}_setProp(t,e,i=!0,r=!0){e!==this._props[t]&&(this._props[t]=e,r&&this._instance&&this._update(),i&&(e===!0?this.setAttribute(ze(t),""):typeof e=="string"||typeof e=="number"?this.setAttribute(ze(t),e+""):e||this.removeAttribute(ze(t))))}_update(){ta(this._createVNode(),this.shadowRoot)}_createVNode(){const t=Me(this._def,se({},this._props));return this._instance||(t.ce=e=>{this._instance=e,e.isCE=!0;const i=(o,n)=>{this.dispatchEvent(new CustomEvent(o,{detail:n}))};e.emit=(o,...n)=>{i(o,n),ze(o)!==o&&i(ze(o),n)};let r=this;for(;r=r&&(r.parentNode||r.host);)if(r instanceof No){e.parent=r._instance,e.provides=r._instance.provides;break}}),t}_applyStyles(t){t&&t.forEach(e=>{const i=document.createElement("style");i.textContent=e,this.shadowRoot.appendChild(i)})}}const lp=se({patchProp:op},Bu);let ea;function dp(){return ea||(ea=gu(lp))}const ta=(...s)=>{dp().render(...s)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Z(s){const t=customElements.get(s.is);if(!t)Object.defineProperty(s,"version",{get(){return"24.3.13"}}),customElements.define(s.is,s);else{const e=t.version;e&&s.version&&e===s.version?console.warn(`The component ${s.is} has been loaded twice`):console.error(`Tried to define ${s.is} version ${s.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cp extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}Z(cp);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const us=globalThis,Fo=us.ShadowRoot&&(us.ShadyCSS===void 0||us.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Lo=Symbol(),ia=new WeakMap;let $o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Lo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Fo&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ia.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ia.set(e,t))}return t}toString(){return this.cssText}};const hp=s=>new $o(typeof s=="string"?s:s+"",void 0,Lo),S=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new $o(e,s,Lo)},up=(s,t)=>{if(Fo)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=us.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},sa=Fo?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return hp(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pp,defineProperty:fp,getOwnPropertyDescriptor:mp,getOwnPropertyNames:_p,getOwnPropertySymbols:gp,getPrototypeOf:vp}=Object,rt=globalThis,ra=rt.trustedTypes,bp=ra?ra.emptyScript:"",gr=rt.reactiveElementPolyfillSupport,_i=(s,t)=>s,qr={toAttribute(s,t){switch(t){case Boolean:s=s?bp:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},sd=(s,t)=>!pp(s,t),oa={attribute:!0,type:String,converter:qr,reflect:!1,hasChanged:sd};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),rt.litPropertyMetadata??(rt.litPropertyMetadata=new WeakMap);let Nt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=oa){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&fp(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=mp(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const a=r==null?void 0:r.call(this);o.call(this,n),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??oa}static _$Ei(){if(this.hasOwnProperty(_i("elementProperties")))return;const t=vp(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(_i("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(_i("properties"))){const e=this.properties,i=[..._p(e),...gp(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(sa(r))}else t!==void 0&&e.push(sa(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return up(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var o;const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:qr).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){var o;const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:qr;this._$Em=r,this[r]=a.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??sd)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,n]of r)n.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var r;return(r=i.hostUpdated)==null?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};Nt.elementStyles=[],Nt.shadowRootOptions={mode:"open"},Nt[_i("elementProperties")]=new Map,Nt[_i("finalized")]=new Map,gr==null||gr({ReactiveElement:Nt}),(rt.reactiveElementVersions??(rt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gi=globalThis,ys=gi.trustedTypes,na=ys?ys.createPolicy("lit-html",{createHTML:s=>s}):void 0,rd="$lit$",et=`lit$${Math.random().toFixed(9).slice(2)}$`,od="?"+et,yp=`<${od}>`,Pt=document,Ti=()=>Pt.createComment(""),Pi=s=>s===null||typeof s!="object"&&typeof s!="function",nd=Array.isArray,xp=s=>nd(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",vr=`[ 	
\f\r]`,ti=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,aa=/-->/g,la=/>/g,vt=RegExp(`>|${vr}(?:([^\\s"'>=/]+)(${vr}*=${vr}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),da=/'/g,ca=/"/g,ad=/^(?:script|style|textarea|title)$/i,Cp=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),wp=Cp(2),It=Symbol.for("lit-noChange"),ee=Symbol.for("lit-nothing"),ha=new WeakMap,wt=Pt.createTreeWalker(Pt,129);function ld(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return na!==void 0?na.createHTML(t):t}const Ep=(s,t)=>{const e=s.length-1,i=[];let r,o=t===2?"<svg>":"",n=ti;for(let a=0;a<e;a++){const l=s[a];let d,c,h=-1,f=0;for(;f<l.length&&(n.lastIndex=f,c=n.exec(l),c!==null);)f=n.lastIndex,n===ti?c[1]==="!--"?n=aa:c[1]!==void 0?n=la:c[2]!==void 0?(ad.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=vt):c[3]!==void 0&&(n=vt):n===vt?c[0]===">"?(n=r??ti,h=-1):c[1]===void 0?h=-2:(h=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?vt:c[3]==='"'?ca:da):n===ca||n===da?n=vt:n===aa||n===la?n=ti:(n=vt,r=void 0);const _=n===vt&&s[a+1].startsWith("/>")?" ":"";o+=n===ti?l+yp:h>=0?(i.push(d),l.slice(0,h)+rd+l.slice(h)+et+_):l+et+(h===-2?a:_)}return[ld(s,o+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class Ii{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const a=t.length-1,l=this.parts,[d,c]=Ep(t,e);if(this.el=Ii.createElement(d,i),wt.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=wt.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const h of r.getAttributeNames())if(h.endsWith(rd)){const f=c[n++],_=r.getAttribute(h).split(et),E=/([.?@])?(.*)/.exec(f);l.push({type:1,index:o,name:E[2],strings:_,ctor:E[1]==="."?Sp:E[1]==="?"?Tp:E[1]==="@"?Pp:Us}),r.removeAttribute(h)}else h.startsWith(et)&&(l.push({type:6,index:o}),r.removeAttribute(h));if(ad.test(r.tagName)){const h=r.textContent.split(et),f=h.length-1;if(f>0){r.textContent=ys?ys.emptyScript:"";for(let _=0;_<f;_++)r.append(h[_],Ti()),wt.nextNode(),l.push({type:2,index:++o});r.append(h[f],Ti())}}}else if(r.nodeType===8)if(r.data===od)l.push({type:2,index:o});else{let h=-1;for(;(h=r.data.indexOf(et,h+1))!==-1;)l.push({type:7,index:o}),h+=et.length-1}o++}}static createElement(t,e){const i=Pt.createElement("template");return i.innerHTML=t,i}}function Gt(s,t,e=s,i){var n,a;if(t===It)return t;let r=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const o=Pi(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=r:e._$Cl=r),r!==void 0&&(t=Gt(s,r._$AS(s,t.values),r,i)),t}class Ap{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=((t==null?void 0:t.creationScope)??Pt).importNode(e,!0);wt.currentNode=r;let o=wt.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new Bi(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new Ip(o,this,t)),this._$AV.push(d),l=i[++a]}n!==(l==null?void 0:l.index)&&(o=wt.nextNode(),n++)}return wt.currentNode=Pt,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Bi{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=ee,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Gt(this,t,e),Pi(t)?t===ee||t==null||t===""?(this._$AH!==ee&&this._$AR(),this._$AH=ee):t!==this._$AH&&t!==It&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xp(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==ee&&Pi(this._$AH)?this._$AA.nextSibling.data=t:this.T(Pt.createTextNode(t)),this._$AH=t}$(t){var o;const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Ii.createElement(ld(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{const n=new Ap(r,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=ha.get(t.strings);return e===void 0&&ha.set(t.strings,e=new Ii(t)),e}k(t){nd(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new Bi(this.S(Ti()),this.S(Ti()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class Us{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=ee,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ee}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(o===void 0)t=Gt(this,t,e,0),n=!Pi(t)||t!==this._$AH&&t!==It,n&&(this._$AH=t);else{const a=t;let l,d;for(t=o[0],l=0;l<o.length-1;l++)d=Gt(this,a[i+l],e,l),d===It&&(d=this._$AH[l]),n||(n=!Pi(d)||d!==this._$AH[l]),d===ee?t=ee:t!==ee&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}n&&!r&&this.j(t)}j(t){t===ee?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Sp extends Us{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ee?void 0:t}}class Tp extends Us{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==ee)}}class Pp extends Us{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=Gt(this,t,e,0)??ee)===It)return;const i=this._$AH,r=t===ee&&i!==ee||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==ee&&(i===ee||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Ip{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Gt(this,t)}}const br=gi.litHtmlPolyfillSupport;br==null||br(Ii,Bi),(gi.litHtmlVersions??(gi.litHtmlVersions=[])).push("3.1.3");const zp=(s,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let r=i._$litPart$;if(r===void 0){const o=(e==null?void 0:e.renderBefore)??null;i._$litPart$=r=new Bi(t.insertBefore(Ti(),o),o,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ps extends Nt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zp(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return It}}var tl;ps._$litElement$=!0,ps.finalized=!0,(tl=globalThis.litElementHydrateSupport)==null||tl.call(globalThis,{LitElement:ps});const yr=globalThis.litElementPolyfillSupport;yr==null||yr({LitElement:ps});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.5");/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ws=s=>class extends s{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(e,i,r){super.attributeChangedCallback(e,i,r),e==="theme"&&this._set_theme(r)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const dd=[];function cd(s){return s&&Object.prototype.hasOwnProperty.call(s,"__themes")}function kp(s){return cd(customElements.get(s))}function Dp(s=[]){return[s].flat(1/0).filter(t=>t instanceof $o?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function F(s,t,e={}){s&&kp(s)&&console.warn(`The custom element definition for "${s}"
      was finalized before a style module was registered.
      Make sure to add component specific style modules before
      importing the corresponding custom element.`),t=Dp(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(s,t,e):dd.push({themeFor:s,styles:t,include:e.include,moduleId:e.moduleId})}function Kr(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():dd}function Op(s,t){return(s||"").split(" ").some(e=>new RegExp(`^${e.split("*").join(".*")}$`,"u").test(t))}function Mp(s=""){let t=0;return s.startsWith("lumo-")||s.startsWith("material-")?t=1:s.startsWith("vaadin-")&&(t=2),t}function hd(s){const t=[];return s.include&&[].concat(s.include).forEach(e=>{const i=Kr().find(r=>r.moduleId===e);i?t.push(...hd(i),...i.styles):console.warn(`Included moduleId ${e} not found in style registry`)},s.styles),t}function Rp(s,t){const e=document.createElement("style");e.innerHTML=s.map(i=>i.cssText).join(`
`),t.content.appendChild(e)}function Np(s){const t=`${s}-default-theme`,e=Kr().filter(i=>i.moduleId!==t&&Op(i.themeFor,s)).map(i=>({...i,styles:[...hd(i),...i.styles],includePriority:Mp(i.moduleId)})).sort((i,r)=>r.includePriority-i.includePriority);return e.length>0?e:Kr().filter(i=>i.moduleId===t)}const ve=s=>class extends Ws(s){static finalize(){if(super.finalize(),this.elementStyles)return;const e=this.prototype._template;!e||cd(this)||Rp(this.getStylesForThis(),e)}static finalizeStyles(e){const i=this.getStylesForThis();return e?[...super.finalizeStyles(e),...i]:i}static getStylesForThis(){const e=Object.getPrototypeOf(this.prototype),i=(e?e.constructor.__themes:[])||[];this.__themes=[...i,...Np(this.is)];const r=this.__themes.flatMap(o=>o.styles);return r.filter((o,n)=>n===r.lastIndexOf(o))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fp=(s,...t)=>{const e=document.createElement("style");e.id=s,e.textContent=t.map(i=>i.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",e)},Dt=(s,...t)=>{Fp(`lumo-${s}`,t)};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lp=S`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;Dt("color-props",Lp);const $p=S`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
`;F("",$p,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hp=S`
  @font-face {
    font-family: 'lumo-icons';
    src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEgAAsAAAAAIjQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2cAABeAWri7U2hlYWQAAA3oAAAAMAAAADZa/6SsaGhlYQAADhgAAAAdAAAAJAbpA35obXR4AAAOOAAAABAAAACspBAAAGxvY2EAAA5IAAAAWAAAAFh57oA4bWF4cAAADqAAAAAfAAAAIAFKAXBuYW1lAAAOwAAAATEAAAIuUUJZCHBvc3QAAA/0AAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wic1Z9N0jpNHCD9SNqqoVBgbQoMjY+pjA4hNnWa2pV1rHSIif0DGkyT2k10Kmu1Cag6huj4ZpqYBHSqJsTEJgZCG3TaVBFv595nO3ZIv4RIrPPuvefe884599zzO/cRF8G/tgn6CFFImNgkR0ggX8wlspbhSSWSdrC5ozd30s2dw5afzvgtyz9/zG9t1hV4RtF1pXolowvtzc2z6L2aYUQM45jKH9WDTvd1LRDoDASYWhfTzTyvboXz6uZX4ARX5wrF39y+HM2+CJ8d0pkyqBIqoze3D12ez4DrFoYzxI8dWwMrDlZ2DMqQAR9AROsJU+2smlTPaTTco52BVxXa2a2+I8vvqd2dVHm1LoPeTn/AZPRYGthDYOeZjBjKoFsVGulR3lGU95SeCK44oHU7MhWUGUKZDT3oSUcG2GWuh+EDDfUYA/jhIhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgJW95qEtpJ1VcW9HiTriZBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKifkqHRCoWZc3m11Wa/dKdFgXD4kSYfkeJBKd8KMz7J8dZn/cGRCcLGDnA2Ge3bKzcvlnTDNthFWLH7Xt80ua5FMjA4WKelWv5Xo16vHuYzpRbJhhdVlftuRK0VlR27D9lu5TF0DPBi60OrHNO0AfP/uRWvhn/U3LXICE+nh+3IHPUJ8JE6GyBjZQLbjGchlrSgYngF8zyrIF4NJD3atUcgWsWunGN/UHX5B5/yg7uF87Nqp4Gf52F3gH73DjEZNRoqCKAr9giQJp5rGJABpiVE2htNhW9R8nw0jqYjCYcY4LIjwYNScf4WN06IZnZCEqsI4cFaQbo4Z1TsZBx40YhXkHOecaYE5oY37IIQ+iJJ+UsDYSun5MuRSBRZRUUhlY2DqOGajOR6zrSU/5My6l2DnusH1GQgnw5BZP7iuYM/ahcfQ7Z8y51ddfutvuwNqWQ0cBYr8fj0U0vsHpwerVaB2sWhXT2NExi2r1KUE2tUuVMnkepVQrxTmpQrZTG4iu8he8iPyM3KcPE/+RP5KPoE2CEAKclCBzXATxkYOtUY/o961PWRqsj0chRrHFBbtrjP9/P0ven5pcbRdpL94vfsy33e5+izuwz3nFLFPVNayPZx/jdG1fOChflFRvYzsW6L18efgLrSWIgvcqnGJYi4skO4xREURjbDuxKke5v0T3Mrzkt2fi31uyZlLLrqIpEuXXsMlgw442Jb0GAxjS1DM20kBoCzHLXm/jEm0IltdcvU0fEW24jgiwwRjVd9u4NJHcIyoHJcwvyVqgqj5hqBJ1ZWSJryh9p56UWhX1XbhRbW2ZopuZWsQd5y8mEQ8M+C6xjRYxZbDKWf5AgY+Qq/l6wSPk16zDFjowYuu+wjx13mfkxbyDDxadYT/LijZyI0THB+6yfLaWsRcO82zo9mWTNtpO18qlorZoIVMwSN40tky5DOQ1MCIAe24mvlsuwIIxPb10+uXDQ4uWz/9m3rj+ql7p6bufZARuPVq5tXtsn6KwfP8Jy0TeWOyNhUJN6mhX5rkUTtUppQWEMNTqEdaCGKFYKJaQrCE4JtDLYOlNEKmO5kBTPGY2A0N2sY3+dVlo1N9ycBsIGtOjQ2p/tlZvzo0ur4v6cOh8NTospB7U/X40KahoU3bGIH97dnwmtHlYffVG3R1YOwKM2vNhrPhCT5zk64sG53oS4b31aYjqe/B7+kQiXBN+b6h21hNUPMq29B8CU4elINdygMPKF1B+WBTG7Z9ZshpN/xwEuuDQZR+nuoo4CDaAiiwXmLpmukMQyPf/JMclqgL1ixZQ/nnP2VbdUODFGt2fgBvL123rlLYu/6A9ckb7F3K0/CyBMEu6aQoPscroCcacVehvyQyCZAsizsWWBkoLC+WAiWnOksLKaeuQDzGuqSk42aiYTiJ4zf9afl17SrqaTO1f+XlZAfIuYcq7/IqYMaMrksOJ6vHkOCPDq943xcCnHqVD9pHFRpMqSPXrIua1WNs+tOz1U+ciTCDpPk+c4QYJIHnYhxP/kVPAq+ahFpVhPcHp8qyarhiF+HsBU9Hrl+UZa876fbKipL0KqB6OdUveErgtOI97fZ63ae9SvWU6k2w1JfwqnUbHsYcFCJFrC/W12zIMMirWYEHxMPs6LGYSdkSZ5TsNP9PCpwnWC3HKZ1lydNjWHC2Mn3l6vL0dHn1ldP3LTSrX+vKrBqv7KmMr8p0SR6P1NqF63or6XRlIyO90f7+kf7+myOhvt4tq7f09oUiTc2/dycGgqFQcCDRLYmi1NL7fk0CknVMxEg/cdfs/TnpJMNkgqwj17B8beVazSrVbU4lG67IZYOCnWrYy3yBR9cyWcChywos3LJBEdhhFoAdYjiw0rLGm0xU5OzoGm5/ZfmHjVZpNNg6SznzGKDdwv2cCtVn6Eaxo12cfxLprpVtTcZ6hVx6dow7Yq7e8LXO8PY9Jgjoze9yCtU5FNbegcKkQMdCbt9au/te4Ebe0jkc0ukUL32eYnTpNs20h0KpUOhZPYwVcfhZnfdqeCvDfXiuCbAoYWcXERPc/mDQD3/hdF+wK4i/xv3kYfprIpAuMkk2kW3kdtS0kBIKpZwp8KxmsCyfM1MFzAss9LBkDxRyThiaqTLwKYKJVTwmWTudMyz+yks09346MDh4m72yOxCKrt1XMlQ1qPVlTEVVQ1ofdK/sCWjtZu9qGwZ8YZ9PPWlo1IV3eW3+U0aXblP39zrt+JPf6UhEQ1rUjNBULN+utyuaDNW34kpAVuSOeMTyWbSNWnooFu+QFNWQ4d/Ox4IPWx41fP/fB/Rjeoz08ezPA9TysMtmnOXfGN7Ui3xIYLDALrlDLOP09qtJuY2OeL0+QZXdRnR1nxRVBF/SOyKKPpcrn9mWzH4rH9IidE+PTNU2182+hOgSItrE1slByS24vaLvJpxOqe4Pduf3HJkZ+jLqUz9rRzB7p8gKcgWZwV1L8JtUS5Z2JxZSOCuBoMTQihMzLbCPA0KqGMAljRQjONklW/wjnXKy8vxT/Elvm3/KiMUMOoV0/vnDYlhec0SMKtt3/kKMyOt33tj2bqxQLsTjSGLl+EAsNhCnTyRGktW55EgCn/A4PlnWn+Mg8bgZrWqHxTbPwMuyy1u5YeZF2SUM7JRhddwRgiRuxpmgJmxn9ZW7XpcF3ViX/ar6ptRpGJ0S9Adg4qhb9sI3vbL7qNJV/y4i07t5TZBiho1imFoMz3gED+CtjYUxvP4SOxov4bFoNPg5aR1e+G4UgDPoedJTpogyCJ7oYvRqoVS0MQAy+CoNEdTDUjok5ZHZL/WtjV7rFj3PKQE3iKp7ou+rIxN3b9LB1dGjeT4cvKo3FrnWpYpuaFd/h3dtV8UeKN1Y9hpR3dt4p0H/zKuPQq0kZQUIIpuDfoiETsnIk+gCWMJZUXHtE8V9LkUc2TE8vOMbO4ax/MACabzyaGXc7u3FBr11ThBdB8SIeMAlCntG2KThHSPsaj2Dc9KNyY2a0KZ7ODaTHoRiFkeYz+shZBpCS4X6471KKKnuHd84edfk5F37d1XO5bbkcltu2ZLNbvnPXiUVAnVvprJrP+NObryjxrllS65md6Tm6wzFHRR4dY3QUUjb7MgxaIixU8hspi98fl/Xc+IB4iU66eCVL9YfAfahiSUt4TONS8x0D8W7u8vd3fGWx6OXlM/U1IoU/s61PGhpyXRFa3eReq2qG56lvmYtXavCC1iN7lbiBpWxXHU+cSlztVLVz0tVN600fVsLxaVDknhYioeoXP3t4lqV1r79MAw0GCI1FTL1YIGzPL1MMlJ9ZsN9P7lvA2yr9ZFUzwzPrVgxN/x/SS+chwB4nGNgZGBgAOLPrYdY4vltvjJwM78AijDUqG5oRND/XzNPZboF5HIwMIFEAU/lC+J4nGNgZGBgDvqfBSRfMAAB81QGRgZUoA0AVvYDbwAAAHicY2BgYGB+MTQwAM8EJo8AAAAAAE4AmgDoAQoBLAFOAXABmgHEAe4CGgKcAugEmgS8BNYE8gUOBSoFegXQBf4GRAZmBrYHGAeQCBgIUghqCP4JRgm+CdoKBAo+CoQKugr0C1QLmgvAeJxjYGRgYNBmTGEQZQABJiDmAkIGhv9gPgMAGJQBvAB4nG2RPU7DMBiG3/QP0UoIBGJh8QILavozdmRo9w7d09RpUzlx5LgVvQMn4BAcgoEzcAgOwVvzSZVQbcnf48fvFysJgGt8IcJxROiG9TgauODuj5ukG+EW+UG4jR4ehTv0Q+EunjER7uEWmk+IWpc0d3gVbuAKb8JN+nfhFvlDuI17fAp36L+Fu1jgR7iHp+jF7Arbz1Nb1nO93pnEncSJFtrVuS3VKB6e5EyX2iVer9TyoOr9eux9pjJnCzW1pdfGWFU5u9WpjzfeV5PBIBMfp7aAwQ4FLPrIkbKWqDHn+67pDRK4s4lzbsEux5qHvcIIMb/nueSMyTKkE3jWFdNLHLjW2PPmMa1Hxn3GjGW/wjT0HtOG09JU4WxLk9LH2ISuiv9twJn9y8fh9uIXI+BknAAAAHicbY7ZboMwEEW5CVBCSLrv+76kfJRjTwHFsdGAG+Xvy5JUfehIHp0rnxmNN/D6ir3/a4YBhvARIMQOIowQY4wEE0yxiz3s4wCHOMIxTnCKM5zjApe4wjVucIs73OMBj3jCM17wije84wMzfHqJ0EVmUkmmJo77oOmrHvfIRZbXsTCZplTZldlgb3TYGVHProwFs11t1A57tcON2rErR3PBqcwF1/6ctI6k0GSU4JHMSS6WghdJQ99sTbfuN7QLJ9vQ37dNrgyktnIxlDYLJNuqitpRbYWKFNuyDT6pog6oOYKHtKakeakqKjHXpPwlGRcsC+OqxLIiJpXqoqqDMreG2l5bv9Ri3TRX+c23DZna9WFFgmXuO6Ps1Jm/w6ErW8N3FbHn/QC444j0AA==)
      format('woff');
    font-weight: normal;
    font-style: normal;
  }

  html {
    --lumo-icons-align-center: '\\ea01';
    --lumo-icons-align-left: '\\ea02';
    --lumo-icons-align-right: '\\ea03';
    --lumo-icons-angle-down: '\\ea04';
    --lumo-icons-angle-left: '\\ea05';
    --lumo-icons-angle-right: '\\ea06';
    --lumo-icons-angle-up: '\\ea07';
    --lumo-icons-arrow-down: '\\ea08';
    --lumo-icons-arrow-left: '\\ea09';
    --lumo-icons-arrow-right: '\\ea0a';
    --lumo-icons-arrow-up: '\\ea0b';
    --lumo-icons-bar-chart: '\\ea0c';
    --lumo-icons-bell: '\\ea0d';
    --lumo-icons-calendar: '\\ea0e';
    --lumo-icons-checkmark: '\\ea0f';
    --lumo-icons-chevron-down: '\\ea10';
    --lumo-icons-chevron-left: '\\ea11';
    --lumo-icons-chevron-right: '\\ea12';
    --lumo-icons-chevron-up: '\\ea13';
    --lumo-icons-clock: '\\ea14';
    --lumo-icons-cog: '\\ea15';
    --lumo-icons-cross: '\\ea16';
    --lumo-icons-download: '\\ea17';
    --lumo-icons-dropdown: '\\ea18';
    --lumo-icons-edit: '\\ea19';
    --lumo-icons-error: '\\ea1a';
    --lumo-icons-eye: '\\ea1b';
    --lumo-icons-eye-disabled: '\\ea1c';
    --lumo-icons-menu: '\\ea1d';
    --lumo-icons-minus: '\\ea1e';
    --lumo-icons-ordered-list: '\\ea1f';
    --lumo-icons-phone: '\\ea20';
    --lumo-icons-photo: '\\ea21';
    --lumo-icons-play: '\\ea22';
    --lumo-icons-plus: '\\ea23';
    --lumo-icons-redo: '\\ea24';
    --lumo-icons-reload: '\\ea25';
    --lumo-icons-search: '\\ea26';
    --lumo-icons-undo: '\\ea27';
    --lumo-icons-unordered-list: '\\ea28';
    --lumo-icons-upload: '\\ea29';
    --lumo-icons-user: '\\ea2a';
  }
`;Dt("font-icons",Hp);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bp=S`
  :host {
    --lumo-size-xs: 1.625rem;
    --lumo-size-s: 1.875rem;
    --lumo-size-m: 2.25rem;
    --lumo-size-l: 2.75rem;
    --lumo-size-xl: 3.5rem;

    /* Icons */
    --lumo-icon-size-s: 1.25em;
    --lumo-icon-size-m: 1.5em;
    --lumo-icon-size-l: 2.25em;
    /* For backwards compatibility */
    --lumo-icon-size: var(--lumo-icon-size-m);
  }
`;Dt("sizing-props",Bp);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vp=S`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;S`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;Dt("style-props",Vp);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ho=S`
  [part$='button'] {
    flex: none;
    width: 1em;
    height: 1em;
    line-height: 1;
    font-size: var(--lumo-icon-size-m);
    text-align: center;
    color: var(--lumo-contrast-60pct);
    transition: 0.2s color;
    cursor: var(--lumo-clickable-cursor);
  }

  [part$='button']:hover {
    color: var(--lumo-contrast-90pct);
  }

  :host([disabled]) [part$='button'],
  :host([readonly]) [part$='button'] {
    color: var(--lumo-contrast-20pct);
    cursor: default;
  }

  [part$='button']::before {
    font-family: 'lumo-icons';
    display: block;
  }
`;F("",Ho,{moduleId:"lumo-field-button"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Up=S`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;Dt("spacing-props",Up);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wp=S`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,jp=S`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;F("",jp,{moduleId:"lumo-typography"});Dt("typography-props",Wp);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vi=S`
  :host {
    top: var(--lumo-space-m);
    right: var(--lumo-space-m);
    bottom: var(--lumo-space-m);
    left: var(--lumo-space-m);
    /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */
    /* stylelint-disable-next-line */
    outline: 0px solid transparent;
  }

  [part='overlay'] {
    background-color: var(--lumo-base-color);
    background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
    border-radius: var(--lumo-border-radius-m);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);
    color: var(--lumo-body-text-color);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    font-weight: 400;
    line-height: var(--lumo-line-height-m);
    letter-spacing: 0;
    text-transform: none;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  [part='content'] {
    padding: var(--lumo-space-xs);
  }

  [part='backdrop'] {
    background-color: var(--lumo-shade-20pct);
    animation: 0.2s lumo-overlay-backdrop-enter both;
    will-change: opacity;
  }

  @keyframes lumo-overlay-backdrop-enter {
    0% {
      opacity: 0;
    }
  }

  :host([closing]) [part='backdrop'] {
    animation: 0.2s lumo-overlay-backdrop-exit both;
  }

  @keyframes lumo-overlay-backdrop-exit {
    100% {
      opacity: 0;
    }
  }

  @keyframes lumo-overlay-dummy-animation {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
`;F("",Vi,{moduleId:"lumo-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ud=S`
  :host([opening]),
  :host([closing]) {
    animation: 0.14s lumo-overlay-dummy-animation;
  }

  [part='overlay'] {
    will-change: opacity, transform;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-enter ease-out both;
  }

  @keyframes lumo-menu-overlay-enter {
    0% {
      opacity: 0;
      transform: translateY(-4px);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s lumo-menu-overlay-exit both;
  }

  @keyframes lumo-menu-overlay-exit {
    100% {
      opacity: 0;
    }
  }
`;F("",ud,{moduleId:"lumo-menu-overlay-core"});const Yp=S`
  /* Small viewport (bottom sheet) styles */
  /* Use direct media queries instead of the state attributes ([phone] and [fullscreen]) provided by the elements */
  @media (max-width: 420px), (max-height: 420px) {
    :host {
      top: 0 !important;
      right: 0 !important;
      bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;
      left: 0 !important;
      align-items: stretch !important;
      justify-content: flex-end !important;
    }

    [part='overlay'] {
      max-height: 50vh;
      width: 100vw;
      border-radius: 0;
      box-shadow: var(--lumo-box-shadow-xl);
    }

    /* The content part scrolls instead of the overlay part, because of the gradient fade-out */
    [part='content'] {
      padding: 30px var(--lumo-space-m);
      max-height: inherit;
      box-sizing: border-box;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
      mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);
    }

    [part='backdrop'] {
      display: block;
    }

    /* Animations */

    :host([opening]) [part='overlay'] {
      animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    :host([closing]),
    :host([closing]) [part='backdrop'] {
      animation-delay: 0.14s;
    }

    :host([closing]) [part='overlay'] {
      animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
    }
  }

  @keyframes lumo-mobile-menu-overlay-enter {
    0% {
      transform: translateY(150%);
    }
  }

  @keyframes lumo-mobile-menu-overlay-exit {
    100% {
      transform: translateY(150%);
    }
  }
`,pd=[Vi,ud,Yp];F("",pd,{moduleId:"lumo-menu-overlay"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fd=S`
  [part='label'] {
    align-self: flex-start;
    color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    font-weight: var(--vaadin-input-field-label-font-weight, 500);
    font-size: var(--vaadin-input-field-label-font-size, var(--lumo-font-size-s));
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
    line-height: 1;
    padding-right: 1em;
    padding-bottom: 0.5em;
    /* As a workaround for diacritics being cut off, add a top padding and a
    negative margin to compensate */
    padding-top: 0.25em;
    margin-top: -0.25em;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
    max-width: 100%;
    box-sizing: border-box;
  }

  :host([focused]:not([readonly])) [part='label'] {
    color: var(--vaadin-input-field-focused-label-color, var(--lumo-primary-text-color));
  }

  :host(:hover:not([readonly]):not([focused])) [part='label'] {
    color: var(--vaadin-input-field-hovered-label-color, var(--lumo-body-text-color));
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='label'] {
      color: var(--vaadin-input-field-label-color, var(--lumo-secondary-text-color));
    }
  }

  :host([has-label])::before {
    margin-top: calc(var(--lumo-font-size-s) * 1.5);
  }

  :host([has-label][theme~='small'])::before {
    margin-top: calc(var(--lumo-font-size-xs) * 1.5);
  }

  :host([has-label]) {
    padding-top: var(--lumo-space-m);
  }

  :host([has-label]) ::slotted([slot='tooltip']) {
    --vaadin-tooltip-offset-bottom: calc((var(--lumo-space-m) - var(--lumo-space-xs)) * -1);
  }

  :host([required]) [part='required-indicator']::after {
    content: var(--lumo-required-field-indicator, '\\2022');
    transition: opacity 0.2s;
    color: var(--lumo-required-field-indicator-color, var(--lumo-primary-text-color));
    position: absolute;
    right: 0;
    width: 1em;
    text-align: center;
  }

  :host([invalid]) [part='required-indicator']::after {
    color: var(--lumo-required-field-indicator-color, var(--lumo-error-text-color));
  }

  [part='error-message'] {
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    font-size: var(--vaadin-input-field-error-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-error-font-weight, 400);
    color: var(--vaadin-input-field-error-color, var(--lumo-error-text-color));
    will-change: max-height;
    transition: 0.4s max-height;
    max-height: 5em;
  }

  :host([has-error-message]) [part='error-message']::before,
  :host([has-error-message]) [part='error-message']::after {
    content: '';
    display: block;
    height: 0.4em;
  }

  :host(:not([invalid])) [part='error-message'] {
    max-height: 0;
    overflow: hidden;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='label'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }

  :host([dir='rtl']) [part='label'] {
    padding-left: 1em;
    padding-right: 0;
  }

  :host([dir='rtl']) [part='required-indicator']::after {
    right: auto;
    left: 0;
  }

  :host([dir='rtl']) [part='error-message'] {
    margin-left: 0;
    margin-right: calc(var(--lumo-border-radius-m) / 4);
  }
`;F("",fd,{moduleId:"lumo-required-field"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Gp=S`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;F("",Gp,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qp=S`
  :host {
    --vaadin-user-color-0: #df0b92;
    --vaadin-user-color-1: #650acc;
    --vaadin-user-color-2: #097faa;
    --vaadin-user-color-3: #ad6200;
    --vaadin-user-color-4: #bf16f3;
    --vaadin-user-color-5: #084391;
    --vaadin-user-color-6: #078836;
  }

  [theme~='dark'] {
    --vaadin-user-color-0: #ff66c7;
    --vaadin-user-color-1: #9d8aff;
    --vaadin-user-color-2: #8aff66;
    --vaadin-user-color-3: #ffbd66;
    --vaadin-user-color-4: #dc6bff;
    --vaadin-user-color-5: #66fffa;
    --vaadin-user-color-6: #e6ff66;
  }
`;Dt("user-color-props",qp);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kp=S`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Xp=S`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-tint-5 {
    background-color: var(--lumo-tint-5pct);
  }
  .bg-tint-10 {
    background-color: var(--lumo-tint-10pct);
  }
  .bg-tint-20 {
    background-color: var(--lumo-tint-20pct);
  }
  .bg-tint-30 {
    background-color: var(--lumo-tint-30pct);
  }
  .bg-tint-40 {
    background-color: var(--lumo-tint-40pct);
  }
  .bg-tint-50 {
    background-color: var(--lumo-tint-50pct);
  }
  .bg-tint-60 {
    background-color: var(--lumo-tint-60pct);
  }
  .bg-tint-70 {
    background-color: var(--lumo-tint-70pct);
  }
  .bg-tint-80 {
    background-color: var(--lumo-tint-80pct);
  }
  .bg-tint-90 {
    background-color: var(--lumo-tint-90pct);
  }
  .bg-tint {
    background-color: var(--lumo-tint);
  }

  .bg-shade-5 {
    background-color: var(--lumo-shade-5pct);
  }
  .bg-shade-10 {
    background-color: var(--lumo-shade-10pct);
  }
  .bg-shade-20 {
    background-color: var(--lumo-shade-20pct);
  }
  .bg-shade-30 {
    background-color: var(--lumo-shade-30pct);
  }
  .bg-shade-40 {
    background-color: var(--lumo-shade-40pct);
  }
  .bg-shade-50 {
    background-color: var(--lumo-shade-50pct);
  }
  .bg-shade-60 {
    background-color: var(--lumo-shade-60pct);
  }
  .bg-shade-70 {
    background-color: var(--lumo-shade-70pct);
  }
  .bg-shade-80 {
    background-color: var(--lumo-shade-80pct);
  }
  .bg-shade-90 {
    background-color: var(--lumo-shade-90pct);
  }
  .bg-shade {
    background-color: var(--lumo-shade);
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Jp=S`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-b {
    border-bottom: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-e {
    border-inline-end: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-l {
    border-left: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-r {
    border-right: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-s {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-t {
    border-top: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-dashed {
    --lumo-utility-border-style: dashed;
  }
  .border-dotted {
    --lumo-utility-border-style: dotted;
  }

  /* === Border color === */
  .border-contrast-5 {
    --lumo-utility-border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    --lumo-utility-border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    --lumo-utility-border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    --lumo-utility-border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    --lumo-utility-border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    --lumo-utility-border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    --lumo-utility-border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    --lumo-utility-border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    --lumo-utility-border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    --lumo-utility-border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    --lumo-utility-border-color: var(--lumo-contrast);
  }

  .border-primary {
    --lumo-utility-border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    --lumo-utility-border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    --lumo-utility-border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    --lumo-utility-border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    --lumo-utility-border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    --lumo-utility-border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    --lumo-utility-border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    --lumo-utility-border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    --lumo-utility-border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    --lumo-utility-border-color: var(--lumo-warning-color);
  }
  .border-warning-10 {
    --lumo-utility-border-color: var(--lumo-warning-color-10pct);
  }
  .border-warning-strong {
    --lumo-utility-border-color: var(--lumo-warning-text-color);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
  .rounded-full {
    border-radius: 9999px;
  }

  /* === Divide === */
  .divide-x > * + * {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .divide-y > * + * {
    border-block-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qp=S`
  /* === Backdrop filter === */
  .backdrop-blur-none {
    backdrop-filter: blur(0);
  }
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur {
    backdrop-filter: blur(8px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  .backdrop-blur-lg {
    backdrop-filter: blur(16px);
  }
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
  .backdrop-blur-2xl {
    backdrop-filter: blur(40px);
  }
  .backdrop-blur-3xl {
    backdrop-filter: blur(64px);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zp=S`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }
  .row-span-full {
    grid-row: 1 / -1;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ef=S`
  /* === Aspect ratio === */
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Top, end, bottom, start === */
  .-bottom-xs {
    bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-bottom-s {
    bottom: calc(var(--lumo-space-s) / -1);
  }
  .-bottom-m {
    bottom: calc(var(--lumo-space-m) / -1);
  }
  .-bottom-l {
    bottom: calc(var(--lumo-space-l) / -1);
  }
  .-bottom-xl {
    bottom: calc(var(--lumo-space-xl) / -1);
  }
  .-bottom-full {
    bottom: -100%;
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-xs {
    bottom: var(--lumo-space-xs);
  }
  .bottom-s {
    bottom: var(--lumo-space-s);
  }
  .bottom-m {
    bottom: var(--lumo-space-m);
  }
  .bottom-l {
    bottom: var(--lumo-space-l);
  }
  .bottom-xl {
    bottom: var(--lumo-space-xl);
  }
  .bottom-auto {
    bottom: auto;
  }
  .bottom-full {
    bottom: 100%;
  }

  .-end-xs {
    inset-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-end-s {
    inset-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-end-m {
    inset-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-end-l {
    inset-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-end-xl {
    inset-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .-end-full {
    inset-inline-end: -100%;
  }
  .end-0 {
    inset-inline-end: 0;
  }
  .end-xs {
    inset-inline-end: var(--lumo-space-xs);
  }
  .end-s {
    inset-inline-end: var(--lumo-space-s);
  }
  .end-m {
    inset-inline-end: var(--lumo-space-m);
  }
  .end-l {
    inset-inline-end: var(--lumo-space-l);
  }
  .end-xl {
    inset-inline-end: var(--lumo-space-xl);
  }
  .end-auto {
    inset-inline-end: auto;
  }
  .end-full {
    inset-inline-end: 100%;
  }

  .-start-xs {
    inset-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-start-s {
    inset-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-start-m {
    inset-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-start-l {
    inset-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-start-xl {
    inset-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .-start-full {
    inset-inline-start: -100%;
  }
  .start-0 {
    inset-inline-start: 0;
  }
  .start-xs {
    inset-inline-start: var(--lumo-space-xs);
  }
  .start-s {
    inset-inline-start: var(--lumo-space-s);
  }
  .start-m {
    inset-inline-start: var(--lumo-space-m);
  }
  .start-l {
    inset-inline-start: var(--lumo-space-l);
  }
  .start-xl {
    inset-inline-start: var(--lumo-space-xl);
  }
  .start-auto {
    inset-inline-start: auto;
  }
  .start-full {
    inset-inline-start: 100%;
  }

  .-top-xs {
    top: calc(var(--lumo-space-xs) / -1);
  }
  .-top-s {
    top: calc(var(--lumo-space-s) / -1);
  }
  .-top-m {
    top: calc(var(--lumo-space-m) / -1);
  }
  .-top-l {
    top: calc(var(--lumo-space-l) / -1);
  }
  .-top-xl {
    top: calc(var(--lumo-space-xl) / -1);
  }
  .-top-full {
    top: -100%;
  }
  .top-0 {
    top: 0;
  }
  .top-xs {
    top: var(--lumo-space-xs);
  }
  .top-s {
    top: var(--lumo-space-s);
  }
  .top-m {
    top: var(--lumo-space-m);
  }
  .top-l {
    top: var(--lumo-space-l);
  }
  .top-xl {
    top: var(--lumo-space-xl);
  }
  .top-auto {
    top: auto;
  }
  .top-full {
    top: 100%;
  }

  /* === Visibility === */
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  /* === Z-index === */
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    /* Display */
    .sm\\:block {
      display: block;
    }
    .sm\\:flex {
      display: flex;
    }
    .sm\\grid {
      display: grid;
    }
    .sm\\:hidden {
      display: none;
    }
    .sm\\:inline {
      display: inline;
    }
    .sm\\:inline-block {
      display: inline-block;
    }
    .sm\\:inline-flex {
      display: inline-flex;
    }
    .sm\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .sm\\:absolute {
      position: absolute;
    }
    .sm\\:fixed {
      position: fixed;
    }
    .sm\\:relative {
      position: relative;
    }
    .sm\\:static {
      position: static;
    }
    .sm\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 768px) {
    /* Display */
    .md\\:block {
      display: block;
    }
    .md\\:flex {
      display: flex;
    }
    .md\\grid {
      display: grid;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:inline {
      display: inline;
    }
    .md\\:inline-block {
      display: inline-block;
    }
    .md\\:inline-flex {
      display: inline-flex;
    }
    .md\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .md\\:absolute {
      position: absolute;
    }
    .md\\:fixed {
      position: fixed;
    }
    .md\\:relative {
      position: relative;
    }
    .md\\:static {
      position: static;
    }
    .md\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1024px) {
    /* Display */
    .lg\\:block {
      display: block;
    }
    .lg\\:flex {
      display: flex;
    }
    .lg\\grid {
      display: grid;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:inline {
      display: inline;
    }
    .lg\\:inline-block {
      display: inline-block;
    }
    .lg\\:inline-flex {
      display: inline-flex;
    }
    .lg\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .lg\\:absolute {
      position: absolute;
    }
    .lg\\:fixed {
      position: fixed;
    }
    .lg\\:relative {
      position: relative;
    }
    .lg\\:static {
      position: static;
    }
    .lg\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1280px) {
    /* Display */
    .xl\\:block {
      display: block;
    }
    .xl\\:flex {
      display: flex;
    }
    .xl\\grid {
      display: grid;
    }
    .xl\\:hidden {
      display: none;
    }
    .xl\\:inline {
      display: inline;
    }
    .xl\\:inline-block {
      display: inline-block;
    }
    .xl\\:inline-flex {
      display: inline-flex;
    }
    .xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .xl\\:absolute {
      position: absolute;
    }
    .xl\\:fixed {
      position: fixed;
    }
    .xl\\:relative {
      position: relative;
    }
    .xl\\:static {
      position: static;
    }
    .xl\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1536px) {
    /* Display */
    .\\32xl\\:block {
      display: block;
    }
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\grid {
      display: grid;
    }
    .\\32xl\\:hidden {
      display: none;
    }
    .\\32xl\\:inline {
      display: inline;
    }
    .\\32xl\\:inline-block {
      display: inline-block;
    }
    .\\32xl\\:inline-flex {
      display: inline-flex;
    }
    .\\32xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .\\32xl\\:absolute {
      position: absolute;
    }
    .\\32xl\\:fixed {
      position: fixed;
    }
    .\\32xl\\:relative {
      position: relative;
    }
    .\\32xl\\:static {
      position: static;
    }
    .\\32xl\\:sticky {
      position: sticky;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tf=S`
  /* === Box shadow === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sf=S`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rf=S`
  /* === Margin === */
  .-m-xs {
    margin: calc(var(--lumo-space-xs) / -1);
  }
  .-m-s {
    margin: calc(var(--lumo-space-s) / -1);
  }
  .-m-m {
    margin: calc(var(--lumo-space-m) / -1);
  }
  .-m-l {
    margin: calc(var(--lumo-space-l) / -1);
  }
  .-m-xl {
    margin: calc(var(--lumo-space-xl) / -1);
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }
  .m-auto {
    margin: auto;
  }

  /* === Margin (bottom) === */
  .-mb-xs {
    margin-bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-mb-s {
    margin-bottom: calc(var(--lumo-space-s) / -1);
  }
  .-mb-m {
    margin-bottom: calc(var(--lumo-space-m) / -1);
  }
  .-mb-l {
    margin-bottom: calc(var(--lumo-space-l) / -1);
  }
  .-mb-xl {
    margin-bottom: calc(var(--lumo-space-xl) / -1);
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }
  .mb-auto {
    margin-bottom: auto;
  }

  /* === Margin (end) === */
  .-me-xs {
    margin-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-me-s {
    margin-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-me-m {
    margin-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-me-l {
    margin-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-me-xl {
    margin-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }
  .me-auto {
    margin-inline-end: auto;
  }

  /* === Margin (horizontal) === */
  .-mx-xs {
    margin-inline: calc(var(--lumo-space-xs) / -1);
  }
  .-mx-s {
    margin-inline: calc(var(--lumo-space-s) / -1);
  }
  .-mx-m {
    margin-inline: calc(var(--lumo-space-m) / -1);
  }
  .-mx-l {
    margin-inline: calc(var(--lumo-space-l) / -1);
  }
  .-mx-xl {
    margin-inline: calc(var(--lumo-space-xl) / -1);
  }
  .mx-0 {
    margin-inline: 0;
  }
  .mx-xs {
    margin-inline: var(--lumo-space-xs);
  }
  .mx-s {
    margin-inline: var(--lumo-space-s);
  }
  .mx-m {
    margin-inline: var(--lumo-space-m);
  }
  .mx-l {
    margin-inline: var(--lumo-space-l);
  }
  .mx-xl {
    margin-inline: var(--lumo-space-xl);
  }
  .mx-auto {
    margin-inline: auto;
  }

  /* === Margin (left) === */
  .-ml-xs {
    margin-left: calc(var(--lumo-space-xs) / -1);
  }
  .-ml-s {
    margin-left: calc(var(--lumo-space-s) / -1);
  }
  .-ml-m {
    margin-left: calc(var(--lumo-space-m) / -1);
  }
  .-ml-l {
    margin-left: calc(var(--lumo-space-l) / -1);
  }
  .-ml-xl {
    margin-left: calc(var(--lumo-space-xl) / -1);
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }
  .ml-auto {
    margin-left: auto;
  }

  /* === Margin (right) === */
  .-mr-xs {
    margin-right: calc(var(--lumo-space-xs) / -1);
  }
  .-mr-s {
    margin-right: calc(var(--lumo-space-s) / -1);
  }
  .-mr-m {
    margin-right: calc(var(--lumo-space-m) / -1);
  }
  .-mr-l {
    margin-right: calc(var(--lumo-space-l) / -1);
  }
  .-mr-xl {
    margin-right: calc(var(--lumo-space-xl) / -1);
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }
  .mr-auto {
    margin-right: auto;
  }

  /* === Margin (start) === */
  .-ms-xs {
    margin-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-ms-s {
    margin-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-ms-m {
    margin-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-ms-l {
    margin-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-ms-xl {
    margin-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }
  .ms-auto {
    margin-inline-start: auto;
  }

  /* === Margin (top) === */
  .-mt-xs {
    margin-top: calc(var(--lumo-space-xs) / -1);
  }
  .-mt-s {
    margin-top: calc(var(--lumo-space-s) / -1);
  }
  .-mt-m {
    margin-top: calc(var(--lumo-space-m) / -1);
  }
  .-mt-l {
    margin-top: calc(var(--lumo-space-l) / -1);
  }
  .-mt-xl {
    margin-top: calc(var(--lumo-space-xl) / -1);
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }
  .mt-auto {
    margin-top: auto;
  }

  /* === Margin (vertical) === */
  .-my-xs {
    margin-block: calc(var(--lumo-space-xs) / -1);
  }
  .-my-s {
    margin-block: calc(var(--lumo-space-s) / -1);
  }
  .-my-m {
    margin-block: calc(var(--lumo-space-m) / -1);
  }
  .-my-l {
    margin-block: calc(var(--lumo-space-l) / -1);
  }
  .-my-xl {
    margin-block: calc(var(--lumo-space-xl) / -1);
  }
  .my-0 {
    margin-block: 0;
  }
  .my-xs {
    margin-block: var(--lumo-space-xs);
  }
  .my-s {
    margin-block: var(--lumo-space-s);
  }
  .my-m {
    margin-block: var(--lumo-space-m);
  }
  .my-l {
    margin-block: var(--lumo-space-l);
  }
  .my-xl {
    margin-block: var(--lumo-space-xl);
  }
  .my-auto {
    margin-block: auto;
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const of=S`
  .transition {
    transition: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,
      transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-all {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-colors {
    transition: color, background-color, border-color, text-decoration-color, fill,
      stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-none {
    transition: none;
  }
  .transition-opacity {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-shadow {
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-transform {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nf=S`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line clamp === */
  [class*='line-clamp-'] {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  .line-clamp-1 {
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }
  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }
  .line-clamp-5 {
    -webkit-line-clamp: 5;
  }
  .line-clamp-6 {
    -webkit-line-clamp: 6;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* == Text decoration === */
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-break-spaces {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const af=S`
${Kp}
${Xp}
${Jp}
${Qp}
${Zp}
${ef}
${tf}
${sf}
${rf}
${of}
${nf}
`;F("",af,{moduleId:"lumo-utility"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(s,t){return s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let lf=/(url\()([^)]*)(\))/g,df=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,ts,ye;function vi(s,t){if(s&&df.test(s)||s==="//")return s;if(ts===void 0){ts=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",ts=e.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),ts)try{return new URL(s,t).href}catch{return s}return ye||(ye=document.implementation.createHTMLDocument("temp"),ye.base=ye.createElement("base"),ye.head.appendChild(ye.base),ye.anchor=ye.createElement("a"),ye.body.appendChild(ye.anchor)),ye.base.href=t,ye.anchor.href=s,ye.anchor.href||s}function Bo(s,t){return s.replace(lf,function(e,i,r,o){return i+"'"+vi(r.replace(/["']/g,""),t)+"'"+o})}function Vo(s){return s.substring(0,s.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const md=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const cf=md&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const s=new CSSStyleSheet;s.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[s],t.shadowRoot.adoptedStyleSheets[0]===s}catch{return!1}})();let hf=window.Polymer&&window.Polymer.rootPath||Vo(document.baseURI||window.location.href),xs=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0;window.Polymer&&window.Polymer.setPassiveTouchGestures;let Cs=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,uf=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,_d=window.Polymer&&window.Polymer.legacyOptimizations||!1,gd=window.Polymer&&window.Polymer.legacyWarnings||!1,pf=window.Polymer&&window.Polymer.syncInitialRender||!1,Xr=window.Polymer&&window.Polymer.legacyUndefined||!1,ff=window.Polymer&&window.Polymer.orderedComputed||!1,ua=window.Polymer&&window.Polymer.removeNestedTemplates||!1,mf=window.Polymer&&window.Polymer.fastDomIf||!1,pa=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1;window.Polymer&&window.Polymer.legacyNoObservedAttributes;let _f=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let gf=0;const te=function(s){let t=s.__mixinApplications;t||(t=new WeakMap,s.__mixinApplications=t);let e=gf++;function i(r){let o=r.__mixinSet;if(o&&o[e])return r;let n=t,a=n.get(r);if(!a){a=s(r),n.set(r,a);let l=Object.create(a.__mixinSet||o||null);l[e]=!0,a.__mixinSet=l}return a}return i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Uo={},vd={};function fa(s,t){Uo[s]=vd[s.toLowerCase()]=t}function ma(s){return Uo[s]||vd[s.toLowerCase()]}function vf(s){s.querySelector("style")&&console.warn("dom-module %s has style outside template",s.id)}class zi extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,e){if(t){let i=ma(t);return i&&e?i.querySelector(e):i}return null}attributeChangedCallback(t,e,i,r){e!==i&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,e=vi(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Vo(e)}return this.__assetpath}register(t){if(t=t||this.id,t){if(Cs&&ma(t)!==void 0)throw fa(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,fa(t,this),vf(this)}}}zi.prototype.modules=Uo;customElements.define("dom-module",zi);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const bf="link[rel=import][type~=css]",yf="include",_a="shady-unscoped";function bd(s){return zi.import(s)}function ga(s){let t=s.body?s.body:s;const e=Bo(t.textContent,s.baseURI),i=document.createElement("style");return i.textContent=e,i}function xf(s){const t=s.trim().split(/\s+/),e=[];for(let i=0;i<t.length;i++)e.push(...Cf(t[i]));return e}function Cf(s){const t=bd(s);if(!t)return console.warn("Could not find style data in module named",s),[];if(t._styles===void 0){const e=[];e.push(...xd(t));const i=t.querySelector("template");i&&e.push(...yd(i,t.assetpath)),t._styles=e}return t._styles}function yd(s,t){if(!s._styles){const e=[],i=s.content.querySelectorAll("style");for(let r=0;r<i.length;r++){let o=i[r],n=o.getAttribute(yf);n&&e.push(...xf(n).filter(function(a,l,d){return d.indexOf(a)===l})),t&&(o.textContent=Bo(o.textContent,t)),e.push(o)}s._styles=e}return s._styles}function wf(s){let t=bd(s);return t?xd(t):[]}function xd(s){const t=[],e=s.querySelectorAll(bf);for(let i=0;i<e.length;i++){let r=e[i];if(r.import){const o=r.import,n=r.hasAttribute(_a);if(n&&!o._unscopedStyle){const a=ga(o);a.setAttribute(_a,""),o._unscopedStyle=a}else o._style||(o._style=ga(o));t.push(n?o._unscopedStyle:o._style)}}return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ne=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?s=>ShadyDOM.patch(s):s=>s;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Jr(s){return s.indexOf(".")>=0}function Ot(s){let t=s.indexOf(".");return t===-1?s:s.slice(0,t)}function Cd(s,t){return s.indexOf(t+".")===0}function ki(s,t){return t.indexOf(s+".")===0}function Di(s,t,e){return t+e.slice(s.length)}function Ef(s,t){return s===t||Cd(s,t)||ki(s,t)}function li(s){if(Array.isArray(s)){let t=[];for(let e=0;e<s.length;e++){let i=s[e].toString().split(".");for(let r=0;r<i.length;r++)t.push(i[r])}return t.join(".")}else return s}function wd(s){return Array.isArray(s)?li(s).split("."):s.toString().split(".")}function pe(s,t,e){let i=s,r=wd(t);for(let o=0;o<r.length;o++){if(!i)return;let n=r[o];i=i[n]}return e&&(e.path=r.join(".")),i}function va(s,t,e){let i=s,r=wd(t),o=r[r.length-1];if(r.length>1){for(let n=0;n<r.length-1;n++){let a=r[n];if(i=i[a],!i)return}i[o]=e}else i[t]=e;return r.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ws={},Af=/-[a-z]/g,Sf=/([A-Z])/g;function Ed(s){return ws[s]||(ws[s]=s.indexOf("-")<0?s:s.replace(Af,t=>t[1].toUpperCase()))}function js(s){return ws[s]||(ws[s]=s.replace(Sf,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Tf=0,Ad=0,Vt=[],Pf=0,Qr=!1,Sd=document.createTextNode("");new window.MutationObserver(If).observe(Sd,{characterData:!0});function If(){Qr=!1;const s=Vt.length;for(let t=0;t<s;t++){let e=Vt[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}Vt.splice(0,s),Ad+=s}const zf={after(s){return{run(t){return window.setTimeout(t,s)},cancel(t){window.clearTimeout(t)}}},run(s,t){return window.setTimeout(s,t)},cancel(s){window.clearTimeout(s)}},Td={run(s){return Qr||(Qr=!0,Sd.textContent=Pf++),Vt.push(s),Tf++},cancel(s){const t=s-Ad;if(t>=0){if(!Vt[t])throw new Error("invalid async handle: "+s);Vt[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const kf=Td,Pd=te(s=>{class t extends s{static createProperties(i){const r=this.prototype;for(let o in i)o in r||r._createPropertyAccessor(o)}static attributeNameForProperty(i){return i.toLowerCase()}static typeForProperty(i){}_createPropertyAccessor(i,r){this._addPropertyToAttributeMap(i),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[i]||(this.__dataHasAccessor[i]=!0,this._definePropertyAccessor(i,r))}_addPropertyToAttributeMap(i){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let r=this.__dataAttributes[i];return r||(r=this.constructor.attributeNameForProperty(i),this.__dataAttributes[r]=i),r}_definePropertyAccessor(i,r){Object.defineProperty(this,i,{get(){return this.__data[i]},set:r?function(){}:function(o){this._setPendingProperty(i,o,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let i in this.__dataHasAccessor)this.hasOwnProperty(i)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[i]=this[i],delete this[i])}_initializeInstanceProperties(i){Object.assign(this,i)}_setProperty(i,r){this._setPendingProperty(i,r)&&this._invalidateProperties()}_getProperty(i){return this.__data[i]}_setPendingProperty(i,r,o){let n=this.__data[i],a=this._shouldPropertyChange(i,r,n);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(i in this.__dataOld)&&(this.__dataOld[i]=n),this.__data[i]=r,this.__dataPending[i]=r),a}_isPropertyPending(i){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(i))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,kf.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const i=this.__data,r=this.__dataPending,o=this.__dataOld;this._shouldPropertiesChange(i,r,o)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(i,r,o)),this.__dataCounter--}_shouldPropertiesChange(i,r,o){return!!r}_propertiesChanged(i,r,o){}_shouldPropertyChange(i,r,o){return o!==r&&(o===o||r===r)}attributeChangedCallback(i,r,o,n){r!==o&&this._attributeToProperty(i,o),super.attributeChangedCallback&&super.attributeChangedCallback(i,r,o,n)}_attributeToProperty(i,r,o){if(!this.__serializing){const n=this.__dataAttributes,a=n&&n[i]||i;this[a]=this._deserializeValue(r,o||this.constructor.typeForProperty(a))}}_propertyToAttribute(i,r,o){this.__serializing=!0,o=arguments.length<3?this[i]:o,this._valueToNodeAttribute(this,o,r||this.constructor.attributeNameForProperty(i)),this.__serializing=!1}_valueToNodeAttribute(i,r,o){const n=this._serializeValue(r);(o==="class"||o==="name"||o==="slot")&&(i=ne(i)),n===void 0?i.removeAttribute(o):i.setAttribute(o,n===""&&window.trustedTypes?window.trustedTypes.emptyScript:n)}_serializeValue(i){switch(typeof i){case"boolean":return i?"":void 0;default:return i!=null?i.toString():void 0}}_deserializeValue(i,r){switch(r){case Boolean:return i!==null;case Number:return Number(i);default:return i}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Id={};let is=HTMLElement.prototype;for(;is;){let s=Object.getOwnPropertyNames(is);for(let t=0;t<s.length;t++)Id[s[t]]=!0;is=Object.getPrototypeOf(is)}const Df=window.trustedTypes?s=>trustedTypes.isHTML(s)||trustedTypes.isScript(s)||trustedTypes.isScriptURL(s):()=>!1;function Of(s,t){if(!Id[t]){let e=s[t];e!==void 0&&(s.__data?s._setPendingProperty(t,e):(s.__dataProto?s.hasOwnProperty(JSCompiler_renameProperty("__dataProto",s))||(s.__dataProto=Object.create(s.__dataProto)):s.__dataProto={},s.__dataProto[t]=e))}}const Mf=te(s=>{const t=Pd(s);class e extends t{static createPropertiesForAttributes(){let r=this.observedAttributes;for(let o=0;o<r.length;o++)this.prototype._createPropertyAccessor(Ed(r[o]))}static attributeNameForProperty(r){return js(r)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(r){for(let o in r)this._setProperty(o,r[o])}_ensureAttribute(r,o){const n=this;n.hasAttribute(r)||this._valueToNodeAttribute(n,o,r)}_serializeValue(r){switch(typeof r){case"object":if(r instanceof Date)return r.toString();if(r){if(Df(r))return r;try{return JSON.stringify(r)}catch{return""}}default:return super._serializeValue(r)}}_deserializeValue(r,o){let n;switch(o){case Object:try{n=JSON.parse(r)}catch{n=r}break;case Array:try{n=JSON.parse(r)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${r}`)}break;case Date:n=isNaN(r)?String(r):Number(r),n=new Date(n);break;default:n=super._deserializeValue(r,o);break}return n}_definePropertyAccessor(r,o){Of(this,r),super._definePropertyAccessor(r,o)}_hasAccessor(r){return this.__dataHasAccessor&&this.__dataHasAccessor[r]}_isPropertyPending(r){return!!(this.__dataPending&&r in this.__dataPending)}}return e});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Rf={"dom-if":!0,"dom-repeat":!0};let ba=!1,ya=!1;function Nf(){if(!ba){ba=!0;const s=document.createElement("textarea");s.placeholder="a",ya=s.placeholder===s.textContent}return ya}function Ff(s){Nf()&&s.localName==="textarea"&&s.placeholder&&s.placeholder===s.textContent&&(s.textContent=null)}const Lf=(()=>{const s=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,e,i)=>{const r=e.getAttribute(i);if(s&&i.startsWith("on-")){t.setAttribute(i,s.createScript(r,i));return}t.setAttribute(i,r)}})();function $f(s){let t=s.getAttribute("is");if(t&&Rf[t]){let e=s;for(e.removeAttribute("is"),s=e.ownerDocument.createElement(t),e.parentNode.replaceChild(s,e),s.appendChild(e);e.attributes.length;){const{name:i}=e.attributes[0];Lf(s,e,i),e.removeAttribute(i)}}return s}function zd(s,t){let e=t.parentInfo&&zd(s,t.parentInfo);if(e){for(let i=e.firstChild,r=0;i;i=i.nextSibling)if(t.parentIndex===r++)return i}else return s}function Hf(s,t,e,i){i.id&&(t[i.id]=e)}function Bf(s,t,e){if(e.events&&e.events.length)for(let i=0,r=e.events,o;i<r.length&&(o=r[i]);i++)s._addMethodEventListenerToNode(t,o.name,o.value,s)}function Vf(s,t,e,i){e.templateInfo&&(t._templateInfo=e.templateInfo,t._parentTemplateInfo=i)}function Uf(s,t,e){return s=s._methodHost||s,function(r){s[e]?s[e](r,r.detail):console.warn("listener method `"+e+"` not defined")}}const Wf=te(s=>{class t extends s{static _parseTemplate(i,r){if(!i._templateInfo){let o=i._templateInfo={};o.nodeInfoList=[],o.nestedTemplate=!!r,o.stripWhiteSpace=r&&r.stripWhiteSpace||i.hasAttribute&&i.hasAttribute("strip-whitespace"),this._parseTemplateContent(i,o,{parent:null})}return i._templateInfo}static _parseTemplateContent(i,r,o){return this._parseTemplateNode(i.content,r,o)}static _parseTemplateNode(i,r,o){let n=!1,a=i;return a.localName=="template"&&!a.hasAttribute("preserve-content")?n=this._parseTemplateNestedTemplate(a,r,o)||n:a.localName==="slot"&&(r.hasInsertionPoint=!0),Ff(a),a.firstChild&&this._parseTemplateChildNodes(a,r,o),a.hasAttributes&&a.hasAttributes()&&(n=this._parseTemplateNodeAttributes(a,r,o)||n),n||o.noted}static _parseTemplateChildNodes(i,r,o){if(!(i.localName==="script"||i.localName==="style"))for(let n=i.firstChild,a=0,l;n;n=l){if(n.localName=="template"&&(n=$f(n)),l=n.nextSibling,n.nodeType===Node.TEXT_NODE){let c=l;for(;c&&c.nodeType===Node.TEXT_NODE;)n.textContent+=c.textContent,l=c.nextSibling,i.removeChild(c),c=l;if(r.stripWhiteSpace&&!n.textContent.trim()){i.removeChild(n);continue}}let d={parentIndex:a,parentInfo:o};this._parseTemplateNode(n,r,d)&&(d.infoIndex=r.nodeInfoList.push(d)-1),n.parentNode&&a++}}static _parseTemplateNestedTemplate(i,r,o){let n=i,a=this._parseTemplate(n,r);return(a.content=n.content.ownerDocument.createDocumentFragment()).appendChild(n.content),o.templateInfo=a,!0}static _parseTemplateNodeAttributes(i,r,o){let n=!1,a=Array.from(i.attributes);for(let l=a.length-1,d;d=a[l];l--)n=this._parseTemplateNodeAttribute(i,r,o,d.name,d.value)||n;return n}static _parseTemplateNodeAttribute(i,r,o,n,a){return n.slice(0,3)==="on-"?(i.removeAttribute(n),o.events=o.events||[],o.events.push({name:n.slice(3),value:a}),!0):n==="id"?(o.id=a,!0):!1}static _contentForTemplate(i){let r=i._templateInfo;return r&&r.content||i.content}_stampTemplate(i,r){i&&!i.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(i),r=r||this.constructor._parseTemplate(i);let o=r.nodeInfoList,n=r.content||i.content,a=document.importNode(n,!0);a.__noInsertionPoint=!r.hasInsertionPoint;let l=a.nodeList=new Array(o.length);a.$={};for(let d=0,c=o.length,h;d<c&&(h=o[d]);d++){let f=l[d]=zd(a,h);Hf(this,a.$,f,h),Vf(this,f,h,r),Bf(this,f,h)}return a=a,a}_addMethodEventListenerToNode(i,r,o,n){n=n||i;let a=Uf(n,r,o);return this._addEventListenerToNode(i,r,a),a}_addEventListenerToNode(i,r,o){i.addEventListener(r,o)}_removeEventListenerFromNode(i,r,o){i.removeEventListener(r,o)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Oi=0;const Mi=[],B={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},kd="__computeInfo",jf=/[A-Z]/;function xr(s,t,e){let i=s[t];if(!i)i=s[t]={};else if(!s.hasOwnProperty(t)&&(i=s[t]=Object.create(s[t]),e))for(let r in i){let o=i[r],n=i[r]=Array(o.length);for(let a=0;a<o.length;a++)n[a]=o[a]}return i}function di(s,t,e,i,r,o){if(t){let n=!1;const a=Oi++;for(let l in e){let d=r?Ot(l):l,c=t[d];if(c)for(let h=0,f=c.length,_;h<f&&(_=c[h]);h++)(!_.info||_.info.lastRun!==a)&&(!r||Wo(l,_.trigger))&&(_.info&&(_.info.lastRun=a),_.fn(s,l,e,i,_.info,r,o),n=!0)}return n}return!1}function Yf(s,t,e,i,r,o,n,a){let l=!1,d=n?Ot(i):i,c=t[d];if(c)for(let h=0,f=c.length,_;h<f&&(_=c[h]);h++)(!_.info||_.info.lastRun!==e)&&(!n||Wo(i,_.trigger))&&(_.info&&(_.info.lastRun=e),_.fn(s,i,r,o,_.info,n,a),l=!0);return l}function Wo(s,t){if(t){let e=t.name;return e==s||!!(t.structured&&Cd(e,s))||!!(t.wildcard&&ki(e,s))}else return!0}function xa(s,t,e,i,r){let o=typeof r.method=="string"?s[r.method]:r.method,n=r.property;o?o.call(s,s.__data[n],i[n]):r.dynamicFn||console.warn("observer method `"+r.method+"` not defined")}function Gf(s,t,e,i,r){let o=s[B.NOTIFY],n,a=Oi++;for(let d in t)t[d]&&(o&&Yf(s,o,a,d,e,i,r)||r&&qf(s,d,e))&&(n=!0);let l;n&&(l=s.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function qf(s,t,e){let i=Ot(t);if(i!==t){let r=js(i)+"-changed";return Dd(s,r,e[t],t),!0}return!1}function Dd(s,t,e,i){let r={value:e,queueProperty:!0};i&&(r.path=i),ne(s).dispatchEvent(new CustomEvent(t,{detail:r}))}function Kf(s,t,e,i,r,o){let a=(o?Ot(t):t)!=t?t:null,l=a?pe(s,a):s.__data[t];a&&l===void 0&&(l=e[t]),Dd(s,r.eventName,l,a)}function Xf(s,t,e,i,r){let o,n=s.detail,a=n&&n.path;a?(i=Di(e,i,a),o=n&&n.value):o=s.currentTarget[e],o=r?!o:o,(!t[B.READ_ONLY]||!t[B.READ_ONLY][i])&&t._setPendingPropertyOrPath(i,o,!0,!!a)&&(!n||!n.queueProperty)&&t._invalidateProperties()}function Jf(s,t,e,i,r){let o=s.__data[t];xs&&(o=xs(o,r.attrName,"attribute",s)),s._propertyToAttribute(t,r.attrName,o)}function Qf(s,t,e,i){let r=s[B.COMPUTE];if(r)if(ff){Oi++;const o=em(s),n=[];for(let l in t)Ca(l,r,n,o,i);let a;for(;a=n.shift();)Od(s,"",t,e,a)&&Ca(a.methodInfo,r,n,o,i);Object.assign(e,s.__dataOld),Object.assign(t,s.__dataPending),s.__dataPending=null}else{let o=t;for(;di(s,r,o,e,i);)Object.assign(e,s.__dataOld),Object.assign(t,s.__dataPending),o=s.__dataPending,s.__dataPending=null}}const Zf=(s,t,e)=>{let i=0,r=t.length-1,o=-1;for(;i<=r;){const n=i+r>>1,a=e.get(t[n].methodInfo)-e.get(s.methodInfo);if(a<0)i=n+1;else if(a>0)r=n-1;else{o=n;break}}o<0&&(o=r+1),t.splice(o,0,s)},Ca=(s,t,e,i,r)=>{const o=r?Ot(s):s,n=t[o];if(n)for(let a=0;a<n.length;a++){const l=n[a];l.info.lastRun!==Oi&&(!r||Wo(s,l.trigger))&&(l.info.lastRun=Oi,Zf(l.info,e,i))}};function em(s){let t=s.constructor.__orderedComputedDeps;if(!t){t=new Map;const e=s[B.COMPUTE];let{counts:i,ready:r,total:o}=tm(s),n;for(;n=r.shift();){t.set(n,t.size);const a=e[n];a&&a.forEach(l=>{const d=l.info.methodInfo;--o,--i[d]===0&&r.push(d)})}o!==0&&console.warn(`Computed graph for ${s.localName} incomplete; circular?`),s.constructor.__orderedComputedDeps=t}return t}function tm(s){const t=s[kd],e={},i=s[B.COMPUTE],r=[];let o=0;for(let n in t){const a=t[n];o+=e[n]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let n in i)t[n]||r.push(n);return{counts:e,ready:r,total:o}}function Od(s,t,e,i,r){let o=Zr(s,t,e,i,r);if(o===Mi)return!1;let n=r.methodInfo;return s.__dataHasAccessor&&s.__dataHasAccessor[n]?s._setPendingProperty(n,o,!0):(s[n]=o,!1)}function im(s,t,e){let i=s.__dataLinkedPaths;if(i){let r;for(let o in i){let n=i[o];ki(o,t)?(r=Di(o,n,t),s._setPendingPropertyOrPath(r,e,!0,!0)):ki(n,t)&&(r=Di(n,o,t),s._setPendingPropertyOrPath(r,e,!0,!0))}}}function Cr(s,t,e,i,r,o,n){e.bindings=e.bindings||[];let a={kind:i,target:r,parts:o,literal:n,isCompound:o.length!==1};if(e.bindings.push(a),am(a)){let{event:d,negate:c}=a.parts[0];a.listenerEvent=d||js(r)+"-changed",a.listenerNegate=c}let l=t.nodeInfoList.length;for(let d=0;d<a.parts.length;d++){let c=a.parts[d];c.compoundIndex=d,sm(s,t,a,c,l)}}function sm(s,t,e,i,r){if(!i.literal)if(e.kind==="attribute"&&e.target[0]==="-")console.warn("Cannot set attribute "+e.target+' because "-" is not a valid attribute starting character');else{let o=i.dependencies,n={index:r,binding:e,part:i,evaluator:s};for(let a=0;a<o.length;a++){let l=o[a];typeof l=="string"&&(l=Rd(l),l.wildcard=!0),s._addTemplatePropertyEffect(t,l.rootProperty,{fn:rm,info:n,trigger:l})}}}function rm(s,t,e,i,r,o,n){let a=n[r.index],l=r.binding,d=r.part;if(o&&d.source&&t.length>d.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let c=e[t];t=Di(d.source,l.target,t),a._setPendingPropertyOrPath(t,c,!1,!0)&&s._enqueueClient(a)}else{let c=r.evaluator._evaluateBinding(s,d,t,e,i,o);c!==Mi&&om(s,a,l,d,c)}}function om(s,t,e,i,r){if(r=nm(t,r,e,i),xs&&(r=xs(r,e.target,e.kind,t)),e.kind=="attribute")s._valueToNodeAttribute(t,r,e.target);else{let o=e.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?(!t[B.READ_ONLY]||!t[B.READ_ONLY][o])&&t._setPendingProperty(o,r)&&s._enqueueClient(t):s._setUnmanagedPropertyToNode(t,o,r)}}function nm(s,t,e,i){if(e.isCompound){let r=s.__dataCompoundStorage[e.target];r[i.compoundIndex]=t,t=r.join("")}return e.kind!=="attribute"&&(e.target==="textContent"||e.target==="value"&&(s.localName==="input"||s.localName==="textarea"))&&(t=t??""),t}function am(s){return!!s.target&&s.kind!="attribute"&&s.kind!="text"&&!s.isCompound&&s.parts[0].mode==="{"}function lm(s,t){let{nodeList:e,nodeInfoList:i}=t;if(i.length)for(let r=0;r<i.length;r++){let o=i[r],n=e[r],a=o.bindings;if(a)for(let l=0;l<a.length;l++){let d=a[l];dm(n,d),cm(n,s,d)}n.__dataHost=s}}function dm(s,t){if(t.isCompound){let e=s.__dataCompoundStorage||(s.__dataCompoundStorage={}),i=t.parts,r=new Array(i.length);for(let n=0;n<i.length;n++)r[n]=i[n].literal;let o=t.target;e[o]=r,t.literal&&t.kind=="property"&&(o==="className"&&(s=ne(s)),s[o]=t.literal)}}function cm(s,t,e){if(e.listenerEvent){let i=e.parts[0];s.addEventListener(e.listenerEvent,function(r){Xf(r,t,e.target,i.source,i.negate)})}}function wa(s,t,e,i,r,o){o=t.static||o&&(typeof o!="object"||o[t.methodName]);let n={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:o};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||s._addPropertyEffect(l.rootProperty,e,{fn:i,info:n,trigger:l});return o&&s._addPropertyEffect(t.methodName,e,{fn:i,info:n}),n}function Zr(s,t,e,i,r){let o=s._methodHost||s,n=o[r.methodName];if(n){let a=s._marshalArgs(r.args,t,e);return a===Mi?Mi:n.apply(o,a)}else r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}const hm=[],Md="(?:[a-zA-Z_$][\\w.:$\\-*]*)",um="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",pm="(?:'(?:[^'\\\\]|\\\\.)*')",fm='(?:"(?:[^"\\\\]|\\\\.)*")',mm="(?:"+pm+"|"+fm+")",Ea="(?:("+Md+"|"+um+"|"+mm+")\\s*)",_m="(?:"+Ea+"(?:,\\s*"+Ea+")*)",gm="(?:\\(\\s*(?:"+_m+"?)\\)\\s*)",vm="("+Md+"\\s*"+gm+"?)",bm="(\\[\\[|{{)\\s*",ym="(?:]]|}})",xm="(?:(!)\\s*)?",Cm=bm+xm+vm+ym,Aa=new RegExp(Cm,"g");function Sa(s){let t="";for(let e=0;e<s.length;e++){let i=s[e].literal;t+=i||""}return t}function wr(s){let t=s.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let i={methodName:t[1],static:!0,args:hm};if(t[2].trim()){let r=t[2].replace(/\\,/g,"&comma;").split(",");return wm(r,i)}else return i}return null}function wm(s,t){return t.args=s.map(function(e){let i=Rd(e);return i.literal||(t.static=!1),i},this),t}function Rd(s){let t=s.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),e={name:t,value:"",literal:!1},i=t[0];switch(i==="-"&&(i=t[1]),i>="0"&&i<="9"&&(i="#"),i){case"'":case'"':e.value=t.slice(1,-1),e.literal=!0;break;case"#":e.value=Number(t),e.literal=!0;break}return e.literal||(e.rootProperty=Ot(t),e.structured=Jr(t),e.structured&&(e.wildcard=t.slice(-2)==".*",e.wildcard&&(e.name=t.slice(0,-2)))),e}function Ta(s,t,e){let i=pe(s,e);return i===void 0&&(i=t[e]),i}function Nd(s,t,e,i){const r={indexSplices:i};Xr&&!s._overrideLegacyUndefined&&(t.splices=r),s.notifyPath(e+".splices",r),s.notifyPath(e+".length",t.length),Xr&&!s._overrideLegacyUndefined&&(r.indexSplices=[])}function ii(s,t,e,i,r,o){Nd(s,t,e,[{index:i,addedCount:r,removed:o,object:t,type:"splice"}])}function Em(s){return s[0].toUpperCase()+s.substring(1)}const jo=te(s=>{const t=Wf(Mf(s));class e extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return B}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(si.length){let r=si[si.length-1];r._enqueueClient(this),this.__dataHost=r}}_initializeProtoProperties(r){this.__data=Object.create(r),this.__dataPending=Object.create(r),this.__dataOld={}}_initializeInstanceProperties(r){let o=this[B.READ_ONLY];for(let n in r)(!o||!o[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=r[n])}_addPropertyEffect(r,o,n){this._createPropertyAccessor(r,o==B.READ_ONLY);let a=xr(this,o,!0)[r];a||(a=this[o][r]=[]),a.push(n)}_removePropertyEffect(r,o,n){let a=xr(this,o,!0)[r],l=a.indexOf(n);l>=0&&a.splice(l,1)}_hasPropertyEffect(r,o){let n=this[o];return!!(n&&n[r])}_hasReadOnlyEffect(r){return this._hasPropertyEffect(r,B.READ_ONLY)}_hasNotifyEffect(r){return this._hasPropertyEffect(r,B.NOTIFY)}_hasReflectEffect(r){return this._hasPropertyEffect(r,B.REFLECT)}_hasComputedEffect(r){return this._hasPropertyEffect(r,B.COMPUTE)}_setPendingPropertyOrPath(r,o,n,a){if(a||Ot(Array.isArray(r)?r[0]:r)!==r){if(!a){let l=pe(this,r);if(r=va(this,r,o),!r||!super._shouldPropertyChange(r,o,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(r,o,n))return im(this,r,o),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[r])return this._setPendingProperty(r,o,n);this[r]=o}return!1}_setUnmanagedPropertyToNode(r,o,n){(n!==r[o]||typeof n=="object")&&(o==="className"&&(r=ne(r)),r[o]=n)}_setPendingProperty(r,o,n){let a=this.__dataHasPaths&&Jr(r),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(r,o,l[r])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),r in this.__dataOld||(this.__dataOld[r]=this.__data[r]),a?this.__dataTemp[r]=o:this.__data[r]=o,this.__dataPending[r]=o,(a||this[B.NOTIFY]&&this[B.NOTIFY][r])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[r]=n),!0):!1}_setProperty(r,o){this._setPendingProperty(r,o,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(r){this.__dataPendingClients=this.__dataPendingClients||[],r!==this&&this.__dataPendingClients.push(r)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let r=this.__dataPendingClients;if(r){this.__dataPendingClients=null;for(let o=0;o<r.length;o++){let n=r[o];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(r,o){for(let n in r)(o||!this[B.READ_ONLY]||!this[B.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,r[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(r,o,n){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Qf(this,o,n,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(o,n,a),this._flushClients(),di(this,this[B.REFLECT],o,n,a),di(this,this[B.OBSERVE],o,n,a),l&&Gf(this,l,o,n,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(r,o,n){this[B.PROPAGATE]&&di(this,this[B.PROPAGATE],r,o,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,r,o,n)}_runEffectsForTemplate(r,o,n,a){const l=(d,c)=>{di(this,r.propertyEffects,d,n,c,r.nodeList);for(let h=r.firstChild;h;h=h.nextSibling)this._runEffectsForTemplate(h,d,n,c)};r.runEffects?r.runEffects(l,o,a):l(o,a)}linkPaths(r,o){r=li(r),o=li(o),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[r]=o}unlinkPaths(r){r=li(r),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[r]}notifySplices(r,o){let n={path:""},a=pe(this,r,n);Nd(this,a,n.path,o)}get(r,o){return pe(o||this,r)}set(r,o,n){n?va(n,r,o):(!this[B.READ_ONLY]||!this[B.READ_ONLY][r])&&this._setPendingPropertyOrPath(r,o,!0)&&this._invalidateProperties()}push(r,...o){let n={path:""},a=pe(this,r,n),l=a.length,d=a.push(...o);return o.length&&ii(this,a,n.path,l,o.length,[]),d}pop(r){let o={path:""},n=pe(this,r,o),a=!!n.length,l=n.pop();return a&&ii(this,n,o.path,n.length,0,[l]),l}splice(r,o,n,...a){let l={path:""},d=pe(this,r,l);o<0?o=d.length-Math.floor(-o):o&&(o=Math.floor(o));let c;return arguments.length===2?c=d.splice(o):c=d.splice(o,n,...a),(a.length||c.length)&&ii(this,d,l.path,o,a.length,c),c}shift(r){let o={path:""},n=pe(this,r,o),a=!!n.length,l=n.shift();return a&&ii(this,n,o.path,0,0,[l]),l}unshift(r,...o){let n={path:""},a=pe(this,r,n),l=a.unshift(...o);return o.length&&ii(this,a,n.path,0,o.length,[]),l}notifyPath(r,o){let n;if(arguments.length==1){let a={path:""};o=pe(this,r,a),n=a.path}else Array.isArray(r)?n=li(r):n=r;this._setPendingPropertyOrPath(n,o,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(r,o){this._addPropertyEffect(r,B.READ_ONLY),o&&(this["_set"+Em(r)]=function(n){this._setProperty(r,n)})}_createPropertyObserver(r,o,n){let a={property:r,method:o,dynamicFn:!!n};this._addPropertyEffect(r,B.OBSERVE,{fn:xa,info:a,trigger:{name:r}}),n&&this._addPropertyEffect(o,B.OBSERVE,{fn:xa,info:a,trigger:{name:o}})}_createMethodObserver(r,o){let n=wr(r);if(!n)throw new Error("Malformed observer expression '"+r+"'");wa(this,n,B.OBSERVE,Zr,null,o)}_createNotifyingProperty(r){this._addPropertyEffect(r,B.NOTIFY,{fn:Kf,info:{eventName:js(r)+"-changed",property:r}})}_createReflectedProperty(r){let o=this.constructor.attributeNameForProperty(r);o[0]==="-"?console.warn("Property "+r+" cannot be reflected to attribute "+o+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(r,B.REFLECT,{fn:Jf,info:{attrName:o}})}_createComputedProperty(r,o,n){let a=wr(o);if(!a)throw new Error("Malformed computed expression '"+o+"'");const l=wa(this,a,B.COMPUTE,Od,r,n);xr(this,kd)[r]=l}_marshalArgs(r,o,n){const a=this.__data,l=[];for(let d=0,c=r.length;d<c;d++){let{name:h,structured:f,wildcard:_,value:E,literal:P}=r[d];if(!P)if(_){const L=ki(h,o),T=Ta(a,n,L?o:h);E={path:L?o:h,value:T,base:L?pe(a,h):T}}else E=f?Ta(a,n,h):a[h];if(Xr&&!this._overrideLegacyUndefined&&E===void 0&&r.length>1)return Mi;l[d]=E}return l}static addPropertyEffect(r,o,n){this.prototype._addPropertyEffect(r,o,n)}static createPropertyObserver(r,o,n){this.prototype._createPropertyObserver(r,o,n)}static createMethodObserver(r,o){this.prototype._createMethodObserver(r,o)}static createNotifyingProperty(r){this.prototype._createNotifyingProperty(r)}static createReadOnlyProperty(r,o){this.prototype._createReadOnlyProperty(r,o)}static createReflectedProperty(r){this.prototype._createReflectedProperty(r)}static createComputedProperty(r,o,n){this.prototype._createComputedProperty(r,o,n)}static bindTemplate(r){return this.prototype._bindTemplate(r)}_bindTemplate(r,o){let n=this.constructor._parseTemplate(r),a=this.__preBoundTemplateInfo==n;if(!a)for(let l in n.propertyEffects)this._createPropertyAccessor(l);if(o)if(n=Object.create(n),n.wasPreBound=a,!this.__templateInfo)this.__templateInfo=n;else{const l=r._parentTemplateInfo||this.__templateInfo,d=l.lastChild;n.parent=l,l.lastChild=n,n.previousSibling=d,d?d.nextSibling=n:l.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(r,o,n){let a=r.hostProps=r.hostProps||{};a[o]=!0;let l=r.propertyEffects=r.propertyEffects||{};(l[o]=l[o]||[]).push(n)}_stampTemplate(r,o){o=o||this._bindTemplate(r,!0),si.push(this);let n=super._stampTemplate(r,o);if(si.pop(),o.nodeList=n.nodeList,!o.wasPreBound){let a=o.childNodes=[];for(let l=n.firstChild;l;l=l.nextSibling)a.push(l)}return n.templateInfo=o,lm(this,o),this.__dataClientsReady&&(this._runEffectsForTemplate(o,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(r){const o=r.templateInfo,{previousSibling:n,nextSibling:a,parent:l}=o;n?n.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=n:l&&(l.lastChild=n),o.nextSibling=o.previousSibling=null;let d=o.childNodes;for(let c=0;c<d.length;c++){let h=d[c];ne(ne(h).parentNode).removeChild(h)}}static _parseTemplateNode(r,o,n){let a=t._parseTemplateNode.call(this,r,o,n);if(r.nodeType===Node.TEXT_NODE){let l=this._parseBindings(r.textContent,o);l&&(r.textContent=Sa(l)||" ",Cr(this,o,n,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(r,o,n,a,l){let d=this._parseBindings(l,o);if(d){let c=a,h="property";jf.test(a)?h="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),h="attribute");let f=Sa(d);return f&&h=="attribute"&&(a=="class"&&r.hasAttribute("class")&&(f+=" "+r.getAttribute(a)),r.setAttribute(a,f)),h=="attribute"&&c=="disable-upgrade$"&&r.setAttribute(a,""),r.localName==="input"&&c==="value"&&r.setAttribute(c,""),r.removeAttribute(c),h==="property"&&(a=Ed(a)),Cr(this,o,n,h,a,d,f),!0}else return t._parseTemplateNodeAttribute.call(this,r,o,n,a,l)}static _parseTemplateNestedTemplate(r,o,n){let a=t._parseTemplateNestedTemplate.call(this,r,o,n);const l=r.parentNode,d=n.templateInfo,c=l.localName==="dom-if",h=l.localName==="dom-repeat";ua&&(c||h)&&(l.removeChild(r),n=n.parentInfo,n.templateInfo=d,n.noted=!0,a=!1);let f=d.hostProps;if(mf&&c)f&&(o.hostProps=Object.assign(o.hostProps||{},f),ua||(n.parentInfo.noted=!0));else{let _="{";for(let E in f){let P=[{mode:_,source:E,dependencies:[E],hostProp:!0}];Cr(this,o,n,"property","_host_"+E,P)}}return a}static _parseBindings(r,o){let n=[],a=0,l;for(;(l=Aa.exec(r))!==null;){l.index>a&&n.push({literal:r.slice(a,l.index)});let d=l[1][0],c=!!l[2],h=l[3].trim(),f=!1,_="",E=-1;d=="{"&&(E=h.indexOf("::"))>0&&(_=h.substring(E+2),h=h.substring(0,E),f=!0);let P=wr(h),L=[];if(P){let{args:T,methodName:z}=P;for(let V=0;V<T.length;V++){let U=T[V];U.literal||L.push(U)}let M=o.dynamicFns;(M&&M[z]||P.static)&&(L.push(z),P.dynamicFn=!0)}else L.push(h);n.push({source:h,mode:d,negate:c,customEvent:f,signature:P,dependencies:L,event:_}),a=Aa.lastIndex}if(a&&a<r.length){let d=r.substring(a);d&&n.push({literal:d})}return n.length?n:null}static _evaluateBinding(r,o,n,a,l,d){let c;return o.signature?c=Zr(r,n,a,l,o.signature):n!=o.source?c=pe(r,o.source):d&&Jr(n)?c=pe(r,n):c=r.__data[n],o.negate&&(c=!c),c}}return e}),si=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Am(s){const t={};for(let e in s){const i=s[e];t[e]=typeof i=="function"?{type:i}:i}return t}const Sm=te(s=>{const t=Pd(s);function e(o){const n=Object.getPrototypeOf(o);return n.prototype instanceof r?n:null}function i(o){if(!o.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",o))){let n=null;if(o.hasOwnProperty(JSCompiler_renameProperty("properties",o))){const a=o.properties;a&&(n=Am(a))}o.__ownProperties=n}return o.__ownProperties}class r extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const n=this._properties;this.__observedAttributes=n?Object.keys(n).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const n=e(this);n&&n.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const n=i(this);n&&this.createProperties(n)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const n=e(this);this.__properties=Object.assign({},n&&n._properties,i(this))}return this.__properties}static typeForProperty(n){const a=this._properties[n];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Tm="3.5.1",Pa=window.ShadyCSS&&window.ShadyCSS.cssBuild,Pm=te(s=>{const t=Sm(jo(s));function e(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let d=l._properties;for(let c in d){let h=d[c];"value"in h&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[c]=h)}}return l.__propertyDefaults}function i(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function r(l,d,c,h){c.computed&&(c.readOnly=!0),c.computed&&(l._hasReadOnlyEffect(d)?console.warn(`Cannot redefine computed property '${d}'.`):l._createComputedProperty(d,c.computed,h)),c.readOnly&&!l._hasReadOnlyEffect(d)?l._createReadOnlyProperty(d,!c.computed):c.readOnly===!1&&l._hasReadOnlyEffect(d)&&console.warn(`Cannot make readOnly property '${d}' non-readOnly.`),c.reflectToAttribute&&!l._hasReflectEffect(d)?l._createReflectedProperty(d):c.reflectToAttribute===!1&&l._hasReflectEffect(d)&&console.warn(`Cannot make reflected property '${d}' non-reflected.`),c.notify&&!l._hasNotifyEffect(d)?l._createNotifyingProperty(d):c.notify===!1&&l._hasNotifyEffect(d)&&console.warn(`Cannot make notify property '${d}' non-notify.`),c.observer&&l._createPropertyObserver(d,c.observer,h[c.observer]),l._addPropertyToAttributeMap(d)}function o(l,d,c,h){if(!Pa){const f=d.content.querySelectorAll("style"),_=yd(d),E=wf(c),P=d.content.firstElementChild;for(let T=0;T<E.length;T++){let z=E[T];z.textContent=l._processStyleText(z.textContent,h),d.content.insertBefore(z,P)}let L=0;for(let T=0;T<_.length;T++){let z=_[T],M=f[L];M!==z?(z=z.cloneNode(!0),M.parentNode.insertBefore(z,M)):L++,z.textContent=l._processStyleText(z.textContent,h)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(d,c),_f&&Pa&&cf){const f=d.content.querySelectorAll("style");if(f){let _="";Array.from(f).forEach(E=>{_+=E.textContent,E.parentNode.removeChild(E)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(_)}}}function n(l){let d=null;if(l&&(!Cs||uf)&&(d=zi.import(l,"template"),Cs&&!d))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return d}class a extends t{static get polymerElementVersion(){return Tm}static _finalizeClass(){t._finalizeClass.call(this);const d=i(this);d&&this.createObservers(d,this._properties),this._prepareTemplate()}static _prepareTemplate(){let d=this.template;d&&(typeof d=="string"?(console.error("template getter must return HTMLTemplateElement"),d=null):_d||(d=d.cloneNode(!0))),this.prototype._template=d}static createProperties(d){for(let c in d)r(this.prototype,c,d[c],d)}static createObservers(d,c){const h=this.prototype;for(let f=0;f<d.length;f++)h._createMethodObserver(d[f],c)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let d=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof d=="function"&&(d=d()),this._template=d!==void 0?d:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&n(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(d){this._template=d}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const d=this.importMeta;if(d)this._importPath=Vo(d.url);else{const c=zi.import(this.is);this._importPath=c&&c.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=hf,this.importPath=this.constructor.importPath;let d=e(this.constructor);if(d)for(let c in d){let h=d[c];if(this._canApplyPropertyDefault(c)){let f=typeof h.value=="function"?h.value.call(this):h.value;this._hasAccessor(c)?this._setPendingProperty(c,f,!0):this[c]=f}}}_canApplyPropertyDefault(d){return!this.hasOwnProperty(d)}static _processStyleText(d,c){return Bo(d,c)}static _finalizeTemplate(d){const c=this.prototype._template;if(c&&!c.__polymerFinalized){c.__polymerFinalized=!0;const h=this.importPath,f=h?vi(h):"";o(this,c,d,f),this.prototype._bindTemplate(c)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(d){const c=ne(this);if(c.attachShadow)return d?(c.shadowRoot||(c.attachShadow({mode:"open",shadyUpgradeFragment:d}),c.shadowRoot.appendChild(d),this.constructor._styleSheet&&(c.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),pf&&window.ShadyDOM&&window.ShadyDOM.flushInitial(c.shadowRoot),c.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(d){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,d)}resolveUrl(d,c){return!c&&this.importPath&&(c=vi(this.importPath)),vi(d,c)}static _parseTemplateContent(d,c,h){return c.dynamicFns=c.dynamicFns||this._properties,t._parseTemplateContent.call(this,d,c,h)}static _addTemplatePropertyEffect(d,c,h){return gd&&!(c in this._properties)&&!(h.info.part.signature&&h.info.part.signature.static)&&!h.info.part.hostProp&&!d.nestedTemplate&&console.warn(`Property '${c}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,d,c,h)}}return a});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ia=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:s=>s});class Fd{constructor(t,e){$d(t,e);const i=e.reduce((r,o,n)=>r+Ld(o)+t[n+1],t[0]);this.value=i.toString()}toString(){return this.value}}function Ld(s){if(s instanceof Fd)return s.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${s}`)}function Im(s){if(s instanceof HTMLTemplateElement)return s.innerHTML;if(s instanceof Fd)return Ld(s);throw new Error(`non-template value passed to Polymer's html function: ${s}`)}const ae=function(t,...e){$d(t,e);const i=document.createElement("template");let r=e.reduce((o,n,a)=>o+Im(n)+t[a+1],t[0]);return Ia&&(r=Ia.createHTML(r)),i.innerHTML=r,i},$d=(s,t)=>{if(!Array.isArray(s)||!Array.isArray(s.raw)||t.length!==s.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ie=Pm(HTMLElement),zm=/\/\*[\*!]\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,fs=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function km(){function s(){return!0}return Hd(s)}function Dm(){try{return Om()?!0:Mm()?fs?!Rm():!km():!1}catch{return!1}}function Om(){return localStorage.getItem("vaadin.developmentmode.force")}function Mm(){return["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0}function Rm(){return!!(fs&&Object.keys(fs).map(t=>fs[t]).filter(t=>t.productionMode).length>0)}function Hd(s,t){if(typeof s!="function")return;const e=zm.exec(s.toString());if(e)try{s=new Function(e[1])}catch(i){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",i)}return s(t)}window.Vaadin=window.Vaadin||{};const za=function(s,t){if(window.Vaadin.developmentMode)return Hd(s,t)};window.Vaadin.developmentMode===void 0&&(window.Vaadin.developmentMode=Dm());function Nm(){}const Fm=function(){if(typeof za=="function")return za(Nm)};/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */let ka=0,Bd=0;const Ut=[];let eo=!1;function Lm(){eo=!1;const s=Ut.length;for(let t=0;t<s;t++){const e=Ut[t];if(e)try{e()}catch(i){setTimeout(()=>{throw i})}}Ut.splice(0,s),Bd+=s}const Ae={after(s){return{run(t){return window.setTimeout(t,s)},cancel(t){window.clearTimeout(t)}}},run(s,t){return window.setTimeout(s,t)},cancel(s){window.clearTimeout(s)}},zt={run(s){return window.requestAnimationFrame(s)},cancel(s){window.cancelAnimationFrame(s)}},Vd={run(s){return window.requestIdleCallback?window.requestIdleCallback(s):window.setTimeout(s,16)},cancel(s){window.cancelIdleCallback?window.cancelIdleCallback(s):window.clearTimeout(s)}},Ye={run(s){eo||(eo=!0,queueMicrotask(()=>Lm())),Ut.push(s);const t=ka;return ka+=1,t},cancel(s){const t=s-Bd;if(t>=0){if(!Ut[t])throw new Error(`invalid async handle: ${s}`);Ut[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ri=new Set;let G=class to{static debounce(t,e,i){return t instanceof to?t._cancelAsync():t=new to,t.setConfig(e,i),t}constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Ri.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ri.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}};function Ud(s){Ri.add(s)}function $m(){const s=!!Ri.size;return Ri.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),s}const ci=()=>{let s;do s=$m();while(s)};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ve=[];function io(s,t,e=s.getAttribute("dir")){t?s.setAttribute("dir",t):e!=null&&s.removeAttribute("dir")}function so(){return document.documentElement.getAttribute("dir")}function Hm(){const s=so();Ve.forEach(t=>{io(t,s)})}const Bm=new MutationObserver(Hm);Bm.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});const ct=s=>class extends s{static get properties(){return{dir:{type:String,value:"",reflectToAttribute:!0,converter:{fromAttribute:e=>e||"",toAttribute:e=>e===""?null:e}}}}get __isRTL(){return this.getAttribute("dir")==="rtl"}connectedCallback(){super.connectedCallback(),(!this.hasAttribute("dir")||this.__restoreSubscription)&&(this.__subscribe(),io(this,so(),null))}attributeChangedCallback(e,i,r){if(super.attributeChangedCallback(e,i,r),e!=="dir")return;const o=so(),n=r===o&&Ve.indexOf(this)===-1,a=!r&&i&&Ve.indexOf(this)===-1;n||a?(this.__subscribe(),io(this,o,r)):r!==o&&i===o&&this.__unsubscribe()}disconnectedCallback(){super.disconnectedCallback(),this.__restoreSubscription=Ve.includes(this),this.__unsubscribe()}_valueToNodeAttribute(e,i,r){r==="dir"&&i===""&&!e.hasAttribute("dir")||super._valueToNodeAttribute(e,i,r)}_attributeToProperty(e,i,r){e==="dir"&&!i?this.dir="":super._attributeToProperty(e,i,r)}__subscribe(){Ve.includes(this)||Ve.push(this)}__unsubscribe(){Ve.includes(this)&&Ve.splice(Ve.indexOf(this),1)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */window.Vaadin||(window.Vaadin={});window.Vaadin.registrations||(window.Vaadin.registrations=[]);window.Vaadin.developmentModeCallback||(window.Vaadin.developmentModeCallback={});window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){Fm()};let Er;const Da=new Set,qe=s=>class extends ct(s){static finalize(){super.finalize();const{is:e}=this;e&&!Da.has(e)&&(window.Vaadin.registrations.push(this),Da.add(e),window.Vaadin.developmentModeCallback&&(Er=G.debounce(Er,Vd,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Ud(Er)))}constructor(){super(),document.doctype===null&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vm={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Um=s=>(...t)=>({_$litDirective$:s,values:t});class Wm{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ro extends Wm{constructor(t){if(super(t),this.it=ee,t.type!==Vm.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===ee||t==null)return this._t=void 0,this.it=t;if(t===It)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}ro.directiveName="unsafeHTML",ro.resultType=1;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class oo extends ro{}oo.directiveName="unsafeSVG",oo.resultType=2;const jm=Um(oo);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Oa(s){let t=ee;if(s){const e=s.cloneNode(!0);e.removeAttribute("id"),t=wp`${jm(e.outerHTML)}`}return t}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bt={},Ma=new Set;function Wd(s,t){return(s||"").replace(`${t}:`,"")}function Ra(s){return s?s.split(":")[0]||"vaadin":void 0}function Na(s,t){s._icons=[...s.querySelectorAll("[id]")].reduce((e,i)=>{const r=Wd(i.id,t);return e[r]=i,e},{})}class jd extends qe(ie){static get template(){return null}static get is(){return"vaadin-iconset"}static get properties(){return{name:{type:String,observer:"__nameChanged"},size:{type:Number,value:24}}}static get attachedIcons(){return Ma}static getIconset(t){return bt[t]}static getIconSvg(t,e){const i=e||Ra(t),r=this.getIconset(i);if(!t||!r)return{svg:Oa(null)};const o=Wd(t,i),n=r._icons[o];return{preserveAspectRatio:n?n.getAttribute("preserveAspectRatio"):null,svg:Oa(n),size:r.size,viewBox:n?n.getAttribute("viewBox"):null}}static register(t,e,i){if(!bt[t]){const r=document.createElement("vaadin-iconset");r.appendChild(i.content.cloneNode(!0)),bt[t]=r,Na(r,t),r.size=e,r.name=t,r.__nameChanged(t)}}connectedCallback(){super.connectedCallback(),this.style.display="none";const{name:t}=this;bt[t]=this,Na(this,t),this.__updateIcons(t)}__updateIcons(t){Ma.forEach(e=>{t===Ra(e.icon)&&e._applyIcon()})}__nameChanged(t,e){e&&(bt[t]=bt[e],delete bt[e]),t&&this.__updateIcons(t)}}Z(jd);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Yd=document.createElement("template");Yd.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"><defs>
<g id="lumo:align-center"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m83 191c0-18 13-33 29-33H721c16 0 29 15 29 33 0 18-13 33-29 34H279C263 442 250 427 250 408zM250 792c0-18 13-33 29-34H721c16 0 29 15 29 34s-13 33-29 33H279C263 825 250 810 250 792z m-83-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-left"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m0 191c0-18 13-33 28-33H638c16 0 29 15 29 33 0 18-13 33-29 34H195C179 442 167 427 167 408zM167 792c0-18 13-33 28-34H638c16 0 29 15 29 34s-13 33-29 33H195C179 825 167 810 167 792z m0-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:align-right"><path d="M167 217c0-18 17-33 38-34H795c21 0 38 15 38 34 0 18-17 33-38 33H205C184 250 167 235 167 217z m166 191c0-18 13-33 29-33H805c16 0 29 15 28 33 0 18-13 33-28 34H362C346 442 333 427 333 408zM333 792c0-18 13-33 29-34H805c16 0 29 15 28 34s-13 33-28 33H362C346 825 333 810 333 792z m-166-192c0-18 17-33 38-33H795c21 0 38 15 38 33s-17 33-38 33H205C184 633 167 618 167 600z" fill-rule="evenodd" clip-rule="evenodd"></path></g>
<g id="lumo:angle-down"><path d="M283 391c-18-16-46-15-63 4-16 18-15 46 3 63l244 224c17 15 43 15 60 0l250-229c18-16 20-45 3-63-16-18-45-20-63-4l-220 203-214-198z"></path></g>
<g id="lumo:angle-left"><path d="M601 710c16 18 15 46-3 63-18 16-46 15-63-4l-224-244c-15-17-15-43 0-59l229-250c16-18 45-20 63-4 18 16 20 45 3 63l-203 220 198 215z"></path></g>
<g id="lumo:angle-right"><path d="M399 275c-16-18-15-46 3-63 18-16 46-15 63 4l224 244c15 17 15 43 0 59l-229 250c-16 18-45 20-63 4-18-16-20-45-3-63l203-220-198-215z"></path></g>
<g id="lumo:angle-up"><path d="M283 635c-18 16-46 15-63-3-16-18-15-46 3-63l244-224c17-15 43-15 60 0l250 229c18 16 20 45 3 63-16 18-45 20-63 3l-220-202L283 635z"></path></g>
<g id="lumo:arrow-down"><path d="M538 646l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166c0 0 0 0 0 0-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 646V312c0-21 17-38 38-37s38 17 37 37v334z"></path></g>
<g id="lumo:arrow-left"><path d="M375 538l111 125c14 15 12 39-3 53-15 14-39 12-53-4l-166-187c0 0 0 0 0 0-13-14-12-36 0-50l166-187c14-15 37-17 53-4 15 14 17 37 3 53L375 463h333c21 0 38 17 38 37 0 21-17 38-38 38h-333z"></path></g>
<g id="lumo:arrow-right"><path d="M625 538h-333c-21 0-38-17-38-38 0-21 17-38 38-37h333l-111-126c-14-15-12-39 3-53 15-14 39-12 53 4l166 187c13 14 13 36 0 50 0 0 0 0 0 0l-166 187c-14 15-37 17-53 4-15-14-17-37-3-53l111-125z"></path></g>
<g id="lumo:arrow-up"><path d="M538 354V688c0 21-17 38-38 37s-38-17-38-38V354l-125 112c-15 14-39 12-53-4-14-15-12-39 4-53l187-166c14-13 36-13 50 0 0 0 0 0 0 0l187 166c15 14 17 37 4 53-14 15-37 17-53 4L538 354z"></path></g>
<g id="lumo:bar-chart"><path d="M175 500h108c28 0 50 22 50 50v233c0 28-22 50-50 50H175c-28 0-50-22-50-50v-233c0-28 22-50 50-50z m33 67c-9 0-17 7-16 16v167c0 9 7 17 16 17h42c9 0 17-7 17-17v-167c0-9-7-17-17-16H208zM446 167h108c28 0 50 22 50 50v566c0 28-22 50-50 50h-108c-28 0-50-22-50-50V217c0-28 22-50 50-50z m33 66c-9 0-17 7-17 17v500c0 9 7 17 17 17h42c9 0 17-7 16-17V250c0-9-7-17-16-17h-42zM717 333h108c28 0 50 22 50 50v400c0 28-22 50-50 50h-108c-28 0-50-22-50-50V383c0-28 22-50 50-50z m33 67c-9 0-17 7-17 17v333c0 9 7 17 17 17h42c9 0 17-7 16-17v-333c0-9-7-17-16-17h-42z"></path></g>
<g id="lumo:bell"><path d="M367 675H292v-258C292 325 366 250 459 250H458V208c0-23 18-42 42-41 23 0 42 18 42 41v42h-1C634 250 708 325 708 417V675h-75v-258c0-51-41-92-91-92h-84C408 325 367 366 367 417V675z m-159 37c0-21 17-38 38-37h508c21 0 37 17 38 37 0 21-17 38-38 38H246C225 750 208 733 208 713z m230 71h125v32c0 17-14 31-32 31h-62c-17 0-32-14-31-31v-32z"></path></g>
<g id="lumo:calendar"><path d="M375 208h250v-20C625 176 634 167 646 167h41C699 167 708 176 708 188V208h74c23 0 41 19 41 42v42C823 315 804 333 782 333H218C196 333 177 315 177 292V250C177 227 196 208 218 208H292v-20C292 176 301 167 313 167h41C366 167 375 176 375 188V208zM229 375h42C283 375 292 384 292 396v41C292 449 282 458 271 458h-42C217 458 208 449 208 437v-41C208 384 218 375 229 375z m125 0h42C408 375 417 384 417 396v41C417 449 407 458 396 458h-42C342 458 333 449 333 437v-41C333 384 343 375 354 375z m125 0h42C533 375 542 384 542 396v41C542 449 532 458 521 458h-42C467 458 458 449 458 437v-41C458 384 468 375 479 375z m-250 125h42C283 500 292 509 292 521v41C292 574 282 583 271 583h-42C217 583 208 574 208 562v-41C208 509 218 500 229 500z m125 0h42C408 500 417 509 417 521v41C417 574 407 583 396 583h-42C342 583 333 574 333 562v-41C333 509 343 500 354 500z m125 0h42c12 0 21 9 21 21v41C542 574 532 583 521 583h-42C467 583 458 574 458 562v-41C458 509 468 500 479 500z m-250 125h42C283 625 292 634 292 646v41C292 699 282 708 271 708h-42C217 708 208 699 208 687v-41C208 634 218 625 229 625z m125 0h42C408 625 417 634 417 646v41C417 699 407 708 396 708h-42C342 708 333 699 333 687v-41C333 634 343 625 354 625z m125 0h42c12 0 21 9 21 21v41C542 699 532 708 521 708h-42C467 708 458 699 458 687v-41C458 634 468 625 479 625z m125-250h42C658 375 667 384 667 396v41C667 449 657 458 646 458h-42C592 458 583 449 583 437v-41C583 384 593 375 604 375z m0 125h42c12 0 21 9 21 21v41C667 574 657 583 646 583h-42C592 583 583 574 583 562v-41C583 509 593 500 604 500z m0 125h42c12 0 21 9 21 21v41C667 699 657 708 646 708h-42C592 708 583 699 583 687v-41C583 634 593 625 604 625z m125 0h42c12 0 21 9 21 21v41C792 699 782 708 771 708h-42C717 708 708 699 708 687v-41C708 634 718 625 729 625z m-500 125h42C283 750 292 759 292 771v41C292 824 282 833 271 833h-42C217 833 208 824 208 812v-41C208 759 218 750 229 750z m125 0h42C408 750 417 759 417 771v41C417 824 407 833 396 833h-42C342 833 333 824 333 812v-41C333 759 343 750 354 750z m125 0h42c12 0 21 9 21 21v41C542 824 532 833 521 833h-42C467 833 458 824 458 812v-41C458 759 468 750 479 750z m125 0h42c12 0 21 9 21 21v41C667 824 657 833 646 833h-42C592 833 583 824 583 812v-41C583 759 593 750 604 750z m125 0h42c12 0 21 9 21 21v41C792 824 782 833 771 833h-42C717 833 708 824 708 812v-41C708 759 718 750 729 750z m0-250h42c12 0 21 9 21 21v41C792 574 782 583 771 583h-42C717 583 708 574 708 562v-41C708 509 718 500 729 500z m0-125h42C783 375 792 384 792 396v41C792 449 782 458 771 458h-42C717 458 708 449 708 437v-41C708 384 718 375 729 375z"></path></g>
<g id="lumo:checkmark"><path d="M318 493c-15-15-38-15-53 0-15 15-15 38 0 53l136 136c15 15 38 15 53 0l323-322c15-15 15-38 0-53-15-15-38-15-54 0l-295 296-110-110z"></path></g>
<g id="lumo:chevron-down"><path d="M533 654l210-199c9-9 9-23 0-32C739 419 733 417 726 417H274C261 417 250 427 250 439c0 6 2 12 7 16l210 199c18 17 48 17 66 0z"></path></g>
<g id="lumo:chevron-left"><path d="M346 533l199 210c9 9 23 9 32 0 4-4 7-10 6-17V274C583 261 573 250 561 250c-6 0-12 2-16 7l-199 210c-17 18-17 48 0 66z"></path></g>
<g id="lumo:chevron-right"><path d="M654 533L455 743c-9 9-23 9-32 0C419 739 417 733 417 726V274C417 261 427 250 439 250c6 0 12 2 16 7l199 210c17 18 17 48 0 66z"></path></g>
<g id="lumo:chevron-up"><path d="M533 346l210 199c9 9 9 23 0 32-4 4-10 7-17 6H274C261 583 250 573 250 561c0-6 2-12 7-16l210-199c18-17 48-17 66 0z"></path></g>
<g id="lumo:clock"><path d="M538 489l85 85c15 15 15 38 0 53-15 15-38 15-53 0l-93-93a38 38 0 0 1-2-2C467 525 462 515 462 504V308c0-21 17-38 38-37 21 0 38 17 37 37v181zM500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265z"></path></g>
<g id="lumo:cog"><path d="M833 458l-81-18c-8-25-17-50-29-75L767 292 708 233l-72 49c-21-12-46-25-75-30L542 167h-84l-19 79c-25 8-50 17-71 30L296 233 233 296l47 69c-12 21-21 46-29 71L167 458v84l84 25c8 25 17 50 29 75L233 708 292 767l76-44c21 12 46 25 75 29L458 833h84l19-81c25-8 50-17 75-29L708 767l59-59-44-66c12-21 25-46 29-75L833 542v-84z m-333 217c-96 0-175-79-175-175 0-96 79-175 175-175 96 0 175 79 175 175 0 96-79 175-175 175z"></path></g>
<g id="lumo:cross"><path d="M445 500l-142-141c-15-15-15-40 0-56 15-15 40-15 56 0L500 445l141-142c15-15 40-15 56 0 15 15 15 40 0 56L555 500l142 141c15 15 15 40 0 56-15 15-40 15-56 0L500 555l-141 142c-15 15-40 15-56 0-15-15-15-40 0-56L445 500z"></path></g>
<g id="lumo:download"><path d="M538 521l125-112c15-14 39-12 53 4 14 15 12 39-4 53l-187 166a38 38 0 0 1 0 0c-14 13-36 12-50 0l-187-166c-15-14-17-37-4-53 14-15 37-17 53-4L462 521V188c0-21 17-38 38-38s38 17 37 38v333zM758 704c0-21 17-38 38-37 21 0 38 17 37 37v92c0 21-17 38-37 37H204c-21 0-38-17-37-37v-92c0-21 17-38 37-37s38 17 38 37v54h516v-54z"></path></g>
<g id="lumo:dropdown"><path d="M317 393c-15-14-39-13-53 3-14 15-13 39 3 53l206 189c14 13 36 13 50 0l210-193c15-14 17-38 3-53-14-15-38-17-53-3l-185 171L317 393z"></path></g>
<g id="lumo:edit"><path d="M673 281l62 56-205 233c-9 10-38 24-85 39a8 8 0 0 1-5 0c-4-1-7-6-6-10l0 0c14-47 25-76 35-86l204-232z m37-42l52-59c15-17 41-18 58-2 17 16 18 42 3 59L772 295l-62-56zM626 208l-67 75h-226C305 283 283 306 283 333v334C283 695 306 717 333 717h334c28 0 50-22 50-50v-185L792 398v269C792 736 736 792 667 792H333C264 792 208 736 208 667V333C208 264 264 208 333 208h293z"></path></g>
<g id="lumo:error"><path d="M500 833c-184 0-333-149-333-333s149-333 333-333 333 149 333 333-149 333-333 333z m0-68c146 0 265-118 265-265 0-146-118-265-265-265-146 0-265 118-265 265 0 146 118 265 265 265zM479 292h42c12 0 21 9 20 20l-11 217c0 8-6 13-13 13h-34c-7 0-13-6-13-13l-11-217C459 301 468 292 479 292zM483 608h34c12 0 21 9 20 21v33c0 12-9 21-20 21h-34c-12 0-21-9-21-21v-33c0-12 9-21 21-21z"></path></g>
<g id="lumo:eye"><path d="M500 750c-187 0-417-163-417-250s230-250 417-250 417 163 417 250-230 250-417 250z m-336-231c20 22 47 46 78 69C322 644 411 678 500 678s178-34 258-90c31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69C678 356 589 322 500 322s-178 34-258 90c-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19zM500 646c-81 0-146-65-146-146s65-146 146-146 146 65 146 146-65 146-146 146z m0-75c39 0 71-32 71-71 0-39-32-71-71-71-39 0-71 32-71 71 0 39 32 71 71 71z"></path></g>
<g id="lumo:eye-disabled"><path d="M396 735l60-60c15 2 30 3 44 3 89 0 178-34 258-90 31-22 59-46 78-69 6-7 12-14 16-19-4-6-9-12-16-19-20-22-47-46-78-69-8-5-15-11-23-15l50-51C862 397 917 458 917 500c0 87-230 250-417 250-34 0-69-5-104-15zM215 654C138 603 83 542 83 500c0-87 230-250 417-250 34 0 69 5 104 15l-59 60c-15-2-30-3-45-3-89 0-178 34-258 90-31 22-59 46-78 69-6 7-12 14-16 19 4 6 9 12 16 19 20 22 47 46 78 69 8 5 16 11 24 16L215 654z m271-9l159-159c0 5 1 9 1 14 0 81-65 146-146 146-5 0-9 0-14-1z m-131-131C354 510 354 505 354 500c0-81 65-146 146-146 5 0 10 0 14 1l-159 159z m-167 257L780 179c12-12 32-12 44 0 12 12 12 32 0 44L232 815c-12 12-32 12-44 0s-12-32 0-44z"></path></g>
<g id="lumo:menu"><path d="M167 292c0-23 19-42 41-42h584C815 250 833 268 833 292c0 23-19 42-41 41H208C185 333 167 315 167 292z m0 208c0-23 19-42 41-42h584C815 458 833 477 833 500c0 23-19 42-41 42H208C185 542 167 523 167 500z m0 208c0-23 19-42 41-41h584C815 667 833 685 833 708c0 23-19 42-41 42H208C185 750 167 732 167 708z"></path></g>
<g id="lumo:minus"><path d="M261 461c-22 0-39 18-39 39 0 22 18 39 39 39h478c22 0 39-18 39-39 0-22-18-39-39-39H261z"></path></g>
<g id="lumo:ordered-list"><path d="M138 333V198H136l-43 28v-38l45-31h45V333H138z m-61 128c0-35 27-59 68-59 39 0 66 21 66 53 0 20-11 37-43 64l-29 27v2h74V583H80v-30l55-52c26-24 32-33 33-43 0-13-10-22-24-22-15 0-26 10-26 25v1h-41v-1zM123 759v-31h21c15 0 25-8 25-21 0-13-10-21-25-21-15 0-26 9-26 23h-41c1-34 27-56 68-57 39 0 66 20 66 49 0 20-14 36-33 39v3c24 3 40 19 39 41 0 32-30 54-73 54-41 0-69-22-70-57h43c1 13 11 22 28 22 16 0 27-9 27-22 0-14-10-22-28-22h-21zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:phone"><path d="M296 208l42-37c17-15 44-13 58 4a42 42 0 0 1 5 7L459 282c12 20 5 45-15 57l-7 4c-17 10-25 30-19 48l20 66a420 420 0 0 0 93 157l41 45c13 14 35 17 51 8l7-5c20-12 45-5 57 16L745 777c12 20 5 45-15 57a42 42 0 0 1-8 4l-52 17c-61 21-129 4-174-43l-50-52c-81-85-141-189-175-302l-24-78c-19-62 0-129 49-172z"></path></g>
<g id="lumo:photo"><path d="M208 167h584c69 0 125 56 125 125v416c0 69-56 125-125 125H208c-69 0-125-56-125-125V292c0-69 56-125 125-125z m584 75H208c-28 0-50 22-50 50v416c0 28 22 50 50 50h584c28 0 50-22 50-50V292c0-28-22-50-50-50zM239 740l167-167c12-12 31-14 45-6l73 43 172-201c13-15 34-18 50-7l95 67v92l-111-78-169 199c-12 14-32 17-47 8l-76-43-111 111H229c2-7 5-13 10-18zM458 427C458 490 407 542 344 542S229 490 229 427c0-63 51-115 115-115S458 364 458 427z m-62 0C396 398 373 375 344 375S292 398 292 427c0 29 23 52 52 52s52-23 52-52z"></path></g>
<g id="lumo:play"><path d="M689 528l-298 175c-13 8-34 8-48 0-6-4-10-9-10-14V311C333 300 348 292 367 292c9 0 17 2 24 5l298 175c26 15 26 40 0 56z"></path></g>
<g id="lumo:plus"><path d="M461 461H261c-22 0-39 18-39 39 0 22 18 39 39 39h200v200c0 22 18 39 39 39 22 0 39-18 39-39v-200h200c22 0 39-18 39-39 0-22-18-39-39-39h-200V261c0-22-18-39-39-39-22 0-39 18-39 39v200z"></path></g>
<g id="lumo:redo"><path d="M290 614C312 523 393 458 491 458c55 0 106 22 144 57l-88 88c-3 3-5 7-5 11 0 8 6 15 15 15l193-5c17 0 31-15 31-32l5-192c0-4-1-8-4-11-6-6-16-6-22 0l-66 67C641 406 570 375 491 375c-136 0-248 90-281 215-1 2-1 5-1 8-8 44 45 68 73 32 4-5 7-11 8-16z"></path></g>
<g id="lumo:reload"><path d="M500 233V137c0-9 7-16 15-16 4 0 8 2 10 4l133 140c12 12 12 32 0 45l-133 140c-6 6-15 6-21 0C502 447 500 443 500 438V308c-117 0-212 95-212 213 0 117 95 212 212 212 117 0 212-95 212-212 0-21 17-38 38-38s38 17 37 38c0 159-129 288-287 287-159 0-288-129-288-287 0-159 129-288 288-288z"></path></g>
<g id="lumo:search"><path d="M662 603l131 131c16 16 16 42 0 59-16 16-43 16-59 0l-131-131C562 691 512 708 458 708c-138 0-250-112-250-250 0-138 112-250 250-250 138 0 250 112 250 250 0 54-17 104-46 145zM458 646c104 0 188-84 188-188S562 271 458 271 271 355 271 458s84 188 187 188z"></path></g>
<g id="lumo:undo"><path d="M710 614C688 523 607 458 509 458c-55 0-106 22-144 57l88 88c3 3 5 7 5 11 0 8-6 15-15 15l-193-5c-17 0-31-15-31-32L214 400c0-4 1-8 4-11 6-6 16-6 22 0l66 67C359 406 430 375 509 375c136 0 248 90 281 215 1 2 1 5 1 8 8 44-45 68-73 32-4-5-7-11-8-16z"></path></g>
<g id="lumo:unordered-list"><path d="M146 325c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63z m0 250c-42 0-67-26-67-63 0-37 25-63 67-63 42 0 67 26 67 63 0 37-25 63-67 63zM333 258c0-18 15-33 34-33h516c18 0 33 15 34 33 0 18-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z m0 250c0-18 15-33 34-33h516c18 0 33 15 34 33s-15 33-34 34H367c-18 0-33-15-34-34z"></path></g>
<g id="lumo:upload"><path d="M454 271V604c0 21-17 38-37 38s-38-17-38-38V271L254 382c-15 14-39 12-53-3-14-15-12-39 3-53L391 160c14-13 36-13 51-1 0 0 0 0 0 1l187 166c15 14 17 37 3 53-14 15-37 17-53 3L454 271zM675 704c0-21 17-38 37-37 21 0 38 17 38 37v92c0 21-17 38-38 37H121c-21 0-38-17-38-37v-92c0-21 17-38 38-37s38 17 37 37v54h517v-54z"></path></g>
<g id="lumo:user"><path d="M500 500c-69 0-125-56-125-125s56-125 125-125 125 56 125 125-56 125-125 125z m-292 292c0-115 131-208 292-209s292 93 292 209H208z"></path></g>
</defs></svg>`;jd.register("lumo",1e3,Yd);const Ym=Li({name:"App",props:{route:{type:String,default:"home-page"}},setup(s){return{activeComponent:yt(s.route)}}}),Ys=(s,t)=>{const e=s.__vccOpts||s;for(const[i,r]of t)e[i]=r;return e};function Gm(s,t,e,i,r,o){return $i(),wu($h(s.activeComponent))}const qm=Ys(Ym,[["render",Gm]]),Km=S`
  :host {
    /* Sizing */
    --lumo-button-size: var(--lumo-size-m);
    min-width: var(--vaadin-button-min-width, calc(var(--_button-size) * 2));
    height: var(--_button-size);
    padding: var(--vaadin-button-padding, 0 calc(var(--_button-size) / 3 + var(--lumo-border-radius-m) / 2));
    margin: var(--vaadin-button-margin, var(--lumo-space-xs) 0);
    box-sizing: border-box;
    /* Style */
    font-family: var(--lumo-font-family);
    font-size: var(--vaadin-button-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-button-font-weight, 500);
    color: var(--_lumo-button-text-color);
    background: var(--_lumo-button-background);
    border: var(--vaadin-button-border, none);
    border-radius: var(--vaadin-button-border-radius, var(--lumo-border-radius-m));
    cursor: var(--lumo-clickable-cursor);
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    flex-shrink: 0;
    --_button-size: var(--vaadin-button-height, var(--lumo-button-size));
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    /* Used by notification */
    --_lumo-button-background: var(--vaadin-button-background, var(--lumo-contrast-5pct));
    --_lumo-button-text-color: var(--vaadin-button-text-color, var(--lumo-primary-text-color));
    --_lumo-button-primary-background: var(--vaadin-button-primary-background, var(--lumo-primary-color));
    --_lumo-button-primary-text-color: var(--vaadin-button-primary-text-color, var(--lumo-primary-contrast-color));
  }

  /* Set only for the internal parts so we don't affect the host vertical alignment */
  [part='label'],
  [part='prefix'],
  [part='suffix'] {
    line-height: var(--lumo-line-height-xs);
  }

  [part='label'] {
    padding: calc(var(--lumo-button-size) / 6) 0;
  }

  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-button-size: var(--lumo-size-s);
  }

  :host([theme~='large']) {
    font-size: var(--lumo-font-size-l);
    --lumo-button-size: var(--lumo-size-l);
  }

  /* For interaction states */
  :host::before,
  :host::after {
    content: '';
    /* We rely on the host always being relative */
    position: absolute;
    z-index: 1;
    inset: 0;
    background-color: currentColor;
    border-radius: inherit;
    opacity: 0;
    pointer-events: none;
  }

  /* Hover */

  @media (any-hover: hover) {
    :host(:hover)::before {
      opacity: 0.02;
    }
  }

  /* Active */

  :host::after {
    transition: opacity 1.4s, transform 0.1s;
    filter: blur(8px);
  }

  :host([active])::before {
    opacity: 0.05;
    transition-duration: 0s;
  }

  :host([active])::after {
    opacity: 0.1;
    transition-duration: 0s, 0s;
    transform: scale(0);
  }

  /* Keyboard focus */

  :host([focus-ring]) {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  :host([theme~='primary'][focus-ring]) {
    box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 3px var(--lumo-primary-color-50pct);
  }

  /* Types (primary, tertiary, tertiary-inline */

  :host([theme~='tertiary']),
  :host([theme~='tertiary-inline']) {
    --_background: transparent !important;
    background: var(--vaadin-button-tertiary-background, var(--_background));
    min-width: 0;
  }

  :host([theme~='tertiary']) {
    border: var(--vaadin-button-tertiary-border, none);
    color: var(--vaadin-button-tertiary-text-color, var(--lumo-primary-text-color));
    font-weight: var(--vaadin-button-tertiary-font-weight, 500);
    padding: var(--vaadin-button-tertiary-padding, 0 calc(var(--_button-size) / 6));
  }

  :host([theme~='tertiary-inline'])::before {
    display: none;
  }

  :host([theme~='tertiary-inline']) {
    margin: 0;
    height: auto;
    padding: 0;
    line-height: inherit;
    font-size: inherit;
  }

  :host([theme~='tertiary-inline']) [part='label'] {
    padding: 0;
    overflow: visible;
    line-height: inherit;
  }

  :host([theme~='primary']) {
    background: var(--_lumo-button-primary-background);
    border: var(--vaadin-button-primary-border, none);
    color: var(--_lumo-button-primary-text-color);
    font-weight: var(--vaadin-button-primary-font-weight, 600);
    min-width: calc(var(--lumo-button-size) * 2.5);
  }

  :host([theme~='primary'])::before {
    background-color: black;
  }

  @media (any-hover: hover) {
    :host([theme~='primary']:hover)::before {
      opacity: 0.05;
    }
  }

  :host([theme~='primary'][active])::before {
    opacity: 0.1;
  }

  :host([theme~='primary'][active])::after {
    opacity: 0.2;
  }

  /* Colors (success, error, contrast) */

  :host([theme~='success']) {
    color: var(--lumo-success-text-color);
  }

  :host([theme~='success'][theme~='primary']) {
    background-color: var(--lumo-success-color);
    color: var(--lumo-success-contrast-color);
  }

  :host([theme~='error']) {
    color: var(--lumo-error-text-color);
  }

  :host([theme~='error'][theme~='primary']) {
    background-color: var(--lumo-error-color);
    color: var(--lumo-error-contrast-color);
  }

  :host([theme~='contrast']) {
    color: var(--lumo-contrast);
  }

  :host([theme~='contrast'][theme~='primary']) {
    background-color: var(--lumo-contrast);
    color: var(--lumo-base-color);
  }

  /* Disabled state. Keep selectors after other color variants. */

  :host([disabled]) {
    pointer-events: none;
    color: var(--lumo-disabled-text-color);
  }

  :host([theme~='primary'][disabled]) {
    background-color: var(--lumo-contrast-30pct);
    color: var(--lumo-base-color);
  }

  :host([theme~='primary'][disabled]) [part] {
    opacity: 0.7;
  }

  /* Icons */

  [part] ::slotted(vaadin-icon) {
    display: inline-block;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
  [part] ::slotted(vaadin-icon[icon^='vaadin:']) {
    padding: 0.25em;
    box-sizing: border-box !important;
  }

  [part='prefix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  [part='suffix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  /* Icon-only */

  :host([theme~='icon']:not([theme~='tertiary-inline'])) {
    min-width: var(--lumo-button-size);
    padding-left: calc(var(--lumo-button-size) / 4);
    padding-right: calc(var(--lumo-button-size) / 4);
  }

  :host([theme~='icon']) [part='prefix'],
  :host([theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }

  /* RTL specific styles */

  :host([dir='rtl']) [part='prefix'] {
    margin-left: 0.25em;
    margin-right: -0.25em;
  }

  :host([dir='rtl']) [part='suffix'] {
    margin-left: -0.25em;
    margin-right: 0.25em;
  }

  :host([dir='rtl'][theme~='icon']) [part='prefix'],
  :host([dir='rtl'][theme~='icon']) [part='suffix'] {
    margin-left: 0;
    margin-right: 0;
  }
`;F("vaadin-button",Km,{moduleId:"lumo-button"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ht=te(s=>typeof s.prototype.addController=="function"?s:class extends s{constructor(){super(),this.__controllers=new Set}connectedCallback(){super.connectedCallback(),this.__controllers.forEach(e=>{e.hostConnected&&e.hostConnected()})}disconnectedCallback(){super.disconnectedCallback(),this.__controllers.forEach(e=>{e.hostDisconnected&&e.hostDisconnected()})}addController(e){this.__controllers.add(e),this.$!==void 0&&this.isConnected&&e.hostConnected&&e.hostConnected()}removeController(e){this.__controllers.delete(e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Xm(s){const t=[];for(;s;){if(s.nodeType===Node.DOCUMENT_NODE){t.push(s);break}if(s.nodeType===Node.DOCUMENT_FRAGMENT_NODE){t.push(s),s=s.host;continue}if(s.assignedSlot){s=s.assignedSlot;continue}s=s.parentNode}return t}function Gd(s,t){return t?t.closest(s)||Gd(s,t.getRootNode().host):null}function Yo(s){return s?new Set(s.split(" ")):new Set}function Gs(s){return s?[...s].join(" "):""}function qs(s,t,e){const i=Yo(s.getAttribute(t));i.add(e),s.setAttribute(t,Gs(i))}function Go(s,t,e){const i=Yo(s.getAttribute(t));if(i.delete(e),i.size===0){s.removeAttribute(t);return}s.setAttribute(t,Gs(i))}function Jm(s){return s.nodeType===Node.TEXT_NODE&&s.textContent.trim()===""}/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Qm{constructor(t,e){this.slot=t,this.callback=e,this._storedNodes=[],this._connected=!1,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){this.slot.addEventListener("slotchange",this._boundSchedule),this._connected=!0}disconnect(){this.slot.removeEventListener("slotchange",this._boundSchedule),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,queueMicrotask(()=>{this.flush()}))}flush(){this._connected&&(this._scheduled=!1,this._processNodes())}_processNodes(){const t=this.slot.assignedNodes({flatten:!0});let e=[];const i=[],r=[];t.length&&(e=t.filter(o=>!this._storedNodes.includes(o))),this._storedNodes.length&&this._storedNodes.forEach((o,n)=>{const a=t.indexOf(o);a===-1?i.push(o):a!==n&&r.push(o)}),(e.length||i.length||r.length)&&this.callback({addedNodes:e,movedNodes:r,removedNodes:i}),this._storedNodes=t}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Zm=0;function qo(){return Zm++}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class we extends EventTarget{static generateId(t,e){return`${e||"default"}-${t.localName}-${qo()}`}constructor(t,e,i,r={}){super();const{initializer:o,multiple:n,observe:a,useUniqueId:l}=r;this.host=t,this.slotName=e,this.tagName=i,this.observe=typeof a=="boolean"?a:!0,this.multiple=typeof n=="boolean"?n:!1,this.slotInitializer=o,n&&(this.nodes=[]),l&&(this.defaultId=this.constructor.generateId(t,e))}hostConnected(){this.initialized||(this.multiple?this.initMultiple():this.initSingle(),this.observe&&this.observeSlot(),this.initialized=!0)}initSingle(){let t=this.getSlotChild();t?(this.node=t,this.initAddedNode(t)):(t=this.attachDefaultNode(),this.initNode(t))}initMultiple(){const t=this.getSlotChildren();if(t.length===0){const e=this.attachDefaultNode();e&&(this.nodes=[e],this.initNode(e))}else this.nodes=t,t.forEach(e=>{this.initAddedNode(e)})}attachDefaultNode(){const{host:t,slotName:e,tagName:i}=this;let r=this.defaultNode;return!r&&i&&(r=document.createElement(i),r instanceof Element&&(e!==""&&r.setAttribute("slot",e),this.node=r,this.defaultNode=r)),r&&t.appendChild(r),r}getSlotChildren(){const{slotName:t}=this;return Array.from(this.host.childNodes).filter(e=>e.nodeType===Node.ELEMENT_NODE&&e.slot===t||e.nodeType===Node.TEXT_NODE&&e.textContent.trim()&&t==="")}getSlotChild(){return this.getSlotChildren()[0]}initNode(t){const{slotInitializer:e}=this;e&&e(t,this.host)}initCustomNode(t){}teardownNode(t){}initAddedNode(t){t!==this.defaultNode&&(this.initCustomNode(t),this.initNode(t))}observeSlot(){const{slotName:t}=this,e=t===""?"slot:not([name])":`slot[name=${t}]`,i=this.host.shadowRoot.querySelector(e);this.__slotObserver=new Qm(i,({addedNodes:r,removedNodes:o})=>{const n=this.multiple?this.nodes:[this.node],a=r.filter(l=>!Jm(l)&&!n.includes(l));o.length&&(this.nodes=n.filter(l=>!o.includes(l)),o.forEach(l=>{this.teardownNode(l)})),a&&a.length>0&&(this.multiple?(this.defaultNode&&this.defaultNode.remove(),this.nodes=[...n,...a].filter(l=>l!==this.defaultNode),a.forEach(l=>{this.initAddedNode(l)})):(this.node&&this.node.remove(),this.node=a[0],this.initAddedNode(this.node)))})}}/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Ui extends we{constructor(t){super(t,"tooltip"),this.setTarget(t)}initCustomNode(t){t.target=this.target,this.ariaTarget!==void 0&&(t.ariaTarget=this.ariaTarget),this.context!==void 0&&(t.context=this.context),this.manual!==void 0&&(t.manual=this.manual),this.opened!==void 0&&(t.opened=this.opened),this.position!==void 0&&(t._position=this.position),this.shouldShow!==void 0&&(t.shouldShow=this.shouldShow),this.__notifyChange()}teardownNode(){this.__notifyChange()}setAriaTarget(t){this.ariaTarget=t;const e=this.node;e&&(e.ariaTarget=t)}setContext(t){this.context=t;const e=this.node;e&&(e.context=t)}setManual(t){this.manual=t;const e=this.node;e&&(e.manual=t)}setOpened(t){this.opened=t;const e=this.node;e&&(e.opened=t)}setPosition(t){this.position=t;const e=this.node;e&&(e._position=t)}setShouldShow(t){this.shouldShow=t;const e=this.node;e&&(e.shouldShow=t)}setTarget(t){this.target=t;const e=this.node;e&&(e.target=t)}__notifyChange(){this.dispatchEvent(new CustomEvent("tooltip-changed",{detail:{node:this.node}}))}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const e_=S`
  :host {
    display: inline-block;
    position: relative;
    outline: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Aligns the button with form fields when placed on the same line.
  Note, to make it work, the form fields should have the same "::before" pseudo-element. */
  .vaadin-button-container::before {
    content: '\\2003';
    display: inline-block;
    width: 0;
    max-height: 100%;
  }

  .vaadin-button-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    min-height: inherit;
    text-shadow: inherit;
  }

  [part='prefix'],
  [part='suffix'] {
    flex: none;
  }

  [part='label'] {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (forced-colors: active) {
    :host {
      outline: 1px solid;
      outline-offset: -1px;
    }

    :host([focused]) {
      outline-width: 2px;
    }

    :host([disabled]) {
      outline-color: GrayText;
    }
  }
`,t_=s=>s`
  <div class="vaadin-button-container">
    <span part="prefix" aria-hidden="true">
      <slot name="prefix"></slot>
    </span>
    <span part="label">
      <slot></slot>
    </span>
    <span part="suffix" aria-hidden="true">
      <slot name="suffix"></slot>
    </span>
  </div>
  <slot name="tooltip"></slot>
`;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const i_=!1,s_=s=>s,Ko=typeof document.head.style.touchAction=="string",no="__polymerGestures",Ar="__polymerGesturesHandled",ao="__polymerGesturesTouchAction",Fa=25,La=5,r_=2,o_=["mousedown","mousemove","mouseup","click"],n_=[0,1,4,2],a_=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Xo(s){return o_.indexOf(s)>-1}let qd=!1;(function(){try{const s=Object.defineProperty({},"passive",{get(){qd=!0}});window.addEventListener("test",null,s),window.removeEventListener("test",null,s)}catch{}})();function l_(s){if(!(Xo(s)||s==="touchend")&&Ko&&qd&&i_)return{passive:!0}}const d_=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/u),c_={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Tt(s){const t=s.type;if(!Xo(t))return!1;if(t==="mousemove"){let i=s.buttons===void 0?1:s.buttons;return s instanceof window.MouseEvent&&!a_&&(i=n_[s.which]||0),!!(i&1)}return(s.button===void 0?0:s.button)===0}function h_(s){if(s.type==="click"){if(s.detail===0)return!0;const t=ot(s);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;const e=t.getBoundingClientRect(),i=s.pageX,r=s.pageY;return!(i>=e.left&&i<=e.right&&r>=e.top&&r<=e.bottom)}return!1}const Ue={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function u_(s){let t="auto";const e=Xd(s);for(let i=0,r;i<e.length;i++)if(r=e[i],r[ao]){t=r[ao];break}return t}function Kd(s,t,e){s.movefn=t,s.upfn=e,document.addEventListener("mousemove",t),document.addEventListener("mouseup",e)}function Wt(s){document.removeEventListener("mousemove",s.movefn),document.removeEventListener("mouseup",s.upfn),s.movefn=null,s.upfn=null}const Xd=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:s=>s.composedPath&&s.composedPath()||[],Jo={},Et=[];function p_(s,t){let e=document.elementFromPoint(s,t),i=e;for(;i&&i.shadowRoot&&!window.ShadyDOM;){const r=i;if(i=i.shadowRoot.elementFromPoint(s,t),r===i)break;i&&(e=i)}return e}function ot(s){const t=Xd(s);return t.length>0?t[0]:s.target}function f_(s){const t=s.type,i=s.currentTarget[no];if(!i)return;const r=i[t];if(!r)return;if(!s[Ar]&&(s[Ar]={},t.startsWith("touch"))){const n=s.changedTouches[0];if(t==="touchstart"&&s.touches.length===1&&(Ue.touch.id=n.identifier),Ue.touch.id!==n.identifier)return;Ko||(t==="touchstart"||t==="touchmove")&&m_(s)}const o=s[Ar];if(!o.skip){for(let n=0,a;n<Et.length;n++)a=Et[n],r[a.name]&&!o[a.name]&&a.flow&&a.flow.start.indexOf(s.type)>-1&&a.reset&&a.reset();for(let n=0,a;n<Et.length;n++)a=Et[n],r[a.name]&&!o[a.name]&&(o[a.name]=!0,a[t](s))}}function m_(s){const t=s.changedTouches[0],e=s.type;if(e==="touchstart")Ue.touch.x=t.clientX,Ue.touch.y=t.clientY,Ue.touch.scrollDecided=!1;else if(e==="touchmove"){if(Ue.touch.scrollDecided)return;Ue.touch.scrollDecided=!0;const i=u_(s);let r=!1;const o=Math.abs(Ue.touch.x-t.clientX),n=Math.abs(Ue.touch.y-t.clientY);s.cancelable&&(i==="none"?r=!0:i==="pan-x"?r=n>o:i==="pan-y"&&(r=o>n)),r?s.preventDefault():Es("track")}}function Ce(s,t,e){return Jo[t]?(__(s,t,e),!0):!1}function __(s,t,e){const i=Jo[t],r=i.deps,o=i.name;let n=s[no];n||(s[no]=n={});for(let a=0,l,d;a<r.length;a++)l=r[a],!(d_&&Xo(l)&&l!=="click")&&(d=n[l],d||(n[l]=d={_count:0}),d._count===0&&s.addEventListener(l,f_,l_(l)),d[o]=(d[o]||0)+1,d._count=(d._count||0)+1);s.addEventListener(t,e),i.touchAction&&Jd(s,i.touchAction)}function Qo(s){Et.push(s),s.emits.forEach(t=>{Jo[t]=s})}function g_(s){for(let t=0,e;t<Et.length;t++){e=Et[t];for(let i=0,r;i<e.emits.length;i++)if(r=e.emits[i],r===s)return e}return null}function Jd(s,t){Ko&&s instanceof HTMLElement&&Ye.run(()=>{s.style.touchAction=t}),s[ao]=t}function Zo(s,t,e){const i=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(i.detail=e,s_(s).dispatchEvent(i),i.defaultPrevented){const r=e.preventer||e.sourceEvent;r&&r.preventDefault&&r.preventDefault()}}function Es(s){const t=g_(s);t.info&&(t.info.prevent=!0)}Qo({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset(){Wt(this.info)},mousedown(s){if(!Tt(s))return;const t=ot(s),e=this,i=o=>{Tt(o)||(ri("up",t,o),Wt(e.info))},r=o=>{Tt(o)&&ri("up",t,o),Wt(e.info)};Kd(this.info,i,r),ri("down",t,s)},touchstart(s){ri("down",ot(s),s.changedTouches[0],s)},touchend(s){ri("up",ot(s),s.changedTouches[0],s)}});function ri(s,t,e,i){t&&Zo(t,s,{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:i,prevent(r){return Es(r)}})}Qo({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove(s){this.moves.length>r_&&this.moves.shift(),this.moves.push(s)},movefn:null,upfn:null,prevent:!1},reset(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Wt(this.info)},mousedown(s){if(!Tt(s))return;const t=ot(s),e=this,i=o=>{const n=o.clientX,a=o.clientY;$a(e.info,n,a)&&(e.info.state=e.info.started?o.type==="mouseup"?"end":"track":"start",e.info.state==="start"&&Es("tap"),e.info.addMove({x:n,y:a}),Tt(o)||(e.info.state="end",Wt(e.info)),t&&Sr(e.info,t,o),e.info.started=!0)},r=o=>{e.info.started&&i(o),Wt(e.info)};Kd(this.info,i,r),this.info.x=s.clientX,this.info.y=s.clientY},touchstart(s){const t=s.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove(s){const t=ot(s),e=s.changedTouches[0],i=e.clientX,r=e.clientY;$a(this.info,i,r)&&(this.info.state==="start"&&Es("tap"),this.info.addMove({x:i,y:r}),Sr(this.info,t,e),this.info.state="track",this.info.started=!0)},touchend(s){const t=ot(s),e=s.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:e.clientX,y:e.clientY}),Sr(this.info,t,e))}});function $a(s,t,e){if(s.prevent)return!1;if(s.started)return!0;const i=Math.abs(s.x-t),r=Math.abs(s.y-e);return i>=La||r>=La}function Sr(s,t,e){if(!t)return;const i=s.moves[s.moves.length-2],r=s.moves[s.moves.length-1],o=r.x-s.x,n=r.y-s.y;let a,l=0;i&&(a=r.x-i.x,l=r.y-i.y),Zo(t,"track",{state:s.state,x:e.clientX,y:e.clientY,dx:o,dy:n,ddx:a,ddy:l,sourceEvent:e,hover(){return p_(e.clientX,e.clientY)}})}Qo({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown(s){Tt(s)&&(this.info.x=s.clientX,this.info.y=s.clientY)},click(s){Tt(s)&&Ha(this.info,s)},touchstart(s){const t=s.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend(s){Ha(this.info,s.changedTouches[0],s)}});function Ha(s,t,e){const i=Math.abs(t.clientX-s.x),r=Math.abs(t.clientY-s.y),o=ot(e||t);!o||c_[o.localName]&&o.hasAttribute("disabled")||(isNaN(i)||isNaN(r)||i<=Fa&&r<=Fa||h_(t))&&(s.prevent||Zo(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:e}))}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qd=te(s=>class extends s{static get properties(){return{disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0}}}_disabledChanged(e){this._setAriaDisabled(e)}_setAriaDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}click(){this.disabled||super.click()}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ks=te(s=>class extends s{ready(){super.ready(),this.addEventListener("keydown",e=>{this._onKeyDown(e)}),this.addEventListener("keyup",e=>{this._onKeyUp(e)})}_onKeyDown(e){switch(e.key){case"Enter":this._onEnter(e);break;case"Escape":this._onEscape(e);break}}_onKeyUp(e){}_onEnter(e){}_onEscape(e){}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const v_=s=>class extends Qd(Ks(s)){get _activeKeys(){return[" "]}ready(){super.ready(),Ce(this,"down",e=>{this._shouldSetActive(e)&&this._setActive(!0)}),Ce(this,"up",()=>{this._setActive(!1)})}disconnectedCallback(){super.disconnectedCallback(),this._setActive(!1)}_shouldSetActive(e){return!this.disabled}_onKeyDown(e){super._onKeyDown(e),this._shouldSetActive(e)&&this._activeKeys.includes(e.key)&&(this._setActive(!0),document.addEventListener("keyup",i=>{this._activeKeys.includes(i.key)&&this._setActive(!1)},{once:!0}))}_setActive(e){this.toggleAttribute("active",e)}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let en=!1;window.addEventListener("keydown",()=>{en=!0},{capture:!0});window.addEventListener("mousedown",()=>{en=!1},{capture:!0});function lo(){let s=document.activeElement||document.body;for(;s.shadowRoot&&s.shadowRoot.activeElement;)s=s.shadowRoot.activeElement;return s}function Zd(){return en}function ec(s){const t=s.style;if(t.visibility==="hidden"||t.display==="none")return!0;const e=window.getComputedStyle(s);return e.visibility==="hidden"||e.display==="none"}function b_(s,t){const e=Math.max(s.tabIndex,0),i=Math.max(t.tabIndex,0);return e===0||i===0?i>e:e>i}function y_(s,t){const e=[];for(;s.length>0&&t.length>0;)b_(s[0],t[0])?e.push(t.shift()):e.push(s.shift());return e.concat(s,t)}function co(s){const t=s.length;if(t<2)return s;const e=Math.ceil(t/2),i=co(s.slice(0,e)),r=co(s.slice(e));return y_(i,r)}function As(s){return s.offsetParent===null&&s.clientWidth===0&&s.clientHeight===0?!0:ec(s)}function x_(s){return s.matches('[tabindex="-1"]')?!1:s.matches("input, select, textarea, button, object")?s.matches(":not([disabled])"):s.matches("a[href], area[href], iframe, [tabindex], [contentEditable]")}function C_(s){return s.getRootNode().activeElement===s}function w_(s){if(!x_(s))return-1;const t=s.getAttribute("tabindex")||0;return Number(t)}function tc(s,t){if(s.nodeType!==Node.ELEMENT_NODE||ec(s))return!1;const e=s,i=w_(e);let r=i>0;i>=0&&t.push(e);let o=[];return e.localName==="slot"?o=e.assignedNodes({flatten:!0}):o=(e.shadowRoot||e).children,[...o].forEach(n=>{r=tc(n,t)||r}),r}function E_(s){const t=[];return tc(s,t)?co(t):t}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tn=te(s=>class extends s{get _keyboardActive(){return Zd()}ready(){this.addEventListener("focusin",e=>{this._shouldSetFocus(e)&&this._setFocused(!0)}),this.addEventListener("focusout",e=>{this._shouldRemoveFocus(e)&&this._setFocused(!1)}),super.ready()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){this.toggleAttribute("focused",e),this.toggleAttribute("focus-ring",e&&this._keyboardActive)}_shouldSetFocus(e){return!0}_shouldRemoveFocus(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sn=s=>class extends Qd(s){static get properties(){return{tabindex:{type:Number,reflectToAttribute:!0,observer:"_tabindexChanged"},_lastTabIndex:{type:Number}}}_disabledChanged(e,i){super._disabledChanged(e,i),e?(this.tabindex!==void 0&&(this._lastTabIndex=this.tabindex),this.tabindex=-1):i&&(this.tabindex=this._lastTabIndex)}_tabindexChanged(e){this.disabled&&e!==-1&&(this._lastTabIndex=e,this.tabindex=-1)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const A_=s=>class extends v_(sn(tn(s))){static get properties(){return{tabindex:{type:Number,value:0,reflectToAttribute:!0}}}get _activeKeys(){return["Enter"," "]}ready(){super.ready(),this.hasAttribute("role")||this.setAttribute("role","button")}_onKeyDown(e){super._onKeyDown(e),!(e.altKey||e.shiftKey||e.ctrlKey||e.metaKey)&&this._activeKeys.includes(e.key)&&(e.preventDefault(),this.click())}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-button",e_,{moduleId:"vaadin-button-styles"});class S_ extends A_(qe(ve(ht(ie)))){static get is(){return"vaadin-button"}static get template(){return t_(ae)}ready(){super.ready(),this._tooltipController=new Ui(this),this.addController(this._tooltipController)}}Z(S_);F("vaadin-checkbox",S`
    :host {
      color: var(--vaadin-checkbox-label-color, var(--lumo-body-text-color));
      font-size: var(--vaadin-checkbox-label-font-size, var(--lumo-font-size-m));
      font-family: var(--lumo-font-family);
      line-height: var(--lumo-line-height-s);
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      cursor: default;
      outline: none;
      --_checkbox-size: var(--vaadin-checkbox-size, calc(var(--lumo-size-m) / 2));
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
    }

    :host([has-label]) ::slotted(label) {
      padding: var(
        --vaadin-checkbox-label-padding,
        var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs)
      );
    }

    [part='checkbox'] {
      width: var(--_checkbox-size);
      height: var(--_checkbox-size);
      margin: var(--lumo-space-xs);
      position: relative;
      border-radius: var(--vaadin-checkbox-border-radius, var(--lumo-border-radius-s));
      background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      transition: transform 0.2s cubic-bezier(0.12, 0.32, 0.54, 2), background-color 0.15s;
      cursor: var(--lumo-clickable-cursor);
      /* Default field border color */
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
    }

    :host([indeterminate]),
    :host([checked]) {
      --vaadin-input-field-border-color: transparent;
    }

    :host([indeterminate]) [part='checkbox'],
    :host([checked]) [part='checkbox'] {
      background-color: var(--_selection-color);
    }

    /* Checkmark */
    [part='checkbox']::after {
      pointer-events: none;
      font-family: 'lumo-icons';
      content: var(--vaadin-checkbox-checkmark-char, var(--lumo-icons-checkmark));
      color: var(--vaadin-checkbox-checkmark-color, var(--lumo-primary-contrast-color));
      font-size: var(--vaadin-checkbox-checkmark-size, calc(var(--_checkbox-size) + 2px));
      line-height: 1;
      position: absolute;
      top: -1px;
      left: -1px;
      contain: content;
      opacity: 0;
    }

    :host([checked]) [part='checkbox']::after {
      opacity: 1;
    }

    /* Indeterminate checkmark */
    :host([indeterminate]) [part='checkbox']::after {
      content: var(--vaadin-checkbox-checkmark-char-indeterminate, '');
      opacity: 1;
      top: 45%;
      height: 10%;
      left: 22%;
      right: 22%;
      width: auto;
      border: 0;
      background-color: var(--lumo-primary-contrast-color);
    }

    /* Focus ring */
    :host([focus-ring]) [part='checkbox'] {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color),
        inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
    }

    /* Disabled */
    :host([disabled]) {
      pointer-events: none;
      color: var(--lumo-disabled-text-color);
      --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
    }

    :host([disabled]) ::slotted(label) {
      color: inherit;
    }

    :host([disabled]) [part='checkbox'] {
      background-color: var(--lumo-contrast-10pct);
    }

    :host([disabled]) [part='checkbox']::after {
      color: var(--lumo-contrast-30pct);
    }

    :host([indeterminate][disabled]) [part='checkbox']::after {
      background-color: var(--lumo-contrast-30pct);
    }

    /* RTL specific styles */
    :host([dir='rtl'][has-label]) ::slotted(label) {
      padding: var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-xs) var(--lumo-space-s);
    }

    /* Used for activation "halo" */
    [part='checkbox']::before {
      pointer-events: none;
      color: transparent;
      width: 100%;
      height: 100%;
      line-height: var(--_checkbox-size);
      border-radius: inherit;
      background-color: inherit;
      transform: scale(1.4);
      opacity: 0;
      transition: transform 0.1s, opacity 0.8s;
    }

    /* Hover */
    :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
      background: var(--vaadin-checkbox-background-hover, var(--lumo-contrast-30pct));
    }

    /* Disable hover for touch devices */
    @media (pointer: coarse) {
      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part='checkbox'] {
        background: var(--vaadin-checkbox-background, var(--lumo-contrast-20pct));
      }
    }

    /* Active */
    :host([active]) [part='checkbox'] {
      transform: scale(0.9);
      transition-duration: 0.05s;
    }

    :host([active][checked]) [part='checkbox'] {
      transform: scale(1.1);
    }

    :host([active]:not([checked])) [part='checkbox']::before {
      transition-duration: 0.01s, 0.01s;
      transform: scale(0);
      opacity: 0.4;
    }
  `,{moduleId:"lumo-checkbox"});F("vaadin-grid",S`
    :host {
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-m);
      line-height: var(--lumo-line-height-s);
      color: var(--lumo-body-text-color);
      background-color: var(--lumo-base-color);
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -webkit-tap-highlight-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      /* For internal use only */
      --_lumo-grid-border-color: var(--lumo-contrast-20pct);
      --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
      --_lumo-grid-border-width: 1px;
      --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
    }

    /* No (outer) border */

    :host(:not([theme~='no-border'])) {
      border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
    }

    :host([disabled]) {
      opacity: 0.7;
    }

    /* Cell styles */

    [part~='cell'] {
      min-height: var(--lumo-size-m);
      background-color: var(--vaadin-grid-cell-background, var(--lumo-base-color));
      cursor: default;
      --_cell-padding: var(--vaadin-grid-cell-padding, var(--_cell-default-padding));
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-m);
    }

    [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      cursor: inherit;
      padding: var(--_cell-padding);
    }

    /* Apply row borders by default and introduce the "no-row-borders" variant */
    :host(:not([theme~='no-row-borders'])) [part~='cell']:not([part~='details-cell']) {
      border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Hide first body row top border */
    :host(:not([theme~='no-row-borders'])) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      border-top: 0;
      min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
    }

    /* Focus-ring */

    [part~='row'] {
      position: relative;
    }

    [part~='row']:focus,
    [part~='focused-cell']:focus {
      outline: none;
    }

    :host([navigating]) [part~='row']:focus::before,
    :host([navigating]) [part~='focused-cell']:focus::before {
      content: '';
      position: absolute;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    :host([navigating]) [part~='row']:focus::before {
      transform: translateX(calc(-1 * var(--_grid-horizontal-scroll-position)));
      z-index: 3;
    }

    /* Drag and Drop styles */
    :host([dragover])::after {
      content: '';
      position: absolute;
      z-index: 100;
      inset: 0;
      pointer-events: none;
      box-shadow: inset 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
    }

    [part~='row'][dragover] {
      z-index: 100 !important;
    }

    [part~='row'][dragover] [part~='cell'] {
      overflow: visible;
    }

    [part~='row'][dragover] [part~='cell']::after {
      content: '';
      position: absolute;
      inset: 0;
      height: calc(var(--_lumo-grid-border-width) + 2px);
      pointer-events: none;
      background: var(--lumo-primary-color-50pct);
    }

    [part~='row'][dragover] [part~='cell'][last-frozen]::after {
      right: -1px;
    }

    :host([theme~='no-row-borders']) [dragover] [part~='cell']::after {
      height: 2px;
    }

    [part~='row'][dragover='below'] [part~='cell']::after {
      top: 100%;
      bottom: auto;
      margin-top: -1px;
    }

    :host([all-rows-visible]) [part~='last-row'][dragover='below'] [part~='cell']::after {
      height: 1px;
    }

    [part~='row'][dragover='above'] [part~='cell']::after {
      top: auto;
      bottom: 100%;
      margin-bottom: -1px;
    }

    [part~='row'][details-opened][dragover='below'] [part~='cell']:not([part~='details-cell'])::after,
    [part~='row'][details-opened][dragover='above'] [part~='details-cell']::after {
      display: none;
    }

    [part~='row'][dragover][dragover='on-top'] [part~='cell']::after {
      height: 100%;
      opacity: 0.5;
    }

    [part~='row'][dragstart] [part~='cell'] {
      border: none !important;
      box-shadow: none !important;
    }

    [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    #scroller [part~='row'][dragstart]:not([dragstart=''])::after {
      display: block;
      position: absolute;
      left: var(--_grid-drag-start-x);
      top: var(--_grid-drag-start-y);
      z-index: 100;
      content: attr(dragstart);
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      padding: calc(var(--lumo-space-xs) * 0.8);
      color: var(--lumo-error-contrast-color);
      background-color: var(--lumo-error-color);
      border-radius: var(--lumo-border-radius-m);
      font-family: var(--lumo-font-family);
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      font-weight: 500;
      text-transform: initial;
      letter-spacing: initial;
      min-width: calc(var(--lumo-size-s) * 0.7);
      text-align: center;
    }

    /* Headers and footers */

    [part~='header-cell'],
    [part~='footer-cell'],
    [part~='reorder-ghost'] {
      font-size: var(--lumo-font-size-s);
      font-weight: 500;
    }

    [part~='footer-cell'] {
      font-weight: 400;
    }

    [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-xl);
    }

    /* Header borders */

    /* Hide first header row top border */
    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='header-cell'] {
      border-top: 0;
    }

    /* Hide header row top border if previous row is hidden */
    [part~='row'][hidden] + [part~='row'] [part~='header-cell'] {
      border-top: 0;
    }

    [part~='row']:last-child [part~='header-cell'] {
      border-bottom: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='top']) [part~='row']:last-child [part~='header-cell'] {
      border-bottom-color: var(--_lumo-grid-border-color);
    }

    /* Footer borders */

    [part~='row']:first-child [part~='footer-cell'] {
      border-top: var(--_lumo-grid-border-width) solid transparent;
    }

    :host(:not([theme~='no-row-borders'])) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-secondary-border-color);
    }

    /* Overflow uses a stronger border color */
    :host([overflow~='bottom']) [part~='row']:first-child [part~='footer-cell'] {
      border-top-color: var(--_lumo-grid-border-color);
    }

    /* Column reordering */

    :host([reordering]) [part~='cell'] {
      background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='allowed'] {
      background: var(--lumo-base-color);
    }

    :host([reordering]) [part~='cell'][reorder-status='dragging'] {
      background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
    }

    [part~='reorder-ghost'] {
      opacity: 0.85;
      box-shadow: var(--lumo-box-shadow-s);
      /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
      padding: var(--lumo-space-s) var(--lumo-space-m) !important;
    }

    /* Column resizing */

    [part='resize-handle'] {
      width: 3px;
      background-color: var(--lumo-primary-color-50pct);
      opacity: 0;
      transition: opacity 0.2s;
    }

    :host(:not([reordering])) *:not([column-resizing]) [part~='cell']:hover [part='resize-handle'],
    [part='resize-handle']:active {
      opacity: 1;
      transition-delay: 0.15s;
    }

    /* Column borders */

    :host([theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    /* Frozen columns */

    [last-frozen] {
      border-right: var(--_lumo-grid-border-width) solid transparent;
      overflow: hidden;
    }

    :host([overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }

    [first-frozen-to-end] {
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    /* Row stripes */

    :host([theme~='row-stripes']) [part~='even-row'] [part~='body-cell'],
    :host([theme~='row-stripes']) [part~='even-row'] [part~='details-cell'] {
      background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      background-repeat: repeat-x;
    }

    /* Selected row */

    /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
    :host(:not([reordering])) [part~='row'][selected] {
      z-index: 1;
    }

    :host(:not([reordering])) [part~='row'][selected] [part~='body-cell']:not([part~='details-cell']) {
      background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
      background-repeat: repeat;
    }

    /* Cover the border of an unselected row */
    :host(:not([theme~='no-row-borders'])) [part~='row'][selected] [part~='cell']:not([part~='details-cell']) {
      box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
    }

    /* Compact */

    :host([theme~='compact']) [part~='row']:only-child [part~='header-cell'] {
      min-height: var(--lumo-size-m);
    }

    :host([theme~='compact']) [part~='cell'] {
      min-height: var(--lumo-size-s);
      --_cell-default-padding: var(--lumo-space-xs) var(--lumo-space-s);
    }

    :host([theme~='compact']) [part~='first-row'] [part~='cell']:not([part~='details-cell']) {
      min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
    }

    /* Wrap cell contents */

    :host([theme~='wrap-cell-content']) [part~='cell'] ::slotted(vaadin-grid-cell-content) {
      white-space: normal;
    }

    /* RTL specific styles */

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][last-column] {
      border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
    }

    :host([dir='rtl']) [part~='row'][dragstart] [part~='cell'][first-column] {
      border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
    }

    :host([dir='rtl'][theme~='column-borders']) [part~='cell']:not([last-column]):not([part~='details-cell']) {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
    }

    :host([dir='rtl']) [last-frozen] {
      border-right: none;
      border-left: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl']) [first-frozen-to-end] {
      border-left: none;
      border-right: var(--_lumo-grid-border-width) solid transparent;
    }

    :host([dir='rtl'][overflow~='start']) [part~='cell'][last-frozen]:not([part~='details-cell']) {
      border-left-color: var(--_lumo-grid-border-color);
    }

    :host([dir='rtl'][overflow~='end']) [part~='cell'][first-frozen-to-end]:not([part~='details-cell']) {
      border-right-color: var(--_lumo-grid-border-color);
    }
  `,{moduleId:"lumo-grid"});/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function rn(s,t){return s.split(".").reduce((e,i)=>e?e[i]:void 0,t)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Xs(s){if(window.Vaadin&&window.Vaadin.templateRendererCallback){window.Vaadin.templateRendererCallback(s);return}s.querySelector("template")&&console.warn(`WARNING: <template> inside <${s.localName}> is no longer supported. Import @vaadin/polymer-legacy-adapter/template-renderer.js to enable compatibility.`)}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function qt(s){return s.__cells||Array.from(s.querySelectorAll('[part~="cell"]:not([part~="details-cell"])'))}function me(s,t){[...s.children].forEach(t)}function Kt(s,t){qt(s).forEach(t),s.__detailsCell&&t(s.__detailsCell)}function T_(s,t,e){let i=1;s.forEach(r=>{i%10===0&&(i+=1),r._order=e+i*t,i+=1})}function Js(s,t,e){switch(typeof e){case"boolean":s.toggleAttribute(t,e);break;case"string":s.setAttribute(t,e);break;default:s.removeAttribute(t);break}}function at(s,t,e){t||t===""?qs(s,"part",e):Go(s,"part",e)}function tt(s,t,e){s.forEach(i=>{at(i,e,t)})}function bi(s,t){const e=qt(s);Object.entries(t).forEach(([i,r])=>{Js(s,i,r);const o=`${i}-row`;at(s,r,o),tt(e,`${o}-cell`,r)})}function Ba(s,t){const e=qt(s);Object.entries(t).forEach(([i,r])=>{const o=s.getAttribute(i);if(Js(s,i,r),o){const n=`${i}-${o}-row`;at(s,!1,n),tt(e,`${n}-cell`,!1)}if(r){const n=`${i}-${r}-row`;at(s,r,n),tt(e,`${n}-cell`,r)}})}function Ct(s,t,e,i,r){Js(s,t,e),r&&at(s,!1,r),at(s,e,i||`${t}-cell`)}class jt{constructor(t,e){this.__host=t,this.__callback=e,this.__currentSlots=[],this.__onMutation=this.__onMutation.bind(this),this.__observer=new MutationObserver(this.__onMutation),this.__observer.observe(t,{childList:!0}),this.__initialCallDebouncer=G.debounce(this.__initialCallDebouncer,Ye,()=>this.__onMutation())}disconnect(){this.__observer.disconnect(),this.__initialCallDebouncer.cancel(),this.__toggleSlotChangeListeners(!1)}flush(){this.__onMutation()}__toggleSlotChangeListeners(t){this.__currentSlots.forEach(e=>{t?e.addEventListener("slotchange",this.__onMutation):e.removeEventListener("slotchange",this.__onMutation)})}__onMutation(){const t=!this.__currentColumns;this.__currentColumns||(this.__currentColumns=[]);const e=jt.getColumns(this.__host),i=e.filter(a=>!this.__currentColumns.includes(a)),r=this.__currentColumns.filter(a=>!e.includes(a)),o=this.__currentColumns.some((a,l)=>a!==e[l]);this.__currentColumns=e,this.__toggleSlotChangeListeners(!1),this.__currentSlots=[...this.__host.children].filter(a=>a instanceof HTMLSlotElement),this.__toggleSlotChangeListeners(!0),(t||i.length||r.length||o)&&this.__callback(i,r)}static __isColumnElement(t){return t.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(t.localName)}static getColumns(t){const e=[],i=t._isColumnElement||jt.__isColumnElement;return[...t.children].forEach(r=>{i(r)?e.push(r):r instanceof HTMLSlotElement&&[...r.assignedElements({flatten:!0})].filter(o=>i(o)).forEach(o=>e.push(o))}),e}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const P_=s=>class extends s{static get properties(){return{resizable:{type:Boolean,sync:!0,value(){if(this.localName==="vaadin-grid-column-group")return;const e=this.parentNode;return e&&e.localName==="vaadin-grid-column-group"&&e.resizable||!1}},frozen:{type:Boolean,value:!1,sync:!0},frozenToEnd:{type:Boolean,value:!1,sync:!0},rowHeader:{type:Boolean,value:!1,sync:!0},hidden:{type:Boolean,value:!1,sync:!0},header:{type:String,sync:!0},textAlign:{type:String,sync:!0},headerPartName:{type:String,sync:!0},footerPartName:{type:String,sync:!0},_lastFrozen:{type:Boolean,value:!1,sync:!0},_bodyContentHidden:{type:Boolean,value:!1,sync:!0},_firstFrozenToEnd:{type:Boolean,value:!1,sync:!0},_order:{type:Number,sync:!0},_reorderStatus:{type:Boolean,sync:!0},_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,__initialized:{type:Boolean,value:!0},headerRenderer:{type:Function,sync:!0},_headerRenderer:{type:Function,computed:"_computeHeaderRenderer(headerRenderer, header, __initialized)",sync:!0},footerRenderer:{type:Function,sync:!0},_footerRenderer:{type:Function,computed:"_computeFooterRenderer(footerRenderer, __initialized)",sync:!0},__gridColumnElement:{type:Boolean,value:!0}}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells)","_frozenChanged(frozen, _headerCell, _footerCell, _cells)","_frozenToEndChanged(frozenToEnd, _headerCell, _footerCell, _cells)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells)","_textAlignChanged(textAlign, _cells, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells)","_lastFrozenChanged(_lastFrozen)","_firstFrozenToEndChanged(_firstFrozenToEnd)","_onRendererOrBindingChanged(_renderer, _cells, _bodyContentHidden, path)","_onHeaderRendererOrBindingChanged(_headerRenderer, _headerCell, path, header)","_onFooterRendererOrBindingChanged(_footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells)","_rowHeaderChanged(rowHeader, _cells)","__headerFooterPartNameChanged(_headerCell, _footerCell, headerPartName, footerPartName)"]}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this._grid&&this._allCells.forEach(e=>{e._content.parentNode||this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._grid||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}ready(){super.ready(),Xs(this)}_findHostGrid(){let e=this;for(;e&&!/^vaadin.*grid(-pro)?$/u.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}_renderHeaderAndFooter(){this._renderHeaderCellContent(this._headerRenderer,this._headerCell),this._renderFooterCellContent(this._footerRenderer,this._footerCell)}_flexGrowChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(i=>{i.style.flexGrow=e})}_orderChanged(e){this._allCells.forEach(i=>{i.style.order=e})}_widthChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(i=>{i.style.width=e})}_frozenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(i=>{Ct(i,"frozen",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_frozenToEndChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozenToEnd",e),this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||Ct(i,"frozen-to-end",e)}),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(i=>{Ct(i,"last-frozen",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_firstFrozenToEndChanged(e){this._allCells.forEach(i=>{this._grid&&i.parentElement===this._grid.$.sizer||Ct(i,"first-frozen-to-end",e)}),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._firstFrozenToEnd=e)}_rowHeaderChanged(e,i){i&&i.forEach(r=>{r.setAttribute("role",e?"rowheader":"gridcell")})}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/gu,"-$1").toLowerCase().replace(/-/gu," ").replace(/^./u,i=>i.toUpperCase())}_reorderStatusChanged(e){const i=this.__previousReorderStatus,r=i?`reorder-${i}-cell`:"",o=`reorder-${e}-cell`;this._allCells.forEach(n=>{Ct(n,"reorder-status",e,o,r)}),this.__previousReorderStatus=e}_resizableChanged(e,i){e===void 0||i===void 0||i&&[i].concat(this._emptyCells).forEach(r=>{if(r){const o=r.querySelector('[part~="resize-handle"]');if(o&&r.removeChild(o),e){const n=document.createElement("div");n.setAttribute("part","resize-handle"),r.appendChild(n)}}})}_textAlignChanged(e){if(e===void 0||this._grid===void 0)return;if(["start","end","center"].indexOf(e)===-1){console.warn('textAlign can only be set as "start", "end" or "center"');return}let i;getComputedStyle(this._grid).direction==="ltr"?e==="start"?i="left":e==="end"&&(i="right"):e==="start"?i="right":e==="end"&&(i="left"),this._allCells.forEach(r=>{r._content.style.textAlign=e,getComputedStyle(r._content).textAlign!==e&&(r._content.style.textAlign=i)})}_hiddenChanged(e){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(e===!0&&this._allCells.forEach(i=>{i._content.parentNode&&i._content.parentNode.removeChild(i._content)}),this._grid._debouncerHiddenChanged=G.debounce(this._grid._debouncerHiddenChanged,zt,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._debounceUpdateFrozenColumn&&this._grid._debounceUpdateFrozenColumn(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}_runRenderer(e,i,r){const o=r&&r.item&&!i.parentElement.hidden;if(!(o||e===this._headerRenderer||e===this._footerRenderer))return;const a=[i._content,this];o&&a.push(r),e.apply(this,a)}__renderCellsContent(e,i){this.hidden||!this._grid||i.forEach(r=>{if(!r.parentElement)return;const o=this._grid.__getRowModel(r.parentElement);e&&(r._renderer!==e&&this._clearCellContent(r),r._renderer=e,this._runRenderer(e,r,o))})}_clearCellContent(e){e._content.innerHTML="",delete e._content._$litPart$}_renderHeaderCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onHeaderRendererOrBindingChanged(e,i,...r){this._renderHeaderCellContent(e,i)}__headerFooterPartNameChanged(e,i,r,o){[{cell:e,partName:r},{cell:i,partName:o}].forEach(({cell:n,partName:a})=>{if(n){const l=n.__customParts||[];n.part.remove(...l),n.__customParts=a?a.trim().split(" "):[],n.part.add(...n.__customParts)}})}_renderBodyCellsContent(e,i){!i||!e||this.__renderCellsContent(e,i)}_onRendererOrBindingChanged(e,i,...r){this._renderBodyCellsContent(e,i)}_renderFooterCellContent(e,i){!i||!e||(this.__renderCellsContent(e,[i]),this._grid&&i.parentElement&&this._grid.__debounceUpdateHeaderFooterRowVisibility(i.parentElement))}_onFooterRendererOrBindingChanged(e,i){this._renderFooterCellContent(e,i)}__setTextContent(e,i){e.textContent!==i&&(e.textContent=i)}__textHeaderRenderer(){this.__setTextContent(this._headerCell._content,this.header)}_defaultHeaderRenderer(){this.path&&this.__setTextContent(this._headerCell._content,this._generateHeader(this.path))}_defaultRenderer(e,i,{item:r}){this.path&&this.__setTextContent(e,rn(this.path,r))}_defaultFooterRenderer(){}_computeHeaderRenderer(e,i){return e||(i!=null?this.__textHeaderRenderer:this._defaultHeaderRenderer)}_computeRenderer(e){return e||this._defaultRenderer}_computeFooterRenderer(e){return e||this._defaultFooterRenderer}},I_=s=>class extends P_(ct(s)){static get properties(){return{width:{type:String,value:"100px",sync:!0},flexGrow:{type:Number,value:1,sync:!0},renderer:{type:Function,sync:!0},_renderer:{type:Function,computed:"_computeRenderer(renderer, __initialized)",sync:!0},path:{type:String,sync:!0},autoWidth:{type:Boolean,value:!1},_focusButtonMode:{type:Boolean,value:!1},_cells:{type:Array,sync:!0}}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class z_ extends I_(ie){static get is(){return"vaadin-grid-column"}}Z(z_);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Qs=s=>s.test(navigator.userAgent),ho=s=>s.test(navigator.platform),k_=s=>s.test(navigator.vendor),Va=Qs(/Android/u),D_=Qs(/Chrome/u)&&k_(/Google Inc/u),ic=Qs(/Firefox/u),O_=ho(/^iPad/u)||ho(/^Mac/u)&&navigator.maxTouchPoints>1,M_=ho(/^iPhone/u),Ss=M_||O_,sc=Qs(/^((?!chrome|android).)*safari/iu),Zs=(()=>{try{return document.createEvent("TouchEvent"),!0}catch{return!1}})();/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */const Ua=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/u),R_=Ua&&Ua[1]>=8,Wa=3,N_={_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return this._physicalSize-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){const s=this._virtualCount;return Math.max(0,s-this._physicalCount)},get _virtualStart(){return this._virtualStartVal||0},set _virtualStart(s){s=this._clamp(s,0,this._maxVirtualStart),this._virtualStartVal=s},get _physicalStart(){return this._physicalStartVal||0},set _physicalStart(s){s%=this._physicalCount,s<0&&(s=this._physicalCount+s),this._physicalStartVal=s},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},get _physicalCount(){return this._physicalCountVal||0},set _physicalCount(s){this._physicalCountVal=s},get _optPhysicalSize(){return this._viewportHeight===0?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return!!(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){let s=this._firstVisibleIndexVal;if(s==null){let t=this._physicalTop+this._scrollOffset;s=this._iterateItems((e,i)=>{if(t+=this._getPhysicalSizeIncrement(e),t>this._scrollPosition)return i})||0,this._firstVisibleIndexVal=s}return s},get lastVisibleIndex(){let s=this._lastVisibleIndexVal;if(s==null){let t=this._physicalTop+this._scrollOffset;this._iterateItems((e,i)=>{t<this._scrollBottom&&(s=i),t+=this._getPhysicalSizeIncrement(e)}),this._lastVisibleIndexVal=s}return s},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},_scrollHandler(){const s=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop));let t=s-this._scrollPosition;const e=t>=0;if(this._scrollPosition=s,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;const i=Math.round(t/this._physicalAverage);this._virtualStart+=i,this._physicalStart+=i,this._physicalTop=Math.min(Math.floor(this._virtualStart)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){const i=this._getReusables(e);e?(this._physicalTop=i.physicalTop,this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length):(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length),this._update(i.indexes,e?null:i.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),Ye)}},_getReusables(s){let t,e,i;const r=[],o=this._hiddenContentSize*this._ratio,n=this._virtualStart,a=this._virtualEnd,l=this._physicalCount;let d=this._physicalTop+this._scrollOffset;const c=this._physicalBottom+this._scrollOffset,h=this._scrollPosition,f=this._scrollBottom;for(s?(t=this._physicalStart,e=h-d):(t=this._physicalEnd,e=c-f);i=this._getPhysicalSizeIncrement(t),e-=i,!(r.length>=l||e<=o);)if(s){if(a+r.length+1>=this._virtualCount||d+i>=h-this._scrollOffset)break;r.push(t),d+=i,t=(t+1)%l}else{if(n-r.length<=0||d+this._physicalSize-i<=f)break;r.push(t),d-=i,t=t===0?l-1:t-1}return{indexes:r,physicalTop:d-this._scrollOffset}},_update(s,t){if(!(s&&s.length===0||this._physicalCount===0)){if(this._assignModels(s),this._updateMetrics(s),t)for(;t.length;){const e=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(e)}this._positionItems(),this._updateScrollerSize()}},_isClientFull(){return this._scrollBottom!==0&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded(s){const e=this._clamp(this._physicalCount+s,Wa,this._virtualCount-this._virtualStart)-this._physicalCount;let i=Math.round(this._physicalCount*.5);if(!(e<0)){if(e>0){const r=window.performance.now();[].push.apply(this._physicalItems,this._createPool(e));for(let o=0;o<e;o++)this._physicalSizes.push(0);this._physicalCount+=e,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart+=e),this._update(),this._templateCost=(window.performance.now()-r)/e,i=Math.round(this._physicalCount*.5)}this._virtualEnd>=this._virtualCount-1||i===0||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),Vd):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),Ye))}},_render(){if(!(!this.isAttached||!this._isVisible))if(this._physicalCount!==0){const s=this._getReusables(!0);this._physicalTop=s.physicalTop,this._virtualStart+=s.indexes.length,this._physicalStart+=s.indexes.length,this._update(s.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(Wa))},_itemsChanged(s){s.path==="items"&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalItems||(this._physicalItems=[]),this._physicalSizes||(this._physicalSizes=[]),this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._debounce("_render",this._render,zt))},_iterateItems(s,t){let e,i,r,o;if(arguments.length===2&&t){for(o=0;o<t.length;o++)if(e=t[o],i=this._computeVidx(e),(r=s.call(this,e,i))!=null)return r}else{for(e=this._physicalStart,i=this._virtualStart;e<this._physicalCount;e++,i++)if((r=s.call(this,e,i))!=null)return r;for(e=0;e<this._physicalStart;e++,i++)if((r=s.call(this,e,i))!=null)return r}},_computeVidx(s){return s>=this._physicalStart?this._virtualStart+(s-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+s},_positionItems(){this._adjustScrollPosition();let s=this._physicalTop;this._iterateItems(t=>{this.translate3d(0,`${s}px`,0,this._physicalItems[t]),s+=this._physicalSizes[t]})},_getPhysicalSizeIncrement(s){return this._physicalSizes[s]},_adjustScrollPosition(){const s=this._virtualStart===0?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(s!==0){this._physicalTop-=s;const t=this._scrollPosition;!R_&&t>0&&this._resetScrollPosition(t-s)}},_resetScrollPosition(s){this.scrollTarget&&s>=0&&(this._scrollTop=s,this._scrollPosition=this._scrollTop)},_updateScrollerSize(s){const t=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage;this._estScrollHeight=t,(s||this._scrollHeight===0||this._scrollPosition>=t-this._physicalSize||Math.abs(t-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=`${t}px`,this._scrollHeight=t)},scrollToIndex(s){if(typeof s!="number"||s<0||s>this.items.length-1||(ci(),this._physicalCount===0))return;s=this._clamp(s,0,this._virtualCount-1),(!this._isIndexRendered(s)||s>=this._maxVirtualStart)&&(this._virtualStart=s-1),this._assignModels(),this._updateMetrics(),this._physicalTop=this._virtualStart*this._physicalAverage;let t=this._physicalStart,e=this._virtualStart,i=0;const r=this._hiddenContentSize;for(;e<s&&i<=r;)i+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,e+=1;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+i),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null},_resetAverage(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler(){this._debounce("_render",()=>{this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)},zt)},_isIndexRendered(s){return s>=this._virtualStart&&s<=this._virtualEnd},_getPhysicalIndex(s){return(this._physicalStart+(s-this._virtualStart))%this._physicalCount},_clamp(s,t,e){return Math.min(e,Math.max(t,s))},_debounce(s,t,e){this._debouncers||(this._debouncers={}),this._debouncers[s]=G.debounce(this._debouncers[s],e,t.bind(this)),Ud(this._debouncers[s])}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const F_=1e5,Tr=1e3;class rc{constructor({createElements:t,updateElement:e,scrollTarget:i,scrollContainer:r,elementsContainer:o,reorderElements:n}){this.isAttached=!0,this._vidxOffset=0,this.createElements=t,this.updateElement=e,this.scrollTarget=i,this.scrollContainer=r,this.elementsContainer=o||r,this.reorderElements=n,this._maxPages=1.3,this.__placeholderHeight=200,this.__elementHeightQueue=Array(10),this.timeouts={SCROLL_REORDER:500,IGNORE_WHEEL:500,FIX_INVALID_ITEM_POSITIONING:100},this.__resizeObserver=new ResizeObserver(()=>this._resizeHandler()),getComputedStyle(this.scrollTarget).overflow==="visible"&&(this.scrollTarget.style.overflow="auto"),getComputedStyle(this.scrollContainer).position==="static"&&(this.scrollContainer.style.position="relative"),this.__resizeObserver.observe(this.scrollTarget),this.scrollTarget.addEventListener("scroll",()=>this._scrollHandler()),this._scrollLineHeight=this._getScrollLineHeight(),this.scrollTarget.addEventListener("wheel",a=>this.__onWheel(a)),this.reorderElements&&(this.scrollTarget.addEventListener("mousedown",()=>{this.__mouseDown=!0}),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&this.__reorderElements()}))}get scrollOffset(){return 0}get adjustedFirstVisibleIndex(){return this.firstVisibleIndex+this._vidxOffset}get adjustedLastVisibleIndex(){return this.lastVisibleIndex+this._vidxOffset}get _maxVirtualIndexOffset(){return this.size-this._virtualCount}__hasPlaceholders(){return this.__getVisibleElements().some(t=>t.__virtualizerPlaceholder)}scrollToIndex(t){if(typeof t!="number"||isNaN(t)||this.size===0||!this.scrollTarget.offsetHeight)return;delete this.__pendingScrollToIndex,this._physicalCount<=3&&this.flush(),t=this._clamp(t,0,this.size-1);const e=this.__getVisibleElements().length;let i=Math.floor(t/this.size*this._virtualCount);this._virtualCount-i<e?(i=this._virtualCount-(this.size-t),this._vidxOffset=this._maxVirtualIndexOffset):i<e?t<Tr?(i=t,this._vidxOffset=0):(i=Tr,this._vidxOffset=t-i):this._vidxOffset=t-i,this.__skipNextVirtualIndexAdjust=!0,super.scrollToIndex(i),this.adjustedFirstVisibleIndex!==t&&this._scrollTop<this._maxScrollTop&&!this.grid&&(this._scrollTop-=this.__getIndexScrollOffset(t)||0),this._scrollHandler(),this.__hasPlaceholders()&&(this.__pendingScrollToIndex=t)}flush(){const t=this._physicalCount;this.scrollTarget.offsetHeight!==0&&(this._resizeHandler(),ci(),this._scrollHandler(),this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.flush(),this.__scrollReorderDebouncer&&this.__scrollReorderDebouncer.flush(),this.__debouncerWheelAnimationFrame&&this.__debouncerWheelAnimationFrame.flush(),this._physicalCount!==t&&this.flush())}update(t=0,e=this.size-1){const i=[];this.__getVisibleElements().forEach(r=>{r.__virtualIndex>=t&&r.__virtualIndex<=e&&(this.__updateElement(r,r.__virtualIndex,!0),i.push(r))}),this.__afterElementsUpdated(i)}_updateMetrics(t){ci();let e=0,i=0;const r=this._physicalAverageCount,o=this._physicalAverage;this._iterateItems((n,a)=>{i+=this._physicalSizes[n],this._physicalSizes[n]=Math.ceil(this.__getBorderBoxHeight(this._physicalItems[n])),e+=this._physicalSizes[n],this._physicalAverageCount+=this._physicalSizes[n]?1:0},t),this._physicalSize=this._physicalSize+e-i,this._physicalAverageCount!==r&&(this._physicalAverage=Math.round((o*r+e)/this._physicalAverageCount))}__getBorderBoxHeight(t){const e=getComputedStyle(t),i=parseFloat(e.height)||0;if(e.boxSizing==="border-box")return i;const r=parseFloat(e.paddingBottom)||0,o=parseFloat(e.paddingTop)||0,n=parseFloat(e.borderBottomWidth)||0,a=parseFloat(e.borderTopWidth)||0;return i+r+o+n+a}__updateElement(t,e,i){t.__virtualizerPlaceholder&&(t.style.paddingTop="",t.__virtualizerPlaceholder=!1),!this.__preventElementUpdates&&(t.__lastUpdatedIndex!==e||i)&&(this.updateElement(t,e),t.__lastUpdatedIndex=e)}__afterElementsUpdated(t){t.forEach(e=>{const i=e.offsetHeight;if(i===0)e.style.paddingTop=`${this.__placeholderHeight}px`,e.__virtualizerPlaceholder=!0,this.__placeholderClearDebouncer=G.debounce(this.__placeholderClearDebouncer,zt,()=>this._resizeHandler());else{this.__elementHeightQueue.push(i),this.__elementHeightQueue.shift();const r=this.__elementHeightQueue.filter(o=>o!==void 0);this.__placeholderHeight=Math.round(r.reduce((o,n)=>o+n,0)/r.length)}}),this.__pendingScrollToIndex!==void 0&&!this.__hasPlaceholders()&&this.scrollToIndex(this.__pendingScrollToIndex)}__getIndexScrollOffset(t){const e=this.__getVisibleElements().find(i=>i.__virtualIndex===t);return e?this.scrollTarget.getBoundingClientRect().top-e.getBoundingClientRect().top:void 0}get size(){return this.__size}set size(t){if(t===this.size)return;this.__fixInvalidItemPositioningDebouncer&&this.__fixInvalidItemPositioningDebouncer.cancel(),this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.cancel(),this.__preventElementUpdates=!0;let e,i;if(t>0&&(e=this.adjustedFirstVisibleIndex,i=this.__getIndexScrollOffset(e)),this.__size=t,this._itemsChanged({path:"items"}),ci(),t>0){e=Math.min(e,t-1),this.scrollToIndex(e);const r=this.__getIndexScrollOffset(e);i!==void 0&&r!==void 0&&(this._scrollTop+=i-r)}this.__preventElementUpdates=!1,this._isVisible||this._assignModels(),this.elementsContainer.children.length||requestAnimationFrame(()=>this._resizeHandler()),this._resizeHandler(),ci()}get _scrollTop(){return this.scrollTarget.scrollTop}set _scrollTop(t){this.scrollTarget.scrollTop=t}get items(){return{length:Math.min(this.size,F_)}}get offsetHeight(){return this.scrollTarget.offsetHeight}get $(){return{items:this.scrollContainer}}updateViewportBoundaries(){const t=window.getComputedStyle(this.scrollTarget);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(t["padding-top"],10),this._isRTL=t.direction==="rtl",this._viewportWidth=this.elementsContainer.offsetWidth,this._viewportHeight=this.scrollTarget.offsetHeight,this._scrollPageHeight=this._viewportHeight-this._scrollLineHeight,this.grid&&this._updateGridMetrics()}setAttribute(){}_createPool(t){const e=this.createElements(t),i=document.createDocumentFragment();return e.forEach(r=>{r.style.position="absolute",i.appendChild(r),this.__resizeObserver.observe(r)}),this.elementsContainer.appendChild(i),e}_assignModels(t){const e=[];this._iterateItems((i,r)=>{const o=this._physicalItems[i];o.hidden=r>=this.size,o.hidden?delete o.__lastUpdatedIndex:(o.__virtualIndex=r+(this._vidxOffset||0),this.__updateElement(o,o.__virtualIndex),e.push(o))},t),this.__afterElementsUpdated(e)}_isClientFull(){return setTimeout(()=>{this.__clientFull=!0}),this.__clientFull||super._isClientFull()}translate3d(t,e,i,r){r.style.transform=`translateY(${e})`}toggleScrollListener(){}_scrollHandler(){if(this.scrollTarget.offsetHeight===0)return;this._adjustVirtualIndexOffset(this._scrollTop-(this.__previousScrollTop||0));const t=this.scrollTarget.scrollTop-this._scrollPosition;if(super._scrollHandler(),this._physicalCount!==0){const e=t>=0,i=this._getReusables(!e);i.indexes.length&&(this._physicalTop=i.physicalTop,e?(this._virtualStart-=i.indexes.length,this._physicalStart-=i.indexes.length):(this._virtualStart+=i.indexes.length,this._physicalStart+=i.indexes.length),this._resizeHandler())}t&&(this.__fixInvalidItemPositioningDebouncer=G.debounce(this.__fixInvalidItemPositioningDebouncer,Ae.after(this.timeouts.FIX_INVALID_ITEM_POSITIONING),()=>this.__fixInvalidItemPositioning())),this.reorderElements&&(this.__scrollReorderDebouncer=G.debounce(this.__scrollReorderDebouncer,Ae.after(this.timeouts.SCROLL_REORDER),()=>this.__reorderElements())),this.__previousScrollTop=this._scrollTop,this._scrollTop===0&&this.firstVisibleIndex!==0&&Math.abs(t)>0&&this.scrollToIndex(0)}__fixInvalidItemPositioning(){if(!this.scrollTarget.isConnected)return;const t=this._physicalTop>this._scrollTop,e=this._physicalBottom<this._scrollBottom,i=this.adjustedFirstVisibleIndex===0,r=this.adjustedLastVisibleIndex===this.size-1;if(t&&!i||e&&!r){const o=e,n=this._ratio;this._ratio=0,this._scrollPosition=this._scrollTop+(o?-1:1),this._scrollHandler(),this._ratio=n}}__onWheel(t){if(t.ctrlKey||this._hasScrolledAncestor(t.target,t.deltaX,t.deltaY))return;let e=t.deltaY;if(t.deltaMode===WheelEvent.DOM_DELTA_LINE?e*=this._scrollLineHeight:t.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(e*=this._scrollPageHeight),this._deltaYAcc||(this._deltaYAcc=0),this._wheelAnimationFrame){this._deltaYAcc+=e,t.preventDefault();return}e+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this.__debouncerWheelAnimationFrame=G.debounce(this.__debouncerWheelAnimationFrame,zt,()=>{this._wheelAnimationFrame=!1});const i=Math.abs(t.deltaX)+Math.abs(e);this._canScroll(this.scrollTarget,t.deltaX,e)?(t.preventDefault(),this.scrollTarget.scrollTop+=e,this.scrollTarget.scrollLeft+=t.deltaX,this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=G.debounce(this._debouncerIgnoreNewWheel,Ae.after(this.timeouts.IGNORE_WHEEL),()=>{this._ignoreNewWheel=!1})):this._hasResidualMomentum&&i<=this._previousMomentum||this._ignoreNewWheel?t.preventDefault():i>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=i}_hasScrolledAncestor(t,e,i){if(t===this.scrollTarget||t===this.scrollTarget.getRootNode().host)return!1;if(this._canScroll(t,e,i)&&["auto","scroll"].indexOf(getComputedStyle(t).overflow)!==-1)return!0;if(t!==this&&t.parentElement)return this._hasScrolledAncestor(t.parentElement,e,i)}_canScroll(t,e,i){return i>0&&t.scrollTop<t.scrollHeight-t.offsetHeight||i<0&&t.scrollTop>0||e>0&&t.scrollLeft<t.scrollWidth-t.offsetWidth||e<0&&t.scrollLeft>0}_increasePoolIfNeeded(t){if(this._physicalCount>2&&t){const i=Math.ceil(this._optPhysicalSize/this._physicalAverage)-this._physicalCount;super._increasePoolIfNeeded(Math.max(t,Math.min(100,i)))}else super._increasePoolIfNeeded(t)}_getScrollLineHeight(){const t=document.createElement("div");t.style.fontSize="initial",t.style.display="none",document.body.appendChild(t);const e=window.getComputedStyle(t).fontSize;return document.body.removeChild(t),e?window.parseInt(e):void 0}__getVisibleElements(){return Array.from(this.elementsContainer.children).filter(t=>!t.hidden)}__reorderElements(){if(this.__mouseDown){this.__pendingReorder=!0;return}this.__pendingReorder=!1;const t=this._virtualStart+(this._vidxOffset||0),e=this.__getVisibleElements(),r=e.find(a=>a.contains(this.elementsContainer.getRootNode().activeElement)||a.contains(this.scrollTarget.getRootNode().activeElement))||e[0];if(!r)return;const o=r.__virtualIndex-t,n=e.indexOf(r)-o;if(n>0)for(let a=0;a<n;a++)this.elementsContainer.appendChild(e[a]);else if(n<0)for(let a=e.length+n;a<e.length;a++)this.elementsContainer.insertBefore(e[a],e[0]);if(sc){const{transform:a}=this.scrollTarget.style;this.scrollTarget.style.transform="translateZ(0)",setTimeout(()=>{this.scrollTarget.style.transform=a})}}_adjustVirtualIndexOffset(t){const e=this._maxVirtualIndexOffset;if(this._virtualCount>=this.size)this._vidxOffset=0;else if(this.__skipNextVirtualIndexAdjust)this.__skipNextVirtualIndexAdjust=!1;else if(Math.abs(t)>1e4){const i=this._scrollTop/(this.scrollTarget.scrollHeight-this.scrollTarget.clientHeight);this._vidxOffset=Math.round(i*e)}else{const i=this._vidxOffset,r=Tr,o=100;this._scrollTop===0?(this._vidxOffset=0,i!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<r&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex+(i-this._vidxOffset))),this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=e,i!==this._vidxOffset&&super.scrollToIndex(this._virtualCount-1)):this.firstVisibleIndex>this._virtualCount-r&&this._vidxOffset<e&&(this._vidxOffset+=Math.min(e-this._vidxOffset,o),super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-i)))}}}Object.setPrototypeOf(rc.prototype,N_);class L_{constructor(t){this.__adapter=new rc(t)}get firstVisibleIndex(){return this.__adapter.adjustedFirstVisibleIndex}get lastVisibleIndex(){return this.__adapter.adjustedLastVisibleIndex}get size(){return this.__adapter.size}set size(t){this.__adapter.size=t}scrollToIndex(t){this.__adapter.scrollToIndex(t)}update(t=0,e=this.size-1){this.__adapter.update(t,e)}flush(){this.__adapter.flush()}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $_=s=>class extends s{static get observers(){return["_a11yUpdateGridSize(size, _columnTree)"]}_a11yGetHeaderRowCount(e){return e.filter(i=>i.some(r=>r.headerRenderer||r.path||r.header)).length}_a11yGetFooterRowCount(e){return e.filter(i=>i.some(r=>r.headerRenderer)).length}_a11yUpdateGridSize(e,i){if(e===void 0||i===void 0)return;const r=i[i.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(i)+this._a11yGetFooterRowCount(i)),this.$.table.setAttribute("aria-colcount",r&&r.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}_a11yUpdateHeaderRows(){me(this.$.header,(e,i)=>{e.setAttribute("aria-rowindex",i+1)})}_a11yUpdateFooterRows(){me(this.$.footer,(e,i)=>{e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+i+1)})}_a11yUpdateRowRowindex(e,i){e.setAttribute("aria-rowindex",i+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,i){e.setAttribute("aria-selected",!!i),Kt(e,r=>{r.setAttribute("aria-selected",!!i)})}_a11yUpdateRowExpanded(e){this.__isRowExpandable(e)?e.setAttribute("aria-expanded","false"):this.__isRowCollapsible(e)?e.setAttribute("aria-expanded","true"):e.removeAttribute("aria-expanded")}_a11yUpdateRowLevel(e,i){i>0||this.__isRowCollapsible(e)||this.__isRowExpandable(e)?e.setAttribute("aria-level",i+1):e.removeAttribute("aria-level")}_a11ySetRowDetailsCell(e,i){Kt(e,r=>{r!==i&&r.setAttribute("aria-controls",i.id)})}_a11yUpdateCellColspan(e,i){e.setAttribute("aria-colspan",Number(i))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{let i=e.parentNode;for(;i&&i.localName!=="vaadin-grid-cell-content";)i=i.parentNode;i&&i.assignedSlot&&i.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const H_=s=>{if(!s.parentNode)return!1;const e=Array.from(s.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, a[href], area[href]")).filter(i=>{const r=i.getAttribute("part");return!(r&&r.includes("body-cell"))}).includes(s);return!s.disabled&&e&&s.offsetParent&&getComputedStyle(s).visibility!=="hidden"},B_=s=>class extends s{static get properties(){return{activeItem:{type:Object,notify:!0,value:null,sync:!0}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this)),this.addEventListener("row-activate",this._activateItem.bind(this))}_activateItem(e){const i=e.detail.model,r=i?i.item:null;r&&(this.activeItem=this._itemsEqual(this.activeItem,r)?null:r)}_onClick(e){if(e.defaultPrevented)return;const i=e.composedPath(),r=i[i.indexOf(this.$.table)-3];if(!r||r.getAttribute("part").indexOf("details-cell")>-1)return;const o=r._content,n=this.getRootNode().activeElement;!o.contains(n)&&!this._isFocusable(e.target)&&!(e.target instanceof HTMLLabelElement)&&this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(r.parentElement)}}))}_isFocusable(e){return H_(e)}};function Lt(s,t){return s.split(".").reduce((e,i)=>e[i],t)}function ja(s,t,e){if(e.length===0)return!1;let i=!0;return s.forEach(({path:r})=>{if(!r||r.indexOf(".")===-1)return;const o=r.replace(/\.[^.]*$/u,"");Lt(o,e[0])===void 0&&(console.warn(`Path "${r}" used for ${t} does not exist in all of the items, ${t} is disabled.`),i=!1)}),i}function Ts(s){return[void 0,null].indexOf(s)>=0?"":isNaN(s)?s.toString():s}function Ya(s,t){return s=Ts(s),t=Ts(t),s<t?-1:s>t?1:0}function V_(s,t){return s.sort((e,i)=>t.map(r=>r.direction==="asc"?Ya(Lt(r.path,e),Lt(r.path,i)):r.direction==="desc"?Ya(Lt(r.path,i),Lt(r.path,e)):0).reduce((r,o)=>r!==0?r:o,0))}function U_(s,t){return s.filter(e=>t.every(i=>{const r=Ts(Lt(i.path,e)),o=Ts(i.value).toString().toLowerCase();return r.toString().toLowerCase().includes(o)}))}const W_=s=>(t,e)=>{let i=s?[...s]:[];t.filters&&ja(t.filters,"filtering",i)&&(i=U_(i,t.filters)),Array.isArray(t.sortOrders)&&t.sortOrders.length&&ja(t.sortOrders,"sorting",i)&&(i=V_(i,t.sortOrders));const r=Math.min(i.length,t.pageSize),o=t.page*r,n=o+r,a=i.slice(o,n);e(a,i.length)};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const j_=s=>class extends s{static get properties(){return{items:{type:Array,sync:!0}}}static get observers(){return["__dataProviderOrItemsChanged(dataProvider, items, isAttached, _filters, _sorters, items.*)"]}__setArrayDataProvider(e){const i=W_(this.items);i.__items=e,this._arrayDataProvider=i,this.size=e.length,this.dataProvider=i}__dataProviderOrItemsChanged(e,i,r){r&&(this._arrayDataProvider?e!==this._arrayDataProvider?(this._arrayDataProvider=void 0,this.items=void 0):i?this._arrayDataProvider.__items===i?(this.clearCache(),this.size=this._flatSize):this.__setArrayDataProvider(i):(this._arrayDataProvider=void 0,this.dataProvider=void 0,this.size=0,this.clearCache()):i&&this.__setArrayDataProvider(i))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Y_=s=>class extends s{static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree)"]}ready(){super.ready(),Ce(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&(e.preventDefault(),Zs||this._onTrackEnd())}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if(e.detail.state==="start"){const i=e.composedPath(),r=i[i.indexOf(this.$.header)-2];if(!r||!r._content||r._content.contains(this.getRootNode().activeElement)||this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else e.detail.state==="track"?this._onTrack(e):e.detail.state==="end"&&this._onTrackEnd(e)}_onTrackStart(e){if(!this.columnReorderingAllowed)return;const i=e.composedPath&&e.composedPath();if(i&&i.some(o=>o.hasAttribute&&o.hasAttribute("draggable")))return;const r=this._cellFromPoint(e.detail.x,e.detail.y);if(!(!r||!r.getAttribute("part").includes("header-cell"))){for(this.toggleAttribute("reordering",!0),this._draggedColumn=r._column;this._draggedColumn.parentElement.childElementCount===1;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(r),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}_onTrack(e){if(!this._draggedColumn)return;const i=this._cellFromPoint(e.detail.x,e.detail.y);if(!i)return;const r=this._getTargetColumn(i,this._draggedColumn);if(this._isSwapAllowed(this._draggedColumn,r)&&this._isSwappableByPosition(r,e.detail.x)){const o=this._columnTree.findIndex(c=>c.includes(r)),n=this._getColumnsInOrder(o),a=n.indexOf(this._draggedColumn),l=n.indexOf(r),d=a<l?1:-1;for(let c=a;c!==l;c+=d)this._swapColumnOrders(this._draggedColumn,n[c+d])}this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}_onTrackEnd(){this._draggedColumn&&(this.toggleAttribute("reordering",!1),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(e=this._columnTree.length-1){return this._columnTree[e].filter(i=>!i.hidden).sort((i,r)=>i._order-r._order)}_cellFromPoint(e=0,i=0){this._draggedColumn||this.$.scroller.toggleAttribute("no-content-pointer-events",!0);const r=this.shadowRoot.elementFromPoint(e,i);return this.$.scroller.toggleAttribute("no-content-pointer-events",!1),this._getCellFromElement(r)}_getCellFromElement(e){if(e){if(e._column)return e;const{parentElement:i}=e;if(i&&i._focusButton===e)return i}return null}_updateGhostPosition(e,i){const r=this._reorderGhost.getBoundingClientRect(),o=e-r.width/2,n=i-r.height/2,a=parseInt(this._reorderGhost._left||0),l=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=a-(r.left-o),this._reorderGhost._top=l-(r.top-n),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_updateGhost(e){const i=this._reorderGhost;i.textContent=e._content.innerText;const r=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(o=>{i.style[o]=r[o]}),i}_updateOrders(e){e!==void 0&&(e[0].forEach(i=>{i._order=0}),T_(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,i){me(e.parentNode,r=>{/column/u.test(r.localName)&&this._isSwapAllowed(r,e)&&(r._reorderStatus=i)})}_autoScroller(){if(this._lastDragClientX){const e=this._lastDragClientX-this.getBoundingClientRect().right+50,i=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:i>0&&(this.$.table.scrollLeft-=i/10)}this._draggedColumn&&setTimeout(()=>this._autoScroller(),10)}_isSwapAllowed(e,i){if(e&&i){const r=e!==i,o=e.parentElement===i.parentElement,n=e.frozen&&i.frozen||e.frozenToEnd&&i.frozenToEnd||!e.frozen&&!e.frozenToEnd&&!i.frozen&&!i.frozenToEnd;return r&&o&&n}}_isSwappableByPosition(e,i){const r=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).find(a=>e.contains(a._column)),o=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),n=r.getBoundingClientRect();return n.left>o.left?i>n.right-o.width:i<n.left+o.width}_swapColumnOrders(e,i){[e._order,i._order]=[i._order,e._order],this._debounceUpdateFrozenColumn(),this._updateFirstAndLastColumn()}_getTargetColumn(e,i){if(e&&i){let r=e._column;for(;r.parentElement!==i.parentElement&&r!==this;)r=r.parentElement;return r.parentElement===i.parentElement?r:e._column}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const G_=s=>class extends s{ready(){super.ready();const e=this.$.scroller;Ce(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",i=>e.hasAttribute("column-resizing")&&i.preventDefault()),e.addEventListener("contextmenu",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault()),e.addEventListener("mousedown",i=>i.target.getAttribute("part")==="resize-handle"&&i.preventDefault())}_onHeaderTrack(e){const i=e.target;if(i.getAttribute("part")==="resize-handle"){let o=i.parentElement._column;for(this.$.scroller.toggleAttribute("column-resizing",!0);o.localName==="vaadin-grid-column-group";)o=o._childColumns.slice(0).sort((h,f)=>h._order-f._order).filter(h=>!h.hidden).pop();const n=this.__isRTL,a=e.detail.x,l=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),d=l.find(h=>h._column===o);if(d.offsetWidth){const h=getComputedStyle(d._content),f=10+parseInt(h.paddingLeft)+parseInt(h.paddingRight)+parseInt(h.borderLeftWidth)+parseInt(h.borderRightWidth)+parseInt(h.marginLeft)+parseInt(h.marginRight);let _;const E=d.offsetWidth,P=d.getBoundingClientRect();d.hasAttribute("frozen-to-end")?_=E+(n?a-P.right:P.left-a):_=E+(n?P.left-a:a-P.right),o.width=`${Math.max(f,_)}px`,o.flexGrow=0}l.sort((h,f)=>h._column._order-f._column._order).forEach((h,f,_)=>{f<_.indexOf(d)&&(h._column.width=`${h.offsetWidth}px`,h._column.flexGrow=0)});const c=this._frozenToEndCells[0];if(c&&this.$.table.scrollWidth>this.$.table.offsetWidth){const h=c.getBoundingClientRect(),f=a-(n?h.right:h.left);(n&&f<=0||!n&&f>=0)&&(this.$.table.scrollLeft+=f)}e.detail.state==="end"&&(this.$.scroller.toggleAttribute("column-resizing",!1),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:o}}))),this._resizeHandler()}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ps(s,t,e=0){let i=t;for(const r of s.subCaches){const o=r.parentCacheIndex;if(i<=o)break;if(i<=o+r.flatSize)return Ps(r,i-o-1,e+1);i-=r.flatSize}return{cache:s,item:s.items[i],index:i,page:Math.floor(i/s.pageSize),level:e}}function oc({getItemId:s},t,e,i=0,r=0){for(let o=0;o<t.items.length;o++){const n=t.items[o];if(n&&s(n)===s(e))return{cache:t,level:i,item:n,index:o,page:Math.floor(o/t.pageSize),subCache:t.getSubCache(o),flatIndex:r+t.getFlatIndex(o)}}for(const o of t.subCaches){const n=r+t.getFlatIndex(o.parentCacheIndex),a=oc({getItemId:s},o,e,i+1,n+1);if(a)return a}}function nc(s,[t,...e],i=0){t===1/0&&(t=s.size-1);const r=s.getFlatIndex(t),o=s.getSubCache(t);return o&&o.flatSize>0&&e.length?nc(o,e,i+r+1):i+r}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class on{constructor(t,e,i,r,o){le(this,"context");le(this,"size",0);le(this,"pageSize");le(this,"items",[]);le(this,"pendingRequests",{});le(this,"__subCacheByIndex",{});le(this,"__flatSize",0);this.context=t,this.pageSize=e,this.size=i||0,this.parentCache=r,this.parentCacheIndex=o,this.__flatSize=i||0}get parentItem(){return this.parentCache&&this.parentCache.items[this.parentCacheIndex]}get subCaches(){return Object.values(this.__subCacheByIndex)}get isLoading(){return Object.keys(this.pendingRequests).length>0?!0:this.subCaches.some(t=>t.isLoading)}get flatSize(){return this.__flatSize}get effectiveSize(){return console.warn("<vaadin-grid> The `effectiveSize` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.flatSize}recalculateFlatSize(){this.__flatSize=!this.parentItem||this.context.isExpanded(this.parentItem)?this.size+this.subCaches.reduce((t,e)=>(e.recalculateFlatSize(),t+e.flatSize),0):0}setPage(t,e){const i=t*this.pageSize;e.forEach((r,o)=>{this.items[i+o]=r})}getSubCache(t){return this.__subCacheByIndex[t]}removeSubCache(t){delete this.__subCacheByIndex[t]}removeSubCaches(){this.__subCacheByIndex={}}createSubCache(t){const e=new on(this.context,this.pageSize,0,this,t);return this.__subCacheByIndex[t]=e,e}getFlatIndex(t){const e=Math.max(0,Math.min(this.size-1,t));return this.subCaches.reduce((i,r)=>{const o=r.parentCacheIndex;return e>o?i+r.flatSize:i},e)}getItemForIndex(t){console.warn("<vaadin-grid> The `getItemForIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{item:e}=Ps(this,t);return e}getCacheAndIndex(t){console.warn("<vaadin-grid> The `getCacheAndIndex` method of ItemCache is deprecated and will be removed in Vaadin 25.");const{cache:e,index:i}=Ps(this,t);return{cache:e,scaledIndex:i}}updateSize(){console.warn("<vaadin-grid> The `updateSize` method of ItemCache is deprecated and will be removed in Vaadin 25."),this.recalculateFlatSize()}ensureSubCacheForScaledIndex(t){if(console.warn("<vaadin-grid> The `ensureSubCacheForScaledIndex` method of ItemCache is deprecated and will be removed in Vaadin 25."),!this.getSubCache(t)){const e=this.createSubCache(t);this.context.__controller.__loadCachePage(e,0)}}get grid(){return console.warn("<vaadin-grid> The `grid` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.context.__controller.host}get itemCaches(){return console.warn("<vaadin-grid> The `itemCaches` property of ItemCache is deprecated and will be removed in Vaadin 25."),this.__subCacheByIndex}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class q_ extends EventTarget{constructor(e,{size:i,pageSize:r,isExpanded:o,getItemId:n,dataProvider:a,dataProviderParams:l}){super();le(this,"host");le(this,"dataProvider");le(this,"dataProviderParams");le(this,"size");le(this,"pageSize");le(this,"isExpanded");le(this,"getItemId");le(this,"rootCache");this.host=e,this.pageSize=r,this.getItemId=n,this.isExpanded=o,this.dataProvider=a,this.dataProviderParams=l,this.rootCache=this.__createRootCache(i)}get flatSize(){return this.rootCache.flatSize}get __cacheContext(){return{isExpanded:this.isExpanded,__controller:this}}isLoading(){return this.rootCache.isLoading}setPageSize(e){this.pageSize=e,this.clearCache()}setDataProvider(e){this.dataProvider=e,this.clearCache()}recalculateFlatSize(){this.rootCache.recalculateFlatSize()}clearCache(){this.rootCache=this.__createRootCache(this.rootCache.size)}getFlatIndexContext(e){return Ps(this.rootCache,e)}getItemContext(e){return oc({getItemId:this.getItemId},this.rootCache,e)}getFlatIndexByPath(e){return nc(this.rootCache,e)}ensureFlatIndexLoaded(e){const{cache:i,page:r,item:o}=this.getFlatIndexContext(e);o||this.__loadCachePage(i,r)}ensureFlatIndexHierarchy(e){const{cache:i,item:r,index:o}=this.getFlatIndexContext(e);if(r&&this.isExpanded(r)&&!i.getSubCache(o)){const n=i.createSubCache(o);this.__loadCachePage(n,0)}}loadFirstPage(){this.__loadCachePage(this.rootCache,0)}__createRootCache(e){return new on(this.__cacheContext,this.pageSize,e)}__loadCachePage(e,i){if(!this.dataProvider||e.pendingRequests[i])return;let r={page:i,pageSize:this.pageSize,parentItem:e.parentItem};this.dataProviderParams&&(r={...r,...this.dataProviderParams()});const o=(n,a)=>{a!==void 0?e.size=a:r.parentItem&&(e.size=n.length),e.setPage(i,n),this.recalculateFlatSize(),this.dispatchEvent(new CustomEvent("page-received")),delete e.pendingRequests[i],this.dispatchEvent(new CustomEvent("page-loaded"))};e.pendingRequests[i]=o,this.dispatchEvent(new CustomEvent("page-requested")),this.dataProvider(r,o)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const K_=s=>class extends s{static get properties(){return{size:{type:Number,notify:!0,sync:!0},_flatSize:{type:Number,sync:!0},pageSize:{type:Number,value:50,observer:"_pageSizeChanged",sync:!0},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged",sync:!0},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_hasData:{type:Boolean,value:!1,sync:!0},itemHasChildrenPath:{type:String,value:"children",observer:"__itemHasChildrenPathChanged",sync:!0},itemIdPath:{type:String,value:null,sync:!0},expandedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__expandedKeys:{type:Object,computed:"__computeExpandedKeys(itemIdPath, expandedItems)"}}}static get observers(){return["_sizeChanged(size)","_expandedItemsChanged(expandedItems)"]}constructor(){super(),this._dataProviderController=new q_(this,{size:this.size,pageSize:this.pageSize,getItemId:this.getItemId.bind(this),isExpanded:this._isExpanded.bind(this),dataProvider:this.dataProvider?this.dataProvider.bind(this):null,dataProviderParams:()=>({sortOrders:this._mapSorters(),filters:this._mapFilters()})}),this._dataProviderController.addEventListener("page-requested",this._onDataProviderPageRequested.bind(this)),this._dataProviderController.addEventListener("page-received",this._onDataProviderPageReceived.bind(this)),this._dataProviderController.addEventListener("page-loaded",this._onDataProviderPageLoaded.bind(this))}get _cache(){return console.warn("<vaadin-grid> The `_cache` property is deprecated and will be removed in Vaadin 25."),this._dataProviderController.rootCache}get _effectiveSize(){return console.warn("<vaadin-grid> The `_effectiveSize` property is deprecated and will be removed in Vaadin 25."),this._flatSize}_sizeChanged(e){this._dataProviderController.rootCache.size=e,this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize}__itemHasChildrenPathChanged(e,i){!i&&e==="children"||this.requestContentUpdate()}_getItem(e,i){if(e>=this._flatSize)return;i.index=e;const{item:r}=this._dataProviderController.getFlatIndexContext(e);r?(this.__updateLoading(i,!1),this._updateItem(i,r),this._isExpanded(r)&&this._dataProviderController.ensureFlatIndexHierarchy(e)):(this.__updateLoading(i,!0),this._dataProviderController.ensureFlatIndexLoaded(e))}__updateLoading(e,i){const r=qt(e);Js(e,"loading",i),tt(r,"loading-row-cell",i)}getItemId(e){return this.itemIdPath?rn(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys&&this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(){this._dataProviderController.recalculateFlatSize(),this._flatSize=this._dataProviderController.flatSize,this.__updateVisibleRows()}__computeExpandedKeys(e,i){const r=i||[],o=new Set;return r.forEach(n=>{o.add(this.getItemId(n))}),o}expandItem(e){this._isExpanded(e)||(this.expandedItems=[...this.expandedItems,e])}collapseItem(e){this._isExpanded(e)&&(this.expandedItems=this.expandedItems.filter(i=>!this._itemsEqual(i,e)))}_getIndexLevel(e=0){const{level:i}=this._dataProviderController.getFlatIndexContext(e);return i}_loadPage(e,i){console.warn("<vaadin-grid> The `_loadPage` method is deprecated and will be removed in Vaadin 25."),this._dataProviderController.__loadCachePage(i,e)}_onDataProviderPageRequested(){this._setLoading(!0)}_onDataProviderPageReceived(){this._flatSize=this._dataProviderController.flatSize,this._getRenderedRows().forEach(e=>{this._dataProviderController.ensureFlatIndexHierarchy(e.index)}),this._hasData=!0}_onDataProviderPageLoaded(){this._debouncerApplyCachedData=G.debounce(this._debouncerApplyCachedData,Ae.after(0),()=>{this._setLoading(!1),this._getRenderedRows().forEach(e=>{const{item:i}=this._dataProviderController.getFlatIndexContext(e.index);i&&this._getItem(e.index,e)}),this.__scrollToPendingIndexes(),this.__dispatchPendingBodyCellFocus()}),this._dataProviderController.isLoading()||this._debouncerApplyCachedData.flush()}__debounceClearCache(){this.__clearCacheDebouncer=G.debounce(this.__clearCacheDebouncer,Ye,()=>this.clearCache())}clearCache(){this._dataProviderController.clearCache(),this._dataProviderController.rootCache.size=this.size,this._dataProviderController.recalculateFlatSize(),this._hasData=!1,this.__updateVisibleRows(),(!this.__virtualizer||!this.__virtualizer.size)&&this._dataProviderController.loadFirstPage()}_pageSizeChanged(e,i){this._dataProviderController.setPageSize(e),i!==void 0&&e!==i&&this.clearCache()}_checkSize(){this.size===void 0&&this._flatSize===0&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows, which you can specify either by setting the `size` property, or by providing it to the second argument of the `dataProvider` function `callback` call.")}_dataProviderChanged(e,i){this._dataProviderController.setDataProvider(e?e.bind(this):null),i!==void 0&&this.clearCache(),this._ensureFirstPageLoaded(),this._debouncerCheckSize=G.debounce(this._debouncerCheckSize,Ae.after(2e3),this._checkSize.bind(this))}_ensureFirstPageLoaded(){this._hasData||this._dataProviderController.loadFirstPage()}_itemsEqual(e,i){return this.getItemId(e)===this.getItemId(i)}_getItemIndexInArray(e,i){let r=-1;return i.forEach((o,n)=>{this._itemsEqual(o,e)&&(r=n)}),r}scrollToIndex(...e){let i;for(;i!==(i=this._dataProviderController.getFlatIndexByPath(e));)this._scrollToFlatIndex(i);(this._dataProviderController.isLoading()||!this.clientHeight)&&(this.__pendingScrollToIndexes=e)}__scrollToPendingIndexes(){if(this.__pendingScrollToIndexes&&this.$.items.children.length){const e=this.__pendingScrollToIndexes;delete this.__pendingScrollToIndexes,this.scrollToIndex(...e)}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const oi={BETWEEN:"between",ON_TOP:"on-top",ON_TOP_OR_BETWEEN:"on-top-or-between",ON_GRID:"on-grid"},Xe={ON_TOP:"on-top",ABOVE:"above",BELOW:"below",EMPTY:"empty"},X_=!("draggable"in document.createElement("div")),J_=s=>class extends s{static get properties(){return{dropMode:{type:String,sync:!0},rowsDraggable:{type:Boolean,sync:!0},dragFilter:{type:Function,sync:!0},dropFilter:{type:Function,sync:!0},__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter, loading)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){let i=e.target;if(i.localName==="vaadin-grid-cell-content"&&(i=i.assignedSlot.parentNode.parentNode),i.parentNode!==this.$.items)return;if(e.stopPropagation(),this.toggleAttribute("dragging-rows",!0),this._safari){const a=i.style.transform;i.style.top=/translateY\((.*)\)/u.exec(a)[1],i.style.transform="none",requestAnimationFrame(()=>{i.style.top="",i.style.transform=a})}const r=i.getBoundingClientRect();X_?e.dataTransfer.setDragImage(i):e.dataTransfer.setDragImage(i,e.clientX-r.left,e.clientY-r.top);let o=[i];this._isSelected(i._item)&&(o=this.__getViewportRows().filter(a=>this._isSelected(a._item)).filter(a=>!this.dragFilter||this.dragFilter(this.__getRowModel(a)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(o)),bi(i,{dragstart:o.length>1?`${o.length}`:""}),this.style.setProperty("--_grid-drag-start-x",`${e.clientX-r.left+20}px`),this.style.setProperty("--_grid-drag-start-y",`${e.clientY-r.top+10}px`),requestAnimationFrame(()=>{bi(i,{dragstart:!1}),this.style.setProperty("--_grid-drag-start-x",""),this.style.setProperty("--_grid-drag-start-y","")});const n=new CustomEvent("grid-dragstart",{detail:{draggedItems:o.map(a=>a._item),setDragData:(a,l)=>e.dataTransfer.setData(a,l),setDraggedItemsCount:a=>i.setAttribute("dragstart",a)}});n.originalEvent=e,this.dispatchEvent(n)}}_onDragEnd(e){this.toggleAttribute("dragging-rows",!1),e.stopPropagation();const i=new CustomEvent("grid-dragend");i.originalEvent=e,this.dispatchEvent(i)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY)){this._clearDragStyles();return}let i=e.composedPath().find(r=>r.localName==="tr");if(!this._flatSize||this.dropMode===oi.ON_GRID)this._dropLocation=Xe.EMPTY;else if(!i||i.parentNode!==this.$.items){if(i)return;if(this.dropMode===oi.BETWEEN||this.dropMode===oi.ON_TOP_OR_BETWEEN)i=Array.from(this.$.items.children).filter(r=>!r.hidden).pop(),this._dropLocation=Xe.BELOW;else return}else{const r=i.getBoundingClientRect();if(this._dropLocation=Xe.ON_TOP,this.dropMode===oi.BETWEEN){const o=e.clientY-r.top<r.bottom-e.clientY;this._dropLocation=o?Xe.ABOVE:Xe.BELOW}else this.dropMode===oi.ON_TOP_OR_BETWEEN&&(e.clientY-r.top<r.height/3?this._dropLocation=Xe.ABOVE:e.clientY-r.top>r.height/3*2&&(this._dropLocation=Xe.BELOW))}if(i&&i.hasAttribute("drop-disabled")){this._dropLocation=void 0;return}e.stopPropagation(),e.preventDefault(),this._dropLocation===Xe.EMPTY?this.toggleAttribute("dragover",!0):i?(this._dragOverItem=i._item,i.getAttribute("dragover")!==this._dropLocation&&Ba(i,{dragover:this._dropLocation})):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;const i=this.$.header.getBoundingClientRect().bottom,r=this.$.footer.getBoundingClientRect().top,o=i-e+this.__dndAutoScrollThreshold,n=e-r+this.__dndAutoScrollThreshold;let a=0;if(n>0?a=n*2:o>0&&(a=-o*2),a){const l=this.$.table.scrollTop;if(this.$.table.scrollTop+=a,l!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>{this.__dndAutoScrolling=!1},20),!0}}__getViewportRows(){const e=this.$.header.getBoundingClientRect().bottom,i=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(r=>{const o=r.getBoundingClientRect();return o.bottom>e&&o.top<i})}_clearDragStyles(){this.removeAttribute("dragover"),me(this.$.items,e=>{Ba(e,{dragover:null})})}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();const i=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(o=>({type:o,data:e.dataTransfer.getData(o)}));this._clearDragStyles();const r=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:i}});r.originalEvent=e,this.dispatchEvent(r)}}__formatDefaultTransferData(e){return e.map(i=>Array.from(i.children).filter(r=>!r.hidden&&r.getAttribute("part").indexOf("details-cell")===-1).sort((r,o)=>r._column._order>o._column._order?1:-1).map(r=>r._content.textContent.trim()).filter(r=>r).join("	")).join(`
`)}_dragDropAccessChanged(){this.filterDragAndDrop()}filterDragAndDrop(){me(this.$.items,e=>{e.hidden||this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,i){const r=this.loading||e.hasAttribute("loading"),o=!this.rowsDraggable||r||this.dragFilter&&!this.dragFilter(i),n=!this.dropMode||r||this.dropFilter&&!this.dropFilter(i);Kt(e,a=>{o?a._content.removeAttribute("draggable"):a._content.setAttribute("draggable",!0)}),bi(e,{"drag-disabled":!!o,"drop-disabled":!!n})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function ac(s,t){if(!s||!t||s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]instanceof Array&&t[e]instanceof Array){if(!ac(s[e],t[e]))return!1}else if(s[e]!==t[e])return!1;return!0}const Q_=s=>class extends s{static get properties(){return{_columnTree:Object}}ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){return e.some(i=>i.localName==="vaadin-grid-column-group")}_getChildColumns(e){return jt.getColumns(e)}_flattenColumnGroups(e){return e.map(i=>i.localName==="vaadin-grid-column-group"?this._getChildColumns(i):[i]).reduce((i,r)=>i.concat(r),[])}_getColumnTree(){const e=jt.getColumns(this),i=[e];let r=e;for(;this._hasColumnGroups(r);)r=this._flattenColumnGroups(r),i.push(r);return i}_debounceUpdateColumnTree(){this.__updateColumnTreeDebouncer=G.debounce(this.__updateColumnTreeDebouncer,Ye,()=>this._updateColumnTree())}_updateColumnTree(){const e=this._getColumnTree();ac(e,this._columnTree)||(e.forEach(i=>{i.forEach(r=>{r.performUpdate&&r.performUpdate()})}),this._columnTree=e)}_addNodeObserver(){this._observer=new jt(this,(e,i)=>{const r=i.flatMap(n=>n._allCells),o=n=>r.filter(a=>a&&a._content.contains(n)).length;this.__removeSorters(this._sorters.filter(o)),this.__removeFilters(this._filters.filter(o)),this._debounceUpdateColumnTree(),this._debouncerCheckImports=G.debounce(this._debouncerCheckImports,Ae.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{this.querySelector(e)&&!customElements.get(e)&&console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((i,r)=>i._column._order-r._column._order).forEach((i,r,o)=>{Ct(i,"first-column",r===0),Ct(i,"last-column",r===o.length-1)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/u.test(e.localName)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Z_=s=>class extends s{getEventContext(e){const i={},r=e.__composedPath||e.composedPath(),o=r[r.indexOf(this.$.table)-3];return o&&(i.section=["body","header","footer","details"].find(n=>o.getAttribute("part").indexOf(n)>-1),o._column&&(i.column=o._column),(i.section==="body"||i.section==="details")&&Object.assign(i,this.__getRowModel(o.parentElement))),i}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const eg=s=>class extends s{static get properties(){return{_filters:{type:Array,value:()=>[]}}}constructor(){super(),this._filterChanged=this._filterChanged.bind(this),this.addEventListener("filter-changed",this._filterChanged)}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){e.length!==0&&(this._filters=this._filters.filter(i=>e.indexOf(i)<0),this.__applyFilters())}__addFilter(e){this._filters.indexOf(e)===-1&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const tg=s=>class extends s{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_itemsFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_footerFocusable:{type:Object,observer:"_focusableChanged",sync:!0},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,_focusedCell:{type:Object,observer:"_focusedCellChanged",sync:!0},interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}get __rowFocusMode(){return this.__isRow(this._itemsFocusable)||this.__isRow(this._headerFocusable)||this.__isRow(this._footerFocusable)}set __rowFocusMode(e){["_itemsFocusable","_footerFocusable","_headerFocusable"].forEach(i=>{const r=this[i];if(e){const o=r&&r.parentElement;this.__isCell(r)?this[i]=o:this.__isCell(o)&&(this[i]=o.parentElement)}else if(!e&&this.__isRow(r)){const o=r.firstElementChild;this[i]=o._focusButton||o}})}get _visibleItemsCount(){return this._lastVisibleIndex-this._firstVisibleIndex-1}ready(){super.ready(),!(this._ios||this._android)&&(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onContentFocusIn.bind(this)),this.addEventListener("mousedown",()=>{this.toggleAttribute("navigating",!1),this._isMousedown=!0,this._focusedColumnOrder=void 0}),this.addEventListener("mouseup",()=>{this._isMousedown=!1}))}_focusableChanged(e,i){i&&i.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_focusedCellChanged(e,i){i&&Go(i,"part","focused-cell"),e&&qs(e,"part","focused-cell")}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}__updateItemsFocusable(){if(!this._itemsFocusable)return;const e=this.shadowRoot.activeElement===this._itemsFocusable;this._getRenderedRows().forEach(i=>{if(i.index===this._focusedItemIndex)if(this.__rowFocusMode)this._itemsFocusable=i;else{let r=this._itemsFocusable.parentElement,o=this._itemsFocusable;if(r){this.__isCell(r)&&(o=r,r=r.parentElement);const n=[...r.children].indexOf(o);this._itemsFocusable=this.__getFocusable(i,i.children[n])}}}),e&&this._itemsFocusable.focus()}_onKeyDown(e){const i=e.key;let r;switch(i){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":r="Navigation";break;case"Enter":case"Escape":case"F2":r="Interaction";break;case"Tab":r="Tab";break;case" ":r="Space";break}this._detectInteracting(e),this.interacting&&r!=="Interaction"&&(r=void 0),r&&this[`_on${r}KeyDown`](e,i)}_ensureScrolledToIndex(e){[...this.$.items.children].find(r=>r.index===e)?this.__scrollIntoViewport(e):this.scrollToIndex(e)}__isRowExpandable(e){if(this.itemHasChildrenPath){const i=e._item;return!!(i&&rn(this.itemHasChildrenPath,i)&&!this._isExpanded(i))}}__isRowCollapsible(e){return this._isExpanded(e._item)}__isDetailsCell(e){return e.matches('[part~="details-cell"]')}__isCell(e){return e instanceof HTMLTableCellElement}__isRow(e){return e instanceof HTMLTableRowElement}__getIndexOfChildElement(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}_onNavigationKeyDown(e,i){e.preventDefault();const r=this.__isRTL,o=e.composedPath().find(h=>this.__isRow(h)),n=e.composedPath().find(h=>this.__isCell(h));let a=0,l=0;switch(i){case"ArrowRight":a=r?-1:1;break;case"ArrowLeft":a=r?1:-1;break;case"Home":this.__rowFocusMode||e.ctrlKey?l=-1/0:a=-1/0;break;case"End":this.__rowFocusMode||e.ctrlKey?l=1/0:a=1/0;break;case"ArrowDown":l=1;break;case"ArrowUp":l=-1;break;case"PageDown":if(this.$.items.contains(o)){const h=this.__getIndexInGroup(o,this._focusedItemIndex);this._scrollToFlatIndex(h)}l=this._visibleItemsCount;break;case"PageUp":l=-this._visibleItemsCount;break}if(this.__rowFocusMode&&!o||!this.__rowFocusMode&&!n)return;const d=r?"ArrowLeft":"ArrowRight",c=r?"ArrowRight":"ArrowLeft";if(i===d){if(this.__rowFocusMode){if(this.__isRowExpandable(o)){this.expandItem(o._item);return}this.__rowFocusMode=!1,this._onCellNavigation(o.firstElementChild,0,0);return}}else if(i===c)if(this.__rowFocusMode){if(this.__isRowCollapsible(o)){this.collapseItem(o._item);return}}else{const h=[...o.children].sort((f,_)=>f._order-_._order);if(n===h[0]||this.__isDetailsCell(n)){this.__rowFocusMode=!0,this._onRowNavigation(o,0);return}}this.__rowFocusMode?this._onRowNavigation(o,l):this._onCellNavigation(n,a,l)}_onRowNavigation(e,i){const{dstRow:r}=this.__navigateRows(i,e);r&&r.focus()}__getIndexInGroup(e,i){return e.parentNode===this.$.items?i!==void 0?i:e.index:this.__getIndexOfChildElement(e)}__navigateRows(e,i,r){const o=this.__getIndexInGroup(i,this._focusedItemIndex),n=i.parentNode,a=(n===this.$.items?this._flatSize:n.children.length)-1;let l=Math.max(0,Math.min(o+e,a));if(n!==this.$.items){if(l>o)for(;l<a&&n.children[l].hidden;)l+=1;else if(l<o)for(;l>0&&n.children[l].hidden;)l-=1;return this.toggleAttribute("navigating",!0),{dstRow:n.children[l]}}let d=!1;if(r){const c=this.__isDetailsCell(r);if(n===this.$.items){const h=i._item,{item:f}=this._dataProviderController.getFlatIndexContext(l);c?d=e===0:d=e===1&&this._isDetailsOpened(h)||e===-1&&l!==o&&this._isDetailsOpened(f),d!==c&&(e===1&&d||e===-1&&!d)&&(l=o)}}return this._ensureScrolledToIndex(l),this._focusedItemIndex=l,this.toggleAttribute("navigating",!0),{dstRow:[...n.children].find(c=>!c.hidden&&c.index===l),dstIsRowDetails:d}}_onCellNavigation(e,i,r){const o=e.parentNode,{dstRow:n,dstIsRowDetails:a}=this.__navigateRows(r,o,e);if(!n)return;let l=this.__getIndexOfChildElement(e);this.$.items.contains(e)&&(l=[...this.$.sizer.children].findIndex(f=>f._column===e._column));const d=this.__isDetailsCell(e),c=o.parentNode,h=this.__getIndexInGroup(o,this._focusedItemIndex);if(this._focusedColumnOrder===void 0&&(d?this._focusedColumnOrder=0:this._focusedColumnOrder=this._getColumns(c,h).filter(f=>!f.hidden)[l]._order),a)[...n.children].find(_=>this.__isDetailsCell(_)).focus();else{const f=this.__getIndexInGroup(n,this._focusedItemIndex),_=this._getColumns(c,f).filter(U=>!U.hidden),E=_.map(U=>U._order).sort((U,N)=>U-N),P=E.length-1,L=E.indexOf(E.slice(0).sort((U,N)=>Math.abs(U-this._focusedColumnOrder)-Math.abs(N-this._focusedColumnOrder))[0]),T=r===0&&d?L:Math.max(0,Math.min(L+i,P));T!==L&&(this._focusedColumnOrder=void 0);const M=_.reduce((U,N,Se)=>(U[N._order]=Se,U),{})[E[T]];let V;if(this.$.items.contains(e)){const U=this.$.sizer.children[M];this._lazyColumns&&(this.__isColumnInViewport(U._column)||U.scrollIntoView(),this.__updateColumnsBodyContentHidden(),this.__updateHorizontalScrollPosition()),V=[...n.children].find(N=>N._column===U._column),this._scrollHorizontallyToCell(V)}else V=n.children[M],this._scrollHorizontallyToCell(V);V.focus()}}_onInteractionKeyDown(e,i){const r=e.composedPath()[0],o=r.localName==="input"&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/iu.test(r.type);let n;switch(i){case"Enter":n=this.interacting?!o:!0;break;case"Escape":n=!1;break;case"F2":n=!this.interacting;break}const{cell:a}=this._getGridEventLocation(e);if(this.interacting!==n&&a!==null)if(n){const l=a._content.querySelector("[focus-target]")||[...a._content.querySelectorAll("*")].find(d=>this._isFocusable(d));l&&(e.preventDefault(),l.focus(),this._setInteracting(!0),this.toggleAttribute("navigating",!1))}else e.preventDefault(),this._focusedColumnOrder=void 0,a.focus(),this._setInteracting(!1),this.toggleAttribute("navigating",!0);i==="Escape"&&this._hideTooltip(!0)}_predictFocusStepTarget(e,i){const r=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit];let o=r.indexOf(e);for(o+=i;o>=0&&o<=r.length-1;){let a=r[o];if(a&&!this.__rowFocusMode&&(a=r[o].parentNode),!a||a.hidden)o+=i;else break}let n=r[o];if(n&&!this.__isHorizontallyInViewport(n)){const a=this._getColumnsInOrder().find(l=>this.__isColumnInViewport(l));if(a)if(n===this._headerFocusable)n=a._headerCell;else if(n===this._itemsFocusable){const l=n._column._cells.indexOf(n);n=a._cells[l]}else n===this._footerFocusable&&(n=a._footerCell)}return n}_onTabKeyDown(e){const i=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(i){if(e.stopPropagation(),i===this.$.table)this.$.table.focus();else if(i===this.$.focusexit)this.$.focusexit.focus();else if(i===this._itemsFocusable){let r=i;const o=this.__isRow(i)?i:i.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),o.index!==this._focusedItemIndex&&this.__isCell(i)){const n=Array.from(o.children).indexOf(this._itemsFocusable),a=Array.from(this.$.items.children).find(l=>!l.hidden&&l.index===this._focusedItemIndex);a&&(r=a.children[n])}e.preventDefault(),r.focus()}else e.preventDefault(),i.focus();this.toggleAttribute("navigating",!0)}}_onSpaceKeyDown(e){e.preventDefault();const i=e.composedPath()[0],r=this.__isRow(i);(r||!i._content||!i._content.firstElementChild)&&this.dispatchEvent(new CustomEvent(r?"row-activate":"cell-activate",{detail:{model:this.__getRowModel(r?i:i.parentElement)}}))}_onKeyUp(e){if(!/^( |SpaceBar)$/u.test(e.key)||this.interacting)return;e.preventDefault();const i=e.composedPath()[0];if(i._content&&i._content.firstElementChild){const r=this.hasAttribute("navigating");i._content.firstElementChild.dispatchEvent(new MouseEvent("click",{shiftKey:e.shiftKey,bubbles:!0,composed:!0,cancelable:!0})),this.toggleAttribute("navigating",r)}}_onFocusIn(e){this._isMousedown||this.toggleAttribute("navigating",!0);const i=e.composedPath()[0];i===this.$.table||i===this.$.focusexit?(this._isMousedown||this._predictFocusStepTarget(i,i===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this.toggleAttribute("navigating",!1),this._detectInteracting(e),this._hideTooltip(),this._focusedCell=null}_onContentFocusIn(e){const{section:i,cell:r,row:o}=this._getGridEventLocation(e);if(!(!r&&!this.__rowFocusMode)){if(this._detectInteracting(e),i&&(r||o))if(this._activeRowGroup=i,this.$.header===i?this._headerFocusable=this.__getFocusable(o,r):this.$.items===i?this._itemsFocusable=this.__getFocusable(o,r):this.$.footer===i&&(this._footerFocusable=this.__getFocusable(o,r)),r){const n=this.getEventContext(e);this.__pendingBodyCellFocus=this.loading&&n.section==="body",this.__pendingBodyCellFocus||r.dispatchEvent(new CustomEvent("cell-focus",{bubbles:!0,composed:!0,detail:{context:n}})),this._focusedCell=r._focusButton||r,Zd()&&e.target===r&&this._showTooltip(e)}else this._focusedCell=null;this._detectFocusedItemIndex(e)}}__dispatchPendingBodyCellFocus(){this.__pendingBodyCellFocus&&this.shadowRoot.activeElement===this._itemsFocusable&&this._itemsFocusable.dispatchEvent(new Event("focusin",{bubbles:!0,composed:!0}))}__getFocusable(e,i){return this.__rowFocusMode?e:i._focusButton||i}_detectInteracting(e){const i=e.composedPath().some(r=>r.localName==="vaadin-grid-cell-content");this._setInteracting(i),this.__updateHorizontalScrollPosition()}_detectFocusedItemIndex(e){const{section:i,row:r}=this._getGridEventLocation(e);i===this.$.items&&(this._focusedItemIndex=r.index)}_updateGridSectionFocusTarget(e){if(!e)return;const i=this._getGridSectionFromFocusTarget(e),r=this.interacting&&i===this._activeRowGroup;e.tabIndex=r?-1:0}_preventScrollerRotatingCellFocus(e,i){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this.toggleAttribute("navigating",!1)),i===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this.toggleAttribute("navigating",!0))}_getColumns(e,i){let r=this._columnTree.length-1;return e===this.$.header?r=i:e===this.$.footer&&(r=this._columnTree.length-1-i),this._columnTree[r]}__isValidFocusable(e){return this.$.table.contains(e)&&e.offsetHeight}_resetKeyboardNavigation(){if(!this.$&&this.performUpdate&&this.performUpdate(),["header","footer"].forEach(e=>{if(!this.__isValidFocusable(this[`_${e}Focusable`])){const i=[...this.$[e].children].find(o=>o.offsetHeight),r=i?[...i.children].find(o=>!o.hidden):null;i&&r&&(this[`_${e}Focusable`]=this.__getFocusable(i,r))}}),!this.__isValidFocusable(this._itemsFocusable)&&this.$.items.firstElementChild){const e=this.__getFirstVisibleItem(),i=e?[...e.children].find(r=>!r.hidden):null;i&&e&&(this._focusedColumnOrder=void 0,this._itemsFocusable=this.__getFocusable(e,i))}else this.__updateItemsFocusable()}_scrollHorizontallyToCell(e){if(e.hasAttribute("frozen")||e.hasAttribute("frozen-to-end")||this.__isDetailsCell(e))return;const i=e.getBoundingClientRect(),r=e.parentNode,o=Array.from(r.children).indexOf(e),n=this.$.table.getBoundingClientRect();let a=n.left,l=n.right;for(let d=o-1;d>=0;d--){const c=r.children[d];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){a=c.getBoundingClientRect().right;break}}for(let d=o+1;d<r.children.length;d++){const c=r.children[d];if(!(c.hasAttribute("hidden")||this.__isDetailsCell(c))&&(c.hasAttribute("frozen")||c.hasAttribute("frozen-to-end"))){l=c.getBoundingClientRect().left;break}}i.left<a&&(this.$.table.scrollLeft+=Math.round(i.left-a)),i.right>l&&(this.$.table.scrollLeft+=Math.round(i.right-l))}_getGridEventLocation(e){const i=e.composedPath(),r=i.indexOf(this.$.table),o=r>=1?i[r-1]:null,n=r>=2?i[r-2]:null,a=r>=3?i[r-3]:null;return{section:o,row:n,cell:a}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ig=s=>class extends s{static get properties(){return{detailsOpenedItems:{type:Array,value:()=>[],sync:!0},rowDetailsRenderer:{type:Function,sync:!0},_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems, rowDetailsRenderer)","_rowDetailsRendererChanged(rowDetailsRenderer)"]}ready(){super.ready(),this._detailsCellResizeObserver=new ResizeObserver(e=>{e.forEach(({target:i})=>{this._updateDetailsCellHeight(i.parentElement)}),this.__virtualizer.__adapter._resizeHandler()})}_rowDetailsRendererChanged(e){e&&this._columnTree&&me(this.$.items,i=>{if(!i.querySelector("[part~=details-cell]")){this._updateRow(i,this._columnTree[this._columnTree.length-1]);const r=this._isDetailsOpened(i._item);this._toggleDetailsCell(i,r)}})}_detailsOpenedItemsChanged(e,i){me(this.$.items,r=>{if(r.hasAttribute("details-opened")){this._updateItem(r,r._item);return}i&&this._isDetailsOpened(r._item)&&this._updateItem(r,r._item)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),e.toggleAttribute("frozen",!0),this._detailsCellResizeObserver.observe(e)}_toggleDetailsCell(e,i){const r=e.querySelector('[part~="details-cell"]');r&&(r.hidden=!i,!r.hidden&&this.rowDetailsRenderer&&(r._renderer=this.rowDetailsRenderer))}_updateDetailsCellHeight(e){const i=e.querySelector('[part~="details-cell"]');i&&(this.__updateDetailsRowPadding(e,i),requestAnimationFrame(()=>this.__updateDetailsRowPadding(e,i)))}__updateDetailsRowPadding(e,i){i.hidden?e.style.removeProperty("padding-bottom"):e.style.setProperty("padding-bottom",`${i.offsetHeight}px`)}_updateDetailsCellHeights(){me(this.$.items,e=>{this._updateDetailsCellHeight(e)})}_isDetailsOpened(e){return this.detailsOpenedItems&&this._getItemIndexInArray(e,this.detailsOpenedItems)!==-1}openItemDetails(e){this._isDetailsOpened(e)||(this.detailsOpenedItems=[...this.detailsOpenedItems,e])}closeItemDetails(e){this._isDetailsOpened(e)&&(this.detailsOpenedItems=this.detailsOpenedItems.filter(i=>!this._itemsEqual(i,e)))}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const er=document.createElement("div");er.style.position="fixed";er.style.clip="rect(0px, 0px, 0px, 0px)";er.setAttribute("aria-live","polite");document.body.appendChild(er);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const lc=te(s=>class extends tn(sn(s)){static get properties(){return{autofocus:{type:Boolean},focusElement:{type:Object,readOnly:!0,observer:"_focusElementChanged"},_lastTabIndex:{value:0}}}constructor(){super(),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this)}ready(){super.ready(),this.autofocus&&!this.disabled&&requestAnimationFrame(()=>{this.focus(),this.setAttribute("focus-ring","")})}focus(){this.focusElement&&!this.disabled&&this.focusElement.focus()}blur(){this.focusElement&&this.focusElement.blur()}click(){this.focusElement&&!this.disabled&&this.focusElement.click()}_focusElementChanged(e,i){e?(e.disabled=this.disabled,this._addFocusListeners(e),this.__forwardTabIndex(this.tabindex)):i&&this._removeFocusListeners(i)}_addFocusListeners(e){e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus)}_removeFocusListeners(e){e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus)}_onFocus(e){e.stopPropagation(),this.dispatchEvent(new Event("focus"))}_onBlur(e){e.stopPropagation(),this.dispatchEvent(new Event("blur"))}_shouldSetFocus(e){return e.target===this.focusElement}_shouldRemoveFocus(e){return e.target===this.focusElement}_disabledChanged(e,i){super._disabledChanged(e,i),this.focusElement&&(this.focusElement.disabled=e),e&&this.blur()}_tabindexChanged(e){this.__forwardTabIndex(e)}__forwardTabIndex(e){e!==void 0&&this.focusElement&&(this.focusElement.tabIndex=e,e!==-1&&(this.tabindex=void 0)),this.disabled&&e&&(e!==-1&&(this._lastTabIndex=e),this.tabindex=void 0)}});/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pr=new Map;function nn(s){return Pr.has(s)||Pr.set(s,new WeakMap),Pr.get(s)}function dc(s,t){s&&s.removeAttribute(t)}function cc(s,t){if(!s||!t)return;const e=nn(t);if(e.has(s))return;const i=Yo(s.getAttribute(t));e.set(s,new Set(i))}function sg(s,t){if(!s||!t)return;const e=nn(t),i=e.get(s);!i||i.size===0?s.removeAttribute(t):qs(s,t,Gs(i)),e.delete(s)}function yi(s,t,e={newId:null,oldId:null,fromUser:!1}){if(!s||!t)return;const{newId:i,oldId:r,fromUser:o}=e,n=nn(t),a=n.get(s);if(!o&&a){r&&a.delete(r),i&&a.add(i);return}o&&(a?i||n.delete(s):cc(s,t),dc(s,t)),Go(s,t,r);const l=i||Gs(a);l&&qs(s,t,l)}function rg(s,t){cc(s,t),dc(s,t)}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class og{constructor(t){this.host=t,this.__required=!1}setTarget(t){this.__target=t,this.__setAriaRequiredAttribute(this.__required),this.__setLabelIdToAriaAttribute(this.__labelId,this.__labelId),this.__labelIdFromUser!=null&&this.__setLabelIdToAriaAttribute(this.__labelIdFromUser,this.__labelIdFromUser,!0),this.__setErrorIdToAriaAttribute(this.__errorId),this.__setHelperIdToAriaAttribute(this.__helperId),this.setAriaLabel(this.__label)}setRequired(t){this.__setAriaRequiredAttribute(t),this.__required=t}setAriaLabel(t){this.__setAriaLabelToAttribute(t),this.__label=t}setLabelId(t,e=!1){const i=e?this.__labelIdFromUser:this.__labelId;this.__setLabelIdToAriaAttribute(t,i,e),e?this.__labelIdFromUser=t:this.__labelId=t}setErrorId(t){this.__setErrorIdToAriaAttribute(t,this.__errorId),this.__errorId=t}setHelperId(t){this.__setHelperIdToAriaAttribute(t,this.__helperId),this.__helperId=t}__setAriaLabelToAttribute(t){this.__target&&(t?(rg(this.__target,"aria-labelledby"),this.__target.setAttribute("aria-label",t)):this.__label&&(sg(this.__target,"aria-labelledby"),this.__target.removeAttribute("aria-label")))}__setLabelIdToAriaAttribute(t,e,i){yi(this.__target,"aria-labelledby",{newId:t,oldId:e,fromUser:i})}__setErrorIdToAriaAttribute(t,e){yi(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setHelperIdToAriaAttribute(t,e){yi(this.__target,"aria-describedby",{newId:t,oldId:e,fromUser:!1})}__setAriaRequiredAttribute(t){this.__target&&(["input","textarea"].includes(this.__target.localName)||(t?this.__target.setAttribute("aria-required","true"):this.__target.removeAttribute("aria-required")))}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ir=[];class ng{constructor(t){this.host=t,this.__trapNode=null,this.__onKeyDown=this.__onKeyDown.bind(this)}get __focusableElements(){return E_(this.__trapNode)}get __focusedElementIndex(){const t=this.__focusableElements;return t.indexOf(t.filter(C_).pop())}hostConnected(){document.addEventListener("keydown",this.__onKeyDown)}hostDisconnected(){document.removeEventListener("keydown",this.__onKeyDown)}trapFocus(t){if(this.__trapNode=t,this.__focusableElements.length===0)throw this.__trapNode=null,new Error("The trap node should have at least one focusable descendant or be focusable itself.");Ir.push(this),this.__focusedElementIndex===-1&&this.__focusableElements[0].focus()}releaseFocus(){this.__trapNode=null,Ir.pop()}__onKeyDown(t){if(this.__trapNode&&this===Array.from(Ir).pop()&&t.key==="Tab"){t.preventDefault();const e=t.shiftKey;this.__focusNextElement(e)}}__focusNextElement(t=!1){const e=this.__focusableElements,i=t?-1:1,r=this.__focusedElementIndex,o=(e.length+r+i)%e.length,n=e[o];n.focus(),n.localName==="input"&&n.select()}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ag{saveFocus(t){this.focusNode=t||lo()}restoreFocus(){const t=this.focusNode;t&&(lo()===document.body?setTimeout(()=>t.focus()):t.focus(),this.focusNode=null)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Ga(s,t){const{scrollLeft:e}=s;return t!=="rtl"?e:s.scrollWidth-s.clientWidth+e}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ss=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(t=>{t.target.resizables?t.target.resizables.forEach(e=>{e._onResize(t.contentRect)}):t.target._onResize(t.contentRect)})})}),lg=te(s=>class extends s{get _observeParent(){return!1}connectedCallback(){if(super.connectedCallback(),ss.observe(this),this._observeParent){const e=this.parentNode instanceof ShadowRoot?this.parentNode.host:this.parentNode;e.resizables||(e.resizables=new Set,ss.observe(e)),e.resizables.add(this),this.__parent=e}}disconnectedCallback(){super.disconnectedCallback(),ss.unobserve(this);const e=this.__parent;if(this._observeParent&&e){const i=e.resizables;i&&(i.delete(this),i.size===0&&ss.unobserve(e)),this.__parent=null}}_onResize(e){}});/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qa={SCROLLING:500,UPDATE_CONTENT_VISIBILITY:100},dg=s=>class extends lg(s){static get properties(){return{columnRendering:{type:String,value:"eager",sync:!0},_frozenCells:{type:Array,value:()=>[]},_frozenToEndCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element}}static get observers(){return["__columnRenderingChanged(_columnTree, columnRendering)"]}get _scrollLeft(){return this.$.table.scrollLeft}get _scrollTop(){return this.$.table.scrollTop}set _scrollTop(e){this.$.table.scrollTop=e}get _lazyColumns(){return this.columnRendering==="lazy"}ready(){super.ready(),this.scrollTarget=this.$.table,this.$.items.addEventListener("focusin",e=>{const i=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[i-1]}),this.$.items.addEventListener("focusout",()=>{this._rowWithFocusedElement=void 0}),this.$.table.addEventListener("scroll",()=>this._afterScroll())}_onResize(){if(this._updateOverflow(),this.__updateHorizontalScrollPosition(),this._firefox){const e=!As(this);e&&this.__previousVisible===!1&&(this._scrollTop=this.__memorizedScrollTop||0),this.__previousVisible=e}}_scrollToFlatIndex(e){e=Math.min(this._flatSize-1,Math.max(0,e)),this.__virtualizer.scrollToIndex(e),this.__scrollIntoViewport(e)}__scrollIntoViewport(e){const i=[...this.$.items.children].find(r=>r.index===e);if(i){const r=i.getBoundingClientRect(),o=this.$.footer.getBoundingClientRect().top,n=this.$.header.getBoundingClientRect().bottom;r.bottom>o?this.$.table.scrollTop+=r.bottom-o:r.top<n&&(this.$.table.scrollTop-=n-r.top)}}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this.$.scroller.toggleAttribute("scrolling",!0))),this._debounceScrolling=G.debounce(this._debounceScrolling,Ae.after(qa.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this.$.scroller.toggleAttribute("scrolling",!1)})}_afterScroll(){this.__updateHorizontalScrollPosition(),this.hasAttribute("reordering")||this._scheduleScrolling(),this.hasAttribute("navigating")||this._hideTooltip(!0),this._updateOverflow(),this._debounceColumnContentVisibility=G.debounce(this._debounceColumnContentVisibility,Ae.after(qa.UPDATE_CONTENT_VISIBILITY),()=>{this._lazyColumns&&this.__cachedScrollLeft!==this._scrollLeft&&(this.__cachedScrollLeft=this._scrollLeft,this.__updateColumnsBodyContentHidden())}),this._firefox&&!As(this)&&this.__previousVisible!==!1&&(this.__memorizedScrollTop=this._scrollTop)}__updateColumnsBodyContentHidden(){if(!this._columnTree||!this._areSizerCellsAssigned())return;const e=this._getColumnsInOrder();let i=!1;if(e.forEach(r=>{const o=this._lazyColumns&&!this.__isColumnInViewport(r);r._bodyContentHidden!==o&&(i=!0,r._cells.forEach(n=>{if(n!==r._sizerCell){if(o)n.remove();else if(n.__parentRow){const a=[...n.__parentRow.children].find(l=>e.indexOf(l._column)>e.indexOf(r));n.__parentRow.insertBefore(n,a)}}})),r._bodyContentHidden=o}),i&&this._frozenCellsChanged(),this._lazyColumns){const r=[...e].reverse().find(a=>a.frozen),o=this.__getColumnEnd(r),n=e.find(a=>!a.frozen&&!a._bodyContentHidden);this.__lazyColumnsStart=this.__getColumnStart(n)-o,this.$.items.style.setProperty("--_grid-lazy-columns-start",`${this.__lazyColumnsStart}px`),this._resetKeyboardNavigation()}}__getColumnEnd(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?0:e._sizerCell.offsetWidth):this.__isRTL?this.$.table.clientWidth:0}__getColumnStart(e){return e?e._sizerCell.offsetLeft+(this.__isRTL?e._sizerCell.offsetWidth:0):this.__isRTL?this.$.table.clientWidth:0}__isColumnInViewport(e){return e.frozen||e.frozenToEnd?!0:this.__isHorizontallyInViewport(e._sizerCell)}__isHorizontallyInViewport(e){return e.offsetLeft+e.offsetWidth>=this._scrollLeft&&e.offsetLeft<=this._scrollLeft+this.clientWidth}__columnRenderingChanged(e,i){i==="eager"?this.$.scroller.removeAttribute("column-rendering"):this.$.scroller.setAttribute("column-rendering",i),this.__updateColumnsBodyContentHidden()}_updateOverflow(){this._debounceOverflow=G.debounce(this._debounceOverflow,zt,()=>{this.__doUpdateOverflow()})}__doUpdateOverflow(){let e="";const i=this.$.table;i.scrollTop<i.scrollHeight-i.clientHeight&&(e+=" bottom"),i.scrollTop>0&&(e+=" top");const r=Ga(i,this.getAttribute("dir"));r>0&&(e+=" start"),r<i.scrollWidth-i.clientWidth&&(e+=" end"),this.__isRTL&&(e=e.replace(/start|end/giu,n=>n==="start"?"end":"start")),i.scrollLeft<i.scrollWidth-i.clientWidth&&(e+=" right"),i.scrollLeft>0&&(e+=" left");const o=e.trim();o.length>0&&this.getAttribute("overflow")!==o?this.setAttribute("overflow",o):o.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}_frozenCellsChanged(){this._debouncerCacheElements=G.debounce(this._debouncerCacheElements,Ye,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach(e=>{e.style.transform=""}),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._frozenToEndCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen-to-end]")),this.__updateHorizontalScrollPosition()}),this._debounceUpdateFrozenColumn()}_debounceUpdateFrozenColumn(){this.__debounceUpdateFrozenColumn=G.debounce(this.__debounceUpdateFrozenColumn,Ye,()=>this._updateFrozenColumn())}_updateFrozenColumn(){if(!this._columnTree)return;const e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((o,n)=>o._order-n._order);let i,r;for(let o=0;o<e.length;o++){const n=e[o];n._lastFrozen=!1,n._firstFrozenToEnd=!1,r===void 0&&n.frozenToEnd&&!n.hidden&&(r=o),n.frozen&&!n.hidden&&(i=o)}i!==void 0&&(e[i]._lastFrozen=!0),r!==void 0&&(e[r]._firstFrozenToEnd=!0),this.__updateColumnsBodyContentHidden()}__updateHorizontalScrollPosition(){if(!this._columnTree)return;const e=this.$.table.scrollWidth,i=this.$.table.clientWidth,r=Math.max(0,this.$.table.scrollLeft),o=Ga(this.$.table,this.getAttribute("dir")),n=`translate(${-r}px, 0)`;this.$.header.style.transform=n,this.$.footer.style.transform=n,this.$.items.style.transform=n;const a=this.__isRTL?o+i-e:r,l=`translate(${a}px, 0)`;this._frozenCells.forEach(f=>{f.style.transform=l});const d=this.__isRTL?o:r+i-e,c=`translate(${d}px, 0)`;let h=c;if(this._lazyColumns&&this._areSizerCellsAssigned()){const f=this._getColumnsInOrder(),_=[...f].reverse().find(z=>!z.frozenToEnd&&!z._bodyContentHidden),E=this.__getColumnEnd(_),P=f.find(z=>z.frozenToEnd),L=this.__getColumnStart(P);h=`translate(${d+(L-E)+this.__lazyColumnsStart}px, 0)`}this._frozenToEndCells.forEach(f=>{this.$.items.contains(f)?f.style.transform=h:f.style.transform=c}),this.hasAttribute("navigating")&&this.__rowFocusMode&&this.$.table.style.setProperty("--_grid-horizontal-scroll-position",`${-a}px`)}_areSizerCellsAssigned(){return this._getColumnsInOrder().every(e=>e._sizerCell)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cg=s=>class extends s{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[],sync:!0},__selectedKeys:{type:Object,computed:"__computeSelectedKeys(itemIdPath, selectedItems)"}}}static get observers(){return["__selectedItemsChanged(itemIdPath, selectedItems)"]}_isSelected(e){return this.__selectedKeys.has(this.getItemId(e))}selectItem(e){this._isSelected(e)||(this.selectedItems=[...this.selectedItems,e])}deselectItem(e){this._isSelected(e)&&(this.selectedItems=this.selectedItems.filter(i=>!this._itemsEqual(i,e)))}_toggleItem(e){this._isSelected(e)?this.deselectItem(e):this.selectItem(e)}__selectedItemsChanged(){this.requestContentUpdate()}__computeSelectedKeys(e,i){const r=i||[],o=new Set;return r.forEach(n=>{o.add(this.getItemId(n))}),o}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */let Ka="prepend";const hg=s=>class extends s{static get properties(){return{multiSort:{type:Boolean,value:!1},multiSortPriority:{type:String,value:()=>Ka},multiSortOnShiftClick:{type:Boolean,value:!1},_sorters:{type:Array,value:()=>[]},_previousSorters:{type:Array,value:()=>[]}}}static setDefaultMultiSortPriority(e){Ka=["append","prepend"].includes(e)?e:"prepend"}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged)}_onSorterChanged(e){const i=e.target;e.stopPropagation(),i._grid=this,this.__updateSorter(i,e.detail.shiftClick,e.detail.fromSorterClick),this.__applySorters()}__removeSorters(e){e.length!==0&&(this._sorters=this._sorters.filter(i=>e.indexOf(i)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,i)=>{e._order=this._sorters.length>1?i:null})}__appendSorter(e){e.direction?this._sorters.includes(e)||this._sorters.push(e):this._removeArrayItem(this._sorters,e),this.__updateSortOrders()}__prependSorter(e){this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders()}__updateSorter(e,i,r){if(!(!e.direction&&this._sorters.indexOf(e)===-1)){if(e._order=null,this.multiSort&&(!this.multiSortOnShiftClick||!r)||this.multiSortOnShiftClick&&i)this.multiSortPriority==="append"?this.__appendSorter(e):this.__prependSorter(e);else if(e.direction||this.multiSortOnShiftClick){const o=this._sorters.filter(n=>n!==e);this._sorters=e.direction?[e]:[],o.forEach(n=>{n._order=null,n.direction=null})}}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.__debounceClearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,i){const r=e.indexOf(i);r>-1&&e.splice(r,1)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ug=s=>class extends s{static get properties(){return{cellClassNameGenerator:{type:Function,sync:!0},cellPartNameGenerator:{type:Function,sync:!0}}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)","__cellPartNameGeneratorChanged(cellPartNameGenerator)"]}__cellClassNameGeneratorChanged(){this.generateCellClassNames()}__cellPartNameGeneratorChanged(){this.generateCellPartNames()}generateCellClassNames(){me(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellClassNames(e,this.__getRowModel(e))})}generateCellPartNames(){me(this.$.items,e=>{!e.hidden&&!e.hasAttribute("loading")&&this._generateCellPartNames(e,this.__getRowModel(e))})}_generateCellClassNames(e,i){Kt(e,r=>{if(r.__generatedClasses&&r.__generatedClasses.forEach(o=>r.classList.remove(o)),this.cellClassNameGenerator){const o=this.cellClassNameGenerator(r._column,i);r.__generatedClasses=o&&o.split(" ").filter(n=>n.length>0),r.__generatedClasses&&r.__generatedClasses.forEach(n=>r.classList.add(n))}})}_generateCellPartNames(e,i){Kt(e,r=>{if(r.__generatedParts&&r.__generatedParts.forEach(o=>{at(r,null,o)}),this.cellPartNameGenerator){const o=this.cellPartNameGenerator(r._column,i);r.__generatedParts=o&&o.split(" ").filter(n=>n.length>0),r.__generatedParts&&r.__generatedParts.forEach(n=>{at(r,!0,n)})}})}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pg=s=>class extends j_(K_(Q_(B_(dg(cg(hg(ig(tg($_(eg(Y_(G_(Z_(J_(ug(sn(s))))))))))))))))){static get observers(){return["_columnTreeChanged(_columnTree)","_flatSizeChanged(_flatSize, __virtualizer, _hasData, _columnTree)"]}static get properties(){return{_safari:{type:Boolean,value:sc},_ios:{type:Boolean,value:Ss},_firefox:{type:Boolean,value:ic},_android:{type:Boolean,value:Va},_touchDevice:{type:Boolean,value:Zs},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0},__pendingRecalculateColumnWidths:{type:Boolean,value:!0},isAttached:{value:!1},__gridElement:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}get _firstVisibleIndex(){const t=this.__getFirstVisibleItem();return t?t.index:void 0}get _lastVisibleIndex(){const t=this.__getLastVisibleItem();return t?t.index:void 0}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.recalculateColumnWidths()}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this._hideTooltip(!0)}__getFirstVisibleItem(){return this._getRenderedRows().find(t=>this._isInViewport(t))}__getLastVisibleItem(){return this._getRenderedRows().reverse().find(t=>this._isInViewport(t))}_isInViewport(t){const e=this.$.table.getBoundingClientRect(),i=t.getBoundingClientRect(),r=this.$.header.getBoundingClientRect().height,o=this.$.footer.getBoundingClientRect().height;return i.bottom>e.top+r&&i.top<e.bottom-o}_getRenderedRows(){return Array.from(this.$.items.children).filter(t=>!t.hidden).sort((t,e)=>t.index-e.index)}_getRowContainingNode(t){const e=Gd("vaadin-grid-cell-content",t);return e?e.assignedSlot.parentElement.parentElement:void 0}_isItemAssignedToRow(t,e){const i=this.__getRowModel(e);return this.getItemId(t)===this.getItemId(i.item)}ready(){super.ready(),this.__virtualizer=new L_({createElements:this._createScrollerRows.bind(this),updateElement:this._updateScrollerItem.bind(this),scrollContainer:this.$.items,scrollTarget:this.$.table,reorderElements:!0}),new ResizeObserver(()=>setTimeout(()=>{this.__updateColumnsBodyContentHidden(),this.__tryToRecalculateColumnWidthsIfPending()})).observe(this.$.table),Xs(this),this._tooltipController=new Ui(this),this.addController(this._tooltipController),this._tooltipController.setManual(!0)}__getBodyCellCoordinates(t){if(this.$.items.contains(t)&&t.localName==="td")return{item:t.parentElement._item,column:t._column}}__focusBodyCell({item:t,column:e}){const i=this._getRenderedRows().find(o=>o._item===t),r=i&&[...i.children].find(o=>o._column===e);r&&r.focus()}_focusFirstVisibleRow(){const t=this.__getFirstVisibleItem();this.__rowFocusMode=!0,t.focus()}_flatSizeChanged(t,e,i,r){if(e&&i&&r){const o=this.shadowRoot.activeElement,n=this.__getBodyCellCoordinates(o),a=e.size||0;e.size=t,e.update(a-1,a-1),t<a&&e.update(t-1,t-1),n&&o.parentElement.hidden&&this.__focusBodyCell(n),this._resetKeyboardNavigation()}}__getIntrinsicWidth(t){return this.__intrinsicWidthCache.has(t)||this.__calculateAndCacheIntrinsicWidths([t]),this.__intrinsicWidthCache.get(t)}__getDistributedWidth(t,e){if(t==null||t===this)return 0;const i=Math.max(this.__getIntrinsicWidth(t),this.__getDistributedWidth((t.assignedSlot||t).parentElement,t));if(!e)return i;const r=t,o=i,n=r._visibleChildColumns.map(c=>this.__getIntrinsicWidth(c)).reduce((c,h)=>c+h,0),a=Math.max(0,o-n),d=this.__getIntrinsicWidth(e)/n*a;return this.__getIntrinsicWidth(e)+d}_recalculateColumnWidths(t){this.__virtualizer.flush(),[...this.$.header.children,...this.$.footer.children].forEach(r=>{r.__debounceUpdateHeaderFooterRowVisibility&&r.__debounceUpdateHeaderFooterRowVisibility.flush()}),this._debouncerHiddenChanged&&this._debouncerHiddenChanged.flush(),this.__intrinsicWidthCache=new Map;const e=this._firstVisibleIndex,i=this._lastVisibleIndex;this.__viewportRowsCache=this._getRenderedRows().filter(r=>r.index>=e&&r.index<=i),this.__calculateAndCacheIntrinsicWidths(t),t.forEach(r=>{r.width=`${this.__getDistributedWidth(r)}px`})}__setVisibleCellContentAutoWidth(t,e){t._allCells.filter(i=>this.$.items.contains(i)?this.__viewportRowsCache.includes(i.parentElement):!0).forEach(i=>{i.__measuringAutoWidth=e,i.__measuringAutoWidth?(i.__originalWidth=i.style.width,i.style.width="auto",i.style.position="absolute"):(i.style.width=i.__originalWidth,delete i.__originalWidth,i.style.position="")})}__getAutoWidthCellsMaxWidth(t){return t._allCells.reduce((e,i)=>i.__measuringAutoWidth?Math.max(e,i.offsetWidth+1):e,0)}__calculateAndCacheIntrinsicWidths(t){t.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!0)),t.forEach(e=>{const i=this.__getAutoWidthCellsMaxWidth(e);this.__intrinsicWidthCache.set(e,i)}),t.forEach(e=>this.__setVisibleCellContentAutoWidth(e,!1))}recalculateColumnWidths(){if(!this._columnTree)return;if(As(this)||this._dataProviderController.isLoading()){this.__pendingRecalculateColumnWidths=!0;return}const t=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(t)}__tryToRecalculateColumnWidthsIfPending(){if(!this.__pendingRecalculateColumnWidths||As(this)||this._dataProviderController.isLoading()||[...this.$.items.children].some(i=>i.index===void 0))return;[...this.$.items.children].some(i=>i.clientHeight>0)&&(this.__pendingRecalculateColumnWidths=!1,this.recalculateColumnWidths())}_onDataProviderPageLoaded(){super._onDataProviderPageLoaded(),this.__tryToRecalculateColumnWidthsIfPending()}_createScrollerRows(t){const e=[];for(let i=0;i<t;i++){const r=document.createElement("tr");r.setAttribute("part","row body-row"),r.setAttribute("role","row"),r.setAttribute("tabindex","-1"),this._columnTree&&this._updateRow(r,this._columnTree[this._columnTree.length-1],"body",!1,!0),e.push(r)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(i=>{i.isConnected&&i._cells&&(i._cells=[...i._cells])}),this.__afterCreateScrollerRowsDebouncer=G.debounce(this.__afterCreateScrollerRowsDebouncer,zt,()=>{this._afterScroll(),this.__tryToRecalculateColumnWidthsIfPending()}),e}_createCell(t,e){const r=`vaadin-grid-cell-content-${this._contentIndex=this._contentIndex+1||0}`,o=document.createElement("vaadin-grid-cell-content");o.setAttribute("slot",r);const n=document.createElement(t);n.id=r.replace("-content-","-"),n.setAttribute("role",t==="td"?"gridcell":"columnheader"),!Va&&!Ss&&(n.addEventListener("mouseenter",l=>{this.$.scroller.hasAttribute("scrolling")||this._showTooltip(l)}),n.addEventListener("mouseleave",()=>{this._hideTooltip()}),n.addEventListener("mousedown",()=>{this._hideTooltip(!0)}));const a=document.createElement("slot");if(a.setAttribute("name",r),e&&e._focusButtonMode){const l=document.createElement("div");l.setAttribute("role","button"),l.setAttribute("tabindex","-1"),n.appendChild(l),n._focusButton=l,n.focus=function(){n._focusButton.focus()},l.appendChild(a)}else n.setAttribute("tabindex","-1"),n.appendChild(a);return n._content=o,o.addEventListener("mousedown",()=>{if(D_){const l=d=>{const c=o.contains(this.getRootNode().activeElement),h=d.composedPath().includes(o);!c&&h&&n.focus(),document.removeEventListener("mouseup",l,!0)};document.addEventListener("mouseup",l,!0)}else setTimeout(()=>{o.contains(this.getRootNode().activeElement)||n.focus()})}),n}_updateRow(t,e,i="body",r=!1,o=!1){const n=document.createDocumentFragment();Kt(t,a=>{a._vacant=!0}),t.innerHTML="",i==="body"&&(t.__cells=[],t.__detailsCell=null),e.filter(a=>!a.hidden).forEach((a,l,d)=>{let c;if(i==="body"){a._cells||(a._cells=[]),c=a._cells.find(f=>f._vacant),c||(c=this._createCell("td",a),a._onCellKeyDown&&c.addEventListener("keydown",a._onCellKeyDown.bind(a)),a._cells.push(c)),c.setAttribute("part","cell body-cell"),c.__parentRow=t,t.__cells.push(c);const h=t===this.$.sizer;if((!a._bodyContentHidden||h)&&t.appendChild(c),h&&(a._sizerCell=c),l===d.length-1&&this.rowDetailsRenderer){this._detailsCells||(this._detailsCells=[]);const f=this._detailsCells.find(_=>_._vacant)||this._createCell("td");this._detailsCells.indexOf(f)===-1&&this._detailsCells.push(f),f._content.parentElement||n.appendChild(f._content),this._configureDetailsCell(f),t.appendChild(f),t.__detailsCell=f,this._a11ySetRowDetailsCell(t,f),f._vacant=!1}o||(a._cells=[...a._cells])}else{const h=i==="header"?"th":"td";r||a.localName==="vaadin-grid-column-group"?(c=a[`_${i}Cell`],c||(c=this._createCell(h),a._onCellKeyDown&&c.addEventListener("keydown",a._onCellKeyDown.bind(a))),c._column=a,t.appendChild(c),a[`_${i}Cell`]=c):(a._emptyCells||(a._emptyCells=[]),c=a._emptyCells.find(f=>f._vacant)||this._createCell(h),c._column=a,t.appendChild(c),a._emptyCells.indexOf(c)===-1&&a._emptyCells.push(c)),c.part.add("cell",`${i}-cell`)}c._content.parentElement||n.appendChild(c._content),c._vacant=!1,c._column=a}),i!=="body"&&this.__debounceUpdateHeaderFooterRowVisibility(t),this.appendChild(n),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(t)}__debounceUpdateHeaderFooterRowVisibility(t){t.__debounceUpdateHeaderFooterRowVisibility=G.debounce(t.__debounceUpdateHeaderFooterRowVisibility,Ye,()=>this.__updateHeaderFooterRowVisibility(t))}__updateHeaderFooterRowVisibility(t){if(!t)return;const e=Array.from(t.children).filter(i=>{const r=i._column;if(r._emptyCells&&r._emptyCells.indexOf(i)>-1)return!1;if(t.parentElement===this.$.header){if(r.headerRenderer)return!0;if(r.header===null)return!1;if(r.path||r.header!==void 0)return!0}else if(r.footerRenderer)return!0;return!1});t.hidden!==!e.length&&(t.hidden=!e.length),this._resetKeyboardNavigation()}_updateScrollerItem(t,e){this._preventScrollerRotatingCellFocus(t,e),this._columnTree&&(this._updateRowOrderParts(t,e),this._a11yUpdateRowRowindex(t,e),this._getItem(e,t))}_columnTreeChanged(t){this._renderColumnTree(t),this.recalculateColumnWidths(),this.__updateColumnsBodyContentHidden()}_updateRowOrderParts(t,e=t.index){bi(t,{first:e===0,last:e===this._flatSize-1,odd:e%2!==0,even:e%2===0})}_updateRowStateParts(t,{expanded:e,selected:i,detailsOpened:r}){bi(t,{expanded:e,collapsed:this.__isRowExpandable(t),selected:i,"details-opened":r})}_renderColumnTree(t){for(me(this.$.items,e=>{this._updateRow(e,t[t.length-1],"body",!1,!0);const i=this.__getRowModel(e);this._updateRowOrderParts(e),this._updateRowStateParts(e,i),this._filterDragAndDrop(e,i)});this.$.header.children.length<t.length;){const e=document.createElement("tr");e.setAttribute("part","row"),e.setAttribute("role","row"),e.setAttribute("tabindex","-1"),this.$.header.appendChild(e);const i=document.createElement("tr");i.setAttribute("part","row"),i.setAttribute("role","row"),i.setAttribute("tabindex","-1"),this.$.footer.appendChild(i)}for(;this.$.header.children.length>t.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);me(this.$.header,(e,i,r)=>{this._updateRow(e,t[i],"header",i===t.length-1);const o=qt(e);tt(o,"first-header-row-cell",i===0),tt(o,"last-header-row-cell",i===r.length-1)}),me(this.$.footer,(e,i,r)=>{this._updateRow(e,t[t.length-1-i],"footer",i===0);const o=qt(e);tt(o,"first-footer-row-cell",i===0),tt(o,"last-footer-row-cell",i===r.length-1)}),this._updateRow(this.$.sizer,t[t.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.generateCellClassNames(),this.generateCellPartNames(),this.__updateHeaderAndFooter()}_updateItem(t,e){t._item=e;const i=this.__getRowModel(t);this._toggleDetailsCell(t,i.detailsOpened),this._a11yUpdateRowLevel(t,i.level),this._a11yUpdateRowSelected(t,i.selected),this._updateRowStateParts(t,i),this._generateCellClassNames(t,i),this._generateCellPartNames(t,i),this._filterDragAndDrop(t,i),me(t,r=>{if(!(r._column&&!r._column.isConnected)&&r._renderer){const o=r._column||this;r._renderer.call(o,r._content,o,i)}}),this._updateDetailsCellHeight(t),this._a11yUpdateRowExpanded(t,i.expanded)}_resizeHandler(){this._updateDetailsCellHeights(),this.__updateHorizontalScrollPosition()}_onAnimationEnd(t){t.animationName.indexOf("vaadin-grid-appear")===0&&(t.stopPropagation(),this.__tryToRecalculateColumnWidthsIfPending(),requestAnimationFrame(()=>{this.__scrollToPendingIndexes()}))}__getRowModel(t){return{index:t.index,item:t._item,level:this._getIndexLevel(t.index),expanded:this._isExpanded(t._item),selected:this._isSelected(t._item),detailsOpened:!!this.rowDetailsRenderer&&this._isDetailsOpened(t._item)}}_showTooltip(t){const e=this._tooltipController.node;e&&e.isConnected&&(this._tooltipController.setTarget(t.target),this._tooltipController.setContext(this.getEventContext(t)),e._stateController.open({focus:t.type==="focusin",hover:t.type==="mouseenter"}))}_hideTooltip(t){const e=this._tooltipController&&this._tooltipController.node;e&&e._stateController.close(t)}requestContentUpdate(){this.__updateHeaderAndFooter(),this.__updateVisibleRows()}__updateHeaderAndFooter(){(this._columnTree||[]).forEach(t=>{t.forEach(e=>{e._renderHeaderAndFooter&&e._renderHeaderAndFooter()})})}__updateVisibleRows(t,e){this.__virtualizer&&this.__virtualizer.update(t,e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fg=S`
  @keyframes vaadin-grid-appear {
    to {
      opacity: 1;
    }
  }

  :host {
    display: flex;
    flex-direction: column;
    animation: 1ms vaadin-grid-appear;
    height: 400px;
    flex: 1 1 auto;
    align-self: stretch;
    position: relative;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host([disabled]) {
    pointer-events: none;
  }

  #scroller {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    transform: translateY(0);
    width: auto;
    height: auto;
    position: absolute;
    inset: 0;
  }

  :host([all-rows-visible]) {
    height: auto;
    align-self: flex-start;
    flex-grow: 0;
    width: 100%;
  }

  :host([all-rows-visible]) #scroller {
    width: 100%;
    height: 100%;
    position: relative;
  }

  :host([all-rows-visible]) #items {
    min-height: 1px;
  }

  #table {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    position: relative;
    outline: none;
    /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
    z-index: 0;
  }

  #header,
  #footer {
    display: block;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    overflow: visible;
    width: 100%;
    z-index: 1;
  }

  #header {
    top: 0;
  }

  th {
    text-align: inherit;
  }

  /* Safari doesn't work with "inherit" */
  [safari] th {
    text-align: initial;
  }

  #footer {
    bottom: 0;
  }

  #items {
    flex-grow: 1;
    flex-shrink: 0;
    display: block;
    position: -webkit-sticky;
    position: sticky;
    width: 100%;
    left: 0;
    overflow: visible;
  }

  [part~='row'] {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    margin: 0;
  }

  [part~='row'][loading] [part~='body-cell'] ::slotted(vaadin-grid-cell-content) {
    visibility: hidden;
  }

  [column-rendering='lazy'] [part~='body-cell']:not([frozen]):not([frozen-to-end]) {
    transform: translateX(var(--_grid-lazy-columns-start));
  }

  #items [part~='row'] {
    position: absolute;
  }

  #items [part~='row']:empty {
    height: 100%;
  }

  [part~='cell']:not([part~='details-cell']) {
    flex-shrink: 0;
    flex-grow: 1;
    box-sizing: border-box;
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    padding: 0;
    white-space: nowrap;
  }

  [part~='cell'] > [tabindex] {
    display: flex;
    align-items: inherit;
    outline: none;
    position: absolute;
    inset: 0;
  }

  [part~='details-cell'] {
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0;
  }

  [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: block;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  [hidden] {
    display: none !important;
  }

  [frozen],
  [frozen-to-end] {
    z-index: 2;
    will-change: transform;
  }

  [no-scrollbars][safari] #table,
  [no-scrollbars][firefox] #table {
    overflow: hidden;
  }

  /* Reordering styles */
  :host([reordering]) [part~='cell'] ::slotted(vaadin-grid-cell-content),
  :host([reordering]) [part~='resize-handle'],
  #scroller[no-content-pointer-events] [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    pointer-events: none;
  }

  [part~='reorder-ghost'] {
    visibility: hidden;
    position: fixed;
    pointer-events: none;
    opacity: 0.5;

    /* Prevent overflowing the grid in Firefox */
    top: 0;
    left: 0;
  }

  :host([reordering]) {
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Resizing styles */
  [part~='resize-handle'] {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    cursor: col-resize;
    z-index: 1;
  }

  [part~='resize-handle']::before {
    position: absolute;
    content: '';
    height: 100%;
    width: 35px;
    transform: translateX(-50%);
  }

  [last-column] [part~='resize-handle']::before,
  [last-frozen] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
    right: 0;
  }

  [frozen-to-end] [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  [frozen-to-end] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  [first-frozen-to-end] [part~='resize-handle']::before {
    width: 18px;
    transform: none;
  }

  [first-frozen-to-end] {
    margin-inline-start: auto;
  }

  /* Hide resize handle if scrolled to end */
  :host(:not([overflow~='end'])) [first-frozen-to-end] [part~='resize-handle'] {
    display: none;
  }

  #scroller[column-resizing] {
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
  }

  /* Sizer styles */
  #sizer {
    display: flex;
    position: absolute;
    visibility: hidden;
  }

  #sizer [part~='details-cell'] {
    display: none !important;
  }

  #sizer [part~='cell'][hidden] {
    display: none !important;
  }

  #sizer [part~='cell'] {
    display: block;
    flex-shrink: 0;
    line-height: 0;
    height: 0 !important;
    min-height: 0 !important;
    max-height: 0 !important;
    padding: 0 !important;
    border: none !important;
  }

  #sizer [part~='cell']::before {
    content: '-';
  }

  #sizer [part~='cell'] ::slotted(vaadin-grid-cell-content) {
    display: none !important;
  }

  /* RTL specific styles */

  :host([dir='rtl']) #items,
  :host([dir='rtl']) #header,
  :host([dir='rtl']) #footer {
    left: auto;
  }

  :host([dir='rtl']) [part~='reorder-ghost'] {
    left: auto;
    right: 0;
  }

  :host([dir='rtl']) [part~='resize-handle'] {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [part~='resize-handle']::before {
    transform: translateX(50%);
  }

  :host([dir='rtl']) [last-column] [part~='resize-handle']::before,
  :host([dir='rtl']) [last-frozen] [part~='resize-handle']::before {
    left: 0;
    right: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle'] {
    right: 0;
    left: auto;
  }

  :host([dir='rtl']) [frozen-to-end] [part~='resize-handle']::before {
    right: 0;
    left: auto;
  }

  @media (forced-colors: active) {
    [part~='selected-row'] [part~='first-column-cell']::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border: 2px solid;
    }

    [part~='focused-cell']::before {
      outline: 2px solid !important;
      outline-offset: -1px;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-grid",fg,{moduleId:"vaadin-grid-styles"});class mg extends pg(qe(ve(ht(ie)))){static get template(){return ae`
      <div
        id="scroller"
        safari$="[[_safari]]"
        ios$="[[_ios]]"
        loading$="[[loading]]"
        column-reordering-allowed$="[[columnReorderingAllowed]]"
      >
        <table id="table" role="treegrid" aria-multiselectable="true" tabindex="0">
          <caption id="sizer" part="row"></caption>
          <thead id="header" role="rowgroup"></thead>
          <tbody id="items" role="rowgroup"></tbody>
          <tfoot id="footer" role="rowgroup"></tfoot>
        </table>

        <div part="reorder-ghost"></div>
      </div>

      <slot name="tooltip"></slot>

      <div id="focusexit" tabindex="0"></div>
    `}static get is(){return"vaadin-grid"}}Z(mg);const _g=S`
  :host([theme~='margin']) {
    margin: var(--lumo-space-m);
  }

  :host([theme~='padding']) {
    padding: var(--lumo-space-m);
  }

  :host([theme~='spacing-xs']) {
    gap: var(--lumo-space-xs);
  }

  :host([theme~='spacing-s']) {
    gap: var(--lumo-space-s);
  }

  :host([theme~='spacing']) {
    gap: var(--lumo-space-m);
  }

  :host([theme~='spacing-l']) {
    gap: var(--lumo-space-l);
  }

  :host([theme~='spacing-xl']) {
    gap: var(--lumo-space-xl);
  }
`;F("vaadin-horizontal-layout",_g,{moduleId:"lumo-horizontal-layout"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class gg extends qe(ve(ie)){static get template(){return ae`
      <style>
        :host {
          display: flex;
          box-sizing: border-box;
        }

        :host([hidden]) {
          display: none !important;
        }

        /* Theme variations */
        :host([theme~='margin']) {
          margin: 1em;
        }

        :host([theme~='padding']) {
          padding: 1em;
        }

        :host([theme~='spacing']) {
          gap: 1em;
        }
      </style>

      <slot></slot>
    `}static get is(){return"vaadin-horizontal-layout"}}Z(gg);F("vaadin-input-container",S`
    :host {
      background: var(--_background);
      padding: 0 calc(0.375em + var(--_input-container-radius) / 4 - 1px);
      font-weight: 500;
      line-height: 1;
      position: relative;
      cursor: text;
      box-sizing: border-box;
      border-radius:
        /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius#syntax */
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius));
      /* Fallback */
      --_input-container-radius: var(--vaadin-input-field-border-radius, var(--lumo-border-radius-m));
      --_input-height: var(--lumo-text-field-size, var(--lumo-size-m));
      /* Default values */
      --_background: var(--vaadin-input-field-background, var(--lumo-contrast-10pct));
      --_hover-highlight: var(--vaadin-input-field-hover-highlight, var(--lumo-contrast-50pct));
      --_input-border-color: var(--vaadin-input-field-border-color, var(--lumo-contrast-50pct));
      --_icon-color: var(--vaadin-input-field-icon-color, var(--lumo-contrast-60pct));
      --_icon-size: var(--vaadin-input-field-icon-size, var(--lumo-icon-size-m));
      --_invalid-background: var(--vaadin-input-field-invalid-background, var(--lumo-error-color-10pct));
      --_invalid-hover-highlight: var(--vaadin-input-field-invalid-hover-highlight, var(--lumo-error-color-50pct));
    }

    :host([dir='rtl']) {
      border-radius:
        /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
        var(--vaadin-input-field-top-end-radius, var(--_input-container-radius))
        var(--vaadin-input-field-top-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-start-radius, var(--_input-container-radius))
        var(--vaadin-input-field-bottom-end-radius, var(--_input-container-radius));
    }

    /* Used for hover and activation effects */
    :host::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background: var(--_hover-highlight);
      opacity: 0;
      transition: transform 0.15s, opacity 0.2s;
      transform-origin: 100% 0;
    }

    ::slotted(:not([slot$='fix'])) {
      cursor: inherit;
      min-height: var(--vaadin-input-field-height, var(--_input-height));
      padding: 0 0.25em;
      --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      mask-image: var(--_lumo-text-field-overflow-mask-image);
    }

    /* Read-only */
    :host([readonly]) {
      color: var(--lumo-secondary-text-color);
      background-color: transparent;
      cursor: default;
    }

    :host([readonly])::after {
      background-color: transparent;
      opacity: 1;
      border: var(--vaadin-input-field-readonly-border, 1px dashed var(--lumo-contrast-30pct));
    }

    /* Disabled */
    :host([disabled]) {
      background-color: var(--lumo-contrast-5pct);
    }

    :host([disabled]) ::slotted(*) {
      color: var(--lumo-disabled-text-color);
      -webkit-text-fill-color: var(--lumo-disabled-text-color);
    }

    /* Invalid */
    :host([invalid]) {
      background: var(--_invalid-background);
    }

    :host([invalid]:not([readonly]))::after {
      background: var(--_invalid-hover-highlight);
    }

    /* Slotted icons */
    ::slotted(vaadin-icon) {
      color: var(--_icon-color);
      width: var(--_icon-size);
      height: var(--_icon-size);
    }

    /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
    ::slotted(vaadin-icon[icon^='vaadin:']) {
      padding: 0.25em;
      box-sizing: border-box !important;
    }

    /* Text align */
    :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
    }

    @-moz-document url-prefix() {
      :host([dir='rtl']) ::slotted(:not([slot$='fix'])) {
        mask-image: var(--_lumo-text-field-overflow-mask-image);
      }
    }

    :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
      text-align: start;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center']) ::slotted(:not([slot$='fix'])) {
      text-align: center;
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
      text-align: end;
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }

    /* RTL specific styles */
    :host([dir='rtl'])::after {
      transform-origin: 0% 0;
    }

    :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-center'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
      --_lumo-text-field-overflow-mask-image: none;
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-right'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
      }
    }

    @-moz-document url-prefix() {
      /* Firefox is smart enough to align overflowing text to right */
      :host([theme~='align-left'][dir='rtl']) ::slotted(:not([slot$='fix'])) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
      }
    }
  `,{moduleId:"lumo-input-container"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const vg=S`
  :host {
    --_helper-spacing: var(--vaadin-input-field-helper-spacing, 0.4em);
  }

  :host([has-helper]) [part='helper-text']::before {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  [part='helper-text'] {
    display: block;
    color: var(--vaadin-input-field-helper-color, var(--lumo-secondary-text-color));
    font-size: var(--vaadin-input-field-helper-font-size, var(--lumo-font-size-xs));
    line-height: var(--lumo-line-height-xs);
    font-weight: var(--vaadin-input-field-helper-font-weight, 400);
    margin-left: calc(var(--lumo-border-radius-m) / 4);
    transition: color 0.2s;
  }

  :host(:hover:not([readonly])) [part='helper-text'] {
    color: var(--lumo-body-text-color);
  }

  :host([disabled]) [part='helper-text'] {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::before {
    display: none;
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text']::after {
    content: '';
    display: block;
    height: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] {
    order: 0;
    padding-bottom: var(--_helper-spacing);
  }

  :host([has-helper][theme~='helper-above-field']) [part='helper-text'] {
    order: 1;
  }

  :host([has-helper][theme~='helper-above-field']) [part='label'] + * {
    order: 2;
  }

  :host([has-helper][theme~='helper-above-field']) [part='error-message'] {
    order: 3;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const bg=S`
  :host {
    --lumo-text-field-size: var(--lumo-size-m);
    color: var(--vaadin-input-field-value-color, var(--lumo-body-text-color));
    font-size: var(--vaadin-input-field-value-font-size, var(--lumo-font-size-m));
    font-weight: var(--vaadin-input-field-value-font-weight, 400);
    font-family: var(--lumo-font-family);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    padding: var(--lumo-space-xs) 0;
    --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
    --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
    --_input-height: var(--vaadin-input-field-height, var(--lumo-text-field-size));
  }

  :host::before {
    height: var(--_input-height);
    box-sizing: border-box;
    display: inline-flex;
    align-items: center;
  }

  :host([focused]) [part='input-field'] ::slotted(:is(input, textarea)) {
    -webkit-mask-image: none;
    mask-image: none;
  }

  ::slotted(:is(input, textarea):placeholder-shown) {
    color: var(--vaadin-input-field-placeholder-color, var(--lumo-secondary-text-color));
  }

  /* Hover */
  :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
    opacity: var(--vaadin-input-field-hover-highlight-opacity, 0.1);
  }

  /* Touch device adjustment */
  @media (pointer: coarse) {
    :host(:hover:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0;
    }

    :host(:active:not([readonly]):not([focused])) [part='input-field']::after {
      opacity: 0.2;
    }
  }

  /* Trigger when not focusing using the keyboard */
  :host([focused]:not([focus-ring]):not([readonly])) [part='input-field']::after {
    transform: scaleX(0);
    transition-duration: 0.15s, 1s;
  }

  /* Focus-ring */
  :host([focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 var(--_focus-ring-width) var(--_focus-ring-color);
  }

  /* Read-only and disabled */
  :host(:is([readonly], [disabled])) ::slotted(:is(input, textarea):placeholder-shown) {
    opacity: 0;
  }

  /* Read-only style */
  :host([readonly]) {
    --vaadin-input-field-border-color: transparent;
  }

  /* Disabled style */
  :host([disabled]) {
    pointer-events: none;
    --vaadin-input-field-border-color: var(--lumo-contrast-20pct);
  }

  :host([disabled]) [part='label'],
  :host([disabled]) [part='input-field'] ::slotted(*) {
    color: var(--lumo-disabled-text-color);
    -webkit-text-fill-color: var(--lumo-disabled-text-color);
  }

  /* Invalid style */
  :host([invalid]) {
    --vaadin-input-field-border-color: var(--lumo-error-color);
  }

  :host([invalid][focus-ring]) [part='input-field'] {
    box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
  }

  :host([input-prevented]) [part='input-field'] {
    animation: shake 0.15s infinite;
  }

  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    75% {
      transform: translateX(-4px);
    }
  }

  /* Small theme */
  :host([theme~='small']) {
    font-size: var(--lumo-font-size-s);
    --lumo-text-field-size: var(--lumo-size-s);
  }

  :host([theme~='small']) [part='label'] {
    font-size: var(--lumo-font-size-xs);
  }

  :host([theme~='small']) [part='error-message'] {
    font-size: var(--lumo-font-size-xxs);
  }

  /* Slotted content */
  [part='input-field'] ::slotted(:not(vaadin-icon):not(input):not(textarea)) {
    color: var(--lumo-secondary-text-color);
    font-weight: 400;
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }
`,tr=[fd,Ho,vg,bg];F("",tr,{moduleId:"lumo-input-field-shared-styles"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const yg=S`
  :host([step-buttons-visible]:not([theme~='align-right'])) ::slotted(input) {
    text-align: center;
  }

  [part$='button'][disabled] {
    opacity: 0.2;
  }

  :host([step-buttons-visible]) [part='input-field'] {
    padding: 0;
  }

  [part\$='button'] {
    cursor: pointer;
    font-size: var(--lumo-icon-size-s);
    width: 1.6em;
    height: 1.6em;
  }

  [part\$='button']::before {
    margin-top: 0.3em;
  }

  [part='decrease-button']::before {
    content: var(--lumo-icons-minus);
  }

  [part='increase-button']::before {
    content: var(--lumo-icons-plus);
  }

  /* RTL specific styles */
  :host([dir='rtl']:not([theme~='align-right'])) ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }
`;F("vaadin-number-field",[tr,Ho,yg],{moduleId:"lumo-number-field"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xg=s=>class extends s{static get properties(){return{disabled:{type:Boolean,reflectToAttribute:!0},readonly:{type:Boolean,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0}}}ready(){super.ready(),this.addEventListener("pointerdown",e=>{e.target===this&&e.preventDefault()}),this.addEventListener("click",e=>{e.target===this&&this.shadowRoot.querySelector("slot:not([name])").assignedNodes({flatten:!0}).forEach(i=>i.focus&&i.focus())})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cg=S`
  :host {
    display: flex;
    align-items: center;
    flex: 0 1 auto;
    border-radius:
            /* See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius */
      var(--vaadin-input-field-top-start-radius, var(--__border-radius))
      var(--vaadin-input-field-top-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--__border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--__border-radius));
    --_border-radius: var(--vaadin-input-field-border-radius, 0);
    --_input-border-width: var(--vaadin-input-field-border-width, 0);
    --_input-border-color: var(--vaadin-input-field-border-color, transparent);
    box-shadow: inset 0 0 0 var(--_input-border-width, 0) var(--_input-border-color);
  }

  :host([dir='rtl']) {
    border-radius:
            /* Don't use logical props, see https://github.com/vaadin/vaadin-time-picker/issues/145 */
      var(--vaadin-input-field-top-end-radius, var(--_border-radius))
      var(--vaadin-input-field-top-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-start-radius, var(--_border-radius))
      var(--vaadin-input-field-bottom-end-radius, var(--_border-radius));
  }

  :host([hidden]) {
    display: none !important;
  }

  /* Reset the native input styles */
  ::slotted(input) {
    -webkit-appearance: none;
    -moz-appearance: none;
    flex: auto;
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    height: 100%;
    outline: none;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    min-width: 0;
    font: inherit;
    line-height: normal;
    color: inherit;
    background-color: transparent;
    /* Disable default invalid style in Firefox */
    box-shadow: none;
  }

  ::slotted(*) {
    flex: none;
  }

  ::slotted(:is(input, textarea))::placeholder {
    /* Use ::slotted(input:placeholder-shown) in themes to style the placeholder. */
    /* because ::slotted(...)::placeholder does not work in Safari. */
    font: inherit;
    color: inherit;
    /* Override default opacity in Firefox */
    opacity: 1;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-input-container",Cg,{moduleId:"vaadin-input-container-styles"});class wg extends xg(ve(ct(ie))){static get is(){return"vaadin-input-container"}static get template(){return ae`
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    `}}Z(wg);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Eg=S`
  [part='clear-button'] {
    display: none;
    cursor: default;
  }

  [part='clear-button']::before {
    content: '\\2715';
  }

  :host([clear-button-visible][has-value]:not([disabled]):not([readonly])) [part='clear-button'] {
    display: block;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ag=S`
  :host {
    display: inline-flex;
    outline: none;
  }

  :host::before {
    content: '\\2003';
    width: 0;
    display: inline-block;
    /* Size and position this element on the same vertical position as the input-field element
          to make vertical align for the host element work as expected */
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:not([has-label])) [part='label'] {
    display: none;
  }

  @media (forced-colors: active) {
    :host(:not([readonly])) [part='input-field'] {
      outline: 1px solid;
      outline-offset: -1px;
    }
    :host([focused]) [part='input-field'] {
      outline-width: 2px;
    }
    :host([disabled]) [part='input-field'] {
      outline-color: GrayText;
    }
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Sg=S`
  [class$='container'] {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    max-width: 100%;
    width: var(--vaadin-field-default-width, 12em);
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd..
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const an=[Ag,Sg,Eg];/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ln extends we{constructor(t,e){super(t,"input","input",{initializer:(i,r)=>{r.value&&(i.value=r.value),r.type&&i.setAttribute("type",r.type),i.id=this.defaultId,typeof e=="function"&&e(i)},useUniqueId:!0})}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zr=new WeakMap;function Tg(s){return zr.has(s)||zr.set(s,new Set),zr.get(s)}function Pg(s,t){const e=document.createElement("style");e.textContent=s,t===document?document.head.appendChild(e):t.insertBefore(e,t.firstChild)}const Ig=te(s=>class extends s{get slotStyles(){return{}}connectedCallback(){super.connectedCallback(),this.__applySlotStyles()}__applySlotStyles(){const e=this.getRootNode(),i=Tg(e);this.slotStyles.forEach(r=>{i.has(r)||(Pg(r,e),i.add(r))})}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hc=te(s=>class extends s{static get properties(){return{inputElement:{type:Object,readOnly:!0,observer:"_inputElementChanged"},type:{type:String,readOnly:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0,sync:!0},_hasInputValue:{type:Boolean,value:!1,observer:"_hasInputValueChanged"}}}constructor(){super(),this._boundOnInput=this.__onInput.bind(this),this._boundOnChange=this._onChange.bind(this)}get _hasValue(){return this.value!=null&&this.value!==""}get _inputElementValueProperty(){return"value"}get _inputElementValue(){return this.inputElement?this.inputElement[this._inputElementValueProperty]:void 0}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._inputElementValueProperty]=e)}clear(){this._hasInputValue=!1,this.value="",this._inputElementValue=""}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange)}_forwardInputValue(e){this.inputElement&&(this._inputElementValue=e??"")}_inputElementChanged(e,i){e?this._addInputListeners(e):i&&this._removeInputListeners(i)}_hasInputValueChanged(e,i){(e||i)&&this.dispatchEvent(new CustomEvent("has-input-value-changed"))}__onInput(e){this._setHasInputValue(e),this._onInput(e)}_onInput(e){const i=e.composedPath()[0];this.__userInput=e.isTrusted,this.value=i.value,this.__userInput=!1}_onChange(e){}_toggleHasValue(e){this.toggleAttribute("has-value",e)}_valueChanged(e,i){this._toggleHasValue(this._hasValue),!(e===""&&i===void 0)&&(this.__userInput||this._forwardInputValue(e))}_setHasInputValue(e){const i=e.composedPath()[0];this._hasInputValue=i.value.length>0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zg=s=>class extends hc(Ks(s)){static get properties(){return{clearButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1}}}get clearElement(){return console.warn(`Please implement the 'clearElement' property in <${this.localName}>`),null}ready(){super.ready(),this.clearElement&&(this.clearElement.addEventListener("mousedown",e=>this._onClearButtonMouseDown(e)),this.clearElement.addEventListener("click",e=>this._onClearButtonClick(e)))}_onClearButtonClick(e){e.preventDefault(),this._onClearAction()}_onClearButtonMouseDown(e){e.preventDefault(),Zs||this.inputElement.focus()}_onEscape(e){super._onEscape(e),this.clearButtonVisible&&this.value&&(e.stopPropagation(),this._onClearAction())}_onClearAction(){this._inputElementValue="",this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}))}};/**
 * @license
 * Copyright (c) 2022 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class dn extends we{constructor(t,e,i,r={}){super(t,e,i,{...r,useUniqueId:!0})}initCustomNode(t){this.__updateNodeId(t),this.__notifyChange(t)}teardownNode(t){const e=this.getSlotChild();e&&e!==this.defaultNode?this.__notifyChange(e):(this.restoreDefaultNode(),this.updateDefaultNode(this.node))}attachDefaultNode(){const t=super.attachDefaultNode();return t&&this.__updateNodeId(t),t}restoreDefaultNode(){}updateDefaultNode(t){this.__notifyChange(t)}observeNode(t){this.__nodeObserver&&this.__nodeObserver.disconnect(),this.__nodeObserver=new MutationObserver(e=>{e.forEach(i=>{const r=i.target,o=r===this.node;i.type==="attributes"?o&&this.__updateNodeId(r):(o||r.parentElement===this.node)&&this.__notifyChange(this.node)})}),this.__nodeObserver.observe(t,{attributes:!0,attributeFilter:["id"],childList:!0,subtree:!0,characterData:!0})}__hasContent(t){return t?t.nodeType===Node.ELEMENT_NODE&&(customElements.get(t.localName)||t.children.length>0)||t.textContent&&t.textContent.trim()!=="":!1}__notifyChange(t){this.dispatchEvent(new CustomEvent("slot-content-changed",{detail:{hasContent:this.__hasContent(t),node:t}}))}__updateNodeId(t){const e=!this.nodes||t===this.nodes[0];t.nodeType===Node.ELEMENT_NODE&&(!this.multiple||e)&&!t.id&&(t.id=this.defaultId)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class kg extends dn{constructor(t){super(t,"error-message","div")}setErrorMessage(t){this.errorMessage=t,this.updateDefaultNode(this.node)}setInvalid(t){this.invalid=t,this.updateDefaultNode(this.node)}initAddedNode(t){t!==this.defaultNode&&this.initCustomNode(t)}initNode(t){this.updateDefaultNode(t)}initCustomNode(t){t.textContent&&!this.errorMessage&&(this.errorMessage=t.textContent.trim()),super.initCustomNode(t)}restoreDefaultNode(){this.attachDefaultNode()}updateDefaultNode(t){const{errorMessage:e,invalid:i}=this,r=!!(i&&e&&e.trim()!=="");t&&(t.textContent=r?e:"",t.hidden=!r,r?t.setAttribute("role","alert"):t.removeAttribute("role")),super.updateDefaultNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Dg extends dn{constructor(t){super(t,"helper",null)}setHelperText(t){this.helperText=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{helperText:t}=this;if(t&&t.trim()!==""){this.tagName="div";const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.helperText),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Og extends dn{constructor(t){super(t,"label","label")}setLabel(t){this.label=t,this.getSlotChild()||this.restoreDefaultNode(),this.node===this.defaultNode&&this.updateDefaultNode(this.node)}restoreDefaultNode(){const{label:t}=this;if(t&&t.trim()!==""){const e=this.attachDefaultNode();this.observeNode(e)}}updateDefaultNode(t){t&&(t.textContent=this.label),super.updateDefaultNode(t)}initCustomNode(t){super.initCustomNode(t),this.observeNode(t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Mg=te(s=>class extends ht(s){static get properties(){return{label:{type:String,observer:"_labelChanged"}}}constructor(){super(),this._labelController=new Og(this),this._labelController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-label",e.detail.hasContent)})}get _labelId(){const e=this._labelNode;return e&&e.id}get _labelNode(){return this._labelController.node}ready(){super.ready(),this.addController(this._labelController)}_labelChanged(e){this._labelController.setLabel(e)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const uc=te(s=>class extends s{static get properties(){return{invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},required:{type:Boolean,reflectToAttribute:!0}}}validate(){const e=this.checkValidity();return this._setInvalid(!e),this.dispatchEvent(new CustomEvent("validated",{detail:{valid:e}})),e}checkValidity(){return!this.required||!!this.value}_setInvalid(e){this._shouldSetInvalid(e)&&(this.invalid=e)}_shouldSetInvalid(e){return!0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Rg=s=>class extends uc(Mg(ht(s))){static get properties(){return{ariaTarget:{type:Object,observer:"_ariaTargetChanged"},errorMessage:{type:String,observer:"_errorMessageChanged"},helperText:{type:String,observer:"_helperTextChanged"},accessibleName:{type:String,observer:"_accessibleNameChanged"},accessibleNameRef:{type:String,observer:"_accessibleNameRefChanged"}}}static get observers(){return["_invalidChanged(invalid)","_requiredChanged(required)"]}constructor(){super(),this._fieldAriaController=new og(this),this._helperController=new Dg(this),this._errorController=new kg(this),this._errorController.addEventListener("slot-content-changed",e=>{this.toggleAttribute("has-error-message",e.detail.hasContent)}),this._labelController.addEventListener("slot-content-changed",e=>{const{hasContent:i,node:r}=e.detail;this.__labelChanged(i,r)}),this._helperController.addEventListener("slot-content-changed",e=>{const{hasContent:i,node:r}=e.detail;this.toggleAttribute("has-helper",i),this.__helperChanged(i,r)})}get _errorNode(){return this._errorController.node}get _helperNode(){return this._helperController.node}ready(){super.ready(),this.addController(this._fieldAriaController),this.addController(this._helperController),this.addController(this._errorController)}__helperChanged(e,i){e?this._fieldAriaController.setHelperId(i.id):this._fieldAriaController.setHelperId(null)}_accessibleNameChanged(e){this._fieldAriaController.setAriaLabel(e)}_accessibleNameRefChanged(e){this._fieldAriaController.setLabelId(e,!0)}__labelChanged(e,i){e?this._fieldAriaController.setLabelId(i.id):this._fieldAriaController.setLabelId(null)}_errorMessageChanged(e){this._errorController.setErrorMessage(e)}_helperTextChanged(e){this._helperController.setHelperText(e)}_ariaTargetChanged(e){e&&this._fieldAriaController.setTarget(e)}_requiredChanged(e){this._fieldAriaController.setRequired(e)}_invalidChanged(e){this._errorController.setInvalid(e),setTimeout(()=>{if(e){const i=this._errorNode;this._fieldAriaController.setErrorId(i&&i.id)}else this._fieldAriaController.setErrorId(null)})}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Ng=te(s=>class extends s{static get properties(){return{stateTarget:{type:Object,observer:"_stateTargetChanged"}}}static get delegateAttrs(){return[]}static get delegateProps(){return[]}ready(){super.ready(),this._createDelegateAttrsObserver(),this._createDelegatePropsObserver()}_stateTargetChanged(e){e&&(this._ensureAttrsDelegated(),this._ensurePropsDelegated())}_createDelegateAttrsObserver(){this._createMethodObserver(`_delegateAttrsChanged(${this.constructor.delegateAttrs.join(", ")})`)}_createDelegatePropsObserver(){this._createMethodObserver(`_delegatePropsChanged(${this.constructor.delegateProps.join(", ")})`)}_ensureAttrsDelegated(){this.constructor.delegateAttrs.forEach(e=>{this._delegateAttribute(e,this[e])})}_ensurePropsDelegated(){this.constructor.delegateProps.forEach(e=>{this._delegateProperty(e,this[e])})}_delegateAttrsChanged(...e){this.constructor.delegateAttrs.forEach((i,r)=>{this._delegateAttribute(i,e[r])})}_delegatePropsChanged(...e){this.constructor.delegateProps.forEach((i,r)=>{this._delegateProperty(i,e[r])})}_delegateAttribute(e,i){this.stateTarget&&(e==="invalid"&&this._delegateAttribute("aria-invalid",i?"true":!1),typeof i=="boolean"?this.stateTarget.toggleAttribute(e,i):i?this.stateTarget.setAttribute(e,i):this.stateTarget.removeAttribute(e))}_delegateProperty(e,i){this.stateTarget&&(this.stateTarget[e]=i)}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const pc=te(s=>class extends Ng(uc(hc(s))){static get constraints(){return["required"]}static get delegateAttrs(){return[...super.delegateAttrs,"required"]}ready(){super.ready(),this._createConstraintsObserver()}checkValidity(){return this.inputElement&&this._hasValidConstraints(this.constructor.constraints.map(e=>this[e]))?this.inputElement.checkValidity():!this.invalid}_hasValidConstraints(e){return e.some(i=>this.__isValidConstraint(i))}_createConstraintsObserver(){this._createMethodObserver(`_constraintsChanged(stateTarget, ${this.constructor.constraints.join(", ")})`)}_constraintsChanged(e,...i){if(!e)return;const r=this._hasValidConstraints(i),o=this.__previousHasConstraints&&!r;(this._hasValue||this.invalid)&&r?this.validate():o&&this._setInvalid(!1),this.__previousHasConstraints=r}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}__isValidConstraint(e){return!!e||e===0}});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const fc=s=>class extends Ig(lc(pc(Rg(zg(Ks(s)))))){static get properties(){return{allowedCharPattern:{type:String,observer:"_allowedCharPatternChanged"},autoselect:{type:Boolean,value:!1},name:{type:String,reflectToAttribute:!0},placeholder:{type:String,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},title:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"name","type","placeholder","readonly","invalid","title"]}constructor(){super(),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this)}get slotStyles(){return[`
          :is(input[slot='input'], textarea[slot='textarea'])::placeholder {
            font: inherit;
            color: inherit;
          }
        `]}_onFocus(e){super._onFocus(e),this.autoselect&&this.inputElement&&this.inputElement.select()}_onChange(e){e.stopPropagation(),this.validate(),this.dispatchEvent(new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable}))}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}_onKeyDown(e){super._onKeyDown(e),this.allowedCharPattern&&!this.__shouldAcceptKey(e)&&(e.preventDefault(),this._markInputPrevented())}_markInputPrevented(){this.setAttribute("input-prevented",""),this._preventInputDebouncer=G.debounce(this._preventInputDebouncer,Ae.after(200),()=>{this.removeAttribute("input-prevented")})}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||e.key.length!==1||this.__allowedCharRegExp.test(e.key)}_onPaste(e){if(this.allowedCharPattern){const i=e.clipboardData.getData("text");this.__allowedTextRegExp.test(i)||(e.preventDefault(),this._markInputPrevented())}}_onDrop(e){if(this.allowedCharPattern){const i=e.dataTransfer.getData("text");this.__allowedTextRegExp.test(i)||(e.preventDefault(),this._markInputPrevented())}}_onBeforeInput(e){this.allowedCharPattern&&e.data&&!this.__allowedTextRegExp.test(e.data)&&(e.preventDefault(),this._markInputPrevented())}_allowedCharPatternChanged(e){if(e)try{this.__allowedCharRegExp=new RegExp(`^${e}$`,"u"),this.__allowedTextRegExp=new RegExp(`^${e}*$`,"u")}catch(i){console.error(i)}}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mc=s=>class extends fc(s){static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String,reflectToAttribute:!0}}}static get delegateAttrs(){return[...super.delegateAttrs,"autocapitalize","autocomplete","autocorrect"]}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.value&&e.value!==this.value&&(console.warn(`Please define value on the <${this.localName}> component!`),e.value=""),this.value&&(e.value=this.value))}_setFocused(e){super._setFocused(e),!e&&document.hasFocus()&&this.validate()}_onInput(e){super._onInput(e),this.invalid&&this.validate()}_valueChanged(e,i){super._valueChanged(e,i),i!==void 0&&this.invalid&&this.validate()}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class cn{constructor(t,e){this.input=t,this.__preventDuplicateLabelClick=this.__preventDuplicateLabelClick.bind(this),e.addEventListener("slot-content-changed",i=>{this.__initLabel(i.detail.node)}),this.__initLabel(e.node)}__initLabel(t){t&&(t.addEventListener("click",this.__preventDuplicateLabelClick),this.input&&t.setAttribute("for",this.input.id))}__preventDuplicateLabelClick(){const t=e=>{e.stopImmediatePropagation(),this.input.removeEventListener("click",t)};this.input.addEventListener("click",t)}}/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Fg=s=>class extends mc(s){static get properties(){return{min:{type:Number},max:{type:Number},step:{type:Number},stepButtonsVisible:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_stepChanged(step, inputElement)"]}static get delegateProps(){return[...super.delegateProps,"min","max"]}static get constraints(){return[...super.constraints,"min","max","step"]}constructor(){super(),this._setType("number"),this.__onWheel=this.__onWheel.bind(this)}get slotStyles(){const e=this.localName;return[`
          ${e} input[type="number"]::-webkit-outer-spin-button,
          ${e} input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          ${e} input[type="number"] {
            -moz-appearance: textfield;
          }

          ${e}[dir='rtl'] input[type="number"]::placeholder {
            direction: rtl;
          }

          ${e}[dir='rtl']:not([step-buttons-visible]) input[type="number"]::placeholder {
            text-align: left;
          }
        `]}get clearElement(){return this.$.clearButton}get __hasUnparsableValue(){return this.inputElement.validity.badInput}ready(){super.ready(),this.addController(new ln(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new cn(this.inputElement,this._labelController))}checkValidity(){return this.inputElement?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){super._addInputListeners(e),e.addEventListener("wheel",this.__onWheel)}_removeInputListeners(e){super._removeInputListeners(e),e.removeEventListener("wheel",this.__onWheel)}__onWheel(e){this.hasAttribute("focused")&&e.preventDefault()}_onDecreaseButtonTouchend(e){e.cancelable&&(e.preventDefault(),this._decreaseValue())}_onIncreaseButtonTouchend(e){e.cancelable&&(e.preventDefault(),this._increaseValue())}_onDecreaseButtonClick(){this._decreaseValue()}_onIncreaseButtonClick(){this._increaseValue()}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(this.disabled||this.readonly)return;const i=this.step||1;let r=parseFloat(this.value);this.value?r<this.min?(e=0,r=this.min):r>this.max&&(e=0,r=this.max):this.min===0&&e<0||this.max===0&&e>0||this.max===0&&this.min===0?(e=0,r=0):(this.max==null||this.max>=0)&&(this.min==null||this.min<=0)?r=0:this.min>0?(r=this.min,this.max<0&&e<0&&(r=this.max),e=0):this.max<0&&(r=this.max,e<0?e=0:this._getIncrement(1,r-i)>this.max?r-=2*i:r-=i);const o=this._getIncrement(e,r);(!this.value||e===0||this._incrementIsInsideTheLimits(e,r))&&(this.inputElement.value=String(parseFloat(o)),this.inputElement.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),this.__commitValueChange())}_getIncrement(e,i){let r=this.step||1,o=this.min||0;const n=Math.max(this._getMultiplier(i),this._getMultiplier(r),this._getMultiplier(o));r*=n,i=Math.round(i*n),o*=n;const a=(i-o)%r;return e>0?(i-a+r)/n:e<0?(i-(a||r))/n:i/n}_getDecimalCount(e){const i=String(e),r=i.indexOf(".");return r===-1?1:i.length-r-1}_getMultiplier(e){if(!isNaN(e))return 10**this._getDecimalCount(e)}_incrementIsInsideTheLimits(e,i){return e<0?this.min==null||this._getIncrement(e,i)>=this.min:e>0?this.max==null||this._getIncrement(e,i)<=this.max:this._getIncrement(e,i)<=this.max&&this._getIncrement(e,i)>=this.min}_isButtonEnabled(e){const i=e*(this.step||1),r=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(i,r)}_stepChanged(e,i){i&&(i.step=e||"any")}_valueChanged(e,i){e&&isNaN(parseFloat(e))?this.value="":typeof this.value!="string"&&(this.value=String(this.value)),super._valueChanged(this.value,i),this.__keepCommittedValue||(this.__committedValue=this.value,this.__committedUnparsableValueStatus=!1)}_onKeyDown(e){e.key==="ArrowUp"?(e.preventDefault(),this._increaseValue()):e.key==="ArrowDown"&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}_setHasInputValue(e){const i=e.composedPath()[0];this._hasInputValue=i.value.length>0||this.__hasUnparsableValue}_onInput(e){this.__keepCommittedValue=!0,super._onInput(e),this.__keepCommittedValue=!1}_onChange(e){e.stopPropagation()}_onClearAction(e){super._onClearAction(e),this.__commitValueChange()}_setFocused(e){super._setFocused(e),e||this.__commitValueChange()}_onEnter(e){super._onEnter(e),this.__commitValueChange()}__commitValueChange(){this.__committedValue!==this.value?(this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))):this.__committedUnparsableValueStatus!==this.__hasUnparsableValue&&(this.validate(),this.dispatchEvent(new CustomEvent("unparsable-change"))),this.__committedValue=this.value,this.__committedUnparsableValueStatus=this.__hasUnparsableValue}};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Lg=S`
  :host([readonly]) [part$='button'] {
    pointer-events: none;
  }

  [part='decrease-button']::before {
    content: '\\2212';
  }

  [part='increase-button']::before {
    content: '+';
  }

  [part='decrease-button'],
  [part='increase-button'] {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }
`;/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-number-field",[an,Lg],{moduleId:"vaadin-number-field-styles"});class $g extends Fg(ve(qe(ie))){static get is(){return"vaadin-number-field"}static get template(){return ae`
      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <div
            disabled$="[[!_isButtonEnabled(-1, value, min, max, step)]]"
            part="decrease-button"
            on-click="_onDecreaseButtonClick"
            on-touchend="_onDecreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="prefix"
          ></div>
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div
            disabled$="[[!_isButtonEnabled(1, value, min, max, step)]]"
            part="increase-button"
            on-click="_onIncreaseButtonClick"
            on-touchend="_onIncreaseButtonTouchend"
            hidden$="[[!stepButtonsVisible]]"
            aria-hidden="true"
            slot="suffix"
          ></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <slot name="tooltip"></slot>
    `}ready(){super.ready(),this._tooltipController=new Ui(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement)}}Z($g);/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-text-field",tr,{moduleId:"lumo-text-field-styles"});/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Hg=s=>class extends mc(s){static get properties(){return{maxlength:{type:Number},minlength:{type:Number},pattern:{type:String}}}static get delegateAttrs(){return[...super.delegateAttrs,"maxlength","minlength","pattern"]}static get constraints(){return[...super.constraints,"maxlength","minlength","pattern"]}constructor(){super(),this._setType("text")}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new ln(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new cn(this.inputElement,this._labelController))}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-text-field",an,{moduleId:"vaadin-text-field-styles"});class Bg extends Hg(ve(qe(ie))){static get is(){return"vaadin-text-field"}static get template(){return ae`
      <style>
        [part='input-field'] {
          flex-grow: 0;
        }
      </style>

      <div class="vaadin-field-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <slot name="suffix" slot="suffix"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>
      <slot name="tooltip"></slot>
    `}static get properties(){return{maxlength:{type:Number},minlength:{type:Number}}}ready(){super.ready(),this._tooltipController=new Ui(this),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this.addController(this._tooltipController)}}Z(Bg);F("vaadin-overlay",Vi,{moduleId:"lumo-vaadin-overlay"});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let uo=!1,Vg=[],_c=[];function Ug(){uo=!0,requestAnimationFrame(function(){uo=!1,Wg(Vg),setTimeout(function(){jg(_c)})})}function Wg(s){for(;s.length;)gc(s.shift())}function jg(s){for(let t=0,e=s.length;t<e;t++)gc(s.shift())}function gc(s){const t=s[0],e=s[1],i=s[2];try{e.apply(t,i)}catch(r){setTimeout(()=>{throw r})}}function vc(s,t,e){uo||Ug(),_c.push([s,t,e])}/**
 * @license
 * Copyright (c) 2017 Anton Korzunov
 * SPDX-License-Identifier: MIT
 */let Rt=new WeakMap,rs=new WeakMap,os={},kr=0;const Xa=s=>s&&s.nodeType===Node.ELEMENT_NODE,Dr=(...s)=>{console.error(`Error: ${s.join(" ")}. Skip setting aria-hidden.`)},Yg=(s,t)=>Xa(s)?t.map(e=>{if(!Xa(e))return Dr(e,"is not a valid element"),null;let i=e;for(;i&&i!==s;){if(s.contains(i))return e;i=i.getRootNode().host}return Dr(e,"is not contained inside",s),null}).filter(e=>!!e):(Dr(s,"is not a valid element"),[]),Gg=(s,t,e,i)=>{const r=Yg(t,Array.isArray(s)?s:[s]);os[e]||(os[e]=new WeakMap);const o=os[e],n=[],a=new Set,l=new Set(r),d=h=>{if(!h||a.has(h))return;a.add(h);const f=h.assignedSlot;f&&d(f),d(h.parentNode||h.host)};r.forEach(d);const c=h=>{if(!h||l.has(h))return;const f=h.shadowRoot;(f?[...h.children,...f.children]:[...h.children]).forEach(E=>{if(!["template","script","style"].includes(E.localName))if(a.has(E))c(E);else{const P=E.getAttribute(i),L=P!==null&&P!=="false",T=(Rt.get(E)||0)+1,z=(o.get(E)||0)+1;Rt.set(E,T),o.set(E,z),n.push(E),T===1&&L&&rs.set(E,!0),z===1&&E.setAttribute(e,"true"),L||E.setAttribute(i,"true")}})};return c(t),a.clear(),kr+=1,()=>{n.forEach(h=>{const f=Rt.get(h)-1,_=o.get(h)-1;Rt.set(h,f),o.set(h,_),f||(rs.has(h)?rs.delete(h):h.removeAttribute(i)),_||h.removeAttribute(e)}),kr-=1,kr||(Rt=new WeakMap,Rt=new WeakMap,rs=new WeakMap,os={})}},bc=(s,t=document.body,e="data-aria-hidden")=>{const i=Array.from(Array.isArray(s)?s:[s]);return t&&i.push(...Array.from(t.querySelectorAll("[aria-live]"))),Gg(i,t,e,"aria-hidden")};/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class qg{constructor(t,e){this.host=t,this.callback=typeof e=="function"?e:()=>t}showModal(){const t=this.callback();this.__showOthers=bc(t)}close(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null)}}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kg=s=>class extends ht(s){static get properties(){return{focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},restoreFocusNode:{type:HTMLElement}}}constructor(){super(),this.__ariaModalController=new qg(this),this.__focusTrapController=new ng(this),this.__focusRestorationController=new ag}ready(){super.ready(),this.addController(this.__ariaModalController),this.addController(this.__focusTrapController),this.addController(this.__focusRestorationController)}_resetFocus(){this.focusTrap&&(this.__ariaModalController.close(),this.__focusTrapController.releaseFocus()),this.restoreFocusOnClose&&this._shouldRestoreFocus()&&this.__focusRestorationController.restoreFocus()}_saveFocus(){this.restoreFocusOnClose&&this.__focusRestorationController.saveFocus(this.restoreFocusNode)}_trapFocus(){this.focusTrap&&(this.__ariaModalController.showModal(),this.__focusTrapController.trapFocus(this.$.overlay))}_shouldRestoreFocus(){const e=lo();return e===document.body||this._deepContains(e)}_deepContains(e){if(this.contains(e))return!0;let i=e;const r=e.ownerDocument;for(;i&&i!==r&&i!==this;)i=i.parentNode||i.host;return i===this}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ms=()=>Array.from(document.body.children).filter(s=>s instanceof HTMLElement&&s._hasOverlayStackMixin&&!s.hasAttribute("closing")).sort((s,t)=>s.__zIndex-t.__zIndex||0),Xg=s=>s===ms().pop(),Jg=s=>class extends s{constructor(){super(),this._hasOverlayStackMixin=!0}get _last(){return Xg(this)}bringToFront(){let e="";const i=ms().filter(r=>r!==this).pop();i&&(e=i.__zIndex+1),this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}_enterModalState(){document.body.style.pointerEvents!=="none"&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),ms().forEach(e=>{e!==this&&(e.$.overlay.style.pointerEvents="none")})}_exitModalState(){this._previousDocumentPointerEvents!==void 0&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);const e=ms();let i;for(;(i=e.pop())&&!(i!==this&&(i.$.overlay.style.removeProperty("pointer-events"),!i.modeless)););}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ir=s=>class extends Kg(Jg(s)){static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:{type:Object},model:{type:Object},renderer:{type:Object},modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_rendererOrDataChanged(renderer, owner, model, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),Ss&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{}),this.addEventListener("mouseup",()=>{document.activeElement===document.body&&this.$.overlay.getAttribute("tabindex")==="0"&&this.$.overlay.focus()})}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}requestContentUpdate(){this.renderer&&this.renderer.call(this.owner,this,this.owner,this.model)}close(e){const i=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(i),i.defaultPrevented||(this.opened=!1)}_detectIosNavbar(){if(!this.opened)return;const e=window.innerHeight,r=window.innerWidth>e,o=document.documentElement.clientHeight;r&&o>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",`${o-e}px`):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0)}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0)}_rendererOrDataChanged(e,i,r,o){const n=this._oldOwner!==i||this._oldModel!==r;this._oldModel=r,this._oldOwner=i;const a=this._oldRenderer!==e,l=this._oldRenderer!==void 0;this._oldRenderer=e;const d=this._oldOpened!==o;this._oldOpened=o,a&&l&&(this.innerHTML="",delete this._$litPart$),o&&e&&(a||d||n)&&this.requestContentUpdate()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_openedChanged(e,i){e?(this._saveFocus(),this._animatedOpening(),vc(this,()=>{this._trapFocus();const r=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(r)}),document.addEventListener("keydown",this._boundKeydownListener),this.modeless||this._addGlobalListeners()):i&&(this._resetFocus(),this._animatedClosing(),document.removeEventListener("keydown",this._boundKeydownListener),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){const e=getComputedStyle(this),i=e.getPropertyValue("animation-name");return!(e.getPropertyValue("display")==="none")&&i&&i!=="none"}_enqueueAnimation(e,i){const r=`__${e}Handler`,o=n=>{n&&n.target!==this||(i(),this.removeEventListener("animationend",o),delete this[r])};this[r]=o,this.addEventListener("animationend",o)}_flushAnimation(e){const i=`__${e}Handler`;typeof this[i]=="function"&&this[i]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening",""),this._shouldAnimate()?this._enqueueAnimation("opening",()=>{this._finishOpening()}):this._finishOpening()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_finishOpening(){this.removeAttribute("opening")}_finishClosing(){this._detachOverlay(),this.$.overlay.style.removeProperty("pointer-events"),this.removeAttribute("closing"),this.dispatchEvent(new CustomEvent("vaadin-overlay-closed"))}_animatedClosing(){this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder&&(this._exitModalState(),this.setAttribute("closing",""),this.dispatchEvent(new CustomEvent("vaadin-overlay-closing")),this._shouldAnimate()?this._enqueueAnimation("closing",()=>{this._finishClosing()}):this._finishClosing())}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_shouldCloseOnOutsideClick(e){return this._last}_outsideClickListener(e){if(e.composedPath().includes(this.$.overlay)||this._mouseDownInside||this._mouseUpInside){this._mouseDownInside=!1,this._mouseUpInside=!1;return}if(!this._shouldCloseOnOutsideClick(e))return;const i=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(i),this.opened&&!i.defaultPrevented&&this.close(e)}_keydownListener(e){if(this._last&&!(this.modeless&&!e.composedPath().includes(this.$.overlay))&&e.key==="Escape"){const i=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(i),this.opened&&!i.defaultPrevented&&this.close(e)}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sr=S`
  :host {
    z-index: 200;
    position: fixed;

    /* Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part. */

    /* Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport. */
    inset: 0;
    bottom: var(--vaadin-overlay-viewport-bottom);

    /* Use flexbox alignment for the overlay part. */
    display: flex;
    flex-direction: column; /* makes dropdowns sizing easier */
    /* Align to center by default. */
    align-items: center;
    justify-content: center;

    /* Allow centering when max-width/max-height applies. */
    margin: auto;

    /* The host is not clickable, only the overlay part is. */
    pointer-events: none;

    /* Remove tap highlight on touch devices. */
    -webkit-tap-highlight-color: transparent;

    /* CSS API for host */
    --vaadin-overlay-viewport-bottom: 0;
  }

  :host([hidden]),
  :host(:not([opened]):not([closing])),
  :host(:not([opened]):not([closing])) [part='overlay'] {
    display: none !important;
  }

  [part='overlay'] {
    -webkit-overflow-scrolling: touch;
    overflow: auto;
    pointer-events: auto;

    /* Prevent overflowing the host */
    max-width: 100%;
    box-sizing: border-box;

    -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
  }

  [part='backdrop'] {
    z-index: -1;
    content: '';
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    inset: 0;
    pointer-events: auto;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-overlay",sr,{moduleId:"vaadin-overlay-styles"});class Qg extends ir(ve(ct(ie))){static get template(){return ae`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}static get is(){return"vaadin-overlay"}ready(){super.ready(),Xs(this)}}Z(Qg);const yc=S`
  /* Optical centering */
  :host::before,
  :host::after {
    content: '';
    flex-basis: 0;
    flex-grow: 1;
  }

  :host::after {
    flex-grow: 1.1;
  }

  [part='overlay'] {
    border-radius: var(--lumo-border-radius-l);
    box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
    background-image: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  [part='content'] {
    padding: var(--lumo-space-l);
  }

  :host(:is([has-header], [has-title])) [part='header'] + [part='content'] {
    padding-top: 0;
  }

  [part='header'],
  [part='header-content'],
  [part='footer'] {
    gap: var(--lumo-space-xs) var(--lumo-space-s);
    line-height: var(--lumo-line-height-s);
  }

  [part='header'] {
    padding: var(--lumo-space-m);
    background-color: var(--lumo-base-color);
    border-radius: var(--lumo-border-radius-l) var(--lumo-border-radius-l) 0 0; /* Needed for Safari */
  }

  [part='footer'] {
    padding: var(--lumo-space-s) var(--lumo-space-m);
    background-color: var(--lumo-contrast-5pct);
    border-radius: 0 0 var(--lumo-border-radius-l) var(--lumo-border-radius-l); /* Needed for Safari */
  }

  [part='title'] {
    font-size: var(--lumo-font-size-xl);
    font-weight: 600;
    color: var(--lumo-header-text-color);
    margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
  }

  /* No padding */
  :host([theme~='no-padding']) [part='content'] {
    padding: 0 !important;
  }

  @media (min-height: 320px) {
    :host([overflow~='top']) [part='header'] {
      box-shadow: 0 1px 0 0 var(--lumo-contrast-10pct);
    }
  }

  /* Animations */

  :host([opening]),
  :host([closing]) {
    animation: 0.25s lumo-overlay-dummy-animation;
  }

  :host([opening]) [part='overlay'] {
    animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @keyframes vaadin-dialog-enter {
    0% {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :host([closing]) [part='overlay'] {
    animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(0.55, 0.055, 0.675, 0.19) both;
  }

  :host([closing]) [part='backdrop'] {
    animation-delay: 0.05s;
  }

  @keyframes vaadin-dialog-exit {
    100% {
      opacity: 0;
      transform: scale(1.02);
    }
  }
`;F("vaadin-dialog-overlay",[Vi,yc],{moduleId:"lumo-dialog"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Zg=s=>class extends ir(s){static get properties(){return{headerTitle:{type:String},headerRenderer:{type:Object},footerRenderer:{type:Object}}}static get observers(){return["_headerFooterRendererChange(headerRenderer, footerRenderer, opened)","_headerTitleChanged(headerTitle, opened)"]}ready(){super.ready(),this.__resizeObserver=new ResizeObserver(()=>{this.__updateOverflow()}),this.__resizeObserver.observe(this.$.resizerContainer),this.$.content.addEventListener("scroll",()=>{this.__updateOverflow()})}__createContainer(e){const i=document.createElement("div");return i.setAttribute("slot",e),i}__clearContainer(e){e.innerHTML="",delete e._$litPart$}__initContainer(e,i){return e?this.__clearContainer(e):e=this.__createContainer(i),e}_headerFooterRendererChange(e,i,r){const o=this.__oldHeaderRenderer!==e;this.__oldHeaderRenderer=e;const n=this.__oldFooterRenderer!==i;this.__oldFooterRenderer=i;const a=this._oldOpenedFooterHeader!==r;this._oldOpenedFooterHeader=r,this.toggleAttribute("has-header",!!e),this.toggleAttribute("has-footer",!!i),o&&(e?this.headerContainer=this.__initContainer(this.headerContainer,"header-content"):this.headerContainer&&(this.headerContainer.remove(),this.headerContainer=null,this.__updateOverflow())),n&&(i?this.footerContainer=this.__initContainer(this.footerContainer,"footer"):this.footerContainer&&(this.footerContainer.remove(),this.footerContainer=null,this.__updateOverflow())),(e&&(o||a)||i&&(n||a))&&r&&this.requestContentUpdate()}_headerTitleChanged(e,i){this.toggleAttribute("has-title",!!e),i&&(e||this._oldHeaderTitle)&&this.requestContentUpdate(),this._oldHeaderTitle=e}_headerTitleRenderer(){this.headerTitle?(this.headerTitleElement||(this.headerTitleElement=document.createElement("h2"),this.headerTitleElement.setAttribute("slot","title"),this.headerTitleElement.classList.add("draggable")),this.appendChild(this.headerTitleElement),this.headerTitleElement.textContent=this.headerTitle):this.headerTitleElement&&(this.headerTitleElement.remove(),this.headerTitleElement=null)}requestContentUpdate(){super.requestContentUpdate(),this.headerContainer&&(this.headerContainer.parentElement||this.appendChild(this.headerContainer),this.headerRenderer&&this.headerRenderer.call(this.owner,this.headerContainer,this.owner)),this.footerContainer&&(this.footerContainer.parentElement||this.appendChild(this.footerContainer),this.footerRenderer&&this.footerRenderer.call(this.owner,this.footerContainer,this.owner)),this._headerTitleRenderer(),this.__updateOverflow()}setBounds(e){const i=this.$.overlay,r={...e};i.style.position!=="absolute"&&(i.style.position="absolute",this.setAttribute("has-bounds-set","")),Object.keys(r).forEach(o=>{typeof r[o]=="number"&&(r[o]=`${r[o]}px`)}),Object.assign(i.style,r)}getBounds(){const e=this.$.overlay.getBoundingClientRect(),i=this.getBoundingClientRect(),r=e.top-i.top,o=e.left-i.left,n=e.width,a=e.height;return{top:r,left:o,width:n,height:a}}__updateOverflow(){let e="";if(this.hasAttribute("has-header")||this.hasAttribute("has-footer")||this.headerTitle){const r=this.$.content;r.scrollTop>0&&(e+=" top"),r.scrollTop<r.scrollHeight-r.clientHeight&&(e+=" bottom")}const i=e.trim();i.length>0&&this.getAttribute("overflow")!==i?this.setAttribute("overflow",i):i.length===0&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xc=S`
  [part='header'],
  [part='header-content'],
  [part='footer'] {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex: none;
    pointer-events: none;
    z-index: 1;
  }

  [part='header'] {
    flex-wrap: nowrap;
  }

  ::slotted([slot='header-content']),
  ::slotted([slot='title']),
  ::slotted([slot='footer']) {
    display: contents;
    pointer-events: auto;
  }

  ::slotted([slot='title']) {
    font: inherit !important;
    overflow-wrap: anywhere;
  }

  [part='header-content'] {
    flex: 1;
  }

  :host([has-title]) [part='header-content'],
  [part='footer'] {
    justify-content: flex-end;
  }

  :host(:not([has-title]):not([has-header])) [part='header'],
  :host(:not([has-header])) [part='header-content'],
  :host(:not([has-title])) [part='title'],
  :host(:not([has-footer])) [part='footer'] {
    display: none !important;
  }

  :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
    height: auto;
  }

  @media (min-height: 320px) {
    :host(:is([has-title], [has-header], [has-footer])) .resizer-container {
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    :host(:is([has-title], [has-header], [has-footer])) [part='content'] {
      flex: 1;
      overflow: auto;
    }
  }

  /*
      NOTE(platosha): Make some min-width to prevent collapsing of the content
      taking the parent width, e. g., <vaadin-grid> and such.
    */
  [part='content'] {
    min-width: 12em; /* matches the default <vaadin-text-field> width */
  }

  :host([has-bounds-set]) [part='overlay'] {
    max-width: none;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid !important;
    }
  }
`,ev=S`
  [part='overlay'] {
    position: relative;
    overflow: visible;
    max-height: 100%;
    display: flex;
  }

  [part='content'] {
    box-sizing: border-box;
    height: 100%;
  }

  .resizer-container {
    overflow: auto;
    flex-grow: 1;
    border-radius: inherit; /* prevent child elements being drawn outside part=overlay */
  }

  [part='overlay'][style] .resizer-container {
    min-height: 100%;
    width: 100%;
  }

  :host(:not([resizable])) .resizer {
    display: none;
  }

  :host([resizable]) [part='title'] {
    cursor: move;
    -webkit-user-select: none;
    user-select: none;
  }

  .resizer {
    position: absolute;
    height: 16px;
    width: 16px;
  }

  .resizer.edge {
    height: 8px;
    width: 8px;
    inset: -4px;
  }

  .resizer.edge.n {
    width: auto;
    bottom: auto;
    cursor: ns-resize;
  }

  .resizer.ne {
    top: -4px;
    right: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.e {
    height: auto;
    left: auto;
    cursor: ew-resize;
  }

  .resizer.se {
    bottom: -4px;
    right: -4px;
    cursor: nwse-resize;
  }

  .resizer.edge.s {
    width: auto;
    top: auto;
    cursor: ns-resize;
  }

  .resizer.sw {
    bottom: -4px;
    left: -4px;
    cursor: nesw-resize;
  }

  .resizer.edge.w {
    height: auto;
    right: auto;
    cursor: ew-resize;
  }

  .resizer.nw {
    top: -4px;
    left: -4px;
    cursor: nwse-resize;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-dialog-overlay",[sr,xc,ev],{moduleId:"vaadin-dialog-overlay-styles"});class tv extends Zg(ct(ve(ie))){static get is(){return"vaadin-dialog-overlay"}static get template(){return ae`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <section id="resizerContainer" class="resizer-container">
          <header part="header">
            <div part="title"><slot name="title"></slot></div>
            <div part="header-content"><slot name="header-content"></slot></div>
          </header>
          <div part="content" id="content"><slot></slot></div>
          <footer part="footer"><slot name="footer"></slot></footer>
        </section>
      </div>
    `}}Z(tv);/**
 * @license
 * Copyright (c) 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const hn=s=>class extends s{static get properties(){return{overlayClass:{type:String},_overlayElement:{type:Object}}}static get observers(){return["__updateOverlayClassNames(overlayClass, _overlayElement)"]}__updateOverlayClassNames(e,i){if(!i||e===void 0)return;const{classList:r}=i;if(this.__initialClasses||(this.__initialClasses=new Set(r)),Array.isArray(this.__previousClasses)){const n=this.__previousClasses.filter(a=>!this.__initialClasses.has(a));n.length>0&&r.remove(...n)}const o=typeof e=="string"?e.split(" ").filter(Boolean):[];o.length>0&&r.add(...o),this.__previousClasses=o}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cc=s=>class extends s{static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},modeless:{type:Boolean,value:!1}}}ready(){super.ready();const e=this.$.overlay;e.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),e.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._overlayElement=e}connectedCallback(){super.connectedCallback(),this.__restoreOpened&&(this.opened=!0)}disconnectedCallback(){super.disconnectedCallback(),setTimeout(()=>{this.isConnected||(this.__restoreOpened=this.opened,this.opened=!1)})}_onOverlayOpened(e){e.detail.value===!1&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}_bringOverlayToFront(){this.modeless&&this._overlayElement.bringToFront()}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function Is(s){return s.touches?s.touches[0]:s}function wc(s){return s.clientX>=0&&s.clientX<=window.innerWidth&&s.clientY>=0&&s.clientY<=window.innerHeight}/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const iv=s=>class extends s{static get properties(){return{draggable:{type:Boolean,value:!1,reflectToAttribute:!0},_touchDevice:{type:Boolean,value:Zs},__dragHandleClassName:{type:String}}}async ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),await new Promise(requestAnimationFrame),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!(e.type==="touchstart"&&e.touches.length>1)&&this.draggable&&(e.button===0||e.touches)){const i=this.$.overlay.$.resizerContainer,r=e.target===i,o=e.offsetX>i.clientWidth||e.offsetY>i.clientHeight,n=e.target===this.$.overlay.$.content,a=e.composedPath().some((l,d)=>{if(!l.classList)return!1;const c=l.classList.contains(this.__dragHandleClassName||"draggable"),h=l.classList.contains("draggable-leaf-only"),f=d===0;return h&&f||c&&(!h||f)});if(r&&!o||n||a){a||e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const l=Is(e);this._originalMouseCoords={top:l.pageY,left:l.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}}_drag(e){const i=Is(e);if(wc(i)){const r=this._originalBounds.top+(i.pageY-this._originalMouseCoords.top),o=this._originalBounds.left+(i.pageX-this._originalMouseCoords.left);this.$.overlay.setBounds({top:r,left:o})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const sv=s=>class extends s{static get properties(){return{renderer:{type:Object},headerTitle:String,headerRenderer:{type:Object},footerRenderer:{type:Object}}}requestContentUpdate(){this._overlayElement&&this._overlayElement.requestContentUpdate()}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const rv=s=>class extends s{static get properties(){return{resizable:{type:Boolean,value:!1,reflectToAttribute:!0}}}async ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},await new Promise(requestAnimationFrame),this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{const i=document.createElement("div");this._resizeListeners.start[e]=r=>this._startResize(r,e),this._resizeListeners.resize[e]=r=>this._resize(r,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),e.length===1&&i.classList.add("edge"),i.classList.add("resizer"),i.classList.add(e),i.addEventListener("mousedown",this._resizeListeners.start[e]),i.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(i)})}_startResize(e,i){if(!(e.type==="touchstart"&&e.touches.length>1)&&(e.button===0||e.touches)){e.preventDefault(),this._originalBounds=this.$.overlay.getBounds();const r=Is(e);this._originalMouseCoords={top:r.pageY,left:r.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[i]),window.addEventListener("touchmove",this._resizeListeners.resize[i]),window.addEventListener("mouseup",this._resizeListeners.stop[i]),window.addEventListener("touchend",this._resizeListeners.stop[i]),this.$.overlay.$.overlay.style.position!=="absolute"&&this.$.overlay.setBounds(this._originalBounds)}}_resize(e,i){const r=Is(e);wc(r)&&i.split("").forEach(n=>{switch(n){case"n":{const a=this._originalBounds.height-(r.pageY-this._originalMouseCoords.top),l=this._originalBounds.top+(r.pageY-this._originalMouseCoords.top);a>40&&this.$.overlay.setBounds({top:l,height:a});break}case"e":{const a=this._originalBounds.width+(r.pageX-this._originalMouseCoords.left);a>40&&this.$.overlay.setBounds({width:a});break}case"s":{const a=this._originalBounds.height+(r.pageY-this._originalMouseCoords.top);a>40&&this.$.overlay.setBounds({height:a});break}case"w":{const a=this._originalBounds.width-(r.pageX-this._originalMouseCoords.left),l=this._originalBounds.left+(r.pageX-this._originalMouseCoords.left);a>40&&this.$.overlay.setBounds({left:l,width:a});break}}})}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){const e=this.$.overlay.$.resizerContainer.scrollTop,{width:i,height:r}=getComputedStyle(this.$.overlay.$.overlay),o=this.$.overlay.$.content;o.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");const{width:n,height:a}=getComputedStyle(o);return o.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:i,height:r,contentWidth:n,contentHeight:a}}};/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class ov extends iv(rv(sv(Cc(hn(Ws(qe(ie))))))){static get template(){return ae`
      <style>
        :host {
          display: none !important;
        }
      </style>

      <vaadin-dialog-overlay
        id="overlay"
        header-title="[[headerTitle]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        restore-focus-on-close
        focus-trap
      ></vaadin-dialog-overlay>
    `}static get is(){return"vaadin-dialog"}static get properties(){return{ariaLabel:{type:String,value:""}}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel, headerTitle)","_rendererChanged(renderer, headerRenderer, footerRenderer)"]}ready(){super.ready(),this._overlayElement.setAttribute("role","dialog"),Xs(this)}_rendererChanged(t,e,i){this.$.overlay.setProperties({owner:this,renderer:t,headerRenderer:e,footerRenderer:i})}_openedChanged(t){this.$.overlay.opened=t}_ariaLabelChanged(t,e){t||e?this.$.overlay.setAttribute("aria-label",t||e):this.$.overlay.removeAttribute("aria-label")}}Z(ov);F("vaadin-confirm-dialog-overlay",[Vi,yc,S`
      [part='header'] ::slotted(h3) {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        margin-inline-start: calc(var(--lumo-space-l) - var(--lumo-space-m));
      }

      [part='message'] {
        width: 25em;
        min-width: 100%;
        max-width: 100%;
      }

      ::slotted([slot$='button'][theme~='tertiary']) {
        padding-left: var(--lumo-space-s);
        padding-right: var(--lumo-space-s);
      }

      [part='cancel-button'] {
        flex-grow: 1;
      }

      @media (max-width: 360px) {
        [part='footer'] {
          flex-direction: column-reverse;
          align-items: stretch;
          padding: var(--lumo-space-s) var(--lumo-space-l);
          gap: var(--lumo-space-s);
        }

        ::slotted([slot$='button']) {
          width: 100%;
          margin: 0;
        }
      }
    `],{moduleId:"lumo-confirm-dialog-overlay"});/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const nv=s=>class extends s{static get properties(){return{ariaLabel:{type:String,value:""},contentHeight:{type:String},contentWidth:{type:String}}}static get observers(){return["__updateContentHeight(contentHeight, _overlayElement)","__updateContentWidth(contentWidth, _overlayElement)"]}__updateDimension(e,i,r){const o=`--_vaadin-confirm-dialog-content-${i}`;r?e.style.setProperty(o,r):e.style.removeProperty(o)}__updateContentHeight(e,i){i&&this.__updateDimension(i,"height",e)}__updateContentWidth(e,i){i&&this.__updateDimension(i,"width",e)}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const av=S`
  :host {
    --_vaadin-confirm-dialog-content-width: auto;
    --_vaadin-confirm-dialog-content-height: auto;
  }

  [part='overlay'] {
    width: var(--_vaadin-confirm-dialog-content-width);
    height: var(--_vaadin-confirm-dialog-content-height);
  }

  ::slotted([slot='header']) {
    pointer-events: auto;
  }

  /* Make buttons clickable */
  [part='footer'] > * {
    pointer-events: all;
  }
`;/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-confirm-dialog-overlay",[sr,xc,av],{moduleId:"vaadin-confirm-dialog-overlay-styles"});class lv extends ir(ct(ve(ie))){static get is(){return"vaadin-confirm-dialog-overlay"}static get template(){return ae`
      <div part="backdrop" id="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay" tabindex="0">
        <section id="resizerContainer" class="resizer-container">
          <header part="header"><slot name="header"></slot></header>
          <div part="content" id="content">
            <div part="message"><slot></slot></div>
          </div>
          <footer part="footer" role="toolbar">
            <div part="cancel-button">
              <slot name="cancel-button"></slot>
            </div>
            <div part="reject-button">
              <slot name="reject-button"></slot>
            </div>
            <div part="confirm-button">
              <slot name="confirm-button"></slot>
            </div>
          </footer>
        </section>
      </div>
    `}ready(){super.ready(),this.setAttribute("has-header",""),this.setAttribute("has-footer","")}}Z(lv);class dv extends nv(Cc(hn(Ws(ie)))){static get is(){return"vaadin-confirm-dialog-dialog"}static get template(){return ae`
      <style>
        :host {
          display: none;
        }
      </style>

      <vaadin-confirm-dialog-overlay
        id="overlay"
        opened="[[opened]]"
        on-opened-changed="_onOverlayOpened"
        on-mousedown="_bringOverlayToFront"
        on-touchstart="_bringOverlayToFront"
        theme$="[[_theme]]"
        modeless="[[modeless]]"
        with-backdrop="[[!modeless]]"
        resizable$="[[resizable]]"
        aria-label$="[[ariaLabel]]"
        restore-focus-on-close
        focus-trap
      ></vaadin-confirm-dialog-overlay>
    `}}Z(dv);/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const cv=s=>class extends s{static get properties(){return{accessibleDescriptionRef:{type:String},opened:{type:Boolean,value:!1,notify:!0},header:{type:String,value:""},message:{type:String,value:""},confirmText:{type:String,value:"Confirm"},confirmTheme:{type:String,value:"primary"},noCloseOnEsc:{type:Boolean,value:!1},rejectButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},rejectText:{type:String,value:"Reject"},rejectTheme:{type:String,value:"error tertiary"},cancelButtonVisible:{type:Boolean,reflectToAttribute:!0,value:!1},cancelText:{type:String,value:"Cancel"},cancelTheme:{type:String,value:"tertiary"},overlayClass:{type:String},_cancelButton:{type:Object},_confirmButton:{type:Object},_headerNode:{type:Object},_messageNodes:{type:Array,value:()=>[]},_overlayElement:{type:Object,sync:!0},_rejectButton:{type:Object},_contentHeight:{type:String},_contentWidth:{type:String}}}static get observers(){return["__updateConfirmButton(_confirmButton, confirmText, confirmTheme)","__updateCancelButton(_cancelButton, cancelText, cancelTheme, cancelButtonVisible)","__updateHeaderNode(_headerNode, header)","__updateMessageNodes(_messageNodes, message)","__updateRejectButton(_rejectButton, rejectText, rejectTheme, rejectButtonVisible)","__accessibleDescriptionRefChanged(_overlayElement, _messageNodes, accessibleDescriptionRef)"]}constructor(){super(),this.__cancel=this.__cancel.bind(this),this.__confirm=this.__confirm.bind(this),this.__reject=this.__reject.bind(this)}get __slottedNodes(){return[this._headerNode,...this._messageNodes,this._cancelButton,this._confirmButton,this._rejectButton]}ready(){super.ready(),this._headerController=new we(this,"header","h3",{initializer:e=>{this._headerNode=e}}),this.addController(this._headerController),this._messageController=new we(this,"","div",{multiple:!0,observe:!1,initializer:e=>{const i=document.createElement("div");i.style.display="contents";const r=`confirm-dialog-message-${qo()}`;i.id=r,this.appendChild(i),i.appendChild(e),this._messageNodes=[...this._messageNodes,i]}}),this.addController(this._messageController),this._cancelController=new we(this,"cancel-button","vaadin-button",{initializer:e=>{this.__setupSlottedButton("cancel",e)}}),this.addController(this._cancelController),this._rejectController=new we(this,"reject-button","vaadin-button",{initializer:e=>{this.__setupSlottedButton("reject",e)}}),this.addController(this._rejectController),this._confirmController=new we(this,"confirm-button","vaadin-button",{initializer:e=>{this.__setupSlottedButton("confirm",e)}}),this.addController(this._confirmController)}_initOverlay(e){e.addEventListener("vaadin-overlay-escape-press",this._escPressed.bind(this)),e.addEventListener("vaadin-overlay-open",()=>this.__onDialogOpened()),e.addEventListener("vaadin-overlay-closed",()=>this.__onDialogClosed()),e.setAttribute("role","alertdialog")}__onDialogOpened(){const e=this._overlayElement;this.__slottedNodes.forEach(r=>{e.appendChild(r)});const i=e.querySelector('[slot="confirm-button"]');i&&i.focus()}__onDialogClosed(){this.__slottedNodes.forEach(e=>{this.appendChild(e)})}__accessibleDescriptionRefChanged(e,i,r){!e||!i||(r!==void 0?yi(e,"aria-describedby",{newId:r,oldId:this.__oldAccessibleDescriptionRef,fromUser:!0}):i.forEach(o=>{yi(e,"aria-describedby",{newId:o.id})}),this.__oldAccessibleDescriptionRef=r)}__setupSlottedButton(e,i){const r=`_${e}Button`,o=`__${e}`;this[r]&&this[r]!==i&&this[r].remove(),i.addEventListener("click",this[o]),this[r]=i}__updateCancelButton(e,i,r,o){e&&(e===this._cancelController.defaultNode&&(e.textContent=i,e.setAttribute("theme",r)),e.toggleAttribute("hidden",!o))}__updateConfirmButton(e,i,r){e&&e===this._confirmController.defaultNode&&(e.textContent=i,e.setAttribute("theme",r))}__updateHeaderNode(e,i){e&&e===this._headerController.defaultNode&&(e.textContent=i)}__updateMessageNodes(e,i){if(e&&e.length>0){const r=e.find(o=>this._messageController.defaultNode&&o===this._messageController.defaultNode.parentElement);r&&(r.firstChild.textContent=i)}}__updateRejectButton(e,i,r,o){e&&(e===this._rejectController.defaultNode&&(e.textContent=i,e.setAttribute("theme",r)),e.toggleAttribute("hidden",!o))}_escPressed(e){e.defaultPrevented||this.__cancel()}__confirm(){this.dispatchEvent(new CustomEvent("confirm")),this.opened=!1}__cancel(){this.dispatchEvent(new CustomEvent("cancel")),this.opened=!1}__reject(){this.dispatchEvent(new CustomEvent("reject")),this.opened=!1}_getAriaLabel(e){return e||"confirmation"}};/**
 * @license
 * Copyright (c) 2018 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class hv extends cv(qe(Ws(ht(ie)))){static get template(){return ae`
      <style>
        :host,
        [hidden] {
          display: none !important;
        }
      </style>

      <vaadin-confirm-dialog-dialog
        id="dialog"
        opened="{{opened}}"
        overlay-class="[[overlayClass]]"
        aria-label="[[_getAriaLabel(header)]]"
        theme$="[[_theme]]"
        no-close-on-outside-click
        no-close-on-esc="[[noCloseOnEsc]]"
        content-height="[[_contentHeight]]"
        content-width="[[_contentWidth]]"
      ></vaadin-confirm-dialog-dialog>

      <div hidden>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="cancel-button"></slot>
        <slot name="reject-button"></slot>
        <slot name="confirm-button"></slot>
      </div>
    `}static get is(){return"vaadin-confirm-dialog"}ready(){super.ready(),this._overlayElement=this.$.dialog.$.overlay,this._initOverlay(this._overlayElement)}}Z(hv);const uv=S`
  [part='overlay'] {
    /*
  Width:
      date cell widths
    + month calendar side padding
    + year scroller width
  */
    /* prettier-ignore */
    width:
    calc(
        var(--lumo-size-m) * 7
      + var(--lumo-space-xs) * 2
      + 57px
    );
    height: 100%;
    max-height: calc(var(--lumo-size-m) * 14);
    overflow: hidden;
    -webkit-tap-highlight-color: transparent;
  }

  [part='overlay'] {
    flex-direction: column;
  }

  [part='content'] {
    padding: 0;
    height: 100%;
    overflow: hidden;
    -webkit-mask-image: none;
    mask-image: none;
  }

  :host([top-aligned]) [part~='overlay'] {
    margin-top: var(--lumo-space-xs);
  }

  :host([bottom-aligned]) [part~='overlay'] {
    margin-bottom: var(--lumo-space-xs);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay'] {
      width: 100vw;
      height: 70vh;
      max-height: 70vh;
    }
  }
`;F("vaadin-date-picker-overlay",[pd,uv],{moduleId:"lumo-date-picker-overlay"});F("vaadin-date-picker-year",S`
    :host([current]) [part='year-number'] {
      color: var(--lumo-primary-text-color);
    }

    :host(:not([current])) [part='year-number'],
    [part='year-separator'] {
      opacity: var(--_lumo-date-picker-year-opacity, 0.7);
      transition: 0.2s opacity;
    }

    [part='year-number'],
    [part='year-separator'] {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50%;
      transform: translateY(-50%);
    }

    [part='year-separator']::after {
      color: var(--lumo-disabled-text-color);
      content: '\\2022';
    }
  `,{moduleId:"lumo-date-picker-year"});F("vaadin-date-picker-overlay-content",S`
    :host {
      position: relative;
      /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
      background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
      background-size: 57px 100%;
      background-position: top right;
      background-repeat: no-repeat;
      cursor: default;
    }

    ::slotted([slot='months']) {
      /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
      /* prettier-ignore */
      --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
      --vaadin-infinite-scroller-buffer-offset: 10%;
      -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
      position: relative;
      margin-right: 57px;
    }

    ::slotted([slot='years']) {
      /* TODO get rid of fixed magic number */
      --vaadin-infinite-scroller-buffer-width: 97px;
      width: 57px;
      height: auto;
      top: 0;
      bottom: 0;
      font-size: var(--lumo-font-size-s);
      box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
      -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      cursor: var(--lumo-clickable-cursor);
    }

    ::slotted([slot='years']:hover) {
      --_lumo-date-picker-year-opacity: 1;
    }

    /* TODO unsupported selector */
    #scrollers {
      position: static;
      display: block;
    }

    /* TODO fix this in vaadin-date-picker that it adapts to the width of the year scroller */
    :host([desktop]) ::slotted([slot='months']) {
      right: auto;
    }

    /* Year scroller position indicator */
    ::slotted([slot='years'])::before {
      border: none;
      width: 1em;
      height: 1em;
      background-color: var(--lumo-base-color);
      background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      transform: translate(-75%, -50%) rotate(45deg);
      border-top-right-radius: var(--lumo-border-radius-s);
      box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
      z-index: 1;
    }

    [part='toolbar'] {
      padding: var(--lumo-space-s);
      border-bottom-left-radius: var(--lumo-border-radius-l);
      margin-right: 57px;
    }

    [part='toolbar'] ::slotted(vaadin-button) {
      margin: 0;
    }

    /* Narrow viewport mode (fullscreen) */

    :host([fullscreen]) [part='toolbar'] {
      order: -1;
      background-color: var(--lumo-base-color);
    }

    :host([fullscreen]) [part='overlay-header'] {
      order: -2;
      height: var(--lumo-size-m);
      padding: var(--lumo-space-s);
      position: absolute;
      left: 0;
      right: 0;
      justify-content: center;
    }

    :host([fullscreen]) [part='toggle-button'],
    :host([fullscreen]) [part='clear-button'],
    [part='overlay-header'] [part='label'] {
      display: none;
    }

    /* Very narrow screen (year scroller initially hidden) */

    [part='years-toggle-button'] {
      display: flex;
      align-items: center;
      height: var(--lumo-size-s);
      padding: 0 0.5em;
      border-radius: var(--lumo-border-radius-m);
      z-index: 3;
      color: var(--lumo-primary-text-color);
      font-weight: 500;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    :host([years-visible]) [part='years-toggle-button'] {
      background-color: var(--lumo-primary-color);
      color: var(--lumo-primary-contrast-color);
    }

    /* TODO magic number (same as used for media-query in vaadin-date-picker-overlay-content) */
    @media screen and (max-width: 374px) {
      :host {
        background-image: none;
      }

      [part='toolbar'],
      ::slotted([slot='months']) {
        margin-right: 0;
      }

      /* TODO make date-picker adapt to the width of the years part */
      ::slotted([slot='years']) {
        --vaadin-infinite-scroller-buffer-width: 90px;
        width: 50px;
        background-color: var(--lumo-shade-5pct);
      }

      :host([years-visible]) ::slotted([slot='months']) {
        padding-left: 50px;
      }
    }
  `,{moduleId:"lumo-date-picker-overlay-content"});F("vaadin-month-calendar",S`
    :host {
      -moz-user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
      user-select: none;
      font-size: var(--lumo-font-size-m);
      color: var(--lumo-body-text-color);
      text-align: center;
      padding: 0 var(--lumo-space-xs);
      --_focus-ring-color: var(--vaadin-focus-ring-color, var(--lumo-primary-color-50pct));
      --_focus-ring-width: var(--vaadin-focus-ring-width, 2px);
      --_selection-color: var(--vaadin-selection-color, var(--lumo-primary-color));
      --_selection-color-text: var(--vaadin-selection-color-text, var(--lumo-primary-text-color));
    }

    /* Month header */

    [part='month-header'] {
      color: var(--lumo-header-text-color);
      font-size: var(--lumo-font-size-l);
      line-height: 1;
      font-weight: 500;
      margin-bottom: var(--lumo-space-m);
    }

    /* Week days and numbers */

    [part='weekdays'],
    [part='weekday'],
    [part='week-number'] {
      font-size: var(--lumo-font-size-xxs);
      line-height: 1;
      color: var(--lumo-secondary-text-color);
    }

    [part='weekdays'] {
      margin-bottom: var(--lumo-space-s);
    }

    [part='weekday']:empty,
    [part='week-number'] {
      width: var(--lumo-size-xs);
    }

    /* Date and week number cells */

    [part~='date'],
    [part='week-number'] {
      box-sizing: border-box;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--lumo-size-m);
      position: relative;
    }

    [part~='date'] {
      transition: color 0.1s;
    }

    [part~='date']:not(:empty) {
      cursor: var(--lumo-clickable-cursor);
    }

    :host([week-numbers]) [part='weekday']:not(:empty),
    :host([week-numbers]) [part~='date'] {
      width: calc((100% - var(--lumo-size-xs)) / 7);
    }

    /* Today date */

    [part~='date'][part~='today'] {
      color: var(--_selection-color-text);
    }

    /* Focused date */

    [part~='date']::before {
      content: '';
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 2em;
      min-height: 2em;
      width: 80%;
      height: 80%;
      max-height: 100%;
      max-width: 100%;
      border-radius: var(--lumo-border-radius-m);
    }

    [part~='date'][part~='focused']::before {
      box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) var(--_focus-ring-color);
    }

    :host(:not([focused])) [part~='date'][part~='focused']::before {
      animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
    }

    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 1px var(--lumo-base-color), 0 0 0 calc(var(--_focus-ring-width) + 1px) transparent;
      }
    }

    [part~='date']:not(:empty):not([part~='disabled']):not([part~='selected']):hover::before {
      background-color: var(--lumo-primary-color-10pct);
    }

    [part~='date'][part~='selected'] {
      color: var(--lumo-primary-contrast-color);
    }

    [part~='date'][part~='selected']::before {
      background-color: var(--_selection-color);
    }

    [part~='date'][part~='disabled'] {
      color: var(--lumo-disabled-text-color);
    }

    @media (pointer: coarse) {
      [part~='date']:hover:not([part~='selected'])::before,
      [part~='focused']:not([part~='selected'])::before {
        display: none;
      }

      [part~='date']:not(:empty):not([part~='disabled']):active::before {
        display: block;
      }

      [part~='date'][part~='selected']::before {
        box-shadow: none;
      }
    }

    /* Disabled */

    :host([disabled]) * {
      color: var(--lumo-disabled-text-color) !important;
    }
  `,{moduleId:"lumo-month-calendar"});const Ec=document.createElement("template");Ec.innerHTML=`
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 var(--_focus-ring-width) transparent;
      }
    }
  </style>
`;document.head.appendChild(Ec.content);const pv=S`
  :host {
    outline: none;
  }

  [part='toggle-button']::before {
    content: var(--lumo-icons-calendar);
  }

  [part='clear-button']::before {
    content: var(--lumo-icons-cross);
  }

  @media (max-width: 420px), (max-height: 420px) {
    [part='overlay-content'] {
      height: 70vh;
    }
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input) {
    --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input:placeholder-shown) {
    --_lumo-text-field-overflow-mask-image: none;
  }
`;F("vaadin-date-picker",[tr,pv],{moduleId:"lumo-date-picker"});/**
 * @license
 * Copyright (c) 2017 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Or={start:"top",end:"bottom"},Mr={start:"left",end:"right"},Ja=new ResizeObserver(s=>{setTimeout(()=>{s.forEach(t=>{t.target.__overlay&&t.target.__overlay._updatePosition()})})}),fv=s=>class extends s{static get properties(){return{positionTarget:{type:Object,value:null,sync:!0},horizontalAlign:{type:String,value:"start",sync:!0},verticalAlign:{type:String,value:"top",sync:!0},noHorizontalOverlap:{type:Boolean,value:!1,sync:!0},noVerticalOverlap:{type:Boolean,value:!1,sync:!0},requiredVerticalSpace:{type:Number,value:0,sync:!0}}}static get observers(){return["__positionSettingsChanged(horizontalAlign, verticalAlign, noHorizontalOverlap, noVerticalOverlap, requiredVerticalSpace)","__overlayOpenedChanged(opened, positionTarget)"]}constructor(){super(),this.__onScroll=this.__onScroll.bind(this),this._updatePosition=this._updatePosition.bind(this)}connectedCallback(){super.connectedCallback(),this.opened&&this.__addUpdatePositionEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this.__removeUpdatePositionEventListeners()}__addUpdatePositionEventListeners(){window.visualViewport.addEventListener("resize",this._updatePosition),window.visualViewport.addEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes=Xm(this.positionTarget),this.__positionTargetAncestorRootNodes.forEach(e=>{e.addEventListener("scroll",this.__onScroll,!0)})}__removeUpdatePositionEventListeners(){window.visualViewport.removeEventListener("resize",this._updatePosition),window.visualViewport.removeEventListener("scroll",this.__onScroll,!0),this.__positionTargetAncestorRootNodes&&(this.__positionTargetAncestorRootNodes.forEach(e=>{e.removeEventListener("scroll",this.__onScroll,!0)}),this.__positionTargetAncestorRootNodes=null)}__overlayOpenedChanged(e,i){if(this.__removeUpdatePositionEventListeners(),i&&(i.__overlay=null,Ja.unobserve(i),e&&(this.__addUpdatePositionEventListeners(),i.__overlay=this,Ja.observe(i))),e){const r=getComputedStyle(this);this.__margins||(this.__margins={},["top","bottom","left","right"].forEach(o=>{this.__margins[o]=parseInt(r[o],10)})),this.setAttribute("dir",r.direction),this._updatePosition(),requestAnimationFrame(()=>this._updatePosition())}}__positionSettingsChanged(){this._updatePosition()}__onScroll(e){e.target instanceof Node&&this.contains(e.target)||this._updatePosition()}_updatePosition(){if(!this.positionTarget||!this.opened)return;const e=this.positionTarget.getBoundingClientRect(),i=this.__shouldAlignStartVertically(e);this.style.justifyContent=i?"flex-start":"flex-end";const r=this.__isRTL,o=this.__shouldAlignStartHorizontally(e,r),n=!r&&o||r&&!o;this.style.alignItems=n?"flex-start":"flex-end";const a=this.getBoundingClientRect(),l=this.__calculatePositionInOneDimension(e,a,this.noVerticalOverlap,Or,this,i),d=this.__calculatePositionInOneDimension(e,a,this.noHorizontalOverlap,Mr,this,o);Object.assign(this.style,l,d),this.toggleAttribute("bottom-aligned",!i),this.toggleAttribute("top-aligned",i),this.toggleAttribute("end-aligned",!n),this.toggleAttribute("start-aligned",n)}__shouldAlignStartHorizontally(e,i){const r=Math.max(this.__oldContentWidth||0,this.$.overlay.offsetWidth);this.__oldContentWidth=this.$.overlay.offsetWidth;const o=Math.min(window.innerWidth,document.documentElement.clientWidth),n=!i&&this.horizontalAlign==="start"||i&&this.horizontalAlign==="end";return this.__shouldAlignStart(e,r,o,this.__margins,n,this.noHorizontalOverlap,Mr)}__shouldAlignStartVertically(e){const i=this.requiredVerticalSpace||Math.max(this.__oldContentHeight||0,this.$.overlay.offsetHeight);this.__oldContentHeight=this.$.overlay.offsetHeight;const r=Math.min(window.innerHeight,document.documentElement.clientHeight),o=this.verticalAlign==="top";return this.__shouldAlignStart(e,i,r,this.__margins,o,this.noVerticalOverlap,Or)}__shouldAlignStart(e,i,r,o,n,a,l){const d=r-e[a?l.end:l.start]-o[l.end],c=e[a?l.start:l.end]-o[l.start],h=n?d:c,_=h>(n?c:d)||h>i;return n===_}__adjustBottomProperty(e,i,r){let o;if(e===i.end){if(i.end===Or.end){const n=Math.min(window.innerHeight,document.documentElement.clientHeight);if(r>n&&this.__oldViewportHeight){const a=this.__oldViewportHeight-n;o=r-a}this.__oldViewportHeight=n}if(i.end===Mr.end){const n=Math.min(window.innerWidth,document.documentElement.clientWidth);if(r>n&&this.__oldViewportWidth){const a=this.__oldViewportWidth-n;o=r-a}this.__oldViewportWidth=n}}return o}__calculatePositionInOneDimension(e,i,r,o,n,a){const l=a?o.start:o.end,d=a?o.end:o.start,c=parseFloat(n.style[l]||getComputedStyle(n)[l]),h=this.__adjustBottomProperty(l,o,c),f=i[a?o.start:o.end]-e[r===a?o.end:o.start],_=h?`${h}px`:`${c+f*(a?-1:1)}px`;return{[l]:_,[d]:""}}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const mv=S`
  [part='overlay'] {
    display: flex;
    flex: auto;
  }

  [part~='content'] {
    flex: auto;
  }

  @media (forced-colors: active) {
    [part='overlay'] {
      outline: 3px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-date-picker-overlay",[sr,mv],{moduleId:"vaadin-date-picker-overlay-styles"});class _v extends fv(ir(ct(ve(ie)))){static get is(){return"vaadin-date-picker-overlay"}static get template(){return ae`
      <div id="backdrop" part="backdrop" hidden$="[[!withBackdrop]]"></div>
      <div part="overlay" id="overlay">
        <div part="content" id="content">
          <slot></slot>
        </div>
      </div>
    `}}Z(_v);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function gv(s){let t=s.getDay();t===0&&(t=7);const e=4-t,i=new Date(s.getTime()+e*24*3600*1e3),r=new Date(0,0);r.setFullYear(i.getFullYear());const o=i.getTime()-r.getTime(),n=Math.round(o/(24*3600*1e3));return Math.floor(n/7+1)}function je(s,t){return s instanceof Date&&t instanceof Date&&s.getFullYear()===t.getFullYear()&&s.getMonth()===t.getMonth()&&s.getDate()===t.getDate()}function Ni(s,t,e){return(!t||s>=t)&&(!e||s<=e)}function Ac(s,t){return t.filter(e=>e!==void 0).reduce((e,i)=>{if(!i)return e;if(!e)return i;const r=Math.abs(s.getTime()-i.getTime()),o=Math.abs(e.getTime()-s.getTime());return r<o?i:e})}function Sc(s){return{day:s.getDate(),month:s.getMonth(),year:s.getFullYear()}}function Tc(s){const t=new Date,e=new Date(t);return e.setDate(1),e.setMonth(parseInt(s)+t.getMonth()),e}function vv(s,t,e=0,i=1){if(t>99)throw new Error("The provided year cannot have more than 2 digits.");if(t<0)throw new Error("The provided year cannot be negative.");let r=t+Math.floor(s.getFullYear()/100)*100;return s<new Date(r-50,e,i)?r-=100:s>new Date(r+50,e,i)&&(r+=100),r}function ni(s){const t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/u.exec(s);if(!t)return;const e=new Date(0,0);return e.setFullYear(parseInt(t[1],10)),e.setMonth(parseInt(t[2],10)-1),e.setDate(parseInt(t[3],10)),e}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Pc=document.createElement("template");Pc.innerHTML=`
  <style>
    :host {
      display: block;
      overflow: hidden;
      height: 500px;
    }

    #scroller {
      position: relative;
      height: 100%;
      overflow: auto;
      outline: none;
      margin-right: -40px;
      -webkit-overflow-scrolling: touch;
      overflow-x: hidden;
    }

    #scroller.notouchscroll {
      -webkit-overflow-scrolling: auto;
    }

    #scroller::-webkit-scrollbar {
      display: none;
    }

    .buffer {
      position: absolute;
      width: var(--vaadin-infinite-scroller-buffer-width, 100%);
      box-sizing: border-box;
      padding-right: 40px;
      top: var(--vaadin-infinite-scroller-buffer-offset, 0);
      animation: fadein 0.2s;
    }

    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  </style>

  <div id="scroller">
    <div class="buffer"></div>
    <div class="buffer"></div>
    <div id="fullHeight"></div>
  </div>
`;class Ic extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).appendChild(Pc.content.cloneNode(!0)),this.bufferSize=20,this._initialScroll=5e5,this._initialIndex=0,this._activated=!1}get active(){return this._activated}set active(t){t&&!this._activated&&(this._createPool(),this._activated=!0)}get bufferOffset(){return this._buffers[0].offsetTop}get itemHeight(){if(!this._itemHeightVal){const t=getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height"),e="background-position";this.$.fullHeight.style.setProperty(e,t);const i=getComputedStyle(this.$.fullHeight).getPropertyValue(e);this.$.fullHeight.style.removeProperty(e),this._itemHeightVal=parseFloat(i)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}set position(t){this._preventScrollEvent=!0,t>this._firstIndex&&t<this._firstIndex+this.bufferSize*2?this.$.scroller.scrollTop=this.itemHeight*(t-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~t,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=t%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}connectedCallback(){this._ready||(this._ready=!0,this.$={},this.shadowRoot.querySelectorAll("[id]").forEach(t=>{this.$[t.id]=t}),this.$.scroller.addEventListener("scroll",()=>this._scroll()),this._buffers=[...this.shadowRoot.querySelectorAll(".buffer")],this.$.fullHeight.style.height=`${this._initialScroll*2}px`,ic&&(this.$.scroller.tabIndex=-1))}forceUpdate(){this._debouncerUpdateClones&&(this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(),this._debouncerUpdateClones.cancel())}_createElement(){}_updateElement(t,e){}_finishInit(){this._initDone||(this._buffers.forEach(t=>{[...t.children].forEach(e=>{this._ensureStampedInstance(e._itemWrapper)})}),this._buffers[0].translateY||this._reset(),this._initDone=!0,this.dispatchEvent(new CustomEvent("init-done")))}_translateBuffer(t){const e=t?1:0;this._buffers[e].translateY=this._buffers[e?0:1].translateY+this._bufferHeight*(e?-1:1),this._buffers[e].style.transform=`translate3d(0, ${this._buffers[e].translateY}px, 0)`,this._buffers[e].updated=!1,this._buffers.reverse()}_scroll(){if(this._scrollDisabled)return;const t=this.$.scroller.scrollTop;(t<this._bufferHeight||t>this._initialScroll*2-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());const e=this.itemHeight+this.bufferOffset,i=t>this._buffers[1].translateY+e,r=t<this._buffers[0].translateY+e;(i||r)&&(this._translateBuffer(r),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=G.debounce(this._debouncerScrollFinish,Ae.after(200),()=>{const o=this.$.scroller.getBoundingClientRect();!this._isVisible(this._buffers[0],o)&&!this._isVisible(this._buffers[1],o)&&(this.position=this.position)})}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(t=>{t.style.transform=`translate3d(0, ${t.translateY}px, 0)`}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=G.debounce(this._debouncerUpdateClones,Ae.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){const t=this.getBoundingClientRect();this._buffers.forEach(e=>{for(let i=0;i<this.bufferSize;i++){const r=document.createElement("div");r.style.height=`${this.itemHeight}px`,r.instance={};const o=`vaadin-infinite-scroller-item-content-${qo()}`,n=document.createElement("slot");n.setAttribute("name",o),n._itemWrapper=r,e.appendChild(n),r.setAttribute("slot",o),this.appendChild(r),this._isVisible(r,t)&&this._ensureStampedInstance(r)}}),requestAnimationFrame(()=>{this._finishInit()})}_ensureStampedInstance(t){if(t.firstElementChild)return;const e=t.instance;t.instance=this._createElement(),t.appendChild(t.instance),Object.keys(e).forEach(i=>{t.instance[i]=e[i]})}_updateClones(t){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;const e=t?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((i,r)=>{if(!i.updated){const o=this._firstIndex+this.bufferSize*r;[...i.children].forEach((n,a)=>{const l=n._itemWrapper;(!t||this._isVisible(l,e))&&this._updateElement(l.instance,o+a)}),i.updated=!0}})}_isVisible(t,e){const i=t.getBoundingClientRect();return i.bottom>e.top&&i.top<e.bottom}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zc=document.createElement("template");zc.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 270px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
    }
  </style>
`;class bv extends Ic{static get is(){return"vaadin-date-picker-month-scroller"}constructor(){super(),this.bufferSize=3,this.shadowRoot.appendChild(zc.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-month-calendar")}_updateElement(t,e){t.month=Tc(e)}}Z(bv);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const kc=document.createElement("template");kc.innerHTML=`
  <style>
    :host {
      --vaadin-infinite-scroller-item-height: 80px;
      width: 50px;
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      transform: translateX(100%);
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      -moz-user-select: none;
      user-select: none;
      /* Center the year scroller position. */
      --vaadin-infinite-scroller-buffer-offset: 50%;
    }

    :host::before {
      content: '';
      display: block;
      background: transparent;
      width: 0;
      height: 0;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent;
      border-left-color: #000;
    }
  </style>
`;class yv extends Ic{static get is(){return"vaadin-date-picker-year-scroller"}constructor(){super(),this.bufferSize=12,this.shadowRoot.appendChild(kc.content.cloneNode(!0))}_createElement(){return document.createElement("vaadin-date-picker-year")}_updateElement(t,e){t.year=this._yearAfterXYears(e)}_yearAfterXYears(t){const e=new Date,i=new Date(e);return i.setFullYear(parseInt(t)+e.getFullYear()),i.getFullYear()}}Z(yv);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const xv=s=>class extends s{static get properties(){return{year:{type:String,sync:!0},selectedDate:{type:Object,sync:!0}}}static get observers(){return["__updateSelected(year, selectedDate)"]}__updateSelected(e,i){this.toggleAttribute("selected",i&&i.getFullYear()===e),this.toggleAttribute("current",e===new Date().getFullYear())}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Cv extends ve(xv(ie)){static get is(){return"vaadin-date-picker-year"}static get template(){return ae`
      <style>
        :host {
          display: block;
          height: 100%;
        }
      </style>
      <div part="year-number">[[year]]</div>
      <div part="year-separator" aria-hidden="true"></div>
    `}}Z(Cv);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function un(s,t,e,i,r){let o;r&&(o=typeof e=="object"&&e!==null,o&&(i=s.__dataTemp[t]));let n=i!==e&&(i===i||e===e);return o&&n&&(s.__dataTemp[t]=e),n}const pn=te(s=>{class t extends s{_shouldPropertyChange(i,r,o){return un(this,i,r,o,!0)}}return t}),wv=te(s=>{class t extends s{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(i,r,o){return un(this,i,r,o,this.mutableData)}}return t});pn._mutablePropertyChange=un;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let po=null;function fo(){return po}fo.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:fo,writable:!0}});const Dc=jo(fo),Ev=pn(Dc);function Av(s,t){po=s,Object.setPrototypeOf(s,t.prototype),new t,po=null}const Sv=jo(class{});function Tv(s,t){for(let e=0;e<t.length;e++){let i=t[e];if(!!s!=!!i.__hideTemplateChildren__)if(i.nodeType===Node.TEXT_NODE)s?(i.__polymerTextContent__=i.textContent,i.textContent=""):i.textContent=i.__polymerTextContent__;else if(i.localName==="slot")if(s)i.__polymerReplaced__=document.createComment("hidden-slot"),ne(ne(i).parentNode).replaceChild(i.__polymerReplaced__,i);else{const r=i.__polymerReplaced__;r&&ne(ne(r).parentNode).replaceChild(i,r)}else i.style&&(s?(i.__polymerDisplay__=i.style.display,i.style.display="none"):i.style.display=i.__polymerDisplay__);i.__hideTemplateChildren__=s,i._showHideChildren&&i._showHideChildren(s)}}class ut extends Sv{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let e=[];this.children=e;for(let r=this.root.firstChild;r;r=r.nextSibling)e.push(r),r.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let i=this.__templatizeOptions;(t&&i.instanceProps||!i.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let i in this.__hostProps)this._setPendingProperty(i,this.__dataHost["_host_"+i]);for(let i in t)this._setPendingProperty(i,t[i])}forwardHostProp(t,e){this._setPendingPropertyOrPath(t,e,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,e,i){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,e,r=>{r.model=this,i(r)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(t,e,i)}}_showHideChildren(t){Tv(t,this.children)}_setUnmanagedPropertyToNode(t,e,i){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&e=="textContent"?t.__polymerTextContent__=i:super._setUnmanagedPropertyToNode(t,e,i)}get parentModel(){let t=this.__parentModel;if(!t){let e;t=this;do t=t.__dataHost.__dataHost;while((e=t.__templatizeOptions)&&!e.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}ut.prototype.__dataHost;ut.prototype.__templatizeOptions;ut.prototype._methodHost;ut.prototype.__templatizeOwner;ut.prototype.__hostProps;const Pv=pn(ut);function Qa(s){let t=s.__dataHost;return t&&t._methodHost||t}function Iv(s,t,e){let i=e.mutableData?Pv:ut;mo.mixin&&(i=mo.mixin(i));let r=class extends i{};return r.prototype.__templatizeOptions=e,r.prototype._bindTemplate(s),Dv(r,s,t,e),r}function zv(s,t,e,i){let r=e.forwardHostProp;if(r&&t.hasHostProps){const o=s.localName=="template";let n=t.templatizeTemplateClass;if(!n){if(o){let l=e.mutableData?Ev:Dc;class d extends l{}n=t.templatizeTemplateClass=d}else{const l=s.constructor;class d extends l{}n=t.templatizeTemplateClass=d}let a=t.hostProps;for(let l in a)n.prototype._addPropertyEffect("_host_"+l,n.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:kv(l,r)}),n.prototype._createNotifyingProperty("_host_"+l);gd&&i&&Rv(t,e,i)}if(s.__dataProto&&Object.assign(s.__data,s.__dataProto),o)Av(s,n),s.__dataTemp={},s.__dataPending=null,s.__dataOld=null,s._enableProperties();else{Object.setPrototypeOf(s,n.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in s){const d=s[l];delete s[l],s.__data[l]=d}}}}function kv(s,t){return function(i,r,o){t.call(i.__templatizeOwner,r.substring(6),o[r])}}function Dv(s,t,e,i){let r=e.hostProps||{};for(let o in i.instanceProps){delete r[o];let n=i.notifyInstanceProp;n&&s.prototype._addPropertyEffect(o,s.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Ov(o,n)})}if(i.forwardHostProp&&t.__dataHost)for(let o in r)e.hasHostProps||(e.hasHostProps=!0),s.prototype._addPropertyEffect(o,s.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:Mv()})}function Ov(s,t){return function(i,r,o){t.call(i.__templatizeOwner,i,r,o[r])}}function Mv(){return function(t,e,i){t.__dataHost._setPendingPropertyOrPath("_host_"+e,i[e],!0,!0)}}function mo(s,t,e){if(Cs&&!Qa(s))throw new Error("strictTemplatePolicy: template owner not trusted");if(e=e||{},s.__templatizeOwner)throw new Error("A <template> can only be templatized once");s.__templatizeOwner=t;let r=(t?t.constructor:ut)._parseTemplate(s),o=r.templatizeInstanceClass;o||(o=Iv(s,r,e),r.templatizeInstanceClass=o);const n=Qa(s);zv(s,r,e,n);let a=class extends o{};return a.prototype._methodHost=n,a.prototype.__dataHost=s,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=r.hostProps,a=a,a}function Rv(s,t,e){const i=e.constructor._properties,{propertyEffects:r}=s,{instanceProps:o}=t;for(let n in r)if(!i[n]&&!(o&&o[n])){const a=r[n];for(let l=0;l<a.length;l++){const{part:d}=a[l].info;if(!(d.signature&&d.signature.static)){console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function Nv(s,t){let e;for(;t;)if(e=t.__dataHost?t:t.__templatizeInstance)if(e.__dataHost!=s)t=e.__dataHost;else return e;else t=ne(t).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class zs{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,e){this._asyncModule=t,this._callback=e,this._timer=this._asyncModule.run(()=>{this._timer=null,Fi.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Fi.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,e,i){return t instanceof zs?t._cancelAsync():t=new zs,t.setConfig(e,i),t}}let Fi=new Set;const Fv=function(s){Fi.add(s)},Lv=function(){const s=!!Fi.size;return Fi.forEach(t=>{try{t.flush()}catch(e){setTimeout(()=>{throw e})}}),s};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Oc=function(){let s,t;do s=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Lv();while(s||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Za=!1;function $v(){if(_d&&!md){if(!Za){Za=!0;const s=document.createElement("style");s.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(s)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Hv=wv(ie);class el extends Hv{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!pa,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),$v()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=ne(ne(this).parentNode);for(let e=0;e<this.__instances.length;e++)this.__attachInstance(e,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let e=this.template=t._templateInfo?t:this.querySelector("template");if(!e){let r=new MutationObserver(()=>{if(this.querySelector("template"))r.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return r.observe(this,{childList:!0}),!1}let i={};i[this.as]=!0,i[this.indexAs]=!0,i[this.itemsIndexAs]=!0,this.__ctor=mo(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:i,forwardHostProp:function(r,o){let n=this.__instances;for(let a=0,l;a<n.length&&(l=n[a]);a++)l.forwardHostProp(r,o)},notifyInstanceProp:function(r,o,n){if(Ef(this.as,o)){let a=r[this.itemsIndexAs];o==this.as&&(this.items[a]=n);let l=Di(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,o);this.notifyPath(l,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let e=t,i=this.__getMethodHost();return function(){return i[e].apply(i,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let e=this.__observePaths;for(let i=0;i<e.length;i++)t.indexOf(e[i])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,e=0){this.__renderDebouncer=zs.debounce(this.__renderDebouncer,e>0?zf.after(e):Td,t.bind(this)),Fv(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Oc()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const e=this.__sortAndFilterItems(t),i=this.__calculateLimit(e.length);this.__updateInstances(t,i,e),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!pa||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let e=new Array(t.length);for(let i=0;i<t.length;i++)e[i]=i;return this.__filterFn&&(e=e.filter((i,r,o)=>this.__filterFn(t[i],r,o))),this.__sortFn&&e.sort((i,r)=>this.__sortFn(t[i],t[r])),e}__calculateLimit(t){let e=t;const i=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(e=Math.min(t,this.initialCount),r=Math.max(e-i,0),this.__chunkCount=r||1):(r=Math.min(Math.max(t-i,0),this.__chunkCount),e=Math.min(i+r,t)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=e<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,e}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,e=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*e)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,e,i){const r=this.__itemsIdxToInstIdx={};let o;for(o=0;o<e;o++){let n=this.__instances[o],a=i[o],l=t[a];r[a]=o,n?(n._setPendingProperty(this.as,l),n._setPendingProperty(this.indexAs,o),n._setPendingProperty(this.itemsIndexAs,a),n._flushProperties()):this.__insertInstance(l,o,a)}for(let n=this.__instances.length-1;n>=o;n--)this.__detachAndRemoveInstance(n)}__detachInstance(t){let e=this.__instances[t];const i=ne(e.root);for(let r=0;r<e.children.length;r++){let o=e.children[r];i.appendChild(o)}return e}__attachInstance(t,e){let i=this.__instances[t];e.insertBefore(i.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,e,i){let r={};return r[this.as]=t,r[this.indexAs]=e,r[this.itemsIndexAs]=i,new this.__ctor(r)}__insertInstance(t,e,i){const r=this.__stampInstance(t,e,i);let o=this.__instances[e+1],n=o?o.children[0]:this;return ne(ne(this).parentNode).insertBefore(r.root,n),this.__instances[e]=r,r}_showHideChildren(t){for(let e=0;e<this.__instances.length;e++)this.__instances[e]._showHideChildren(t)}__handleItemPath(t,e){let i=t.slice(6),r=i.indexOf("."),o=r<0?i:i.substring(0,r);if(o==parseInt(o,10)){let n=r<0?"":i.substring(r+1);this.__handleObservedPaths(n);let a=this.__itemsIdxToInstIdx[o],l=this.__instances[a];if(l){let d=this.as+(n?"."+n:"");l._setPendingPropertyOrPath(d,e,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let e=this.modelForElement(t);return e&&e[this.as]}indexForElement(t){let e=this.modelForElement(t);return e&&e[this.indexAs]}modelForElement(t){return Nv(this.template,t)}}customElements.define(el.is,el);/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Bv=s=>class extends tn(s){static get properties(){return{month:{type:Object,value:new Date,sync:!0},selectedDate:{type:Object,notify:!0,sync:!0},focusedDate:{type:Object},showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:{type:Boolean},minDate:{type:Date,value:null,sync:!0},maxDate:{type:Date,value:null,sync:!0},disabled:{type:Boolean,reflectToAttribute:!0},_days:{type:Array},_weeks:{type:Array},_notTapping:{type:Boolean}}}static get observers(){return["__focusedDateChanged(focusedDate, _days)"]}get focusableDateElement(){return[...this.shadowRoot.querySelectorAll("[part~=date]")].find(e=>je(e.date,this.focusedDate))}ready(){super.ready(),Ce(this.$.monthGrid,"tap",this._handleTap.bind(this))}_isDisabled(e,i,r){const o=new Date(0,0);o.setFullYear(e.getFullYear()),o.setMonth(e.getMonth()),o.setDate(1);const n=new Date(0,0);return n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()+1),n.setDate(0),i&&r&&i.getMonth()===r.getMonth()&&i.getMonth()===e.getMonth()&&r.getDate()-i.getDate()>=0?!1:!Ni(o,i,r)&&!Ni(n,i,r)}_getTitle(e,i){if(!(e===void 0||i===void 0))return i.formatTitle(i.monthNames[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300)}_dateAdd(e,i){e.setDate(e.getDate()+i)}_applyFirstDayOfWeek(e,i){if(!(e===void 0||i===void 0))return e.slice(i).concat(e.slice(0,i))}_getWeekDayNames(e,i){if(e===void 0||i===void 0)return[];const{weekdays:r,weekdaysShort:o,firstDayOfWeek:n}=e,a=this._applyFirstDayOfWeek(o,n);return this._applyFirstDayOfWeek(r,n).map((d,c)=>({weekDay:d,weekDayShort:a[c]}))}__focusedDateChanged(e,i){Array.isArray(i)&&i.some(r=>je(r,e))?this.removeAttribute("aria-hidden"):this.setAttribute("aria-hidden","true")}_getDate(e){return e?e.getDate():""}_showWeekSeparator(e,i){return e&&i&&i.firstDayOfWeek===1}_isToday(e){return je(new Date,e)}_getDays(e,i){if(e===void 0||i===void 0)return[];const r=new Date(0,0);for(r.setFullYear(e.getFullYear()),r.setMonth(e.getMonth()),r.setDate(1);r.getDay()!==i.firstDayOfWeek;)this._dateAdd(r,-1);const o=[],n=r.getMonth(),a=e.getMonth();for(;r.getMonth()===a||r.getMonth()===n;)o.push(r.getMonth()===a?new Date(r.getTime()):null),this._dateAdd(r,1);return o}_getWeeks(e){return e.reduce((i,r,o)=>(o%7===0&&i.push([]),i[i.length-1].push(r),i),[])}_handleTap(e){!this.ignoreTaps&&!this._notTapping&&e.target.date&&!e.target.hasAttribute("disabled")&&(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{detail:{date:e.target.date},bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}__getWeekNumber(e){const i=e.reduce((r,o)=>!r&&o?o:r);return gv(i)}__getDayAriaLabel(e){if(!e)return"";let i=`${this._getDate(e)} ${this.i18n.monthNames[e.getMonth()]} ${e.getFullYear()}, ${this.i18n.weekdays[e.getDay()]}`;return this._isToday(e)&&(i+=`, ${this.i18n.today}`),i}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Vv=S`
  :host {
    display: block;
  }

  #monthGrid {
    width: 100%;
    border-collapse: collapse;
  }

  #days-container tr,
  #weekdays-container tr {
    display: flex;
  }

  [part~='date'] {
    outline: none;
  }

  [part~='disabled'] {
    pointer-events: none;
  }

  [part='week-number'][hidden],
  [part='weekday'][hidden] {
    display: none;
  }

  [part='weekday'],
  [part~='date'] {
    width: calc(100% / 7);
    padding: 0;
    font-weight: normal;
  }

  [part='weekday']:empty,
  [part='week-number'] {
    width: 12.5%;
    flex-shrink: 0;
    padding: 0;
  }

  :host([week-numbers]) [part='weekday']:not(:empty),
  :host([week-numbers]) [part~='date'] {
    width: 12.5%;
  }

  @media (forced-colors: active) {
    [part~='date'][part~='focused'] {
      outline: 1px solid;
    }

    [part~='date'][part~='selected'] {
      outline: 3px solid;
    }
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-month-calendar",Vv,{moduleId:"vaadin-month-calendar-styles"});class Uv extends Bv(ve(ie)){static get template(){return ae`
      <div part="month-header" id="month-header" aria-hidden="true">[[_getTitle(month, i18n)]]</div>
      <table
        id="monthGrid"
        role="grid"
        aria-labelledby="month-header"
        on-touchend="_preventDefault"
        on-touchstart="_onMonthGridTouchStart"
      >
        <thead id="weekdays-container">
          <tr role="row" part="weekdays">
            <th part="weekday" aria-hidden="true" hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n)]]"></th>
            <template is="dom-repeat" items="[[_getWeekDayNames(i18n, showWeekNumbers)]]">
              <th role="columnheader" part="weekday" scope="col" abbr$="[[item.weekDay]]" aria-hidden="true">
                [[item.weekDayShort]]
              </th>
            </template>
          </tr>
        </thead>
        <tbody id="days-container">
          <template is="dom-repeat" items="[[_weeks]]" as="week">
            <tr role="row">
              <td part="week-number" aria-hidden="true" hidden$="[[!_showWeekSeparator(showWeekNumbers, i18n)]]">
                [[__getWeekNumber(week)]]
              </td>
              <template is="dom-repeat" items="[[week]]">
                <td
                  role="gridcell"
                  part$="[[__getDatePart(item, focusedDate, selectedDate, minDate, maxDate)]]"
                  date="[[item]]"
                  tabindex$="[[__getDayTabindex(item, focusedDate)]]"
                  disabled$="[[__isDayDisabled(item, minDate, maxDate)]]"
                  aria-selected$="[[__getDayAriaSelected(item, selectedDate)]]"
                  aria-disabled$="[[__getDayAriaDisabled(item, minDate, maxDate)]]"
                  aria-label$="[[__getDayAriaLabel(item)]]"
                  >[[_getDate(item)]]</td
                >
              </template>
            </tr>
          </template>
        </tbody>
      </table>
    `}static get is(){return"vaadin-month-calendar"}static get properties(){return{_days:{type:Array,computed:"_getDays(month, i18n, minDate, maxDate)"},_weeks:{type:Array,computed:"_getWeeks(_days)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n)"]}_showWeekNumbersChanged(t,e){t&&e&&e.firstDayOfWeek===1?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}__getDatePart(t,e,i,r,o){const n=["date"];return this.__isDayDisabled(t,r,o)&&n.push("disabled"),this.__isDayFocused(t,e)&&n.push("focused"),this.__isDaySelected(t,i)&&n.push("selected"),this._isToday(t)&&n.push("today"),n.join(" ")}__isDayFocused(t,e){return je(t,e)}__isDaySelected(t,e){return je(t,e)}__getDayAriaSelected(t,e){if(this.__isDaySelected(t,e))return"true"}__isDayDisabled(t,e,i){return!Ni(t,e,i)}__getDayAriaDisabled(t,e,i){if(!(t===void 0||e===void 0||i===void 0)&&this.__isDayDisabled(t,e,i))return"true"}__getDayTabindex(t,e){return this.__isDayFocused(t,e)?"0":"-1"}}Z(Uv);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Mc{constructor(t,e){this.query=t,this.callback=e,this._boundQueryHandler=this._queryHandler.bind(this)}hostConnected(){this._removeListener(),this._mediaQuery=window.matchMedia(this.query),this._addListener(),this._queryHandler(this._mediaQuery)}hostDisconnected(){this._removeListener()}_addListener(){this._mediaQuery&&this._mediaQuery.addListener(this._boundQueryHandler)}_removeListener(){this._mediaQuery&&this._mediaQuery.removeListener(this._boundQueryHandler),this._mediaQuery=null}_queryHandler(t){typeof this.callback=="function"&&this.callback(t.matches)}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Wv=s=>class extends s{static get properties(){return{scrollDuration:{type:Number,value:300},selectedDate:{type:Object,value:null,sync:!0},focusedDate:{type:Object,notify:!0,observer:"_focusedDateChanged",sync:!0},_focusedMonthDate:Number,initialPosition:{type:Object,observer:"_initialPositionChanged"},_originDate:{type:Object,value:new Date},_visibleMonthIndex:Number,_desktopMode:{type:Boolean,observer:"_desktopModeChanged"},_desktopMediaQuery:{type:String,value:"(min-width: 375px)"},_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean,value:!1},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Object,sync:!0},maxDate:{type:Object,sync:!0},label:String,_cancelButton:{type:Object},_todayButton:{type:Object},calendars:{type:Array,value:()=>[]},years:{type:Array,value:()=>[]}}}static get observers(){return["__updateCalendars(calendars, i18n, minDate, maxDate, selectedDate, focusedDate, showWeekNumbers, _ignoreTaps, _theme)","__updateCancelButton(_cancelButton, i18n)","__updateTodayButton(_todayButton, i18n, minDate, maxDate)","__updateYears(years, selectedDate, _theme)"]}get __useSubMonthScrolling(){return this._monthScroller.clientHeight<this._monthScroller.itemHeight+this._monthScroller.bufferOffset}get focusableDateElement(){return this.calendars.map(e=>e.focusableDateElement).find(Boolean)}_addListeners(){Jd(this.$.scrollers,"pan-y"),Ce(this.$.scrollers,"track",this._track.bind(this)),Ce(this.shadowRoot.querySelector('[part="clear-button"]'),"tap",this._clear.bind(this)),Ce(this.shadowRoot.querySelector('[part="toggle-button"]'),"tap",this._cancel.bind(this)),Ce(this.shadowRoot.querySelector('[part="years-toggle-button"]'),"tap",this._toggleYearScroller.bind(this))}_initControllers(){this.addController(new Mc(this._desktopMediaQuery,e=>{this._desktopMode=e})),this.addController(new we(this,"today-button","vaadin-button",{observe:!1,initializer:e=>{e.setAttribute("theme","tertiary"),e.addEventListener("keydown",i=>this.__onTodayButtonKeyDown(i)),Ce(e,"tap",this._onTodayTap.bind(this)),this._todayButton=e}})),this.addController(new we(this,"cancel-button","vaadin-button",{observe:!1,initializer:e=>{e.setAttribute("theme","tertiary"),e.addEventListener("keydown",i=>this.__onCancelButtonKeyDown(i)),Ce(e,"tap",this._cancel.bind(this)),this._cancelButton=e}})),this.__initMonthScroller(),this.__initYearScroller()}reset(){this._closeYearScroller(),this._toggleAnimateClass(!0)}focusCancel(){this._cancelButton.focus()}scrollToDate(e,i){const r=this.__useSubMonthScrolling?this._calculateWeekScrollOffset(e):0;this._scrollToPosition(this._differenceInMonths(e,this._originDate)+r,i),this._monthScroller.forceUpdate()}__initMonthScroller(){this.addController(new we(this,"months","vaadin-date-picker-month-scroller",{observe:!1,initializer:e=>{e.addEventListener("custom-scroll",()=>{this._onMonthScroll()}),e.addEventListener("touchstart",()=>{this._onMonthScrollTouchStart()}),e.addEventListener("keydown",i=>{this.__onMonthCalendarKeyDown(i)}),e.addEventListener("init-done",()=>{const i=[...this.querySelectorAll("vaadin-month-calendar")];i.forEach(r=>{r.addEventListener("selected-date-changed",o=>{this.selectedDate=o.detail.value})}),this.calendars=i}),this._monthScroller=e}}))}__initYearScroller(){this.addController(new we(this,"years","vaadin-date-picker-year-scroller",{observe:!1,initializer:e=>{e.setAttribute("aria-hidden","true"),Ce(e,"tap",i=>{this._onYearTap(i)}),e.addEventListener("custom-scroll",()=>{this._onYearScroll()}),e.addEventListener("touchstart",()=>{this._onYearScrollTouchStart()}),e.addEventListener("init-done",()=>{this.years=[...this.querySelectorAll("vaadin-date-picker-year")]}),this._yearScroller=e}}))}__updateCancelButton(e,i){e&&(e.textContent=i&&i.cancel)}__updateTodayButton(e,i,r,o){e&&(e.textContent=i&&i.today,e.disabled=!this._isTodayAllowed(r,o))}__updateCalendars(e,i,r,o,n,a,l,d,c){e&&e.length&&e.forEach(h=>{h.i18n=i,h.minDate=r,h.maxDate=o,h.focusedDate=a,h.selectedDate=n,h.showWeekNumbers=l,h.ignoreTaps=d,c?h.setAttribute("theme",c):h.removeAttribute("theme")})}__updateYears(e,i,r){e&&e.length&&e.forEach(o=>{o.selectedDate=i,r?o.setAttribute("theme",r):o.removeAttribute("theme")})}_selectDate(e){this.selectedDate=e,this.dispatchEvent(new CustomEvent("date-selected",{detail:{date:e},bubbles:!0,composed:!0}))}_desktopModeChanged(e){this.toggleAttribute("desktop",e)}_focusedDateChanged(e){this.revealDate(e)}revealDate(e,i=!0){if(!e)return;const r=this._differenceInMonths(e,this._originDate);if(this.__useSubMonthScrolling){const d=this._calculateWeekScrollOffset(e);this._scrollToPosition(r+d,i);return}const o=this._monthScroller.position>r,a=Math.max(this._monthScroller.itemHeight,this._monthScroller.clientHeight-this._monthScroller.bufferOffset*2)/this._monthScroller.itemHeight,l=this._monthScroller.position+a-1<r;o?this._scrollToPosition(r,i):l&&this._scrollToPosition(r-a+1,i)}_calculateWeekScrollOffset(e){const i=new Date(0,0);i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()),i.setDate(1);let r=0;for(;i.getDate()<e.getDate();)i.setDate(i.getDate()+1),i.getDay()===this.i18n.firstDayOfWeek&&(r+=1);return r/6}_initialPositionChanged(e){this._monthScroller&&this._yearScroller&&(this._monthScroller.active=!0,this._yearScroller.active=!0),this.scrollToDate(e)}_repositionYearScroller(){const e=this._monthScroller.position;this._visibleMonthIndex=Math.floor(e),this._yearScroller.position=(e+this._originDate.getMonth())/12}_repositionMonthScroller(){this._monthScroller.position=this._yearScroller.position*12-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this._monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>{this._notTapping=!0},300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=G.debounce(this._debouncer,Ae.after(300),()=>{this._ignoreTaps=!1})}_formatDisplayed(e,i,r){return e&&i&&typeof i.formatDate=="function"?i.formatDate(Sc(e)):r}_onTodayTap(){const e=new Date;Math.abs(this._monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this._selectDate(e),this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){const r=(e.detail.y-(this._yearScroller.getBoundingClientRect().top+this._yearScroller.clientHeight/2))/this._yearScroller.itemHeight;this._scrollToPosition(this._monthScroller.position+r*12,!0)}}_scrollToPosition(e,i){if(this._targetPosition!==void 0){this._targetPosition=e;return}if(!i){this._monthScroller.position=e,this._targetPosition=void 0,this._repositionYearScroller(),this.__tryFocusDate();return}this._targetPosition=e;let r;this._revealPromise=new Promise(d=>{r=d});const o=(d,c,h,f)=>(d/=f/2,d<1?h/2*d*d+c:(d-=1,-h/2*(d*(d-2)-1)+c));let n=0;const a=this._monthScroller.position,l=d=>{n||(n=d);const c=d-n;if(c<this.scrollDuration){const h=o(c,a,this._targetPosition-a,this.scrollDuration);this._monthScroller.position=h,window.requestAnimationFrame(l)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:a}})),this._monthScroller.position=this._targetPosition,this._targetPosition=void 0,r(),this._revealPromise=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(l)}_limit(e,i){return Math.min(i.max,Math.max(i.min,e))}_handleTrack(e){if(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)return;Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);const i=this._translateX+e.detail.ddx;this._translateX=this._limit(i,{min:0,max:this._yearScrollerWidth})}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller();break}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this._monthScroller.style.transform=`translateX(${e-this._yearScrollerWidth}px)`,this._yearScroller.style.transform=`translateX(${e}px)`)}_yearAfterXMonths(e){return Tc(e).getFullYear()}_differenceInMonths(e,i){return(e.getFullYear()-i.getFullYear())*12-i.getMonth()+e.getMonth()}_clear(){this._selectDate("")}_close(){this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}__toggleDate(e){je(e,this.selectedDate)?(this._clear(),this.focusedDate=e):this._selectDate(e)}__onMonthCalendarKeyDown(e){let i=!1;switch(e.key){case"ArrowDown":this._moveFocusByDays(7),i=!0;break;case"ArrowUp":this._moveFocusByDays(-7),i=!0;break;case"ArrowRight":this._moveFocusByDays(this.__isRTL?-1:1),i=!0;break;case"ArrowLeft":this._moveFocusByDays(this.__isRTL?1:-1),i=!0;break;case"Enter":this._selectDate(this.focusedDate),this._close(),i=!0;break;case" ":this.__toggleDate(this.focusedDate),i=!0;break;case"Home":this._moveFocusInsideMonth(this.focusedDate,"minDate"),i=!0;break;case"End":this._moveFocusInsideMonth(this.focusedDate,"maxDate"),i=!0;break;case"PageDown":this._moveFocusByMonths(e.shiftKey?12:1),i=!0;break;case"PageUp":this._moveFocusByMonths(e.shiftKey?-12:-1),i=!0;break;case"Tab":this._onTabKeyDown(e,"calendar");break}i&&(e.preventDefault(),e.stopPropagation())}_onTabKeyDown(e,i){switch(e.stopPropagation(),i){case"calendar":e.shiftKey&&(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusCancel():this.__focusInput());break;case"today":e.shiftKey&&(e.preventDefault(),this.focusDateElement());break;case"cancel":e.shiftKey||(e.preventDefault(),this.hasAttribute("fullscreen")?this.focusDateElement():this.__focusInput());break}}__onTodayButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"today")}__onCancelButtonKeyDown(e){e.key==="Tab"&&this._onTabKeyDown(e,"cancel")}__focusInput(){this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))}__tryFocusDate(){if(this.__pendingDateFocus){const i=this.focusableDateElement;i&&je(i.date,this.__pendingDateFocus)&&(delete this.__pendingDateFocus,i.focus())}}async focusDate(e,i){const r=e||this.selectedDate||this.initialPosition||new Date;this.focusedDate=r,i||(this._focusedMonthDate=r.getDate()),await this.focusDateElement(!1)}async focusDateElement(e=!0){this.__pendingDateFocus=this.focusedDate,this.calendars.length||await new Promise(i=>{vc(this,()=>{Oc(),i()})}),e&&this.revealDate(this.focusedDate),this._revealPromise&&await this._revealPromise,this.__tryFocusDate()}_focusClosestDate(e){this.focusDate(Ac(e,[this.minDate,this.maxDate]))}_focusAllowedDate(e,i,r){this._dateAllowed(e)?this.focusDate(e,r):this._dateAllowed(this.focusedDate)?i>0?this.focusDate(this.maxDate):this.focusDate(this.minDate):this._focusClosestDate(this.focusedDate)}_getDateDiff(e,i){const r=new Date(0,0);return r.setFullYear(this.focusedDate.getFullYear()),r.setMonth(this.focusedDate.getMonth()+e),i&&r.setDate(this.focusedDate.getDate()+i),r}_moveFocusByDays(e){const i=this._getDateDiff(0,e);this._focusAllowedDate(i,e,!1)}_moveFocusByMonths(e){const i=this._getDateDiff(e),r=i.getMonth();this._focusedMonthDate||(this._focusedMonthDate=this.focusedDate.getDate()),i.setDate(this._focusedMonthDate),i.getMonth()!==r&&i.setDate(0),this._focusAllowedDate(i,e,!0)}_moveFocusInsideMonth(e,i){const r=new Date(0,0);r.setFullYear(e.getFullYear()),i==="minDate"?(r.setMonth(e.getMonth()),r.setDate(1)):(r.setMonth(e.getMonth()+1),r.setDate(0)),this._dateAllowed(r)?this.focusDate(r):this._dateAllowed(e)?this.focusDate(this[i]):this._focusClosestDate(e)}_dateAllowed(e,i=this.minDate,r=this.maxDate){return(!i||e>=i)&&(!r||e<=r)}_isTodayAllowed(e,i){const r=new Date,o=new Date(0,0);return o.setFullYear(r.getFullYear()),o.setMonth(r.getMonth()),o.setDate(r.getDate()),this._dateAllowed(o,e,i)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const jv=S`
  :host {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    outline: none;
  }

  [part='overlay-header'] {
    display: flex;
    flex-shrink: 0;
    flex-wrap: nowrap;
    align-items: center;
  }

  :host(:not([fullscreen])) [part='overlay-header'] {
    display: none;
  }

  [part='label'] {
    flex-grow: 1;
  }

  [hidden] {
    display: none !important;
  }

  [part='years-toggle-button'] {
    display: flex;
  }

  #scrollers {
    display: flex;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  :host([desktop]) ::slotted([slot='months']) {
    right: 50px;
    transform: none !important;
  }

  :host([desktop]) ::slotted([slot='years']) {
    transform: none !important;
  }

  :host(.animate) ::slotted([slot='months']),
  :host(.animate) ::slotted([slot='years']) {
    transition: all 200ms;
  }

  [part='toolbar'] {
    display: flex;
    justify-content: space-between;
    z-index: 2;
    flex-shrink: 0;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-date-picker-overlay-content",jv,{moduleId:"vaadin-date-picker-overlay-content-styles"});class Yv extends Wv(ht(ve(ct(ie)))){static get template(){return ae`
      <div part="overlay-header" on-touchend="_preventDefault" aria-hidden="true">
        <div part="label">[[_formatDisplayed(selectedDate, i18n, label)]]</div>
        <div part="clear-button" hidden$="[[!selectedDate]]"></div>
        <div part="toggle-button"></div>

        <div part="years-toggle-button" hidden$="[[_desktopMode]]" aria-hidden="true">
          [[_yearAfterXMonths(_visibleMonthIndex)]]
        </div>
      </div>

      <div id="scrollers">
        <slot name="months"></slot>
        <slot name="years"></slot>
      </div>

      <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
        <slot name="today-button"></slot>
        <slot name="cancel-button"></slot>
      </div>
    `}static get is(){return"vaadin-date-picker-overlay-content"}ready(){super.ready(),this.setAttribute("role","dialog"),this._addListeners(),this._initControllers()}}Z(Yv);/**
 * @license
 * Copyright (c) 2021 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class Gv{constructor(t){this.host=t,t.addEventListener("opened-changed",()=>{t.opened||this.__setVirtualKeyboardEnabled(!1)}),t.addEventListener("blur",()=>this.__setVirtualKeyboardEnabled(!0)),t.addEventListener("touchstart",()=>this.__setVirtualKeyboardEnabled(!0))}__setVirtualKeyboardEnabled(t){this.host.inputElement&&(this.host.inputElement.inputMode=t?"":"none")}}/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const qv=s=>class extends hn(ht(lc(pc(Ks(s))))){static get properties(){return{_selectedDate:{type:Object,sync:!0},_focusedDate:{type:Object,sync:!0},value:{type:String,notify:!0,value:"",sync:!0},initialPosition:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged",sync:!0},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean,value:!1,sync:!0},_fullscreen:{type:Boolean,value:!1,sync:!0},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},i18n:{type:Object,sync:!0,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,today:"Today",cancel:"Cancel",referenceDate:"",formatDate(e){const i=String(e.year).replace(/\d+/u,r=>"0000".substr(r.length)+r);return[e.month+1,e.day,i].join("/")},parseDate(e){const i=e.split("/"),r=new Date;let o,n=r.getMonth(),a=r.getFullYear();if(i.length===3){if(n=parseInt(i[0])-1,o=parseInt(i[1]),a=parseInt(i[2]),i[2].length<3&&a>=0){const l=this.referenceDate?ni(this.referenceDate):new Date;a=vv(l,a,n,o)}}else i.length===2?(n=parseInt(i[0])-1,o=parseInt(i[1])):i.length===1&&(o=parseInt(i[0]));if(o!==void 0)return{day:o,month:n,year:a}},formatTitle:(e,i)=>`${e} ${i}`})},min:{type:String,sync:!0},max:{type:String,sync:!0},_minDate:{type:Date,computed:"__computeMinOrMaxDate(min)",sync:!0},_maxDate:{type:Date,computed:"__computeMinOrMaxDate(max)",sync:!0},_noInput:{type:Boolean,computed:"_isNoInput(inputElement, _fullscreen, _ios, i18n, opened, autoOpenDisabled)"},_ios:{type:Boolean,value:Ss},_focusOverlayOnOpen:Boolean,_overlayContent:{type:Object,sync:!0},_hasInputValue:{type:Boolean}}}static get observers(){return["_selectedDateChanged(_selectedDate, i18n)","_focusedDateChanged(_focusedDate, i18n)","__updateOverlayContent(_overlayContent, i18n, label, _minDate, _maxDate, _focusedDate, _selectedDate, showWeekNumbers)","__updateOverlayContentTheme(_overlayContent, _theme)","__updateOverlayContentFullScreen(_overlayContent, _fullscreen)"]}static get constraints(){return[...super.constraints,"min","max"]}constructor(){super(),this._boundOnClick=this._onClick.bind(this),this._boundOnScroll=this._onScroll.bind(this),this._boundOverlayRenderer=this._overlayRenderer.bind(this)}get _inputElementValue(){return super._inputElementValue}set _inputElementValue(e){super._inputElementValue=e,this._hasInputValue=!1}get clearElement(){return null}get _nativeInput(){return this.inputElement?this.inputElement.focusElement||this.inputElement:null}get __unparsableValue(){return!this._inputElementValue||this.__parseDate(this._inputElementValue)?"":this._inputElementValue}_onFocus(e){super._onFocus(e),this._noInput&&e.target.blur()}_onBlur(e){super._onBlur(e),this.opened||(this.__commitParsedOrFocusedDate(),document.hasFocus()&&this.validate())}ready(){super.ready(),this.addEventListener("click",this._boundOnClick),this.addController(new Mc(this._fullscreenMediaQuery,i=>{this._fullscreen=i})),this.addController(new Gv(this));const e=this.$.overlay;this._overlayElement=e,e.renderer=this._boundOverlayRenderer,this.addEventListener("mousedown",()=>this.__bringToFront()),this.addEventListener("touchstart",()=>this.__bringToFront())}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}open(){!this.disabled&&!this.readonly&&(this.opened=!0)}close(){this.$.overlay.close()}_overlayRenderer(e){if(e.firstChild)return;const i=document.createElement("vaadin-date-picker-overlay-content");e.appendChild(i),this._overlayContent=i,i.addEventListener("close",()=>{this._close()}),i.addEventListener("focus-input",this._focusAndSelect.bind(this)),i.addEventListener("date-tap",r=>{this.__commitDate(r.detail.date),this._close()}),i.addEventListener("date-selected",r=>{this.__commitDate(r.detail.date)}),i.addEventListener("focusin",()=>{this._keyboardActive&&this._setFocused(!0)}),i.addEventListener("focused-date-changed",r=>{this._focusedDate=r.detail.value}),i.addEventListener("click",r=>r.stopPropagation())}__parseDate(e){if(!this.i18n.parseDate)return;let i=this.i18n.parseDate(e);if(i&&(i=ni(`${i.year}-${i.month+1}-${i.day}`)),i&&!isNaN(i.getTime()))return i}__formatDate(e){if(this.i18n.formatDate)return this.i18n.formatDate(Sc(e))}checkValidity(){const e=this._inputElementValue,i=!e||!!this._selectedDate&&e===this.__formatDate(this._selectedDate),r=!this._selectedDate||Ni(this._selectedDate,this._minDate,this._maxDate);let o=!0;return this.inputElement&&(this.inputElement.checkValidity?o=this.inputElement.checkValidity():this.inputElement.validate&&(o=this.inputElement.validate())),i&&r&&o}_shouldSetFocus(e){return!this._shouldKeepFocusRing}_shouldRemoveFocus(e){return!this.opened}_setFocused(e){super._setFocused(e),this._shouldKeepFocusRing=e&&this._keyboardActive}__commitValueChange(){const e=this.__unparsableValue;this.__committedValue!==this.value?(this.validate(),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))):this.__committedUnparsableValue!==e&&(this.validate(),this.dispatchEvent(new CustomEvent("unparsable-change"))),this.__committedValue=this.value,this.__committedUnparsableValue=e}__commitDate(e){this.__keepCommittedValue=!0,this._selectedDate=e,this.__keepCommittedValue=!1,this.__commitValueChange()}_close(){this._focus(),this.close()}__bringToFront(){requestAnimationFrame(()=>{this.$.overlay.bringToFront()})}_isNoInput(e,i,r,o,n,a){return!e||i&&(!a||n)||r&&n||!o.parseDate}_formatISO(e){if(!(e instanceof Date))return"";const i=(c,h="00")=>(h+c).substr((h+c).length-h.length);let r="",o="0000",n=e.getFullYear();n<0?(n=-n,r="-",o="000000"):e.getFullYear()>=1e4&&(r="+",o="000000");const a=r+i(n,o),l=i(e.getMonth()+1),d=i(e.getDate());return[a,l,d].join("-")}_inputElementChanged(e){super._inputElementChanged(e),e&&(e.autocomplete="off",e.setAttribute("role","combobox"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded",!!this.opened),this._applyInputValue(this._selectedDate))}_openedChanged(e){this.inputElement&&this.inputElement.setAttribute("aria-expanded",e)}_selectedDateChanged(e,i){e===void 0||i===void 0||(this.__keepInputValue||this._applyInputValue(e),this.value=this._formatISO(e),this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1)}_focusedDateChanged(e,i){e===void 0||i===void 0||!this._ignoreFocusedDateChange&&!this._noInput&&this._applyInputValue(e)}_valueChanged(e,i){const r=ni(e);if(e&&!r){this.value=i;return}e?je(this._selectedDate,r)||(this._selectedDate=r,i!==void 0&&this.validate()):this._selectedDate=null,this.__keepCommittedValue||(this.__committedValue=this.value,this.__committedUnparsableValue=""),this._toggleHasValue(this._hasValue)}__updateOverlayContent(e,i,r,o,n,a,l,d){e&&(e.i18n=i,e.label=r,e.minDate=o,e.maxDate=n,e.focusedDate=a,e.selectedDate=l,e.showWeekNumbers=d)}__updateOverlayContentTheme(e,i){e&&(i?e.setAttribute("theme",i):e.removeAttribute("theme"))}__updateOverlayContentFullScreen(e,i){e&&e.toggleAttribute("fullscreen",i)}_onOverlayEscapePress(){this._focusedDate=this._selectedDate,this._closedByEscape=!0,this._close(),this._closedByEscape=!1}_onOverlayOpened(){const e=this._overlayContent;e.reset();const i=this._getInitialPosition();e.initialPosition=i;const r=e.focusedDate||i;e.scrollToDate(r),this._ignoreFocusedDateChange=!0,e.focusedDate=r,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this._focusOverlayOnOpen?(e.focusDateElement(),this._focusOverlayOnOpen=!1):this._focus();const o=this._nativeInput;this._noInput&&o&&(o.blur(),this._overlayContent.focusDateElement());const n=this._noInput?e:[o,e];this.__showOthers=bc(n)}_getInitialPosition(){const e=ni(this.initialPosition),i=this._selectedDate||this._overlayContent.initialPosition||e||new Date;return e||Ni(i,this._minDate,this._maxDate)?i:Ac(i,[this._minDate,this._maxDate])}__commitParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){const e=this._inputElementValue||"",i=this.__parseDate(e);i?this.__commitDate(i):(this.__keepInputValue=!0,this.__commitDate(null),this.__keepInputValue=!1)}else this._focusedDate&&this.__commitDate(this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){this.__showOthers&&(this.__showOthers(),this.__showOthers=null),window.removeEventListener("scroll",this._boundOnScroll,!0),this._closedByEscape&&this._applyInputValue(this._selectedDate),this.__commitParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),!this.value&&!this._keyboardActive&&this.validate()}_onScroll(e){(e.target===window||!this._overlayContent.contains(e.target))&&this._overlayContent._repositionYearScroller()}_focus(){this._noInput||this.inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputElementValue.length)}_applyInputValue(e){this._inputElementValue=e?this.__formatDate(e):""}_setSelectionRange(e,i){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,i)}_onChange(e){e.stopPropagation()}_onClick(e){this._isClearButton(e)||this._onHostClick(e)}_onHostClick(e){(!this.autoOpenDisabled||this._noInput)&&(e.preventDefault(),this.open())}_onClearButtonClick(e){e.preventDefault(),this.__commitDate(null)}_onKeyDown(e){switch(super._onKeyDown(e),this._noInput&&[9].indexOf(e.keyCode)===-1&&e.preventDefault(),e.key){case"ArrowDown":case"ArrowUp":e.preventDefault(),this.opened?this._overlayContent.focusDateElement():(this._focusOverlayOnOpen=!0,this.open());break;case"Tab":this.opened&&(e.preventDefault(),e.stopPropagation(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():this._overlayContent.focusDateElement());break}}_onEnter(e){this.opened?this.close():this.__commitParsedOrFocusedDate()}_onEscape(e){if(!this.opened){if(this.clearButtonVisible&&this.value){e.stopPropagation(),this._onClearButtonClick(e);return}this.inputElement.value===""?this.__commitDate(null):this._applyInputValue(this._selectedDate)}}_isClearButton(e){return e.composedPath()[0]===this.clearElement}_onInput(){if(!this.opened&&this._inputElementValue&&!this.autoOpenDisabled&&this.open(),this._inputElementValue){const e=this.__parseDate(this._inputElementValue);e&&(this._ignoreFocusedDateChange=!0,je(e,this._focusedDate)||(this._focusedDate=e),this._ignoreFocusedDateChange=!1)}}__computeMinOrMaxDate(e){return ni(e)}};/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Kv=S`
  :host([opened]) {
    pointer-events: auto;
  }

  :host([dir='rtl']) [part='input-field'] {
    direction: ltr;
  }

  :host([dir='rtl']) [part='input-field'] ::slotted(input)::placeholder {
    direction: rtl;
    text-align: left;
  }
`;/**
 * @license
 * Copyright (c) 2016 - 2023 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */F("vaadin-date-picker",[an,Kv],{moduleId:"vaadin-date-picker-styles"});class Xv extends qv(fc(ve(qe(ie)))){static get is(){return"vaadin-date-picker"}static get template(){return ae`
      <div class="vaadin-date-picker-container">
        <div part="label">
          <slot name="label"></slot>
          <span part="required-indicator" aria-hidden="true" on-click="focus"></span>
        </div>

        <vaadin-input-container
          part="input-field"
          readonly="[[readonly]]"
          disabled="[[disabled]]"
          invalid="[[invalid]]"
          theme$="[[_theme]]"
        >
          <slot name="prefix" slot="prefix"></slot>
          <slot name="input"></slot>
          <div id="clearButton" part="clear-button" slot="suffix" aria-hidden="true"></div>
          <div part="toggle-button" slot="suffix" aria-hidden="true" on-click="_toggle"></div>
        </vaadin-input-container>

        <div part="helper-text">
          <slot name="helper"></slot>
        </div>

        <div part="error-message">
          <slot name="error-message"></slot>
        </div>
      </div>

      <vaadin-date-picker-overlay
        id="overlay"
        fullscreen$="[[_fullscreen]]"
        theme$="[[_theme]]"
        opened="{{opened}}"
        on-vaadin-overlay-escape-press="_onOverlayEscapePress"
        on-vaadin-overlay-open="_onOverlayOpened"
        on-vaadin-overlay-closing="_onOverlayClosed"
        restore-focus-on-close
        restore-focus-node="[[inputElement]]"
      ></vaadin-date-picker-overlay>

      <slot name="tooltip"></slot>
    `}get clearElement(){return this.$.clearButton}ready(){super.ready(),this.addController(new ln(this,e=>{this._setInputElement(e),this._setFocusElement(e),this.stateTarget=e,this.ariaTarget=e})),this.addController(new cn(this.inputElement,this._labelController)),this._tooltipController=new Ui(this),this.addController(this._tooltipController),this._tooltipController.setPosition("top"),this._tooltipController.setAriaTarget(this.inputElement),this._tooltipController.setShouldShow(e=>!e.opened),this.shadowRoot.querySelector('[part="toggle-button"]').addEventListener("mousedown",e=>e.preventDefault()),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this))}_onVaadinOverlayClose(t){t.detail.sourceEvent&&t.detail.sourceEvent.composedPath().includes(this)&&t.preventDefault()}_toggle(t){t.stopPropagation(),this.$.overlay.opened?this.close():this.open()}_openedChanged(t){super._openedChanged(t),this.$.overlay.positionTarget=this.shadowRoot.querySelector('[part="input-field"]'),this.$.overlay.noVerticalOverlap=!0}}Z(Xv);const Wi=s=>(Dh("data-v-c27b89f5"),s=s(),Oh(),s),Jv=Wi(()=>J("h2",null,"this is home page also is a Web Component",-1)),Qv={theme:"spacing",class:"filter-bar"},Zv=["value"],eb=["value"],tb=["value"],ib=Wi(()=>J("vaadin-date-picker",{label:"Start date"},null,-1)),sb=["items"],rb=Wi(()=>J("vaadin-grid-column",{path:"name",header:"Name"},null,-1)),ob=Wi(()=>J("vaadin-grid-column",{path:"age",header:"Age"},null,-1)),nb=Wi(()=>J("vaadin-grid-column",{path:"email",header:"Email"},null,-1)),ab=[rb,ob,nb],lb={class:"pagination-bar"},db=["disabled"],cb=["disabled"],hb=[".opened"],Rr=10,ub=Li({__name:"HomePage.ce",setup(s){const t=yt("I am a component-type Web Component, and my parent page is the Home Page."),e=yt(!1),i=()=>{e.value=!1},r=yt({name:"",minAge:null,maxAge:null}),o=yt([]),n=yt(1),a=cs(()=>o.value.filter(T=>{const z=r.value.name?T.name.includes(r.value.name):!0,M=r.value.minAge!==null?T.age>=r.value.minAge:!0,V=r.value.maxAge!==null?T.age<=r.value.maxAge:!0;return z&&M&&V})),l=cs(()=>{const T=(n.value-1)*Rr,z=n.value*Rr;return a.value.slice(T,z)}),d=cs(()=>Math.ceil(a.value.length/Rr)),c=()=>{n.value=1},h=()=>{n.value>1&&n.value--},f=()=>{n.value<d.value&&n.value++},_=T=>{r.value.name=T.target.value},E=T=>{const z=T.target.value;r.value.minAge=z?parseInt(z):null},P=T=>{const z=T.target.value;r.value.maxAge=z?parseInt(z):null};for(let T=1;T<=100;T++)o.value.push({name:`Name ${T}`,age:Math.floor(Math.random()*50)+20,email:`name${T}@example.com`});const L=()=>{e.value=!0};return(T,z)=>{const M=Ol("child-com");return $i(),Bs(Ie,null,[Jv,Me(M,{title:t.value},null,8,["title"]),J("vaadin-horizontal-layout",Qv,[J("vaadin-text-field",{label:"Name",value:r.value.name,onInput:_},null,40,Zv),J("vaadin-number-field",{label:"Min Age",value:r.value.minAge,onInput:E},null,40,eb),J("vaadin-number-field",{label:"Max Age",value:r.value.maxAge,onInput:P},null,40,tb),ib,J("vaadin-button",{theme:"primary",onClick:c},"Apply Filters"),J("vaadin-button",{theme:"primary",onClick:L},"open Dialog")]),J("vaadin-grid",{items:l.value,class:"data-grid"},ab,8,sb),J("div",lb,[J("vaadin-button",{onClick:h,disabled:n.value===1},"Previous",8,db),J("span",null,"Page "+Nr(n.value)+" of "+Nr(d.value),1),J("vaadin-button",{onClick:f,disabled:n.value===d.value},"Next",8,cb)]),J("vaadin-confirm-dialog",{header:'Delete "Report Q4"?',"cancel-button-visible":"","confirm-text":"Delete","confirm-theme":"error primary",".opened":e.value,onConfirm:i,onCancel:z[0]||(z[0]=()=>{e.value=!1})}," There are unsaved changes. Do you want to discard or save them? ",40,hb)],64)}}}),pb=".filter-bar[data-v-c27b89f5]{display:flex;align-items:flex-end;margin-bottom:10px}.pagination-bar[data-v-c27b89f5]{display:flex;justify-content:center;align-items:center;margin-top:10px}",fb=Ys(ub,[["styles",[pb]],["__scopeId","data-v-c27b89f5"]]),mb=J("h2",null,"this is about page also is an Web Component",-1),_b=Li({__name:"AboutPage.ce",setup(s){const t=yt("I am a component-type Web Component, and my parent page is the About Page.");return(e,i)=>{const r=Ol("child-com");return $i(),Bs(Ie,null,[mb,Me(r,{title:t.value},null,8,["title"])],64)}}}),gb={},vb={style:{"text-align":"center"}},bb=J("h1",null,"404",-1),yb=J("h2",null,"Page not found",-1),xb=[bb,yb];function Cb(s,t){return $i(),Bs("div",vb,xb)}const wb=Ys(gb,[["render",Cb]]),Eb={class:"title"},Ab=Li({__name:"ChildCom.ce",props:{title:{type:String,default:"Web Component"}},setup(s){const t=s;return(e,i)=>($i(),Bs("h4",Eb,Nr(t.title),1))}}),Sb=".title[data-v-3b79eb2a]{color:#f60}",Tb=Ys(Ab,[["styles",[Sb]],["__scopeId","data-v-3b79eb2a"]]),Pb=()=>{customElements.define("my-app",ei(qm)),customElements.define("home-page",ei(fb)),customElements.define("about-page",ei(_b)),customElements.define("page-not-found",ei(wb)),customElements.define("child-com",ei(Tb))};Pb();

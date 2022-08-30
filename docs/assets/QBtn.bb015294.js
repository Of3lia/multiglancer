import{a as i,a5 as z,c as U,h as b,a4 as ne,a6 as ae,K as M,a7 as re,a8 as ue,z as X,a9 as le,v as F,g as Y,d as ie,u as oe,r as K,o as se,Q as N,N as ce,F as de,s as C,T as fe,B as ve}from"./index.58722f7d.js";const ge={size:{type:[Number,String],default:"1em"},color:String};function me(e){return{cSize:i(()=>e.size in z?`${z[e.size]}px`:e.size),classes:i(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var be=U({name:"QSpinner",props:{...ge,thickness:{type:Number,default:5}},setup(e){const{cSize:n,classes:t}=me(e);return()=>b("svg",{class:t.value+" q-spinner-mat",width:n.value,height:n.value,viewBox:"25 25 50 50"},[b("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function he(e,n){const t=e.style;for(const u in n)t[u]=n[u]}function Oe(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const n=ne(e)===!0?e.value:e;if(n)return n.$el||n}function ye(e,n=250){let t=!1,u;return function(){return t===!1&&(t=!0,setTimeout(()=>{t=!1},n),u=e.apply(this,arguments)),u}}function I(e,n,t,u){t.modifiers.stop===!0&&X(e);const l=t.modifiers.color;let f=t.modifiers.center;f=f===!0||u===!0;const v=document.createElement("span"),d=document.createElement("span"),m=le(e),{left:E,top:L,width:S,height:p}=n.getBoundingClientRect(),r=Math.sqrt(S*S+p*p),q=r/2,g=`${(S-r)/2}px`,o=f?g:`${m.left-E-q}px`,s=`${(p-r)/2}px`,h=f?s:`${m.top-L-q}px`;d.className="q-ripple__inner",he(d,{height:`${r}px`,width:`${r}px`,transform:`translate3d(${o},${h},0) scale3d(.2,.2,1)`,opacity:0}),v.className=`q-ripple${l?" text-"+l:""}`,v.setAttribute("dir","ltr"),v.appendChild(d),n.appendChild(v);const $=()=>{v.remove(),clearTimeout(k)};t.abort.push($);let k=setTimeout(()=>{d.classList.add("q-ripple__inner--enter"),d.style.transform=`translate3d(${g},${s},0) scale3d(1,1,1)`,d.style.opacity=.2,k=setTimeout(()=>{d.classList.remove("q-ripple__inner--enter"),d.classList.add("q-ripple__inner--leave"),d.style.opacity=0,k=setTimeout(()=>{v.remove(),t.abort.splice(t.abort.indexOf($),1)},275)},250)},50)}function Q(e,{modifiers:n,value:t,arg:u}){const l=Object.assign({},e.cfg.ripple,n,t);e.modifiers={early:l.early===!0,stop:l.stop===!0,center:l.center===!0,color:l.color||u,keyCodes:[].concat(l.keyCodes||13)}}var ke=ae({name:"ripple",beforeMount(e,n){const t=n.instance.$.appContext.config.globalProperties.$q.config||{};if(t.ripple===!1)return;const u={cfg:t,enabled:n.value!==!1,modifiers:{},abort:[],start(l){u.enabled===!0&&l.qSkipRipple!==!0&&l.type===(u.modifiers.early===!0?"pointerdown":"click")&&I(l,e,u,l.qKeyEvent===!0)},keystart:ye(l=>{u.enabled===!0&&l.qSkipRipple!==!0&&M(l,u.modifiers.keyCodes)===!0&&l.type===`key${u.modifiers.early===!0?"down":"up"}`&&I(l,e,u,!0)},300)};Q(u,n),e.__qripple=u,re(u,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,n){if(n.oldValue!==n.value){const t=e.__qripple;t!==void 0&&(t.enabled=n.value!==!1,t.enabled===!0&&Object(n.value)===n.value&&Q(t,n))}},beforeUnmount(e){const n=e.__qripple;n!==void 0&&(n.abort.forEach(t=>{t()}),ue(n,"main"),delete e._qripple)}});const G={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},pe=Object.keys(G),qe={align:{type:String,validator:e=>pe.includes(e)}};function xe(e){return i(()=>{const n=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${G[n]}`})}function Le(e){return e.appContext.config.globalProperties.$router!==void 0}function V(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function D(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function Se(e,n){for(const t in n){const u=n[t],l=e[t];if(typeof u=="string"){if(u!==l)return!1}else if(Array.isArray(l)===!1||l.length!==u.length||u.some((f,v)=>f!==l[v]))return!1}return!0}function H(e,n){return Array.isArray(n)===!0?e.length===n.length&&e.every((t,u)=>t===n[u]):e.length===1&&e[0]===n}function Ee(e,n){return Array.isArray(e)===!0?H(e,n):Array.isArray(n)===!0?H(n,e):e===n}function $e(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const t in e)if(Ee(e[t],n[t])===!1)return!1;return!0}const Ce={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Re(e){const n=Y(),{props:t,proxy:u}=n,l=Le(n),f=i(()=>t.disable!==!0&&t.href!==void 0),v=i(()=>l===!0&&t.disable!==!0&&f.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),d=i(()=>{if(v.value===!0)try{return u.$router.resolve(t.to)}catch{}return null}),m=i(()=>d.value!==null),E=i(()=>f.value===!0||m.value===!0),L=i(()=>t.type==="a"||E.value===!0?"a":t.tag||e||"div"),S=i(()=>f.value===!0?{href:t.href,target:t.target}:m.value===!0?{href:d.value.href,target:t.target}:{}),p=i(()=>{if(m.value===!1)return null;const{matched:s}=d.value,{length:h}=s,$=s[h-1];if($===void 0)return-1;const k=u.$route.matched;if(k.length===0)return-1;const _=k.findIndex(D.bind(null,$));if(_>-1)return _;const A=V(s[h-2]);return h>1&&V($)===A&&k[k.length-1].path!==A?k.findIndex(D.bind(null,s[h-2])):_}),r=i(()=>m.value===!0&&p.value>-1&&Se(u.$route.params,d.value.params)),q=i(()=>r.value===!0&&p.value===u.$route.matched.length-1&&$e(u.$route.params,d.value.params)),g=i(()=>m.value===!0?q.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":r.value===!0?` ${t.activeClass}`:"":"");function o(s){return t.disable===!0||s.metaKey||s.altKey||s.ctrlKey||s.shiftKey||s.__qNavigate!==!0&&s.defaultPrevented===!0||s.button!==void 0&&s.button!==0||t.target==="_blank"?!1:(F(s),u.$router[t.replace===!0?"replace":"push"](t.to).catch(h=>h))}return{hasRouterLink:m,hasHrefLink:f,hasLink:E,linkTag:L,linkRoute:d,linkIsActive:r,linkIsExactActive:q,linkClass:g,linkProps:S,navigateToRouterLink:o}}const W={none:0,xs:4,sm:8,md:16,lg:24,xl:32},we={xs:8,sm:10,md:14,lg:20,xl:24},Be=["button","submit","reset"],_e=/[^\s]\/[^\s]/,Pe={...oe,...Ce,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,square:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...qe.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function Te(e){const n=ie(e,we),t=xe(e),{hasRouterLink:u,hasLink:l,linkTag:f,linkProps:v,navigateToRouterLink:d}=Re("button"),m=i(()=>{const o=e.fab===!1&&e.fabMini===!1?n.value:{};return e.padding!==void 0?Object.assign({},o,{padding:e.padding.split(/\s+/).map(s=>s in W?W[s]+"px":s).join(" "),minWidth:"0",minHeight:"0"}):o}),E=i(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),L=i(()=>e.disable!==!0&&e.loading!==!0),S=i(()=>L.value===!0?e.tabindex||0:-1),p=i(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),r=i(()=>{const o={tabindex:S.value};return l.value===!0?Object.assign(o,v.value):Be.includes(e.type)===!0&&(o.type=e.type),f.value==="a"?(e.disable===!0?o["aria-disabled"]="true":o.href===void 0&&(o.role="button"),u.value!==!0&&_e.test(e.type)===!0&&(o.type=e.type)):e.disable===!0&&(o.disabled="",o["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(o,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),o}),q=i(()=>{let o;e.color!==void 0?e.flat===!0||e.outline===!0?o=`text-${e.textColor||e.color}`:o=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(o=`text-${e.textColor}`);const s=e.round===!0?"round":`rectangle${E.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${p.value} q-btn--${s}`+(o!==void 0?" "+o:"")+(L.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),g=i(()=>t.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:q,style:m,innerClasses:g,attributes:r,hasRouterLink:u,hasLink:l,linkTag:f,navigateToRouterLink:d,isActionable:L}}const{passiveCapture:y}=ve;let R=null,w=null,B=null;var Me=U({name:"QBtn",props:{...Pe,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:n,emit:t}){const{proxy:u}=Y(),{classes:l,style:f,innerClasses:v,attributes:d,hasRouterLink:m,hasLink:E,linkTag:L,navigateToRouterLink:S,isActionable:p}=Te(e),r=K(null),q=K(null);let g=null,o,s;const h=i(()=>e.label!==void 0&&e.label!==null&&e.label!==""),$=i(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:E.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),k=i(()=>({center:e.round})),_=i(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),A=i(()=>e.loading===!0?{onMousedown:T,onTouchstartPassive:T,onClick:T,onKeydown:T,onKeyup:T}:p.value===!0?{onClick:j,onKeydown:Z,onMousedown:te,onTouchstart:ee}:{onClick:C}),J=i(()=>({ref:r,class:"q-btn q-btn-item non-selectable no-outline "+l.value,style:f.value,...d.value,...A.value}));function j(a){if(r.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const c=document.activeElement;if(e.type==="submit"&&c!==document.body&&r.value.contains(c)===!1&&c.contains(r.value)===!1){r.value.focus();const O=()=>{document.removeEventListener("keydown",C,!0),document.removeEventListener("keyup",O,y),r.value!==null&&r.value.removeEventListener("blur",O,y)};document.addEventListener("keydown",C,!0),document.addEventListener("keyup",O,y),r.value.addEventListener("blur",O,y)}}if(m.value===!0){const c=()=>{a.__qNavigate=!0,S(a)};t("click",a,c),a.defaultPrevented!==!0&&c()}else t("click",a)}}function Z(a){r.value!==null&&(t("keydown",a),M(a,[13,32])===!0&&w!==r.value&&(w!==null&&P(),a.defaultPrevented!==!0&&(r.value.focus(),w=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("keyup",x,!0),r.value.addEventListener("blur",x,y)),C(a)))}function ee(a){r.value!==null&&(t("touchstart",a),a.defaultPrevented!==!0&&(R!==r.value&&(R!==null&&P(),R=r.value,g=a.target,g.addEventListener("touchcancel",x,y),g.addEventListener("touchend",x,y)),o=!0,clearTimeout(s),s=setTimeout(()=>{o=!1},200)))}function te(a){r.value!==null&&(a.qSkipRipple=o===!0,t("mousedown",a),a.defaultPrevented!==!0&&B!==r.value&&(B!==null&&P(),B=r.value,r.value.classList.add("q-btn--active"),document.addEventListener("mouseup",x,y)))}function x(a){if(r.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===r.value)){if(a!==void 0&&a.type==="keyup"){if(w===r.value&&M(a,[13,32])===!0){const c=new MouseEvent("click",a);c.qKeyEvent=!0,a.defaultPrevented===!0&&F(c),a.cancelBubble===!0&&X(c),r.value.dispatchEvent(c),C(a),a.qKeyEvent=!0}t("keyup",a)}P()}}function P(a){const c=q.value;a!==!0&&(R===r.value||B===r.value)&&c!==null&&c!==document.activeElement&&(c.setAttribute("tabindex",-1),c.focus()),R===r.value&&(g!==null&&(g.removeEventListener("touchcancel",x,y),g.removeEventListener("touchend",x,y)),R=g=null),B===r.value&&(document.removeEventListener("mouseup",x,y),B=null),w===r.value&&(document.removeEventListener("keyup",x,!0),r.value!==null&&r.value.removeEventListener("blur",x,y),w=null),r.value!==null&&r.value.classList.remove("q-btn--active")}function T(a){C(a),a.qSkipRipple=!0}return se(()=>{P(!0)}),Object.assign(u,{click:j}),()=>{let a=[];e.icon!==void 0&&a.push(b(N,{name:e.icon,left:e.stack===!1&&h.value===!0,role:"img","aria-hidden":"true"})),h.value===!0&&a.push(b("span",{class:"block"},[e.label])),a=ce(n.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(b(N,{name:e.iconRight,right:e.stack===!1&&h.value===!0,role:"img","aria-hidden":"true"}));const c=[b("span",{class:"q-focus-helper",ref:q})];return e.loading===!0&&e.percentage!==void 0&&c.push(b("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[b("span",{class:"q-btn__progress-indicator fit block",style:_.value})])),c.push(b("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+v.value},a)),e.loading!==null&&c.push(b(fe,{name:"q-transition--fade"},()=>e.loading===!0?[b("span",{key:"loading",class:"absolute-full flex flex-center"},n.loading!==void 0?n.loading():[b(be)])]:null)),de(b(L.value,J.value,c),[[ke,$.value,void 0,k.value]])}}});export{be as Q,Re as a,Me as b,he as c,Oe as g,Ce as u,Le as v};